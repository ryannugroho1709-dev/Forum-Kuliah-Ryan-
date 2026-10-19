/* =====================================================================
   PENYUSUN TAMPILAN MATERI (blok-blok dwibahasa)
   Lihat PANDUAN.md untuk daftar jenis blok dan contohnya.
   ===================================================================== */
window.Render = (function () {
  const { bi, one, esc, fmt, arFmt, isObj, arNum } = U;
  const L = () => U.lang;
  const num = n => L() === "ar" ? arNum(n) : n;

  /* Judul dwibahasa (heading) */
  function head(x, tag, cls) {
    tag = tag || "h2";
    if (!isObj(x)) return "<" + tag + ' class="' + (cls || "") + '">' + fmt(x) + "</" + tag + ">";
    const ar = x.ar ? '<span class="h-ar" lang="ar" dir="rtl">' + arFmt(x.ar) + "</span>" : "";
    const id = x.id ? '<span class="h-id">' + fmt(x.id) + "</span>" : "";
    const inner = L() === "ar" ? (ar || id) : L() === "id" ? (id || ar) : ar + id;
    return "<" + tag + ' class="bi-h ' + (cls || "") + '">' + inner + "</" + tag + ">";
  }
  const label = (id, ar) => L() === "ar" ? '<span lang="ar">' + ar + "</span>" : L() === "id" ? id : id + ' <span class="ar-sub" lang="ar">' + ar + "</span>";

  const B = {
    pembuka: b => '<div class="blk pembuka rv">' + bi(b) + "</div>",
    judul: (b, i) => '<div class="blk rv judul-blk" id="sec-' + i + '">' + head(b, "h2", "sec-title") + "</div>",
    sub: b => '<div class="blk rv">' + head(b, "h3", "sub-title") + "</div>",
    p: b => '<div class="blk rv para">' + bi(b) + "</div>",

    definisi: b => '<div class="blk rv defn">' + (b.judul ? head(b.judul, "h3", "defn-title") : "") + '<div class="defn-grid">' +
      (b.lughah ? '<div class="defn-card"><div class="defn-tag">' + Icon("pen") + label("Secara Bahasa", "لغةً") + "</div>" + bi(b.lughah) + "</div>" : "") +
      (b.istilah ? '<div class="defn-card alt"><div class="defn-tag">' + Icon("key") + label("Secara Istilah", "اصطلاحًا") + "</div>" + bi(b.istilah) + "</div>" : "") +
      "</div></div>",

    ayat: b => dalil(b, "ayat", "quran", label("Ayat Al-Qur'an", "آية")),
    hadits: b => dalil(b, "hadits", "lamp", label("Hadits", "حديث")),
    atsar: b => dalil(b, "atsar", "scroll", label("Atsar Salaf", "أثر")),

    kutipan: b => '<figure class="blk rv kutipan">' + Icon("pen", "kq-ic") +
      (b.ar && L() !== "id" ? '<blockquote class="kq-ar" lang="ar" dir="rtl"><p>' + arFmt(b.ar) + "</p></blockquote>" : "") +
      (b.id && L() !== "ar" ? '<blockquote class="kq-id"><p>' + fmt(b.id) + "</p></blockquote>" : "") +
      (b.oleh ? "<figcaption>— " + one(b.oleh) + "</figcaption>" : "") + "</figure>",

    poin: b => '<div class="blk rv poin ' + (b.gaya || "") + '">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<div class="poin-grid">' +
      b.item.map((it, k) => '<div class="poin-card st" style="--i:' + k + '"><div class="poin-ic">' + (it.ikon ? Icon(it.ikon) : '<b>' + num(k + 1) + "</b>") + "</div>" +
        '<div class="poin-body">' + (it.judul ? head(it.judul, "h4") : "") + bi(it) + "</div></div>").join("") + "</div></div>",

    langkah: b => '<div class="blk rv langkah">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<ol class="tl">' +
      b.item.map((it, k) => '<li class="st" style="--i:' + k + '"><span class="tl-n">' + num(k + 1) + '</span><div class="tl-b">' + (it.judul ? head(it.judul, "h4") : "") + bi(it) + "</div></li>").join("") + "</ol></div>",

    peta: b => '<div class="blk rv peta">' + '<div class="peta-pusat">' + Icon(b.ikon || "star8") + one(b.pusat) + "</div>" +
      '<div class="peta-cabang" style="--n:' + b.cabang.length + '">' + b.cabang.map((c, k) => '<div class="peta-node st" style="--i:' + k + '"><div class="peta-t">' + one(c) + "</div>" +
        (c.sub ? '<ul>' + c.sub.map(s => "<li>" + one(s) + "</li>").join("") + "</ul>" : "") + "</div>").join("") + "</div></div>",

    banding: b => '<div class="blk rv banding">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<div class="bd-grid">' +
      [b.kiri, b.kanan].map((s, k) => '<div class="bd-col ' + (s.warna || (k ? "amber" : "green")) + '"><div class="bd-h">' + Icon(s.ikon || (k ? "x" : "check")) + one(s.judul) + "</div><ul>" +
        s.poin.map(p => "<li>" + one(p) + "</li>").join("") + "</ul></div>").join("") + "</div></div>",

    contoh: b => '<div class="blk rv contoh"><div class="ct-h">' + Icon("bulb") + (b.judul ? one(b.judul) : label("Contoh", "مثال")) + "</div>" +
      (b.ayat ? '<div class="ct-ayat" lang="ar" dir="rtl">' + arFmt(b.ayat.ar) + (b.ayat.src ? ' <small>[' + esc(b.ayat.src) + "]</small>" : "") + (b.ayat.id && L() !== "ar" ? '<div class="ct-tr" dir="ltr" lang="id">' + fmt(b.ayat.id) + "</div>" : "") + "</div>" : "") +
      (b.id || b.ar ? bi(b) : "") +
      (b.sorot ? '<div class="ct-sorot">' + b.sorot.map(s => '<div class="sorot ' + (s.warna || "") + '"><span class="sorot-l">' + one(s.label) + "</span>" + bi(s) + "</div>").join("") + "</div>" : "") + "</div>",

    tabel: b => '<div class="blk rv tabel-wrap">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<div class="tabel-scroll"><table class="tabel"><thead><tr>' +
      b.kolom.map(c => "<th>" + one(c) + "</th>").join("") + "</tr></thead><tbody>" +
      b.baris.map(r => "<tr>" + r.map(c => "<td>" + cell(c) + "</td>").join("") + "</tr>").join("") + "</tbody></table></div></div>",

    catatan: b => {
      const g = { faidah: ["bulb", "Faidah", "فائدة"], tanbih: ["lantern", "Perhatian", "تنبيه"], info: ["info", "Info", "معلومة"], soal: ["key", "Pertanyaan", "سؤال"], hikmah: ["moonStar", "Hikmah", "حكمة"] }[b.gaya || "faidah"] || ["bulb", "Catatan", "ملاحظة"];
      return '<aside class="blk rv catatan ' + (b.gaya || "faidah") + '"><div class="cat-h">' + Icon(g[0]) + (b.judul ? one(b.judul) : label(g[1], g[2])) + "</div>" + bi(b) + "</aside>";
    },

    daftar: b => '<div class="blk rv daftar">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + "<ul>" + b.item.map((it, k) => '<li class="st" style="--i:' + k + '">' + Icon("star8", "li-ic") + "<div>" + bi(it) + "</div></li>").join("") + "</ul></div>",

    akordion: b => '<div class="blk rv akordion">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + b.item.map(it => '<details class="ak"><summary>' + one(it.judul) + Icon("down", "ak-ic") + '</summary><div class="ak-b">' + bi(it) + "</div></details>").join("") + "</div>",

    balik: b => '<div class="blk rv balik">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<p class="hint">' + Icon("refresh") + label("Ketuk kartu untuk membalik", "انقر على البطاقة لقلبها") + '</p><div class="flip-grid">' +
      b.item.map((it, k) => '<button class="flip st" style="--i:' + k + '" type="button"><span class="flip-in"><span class="flip-f">' + one(it.depan) + '</span><span class="flip-b">' + one(it.belakang) + "</span></span></button>").join("") + "</div></div>",

    tokoh: b => {
      const it = b.item.slice().sort((x, y) => (x.wafat || 0) - (y.wafat || 0));
      return '<div class="blk rv tokoh">' + (b.judul ? head(b.judul, "h3", "sub-title") : "") + '<div class="tk-line">' +
        it.map((t, k) => '<div class="tk st" style="--i:' + k + '"><div class="tk-dot"></div><div class="tk-w">' + (t.wafat ? (L() === "ar" ? "ت " + arNum(t.wafat) + "هـ" : "w. " + t.wafat + " H") : "") + '</div><div class="tk-n">' + one(t.nama) + "</div>" + (t.karya ? '<div class="tk-k">' + one(t.karya) + "</div>" : "") + "</div>").join("") + "</div></div>";
    },

    tanya: b => '<div class="blk rv tanya"><div class="tq">' + Icon("key") + "<div>" + bi(b.q) + '</div></div><button class="btn ghost sm tanya-btn" type="button">' + Icon("eye") + label("Lihat jawaban", "أظهر الجواب") + '</button><div class="ta" hidden>' + bi(b.a) + "</div></div>",

    cek: (b, i) => '<div class="blk rv cek" data-j="' + b.j + '"><div class="cek-h">' + Icon("target") + label("Cek Pemahaman", "اختبر فهمك") + "</div>" + bi(b.q) +
      '<div class="cek-o">' + b.o.map((o, k) => '<button type="button" class="cek-btn" data-k="' + k + '">' + one(o) + "</button>").join("") + '</div><div class="cek-b" hidden>' + bi(b.b) + "</div></div>",

    ringkasan: b => '<div class="blk rv ringkasan"><div class="rk-h">' + Icon("checkCircle") + (b.judul ? one(b.judul) : label("Ringkasan Pertemuan", "ملخص المحاضرة")) + "</div><ul>" +
      b.item.map((it, k) => '<li class="st" style="--i:' + k + '">' + Icon("check", "li-ic") + "<div>" + bi(it) + "</div></li>").join("") + "</ul></div>",

    /* Tathbiq i'rab: ketuk tiap kata untuk melihat i'rabnya (warna = keadaan i'rab) */
    irab: b => '<div class="blk rv irab"><div class="ir-h">' + Icon("harakat") + (b.judul ? one(b.judul) : label("Tathbiq I'rab", "التطبيق الإعرابي")) + "</div>" +
      (b.ayat ? '<div class="ir-ayat" lang="ar" dir="rtl">﴿' + arFmt(b.ayat) + "﴾" + (b.src ? " <small>[" + esc(b.src) + "]</small>" : "") + "</div>" : "") +
      (b.tr && L() !== "ar" ? '<p class="ir-tr">' + fmt(b.tr) + "</p>" : "") +
      '<p class="hint">' + Icon("eye") + label("Ketuk tiap kata untuk melihat i'rabnya", "انقر على الكلمة لترى إعرابها") + "</p>" +
      '<div class="ir-words" dir="rtl">' + b.kata.map((k, i) => '<button type="button" class="ir-w ' + (k.h || "bina") + '" data-i="' + i + '"><span lang="ar">' + esc(k.w) + "</span><small>" + hk(k.h) + "</small></button>").join("") + "</div>" +
      b.kata.map((k, i) => '<div class="ir-d ' + (k.h || "bina") + '" data-i="' + i + '" hidden><b lang="ar">' + esc(k.w) + "</b>" + bi(k) + "</div>").join("") +
      '<details class="ak ir-all"><summary>' + label("Lihat i'rab lengkap", "الإعراب كاملًا") + Icon("down", "ak-ic") + '</summary><div class="ak-b"><table class="tabel ir-tab"><tbody>' +
      b.kata.map(k => '<tr><td class="ir-c ' + (k.h || "bina") + '"><span lang="ar">' + esc(k.w) + "</span></td><td>" + bi(k) + "</td></tr>").join("") + "</tbody></table></div></details>" +
      '<div class="ir-legend">' + Object.keys(HK).filter(h => b.kata.some(k => (k.h || "bina") === h)).map(h => '<span class="' + h + '"><i></i>' + hk(h) + "</span>").join("") + "</div></div>",

    gambar: b => '<figure class="blk rv gambar"><img src="' + esc(b.src) + '" alt="' + esc(U.pickId(b.keterangan) || "") + '" loading="lazy">' + (b.keterangan ? "<figcaption>" + one(b.keterangan) + "</figcaption>" : "") + "</figure>",
    video: b => '<div class="blk rv video"><iframe src="https://www.youtube-nocookie.com/embed/' + esc(b.youtube) + '" title="Video" loading="lazy" allowfullscreen></iframe></div>'
  };

  const HK = { raf: ["marfu'", "مرفوع"], nas: ["manshub", "منصوب"], jar: ["majrur", "مجرور"], jaz: ["majzum", "مجزوم"], bina: ["mabni", "مبني"], ism: ["isim", "اسم"], fiil: ["fi'il", "فعل"], harf: ["huruf", "حرف"] };
  function hk(h) { const x = HK[h] || HK.bina; return L() === "id" ? x[0] : '<span lang="ar">' + x[1] + "</span>"; }

  function cell(c) {
    if (!isObj(c)) return fmt(c);
    if (L() === "ar" || (!c.id && c.ar)) return '<span lang="ar" dir="rtl" class="ar-txt">' + arFmt(U.pickAr(c)) + "</span>";
    if (L() === "id" || !c.ar || !c.id) return fmt(U.pickId(c));
    return '<span lang="ar" dir="rtl" class="ar-txt cell-ar">' + arFmt(c.ar) + "</span>" + fmt(c.id);
  }

  function dalil(b, kind, ikon, lab) {
    return '<figure class="blk rv dalil ' + kind + '"><div class="dl-tag">' + Icon(ikon) + lab + "</div>" +
      '<div class="dl-ar" lang="ar" dir="rtl">' + (kind === "ayat" ? "﴿" + arFmt(b.ar) + "﴾" : arFmt(b.ar)) + "</div>" +
      (b.id && L() !== "ar" ? '<div class="dl-id">' + fmt(b.id) + "</div>" : "") +
      (b.src ? "<figcaption>" + (L() === "ar" && b.srcAr ? b.srcAr : esc(b.src)) + "</figcaption>" : "") + "</figure>";
  }

  function blocks(list) {
    return list.map((b, i) => {
      const f = B[b.t];
      if (!f) return "";
      return f(b, i).replace(/^<(\w+) class="blk/, '<$1 data-b="' + i + '" class="blk');
    }).join("");
  }

  function toc(list) {
    const items = list.map((b, i) => b.t === "judul" ? '<a href="#sec-' + i + '" data-sec="' + i + '">' + one(b) + "</a>" : "").filter(Boolean);
    return items.length ? items.join("") : "";
  }

  /* Interaksi blok setelah dirender */
  function after(root) {
    root.querySelectorAll(".flip").forEach(el => el.addEventListener("click", () => { el.classList.toggle("on"); Audio2.sfx("flip"); }));
    root.querySelectorAll(".tanya-btn").forEach(btn => btn.addEventListener("click", () => {
      const a = btn.nextElementSibling; a.hidden = !a.hidden; btn.classList.toggle("on", !a.hidden); Audio2.sfx(a.hidden ? "tap" : "open");
    }));
    root.querySelectorAll(".cek").forEach(box => {
      const j = +box.dataset.j;
      box.querySelectorAll(".cek-btn").forEach(btn => btn.addEventListener("click", () => {
        if (box.classList.contains("done")) return;
        box.classList.add("done");
        const k = +btn.dataset.k;
        box.querySelectorAll(".cek-btn").forEach(x => { if (+x.dataset.k === j) x.classList.add("ok"); });
        if (k !== j) { btn.classList.add("no"); Audio2.sfx("bad"); Audio2.vibrate(60); } else { Audio2.sfx("good"); Store.addXP(3, "Cek pemahaman"); }
        box.querySelector(".cek-b").hidden = false;
      }));
    });
    root.querySelectorAll(".irab").forEach(box => box.querySelectorAll(".ir-w").forEach(w => w.addEventListener("click", () => {
      const on = w.classList.contains("on");
      box.querySelectorAll(".ir-w").forEach(x => x.classList.remove("on"));
      box.querySelectorAll(".ir-d").forEach(d => { d.hidden = on || d.dataset.i !== w.dataset.i; });
      if (!on) w.classList.add("on");
      Audio2.sfx(on ? "tap" : "pop");
    })));
    root.querySelectorAll("details.ak").forEach(d => d.addEventListener("toggle", () => d.open && Audio2.sfx("open")));
    reveal(root);
  }

  let io = null;
  function reveal(root) {
    const els = root.querySelectorAll(".rv:not(.in)");
    if (!("IntersectionObserver" in window) || !Store.s.set.gerak) { els.forEach(e => e.classList.add("in")); return; }
    if (!io) io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    els.forEach(e => io.observe(e));
  }

  return { blocks, toc, after, reveal, head, label };
})();
