# Panduan Forum Kuliah S2 Ulumul Qur'an

Website ini **tidak memerlukan database**. Semua materi tersimpan di folder `data/` sebagai file teks yang bisa diubah dengan Notepad atau VS Code. Kemajuan belajar tiap mahasiswa (XP, nilai, catatan, jawaban soal wajib) tersimpan di browser masing-masing; mereka bisa memindahkannya lewat **Profil → Unduh cadangan**.

Pengembang: **Ryan Nugroho, S.H., M.A.** · WhatsApp 6281556551629 · ryanerrosyid12@gmail.com

---

## 1. Membuka website di komputer

```
node serve.js
```

Lalu buka `http://localhost:5174`. (Bisa juga klik dua kali `index.html`, tetapi fitur offline & tombol bagikan bekerja lebih baik lewat server.)

## 2. Struktur folder

```
index.html                 ← halaman utama (daftar file materi ada di bagian bawahnya)
data/
  site.js                  ← nama, pengembang, kontak, palet warna, mutiara ilmu, daftar fitur
  program.js               ← program S2: 4 semester, mata kuliah, dosen, kitab, penulis, hari, tautan Telegram
  ushul-tafsir/p01.js …    ← MATERI Ushul Tafsir, satu file per pertemuan (dwibahasa + latihan + soal wajib)
  ushul-tafsir/teks/p01.js ← TEKS ASLI tafrigh (dibuat otomatis dari file .docx)
assets/css/style.css       ← tampilan
assets/js/                 ← mesin aplikasi (tidak perlu diubah)
tools/                     ← alat bantu (pengubah docx, pembuat ikon, build & terbit)
```

## 3. Menambah mata kuliah baru (mis. Ulumul Qur'an)

Lima mata kuliah lain semester 1 **sudah terdaftar** di `data/program.js` (dosen, kitab, hari, tautan rekaman). Saat modulnya tersedia:

1. **Teks asli**: untuk setiap file Word, jalankan
   ```
   node tools/docx-ke-teks.js "C:\Users\User\Downloads\modul-1.docx" ulumul-quran 1
   ```
   Hasilnya `data/ulumul-quran/teks/p01.js`. ID mata kuliah: `aqidah`, `ulumul-quran`, `nasikh-mansukh`, `tajwid`, `nahwu`.
2. **Materi dwibahasa**: buat `data/ulumul-quran/p01.js` dengan pola yang sama seperti `data/ushul-tafsir/p01.js` (ganti `"ushul-tafsir"` menjadi `"ulumul-quran"`).
3. Tambahkan baris di `index.html` (di bawah baris Ushul Tafsir):
   ```html
   <script src="data/ulumul-quran/p01.js"></script>
   ```
4. Lengkapi `penulis` & `tentang` mata kuliah di `data/program.js` bila perlu.

Mata kuliah yang belum ada materinya otomatis tampil "Modul segera hadir" dengan tautan rekaman Telegram per pertemuan.

**Semester 2–4**: isi `mk: [ … ]` pada semester terkait di `data/program.js` dan ubah `status` menjadi `"aktif"`.

## 4. Pola satu pertemuan

```js
Kuliah.pertemuan("ushul-tafsir", {
  no: 1, motif: "akar", tema: 0, durasi: 22,
  telegram: "https://t.me/…",
  bab: { id: "…", ar: "…" },
  judul: { id: "…", ar: "…" },
  ringkas: { id: "…", ar: "…" },
  tujuan: [ { id, ar } ],
  isi: [ /* blok-blok materi, lihat bagian 5 */ ],
  istilah: [ { ar, latin, id, def: { id, ar } } ],      // → Kartu Istilah, Kamus, Muraja'ah
  latihan: {
    pg:    [ { q: {id, ar}, o: [{id, ar}, …], j: 0, b: {id, ar} } ],   // pilihan ganda (j = indeks jawaban, mulai 0)
    bs:    [ { t: {id, ar}, j: true, b: {id, ar} } ],                  // benar/salah
    jodoh: [ { a: {id, ar}, b: {id, ar} } ],                           // menjodohkan
    urut:  { t: {id, ar}, item: [ {id, ar}, … ] },                    // urutan BENAR
    isian: [ { t: {id: "… ______ …", ar: "… ______ …"}, j: {id, ar}, x: [ pengecoh ] } ],
    pilah: { t: {id, ar}, kategori: [ {id, ar}, … ], item: [ { t: {id, ar}, k: 0 } ] }
  },
  tugas: [ { t: { ar, id }, j: { ar, id } } ]            // soal wajib (أسئلة الواجب) + kunci jawaban
});
```

