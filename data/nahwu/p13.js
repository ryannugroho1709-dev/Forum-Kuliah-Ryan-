/* Nahwu — Pertemuan 13: Majrurat al-Asma': Jarr dengan Huruf dan dengan Idhafah */
Kuliah.pertemuan("nahwu", {
  no: 13, motif: "jumlah", motifOpt: { items: [["بِـ", "حرف جر"], ["اسْمِ", "مجرور بالحرف"], ["اللهِ", "بالإضافة"], ["الرَّحْمٰنِ", "بالتبعية"]], big: "أَنْوَاعُ الْجَرِّ", lbl: "المجرورات" }, tema: 6, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/516",
  bab: { id: "Majrurat al-asma'", ar: "مجرورات الأسماء" },
  judul: { id: "Isim-isim yang Majrur: Huruf Jar dan Idhafah", ar: "مجرورات الأسماء: المجرور بالحرف والمجرور بالإضافة" },
  ringkas: {
    id: "Isim majrur di **dua tempat**: setelah salah satu **huruf jar** (*min, ila, 'an, 'ala, fi, rubba, ba', kaf, lam, waw qasam, ta' qasam*) dan sebagai **mudhaf ilaih**. Dibahas macam huruf jar (*ashliyyah, za'idah, syabih biz-za'id*), sifat mudhaf dan mudhaf ilaih, jarr secara *tab'iyyah* — ketiganya berkumpul dalam basmalah — serta apa yang dibuang karena idhafah (tanwin dan nun). Tathbiq: Surah Al-Masad.",
    ar: "يجر الاسم في موضعين: بعد حرف من حروف الجر، وبالإضافة. وأنواع حروف الجر: أصلية وزائدة وشبيهة بالزائد، والمضاف والمضاف إليه، والجر بالتبعية، وما يحذف للإضافة، مع التطبيق على سورة المسد."
  },
  tujuan: [
    { id: "Menyebut dua tempat isim majrur.", ar: "ذكر موضعي جر الاسم." },
    { id: "Menghafal sebelas huruf jar beserta contohnya.", ar: "حفظ حروف الجر مع الأمثلة." },
    { id: "Membedakan huruf jar ashliyyah, za'idah, dan syabih biz-za'id.", ar: "التفريق بين الأصلي والزائد والشبيه بالزائد." },
    { id: "Memahami mudhaf–mudhaf ilaih dan apa yang dibuang karena idhafah.", ar: "فهم الإضافة وما يحذف لأجلها." }
  ],
  isi: [
    { t: "catatan", gaya: "info", judul: { id: "Peta besar i'rab isim", ar: "خريطة إعراب الاسم" }, id: "**Marfu'** di 6 tempat (P6–P7), **manshub** di 11 tempat (P8–P12), dan **majrur** di 2 tempat — hari ini.", ar: "الرفع في ستة مواضع، والنصب في أحد عشر، والجر في موضعين." },

    { t: "judul", id: "1. Majrur dengan Huruf Jar", ar: "المجرور بالحرف" },
    { t: "p", id: "Isim wajib majrur bila terletak **setelah salah satu huruf jar**. Huruf jar semuanya **mabni** — dibina' sesuai bunyi akhirnya — dan **hanya masuk pada isim**: isim dijarr, fi'il dijazm.", ar: "يجر الاسم إذا وقع بعد حرف من حروف الجر، وحروف الجر مبنية، ولا تدخل إلا على الأسماء." },
    { t: "tabel", judul: { id: "Sebelas huruf jar", ar: "حروف الجر" },
      kolom: [{ id: "Huruf", ar: "الحرف" }, { id: "Contoh", ar: "المثال" }, { id: "Catatan", ar: "ملاحظة" }],
      baris: [
        [{ ar: "مِنْ" }, { ar: "سَافَرَ مَحْمُودٌ مِنَ الْقَاهِرَةِ — ﴿أَرَضِيتُم بِالْحَيَاةِ الدُّنْيَا مِنَ الْآخِرَةِ﴾" }, { id: "Mabni 'alas-sukun, difathah karena dua sukun", ar: "حرك بالفتح للتخلص من التقاء الساكنين" }],
        [{ ar: "إِلَى" }, { ar: "وَصَلَ الْمُسَافِرُ إِلَى الْإِسْكَنْدَرِيَّةِ — سَارَ إِلَى الْبَحْرِ" }, { id: "Mabni 'alas-sukun", ar: "مبني على السكون" }],
        [{ ar: "عَنْ" }, { ar: "عَنِ الْمَرْءِ لَا تَسْأَلْ وَسَلْ عَنْ قَرِينِهِ — ﴿لَتَرْكَبُنَّ طَبَقًا عَن طَبَقٍ﴾" }, { id: "Dikasrah karena dua sukun", ar: "حرك بالكسر" }],
        [{ ar: "عَلَى" }, { ar: "الْجُودُ عَلَى الْمُحْتَاجِ أَحْسَنُ مِنَ الدُّرِّ عَلَى التَّاجِ — ﴿وَإِنَّكَ لَعَلَىٰ خُلُقٍ عَظِيمٍ﴾" }, { id: "Mabni 'alas-sukun", ar: "" }],
        [{ ar: "فِي" }, { ar: "تَعَرَّفْ إِلَى اللهِ فِي الرَّخَاءِ يَعْرِفْكَ فِي الشِّدَّةِ — «دَخَلَتِ امْرَأَةٌ النَّارَ فِي هِرَّةٍ»" }, { id: "Mabni 'alas-sukun", ar: "" }],
        [{ ar: "رُبَّ" }, { ar: "رُبَّ حَالٍ أَفْصَحُ مِنْ مَقَالٍ — رُبَّ صَدِيقٍ خَيْرٌ مِنْ شَقِيقٍ" }, { id: "Syabih biz-za'id, mabni 'alal-fath", ar: "شبيه بالزائد" }],
        [{ id: "Ba'", ar: "الباء" }, { ar: "الْعَمَلُ بِالْقَلَمِ أَنْفَذُ مِنَ الْعَمَلِ بِالسَّيْفِ" }, { id: "Mabni 'alal-kasr", ar: "مبني على الكسر" }],
        [{ id: "Kaf", ar: "الكاف" }, { ar: "الْعِلْمُ كَالنُّورِ وَالْجَهْلُ كَالظُّلْمَةِ" }, { id: "Mabni 'alal-fath", ar: "مبني على الفتح" }],
        [{ id: "Lam", ar: "اللام" }, { ar: "الْفَضْلُ لِلْمُتَقَدِّمِ — الْكِبْرِيَاءُ لِلّٰهِ" }, { id: "Mabni 'alal-kasr", ar: "مبني على الكسر" }],
        [{ id: "Waw qasam", ar: "واو القسم" }, { ar: "وَاللهِ مَا صَنَعْتُ — ﴿وَالْعَصْرِ﴾ — ﴿وَالشَّمْسِ وَضُحَاهَا﴾" }, { id: "Masuk pada lafzhul jalalah dan selainnya", ar: "تدخل على لفظ الجلالة وغيره" }],
        [{ id: "Ta' qasam", ar: "تاء القسم" }, { ar: "تَاللهِ لَا يَذْهَبُ الْمَعْرُوفُ" }, { id: "**Khusus** masuk pada lafzhul jalalah", ar: "تختص بلفظ الجلالة" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Tanda jarr-nya mengikuti jenis kata", ar: "علامة الجر بحسب الكلمة" }, id: "Isim setelah huruf jar selalu majrur, tetapi **tanda jarr-nya berbeda sesuai jenis kata**: kasrah untuk mufrad, ya' untuk mutsanna dan jamak mudzakkar salim, ya' untuk al-asma' al-khamsah, dst.", ar: "الكلمة بعد حرف الجر مجرورة، وعلامة جرها تختلف باختلاف الكلمة." },
    { t: "peta", ikon: "layers", pusat: { id: "Tiga macam huruf jar", ar: "أنواع حروف الجر" }, cabang: [
      { id: "Ashliyyah (asli)", ar: "أصلية", sub: [{ id: "*min, ila, 'an, 'ala*…", ar: "من، إلى، عن، على" }] },
      { id: "Za'idah (tambahan, untuk taukid)", ar: "زائدة", sub: [{ id: "*Ma ja'ana min basyir*", ar: "مَا جَاءَنَا مِنْ بَشِيرٍ" }, { ar: "{وَمَا رَبُّكَ بِظَلَّامٍ لِّلْعَبِيدِ}" }, { ar: "{لَيْسَ كَمِثْلِهِ شَيْءٌ}" }] },
      { id: "Syabih biz-za'id", ar: "شبيه بالزائد", sub: [{ id: "*Rubba*: menjarr lafalnya, i'rab sebenarnya menurut konteks", ar: "رُبَّ" }] }
    ] },
    { t: "irab", judul: { id: "Contoh rubba: رُبَّ حَالٍ أَفْصَحُ مِنْ مَقَالٍ", ar: "رب حال أفصح من مقال" }, kata: [
      { w: "رُبَّ", h: "bina", id: "Huruf jar **syabih biz-za'id**, mabni 'alal-fath.", ar: "حرف جر شبيه بالزائد مبني على الفتح." },
      { w: "حَالٍ", h: "jar", id: "Majrur **lafalnya** oleh *rubba*, tetapi ***fi mahalli raf'* mubtada'** — di-i'rab sesuai tuntutan konteks.", ar: "اسم مجرور برب لفظًا في محل رفع مبتدأ." },
      { w: "أَفْصَحُ", h: "raf", id: "Khabar marfu'.", ar: "خبر مرفوع." },
      { w: "مِنْ مَقَالٍ", h: "jar", id: "Jar-majrur.", ar: "جار ومجرور." }
    ] },

    { t: "judul", id: "2. Majrur dengan Idhafah", ar: "المجرور بالإضافة" },
    { t: "definisi", istilah: { id: "**Mudhaf ilaih: setiap isim yang kepadanya disandarkan (dinisbatkan) isim sebelumnya.** Isim sebelumnya disebut *mudhaf*. Mudhaf di-i'rab sesuai posisinya; **mudhaf ilaih selalu majrur**.", ar: "كل اسم نسب إليه اسم سابق يسمى مضافًا إليه، وما قبله مضافًا. والمضاف يعرب بحسب السياق، والمضاف إليه مجرور دائمًا." } },
    { t: "contoh", judul: { id: "Pelayan siapa?", ar: "خادم مَن؟" }, id: "\"*Hadhara al-yauma khadimun*\" — pelayan siapa? Pelayan hakim? Pelayan amir? Tidak jelas, karena tidak dinisbatkan. \"*Hadhara al-yauma **khadimu al-amiri***\" — jelaslah, karena dinisbatkan kepada amir. *Khadimu* = mudhaf; *al-amiri* = mudhaf ilaih.", ar: "حضر اليوم خادمٌ: لا نعرف أي خادم، فإذا قال: خادمُ الأمير، عرفنا المراد لأنه تعين بنسبته." },
    { t: "tabel", kolom: [{ id: "Contoh", ar: "المثال" }, { id: "Mudhaf", ar: "المضاف" }, { id: "Mudhaf ilaih (majrur)", ar: "المضاف إليه" }],
      baris: [
        [{ ar: "خَادِمُ الْأَمِيرِ" }, { ar: "خَادِمُ" }, { ar: "الْأَمِيرِ" }],
        [{ ar: "سُورُ الْمَدِينَةِ" }, { ar: "سُورُ" }, { ar: "الْمَدِينَةِ" }],
        [{ ar: "بَابُ الْبَيْتِ" }, { ar: "بَابُ" }, { ar: "الْبَيْتِ" }],
        [{ ar: "عِنَانُ الْفَرَسِ" }, { ar: "عِنَانُ" }, { ar: "الْفَرَسِ" }],
        [{ ar: "صَوْتُ الْحَقِّ يَعْلُو" }, { id: "*Shautu*: mubtada'", ar: "صوتُ: مبتدأ" }, { ar: "الْحَقِّ" }]
      ] },
    { t: "judul", id: "3. Jarr secara Tab'iyyah — dan Basmalah", ar: "الجر بالتبعية" },
    { t: "p", id: "Isim juga bisa majrur karena **mengikuti** isim majrur sebelumnya (tawabi': na't, badal, taukid, 'athaf). Ketiga macam jarr berkumpul dalam basmalah:", ar: "وقد يجر الاسم بالتبعية كما في التوابع، وورد أنواع الجر الثلاثة في البسملة." },
    { t: "irab", ayat: "بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ", kata: [
      { w: "بِـ", h: "bina", id: "Huruf jar mabni 'alal-kasr.", ar: "حرف جر مبني على الكسر." },
      { w: "اسْمِ", h: "jar", id: "Majrur **dengan huruf jar** (ba').", ar: "مجرور بحرف الجر." },
      { w: "اللَّهِ", h: "jar", id: "Majrur **dengan idhafah** (mudhaf ilaih).", ar: "مجرور بالإضافة." },
      { w: "الرَّحْمَٰنِ", h: "jar", id: "Majrur **dengan tab'iyyah** — na't.", ar: "نعت مجرور بالتبعية." },
      { w: "الرَّحِيمِ", h: "jar", id: "Na't kedua — majrur dengan tab'iyyah.", ar: "نعت ثانٍ مجرور بالتبعية." }
    ] },

    { t: "judul", id: "Faidah: Yang Dibuang karena Idhafah", ar: "فائدة: ما يحذف للإضافة" },
    { t: "banding",
      kiri: { judul: { id: "Tanwin dibuang", ar: "يحذف التنوين" }, ikon: "x", warna: "amber", poin: [
        { id: "Ini sebuah kitab (bertanwin)", ar: "هَذَا كِتَابٌ" },
        { id: "→ Ini Kitab Allah / kitab Muhammad (tanwin hilang)", ar: "هَذَا كِتَابُ اللهِ، هَذَا كِتَابُ مُحَمَّدٍ" } ] },
      kanan: { judul: { id: "Nun mutsanna & jamak mudzakkar dibuang", ar: "تحذف النون" }, ikon: "x", warna: "amber", poin: [
        { id: "Mereka berdua insinyur", ar: "هَذَانِ مُهَنْدِسَانِ" },
        { id: "→ insinyur perusahaan (nun hilang)", ar: "هَذَانِ مُهَنْدِسَا الشَّرِكَةِ" },
        { id: "Mereka para insinyur → insinyur-insinyur perusahaan", ar: "هَؤُلَاءِ مُهَنْدِسُونَ ← مُهَنْدِسُو الشَّرِكَةِ" } ] } },
    { t: "cek", q: { id: "*Hadzani muhandisa asy-syarikah* — nun pada *muhandisani* dibuang karena…", ar: "حذفت النون من «مهندسا» لأجل…" }, o: [{ id: "Jazm", ar: "الجزم" }, { id: "Idhafah", ar: "الإضافة" }, { id: "Nashab", ar: "النصب" }, { id: "Waqf", ar: "الوقف" }], j: 1, b: { id: "Nun mutsanna dan jamak mudzakkar salim dibuang saat menjadi mudhaf.", ar: "تحذف النون للإضافة." } },

    { t: "judul", id: "Tathbiq: Surah Al-Masad", ar: "التطبيق: سورة المسد" },
    { t: "irab", ayat: "تَبَّتْ يَدَا أَبِي لَهَبٍ وَتَبَّ ۝ مَا أَغْنَىٰ عَنْهُ مَالُهُ وَمَا كَسَبَ", src: "المسد: ١–٢", kata: [
      { w: "تَبَّتْ", h: "bina", id: "*Tabba*: madhi mabni 'alal-fath; ta': ta' ta'nits, tidak berkedudukan i'rab.", ar: "تب فعل ماض مبني على الفتح، والتاء تاء التأنيث لا محل لها من الإعراب." },
      { w: "يَدَا", h: "raf", id: "**Fa'il** marfu' dengan **alif** (mutsanna); **nun dibuang karena idhafah**.", ar: "فاعل مرفوع بالألف لأنه مثنى، وحذفت النون للإضافة." },
      { w: "أَبِي", h: "jar", id: "**Mudhaf ilaih** majrur dengan ya' (al-asma' al-khamsah), sekaligus mudhaf.", ar: "مضاف إليه مجرور بالياء." },
      { w: "لَهَبٍ", h: "jar", id: "**Mudhaf ilaih** majrur dengan kasrah — mudhaf ilaih wajib jarr.", ar: "مضاف إليه مجرور وعلامة جره الكسرة." },
      { w: "وَتَبَّ", h: "bina", id: "**Tiga kata**: waw 'athaf + *tabba* (madhi mabni 'alal-fath) + fa'il mustatir *huwa*.", ar: "الواو حرف عطف، وتب فعل ماض، والفاعل ضمير مستتر تقديره هو." },
      { w: "مَا", h: "bina", id: "Huruf nafi.", ar: "حرف نفي." },
      { w: "أَغْنَى", h: "bina", id: "Madhi mabni 'alal-fath **muqaddar** pada alif karena *ta'adzdzur*.", ar: "فعل ماض مبني على الفتح المقدر على الألف منع من ظهورها التعذر." },
      { w: "عَنْهُ", h: "bina", id: "*'An* huruf jar + *hu* dhamir mabni 'alad-dhamm ***fi mahalli jarr*** — dhamir pun bisa berkedudukan jarr.", ar: "عن حرف جر، والهاء ضمير متصل مبني على الضم في محل جر." },
      { w: "مَالُهُ", h: "raf", id: "*Malu*: **fa'il** marfu'; *hu*: mudhaf ilaih *fi mahalli jarr*.", ar: "مال فاعل مرفوع، والهاء في محل جر مضاف إليه." },
      { w: "وَمَا", h: "bina", id: "Waw 'athaf + *ma* isim maushul mabni 'alas-sukun *fi mahalli raf'*.", ar: "الواو حرف عطف، وما اسم موصول في محل رفع." },
      { w: "كَسَبَ", h: "bina", id: "Madhi mabni 'alal-fath + fa'il mustatir.", ar: "فعل ماض مبني على الفتح، والفاعل مستتر." }
    ] },
    { t: "irab", ayat: "سَيَصْلَىٰ نَارًا ذَاتَ لَهَبٍ ۝ وَامْرَأَتُهُ حَمَّالَةَ الْحَطَبِ ۝ فِي جِيدِهَا حَبْلٌ مِّن مَّسَدٍ", src: "المسد: ٣–٥", kata: [
      { w: "سَـ", h: "bina", id: "Sin: huruf *istiqbal* (masa depan).", ar: "السين حرف استقبال." },
      { w: "يَصْلَى", h: "raf", id: "Mudhari' marfu' dengan dhammah muqaddarah (ta'adzdzur); fa'il mustatir *huwa*. *Sayashla* = huruf + fi'il + isim.", ar: "فعل مضارع مرفوع بضمة مقدرة للتعذر، والفاعل مستتر." },
      { w: "نَارًا", h: "nas", id: "Maf'ul bih manshub.", ar: "مفعول به منصوب." },
      { w: "ذَاتَ", h: "nas", id: "Na't bagi *naran* — manshub.", ar: "نعت لنارًا منصوب." },
      { w: "لَهَبٍ", h: "jar", id: "**Syahid**: mudhaf ilaih majrur dengan kasrah.", ar: "مضاف إليه مجرور وعلامة جره الكسرة." },
      { w: "وَامْرَأَتُهُ", h: "raf", id: "Waw 'athaf; *imra'atu*: ma'thuf kepada dhamir mustatir dalam *yashla*, marfu'; *hu*: mudhaf ilaih.", ar: "الواو حرف عطف، وامرأة معطوف على الضمير المستتر مرفوع، والهاء مضاف إليه." },
      { w: "حَمَّالَةَ", h: "nas", id: "Maf'ul bih bagi fi'il yang dibuang, takdirnya *adzummu* (aku mencela); ia mudhaf.", ar: "مفعول به لفعل محذوف تقديره أذم، وهو مضاف." },
      { w: "الْحَطَبِ", h: "jar", id: "**Syahid**: mudhaf ilaih majrur.", ar: "مضاف إليه مجرور." },
      { w: "فِي", h: "bina", id: "Huruf jar.", ar: "حرف جر." },
      { w: "جِيدِهَا", h: "jar", id: "*Jidi* majrur oleh *fi* (jarr dengan huruf) dan *ha* majrur dengan idhafah — **dua macam jarr berkumpul**.", ar: "جيد اسم مجرور بفي، والهاء في محل جر مضاف إليه؛ فجمعت بين الجر بالحرف والجر بالإضافة." },
      { w: "حَبْلٌ", h: "raf", id: "**Mubtada' mu'akhkhar**.", ar: "مبتدأ مؤخر." },
      { w: "مِّن مَّسَدٍ", h: "jar", id: "*Min* huruf jar + *masadin* majrur.", ar: "من حرف جر، ومسد اسم مجرور." }
    ] },
    { t: "ringkasan", item: [
      { id: "Isim majrur di dua tempat: setelah huruf jar, dan sebagai mudhaf ilaih.", ar: "يجر الاسم بالحرف وبالإضافة." },
      { id: "Huruf jar: *min, ila, 'an, 'ala, fi, rubba*, ba', kaf, lam, waw qasam, ta' qasam (khusus lafzhul jalalah).", ar: "حروف الجر." },
      { id: "Huruf jar: ashliyyah, za'idah (*min, ba', kaf* untuk taukid), syabih biz-za'id (*rubba*).", ar: "أصلية وزائدة وشبيهة بالزائد." },
      { id: "Mudhaf di-i'rab sesuai posisinya; mudhaf ilaih selalu majrur. Jarr juga bisa karena tab'iyyah.", ar: "المضاف بحسب موقعه، والمضاف إليه مجرور دائمًا." },
      { id: "Idhafah membuang tanwin, serta nun mutsanna dan jamak mudzakkar salim.", ar: "يحذف التنوين والنون للإضافة." }
    ] }
  ],
  istilah: [
    { ar: "حروف الجر", latin: "huruf al-jarr", id: "Huruf jar", def: { id: "Huruf yang menjarr isim sesudahnya; semuanya mabni dan khusus masuk pada isim.", ar: "حروف مبنية تختص بالأسماء فتجرها." } },
    { ar: "حرف الجر الأصلي", latin: "harf al-jarr al-ashli", id: "Huruf jar asli", def: { id: "*Min, ila, 'an, 'ala*…", ar: "من، إلى، عن، على." } },
    { ar: "حرف الجر الزائد", latin: "harf al-jarr az-za'id", id: "Huruf jar tambahan", def: { id: "Untuk taukid: *ma ja'ana min basyir*; *bi zhallam*; *ka mitslihi*.", ar: "يؤتى به للتوكيد." } },
    { ar: "الشبيه بالزائد", latin: "asy-syabih biz-za'id", id: "Menyerupai tambahan", def: { id: "*Rubba*: menjarr lafal, i'rab sebenarnya menurut konteks.", ar: "رب: يجر لفظًا ويعرب ما بعده بحسب السياق." } },
    { ar: "المضاف", latin: "al-mudhaf", id: "Yang disandarkan", def: { id: "Isim pertama dalam idhafah; di-i'rab sesuai posisinya.", ar: "يعرب بحسب السياق." } },
    { ar: "المضاف إليه", latin: "al-mudhaf ilaih", id: "Yang disandari", def: { id: "Isim kedua dalam idhafah; selalu majrur.", ar: "مجرور دائمًا." } },
    { ar: "الجر بالتبعية", latin: "al-jarr bit-tab'iyyah", id: "Jarr karena mengikuti", def: { id: "Majrurnya tawabi' (na't, badal, taukid, 'athaf) mengikuti yang diikuti.", ar: "جر التوابع." } },
    { ar: "تاء القسم", latin: "ta' al-qasam", id: "Ta' sumpah", def: { id: "Khusus masuk pada lafzhul jalalah: *tallahi*.", ar: "تختص بلفظ الجلالة." } },
    { ar: "حرف الاستقبال", latin: "harf al-istiqbal", id: "Huruf masa depan", def: { id: "Sin dan *saufa*: *sayashla*.", ar: "السين وسوف." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Isim majrur di… tempat.", ar: "يجر الاسم في…" }, o: [{ id: "Satu", ar: "موضع" }, { id: "Dua", ar: "موضعين" }, { id: "Enam", ar: "ستة" }, { id: "Sebelas", ar: "أحد عشر" }], j: 1 },
      { q: { id: "Huruf jar yang **khusus** masuk pada lafzhul jalalah adalah…", ar: "ما يختص بلفظ الجلالة…" }, o: [{ id: "Waw qasam", ar: "واو القسم" }, { id: "Ta' qasam", ar: "تاء القسم" }, { id: "Ba'", ar: "الباء" }, { id: "Lam", ar: "اللام" }], j: 1 },
      { q: { id: "*Ma ja'ana min basyir* — *min* di sini adalah huruf jar…", ar: "«من» في «ما جاءنا من بشير»…" }, o: [{ id: "Ashliyyah", ar: "أصلية" }, { id: "Za'idah (taukid)", ar: "زائدة للتوكيد" }, { id: "Syabih biz-za'id", ar: "شبيهة بالزائد" }, { id: "Bukan huruf jar", ar: "ليست حرف جر" }], j: 1 },
      { q: { id: "*Rubba* termasuk huruf jar…", ar: "«رب» حرف جر…" }, o: [{ id: "Ashliyyah", ar: "أصلي" }, { id: "Za'idah", ar: "زائد" }, { id: "Syabih biz-za'id", ar: "شبيه بالزائد" }, { id: "Qasam", ar: "قسم" }], j: 2 },
      { q: { id: "*Rubba shadiqin khairun min syaqiqin* — *shadiqin* berkedudukan…", ar: "«صديقٍ» في محل…" }, o: [{ id: "Jarr saja", ar: "جر فقط" }, { id: "Majrur lafalnya, *fi mahalli raf'* mubtada'", ar: "مجرور لفظًا في محل رفع مبتدأ" }, { id: "Nashb maf'ul bih", ar: "نصب مفعول به" }, { id: "Raf' fa'il", ar: "رفع فاعل" }], j: 1 },
      { q: { id: "Mudhaf ilaih selalu…", ar: "المضاف إليه دائمًا…" }, o: [{ id: "Marfu'", ar: "مرفوع" }, { id: "Manshub", ar: "منصوب" }, { id: "Majrur", ar: "مجرور" }, { id: "Mabni", ar: "مبني" }], j: 2 },
      { q: { id: "Dalam basmalah, *Allahi* majrur karena…", ar: "«الله» في البسملة مجرور…" }, o: [{ id: "Huruf jar", ar: "بالحرف" }, { id: "Idhafah", ar: "بالإضافة" }, { id: "Tab'iyyah", ar: "بالتبعية" }, { id: "Qasam", ar: "بالقسم" }], j: 1 },
      { q: { id: "Yang dibuang karena idhafah adalah…", ar: "يحذف للإضافة…" }, o: [{ id: "Tanwin dan nun mutsanna/jamak", ar: "التنوين والنون" }, { id: "Alif lam", ar: "أل" }, { id: "Huruf 'illat", ar: "حرف العلة" }, { id: "Ta' marbuthah", ar: "التاء المربوطة" }], j: 0 },
      { q: { id: "{تَبَّتْ يَدَا} — *yada* marfu' dengan…", ar: "«يدا» مرفوع بـ…" }, o: [{ id: "Dhammah", ar: "الضمة" }, { id: "Alif (mutsanna), nun dibuang karena idhafah", ar: "الألف وحذفت النون للإضافة" }, { id: "Waw", ar: "الواو" }, { id: "Tsubut an-nun", ar: "ثبوت النون" }], j: 1 },
      { q: { id: "{فِي جِيدِهَا} mengumpulkan…", ar: "«في جيدها» جمعت…" }, o: [{ id: "Jarr dengan huruf dan jarr dengan idhafah", ar: "الجر بالحرف والجر بالإضافة" }, { id: "Rafa' dan nashab", ar: "الرفع والنصب" }, { id: "Dua na't", ar: "نعتين" }, { id: "Jarr tab'iyyah saja", ar: "التبعية" }], j: 0 }
    ],
    bs: [
      { t: { id: "Huruf jar bisa masuk pada fi'il.", ar: "حروف الجر تدخل على الأفعال." }, j: false, b: { id: "Hanya pada isim.", ar: "تختص بالأسماء." } },
      { t: { id: "Waw qasam bisa masuk pada lafzhul jalalah maupun selainnya.", ar: "واو القسم تدخل على الجلالة وغيرها." }, j: true },
      { t: { id: "Kaf dalam {لَيْسَ كَمِثْلِهِ شَيْءٌ} adalah huruf jar za'idah untuk taukid.", ar: "الكاف زائدة للتوكيد." }, j: true },
      { t: { id: "Mudhaf selalu majrur.", ar: "المضاف مجرور دائمًا." }, j: false, b: { id: "Mudhaf di-i'rab sesuai posisinya; yang selalu majrur adalah mudhaf ilaih.", ar: "المضاف بحسب السياق." } },
      { t: { id: "*Ar-Rahmani* dalam basmalah majrur karena tab'iyyah (na't).", ar: "«الرحمن» مجرور بالتبعية." }, j: true },
      { t: { id: "*Hadza kitabullahi* — tanwin *kitab* dibuang karena idhafah.", ar: "حذف التنوين للإضافة." }, j: true },
      { t: { id: "Ha' dalam {عَنْهُ} *fi mahalli nashb*.", ar: "الهاء في «عنه» في محل نصب." }, j: false, b: { id: "*Fi mahalli jarr* setelah huruf jar.", ar: "في محل جر." } },
      { t: { id: "*Hablun* dalam {فِي جِيدِهَا حَبْلٌ} adalah mubtada' mu'akhkhar.", ar: "«حبل» مبتدأ مؤخر." }, j: true }
    ],
    jodoh: [
      { a: { ar: "تَاللهِ" }, b: { id: "Ta' qasam — khusus lafzhul jalalah", ar: "تاء القسم" } },
      { a: { ar: "رُبَّ صَدِيقٍ" }, b: { id: "Syabih biz-za'id", ar: "شبيه بالزائد" } },
      { a: { ar: "مَا جَاءَنَا مِنْ بَشِيرٍ" }, b: { id: "Huruf jar za'idah", ar: "حرف جر زائد" } },
      { a: { ar: "بِسْمِ" }, b: { id: "Jarr dengan huruf", ar: "الجر بالحرف" } },
      { a: { ar: "اللهِ (في البسملة)" }, b: { id: "Jarr dengan idhafah", ar: "الجر بالإضافة" } },
      { a: { ar: "الرَّحِيمِ" }, b: { id: "Jarr dengan tab'iyyah", ar: "الجر بالتبعية" } },
      { a: { ar: "مُهَنْدِسُو الشَّرِكَةِ" }, b: { id: "Nun dibuang karena idhafah", ar: "حذف النون للإضافة" } }
    ],
    isian: [
      { t: { id: "Isim majrur setelah huruf jar atau sebagai mudhaf ______.", ar: "يجر الاسم بالحرف أو لكونه مضافًا ______." }, j: { id: "ilaih", ar: "إليه" }, x: [{ id: "fa'il", ar: "فاعلًا" }, { id: "khabar", ar: "خبرًا" }, { id: "hal", ar: "حالًا" }] },
      { t: { id: "Huruf jar dibina' sesuai ______ akhirnya.", ar: "حرف الجر يبنى على ما ______ به." }, j: { id: "bunyi/ucapan", ar: "ينطق" }, x: [{ id: "makna", ar: "يُفهم" }, { id: "asal", ar: "يُشتق" }, { id: "tulisan", ar: "يُكتب" }] },
      { t: { id: "Mudhaf di-i'rab sesuai ______.", ar: "المضاف يعرب بحسب ______." }, j: { id: "posisinya dalam kalimat", ar: "السياق" }, x: [{ id: "selalu majrur", ar: "الجر" }, { id: "selalu manshub", ar: "النصب" }, { id: "huruf jar", ar: "الحرف" }] },
      { t: { id: "*Hadzani muhandisani* → *hadzani muhandisa asy-syarikah*: yang dibuang adalah ______.", ar: "حذف من «مهندسان» ______." }, j: { id: "nun", ar: "النون" }, x: [{ id: "alif", ar: "الألف" }, { id: "tanwin", ar: "التنوين" }, { id: "mim", ar: "الميم" }] }
    ],
    pilah: { t: { id: "Kata utama majrur karena apa?", ar: "سبب الجر" },
      kategori: [{ id: "Huruf jar", ar: "بالحرف" }, { id: "Idhafah", ar: "بالإضافة" }, { id: "Tab'iyyah", ar: "بالتبعية" }],
      item: [
        { t: { id: "*Al-qahirati* — مِنَ الْقَاهِرَةِ", ar: "القاهرة" }, k: 0 },
        { t: { id: "*Al-qalami* — بِالْقَلَمِ", ar: "القلم" }, k: 0 },
        { t: { id: "*Al-amiri* — خَادِمُ الْأَمِيرِ", ar: "الأمير" }, k: 1 },
        { t: { id: "*Al-madinati* — سُورُ الْمَدِينَةِ", ar: "المدينة" }, k: 1 },
        { t: { id: "*Ar-Rahimi* — بِسْمِ اللهِ الرَّحْمَنِ الرَّحِيمِ", ar: "الرحيم" }, k: 2 },
        { t: { id: "*Al-khannasi* — مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ", ar: "الخناس" }, k: 2 },
        { t: { id: "*Lahabin* — تَبَّتْ يَدَا أَبِي لَهَبٍ", ar: "لهب" }, k: 1 },
        { t: { id: "*Masadin* — مِنْ مَسَدٍ", ar: "مسد" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "في كم موضع يجر الاسم؟ وما حروف الجر؟", id: "Di berapa tempat isim majrur? Sebutkan huruf-huruf jar." }, j: { ar: "في موضعين: إذا سبق بحرف من حروف الجر، وإذا كان مضافًا إليه. وحروف الجر: من، إلى، عن، على، في، رُبَّ، الباء، الكاف، اللام، واو القسم، تاء القسم.", id: "Dua tempat: **setelah huruf jar** dan **sebagai mudhaf ilaih**. Huruf jar: *min, ila, 'an, 'ala, fi, rubba*, ba', kaf, lam, waw qasam, ta' qasam." } },
    { t: { ar: "اذكر أنواع حروف الجر مع التمثيل.", id: "Sebutkan macam-macam huruf jar dengan contoh." }, j: { ar: "أصلية: من، إلى، عن، على. وزائدة للتوكيد: ما جاءنا من بشير، وما ربك بظلام للعبيد، ليس كمثله شيء. وشبيهة بالزائد: رُبَّ، تجر الاسم لفظًا ويعرب ما بعدها بحسب السياق: رب حالٍ أفصح من مقال.", id: "**Ashliyyah**: *min, ila, 'an, 'ala*. **Za'idah** (taukid): *ma ja'ana min basyir; bi zhallam; ka mitslihi*. **Syabih biz-za'id**: *rubba* — menjarr lafal, i'rab sesungguhnya menurut konteks (*rubba halin afshahu min maqalin*)." } },
    { t: { ar: "ما المضاف إليه؟ وكيف يعرب المضاف؟ مثِّل.", id: "Apa mudhaf ilaih? Bagaimana i'rab mudhaf? Beri contoh." }, j: { ar: "كل اسم نسب إليه اسم سابق يسمى مضافًا إليه وهو مجرور دائمًا، وما قبله مضاف يعرب بحسب السياق، نحو: خادم الأمير، سور المدينة، صوتُ الحقِّ يعلو: صوت مبتدأ، والحق مضاف إليه.", id: "Isim yang kepadanya dinisbatkan isim sebelumnya — **selalu majrur**. Mudhaf di-i'rab sesuai posisinya: *shautu al-haqqi ya'lu* — *shautu* mubtada', *al-haqqi* mudhaf ilaih." } },
    { t: { ar: "بيِّن أنواع الجر الثلاثة في البسملة.", id: "Jelaskan tiga macam jarr dalam basmalah." }, j: { ar: "اسم: مجرور بحرف الجر الباء. الله: مجرور بالإضافة. الرحمن والرحيم: نعتان مجروران بالتبعية.", id: "*Ismi*: majrur dengan huruf (ba'). *Allahi*: majrur dengan idhafah. *Ar-Rahmani, ar-Rahimi*: na't — majrur dengan tab'iyyah." } },
    { t: { ar: "ما الذي يحذف للإضافة؟ مثِّل، ثم أعرب: ﴿تَبَّتْ يَدَا أَبِي لَهَبٍ﴾.", id: "Apa yang dibuang karena idhafah? Beri contoh, lalu i'rablah {تَبَّتْ يَدَا أَبِي لَهَبٍ}." }, j: { ar: "يحذف التنوين: كتابٌ ← كتابُ الله، والنون من المثنى وجمع المذكر: مهندسان ← مهندسا الشركة، مهندسون ← مهندسو الشركة. تبت: تب فعل ماض مبني على الفتح والتاء للتأنيث. يدا: فاعل مرفوع بالألف وحذفت النون للإضافة. أبي: مضاف إليه مجرور بالياء. لهب: مضاف إليه مجرور بالكسرة.", id: "Dibuang **tanwin** (*kitabun → kitabullah*) dan **nun** mutsanna/jamak mudzakkar (*muhandisa asy-syarikah, muhandisu asy-syarikah*). I'rab: *tabbat* = madhi + ta' ta'nits; *yada* = fa'il marfu' dengan alif, nun dibuang karena idhafah; *abi* = mudhaf ilaih majrur dengan ya'; *lahabin* = mudhaf ilaih majrur dengan kasrah." } }
  ]
});
