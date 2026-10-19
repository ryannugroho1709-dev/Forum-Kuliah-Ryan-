/* Ushul Tafsir — Pertemuan 5: Tafsir Salaf (2) — Ra'yu, Kehujjahan, Uslub & Karya */
Kuliah.pertemuan("ushul-tafsir", {
  no: 5, motif: "cabang", tema: 4, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/200",
  bab: { id: "Sumber tafsir", ar: "مصادر التفسير" },
  judul: { id: "Tafsir Salaf (2): Tafsir dengan Ra'yu, Kehujjahan, Uslub & Karya", ar: "تفسير السلف (٢): التفسير بالرأي والحجية والأساليب والمؤلفات" },
  ringkas: {
    id: "Bagian kedua tafsir salaf: tafsir dengan ijtihad (tiga jenisnya), mana yang menjadi hujjah, lima uslub (gaya) salaf dalam menafsirkan, dan kitab-kitab yang menghimpun tafsir salaf — dengan maupun tanpa sanad.",
    ar: "القسم الثاني من تفسير السلف: التفسير بالرأي وأنواعه الثلاثة، وحجية تفسير السلف، وأساليب السلف الخمسة في التفسير، والمؤلفات في تفسير القرآن بأقوال السلف بالإسناد ودونه."
  },
  tujuan: [
    { id: "Mendefinisikan tafsir salaf dengan ra'yu dan menyebut tiga jenisnya.", ar: "تعريف تفسير السلف بالرأي وذكر أنواعه الثلاثة." },
    { id: "Membedakan bagian tafsir salaf yang hujjah dan yang tidak.", ar: "التمييز بين ما هو حجة من تفسير السلف وما ليس بحجة." },
    { id: "Menyebut dan memberi contoh lima uslub salaf dalam tafsir.", ar: "ذكر أساليب السلف الخمسة مع التمثيل." },
    { id: "Mengenal kitab-kitab tafsir salaf bersanad dan tanpa sanad.", ar: "معرفة المؤلفات في تفسير السلف بالإسناد ودونه." }
  ],
  isi: [
    { t: "judul", id: "Tafsir Salaf dengan Ra'yu (Ijtihad)", ar: "تفسير السلف بالرأي" },
    { t: "definisi", istilah: { id: "**Ijtihad generasi terbaik dalam menjelaskan makna Al-Qur'an dengan alat-alat ijtihad yang mereka miliki.**", ar: "هو اجتهاد خير القرون في بيان معاني القرآن بما معهم من أدوات الاجتهاد." } },
    { t: "sub", id: "Tiga jenis tafsir salaf dengan ra'yu", ar: "أنواع التفسير بالرأي عند السلف" },
    { t: "contoh", judul: { id: "1. Ayat yang memiliki lebih dari satu sisi makna", ar: "١- ما له أكثر من وجه في المعنى" },
      id: "Setiap sisi makna mungkin dimaksud; memilih salah satunya adalah **ijtihad**. Sebab perbedaan bisa dari **bahasa** (kata bermakna ganda), **konteks**, **pengaitan dengan nuzul yang tidak tegas**, **perbedaan sumber**, dan lainnya.",
      ar: "ما يكون له أكثر من وجه في التفسير، واختيار أحد المحتملات إنما يكون بالرأي، وسبب الاختلاف قد يكون مرجعه إلى اللغة، أو السياق، أو التمثيل بالنزول غير الصريح، أو اختلاف المصدر.",
      ayat: { ar: "قُلْ يَا أَهْلَ الْكِتَابِ تَعَالَوْا إِلَىٰ كَلِمَةٍ سَوَاءٍ بَيْنَنَا وَبَيْنَكُمْ أَلَّا نَعْبُدَ إِلَّا اللَّهَ", src: "آل عمران: ٦٤" },
      sorot: [
        { label: { id: "Pendapat 1", ar: "القول الأول" }, warna: "blue", id: "Turun tentang **Yahudi di sekitar Madinah** — Qatadah, Ar-Rabi', Ibnu Juraij.", ar: "نزلت في يهود الذين كانوا حول المدينة." },
        { label: { id: "Pendapat 2", ar: "القول الثاني" }, warna: "gold", id: "Turun tentang **delegasi Nasrani Najran** — Muhammad bin Ja'far bin az-Zubair, As-Suddi, Ibnu Zaid.", ar: "نزلت في وفد نصارى نجران." },
        { label: { id: "Tarjih Ath-Thabari", ar: "ترجيح الطبري" }, warna: "green", id: "Ayat mencakup **keduanya**, karena *Ahlul Kitab* mencakup ahli Taurat dan Injil, tak ada dalil yang mengkhususkan, dan mengesakan ibadah wajib atas semuanya. Kedua kelompok mufassir tidak salah — masing-masing berijtihad.", ar: "فالواجب أن يكون كل كتابي معنيًّا به؛ لأن إفراد العبادة لله وحده واجب على كل مأمور منهي، وكلا القولين صحيح." } ] },
    { t: "poin", judul: { id: "2. Sebab nuzul yang tidak tegas", ar: "٢- سبب النزول غير الصريح" }, item: [
      { ikon: "info", judul: { id: "Umumnya ijtihad", ar: "الأغلب أنه اجتهاد" }, id: "Ucapan \"ayat ini turun tentang si fulan / tentang hal ini\" umumnya adalah **ijtihad sahabat menerapkan ayat** kepada orang/peristiwa tertentu — kecuali ada dalil lain.", ar: "أغلب الوارد عن الصحابة من قولهم «نزلت هذه الآية في فلان» إنما هو اجتهاد في تنزيل الآية." },
      { ikon: "scroll", judul: { id: "Contoh", ar: "أمثلة" }, id: "'Aisyah: ayat Surah Ibrahim turun tentang **azab kubur**. Anas: \"**Kami memandang** ayat {مِّنَ الْمُؤْمِنِينَ رِجَالٌ صَدَقُوا} turun tentang Anas bin an-Nadhr.\" Sa'd bin Abi Waqqash: Al-Ma'idah: 33 turun tentang **Haruriyyah (Khawarij)** — padahal mereka belum ada saat ayat turun; Sa'd menerapkan ayat pada mereka.", ar: "قول أنس: «نرى هذه الآية نزلت في أنس بن النضر»، وقول سعد: «نزلت في الحرورية» والحرورية لم يكونوا موجودين وقت نزول الآية." } ] },
    { t: "contoh", judul: { id: "3. Kisah-kisah yang disebut dalam tafsir ayat", ar: "٣- ما يذكرونه من القصص في تفسير الآية" },
      ayat: { ar: "وَاتْلُ عَلَيْهِمْ نَبَأَ الَّذِي آتَيْنَاهُ آيَاتِنَا فَانسَلَخَ مِنْهَا فَأَتْبَعَهُ الشَّيْطَانُ فَكَانَ مِنَ الْغَاوِينَ", src: "الأعراف: ١٧٥" },
      id: "Ibnu Mas'ud: ia seorang Bani Israil bernama **Bal'am bin Ba'ura**; Ibnu 'Abbas menambahkan: ia diberi kitab tetapi condong kepada syahwat dunia. Mengaitkan kisah dengan ayat — seperti kisah Musa di mata air Madyan — adalah **ijtihad mufassir**.",
      ar: "ورد عن ابن مسعود أنه رجل من بني إسرائيل يقال له بلعم بن أبر، وكذا عن ابن عباس وزاد أنه أوتي كتابًا فأخلد إلى شهوات الأرض. وربط القصة بالآية إنما يكون عن اجتهاد من المفسر." },

    { t: "judul", id: "Kehujjahan Tafsir Salaf", ar: "حجية تفسير السلف" },
    { t: "p", id: "Tafsir salaf dapat dibagi menjadi beberapa bagian; **empat bagian berikut adalah hujjah**:", ar: "يمكن تقسيم تفسير السلف إلى أقسام، وهذه الأقسام حجة:" },
    { t: "langkah", item: [
      { judul: { id: "Riwayat mereka dari Nabi ﷺ", ar: "ما يرويه السلف عن النبي ﷺ" }, id: "Tafsir Nabi ﷺ yang mereka nukil.", ar: "من تفسيره للقرآن." },
      { judul: { id: "Sebab nuzul yang tegas", ar: "أسباب النزول الصريحة" }, id: "Riwayat yang tegas menyebut sebab turunnya ayat.", ar: "ما يروونه من أسباب النزول الصريحة." },
      { judul: { id: "Ijma' salaf", ar: "ما يقع عليه إجماع السلف" }, id: "Jika ijma' sahabat tetap, ia hujjah — sahabat tidak bersepakat di atas kesalahan. Contoh {فَالْمُلْقِيَاتِ ذِكْرًا} = **malaikat** yang menyampaikan wahyu kepada para nabi: Ibnu 'Abbas, Ibnu Mas'ud, lalu Masruq, Mujahid, Qatadah, Ar-Rabi', As-Suddi, Ats-Tsauri; Ibnu Katsir: \"**Tidak ada khilaf di sini.**\"", ar: "قال ابن كثير في {فَالْمُلْقِيَاتِ ذِكْرًا}: يعني الملائكة… ولا خلاف ها هنا." },
      { judul: { id: "Yang hanya mengandung satu makna", ar: "ما لا يحتمل إلا معنى واحدًا" }, id: "Mirip ijma', bahkan kembali kepadanya. Contoh {لَا رَيْبَ فِيهِ}: *ar-raib* = **asy-syakk (keraguan)** — dari Abu ad-Darda', Ibnu Mas'ud, Ibnu 'Abbas; Ibnu Abi Hatim menghikayatkan ijma'.", ar: "تفسير الريب بالشك، والريب لا يوجد له معنى آخر، ولذلك حكى ابن أبي حاتم الإجماع." } ] },
    { t: "catatan", gaya: "faidah", id: "Adapun tafsir mereka dengan ra'yu pada ayat yang mengandung banyak kemungkinan makna, itu ijtihad yang **sangat dihormati dan didahulukan**, namun tidak berstatus hujjah yang mengikat seperti empat bagian di atas.", ar: "وأما اجتهادهم فيما يحتمل أكثر من وجه فهو اجتهاد معتبر مقدَّم، لكنه ليس كالأقسام الأربعة في الإلزام." },

    { t: "judul", id: "Lima Uslub Salaf dalam Menafsirkan", ar: "أساليب السلف في التفسير" },
    { t: "p", id: "Asalnya tafsir harus **sesuai persis (muthabiq)** dengan makna yang ditafsirkan. Namun salaf mengungkapkan tafsir dengan berbagai cara sesuai keadaan:", ar: "الأصل في المفسر أن يقع تفسيره مطابقًا للمعنى، لكن الناظر إلى هدي السلف يجد أنهم يعبرون بطرق مختلفة عن التفسير باختلاف الأحوال:" },
    { t: "akordion", item: [
      { judul: { id: "1. Tafsir dengan contoh (bil-mitsal)", ar: "١- التفسير بالمثال" }, id: "Menyebut salah satu contoh dari makna umum — bukan untuk mengkhususkan. As-Suddi pada {وَإِن يَمْسَسْكَ اللَّهُ بِضُرٍّ…}: *adh-dhurr* = **sakit**, *al-khair* = **sehat**. Ibnu 'Athiyyah: \"Ini contoh; makna ayat: segala sesuatu di tangan Allah.\"", ar: "قال السدي: الضر ها هنا المرض والخير العافية، قال ابن عطية: وهذا مثال، ومعنى الآية الإخبار عن أن الأشياء كلها بيد الله." },
      { judul: { id: "2. Tafsir dengan sebab nuzul", ar: "٢- التفسير بسبب النزول" }, id: "Ada yang **tegas**: Ibnu 'Abbas — ketika turun {وَأَنذِرْ عَشِيرَتَكَ الْأَقْرَبِينَ}, Nabi ﷺ naik ke Shafa memanggil kabilah-kabilah… Abu Lahab berkata \"Celaka engkau!\" lalu turun {تَبَّتْ يَدَا أَبِي لَهَبٍ}. Ada yang **tidak tegas**: Az-Zubair tentang sengketa air dengan seorang Anshar — \"Demi Allah, **aku mengira** ayat ini turun tentang itu\": {فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ}. Keduanya menunjukkan pendapat tafsir mereka.", ar: "قال الزبير: والله إني لأحسب هذه الآية نزلت في ذلك: {فَلَا وَرَبِّكَ لَا يُؤْمِنُونَ حَتَّىٰ يُحَكِّمُوكَ}… وذكر الصحابي سبب النزول يدل على أنه قول له في تفسير الآية." },
      { judul: { id: "3. Tafsir dengan konsekuensi makna (bil-lazim)", ar: "٣- التفسير باللازم" }, id: "Menafsirkan dengan sesuatu yang **menjadi akibat/konsekuensi** makna asal, untuk mengingatkan pelajar pada makna yang tersembunyi. {فِي سِدْرٍ مَّخْضُودٍ}: *makhdhud* asalnya **yang dihilangkan durinya**; ada yang menafsirkan \"yang tidak melukai tangan\" — itu lazim maknanya. Ibnul Qayyim: kebanyakan mufassir menyebut lazim makna, satu individu, atau contoh — lalu para pengumpul menganggapnya pendapat yang berbeda, padahal tidak berbeda.", ar: "قال ابن القيم: وكذلك قول من قال: المخضود الذي لا يعقر اليد… فسره بلازم المعنى، وهكذا غالب المفسرين يذكرون لازم المعنى تارة وفردًا من أفراده تارة ومثالًا من أمثلته، فيحكيها الجمَّاعون للغث والسمين أقوالًا مختلفة ولا اختلاف بينها." },
      { judul: { id: "4. Tafsir dengan sebagian makna (bi-juz' al-ma'na)", ar: "٤- التفسير بجزء المعنى" }, id: "Sebagian kata Arab menghimpun beberapa makna. Ibnul Qayyim tentang *tabaraka*: ada yang mengambil dari *al-buruk* (tetap & kekal). Padahal *tabarukuhu* menghimpun semuanya: kekalnya wujud, banyaknya kebaikan, kemuliaan, ketinggian, keagungan, kesucian, datangnya segala kebaikan dari-Nya. Masing-masing mufassir menyebut sebagian.", ar: "فتباركه سبحانه يجمع هذا كله: دوام وجوده وكثرة خيره ومجده وعلوه وعظمته وتقدسه ومجيء الخيرات كلها من عنده… وهذا هو المعهود من ألفاظ القرآن." },
      { judul: { id: "5. Tafsir kontekstual (siyaqi)", ar: "٥- التفسير السياقي" }, id: "Menjelaskan maksud kata **dalam konteks tertentu**. {ثُمَّ السَّبِيلَ يَسَّرَهُ}: secara lafaz *as-sabil* = jalan (disepakati). Tetapi jalan apa? Salaf berbeda: **jalan keluar dari perut ibu**, atau **jalan baik dan buruk** seperti {إِنَّا هَدَيْنَاهُ السَّبِيلَ}.", ar: "السبيل عند المفسرين باتفاق هو الطريق، لكن أي طريق أراده الله هنا؟ ورد عن السلف: يسر له طريق خروجه من بطن أمه، أو يسر له طريق الخير والشر." } ] },
    { t: "cek", q: { id: "As-Suddi menafsirkan *adh-dhurr* dengan \"sakit\". Uslub apakah ini?", ar: "تفسير السدي الضر بالمرض من أي الأساليب؟" }, o: [{ id: "Tafsir dengan contoh", ar: "التفسير بالمثال" }, { id: "Tafsir dengan lazim", ar: "التفسير باللازم" }, { id: "Tafsir siyaqi", ar: "التفسير السياقي" }], j: 0, b: { id: "Sakit adalah salah satu contoh dari *dhurr* yang umum.", ar: "المرض مثال للضر." } },

    { t: "judul", id: "Kitab-kitab Tafsir Salaf", ar: "المؤلفات في تفسير القرآن بأقوال السلف" },
    { t: "banding",
      kiri: { judul: { id: "Dengan sanad", ar: "بالإسناد" }, ikon: "chain", warna: "green", poin: [
        { id: "Tafsir 'Abdurrazzaq", ar: "تفسير عبد الرزاق" }, { id: "Tafsir 'Abd bin Humaid", ar: "تفسير عبد بن حميد" }, { id: "Tafsir Ath-Thabari", ar: "تفسير الطبري" }, { id: "Tafsir Ibnul Mundzir", ar: "تفسير ابن المنذر" }, { id: "Tafsir Ibnu Abi Hatim", ar: "تفسير ابن أبي حاتم" }, { id: "Tafsir Abu asy-Syaikh", ar: "تفسير أبي الشيخ" }, { id: "Tafsir Ibnu Mardawaih", ar: "تفسير ابن مردويه" } ] },
      kanan: { judul: { id: "Tanpa sanad", ar: "دون الإسناد" }, ikon: "book", warna: "blue", poin: [
        { id: "Ats-Tsa'labi — Al-Kasyf wal-Bayan", ar: "الثعلبي: الكشف والبيان" }, { id: "Al-Mawardi", ar: "الماوردي" }, { id: "Al-Baghawi", ar: "البغوي" }, { id: "Ibnu 'Athiyyah", ar: "ابن عطية" }, { id: "Ibnul Jauzi", ar: "ابن الجوزي" }, { id: "Ibnu Katsir", ar: "ابن كثير" }, { id: "As-Suyuthi", ar: "السيوطي" } ] } },
    { t: "ringkasan", item: [
      { id: "Tafsir salaf dengan ra'yu = ijtihad generasi terbaik dengan alat-alat ijtihad mereka.", ar: "التفسير بالرأي: اجتهاد خير القرون بأدوات الاجتهاد." },
      { id: "Jenisnya: ayat multimakna, sebab nuzul tidak tegas, kisah dalam tafsir.", ar: "أنواعه: ما له أكثر من وجه، وسبب النزول غير الصريح، والقصص." },
      { id: "Yang hujjah: riwayat dari Nabi ﷺ, sebab nuzul tegas, ijma' salaf, dan yang hanya bermakna satu.", ar: "الحجة: المرفوع، والسبب الصريح، والإجماع، وما لا يحتمل إلا معنى واحدًا." },
      { id: "Uslub salaf: contoh, sebab nuzul, lazim, sebagian makna, siyaqi.", ar: "الأساليب: المثال، وسبب النزول، واللازم، وجزء المعنى، والسياقي." } ] }
  ],
  istilah: [
    { ar: "التفسير بالرأي", latin: "at-tafsir bir-ra'y", id: "Tafsir dengan ijtihad", def: { id: "Ijtihad generasi terbaik dalam menjelaskan makna Al-Qur'an dengan alat ijtihad.", ar: "اجتهاد خير القرون في بيان معاني القرآن بأدوات الاجتهاد." } },
    { ar: "سبب النزول غير الصريح", latin: "sabab nuzul ghair sharih", id: "Sebab nuzul tidak tegas", def: { id: "Ungkapan \"ayat ini turun tentang…\" yang umumnya ijtihad penerapan.", ar: "الأغلب أنه من باب الاجتهاد." } },
    { ar: "التفسير بالمثال", latin: "at-tafsir bil-mitsal", id: "Tafsir dengan contoh", def: { id: "Mengungkapkan makna umum dengan salah satu contohnya.", ar: "التعبير بأحد أمثلة المعنى العام." } },
    { ar: "التفسير باللازم", latin: "at-tafsir bil-lazim", id: "Tafsir dengan konsekuensi makna", def: { id: "Menafsirkan dengan akibat/konsekuensi makna asal, seperti *makhdhud* = tidak melukai tangan.", ar: "تفسير اللفظة بلازم خارج عن المعنى الأصلي." } },
    { ar: "التفسير بجزء المعنى", latin: "at-tafsir bi juz' al-ma'na", id: "Tafsir dengan sebagian makna", def: { id: "Menyebut salah satu bagian dari makna yang dihimpun suatu kata.", ar: "التفسير بأحد أجزاء المعنى." } },
    { ar: "التفسير السياقي", latin: "at-tafsir as-siyaqi", id: "Tafsir kontekstual", def: { id: "Menjelaskan maksud kata dalam konteks tertentu.", ar: "بيان المراد باللفظة في سياق معين." } },
    { ar: "مخضود", latin: "makhdhud", id: "Yang dihilangkan durinya", def: { id: "Sidr yang tidak berduri; lazimnya tidak melukai tangan.", ar: "مقطوع الشوك." } },
    { ar: "الحرورية", latin: "al-haruriyyah", id: "Haruriyyah (Khawarij)", def: { id: "Kelompok Khawarij; Sa'd menerapkan Al-Ma'idah: 33 pada mereka.", ar: "الخوارج." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tafsir salaf dengan ra'yu adalah…", ar: "تفسير السلف بالرأي هو…" }, o: [{ id: "Tafsir tanpa ilmu", ar: "تفسير بلا علم" }, { id: "Ijtihad generasi terbaik dengan alat-alat ijtihad mereka", ar: "اجتهاد خير القرون بأدوات الاجتهاد" }, { id: "Riwayat dari Nabi ﷺ", ar: "المرفوع إلى النبي ﷺ" }, { id: "Israiliyyat", ar: "الإسرائيليات" }], j: 1 },
      { q: { id: "Ath-Thabari tentang {يَا أَهْلَ الْكِتَابِ} (Ali 'Imran: 64) berpendapat…", ar: "رأي الطبري في {يَا أَهْلَ الْكِتَابِ}…" }, o: [{ id: "Khusus Yahudi Madinah", ar: "خاصة باليهود" }, { id: "Khusus Nasrani Najran", ar: "خاصة بنصارى نجران" }, { id: "Mencakup keduanya", ar: "يشمل الفريقين" }, { id: "Khusus kaum musyrik", ar: "المشركون" }], j: 2 },
      { q: { id: "Ucapan Sa'd bahwa Al-Ma'idah: 33 turun tentang Haruriyyah menunjukkan bahwa…", ar: "قول سعد: «نزلت في الحرورية» يدل على أن…" }, o: [{ id: "Itu sebab nuzul tegas", ar: "سبب صريح" }, { id: "Itu ijtihad penerapan ayat, karena Haruriyyah belum ada saat ayat turun", ar: "اجتهاد في تنزيل الآية" }, { id: "Ayat itu mansukh", ar: "الآية منسوخة" }, { id: "Riwayat israiliyyat", ar: "إسرائيلية" }], j: 1 },
      { q: { id: "Contoh tafsir salaf yang hujjah karena ijma' adalah…", ar: "مثال الإجماع الذي هو حجة…" }, o: [{ id: "{فَالْمُلْقِيَاتِ ذِكْرًا} = malaikat", ar: "الملقيات: الملائكة" }, { id: "Ahlul Kitab = Yahudi", ar: "أهل الكتاب: اليهود" }, { id: "Bal'am bin Ba'ura", ar: "بلعم" }, { id: "As-sabil = jalan keluar rahim", ar: "السبيل: الخروج من البطن" }], j: 0 },
      { q: { id: "{لَا رَيْبَ فِيهِ}: *ar-raib* = keraguan. Ini hujjah karena…", ar: "تفسير الريب بالشك حجة لأنه…" }, o: [{ id: "Riwayat dari Nabi ﷺ", ar: "مرفوع" }, { id: "Tidak mengandung kecuali satu makna", ar: "لا يحتمل إلا معنى واحدًا" }, { id: "Sebab nuzul", ar: "سبب نزول" }, { id: "Qira'at mutawatir", ar: "قراءة متواترة" }], j: 1 },
      { q: { id: "Ibnu 'Athiyyah berkata tentang tafsir As-Suddi \"*dhurr* = sakit\": \"Ini adalah…\"", ar: "قال ابن عطية عن تفسير السدي: «وهذا…»" }, o: [{ id: "Kesalahan", ar: "خطأ" }, { id: "Contoh (mitsal)", ar: "مثال" }, { id: "Naskh", ar: "نسخ" }, { id: "Ijma'", ar: "إجماع" }], j: 1 },
      { q: { id: "Menafsirkan *makhdhud* dengan \"tidak melukai tangan\" adalah tafsir…", ar: "تفسير المخضود بالذي لا يعقر اليد تفسير…" }, o: [{ id: "Bil-mitsal", ar: "بالمثال" }, { id: "Bil-lazim", ar: "باللازم" }, { id: "Bi juz' al-ma'na", ar: "بجزء المعنى" }, { id: "Siyaqi", ar: "سياقي" }], j: 1 },
      { q: { id: "Penjelasan Ibnul Qayyim tentang *tabaraka* menggambarkan uslub…", ar: "كلام ابن القيم في «تبارك» مثال على…" }, o: [{ id: "Tafsir dengan sebagian makna", ar: "التفسير بجزء المعنى" }, { id: "Tafsir dengan sebab nuzul", ar: "بسبب النزول" }, { id: "Tafsir dengan contoh", ar: "بالمثال" }, { id: "Israiliyyat", ar: "الإسرائيليات" }], j: 0 },
      { q: { id: "Ucapan Az-Zubair \"aku mengira ayat ini turun tentang itu\" termasuk sebab nuzul…", ar: "قول الزبير «إني لأحسب هذه الآية نزلت في ذلك» سبب…" }, o: [{ id: "Tegas", ar: "صريح" }, { id: "Tidak tegas", ar: "غير صريح" }, { id: "Palsu", ar: "موضوع" }, { id: "Mansukh", ar: "منسوخ" }], j: 1 },
      { q: { id: "Kitab tafsir salaf yang menyebut sanad adalah…", ar: "من كتب تفسير السلف بالإسناد…" }, o: [{ id: "Tafsir Ibnu Abi Hatim", ar: "تفسير ابن أبي حاتم" }, { id: "Tafsir Ibnu Katsir", ar: "تفسير ابن كثير" }, { id: "Tafsir Al-Baghawi", ar: "تفسير البغوي" }, { id: "Tafsir Ibnu 'Athiyyah", ar: "تفسير ابن عطية" }], j: 0 }
    ],
    bs: [
      { t: { id: "Memilih salah satu makna dari ayat yang multimakna termasuk ijtihad.", ar: "اختيار أحد المحتملات اجتهاد." }, j: true },
      { t: { id: "Setiap ucapan sahabat \"ayat ini turun tentang si fulan\" pasti sebab nuzul tegas.", ar: "كل قول للصحابي «نزلت في فلان» سبب صريح." }, j: false, b: { id: "Umumnya ijtihad penerapan ayat.", ar: "أغلبه اجتهاد." } },
      { t: { id: "Ijma' sahabat adalah hujjah karena mereka tidak bersepakat di atas kesalahan.", ar: "إجماع الصحابة حجة لأنهم لا يجمعون على خطأ." }, j: true },
      { t: { id: "Tafsir dengan contoh bertujuan mengkhususkan makna umum pada contoh itu saja.", ar: "التفسير بالمثال يقصد به التخصيص." }, j: false, b: { id: "Bukan untuk takhshish; hanya memberi contoh.", ar: "لا على سبيل التخصيص." } },
      { t: { id: "Ibnul Qayyim mengkritik para pengumpul yang menjadikan contoh dan lazim makna sebagai pendapat-pendapat yang berbeda.", ar: "انتقد ابن القيم الجماعين الذين يحكون الأمثلة واللوازم أقوالًا مختلفة." }, j: true },
      { t: { id: "Ats-Tsa'labi dalam *Al-Kasyf wal-Bayan* menukil perkataan salaf tanpa sanad.", ar: "الثعلبي في الكشف والبيان ينقل أقوال السلف دون إسناد." }, j: true },
      { t: { id: "Dalam tafsir siyaqi, perbedaan biasanya pada makna lafaz secara bahasa.", ar: "في التفسير السياقي يقع الخلاف في المعنى اللفظي." }, j: false, b: { id: "Makna lafaz disepakati; perbedaan pada maksudnya dalam konteks.", ar: "الخلاف في المراد في السياق." } }
    ],
    jodoh: [
      { a: { id: "Bil-mitsal", ar: "بالمثال" }, b: { id: "*Dhurr* = sakit, *khair* = sehat", ar: "الضر: المرض" } },
      { a: { id: "Sebab nuzul tegas", ar: "سبب صريح" }, b: { id: "Turunnya {تَبَّتْ يَدَا أَبِي لَهَبٍ}", ar: "نزول سورة المسد" } },
      { a: { id: "Bil-lazim", ar: "باللازم" }, b: { id: "*Makhdhud* = tidak melukai tangan", ar: "المخضود: لا يعقر اليد" } },
      { a: { id: "Juz' al-ma'na", ar: "جزء المعنى" }, b: { id: "*Tabaraka*", ar: "تبارك" } },
      { a: { id: "Siyaqi", ar: "سياقي" }, b: { id: "{ثُمَّ السَّبِيلَ يَسَّرَهُ}", ar: "ثم السبيل يسره" } },
      { a: { id: "Kisah dalam tafsir", ar: "القصص" }, b: { id: "Bal'am bin Ba'ura", ar: "بلعم بن باعوراء" } }
    ],
    isian: [
      { t: { id: "Tafsir salaf terbagi dua: tafsir manqul dan tafsir dengan ______.", ar: "تفسير السلف قسمان: منقول وتفسير بـ______." }, j: { id: "ra'yu (ijtihad)", ar: "الرأي" }, x: [{ id: "israiliyyat", ar: "الإسرائيليات" }, { id: "qira'at", ar: "القراءات" }, { id: "syair", ar: "الشعر" }] },
      { t: { id: "Anas berkata: \"Kami ______ ayat ini turun tentang Anas bin an-Nadhr.\"", ar: "قال أنس: «______ هذه الآية نزلت في أنس بن النضر»" }, j: { id: "memandang (nara)", ar: "نرى" }, x: [{ id: "yakin", ar: "نجزم" }, { id: "mendengar", ar: "سمعنا" }, { id: "membaca", ar: "قرأنا" }] },
      { t: { id: "Ibnu Katsir tentang *al-mulqiyat*: \"Tidak ada ______ di sini.\"", ar: "قال ابن كثير: «ولا ______ ها هنا»" }, j: { id: "khilaf", ar: "خلاف" }, x: [{ id: "riwayat", ar: "رواية" }, { id: "naskh", ar: "نسخ" }, { id: "ijtihad", ar: "اجتهاد" }] },
      { t: { id: "Asalnya tafsir harus ______ dengan makna yang ditafsirkan.", ar: "الأصل أن يقع التفسير ______ للمعنى." }, j: { id: "sesuai persis (muthabiq)", ar: "مطابقًا" }, x: [{ id: "lebih panjang", ar: "أطول" }, { id: "berlawanan", ar: "مخالفًا" }, { id: "lebih ringkas", ar: "أوجز" }] }
    ],
    pilah: { t: { id: "Pilah: termasuk tafsir salaf yang HUJJAH atau IJTIHAD (tidak mengikat)?", ar: "صنِّف: حجة أم اجتهاد؟" },
      kategori: [{ id: "Hujjah", ar: "حجة" }, { id: "Ijtihad", ar: "اجتهاد" }],
      item: [
        { t: { id: "{فَالْمُلْقِيَاتِ ذِكْرًا} = malaikat (ijma')", ar: "الملقيات: الملائكة" }, k: 0 },
        { t: { id: "*Ar-raib* = keraguan", ar: "الريب: الشك" }, k: 0 },
        { t: { id: "Ahlul Kitab dalam Ali 'Imran: 64 = Yahudi Madinah", ar: "أهل الكتاب: يهود المدينة" }, k: 1 },
        { t: { id: "Sebab nuzul tegas Surah Al-Masad", ar: "سبب نزول تبت" }, k: 0 },
        { t: { id: "Sa'd: Al-Ma'idah: 33 tentang Haruriyyah", ar: "نزلت في الحرورية" }, k: 1 },
        { t: { id: "Orang dalam Al-A'raf: 175 = Bal'am", ar: "بلعم" }, k: 1 }
      ] }
  },
  tugas: [
    { t: { ar: "عرِّف التفسير بالرأي، أو عرِّف تفسير السلف بالرأي.", id: "Definisikan tafsir dengan ra'yu, atau tafsir salaf dengan ra'yu." }, j: { ar: "تفسير السلف بالرأي: هو اجتهاد خير القرون في بيان معاني القرآن بما معهم من أدوات الاجتهاد. ومن أنواعه: ما له أكثر من وجه في المعنى، وسبب النزول غير الصريح، وما يذكرونه من القصص في تفسير الآية.", id: "**Ijtihad generasi terbaik dalam menjelaskan makna Al-Qur'an dengan alat-alat ijtihad yang mereka miliki.** Jenisnya: ayat yang memiliki lebih dari satu sisi makna, sebab nuzul yang tidak tegas, dan kisah-kisah yang disebut dalam tafsir ayat." } },
    { t: { ar: "اذكر أنواع تفسير السلف، وبيِّن أيها حجة وأيها ليس بحجة.", id: "Sebutkan jenis-jenis tafsir salaf, dan jelaskan mana yang hujjah dan mana yang bukan." }, j: { ar: "تفسير السلف منقول ورأي. والحجة منه: ١- ما يروونه عن النبي ﷺ. ٢- أسباب النزول الصريحة. ٣- ما أجمع عليه السلف كتفسير الملقيات بالملائكة. ٤- ما لا يحتمل إلا معنى واحدًا كتفسير الريب بالشك. وأما اجتهادهم فيما يحتمل أكثر من وجه، وسبب النزول غير الصريح، والقصص فهي من الرأي المعتبر الذي ليس حجة ملزمة.", id: "Tafsir salaf ada yang **manqul** dan ada yang **ra'yu**. Yang **hujjah**: (1) riwayat dari Nabi ﷺ; (2) sebab nuzul tegas; (3) ijma' salaf (*al-mulqiyat* = malaikat); (4) yang hanya bermakna satu (*raib* = keraguan). Yang **bukan hujjah mengikat**: ijtihad mereka pada ayat multimakna, sebab nuzul tidak tegas, dan kisah-kisah — tetap dihormati dan didahulukan." } },
    { t: { ar: "للسلف خمسة أساليب في التفسير، اذكرها.", id: "Salaf memiliki lima uslub dalam tafsir. Sebutkan!" }, j: { ar: "١- التفسير بالمثال (الضر: المرض). ٢- التفسير بسبب النزول صريحًا وغير صريح. ٣- التفسير باللازم (المخضود: لا يعقر اليد). ٤- التفسير بجزء المعنى (تبارك). ٥- التفسير السياقي ({ثُمَّ السَّبِيلَ يَسَّرَهُ}).", id: "(1) **Bil-mitsal** — *dhurr* = sakit; (2) **dengan sebab nuzul** — tegas & tidak tegas; (3) **bil-lazim** — *makhdhud* = tidak melukai tangan; (4) **bi juz' al-ma'na** — *tabaraka*; (5) **siyaqi** — {ثُمَّ السَّبِيلَ يَسَّرَهُ}." } },
    { t: { ar: "اذكر بعضًا من المؤلفات التي تعتني بتفسير السلف وتنقله بالإسناد.", id: "Sebutkan sebagian kitab yang menghimpun tafsir salaf dengan sanad." }, j: { ar: "تفسير عبد الرزاق، وتفسير عبد بن حميد، وتفسير الطبري، وتفسير ابن المنذر، وتفسير ابن أبي حاتم، وتفسير أبي الشيخ، وتفسير ابن مردويه.", id: "Tafsir **'Abdurrazzaq**, **'Abd bin Humaid**, **Ath-Thabari**, **Ibnul Mundzir**, **Ibnu Abi Hatim**, **Abu asy-Syaikh**, dan **Ibnu Mardawaih**." } }
  ]
});
