/* =====================================================================
   PROGRAM MAGISTER ULUMUL QUR'AN — 4 SEMESTER
   - status semester: "aktif" atau "segera"
   - hari: 0 = Ahad, 1 = Senin, … 6 = Sabtu
   - tautan: rekaman/posting tiap pertemuan di Telegram (urut 1..n)
   Untuk mata kuliah baru: isi datanya di sini, lalu buat folder
   data/<id-mata-kuliah>/ berisi p01.js, p02.js, … (lihat PANDUAN.md).
   ===================================================================== */
(function () {
  const tg = n => "https://t.me/Shifaaulqloub7/" + n;
  const links = arr => arr.map(tg);

  window.PROGRAM = {
    nama: { id: "Magister (S2) Ulumul Qur'an", ar: "ماجستير علوم القرآن" },
    lembaga: { id: "Akademi Syifa'ul Qulub wa Muddakir", ar: "أكاديمية شفاء القلوب ومُدَّكر" },
    naungan: { id: "Universitas Shafwah", ar: "جامعة صفوة" },
    angkatan: { id: "Angkatan ke-7 · 1448 H", ar: "الدفعة السابعة · ١٤٤٨هـ" },
    mulai: { id: "Sabtu, 5 Muharram 1448 H", ar: "السبت ٥ محرم ١٤٤٨هـ" },
    kanal: {
      pelajaran: "https://t.me/Shifaaulqloub7",
      manahij: "https://t.me/Manahij_Shifaa_Academy",
      jadwal: tg(17),
      fihris: [tg(33), tg(35)]
    },
    semester: [
      {
        no: 1, status: "aktif", ar: "الفصل الدراسي الأول", tahun: "1448 H",
        mk: [
          {
            id: "aqidah", hari: 6, ikon: "tauhid", tema: 0, motif: "kaidah", motifOpt: { lbl: "التوحيد" }, warna: "Zamrud", jumlah: 16,
            nama: { id: "Aqidah", ar: "العقيدة" },
            kitab: { id: "Syarh Al-Bidayah fil 'Aqidah", ar: "شرح البداية في العقيدة" },
            penulis: null,
            dosen: { id: "Syaikh Dr. Wahid bin 'Abdussalam Bali", ar: "الشيخ الدكتور وحيد بن عبد السلام بالي" },
            kanal: tg(41), lengkap: tg(593),
            tautan: links([41, 78, 114, 152, 188, 227, 264, 300, 338, 375, 412, 448, 486, 522, 558, 588]),
            tentang: {
              id: "Kitab ini membahas **pokok-pokok aqidah Islam** secara ringkas dan padat: pengertian dan pembagian **tiga macam tauhid** (rububiyyah, uluhiyyah, asma' was-shifat), ibadah dan macam-macamnya, tawassul yang syar'i dan yang terlarang, asal-usul syirik, lalu **enam rukun iman** — iman kepada Allah, malaikat, kitab-kitab, rasul-rasul, hari akhir, dan qadar. Setiap bab diiringi dalil dari Al-Qur'an dan Sunnah serta kisah-kisah yang menyentuh hati.",
              ar: "يتناول الكتاب أصول العقيدة الإسلامية: تعريف التوحيد وأقسامه الثلاثة (الربوبية والألوهية والأسماء والصفات)، والعبادة وأقسامها، والتوسل المشروع والممنوع، وأصول الشرك، ثم أركان الإيمان الستة مع الاستدلال من القرآن والسنة."
            },
            tentangPenulis: {
              id: "Syaikh Dr. Wahid bin 'Abdussalam Bali adalah ulama Mesir yang dikenal luas melalui ceramah-ceramahnya yang menyentuh hati. Beliau aktif mengajar di berbagai akademi syar'iyyah dan memiliki banyak karya tulis tentang aqidah, tauhid, dan ruqyah syar'iyyah. Dalam kuliah ini beliau menyampaikan materi *Al-Bidayah fil 'Aqidah* dengan gaya yang memadukan antara ilmu dan iman.",
              ar: "الشيخ الدكتور وحيد بن عبد السلام بالي عالم مصري مشهور بدروسه الإيمانية المؤثرة، يدرّس في عدد من الأكاديميات الشرعية، وله مؤلفات في العقيدة والتوحيد والرقية الشرعية."
            },
            bab: [
              { id: "Tauhid & macam-macamnya", ar: "التوحيد وأقسامه", dari: 1, sampai: 2 },
              { id: "Ibadah & macam-macamnya", ar: "العبادة وأقسامها", dari: 3, sampai: 5 },
              { id: "Tawassul & syirik", ar: "التوسل والشرك", dari: 6, sampai: 7 },
              { id: "Iman kepada malaikat", ar: "الإيمان بالملائكة", dari: 8, sampai: 8 },
              { id: "Iman kepada kitab-kitab", ar: "الإيمان بالكتب", dari: 9, sampai: 9 },
              { id: "Iman kepada rasul-rasul", ar: "الإيمان بالرسل", dari: 10, sampai: 13 },
              { id: "Iman kepada hari akhir", ar: "الإيمان باليوم الآخر", dari: 14, sampai: 16 }
            ]
          },
          {
            id: "ulumul-quran", hari: 0, ikon: "mushaf", tema: 1, motif: "lentera", motifOpt: { lbl: "كِتَابٌ أَنزَلْنَاهُ إِلَيْكَ مُبَارَكٌ" }, warna: "Lazuardi", jumlah: 16,
            nama: { id: "Ulumul Qur'an", ar: "علوم القرآن" },
            kitab: { id: "Syarh Al-Bidayah fi 'Ulum al-Qur'an", ar: "شرح البداية في علوم القرآن" },
            penulis: null,
            dosen: { id: "Syaikh Mushthafa Farhat", ar: "الشيخ مصطفى فرحات" },
            kanal: tg(48), lengkap: tg(601),
            tautan: links([48, 84, 120, 158, 194, 234, 270, 306, 345, 381, 418, 454, 492, 528, 564, 596]),
            tentang: {
              id: "Ringkasan (*mukhtashar*) yang memetakan **18 bab pokok Ulumul Qur'an**: wahyu, turunnya Al-Qur'an, makki–madani, asbab an-nuzul, pengumpulan dan penyusunan mushaf, muhkam–mutasyabih, 'amm–khashsh, nasikh–mansukh, muthlaq–muqayyad, manthuq–mafhum, i'jaz, amtsal, aqsam, jadal, qashash, terjemah Al-Qur'an, israiliyyat, dan ushul tafsir. Kitab disusun dalam bentuk **dhabit-dhabit** (kaidah ringkas) yang dihafal, lalu Syaikh Mushthafa Farhat menjelaskan tiap dhabit dengan dalil, contoh, dan perbedaan pendapat ulama.",
              ar: "مختصر يرسم خريطة أبواب علوم القرآن الثمانية عشر: الوحي، ونزول القرآن، والمكي والمدني، وأسباب النزول، وجمع القرآن وترتيبه، والمحكم والمتشابه، والعام والخاص، والناسخ والمنسوخ، والمطلق والمقيد، والمنطوق والمفهوم، والإعجاز، والأمثال، والأقسام، والجدل، والقصص، وترجمة القرآن، والإسرائيليات، وأصول التفسير؛ مصوغٌ في ضوابط مختصرة يشرحها الشيخ بالأدلة والأمثلة وأقوال العلماء."
            },
            bab: [
              { id: "Muqaddimah & peta 18 bab", ar: "المقدمة وخريطة الأبواب", dari: 1, sampai: 2 },
              { id: "Al-Wahy & Nuzul al-Qur'an", ar: "الوحي ونزول القرآن", dari: 3, sampai: 4 },
              { id: "Makki–Madani & Asbab an-Nuzul", ar: "المكي والمدني وأسباب النزول", dari: 5, sampai: 6 },
              { id: "Jam' al-Qur'an & Muhkam–Mutasyabih", ar: "جمع القرآن والمحكم والمتشابه", dari: 7, sampai: 8 },
              { id: "'Amm–Khashsh, Naskh, Muthlaq & Manthuq", ar: "العام والخاص والنسخ والمطلق والمنطوق", dari: 9, sampai: 11 },
              { id: "I'jaz, Amtsal & Aqsam", ar: "الإعجاز والأمثال والأقسام", dari: 12, sampai: 14 },
              { id: "Jidal, Qashash, Tarjamah, Israiliyyat & Ushul Tafsir", ar: "الجدل والقصص والترجمة والإسرائيليات وأصول التفسير", dari: 15, sampai: 16 }
            ]
          },
          {
            id: "ushul-tafsir", hari: 1, ikon: "ushul", tema: 7, motif: "akar", warna: "Kahrab", jumlah: 16,
            nama: { id: "Ushul Tafsir", ar: "أصول التفسير" },
            kitab: { id: "At-Tahrir fi Ushul at-Tafsir", ar: "التحرير في أصول التفسير" },
            penulis: { id: "Dr. Musa'id bin Sulaiman ath-Thayyar", ar: "د. مساعد بن سليمان الطيار" },
            dosen: { id: "Syaikh Sami bin Bali", ar: "الشيخ سامي بن بالي" },
            kanal: tg(54), lengkap: tg(609),
            tautan: links([54, 90, 126, 164, 200, 240, 276, 312, 351, 387, 424, 460, 498, 534, 570, 604]),
            tentang: {
              id: "Kitab ini menyusun **dasar-dasar ilmiah yang menjadi rujukan seorang mufassir** ketika menjelaskan makna Al-Qur'an dan ketika menimbang perbedaan pendapat dalam tafsir. Pembahasannya meliputi: definisi & sejarah ushul tafsir, **lima sumber tafsir** (Al-Qur'an, Sunnah, perkataan salaf, bahasa Arab, dan israiliyyat), jalan tafsir (riwayat & ijtihad), ilmu-ilmu yang dibutuhkan mufassir, sebab dan jenis perbedaan tafsir, ijma' dalam tafsir, kaidah-kaidah tafsir, serta **kaidah-kaidah tarjih**.",
              ar: "يتناول الكتاب الأسس العلمية التي يرجع إليها المفسر حال بيانه لمعاني القرآن وتحريره للاختلاف في التفسير: تعريف أصول التفسير وتاريخه، ومصادر التفسير الخمسة، وطرق التفسير، والعلوم التي يحتاج إليها المفسر، وأسباب الاختلاف وأنواعه، والإجماع في التفسير، وقواعد التفسير، وقواعد الترجيح."
            },
            tentangPenulis: {
              id: "Dr. Musa'id bin Sulaiman bin Nashir ath-Thayyar adalah pakar studi Al-Qur'an dari Arab Saudi yang banyak menulis tentang ushul tafsir dan metodologi tafsir salaf — di antara karyanya yang disebut dalam kuliah ialah *Fushul fi Ushul at-Tafsir*. Dalam kuliah ini, beliau disebut sebagai \"al-Mushannif\" (penulis kitab). *(Silakan lengkapi biografi resmi bila diperlukan.)*",
              ar: "الدكتور مساعد بن سليمان الطيار، من المتخصصين في الدراسات القرآنية، له مؤلفات في أصول التفسير منها: «فصول في أصول التفسير»، ويُشار إليه في المحاضرات بـ«المصنف»."
            },
            bab: [
              { id: "Muqaddimah: definisi & sejarah", ar: "مقدمة: التعريف والتاريخ", dari: 1, sampai: 1 },
              { id: "Sumber-sumber tafsir", ar: "مصادر التفسير", dari: 2, sampai: 8 },
              { id: "Jalan tafsir & bekal mufassir", ar: "طرق التفسير وعلوم المفسر", dari: 9, sampai: 10 },
              { id: "Perbedaan pendapat & ijma'", ar: "الاختلاف والإجماع في التفسير", dari: 11, sampai: 13 },
              { id: "Kaidah tafsir & kaidah tarjih", ar: "قواعد التفسير والترجيح", dari: 14, sampai: 16 }
            ]
          },
          {
            id: "nasikh-mansukh", hari: 2, ikon: "naskh", tema: 11, motif: "mizan", motifOpt: { l1: "ناسخٌ", l2: "منسوخٌ", lbl: "نواسخ القرآن" }, warna: "Banafsaj", jumlah: 16,
            nama: { id: "An-Nasikh wal Mansukh", ar: "الناسخ والمنسوخ" },
            kitab: { id: "Nawasikh al-Qur'an", ar: "نواسخ القرآن" },
            penulis: { id: "Imam Ibnul Jauzi (w. 597 H)", ar: "الإمام ابن الجوزي (ت ٥٩٧هـ)" },
            dosen: { id: "Syaikh Dr. Nur Sya'lan", ar: "الشيخ الدكتور نور شعلان" },
            kanal: tg(60), lengkap: tg(617),
            tautan: links([60, 96, 132, 170, 208, 246, 282, 318, 357, 393, 430, 466, 504, 540, 576, 612]),
            tentang: {
              id: "Kitab ini menghimpun **kajian naskh dalam Al-Qur'an** oleh Imam Ibnul Jauzi. Dua bagian utamanya: **bab-bab teori** (kebolehan naskh, bedanya dengan bada', hakikat dan syarat naskh, naskh Al-Qur'an dengan Sunnah, keutamaan ilmu ini) lalu **pembahasan 247 permasalahan dari 62 surah** yang diklaim mansukh, disusun menurut urutan mushaf. Dalam kuliah ini Dr. Nur Sya'lan menimbang setiap klaim: apakah benar ada pertentangan, adakah jalan *jam'* (kompromi), dan siapa yang berpendapat apa — sehingga mahasiswa belajar sikap ilmiah, bukan sekadar daftar ayat.",
              ar: "يجمع الكتاب بحث النسخ في القرآن للإمام ابن الجوزي: أبواب نظرية (جواز النسخ، الفرق بينه وبين البداء، حقيقته وشروطه، نسخ القرآن بالسنة، فضل هذا العلم)، ثم مناقشة سبع وأربعين ومائتي قضية من اثنتين وستين سورة ادُّعي فيها النسخ، مرتبةً على ترتيب المصحف، مع بيان وجه الجمع وأقوال العلماء."
            },
            tentangPenulis: {
              id: "Abul Faraj 'Abdurrahman bin 'Ali Ibnul Jauzi (w. 597 H) adalah ulama besar Baghdad bermazhab Hanbali — hafizh, mufassir, ahli hadits, sejarawan, dan penceramah — yang menulis ratusan karya, di antaranya *Zadul Masir* (tafsir) dan *Nawasikh al-Qur'an*. *(Silakan lengkapi biografi resmi bila diperlukan.)*",
              ar: "أبو الفرج عبد الرحمن بن علي ابن الجوزي (ت ٥٩٧هـ)، من أعلام بغداد وفقهاء الحنابلة، مفسر ومحدث ومؤرخ وواعظ، له مئات المصنفات منها «زاد المسير» و«نواسخ القرآن»."
            },
            bab: [
              { id: "Muqaddimah & hakikat naskh", ar: "المقدمة وحقيقة النسخ", dari: 1, sampai: 3 },
              { id: "Ayat yang diklaim mansukh: Al-Baqarah", ar: "الآيات المدعى نسخها: سورة البقرة", dari: 4, sampai: 8 },
              { id: "Ali 'Imran & An-Nisa'", ar: "سورتا آل عمران والنساء", dari: 9, sampai: 10 },
              { id: "Al-Ma'idah hingga Al-Mu'minun", ar: "من المائدة إلى المؤمنون", dari: 11, sampai: 13 },
              { id: "An-Nur hingga akhir kitab", ar: "من النور إلى آخر الكتاب", dari: 14, sampai: 16 }
            ]
          },
          {
            id: "tajwid", hari: 3, ikon: "makhraj", tema: 2, motif: "kalam", motifOpt: { big: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", lbl: "أحكام التجويد" }, warna: "Firuz", jumlah: 14,
            nama: { id: "Tajwid", ar: "التجويد" },
            kitab: { id: "Muqarrar at-Tajwid", ar: "مقرر التجويد" },
            penulis: null,
            dosen: { id: "Syaikh Muhammad asy-Syuqairi", ar: "الشيخ محمد الشقيري" },
            kanal: tg(66), lengkap: tg(620),
            tautan: links([66, 102, 140, 176, 214, 252, 288, 324, 363, 399, 436, 473, 510, 546]),
            tentang: {
              id: "Kuliah tajwid **teori dan praktik** yang berjalan dari dasar ke lanjutan: mukadimah, isti'adzah dan basmalah; **hukum nun sukun, tanwin, mim sukun, dan lam sukun**; **bab mad**; **makharij** (lima makhraj umum, tujuh belas makhraj khusus) dan **sifat huruf**; hubungan antarhuruf, **tafkhim dan tarqiq**; **waqaf dan ibtida'**; lalu kaidah rasm mushaf: **maqthu' wal-mawshul, ta'at, hamzat al-washl, serta hadzf dan itsbat**. Tiap hukum diajarkan dengan definisi, sebab, cabang, dan contoh ayat berharakat lengkap.",
              ar: "مادة تجويد علمية تطبيقية متدرجة: مقدمة علم التجويد والاستعاذة والبسملة، وأحكام النون الساكنة والتنوين والميم الساكنة واللام الساكنة، وباب المدود، ومخارج الحروف وصفاتها، والعلاقات بين الحروف، والتفخيم والترقيق، والوقف والابتداء، ثم أحكام الرسم: المقطوع والموصول، والتاءات، وهمزة الوصل، والحذف والإثبات؛ مع الأمثلة القرآنية."
            },
            bab: [
              { id: "Mukadimah & hukum nun, mim, lam sukun", ar: "المقدمة وأحكام النون والميم واللام الساكنة", dari: 1, sampai: 2 },
              { id: "Bab Al-Mudud", ar: "باب المدود", dari: 3, sampai: 3 },
              { id: "Makharij & sifat huruf", ar: "مخارج الحروف وصفاتها", dari: 4, sampai: 5 },
              { id: "Hubungan huruf, tafkhim, tarqiq & dua sukun", ar: "العلاقات بين الحروف والتفخيم والترقيق والتقاء الساكنين", dari: 6, sampai: 8 },
              { id: "Waqaf & ibtida'", ar: "الوقف والابتداء", dari: 9, sampai: 10 },
              { id: "Kaidah rasm: maqthu', ta'at, hamzah, hadzf", ar: "أحكام الرسم: المقطوع والتاءات والهمزة والحذف", dari: 11, sampai: 14 }
            ]
          },
          {
            id: "nahwu", hari: 4, ikon: "harakat", tema: 6, motif: "harakat", motifOpt: { lbl: "النحو تأسيسٌ وتطبيقٌ" }, warna: "Yaqut", jumlah: 16,
            nama: { id: "Nahwu", ar: "النحو" },
            kitab: { id: "Ad-Durus an-Nahwiyyah", ar: "الدروس النحوية" },
            penulis: { id: "Hifni Nashif dkk.", ar: "حفني ناصف وآخرون" },
            dosen: { id: "Dr. 'Ali an-Namr", ar: "الدكتور علي النمر" },
            kanal: tg(72), lengkap: tg(628),
            tautan: links([72, 108, 146, 182, 220, 258, 294, 332, 369, 406, 442, 479, 516, 552, 582, 623]),
            tentang: {
              id: "Kitab dasar nahwu yang disusun bertahap dan sangat praktis: dari **susunan kata** (isim, fi'il, huruf), **mabni dan mu'rab**, macam-macam i'rab beserta tandanya, i'rab fi'il mudhari', **6 marfu'at**, **11 manshubat**, **majrurat**, **4 tawabi'**, hingga **i'rab mahalli** dan cara mengi'rab. Dalam kuliah ini setiap pelajaran ditutup dengan **tathbiq i'rab satu surah pendek** dari Juz 'Amma — sesuai semboyan dosen: *an-nahwu ta'sis wa tathbiq* (nahwu itu pondasi dan praktik).",
              ar: "كتاب تعليمي متدرج في قواعد النحو: تكوُّن الكلمات، والمبني والمعرب، وأنواع الإعراب وعلاماته، وإعراب المضارع، ومرفوعات الأسماء ومنصوباتها ومجروراتها، والتوابع، والإعراب المحلي وكيفية الإعراب؛ ويُختم كل درس في المحاضرات بتطبيق إعرابي على سورة من قصار السور: «النحو تأسيس وتطبيق»."
            },
            tentangPenulis: {
              id: "*Ad-Durus an-Nahwiyyah* adalah buku ajar nahwu yang disusun oleh tim ulama bahasa Mesir — **Hifni Nashif** bersama rekan-rekannya (Muhammad Diyab, Mushthafa Thamum, Muhammad Shalih, dan Sulthan Muhammad) — untuk sekolah-sekolah di Mesir. Gaya bahasanya mudah, contohnya dekat dengan keseharian, sehingga sangat cocok sebagai pintu masuk nahwu. *(Silakan lengkapi biografi resmi bila diperlukan.)*",
              ar: "«الدروس النحوية» كتاب تعليمي ألّفه حفني ناصف ورفاقه (محمد دياب، ومصطفى طموم، ومحمد صالح، وسلطان محمد) لمدارس مصر، بأسلوب سهل وأمثلة قريبة."
            },
            bab: [
              { id: "Kata, mabni & mu'rab", ar: "الكلمة والمبني والمعرب", dari: 1, sampai: 2 },
              { id: "Macam i'rab & tandanya", ar: "أنواع الإعراب وعلاماته", dari: 3, sampai: 4 },
              { id: "I'rab fi'il mudhari'", ar: "إعراب المضارع", dari: 5, sampai: 5 },
              { id: "Marfu'at al-asma'", ar: "مرفوعات الأسماء", dari: 6, sampai: 7 },
              { id: "Manshubat al-asma'", ar: "منصوبات الأسماء", dari: 8, sampai: 12 },
              { id: "Majrurat al-asma'", ar: "مجرورات الأسماء", dari: 13, sampai: 13 },
              { id: "At-Tawabi'", ar: "التوابع", dari: 14, sampai: 15 },
              { id: "I'rab mahalli & cara mengi'rab", ar: "الإعراب المحلي وكيفية الإعراب", dari: 16, sampai: 16 }
            ]
          }
        ]
      },
      { no: 2, status: "segera", ar: "الفصل الدراسي الثاني", mk: [] },
      { no: 3, status: "segera", ar: "الفصل الدراسي الثالث", mk: [] },
      { no: 4, status: "segera", ar: "الفصل الدراسي الرابع", mk: [] }
    ]
  };
})();
