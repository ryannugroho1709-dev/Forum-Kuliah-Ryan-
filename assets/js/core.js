/* =====================================================================
   INTI APLIKASI
   - Kuliah: tempat semua data pertemuan didaftarkan oleh file di data/
   - U: kumpulan fungsi bantu (teks dwibahasa, format, tanggal, dll.)
   ===================================================================== */
window.Kuliah = (function () {
  const db = {}, teks = {};
  return {
    db, teksDb: teks,
    /* Dipanggil dari data/<mata-kuliah>/pNN.js */
    pertemuan(mk, p) { (db[mk] = db[mk] || {})[p.no] = p; p.mk = mk; },
    /* Dipanggil dari data/<mata-kuliah>/teks/pNN.js (teks asli tafrigh) */
    teks(mk, no, baris) { (teks[mk] = teks[mk] || {})[no] = baris; },
    list(mk) { return Object.values(db[mk] || {}).sort((a, b) => a.no - b.no); },
    get(mk, no) { return db[mk] && db[mk][no]; }
  };
})();

window.U = (function () {
  const AR_DIGITS = "٠١٢٣٤٥٦٧٨٩";
  let lang = "dual";

  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  }

  /* Format teks Indonesia: **tebal**, *miring*, [[teks arab]], {ayat}, baris kosong = paragraf */
  function fmt(s) {
    if (s == null) return "";
    let t = esc(s);
    t = t.replace(/\[\[([\s\S]+?)\]\]/g, '<span class="ar-in" lang="ar" dir="rtl">$1</span>');
    t = t.replace(/\{([^{}]+)\}/g, '<span class="q-in" lang="ar" dir="rtl">﴿$1﴾</span>');
    t = t.replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
    t = t.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    return t.split(/\n{2,}/).map(x => x.replace(/\n/g, "<br>")).join("</p><p>");
  }

  /* Format teks Arab: {ayat} diberi gaya mushaf, «...» / "..." diberi gaya hadits */
  function arFmt(s) {
    if (s == null) return "";
    let t = esc(s);
    t = t.replace(/\{([^{}]+)\}|﴿([^﴾]+)﴾/g, (m, a, b) => '<span class="q-in">﴿' + (a || b) + "﴾</span>");
    t = t.replace(/&quot;([^&]{2,}?)&quot;/g, '<span class="h-in">«$1»</span>');
    t = t.replace(/\*\*([\s\S]+?)\*\*/g, "<strong>$1</strong>");
    return t.split(/\n{2,}/).map(x => x.replace(/\n/g, "<br>")).join("</p><p>");
  }

  const isObj = x => x && typeof x === "object" && !Array.isArray(x);
  const pickId = x => isObj(x) ? (x.id != null ? x.id : x.ar) : x;
  const pickAr = x => isObj(x) ? (x.ar != null ? x.ar : x.id) : x;

  /* Satu baris label sesuai mode bahasa (tanpa paragraf) */
  function one(x, mode) {
    mode = mode || lang;
    if (x == null) return "";
    if (!isObj(x)) return fmtInline(x);
    if (mode === "ar" || (!x.id && x.ar)) return '<span lang="ar" dir="rtl" class="ar-txt">' + arInline(pickAr(x)) + "</span>";
    if (mode === "id" || !x.ar || !x.id) return fmtInline(pickId(x));
    return fmtInline(x.id) + ' <span class="ar-sub" lang="ar" dir="rtl">' + arInline(x.ar) + "</span>";
  }
  const fmtInline = s => fmt(s).replace(/<\/p><p>/g, " ");
  const arInline = s => arFmt(s).replace(/<\/p><p>/g, " ");

  /* Blok teks dwibahasa */
  function bi(x, cls) {
    if (x == null) return "";
    cls = cls || "";
    if (!isObj(x)) return '<div class="t-id ' + cls + '"><p>' + fmt(x) + "</p></div>";
    const ar = x.ar ? '<div class="t-ar ' + cls + '" lang="ar" dir="rtl"><p>' + arFmt(x.ar) + "</p></div>" : "";
    const id = x.id ? '<div class="t-id ' + cls + '"><p>' + fmt(x.id) + "</p></div>" : "";
    if (lang === "ar") return ar || id;
    if (lang === "id") return id || ar;
    if (ar && id) return '<div class="bi">' + ar + id + "</div>";
    return ar + id;
  }

  /* Teks polos untuk pencarian */
  const plain = x => (isObj(x) ? [x.id, x.ar].filter(Boolean).join(" ") : String(x || "")).replace(/[*\[\]{}]/g, "");

  const arNum = n => String(n).replace(/\d/g, d => AR_DIGITS[d]);
  const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const pick = (a, n) => shuffle(a).slice(0, n);
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const todayKey = (d) => { d = d || new Date(); return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0"); };
  const dayNum = (d) => Math.floor(((d || new Date()) - new Date(2000, 0, 1)) / 864e5);

  function hijri(d) {
    try {
      return new Intl.DateTimeFormat("id-ID-u-ca-islamic-umalqura", { day: "numeric", month: "long", year: "numeric" }).format(d || new Date());
    } catch (e) { return ""; }
  }
  function hijriAr(d) {
    try {
      return new Intl.DateTimeFormat("ar-SA-u-ca-islamic-umalqura", { weekday: "long", day: "numeric", month: "long", year: "numeric" }).format(d || new Date());
    } catch (e) { return ""; }
  }
  const masehi = (d, opt) => (d || new Date()).toLocaleDateString("id-ID", opt || { weekday: "long", day: "numeric", month: "long", year: "numeric" });

  function debounce(fn, ms) { let t; return function () { clearTimeout(t); const a = arguments; t = setTimeout(() => fn.apply(null, a), ms); }; }

  function toast(msg, kind, ms) {
    let box = $("#toasts");
    if (!box) { box = document.createElement("div"); box.id = "toasts"; document.body.appendChild(box); }
    const el = document.createElement("div");
    el.className = "toast " + (kind || "");
    el.innerHTML = msg;
    box.appendChild(el);
    requestAnimationFrame(() => el.classList.add("show"));
    setTimeout(() => { el.classList.remove("show"); setTimeout(() => el.remove(), 400); }, ms || 2600);
  }

  /* Memuat file data tambahan saat dibutuhkan (mis. teks asli) */
  const loaded = {};
  function loadScript(src) {
    if (loaded[src]) return loaded[src];
    loaded[src] = new Promise((res, rej) => {
      const s = document.createElement("script");
      s.src = src; s.onload = res; s.onerror = () => { delete loaded[src]; rej(new Error("Gagal memuat " + src)); };
      document.head.appendChild(s);
    });
    return loaded[src];
  }

  return {
    esc, fmt, arFmt, one, bi, plain, pickId, pickAr, isObj, arNum, shuffle, pick, $, $$, clamp,
    todayKey, dayNum, hijri, hijriAr, masehi, debounce, toast, loadScript,
    get lang() { return lang; }, set lang(v) { lang = v; }
  };
})();
