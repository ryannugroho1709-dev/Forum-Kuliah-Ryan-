/* =====================================================================
   PENYIMPANAN KEMAJUAN BELAJAR (di perangkat masing-masing mahasiswa)
   Semua data disimpan di localStorage browser. Gunakan menu Profil →
   "Cadangkan" untuk memindahkan kemajuan ke perangkat lain.
   ===================================================================== */
window.Store = (function () {
  const KEY = "fk-uq.v1";
  const DEF = () => ({
    profil: null,
    set: { lang: "dual", tema: "auto", palet: (window.SITE && SITE.defaultPalette) || "zamrud", fontAr: "amiri", ukuran: 18, sfx: true, musik: null, vol: 0.45, gerak: true },
    baca: {}, skor: {}, tugas: {}, catatan: {}, tanda: [], srs: {},
    xp: 0, riwayat: [], lencana: {}, hari: {}, ujian: [], harian: {}, dilihat: {}
  });
  let s;
  try { s = Object.assign(DEF(), JSON.parse(localStorage.getItem(KEY) || "{}")); } catch (e) { s = DEF(); }
  s.set = Object.assign(DEF().set, s.set || {});
  let saveT = null;
  function save() { clearTimeout(saveT); saveT = setTimeout(() => { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }, 150); }
  function saveNow() { try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {} }
  window.addEventListener("pagehide", saveNow);

  /* ---------- Level & XP ---------- */
  const LEVELS = [
    { xp: 0, id: "Mubtadi'", ar: "مُبتدِئ" },
    { xp: 300, id: "Muta'allim", ar: "مُتعلِّم" },
    { xp: 700, id: "Thalibul 'Ilmi", ar: "طالب العلم" },
    { xp: 1200, id: "Mujidd", ar: "مُجِدّ" },
    { xp: 2000, id: "Mutqin", ar: "مُتقِن" },
    { xp: 3000, id: "Bahits", ar: "باحث" },
    { xp: 4500, id: "Muhaqqiq", ar: "مُحقِّق" },
    { xp: 6500, id: "Mudaqqiq", ar: "مُدقِّق" }
  ];
  function level(xp) {
    xp = xp == null ? s.xp : xp;
    let i = 0; while (i < LEVELS.length - 1 && xp >= LEVELS[i + 1].xp) i++;
    const cur = LEVELS[i], nxt = LEVELS[i + 1];
    return { no: i + 1, nama: cur, next: nxt, pct: nxt ? (xp - cur.xp) / (nxt.xp - cur.xp) : 1, sisa: nxt ? nxt.xp - xp : 0 };
  }
  const listeners = [];
  function onChange(fn) { listeners.push(fn); }
  function emit(kind, data) { listeners.forEach(f => { try { f(kind, data); } catch (e) {} }); }

  function addXP(n, ket) {
    if (!n) return;
    const before = level().no;
    s.xp += n;
    s.riwayat.unshift({ t: Date.now(), xp: n, ket });
    s.riwayat = s.riwayat.slice(0, 120);
    const d = hariIni(); d.xp = (d.xp || 0) + n;
    save();
    emit("xp", { n, ket });
    const after = level().no;
    if (after > before) emit("level", level());
    cekLencana();
  }

  /* ---------- Aktivitas harian & istiqamah (streak) ---------- */
  function hariIni() { const k = U.todayKey(); return (s.hari[k] = s.hari[k] || { menit: 0, xp: 0 }); }
  function catatWaktu(detik) { const d = hariIni(); d.menit = Math.round(((d.menit || 0) + detik / 60) * 10) / 10; save(); }
  function streak() {
    let n = 0; const d = new Date();
    if (!s.hari[U.todayKey(d)]) d.setDate(d.getDate() - 1);
    while (s.hari[U.todayKey(d)]) { n++; d.setDate(d.getDate() - 1); }
    return n;
  }

  /* ---------- Baca materi ---------- */
  function baca(key) { return s.baca[key] || {}; }
  function tandaiBaca(key, data) { s.baca[key] = Object.assign(s.baca[key] || {}, data, { terakhir: Date.now() }); save(); }
  function selesaiBaca(key) {
    const b = s.baca[key] || {};
    if (b.selesai) return false;
    tandaiBaca(key, { selesai: Date.now(), posisi: 1 });
    addXP(50, "Selesai membaca " + key);
    return true;
  }

  /* ---------- Skor latihan ---------- */
  function catatSkor(key, benar, total) {
    const old = s.skor[key] || { best: 0, kali: 0 };
    const naik = Math.max(0, benar - (old.best || 0));
    s.skor[key] = { best: Math.max(old.best || 0, benar), total, kali: (old.kali || 0) + 1, terakhir: Date.now(), last: benar };
    save();
    addXP(naik * 10 + 5, "Latihan " + key);
    if (total && benar === total) s.lencana.sempurna || beriLencana("sempurna");
    return { naik, xp: naik * 10 + 5 };
  }
  function skor(key) { return s.skor[key]; }

  /* ---------- Tugas (soal wajib) ---------- */
  function tugas(key) { return s.tugas[key] || {}; }
  function simpanTugas(key, data) {
    const old = s.tugas[key] || {};
    s.tugas[key] = Object.assign(old, data, { ts: Date.now() });
    save();
    if (data.nilai === 2 && !old.dapatXP) { s.tugas[key].dapatXP = true; addXP(15, "Tugas " + key); }
  }

  /* ---------- Muraja'ah (Leitner 5 kotak) ---------- */
  const JEDA = [0, 1, 2, 4, 8, 16];
  function srs(key) { return s.srs[key] || { box: 0, due: 0 }; }
  function nilaiKartu(key, hasil) { // hasil: 0 lupa, 1 ragu, 2 ingat
    const c = srs(key);
    let box = hasil === 2 ? Math.min(5, c.box + 1) : hasil === 1 ? Math.max(1, c.box) : 1;
    s.srs[key] = { box, due: U.dayNum() + JEDA[box], n: (c.n || 0) + 1 };
    s.dilihat.kartu = (s.dilihat.kartu || 0) + 1;
    const d = hariIni(); d.kartu = (d.kartu || 0) + 1;
    save();
    if ((d.kartu || 0) <= 60) addXP(2, "Muraja'ah");
  }

  /* ---------- Ujian & tantangan harian ---------- */
  function catatUjian(id, skorBenar, total, durasi) {
    const pct = Math.round(skorBenar / total * 100);
    const prev = s.ujian.filter(u => u.id === id).reduce((m, u) => Math.max(m, u.pct), 0);
    s.ujian.unshift({ id, benar: skorBenar, total, pct, durasi, ts: Date.now() });
    s.ujian = s.ujian.slice(0, 60);
    save();
    addXP(Math.max(0, pct - prev) * 2 + 20, "Ujian " + id);
    return pct;
  }
  function terbaikUjian(id) { return s.ujian.filter(u => u.id === id).reduce((m, u) => Math.max(m, u.pct), -1); }

  /* ---------- Lencana ---------- */
  const LENCANA = [
    { id: "pertama", ikon: "book", nama: "Langkah Pertama", ar: "الخطوة الأولى", ket: "Menyelesaikan bacaan pertemuan pertama." },
    { id: "separuh", ikon: "route", nama: "Separuh Perjalanan", ar: "نصف الطريق", ket: "Menyelesaikan 8 pertemuan." },
    { id: "khatam", ikon: "quran", nama: "Khatam Mata Kuliah", ar: "ختم المقرر", ket: "Menyelesaikan semua pertemuan satu mata kuliah." },
    { id: "sempurna", ikon: "target", nama: "Jawaban Sempurna", ar: "الإجابة التامة", ket: "Mendapat nilai 100% pada satu latihan." },
    { id: "tugas5", ikon: "pen", nama: "Pejuang Tugas", ar: "مجتهد الواجبات", ket: "Memahami 15 soal wajib (أسئلة الواجب)." },
    { id: "istiqamah3", ikon: "flame", nama: "Istiqamah 3 Hari", ar: "استقامة ثلاثة أيام", ket: "Belajar 3 hari berturut-turut." },
    { id: "istiqamah7", ikon: "flame", nama: "Istiqamah Sepekan", ar: "استقامة أسبوع", ket: "Belajar 7 hari berturut-turut." },
    { id: "istiqamah30", ikon: "moonStar", nama: "Istiqamah Sebulan", ar: "استقامة شهر", ket: "Belajar 30 hari berturut-turut." },
    { id: "murajaah", ikon: "cards", nama: "Ahli Muraja'ah", ar: "أهل المراجعة", ket: "Mengulang 100 kartu istilah." },
    { id: "uts", ikon: "medal", nama: "Lulus Simulasi UTS", ar: "اجتياز الاختبار النصفي", ket: "Nilai ≥ 70 pada simulasi UTS." },
    { id: "uas", ikon: "seal", nama: "Lulus Simulasi UAS", ar: "اجتياز الاختبار النهائي", ket: "Nilai ≥ 70 pada simulasi UAS." },
    { id: "fajar", ikon: "lantern", nama: "Penuntut Waktu Fajar", ar: "طالب السَّحَر", ket: "Belajar di waktu sahur/fajar (03.00–05.30)." },
    { id: "peta", ikon: "map", nama: "Penjelajah Peta Kitab", ar: "مستكشف خريطة الكتاب", ket: "Membuka peta konsep kitab." },
    { id: "tahan", ikon: "shield", nama: "Tahan Uji", ar: "الصامد", ket: "Menjawab 20 soal beruntun di mode Tahan Uji." },
    { id: "harian7", ikon: "sun", nama: "Tantangan 7 Hari", ar: "تحدي سبعة أيام", ket: "Menyelesaikan 7 tantangan harian." }
  ];
  function beriLencana(id) {
    if (s.lencana[id]) return;
    s.lencana[id] = Date.now();
    save();
    const L = LENCANA.find(l => l.id === id);
    if (L) emit("lencana", L);
  }
  function cekLencana() {
    const selesai = Object.values(s.baca).filter(b => b.selesai).length;
    if (selesai >= 1) beriLencana("pertama");
    if (selesai >= 8) beriLencana("separuh");
    (window.PROGRAM ? PROGRAM.semester : []).forEach(sm => sm.mk.forEach(mk => {
      const list = Kuliah.list(mk.id);
      if (list.length && list.length >= (mk.jumlah || list.length) && list.every(p => (s.baca[mk.id + "/" + p.no] || {}).selesai)) beriLencana("khatam");
    }));
    if (Object.values(s.tugas).filter(t => t.nilai === 2).length >= 15) beriLencana("tugas5");
    const st = streak();
    if (st >= 3) beriLencana("istiqamah3");
    if (st >= 7) beriLencana("istiqamah7");
    if (st >= 30) beriLencana("istiqamah30");
    if ((s.dilihat.kartu || 0) >= 100) beriLencana("murajaah");
    if (Object.keys(s.harian).filter(k => s.harian[k] && s.harian[k].selesai).length >= 7) beriLencana("harian7");
    const h = new Date().getHours() + new Date().getMinutes() / 60;
    if (h >= 3 && h <= 5.5 && s.riwayat.length) beriLencana("fajar");
  }

  /* ---------- Cadangan ---------- */
  function ekspor() { return JSON.stringify(Object.assign({ _app: "forum-kuliah-uq", _v: 1, _t: new Date().toISOString() }, s), null, 1); }
  function impor(json) {
    const d = JSON.parse(json);
    if (!d || d._app !== "forum-kuliah-uq") throw new Error("Berkas cadangan tidak dikenali.");
    delete d._app; delete d._v; delete d._t;
    s = Object.assign(DEF(), d); s.set = Object.assign(DEF().set, d.set || {});
    saveNow();
  }
  function reset() { localStorage.removeItem(KEY); s = DEF(); }

  return {
    get s() { return s; }, save, saveNow, onChange, emit,
    LEVELS, level, addXP, streak, catatWaktu, hariIni,
    baca, tandaiBaca, selesaiBaca, catatSkor, skor, tugas, simpanTugas,
    srs, nilaiKartu, catatUjian, terbaikUjian,
    LENCANA, beriLencana, cekLencana, ekspor, impor, reset
  };
})();
