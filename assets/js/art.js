/* =====================================================================
   SENI & ANIMASI
   Sampul animasi per pertemuan (SVG), hiasan geometri Islam, dan
   ilustrasi beranda. Motif dipilih lewat field `motif` di data pertemuan:
   akar, sumber, lentera, generasi, cabang, gulungan, saringan, kalam,
   sanad, alat, persimpangan, spektrum, ijma, kaidah, mizan, kompas
   ===================================================================== */
window.Art = (function () {
  let uid = 0;
  const TEMA = [
    ["#0d5c4b", "#06332a", "#e3c06e"], // zamrud
    ["#173f78", "#0a1f43", "#e2bd68"], // lazuardi
    ["#0b6e78", "#053a40", "#f0c277"], // firuz
    ["#5d2c63", "#2c1231", "#e9bf72"], // anggur
    ["#8f442c", "#4a1f12", "#f1c879"], // terakota
    ["#556427", "#2a3311", "#e8cb7a"], // zaitun
    ["#8c1d3c", "#40091a", "#f4c97c"], // yaqut (merah delima)
    ["#9a5a0e", "#462604", "#f8d78c"], // kahrab (ambar)
    ["#33318a", "#14123c", "#e8c574"], // nila
    ["#b0463c", "#531913", "#f7d38c"], // marjan (karang)
    ["#1d6fa3", "#0a3150", "#f2cf80"], // samawi (biru langit)
    ["#6a3d9f", "#2c164f", "#f0ca7e"], // banafsaj (ungu lembayung)
    ["#3b4a5a", "#17212b", "#e8c679"], // fahmi (arang)
    ["#a0386b", "#4a1230", "#f5d088"]  // wardi (mawar)
  ];

  /* Bintang delapan (rub' al-hizb) */
  function star8(cx, cy, r, cls, extra) {
    const s = r * 0.707;
    return '<g class="' + (cls || "") + '" ' + (extra || "") + '><rect x="' + (cx - s) + '" y="' + (cy - s) + '" width="' + (2 * s) + '" height="' + (2 * s) + '"/><rect x="' + (cx - s) + '" y="' + (cy - s) + '" width="' + (2 * s) + '" height="' + (2 * s) + '" transform="rotate(45 ' + cx + " " + cy + ')"/></g>';
  }
  function twinkles(n, seed) {
    let out = "", x = seed * 97 + 13;
    for (let i = 0; i < n; i++) {
      x = (x * 9301 + 49297) % 233280;
      const px = 20 + (x / 233280) * 360; x = (x * 9301 + 49297) % 233280;
      const py = 12 + (x / 233280) * 120;
      const r = 1.5 + (i % 3);
      out += star8(px.toFixed(1), py.toFixed(1), r, "tw", 'style="--d:' + (i * 0.37).toFixed(2) + 's"');
    }
    return out;
  }
  const T = (x, y, txt, cls, extra) => '<text x="' + x + '" y="' + y + '" class="' + (cls || "lbl") + '" ' + (extra || "") + ">" + txt + "</text>";
  const D = (d, cls, delay, extra) => '<path pathLength="1" class="' + (cls || "dr") + '" style="--d:' + (delay || 0) + 's" d="' + d + '" ' + (extra || "") + "/>";
  const C = (cx, cy, r, cls, delay) => '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" class="' + (cls || "") + '" style="--d:' + (delay || 0) + 's"/>';

  const M = {
    akar(op) {
      return D("M200 205 C200 175 197 150 200 118", "dr thick", 0) +
        C(200, 88, 44, "crown pop", 0.9) + C(162, 104, 27, "crown pop", 1.1) + C(238, 104, 27, "crown pop", 1.2) +
        C(185, 70, 4, "fruit pop", 1.6) + C(222, 82, 4, "fruit pop", 1.8) + C(170, 108, 4, "fruit pop", 2) + C(236, 112, 4, "fruit pop", 2.1) +
        '<path d="M100 205H300" class="ground"/>' +
        D("M200 205 C188 214 168 216 142 228", "dr root", 1.3) + D("M200 205 C212 216 234 218 260 230", "dr root", 1.45) +
        D("M200 205 C199 216 197 226 195 238", "dr root", 1.6) + D("M200 208 C176 210 160 222 122 238", "dr root", 1.75) + D("M200 208 C226 211 244 224 282 238", "dr root", 1.9) +
        T(200, 96, op.big || "أصل", "lbl big gold fade", 'style="--d:2.2s"') + T(200, 224, op.lbl || "الأساس الذي يُبنى عليه غيره", "lbl sm fade", 'style="--d:2.6s"');
    },
    sumber(op) {
      const lb = op.items || ["القرآن", "السنة", "أقوال السلف", "اللغة", "الإسرائيليات"], nodes = [[70, 62], [132, 40], [200, 32], [268, 40], [330, 62]].map((p, i) => p.concat(lb[i] || ""));
      let o = "";
      nodes.forEach((n, i) => {
        o += '<path class="flow" style="--d:' + (i * 0.25) + 's" pathLength="1" d="M' + n[0] + " " + (n[1] + 10) + " C" + n[0] + " 120 200 100 200 150" + '"/>';
        o += C(n[0], n[1], 10, "node pop", 0.2 + i * 0.15) + T(n[0], n[1] - 16, n[2], "lbl sm fade", 'style="--d:' + (0.5 + i * 0.15) + 's"');
      });
      return o + C(200, 168, 46, "glow pulse", 0) +
        '<path class="book" d="M200 156c-14-10-34-13-58-10v42c24-3 44 0 58 10 14-10 34-13 58-10v-42c-24-3-44 0-58 10Z"/><path class="book-l" d="M200 156v42"/>' +
        T(200, 226, op.lbl || "مصادر التفسير", "lbl gold fade", 'style="--d:1.4s"');
    },
    lentera(op) {
      return '<path d="M200 0V40" class="chain"/>' + C(200, 118, 70, "glow pulse", 0) +
        '<g class="swing-sm" style="transform-origin:200px 0px">' +
        '<path class="lant" d="M178 52h44l12 24v58l-12 22h-44l-12-22V76Z"/><path class="lant-l" d="M166 76h68M166 134h68M200 40v12"/>' +
        '<path class="flame" d="M200 88c9 10 9 22 0 30-9-8-9-20 0-30Z"/></g>' +
        [-60, -30, 0, 30, 60].map((a, i) => '<path class="ray" style="--d:' + (i * 0.2) + 's" d="M200 178 L' + (200 + Math.sin(a * Math.PI / 180) * 130).toFixed(0) + " " + (178 + Math.cos(a * Math.PI / 180) * 60).toFixed(0) + '"/>').join("") +
        T(200, 226, op.lbl || "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ", "lbl sm gold fade", 'style="--d:1.2s"');
    },
    generasi(op) {
      const a = (w, h, y) => "M" + (200 - w) + " 214V" + (y + h) + "A" + w + " " + h + " 0 0 1 " + (200 + w) + " " + (y + h) + "V214";
      return D(a(150, 120, 40), "dr arch3", 1.4) + D(a(105, 92, 72), "dr arch2", 0.8) + D(a(62, 62, 104), "dr arch1", 0.2) +
        star8(200, 170, 14, "st8 pop", 'style="--d:2.2s"') +
        T(200, 52, (op.items || [])[2] || "أتباع التابعين", "lbl sm fade", 'style="--d:2s"') + T(200, 90, (op.items || [])[1] || "التابعون", "lbl sm fade", 'style="--d:1.6s"') + T(200, 128, (op.items || [])[0] || "الصحابة", "lbl sm gold fade", 'style="--d:1.2s"') +
        '<path d="M40 214H360" class="ground"/>' + T(200, 232, op.lbl || "خير الناس قرني ثم الذين يلونهم ثم الذين يلونهم", "lbl xs fade", 'style="--d:2.6s"');
    },
    cabang(op) {
      const ends = [[70, 70], [130, 46], [200, 38], [270, 46], [330, 70]];
      let o = D("M200 215 V150", "dr thick", 0);
      ends.forEach((e, i) => { o += D("M200 150 C200 120 " + e[0] + " 120 " + e[0] + " " + (e[1] + 12), "dr", 0.5 + i * 0.15); o += C(e[0], e[1], 12, "node pop", 1.2 + i * 0.15) + T(e[0], e[1] + 4, U.arNum(i + 1), "lbl xs dark fade", 'style="--d:' + (1.4 + i * 0.15) + 's"'); });
      return o + C(200, 150, 7, "fruit pop", 0.4) + T(200, 232, op.lbl || "الاجتهاد والرأي", "lbl gold fade", 'style="--d:2s"');
    },
    gulungan(op) {
      return '<path class="paper" d="M92 60h216v120H92z"/><path class="roll" d="M86 52h228a10 10 0 0 1 0 20H86a10 10 0 0 1 0-20ZM86 168h228a10 10 0 0 1 0 20H86a10 10 0 0 1 0-20Z"/>' +
        [0, 1, 2, 3].map(i => D("M120 " + (92 + i * 18) + "H" + (280 - i * 20), "dr ink", 0.3 + i * 0.3)).join("") +
        '<g class="stamp pop" style="--d:1.7s"><circle cx="112" cy="212" r="16" class="ok"/><path d="m104 212 6 6 10-12" class="mk"/></g>' +
        '<g class="stamp pop" style="--d:2s"><circle cx="200" cy="212" r="16" class="mid"/>' + T(200, 219, "؟", "lbl big dark") + "</g>" +
        '<g class="stamp pop" style="--d:2.3s"><circle cx="288" cy="212" r="16" class="no"/><path d="m281 205 14 14M295 205l-14 14" class="mk"/></g>' +
        T(200, 34, op.lbl || "لا تصدقوهم ولا تكذبوهم", "lbl sm gold fade", 'style="--d:1s"');
    },
    saringan(op) {
      let dots = "";
      for (let i = 0; i < 9; i++) dots += '<circle class="fall" style="--d:' + (i * 0.45).toFixed(2) + 's;--x:' + (150 + (i * 37) % 100) + 'px" cx="0" cy="0" r="4"/>';
      return '<path class="funnel" d="M110 40h180l-62 92v58l-28 16v-74Z"/>' +
        [0, 1, 2, 3, 4].map(i => { const y = 56 + i * 16, w = 86 - i * 13; return '<ellipse class="ring fade" style="--d:' + (0.2 + i * 0.2) + 's" cx="200" cy="' + y + '" rx="' + w + '" ry="4"/>' + T(312 - i * 13, y + 4, U.arNum(i + 1), "lbl xs gold fade", 'style="--d:' + (0.4 + i * 0.2) + 's"'); }).join("") +
        dots + T(200, 232, op.lbl || "ضوابط قبول الإسرائيليات", "lbl gold fade", 'style="--d:1.2s"');
    },
    kalam(op) {
      return D("M60 170 C110 120 150 200 200 150 S290 110 340 160", "dr ink thick", 0.2) +
        '<g class="pen-move"><path class="qalam" d="M318 40 252 150l-6 18 14-12 66-108Z"/></g>' +
        C(120, 196, 3, "drop pop", 1.6) + C(240, 186, 2.5, "drop pop", 1.9) +
        T(200, 92, op.big || "بِلِسَانٍ عَرَبِيٍّ مُبِينٍ", "lbl big gold fade", 'style="--d:1.4s"') + T(200, 226, op.lbl || "التفسير اللغوي", "lbl sm fade", 'style="--d:2s"');
    },
    sanad(op) {
      const xs = [340, 270, 200, 130, 60], lb = op.items || ["النبي ﷺ", "الصحابي", "التابعي", "تابع التابعي", "المفسر"];
      let o = '<path id="sanadPath" class="link" d="M340 120H60"/>';
      xs.forEach((x, i) => { o += C(x, 120, 15, "node pop", i * 0.25) + T(x, 152, lb[i], "lbl sm fade", 'style="--d:' + (0.3 + i * 0.25) + 's"'); });
      for (let i = 0; i < 4; i++) o += '<ellipse class="chainlink fade" style="--d:' + (0.5 + i * 0.2) + 's" cx="' + (xs[i] - 35) + '" cy="120" rx="14" ry="7"/>';
      return o + '<circle r="6" class="spark"><animateMotion dur="3.2s" repeatCount="indefinite" path="M340 120H60"/></circle>' +
        T(200, 70, op.big || "النقل والرواية", "lbl big gold fade", 'style="--d:1.4s"') + T(200, 210, op.lbl || "حدثنا … عن … قال", "lbl sm fade", 'style="--d:1.8s"');
    },
    alat(op) {
      let o = C(200, 124, 82, "orbit-ring", 0) + '<g class="orbit" style="transform-origin:200px 124px">';
      for (let i = 0; i < 6; i++) { const a = i * Math.PI / 3; o += C((200 + Math.cos(a) * 82).toFixed(1), (124 + Math.sin(a) * 82).toFixed(1), 13, "node", 0); }
      o += "</g>";
      return o + C(200, 124, 40, "glow pulse", 0) +
        '<path class="book" d="M200 114c-12-8-28-10-48-8v34c20-2 36 0 48 8 12-8 28-10 48-8v-34c-20-2-36 0-48 8Z"/><path class="book-l" d="M200 114v34"/>' +
        T(200, 232, op.lbl || "العلوم التي يحتاج إليها المفسر", "lbl gold fade", 'style="--d:.8s"');
    },
    persimpangan(op) {
      const p = ["M200 230 C200 170 200 150 200 120 C200 90 120 80 70 40", "M200 230 C200 170 200 150 200 120 C200 90 200 70 200 30", "M200 230 C200 170 200 150 200 120 C200 90 280 80 330 40"];
      let o = "";
      p.forEach((d, i) => { o += D(d, "dr road", i * 0.3); o += '<circle r="5" class="spark"><animateMotion dur="' + (3 + i * 0.6) + 's" begin="' + (i * 0.7) + 's" repeatCount="indefinite" path="' + d + '"/></circle>'; });
      const it = op.items || ["قولٌ", "قولٌ", "قولٌ"];
      return o + T(70, 30, it[0], "lbl sm fade", 'style="--d:1s"') + T(200, 22, it[1], "lbl sm fade", 'style="--d:1.2s"') + T(330, 30, it[2], "lbl sm fade", 'style="--d:1.4s"') +
        T(200, 168, op.lbl || "أسباب الاختلاف", "lbl gold fade", 'style="--d:1.6s"');
    },
    spektrum(op) {
      const cols = ["#f4d27a", "#f0a868", "#7fd3c0", "#8fb7f2", "#c9a0e8"];
      let o = D("M30 130 H168", "dr beam thick", 0) + '<path class="prism" d="M200 52 252 160H148Z"/>';
      cols.forEach((c, i) => { o += '<path pathLength="1" class="dr" style="--d:' + (0.8 + i * 0.12) + "s;stroke:" + c + '" d="M222 118 L380 ' + (70 + i * 26) + '"/>'; });
      return o + T(330, 50, op.l1 || "تنوع", "lbl gold fade", 'style="--d:1.6s"') +
        '<g class="fade" style="--d:2s"><path class="arr" d="M120 206h-60M66 200l-8 6 8 6"/><path class="arr" d="M150 206h60M204 200l8 6-8 6"/></g>' + T(135, 232, op.l2 || "تضاد", "lbl sm fade", 'style="--d:2.2s"');
    },
    ijma(op) {
      let o = "";
      for (let i = 0; i < 14; i++) {
        const a = i / 14 * Math.PI * 2, x = (200 + Math.cos(a) * 120).toFixed(1), y = (120 + Math.sin(a) * 82).toFixed(1);
        o += '<path class="spoke fade" style="--d:' + (i * 0.08).toFixed(2) + 's" d="M' + x + " " + y + 'L200 120"/>';
        o += '<circle class="conv" style="--d:' + (i * 0.12).toFixed(2) + "s;--tx:" + (200 - x).toFixed(1) + "px;--ty:" + (120 - y).toFixed(1) + 'px" cx="' + x + '" cy="' + y + '" r="5"/>';
      }
      return o + C(200, 120, 30, "glow pulse", 0) + star8(200, 120, 16, "st8 pop", 'style="--d:.6s"') +
        T(200, 226, op.lbl || "لا تجتمع أمتي على ضلالة", "lbl gold fade", 'style="--d:1s"');
    },
    kaidah(op) {
      return D("M200 32a88 88 0 1 1 -.1 0", "dr", 0) +
        '<rect pathLength="1" class="dr" style="--d:.8s" x="138" y="58" width="124" height="124"/>' +
        '<rect pathLength="1" class="dr" style="--d:1.3s" x="138" y="58" width="124" height="124" transform="rotate(45 200 120)"/>' +
        '<path pathLength="1" class="dr gold-s" style="--d:1.9s" d="M200 66 222 98 254 120 222 142 200 174 178 142 146 120 178 98Z"/>' +
        D("M60 214 H340", "dr ruler", 0.4) + [80, 120, 160, 200, 240, 280, 320].map(x => '<path class="tick fade" style="--d:1s" d="M' + x + ' 214v-8"/>').join("") +
        T(200, 126, op.lbl || "قاعدة", "lbl gold fade", 'style="--d:2.3s"');
    },
    mizan(op) {
      return '<path class="post" d="M200 64V206M170 212h60"/>' + C(200, 58, 7, "pivot", 0) +
        '<g class="tilt" style="transform-origin:200px 64px"><path class="beam" d="M96 70c40-12 168-12 208 0"/>' +
        '<path class="cord" d="M100 70 78 140M100 70l22 70M300 70l-22 70M300 70l22 70"/>' +
        '<path class="pan" d="M70 140h60a30 14 0 0 1-60 0Z"/><path class="pan" d="M270 140h60a30 14 0 0 1-60 0Z"/>' +
        T(100, 166, op.l1 || "قولٌ راجح", "lbl xs gold") + T(300, 166, op.l2 || "قولٌ مرجوح", "lbl xs") + "</g>" +
        T(200, 236, op.lbl || "قواعد الترجيح", "lbl gold fade", 'style="--d:.8s"');
    },
    kompas(op) {
      let ticks = "";
      for (let i = 0; i < 32; i++) { const a = i / 32 * Math.PI * 2, r1 = i % 4 ? 80 : 72; ticks += '<path class="tick" d="M' + (200 + Math.cos(a) * r1).toFixed(1) + " " + (120 + Math.sin(a) * r1).toFixed(1) + "L" + (200 + Math.cos(a) * 86).toFixed(1) + " " + (120 + Math.sin(a) * 86).toFixed(1) + '"/>'; }
      return C(200, 120, 90, "orbit-ring", 0) + ticks + star8(200, 120, 46, "st8 rose fade", 'style="--d:.3s"') +
        '<g class="needle" style="transform-origin:200px 120px"><path class="nd-a" d="M200 52 210 120H190Z"/><path class="nd-b" d="M200 188 210 120H190Z"/></g>' + C(200, 120, 6, "pivot", 0) +
        T(200, 236, op.lbl || "عند تنازع القواعد", "lbl gold fade", 'style="--d:.8s"');
    }
  };

  /* ---------- Motif khusus Nahwu ---------- */
  // tiga keadaan yang bergantian (rafa' → nashb → jarr), dipakai beberapa motif
  const CY = (i, inner, extra) => '<g class="cyc c' + i + '" style="--d:' + (i * 2) + 's" ' + (extra || "") + ">" + inner + "</g>";
  Object.assign(M, {
    huruf(op) {
      const L = op.items || ["ك", "ل", "م", "ة"], k = L.length, gap = 52;
      let o = "";
      L.forEach((h, i) => { const x = 200 + ((k - 1) / 2 - i) * gap; o += '<g class="pop" style="--d:' + (0.2 + i * 0.25) + 's"><rect class="tile" x="' + (x - 20) + '" y="128" width="40" height="40" rx="9"/>' + T(x, 156, h, "lbl big") + "</g>"; });
      o += D("M" + (200 - k * 26) + " 120 C" + (200 - k * 20) + " 92 " + (200 + k * 20) + " 92 " + (200 + k * 26) + " 120", "dr gold-s", 1.2);
      return C(200, 70, 40, "glow pulse", 0) + o + T(200, 84, op.big || "كَلِمَةٌ", "lbl huge gold fade", 'style="--d:1.6s"') +
        T(200, 214, op.lbl || "اسمٌ · فعلٌ · حرفٌ", "lbl fade", 'style="--d:2.1s"');
    },
    harakat(op) {
      const w = op.big || "مُحَمَّد", ends = op.items || ["ٌ", "ًا", "ٍ"], nm = op.names || ["رَفْعٌ", "نَصْبٌ", "جَرٌّ"];
      let o = C(200, 104, 58, "glow pulse", 0);
      ends.forEach((e, i) => { o += CY(i, T(200, 120, w + e, "lbl huge gold")); });
      nm.forEach((t, i) => { const x = 200 + (1 - i) * 80; o += '<g class="cyc-p c' + i + '" style="--d:' + (i * 2) + 's"><rect class="pill-s" x="' + (x - 32) + '" y="168" width="64" height="26" rx="13"/>' + T(x, 186, t, "lbl sm") + "</g>"; });
      return o + T(200, 228, op.lbl || "الإعراب: تغيُّر أواخر الكلم", "lbl sm fade", 'style="--d:.6s"');
    },
    bina(op) {
      const mb = op.big || "هٰؤُلَاءِ", mu = op.kata || "كِتَاب", e = ["ٌ", "ًا", "ٍ"];
      let o = '<path class="ground" d="M200 46V190"/>' +
        '<rect class="stone pop" style="--d:.2s" x="236" y="80" width="112" height="58" rx="10"/>' + T(292, 118, mb, "lbl big gold fade", 'style="--d:.5s"') +
        '<path class="lock fade" style="--d:.9s" d="M286 64v-6a6 6 0 0 1 12 0v6M282 64h20v12h-20Z"/>' + T(292, 168, "مَبْنِيٌّ · لا يتغيَّر", "lbl sm fade", 'style="--d:1s"');
      e.forEach((x, i) => { o += CY(i, T(108, 118, mu + x, "lbl big gold")); });
      return o + '<rect class="tile fade" style="--d:.3s" x="52" y="80" width="112" height="58" rx="10"/>' + T(108, 168, "مُعْرَبٌ · يتغيَّر آخره", "lbl sm fade", 'style="--d:1.1s"') +
        T(200, 226, op.lbl || "المبني والمعرب", "lbl gold fade", 'style="--d:1.4s"');
    },
    amil(op) {
      const P = op.items || [["لَنْ", "يَكْتُبَ", "نَصْبٌ"], ["لَمْ", "يَكْتُبْ", "جَزْمٌ"], ["", "يَكْتُبُ", "رَفْعٌ"]];
      const arc = "M276 88 C246 44 176 44 150 86";
      let o = D(arc, "dr gold-s", 0.2) + '<path class="arr fade" style="--d:1s" d="M144 78l6 9 9-5"/><circle r="5" class="spark"><animateMotion dur="2s" repeatCount="indefinite" path="' + arc + '"/></circle>';
      P.forEach((p, i) => { o += CY(i, T(286, 128, p[0] || "—", "lbl huge gold") + T(140, 128, p[1], p[1].length > 9 ? "lbl big" : "lbl huge") + T(200, 178, p[2], "lbl gold")); });
      return o + T(286, 158, "العامل", "lbl xs fade", 'style="--d:.6s"') + T(140, 158, "المعمول", "lbl xs fade", 'style="--d:.8s"') +
        T(200, 226, op.lbl || "عوامل النصب والجزم", "lbl sm fade", 'style="--d:1.2s"');
    },
    jumlah(op) {
      const P = op.items || [["الْعِلْمُ", "مُبْتَدَأٌ"], ["نُورٌ", "خَبَرٌ"]], k = P.length, sp = Math.min(150, 320 / k), w = Math.min(104, sp - 12);
      const X = i => 200 + ((k - 1) / 2 - i) * sp;
      let o = "";
      P.forEach((p, i) => {
        const x = X(i);
        o += '<g class="pop" style="--d:' + (0.2 + i * 0.35) + 's"><rect class="tile" x="' + (x - w / 2) + '" y="84" width="' + w + '" height="52" rx="12"/>' + T(x, 118, p[0], k > 3 ? "lbl" : "lbl big") + "</g>" + T(x, 162, p[1], "lbl sm gold fade", 'style="--d:' + (0.6 + i * 0.35) + 's"');
        if (i < k - 1) o += D("M" + (x - w / 2 - 2) + " 110 H" + (X(i + 1) + w / 2 + 2), "dr link2", 0.5 + i * 0.35);
      });
      return o + T(200, 52, op.big || "", "lbl big gold fade", 'style="--d:1.4s"') + T(200, 220, op.lbl || "الجملة المفيدة", "lbl fade", 'style="--d:1.6s"');
    },
    tawabi(op) {
      const p = op.items || ["زَيْدٌ", "الْمُجْتَهِدُ"], r = op.names || ["المتبوع", "التابع"];
      return '<g class="bob">' +
        '<rect class="tile" x="232" y="82" width="116" height="52" rx="12"/>' + T(290, 116, p[0], "lbl big gold") +
        '<rect class="tile" x="52" y="82" width="116" height="52" rx="12"/>' + T(110, 116, p[1], "lbl big") +
        '<ellipse class="chainlink" cx="186" cy="108" rx="16" ry="8"/><ellipse class="chainlink" cx="214" cy="108" rx="16" ry="8"/></g>' +
        T(290, 164, r[0], "lbl sm fade", 'style="--d:.6s"') + T(110, 164, r[1], "lbl sm fade", 'style="--d:.8s"') +
        T(200, 56, op.big || "رَفْعًا · نَصْبًا · جَرًّا", "lbl sm gold fade", 'style="--d:1s"') +
        T(200, 222, op.lbl || "التابع يتبع متبوعه في الإعراب", "lbl fade", 'style="--d:1.3s"');
    },
    nida(op) {
      let o = T(296, 132, "يَا", "lbl huge gold");
      for (let i = 0; i < 3; i++) o += '<path class="wave" style="--d:' + (i * 0.5) + 's" d="M' + (258 - i * 22) + " " + (88 - i * 12) + " Q" + (236 - i * 26) + " 118 " + (258 - i * 22) + " " + (148 + i * 12) + '"/>';
      return C(296, 118, 34, "glow pulse", 0) + o + T(118, 128, op.big || "رَسُولَ اللّٰهِ", "lbl big fade", 'style="--d:.8s"') +
        T(200, 214, op.lbl || "المنادى: للإقبال والتنبيه", "lbl sm gold fade", 'style="--d:1.2s"');
    },
    mahall(op) {
      const tags = op.items || ["فِي مَحَلِّ رَفْعٍ", "فِي مَحَلِّ نَصْبٍ", "فِي مَحَلِّ جَرٍّ"];
      let o = '<rect pathLength="1" class="dr frame" x="130" y="72" width="140" height="84" rx="16"/>' + T(200, 128, op.big || "هُوَ", "lbl huge gold pop", 'style="--d:.6s"');
      tags.forEach((t, i) => { o += CY(i, '<rect class="pill-s on" x="122" y="168" width="156" height="28" rx="14"/>' + T(200, 187, t, "lbl sm")); });
      return o + T(200, 54, "مَبْنِيٌّ لا يتغيَّر آخره", "lbl xs fade", 'style="--d:1s"') + T(200, 228, op.lbl || "الإعراب المحلي", "lbl gold fade", 'style="--d:1.2s"');
    },
    zharf(op) {
      const sky = "M60 170 Q130 60 200 170";
      return '<path d="M40 170H360" class="ground"/>' + D(sky, "dr orbit-ring", 0) +
        '<circle r="13" class="sun"><animateMotion dur="6s" repeatCount="indefinite" path="' + sky + '"/></circle>' +
        D("M248 170V118a34 34 0 0 1 68 0V170", "dr gold-s", 0.4) + D("M268 170v-30a14 14 0 0 1 28 0v30", "dr", 0.8) +
        T(130, 200, (op.items || [])[0] || "ظرفُ زمانٍ: صَبَاحًا", "lbl sm fade", 'style="--d:1s"') + T(282, 200, (op.items || [])[1] || "ظرفُ مكانٍ: أَمَامَ", "lbl sm fade", 'style="--d:1.2s"') +
        T(200, 40, op.lbl || "المفعول فيه", "lbl big gold fade", 'style="--d:1.4s"');
    },
    istitsna(op) {
      let o = "";
      for (let i = 0; i < 7; i++) { const x = 92 + i * 36; o += i === 3 ? '<g class="jump"><circle cx="' + x + '" cy="120" r="13" class="ex"/></g>' : C(x, 120, 13, "node pop", i * 0.12); }
      return '<rect class="tile fade" x="66" y="96" width="268" height="48" rx="24"/>' + o +
        T(200, 66, "إِلَّا", "lbl big gold fade", 'style="--d:.9s"') + T(200, 180, op.big || "جَاءَ الْقَوْمُ إِلَّا زَيْدًا", "lbl fade", 'style="--d:1.2s"') +
        T(200, 222, op.lbl || "المستثنى بإلا منصوب", "lbl sm gold fade", 'style="--d:1.5s"');
    }
  });

  function cover(motif, tema, opt) {
    opt = opt || {};
    const id = "cv" + (++uid), t = TEMA[(tema || 0) % TEMA.length];
    const body = (M[motif] || M.kaidah)(opt);
    return '<svg class="cover ' + (opt.cls || "") + '" viewBox="0 0 400 240" preserveAspectRatio="xMidYMid slice" role="img" aria-label="Ilustrasi ' + motif + '" style="--g1:' + t[0] + ";--g2:" + t[1] + ";--gold:" + t[2] + '">' +
      '<defs><linearGradient id="' + id + 'g" x1="0" y1="0" x2="1" y2="1"><stop offset="0" style="stop-color:var(--g1)"/><stop offset="1" style="stop-color:var(--g2)"/></linearGradient>' +
      '<pattern id="' + id + 'p" width="40" height="40" patternUnits="userSpaceOnUse">' + star8(20, 20, 9, "pat") + star8(0, 0, 4, "pat") + star8(40, 0, 4, "pat") + star8(0, 40, 4, "pat") + star8(40, 40, 4, "pat") + "</pattern>" +
      '<radialGradient id="' + id + 'r" cx=".5" cy=".55" r=".6"><stop offset="0" stop-color="#fff" stop-opacity=".16"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></radialGradient></defs>' +
      '<rect width="400" height="240" fill="url(#' + id + 'g)"/><rect width="400" height="240" fill="url(#' + id + 'p)" opacity=".5"/><rect width="400" height="240" fill="url(#' + id + 'r)"/>' +
      '<g class="tws">' + twinkles(10, motif.length + (tema || 0)) + "</g>" +
      '<g class="motif m-' + motif + (opt.static ? " static" : "") + '">' + body + "</g></svg>";
  }

  /* Rosette geometri berputar pelan (hiasan) */
  function rosette(cls) {
    let o = '<svg class="rosette ' + (cls || "") + '" viewBox="0 0 200 200" aria-hidden="true"><g fill="none" stroke="currentColor" stroke-width=".8">';
    for (let i = 0; i < 12; i++) o += '<rect x="50" y="50" width="100" height="100" transform="rotate(' + (i * 7.5) + ' 100 100)"/>';
    o += '<circle cx="100" cy="100" r="96"/><circle cx="100" cy="100" r="34"/>' + star8(100, 100, 30, "") + "</g></svg>";
    return o;
  }

  /* Ilustrasi beranda: mihrab, lentera, mushaf di atas rihal */
  function hero() {
    return '<svg class="hero-art" viewBox="0 0 360 300" aria-hidden="true">' +
      '<defs><linearGradient id="hg1" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".22"/><stop offset="1" stop-color="#fff" stop-opacity=".02"/></linearGradient>' +
      '<radialGradient id="hg2" cx=".5" cy=".5" r=".5"><stop offset="0" style="stop-color:var(--c2)" stop-opacity=".75"/><stop offset="1" style="stop-color:var(--c2)" stop-opacity="0"/></radialGradient></defs>' +
      '<g class="h-moon"><path d="M300 40a26 26 0 1 1-30-20 20 20 0 0 0 30 20Z" class="h-gold-f"/></g>' +
      '<g class="tws">' + twinkles(12, 7) + "</g>" +
      '<path class="h-arch" d="M70 290V150a110 110 0 0 1 220 0v140Z" fill="url(#hg1)"/>' +
      '<path class="h-arch-l" pathLength="1" d="M70 290V150a110 110 0 0 1 220 0v140"/>' +
      '<path class="h-arch-l2" pathLength="1" d="M92 290V156a88 88 0 0 1 176 0v134"/>' +
      '<g class="h-lant"><path d="M180 30v34" class="h-line"/><path d="M168 64h24l7 13v32l-7 12h-24l-7-12V77Z" class="h-gold-s"/><path d="M180 82c6 7 6 15 0 21-6-6-6-14 0-21Z" class="h-flame"/></g>' +
      '<circle cx="180" cy="94" r="46" fill="url(#hg2)" class="h-glow"/>' +
      '<circle cx="180" cy="232" r="70" fill="url(#hg2)" class="h-glow2"/>' +
      '<g class="h-book"><path d="M180 214c-18-12-42-15-72-12v40c30-3 54 0 72 12 18-12 42-15 72-12v-40c-30-3-54 0-72 12Z" class="h-page"/><path d="M180 214v40" class="h-line"/>' +
      '<path d="M122 214h40M122 224h40M122 234h36M198 214h40M198 224h40M202 234h36" class="h-text"/>' +
      '<path d="M128 290 232 252M232 290 128 252" class="h-rehal"/></g>' +
      '<g class="h-rise">' + [0, 1, 2, 3, 4, 5, 6].map(i => '<circle cx="' + (130 + i * 16) + '" cy="210" r="2" style="--d:' + (i * 0.6) + 's"/>').join("") + "</g>" +
      '<path d="M0 290h360" class="h-line"/></svg>';
  }

  return { cover, rosette, hero, star8, TEMA, motifs: Object.keys(M) };
})();
