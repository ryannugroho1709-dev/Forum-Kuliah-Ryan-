/* Nahwu — Pertemuan 10: Manshubat al-Asma' (3): Maf'ul Ma'ah dan Mustatsna bi-Illa */
Kuliah.pertemuan("nahwu", {
  no: 10, motif: "istitsna", tema: 6, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/406",
  bab: { id: "Manshubat al-asma'", ar: "منصوبات الأسماء" },
  judul: { id: "Isim-isim yang Manshub (3): Maf'ul Ma'ah dan Mustatsna bi-Illa", ar: "منصوبات الأسماء (٣): المفعول معه والمستثنى بإلا" },
  ringkas: {
    id: "**Maf'ul ma'ah**: isim manshub setelah *waw ma'iyyah* (bermakna \"bersama\"), yang tidak mungkin ikut serta dalam hukum kata sebelumnya — berbeda dengan *waw 'athaf*. **Mustatsna bi-illa**: isim setelah *illa* yang menyelisihi hukum sebelumnya; wajib nashab bila kalimatnya tidak didahului nafi. Dikenalkan pula *mustatsna minhu* dan alat istitsna' lain. Tathbiq: Surah An-Nas.",
    ar: "المفعول معه: اسم منصوب بعد واو المعية لا يصح اشتراكه مع ما قبله في الحكم، والفرق بينها وبين واو العطف. والمستثنى بإلا: منصوب إذا لم يسبق بنفي، مع المستثنى منه وأدوات الاستثناء، والتطبيق على سورة الناس."
  },
  tujuan: [
    { id: "Mendefinisikan maf'ul ma'ah.", ar: "تعريف المفعول معه." },
    { id: "Membedakan waw ma'iyyah dan waw 'athaf.", ar: "التفريق بين واو المعية وواو العطف." },
    { id: "Mendefinisikan mustatsna dan mengenali unsur-unsur istitsna'.", ar: "تعريف المستثنى ومعرفة أركان الاستثناء." },
    { id: "Mengetahui kapan mustatsna bi-illa wajib nashab.", ar: "معرفة متى يجب نصب المستثنى بإلا." }
  ],
  isi: [
    { t: "catatan", gaya: "info", judul: { id: "Posisi kita di daftar manshubat", ar: "أين نحن؟" }, id: "Lima maf'ul: maf'ul bih ✓, maf'ul muthlaq ✓, maf'ul li-ajlih ✓, maf'ul fih ✓, **maf'ul ma'ah** (hari ini). Lalu **mustatsna bi-illa** (hari ini), hal, tamyiz, munada, khabar kana, isim inna.", ar: "المفاعيل خمسة، ودرس اليوم المفعول معه والمستثنى بإلا." },

    { t: "judul", id: "5. Maf'ul Ma'ah", ar: "المفعول معه" },
    { t: "definisi", istilah: { id: "**Isim manshub yang disebut setelah *waw ma'iyyah*, untuk menunjukkan bahwa kata sesudahnya tidak mungkin ikut serta dengan kata sebelumnya dalam hukum.**", ar: "اسم منصوب يذكر بعد واو المعية للدلالة على أنه لا يصح أن يشترك ما بعدها مع ما قبلها في الحكم." } },
    { t: "irab", judul: { id: "Contoh: مَشَى التِّلْمِيذُ وَالطَّرِيقَ", ar: "مشى التلميذ والطريق" }, tr: "Murid itu berjalan **bersama (menyusuri)** jalan — jalan tidak ikut berjalan.", kata: [
      { w: "مَشَى", h: "bina", id: "Fi'il madhi mabni 'alal-fath muqaddar.", ar: "فعل ماض مبني على الفتح المقدر." },
      { w: "التِّلْمِيذُ", h: "raf", id: "Fa'il marfu'.", ar: "فاعل مرفوع." },
      { w: "وَ", h: "bina", id: "**Waw ma'iyyah** (bermakna *ma'a*), huruf mabni 'alal-fath, tidak berkedudukan i'rab.", ar: "واو المعية حرف مبني على الفتح لا محل له من الإعراب." },
      { w: "الطَّرِيقَ", h: "nas", id: "**Maf'ul ma'ah** manshub dengan fathah.", ar: "مفعول معه منصوب وعلامة نصبه الفتحة." }
    ] },
    { t: "daftar", judul: { id: "Contoh lain", ar: "أمثلة أخرى" }, item: [
      { id: "Aku berjalan menyusuri sungai (= *ma'a an-nahr*)", ar: "سِرْتُ وَالنَّهْرَ" },
      { id: "Muhammad menghafal ditemani lampu — *al-mishbaha* maf'ul ma'ah", ar: "حَفِظَ مُحَمَّدٌ وَالْمِصْبَاحَ" },
      { id: "Kaum itu menuju (menyusuri) Sungai Nil", ar: "تَوَجَّهَ الْقَوْمُ وَالنِّيلَ" },
      { id: "Amir berjalan bersama pasukan", ar: "سَارَ الْأَمِيرُ وَالْجُنْدَ" }
    ] },
    { t: "banding", judul: { id: "Waw ma'iyyah vs waw 'athaf", ar: "واو المعية وواو العطف" },
      kiri: { judul: { id: "Waw ma'iyyah", ar: "واو المعية" }, ikon: "users", warna: "green", poin: [
        { id: "Kata sesudahnya **tidak bisa** ikut serta dalam hukum — hanya menyertai", ar: "لا يصح أن يشترك ما بعدها مع ما قبلها في الحكم" },
        { id: "Sungai tidak \"berjalan\"", ar: "سِرْتُ وَالنَّهْرَ" },
        { id: "Isim sesudahnya **manshub** (maf'ul ma'ah)", ar: "ما بعدها منصوب" } ] },
      kanan: { judul: { id: "Waw 'athaf", ar: "واو العطف" }, ikon: "chain", warna: "blue", poin: [
        { id: "Kata sesudahnya **ikut serta** dalam hukum", ar: "يشترك ما بعدها مع ما قبلها في الحكم" },
        { id: "Muhammad dan Zaid berdamai (perbuatan dua pihak)", ar: "تَصَالَحَ مُحَمَّدٌ وَزَيْدٌ" },
        { id: "*Ikhtashama Sa'dun wa Sa'idun; isytaraka Ahmadu wa 'Aliyyun*", ar: "اخْتَصَمَ سَعْدٌ وَسَعِيدٌ، اشْتَرَكَ أَحْمَدُ وَعَلِيٌّ" } ] } },
    { t: "cek", q: { id: "*Tashalaha Muhammadun wa Zaidun* — waw di sini adalah…", ar: "الواو في «تصالح محمد وزيد»…" }, o: [{ id: "Waw ma'iyyah", ar: "واو المعية" }, { id: "Waw 'athaf", ar: "واو العطف" }, { id: "Waw qasam", ar: "واو القسم" }, { id: "Waw jama'ah", ar: "واو الجماعة" }], j: 1, b: { id: "Berdamai adalah perbuatan bersama kedua pihak, maka harus 'athaf.", ar: "فعل مشترك بين الاثنين فيتعين العطف." } },

    { t: "judul", id: "6. Mustatsna bi-Illa", ar: "المستثنى بإلا" },
    { t: "definisi", istilah: { id: "**Isim yang disebut setelah salah satu alat istitsna', yang menyelisihi kata sebelumnya dalam hukum.**", ar: "اسم يذكر بعد أداة من أدوات الاستثناء مخالف لما قبله في الحكم." } },
    { t: "peta", ikon: "funnel", pusat: { id: "Unsur istitsna'", ar: "أركان الاستثناء" }, cabang: [
      { id: "Mustatsna minhu (yang dikecualikan darinya)", ar: "المستثنى منه", sub: [{ id: "*al-kitab*", ar: "الكتاب" }] },
      { id: "Adat istitsna' (alat pengecualian)", ar: "أداة الاستثناء", sub: [{ id: "*illa*", ar: "إلا" }] },
      { id: "Mustatsna (yang dikecualikan)", ar: "المستثنى", sub: [{ id: "*waraqatan*", ar: "ورقةً" }] }
    ] },
    { t: "contoh", judul: { ar: "حَفِظَ مُحَمَّدٌ الْكِتَابَ إِلَّا وَرَقَةً" }, id: "Saat dikatakan *hafizha Muhammadun al-kitab*, dipahami ia menghafal seluruhnya. Dengan *illa waraqatan*, satu lembar dikecualikan — hukumnya **berbeda** (tidak dihafal).", ar: "حفظ محمد الكتاب يفهم منه كله، فإذا قلت: إلا ورقةً، فقد استثنيت حكمًا مخالفًا لما قبله." },
    { t: "tabel", kolom: [{ id: "Kalimat", ar: "الجملة" }, { id: "Mustatsna minhu", ar: "المستثنى منه" }, { id: "Mustatsna", ar: "المستثنى" }],
      baris: [
        [{ ar: "حَفِظَ مُحَمَّدٌ الْمُصْحَفَ إِلَّا سُورَةً" }, { ar: "الْمُصْحَفَ" }, { ar: "سُورَةً" }],
        [{ ar: "جَاءَ الْوَفْدُ إِلَّا سَعْدًا" }, { ar: "الْوَفْدُ" }, { ar: "سَعْدًا" }],
        [{ ar: "قَامَ الْقَوْمُ إِلَّا مُحَمَّدًا" }, { ar: "الْقَوْمُ" }, { ar: "مُحَمَّدًا" }],
        [{ ar: "تَصْدَأُ كُلُّ الْمَعَادِنِ إِلَّا الذَّهَبَ" }, { ar: "كُلُّ الْمَعَادِنِ" }, { ar: "الذَّهَبَ" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Kapan wajib nashab?", ar: "متى يجب النصب؟" }, id: "Mustatsna bi-illa **wajib nashab bila kalimatnya tidak didahului nafi** (kalimat positif dan mustatsna minhu disebut), seperti semua contoh di atas. (Jika didahului nafi, ada rincian lain yang dibahas di kitab lanjutan.)", ar: "المستثنى بإلا واجب النصب إذا لم يكن مسبوقًا بنفي." },
    { t: "poin", judul: { id: "Alat istitsna' lainnya", ar: "أدوات الاستثناء الأخرى" }, item: [
      { ikon: "funnel", judul: { ar: "إِلَّا" }, id: "Fokus pelajaran ini.", ar: "موضوع الدرس." },
      { ikon: "funnel", judul: { ar: "غَيْر ، سِوَى" }, id: "Juga alat istitsna'.", ar: "من أدوات الاستثناء." },
      { ikon: "funnel", judul: { ar: "خَلَا ، عَدَا ، حَاشَا" }, id: "Juga alat istitsna'.", ar: "من أدوات الاستثناء." }
    ] },

    { t: "judul", id: "Tathbiq: Surah An-Nas", ar: "التطبيق: سورة الناس" },
    { t: "irab", ayat: "قُلْ أَعُوذُ بِرَبِّ النَّاسِ ۝ مَلِكِ النَّاسِ ۝ إِلَٰهِ النَّاسِ ۝ مِن شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", src: "الناس: ١–٤", kata: [
      { w: "قُلْ", h: "bina", id: "Fi'il amr mabni 'alas-sukun; fa'il dhamir mustatir *anta*. Jadi *qul* = fi'il + isim.", ar: "فعل أمر مبني على السكون، والفاعل ضمير مستتر تقديره أنت." },
      { w: "أَعُوذُ", h: "raf", id: "Mudhari' marfu' dengan dhammah (tidak didahului nashib/jazim); fa'il mustatir *ana*.", ar: "فعل مضارع مرفوع وعلامة رفعه الضمة، والفاعل مستتر تقديره أنا." },
      { w: "بِرَبِّ", h: "jar", id: "Ba' jar mabni 'alal-kasr + *Rabbi* majrur dengan kasrah zhahirah, mudhaf.", ar: "الباء حرف جر، ورب اسم مجرور وهو مضاف." },
      { w: "النَّاسِ", h: "jar", id: "Mudhaf ilaih majrur — isim karena majrur dan ber-*al*.", ar: "مضاف إليه مجرور." },
      { w: "مَلِكِ", h: "jar", id: "**Badal** dari *Rabbi* — majrur (dibahas di P15).", ar: "بدل مجرور." },
      { w: "النَّاسِ", h: "jar", id: "Mudhaf ilaih.", ar: "مضاف إليه." },
      { w: "إِلَٰهِ", h: "jar", id: "Badal dari *Maliki* — majrur.", ar: "بدل من ملك مجرور." },
      { w: "النَّاسِ", h: "jar", id: "Mudhaf ilaih.", ar: "مضاف إليه." },
      { w: "مِنْ", h: "bina", id: "Huruf jar mabni 'alas-sukun (berbeda dengan *man* isim maushul).", ar: "حرف جر مبني على السكون." },
      { w: "شَرِّ", h: "jar", id: "Isim majrur oleh *min*, mudhaf.", ar: "اسم مجرور بمن وهو مضاف." },
      { w: "الْوَسْوَاسِ", h: "jar", id: "Mudhaf ilaih majrur.", ar: "مضاف إليه مجرور." },
      { w: "الْخَنَّاسِ", h: "jar", id: "**Na't** bagi *al-waswas* — majrur karena man'utnya majrur.", ar: "نعت مجرور للوسواس." }
    ] },
    { t: "irab", ayat: "الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ ۝ مِنَ الْجِنَّةِ وَالنَّاسِ", src: "الناس: ٥–٦", kata: [
      { w: "الَّذِي", h: "bina", id: "Isim maushul mabni 'alas-sukun *fi mahalli jarr* — **na't kedua** bagi *al-waswas*.", ar: "اسم موصول مبني على السكون في محل جر نعت ثانٍ للوسواس." },
      { w: "يُوَسْوِسُ", h: "raf", id: "Mudhari' marfu' dengan dhammah zhahirah; fa'il mustatir *huwa*.", ar: "فعل مضارع مرفوع بالضمة الظاهرة، والفاعل ضمير مستتر." },
      { w: "فِي", h: "bina", id: "Huruf jar mabni 'alas-sukun.", ar: "حرف جر." },
      { w: "صُدُورِ", h: "jar", id: "Majrur oleh *fi*, mudhaf.", ar: "اسم مجرور بفي وهو مضاف." },
      { w: "النَّاسِ", h: "jar", id: "Mudhaf ilaih.", ar: "مضاف إليه." },
      { w: "مِنَ", h: "bina", id: "Huruf jar mabni 'alas-sukun, **difathah** untuk menghindari dua sukun (karena *al-jinnah* diawali sukun).", ar: "حرف جر مبني على السكون وحرك بالفتح تخلصًا من التقاء الساكنين." },
      { w: "الْجِنَّةِ", h: "jar", id: "Majrur oleh *min*.", ar: "اسم مجرور بمن." },
      { w: "وَ", h: "bina", id: "Waw **'athaf**, bukan ma'iyyah — huruf mabni 'alal-fath.", ar: "واو العطف لا المعية، حرف مبني على الفتح." },
      { w: "النَّاسِ", h: "jar", id: "Ma'thuf kepada *al-jinnah* — majrur.", ar: "اسم معطوف على الجنة مجرور." }
    ] },
    { t: "ringkasan", item: [
      { id: "Maf'ul ma'ah: isim manshub setelah waw ma'iyyah; ia tidak ikut serta dalam hukum.", ar: "المفعول معه: منصوب بعد واو المعية." },
      { id: "Waw 'athaf: kata sesudahnya ikut dalam hukum (*tashalaha Muhammadun wa Zaidun*).", ar: "واو العطف: يشترك ما بعدها مع ما قبلها." },
      { id: "Mustatsna: isim setelah alat istitsna' yang menyelisihi hukum sebelumnya.", ar: "المستثنى مخالف لما قبله في الحكم." },
      { id: "Unsur: mustatsna minhu – adat – mustatsna. Mustatsna bi-illa wajib nashab bila tidak didahului nafi.", ar: "يجب نصب المستثنى بإلا إذا لم يسبق بنفي." },
      { id: "Alat istitsna': *illa, ghair, siwa, khala, 'ada, hasya*.", ar: "أدوات الاستثناء." }
    ] }
  ],
  istilah: [
    { ar: "المفعول معه", latin: "al-maf'ul ma'ah", id: "Objek penyerta", def: { id: "Isim manshub setelah waw ma'iyyah yang tidak ikut serta dalam hukum.", ar: "اسم منصوب بعد واو المعية." } },
    { ar: "واو المعية", latin: "wawu al-ma'iyyah", id: "Waw bermakna \"bersama\"", def: { id: "Waw yang bermakna *ma'a*; isim sesudahnya manshub.", ar: "الواو التي بمعنى «مع»." } },
    { ar: "واو العطف", latin: "wawu al-'athf", id: "Waw penghubung", def: { id: "Waw yang menyertakan kata sesudahnya dalam hukum dan i'rab.", ar: "الواو التي يشترك ما بعدها مع ما قبلها." } },
    { ar: "المستثنى", latin: "al-mustatsna", id: "Yang dikecualikan", def: { id: "Isim setelah alat istitsna' yang menyelisihi hukum sebelumnya.", ar: "اسم يذكر بعد أداة الاستثناء مخالف لما قبله." } },
    { ar: "المستثنى منه", latin: "al-mustatsna minhu", id: "Yang darinya dikecualikan", def: { id: "Kata sebelum alat istitsna': *al-kitab* dalam *illa waraqatan*.", ar: "ما قبل أداة الاستثناء." } },
    { ar: "أداة الاستثناء", latin: "adat al-istitsna'", id: "Alat pengecualian", def: { id: "*Illa, ghair, siwa, khala, 'ada, hasya*.", ar: "إلا، غير، سوى، خلا، عدا، حاشا." } },
    { ar: "البدل", latin: "al-badal", id: "Pengganti", def: { id: "Tabi' seperti *maliki* setelah *rabbi* (dibahas di P15).", ar: "تابع كملك بعد رب." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Maf'ul ma'ah disebut setelah…", ar: "المفعول معه يذكر بعد…" }, o: [{ id: "Waw 'athaf", ar: "واو العطف" }, { id: "Waw ma'iyyah", ar: "واو المعية" }, { id: "Waw qasam", ar: "واو القسم" }, { id: "*Illa*", ar: "إلا" }], j: 1 },
      { q: { id: "*Sirtu wan-nahra* bermakna…", ar: "معنى «سرت والنهر»…" }, o: [{ id: "Aku dan sungai berjalan", ar: "سرت أنا والنهر" }, { id: "Aku berjalan bersama/menyusuri sungai", ar: "سرت مع النهر" }, { id: "Aku menyeberangi sungai", ar: "عبرت النهر" }, { id: "Sungai mengalir", ar: "جرى النهر" }], j: 1 },
      { q: { id: "Manakah yang waw-nya **'athaf**?", ar: "أيها واو عطف؟" }, o: [{ ar: "مَشَى التِّلْمِيذُ وَالطَّرِيقَ" }, { ar: "اخْتَصَمَ سَعْدٌ وَسَعِيدٌ" }, { ar: "سَارَ الْأَمِيرُ وَالْجُنْدَ" }, { ar: "تَوَجَّهَ الْقَوْمُ وَالنِّيلَ" }], j: 1 },
      { q: { id: "*Hafizha Muhammadun al-mushhafa illa suratan* — mustatsna minhu-nya adalah…", ar: "المستثنى منه…" }, o: [{ ar: "مُحَمَّدٌ" }, { ar: "الْمُصْحَفَ" }, { ar: "سُورَةً" }, { ar: "إِلَّا" }], j: 1 },
      { q: { id: "Mustatsna bi-illa wajib nashab bila…", ar: "يجب نصب المستثنى بإلا إذا…" }, o: [{ id: "Didahului nafi", ar: "سبق بنفي" }, { id: "Tidak didahului nafi", ar: "لم يسبق بنفي" }, { id: "Mustatsna minhu tidak disebut", ar: "حذف المستثنى منه" }, { id: "Selalu, tanpa syarat", ar: "دائمًا" }], j: 1 },
      { q: { id: "*Tashda'u kullu al-ma'adini illa adz-dzahaba* — *adz-dzahaba* adalah…", ar: "«الذهبَ»…" }, o: [{ id: "Maf'ul bih", ar: "مفعول به" }, { id: "Mustatsna manshub", ar: "مستثنى منصوب" }, { id: "Maf'ul ma'ah", ar: "مفعول معه" }, { id: "Hal", ar: "حال" }], j: 1 },
      { q: { id: "Manakah **bukan** alat istitsna'?", ar: "أيها ليس أداة استثناء؟" }, o: [{ ar: "سِوَى" }, { ar: "عَدَا" }, { ar: "حَتَّى" }, { ar: "حَاشَا" }], j: 2 },
      { q: { id: "{مَلِكِ النَّاسِ} — *maliki* adalah…", ar: "«ملكِ»…" }, o: [{ id: "Na't", ar: "نعت" }, { id: "Badal", ar: "بدل" }, { id: "Mudhaf ilaih", ar: "مضاف إليه" }, { id: "Ma'thuf", ar: "معطوف" }], j: 1 },
      { q: { id: "{الْخَنَّاسِ} adalah…", ar: "«الخناس»…" }, o: [{ id: "Na't majrur bagi *al-waswas*", ar: "نعت مجرور للوسواس" }, { id: "Badal", ar: "بدل" }, { id: "Mudhaf ilaih", ar: "مضاف إليه" }, { id: "Ma'thuf", ar: "معطوف" }], j: 0 },
      { q: { id: "Nun dalam {مِنَ الْجِنَّةِ} difathah karena…", ar: "فتحت نون «مِنَ»…" }, o: [{ id: "Manshub", ar: "منصوبة" }, { id: "Menghindari dua sukun", ar: "تخلصًا من التقاء الساكنين" }, { id: "Waqf", ar: "الوقف" }, { id: "Isim maushul", ar: "اسم موصول" }], j: 1 }
    ],
    bs: [
      { t: { id: "Pada waw ma'iyyah, kata sesudahnya tidak bisa ikut serta dalam hukum.", ar: "لا يصح الاشتراك مع واو المعية." }, j: true },
      { t: { id: "*Hafizha Muhammadun wal-mishbaha* — *al-mishbaha* ma'thuf.", ar: "«المصباح» معطوف." }, j: false, b: { id: "Maf'ul ma'ah — lampu tidak ikut menghafal.", ar: "مفعول معه." } },
      { t: { id: "Mustatsna menyelisihi hukum kata sebelumnya.", ar: "المستثنى مخالف لما قبله." }, j: true },
      { t: { id: "*Ja'a al-wafdu illa Sa'dan* — *Sa'dan* mustatsna manshub.", ar: "«سعدًا» مستثنى منصوب." }, j: true },
      { t: { id: "*Ghair* dan *siwa* termasuk alat istitsna'.", ar: "غير وسوى من أدوات الاستثناء." }, j: true },
      { t: { id: "Waw dalam {مِنَ الْجِنَّةِ وَالنَّاسِ} adalah waw ma'iyyah.", ar: "الواو هنا واو المعية." }, j: false, b: { id: "Waw 'athaf.", ar: "واو عطف." } },
      { t: { id: "*Alladzi* dalam {الَّذِي يُوَسْوِسُ} *fi mahalli jarr* na't.", ar: "«الذي» في محل جر نعت." }, j: true },
      { t: { id: "*A'udzu* dalam {قُلْ أَعُوذُ} fa'ilnya mustatir *anta*.", ar: "فاعل «أعوذ» أنت." }, j: false, b: { id: "Fa'il *a'udzu*: *ana*; fa'il *qul*: *anta*.", ar: "تقديره أنا." } }
    ],
    jodoh: [
      { a: { ar: "سِرْتُ وَالنَّهْرَ" }, b: { id: "Maf'ul ma'ah", ar: "مفعول معه" } },
      { a: { ar: "تَصَالَحَ مُحَمَّدٌ وَزَيْدٌ" }, b: { id: "Waw 'athaf", ar: "واو عطف" } },
      { a: { ar: "جَاءَ الْوَفْدُ إِلَّا سَعْدًا" }, b: { id: "Mustatsna bi-illa", ar: "مستثنى بإلا" } },
      { a: { ar: "الْوَفْدُ" }, b: { id: "Mustatsna minhu", ar: "مستثنى منه" } },
      { a: { ar: "الْخَنَّاسِ" }, b: { id: "Na't majrur", ar: "نعت مجرور" } },
      { a: { ar: "إِلَٰهِ النَّاسِ" }, b: { id: "Badal majrur", ar: "بدل مجرور" } }
    ],
    isian: [
      { t: { id: "Waw dalam maf'ul ma'ah bermakna ______.", ar: "واو المعية بمعنى ______." }, j: { id: "bersama (ma'a)", ar: "مع" }, x: [{ id: "atau", ar: "أو" }, { id: "kemudian", ar: "ثم" }, { id: "demi", ar: "القسم" }] },
      { t: { id: "Dalam *qama al-qaumu illa Muhammadan*, *al-qaumu* disebut ______.", ar: "«القوم» ______." }, j: { id: "mustatsna minhu", ar: "المستثنى منه" }, x: [{ id: "mustatsna", ar: "المستثنى" }, { id: "adat", ar: "الأداة" }, { id: "maf'ul ma'ah", ar: "المفعول معه" }] },
      { t: { id: "Mustatsna bi-illa wajib nashab bila tidak didahului ______.", ar: "يجب نصبه إذا لم يسبق بـ______." }, j: { id: "nafi", ar: "نفي" }, x: [{ id: "istifham", ar: "استفهام" }, { id: "syarat", ar: "شرط" }, { id: "qasam", ar: "قسم" }] },
      { t: { id: "Alat istitsna': *illa, ghair, siwa, khala, 'ada,* dan ______.", ar: "إلا، غير، سوى، خلا، عدا، و______." }, j: { id: "hasya", ar: "حاشا" }, x: [{ id: "hatta", ar: "حتى" }, { id: "lakin", ar: "لكن" }, { id: "bal", ar: "بل" }] }
    ],
    pilah: { t: { id: "Waw ma'iyyah atau waw 'athaf?", ar: "واو المعية أم واو العطف؟" },
      kategori: [{ id: "Ma'iyyah", ar: "معية" }, { id: "'Athaf", ar: "عطف" }],
      item: [
        { t: { ar: "مَشَى التِّلْمِيذُ وَالطَّرِيقَ" }, k: 0 }, { t: { ar: "سِرْتُ وَالنَّهْرَ" }, k: 0 }, { t: { ar: "سَارَ الْأَمِيرُ وَالْجُنْدَ" }, k: 0 }, { t: { ar: "تَوَجَّهَ الْقَوْمُ وَالنِّيلَ" }, k: 0 },
        { t: { ar: "تَصَالَحَ مُحَمَّدٌ وَزَيْدٌ" }, k: 1 }, { t: { ar: "اشْتَرَكَ أَحْمَدُ وَعَلِيٌّ" }, k: 1 }, { t: { ar: "اخْتَصَمَ سَعْدٌ وَسَعِيدٌ" }, k: 1 }, { t: { ar: "مِنَ الْجِنَّةِ وَالنَّاسِ" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف المفعول معه، ومثِّل له.", id: "Definisikan maf'ul ma'ah dan beri contoh." }, j: { ar: "اسم منصوب يذكر بعد واو المعية للدلالة على أنه لا يصح أن يشترك ما بعدها مع ما قبلها في الحكم، نحو: مشى التلميذ والطريقَ، سرت والنهرَ.", id: "Isim manshub setelah **waw ma'iyyah**, menunjukkan kata sesudahnya tidak ikut serta dalam hukum: *masya at-tilmidzu wath-thariqa; sirtu wan-nahra*." } },
    { t: { ar: "فرِّق بين واو المعية وواو العطف بمثال.", id: "Bedakan waw ma'iyyah dan waw 'athaf dengan contoh." }, j: { ar: "واو المعية لا يصح أن يشترك ما بعدها مع ما قبلها في الحكم: سار الأمير والجندَ. وواو العطف يشترك ما بعدها مع ما قبلها: تصالح محمد وزيدٌ؛ فالتصالح فعل مشترك بين الاثنين.", id: "**Ma'iyyah**: kata sesudahnya tidak ikut dalam hukum (*sara al-amiru wal-junda*). **'Athaf**: ikut serta (*tashalaha Muhammadun wa Zaidun* — perdamaian dilakukan keduanya)." } },
    { t: { ar: "عرِّف المستثنى، واذكر أركان الاستثناء في: حفظ محمد الكتاب إلا ورقةً.", id: "Definisikan mustatsna dan sebutkan unsur istitsna' dalam *hafizha Muhammadun al-kitaba illa waraqatan*." }, j: { ar: "المستثنى اسم يذكر بعد أداة من أدوات الاستثناء مخالف لما قبله في الحكم. المستثنى منه: الكتاب، والأداة: إلا، والمستثنى: ورقةً.", id: "Isim setelah alat istitsna' yang menyelisihi hukum sebelumnya. Mustatsna minhu: *al-kitab*; adat: *illa*; mustatsna: *waraqatan*." } },
    { t: { ar: "متى يجب نصب المستثنى بإلا؟ واذكر أدوات الاستثناء.", id: "Kapan mustatsna bi-illa wajib nashab? Sebutkan alat istitsna'." }, j: { ar: "يجب نصبه إذا لم يكن مسبوقًا بنفي، نحو: قام القوم إلا محمدًا. وأدواته: إلا، غير، سوى، خلا، عدا، حاشا.", id: "Bila **tidak didahului nafi**: *qama al-qaumu illa Muhammadan*. Alatnya: *illa, ghair, siwa, khala, 'ada, hasya*." } },
    { t: { ar: "أعرب: ﴿مِنَ الْجِنَّةِ وَالنَّاسِ﴾، وبيِّن نوع الواو.", id: "I'rablah {مِنَ الْجِنَّةِ وَالنَّاسِ} dan jelaskan jenis waw-nya." }, j: { ar: "من: حرف جر مبني على السكون وحرك بالفتح تخلصًا من التقاء الساكنين. الجنة: اسم مجرور بمن. الواو: حرف عطف مبني على الفتح لا محل له من الإعراب، وليست واو المعية. الناس: اسم معطوف على الجنة مجرور.", id: "*Min*: huruf jar mabni 'alas-sukun, difathah karena dua sukun. *Al-jinnah*: majrur. Waw: **'athaf** (bukan ma'iyyah). *An-nas*: ma'thuf kepada *al-jinnah*, majrur." } }
  ]
});
