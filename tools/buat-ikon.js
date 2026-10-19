/* Membuat ikon PNG aplikasi (192 & 512 px) tanpa pustaka tambahan.
   Jalankan: node tools/buat-ikon.js */
const fs = require("fs"), path = require("path"), zlib = require("zlib");

function png(size) {
  const S = 4, px = Buffer.alloc(size * size * 4), c = size / 2, k = size / 512;
  const BG = [13, 92, 75], GOLD = [201, 162, 74], PAGE = [255, 250, 240];
  const inSquare = (x, y, h, rot) => { const a = rot * Math.PI / 180, dx = x - c, dy = y - c; const u = dx * Math.cos(a) + dy * Math.sin(a), v = -dx * Math.sin(a) + dy * Math.cos(a); return Math.abs(u) <= h && Math.abs(v) <= h; };
  const inStar = (x, y, h) => inSquare(x, y, h, 0) || inSquare(x, y, h, 45);
  const inRound = (x, y, r) => { const m = size, rx = Math.min(Math.max(x, r), m - r), ry = Math.min(Math.max(y, r), m - r); return (x - rx) ** 2 + (y - ry) ** 2 <= r * r; };
  const poly = (x, y, pts) => { let ins = false; for (let i = 0, j = pts.length - 1; i < pts.length; j = i++) { const [xi, yi] = pts[i], [xj, yj] = pts[j]; if ((yi > y) !== (yj > y) && x < (xj - xi) * (y - yi) / (yj - yi) + xi) ins = !ins; } return ins; };
  const P = a => a.map(([x, y]) => [x * k, y * k]);
  const left = P([[250, 222], [200, 192], [128, 186], [128, 330], [200, 336], [250, 362]]);
  const right = P([[262, 222], [312, 192], [384, 186], [384, 330], [312, 336], [262, 362]]);
  for (let y = 0; y < size; y++) for (let x = 0; x < size; x++) {
    let r = 0, g = 0, b = 0, a = 0;
    for (let sy = 0; sy < S; sy++) for (let sx = 0; sx < S; sx++) {
      const X = x + (sx + .5) / S, Y = y + (sy + .5) / S;
      if (!inRound(X, Y, 110 * k)) continue;
      let col = BG;
      if (inStar(X, Y, 168 * k)) col = GOLD;
      if (inStar(X, Y, 156 * k)) col = BG;
      if (poly(X, Y, left) || poly(X, Y, right)) col = PAGE;
      r += col[0]; g += col[1]; b += col[2]; a += 255;
    }
    const n = S * S, i = (y * size + x) * 4;
    px[i] = a ? r / (a / 255) : 0; px[i + 1] = a ? g / (a / 255) : 0; px[i + 2] = a ? b / (a / 255) : 0; px[i + 3] = a / n;
  }
  const raw = Buffer.alloc((size * 4 + 1) * size);
  for (let y = 0; y < size; y++) { raw[y * (size * 4 + 1)] = 0; px.copy(raw, y * (size * 4 + 1) + 1, y * size * 4, (y + 1) * size * 4); }
  const crcT = Array.from({ length: 256 }, (_, n) => { let c = n; for (let k2 = 0; k2 < 8; k2++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; return c >>> 0; });
  const crc = buf => { let c = 0xffffffff; for (const v of buf) c = crcT[(c ^ v) & 255] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };
  const chunk = (type, data) => { const len = Buffer.alloc(4); len.writeUInt32BE(data.length); const td = Buffer.concat([Buffer.from(type), data]); const cr = Buffer.alloc(4); cr.writeUInt32BE(crc(td)); return Buffer.concat([len, td, cr]); };
  const ihdr = Buffer.alloc(13); ihdr.writeUInt32BE(size, 0); ihdr.writeUInt32BE(size, 4); ihdr[8] = 8; ihdr[9] = 6;
  return Buffer.concat([Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]), chunk("IHDR", ihdr), chunk("IDAT", zlib.deflateSync(raw, { level: 9 })), chunk("IEND", Buffer.alloc(0))]);
}
const dir = path.join(__dirname, "..", "assets", "img");
[192, 512].forEach(s => { fs.writeFileSync(path.join(dir, "icon-" + s + ".png"), png(s)); console.log("icon-" + s + ".png dibuat"); });
