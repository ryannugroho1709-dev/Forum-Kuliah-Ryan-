/* Normalisasi data/aqidah/pNN.js ke skema aplikasi (idempoten). Pakai: node tools/normalisasi-aqidah.js */
const fs = require("fs"), path = require("path");
const dir = path.join(__dirname, "..", "data", "aqidah");
const lat = {};
for (const f of fs.readdirSync(dir).filter(x => /^p\d+\.js$/.test(x))) {
  let o = null;
  global.Kuliah = { pertemuan: (i, x) => { o = x; }, teks() {} };
  new Function(fs.readFileSync(path.join(dir, f), "utf8"))();
  const isi = [];
  for (const b of o.isi) {
    if (b.t === "ringkasan" && b.poin) { isi.push({ t: "ringkasan", item: b.poin }); continue; }
    if (b.t === "tanya" && b.daftar) { b.daftar.forEach(d => isi.push({ t: "tanya", q: d.q, a: d.j })); continue; }
    if (b.t === "banding" && b.kolom) { const { t, ...r } = b; isi.push({ t: "tabel", ...r }); continue; }
    isi.push(b);
  }
  const IK = { alert: "bolt", warn: "bolt", bintang: "star8", star: "star8", dark: "moon", drop: "waves", water: "waves", fire: "flame", hadits: "lamp", hook: "key", kitab: "book", nabi: "user", build: "home", mukjizat: "sparkle", sahabat: "users", sword: "shield", wahyu: "scroll" };
  (function fix(x) { if (Array.isArray(x)) x.forEach(fix); else if (x && typeof x === "object") { if (IK[x.ikon]) x.ikon = IK[x.ikon]; Object.values(x).forEach(fix); } })(isi);
  o.isi = isi;
  o.istilah = o.istilah.map(s => s.istilah ? { ar: s.istilah.ar, id: s.arti.id, def: s.arti } : s);
  const L = o.latihan, blank = x => typeof x === "string" ? x.replace(/…/g, "______") : x && typeof x === "object" ? Object.fromEntries(Object.entries(x).map(([k, v]) => [k, blank(v)])) : x;
  L.bs = L.bs.map(({ q, ...r }) => q ? { t: q, ...r } : r);
  L.jodoh = L.jodoh.map(x => x.q ? { a: x.q, b: x.j } : x);
  const ans = L.isian.map(x => x.j);
  L.isian = L.isian.map((x, i) => x.q ? { t: blank(x.q), j: x.j, x: ans.filter((_, k) => k !== i).slice(0, 3) } : x);
  if (Array.isArray(L.pilah)) { const p = L.pilah[0]; L.pilah = { t: p.q, kategori: p.kat, item: p.item }; }
  o.tugas = o.tugas.map(x => x.q ? { t: x.q, j: x.j } : x);
  const head = fs.readFileSync(path.join(dir, f), "utf8").split("\n")[0];
  fs.writeFileSync(path.join(dir, f), (head.startsWith("/*") ? head + "\n" : "") + 'Kuliah.pertemuan("aqidah", ' + JSON.stringify(o, null, 2) + ");\n");
  console.log(f, "ok", o.isi.length);
}
