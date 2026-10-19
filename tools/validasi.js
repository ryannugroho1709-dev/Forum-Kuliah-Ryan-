/* Validasi skema materi. Pakai: node tools/validasi.js aqidah [nomor] */
const fs = require("fs"), path = require("path");
const mk = process.argv[2], only = process.argv[3];
const dir = path.join(__dirname, "..", "data", mk);
const BLOK = "pembuka judul sub p definisi ayat hadits atsar kutipan poin langkah peta banding contoh tabel catatan daftar akordion balik tokoh tanya cek ringkasan irab gambar video".split(" ");
const ICON = new Set(fs.readFileSync(path.join(__dirname, "..", "assets/js/icons.js"), "utf8").match(/^\s{2,4}([a-zA-Z0-9]+):/gm).map(s => s.replace(/[\s:]/g, "")));
let bad = 0;
for (const f of fs.readdirSync(dir).filter(x => /^p\d+\.js$/.test(x) && (!only || +x.slice(1, 3) === +only))) {
  let o = null; const e = [];
  global.Kuliah = { pertemuan: (i, x) => { o = x; }, teks() {} };
  try { new Function(fs.readFileSync(path.join(dir, f), "utf8"))(); } catch (x) { console.log(f, "SYNTAX", x.message); bad++; continue; }
  const bi = x => x && typeof x === "object" && x.ar && x.id;
  ["no", "motif", "telegram", "bab", "judul", "ringkas", "tujuan", "isi", "istilah", "latihan", "tugas"].forEach(k => { if (!o[k]) e.push("tanpa " + k); });
  const L = o.latihan || {};
  const cnt = (k, a, b) => { const n = (L[k] || []).length; if (n < a || n > b) e.push(k + "=" + n); };
  cnt("pg", 10, 12); cnt("bs", 8, 10); cnt("jodoh", 6, 8); cnt("isian", 4, 5);
  (L.pg || []).forEach((q, i) => { if (!bi(q.q) || !q.o || q.o.length !== 4 || !(q.j >= 0 && q.j < 4)) e.push("pg" + i); });
  (L.bs || []).forEach((q, i) => { if (!q.t || typeof q.j !== "boolean") e.push("bs" + i); });
  (L.jodoh || []).forEach((q, i) => { if (!q.a || !q.b) e.push("jodoh" + i); });
  (L.isian || []).forEach((q, i) => { if (!q.t || !q.j || !q.x || q.x.length < 3 || !JSON.stringify(q.t).includes("______")) e.push("isian" + i); });
  if (!L.pilah || !L.pilah.kategori || !L.pilah.item) e.push("pilah");
  if (L.urut && (!L.urut.t || !L.urut.item || L.urut.item.length < 4)) e.push("urut");
  (o.istilah || []).forEach((s, i) => { if (!s.ar || !s.latin || !s.id || !s.def) e.push("istilah" + i); });
  (o.tugas || []).forEach((s, i) => { if (!s.t || !s.j) e.push("tugas" + i); });
  const types = {};
  (o.isi || []).forEach((b, i) => {
    types[b.t] = 1;
    if (!BLOK.includes(b.t)) e.push("blok#" + i + ":" + b.t);
    if (b.t === "ringkasan" && !b.item) e.push("ringkasan.item");
    if (b.t === "tanya" && !(b.q && b.a)) e.push("tanya q/a");
    if (b.t === "banding" && !(b.kiri && b.kanan)) e.push("banding kiri/kanan");
    if (b.t === "cek" && !(b.q && b.o && b.j >= 0 && b.b)) e.push("cek");
    if (b.t === "poin" || b.t === "langkah" || b.t === "daftar" || b.t === "akordion") (b.item || []).forEach(it => { if (it.ikon && !ICON.has(it.ikon)) e.push("ikon " + it.ikon); });
    if (b.t === "peta" && b.ikon && !ICON.has(b.ikon)) e.push("ikon " + b.ikon);
  });
  if (Object.keys(types).length < 12) e.push("ragam blok hanya " + Object.keys(types).length);
  console.log(f, e.length ? "MASALAH: " + e.join(", ") : "ok", "isi=" + (o.isi || []).length, "blok=" + Object.keys(types).length); bad += e.length;
}
process.exit(bad ? 1 : 0);
