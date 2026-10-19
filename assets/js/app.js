/* =====================================================================
   APLIKASI UTAMA — router, tampilan, dan pengaturan
   Alamat halaman memakai tanda pagar (#/...), sehingga website tetap
   berjalan walau dibuka langsung dari file index.html.
   ===================================================================== */
(function () {
  const { esc, bi, one, fmt, arFmt, arNum, $, $$, shuffle, pick } = U;
  const view = $("#view");
  const S = () => Store.s;
  const lab = (id, ar) => Render.label(id, ar);
  const n = x => U.lang === "ar" ? arNum(x) : x;
  const MKS = () => PROGRAM.semester.flatMap(s => s.mk.map(m => Object.assign({ semester: s.no }, m)));
  const mkById = id => MKS().find(m => m.id === id);
  const pKey = (mk, no) => mk + "/" + no;
  const HARI = [["Ahad", "الأحد"], ["Senin", "الاثنين"], ["Selasa", "الثلاثاء"], ["Rabu", "الأربعاء"], ["Kamis", "الخميس"], ["Jumat", "الجمعة"], ["Sabtu", "السبت"]];
  let cleanup = [];

  /* ===================== PENGATURAN TAMPILAN ===================== */
  function applySettings() {
    const st = S().set;
    U.lang = st.lang;
    const root = document.documentElement;
    root.dataset.palet = st.palet;
    root.dataset.theme = st.tema === "auto" ? (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light") : st.tema === "gelap" ? "dark" : "light";
    root.dataset.font = st.fontAr;
    root.dataset.lang = st.lang;
    root.style.setProperty("--fs", st.ukuran + "px");
    root.classList.toggle("no-motion", !st.gerak);
    Audio2.sfxOn = st.sfx;
    $$(".lang-sw button").forEach(b => b.classList.toggle("on", b.dataset.lang === st.lang));
    const meta = $('meta[name="theme-color"]'); if (meta) meta.content = root.dataset.theme === "dark" ? "#0b1714" : getComputedStyle(root).getPropertyValue("--c1").trim() || "#0d5c4b";
  }
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", () => S().set.tema === "auto" && applySettings());

  function setLang(l) { S().set.lang = l; Store.save(); applySettings(); Audio2.sfx("flip"); route(true); }

  /* ===================== KERANGKA APLIKASI ===================== */
  function chrome() {
    $("#appbar").innerHTML =
      '<a class="brand" href="#/" aria-label="Beranda">' + logo() + '<span class="brand-t"><b class="b-long">' + esc(SITE.brand) + '</b><b class="b-short">' + esc(SITE.brandShort || SITE.brand) + '</b><small lang="ar">' + SITE.brandAr + "</small></span></a>" +
      '<div class="bar-act">' +
      '<button class="icon-btn" data-go="#/cari" title="Cari">' + Icon("search") + "</button>" +
      '<div class="lang-sw" role="group" aria-label="Bahasa"><button data-lang="id" title="Bahasa Indonesia">ID</button><button data-lang="dual" title="Dua bahasa">' + Icon("language") + '</button><button data-lang="ar" title="العربية" lang="ar">ع</button></div>' +
      '<button class="icon-btn snd-btn" title="Backsound">' + Icon("headphones") + "</button>" +
      '<button class="icon-btn set-btn" title="Pengaturan">' + Icon("sliders") + "</button>" +
      '<a class="xp-pill" href="#/profil" title="Profil & rapor"><span class="lv-ring"></span><span class="xp-t"></span></a></div>';
    $("#tabbar").innerHTML = [["#/", "home", "Beranda", "الرئيسية"], ["#/program", "quran", "Kuliah", "المقررات"], ["#/arena", "trophy", "Arena", "الاختبارات"], ["#/murajaah", "cards", "Muraja'ah", "المراجعة"], ["#/profil", "user", "Profil", "ملفي"]]
      .map(t => '<a href="' + t[0] + '" data-tab="' + t[0] + '">' + Icon(t[1]) + '<span class="tb-id">' + t[2] + '</span><span class="tb-ar" lang="ar">' + t[3] + "</span></a>").join("");
    $$(".lang-sw button").forEach(b => b.onclick = () => setLang(b.dataset.lang));
    $(".snd-btn").onclick = () => openSheet("suara");
    $(".set-btn").onclick = () => openSheet("tampilan");
    $$("[data-go]").forEach(b => b.onclick = () => location.hash = b.dataset.go);
    updateXP();
  }
  function logo(cls) {
    return '<svg class="logo ' + (cls || "") + '" viewBox="0 0 48 48" aria-hidden="true"><g class="lg-star"><rect x="10" y="10" width="28" height="28" rx="2"/><rect x="10" y="10" width="28" height="28" rx="2" transform="rotate(45 24 24)"/></g>' +
      '<path class="lg-book" d="M24 20.5c-2.6-1.8-6-2.4-10-1.9v11.2c4-.5 7.4.1 10 1.9 2.6-1.8 6-2.4 10-1.9V18.6c-4-.5-7.4.1-10 1.9Z"/><path class="lg-spine" d="M24 20.5v11.2"/></svg>';
  }
  function updateXP() {
    const lv = Store.level(), pill = $(".xp-pill");
    if (!pill) return;
    pill.querySelector(".lv-ring").style.setProperty("--p", Math.round(lv.pct * 100));
    pill.querySelector(".lv-ring").textContent = n(lv.no);
    pill.querySelector(".xp-t").innerHTML = "<b>" + n(S().xp) + "</b> XP";
  }
  function activeTab(h) {
    const base = h === "#/" || h === "" ? "#/" : "#/" + (h.split("/")[1] || "");
    const map = { "#/mk": "#/program", "#/p": "#/program", "#/peta": "#/program", "#/istilah": "#/program", "#/jadwal": "#/program" };
    const t = map[base] || base;
    $$("#tabbar a").forEach(a => a.classList.toggle("on", a.dataset.tab === t));
  }

  /* ===================== LEMBAR PENGATURAN ===================== */
  function openSheet(tab) {
    const sh = $("#sheet"), st = S().set;
    const tr = Audio2.tracks;
    sh.innerHTML = '<div class="sheet-bg"></div><div class="sheet-card" role="dialog" aria-modal="true"><div class="sheet-grip"></div>' +
      '<div class="sheet-tabs"><button data-t="tampilan" class="' + (tab === "tampilan" ? "on" : "") + '">' + Icon("palette") + lab("Tampilan", "المظهر") + '</button><button data-t="suara" class="' + (tab === "suara" ? "on" : "") + '">' + Icon("headphones") + lab("Suara", "الصوت") + '</button><button data-t="fokus" class="' + (tab === "fokus" ? "on" : "") + '">' + Icon("timer") + lab("Waktu Fokus", "وقت التركيز") + "</button></div>" +
      '<div class="sheet-body" data-p="tampilan" ' + (tab !== "tampilan" ? "hidden" : "") + ">" +
      '<h4>' + lab("Bahasa materi", "لغة المحتوى") + '</h4><div class="seg" data-k="lang">' + [["id", "Indonesia"], ["dual", "Dua Bahasa"], ["ar", "العربية"]].map(o => '<button data-v="' + o[0] + '" class="' + (st.lang === o[0] ? "on" : "") + '">' + o[1] + "</button>").join("") + "</div>" +
      "<h4>" + lab("Tema", "السمة") + '</h4><div class="seg" data-k="tema">' + [["auto", "Otomatis"], ["terang", "Terang"], ["gelap", "Gelap"]].map(o => '<button data-v="' + o[0] + '" class="' + (st.tema === o[0] ? "on" : "") + '">' + o[1] + "</button>").join("") + "</div>" +
      "<h4>" + lab("Palet warna", "الألوان") + '</h4><div class="palets">' + SITE.palettes.map(p => '<button class="pal ' + (st.palet === p.id ? "on" : "") + '" data-pal="' + p.id + '"><span class="pal-sw">' + p.colors.map(c => '<i style="background:' + c + '"></i>').join("") + "</span><b>" + esc(p.name) + "</b><small>" + esc(p.desc) + "</small></button>").join("") + "</div>" +
      "<h4>" + lab("Huruf Arab", "الخط العربي") + '</h4><div class="seg" data-k="fontAr">' + [["amiri", "Amiri"], ["naskh", "Naskh"], ["scheherazade", "Scheherazade"], ["kufi", "Kufi"]].map(o => '<button data-v="' + o[0] + '" class="' + (st.fontAr === o[0] ? "on" : "") + '">' + o[1] + "</button>").join("") + "</div>" +
      "<h4>" + lab("Ukuran teks", "حجم الخط") + ' <span class="fs-v">' + st.ukuran + 'px</span></h4><input type="range" min="15" max="26" step="1" value="' + st.ukuran + '" class="fs-r" aria-label="Ukuran teks">' +
      '<label class="tgl"><input type="checkbox" class="gerak-c" ' + (st.gerak ? "checked" : "") + "><span></span>" + lab("Animasi & efek gerak", "الحركات") + "</label></div>" +
      '<div class="sheet-body" data-p="suara" ' + (tab !== "suara" ? "hidden" : "") + ">" +
      "<h4>" + lab("Backsound suasana", "الأصوات الخلفية") + '</h4><p class="muted sm">' + lab("Suara alam tanpa alat musik, dibuat langsung oleh browser.", "أصوات طبيعية بلا معازف") + '</p><div class="tracks"><button class="trk ' + (!Audio2.current ? "on" : "") + '" data-tr="">' + Icon("mute") + lab("Senyap", "صامت") + "</button>" + tr.map(t => '<button class="trk ' + (Audio2.current === t.id ? "on" : "") + '" data-tr="' + t.id + '">' + Icon(t.icon || "waves") + esc(t.label) + "</button>").join("") + "</div>" +
      "<h4>" + lab("Volume backsound", "مستوى الصوت") + '</h4><input type="range" min="0" max="1" step="0.05" value="' + st.vol + '" class="vol-r" aria-label="Volume">' +
      '<label class="tgl"><input type="checkbox" class="sfx-c" ' + (st.sfx ? "checked" : "") + "><span></span>" + lab("Efek suara (jawaban, kartu, lencana)", "المؤثرات الصوتية") + "</label></div>" +
      '<div class="sheet-body" data-p="fokus" ' + (tab !== "fokus" ? "hidden" : "") + ">" + fokusPanel() + "</div>" +
      '<button class="btn ghost sheet-close">' + Icon("x") + lab("Tutup", "إغلاق") + "</button></div>";
    sh.classList.add("open"); Audio2.sfx("open");
    const close = () => { sh.classList.remove("open"); setTimeout(() => sh.innerHTML = "", 300); };
    sh.querySelector(".sheet-bg").onclick = close; sh.querySelector(".sheet-close").onclick = close;
    sh.querySelectorAll(".sheet-tabs button").forEach(b => b.onclick = () => { sh.querySelectorAll(".sheet-tabs button").forEach(x => x.classList.toggle("on", x === b)); sh.querySelectorAll(".sheet-body").forEach(p => p.hidden = p.dataset.p !== b.dataset.t); Audio2.sfx("tap"); });
    sh.querySelectorAll(".seg").forEach(seg => seg.querySelectorAll("button").forEach(b => b.onclick = () => {
      seg.querySelectorAll("button").forEach(x => x.classList.toggle("on", x === b));
      S().set[seg.dataset.k] = b.dataset.v; Store.save(); applySettings(); Audio2.sfx("tap");
      if (seg.dataset.k === "lang") route(true);
    }));
    sh.querySelectorAll(".pal").forEach(b => b.onclick = () => { sh.querySelectorAll(".pal").forEach(x => x.classList.toggle("on", x === b)); S().set.palet = b.dataset.pal; Store.save(); applySettings(); Audio2.sfx("pop"); });
    const fr = sh.querySelector(".fs-r"); fr.oninput = () => { S().set.ukuran = +fr.value; sh.querySelector(".fs-v").textContent = fr.value + "px"; Store.save(); applySettings(); };
    sh.querySelector(".gerak-c").onchange = e => { S().set.gerak = e.target.checked; Store.save(); applySettings(); };
    sh.querySelectorAll(".trk").forEach(b => b.onclick = () => {
      sh.querySelectorAll(".trk").forEach(x => x.classList.toggle("on", x === b));
      if (b.dataset.tr) { Audio2.setVolume(S().set.vol); Audio2.play(b.dataset.tr); S().set.musik = b.dataset.tr; } else { Audio2.stop(); S().set.musik = null; }
      Store.save(); $(".snd-btn").classList.toggle("on", !!S().set.musik);
    });
    const vr = sh.querySelector(".vol-r"); vr.oninput = () => { S().set.vol = +vr.value; Audio2.setVolume(+vr.value); Store.save(); };
    sh.querySelector(".sfx-c").onchange = e => { S().set.sfx = e.target.checked; Store.save(); applySettings(); Audio2.sfx("good"); };
    bindFokus(sh);
  }

  /* ---------- Waktu fokus (pomodoro) ---------- */
  let fokus = { end: 0, t: null, menit: 25 };
  function fokusPanel() {
    const aktif = fokus.end > Date.now();
    return '<p class="muted sm">' + lab("Belajar fokus dengan jeda istirahat. Backsound bisa dinyalakan bersamaan.", "تعلَّم بتركيز مع فترات راحة") + "</p>" +
      '<div class="seg fk-m">' + [15, 25, 45, 60].map(m => '<button data-m="' + m + '" class="' + (fokus.menit === m ? "on" : "") + '">' + n(m) + " " + lab("menit", "دقيقة") + "</button>").join("") + "</div>" +
      '<div class="fk-big">' + (aktif ? Games.fmtTime((fokus.end - Date.now()) / 1000) : Games.fmtTime(fokus.menit * 60)) + "</div>" +
      '<button class="btn gold fk-go">' + (aktif ? Icon("pause") + lab("Hentikan", "إيقاف") : Icon("play") + lab("Mulai fokus", "ابدأ")) + "</button>";
  }
  function bindFokus(sh) {
    const box = sh.querySelector('[data-p="fokus"]');
    box.querySelectorAll(".fk-m button").forEach(b => b.onclick = () => { fokus.menit = +b.dataset.m; box.innerHTML = fokusPanel(); bindFokus(sh); });
    box.querySelector(".fk-go").onclick = () => {
      if (fokus.end > Date.now()) { fokus.end = 0; clearInterval(fokus.t); $("#fokus-chip").hidden = true; }
      else {
        fokus.end = Date.now() + fokus.menit * 60000; Audio2.sfx("open");
        clearInterval(fokus.t);
        fokus.t = setInterval(() => {
          const left = (fokus.end - Date.now()) / 1000, chip = $("#fokus-chip");
          chip.hidden = false; chip.innerHTML = Icon("timer") + Games.fmtTime(left);
          const big = $(".fk-big"); if (big) big.textContent = Games.fmtTime(left);
          if (left <= 0) { clearInterval(fokus.t); fokus.end = 0; chip.hidden = true; Audio2.sfx("level"); U.toast(Icon("moonStar") + " Waktu fokus selesai. Istirahat sejenak, lalu lanjutkan. بارك الله فيك", "gold", 6000); Store.addXP(20, "Sesi fokus"); }
        }, 1000);
      }
      box.innerHTML = fokusPanel(); bindFokus(sh);
    };
  }

  /* ===================== ROUTER ===================== */
  function parse() {
    const h = location.hash || "#/";
    const [path, qs] = h.slice(1).split("?");
    return { parts: path.split("/").filter(Boolean), q: new URLSearchParams(qs || ""), raw: h };
  }
  let lastRaw = "";
  function route(keepScroll) {
    cleanup.forEach(f => { try { f(); } catch (e) {} }); cleanup = [];
    if (window.speechSynthesis) speechSynthesis.cancel();
    const r = parse(), [a, b, c, d] = r.parts;
    const y = window.scrollY;
    activeTab(r.raw.split("?")[0]);
    view.classList.remove("enter"); void view.offsetWidth;
    try {
      if (!a) home();
      else if (a === "program") program();
      else if (a === "mk" && b && c) pertemuan(b, +c, d || "materi");
      else if (a === "mk" && b) mataKuliah(b);
      else if (a === "peta" && b) peta(b);
      else if (a === "peta") petaPilih();
      else if (a === "arena" && b) arenaRun(b, c, r.q);
      else if (a === "arena") arena();
      else if (a === "murajaah") murajaah(b);
      else if (a === "istilah") istilah(b);
      else if (a === "jadwal") jadwal();
      else if (a === "cari") cari(r.q.get("q") || "");
      else if (a === "profil") profil();
      else if (a === "tentang") tentang();
      else if (a === "sertifikat" && b) sertifikat(b);
      else notFound();
    } catch (e) { console.error(e); view.innerHTML = '<div class="wrap empty">' + Icon("info") + "<p>Terjadi kesalahan saat menampilkan halaman.</p><pre>" + esc(e.message) + "</pre></div>"; }
    view.classList.add("enter");
    if (keepScroll && r.raw === lastRaw) window.scrollTo(0, y); else if (!r.raw.includes("#sec-")) window.scrollTo(0, 0);
    lastRaw = r.raw;
    Render.reveal(view);
  }
  window.addEventListener("hashchange", () => route());
  function notFound() { view.innerHTML = '<div class="wrap empty">' + Icon("compass") + "<h2>" + lab("Halaman tidak ditemukan", "الصفحة غير موجودة") + '</h2><a class="btn" href="#/">' + lab("Kembali ke beranda", "الرئيسية") + "</a></div>"; }

  /* ===================== BERANDA ===================== */
  function lastRead() {
    let best = null;
    Object.entries(S().baca).forEach(([k, v]) => { if (!best || (v.terakhir || 0) > best.v.terakhir) best = { k, v }; });
    return best;
  }
  function mkProgress(mkId) {
    const list = Kuliah.list(mkId);
    const done = list.filter(p => (S().baca[pKey(mkId, p.no)] || {}).selesai).length;
    return { done, total: (mkById(mkId) || {}).jumlah || list.length, list };
  }
  function home() {
    const pr = S().profil || {}, lv = Store.level(), st = Store.streak();
    const sapa = pr.sapaan === "ukhti" ? ["Ukhti", "أختي"] : ["Akhi", "أخي"];
    const lr = lastRead();
    let lanjut = null;
    if (lr) { const [mk, no] = lr.k.split("/"); const p = Kuliah.get(mk, +no); if (p) { const nx = lr.v.selesai ? Kuliah.get(mk, +no + 1) || p : p; lanjut = nx; } }
    const today = new Date().getDay(), mkHari = MKS().find(m => m.hari === today && m.semester === 1);
    if (!lanjut) { const f = mkHari && Kuliah.list(mkHari.id).length ? mkHari : adaData()[0]; lanjut = f ? Kuliah.get(f.id, 1) : null; }
    const all = MKS().filter(m => m.semester === 1);
    const ut = adaData().reduce((s, m) => { const p = mkProgress(m.id); s.done += p.done; s.total += p.total; return s; }, { done: 0, total: 0 });
    const due = dueCards().length;
    const harian = S().harian[U.todayKey()];
    const scores = Object.values(S().skor).filter(x => x.total);
    const avg = scores.length ? Math.round(scores.reduce((s, x) => s + x.best / x.total, 0) / scores.length * 100) : 0;

    view.innerHTML = '<section class="hero"><div class="hero-bg">' + Art.rosette("r1") + Art.rosette("r2") + '</div><div class="wrap hero-in">' +
      '<div class="hero-txt"><div class="hero-date"><span>' + Icon("moon") + '<b class="clock"></b></span><span lang="ar">' + esc(U.hijriAr()) + "</span><span>" + esc(U.masehi()) + "</span></div>" +
      '<p class="bismillah" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>' +
      "<h1>" + lab("Ahlan wa sahlan, " + sapa[0] + " " + esc(pr.nama || "Penuntut Ilmu"), "أهلًا وسهلًا يا " + sapa[1] + " " + esc(pr.nama || "")) + "</h1>" +
      '<p class="hero-sub">' + lab(esc(PROGRAM.nama.id) + " · " + esc(PROGRAM.angkatan.id), esc(PROGRAM.nama.ar) + " · " + esc(PROGRAM.angkatan.ar)) + "</p>" +
      '<div class="hero-cta">' + (lanjut ? '<a class="btn gold lg" href="#/mk/' + lanjut.mk + "/" + lanjut.no + '">' + Icon("play") + lab((lr ? "Lanjutkan: " : "Mulai: ") + namaMk(lanjut.mk) + " P" + lanjut.no, (lr ? "تابع: " : "ابدأ: ") + (mkById(lanjut.mk) || { nama: { ar: "" } }).nama.ar + " · المحاضرة " + arNum(lanjut.no)) + "</a>" : "") +
      '<a class="btn glass lg" href="#/program">' + Icon("grid") + lab("Semua mata kuliah", "جميع المقررات") + "</a></div></div>" +
      '<div class="hero-pic">' + Art.hero() + "</div></div></section>" +

      '<div class="wrap">' +
      '<div class="stats">' +
      stat("level", '<span class="ring" style="--p:' + Math.round(lv.pct * 100) + '"><b>' + n(lv.no) + "</b></span>", lab(lv.nama.id, lv.nama.ar), lv.next ? lab(n(lv.sisa) + " XP lagi menuju " + lv.next.id, "بقي " + arNum(lv.sisa)) : lab("Level tertinggi", "أعلى مستوى"), "#/profil") +
      stat("streak", Icon("flame", "big"), lab(n(st) + " hari", arNum(st) + " يوم"), lab("Istiqamah belajar", "الاستقامة"), "#/profil") +
      stat("baca", Icon("book", "big"), n(ut.done) + "/" + n(ut.total), lab("Pertemuan selesai dibaca", "المحاضرات المقروءة"), "#/program") +
      stat("skor", Icon("target", "big"), n(avg) + "%", lab("Rata-rata nilai latihan", "متوسط الدرجات"), "#/profil") + "</div>" +

      '<div class="home-grid">' +
      '<div class="card today">' + todayCard(mkHari, today) + "</div>" +
      '<div class="card hikmah-card"><div class="card-h">' + Icon("moonStar") + lab("Mutiara Ilmu", "درر العلم") + '</div><div class="hikmah-rot"></div></div>' +
      '<a class="card act-card daily ' + (harian && harian.selesai ? "done" : "") + '" href="#/arena/harian"><div class="ac-ic">' + Icon("sun") + "</div><div><b>" + lab("Tantangan Harian", "تحدي اليوم") + "</b><p>" + (harian && harian.selesai ? lab("Selesai hari ini · nilai " + harian.skor + "/5", "أنجزت اليوم") : lab("5 soal acak · +30 XP", "خمسة أسئلة")) + "</p></div>" + Icon("right", "ac-go") + "</a>" +
      '<a class="card act-card" href="#/murajaah"><div class="ac-ic">' + Icon("cards") + "</div><div><b>" + lab("Muraja'ah Istilah", "مراجعة المصطلحات") + "</b><p>" + lab(n(due) + " kartu perlu diulang hari ini", arNum(due) + " بطاقة") + "</p></div>" + Icon("right", "ac-go") + "</a>" +
      "</div>" +

      '<div class="sec-h"><h2>' + lab("Mata Kuliah Semester 1", "مقررات الفصل الأول") + '</h2><a href="#/program" class="more">' + lab("Lihat program 4 semester", "البرنامج كاملًا") + Icon("right") + "</a></div>" +
      '<div class="mk-row">' + all.map(mkCard).join("") + "</div>" +

      '<div class="sec-h"><h2>' + lab("Jelajahi", "استكشف") + "</h2></div>" +
      '<div class="quick">' + [["#/peta", "map", "Peta Kitab", "خريطة الكتاب"], ["#/istilah", "language", "Kamus Istilah", "معجم المصطلحات"], ["#/jadwal", "calendar", "Jadwal Kuliah", "الجدول"], ["#/arena", "trophy", "Arena Ujian", "الاختبارات"], ["#/cari", "search", "Pencarian", "البحث"], ["#/tentang", "info", "Tentang", "عن التطبيق"]]
        .map(q => '<a class="qk" href="' + q[0] + '">' + Icon(q[1]) + "<span>" + lab(q[2], q[3]) + "</span></a>").join("") + "</div>" +
      footer() + "</div>";

    const clock = $(".clock"); const tickC = () => { if (clock) clock.textContent = new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); };
    tickC(); const ti = setInterval(tickC, 15000); cleanup.push(() => clearInterval(ti));
    hikmahRotate();
  }
  function stat(cls, ic, big, sub, href) { return '<a class="stat ' + cls + '" href="' + href + '"><div class="st-ic">' + ic + '</div><div><b>' + big + "</b><small>" + sub + "</small></div></a>"; }
  function todayCard(mk, d) {
    if (d === 5) return '<div class="card-h">' + Icon("mosque") + lab("Hari ini: Jumat", "اليوم: الجمعة") + '</div><p class="today-t">' + lab("Tidak ada jadwal kuliah. Perbanyak shalawat, baca Al-Kahfi, dan muraja'ah materi pekan ini.", "لا محاضرات اليوم؛ أكثر من الصلاة على النبي ﷺ واقرأ سورة الكهف") + '</p><a class="btn sm" href="#/murajaah">' + Icon("cards") + lab("Muraja'ah", "راجع") + "</a>";
    if (!mk) return '<div class="card-h">' + Icon("calendar") + lab("Jadwal hari ini", "جدول اليوم") + "</div><p>-</p>";
    return '<div class="card-h">' + Icon("calendar") + lab("Kuliah hari ini · " + HARI[d][0], "محاضرة اليوم · " + HARI[d][1]) + "</div>" +
      '<div class="today-mk"><span class="mk-ic t' + (mk.tema || 0) + '">' + Icon(mk.ikon) + "</span><div><b>" + one(mk.nama) + "</b><small>" + one(mk.dosen) + "</small><small>" + one(mk.kitab) + "</small></div></div>" +
      '<div class="today-act"><a class="btn sm" href="#/mk/' + mk.id + '">' + Icon("book") + lab("Buka mata kuliah", "افتح المقرر") + "</a>" + (mk.kanal ? '<a class="btn ghost sm" target="_blank" rel="noopener" href="' + mk.kanal + '">' + Icon("send") + "Telegram</a>" : "") + "</div>";
  }
  function hikmahRotate() {
    const box = $(".hikmah-rot"); if (!box) return;
    const list = SITE.hikmah; let i = Math.floor(Math.random() * list.length);
    const draw = () => { const h = list[i % list.length]; box.innerHTML = '<div class="hk swap-in"><p class="hk-ar" lang="ar" dir="rtl">' + arFmt(h.ar) + "</p>" + (U.lang !== "ar" ? '<p class="hk-id">' + fmt(h.id) + "</p>" : "") + "<small>" + esc(h.src) + "</small></div>"; i++; };
    draw(); const t = setInterval(draw, 11000); cleanup.push(() => clearInterval(t));
  }
  function mkCard(m) {
    const pr = mkProgress(m.id), ada = Kuliah.list(m.id).length > 0;
    return '<a class="mk-card t' + (m.tema || 0) + (ada ? "" : " soon") + '" href="#/mk/' + m.id + '"><div class="mk-top"><span class="mk-ic">' + Icon(m.ikon) + '</span><span class="mk-day">' + lab(HARI[m.hari][0], HARI[m.hari][1]) + "</span></div>" +
      '<h3 lang="ar">' + esc(m.nama.ar) + "</h3><h4>" + esc(m.nama.id) + "</h4>" +
      '<p class="mk-kitab">' + Icon("book") + one(m.kitab) + '</p><p class="mk-dosen">' + Icon("user") + one(m.dosen) + "</p>" +
      '<div class="mk-foot">' + (ada ? '<div class="bar"><i style="width:' + Math.round(pr.done / pr.total * 100) + '%"></i></div><small>' + n(pr.done) + "/" + n(pr.total) + " " + lab("pertemuan", "محاضرة") + "</small>" : '<span class="badge-soon">' + Icon("hourglass") + lab("Modul segera hadir", "قريبًا") + "</span>") + "</div></a>";
  }
  function footer() {
    const c = SITE.contact;
    return '<footer class="foot"><div class="foot-in">' + logo("lg") + '<div><b>' + esc(SITE.brand) + '</b><p class="muted">' + lab("Dikembangkan oleh", "تطوير") + " <b>" + esc(SITE.owner) + "</b></p>" +
      '<div class="foot-c">' + (c.whatsapp ? '<a class="btn sm wa" target="_blank" rel="noopener" href="https://wa.me/' + c.whatsapp + '">' + Icon("chat") + "WhatsApp</a>" : "") + (c.email ? '<a class="btn sm ghost" href="mailto:' + c.email + '">' + Icon("mail") + esc(c.email) + "</a>" : "") + "</div>" +
      '<p class="muted xs">' + esc(SITE.disclaimer) + "</p></div></div></footer>";
  }

  /* ===================== PROGRAM 4 SEMESTER ===================== */
  function program() {
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("quran", "ph-ic") + "<div><h1>" + lab(PROGRAM.nama.id, PROGRAM.nama.ar) + '</h1><p class="muted">' + one(PROGRAM.lembaga) + " · " + one(PROGRAM.naungan) + " · " + one(PROGRAM.angkatan) + "</p></div></div>" +
      '<div class="info-strip">' + Icon("calendar") + lab("Perkuliahan semester 1 dimulai " + PROGRAM.mulai.id + ". Kuliah Sabtu–Kamis, satu mata kuliah per hari.", "بداية الفصل الأول: " + PROGRAM.mulai.ar) +
      '<a class="btn sm ghost" target="_blank" rel="noopener" href="' + PROGRAM.kanal.pelajaran + '">' + Icon("send") + lab("Kanal kuliah", "قناة الدروس") + "</a></div>" +
      '<ol class="sem-line">' + PROGRAM.semester.map(s => '<li class="sem ' + s.status + '"><div class="sem-dot">' + (s.status === "aktif" ? Icon("star8") : Icon("lock")) + '</div><div class="sem-b"><div class="sem-h"><h2>' + lab("Semester " + s.no, s.ar) + "</h2>" +
        '<span class="pill ' + (s.status === "aktif" ? "on" : "") + '">' + (s.status === "aktif" ? lab("Sedang berjalan", "جارٍ الآن") : lab("Segera", "قريبًا")) + "</span></div>" +
        (s.mk.length ? '<div class="mk-row wrap-row">' + s.mk.map(m => mkCard(Object.assign({ semester: s.no }, m))).join("") + "</div>" : '<p class="muted">' + lab("Mata kuliah semester ini akan ditambahkan ketika modulnya tersedia.", "ستضاف المقررات عند توفرها") + "</p>") + "</div></li>").join("") + "</ol></div>";
  }

  /* ===================== MATA KULIAH ===================== */
  function mataKuliah(id) {
    const m = mkById(id); if (!m) return notFound();
    const list = Kuliah.list(id), pr = mkProgress(id);
    const tugasN = list.reduce((s, p) => s + (p.tugas || []).length, 0);
    const pahamN = Object.keys(S().tugas).filter(k => k.startsWith(id + "/") && S().tugas[k].nilai === 2).length;
    const utsB = Store.terbaikUjian("uts-" + id), uasB = Store.terbaikUjian("uas-" + id);
    view.innerHTML = '<div class="mk-hero t' + (m.tema || 0) + '"><div class="mk-hero-cover">' + Art.cover(m.motif || "kaidah", m.tema, Object.assign({}, m.motifOpt)) + '</div><div class="wrap mk-hero-in">' +
      '<a class="crumb" href="#/program">' + Icon("left") + lab("Program S2", "البرنامج") + "</a>" +
      '<div class="mk-hero-t"><span class="mk-ic big">' + Icon(m.ikon) + "</span><div><h1>" + lab(m.nama.id, m.nama.ar) + "</h1>" +
      '<p class="muted">' + lab("Semester " + m.semester + " · Setiap hari " + HARI[m.hari][0] + " · " + m.jumlah + " pertemuan", "الفصل " + arNum(m.semester) + " · يوم " + HARI[m.hari][1] + " · " + arNum(m.jumlah) + " محاضرة") + "</p></div></div></div></div>" +
      '<div class="wrap">' +
      '<div class="kitab-card"><div class="kc-cover">' + bookArt(m) + "</div><div class=\"kc-info\">" +
      '<div class="kc-row"><span>' + Icon("book") + lab("Kitab", "الكتاب") + '</span><b>' + one(m.kitab) + "</b></div>" +
      '<div class="kc-row"><span>' + Icon("pen") + lab("Penulis", "المؤلف") + "</span><b>" + (m.penulis ? one(m.penulis) : '<i class="muted">' + lab("akan dilengkapi", "سيُضاف") + "</i>") + "</b></div>" +
      '<div class="kc-row"><span>' + Icon("user") + lab("Dosen pengampu", "المحاضر") + "</span><b>" + one(m.dosen) + "</b></div>" +
      '<div class="kc-row"><span>' + Icon("calendar") + lab("Jadwal", "الموعد") + "</span><b>" + lab(HARI[m.hari][0], HARI[m.hari][1]) + "</b></div>" +
      (m.tentang ? '<div class="kc-about">' + bi(m.tentang) + "</div>" : "") +
      (m.tentangPenulis ? '<details class="ak kc-pen"><summary>' + Icon("info") + lab("Tentang penulis", "عن المؤلف") + Icon("down", "ak-ic") + '</summary><div class="ak-b">' + bi(m.tentangPenulis) + "</div></details>" : "") +
      '<div class="kc-act">' + (m.lengkap ? '<a class="btn sm ghost" target="_blank" rel="noopener" href="' + m.lengkap + '">' + Icon("send") + lab("Berkas mata kuliah lengkap", "المقرر كاملًا") + "</a>" : "") +
      (list.length ? '<a class="btn sm" href="#/peta/' + id + '">' + Icon("map") + lab("Peta kitab", "خريطة الكتاب") + '</a><a class="btn sm" href="#/istilah/' + id + '">' + Icon("language") + lab("Istilah", "المصطلحات") + "</a>" : "") + "</div></div></div>" +
      (list.length ? '<div class="mk-stats"><div><b>' + n(pr.done) + "/" + n(pr.total) + "</b><small>" + lab("selesai dibaca", "مقروءة") + "</small></div><div><b>" + n(pahamN) + "/" + n(tugasN) + "</b><small>" + lab("soal wajib dipahami", "واجبات مفهومة") + "</small></div><div><b>" + (utsB >= 0 ? n(utsB) + "%" : "–") + "</b><small>" + lab("simulasi UTS", "النصفي") + "</small></div><div><b>" + (uasB >= 0 ? n(uasB) + "%" : "–") + "</b><small>" + lab("simulasi UAS", "النهائي") + "</small></div></div>" +
        '<div class="exam-row"><a class="btn" href="#/arena/uts/' + id + '">' + Icon("medal") + lab("Simulasi UTS (P1–8)", "الاختبار النصفي") + '</a><a class="btn gold" href="#/arena/uas/' + id + '">' + Icon("seal") + lab("Simulasi UAS (P1–16)", "الاختبار النهائي") + "</a>" + (pr.done >= pr.total && uasB >= 70 ? '<a class="btn ghost" href="#/sertifikat/' + id + '">' + Icon("seal") + lab("Sertifikat", "الشهادة") + "</a>" : "") + "</div>" : "") +
      '<div class="sec-h"><h2>' + lab("Daftar Pertemuan", "المحاضرات") + "</h2></div>" +
      '<div class="p-list">' + Array.from({ length: m.jumlah }, (_, i) => pCard(m, list.find(p => p.no === i + 1), i + 1)).join("") + "</div>" +
      footer() + "</div>";
  }
  function bookArt(m) {
    return '<div class="book3d t' + (m.tema || 0) + '"><div class="b-front">' + Art.star8(50, 34, 14, "b-star") .replace("<g", '<svg viewBox="0 0 100 70" class="b-orn"><g') + "</svg>" + '<span lang="ar">' + esc(U.pickAr(m.kitab)) + "</span>" + (m.penulis ? '<small lang="ar">' + esc(U.pickAr(m.penulis)) + "</small>" : "") + '</div><div class="b-side"></div></div>';
  }
  function pCard(m, p, no) {
    const tg = m.tautan && m.tautan[no - 1];
    if (!p) return '<div class="p-card soon"><span class="p-no">' + n(no) + '</span><div class="p-b"><b>' + lab("Pertemuan " + no, "المحاضرة " + arNum(no)) + '</b><small class="muted">' + lab("Modul belum diunggah", "لم يُرفع بعد") + "</small></div>" + (tg ? '<a class="icon-btn" target="_blank" rel="noopener" href="' + tg + '" title="Rekaman di Telegram">' + Icon("headphones") + "</a>" : "") + "</div>";
    const k = pKey(m.id, no), b = S().baca[k] || {}, games = gameList(p), bests = games.map(g => S().skor[k + "/" + g.id]).filter(Boolean);
    const sc = bests.length ? Math.round(bests.reduce((s, x) => s + x.best / x.total, 0) / bests.length * 100) : null;
    return '<a class="p-card ' + (b.selesai ? "done" : b.posisi ? "mid" : "") + '" href="#/mk/' + m.id + "/" + no + '"><div class="p-cv">' + Art.cover(p.motif, m.tema, Object.assign({ static: true, cls: "mini" }, p.motifOpt)) + '<span class="p-no">' + n(no) + "</span></div>" +
      '<div class="p-b"><b>' + one(p.judul) + '</b><small class="muted">' + one(p.ringkas) + "</small>" +
      '<div class="p-meta"><span>' + Icon("clock") + n(p.durasi || 15) + " " + lab("mnt", "د") + "</span><span>" + Icon("puzzle") + n(games.length) + " " + lab("latihan", "تمارين") + "</span>" + (sc != null ? '<span class="sc">' + Icon("target") + n(sc) + "%</span>" : "") + (b.selesai ? '<span class="ok">' + Icon("checkCircle") + lab("Selesai", "تم") + "</span>" : b.posisi ? '<span class="mid">' + Icon("hourglass") + n(Math.round(b.posisi * 100)) + "%</span>" : "") + "</div></div></a>";
  }

  /* ===================== PERTEMUAN (PEMBACA MATERI) ===================== */
  function gameList(p) {
    const L = p.latihan || {}, out = [];
    if (L.pg && L.pg.length) out.push({ id: "pg", ikon: "target", nama: ["Pilihan Ganda", "اختيار من متعدد"], ket: ["Pilih jawaban yang paling tepat", "اختر الإجابة الصحيحة"], n: L.pg.length });
    if (L.bs && L.bs.length) out.push({ id: "bs", ikon: "bolt", nama: ["Benar atau Salah", "صواب أم خطأ"], ket: ["Uji ketelitianmu", "اختبر دقتك"], n: L.bs.length });
    if (L.jodoh && L.jodoh.length) out.push({ id: "jodoh", ikon: "puzzle", nama: ["Menjodohkan", "التوصيل"], ket: ["Pasangkan istilah & maknanya", "صِل المصطلح بمعناه"], n: L.jodoh.length });
    if (L.urut) out.push({ id: "urut", ikon: "list", nama: ["Susun Urutan", "الترتيب"], ket: ["Urutkan dengan benar", "رتّب العناصر"], n: L.urut.item.length });
    if (L.isian && L.isian.length) out.push({ id: "isian", ikon: "pen", nama: ["Lengkapi Kalimat", "أكمل الفراغ"], ket: ["Isi bagian yang kosong", "املأ الفراغ"], n: L.isian.length });
    if (L.pilah) out.push({ id: "pilah", ikon: "layers", nama: ["Pilah Kategori", "التصنيف"], ket: ["Kelompokkan ke kategori yang tepat", "صنِّف العناصر"], n: L.pilah.item.length });
    if (p.istilah && p.istilah.length) out.push({ id: "kartu", ikon: "cards", nama: ["Kartu Istilah", "بطاقات المصطلحات"], ket: ["Hafalkan istilah kunci", "احفظ المصطلحات"], n: p.istilah.length });
    return out;
  }
  function pertemuan(mkId, no, tab) {
    const m = mkById(mkId), p = Kuliah.get(mkId, no);
    if (!m || !p) return notFound();
    const k = pKey(mkId, no), prev = Kuliah.get(mkId, no - 1), next = Kuliah.get(mkId, no + 1), b = S().baca[k] || {};
    const isBm = S().tanda.includes(k);
    const tabs = [["materi", "book", "Materi", "المادة"], ["teks", "scroll", "Teks Asli", "النص الأصلي"], ["latihan", "puzzle", "Latihan & Game", "التمارين"], ["tugas", "pen", "Soal Wajib", "أسئلة الواجب"], ["catatan", "note", "Catatan", "ملاحظاتي"]];
    view.innerHTML = '<div class="read-prog"><i></i></div>' +
      '<div class="p-hero">' + Art.cover(p.motif, m.tema, Object.assign({ cls: "hero-cv" }, p.motifOpt)) + '<div class="p-hero-sh"></div><div class="wrap p-hero-in">' +
      '<a class="crumb" href="#/mk/' + mkId + '">' + Icon("left") + one(m.nama) + "</a>" +
      '<div class="p-kicker">' + lab("Pertemuan " + no + " dari " + m.jumlah, "المحاضرة " + arNum(no) + " من " + arNum(m.jumlah)) + (p.bab ? " · " + one(p.bab) : "") + "</div>" +
      Render.head(p.judul, "h1", "p-title") +
      '<div class="p-chips"><span>' + Icon("user") + one(m.dosen) + "</span><span>" + Icon("book") + one(m.kitab) + "</span><span>" + Icon("clock") + n(p.durasi || 15) + " " + lab("menit", "دقيقة") + "</span></div>" +
      '<div class="p-tools">' + (p.telegram ? '<a class="btn sm glass" target="_blank" rel="noopener" href="' + p.telegram + '">' + Icon("headphones") + lab("Rekaman kuliah", "التسجيل") + "</a>" : "") +
      '<button class="btn sm glass tts-btn">' + Icon("ear") + lab("Dengarkan", "استمع") + "</button>" +
      '<button class="btn sm glass bm-btn ' + (isBm ? "on" : "") + '">' + Icon("bookmark") + lab(isBm ? "Ditandai" : "Tandai", "علامة") + "</button>" +
      '<button class="btn sm glass share-btn">' + Icon("share") + lab("Bagikan", "مشاركة") + "</button>" +
      '<button class="btn sm glass focus-btn" title="Mode fokus">' + Icon("focus") + "</button></div></div></div>" +
      '<div class="p-tabs-wrap"><nav class="p-tabs wrap">' + tabs.map(t => '<a href="#/mk/' + mkId + "/" + no + (t[0] === "materi" ? "" : "/" + t[0]) + '" class="' + (tab === t[0] ? "on" : "") + '">' + Icon(t[1]) + "<span>" + lab(t[2], t[3]) + "</span>" + (t[0] === "latihan" ? '<i class="cnt">' + n(gameList(p).length) + "</i>" : t[0] === "tugas" && p.tugas ? '<i class="cnt">' + n(p.tugas.length) + "</i>" : "") + "</a>").join("") + "</nav></div>" +
      '<div class="wrap p-body" id="pbody"></div>' +
      '<div class="wrap p-nav">' + (prev ? '<a class="pn prev" href="#/mk/' + mkId + "/" + prev.no + '">' + Icon("left") + "<span><small>" + lab("Sebelumnya", "السابق") + "</small>" + one(prev.judul) + "</span></a>" : "<span></span>") +
      (next ? '<a class="pn next" href="#/mk/' + mkId + "/" + next.no + '"><span><small>' + lab("Berikutnya", "التالي") + "</small>" + one(next.judul) + "</span>" + Icon("right") + "</a>" : "<span></span>") + "</div>" + '<div class="wrap">' + footer() + "</div>";

    const body = $("#pbody");
    if (tab === "materi") tabMateri(body, m, p, k, b);
    else if (tab === "teks") tabTeks(body, m, p);
    else if (tab === "latihan") tabLatihan(body, m, p, k);
    else if (tab === "tugas") { if (p.tugas && p.tugas.length) Games.tugas(p.tugasBuatan ? (body.innerHTML = '<div class="tugas-note">' + Icon("info") + "<div>" + lab("Modul asli pertemuan ini tidak memuat soal wajib (أسئلة الواجب). Soal-soal berikut disusun oleh aplikasi sebagai latihan pemahaman, lengkap dengan jawaban model.", "لم تتضمن المحاضرة أسئلة واجب؛ فهذه أسئلة أعدّها التطبيق للتدريب مع نماذج الإجابة") + '</div></div><div class="tg-host"></div>', $(".tg-host", body)) : body, p.tugas, k + "/tugas", { judul: "Soal Wajib " + m.nama.id + " — Pertemuan " + no + ": " + p.judul.id }); else body.innerHTML = empty("pen", "Belum ada soal wajib.", "لا توجد أسئلة"); }
    else if (tab === "catatan") tabCatatan(body, p, k);
    if (tab !== "materi") $(".read-prog").remove();

    Store.tandaiBaca(k, {});
    $(".bm-btn").onclick = e => { const i = S().tanda.indexOf(k); if (i > -1) S().tanda.splice(i, 1); else S().tanda.push(k); Store.save(); e.currentTarget.classList.toggle("on"); Audio2.sfx("pop"); U.toast(Icon("bookmark") + (i > -1 ? " Tanda dihapus" : " Pertemuan ditandai"), ""); };
    $(".share-btn").onclick = () => share(p.judul.id + " — " + m.nama.id, location.href);
    $(".focus-btn").onclick = () => { document.body.classList.toggle("focus"); Audio2.sfx("whoosh"); };
    $(".tts-btn").onclick = e => speakPertemuan(p, e.currentTarget);
    cleanup.push(() => document.body.classList.remove("focus"));
  }
  function empty(ic, id, ar) { return '<div class="empty">' + Icon(ic) + "<p>" + lab(id, ar) + "</p></div>"; }

  function tabMateri(body, m, p, k, b) {
    const toc = Render.toc(p.isi);
    body.innerHTML = '<div class="reader ' + (toc ? "has-toc" : "") + '">' + (toc ? '<aside class="toc"><div class="toc-h">' + Icon("list") + lab("Daftar Isi", "المحتويات") + '</div><nav class="toc-nav">' + toc + "</nav></aside>" : "") +
      '<article class="materi">' +
      (p.ringkas ? '<div class="blk lead rv">' + bi(p.ringkas) + "</div>" : "") +
      (p.tujuan ? '<div class="blk tujuan rv"><div class="tj-h">' + Icon("target") + lab("Tujuan pembelajaran", "أهداف المحاضرة") + "</div><ul>" + p.tujuan.map(t => "<li>" + Icon("check", "li-ic") + "<div>" + bi(t) + "</div></li>").join("") + "</ul></div>" : "") +
      Render.blocks(p.isi) +
      '<div class="selesai-box rv ' + (b.selesai ? "done" : "") + '">' + (b.selesai ? Icon("checkCircle") + "<div><b>" + lab("Alhamdulillah, materi ini sudah selesai dibaca.", "الحمد لله، أتممت قراءة هذه المحاضرة") + "</b><p>" + lab("Lanjutkan dengan latihan dan soal wajib agar ilmunya melekat.", "واصل بالتمارين والواجبات") + "</p></div>" :
        Icon("flag") + "<div><b>" + lab("Sudah selesai membaca?", "هل أتممت القراءة؟") + "</b><p>" + lab("Tandai selesai untuk mendapat +50 XP.", "علِّم الانتهاء لتحصل على ٥٠ نقطة") + "</p></div>" + '<button class="btn gold mark-done">' + Icon("check") + lab("Tandai selesai", "تم") + "</button>") +
      '<div class="sb-act"><a class="btn" href="#/mk/' + m.id + "/" + p.no + '/latihan">' + Icon("puzzle") + lab("Mulai latihan", "ابدأ التمارين") + '</a><a class="btn ghost" href="#/mk/' + m.id + "/" + p.no + '/tugas">' + Icon("pen") + lab("Soal wajib", "الواجب") + "</a></div></div>" +
      "</article></div>";
    Render.after(body);
    const md = $(".mark-done"); if (md) md.onclick = () => finishRead(k, body, m, p);
    $$(".toc-nav a").forEach(a => a.onclick = e => { e.preventDefault(); const t = document.getElementById(a.getAttribute("href").slice(1)); if (t) { window.scrollTo({ top: t.getBoundingClientRect().top + scrollY - 120, behavior: "smooth" }); Audio2.sfx("tap"); } });
    // Progres baca & daftar isi aktif
    const bar = $(".read-prog i"), secs = $$(".judul-blk", body);
    let maxPos = b.posisi || 0;
    const onScroll = () => {
      const art = $(".materi"); if (!art) return;
      const r = art.getBoundingClientRect(), total = r.height - innerHeight * 0.6;
      const pos = U.clamp(-r.top / Math.max(total, 1), 0, 1);
      bar.style.width = (pos * 100) + "%";
      if (pos > maxPos + 0.05) { maxPos = pos; Store.tandaiBaca(k, { posisi: Math.round(pos * 100) / 100 }); }
      if (pos > 0.97 && !(S().baca[k] || {}).selesai) finishRead(k, body, m, p);
      let cur = null; secs.forEach(s => { if (s.getBoundingClientRect().top < 160) cur = s.id; });
      $$(".toc-nav a").forEach(a => a.classList.toggle("on", a.getAttribute("href") === "#" + cur));
    };
    addEventListener("scroll", onScroll, { passive: true }); cleanup.push(() => removeEventListener("scroll", onScroll));
    if (b.posisi && b.posisi > 0.08 && b.posisi < 0.95 && !b.selesai) {
      const bx = document.createElement("button"); bx.className = "resume-chip"; bx.innerHTML = Icon("bookmark") + lab("Lanjut dari posisi terakhir (" + Math.round(b.posisi * 100) + "%)", "تابع من حيث توقفت");
      bx.onclick = () => { const art = $(".materi"); window.scrollTo({ top: art.offsetTop + (art.offsetHeight - innerHeight * 0.6) * b.posisi, behavior: "smooth" }); bx.remove(); };
      document.body.appendChild(bx); setTimeout(() => bx.remove(), 9000); cleanup.push(() => bx.remove());
    }
  }
  function finishRead(k, body, m, p) {
    if (Store.selesaiBaca(k)) {
      Audio2.sfx("done");
      const box = $(".selesai-box", body);
      if (box) { box.classList.add("done"); box.innerHTML = Icon("checkCircle") + "<div><b>" + lab("Alhamdulillah, selesai! +50 XP", "الحمد لله! ٥٠ نقطة") + "</b><p>" + lab("Sekarang uji pemahamanmu dengan latihan.", "اختبر فهمك الآن") + '</p></div><div class="sb-act"><a class="btn gold" href="#/mk/' + m.id + "/" + p.no + '/latihan">' + Icon("puzzle") + lab("Mulai latihan", "ابدأ التمارين") + "</a></div>"; Games.burst(box); }
    }
  }

  function tabTeks(body, m, p) {
    body.innerHTML = '<div class="empty">' + Icon("hourglass") + "<p>" + lab("Memuat teks asli…", "جارٍ التحميل…") + "</p></div>";
    const src = "data/" + m.id + "/teks/p" + String(p.no).padStart(2, "0") + ".js";
    U.loadScript(src).then(() => {
      const lines = (Kuliah.teksDb[m.id] || {})[p.no];
      if (!lines) throw new Error("kosong");
      let metaN = lines.slice(0, 12).findIndex(l => /^\s*(ب\S*س\S*م|الحمد)/.test(l)); if (metaN < 0) metaN = 8;
      body.innerHTML = '<div class="teks-tool"><div class="tt-l">' + Icon("scroll") + "<div><b lang=\"ar\">تفريغ المحاضرة " + arNum(p.no) + "</b><small>" + lab("Teks asli tafrigh (transkrip) kuliah, berbahasa Arab", "النص الكامل للمحاضرة") + "</small></div></div>" +
        '<div class="tt-r"><label class="tt-s">' + Icon("search") + '<input type="search" placeholder="ابحث في النص…" dir="rtl" class="tt-q"></label><button class="icon-btn tt-m" title="Perkecil huruf"><b class="sm">A</b>' + Icon("down") + '</button><button class="icon-btn tt-p" title="Perbesar huruf"><b>A</b>' + Icon("up") + "</button></div></div>" +
        '<article class="teks-asli" lang="ar" dir="rtl">' + lines.map((l, i) => i < metaN && l.length < 90 ? '<p class="tx-meta">' + arFmt(l) + "</p>" : fmtLine(l)).join("") + "</article>";
      let size = 1;
      const art = $(".teks-asli", body);
      $(".tt-p", body).onclick = () => { size = Math.min(1.6, size + 0.1); art.style.fontSize = size + "em"; };
      $(".tt-m", body).onclick = () => { size = Math.max(0.8, size - 0.1); art.style.fontSize = size + "em"; };
      const orig = art.innerHTML;
      $(".tt-q", body).oninput = U.debounce(e => {
        const q = e.target.value.trim(); art.innerHTML = orig;
        if (q.length < 2) return;
        let found = 0;
        art.querySelectorAll("p, h3, h4, li").forEach(el => { if (el.textContent.includes(q)) { found++; el.innerHTML = el.innerHTML.split(esc(q)).join("<mark>" + esc(q) + "</mark>"); } });
        const f = art.querySelector("mark"); if (f) f.scrollIntoView({ behavior: "smooth", block: "center" });
        U.toast(found ? found + " paragraf ditemukan" : "Tidak ditemukan", found ? "" : "warn", 1500);
      }, 350);
    }).catch(() => { body.innerHTML = empty("scroll", "Teks asli pertemuan ini belum tersedia.", "النص الأصلي غير متوفر"); });
  }
  function fmtLine(l) {
    const t = l.trim(); if (!t) return "";
    const hd = /^(المحاضرة|المبحث|أولًا|ثانيًا|ثالثًا|رابعًا|خامسًا|سادسًا|سابعًا|المرحلة|القسم|النوع|القاعدة|الأسلوب|الشرط|الضابط|الحال|الحالة|العلم|السبب|المسألة|الخصيصة|الطريق|الصورة|أسئلة الواجب|ملخص)/.test(t.replace(/^[^؀-ۿ]+/, "")) && t.length < 120;
    const isQ = /^[🔸🔹◾]?\s*-?السؤال/.test(t);
    let h = arFmt(t);
    if (/^(أكَادِيمِيَّة|\(ماجستير|الفرقة|أُصُول|\[من كتاب|\(تفريغ|شرح الشيخ|-حفظه)/.test(t)) return '<p class="tx-meta">' + h + "</p>";
    if (isQ) return '<p class="tx-q">' + h + "</p>";
    if (hd) return "<h3>" + h + "</h3>";
    return "<p>" + h + "</p>";
  }

  function tabLatihan(body, m, p, k) {
    const list = gameList(p);
    const hub = () => {
      body.innerHTML = '<div class="g-hub-h">' + Icon("puzzle") + "<div><h2>" + lab("Latihan & Game Pertemuan " + p.no, "تمارين المحاضرة " + arNum(p.no)) + '</h2><p class="muted">' + lab("Setiap jawaban benar yang meningkatkan nilai terbaikmu = +10 XP.", "كل إجابة صحيحة جديدة = ١٠ نقاط") + "</p></div></div>" +
        '<div class="g-hub">' + list.map((g, i) => { const sc = S().skor[k + "/" + g.id]; const pct = sc ? Math.round(sc.best / sc.total * 100) : null; return '<button class="g-tile st" style="--i:' + i + '" data-g="' + g.id + '"><span class="gt-ic">' + Icon(g.ikon) + "</span><b>" + lab(g.nama[0], g.nama[1]) + "</b><small>" + lab(g.ket[0], g.ket[1]) + "</small>" +
          '<span class="gt-meta">' + n(g.n) + " " + lab("soal", "سؤال") + (pct != null ? ' · <span class="gt-best ' + (pct >= 90 ? "top" : "") + '">' + Icon("star8") + n(pct) + "%</span>" : "") + "</span></button>"; }).join("") + "</div>";
      $$(".g-tile", body).forEach(t => t.onclick = () => { Audio2.sfx("open"); play(t.dataset.g); });
    };
    const play = gid => {
      body.innerHTML = '<button class="btn ghost sm back-hub">' + Icon("left") + lab("Daftar latihan", "قائمة التمارين") + '</button><div class="g-host"></div>';
      $(".back-hub", body).onclick = () => { Audio2.sfx("tap"); hub(); };
      const host = $(".g-host", body), L = p.latihan || {}, key = k + "/" + gid;
      const idx = list.findIndex(g => g.id === gid), nextG = list[idx + 1];
      const onDone = r => { const res = Store.catatSkor(key, r.benar, r.total); return { xp: res.xp, next: nextG ? { label: "Lanjut: " + nextG.nama[0], ar: nextG.nama[1], fn: () => play(nextG.id) } : null }; };
      const src = "P" + p.no;
      if (gid === "pg") Games.pg(host, L.pg, { onDone });
      if (gid === "bs") Games.bs(host, L.bs, { onDone });
      if (gid === "jodoh") Games.jodoh(host, U.pick(L.jodoh, 6), { onDone });
      if (gid === "urut") Games.urut(host, L.urut, { onDone });
      if (gid === "isian") Games.isian(host, L.isian, { onDone });
      if (gid === "pilah") Games.pilah(host, L.pilah, { onDone });
      if (gid === "kartu") Games.kartu(host, p.istilah.map((c, i) => Object.assign({ key: k + "/i" + i, src }, c)), { onDone: () => {} });
      const kh = e => host._key && !/input|textarea/i.test(document.activeElement.tagName) && host._key(e);
      addEventListener("keydown", kh); cleanup.push(() => removeEventListener("keydown", kh));
    };
    if (!list.length) { body.innerHTML = empty("puzzle", "Belum ada latihan.", "لا توجد تمارين"); return; }
    hub();
  }

  function tabCatatan(body, p, k) {
    body.innerHTML = '<div class="catatan-pribadi"><div class="cp-h">' + Icon("note") + "<div><h2>" + lab("Catatan pribadi", "ملاحظاتي") + '</h2><p class="muted">' + lab("Tersimpan otomatis di perangkat ini. Tulis faidah, pertanyaan untuk dosen, atau ringkasanmu sendiri.", "تُحفظ تلقائيًا على جهازك") + "</p></div></div>" +
      '<textarea class="cp-in" rows="14" placeholder="Tulis catatan…">' + esc(S().catatan[k] || "") + '</textarea><div class="cp-act"><span class="muted sm cp-st"></span><button class="btn ghost sm cp-copy">' + Icon("chat") + lab("Salin", "نسخ") + "</button></div></div>";
    const ta = $(".cp-in", body), stt = $(".cp-st", body);
    ta.oninput = U.debounce(() => { S().catatan[k] = ta.value; Store.save(); stt.textContent = "Tersimpan " + new Date().toLocaleTimeString("id-ID", { hour: "2-digit", minute: "2-digit" }); }, 400);
    $(".cp-copy", body).onclick = () => navigator.clipboard && navigator.clipboard.writeText("Catatan " + p.judul.id + "\n\n" + ta.value).then(() => U.toast(Icon("check") + " Catatan disalin", "ok"));
  }

  /* ---------- Membaca dengan suara (Text-to-Speech) ---------- */
  function speakPertemuan(p, btn) {
    const ss = window.speechSynthesis;
    if (!ss) return U.toast("Perangkat ini belum mendukung fitur suara.", "warn");
    if (ss.speaking) { ss.cancel(); btn.classList.remove("on"); return; }
    const useAr = U.lang === "ar";
    const parts = [U.plain(useAr ? U.pickAr(p.judul) : U.pickId(p.judul))];
    p.isi.forEach(b => { const x = useAr ? (b.ar || (U.isObj(b) && b.q && b.q.ar)) : (b.id || (b.q && b.q.id)); if (typeof x === "string") parts.push(x.replace(/[*\[\]{}]/g, "")); });
    const voices = ss.getVoices(), lang = useAr ? "ar" : "id";
    const v = voices.find(x => x.lang && x.lang.toLowerCase().startsWith(lang));
    if (!v) U.toast(useAr ? "Suara Arab belum terpasang di perangkat; memakai suara bawaan." : "Memakai suara bawaan perangkat.", "", 2500);
    btn.classList.add("on");
    parts.forEach((t, i) => { const u = new SpeechSynthesisUtterance(t); u.lang = useAr ? "ar-SA" : "id-ID"; if (v) u.voice = v; u.rate = useAr ? 0.9 : 1; if (i === parts.length - 1) u.onend = () => btn.classList.remove("on"); ss.speak(u); });
  }
  function share(title, url) {
    if (navigator.share) navigator.share({ title, url }).catch(() => {});
    else window.open("https://wa.me/?text=" + encodeURIComponent(title + "\n" + url), "_blank", "noopener");
  }

  /* ===================== PETA KITAB ===================== */
  function petaPilih() {
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("map", "ph-ic") + "<div><h1>" + lab("Peta Kitab", "خريطة الكتب") + '</h1><p class="muted">' + lab("Pilih mata kuliah untuk melihat peta bab dan pertemuannya.", "اختر المقرر لعرض خريطته") + "</p></div></div>" +
      '<div class="mk-row wrap-row">' + MKS().filter(m => m.semester === 1).map(m => mkCard(m).replace('href="#/mk/' + m.id + '"', Kuliah.list(m.id).length ? 'href="#/peta/' + m.id + '"' : 'href="#/mk/' + m.id + '"')).join("") + "</div></div>";
  }
  function peta(mkId) {
    const m = mkById(mkId); if (!m) return notFound();
    Store.beriLencana("peta");
    const list = Kuliah.list(mkId), bab = m.bab || [{ id: "Seluruh pertemuan", ar: "المحاضرات", dari: 1, sampai: m.jumlah }];
    view.innerHTML = '<div class="wrap"><a class="crumb" href="#/mk/' + mkId + '">' + Icon("left") + one(m.nama) + '</a><div class="page-h">' + Icon("map", "ph-ic") + "<div><h1>" + lab("Peta Kitab", "خريطة الكتاب") + '</h1><p class="muted">' + one(m.kitab) + "</p></div></div>" +
      '<div class="peta-kitab t' + (m.tema || 0) + '"><div class="pk-root rv">' + Icon(m.ikon) + "<b>" + one(m.kitab) + "</b>" + (m.penulis ? "<small>" + one(m.penulis) + "</small>" : "") + "</div>" +
      '<div class="pk-babs">' + bab.map((bb, i) => '<div class="pk-bab rv st" style="--i:' + i + '"><div class="pk-bab-h"><span>' + n(i + 1) + "</span>" + one(bb) + '</div><div class="pk-ps">' +
        list.filter(p => p.no >= bb.dari && p.no <= bb.sampai).map(p => { const d = (S().baca[pKey(mkId, p.no)] || {}).selesai; return '<a class="pk-p ' + (d ? "done" : "") + '" href="#/mk/' + mkId + "/" + p.no + '"><span class="pk-n">' + n(p.no) + "</span><span>" + one(p.judul) + "</span>" + (d ? Icon("checkCircle") : "") + "</a>"; }).join("") + "</div></div>").join("") + "</div></div></div>";
  }

  /* ===================== ARENA ===================== */
  /* ---------- Pemilih mata kuliah (satu, beberapa, atau semua) ---------- */
  const adaData = () => MKS().filter(m => Kuliah.list(m.id).length);
  const asList = x => x == null ? adaData().map(m => m.id) : Array.isArray(x) ? x : [x];
  function pilihan() {
    const ada = adaData().map(m => m.id), s = (S().set.pilihMk || []).filter(id => ada.includes(id));
    return s.length ? s : ada;
  }
  const semuaDipilih = () => !(S().set.pilihMk || []).filter(id => adaData().some(m => m.id === id)).length || pilihan().length === adaData().length;
  // count(mkId) → angka di tiap chip (jumlah soal/kartu); onChange dipanggil setelah pilihan berubah
  function mkPicker(count, judul) {
    const sel = pilihan(), all = semuaDipilih(), sem = MKS().filter(m => m.semester === 1);
    return '<div class="mk-pick"><div class="mp-h">' + Icon("sliders") + "<b>" + (judul || lab("Pilih mata kuliah", "اختر المقررات")) + '</b><small class="muted">' + lab("bisa satu, beberapa, atau semua", "مقرر واحد أو أكثر أو الكل") + "</small></div>" +
      '<div class="mp-chips"><button class="mp-chip all ' + (all ? "on" : "") + '" data-mk="*"><span class="mp-ic">' + Icon("grid") + "</span><span>" + lab("Semua", "الكل") + "</span></button>" +
      sem.map(m => { const ada = Kuliah.list(m.id).length > 0, on = ada && !all && sel.includes(m.id), c = ada && count ? count(m.id) : null;
        return '<button class="mp-chip t' + (m.tema || 0) + (on ? " on" : "") + (ada ? "" : " soon") + '" data-mk="' + m.id + '"' + (ada ? "" : ' disabled title="Modul segera hadir"') + '><span class="mp-ic">' + Icon(m.ikon) + "</span><span>" + one(m.nama, U.lang === "ar" ? "ar" : "id") + "</span>" + (c != null ? "<i>" + n(c) + "</i>" : ada ? "" : "<i>" + Icon("hourglass") + "</i>") + "</button>"; }).join("") + "</div></div>";
  }
  function bindPicker(root, onChange) {
    $$(".mp-chip", root).forEach(b => b.onclick = () => {
      if (b.disabled) return;
      const id = b.dataset.mk, ada = adaData().map(m => m.id);
      let s = semuaDipilih() ? [] : pilihan().slice();
      if (id === "*") s = [];
      else if (!s.length) s = [id];
      else if (s.includes(id)) s = s.filter(x => x !== id);
      else s.push(id);
      if (s.length === ada.length) s = [];
      S().set.pilihMk = s; Store.save(); Audio2.sfx("tap");
      onChange && onChange();
    });
  }
  const namaMk = id => { const m = mkById(id); return m ? m.nama.id : id; };
  const labelPilihan = () => semuaDipilih() ? lab("Semua mata kuliah", "جميع المقررات") : pilihan().map(id => esc(namaMk(id))).join(" · ");

  function bankSoal(mkIds, dari, sampai, onlyRead) {
    const out = [], ids = asList(mkIds), multi = ids.length > 1;
    ids.forEach(id => Kuliah.list(id).forEach(p => {
      if (dari && (p.no < dari || p.no > sampai)) return;
      if (onlyRead && !(S().baca[pKey(id, p.no)] || {}).terakhir) return;
      const L = p.latihan || {}, src = (multi ? namaMk(id) + " · " : "") + "P" + p.no;
      (L.pg || []).forEach(q => out.push(Object.assign({ src }, q)));
      (L.bs || []).forEach(q => out.push(Object.assign(Games.bsToPg(q), { src })));
    }));
    return out;
  }
  function arena() {
    const modes = [
      ["harian", "sun", "Tantangan Harian", "تحدي اليوم", "5 soal acak sekali sehari · +30 XP", "خمسة أسئلة يوميًا"],
      ["kilat", "bolt", "Kuis Kilat", "اختبار سريع", "10 soal dari materi yang sudah kamu buka", "عشرة أسئلة"],
      ["cepat", "timer", "Adu Cepat 60 Detik", "سباق ٦٠ ثانية", "Benar/salah sebanyak mungkin dalam 1 menit", "أكبر عدد في دقيقة"],
      ["tahan", "shield", "Tahan Uji", "الصمود", "Terus menjawab sampai 3 lentera padam", "ثلاث فرص فقط"],
      ["gabungan", "layers", "Ujian Gabungan", "اختبار شامل", "30 soal acak dari mata kuliah pilihan · 40 menit", "ثلاثون سؤالًا من المقررات المختارة"]
    ];
    const hist = S().ujian.slice(0, 12), sel = pilihan();
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("trophy", "ph-ic") + "<div><h1>" + lab("Arena Ujian", "ساحة الاختبارات") + '</h1><p class="muted">' + lab("Uji hafalan dan pemahaman lintas pertemuan dan lintas mata kuliah. Pilih mata kuliah yang ingin diujikan.", "اختبر نفسك في المقررات التي تختارها") + "</p></div></div>" +
      mkPicker(id => bankSoal(id).length, lab("Mata kuliah yang diujikan", "المقررات المختارة")) +
      '<p class="mp-sum">' + Icon("target") + "<span>" + labelPilihan() + " · <b>" + n(bankSoal(sel).length) + "</b> " + lab("soal di bank soal", "سؤالًا") + "</span></p>" +
      '<div class="arena-grid">' + modes.map((md, i) => '<a class="ar-tile st" style="--i:' + i + '" href="#/arena/' + md[0] + '"><span class="at-ic">' + Icon(md[1]) + "</span><b>" + lab(md[2], md[3]) + "</b><small>" + lab(md[4], md[5]) + "</small>" + bestChip(md[0]) + "</a>").join("") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Simulasi UTS & UAS per mata kuliah", "الاختبارات النصفية والنهائية") + "</h2></div>" +
      '<div class="exam-list">' + sel.map((id, i) => { const m = mkById(id), u1 = Store.terbaikUjian("uts-" + id), u2 = Store.terbaikUjian("uas-" + id);
        return '<div class="ex-row st" style="--i:' + i + '"><span class="mk-ic t' + (m.tema || 0) + '">' + Icon(m.ikon) + "</span><div class=\"ex-b\"><b>" + one(m.nama) + "</b><small>" + one(m.dosen) + "</small></div>" +
          '<a class="btn sm" href="#/arena/uts/' + id + '">' + Icon("medal") + "UTS" + (u1 >= 0 ? " · " + n(u1) + "%" : "") + '</a><a class="btn sm gold" href="#/arena/uas/' + id + '">' + Icon("seal") + "UAS" + (u2 >= 0 ? " · " + n(u2) + "%" : "") + "</a></div>"; }).join("") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Riwayat ujian", "سجل الاختبارات") + "</h2></div>" +
      (hist.length ? '<div class="hist">' + hist.map(h => '<div class="hist-r"><span class="hist-n">' + esc(namaUjian(h.id)) + '</span><span class="bar"><i style="width:' + Math.min(100, h.pct) + '%"></i></span><b>' + n(h.pct) + (h.id === "cepat" || h.id === "tahan" ? "" : "%") + "</b><small>" + new Date(h.ts).toLocaleDateString("id-ID", { day: "numeric", month: "short" }) + "</small></div>").join("") + "</div>" : empty("trophy", "Belum ada riwayat. Ayo mulai!", "لا يوجد سجل بعد")) + "</div>";
    bindPicker(view, () => route(true));
  }
  const namaUjian = id => ({ harian: "Tantangan Harian", kilat: "Kuis Kilat", cepat: "Adu Cepat", tahan: "Tahan Uji", gabungan: "Ujian Gabungan" }[id] || (id.startsWith("uts-") ? "UTS " + namaMk(id.slice(4)) : id.startsWith("uas-") ? "UAS " + namaMk(id.slice(4)) : id));
  function bestChip(mode) { const b = Store.terbaikUjian(mode); return b >= 0 ? '<span class="gt-best">' + Icon("star8") + n(b) + (mode === "tahan" || mode === "cepat" ? "" : "%") + "</span>" : ""; }

  function arenaRun(mode, mkId) {
    const back = '<a class="crumb" href="#/arena">' + Icon("left") + lab("Arena", "الساحة") + "</a>";
    view.innerHTML = '<div class="wrap arena-run">' + back + '<div class="ar-head"></div><div class="g-host"></div></div>';
    const host = $(".g-host"), head = $(".ar-head");
    const H = (ic, id, ar, sub) => head.innerHTML = '<div class="page-h">' + Icon(ic, "ph-ic") + "<div><h1>" + lab(id, ar) + '</h1><p class="muted">' + sub + "</p></div></div>";
    let ctl = null;
    const kh = e => host._key && !/input|textarea/i.test(document.activeElement.tagName) && host._key(e);
    addEventListener("keydown", kh); cleanup.push(() => { removeEventListener("keydown", kh); ctl && ctl.stop && ctl.stop(); });
    const sel = mode === "uts" || mode === "uas" ? [mkId] : pilihan(), all = bankSoal(sel);
    if (!all.length) { host.innerHTML = empty("info", "Bank soal belum tersedia.", "لا توجد أسئلة"); return; }
    const subMk = mode === "uts" || mode === "uas" ? "" : '<span class="mp-mini">' + Icon("layers") + labelPilihan() + "</span>";

    if (mode === "harian") {
      const key = U.todayKey(), done = S().harian[key];
      H("sun", "Tantangan Harian", "تحدي اليوم", esc(U.masehi()) + subMk);
      if (done && done.selesai) { host.innerHTML = '<div class="g-result"><div class="gr-stars"><span class="on">' + Icon("sun") + '</span></div><div class="gr-msg">' + lab("Tantangan hari ini sudah selesai. Nilai: " + done.skor + "/5", "أنجزت تحدي اليوم") + '</div><div class="gr-meta">' + lab("Kembali lagi besok, insya Allah.", "عُد غدًا إن شاء الله") + '</div><div class="gr-act"><a class="btn" href="#/arena/kilat">' + Icon("bolt") + lab("Kuis Kilat", "اختبار سريع") + "</a></div></div>"; return; }
      let seed = U.dayNum(); const rnd = () => (seed = (seed * 9301 + 49297) % 233280) / 233280;
      const qs = all.map(q => [rnd(), q]).sort((a, b) => a[0] - b[0]).slice(0, 5).map(x => x[1]);
      ctl = Games.pg(host, qs, { acak: false, onDone: r => { S().harian[key] = { selesai: true, skor: r.benar }; Store.save(); Store.addXP(30, "Tantangan harian"); Store.catatUjian("harian", r.benar, r.total, r.durasi); return { xp: 30 + r.benar * 0 }; } });
    } else if (mode === "kilat") {
      let bank = bankSoal(sel, 0, 0, true); if (bank.length < 10) bank = all;
      H("bolt", "Kuis Kilat", "اختبار سريع", lab("10 soal acak", "عشرة أسئلة") + subMk);
      ctl = Games.pg(host, pick(bank, 10), { onDone: r => { Store.catatUjian("kilat", r.benar, r.total, r.durasi); return { xp: 0 }; } });
    } else if (mode === "cepat") {
      const bs = []; sel.forEach(id => Kuliah.list(id).forEach(p => ((p.latihan || {}).bs || []).forEach(q => bs.push(Object.assign({ src: (sel.length > 1 ? namaMk(id) + " · " : "") + "P" + p.no }, q)))));
      H("timer", "Adu Cepat 60 Detik", "سباق ٦٠ ثانية", lab("Tombol keyboard: ← benar, → salah", "أجب بسرعة") + subMk);
      ctl = Games.bs(host, bs, { waktu: 60, onDone: r => { const prev = Store.terbaikUjian("cepat"); S().ujian.unshift({ id: "cepat", benar: r.benar, total: r.total, pct: r.benar, ts: Date.now() }); Store.save(); const xp = Math.max(0, r.benar - Math.max(prev, 0)) * 3 + 10; Store.addXP(xp, "Adu cepat"); return { xp }; } });
    } else if (mode === "tahan") {
      H("shield", "Tahan Uji", "الصمود", lab("3 lentera = 3 kesempatan salah", "ثلاث فرص") + subMk);
      ctl = Games.pg(host, shuffle(all), { lives: 3, auto: true, onDone: r => { const prev = Store.terbaikUjian("tahan"); S().ujian.unshift({ id: "tahan", benar: r.benar, total: r.total, pct: r.benar, ts: Date.now() }); Store.save(); if (r.benar >= 20) Store.beriLencana("tahan"); const xp = Math.max(0, r.benar - Math.max(prev, 0)) * 5 + 10; Store.addXP(xp, "Tahan uji"); return { xp }; } });
    } else if (mode === "gabungan") {
      H("layers", "Ujian Gabungan", "اختبار شامل", lab(n(Math.min(30, all.length)) + " soal · 40 menit", "ثلاثون سؤالًا · ٤٠ دقيقة") + subMk);
      host.innerHTML = '<div class="exam-intro"><div class="ei-rules"><h3>' + Icon("info") + lab("Ketentuan", "التعليمات") + "</h3><ul><li>" + lab("Soal diacak dari seluruh pertemuan mata kuliah yang kamu pilih.", "أسئلة عشوائية من المقررات المختارة") + "</li><li>" + lab("Waktu 40 menit; saat habis, ujian selesai.", "٤٠ دقيقة") + "</li><li>" + lab("Label di tiap soal menunjukkan mata kuliah & pertemuan asalnya.", "يظهر مصدر كل سؤال") + '</li></ul></div><button class="btn gold lg ei-go">' + Icon("play") + lab("Mulai ujian", "ابدأ الاختبار") + "</button></div>";
      $(".ei-go").onclick = () => { Audio2.sfx("open"); ctl = Games.pg(host, pick(all, 30), { waktu: 40 * 60, onDone: r => { const pct = Store.catatUjian("gabungan", r.benar, r.total, r.durasi); if (pct >= 70) Store.addXP(20, "Ujian gabungan"); return { xp: pct >= 70 ? 20 : 0 }; } }); };
    } else if (mode === "uts" || mode === "uas") {
      const m = mkById(mkId); if (!m) return notFound();
      const uts = mode === "uts";
      const bank = bankSoal(m.id, 1, uts ? 8 : 16), jumlah = uts ? 25 : 40, menit = uts ? 30 : 50, id = mode + "-" + m.id;
      H(uts ? "medal" : "seal", (uts ? "Simulasi UTS " : "Simulasi UAS ") + m.nama.id, (uts ? "الاختبار النصفي: " : "الاختبار النهائي: ") + m.nama.ar, lab(n(Math.min(jumlah, bank.length)) + " soal · " + n(menit) + " menit · nilai lulus 70", "النجاح ٧٠٪"));
      host.innerHTML = '<div class="exam-intro"><div class="ei-rules"><h3>' + Icon("info") + lab("Ketentuan", "التعليمات") + "</h3><ul><li>" + lab("Soal diacak dari pertemuan " + (uts ? "1–8" : "1–16") + ".", "أسئلة عشوائية") + "</li><li>" + lab("Waktu berjalan otomatis; saat habis, ujian selesai.", "ينتهي الاختبار بانتهاء الوقت") + "</li><li>" + lab("Penjelasan jawaban muncul setelah tiap soal.", "يظهر الشرح بعد كل سؤال") + "</li><li>" + lab("Nilai ≥ 70 membuka lencana" + (uts ? "." : " dan sertifikat (bila semua pertemuan selesai)."), "٧٠٪ للنجاح") + '</li></ul></div><button class="btn gold lg ei-go">' + Icon("play") + lab("Mulai ujian", "ابدأ الاختبار") + "</button></div>";
      $(".ei-go").onclick = () => {
        Audio2.sfx("open");
        ctl = Games.pg(host, pick(bank, jumlah), { waktu: menit * 60, onDone: r => { const pct = Store.catatUjian(id, r.benar, r.total, r.durasi); if (pct >= 70) Store.beriLencana(mode); return { xp: 0, next: !uts && pct >= 70 ? { label: "Lihat sertifikat", ar: "الشهادة", fn: () => location.hash = "#/sertifikat/" + m.id } : null }; } });
      };
    } else notFound();
  }

  /* ===================== MURAJA'AH (SRS) ===================== */
  function allCards(mkIds) {
    const out = [], ids = asList(mkIds), multi = ids.length > 1;
    ids.forEach(id => { const m = mkById(id); if (!m) return; Kuliah.list(id).forEach(p => (p.istilah || []).forEach((c, i) => out.push(Object.assign({ key: pKey(id, p.no) + "/i" + i, src: (multi ? m.nama.id + " · " : "") + "P" + p.no, mk: id, no: p.no }, c)))); });
    return out;
  }
  function dueCards(mkIds) { const d = U.dayNum(); return allCards(mkIds).filter(c => { const s = Store.srs(c.key); return s.box > 0 && s.due <= d; }); }
  function murajaah(mode) {
    const sel = pilihan(), cards = allCards(sel), due = dueCards(sel), baru = cards.filter(c => Store.srs(c.key).box === 0);
    const boxes = [1, 2, 3, 4, 5].map(b => cards.filter(c => Store.srs(c.key).box === b).length);
    if (mode === "mulai" || mode === "baru" || mode === "semua") {
      const deck = mode === "mulai" ? due : mode === "baru" ? baru.slice(0, 12) : cards;
      view.innerHTML = '<div class="wrap"><a class="crumb" href="#/murajaah">' + Icon("left") + lab("Muraja'ah", "المراجعة") + '</a><p class="mp-sum">' + Icon("layers") + "<span>" + labelPilihan() + '</span></p><div class="g-host"></div></div>';
      const host = $(".g-host");
      if (!deck.length) { host.innerHTML = empty("checkCircle", "Tidak ada kartu untuk diulang sekarang. Alhamdulillah!", "لا توجد بطاقات الآن"); return; }
      Games.kartu(host, deck, { acak: true });
      const kh = e => host._key && host._key(e); addEventListener("keydown", kh); cleanup.push(() => removeEventListener("keydown", kh));
      return;
    }
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("cards", "ph-ic") + "<div><h1>" + lab("Muraja'ah Istilah", "مراجعة المصطلحات") + '</h1><p class="muted">' + lab("Sistem pengulangan berjarak (5 kotak Leitner): kartu yang kamu ingat akan muncul makin jarang, yang lupa akan muncul lagi besok.", "نظام التكرار المتباعد") + "</p></div></div>" +
      mkPicker(id => allCards(id).length, lab("Mata kuliah yang di-muraja'ah", "المقررات المراد مراجعتها")) +
      '<p class="mp-sum">' + Icon("cards") + "<span>" + labelPilihan() + " · <b>" + n(cards.length) + "</b> " + lab("kartu", "بطاقة") + " · <b>" + n(due.length) + "</b> " + lab("jatuh tempo", "مستحقة") + "</span></p>" +
      '<div class="leitner">' + boxes.map((c, i) => '<div class="lt-box st" style="--i:' + i + '"><span class="lt-n">' + n(i + 1) + "</span><b>" + n(c) + "</b><small>" + lab(["setiap hari", "2 hari", "4 hari", "8 hari", "16 hari"][i], ["يوميًا", "يومان", "٤ أيام", "٨ أيام", "١٦ يومًا"][i]) + "</small></div>").join("") + "</div>" +
      '<div class="mj-act"><a class="btn gold lg ' + (due.length ? "" : "disabled") + '" href="#/murajaah/mulai">' + Icon("play") + lab("Ulang " + due.length + " kartu jatuh tempo", "راجع " + arNum(due.length) + " بطاقة") + '</a><a class="btn lg" href="#/murajaah/baru">' + Icon("sparkle") + lab("Pelajari kartu baru (" + baru.length + ")", "بطاقات جديدة") + '</a><a class="btn ghost lg" href="#/murajaah/semua">' + Icon("cards") + lab("Semua kartu (" + cards.length + ")", "كل البطاقات") + "</a></div>" +
      '<p class="muted sm center">' + lab("Pintasan keyboard: Spasi = balik kartu, 1 = Lupa, 2 = Ragu, 3 = Ingat.", "اختصارات لوحة المفاتيح") + "</p></div>";
    bindPicker(view, () => route(true));
  }

  /* ===================== KAMUS ISTILAH ===================== */
  function istilah(mkId) {
    if (mkId && mkById(mkId)) { S().set.pilihMk = [mkId]; Store.save(); history.replaceState(null, "", "#/istilah"); }
    const cards = allCards(pilihan());
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("language", "ph-ic") + "<div><h1>" + lab("Kamus Istilah", "معجم المصطلحات") + '</h1><p class="muted">' + lab(cards.length + " istilah kunci dwibahasa · " + labelPilihan(), arNum(cards.length) + " مصطلحًا") + "</p></div></div>" +
      mkPicker(id => allCards(id).length, lab("Tampilkan istilah dari", "اعرض مصطلحات")) +
      '<label class="search-box">' + Icon("search") + '<input type="search" class="is-q" placeholder="Cari istilah… / ابحث"></label>' +
      '<div class="is-list"></div></div>';
    const listEl = $(".is-list");
    const draw = q => {
      q = (q || "").trim().toLowerCase();
      const f = cards.filter(c => !q || (c.ar + " " + (c.latin || "") + " " + U.plain(c.id) + " " + U.plain(c.def)).toLowerCase().includes(q));
      listEl.innerHTML = f.map(c => '<details class="is-item"><summary><span class="is-ar" lang="ar">' + esc(c.ar) + '</span><span class="is-id">' + (c.latin ? "<i>" + esc(c.latin) + "</i> · " : "") + one(c.id, "id") + '</span><span class="q-src">' + esc(c.src) + "</span>" + Icon("down", "ak-ic") + '</summary><div class="is-b">' + (c.def ? bi(c.def) : "") + '<a class="btn sm ghost" href="#/mk/' + c.mk + "/" + c.no + '">' + Icon("book") + lab("Buka pertemuan " + c.no, "افتح المحاضرة") + "</a></div></details>").join("") || empty("search", "Istilah tidak ditemukan.", "لا نتائج");
    };
    draw(); $(".is-q").oninput = U.debounce(e => draw(e.target.value), 200);
    bindPicker(view, () => route(true));
  }

  /* ===================== JADWAL ===================== */
  function jadwal() {
    const today = new Date().getDay(), order = [6, 0, 1, 2, 3, 4, 5];
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("calendar", "ph-ic") + "<div><h1>" + lab("Jadwal Kuliah Pekanan", "الجدول الأسبوعي") + '</h1><p class="muted">' + lab("Semester 1 · " + PROGRAM.angkatan.id, "الفصل الأول") + "</p></div></div>" +
      '<div class="jadwal">' + order.map((d, i) => { const m = MKS().find(x => x.hari === d && x.semester === 1); return '<div class="jd-day st ' + (d === today ? "today" : "") + '" style="--i:' + i + '"><div class="jd-h"><b>' + lab(HARI[d][0], HARI[d][1]) + "</b>" + (d === today ? '<span class="pill on">' + lab("Hari ini", "اليوم") + "</span>" : "") + "</div>" +
        (m ? '<a href="#/mk/' + m.id + '" class="jd-mk"><span class="mk-ic t' + (m.tema || 0) + '">' + Icon(m.ikon) + "</span><div><b>" + one(m.nama) + "</b><small>" + one(m.dosen) + "</small><small>" + one(m.kitab) + "</small></div></a>" : '<p class="muted">' + lab("Libur · hari Jumat", "عطلة") + "</p>") + "</div>"; }).join("") + "</div></div>";
  }

  /* ===================== PENCARIAN ===================== */
  function cari(q) {
    view.innerHTML = '<div class="wrap"><div class="page-h">' + Icon("search", "ph-ic") + "<div><h1>" + lab("Pencarian", "البحث") + '</h1><p class="muted">' + lab("Cari di seluruh materi, istilah, dan soal — dalam bahasa Indonesia maupun Arab.", "ابحث في كل المحتوى") + '</p></div></div><label class="search-box big">' + Icon("search") + '<input type="search" class="cq" autofocus placeholder="mis. israiliyyat, السياق, ijma\'…" value="' + esc(q) + '"></label><div class="c-res"></div></div>';
    const res = $(".c-res"), inp = $(".cq");
    const strip = s => s.toLowerCase().replace(/[ً-ٰٟۖ-ۭ]/g, "").replace(/[أإآٱ]/g, "ا");
    const run = v => {
      v = v.trim(); history.replaceState(null, "", "#/cari?q=" + encodeURIComponent(v));
      if (v.length < 2) { res.innerHTML = '<p class="muted">' + lab("Ketik minimal 2 huruf.", "اكتب حرفين على الأقل") + "</p>"; return; }
      const sv = strip(v), hits = [];
      MKS().forEach(m => Kuliah.list(m.id).forEach(p => {
        const texts = [p.judul, p.ringkas].concat(p.isi.flatMap(b => [b, b.judul, b.q, b.a, b.lughah, b.istilah].concat(b.item || []).filter(Boolean)));
        let snip = null;
        for (const t of texts) { for (const s of [U.pickId(t), U.pickAr(t)]) { if (typeof s === "string" && strip(s).includes(sv)) { snip = s; break; } } if (snip) break; }
        if (snip) hits.push({ m, p, snip });
        (p.istilah || []).forEach(c => { if (strip(c.ar + " " + (c.latin || "") + " " + U.plain(c.id)).includes(sv)) hits.push({ m, p, istilah: c }); });
      }));
      res.innerHTML = '<p class="muted sm">' + n(hits.length) + " " + lab("hasil", "نتيجة") + "</p>" + hits.slice(0, 80).map(h => {
        const s = U.plain(h.snip || ""), i = strip(s).indexOf(sv), cut = s.slice(Math.max(0, i - 70), i + 130);
        return '<a class="c-hit" href="#/mk/' + h.m.id + "/" + h.p.no + '"><span class="q-src">P' + h.p.no + "</span><div><b>" + one(h.p.judul) + "</b>" + (h.istilah ? '<p><span class="pill">' + lab("Istilah", "مصطلح") + '</span> <span lang="ar">' + esc(h.istilah.ar) + "</span> — " + esc(U.pickId(h.istilah.id)) + "</p>" : '<p class="' + (/[؀-ۿ]/.test(cut) ? "ar-txt" : "") + '">…' + esc(cut) + "…</p>") + "</div>" + Icon("right") + "</a>";
      }).join("");
    };
    inp.oninput = U.debounce(e => run(e.target.value), 250);
    if (q) run(q); else run("");
    setTimeout(() => inp.focus(), 50);
  }

  /* ===================== PROFIL & RAPOR ===================== */
  function profil() {
    const pr = S().profil || {}, lv = Store.level(), st = Store.streak();
    const days = []; for (let i = 13; i >= 0; i--) { const d = new Date(); d.setDate(d.getDate() - i); const k = U.todayKey(d); days.push({ d, v: S().hari[k] || {} }); }
    const maxXP = Math.max(30, ...days.map(x => x.v.xp || 0));
    const totalMenit = Math.round(Object.values(S().hari).reduce((s, d) => s + (d.menit || 0), 0));
    const ada = adaData(), rid = ada.some(m => m.id === S().set.raporMk) ? S().set.raporMk : (ada[0] || {}).id, mk = mkById(rid) || MKS()[0], list = Kuliah.list(mk.id);
    const ringkas = ada.map(m => { const pr = mkProgress(m.id), sk = Object.entries(S().skor).filter(([k, x]) => k.startsWith(m.id + "/") && x.total), avg = sk.length ? Math.round(sk.reduce((s, [, x]) => s + x.best / x.total, 0) / sk.length * 100) : null, u1 = Store.terbaikUjian("uts-" + m.id), u2 = Store.terbaikUjian("uas-" + m.id);
      return '<tr><td><span class="mk-dot t' + (m.tema || 0) + '">' + Icon(m.ikon) + '</span><a href="#/mk/' + m.id + '">' + esc(m.nama.id) + "</a></td><td>" + n(pr.done) + "/" + n(pr.total) + "</td><td>" + (avg != null ? n(avg) + "%" : "–") + "</td><td>" + (u1 >= 0 ? n(u1) + "%" : "–") + "</td><td>" + (u2 >= 0 ? n(u2) + "%" : "–") + "</td></tr>"; }).join("");
    view.innerHTML = '<div class="wrap">' +
      '<div class="prof-card"><div class="pf-av">' + Icon(pr.avatar || "moonStar") + '</div><div class="pf-b"><h1>' + esc(pr.nama || "Penuntut Ilmu") + "</h1><p class=\"muted\">" + (pr.nim ? "NIM " + esc(pr.nim) + " · " : "") + one(PROGRAM.angkatan) + "</p>" +
      '<div class="pf-lv"><span class="ring" style="--p:' + Math.round(lv.pct * 100) + '"><b>' + n(lv.no) + "</b></span><div><b>" + lab(lv.nama.id, lv.nama.ar) + '</b><div class="bar"><i style="width:' + Math.round(lv.pct * 100) + '%"></i></div><small>' + n(S().xp) + " XP" + (lv.next ? " · " + lab(n(lv.sisa) + " XP menuju " + lv.next.id, "بقي " + arNum(lv.sisa)) : "") + "</small></div></div></div>" +
      '<button class="btn ghost sm pf-edit">' + Icon("edit") + lab("Ubah", "تعديل") + "</button></div>" +
      '<div class="stats">' + stat("streak", Icon("flame", "big"), n(st), lab("hari istiqamah", "يوم"), "#/profil") + stat("baca", Icon("clock", "big"), n(totalMenit), lab("menit belajar", "دقيقة"), "#/profil") + stat("skor", Icon("seal", "big"), n(Object.keys(S().lencana).length) + "/" + n(Store.LENCANA.length), lab("lencana", "الأوسمة"), "#/profil") + stat("level", Icon("cards", "big"), n(S().dilihat.kartu || 0), lab("kartu diulang", "بطاقة"), "#/murajaah") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Aktivitas 14 hari", "النشاط") + '</h2></div><div class="act-chart">' + days.map(x => '<div class="ac-col" title="' + x.d.toLocaleDateString("id-ID") + ": " + (x.v.xp || 0) + ' XP"><i style="height:' + Math.round((x.v.xp || 0) / maxXP * 100) + '%"></i><small>' + x.d.toLocaleDateString("id-ID", { weekday: "narrow" }) + "</small></div>").join("") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Ringkasan semua mata kuliah", "ملخص المقررات") + '</h2><button class="btn ghost sm rp-print">' + Icon("print") + lab("Cetak rapor", "طباعة") + "</button></div>" +
      '<div class="tabel-scroll"><table class="tabel rapor"><thead><tr><th>' + lab("Mata kuliah", "المقرر") + "</th><th>" + lab("Dibaca", "مقروءة") + "</th><th>" + lab("Rata-rata latihan", "متوسط التمارين") + "</th><th>UTS</th><th>UAS</th></tr></thead><tbody>" + ringkas + "</tbody></table></div>" +
      '<div class="sec-h"><h2>' + lab("Rapor " + mk.nama.id, "كشف الدرجات: " + mk.nama.ar) + "</h2></div>" +
      '<div class="mp-chips rp-tabs">' + ada.map(m => '<button class="mp-chip t' + (m.tema || 0) + (m.id === mk.id ? " on" : "") + '" data-rp="' + m.id + '"><span class="mp-ic">' + Icon(m.ikon) + "</span><span>" + esc(m.nama.id) + "</span></button>").join("") + "</div>" +
      '<div class="tabel-scroll"><table class="tabel rapor"><thead><tr><th>#</th><th>' + lab("Pertemuan", "المحاضرة") + "</th><th>" + lab("Baca", "قراءة") + "</th><th>PG</th><th>B/S</th><th>" + lab("Lainnya", "أخرى") + "</th><th>" + lab("Wajib", "الواجب") + "</th></tr></thead><tbody>" +
      list.map(p => {
        const k = pKey(mk.id, p.no), sc = id => { const x = S().skor[k + "/" + id]; return x ? Math.round(x.best / x.total * 100) + "%" : "–"; };
        const lain = ["jodoh", "urut", "isian", "pilah"].map(id => S().skor[k + "/" + id]).filter(Boolean), lainP = lain.length ? Math.round(lain.reduce((s, x) => s + x.best / x.total, 0) / lain.length * 100) + "%" : "–";
        const tg = (p.tugas || []).length, ph = (p.tugas || []).filter((_, i) => (S().tugas[k + "/tugas/" + i] || {}).nilai === 2).length;
        return "<tr><td>" + n(p.no) + '</td><td><a href="#/mk/' + mk.id + "/" + p.no + '">' + one(p.judul, "id") + "</a></td><td>" + ((S().baca[k] || {}).selesai ? Icon("checkCircle", "ok") : "–") + "</td><td>" + sc("pg") + "</td><td>" + sc("bs") + "</td><td>" + lainP + "</td><td>" + n(ph) + "/" + n(tg) + "</td></tr>";
      }).join("") + "</tbody></table></div>" +
      '<div class="sec-h"><h2>' + lab("Lencana", "الأوسمة") + '</h2></div><div class="badges">' + Store.LENCANA.map(l => { const got = S().lencana[l.id]; return '<div class="bdg ' + (got ? "got" : "") + '" title="' + esc(l.ket) + '"><span class="bdg-ic">' + Icon(got ? l.ikon : "lock") + "</span><b>" + lab(l.nama, l.ar) + "</b><small>" + esc(l.ket) + "</small></div>"; }).join("") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Riwayat XP", "سجل النقاط") + '</h2></div><div class="xp-hist">' + (S().riwayat.slice(0, 15).map(r => '<div><span>+' + n(r.xp) + "</span><small>" + esc(r.ket) + "</small><time>" + new Date(r.t).toLocaleString("id-ID", { day: "numeric", month: "short", hour: "2-digit", minute: "2-digit" }) + "</time></div>").join("") || '<p class="muted">-</p>') + "</div>" +
      '<div class="sec-h"><h2>' + lab("Cadangan & data", "النسخ الاحتياطي") + '</h2></div><div class="backup"><p class="muted sm">' + lab("Kemajuan belajar tersimpan di perangkat ini saja. Unduh cadangan untuk dipindah ke HP/laptop lain.", "التقدم محفوظ على هذا الجهاز فقط") + "</p>" +
      '<button class="btn bk-ex">' + Icon("download") + lab("Unduh cadangan", "تنزيل") + '</button><label class="btn ghost">' + Icon("upload") + lab("Pulihkan dari berkas", "استعادة") + '<input type="file" accept=".json,application/json" class="bk-im" hidden></label><button class="btn ghost danger bk-rs">' + Icon("trash") + lab("Mulai dari nol", "إعادة الضبط") + "</button></div>" +
      footer() + "</div>";
    $(".pf-edit").onclick = () => onboarding(true);
    $(".rp-print").onclick = () => window.print();
    $$("[data-rp]").forEach(b => b.onclick = () => { S().set.raporMk = b.dataset.rp; Store.save(); Audio2.sfx("tap"); route(true); });
    $(".bk-ex").onclick = () => { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([Store.ekspor()], { type: "application/json" })); a.download = "cadangan-forum-kuliah-" + U.todayKey() + ".json"; a.click(); U.toast(Icon("check") + " Cadangan diunduh", "ok"); };
    $(".bk-im").onchange = e => { const f = e.target.files[0]; if (!f) return; f.text().then(t => { Store.impor(t); applySettings(); chrome(); route(); U.toast(Icon("check") + " Kemajuan dipulihkan", "ok"); }).catch(err => U.toast(esc(err.message), "warn")); };
    $(".bk-rs").onclick = () => { if (confirm("Hapus semua kemajuan belajar di perangkat ini? Tindakan ini tidak bisa dibatalkan.")) { Store.reset(); location.hash = "#/"; location.reload(); } };
  }

  /* ===================== TENTANG ===================== */
  function tentang() {
    const c = SITE.contact;
    view.innerHTML = '<div class="wrap tentang"><div class="about-hero">' + logo("xl") + "<h1>" + esc(SITE.brand) + '</h1><p lang="ar" class="ar-big">' + SITE.brandAr + '</p><p class="muted">' + esc(SITE.tagline) + "</p></div>" +
      '<div class="dev-card"><div class="dev-av">' + Icon("pen") + "</div><div><small class=\"muted\">" + lab("Pengembang aplikasi", "مطوِّر التطبيق") + "</small><h2>" + esc(SITE.owner) + "</h2><p>" + esc(SITE.ownerBio) + '</p><div class="foot-c">' + (c.whatsapp ? '<a class="btn wa" target="_blank" rel="noopener" href="https://wa.me/' + c.whatsapp + '">' + Icon("chat") + "WhatsApp +" + esc(c.whatsapp) + "</a>" : "") + (c.email ? '<a class="btn ghost" href="mailto:' + c.email + '">' + Icon("mail") + esc(c.email) + "</a>" : "") + "</div></div></div>" +
      '<div class="sec-h"><h2>' + lab("Fitur aplikasi", "مزايا التطبيق") + '</h2></div><div class="feat-grid">' + SITE.fitur.map((f, i) => '<div class="feat st" style="--i:' + i + '">' + Icon(f[0]) + "<b>" + esc(f[1]) + "</b><small>" + esc(f[2]) + "</small></div>").join("") + "</div>" +
      '<div class="sec-h"><h2>' + lab("Sumber materi", "مصادر المحتوى") + '</h2></div><div class="card"><p>' + fmt(SITE.sumber) + '</p><p class="muted sm">' + esc(SITE.disclaimer) + "</p></div>" + "</div>";
  }

  /* ===================== SERTIFIKAT ===================== */
  function sertifikat(mkId) {
    const m = mkById(mkId); if (!m) return notFound();
    const pr = mkProgress(mkId), uas = Store.terbaikUjian("uas-" + mkId), nama = (S().profil || {}).nama || "Penuntut Ilmu";
    if (pr.done < pr.total || uas < 70) {
      view.innerHTML = '<div class="wrap">' + empty("lock", "Sertifikat terbuka setelah semua " + pr.total + " pertemuan selesai dibaca (sekarang " + pr.done + ") dan nilai simulasi UAS ≥ 70 (terbaik: " + (uas < 0 ? "belum ada" : uas) + ").", "تُفتح الشهادة بعد إتمام المحاضرات والنجاح في الاختبار النهائي") + '<div class="center"><a class="btn" href="#/mk/' + mkId + '">' + lab("Kembali", "رجوع") + "</a></div></div>";
      return;
    }
    const tgl = new Date();
    view.innerHTML = '<div class="wrap"><div class="cert-act"><button class="btn gold c-print">' + Icon("print") + lab("Cetak / simpan PDF", "طباعة") + '</button></div><div class="cert"><div class="cert-in">' + Art.rosette("c-ros") +
      '<p class="c-bism" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p><p class="c-k" lang="ar">شهادة إتمام مقرر</p><h2>Sertifikat Penyelesaian Belajar Mandiri</h2>' +
      '<p>Diberikan kepada</p><h1 class="c-name">' + esc(nama) + "</h1>" +
      "<p>atas penyelesaian seluruh " + pr.total + " pertemuan dan simulasi UAS mata kuliah</p><h3>" + esc(m.nama.id) + ' · <span lang="ar">' + esc(m.nama.ar) + "</span></h3>" +
      '<p class="muted">Kitab <i>' + esc(U.pickId(m.kitab)) + "</i>" + (m.penulis ? " karya " + esc(U.pickId(m.penulis)) : "") + " · Dosen: " + esc(U.pickId(m.dosen)) + "</p>" +
      '<p>Nilai simulasi UAS terbaik: <b>' + uas + "</b></p>" +
      '<p class="c-date">' + esc(U.masehi(tgl)) + ' · <span lang="ar">' + esc(U.hijriAr(tgl)) + "</span></p>" +
      '<div class="c-sign"><div><span class="c-line"></span><b>' + esc(SITE.owner) + "</b><small>Pengembang " + esc(SITE.brand) + "</small></div></div>" +
      '<p class="c-note">Sertifikat ini adalah apresiasi belajar mandiri dari aplikasi ' + esc(SITE.brand) + ", bukan ijazah atau dokumen resmi lembaga.</p></div></div></div>";
    $(".c-print").onclick = () => window.print();
    Games.burst($(".cert"));
  }

  /* ===================== ONBOARDING ===================== */
  function onboarding(edit) {
    const pr = S().profil || {};
    const avatars = ["moonStar", "lantern", "star8", "quran", "palm", "mosque", "pen", "lamp", "tree", "compass"];
    const sh = $("#sheet");
    sh.innerHTML = '<div class="sheet-bg"></div><div class="sheet-card onb" role="dialog" aria-modal="true">' + (edit ? "" : '<div class="onb-top">' + logo("xl") + '<p class="bismillah" lang="ar">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p><h2>' + esc(SITE.brand) + '</h2><p class="muted">' + esc(SITE.tagline) + "</p></div>") +
      '<form class="onb-f"><label>Nama lengkap<input name="nama" required maxlength="60" value="' + esc(pr.nama || "") + '" placeholder="mis. Ahmad Fauzi"></label>' +
      '<label>NIM / nomor mahasiswa <small class="muted">(opsional)</small><input name="nim" maxlength="30" value="' + esc(pr.nim || "") + '"></label>' +
      '<div class="lbl">Sapaan</div><div class="seg"><button type="button" data-s="akhi" class="' + (pr.sapaan !== "ukhti" ? "on" : "") + '">Akhi · أخي</button><button type="button" data-s="ukhti" class="' + (pr.sapaan === "ukhti" ? "on" : "") + '">Ukhti · أختي</button></div>' +
      '<div class="lbl">Ikon profil</div><div class="av-pick">' + avatars.map(a => '<button type="button" data-a="' + a + '" class="' + ((pr.avatar || "moonStar") === a ? "on" : "") + '">' + Icon(a) + "</button>").join("") + "</div>" +
      (edit ? "" : '<div class="lbl">Bahasa materi</div><div class="seg lg-pick"><button type="button" data-l="id">Indonesia</button><button type="button" data-l="dual" class="on">Dua Bahasa</button><button type="button" data-l="ar">العربية</button></div>') +
      '<button class="btn gold lg" type="submit">' + Icon(edit ? "check" : "arrowRight") + (edit ? "Simpan" : "Mulai belajar · بسم الله") + "</button></form></div>";
    sh.classList.add("open");
    let sapaan = pr.sapaan || "akhi", avatar = pr.avatar || "moonStar", lang = "dual";
    sh.querySelectorAll("[data-s]").forEach(b => b.onclick = () => { sapaan = b.dataset.s; sh.querySelectorAll("[data-s]").forEach(x => x.classList.toggle("on", x === b)); Audio2.sfx("tap"); });
    sh.querySelectorAll("[data-a]").forEach(b => b.onclick = () => { avatar = b.dataset.a; sh.querySelectorAll("[data-a]").forEach(x => x.classList.toggle("on", x === b)); Audio2.sfx("pop"); });
    sh.querySelectorAll("[data-l]").forEach(b => b.onclick = () => { lang = b.dataset.l; sh.querySelectorAll("[data-l]").forEach(x => x.classList.toggle("on", x === b)); Audio2.sfx("tap"); });
    if (edit) sh.querySelector(".sheet-bg").onclick = () => { sh.classList.remove("open"); setTimeout(() => sh.innerHTML = "", 300); };
    sh.querySelector("form").onsubmit = e => {
      e.preventDefault();
      const f = new FormData(e.target);
      S().profil = Object.assign(pr, { nama: f.get("nama").trim(), nim: f.get("nim").trim(), sapaan, avatar, dibuat: pr.dibuat || Date.now() });
      if (!edit) S().set.lang = lang;
      Store.saveNow(); applySettings();
      sh.classList.remove("open"); setTimeout(() => sh.innerHTML = "", 300);
      Audio2.sfx("level"); route();
      if (!edit) U.toast(Icon("moonStar") + " Ahlan wa sahlan! Semoga Allah memudahkan jalan ilmu.", "gold", 4500);
    };
  }

  /* ===================== NOTIFIKASI XP / LEVEL / LENCANA ===================== */
  Store.onChange((kind, d) => {
    updateXP();
    if (kind === "xp" && d.n >= 10) { const c = $(".xp-pill"); if (c) { c.classList.remove("bump"); void c.offsetWidth; c.classList.add("bump"); } }
    if (kind === "level") { Audio2.sfx("level"); U.toast('<span class="t-lv">' + Icon("sparkle") + "</span><div><b>Naik level! " + esc(d.nama.id) + ' · <span lang="ar">' + d.nama.ar + "</span></b><small>Terus semangat menuntut ilmu.</small></div>", "gold big", 5000); }
    if (kind === "lencana") { setTimeout(() => Audio2.sfx("badge"), 400); U.toast('<span class="t-lv">' + Icon(d.ikon) + "</span><div><b>Lencana baru: " + esc(d.nama) + "</b><small>" + esc(d.ket) + "</small></div>", "gold big", 5000); }
  });

  /* Hitung waktu belajar aktif */
  setInterval(() => { if (document.visibilityState === "visible" && /#\/(mk|arena|murajaah)/.test(location.hash)) Store.catatWaktu(20); }, 20000);

  /* ===================== MULAI ===================== */
  function start() {
    applySettings(); chrome(); route();
    const sp = $("#splash");
    setTimeout(() => { sp.classList.add("out"); setTimeout(() => sp.remove(), 900); if (!S().profil) onboarding(false); }, Store.s.set.gerak ? 1500 : 200);
    if (S().set.musik) {
      const once = () => { Audio2.setVolume(S().set.vol); Audio2.play(S().set.musik); $(".snd-btn").classList.add("on"); removeEventListener("pointerdown", once); };
      addEventListener("pointerdown", once);
    }
    addEventListener("keydown", e => { if (e.key === "/" && !/input|textarea/i.test(document.activeElement.tagName)) { e.preventDefault(); location.hash = "#/cari"; } });
    if ("serviceWorker" in navigator && location.protocol.startsWith("http")) navigator.serviceWorker.register("sw.js").catch(() => {});
    Store.cekLencana();
  }
  start();
})();
