/* Nahwu — Pertemuan 16: I'rab Mahalli dan Cara Mengi'rab */
Kuliah.pertemuan("nahwu", {
  no: 16, motif: "mahall", tema: 6, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/623",
  bab: { id: "I'rab mahalli & cara mengi'rab", ar: "الإعراب المحلي وكيفية الإعراب" },
  judul: { id: "I'rab Mahalli dan Cara Mengi'rab", ar: "الإعراب المحلي وكيفية الإعراب" },
  ringkas: {
    id: "Pelajaran penutup: **i'rab mahalli** — kata **mabni** yang menempati posisi rafa', nashab, jarr, atau jazm tidak berubah akhirnya, tetapi dikatakan \"*fi mahalli* …\" sesuai posisinya; demikian pula **jumlah** (kalimat) yang menempati posisi kata. Lalu **cara mengi'rab**: mengenali isim/fi'il/huruf, mabni/mu'rab, serta marfu'/manshub/majrur/majzum beserta sebabnya — demi menjaga lisan dari *lahn*. Dilengkapi latihan membaca kalimat tanpa harakat dan tathbiq Surah Al-'Ashr.",
    ar: "الإعراب المحلي: إذا وقعت كلمة مبنية في موضع من مواضع الرفع أو النصب أو الجر أو الجزم لا يتغير آخرها ويقال إنها في محل كذا، وكذا إعراب الجمل. ثم كيفية الإعراب وثمرات علم النحو، وتمرين على ضبط الجمل، والتطبيق على سورة العصر."
  },
  tujuan: [
    { id: "Mendefinisikan i'rab mahalli.", ar: "تعريف الإعراب المحلي." },
    { id: "Menyebut kata-kata yang mendapat i'rab mahalli.", ar: "ذكر مواضع الإعراب المحلي." },
    { id: "Mengi'rab kata mabni dan jumlah dengan ungkapan \"fi mahalli…\".", ar: "إعراب المبني والجمل محليًا." },
    { id: "Membaca dan mengi'rab kalimat tanpa harakat dengan benar.", ar: "ضبط الجمل وإعرابها." }
  ],
  isi: [
    { t: "judul", id: "Apa Itu I'rab Mahalli?", ar: "ما الإعراب المحلي؟" },
    { t: "definisi", istilah: { id: "**Jika kata mabni terletak pada posisi rafa', nashab, jarr, atau jazm, akhirnya tidak berubah (karena mabni), dan dikatakan bahwa ia *fi mahalli* raf' / nashb / jarr / jazm sesuai posisinya dalam kalimat.**", ar: "إذا وقعت كلمة مبنية في موضع من مواضع الرفع أو النصب أو الجر أو الجزم لا يتغير آخرها، ويقال عنها إنها في محل رفع أو نصب أو جر أو جزم على حسب موقعها في الجملة." } },
    { t: "banding", judul: { id: "Kata mu'rab vs kata mabni di posisi yang sama", ar: "المعرب والمبني في الموضع نفسه" },
      kiri: { judul: { id: "Mu'rab — tanda tampak", ar: "معرب" }, ikon: "swap", warna: "green", poin: [
        { id: "*Muhammadun*: mubtada' marfu' dengan dhammah; *rajulun*: khabar; *muhadzdzabun*: na't", ar: "مُحَمَّدٌ رَجُلٌ مُهَذَّبٌ" } ] },
      kanan: { judul: { id: "Mabni — *fi mahalli*", ar: "مبني" }, ikon: "lock", warna: "blue", poin: [
        { id: "*Anta*: dhamir mabni 'alal-fath ***fi mahalli raf'* mubtada'** — dhammah tidak tampak karena ia mabni", ar: "أَنْتَ رَجُلٌ مُهَذَّبٌ" } ] } },
    { t: "tabel", judul: { id: "Contoh dari kitab", ar: "أمثلة الكتاب" },
      kolom: [{ id: "Kalimat", ar: "الجملة" }, { id: "Kata mabni", ar: "المبني" }, { id: "I'rab mahalli", ar: "الإعراب المحلي" }],
      baris: [
        [{ ar: "سَاعَدْتُ هَؤُلَاءِ الْمَسَاكِينَ" }, { ar: "التاء — هَؤُلَاءِ" }, { id: "Ta': mabni 'alad-dhamm *fi mahalli raf'* fa'il. *Ha'ula'i*: isim isyarah mabni 'alal-kasr ***fi mahalli nashb* maf'ul bih**", ar: "في محل رفع فاعل — في محل نصب مفعول به" }],
        [{ ar: "عَطَفْتُ عَلَى هَذَا الْمَرِيضِ" }, { ar: "هَذَا" }, { id: "Isim isyarah mabni 'alas-sukun ***fi mahalli jarr*** setelah huruf jar", ar: "في محل جر" }],
        [{ ar: "لَا تَشْرَبَنَّ الْمَاءَ السَّاخِنَ" }, { ar: "تَشْرَبَنَّ" }, { id: "Mudhari' mabni 'alal-fath (bersambung nun taukid) ***fi mahalli jazm*** oleh *la* nahiyah", ar: "في محل جزم" }],
        [{ ar: "هُوَ عَالِمٌ" }, { ar: "هُوَ" }, { id: "Dhamir mabni 'alal-fath *fi mahalli raf'* mubtada' (bandingkan: *Muhammadun 'alimun*)", ar: "في محل رفع مبتدأ" }],
        [{ ar: "إِنَّهُ فَاضِلٌ" }, { ar: "الهاء" }, { id: "Dhamir mabni 'alad-dhamm *fi mahalli nashb* isim inna", ar: "في محل نصب اسم إن" }],
        [{ ar: "مَنْ صَدَقَ قَصْدُهُ حَسُنَ عَمَلُهُ" }, { ar: "صَدَقَ — الهاء" }, { id: "*Shadaqa*: madhi mabni 'alal-fath ***fi mahalli jazm*** fi'il syarat. Ha' pada *qashduhu* dan *'amaluhu*: *fi mahalli jarr* mudhaf ilaih", ar: "في محل جزم فعل الشرط — في محل جر مضاف إليه" }]
      ] },
    { t: "peta", ikon: "lock", pusat: { id: "Yang mendapat i'rab mahalli", ar: "مواضع الإعراب المحلي" }, cabang: [
      { id: "Kata-kata mabni", ar: "الكلمات المبنية", sub: [{ id: "Huruf (tidak berkedudukan)", ar: "الحروف" }, { id: "Fi'il amr & madhi", ar: "الأمر والماضي" }, { id: "Mudhari' + nun taukid/niswah", ar: "المضارع مع النونين" }, { id: "Dhamir, isim isyarah, isim maushul, isim syarat", ar: "الضمائر والإشارات والموصولات وأسماء الشرط" }] },
      { id: "Jumlah (kalimat)", ar: "الجمل", sub: [{ id: "Jumlah khabar, na't, hal, maf'ul bih…", ar: "جملة خبرية، نعت…" }, { id: "\"Jumlah mubtada'-khabar ini *fi mahalli*…\"", ar: "في محل كذا" }] }
    ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Rumus mengi'rab kata mabni", ar: "قاعدة الإعراب المحلي" }, id: "**\"… mabni 'ala (bunyi akhirnya) *fi mahalli* (keadaan) (fungsinya).\"** Contoh: *huwa*: dhamir **mabni 'alal-fath fi mahalli raf' mubtada'**. Jika ia maf'ul bih → *fi mahalli nashb*; jika mudhaf ilaih → *fi mahalli jarr*; jika fi'il syarat → *fi mahalli jazm*.", ar: "يقال: مبني على كذا في محل كذا." },

    { t: "judul", id: "Cara Mengi'rab (Kaifiyyat al-I'rab)", ar: "كيفية الإعراب" },
    { t: "langkah", judul: { id: "Merangkum seluruh pelajaran", ar: "خلاصة الدروس" }, item: [
      { judul: { id: "Kenali jenis kata", ar: "ميِّز الاسم والفعل والحرف" }, id: "Kata tersusun dari huruf hijaiyah; ia isim, fi'il, atau huruf (P1).", ar: "الكلمات من الحروف الهجائية، وهي اسم وفعل وحرف." },
      { judul: { id: "Tentukan mabni atau mu'rab", ar: "بيِّن المبني والمعرب" }, id: "Huruf, madhi, amr — mabni; mudhari' mu'rab kecuali dengan nun taukid/niswah; isim mu'rab kecuali dhamir, isyarah, maushul, syarat (P2).", ar: "المبني والمعرب." },
      { judul: { id: "Tentukan keadaan i'rab dan sebabnya", ar: "ميِّز المرفوع والمنصوب والمجرور والمجزوم واذكر السبب" }, id: "Fi'il: marfu' bila bebas nashib/jazim; manshub setelah nawashib; majzum setelah jawazim (P5). Isim: 6 marfu'at, 11 manshubat, 2 majrurat, plus tawabi' (P6–P15).", ar: "مواضع الرفع والنصب والجر والجزم." },
      { judul: { id: "Sebutkan tandanya", ar: "اذكر العلامة" }, id: "Asli atau pengganti, zhahirah atau muqaddarah (P3–P4).", ar: "أصلية أو فرعية، ظاهرة أو مقدرة." }
    ] },
    { t: "irab", judul: { id: "Contoh dosen: لَا يُؤَخِّرْ أَحَدٌ عَمَلَ الْيَوْمِ لِغَدٍ", ar: "لا يؤخر أحد عمل اليوم لغد" }, tr: "Janganlah seseorang menunda pekerjaan hari ini sampai besok.", kata: [
      { w: "لَا", h: "bina", id: "Huruf nahi mabni 'alas-sukun, tidak berkedudukan i'rab.", ar: "حرف نهي مبني على السكون لا محل له من الإعراب." },
      { w: "يُؤَخِّرْ", h: "jaz", id: "Mudhari' **majzum** oleh *la* nahiyah dengan sukun.", ar: "فعل مضارع مجزوم بلا الناهية وعلامة جزمه السكون." },
      { w: "أَحَدٌ", h: "raf", id: "Fa'il marfu' — siapa yang tidak menunda?", ar: "فاعل مرفوع وعلامة رفعه الضمة." },
      { w: "عَمَلَ", h: "nas", id: "Maf'ul bih manshub — yang dikenai perbuatan fa'il.", ar: "مفعول به منصوب وعلامة نصبه الفتحة." },
      { w: "الْيَوْمِ", h: "jar", id: "Mudhaf ilaih majrur.", ar: "مضاف إليه مجرور." },
      { w: "لِـ", h: "bina", id: "Lam jar mabni 'alal-kasr.", ar: "حرف جر مبني على الكسر." },
      { w: "غَدٍ", h: "jar", id: "Isim majrur oleh lam.", ar: "اسم مجرور باللام." }
    ] },
    { t: "catatan", gaya: "hikmah", judul: { id: "Buah ilmu nahwu", ar: "ثمرات علم النحو" }, id: "**(1) Menjaga lisan dari kesalahan berbicara** — engkau me-rafa' yang marfu', menashab yang manshub, menjarr yang majrur, menjazm yang majzum, sehingga bacaanmu benar. **(2) Mampu mengi'rab** dengan benar — mengenali perubahan akhir kata: *aqbala Muhammadun – ra'aitu Muhammadan – marartu bi Muhammadin – lam yahdhur Muhammadun*.", ar: "من ثمرات علم النحو: صون اللسان عن الخطأ في الكلام، ومعرفة الإعراب." },

    { t: "judul", id: "Tamrin: Baca dengan Benar, lalu I'rab", ar: "تمرين: اقرأ الجمل صحيحة وأعربها" },
    { t: "p", id: "Penulis kitab sengaja menulis kalimat-kalimat berikut **tanpa harakat** agar engkau memberi harakat sendiri berdasarkan ilmu yang telah dipelajari. Coba baca, lalu ketuk \"Lihat jawaban\".", ar: "ترك المصنف ضبط هذه الجمل لتضبطها بنفسك تطبيقًا لما تعلمته." },
    { t: "tanya", q: { ar: "إن التاريخ مرآة لحوادث الزمان", id: "Beri harakat dan i'rab kata-kata utamanya." }, a: { ar: "إِنَّ التَّارِيخَ مِرْآةٌ لِحَوَادِثِ الزَّمَانِ: التاريخَ اسم إن منصوب، مرآةٌ خبر إن مرفوع، لحوادثِ جار ومجرور، الزمانِ مضاف إليه.", id: "*Inna at-tarikha mir'atun li hawaditsi az-zamani* — *at-tarikha*: isim inna manshub; *mir'atun*: khabar inna marfu'; *li hawaditsi*: jar-majrur; *az-zamani*: mudhaf ilaih." } },
    { t: "tanya", q: { ar: "حاصر جيش الإسلام مدينة الإسكندرية في خلافة الفاروق سنة وشهرين، ثم دخل الجيش هذه المدينة فائزا بالنصر متوجا بتاج العز والفخر", id: "Beri harakat dan i'rab." }, a: { ar: "حَاصَرَ جَيْشُ الْإِسْلَامِ مَدِينَةَ الْإِسْكَنْدَرِيَّةِ فِي خِلَافَةِ الْفَارُوقِ سَنَةً وَشَهْرَيْنِ، ثُمَّ دَخَلَ الْجَيْشُ هَذِهِ الْمَدِينَةَ فَائِزًا بِالنَّصْرِ مُتَوَّجًا بِتَاجِ الْعِزِّ وَالْفَخْرِ. حاصرَ: فعل ماض مبني على الفتح، جيشُ: فاعل، مدينةَ: مفعول به، هذه: اسم إشارة مبني في محل نصب مفعول به، المدينةَ: بدل منصوب، فائزًا ومتوجًا: حالان، والفخرِ: معطوف مجرور.", id: "*Hashara jaisyu al-islami madinata al-iskandariyyati fi khilafati al-faruqi sanatan wa syahraini, tsumma dakhala al-jaisyu hadzihi al-madinata fa'izan bin-nashri mutawwajan bi taji al-'izzi wal-fakhri.* *Hashara*: madhi mabni 'alal-fath; *jaisyu*: fa'il; *madinata*: maf'ul bih; *sanatan wa syahraini*: manshub (lamanya pengepungan); *hadzihi*: isim isyarah *fi mahalli nashb* maf'ul bih; *al-madinata*: badal manshub; *fa'izan, mutawwajan*: hal; *al-fakhri*: ma'thuf majrur (tab'i)." } },
    { t: "tanya", q: { ar: "يعرف صاحب الأمانة عند الأخذ والعطاء", id: "Beri harakat dan i'rab." }, a: { ar: "يُعْرَفُ صَاحِبُ الْأَمَانَةِ عِنْدَ الْأَخْذِ وَالْعَطَاءِ: يُعرف فعل مضارع مبني للمجهول مرفوع، صاحبُ نائب فاعل مرفوع، الأمانةِ مضاف إليه، عندَ ظرف مكان منصوب، الأخذِ مضاف إليه، والعطاءِ معطوف مجرور.", id: "*Yu'rafu shahibu al-amanati 'inda al-akhdzi wal-'atha'i* — *yu'rafu*: mudhari' majhul marfu'; *shahibu*: na'ib fa'il; *al-amanati*: mudhaf ilaih; *'inda*: zharf manshub; *al-akhdzi*: mudhaf ilaih; *al-'atha'i*: ma'thuf majrur." } },
    { t: "tanya", q: { ar: "إن وعد الحر دين عليه", id: "Beri harakat dan i'rab." }, a: { ar: "إِنَّ وَعْدَ الْحُرِّ دَيْنٌ عَلَيْهِ: وعدَ اسم إن منصوب، الحرِّ مضاف إليه، دينٌ خبر إن مرفوع، عليه جار ومجرور.", id: "*Inna wa'da al-hurri dainun 'alaihi* — *wa'da*: isim inna; *al-hurri*: mudhaf ilaih; *dainun*: khabar inna; *'alaihi*: jar-majrur." } },
    { t: "tanya", q: { ar: "الإخوان زينة في الرخاء وعدة في البلاء ومعونة على الأعداء", id: "Beri harakat dan i'rab." }, a: { ar: "الْإِخْوَانُ زِينَةٌ فِي الرَّخَاءِ، وَعُدَّةٌ فِي الْبَلَاءِ، وَمَعُونَةٌ عَلَى الْأَعْدَاءِ: الإخوانُ مبتدأ، زينةٌ خبر، وعدةٌ ومعونةٌ معطوفان مرفوعان.", id: "*Al-ikhwanu zinatun fir-rakha'i, wa 'uddatun fil-bala'i, wa ma'unatun 'alal-a'da'i* — *al-ikhwanu*: mubtada'; *zinatun*: khabar; *'uddatun, ma'unatun*: ma'thuf marfu'." } },
    { t: "tanya", q: { ar: "تمر الفرص مر السحاب", id: "Beri harakat dan i'rab." }, a: { ar: "تَمُرُّ الْفُرَصُ مَرَّ السَّحَابِ: تمرُّ فعل مضارع مرفوع، الفرصُ فاعل مرفوع، مرَّ مفعول مطلق منصوب، السحابِ مضاف إليه.", id: "*Tamurru al-furashu marra as-sahabi* — *tamurru*: mudhari' marfu'; *al-furashu*: fa'il; *marra*: **maf'ul muthlaq** (penjelas jenis); *as-sahabi*: mudhaf ilaih." } },
    { t: "tanya", q: { ar: "لا يزال الجاهل لاهيا يبيت قلبه خاليا ويصبح طرفه ساهيا", id: "Beri harakat dan i'rab." }, a: { ar: "لَا يَزَالُ الْجَاهِلُ لَاهِيًا، يَبِيتُ قَلْبُهُ خَالِيًا، وَيُصْبِحُ طَرْفُهُ سَاهِيًا: الجاهلُ اسم لا يزال مرفوع، لاهيًا خبرها منصوب، قلبُه اسم يبيت وخاليًا خبرها، طرفُه اسم يصبح وساهيًا خبرها.", id: "*La yazalu al-jahilu lahiyan, yabitu qalbuhu khaliyan, wa yushbihu tharfuhu sahiyan* — semuanya **fi'il nasikh** (saudara kana): *al-jahilu/qalbuhu/tharfuhu* = isimnya (marfu'); *lahiyan/khaliyan/sahiyan* = khabarnya (manshub)." } },
    { t: "tanya", q: { ar: "المرء قليل بنفسه كثير بإخوانه", id: "Beri harakat dan i'rab." }, a: { ar: "الْمَرْءُ قَلِيلٌ بِنَفْسِهِ كَثِيرٌ بِإِخْوَانِهِ: المرءُ مبتدأ، قليلٌ خبر أول، كثيرٌ خبر ثانٍ، بنفسه وبإخوانه جار ومجرور.", id: "*Al-mar'u qalilun bi nafsihi katsirun bi ikhwanihi* — *al-mar'u*: mubtada'; *qalilun*: khabar; *katsirun*: khabar kedua; *bi nafsihi, bi ikhwanihi*: jar-majrur." } },

    { t: "judul", id: "Tathbiq: Surah Al-'Ashr", ar: "التطبيق: سورة العصر" },
    { t: "irab", ayat: "وَالْعَصْرِ ۝ إِنَّ الْإِنسَانَ لَفِي خُسْرٍ", src: "العصر: ١–٢", kata: [
      { w: "وَ", h: "bina", id: "Waw qasam — huruf mabni 'alal-fath, tidak berkedudukan i'rab.", ar: "الواو حرف قسم مبني على الفتح لا محل له من الإعراب." },
      { w: "الْعَصْرِ", h: "jar", id: "Isim majrur oleh waw qasam (huruf qasam adalah huruf jar).", ar: "اسم مجرور بواو القسم." },
      { w: "إِنَّ", h: "bina", id: "Huruf taukid dan nashab mabni 'alal-fath.", ar: "حرف توكيد ونصب مبني على الفتح." },
      { w: "الْإِنسَانَ", h: "nas", id: "Isim inna manshub.", ar: "اسم إن منصوب." },
      { w: "لَـ", h: "bina", id: "**Lam muzahlaqah** — lam taukid yang masuk pada khabar *inna*, mabni 'alal-fath.", ar: "اللام المزحلقة الواقعة في خبر إن للتأكيد، مبنية على الفتح." },
      { w: "فِي", h: "bina", id: "Huruf jar mabni 'alas-sukun.", ar: "حرف جر مبني على السكون." },
      { w: "خُسْرٍ", h: "jar", id: "Majrur oleh *fi*. **Syibhul jumlah** *lafi khusrin* ***fi mahalli raf'* khabar inna** — inilah i'rab mahalli. Dan jumlah *inna al-insana lafi khusr* *fi mahalli* jawab qasam.", ar: "اسم مجرور بفي، وشبه الجملة في محل رفع خبر إن، وجملة إن واسمها وخبرها جواب القسم." }
    ] },
    { t: "irab", ayat: "إِلَّا الَّذِينَ آمَنُوا وَعَمِلُوا الصَّالِحَاتِ وَتَوَاصَوْا بِالْحَقِّ وَتَوَاصَوْا بِالصَّبْرِ", src: "العصر: ٣", kata: [
      { w: "إِلَّا", h: "bina", id: "Adat istitsna' mabni 'alas-sukun.", ar: "أداة استثناء مبنية على السكون." },
      { w: "الَّذِينَ", h: "bina", id: "Isim maushul mabni 'alal-fath ***fi mahalli nashb* mustatsna** — mustatsna manshub.", ar: "اسم موصول مبني على الفتح في محل نصب مستثنى." },
      { w: "آمَنُوا", h: "bina", id: "Madhi **mabni 'alad-dhamm** (bersambung waw jama'ah); waw: dhamir mabni 'alas-sukun ***fi mahalli raf'* fa'il**; alif fariqah. Jumlahnya *shilah maushul*, tidak berkedudukan i'rab.", ar: "فعل ماض مبني على الضم لاتصاله بواو الجماعة، والواو في محل رفع فاعل، والألف فارقة، والجملة صلة الموصول لا محل لها من الإعراب." },
      { w: "وَعَمِلُوا", h: "bina", id: "Waw 'athaf (jumlah kepada jumlah) + *'amila* madhi mabni 'alad-dhamm + waw *fi mahalli raf'* fa'il.", ar: "الواو حرف عطف، وعمل فعل ماض مبني على الضم، والواو في محل رفع فاعل." },
      { w: "الصَّالِحَاتِ", h: "nas", id: "Maf'ul bih manshub dengan **kasrah** — jamak mu'annats salim.", ar: "مفعول به منصوب وعلامة نصبه الكسرة لأنه جمع مؤنث سالم." },
      { w: "وَتَوَاصَوْا", h: "bina", id: "Waw 'athaf; *tawashau*: madhi mabni 'alad-dhamm **muqaddar** pada alif yang dibuang; waw jama'ah *fi mahalli raf'* fa'il; alif fariqah.", ar: "تواصى فعل ماض مبني على الضم المقدر على الألف المحذوفة، والواو فاعل، والألف فارقة." },
      { w: "بِالْحَقِّ", h: "jar", id: "Jar-majrur.", ar: "جار ومجرور." },
      { w: "بِالصَّبْرِ", h: "jar", id: "Ba' jar mabni 'alal-kasr + *ash-shabri* majrur dengan kasrah.", ar: "الباء حرف جر، والصبر اسم مجرور بالباء." }
    ] },
    { t: "ringkasan", item: [
      { id: "I'rab mahalli: kata mabni di posisi i'rab tidak berubah akhirnya; dikatakan \"mabni 'ala … *fi mahalli* …\".", ar: "الإعراب المحلي." },
      { id: "Yang mendapat i'rab mahalli: kata-kata mabni (dhamir, isyarah, maushul, syarat, madhi, amr, mudhari' dengan dua nun) dan jumlah.", ar: "مواضعه: المبنيات والجمل." },
      { id: "Cara mengi'rab: jenis kata → mabni/mu'rab → keadaan i'rab & sebabnya → tandanya.", ar: "كيفية الإعراب." },
      { id: "Buah nahwu: menjaga lisan dari lahn dan mampu mengi'rab dengan benar.", ar: "ثمرات النحو." },
      { id: "Alhamdulillah — seluruh pelajaran *Ad-Durus an-Nahwiyyah* semester ini telah tuntas.", ar: "الحمد لله على التمام." }
    ] }
  ],
  istilah: [
    { ar: "الإعراب المحلي", latin: "al-i'rab al-mahalli", id: "I'rab kedudukan", def: { id: "I'rab kata mabni atau jumlah berdasarkan posisinya: *fi mahalli raf'/nashb/jarr/jazm*.", ar: "إعراب المبني والجمل بحسب الموقع." } },
    { ar: "في محل رفع", latin: "fi mahalli raf'", id: "Berkedudukan rafa'", def: { id: "Seperti *anta* dalam *anta rajulun muhadzdzabun*.", ar: "كأنت مبتدأ." } },
    { ar: "في محل جزم", latin: "fi mahalli jazm", id: "Berkedudukan jazm", def: { id: "Seperti *tasyrabanna* setelah *la* nahiyah, atau madhi sebagai fi'il syarat.", ar: "كالمضارع المؤكد بعد لا الناهية." } },
    { ar: "شبه الجملة", latin: "syibh al-jumlah", id: "Frasa jar-majrur/zharf", def: { id: "Seperti *lafi khusrin* yang *fi mahalli raf'* khabar inna.", ar: "الجار والمجرور والظرف." } },
    { ar: "اللام المزحلقة", latin: "al-lam al-muzahlaqah", id: "Lam taukid pada khabar inna", def: { id: "Lam yang \"digeser\" ke khabar *inna*: {لَفِي خُسْرٍ}.", ar: "اللام الواقعة في خبر إن للتوكيد." } },
    { ar: "جواب القسم", latin: "jawab al-qasam", id: "Jawaban sumpah", def: { id: "Jumlah yang menjadi isi sumpah: *inna al-insana lafi khusr*.", ar: "الجملة المقسم عليها." } },
    { ar: "كيفية الإعراب", latin: "kaifiyyat al-i'rab", id: "Cara mengi'rab", def: { id: "Mengenali jenis kata, mabni/mu'rab, keadaan i'rab, sebab, dan tandanya.", ar: "تمييز الكلمات وبيان إعرابها." } },
    { ar: "صون اللسان", latin: "shaun al-lisan", id: "Menjaga lisan", def: { id: "Buah utama ilmu nahwu: terhindar dari lahn.", ar: "من ثمرات علم النحو." } }
  ],
  latihan: {
    pg: [
      { q: { id: "I'rab mahalli berlaku pada…", ar: "الإعراب المحلي يكون في…" }, o: [{ id: "Kata mu'rab", ar: "المعرب" }, { id: "Kata mabni dan jumlah", ar: "المبني والجمل" }, { id: "Huruf saja", ar: "الحروف فقط" }, { id: "Fi'il mudhari' saja", ar: "المضارع فقط" }], j: 1 },
      { q: { id: "*Anta rajulun muhadzdzabun* — *anta* adalah…", ar: "«أنت»…" }, o: [{ id: "Mubtada' marfu' dengan dhammah", ar: "مبتدأ مرفوع بالضمة" }, { id: "Dhamir mabni 'alal-fath *fi mahalli raf'* mubtada'", ar: "ضمير مبني على الفتح في محل رفع مبتدأ" }, { id: "Fa'il", ar: "فاعل" }, { id: "Khabar", ar: "خبر" }], j: 1 },
      { q: { id: "*Sa'adtu ha'ula'i al-masakina* — *ha'ula'i* berkedudukan…", ar: "«هؤلاء» في محل…" }, o: [{ id: "Raf' fa'il", ar: "رفع فاعل" }, { id: "Nashb maf'ul bih", ar: "نصب مفعول به" }, { id: "Jarr", ar: "جر" }, { id: "Tidak berkedudukan", ar: "لا محل له" }], j: 1 },
      { q: { id: "*La tasyrabanna al-ma'a* — *tasyrabanna* berkedudukan…", ar: "«تشربنَّ» في محل…" }, o: [{ id: "Raf'", ar: "رفع" }, { id: "Nashb", ar: "نصب" }, { id: "Jazm", ar: "جزم" }, { id: "Jarr", ar: "جر" }], j: 2 },
      { q: { id: "*Man shadaqa qashduhu hasuna 'amaluhu* — *shadaqa* berkedudukan…", ar: "«صدق» في محل…" }, o: [{ id: "Jazm (fi'il syarat)", ar: "جزم فعل الشرط" }, { id: "Raf'", ar: "رفع" }, { id: "Nashb", ar: "نصب" }, { id: "Tidak berkedudukan", ar: "لا محل له" }], j: 0 },
      { q: { id: "*La yu'akhkhir ahadun 'amala al-yaumi lighadin* — *'amala* adalah…", ar: "«عملَ»…" }, o: [{ id: "Fa'il", ar: "فاعل" }, { id: "Maf'ul bih", ar: "مفعول به" }, { id: "Maf'ul muthlaq", ar: "مفعول مطلق" }, { id: "Zharf", ar: "ظرف" }], j: 1 },
      { q: { id: "*Tamurru al-furashu marra as-sahab* — *marra* adalah…", ar: "«مرَّ»…" }, o: [{ id: "Fi'il madhi", ar: "فعل ماض" }, { id: "Maf'ul muthlaq", ar: "مفعول مطلق" }, { id: "Zharf", ar: "ظرف" }, { id: "Hal", ar: "حال" }], j: 1 },
      { q: { id: "Lam dalam {لَفِي خُسْرٍ} adalah…", ar: "اللام في «لفي»…" }, o: [{ id: "Lam jar", ar: "لام الجر" }, { id: "Lam muzahlaqah (taukid)", ar: "اللام المزحلقة" }, { id: "Lam amr", ar: "لام الأمر" }, { id: "Lam ta'lil", ar: "لام التعليل" }], j: 1 },
      { q: { id: "{إِلَّا الَّذِينَ آمَنُوا} — *alladzina* berkedudukan…", ar: "«الذين» في محل…" }, o: [{ id: "Raf' fa'il", ar: "رفع فاعل" }, { id: "Nashb mustatsna", ar: "نصب مستثنى" }, { id: "Jarr", ar: "جر" }, { id: "Raf' badal", ar: "رفع بدل" }], j: 1 },
      { q: { id: "{وَعَمِلُوا الصَّالِحَاتِ} — *ash-shalihati* manshub dengan…", ar: "«الصالحات» منصوب بـ…" }, o: [{ id: "Fathah", ar: "الفتحة" }, { id: "Kasrah (jamak mu'annats salim)", ar: "الكسرة" }, { id: "Ya'", ar: "الياء" }, { id: "Alif", ar: "الألف" }], j: 1 }
    ],
    bs: [
      { t: { id: "Kata mabni yang menempati posisi fa'il diberi tanda dhammah.", ar: "المبني في موضع الفاعل يضم." }, j: false, b: { id: "Akhirnya tidak berubah; dikatakan *fi mahalli raf'*.", ar: "لا يتغير ويقال في محل رفع." } },
      { t: { id: "Jumlah juga bisa berkedudukan i'rab (i'rab mahalli).", ar: "للجمل إعراب محلي." }, j: true },
      { t: { id: "Huruf mendapat i'rab mahalli.", ar: "للحروف إعراب محلي." }, j: false, b: { id: "Huruf mabni dan *la mahalla lahu minal i'rab*.", ar: "لا محل لها من الإعراب." } },
      { t: { id: "*Yu'rafu shahibu al-amanati* — *shahibu* adalah na'ib fa'il.", ar: "«صاحب» نائب فاعل." }, j: true },
      { t: { id: "*Lafi khusrin* adalah syibhul jumlah *fi mahalli raf'* khabar inna.", ar: "شبه الجملة في محل رفع خبر إن." }, j: true },
      { t: { id: "Shilah maushul berkedudukan i'rab.", ar: "صلة الموصول لها محل." }, j: false, b: { id: "Tidak berkedudukan i'rab.", ar: "لا محل لها." } },
      { t: { id: "*Tawashau*: madhi mabni 'alad-dhamm muqaddar pada alif yang dibuang.", ar: "«تواصوا» مبني على الضم المقدر." }, j: true },
      { t: { id: "Salah satu buah ilmu nahwu adalah menjaga lisan dari kesalahan.", ar: "من ثمرات النحو صون اللسان." }, j: true }
    ],
    jodoh: [
      { a: { ar: "أَنْتَ رَجُلٌ" }, b: { id: "*Fi mahalli raf'* mubtada'", ar: "في محل رفع مبتدأ" } },
      { a: { ar: "سَاعَدْتُ هَؤُلَاءِ" }, b: { id: "*Fi mahalli nashb* maf'ul bih", ar: "في محل نصب مفعول به" } },
      { a: { ar: "عَطَفْتُ عَلَى هَذَا" }, b: { id: "*Fi mahalli jarr*", ar: "في محل جر" } },
      { a: { ar: "لَا تَشْرَبَنَّ" }, b: { id: "*Fi mahalli jazm*", ar: "في محل جزم" } },
      { a: { ar: "إِنَّهُ فَاضِلٌ" }, b: { id: "*Fi mahalli nashb* isim inna", ar: "في محل نصب اسم إن" } },
      { a: { ar: "لَفِي خُسْرٍ" }, b: { id: "*Fi mahalli raf'* khabar inna", ar: "في محل رفع خبر إن" } }
    ],
    isian: [
      { t: { id: "Kata mabni di posisi i'rab dikatakan \"*fi ______* raf'/nashb/jarr/jazm\".", ar: "يقال: في ______ رفع أو نصب." }, j: { id: "mahalli", ar: "محل" }, x: [{ id: "'alamati", ar: "علامة" }, { id: "taqdiri", ar: "تقدير" }, { id: "makani", ar: "مكان" }] },
      { t: { id: "Dalam *huwa 'alimun*, *huwa* dhamir mabni 'ala ______.", ar: "«هو» مبني على ______." }, j: { id: "fathah", ar: "الفتح" }, x: [{ id: "dhammah", ar: "الضم" }, { id: "sukun", ar: "السكون" }, { id: "kasrah", ar: "الكسر" }] },
      { t: { id: "Lam yang masuk pada khabar inna untuk taukid disebut lam ______.", ar: "اللام الداخلة على خبر إن: اللام ______." }, j: { id: "muzahlaqah", ar: "المزحلقة" }, x: [{ id: "juhud", ar: "الجحود" }, { id: "ta'lil", ar: "التعليل" }, { id: "amr", ar: "الأمر" }] },
      { t: { id: "Buah ilmu nahwu: menjaga lisan dari ______.", ar: "ثمرة النحو صون اللسان عن ______." }, j: { id: "kesalahan (lahn)", ar: "الخطأ" }, x: [{ id: "diam", ar: "السكوت" }, { id: "hafalan", ar: "الحفظ" }, { id: "tajwid", ar: "التجويد" }] }
    ],
    pilah: { t: { id: "Kedudukan i'rab mahalli kata mabni berikut", ar: "صنِّف محل المبني" },
      kategori: [{ id: "Fi mahalli raf'", ar: "في محل رفع" }, { id: "Fi mahalli nashb", ar: "في محل نصب" }, { id: "Fi mahalli jarr", ar: "في محل جر" }],
      item: [
        { t: { id: "*Anta* — أَنْتَ رَجُلٌ مُهَذَّبٌ", ar: "أنت" }, k: 0 },
        { t: { id: "Ta' — سَاعَدْتُ", ar: "التاء" }, k: 0 },
        { t: { id: "Waw — آمَنُوا", ar: "واو الجماعة" }, k: 0 },
        { t: { id: "*Ha'ula'i* — سَاعَدْتُ هَؤُلَاءِ", ar: "هؤلاء" }, k: 1 },
        { t: { id: "Ha' — إِنَّهُ فَاضِلٌ", ar: "الهاء" }, k: 1 },
        { t: { id: "*Alladzina* — إِلَّا الَّذِينَ آمَنُوا", ar: "الذين" }, k: 1 },
        { t: { id: "*Hadza* — عَطَفْتُ عَلَى هَذَا", ar: "هذا" }, k: 2 },
        { t: { id: "Ha' — حَسُنَ عَمَلُهُ", ar: "الهاء" }, k: 2 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف الإعراب المحلي ومثِّل له.", id: "Definisikan i'rab mahalli dan beri contoh." }, j: { ar: "إذا وقعت كلمة مبنية في موضع من مواضع الرفع أو النصب أو الجر أو الجزم لا يتغير آخرها، ويقال إنها في محل رفع أو نصب أو جر أو جزم على حسب موقعها، نحو: أنت رجل مهذب: أنت ضمير مبني على الفتح في محل رفع مبتدأ.", id: "Kata mabni di posisi rafa'/nashab/jarr/jazm tidak berubah akhirnya, dan dikatakan *fi mahalli* … sesuai posisinya: *anta rajulun muhadzdzabun* — *anta*: dhamir mabni 'alal-fath *fi mahalli raf'* mubtada'." } },
    { t: { ar: "اذكر مواضع الإعراب المحلي.", id: "Sebutkan tempat-tempat i'rab mahalli." }, j: { ar: "الكلمات المبنية: كفعل الأمر والماضي والمضارع المتصل بنون التوكيد أو النسوة، والضمائر وأسماء الإشارة والأسماء الموصولة وأسماء الشرط، وإعراب الجمل.", id: "**Kata-kata mabni**: amr, madhi, mudhari' dengan nun taukid/niswah, dhamir, isim isyarah, isim maushul, isim syarat; serta **jumlah**." } },
    { t: { ar: "أعرب إعرابًا محليًا الكلمات المبنية في: ساعدت هؤلاء المساكين، ولا تشربنّ الماء الساخن.", id: "I'rab mahalli kata mabni dalam: *sa'adtu ha'ula'i al-masakin* dan *la tasyrabanna al-ma'a as-sakhin*." }, j: { ar: "التاء: ضمير مبني على الضم في محل رفع فاعل. هؤلاء: اسم إشارة مبني على الكسر في محل نصب مفعول به. تشربنّ: فعل مضارع مبني على الفتح لاتصاله بنون التوكيد في محل جزم بلا الناهية.", id: "Ta': mabni 'alad-dhamm *fi mahalli raf'* fa'il. *Ha'ula'i*: isim isyarah mabni 'alal-kasr *fi mahalli nashb* maf'ul bih. *Tasyrabanna*: mudhari' mabni 'alal-fath (nun taukid) *fi mahalli jazm* oleh *la* nahiyah." } },
    { t: { ar: "ما ثمرات علم النحو؟", id: "Apa buah ilmu nahwu?" }, j: { ar: "صون اللسان عن الخطأ في الكلام، ومعرفة الإعراب الصحيح للكلمات.", id: "Menjaga lisan dari kesalahan berbicara dan mampu mengi'rab dengan benar." } },
    { t: { ar: "أعرب: ﴿إِنَّ الْإِنسَانَ لَفِي خُسْرٍ﴾ مبينًا الإعراب المحلي فيها.", id: "I'rablah {إِنَّ الْإِنسَانَ لَفِي خُسْرٍ} dan tunjukkan i'rab mahallinya." }, j: { ar: "إن: حرف توكيد ونصب مبني على الفتح. الإنسان: اسم إن منصوب. اللام: المزحلقة للتوكيد مبنية على الفتح. في: حرف جر. خسر: اسم مجرور بفي، وشبه الجملة «في خسر» في محل رفع خبر إن، وجملة إن واسمها وخبرها جواب القسم.", id: "*Inna*: huruf taukid & nashab. *Al-insana*: isim inna manshub. Lam: *muzahlaqah* (taukid). *Fi*: huruf jar. *Khusrin*: majrur. **Syibhul jumlah *fi khusrin* *fi mahalli raf'* khabar inna**; seluruh jumlah menjadi jawab qasam." } }
  ]
});