Setiap teks bisa ditulis `{ id: "Indonesia", ar: "العربية" }` (dwibahasa) atau string biasa. Format teks: `**tebal**`, `*miring*`, `{ayat}` tampil gaya mushaf, `[[عربي]]` untuk sisipan Arab dalam kalimat Indonesia.

**Motif animasi sampul**: `akar, sumber, lentera, generasi, cabang, gulungan, saringan, kalam, sanad, alat, persimpangan, spektrum, ijma, kaidah, mizan, kompas`. **Tema warna sampul**: `0`–`5`.

## 5. Jenis blok materi

| Blok | Kegunaan |
|---|---|
| `pembuka`, `p` | paragraf (pembuka berhuruf awal besar) |
| `judul`, `sub` | judul bagian (judul masuk Daftar Isi) |
| `definisi` | kartu *lughah* & *istilah*: `{ judul, lughah: {id, ar}, istilah: {id, ar} }` |
| `ayat`, `hadits`, `atsar` | `{ ar, id, src }` |
| `kutipan` | perkataan ulama `{ ar, id, oleh }` |
| `poin` | kartu poin `{ judul, item: [{ ikon, judul, id, ar }] }` |
| `langkah` | timeline bernomor |
| `peta` | peta konsep `{ pusat, cabang: [{ id, ar, sub: [...] }] }` |
| `banding` | dua kolom `{ kiri: { judul, warna, poin }, kanan: {...} }` (warna: green, amber, red, blue) |
| `contoh` | analisis contoh `{ judul, ayat: {ar, src, id}, sorot: [{ label, warna, id, ar }] }` |
| `tabel` | `{ kolom: [...], baris: [[...], …] }` |
| `catatan` | gaya: `faidah`, `tanbih`, `info`, `soal`, `hikmah` |
| `daftar`, `akordion`, `ringkasan` | daftar / buka-tutup / ringkasan |
| `tokoh` | garis waktu ulama `{ item: [{ nama, wafat, karya }] }` |
| `tanya` | pertanyaan dengan tombol "lihat jawaban" |
| `cek` | kuis kilat di tengah bacaan `{ q, o, j, b }` |
| `balik` | kartu bolak-balik |
| `gambar`, `video` | gambar / YouTube |

Ikon yang tersedia: lihat `assets/js/icons.js` (mis. `book, quran, lamp, lantern, scale, key, pen, scroll, star8, mosque, moonStar, chain, users, shield, target …`). Ikon sengaja tidak memuat simbol agama lain.

## 6. Backsound

Backsound bawaan berupa suara alam tanpa alat musik (hujan, pancuran serambi masjid, kebun kurma, sungai, angin gurun, malam, ombak) yang dibuat langsung oleh browser. Untuk menambah murattal: simpan MP3 di `assets/audio/` lalu di `data/site.js`:

```js
backsoundFiles: [{ id: "murattal", label: "Murattal", icon: "quran", file: "assets/audio/murattal.mp3" }],
```

## 7. Menerbitkan online (gratis)

1. `node tools/build-dist.js` → folder `dist/`.
2. Klik dua kali `tools/terbitkan.cmd` untuk mengunggah ke **Cloudflare Pages** (proyek `forum-kuliah-uq`; login Cloudflare sekali).
   Alternatif: seret isi folder `dist/` ke Cloudflare Pages / Netlify secara manual.
3. Setelah memperbarui materi, ubah `CACHE = "forum-kuliah-v3"` di `sw.js` menjadi `v2`, `v3`, … agar HP mahasiswa mengambil versi terbaru.

## 8. Yang perlu diperiksa

- [ ] Tinjau penjelasan Indonesia, ringkasan, dan kunci jawaban 16 pertemuan (disusun dari tafrigh; konfirmasikan dengan dosen bila ada keraguan).
- [ ] Tahun wafat tokoh di daftar garis waktu sebagian ditambahkan dari kitab biografi (diberi catatan di materinya).
- [ ] Lengkapi nama penulis kitab *Al-Bidayah fil 'Aqidah*, *Al-Bidayah fi 'Ulum al-Qur'an*, dan *Muqarrar at-Tajwid* di `data/program.js`.
- [ ] Teks asli tafrigh adalah materi akademi — sebaiknya situs hanya dibagikan kepada mahasiswa angkatan.
