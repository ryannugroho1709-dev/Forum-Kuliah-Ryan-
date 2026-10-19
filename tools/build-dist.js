/* Menyiapkan folder dist/ berisi file website saja (untuk diunggah ke hosting).
   Jalankan: node tools/build-dist.js */
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, ".."), out = path.join(root, "dist");
const items = ["index.html", "manifest.webmanifest", "sw.js", "assets", "data"];
fs.rmSync(out, { recursive: true, force: true });
fs.mkdirSync(out);
let n = 0, bytes = 0;
function copy(src, dst) {
  const st = fs.statSync(src);
  if (st.isDirectory()) { fs.mkdirSync(dst, { recursive: true }); fs.readdirSync(src).forEach(f => copy(path.join(src, f), path.join(dst, f))); }
  else { fs.copyFileSync(src, dst); n++; bytes += st.size; }
}
items.forEach(i => fs.existsSync(path.join(root, i)) && copy(path.join(root, i), path.join(out, i)));
console.log("Selesai: " + n + " file, " + (bytes / 1024 / 1024).toFixed(2) + " MB → " + out);
