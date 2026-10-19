/* Tajwid — Pertemuan 2: Hukum Nun Sukun dan Tanwin, Nun-Mim Tasydid, Mim Sukun, Lam Sukun */
Kuliah.pertemuan("tajwid", {
  no: 2, motif: "sumber", tema: 1, durasi: 26,
  telegram: "https://t.me/Shifaaulqloub7/102",
  bab: { id: "Hukum nun sukun dan tanwin, nun dan mim bertasydid, mim sukun, serta lam-lam sukun", ar: "أحكام النون الساكنة والتنوين، والميم والنون المشددتين، والميم الساكنة، واللامات السواكن" },
  judul: { id: "Hukum Nun Sukun dan Tanwin, Mim Sukun, dan Lam Sukun", ar: "أحكام النون الساكنة والتنوين والميم الساكنة واللامات السواكن" },
  ringkas: {
    id: "Pelajaran praktik pertama: empat hukum nun sukun dan tanwin (izhhar halqi, idgham, iqlab, ikhfa' haqiqi), hukum nun dan mim bertasydid beserta ghunnah, tiga hukum mim sukun, dan lima jenis lam sukun beserta hukumnya.",
    ar: "أول الدروس العملية: أحكام النون الساكنة والتنوين الأربعة (الإظهار الحلقي والإدغام والإقلاب والإخفاء الحقيقي)، وحكم الميم والنون المشددتين والغنة، وأحكام الميم الساكنة الثلاثة، واللامات السواكن الخمس وأحكامها."
  },
  tujuan: [
    { id: "Membedakan nun sukun dari tanwin dan menyebut empat hukumnya beserta huruf-hurufnya.", ar: "التفريق بين النون الساكنة والتنوين وذكر أحكامهما الأربعة وحروفها." },
    { id: "Menerapkan izhhar, idgham, iqlab, dan ikhfa' pada ayat berharakat beserta pengecualiannya.", ar: "تطبيق الإظهار والإدغام والإقلاب والإخفاء على الأمثلة مع المستثنيات." },
    { id: "Menjelaskan nun dan mim bertasydid, ghunnah, ukuran, dan derajatnya.", ar: "بيان حكم الميم والنون المشددتين والغنة ومقدارها ودرجاتها." },
    { id: "Menyebut tiga hukum mim sukun dan sebab masing-masing.", ar: "ذكر أحكام الميم الساكنة الثلاثة وأسبابها." },
    { id: "Membedakan lima jenis lam sukun dan hukum tiap jenis.", ar: "التمييز بين اللامات السواكن الخمس وحكم كل منها." }
  ],
  isi: [
    { t: "pembuka", id: "Pertemuan lalu adalah mukadimah. Hari ini kita masuk **pelajaran praktik pertama**: hukum nun sukun dan tanwin. Jika kita melihat mushaf, huruf nun muncul dalam tiga bentuk, dan hanya satu yang memiliki hukum khusus ini.", ar: "تكلمنا في المحاضرة السابقة عن مقدمة علم التجويد، واليوم نتكلم عن أحكام النون الساكنة والتنوين وهو أول درس من الدروس العملية." },

    { t: "judul", id: "Tiga Bentuk Nun dalam Mushaf", ar: "أشكال النون" },
    { t: "poin", item: [
      { ikon: "star8", judul: { id: "1. Nun berharakat", ar: "الشكل الأول" }, id: "Fathah, dhammah, atau kasrah; dilafalkan sesuai harakatnya dengan jelas (*na - ni - nu*).", ar: "نون متحركة بالفتح أو الضم أو الكسر تنطق بالإظهار: نا - ني - نو." },
      { ikon: "layers", judul: { id: "2. Nun bertasydid", ar: "الشكل الثاني" }, id: "Nun berharakat dan bertasydid; wajib **ghunnah dua harakat**.", ar: "نون مشددة تحتاج لغنة حركتين." },
      { ikon: "key", judul: { id: "3. Nun sukun", ar: "الشكل الثالث" }, id: "Memiliki **empat hukum**. Tanda sukun di mushaf adalah kepala huruf *kha'* (dari kata *khafif*), kadang tidak ditulis bergantung hukum sesudahnya.", ar: "نون ساكنة، والسكون في المصحف رأس خاء من خفيف، وقد لا يأتي عليها حسب الحكم، ولها أربعة أحكام." } ] },
    { t: "banding", judul: { id: "Nun sukun dan tanwin", ar: "الفرق بين النون الساكنة والتنوين" },
      kiri: { judul: { id: "Nun sukun", ar: "النون الساكنة" }, ikon: "target", warna: "green", poin: [
        { id: "Nun tanpa harakat; ada pada **isim** ({إِنْسَان}, {الْأَنْعَام}, {مُنْذِر}), **fi'il** ({أَنْعَمْتَ}, {يَنْحِتُونَ}), dan **huruf** (*min, 'an, in*).", ar: "هي التي لا حركة لها، توجد في الأسماء والأفعال والحروف." },
        { id: "Bisa di tengah atau di akhir kata; bisa **asli** ({أَنْهَار}, {يَنْصُرْكُمْ}) atau **tambahan** ({انْسَلَخَ}, {انْشَقَّ}).", ar: "متوسطة ومتطرفة، أصلية وزائدة." },
        { id: "Tetap dalam lafaz, tulisan, waqaf, dan washl.", ar: "ثابتة لفظًا وخطًا ووقفًا ووصلًا." } ] },
      kanan: { judul: { id: "Tanwin", ar: "التنوين" }, ikon: "pen", warna: "blue", poin: [
        { id: "**Nun sukun tambahan**, bukan untuk taukid, yang menempel pada **akhir isim**: {عَلِيمًا} (waqaf: *'alima*), {غَاسِقٍ} (*ghasiq*).", ar: "نون ساكنة زائدة لغير التوكيد تلحق آخر الأسماء." },
        { id: "Tetap dalam lafaz dan washl; **hilang dalam tulisan dan waqaf**.", ar: "ثابت لفظًا ووصلًا ويفارقه خطًا ووقفًا." },
        { id: "Lambangnya di mushaf: dua fathah, dua kasrah, dua dhammah.", ar: "رمزه فتحتان أو كسرتان أو ضمتان." } ] } },
    { t: "catatan", gaya: "info", judul: { id: "Dua fi'il bertanwin dan {وَكَأَيِّن}", ar: "أفعال منونة وكأين" }, id: "Fi'il tidak ditanwin, tetapi di Al-Qur'an ada **dua fi'il bertanwin**: {وَلَيَكُونًا مِنَ الصَّاغِرِينَ} (Yusuf) dan {لَنَسْفَعًا بِالنَّاصِيَةِ} (Al-'Alaq). Saat waqaf dibaca dengan alif; asalnya *layakunanna* dan *lanasfa'an-na*, nun taukid khafifah dibuang dan ditulis seperti tanwin karena serupa dalam waqaf. Dikecualikan tanwin {وَكَأَيِّن}: asalnya *ka'ayyi* dan ditulis dengan nun tetap, sehingga waqaf dengan nun sukun.", ar: "الأفعال لا تنون، لكن ورد فعلان منونان: {وَلَيَكُونًا مِنَ الصَّاغِرِينَ} في يوسف و{لَنَسْفَعًا بِالنَّاصِيَةِ} في العلق، يوقف عليهما بالألف، وأصلهما بنون التوكيد الخفيفة. واستثني تنوين «وكأيّن» فيوقف عليه بإثبات النون الساكنة." },
    { t: "kutipan", ar: "لِلنُّونِ إِنْ تَسْكُنْ وَلِلتَّنْوِينِ ... أَرْبَعُ أَحْكَامٍ فَخُذْ تَبْيِينِي * فَالأَوَّلُ الإِظْهَارُ قَبْلَ أَحْرُفٍ ... لِلْحَلْقِ سِتٌّ رُتِّبَتْ فَلْتَعْرِفِ", id: "Nun yang sukun dan tanwin memiliki empat hukum, maka ambillah penjelasanku. Yang pertama adalah izhhar, sebelum enam huruf halq yang tersusun, maka ketahuilah.", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "peta", ikon: "route", pusat: { id: "Empat hukum nun sukun dan tanwin", ar: "أحكام النون الساكنة والتنوين الأربعة" }, cabang: [
      { id: "1. Izhhar halqi", ar: "الإظهار الحلقي", sub: [{ id: "6 huruf halq", ar: "ء هـ ع ح غ خ" }] },
      { id: "2. Idgham", ar: "الإدغام", sub: [{ id: "6 huruf: ي ر م ل و ن (*yarmulun*)", ar: "يرملون" }] },
      { id: "3. Iqlab", ar: "الإقلاب", sub: [{ id: "1 huruf: ب", ar: "الباء" }] },
      { id: "4. Ikhfa' haqiqi", ar: "الإخفاء الحقيقي", sub: [{ id: "15 huruf sisanya", ar: "خمسة عشر حرفًا" }] } ] },

    { t: "judul", id: "Hukum Pertama: Izhhar Halqi", ar: "أولًا: الإظهار الحلقي" },
    { t: "definisi", judul: { id: "Al-izhhar", ar: "الإظهار" },
      lughah: { id: "Penjelasan dan kejelasan.", ar: "الإيضاح والبيان." },
      istilah: { id: "Mengeluarkan huruf yang dizhharkan dari makhrajnya **tanpa ghunnah yang tampak, tanpa waqaf, tanpa saktah, dan tanpa tasydid**.", ar: "إخراج الحرف المظهر من مخرجه من غير غنة ظاهرة ولا وقف ولا سكت ولا تشديد." } },
    { t: "catatan", gaya: "faidah", judul: { id: "Mengapa izhhar, dan mengapa disebut halqi?", ar: "سبب الإظهار" }, id: "Disebut *halqi* karena enam hurufnya keluar dari **tenggorokan**. Sebabnya: makhraj nun sukun (ujung lidah) **jauh** dari huruf-huruf itu. Idgham tidak tepat karena tak ada pembenar; ikhfa' tidak tepat karena dekat dengan idgham; iqlab tidak tepat karena ia sarana menuju ikhfa'.", ar: "سمي حلقيًا نسبة إلى مخرج الحروف الستة من الحلق، وسببه بعد مخرج النون الساكنة (طرف اللسان) عنها، فلم يحسن الإدغام لعدم المسوّغ ولا الإخفاء لقربه من الإدغام ولا القلب لأنه وسيلة للإخفاء." },
    { t: "tabel", judul: { id: "Huruf izhhar dan tingkatannya", ar: "حروف الإظهار ومراتبه" }, kolom: [{ id: "Tingkat", ar: "المرتبة" }, { id: "Huruf", ar: "الحروف" }, { id: "Tenggorokan", ar: "الحلق" }], baris: [
      [{ id: "Tinggi (paling kuat izhharnya)", ar: "عليا" }, { id: "ء ه (hamzah, ha')", ar: "الهمز والهاء" }, { id: "Pangkal tenggorokan (aqshal-halq)", ar: "أقصى الحلق" }],
      [{ id: "Pertengahan", ar: "وسطى" }, { id: "ع ح ('ain, ha')", ar: "العين والحاء" }, { id: "Tengah tenggorokan", ar: "وسط الحلق" }],
      [{ id: "Rendah", ar: "دنيا" }, { id: "غ خ (ghain, kha')", ar: "الغين والخاء" }, { id: "Ujung tenggorokan (adnal-halq)", ar: "أدنى الحلق" }] ] },
    { t: "kutipan", ar: "همز فهاء ثم عين حاء ... مهملتان ثم غين خاء *** (أخي هاك علمًا حازه غير خاسر)", id: "Hamzah, ha', 'ain, ha' (tanpa titik), lalu ghain dan kha'. Dirangkum sebagian orang: *akhi haka 'ilman hazahu ghaira khasir* — ambil huruf pertama tiap kata.", oleh: "Tuhfatul-Athfal dan penyusun kalimat penghafal" },
    { t: "contoh", judul: { id: "Izhhar pada nun sukun dalam satu kata dan dua kata", ar: "أمثلة الإظهار" },
      id: "Izhhar pada nun sukun bisa **dalam satu kata dan dua kata**, tetap dalam washl dan waqaf. Pada **tanwin hanya dalam dua kata** dan hanya dalam washl. Jauhnya makhraj membuat semakin mudah izhhar. Nun sukun bertemu hamzah, ghain, dan kha' dalam satu kata hanya pada tiga kata: {يَنْأَوْنَ}, {فَسَيُنْغِضُونَ}, {الْمُنْخَنِقَةُ}.",
      ar: "يأتي الإظهار مع النون الساكنة من كلمة ومن كلمتين ويثبت وصلًا ووقفًا، ويأتي مع التنوين من كلمتين ولا يثبت إلا وصلًا، ولا تلتقي النون الساكنة مع الهمز والغين والخاء في كلمة إلا في وينأون وفسينغضون والمنخنقة.",
      sorot: [
        { label: { ar: "الْأَنْهَارُ" }, warna: "green", id: "Nun sukun + **ha'** dalam satu kata.", ar: "مع الهاء." },
        { label: { ar: "أَنْعَمْتَ" }, warna: "green", id: "Nun sukun + **'ain**: *an'amta* — jangan diberi harakat fathah (lahn jali).", ar: "مع العين." },
        { label: { ar: "يَنْحِتُونَ" }, warna: "green", id: "Nun sukun + **ha'** (tanpa titik).", ar: "مع الحاء." },
        { label: { ar: "مِنْ أَهْلِ — مِنْ هَادٍ — مِنْ حَكِيمٍ — مِنْ غِلٍّ — مِنْ خَوْفٍ — مِنْ عِلْمٍ" }, warna: "blue", id: "Nun sukun dari **dua kata** dengan hamzah, ha', ha', ghain, kha', 'ain.", ar: "النون الساكنة من كلمتين." },
        { label: { ar: "حَاسِدٍ إِذَا — سَلَامٌ هِيَ — وَاسِعٌ عَلِيمٌ — نَارًا حَامِيَةً — أَجْرٌ غَيْرُ — ذَرَّةٍ خَيْرًا" }, warna: "gold", id: "**Tanwin** dengan huruf izhhar pada kata berikutnya.", ar: "مع التنوين." } ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kesalahan umum: memisah atau menggunakan ghunnah", ar: "تنبيه" }, id: "Dalam {مِنْ أَهْلِ}, jangan memberi ghunnah pada nun atau **menyaktahkan** (diam sejenak) antara *min* dan *ahli*. Huruf harus dibaca bersambung dan jernih.", ar: "فإذا قلنا {مِنْ أَهْلِ} لا نغن النون ولا نسكت بين من وأهل، يعني لا يفصل الإنسان بين الحرفين." },
    { t: "cek", q: { id: "Nun sukun pada {أَنْعَمْتَ} dibaca…", ar: "النون الساكنة في {أَنْعَمْتَ}:" }, o: [{ id: "Idgham bighunnah", ar: "إدغام بغنة" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Ikhfa'", ar: "إخفاء" }, { id: "Izhhar halqi", ar: "إظهار حلقي" }], j: 3, b: { id: "Setelah nun sukun ada 'ain, salah satu huruf halq.", ar: "العين من حروف الحلق." } },

    { t: "judul", id: "Hukum Kedua: Idgham", ar: "ثانيًا: الإدغام" },
    { t: "definisi", judul: { id: "Al-idgham", ar: "الإدغام" },
      lughah: { id: "Memasukkan sesuatu ke dalam sesuatu, dari ucapan Arab *adghamtu al-lijam fi famil-faras* (aku memasukkan tali kekang ke mulut kuda).", ar: "إدخال الشيء في الشيء، من قول العرب: أدغمت اللجام في فم الفرس." },
      istilah: { id: "Memasukkan huruf **sukun** (nun sukun atau tanwin) ke dalam huruf **berharakat** sehingga keduanya menjadi **satu huruf bertasydid** seperti huruf kedua.", ar: "إدخال حرف ساكن (النون الساكنة والتنوين) في حرف متحرك بحيث يصيران حرفًا واحدًا مشددًا كالثاني." } },
    { t: "kutipan", ar: "وَالثَّانِ إِدْغَامٌ بِسِتَّةٍ أَتَتْ ... فِي يَرْمُلُونَ عِنْدَهُمْ قَدْ ثَبَتَتْ * لَكِنَّهَا قِسْمَانِ قِسْمٌ يُدْغَمَا ... فِيهِ بِغُنَّةٍ بِيَنْمُو عُلِمَا * إِلاَّ إِذَا كَانَ بِكِلْمَةٍ فَلاَ ... تُدْغِمْ كَدُنْيَا ثُمَّ صِنْوَانٌ تَلاَ", id: "Yang kedua idgham, pada enam huruf dalam *yarmulun*. Ia dua bagian: yang diidghamkan dengan ghunnah (*yanmu*), kecuali bila dalam satu kata maka tidak diidghamkan, seperti *dunya* dan *shinwan*.", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "banding", judul: { id: "Idgham bighunnah dan bilaghunnah", ar: "إدغام بغنة وبغير غنة" },
      kiri: { judul: { id: "Dengan ghunnah (huruf «ينمو»)", ar: "إدغام بغنة" }, ikon: "waves", warna: "green", poin: [
        { id: "Huruf: **ي ن م و** (*yanmu*). Nun sukun atau tanwin berubah menjadi bunyi yang sama dengan huruf sesudahnya dengan **ghunnah tetap ada**.", ar: "حروفه ينمو، تتحول النون الساكنة أو التنوين إلى صوت مماثل للصوت الذي يليه مع بقاء الغنة." },
        { id: "Sebab: kesamaan dan kedekatan serta kesejenisan huruf-hurufnya.", ar: "سببه تماثل النون والتنوين وتقاربهما وتجانسهما." },
        { id: "Disebut idgham **naqish** (kurang): hilang zat huruf, tersisa sifat (ghunnah), pada wawu dan ya' disepakati.", ar: "يسمى ناقصًا لذهاب ذات الحرف وبقاء صفته." } ] },
      kanan: { judul: { id: "Tanpa ghunnah (huruf «لر»)", ar: "إدغام بغير غنة" }, ikon: "wind", warna: "blue", poin: [
        { id: "Huruf: **ر ل** (*lam* dan *ra'*). Nun sukun atau tanwin berubah menjadi lam atau ra' bertasydid **tanpa ghunnah**.", ar: "حروفه الراء واللام." },
        { id: "Sebab: **kedekatan makhraj** nun dan huruf-huruf itu.", ar: "سببه التقارب بين المخرجين." },
        { id: "Disebut idgham **kamil** (penuh): hilang zat huruf dan sifatnya; rangkum dalam *lam nar* / *narmal*.", ar: "يسمى كاملًا لذهاب الحرف وصفته، وتجمع في (لم نر) أو (نرمل)." } ] } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Syarat idgham", ar: "شرط الإدغام" }, id: "Idgham hanya terjadi pada **dua kata**: nun sukun di akhir kata dan huruf idgham di awal kata berikutnya; hanya ada saat washl. Pada nun dan mim, idgham kamil/naqish diperselisihkan, dan ghunnah di sana adalah ghunnah huruf yang diidghamkan ke dalamnya.", ar: "يشترط في الإدغام أن تكون النون الساكنة آخر الكلمة وحرف الإدغام أول الكلمة الثانية، ولا يثبت إلا وصلًا. ويكون الكامل عند اللام والراء باتفاق وعند النون والميم باختلاف." },
    { t: "contoh", judul: { id: "Contoh idgham", ar: "أمثلة الإدغام" },
      id: "Nun sukun dan tanwin diidghamkan pada dua kata. Ghunnah berasal dari **rongga hidung (khaisyum)**, bukan dari langit-langit mulut.",
      ar: "الغنة تأتي من الخيشوم لا من الحنك.",
      sorot: [
        { label: { ar: "فَمَنْ يَعْمَلْ — وَمَنْ نُعَمِّرْهُ" }, warna: "green", id: "Nun sukun + **ya'** dan **nun** — bighunnah.", ar: "مع الياء والنون." },
        { label: { ar: "مِنْ مَاءٍ — مِنْ وَاقٍ" }, warna: "green", id: "Nun sukun + **mim** dan **wawu** — bighunnah (dua harakat).", ar: "مع الميم والواو." },
        { label: { ar: "مِنْ لَدُنْ — مِنْ رَسُولٍ" }, warna: "blue", id: "Nun sukun + **lam** dan **ra'** — bilaghunnah.", ar: "مع اللام والراء." },
        { label: { ar: "قَوْمٍ يُؤْمِنُونَ — شَيْئًا نُكْرًا — قَوْلٌ مَعْرُوفٌ — غِشَاوَةٌ وَلَهُمْ — وَيْلٌ لِكُلِّ — غَفُورٌ رَحِيمٌ" }, warna: "gold", id: "**Tanwin** yang diidghamkan pada ya', nun, mim, wawu, lam, dan ra'.", ar: "الإدغام مع التنوين." } ] },
    { t: "akordion", judul: { id: "Pengecualian dalam idgham", ar: "مستثنيات الإدغام" }, item: [
      { judul: { id: "Yasin dan Nun: nun sukun bertemu wawu", ar: "يس والقرآن، ن والقلم" }, id: "{يس وَالْقُرْآنِ الْحَكِيمِ} dan {ن وَالْقَلَمِ وَمَا يَسْطُرُونَ}: menurut Hafsh dibaca **izhhar** (disebut *izhhar riwayah*), karena nun di sana terhubung dalam lafaz tetapi **terpisah secara hukum** (huruf hijaiyah, bukan huruf bangunan kata).", ar: "يستثنى من الإدغام بغنة النون الساكنة في الواو في {يس وَالْقُرْآنِ} و{ن وَالْقَلَمِ}، ويسمى عند حفص إظهار رواية مراعاة للانفصال الحكمي." },
      { judul: { id: "{وَقِيلَ مَنْ رَاقٍ}", ar: "من راق" }, id: "Nun dibaca dengan **saktah lembut tanpa mengambil nafas**, dan saktah mencegah idgham; maka dibaca {مَنْ رَاقٍ}, bukan *maraaq*.", ar: "لوجوب السكت سكتة لطيفة بدون تنفس، والسكت يمنع الإدغام فلا نقول: مراق." },
      { judul: { id: "Dalam satu kata: izhhar mutlak", ar: "إظهار مطلق" }, id: "Bila nun dan huruf ya'/wawu berada dalam **satu kata** maka wajib izhhar (*izhhar muthlaq*, tak terikat huruf halq atau syafawi). Ada **empat tempat**: {الدُّنْيَا}, {صِنْوَانٌ}, {قِنْوَانٌ}, {بُنْيَانٌ}. Agar tidak tertukar dengan kata bertasydid asli (kalau diidghamkan terbaca *ad-duyya* atau *shuwwan*).", ar: "إذا كان في كلمة واحدة وجب الإظهار وهو إظهار المطلق، ورد في أربعة مواضع: الدنيا وصنوان وقنوان وبنيان، لئلا يشتبه بالمضعّف." },
      { judul: { id: "{طسم}: nun dan mim", ar: "طسم" }, id: "Dalam satu kata, nun sukun pada nama huruf {طسم} (Asy-Syu'ara' dan Al-Qashash) **diidghamkan** ke mim karena menjaga hubungan lafaz untuk keringanan, dan tidak sahnya waqaf pada sebagian kata.", ar: "واستثنى في كلمة واحدة النون مع الميم من هجاء {طسم} في الشعراء والقصص فأدغمها مراعاة للاتصال اللفظي وعدم صحة الوقف على جزء من الكلمة." } ] },
    { t: "catatan", gaya: "info", judul: { id: "Tanda di mushaf", ar: "العلامة في المصحف" }, id: "**Idgham:** tanda sukun pada nun dihapus dan huruf sesudahnya diberi **tasydid** (pada mim, nun, lam, ra'); tanwin ditulis **bertumpuk** (nuun dan huruf sesudahnya bertasydid). Untuk **wawu dan ya'**, sukun nun dihapus tetapi huruf sesudahnya **tidak** ditasydid.", ar: "علامة الإدغام تعرية النون من السكون وتشديد الحرف الذي يليها إذا كان من الميم والنون واللام والراء، أما الواو والياء فتعرى النون ولا يشدد الحرف الذي يليها." },
    { t: "cek", q: { id: "{مِنْ رَسُولٍ} dibaca…", ar: "حكم {مِنْ رَسُولٍ}:" }, o: [{ id: "Izhhar halqi", ar: "إظهار حلقي" }, { id: "Idgham bilaghunnah", ar: "إدغام بغير غنة" }, { id: "Idgham bighunnah", ar: "إدغام بغنة" }, { id: "Ikhfa'", ar: "إخفاء" }], j: 1, b: { id: "Ra' adalah huruf idgham tanpa ghunnah (*lam nar*).", ar: "الراء من حرفي الإدغام بغير غنة." } },

    { t: "judul", id: "Hukum Ketiga: Iqlab", ar: "ثالثًا: الإقلاب" },
    { t: "definisi", judul: { id: "Al-iqlab", ar: "الإقلاب" },
      lughah: { id: "Memalingkan sesuatu dari bentuknya.", ar: "تحويلك الشيء عن وجهه." },
      istilah: { id: "Mengubah nun sukun atau tanwin menjadi **mim yang disamarkan dengan ghunnah** bila bertemu huruf **ba'**.", ar: "قلب النون الساكنة أو التنوين ميمًا مخفاة بغنة إذا وقع بعدهما حرف الباء." } },
    { t: "langkah", judul: { id: "Tiga langkah iqlab", ar: "يتحقق الإقلاب" }, item: [
      { id: "Nun sukun atau tanwin **diubah menjadi mim murni dalam lafaz**, bukan dalam tulisan.", ar: "قلب النون الساكنة أو التنوين ميمًا خالصة لفظًا لا خطًا." },
      { id: "Mim itu **disamarkan (ikhfa')** di hadapan ba'.", ar: "إخفاء هذه الميم عند الباء." },
      { id: "Ghunnah ditampakkan; yang disamarkan adalah **sifat mim hasil perubahan**, bukan sifat nun atau tanwin.", ar: "إظهار الغنة مع إخفاء صفة الميم المقلوبة لا صفة النون والتنوين." } ] },
    { t: "contoh", judul: { id: "Contoh iqlab", ar: "أمثلة الإقلاب" },
      id: "Hanya **satu huruf**: ba'. Terjadi pada nun sukun dalam satu kata dan dua kata (tetap dalam washl dan waqaf), serta tanwin dalam dua kata (hanya washl). Sebab: mim hasil perubahan sejenis ba' dalam makhraj, dan sejenis tanwin dalam ghunnah; izhhar dan idgham sulit karena makhraj berbeda, dan ikhfa' berat karena kurang serasi, maka nun diubah ke mim agar ikhfa' mudah.",
      ar: "حرف واحد وهو الباء، ويأتي الإقلاب مع النون الساكنة من كلمة ومن كلمتين ويثبت وصلًا ووقفًا، ومع التنوين من كلمتين ولا يثبت إلا وصلًا. وسببه اشتراك الميم والباء في المخرج واشتراك الميم والتنوين في الغنة.",
      sorot: [
        { label: { ar: "أَنْبِئْهُمْ — لَيُنْبَذَنَّ فِي الْحُطَمَةِ" }, warna: "green", id: "Nun sukun + ba' dalam **satu kata**.", ar: "في كلمة." },
        { label: { ar: "مِنْ بَعْدِ" }, warna: "blue", id: "Nun sukun + ba' dalam **dua kata**.", ar: "في كلمتين." },
        { label: { ar: "سَمِيعٌ بَصِيرٌ" }, warna: "gold", id: "**Tanwin** + ba': dibaca *sami'um-basir*.", ar: "مع التنوين." } ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kesalahan umum pada iqlab dan khilaf ithbaq/furjah", ar: "ألحان شائعة وخلاف" }, id: "(1) **Menekan/menggigit** kedua bibir pada mim; yang benar mengatupkannya **lembut tanpa berat**. (2) **Memanjangkan harakat sebelum nun** sehingga terdengar *mii ba'd*. (3) **Membuka celah lebar** antara bibir bagi yang membaca dengan furjah, sehingga suara tak jelas apakah mim atau nun. **Ulama berbeda** apakah iqlab dengan *ithbaq* (bibir dikatupkan) atau *furjah* (ada celah); masing-masing berdasarkan talaqqi guru. Yang penting: yang membaca ithbaq tidak berlebihan, dan yang memakai furjah tidak membuka rongga mulut terlalu lebar, hanya **sentuhan antara bibir**. Tanda di mushaf: sukun nun dihapus dan diberi **mim kecil**; pada tanwin cukup satu harakat dan harakat kedua diganti mim kecil.", ar: "ألحان شائعة: كزّ الشفتين على الميم المقلوبة، وإشباع حركة السابق للنون حتى يتولد حرف مد، واتساع الفرجة بين الشفتين. والأمر فيه خلاف عند القراء بين الإطباق والفرجة، لكن لا يبالغ في الإطباق ولا في فتح الحنك، بل تلامس بين الشفتين. وعلامة الإقلاب تعرية النون من السكون ووضع ميم صغيرة." },

    { t: "judul", id: "Hukum Keempat: Ikhfa' Haqiqi", ar: "رابعًا: الإخفاء الحقيقي" },
    { t: "definisi", judul: { id: "Al-ikhfa'", ar: "الإخفاء" },
      lughah: { id: "Menutupi: *akhfaitu al-kitab* = aku menyembunyikan buku dari pandangan.", ar: "الستر، يقال: أخفيت الكتاب أي سترته عن الأعين." },
      istilah: { id: "Melafalkan huruf dalam keadaan **tengah antara izhhar dan idgham**, tanpa tasydid, dengan **ghunnah tetap ada** pada huruf pertama.", ar: "النطق بالحرف بحالة وسط بين الإظهار والإدغام عارٍ عن التشديد مع بقاء الغنة في الحرف الأول." } },
    { t: "tabel", judul: { id: "15 huruf ikhfa' dan tingkatannya", ar: "حروف الإخفاء الخمسة عشر" }, kolom: [{ id: "Tingkat", ar: "المرتبة" }, { id: "Huruf", ar: "الحروف" }, { id: "Keterangan", ar: "السبب" }], baris: [
      [{ id: "Tinggi (paling dekat)", ar: "العليا" }, { id: "ط د ت", ar: "الطاء والدال والتاء" }, { id: "Ikhfa' dekat idgham karena makhrajnya dekat nun.", ar: "الإخفاء قريب من الإدغام لقرب مخرجها من النون." }],
      [{ id: "Rendah (paling jauh)", ar: "الدنيا" }, { id: "ق ك", ar: "القاف والكاف" }, { id: "Ikhfa' dekat izhhar karena makhrajnya jauh dari nun.", ar: "الإخفاء قريب من الإظهار لبعد مخرجهما." }],
      [{ id: "Pertengahan", ar: "الوسطى" }, { id: "Sisanya: ص ذ ث ج ش س ز ف ض ظ", ar: "باقي الحروف" }, { id: "Tidak dekat dan tidak jauh dari nun.", ar: "لعدم القرب أو البعد." }] ] },
    { t: "kutipan", ar: "وَالرَّابِعُ الإِخْفَا لَدَى الْفَاضِلِ ... مِنَ الْحُرُوفِ وَاجِبٌ لِلْفَاضِلِ * فِي خَمْسَةٍ مِنْ بَعْدِ عَشْرٍ رَمْزُهَا ... فِي كَلِمِ هَذَا الْبَيْتِ قَدْ ضَمَّنْتُهَا * صِفْ ذَا ثَنَا كَمْ جَادَ شَخْصٌ قَدْ سَمَا ... دُمْ طَيِّبًا زِدْ فِي تُقًى ضَعْ ظَالِمَا", id: "Hukum keempat ikhfa', di hadapan lima belas huruf yang kuncinya terkumpul dalam bait: *shif dza tsana kam jada syakhshun qad sama, dum thayyiban zid fi tuqan dha' zhaliman*.", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "langkah", judul: { id: "Cara melafalkan ikhfa'", ar: "كيفية النطق بالإخفاء" }, item: [
      { id: "Lidah **menggantung di rongga mulut**, tidak menempel pada gusi seperti izhhar, tidak diidghamkan dan tidak ditasydid.", ar: "أن يظل اللسان معلقًا في فراغ الفم ولا يلتصق باللثة ولا يدغم ولا يشدد." },
      { id: "Ikhfa' **dengan ghunnah**; lidah tidak bekerja karena nun sukun dan tanwin keluar dari **khaisyum** (rongga hidung).", ar: "الإخفاء مع الغنة ولا عمل للسان لأن النون والتنوين يخرجان من الخيشوم." },
      { id: "**Tafkhim ghunnah** bila huruf sesudahnya tebal (ص ض ط ظ ق), **tarqiq** bila tipis.", ar: "تفخيم غنة الإخفاء عند الحروف المفخمة وترقيقها عند المرققة." },
      { id: "Hindari **memanjangkan harakat sebelum nun** hingga timbul mad: {كُنْتُمْ} dibaca *kuuntum*, {مِنْكُمْ} dibaca *miinkum*.", ar: "الحذر من إشباع الحركة قبل النون بحيث يتولد منها مد." } ] },
    { t: "contoh", judul: { id: "Contoh ikhfa' haqiqi", ar: "أمثلة الإخفاء الحقيقي" },
      id: "Dua perkara: jika setelah nun sukun ada huruf **isti'la'/tafkhim**, ghunnah ikhfa' ditebalkan; jika huruf tipis, ghunnah ditipiskan. Huruf yang ghunnahnya ditebalkan: **ص ض ط ظ ق** (lima huruf).",
      ar: "إذا جاء بعد النون الساكنة حرف من حروف الاستعلاء نفخم غنة الإخفاء، وإذا كان حرف مرقق نرقق الغنة. والحروف التي تفخم فيها الغنة: الصاد والضاد والطاء والظاء والقاف.",
      sorot: [
        { label: { ar: "فَانْصَبْ" }, warna: "red", id: "Nun sukun + **shad** (tebal): ikhfa' dengan ghunnah tebal.", ar: "غنة مفخمة." },
        { label: { ar: "مُنْذِرٌ" }, warna: "green", id: "Nun sukun + **dzal** (tipis): ghunnah tipis.", ar: "غنة مرققة." },
        { label: { ar: "الْأُنْثَى — أَنْكَالًا — مَنْثُورًا — يَنْقَلِبُونَ — يَنْظُرُونَ — أَنْدَادًا — الْإِنْسَانُ — وَأَنْزَلْنَا — كُنْتُمْ — مَنْضُودٍ — أَنْفُسَكُمْ" }, warna: "blue", id: "Nun sukun dalam **satu kata** dengan tsa', kaf, tsa', qaf, zha', dal, sin, zay, ta', dhad, fa'.", ar: "من كلمة." },
        { label: { ar: "وَلَمَنْ صَبَرَ — مَنْ ذَا الَّذِي — مِنْ ثُلُثَيِ اللَّيْلِ — أَنْ كَانَ — إِنْ جَاءَكُمْ — مِنْ شَرِّ — مِنْ قَبْلُ — مَنْ ظُلِمَ — مِنْ سِدْرٍ — مِنْ دَابَّةٍ — مِنْ طِينٍ — مَنْ زَكَّاهَا — مِنْ فِئَةٍ — مَنْ تَابَ — مِنْ ضَعْفٍ" }, warna: "gold", id: "Nun sukun dari **dua kata** dengan seluruh jenis huruf ikhfa'.", ar: "من كلمتين." },
        { label: { ar: "عَمَلًا صَالِحًا — طَعَامًا ذَا غُصَّةٍ — يَوْمَئِذٍ ثَمَانِيَةٌ — أَجْرٌ كَرِيمٌ — وَلِكُلٍّ جَعَلْنَا — غَفُورٌ شَكُورٌ — عَفُوًّا قَدِيرًا — ظِلًّا ظَلِيلًا — بَشَرًا سَوِيًّا — مُسْتَقِيمٍ دِينًا — قَوْمًا طَاغِينَ — غُلَامًا زَكِيًّا — يَتِيمًا فَآوَى — جَنَّاتٍ تَجْرِي — مَكَانًا ضَيِّقًا" }, warna: "amber", id: "**Tanwin** dengan seluruh huruf ikhfa'.", ar: "مع التنوين." } ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Dua macam ikhfa' menurut Syaikh, dan cara menamai 'haqiqi'", ar: "أنواع الإخفاء" }, id: "Dinamakan *haqiqi* karena ikhfa' pada nun dan tanwin **lebih nyata** daripada yang lain, dan ulama sepakat atas nama ini. Menurut Syaikh: ada **ikhfa' harakat** (menyamarkan sebagian harakat) seperti {تَأْمَنَّا} yang boleh dengan *raum* dan *isymam*; dan **ikhfa' huruf** (menyamarkan sebagian huruf): ia pada **iqlab dan ikhfa' syafawi** dengan menutup zat huruf, sedangkan pada **ikhfa' haqiqi** zat huruf disembunyikan sepenuhnya. Tanda di mushaf: sukun dihapus dan huruf sesudahnya tidak ditasydid; tanwin ditulis **berurutan** (sama dengan idgham naqish).", ar: "ويسمى إخفاءً حقيقيًا لتحقق الإخفاء فيهما أكثر من غيرهما. أنواع الإخفاء: إخفاء حركة وهو تبعيض الحركة كمثل {تَأْمَنَّا} يجوز فيها الروم والإشمام، وإخفاء حرف وهو تبعيض الحرف وستر ذاته في الإقلاب والإخفاء الشفوي، وإعدام الحرف وستر ذاته في الإخفاء الحقيقي. وعلامته تعرية النون وعدم تشديد ما بعدها." },
    { t: "banding", judul: { id: "Beda idgham dan ikhfa'", ar: "الفرق بين الإدغام والإخفاء" },
      kiri: { judul: { id: "Idgham", ar: "الإدغام" }, ikon: "layers", warna: "green", poin: [
        { id: "Ada **tasydid**.", ar: "فيه تشديد." },
        { id: "Terjadi **di dalam** huruf (nun masuk ke dalam huruf berikutnya).", ar: "يكون في غيره." } ] },
      kanan: { judul: { id: "Ikhfa'", ar: "الإخفاء" }, ikon: "eye", warna: "blue", poin: [
        { id: "**Tanpa tasydid**.", ar: "لا تشديد فيه." },
        { id: "Terjadi **di hadapan** huruf (nun disamarkan ketika berdekatan).", ar: "يكون عند غيره." } ] } },
    { t: "cek", q: { id: "{فَانْصَبْ} dibaca dengan ikhfa' haqiqi, dan ghunnahnya…", ar: "غنة الإخفاء في {فَانْصَبْ}:" }, o: [{ id: "Ditipiskan", ar: "مرققة" }, { id: "Ditebalkan karena shad huruf tafkhim", ar: "مفخمة لأن الصاد من حروف التفخيم" }, { id: "Dihilangkan", ar: "تحذف" }, { id: "Diidghamkan", ar: "تدغم" }], j: 1, b: { id: "Shad termasuk lima huruf yang ghunnahnya ditebalkan.", ar: "الصاد من الحروف الخمسة المفخمة." } },
    { t: "peta", ikon: "mushaf", pusat: { id: "Tanda hukum nun sukun dan tanwin di mushaf", ar: "علامات الضبط" }, cabang: [
      { id: "Izhhar: **sukun ada** di atas nun; tanwin dua harakat bertumpuk sejajar-tidak, tanda bentuknya jelas", ar: "الإظهار: إثبات السكون على النون" },
      { id: "Idgham: sukun dihapus + huruf sesudahnya **bertasydid** (mim/nun/lam/ra'); wawu-ya' tak ditasydid", ar: "الإدغام: تعرية النون وتشديد ما بعدها" },
      { id: "Iqlab: sukun dihapus + **mim kecil**", ar: "الإقلاب: ميم صغيرة" },
      { id: "Ikhfa': sukun dihapus + tidak ada tasydid; tanwin **berurutan**", ar: "الإخفاء: عدم التشديد وتتابع التنوين" } ] },

    { t: "judul", id: "Hukum Nun dan Mim Bertasydid (Ghunnah)", ar: "حكم الميم والنون المشددتين" },
    { t: "kutipan", ar: "وَغُنَّ مِيمًا ثُمَّ نُونًا شُدِّدَا ... وَسَمِّ كُلاًّ حَرْفَ غُنَّةٍ بَدَا", id: "Ghunnah-kanlah mim dan nun yang bertasydid, dan namakan masing-masing «huruf ghunnah» yang tampak.", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "definisi", judul: { id: "Al-ghunnah", ar: "الغنة" },
      lughah: { id: "Suara berdengung yang keluar dari rongga hidung (*khaisyum*).", ar: "صوت له رنين يخرج من الخيشوم." },
      istilah: { id: "Suara merdu yang **melekat pada tubuh mim dan nun bertasydid**, sifat lazim keduanya, tanpa kerja lidah. **Ukurannya dua harakat**; digambarkan seperti suara kijang betina saat kehilangan anaknya.", ar: "صوت لذيذ مركب في جسم الميم والنون المشددتين وهي صفة لازمة لهما ولا عمل للسان فيه. مقدارها حركتان ومخرجها الخيشوم." } },
    { t: "p", id: "Huruf bertasydid asalnya dua huruf: **yang pertama sukun dan yang kedua berharakat**, lalu yang sukun diidghamkan ke yang berharakat hingga menjadi satu huruf bertasydid. Kadang tasydid sudah ada pada asal huruf untuk wazan, bukan karena idgham, seperti {إِنَّ}. Nun dan mim bertasydid bisa di tengah atau di akhir, dalam isim, fi'il, atau huruf. **Hukumnya: wajib ghunnah.**", ar: "الحرف المشدد أصله مكون من حرفين الأول ساكن والثاني متحرك فيدغم الساكن في المتحرك، وقد يكون التشديد في أصل الحرف للوزن وليس سببه الإدغام كإنَّ، وحكمهما وجوب الغنة." },
    { t: "tabel", judul: { id: "Ghunnah muttashil dan munfashil", ar: "أقسام الغنة" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Penjelasan", ar: "البيان" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Muttashil", ar: "المتصلة" }, { id: "Nun atau mim bertasydid **dalam satu kata** dan tak bisa dipisahkan.", ar: "في كلمة واحدة لا يمكن فصلها." }, { id: "{إِنَّا} — {النَّبَأِ} — {فَأَمَّا}", ar: "إنّا - النبأ - فأمّا" }],
      [{ id: "Munfashil", ar: "المنفصلة" }, { id: "Terjadi pada **dua kata**: bila keduanya bertemu, wajib tasydid dan ghunnah; bila dipisah, tasydid dan ghunnah hilang.", ar: "في كلمتين إذا اجتمعتا وجب التشديد والغنة وإذا تفرقتا ذهبا." }, { id: "{وَلَكُمْ مَا} — {مِنْ نَاصِرِينَ}", ar: "ولكم ما - من ناصرين" }] ] },
    { t: "peta", ikon: "waves", pusat: { id: "Derajat ghunnah", ar: "درجات الغنة" }, cabang: [
      { id: "**Jumhur mutaqaddimin: lima derajat**, dari yang terkuat", ar: "عند جمهور المتقدمين: خمس درجات", sub: [
        { id: "1. Musyaddad: {إِنَّ}, {النَّاسِ}, {الْجَنَّةَ}, {النَّعِيمِ}, {مِثْلَهُنَّ}, {أَمَّا}", ar: "المشدد" },
        { id: "2. Mudgham: {مَنْ يَقُولُ}, {فَمَنْ يَعْمَلْ}, {مِنْ مَالٍ}, {لَكُمْ مَا}", ar: "المدغم" },
        { id: "3. Mukhfa: {أَنْ صَدُّوكُمْ}, {مَنْ جَاءَ}, {مِنْ شَرِّ}, {تَرْمِيهِمْ بِحِجَارَةٍ}", ar: "المخفى" },
        { id: "4. Mudzhar sakin: {مَنْ آمَنَ}, {مَنْ عَمِلَ}", ar: "المظهر الساكن" },
        { id: "5. Mudzhar mutaharrik: {الَّذِينَ آمَنُوا}", ar: "المظهر المتحرك" }] },
      { id: "**Sebagian mutaqaddimin: tiga** — musyaddad, mudgham, mukhfa (izhhar sakin dan mutaharrik tidak dihitung)", ar: "ثلاث درجات: المشدد والمدغم والمخفى" },
      { id: "**Sebagian muta'akhkhirin: enam** — membedakan musyaddad muttashil dan munfashil, mukhfa, mudzhar, dan mutaharrik", ar: "ست درجات عند بعض المتأخرين" } ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Tafkhim dan tarqiq ghunnah; nun lebih 'aghann", ar: "مراتب الغنة" }, id: "Ghunnah **mengikuti huruf sesudahnya**: ditipiskan bila diikuti huruf istifal ({أَنْ كَانَ}), dan ditebalkan bila diikuti huruf tafkhim ({أَنْ صَدُّوكُمْ}). Pada idgham bighunnah dan iqlab ghunnah tipis karena hurufnya tipis. **Nun lebih 'aghann (berghunnah kuat) daripada mim** karena nun keluar dari mulut pada tempat yang lebih dekat ke khaisyum daripada mim yang keluar dari bibir. Waspadai ukuran ghunnah, khususnya pada huruf bertasydid.", ar: "تتبع الغنة ما بعدها ترقيقًا وتفخيمًا في الإخفاء الحقيقي، وترقق في الإدغام بغنة والإقلاب. والنون أغنّ من الميم لخروجها من الفم في منطقة أقرب من الخيشوم. والحذر من عدم ضبط مقدار الغنة وخاصة في المشدد." },

    { t: "judul", id: "Hukum Mim Sukun", ar: "أحكام الميم الساكنة" },
    { t: "kutipan", ar: "أَحْكَامُهَا ثَلاَثَةٌ لِمَنْ ضَبَطْ ... إِخْفَاءٌ ادْغَامٌ وَإِظْهَارٌ فَقَطْ * فَالأَوَّلُ الإِخْفَاءُ عِنْدَ الْبَاءِ ... وَسَمِّهِ الشَّفْوِيَّ لِلْقُرَّاءِ * وَالثَّانِ إِدْغَامٌ بِمِثْلِهَا أَتَى ... وَسَمِّ إِدْغَامًا صَغِيرًا يَا فَتَى * وَالثَّالِثُ الإِظْهَارُ فِي الْبَقِيَّةِ ... مِنْ أَحْرُفٍ وَسَمِّهَا شَفْوِيَّةْ", id: "Hukumnya tiga: ikhfa' (di hadapan ba', disebut syafawi), idgham (pada mim yang sejenis, disebut idgham shaghir), dan izhhar (pada huruf selebihnya, disebut syafawi).", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "p", id: "Mim sukun ialah mim tanpa harakat, **tetap dalam lafaz, tulisan, waqaf, dan washl**; ada pada isim, fi'il, dan huruf, di tengah atau di akhir; ia datang sebelum semua huruf kecuali huruf mad dan hamzah washl. Bila setelah mim sukun datang hamzah washl, mim diharakati **dhammah** untuk menghindari bertemunya dua sukun.", ar: "الميم الساكنة ميم خالية من الحركة ثابتة وصلًا ووقفًا ولفظًا وخطًا، توجد في الأسماء والأفعال والحروف متوسطة ومتطرفة، تأتي قبل جميع الحروف عدا حروف المد، وإن جاء بعدها همزة وصل تحركت وصلًا بالضم." },
    { t: "tabel", judul: { id: "Tiga hukum mim sukun", ar: "أحكام الميم الساكنة الثلاثة" }, kolom: [{ id: "Hukum", ar: "الحكم" }, { id: "Syarat dan keterangan", ar: "الشرط" }, { id: "Contoh", ar: "المثال" }, { id: "Tanda mushaf", ar: "العلامة" }], baris: [
      [{ id: "Ikhfa' syafawi", ar: "الإخفاء الشفوي" }, { id: "Bila setelah mim sukun ada **ba'**; mim disamarkan dengan ghunnah, **hanya dari dua kata**. Disebut syafawi karena mim dan ba' keluar dari kedua bibir.", ar: "إذا وقع بعد الميم الساكنة باء فتخفى مع الغنة ولا يأتي إلا من كلمتين." }, { id: "{يَعْتَصِمْ بِاللَّهِ} — {تَرْمِيهِمْ بِحِجَارَةٍ} — {أَمْ بِظَاهِرٍ مِنَ الْقَوْلِ} — {إِنَّ رَبَّهُمْ بِهِمْ}", ar: "يعتصم بالله" }, { id: "Sukun mim dihapus dan ba' tidak ditasydid.", ar: "حذف السكون وعدم تشديد ما بعدها" }],
      [{ id: "Idgham mitslain shaghir", ar: "الإدغام مثلين صغير" }, { id: "Bila setelah mim sukun ada **mim berharakat**; diidghamkan dengan ghunnah. Dinamai *shaghir* (kecil) dan *mitslain* karena kedua huruf sama dalam makhraj, sifat, nama, dan bentuk. Bisa dalam satu atau dua kata.", ar: "أن يقع بعد الميم الساكنة ميم متحركة فتدغم مع الغنة، ويأتي من كلمة ومن كلمتين." }, { id: "{كَمْ مِنْ فِئَةٍ} — {وَلَكُمْ مَا} — {كُنْتُمْ مُؤْمِنِينَ}", ar: "كم من فئة" }, { id: "Sukun mim pertama dihapus dan mim kedua ditasydid.", ar: "حذف السكون وتشديد الميم الثانية" }],
      [{ id: "Izhhar syafawi", ar: "الإظهار الشفوي" }, { id: "Mengeluarkan mim sukun dari makhrajnya tanpa ghunnah yang tampak, tanpa waqaf atau saktah, bila setelahnya salah satu **26 huruf sisanya**. Delapan huruf dari satu kata, delapan belas dari satu kata dan dua kata; paling ditegaskan pada **fa' dan wawu**.", ar: "إخراج الميم الساكنة من مخرجها من غير غنة ظاهرة ولا وقف ولا سكت إذا أتى بعدها أحد الأحرف الستة والعشرين الباقية." }, { id: "{ذَلِكُمْ أَزْكَى} — {الْحَمْدُ} — {أَنْعَمْتَ} — {هُمْ فِيهَا} — {هُمْ وَأَزْوَاجُهُمْ} — {وَالشَّمْسَ}", ar: "ذلكم أزكى" }, { id: "Sukun mim ditetapkan.", ar: "إثبات السكون على الميم" }] ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Mim sukun bertemu fa' atau wawu", ar: "واحذر لدى واو وفا" }, id: "Al-Jamzuri: *wahdzar ladā wāwin wa fā an takhtafī* — waspadalah jangan menyamarkan mim di hadapan wawu dan fa'. Sebabnya: dekat dengan fa' dalam makhraj, dan sama dengan wawu dalam makhraj (kedua bibir); bila diidghamkan atau diikhfa'kan, suara huruf menjadi tidak jelas dan **pendengar bingung apakah itu mim atau nun**. Agar benar: **ambil posisi tengah (jangan berlebihan)** pada mim.", ar: "ويكون إظهار الميم الساكنة عند الفاء والواو آكدًا وأشد خوفًا من أن يسبق اللفظ إلى إخفائهما، وذلك لقربها من الفاء في المخرج واتحادها مع الواو فيه، وإذا أدغمت يحصل عدم وضوح الحرف المدغم ويلتبس على السامع هل هو ميم أم نون." },
    { t: "catatan", gaya: "faidah", judul: { id: "Dua pendapat pada mim sukun + ba'", ar: "المذهبان في الميم والباء" }, id: "**Pertama: ikhfa'** — dipegang kebanyakan ahli ilmu dan ahli ada', juga Ibnul Jazari dan Abu 'Amr ad-Dani. **Kedua: izhhar** — dipegang sebagian lain, dengan perbedaan ada-tidaknya ghunnah, dan menjadi pilihan Imam Makki bin Abi Thalib. Ibnul Jazari dalam *An-Nasyr*: kedua wajah sah dan diamalkan, namun **ikhfa' lebih utama**. Saat mengikhfa'kan, jangan mengatupkan bibir penuh, cukup sentuhan ringan. Al-Maraghi: makna ikhfa' mim sukun bukan meniadakan zatnya, tetapi **melemahkan dan menyamarkannya** dengan mengurangi tumpuan pada makhrajnya (dua bibir).", ar: "الأول: الإخفاء وعليه عمل أكثر أهل الأداء وقال به ابن الجزري والداني. الثاني: الإظهار وهو اختيار مكي بن أبي طالب. وقال ابن الجزري في النشر: والوجهان صحيحان مأخوذ بهما إلا أن الإخفاء أولى، واحذر عند إخفاء الميم من إطباق الشفتين تمامًا بل تلامس خفيف بينهما." },
    { t: "cek", q: { id: "{وَلَكُمْ مَا} dibaca dengan hukum…", ar: "حكم {وَلَكُمْ مَا}:" }, o: [{ id: "Ikhfa' syafawi", ar: "إخفاء شفوي" }, { id: "Izhhar syafawi", ar: "إظهار شفوي" }, { id: "Idgham mitslain shaghir", ar: "إدغام مثلين صغير" }, { id: "Iqlab", ar: "إقلاب" }], j: 2, b: { id: "Mim sukun bertemu mim berharakat.", ar: "ميم ساكنة بعدها ميم متحركة." } },

    { t: "judul", id: "Lam-Lam Sukun", ar: "أحكام اللامات السواكن" },
    { t: "p", id: "Lam sukun dalam Al-Qur'an dibaca **izhhar** atau **idgham**. Ada **lima jenis**: lam ta'rif (*al*), lam fi'il, lam harf, lam isim, dan lam amr.", ar: "اللام الساكنة هي التي لا حركة لها وتأتي في القرآن إما مظهرة وإما مدغمة، ولها خمسة أنواع: لام التعريف ولام الفعل ولام الحرف ولام الاسم ولام الأمر." },
    { t: "tabel", judul: { id: "Lima jenis lam sukun", ar: "أنواع اللام الساكنة" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Ciri", ar: "الوصف" }, { id: "Hukum", ar: "الحكم" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Lam ta'rif (ال)", ar: "لام التعريف" }, { id: "Masuk pada isim, tambahan di luar bangun kata.", ar: "تدخل على الأسماء وتكون زائدة عن بنية الكلمة" }, { id: "Qamariyah: izhhar; syamsiyah: idgham", ar: "قمرية وشمسية" }, { id: "{الْقَمَرَ} — {الشَّمْسَ}", ar: "القمر والشمس" }],
      [{ id: "Lam fi'il", ar: "لام الفعل" }, { id: "Lam sukun **asli** di tengah atau akhir fi'il (madhi, mudhari', amr).", ar: "لام ساكنة أصلية في الفعل" }, { id: "Izhhar; **idgham bila setelahnya lam atau ra'**", ar: "الإظهار إلا عند اللام والراء" }, { id: "{التَّقَى} — {قُلْنَا} — {يَلْتَقِطْهُ} — {وَقُلْ لَهُمْ} — {وَقُلْ رَبِّ}", ar: "التقى وقلنا" }],
      [{ id: "Lam harf", ar: "لام الحرف" }, { id: "Lam sukun asli pada **hal** dan **bal**.", ar: "لام ساكنة أصلية في هل وبل" }, { id: "Izhhar pada semua huruf; **idgham bila setelahnya lam atau ra'**", ar: "تظهر عند جميع الحروف وتدغم عند اللام والراء" }, { id: "{هَلْ يَسْتَوِي} — {بَلْ عَلِمُوا} — {هَلْ لَكَ} — {بَلْ رَفَعَهُ}", ar: "هل يستوي" }],
      [{ id: "Lam isim", ar: "لام الاسم" }, { id: "Lam sukun asli, selalu di tengah isim.", ar: "ساكنة أصلية دائمًا متوسطة في الاسم" }, { id: "**Selalu izhhar**", ar: "الإظهار دائمًا" }, { id: "{بِسُلْطَانٍ} — {مُلْكُ} — {أَلْفَافًا} — {سَلْسَبِيلًا}", ar: "بسلطان" }],
      [{ id: "Lam amr", ar: "لام الأمر" }, { id: "Lam sukun **tambahan**, masuk pada fi'il mudhari' hingga bermakna perintah, dengan syarat didahului wawu, fa', atau tsumma.", ar: "زائدة تدخل على المضارع فتفيد الأمر بشرط أن يسبقها الواو أو الفاء أو ثم" }, { id: "**Wajib izhhar** mutlak", ar: "وجوب الإظهار مطلقًا" }, { id: "{وَلْيُوفُوا} — {فَلْيَنْظُرْ} — {ثُمَّ لْيَقْطَعْ}", ar: "وليوفوا فلينظر ثم ليقطع" }] ] },
    { t: "kutipan", ar: "لِلَامِ أَلْ حَالاَنِ قَبْلَ الأَحْرُفِ ... أُولاَهُمَا إِظْهَارُهَا فَلْتَعْرِفِ * قَبْلَ أَرْبَعٍ مَعْ عَشْرَةٍ خُذْ عِلْمَهُ ... مِنْ ابْغِ حَجَّكَ وَخَفْ عَقِيمَهُ * ثَانِيهِمَا إِدْغَامُهَا فِي أَرْبَعٍ ... وَعَشْرَةٍ أَيْضًا وَرَمْزُهَا فَعِ * طِبْ ثُمَّ صِلْ رَحْمًا تَفُزْ ضِفْ ذَا نِعَمْ ... دَعْ سُوءَ ظَنٍّ زُرْ شَرِيفًا لِلْكَرَمْ", id: "Lam *al* punya dua keadaan: izhhar sebelum empat belas huruf (rumus *ibgi hajjaka wa khaf 'aqimah*), dan idgham pada empat belas huruf lainnya (rumus *thib tsumma shil rahiman…*).", oleh: "Imam Al-Jamzuri, Tuhfatul-Athfal" },
    { t: "banding", judul: { id: "Lam ta'rif: qamariyah dan syamsiyah", ar: "اللام القمرية والشمسية" },
      kiri: { judul: { id: "Qamariyah (izhhar qamari)", ar: "القمرية" }, ikon: "moon", warna: "blue", poin: [
        { id: "14 huruf: **ا ب غ ح ج ك و خ ف ع ق ي م ه** (*ibgi hajjaka wa khaf 'aqimah*).", ar: "ابغ حجك وخف عقيمه." },
        { id: "Sebab: **jauhnya makhraj** lam dari huruf-huruf itu. Lam seakan bintang dan hurufnya bulan.", ar: "بعد مخرج اللام عن حروفه." },
        { id: "Contoh: {الْقَمَرَ} {الْأَرْضِ} {الْفَلَقِ} {الْعَلَقَ} {الْمَسَدِ}. Dapat dibuang dari kata tanpa merusaknya: *qamar, ardh, bab*.", ar: "القمر والأرض والفلق" },
        { id: "Tanda di mushaf: kepala ha'/kha' kecil (sukun) pada lam; huruf sesudahnya berharakat ringan.", ar: "رأس حاء صغيرة" } ] },
      kanan: { judul: { id: "Syamsiyah (idgham syamsi)", ar: "الشمسية" }, ikon: "sun", warna: "amber", poin: [
        { id: "14 huruf sisanya (rumus *thib tsumma shil rahman…*).", ar: "باقي الحروف." },
        { id: "Sebab: **kesamaan** (lam) dan **kedekatan** dengan huruf lain. Lam yang diidghamkan seperti bintang, hurufnya seperti matahari.", ar: "التماثل والتقارب." },
        { id: "Contoh: {الشَّمْسَ} {الطَّامَّةُ} {الصَّاخَّةُ} {السَّمَاءِ}.", ar: "الشمس والطامة والصاخة" },
        { id: "Tanda di mushaf: lam **tanpa tanda**, huruf sesudahnya **bertasydid**.", ar: "لا علامة عليها والحرف بعدها مشدد" } ] } },
    { t: "akordion", judul: { id: "Dua jenis lam ta'rif dan lam-lam lainnya (detail)", ar: "تفصيلات اللامات" }, item: [
      { judul: { id: "Lam yang kata tak lurus tanpanya", ar: "اللام التي لا تستقيم الكلمة بدونها" }, id: "Hukumnya: **idgham** bila setelahnya lam, seperti isim maushul (*alladzi, allati, alladzina*) dan lam pertama pada lafzhul-jalalah; **izhhar** bila setelahnya ya' seperti {الْيَسَعَ} atau hamzah seperti {الْآنَ}.", ar: "حكمها الإدغام إذا أتى بعدها لام كالأسماء الموصولة وكذا اللام الأولى في لفظ الجلالة، والإظهار إذا أتى بعدها ياء مثل {الْيَسَعَ} أو همزة مثل {الْآنَ}." },
      { judul: { id: "Lam fi'il sebelum nun", ar: "لام الفعل والنون" }, id: "Idgham *lam* ke nun tidak berlaku kecuali *lam alif* pada nun yang **wajib** diidghamkan karena sangat sering di Al-Qur'an dan lebih butuh keringanan. Lam fi'il sebelum nun jarang, sehingga bila diizhharkan tak berat; yang menentukan adalah penukilan riwayat.", ar: "لا يصح أن يدغم في النون شيء مما أدغمت هي فيه باستثناء إدغام لام ألف النون وجوبًا لأنها كثيرة الوقوع، بخلاف لام الفعل قبل النون فقليلة الوقوع، والعبرة بالنقل." },
      { judul: { id: "{بَلْ رَانَ}", ar: "بل ران" }, id: "Dikecualikan dari idgham lam harf: {بَلْ رَانَ} (Al-Muthaffifin) dibaca **izhhar** karena wajib saktah dan saktah mencegah idgham. Setelah *hal* tidak ada ra' dalam Al-Qur'an.", ar: "ويستثنى {بَلْ رَانَ} في المطففين فبالإظهار لوجوب السكت والسكت يمنع الإدغام، ولم يقع راء بعد هل في القرآن." } ] },

    { t: "tanya", q: { id: "Mengapa nun sukun dan tanwin dizhharkan di hadapan huruf halq?", ar: "لماذا تظهر النون الساكنة والتنوين عند حروف الحلق؟" }, a: { id: "Karena makhraj nun sukun (ujung lidah) **jauh** dari makhraj huruf halq (tenggorokan): idgham tak tepat karena tak ada pembenar, ikhfa' dekat dengan idgham, dan iqlab hanyalah sarana menuju ikhfa'.", ar: "لبعد مخرج النون الساكنة عن مخرج حروف الحلق، فلم يحسن الإدغام لعدم المسوّغ ولا الإخفاء لقربه من الإدغام ولا القلب لأنه وسيلة للإخفاء." } },
    { t: "tanya", q: { id: "Mengapa nun sukun diizhharkan dalam {الدُّنْيَا} dan {صِنْوَانٌ}?", ar: "لماذا تظهر النون في {الدُّنْيَا} و{صِنْوَانٌ}؟" }, a: { id: "Karena nun dan huruf ya'/wawu berada dalam **satu kata**; bila diidghamkan akan tertukar dengan kata bertasydid asli (*ad-duyya*, *shuwwan*). Ini disebut izhhar muthlaq dan ada di empat tempat.", ar: "لئلا يلتبس بالمضعّف إذ لو أدغمت لقيل الدُّيَّا صُوَّان، ويسمى الإظهار المطلق وورد في أربعة مواضع." } },

    { t: "balik", judul: { id: "Kartu hafalan huruf", ar: "بطاقات الحروف" }, item: [
      { depan: { id: "Huruf izhhar halqi?", ar: "حروف الإظهار" }, belakang: { id: "ء ه ع ح غ خ — *akhi haka 'ilman hazahu ghaira khasir*", ar: "أخي هاك علما حازه غير خاسر" } },
      { depan: { id: "Huruf idgham?", ar: "حروف الإدغام" }, belakang: { id: "ي ر م ل و ن — *yarmulun*; bighunnah: *yanmu*; bilaghunnah: ل ر", ar: "يرملون" } },
      { depan: { id: "Huruf iqlab?", ar: "حرف الإقلاب" }, belakang: { id: "Ba' saja", ar: "الباء فقط" } },
      { depan: { id: "15 huruf ikhfa'?", ar: "حروف الإخفاء" }, belakang: { id: "ص ذ ث ك ج ش ق س د ط ز ف ت ض ظ", ar: "صف ذا ثنا كم جاد شخص قد سما دم طيبا زد في تقى ضع ظالما" } },
      { depan: { id: "Huruf qamariyah?", ar: "القمرية" }, belakang: { id: "ا ب غ ح ج ك و خ ف ع ق ي م ه — *ibgi hajjaka wa khaf 'aqimah*", ar: "ابغ حجك وخف عقيمه" } },
      { depan: { id: "Ukuran ghunnah?", ar: "مقدار الغنة" }, belakang: { id: "Dua harakat; dari khaisyum", ar: "حركتان من الخيشوم" } } ] },

    { t: "ringkasan", item: [
      { id: "Nun muncul dalam tiga bentuk: berharakat, bertasydid (ghunnah dua harakat), dan sukun (empat hukum).", ar: "للنون ثلاثة أشكال، والساكنة لها أربعة أحكام." },
      { id: "**Izhhar halqi** pada ء ه ع ح غ خ; **idgham** pada يرملون (bighunnah: ينمو, bilaghunnah: لر); **iqlab** pada ب; **ikhfa' haqiqi** pada 15 huruf sisanya.", ar: "الإظهار الحلقي والإدغام والإقلاب والإخفاء الحقيقي." },
      { id: "Idgham hanya dalam dua kata; dalam satu kata wajib izhhar: {الدُّنْيَا} {صِنْوَانٌ} {قِنْوَانٌ} {بُنْيَانٌ}. Pengecualian: Yasin dan Nun (izhhar riwayah), {مَنْ رَاقٍ} (saktah).", ar: "الإدغام من كلمتين، وفي كلمة واحدة الإظهار المطلق." },
      { id: "Nun dan mim bertasydid wajib ghunnah dua harakat; derajat ghunnah mutaqaddimin lima, muta'akhkhirin enam.", ar: "الغنة واجبة في المشددتين وهي حركتان." },
      { id: "Mim sukun: ikhfa' syafawi (ba'), idgham mitslain shaghir (mim), izhhar syafawi (selain itu), paling ditegaskan pada fa' dan wawu.", ar: "الميم الساكنة: إخفاء شفوي وإدغام مثلين صغير وإظهار شفوي." },
      { id: "Lam sukun lima jenis: ta'rif (qamariyah/syamsiyah), fi'il, harf, isim, amr; idgham hanya bila bertemu lam atau ra' pada lam fi'il dan harf; lam isim dan lam amr selalu izhhar.", ar: "اللامات الخمس وأحكامها." } ] }
  ],
  istilah: [
    { ar: "الإظهار الحلقي", latin: "al-izhhar al-halqi", id: "izhhar huruf tenggorokan", def: { id: "Melafalkan nun sukun atau tanwin dengan jelas bila setelahnya salah satu enam huruf halq.", ar: "إخراج النون الساكنة والتنوين من مخرجهما بلا غنة إذا أتى بعدهما حرف حلقي." } },
    { ar: "الإدغام", latin: "al-idgham", id: "memasukkan", def: { id: "Memasukkan huruf sukun ke dalam huruf berharakat hingga menjadi satu huruf bertasydid.", ar: "إدخال حرف ساكن في متحرك بحيث يصيران حرفًا واحدًا مشددًا." } },
    { ar: "الإقلاب", latin: "al-iqlab", id: "memalingkan", def: { id: "Mengubah nun sukun atau tanwin menjadi mim yang disamarkan dengan ghunnah bila bertemu ba'.", ar: "قلب النون الساكنة أو التنوين ميمًا مخفاة بغنة عند الباء." } },
    { ar: "الإخفاء الحقيقي", latin: "al-ikhfa' al-haqiqi", id: "penyamaran sejati", def: { id: "Pelafalan nun sukun atau tanwin tengah antara izhhar dan idgham tanpa tasydid dengan ghunnah.", ar: "النطق بالحرف بحالة وسط بين الإظهار والإدغام عار عن التشديد مع بقاء الغنة." } },
    { ar: "الغنة", latin: "al-ghunnah", id: "dengung hidung", def: { id: "Suara merdu dari khaisyum, sifat lazim mim dan nun bertasydid, dua harakat.", ar: "صوت لذيذ من الخيشوم مقداره حركتان." } },
    { ar: "الإدغام الكامل", latin: "al-idgham al-kamil", id: "idgham sempurna", def: { id: "Idgham yang hilang zat dan sifat hurufnya (tanpa ghunnah), pada lam dan ra'.", ar: "الإدغام بلا غنة لذهاب الحرف وصفته." } },
    { ar: "الإدغام الناقص", latin: "al-idgham an-naqish", id: "idgham kurang", def: { id: "Idgham yang hilang zat huruf tetapi tersisa sifat (ghunnah).", ar: "الإدغام بغنة لذهاب الذات وبقاء الصفة." } },
    { ar: "الإخفاء الشفوي", latin: "al-ikhfa' asy-syafawi", id: "ikhfa' bibir", def: { id: "Mim sukun disamarkan dengan ghunnah bila bertemu ba' dari dua kata.", ar: "إخفاء الميم الساكنة عند الباء مع الغنة." } },
    { ar: "اللام القمرية", latin: "al-lam al-qamariyah", id: "lam bulan", def: { id: "Lam ta'rif yang diizhharkan sebelum 14 huruf *ibgi hajjaka wa khaf 'aqimah*.", ar: "لام أل المظهرة قبل أربعة عشر حرفًا." } },
    { ar: "اللام الشمسية", latin: "al-lam asy-syamsiyah", id: "lam matahari", def: { id: "Lam ta'rif yang diidghamkan pada 14 huruf sisanya.", ar: "لام أل المدغمة في باقي الحروف." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tanwin menurut Syaikh adalah…", ar: "التنوين:" }, o: [{ id: "Nun sukun asli di tengah kata", ar: "نون ساكنة أصلية متوسطة" }, { id: "Nun sukun tambahan, bukan untuk taukid, pada akhir isim", ar: "نون ساكنة زائدة لغير التوكيد تلحق آخر الأسماء" }, { id: "Mim sukun di akhir kata", ar: "ميم ساكنة" }, { id: "Harakat panjang", ar: "حركة طويلة" }], j: 1, b: { id: "Tanwin tetap dalam lafaz dan washl, hilang dalam tulisan dan waqaf.", ar: "ثابت لفظًا ووصلًا ويفارقه خطًا ووقفًا." } },
      { q: { id: "{أَنْعَمْتَ} dibaca dengan hukum…", ar: "حكم {أَنْعَمْتَ}:" }, o: [{ id: "Ikhfa' haqiqi", ar: "إخفاء حقيقي" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Izhhar halqi", ar: "إظهار حلقي" }, { id: "Idgham bighunnah", ar: "إدغام بغنة" }], j: 2, b: { id: "'Ain termasuk huruf halq.", ar: "العين من حروف الحلق." } },
      { q: { id: "{مِنْ وَاقٍ} dibaca…", ar: "حكم {مِنْ وَاقٍ}:" }, o: [{ id: "Izhhar", ar: "إظهار" }, { id: "Idgham bilaghunnah", ar: "إدغام بغير غنة" }, { id: "Idgham bighunnah (dua harakat)", ar: "إدغام بغنة" }, { id: "Ikhfa'", ar: "إخفاء" }], j: 2, b: { id: "Wawu termasuk huruf *yanmu*.", ar: "الواو من ينمو." } },
      { q: { id: "Dalam {مِنْ رَسُولٍ} nun sukun…", ar: "{مِنْ رَسُولٍ}:" }, o: [{ id: "Diidghamkan tanpa ghunnah", ar: "تدغم بغير غنة" }, { id: "Diidghamkan dengan ghunnah", ar: "تدغم بغنة" }, { id: "Diizhharkan", ar: "تظهر" }, { id: "Diikhfa'kan", ar: "تخفى" }], j: 0, b: { id: "Ra' adalah salah satu huruf idgham bilaghunnah.", ar: "الراء من حرفي بغير غنة." } },
      { q: { id: "Huruf iqlab ialah…", ar: "حرف الإقلاب:" }, o: [{ id: "Mim", ar: "الميم" }, { id: "Ba'", ar: "الباء" }, { id: "Fa'", ar: "الفاء" }, { id: "Wawu", ar: "الواو" }], j: 1, b: { id: "Iqlab hanya pada ba'.", ar: "الباء وحدها." } },
      { q: { id: "Pada {الدُّنْيَا} nun sukun dibaca…", ar: "النون في {الدُّنْيَا}:" }, o: [{ id: "Idgham bighunnah", ar: "إدغام بغنة" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Izhhar muthlaq", ar: "إظهار مطلق" }, { id: "Ikhfa'", ar: "إخفاء" }], j: 2, b: { id: "Dalam satu kata wajib izhhar agar tak tertukar dengan kata bertasydid.", ar: "في كلمة واحدة وجب الإظهار." } },
      { q: { id: "Pada {يس وَالْقُرْآنِ} menurut Hafsh nun dibaca…", ar: "النون في {يس وَالْقُرْآنِ} عند حفص:" }, o: [{ id: "Idgham bighunnah", ar: "إدغام بغنة" }, { id: "Izhhar riwayah", ar: "إظهار رواية" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Ikhfa'", ar: "إخفاء" }], j: 1, b: { id: "Karena nun terpisah secara hukum dari wawu.", ar: "للانفصال الحكمي." } },
      { q: { id: "{فَانْصَبْ} termasuk…", ar: "{فَانْصَبْ}:" }, o: [{ id: "Ikhfa' haqiqi dengan ghunnah tebal", ar: "إخفاء حقيقي بغنة مفخمة" }, { id: "Izhhar", ar: "إظهار" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Idgham", ar: "إدغام" }], j: 0, b: { id: "Shad adalah huruf ikhfa' yang tebal.", ar: "الصاد من حروف التفخيم." } },
      { q: { id: "Ukuran ghunnah pada nun dan mim bertasydid adalah…", ar: "مقدار الغنة:" }, o: [{ id: "Satu harakat", ar: "حركة" }, { id: "Dua harakat", ar: "حركتان" }, { id: "Empat harakat", ar: "أربع" }, { id: "Enam harakat", ar: "ست" }], j: 1, b: { id: "Dua harakat dari khaisyum.", ar: "حركتان من الخيشوم." } },
      { q: { id: "{يَعْتَصِمْ بِاللَّهِ} dibaca…", ar: "{يَعْتَصِمْ بِاللَّهِ}:" }, o: [{ id: "Idgham mitslain shaghir", ar: "إدغام مثلين صغير" }, { id: "Izhhar syafawi", ar: "إظهار شفوي" }, { id: "Ikhfa' syafawi", ar: "إخفاء شفوي" }, { id: "Iqlab", ar: "إقلاب" }], j: 2, b: { id: "Mim sukun bertemu ba'.", ar: "ميم ساكنة بعدها باء." } },
      { q: { id: "Mim sukun paling ditegaskan izhharnya di hadapan…", ar: "أشد الإظهار للميم الساكنة عند:" }, o: [{ id: "Fa' dan wawu", ar: "الفاء والواو" }, { id: "Ba'", ar: "الباء" }, { id: "Mim", ar: "الميم" }, { id: "Nun", ar: "النون" }], j: 0, b: { id: "Agar tidak terikhfa' karena dekat dengan keduanya.", ar: "خوف أن يسبق اللفظ إلى إخفائهما." } },
      { q: { id: "Lam yang hukumnya selalu izhhar tanpa kecuali adalah…", ar: "لام حكمها الإظهار دائمًا:" }, o: [{ id: "Lam fi'il", ar: "لام الفعل" }, { id: "Lam harf", ar: "لام الحرف" }, { id: "Lam isim", ar: "لام الاسم" }, { id: "Lam syamsiyah", ar: "لام شمسية" }], j: 2, b: { id: "Lam isim dan lam amr selalu izhhar.", ar: "لام الاسم ولام الأمر." } }
    ],
    bs: [
      { t: { id: "Semua fi'il tidak pernah bertanwin dalam Al-Qur'an.", ar: "الأفعال لا تنون ولا يرد منها شيء في القرآن." }, j: false, b: { id: "Ada dua: {وَلَيَكُونًا} (Yusuf) dan {لَنَسْفَعًا} (Al-'Alaq).", ar: "ورد فعلان منونان." } },
      { t: { id: "Idgham nun sukun hanya terjadi pada dua kata.", ar: "الإدغام يكون من كلمتين." }, j: true },
      { t: { id: "Huruf idgham bighunnah adalah yang terkumpul dalam kata *yanmu*.", ar: "حروف الإدغام بغنة: ينمو." }, j: true },
      { t: { id: "Dalam {صِنْوَانٌ} nun diidghamkan ke wawu.", ar: "تدغم النون في {صِنْوَانٌ}." }, j: false, b: { id: "Wajib izhhar dalam satu kata agar tidak tertukar dengan kata bertasydid.", ar: "وجب الإظهار لئلا يشتبه." } },
      { t: { id: "Iqlab: nun diubah menjadi mim lalu disamarkan dengan ghunnah.", ar: "الإقلاب قلب النون ميمًا مخفاة بغنة." }, j: true },
      { t: { id: "Ikhfa' haqiqi disertai tasydid.", ar: "الإخفاء الحقيقي فيه تشديد." }, j: false, b: { id: "Ikhfa' tanpa tasydid; yang bertasydid adalah idgham.", ar: "الإدغام فيه تشديد والإخفاء لا." } },
      { t: { id: "Huruf ikhfa' ada lima belas.", ar: "حروف الإخفاء خمسة عشر." }, j: true },
      { t: { id: "Ghunnah ikhfa' ditipiskan pada ص ض ط ظ ق.", ar: "ترقق الغنة عند ص ض ط ظ ق." }, j: false, b: { id: "Pada kelima huruf itu ghunnah ditebalkan.", ar: "تفخم." } },
      { t: { id: "Idgham mitslain shaghir terjadi pada mim sukun yang bertemu mim berharakat.", ar: "الإدغام الصغير ميم ساكنة بعدها ميم متحركة." }, j: true },
      { t: { id: "Lam amr hukumnya idgham bila bertemu ra'.", ar: "لام الأمر تدغم عند الراء." }, j: false, b: { id: "Lam amr wajib izhhar mutlak.", ar: "وجوب الإظهار مطلقًا." } }
    ],
    jodoh: [
      { a: { id: "Izhhar halqi", ar: "الإظهار الحلقي" }, b: { id: "ء ه ع ح غ خ", ar: "ستة حلقية" } },
      { a: { id: "Idgham bilaghunnah", ar: "إدغام بغير غنة" }, b: { id: "ل ر (*lam nar*)", ar: "اللام والراء" } },
      { a: { id: "Iqlab", ar: "الإقلاب" }, b: { id: "Ba' menjadi mim disamarkan", ar: "الباء" } },
      { a: { id: "Mim sukun + ba'", ar: "ميم ساكنة + باء" }, b: { id: "Ikhfa' syafawi", ar: "إخفاء شفوي" } },
      { a: { id: "Mim sukun + mim", ar: "ميم ساكنة + ميم" }, b: { id: "Idgham mitslain shaghir", ar: "إدغام مثلين صغير" } },
      { a: { id: "{بَلْ رَانَ}", ar: "بل ران" }, b: { id: "Izhhar karena saktah", ar: "إظهار لوجوب السكت" } },
      { a: { id: "{الْقَمَرَ}", ar: "القمر" }, b: { id: "Lam qamariyah (izhhar)", ar: "لام قمرية" } },
      { a: { id: "{الشَّمْسَ}", ar: "الشمس" }, b: { id: "Lam syamsiyah (idgham)", ar: "لام شمسية" } }
    ],
    urut: { t: { id: "Urutkan derajat ghunnah menurut jumhur mutaqaddimin, dari yang terkuat.", ar: "رتب درجات الغنة عند جمهور المتقدمين من الأقوى." },
      item: [{ id: "Musyaddad ({إِنَّ})", ar: "المشدد" }, { id: "Mudgham ({مَنْ يَقُولُ})", ar: "المدغم" }, { id: "Mukhfa ({مِنْ شَرِّ})", ar: "المخفى" }, { id: "Mudzhar sakin ({مَنْ آمَنَ})", ar: "المظهر الساكن" }, { id: "Mudzhar mutaharrik ({الَّذِينَ آمَنُوا})", ar: "المظهر المتحرك" }] },
    isian: [
      { t: { id: "Tanda sukun di mushaf berbentuk kepala huruf ______ dari kata *khafif*.", ar: "السكون رأس ______ من خفيف." }, j: { id: "kha'", ar: "خاء" }, x: [{ id: "jim", ar: "جيم" }, { id: "sin", ar: "سين" }, { id: "mim", ar: "ميم" }] },
      { t: { id: "Huruf idgham dirangkum dalam kata ______.", ar: "حروف الإدغام في كلمة ______." }, j: { id: "yarmulun", ar: "يرملون" }, x: [{ id: "yanmu", ar: "ينمو" }, { id: "lam nar", ar: "لم نر" }, { id: "hajjak", ar: "حجك" }] },
      { t: { id: "Dalam {الدُّنْيَا} wajib ______ agar tidak tertukar dengan kata bertasydid.", ar: "في {الدُّنْيَا} وجب ______." }, j: { id: "izhhar", ar: "الإظهار" }, x: [{ id: "idgham", ar: "الإدغام" }, { id: "iqlab", ar: "الإقلاب" }, { id: "ikhfa'", ar: "الإخفاء" }] },
      { t: { id: "Ghunnah keluar dari ______.", ar: "مخرج الغنة ______." }, j: { id: "khaisyum", ar: "الخيشوم" }, x: [{ id: "tenggorokan", ar: "الحلق" }, { id: "bibir", ar: "الشفتان" }, { id: "langit-langit", ar: "الحنك" }] },
      { t: { id: "Lam ta'rif diizhharkan sebelum huruf yang dirangkum dalam *ibgi hajjaka wa khaf ______*.", ar: "ابغ حجك وخف ______." }, j: { id: "'aqimah", ar: "عقيمه" }, x: [{ id: "tsana", ar: "ثنا" }, { id: "rahman", ar: "رحما" }, { id: "zhaliman", ar: "ظالما" }] }
    ],
    pilah: { t: { id: "Pilah hukum berikut: IZHHAR HALQI, IDGHAM, IQLAB, atau IKHFA'?", ar: "صنف الأمثلة حسب الحكم." },
      kategori: [{ id: "Izhhar halqi", ar: "إظهار حلقي" }, { id: "Idgham", ar: "إدغام" }, { id: "Iqlab", ar: "إقلاب" }, { id: "Ikhfa' haqiqi", ar: "إخفاء حقيقي" }],
      item: [
        { t: { id: "{مِنْ هَادٍ}", ar: "مِنْ هَادٍ" }, k: 0 },
        { t: { id: "{فَمَنْ يَعْمَلْ}", ar: "فَمَنْ يَعْمَلْ" }, k: 1 },
        { t: { id: "{سَمِيعٌ بَصِيرٌ}", ar: "سَمِيعٌ بَصِيرٌ" }, k: 2 },
        { t: { id: "{أَنْكَالًا}", ar: "أَنْكَالًا" }, k: 3 },
        { t: { id: "{مِنْ لَدُنْ}", ar: "مِنْ لَدُنْ" }, k: 1 },
        { t: { id: "{أَنْبِئْهُمْ}", ar: "أَنْبِئْهُمْ" }, k: 2 },
        { t: { id: "{مِنْ خَوْفٍ}", ar: "مِنْ خَوْفٍ" }, k: 0 },
        { t: { id: "{عَمَلًا صَالِحًا}", ar: "عَمَلًا صَالِحًا" }, k: 3 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "ما الفرق بين النون الساكنة والتنوين؟", id: "Apa perbedaan nun sukun dan tanwin?" },
      j: { ar: "النون الساكنة: لا حركة لها، توجد في الأسماء والأفعال والحروف، أصلية وزائدة، متوسطة ومتطرفة، ثابتة لفظًا وخطًا ووقفًا ووصلًا. أما التنوين: نون ساكنة زائدة لغير التوكيد تلحق آخر الأسماء، ثابتة لفظًا ووصلًا وتفارق خطًا ووقفًا، ورمزه فتحتان أو كسرتان أو ضمتان.",
           id: "**Nun sukun**: tanpa harakat; pada isim, fi'il, dan huruf; asli atau tambahan; di tengah atau akhir; tetap dalam lafaz, tulisan, waqaf, dan washl. **Tanwin**: nun sukun tambahan bukan taukid pada akhir isim; tetap dalam lafaz dan washl, hilang dalam tulisan dan waqaf; lambangnya dua fathah/kasrah/dhammah." } },
    { t: { ar: "اذكر أحكام النون الساكنة والتنوين الأربعة مع حروفها ومثال لكل حكم.", id: "Sebutkan empat hukum nun sukun dan tanwin beserta hurufnya dan satu contoh tiap hukum." },
      j: { ar: "الإظهار الحلقي: ء ه ع ح غ خ، مثل {مِنْ هَادٍ}. الإدغام: ي ر م ل و ن (يرملون)، بغنة في ينمو وبغير غنة في اللام والراء، مثل {فَمَنْ يَعْمَلْ} و{مِنْ رَسُولٍ}. الإقلاب: الباء، مثل {مِنْ بَعْدِ}. الإخفاء الحقيقي: خمسة عشر حرفًا (صف ذا ثنا كم جاد شخص قد سما دم طيبا زد في تقى ضع ظالما)، مثل {فَانْصَبْ}.",
           id: "**Izhhar halqi**: ء ه ع ح غ خ — {مِنْ هَادٍ}. **Idgham**: ي ر م ل و ن (*yarmulun*); bighunnah pada *yanmu*, bilaghunnah pada lam dan ra' — {فَمَنْ يَعْمَلْ}, {مِنْ رَسُولٍ}. **Iqlab**: ba' — {مِنْ بَعْدِ}. **Ikhfa' haqiqi**: 15 huruf — {فَانْصَبْ}." } },
    { t: { ar: "ما المواضع التي تظهر فيها النون ولا تدغم مع أنها قبل أحد حروف الإدغام؟ ولماذا؟", id: "Di mana nun tidak diidghamkan padahal bertemu huruf idgham? Mengapa?" },
      j: { ar: "في كلمة واحدة: الدنيا وصنوان وقنوان وبنيان فيجب الإظهار المطلق لئلا يشتبه بالمضعّف. وفي {يس وَالْقُرْآنِ} و{ن وَالْقَلَمِ} إظهار رواية عند حفص للانفصال الحكمي. وفي {مَنْ رَاقٍ} لوجوب السكت الذي يمنع الإدغام. ويستثنى {طسم} فتدغم النون في الميم.",
           id: "(1) Dalam **satu kata**: {الدُّنْيَا} {صِنْوَانٌ} {قِنْوَانٌ} {بُنْيَانٌ} — izhhar muthlaq agar tak tertukar dengan kata bertasydid. (2) {يس وَالْقُرْآنِ} dan {ن وَالْقَلَمِ} — izhhar riwayah menurut Hafsh karena nun terpisah secara hukum. (3) {مَنْ رَاقٍ} — saktah mencegah idgham. Pengecualian: {طسم} nun diidghamkan ke mim." } },
    { t: { ar: "ما حكم الميم الساكنة قبل الباء، وما المذهبان فيه؟", id: "Apa hukum mim sukun sebelum ba', dan apa dua pendapatnya?" },
      j: { ar: "إخفاء شفوي، وسببه اتحاد مخرجي الميم والباء وتقاربهما في الصفات. وفيه مذهبان: الإخفاء وعليه أكثر أهل الأداء وقال به ابن الجزري والداني، والإظهار وهو اختيار مكي بن أبي طالب؛ وقال ابن الجزري: الوجهان صحيحان إلا أن الإخفاء أولى.",
           id: "**Ikhfa' syafawi**; sebabnya mim dan ba' satu makhraj dan dekat dalam sifat. Dua pendapat: **ikhfa'** (kebanyakan ahli ada', Ibnul Jazari, ad-Dani) dan **izhhar** (pilihan Makki bin Abi Thalib). Ibnul Jazari: keduanya sah, namun ikhfa' lebih utama." } },
    { t: { ar: "عدِّد اللامات السواكن الخمس وحكم كل واحدة منها مع مثال.", id: "Sebutkan lima lam sukun, hukum tiap jenis, dan contohnya." },
      j: { ar: "لام التعريف: قمرية إظهار {الْقَمَرَ} وشمسية إدغام {الشَّمْسَ}. لام الفعل: إظهار إلا عند اللام والراء {وَقُلْ لَهُمْ} {وَقُلْ رَبِّ}. لام الحرف (هل وبل): إظهار وتدغم عند اللام والراء {بَلْ رَفَعَهُ}، ويستثنى {بَلْ رَانَ} للسكت. لام الاسم: إظهار دائمًا {مُلْكُ}. لام الأمر: إظهار مطلقًا {وَلْيُوفُوا}.",
           id: "**Ta'rif**: qamariyah izhhar ({الْقَمَرَ}), syamsiyah idgham ({الشَّمْسَ}). **Fi'il**: izhhar kecuali sebelum lam/ra' ({وَقُلْ لَهُمْ}, {وَقُلْ رَبِّ}). **Harf** (*hal, bal*): izhhar, idgham sebelum lam/ra' ({بَلْ رَفَعَهُ}), kecuali {بَلْ رَانَ} karena saktah. **Isim**: selalu izhhar ({مُلْكُ}). **Amr**: wajib izhhar ({وَلْيُوفُوا})." } }
  ]
});
