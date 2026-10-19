/* =====================================================================
   PENGATURAN UMUM WEBSITE — nama, pengembang, kontak, warna, mutiara ilmu
   ===================================================================== */
window.SITE = {
  brand: "Forum Kuliah S2 Ulumul Qur'an",
  brandShort: "Forum S2 UQ",
  brandAr: "منتدى ماجستير علوم القرآن",
  tagline: "Membaca modul, memahami dua bahasa, menguji diri — dalam satu ruang belajar.",
  owner: "Ryan Nugroho, S.H., M.A.",
  ownerBio: "Penggagas dan pengembang aplikasi Forum Kuliah S2 Ulumul Qur'an — ruang belajar digital yang memadukan modul kuliah dwibahasa, latihan interaktif, dan muraja'ah berkala agar ilmu Al-Qur'an mudah dipelajari, diulang, dan diamalkan.",
  contact: {
    whatsapp: "6281556551629",
    email: "ryanerrosyid12@gmail.com"
  },
  disclaimer: "Aplikasi ini adalah ruang belajar mandiri mahasiswa dan bukan situs resmi lembaga. Hak materi kuliah ada pada akademi, dosen pengampu, dan penulis kitab. Penjelasan bahasa Indonesia disusun sebagai alat bantu belajar — rujuk selalu teks asli dan penjelasan dosen.",
  sumber: "Materi Ushul Tafsir disusun dari **tafrigh (transkrip) kuliah** kitab *At-Tahrir fi Ushul at-Tafsir* karya Dr. Musa'id bin Sulaiman ath-Thayyar, yang disyarah oleh Syaikh Sami bin Bali — Magister Ulumul Qur'an, Akademi Syifa'ul Qulub wa Muddakir, angkatan ke-7 (1448 H). Teks Arab asli ditampilkan apa adanya di tab **Teks Asli**; penjelasan Indonesia, ringkasan, dan soal latihan tambahan disusun untuk aplikasi ini.",

  palettes: [
    { id: "zamrud", name: "Zamrud & Emas", desc: "Klasik mushaf — teduh dan berwibawa", colors: ["#0d5c4b", "#c9a24a", "#f7f3ea"] },
    { id: "lazuardi", name: "Lazuardi Andalusia", desc: "Biru keramik Andalus dan emas", colors: ["#173f78", "#d1a54b", "#f3f5fa"] },
    { id: "firuz", name: "Pirus Samarkand", desc: "Kubah biru-hijau dan tembaga", colors: ["#0b6e78", "#e0a35a", "#f2f7f6"] },
    { id: "anggur", name: "Ungu Kesturi", desc: "Lembut dan elegan", colors: ["#5d2c63", "#d8a85e", "#f8f4f8"] },
    { id: "terakota", name: "Bata Marrakesh", desc: "Hangat seperti dinding Maghrib", colors: ["#8f442c", "#d9a441", "#fbf4ec"] },
    { id: "zaitun", name: "Kebun Zaitun", desc: "Natural, menenangkan", colors: ["#556427", "#c9a24a", "#f6f5ec"] }
  ],
  defaultPalette: "zamrud",

  /* Backsound tambahan dari file sendiri (opsional), contoh:
     backsoundFiles: [{ id: "murattal", label: "Murattal", icon: "quran", file: "assets/audio/murattal.mp3" }], */
  backsoundFiles: [],

  hikmah: [
    { ar: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ لِّيَدَّبَّرُوا آيَاتِهِ وَلِيَتَذَكَّرَ أُولُو الْأَلْبَابِ", id: "(Ini adalah) Kitab yang Kami turunkan kepadamu penuh berkah, agar mereka menghayati ayat-ayatnya dan agar orang-orang yang berakal mendapat pelajaran.", src: "QS. Shad: 29" },
    { ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ", id: "Dan Kami turunkan Adz-Dzikr (Al-Qur'an) kepadamu agar engkau menjelaskan kepada manusia apa yang telah diturunkan kepada mereka, dan agar mereka berpikir.", src: "QS. An-Nahl: 44" },
    { ar: "خَيْرُكُمْ مَنْ تَعَلَّمَ الْقُرْآنَ وَعَلَّمَهُ", id: "Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya.", src: "HR. Al-Bukhari" },
    { ar: "اللَّهُمَّ فَقِّهْهُ فِي الدِّينِ وَعَلِّمْهُ التَّأْوِيلَ", id: "Ya Allah, pahamkanlah ia dalam agama dan ajarkanlah kepadanya takwil (tafsir).", src: "Doa Nabi ﷺ untuk Ibnu 'Abbas — HR. Ahmad" },
    { ar: "إِنَّكَ لَنْ تَفْقَهَ كُلَّ الْفِقْهِ حَتَّى تَرَى لِلْقُرْآنِ وُجُوهًا", id: "Engkau tidak akan benar-benar faqih hingga engkau melihat Al-Qur'an memiliki banyak sisi makna.", src: "Abu ad-Darda' — Pertemuan 12" },
    { ar: "إِنَّ أَصَحَّ الطُّرُقِ فِي ذَلِكَ أَنْ يُفَسَّرَ الْقُرْآنُ بِالْقُرْآنِ", id: "Jalan paling benar dalam tafsir adalah menafsirkan Al-Qur'an dengan Al-Qur'an.", src: "Ibnu Taimiyah, Muqaddimah fi Ushul at-Tafsir — Pertemuan 2" },
    { ar: "مِنْ بَرَكَةِ الْعِلْمِ أَنْ تُضِيفَ الشَّيْءَ إِلَى قَائِلِهِ", id: "Termasuk keberkahan ilmu adalah engkau menisbatkan suatu perkataan kepada orang yang mengucapkannya.", src: "Ibnu 'Abdil Barr — Pertemuan 9" },
    { ar: "مَا فِي الْقُرْآنِ آيَةٌ إِلَّا وَقَدْ سَمِعْتُ فِيهَا شَيْئًا", id: "Tidak ada satu ayat pun dalam Al-Qur'an melainkan aku telah mendengar (riwayat tafsir) tentangnya.", src: "Qatadah — Pertemuan 4" },
    { ar: "لَا بُدَّ أَنْ يَكُونَ مَعَ الْإِنْسَانِ أُصُولٌ كُلِّيَّةٌ تُرَدُّ إِلَيْهَا الْجُزْئِيَّاتُ لِيَتَكَلَّمَ بِعِلْمٍ وَعَدْلٍ", id: "Seseorang harus memiliki kaidah-kaidah umum untuk mengembalikan perkara-perkara rinci kepadanya, agar ia berbicara dengan ilmu dan adil.", src: "Ibnu Taimiyah — Pertemuan 14" },
    { ar: "يَرْفَعِ اللَّهُ الَّذِينَ آمَنُوا مِنكُمْ وَالَّذِينَ أُوتُوا الْعِلْمَ دَرَجَاتٍ", id: "Allah akan mengangkat orang-orang yang beriman di antara kalian dan orang-orang yang diberi ilmu beberapa derajat.", src: "QS. Al-Mujadilah: 11" }
  ],

  fitur: [
    ["language", "Materi dua bahasa", "Indonesia, Arab, atau keduanya berdampingan — tinggal ketuk ID / ع."],
    ["scroll", "Teks asli tafrigh", "Transkrip Arab lengkap tiap kuliah, bisa dicari kata per kata."],
    ["puzzle", "7 jenis latihan & game", "Pilihan ganda, benar/salah, menjodohkan, urutan, isian, pilah kategori, kartu istilah."],
    ["pen", "Soal wajib + kunci", "أسئلة الواجب dari modul dengan kunci jawaban dwibahasa & penilaian diri."],
    ["trophy", "Arena ujian", "Tantangan harian, kuis kilat, adu cepat, tahan uji, simulasi UTS & UAS."],
    ["cards", "Muraja'ah berjarak", "Kartu istilah dengan sistem 5 kotak Leitner."],
    ["medal", "XP, level & lencana", "Gelar bertingkat dari Mubtadi' hingga Mudaqqiq, 15 lencana prestasi."],
    ["map", "Peta kitab", "Gambaran besar isi kitab dan posisi tiap pertemuan."],
    ["headphones", "Backsound & efek suara", "Suara alam tanpa musik, efek suara jawaban, dan waktu fokus."],
    ["ear", "Dengarkan materi", "Fitur suara (text-to-speech) Indonesia & Arab."],
    ["download", "Bisa dipasang & offline", "Pasang di layar utama HP; materi tetap terbuka tanpa internet."],
    ["seal", "Rapor & sertifikat", "Cetak rapor dan sertifikat penyelesaian belajar mandiri."]
  ]
};
