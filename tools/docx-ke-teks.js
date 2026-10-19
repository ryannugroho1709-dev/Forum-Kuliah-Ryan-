/* =====================================================================
   PENGUBAH MODUL .DOCX → TEKS ASLI (tab "Teks Asli" di aplikasi)
   Pemakaian (dari folder aplikasi):
     node tools/docx-ke-teks.js "C:\path\modul.docx" ushul-tafsir 17
   Hasil: data/ushul-tafsir/teks/p17.js
   Tanpa pustaka tambahan — hanya memakai Node.js bawaan.
   ===================================================================== */
const fs = require("fs"), path = require("path"), zlib = require("zlib");

function readZipEntry(buf, name) {
  let eocd = -1;
  for (let i = buf.length - 22; i >= Math.max(0, buf.length - 70000); i--) if (buf.readUInt32LE(i) === 0x06054b50) { eocd = i; break; }
  if (eocd < 0) throw new Error("Bukan berkas .docx yang valid.");
  const count = buf.readUInt16LE(eocd + 10);
  let p = buf.readUInt32LE(eocd + 16);
  for (let k = 0; k < count; k++) {
    const method = buf.readUInt16LE(p + 10), csize = buf.readUInt32LE(p + 20), nlen = buf.readUInt16LE(p + 28), elen = buf.readUInt16LE(p + 30), clen = buf.readUInt16LE(p + 32), off = buf.readUInt32LE(p + 42);
    const fname = buf.toString("utf8", p + 46, p + 46 + nlen);
    if (fname === name) {
      const lnlen = buf.readUInt16LE(off + 26), lelen = buf.readUInt16LE(off + 28);
      const data = buf.subarray(off + 30 + lnlen + lelen, off + 30 + lnlen + lelen + csize);
      return method === 0 ? data.toString("utf8") : zlib.inflateRawSync(data).toString("utf8");
    }
    p += 46 + nlen + elen + clen;
  }
  throw new Error("word/document.xml tidak ditemukan.");
}

const dec = s => s.replace(/&quot;/g, '"').replace(/&apos;/g, "'").replace(/&lt;/g, "<").replace(/&gt;/g, ">").replace(/&amp;/g, "&");
function paragraphs(xml) {
  xml = xml.replace(/<w:tbl>[\s\S]*?<\/w:tbl>/g, t => [...t.matchAll(/<w:tr[\s>][\s\S]*?<\/w:tr>/g)].map(r => "<w:p><w:r><w:t>" + [...r[0].matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>/g)].map(x => x[1]).join(" | ") + "</w:t></w:r></w:p>").join(""));
  return [...xml.matchAll(/<w:p[\s>][\s\S]*?<\/w:p>/g)].map(p =>
    [...p[0].matchAll(/<w:t(?: [^>]*)?>([\s\S]*?)<\/w:t>|<w:tab\/>|<w:br\/>/g)].map(x => x[1] !== undefined ? dec(x[1]) : " ").join("")
  ).map(s => s.replace(/\s+/g, " ").trim()).filter(s => s && s !== "<");
}

const [file, mk, no] = process.argv.slice(2);
if (!file || !mk || !no) { console.log('Pemakaian: node tools/docx-ke-teks.js "modul.docx" <id-mata-kuliah> <nomor-pertemuan>'); process.exit(1); }
const lines = paragraphs(readZipEntry(fs.readFileSync(file), "word/document.xml"));
const out = path.join(__dirname, "..", "data", mk, "teks", "p" + String(no).padStart(2, "0") + ".js");
fs.mkdirSync(path.dirname(out), { recursive: true });
fs.writeFileSync(out, "/* Teks asli (tafrigh) — dibuat otomatis dari " + path.basename(file).replace(/\*\//g, "") + " */\nKuliah.teks(" + JSON.stringify(mk) + ", " + (+no) + ", " + JSON.stringify(lines, null, 0).replace(/","/g, '",\n"') + ");\n", "utf8");
console.log("Selesai: " + out + " (" + lines.length + " paragraf)");
