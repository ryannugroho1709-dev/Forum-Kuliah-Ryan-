/* Nahwu — Pertemuan 6: Marfu'at al-Asma' (1): Fa'il, Na'ib Fa'il, Mubtada' & Khabar */
Kuliah.pertemuan("nahwu", {
  no: 6, motif: "jumlah", motifOpt: { items: [["حَفِظَ", "فِعْلٌ"], ["مُحَمَّدٌ", "فَاعِلٌ"], ["الْكِتَابَ", "مَفْعُولٌ بِهِ"]], lbl: "مرفوعات الأسماء ستة" }, tema: 6, durasi: 24,
  telegram: "https://t.me/Shifaaulqloub7/258",
  bab: { id: "Marfu'at al-asma'", ar: "مرفوعات الأسماء" },
  judul: { id: "Isim-isim yang Marfu' (1): Fa'il, Na'ib Fa'il, Mubtada', dan Khabar", ar: "مرفوعات الأسماء (١): الفاعل ونائبه والمبتدأ والخبر" },
  ringkas: {
    id: "Isim marfu' ada di **enam tempat**: fa'il, na'ib fa'il, mubtada', khabar, isim *kana*, dan khabar *inna*. Pertemuan ini membahas empat yang pertama: definisi fa'il, cara membentuk fi'il *majhul* untuk na'ib fa'il, mubtada' dan khabar sebagai penyusun *jumlah ismiyyah* — lalu tathbiq Surah Al-Fajr yang juga memperkenalkan **al-asma' al-khamsah** (*dzi hijr*).",
    ar: "مرفوعات الأسماء ستة: الفاعل ونائب الفاعل والمبتدأ والخبر واسم كان وخبر إن، وفي هذا الدرس الأربعة الأولى، مع بناء الفعل للمجهول، والتطبيق على سورة الفجر وفيه الأسماء الخمسة."
  },
  tujuan: [
    { id: "Menyebut enam marfu'at al-asma'.", ar: "ذكر مرفوعات الأسماء الستة." },
    { id: "Mendefinisikan fa'il dan na'ib fa'il serta membedakannya.", ar: "تعريف الفاعل ونائبه والتفريق بينهما." },
    { id: "Membentuk fi'il madhi dan mudhari' *mabni lil-majhul*.", ar: "بناء الماضي والمضارع للمجهول." },
    { id: "Mendefinisikan mubtada' dan khabar.", ar: "تعريف المبتدأ والخبر." },
    { id: "Mengenali tanda i'rab al-asma' al-khamsah.", ar: "معرفة إعراب الأسماء الخمسة." }
  ],
  isi: [
    { t: "judul", id: "Enam Isim yang Marfu'", ar: "مرفوعات الأسماء ستة" },
    { t: "peta", ikon: "up", pusat: { id: "Marfu'at al-asma'", ar: "مرفوعات الأسماء" }, cabang: [
      { id: "1. Fa'il", ar: "الفاعل" }, { id: "2. Na'ib fa'il", ar: "نائب الفاعل" }, { id: "3. Mubtada'", ar: "المبتدأ" },
      { id: "4. Khabar", ar: "الخبر" }, { id: "5. Isim kana (P7)", ar: "اسم كان" }, { id: "6. Khabar inna (P7)", ar: "خبر إن" }
    ] },

    { t: "judul", id: "1. Fa'il (Pelaku)", ar: "الفاعل" },
    { t: "definisi", istilah: { id: "**Isim marfu' yang didahului fi'il *mabni lil-ma'lum*, menunjukkan siapa yang melakukan perbuatan atau yang bersifat dengannya.**", ar: "اسم مرفوع تقدمه فعل مبني للمعلوم، دل على من فعل الفعل أو اتصف به." } },
    { t: "poin", item: [
      { ikon: "user", judul: { id: "Isim, selalu marfu'", ar: "اسم مرفوع دائمًا" }, id: "Fa'il adalah isim — bukan fi'il atau huruf — dan **selalu marfu'**, tidak pernah manshub atau majrur.", ar: "الفاعل اسم وليس فعلًا ولا حرفًا، وهو مرفوع دائمًا." },
      { ikon: "bolt", judul: { id: "Didahului fi'il ma'lum", ar: "يتقدمه فعل مبني للمعلوم" }, id: "Fi'ilnya *mabni lil-ma'lum* (pelakunya diketahui): *hafizha, yathlubu, khalaqa*.", ar: "نحو: حفظ، يطلب، خلق." },
      { ikon: "eye", judul: { id: "Melakukan atau bersifat", ar: "من فعل الفعل أو اتصف به" }, id: "*Saraqa al-lishshu al-bank* — pencuri **melakukan** pencurian. *Mata fulanun* — si fulan **bersifat** mati, bukan melakukan kematian; ia tetap fa'il.", ar: "سرق اللصُّ البنكَ (فعل)، ومات فلانٌ (اتصف به)." }
    ] },
    { t: "irab", judul: { id: "Contoh: حَفِظَ مُحَمَّدٌ الْكِتَابَ", ar: "حفظ محمد الكتاب" }, kata: [
      { w: "حَفِظَ", h: "bina", id: "Fi'il madhi mabni 'alal-fath — menunjukkan terjadinya hafalan.", ar: "فعل ماض مبني على الفتح." },
      { w: "مُحَمَّدٌ", h: "raf", id: "**Fa'il** marfu' dengan dhammah zhahirah — dialah yang menghafal.", ar: "فاعل مرفوع وعلامة رفعه الضمة الظاهرة." },
      { w: "الْكِتَابَ", h: "nas", id: "Maf'ul bih manshub — yang dikenai hafalan.", ar: "مفعول به منصوب وعلامة نصبه الفتحة الظاهرة." }
    ] },
    { t: "contoh", judul: { id: "Siapa fa'ilnya?", ar: "من الفاعل؟" }, sorot: [
      { label: { ar: "يَطْلُبُ الْعَاقِلُ الْعِلْمَ" }, warna: "blue", id: "Orang berakal mencari ilmu — fa'il: ***al-'aqilu***.", ar: "الفاعل: العاقل." },
      { label: { ar: "خَلَقَ اللهُ الْإِنْسَانَ" }, warna: "blue", id: "Allah menciptakan manusia — fa'il: lafzhul jalalah ***Allahu***.", ar: "الفاعل: لفظ الجلالة." },
      { label: { ar: "يَأْكُلُ الذِّئْبُ الْغَنَمَ" }, warna: "blue", id: "Serigala memakan kambing — fa'il: ***adz-dzi'bu***.", ar: "الفاعل: الذئب." },
      { label: { ar: "أَرْشَدَ الْأَنْبِيَاءُ النَّاسَ" }, warna: "blue", id: "Para nabi membimbing manusia — fa'il: ***al-anbiya'u***.", ar: "الفاعل: الأنبياء." },
      { label: { ar: "يُبْغِضُ النَّاسُ الْخَائِنَ" }, warna: "blue", id: "Manusia membenci pengkhianat — fa'il: ***an-nasu***.", ar: "الفاعل: الناس." }
    ] },

    { t: "judul", id: "2. Na'ib Fa'il (Pengganti Pelaku)", ar: "نائب الفاعل" },
    { t: "definisi", istilah: { id: "**Isim marfu' yang didahului fi'il *mabni lil-majhul*, menempati posisi fa'il setelah fa'il dibuang.** Disebut juga *al-maf'ul alladzi lam yusamma fa'iluh*.", ar: "اسم مرفوع تقدمه فعل مبني للمجهول، وحل محل الفاعل بعد حذفه، ويسمى المفعول الذي لم يسمَّ فاعله." } },
    { t: "banding", judul: { id: "Dari kalimat aktif ke pasif", ar: "من المعلوم إلى المجهول" },
      kiri: { judul: { id: "Ma'lum (aktif)", ar: "المبني للمعلوم" }, ikon: "user", warna: "blue", poin: [{ id: "Muhammad menghafal kitab — *al-kitab*: maf'ul bih", ar: "حَفِظَ مُحَمَّدٌ الْكِتَابَ" }, { id: "Orang berakal mencari ilmu", ar: "يَطْلُبُ الْعَاقِلُ الْعِلْمَ" }] },
      kanan: { judul: { id: "Majhul (pasif)", ar: "المبني للمجهول" }, ikon: "eye", warna: "amber", poin: [{ id: "Kitab itu dihafal — *al-kitabu*: na'ib fa'il marfu'", ar: "حُفِظَ الْكِتَابُ" }, { id: "Ilmu dicari — *al-'ilmu*: na'ib fa'il", ar: "يُطْلَبُ الْعِلْمُ" }] } },
    { t: "tabel", judul: { id: "Cara membentuk fi'il majhul", ar: "كيفية بناء الفعل للمجهول" },
      kolom: [{ id: "Fi'il", ar: "الفعل" }, { id: "Perubahan", ar: "التغيير" }, { id: "Contoh", ar: "أمثلة" }],
      baris: [
        [{ id: "Madhi", ar: "الماضي" }, { id: "**Huruf pertama didhammah, huruf sebelum akhir dikasrah**", ar: "يضم أوله ويكسر ما قبل آخره" }, { ar: "حَفِظَ ← حُفِظَ، خَلَقَ ← خُلِقَ" }],
        [{ id: "Mudhari'", ar: "المضارع" }, { id: "**Huruf pertama didhammah, huruf sebelum akhir difathah**", ar: "يضم أوله ويفتح ما قبل آخره" }, { ar: "يَطْلُبُ ← يُطْلَبُ، تَأْكُلُ ← تُؤْكَلُ، يُبْغِضُ ← يُبْغَضُ" }]
      ] },
    { t: "cek", q: { id: "*Yu'kalu al-ghanamu* — *al-ghanamu* adalah…", ar: "«يُؤكل الغنمُ»: الغنم…" }, o: [{ id: "Fa'il", ar: "فاعل" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }, { id: "Maf'ul bih", ar: "مفعول به" }, { id: "Mubtada'", ar: "مبتدأ" }], j: 1, b: { id: "Fi'ilnya majhul (*yu'kalu*), maka isim marfu' sesudahnya na'ib fa'il.", ar: "لأن الفعل مبني للمجهول." } },

    { t: "judul", id: "3–4. Mubtada' dan Khabar", ar: "المبتدأ والخبر" },
    { t: "p", id: "*Jumlah mufidah* (kalimat sempurna) tersusun dari **fi'il + isim** (fi'il & fa'il, atau fi'il & na'ib fa'il), atau dari **dua isim**: mubtada' dan khabar — keduanya marfu'.", ar: "الجملة المفيدة تتكون من فعل واسم (فعل وفاعل أو نائب فاعل) أو من اسمين: مبتدأ وخبر." },
    { t: "definisi", judul: { id: "Mubtada'", ar: "المبتدأ" }, istilah: { id: "**Isim marfu' yang bebas dari 'amil lafzhi** — tidak didahului fi'il, huruf nasikh (*inna* dan saudaranya), atau fi'il nasikh (*kana* dan saudaranya). Kalimat dimulai dengannya.", ar: "اسم مرفوع مجرد عن العوامل اللفظية." } },
    { t: "definisi", judul: { id: "Khabar", ar: "الخبر" }, istilah: { id: "**Bagian yang diberitakan tentang mubtada', dan dengannya faedah menjadi sempurna** bersama mubtada'.", ar: "الجزء المتحدث به عن المبتدأ، وتتم به الفائدة مع المبتدأ." } },
    { t: "tabel", kolom: [{ id: "Kalimat", ar: "الجملة" }, { id: "Mubtada'", ar: "المبتدأ" }, { id: "Khabar", ar: "الخبر" }],
      baris: [
        [{ ar: "الطَّالِبُ مُجْتَهِدٌ" }, { ar: "الطَّالِبُ" }, { ar: "مُجْتَهِدٌ" }],
        [{ ar: "الْبُسْتَانُ مُثْمِرٌ" }, { ar: "الْبُسْتَانُ" }, { ar: "مُثْمِرٌ" }],
        [{ ar: "الشَّجَرُ مُورِقٌ" }, { ar: "الشَّجَرُ" }, { ar: "مُورِقٌ" }],
        [{ ar: "الْمَطَرُ غَزِيرٌ" }, { ar: "الْمَطَرُ" }, { ar: "غَزِيرٌ" }],
        [{ ar: "الْجَوُّ مُعْتَدِلٌ" }, { ar: "الْجَوُّ" }, { ar: "مُعْتَدِلٌ" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Uji sederhana", ar: "اختبار" }, id: "Tanyakan: \"*Ath-thalibu*, kenapa dia?\" — jawabannya (*mujtahidun*) itulah **khabar**, karena dengannya pendengar merasa cukup (*yahsunu as-sukut*).", ar: "الطالب ماله؟ مجتهدٌ؛ فهي التي أتمت الفائدة." },

    { t: "judul", id: "Tathbiq: Surah Al-Fajr (1–8)", ar: "التطبيق: سورة الفجر" },
    { t: "irab", ayat: "وَالْفَجْرِ ۝ وَلَيَالٍ عَشْرٍ ۝ وَالشَّفْعِ وَالْوَتْرِ ۝ وَاللَّيْلِ إِذَا يَسْرِ ۝ هَلْ فِي ذَٰلِكَ قَسَمٌ لِّذِي حِجْرٍ", src: "الفجر: ١–٥", kata: [
      { w: "وَ", h: "bina", id: "Huruf jar dan qasam — mabni.", ar: "حرف جر وقسم مبني." },
      { w: "الْفَجْرِ", h: "jar", id: "Isim mu'rab majrur dengan kasrah zhahirah karena didahului huruf jar.", ar: "اسم مجرور وعلامة جره الكسرة الظاهرة." },
      { w: "وَلَيَالٍ", h: "jar", id: "Waw 'athaf + *layalin* isim majrur.", ar: "الواو حرف عطف، وليالٍ اسم مجرور." },
      { w: "عَشْرٍ", h: "jar", id: "Sifat majrur — isim, karena bertanwin.", ar: "صفة مجرورة، وهي اسم؛ لأنها منونة." },
      { w: "وَالشَّفْعِ وَالْوَتْرِ", h: "jar", id: "Seperti sebelumnya: di-'athaf-kan, majrur.", ar: "نفس الإعراب السابق." },
      { w: "إِذَا", h: "bina", id: "Zharf zaman mabni 'alas-sukun, dan ia *mudhaf*.", ar: "ظرف زمان مبني على السكون، وهو مضاف." },
      { w: "يَسْرِ", h: "raf", id: "Asalnya *yasri*: mudhari' **marfu' dengan dhammah muqaddarah pada ya' (yang dibuang dalam rasm) karena tsiqal**; fa'il dhamir mustatir *huwa*; jumlahnya *fi mahalli jarr* mudhaf ilaih (setelah zharf *idza*).", ar: "أصلها يسري: فعل مضارع مرفوع بضمة مقدرة للثقل على الياء المحذوفة، والفاعل ضمير مستتر، والجملة في محل جر مضاف إليه." },
      { w: "هَلْ", h: "bina", id: "Huruf mabni 'alas-sukun.", ar: "حرف مبني على السكون." },
      { w: "فِي", h: "bina", id: "Huruf jar mabni 'alas-sukun.", ar: "حرف جر مبني على السكون." },
      { w: "ذَٰلِكَ", h: "bina", id: "*Dza* isim isyarah mabni; lam untuk jauh; kaf huruf khithab.", ar: "ذا اسم إشارة مبني، واللام للبعد، والكاف حرف خطاب." },
      { w: "قَسَمٌ", h: "raf", id: "**Mubtada' mu'akhkhar** (diakhirkan) — marfu'.", ar: "مبتدأ مؤخر." },
      { w: "لِذِي", h: "jar", id: "Lam jar mabni 'alal-kasr + *dzi*: **majrur dengan ya'** (tanda pengganti) karena termasuk **al-asma' al-khamsah**; ia *mudhaf*.", ar: "اللام حرف جر، وذي اسم مجرور وعلامة جره الياء لأنه من الأسماء الخمسة، وهو مضاف." },
      { w: "حِجْرٍ", h: "jar", id: "Mudhaf ilaih majrur dengan kasrah.", ar: "مضاف إليه مجرور وعلامة جره الكسرة." }
    ] },
    { t: "catatan", gaya: "info", judul: { id: "Al-Asma' al-Khamsah", ar: "الأسماء الخمسة" }, id: "Lima isim (*abun, akhun, hamun, fuhun, dzu*) yang **rafa' dengan waw, nashab dengan alif, jarr dengan ya'** sebagai pengganti harakat: *dzu mal – dza mal – dzi mal*. Contohnya {لِذِي حِجْرٍ}.", ar: "الأسماء الخمسة ترفع بالواو نيابة عن الضمة، وتنصب بالألف نيابة عن الفتحة، وتجر بالياء نيابة عن الكسرة." },
    { t: "irab", ayat: "أَلَمْ تَرَ كَيْفَ فَعَلَ رَبُّكَ بِعَادٍ ۝ إِرَمَ ذَاتِ الْعِمَادِ ۝ الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ", src: "الفجر: ٦–٨", kata: [
      { w: "أَ", h: "bina", id: "Hamzah istifham mabni 'alal-fath.", ar: "الهمزة حرف استفهام مبني على الفتح." },
      { w: "لَمْ", h: "bina", id: "Huruf nafi, jazm, dan *qalb* (mengubah makna ke lampau) mabni 'alas-sukun.", ar: "حرف نفي وجزم وقلب مبني على السكون." },
      { w: "تَرَ", h: "jaz", id: "Mudhari' **majzum** oleh *lam* dengan **membuang huruf 'illat** (asalnya *tara* dengan alif) — tanda pengganti.", ar: "فعل مضارع مجزوم بلم وعلامة جزمه حذف حرف العلة." },
      { w: "كَيْفَ", h: "bina", id: "Isim istifham mabni 'alal-fath.", ar: "اسم استفهام مبني على الفتح." },
      { w: "فَعَلَ", h: "bina", id: "Fi'il madhi mabni 'alal-fath.", ar: "فعل ماض مبني على الفتح." },
      { w: "رَبُّكَ", h: "raf", id: "**Syahid**: siapa yang berbuat? *Rabbu* — **fa'il** marfu' dengan dhammah (tanda asli); *kaf* mudhaf ilaih.", ar: "رب: فاعل مرفوع بالضمة، والكاف مضاف إليه." },
      { w: "بِعَادٍ", h: "jar", id: "Ba' jar mabni 'alal-kasr + *'Ad* majrur dengan kasrah.", ar: "الباء حرف جر، وعاد اسم مجرور." },
      { w: "الْعِمَادِ", h: "jar", id: "Isim — ber-*al* dan majrur.", ar: "اسم محلى بأل ومجرور." },
      { w: "لَمْ", h: "bina", id: "Huruf jazm.", ar: "حرف جزم." },
      { w: "يُخْلَقْ", h: "jaz", id: "**Syahid**: fi'il *mabni lil-majhul* (bandingkan *yakhluqu* ma'lum) — mudhari' didhammah awalnya dan difathah sebelum akhirnya. Majzum oleh *lam*.", ar: "فعل مضارع مبني للمجهول: ضم أوله وفتح ما قبل آخره، مجزوم بلم." },
      { w: "مِثْلُهَا", h: "raf", id: "**Na'ib fa'il** marfu' dengan dhammah — isim marfu' setelah fi'il majhul.", ar: "نائب فاعل مرفوع وعلامة رفعه الضمة." },
      { w: "فِي الْبِلَادِ", h: "jar", id: "Jar-majrur.", ar: "جار ومجرور." }
    ] },
    { t: "ringkasan", item: [
      { id: "Marfu'at al-asma' ada enam: fa'il, na'ib fa'il, mubtada', khabar, isim kana, khabar inna.", ar: "مرفوعات الأسماء ستة." },
      { id: "Fa'il: isim marfu' setelah fi'il ma'lum, pelaku atau yang bersifat.", ar: "الفاعل: اسم مرفوع تقدمه فعل مبني للمعلوم." },
      { id: "Na'ib fa'il: isim marfu' setelah fi'il majhul. Madhi majhul: dhammah awal, kasrah sebelum akhir; mudhari' majhul: dhammah awal, fathah sebelum akhir.", ar: "نائب الفاعل بعد المبني للمجهول." },
      { id: "Mubtada': isim marfu' bebas dari 'amil lafzhi; khabar: penyempurna faedah.", ar: "المبتدأ مجرد عن العوامل اللفظية، والخبر متمم الفائدة." },
      { id: "Al-asma' al-khamsah: waw – alif – ya' (seperti {لِذِي حِجْرٍ}).", ar: "الأسماء الخمسة بالواو والألف والياء." }
    ] }
  ],
  istilah: [
    { ar: "الفاعل", latin: "al-fa'il", id: "Pelaku", def: { id: "Isim marfu' setelah fi'il ma'lum yang menunjukkan pelaku atau yang bersifat.", ar: "اسم مرفوع تقدمه فعل مبني للمعلوم دل على من فعل الفعل أو اتصف به." } },
    { ar: "نائب الفاعل", latin: "na'ib al-fa'il", id: "Pengganti pelaku", def: { id: "Isim marfu' setelah fi'il majhul, menempati posisi fa'il yang dibuang.", ar: "اسم مرفوع تقدمه فعل مبني للمجهول وحل محل الفاعل." } },
    { ar: "المبني للمعلوم", latin: "al-mabni lil-ma'lum", id: "Kalimat aktif", def: { id: "Fi'il yang fa'ilnya disebut/diketahui.", ar: "ما ذكر فاعله." } },
    { ar: "المبني للمجهول", latin: "al-mabni lil-majhul", id: "Kalimat pasif", def: { id: "Fi'il yang fa'ilnya tidak disebut: *hufizha, yuthlabu*.", ar: "ما لم يسمَّ فاعله." } },
    { ar: "المبتدأ", latin: "al-mubtada'", id: "Subjek kalimat nominal", def: { id: "Isim marfu' yang bebas dari 'amil lafzhi.", ar: "اسم مرفوع مجرد عن العوامل اللفظية." } },
    { ar: "الخبر", latin: "al-khabar", id: "Predikat", def: { id: "Yang diberitakan tentang mubtada' dan menyempurnakan faedah.", ar: "الجزء المتمم للفائدة مع المبتدأ." } },
    { ar: "العوامل اللفظية", latin: "al-'awamil al-lafzhiyyah", id: "'Amil yang terucap", def: { id: "Fi'il, *inna* dan saudaranya, *kana* dan saudaranya, dsb.", ar: "كالفعل وإن وأخواتها وكان وأخواتها." } },
    { ar: "مبتدأ مؤخر", latin: "mubtada' mu'akhkhar", id: "Mubtada' yang diakhirkan", def: { id: "Seperti *qasamun* dalam {هَلْ فِي ذَٰلِكَ قَسَمٌ}.", ar: "كقسم في الآية." } },
    { ar: "الأسماء الخمسة", latin: "al-asma' al-khamsah", id: "Lima isim", def: { id: "*Abun, akhun, hamun, fuhun, dzu* — rafa' waw, nashab alif, jarr ya'.", ar: "ترفع بالواو وتنصب بالألف وتجر بالياء." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Jumlah marfu'at al-asma' adalah…", ar: "عدد مرفوعات الأسماء…" }, o: [{ id: "4", ar: "٤" }, { id: "6", ar: "٦" }, { id: "11", ar: "١١" }, { id: "2", ar: "٢" }], j: 1 },
      { q: { id: "Fa'il didahului fi'il yang…", ar: "يتقدم الفاعلَ فعلٌ…" }, o: [{ id: "Mabni lil-majhul", ar: "مبني للمجهول" }, { id: "Mabni lil-ma'lum", ar: "مبني للمعلوم" }, { id: "Nasikh", ar: "ناسخ" }, { id: "Selalu madhi", ar: "ماضٍ دائمًا" }], j: 1 },
      { q: { id: "*Mata fulanun* — *fulanun* adalah fa'il karena…", ar: "«فلان» في «مات فلان» فاعل لأنه…" }, o: [{ id: "Melakukan kematian", ar: "فعل الموت" }, { id: "Bersifat dengan kematian", ar: "اتصف به" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }, { id: "Mubtada'", ar: "مبتدأ" }], j: 1 },
      { q: { id: "Bentuk majhul dari *khalaqa* adalah…", ar: "المجهول من «خلق»…" }, o: [{ ar: "خَلُقَ" }, { ar: "خُلِقَ" }, { ar: "يُخْلَقُ" }, { ar: "خَالَقَ" }], j: 1 },
      { q: { id: "Bentuk majhul dari *ta'kulu* adalah…", ar: "المجهول من «تأكل»…" }, o: [{ ar: "تُؤْكِلُ" }, { ar: "تُؤْكَلُ" }, { ar: "أُكِلَ" }, { ar: "تَأْكُلُ" }], j: 1 },
      { q: { id: "*Hufizha al-kitabu* — *al-kitabu* adalah…", ar: "«الكتابُ» في «حُفظ الكتاب»…" }, o: [{ id: "Fa'il", ar: "فاعل" }, { id: "Maf'ul bih", ar: "مفعول به" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }, { id: "Khabar", ar: "خبر" }], j: 2 },
      { q: { id: "Mubtada' adalah isim marfu' yang…", ar: "المبتدأ اسم مرفوع…" }, o: [{ id: "Didahului fi'il", ar: "يتقدمه فعل" }, { id: "Bebas dari 'amil lafzhi", ar: "مجرد عن العوامل اللفظية" }, { id: "Didahului *kana*", ar: "تتقدمه كان" }, { id: "Selalu nakirah", ar: "نكرة دائمًا" }], j: 1 },
      { q: { id: "Dalam {هَلْ فِي ذَٰلِكَ قَسَمٌ}, *qasamun* adalah…", ar: "«قسم» في الآية…" }, o: [{ id: "Fa'il", ar: "فاعل" }, { id: "Mubtada' mu'akhkhar", ar: "مبتدأ مؤخر" }, { id: "Khabar", ar: "خبر" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }], j: 1 },
      { q: { id: "{لِذِي حِجْرٍ} — *dzi* majrur dengan…", ar: "«ذي» مجرور بـ…" }, o: [{ id: "Kasrah", ar: "الكسرة" }, { id: "Ya', karena termasuk al-asma' al-khamsah", ar: "الياء لأنه من الأسماء الخمسة" }, { id: "Fathah", ar: "الفتحة" }, { id: "Ia mabni", ar: "مبني" }], j: 1 },
      { q: { id: "{لَمْ يُخْلَقْ مِثْلُهَا} — *mitsluha* adalah…", ar: "«مثلُها»…" }, o: [{ id: "Fa'il", ar: "فاعل" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }, { id: "Mubtada'", ar: "مبتدأ" }, { id: "Maf'ul bih", ar: "مفعول به" }], j: 1 }
    ],
    bs: [
      { t: { id: "Fa'il bisa manshub dalam keadaan tertentu.", ar: "قد ينصب الفاعل." }, j: false, b: { id: "Fa'il selalu marfu'.", ar: "الفاعل مرفوع دائمًا." } },
      { t: { id: "Madhi majhul: huruf pertama didhammah dan sebelum akhir dikasrah.", ar: "الماضي المجهول: ضم أوله وكسر ما قبل آخره." }, j: true },
      { t: { id: "Mudhari' majhul: huruf pertama didhammah dan sebelum akhir dikasrah.", ar: "المضارع المجهول: يكسر ما قبل آخره." }, j: false, b: { id: "Sebelum akhir difathah: *yuthlabu*.", ar: "يفتح ما قبل آخره." } },
      { t: { id: "Na'ib fa'il disebut juga *al-maf'ul alladzi lam yusamma fa'iluh*.", ar: "نائب الفاعل يسمى المفعول الذي لم يسمَّ فاعله." }, j: true },
      { t: { id: "Khabar adalah bagian yang menyempurnakan faedah bersama mubtada'.", ar: "الخبر متمم الفائدة." }, j: true },
      { t: { id: "*Rabbuka* dalam {كَيْفَ فَعَلَ رَبُّكَ} adalah maf'ul bih.", ar: "«ربك» مفعول به." }, j: false, b: { id: "Ia fa'il — Dialah yang berbuat.", ar: "فاعل." } },
      { t: { id: "*Tara* dalam {أَلَمْ تَرَ} majzum dengan membuang huruf 'illat.", ar: "«تر» مجزوم بحذف حرف العلة." }, j: true },
      { t: { id: "Al-asma' al-khamsah dirafa' dengan alif.", ar: "الأسماء الخمسة ترفع بالألف." }, j: false, b: { id: "Rafa' waw, nashab alif, jarr ya'.", ar: "ترفع بالواو." } }
    ],
    jodoh: [
      { a: { id: "Fa'il", ar: "الفاعل" }, b: { ar: "خَلَقَ اللهُ الْإِنْسَانَ" } },
      { a: { id: "Na'ib fa'il", ar: "نائب الفاعل" }, b: { ar: "يُطْلَبُ الْعِلْمُ" } },
      { a: { id: "Mubtada' & khabar", ar: "المبتدأ والخبر" }, b: { ar: "الْمَطَرُ غَزِيرٌ" } },
      { a: { id: "Al-asma' al-khamsah (jarr)", ar: "الأسماء الخمسة" }, b: { ar: "لِذِي حِجْرٍ" } },
      { a: { id: "Mubtada' mu'akhkhar", ar: "مبتدأ مؤخر" }, b: { ar: "هَلْ فِي ذَٰلِكَ قَسَمٌ" } },
      { a: { id: "Mudhari' majhul", ar: "مضارع مجهول" }, b: { ar: "لَمْ يُخْلَقْ" } }
    ],
    isian: [
      { t: { id: "Na'ib fa'il didahului fi'il yang mabni lil-______.", ar: "نائب الفاعل يتقدمه فعل مبني لل______." }, j: { id: "majhul", ar: "مجهول" }, x: [{ id: "ma'lum", ar: "معلوم" }, { id: "amr", ar: "أمر" }, { id: "nasikh", ar: "ناسخ" }] },
      { t: { id: "Mubtada' adalah isim marfu' yang bebas dari 'amil ______.", ar: "المبتدأ مجرد عن العوامل ______." }, j: { id: "lafzhi", ar: "اللفظية" }, x: [{ id: "maknawi", ar: "المعنوية" }, { id: "syarthi", ar: "الشرطية" }, { id: "jazim", ar: "الجازمة" }] },
      { t: { id: "*Yasri* dalam {إِذَا يَسْرِ} marfu' dengan dhammah muqaddarah karena ______.", ar: "«يسري» مرفوع بضمة مقدرة لل______." }, j: { id: "tsiqal", ar: "ثقل" }, x: [{ id: "ta'adzdzur", ar: "تعذر" }, { id: "jazm", ar: "جزم" }, { id: "bina'", ar: "بناء" }] },
      { t: { id: "Jumlah mufidah tersusun dari fi'il + isim, atau dari dua isim: mubtada' dan ______.", ar: "الجملة من فعل واسم أو من مبتدأ و______." }, j: { id: "khabar", ar: "خبر" }, x: [{ id: "fa'il", ar: "فاعل" }, { id: "hal", ar: "حال" }, { id: "badal", ar: "بدل" }] }
    ],
    pilah: { t: { id: "Pilah kata utama: fa'il, na'ib fa'il, atau mubtada'?", ar: "صنِّف: فاعل أم نائب فاعل أم مبتدأ؟" },
      kategori: [{ id: "Fa'il", ar: "فاعل" }, { id: "Na'ib fa'il", ar: "نائب فاعل" }, { id: "Mubtada'", ar: "مبتدأ" }],
      item: [
        { t: { id: "*Al-'aqilu* — يَطْلُبُ الْعَاقِلُ الْعِلْمَ", ar: "العاقل" }, k: 0 },
        { t: { id: "*Al-'ilmu* — يُطْلَبُ الْعِلْمُ", ar: "العلم" }, k: 1 },
        { t: { id: "*Ath-thalibu* — الطَّالِبُ مُجْتَهِدٌ", ar: "الطالب" }, k: 2 },
        { t: { id: "*Al-ghanamu* — يُؤْكَلُ الْغَنَمُ", ar: "الغنم" }, k: 1 },
        { t: { id: "*Adz-dzi'bu* — يَأْكُلُ الذِّئْبُ الْغَنَمَ", ar: "الذئب" }, k: 0 },
        { t: { id: "*Al-jawwu* — الْجَوُّ مُعْتَدِلٌ", ar: "الجو" }, k: 2 },
        { t: { id: "*Mitsluha* — لَمْ يُخْلَقْ مِثْلُهَا", ar: "مثلها" }, k: 1 },
        { t: { id: "*Rabbuka* — فَعَلَ رَبُّكَ", ar: "ربك" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "اذكر مرفوعات الأسماء الستة.", id: "Sebutkan enam marfu'at al-asma'." }, j: { ar: "الفاعل، ونائب الفاعل، والمبتدأ، والخبر، واسم كان، وخبر إن.", id: "Fa'il, na'ib fa'il, mubtada', khabar, isim *kana*, khabar *inna*." } },
    { t: { ar: "عرِّف الفاعل مع المثال، وبيِّن معنى «أو اتصف به».", id: "Definisikan fa'il dengan contoh, dan jelaskan makna \"atau bersifat dengannya\"." }, j: { ar: "الفاعل اسم مرفوع تقدمه فعل مبني للمعلوم دل على من فعل الفعل أو اتصف به، نحو: حفظ محمدٌ الكتاب. ومعنى «اتصف به» نحو: مات فلانٌ؛ ففلان لم يفعل الموت وإنما اتصف به.", id: "Isim marfu' setelah fi'il ma'lum, menunjukkan pelaku (*hafizha Muhammadun al-kitab*) **atau yang bersifat** dengan perbuatan itu — seperti *mata fulanun*: ia tidak \"melakukan\" kematian, tetapi bersifat dengannya." } },
    { t: { ar: "عرِّف نائب الفاعل، وبيِّن كيف يبنى الماضي والمضارع للمجهول.", id: "Definisikan na'ib fa'il dan jelaskan cara membentuk madhi dan mudhari' majhul." }, j: { ar: "نائب الفاعل اسم مرفوع تقدمه فعل مبني للمجهول وحل محل الفاعل بعد حذفه: حُفِظ الكتابُ. الماضي: يضم أوله ويكسر ما قبل آخره: حُفِظ. المضارع: يضم أوله ويفتح ما قبل آخره: يُطلَب.", id: "Isim marfu' setelah fi'il majhul yang menempati posisi fa'il (*hufizha al-kitabu*). **Madhi**: dhammah awal, kasrah sebelum akhir (*hufizha*). **Mudhari'**: dhammah awal, fathah sebelum akhir (*yuthlabu*)." } },
    { t: { ar: "عرِّف المبتدأ والخبر، ومثِّل بثلاثة أمثلة.", id: "Definisikan mubtada' dan khabar dengan tiga contoh." }, j: { ar: "المبتدأ اسم مرفوع مجرد عن العوامل اللفظية، والخبر الجزء المتحدث به عن المبتدأ المتمم للفائدة: الطالبُ مجتهدٌ، البستانُ مثمرٌ، الجوُّ معتدلٌ.", id: "**Mubtada'**: isim marfu' bebas dari 'amil lafzhi. **Khabar**: yang diberitakan tentang mubtada' dan menyempurnakan faedah. Contoh: *ath-thalibu mujtahidun, al-bustanu mutsmirun, al-jawwu mu'tadilun*." } },
    { t: { ar: "أعرب: ﴿الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ﴾.", id: "I'rablah {الَّتِي لَمْ يُخْلَقْ مِثْلُهَا فِي الْبِلَادِ}." }, j: { ar: "التي: اسم موصول مبني. لم: حرف نفي وجزم وقلب. يُخلق: فعل مضارع مبني للمجهول مجزوم بلم وعلامة جزمه السكون. مثلُ: نائب فاعل مرفوع وعلامة رفعه الضمة، والهاء ضمير في محل جر مضاف إليه. في البلاد: جار ومجرور.", id: "*Allati*: isim maushul mabni. *Lam*: huruf nafi-jazm-qalb. *Yukhlaq*: mudhari' **majhul**, majzum oleh *lam* dengan sukun. *Mitslu*: **na'ib fa'il** marfu' dengan dhammah; *ha* mudhaf ilaih. *Fil-bilad*: jar-majrur." } }
  ]
});
