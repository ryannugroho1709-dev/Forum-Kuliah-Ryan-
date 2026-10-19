/* Nahwu — Pertemuan 3: Macam-macam I'rab dan Tandanya (Mutsanna & Jamak Salim) */
Kuliah.pertemuan("nahwu", {
  no: 3, motif: "harakat", motifOpt: { lbl: "أنواع الإعراب" }, tema: 6, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/146",
  bab: { id: "Macam i'rab & tandanya", ar: "أنواع الإعراب وعلاماته" },
  judul: { id: "Macam-macam I'rab: Tanda Asli dan Tanda Pengganti", ar: "أنواع الإعراب: العلامات الأصلية والفرعية" },
  ringkas: {
    id: "I'rab adalah berubahnya akhir kata karena berbedanya 'amil. Keadaan i'rab ada empat: **rafa', nashab, jarr, jazm** — rafa' dan nashab untuk isim dan fi'il, jarr khusus isim, jazm khusus fi'il. Tanda aslinya dhammah, fathah, kasrah, sukun. Lalu tanda pengganti (*far'iyyah*) pada **mutsanna, jamak mudzakkar salim, dan jamak mu'annats salim**, dengan tathbiq Surah Al-Buruj.",
    ar: "الإعراب تغير أواخر الكلمات لاختلاف العوامل، وأحواله أربعة: الرفع والنصب والجر والجزم، وعلاماته الأصلية: الضمة والفتحة والكسرة والسكون، ثم العلامات الفرعية في المثنى وجمع المذكر السالم وجمع المؤنث السالم، مع التطبيق على سورة البروج."
  },
  tujuan: [
    { id: "Menyebut empat keadaan i'rab dan mana yang khusus isim/fi'il.", ar: "ذكر أحوال الإعراب الأربعة وما يختص منها بالاسم أو الفعل." },
    { id: "Menyebut tanda asli i'rab.", ar: "معرفة العلامات الأصلية." },
    { id: "Mengi'rab mutsanna, jamak mudzakkar salim, dan jamak mu'annats salim.", ar: "إعراب المثنى وجمع المذكر السالم وجمع المؤنث السالم." },
    { id: "Membedakan tanda asli dan tanda pengganti dalam ayat.", ar: "التمييز بين العلامة الأصلية والفرعية في الآيات." }
  ],
  isi: [
    { t: "judul", id: "Apa Itu I'rab?", ar: "ما الإعراب؟" },
    { t: "definisi", istilah: { id: "**Berubahnya akhir kata karena berbedanya 'amil** (faktor) yang masuk kepadanya.", ar: "تغير أواخر الكلمات لاختلاف العوامل الداخلة عليها." } },
    { t: "contoh", judul: { id: "Satu kata, tiga keadaan", ar: "كلمة واحدة وثلاث حالات" },
      sorot: [
        { label: { id: "Fa'il", ar: "فاعل" }, warna: "blue", id: "Datang Muhammad — *Muhammadun* dengan dhammah.", ar: "جَاءَ مُحَمَّدٌ" },
        { label: { id: "Maf'ul bih", ar: "مفعول به" }, warna: "green", id: "Aku melihat Muhammad — *Muhammadan* dengan fathah.", ar: "رَأَيْتُ مُحَمَّدًا" },
        { label: { id: "Setelah huruf jar", ar: "بعد حرف الجر" }, warna: "gold", id: "Aku melewati Muhammad — *Muhammadin* dengan kasrah.", ar: "مَرَرْتُ بِمُحَمَّدٍ" }
      ] },
    { t: "catatan", gaya: "info", judul: { id: "I'rab hanya pada isim dan fi'il", ar: "لا إعراب في الحروف" }, id: "Huruf semuanya mabni. Isim pada asalnya mu'rab (kecuali dhamir, isim maushul, isim isyarah, isim syarat). Fi'il pada asalnya mabni — madhi dan amr mabni — sedangkan **mudhari' mu'rab** kecuali bersambung nun taukid/nun niswah.", ar: "الإعراب لا يكون إلا في الأسماء والأفعال، أما الحروف فكلها مبنية." },

    { t: "judul", id: "Empat Keadaan I'rab", ar: "أحوال الإعراب الأربعة" },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Masuk pada", ar: "تدخل على" }, { id: "Tanda asli", ar: "العلامة الأصلية" }],
      baris: [
        [{ id: "Rafa'", ar: "الرفع" }, { id: "Isim & fi'il", ar: "الاسم والفعل" }, { id: "Dhammah", ar: "الضمة" }],
        [{ id: "Nashab", ar: "النصب" }, { id: "Isim & fi'il", ar: "الاسم والفعل" }, { id: "Fathah", ar: "الفتحة" }],
        [{ id: "Jarr", ar: "الجر" }, { id: "**Khusus isim**", ar: "يختص بالأسماء" }, { id: "Kasrah", ar: "الكسرة" }],
        [{ id: "Jazm", ar: "الجزم" }, { id: "**Khusus fi'il**", ar: "يختص بالأفعال" }, { id: "Sukun", ar: "السكون" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Kunci mudah", ar: "قاعدة" }, id: "**Isim tidak dijazm, fi'il tidak dijarr.** Perubahan pada fi'il dengan dhammah, fathah, sukun; pada isim dengan dhammah, fathah, kasrah.", ar: "الأسماء لا تجزم والأفعال لا تجر؛ فتغير الفعل بالضمة والفتحة والسكون، وتغير الاسم بالضمة والفتحة والكسرة." },
    { t: "banding", judul: { id: "Dua golongan tanda i'rab", ar: "علامات الإعراب قسمان" },
      kiri: { judul: { id: "Tanda asli (ashliyyah)", ar: "العلامات الأصلية" }, ikon: "star8", warna: "blue", poin: [{ id: "Dhammah untuk rafa'", ar: "الضمة للرفع" }, { id: "Fathah untuk nashab", ar: "الفتحة للنصب" }, { id: "Kasrah untuk jarr", ar: "الكسرة للجر" }, { id: "Sukun untuk jazm", ar: "السكون للجزم" }] },
      kanan: { judul: { id: "Tanda pengganti (far'iyyah)", ar: "العلامات الفرعية" }, ikon: "swap", warna: "amber", poin: [{ id: "Huruf/harakat lain yang **menggantikan** (*niyabatan 'an*) tanda asli", ar: "ما ينوب عن العلامة الأصلية" }, { id: "Pada mutsanna, jamak mudzakkar salim, jamak mu'annats salim (pelajaran ini), dll.", ar: "كالمثنى والجمعين" }] } },

    { t: "judul", id: "I'rab Mutsanna", ar: "إعراب المثنى" },
    { t: "p", id: "Mutsanna: isim yang menunjukkan dua dengan tambahan alif-nun atau ya'-nun. **Rafa' dengan alif** sebagai pengganti dhammah; **nashab dan jarr dengan ya'** sebagai pengganti fathah dan kasrah.", ar: "المثنى يرفع بالألف نيابة عن الضمة، وينصب ويجر بالياء نيابة عن الفتحة والكسرة." },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Contoh", ar: "المثال" }, { id: "I'rab", ar: "الإعراب" }],
      baris: [
        [{ id: "Rafa'", ar: "رفع" }, { ar: "حَضَرَ هُنَا رَجُلَانِ" }, { id: "*Rajulani*: fa'il marfu' dengan **alif** pengganti dhammah, karena mutsanna", ar: "فاعل مرفوع وعلامة رفعه الألف نيابة عن الضمة" }],
        [{ id: "Nashab", ar: "نصب" }, { ar: "أَكْرَمْتُ الرَّجُلَيْنِ" }, { id: "*Ar-rajulaini*: maf'ul bih manshub dengan **ya'** pengganti fathah", ar: "مفعول به منصوب وعلامة نصبه الياء نيابة عن الفتحة" }],
        [{ id: "Jarr", ar: "جر" }, { ar: "نَظَرْتُ إِلَى الرَّجُلَيْنِ" }, { id: "Majrur oleh *ila* dengan **ya'** pengganti kasrah", ar: "اسم مجرور وعلامة جره الياء نيابة عن الكسرة" }]
      ] },

    { t: "judul", id: "I'rab Jamak Mudzakkar Salim", ar: "إعراب جمع المذكر السالم" },
    { t: "p", id: "**Rafa' dengan waw** pengganti dhammah; **nashab dan jarr dengan ya'** pengganti fathah dan kasrah.", ar: "يرفع بالواو نيابة عن الضمة، وينصب ويجر بالياء نيابة عن الفتحة والكسرة." },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Contoh", ar: "المثال" }, { id: "I'rab", ar: "الإعراب" }],
      baris: [
        [{ id: "Rafa'", ar: "رفع" }, { ar: "خَرَجَ الْمُهَنْدِسُونَ" }, { id: "Fa'il marfu' dengan **waw** pengganti dhammah", ar: "فاعل مرفوع وعلامة رفعه الواو" }],
        [{ id: "Nashab", ar: "نصب" }, { ar: "وَدَّعْتُ الْمُهَنْدِسِينَ" }, { id: "Maf'ul bih manshub dengan **ya'** pengganti fathah", ar: "مفعول به منصوب وعلامة نصبه الياء" }],
        [{ id: "Jarr", ar: "جر" }, { ar: "نَظَرْتُ إِلَى الْمُهَنْدِسِينَ" }, { id: "Majrur dengan **ya'** pengganti kasrah", ar: "مجرور وعلامة جره الياء" }]
      ] },
    { t: "catatan", gaya: "info", judul: { id: "Fi'il madhi + ta' fa'il", ar: "الماضي مع تاء الفاعل" }, id: "Pada *wadda'tu* dan *akramtu*: fi'il madhi **mabni 'alas-sukun** karena bersambung dengan dhamir rafa' berharakat (ta' fa'il); ta'-nya dhamir mabni 'alad-dhamm *fi mahalli raf'in* fa'il.", ar: "ودَّعْتُ: فعل ماض مبني على السكون لاتصاله بتاء الفاعل، والتاء ضمير مبني على الضم في محل رفع فاعل." },

    { t: "judul", id: "I'rab Jamak Mu'annats Salim", ar: "إعراب جمع المؤنث السالم" },
    { t: "p", id: "Yang istimewa hanya **nashab dengan kasrah** sebagai pengganti fathah. Rafa'-nya tetap dengan dhammah (asli) dan jarr-nya tetap dengan kasrah (asli).", ar: "ينصب بالكسرة نيابة عن الفتحة، ويرفع بالضمة ويجر بالكسرة على الأصل." },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Contoh", ar: "المثال" }, { id: "I'rab", ar: "الإعراب" }],
      baris: [
        [{ id: "Rafa'", ar: "رفع" }, { ar: "أَيْنَعَتِ الشَّجَرَاتُ" }, { id: "Fa'il marfu' dengan dhammah (asli). Ta' *aina'at* = ta' ta'nits, dikasrah karena bertemu dua sukun", ar: "فاعل مرفوع بالضمة الأصلية" }],
        [{ id: "Nashab", ar: "نصب" }, { ar: "غَرَسْتُ شَجَرَاتٍ — رَأَيْتُ طَالِبَاتٍ" }, { id: "Maf'ul bih manshub dengan **kasrah** pengganti fathah", ar: "منصوب وعلامة نصبه الكسرة نيابة عن الفتحة" }],
        [{ id: "Jarr", ar: "جر" }, { ar: "جِئْتُ بِشَجَرَاتٍ أُخْرَى" }, { id: "Majrur dengan kasrah (asli)", ar: "مجرور بالكسرة الأصلية" }]
      ] },
    { t: "balik", judul: { id: "Uji ingatan: balik kartunya", ar: "اقلب البطاقة" }, item: [
      { depan: { id: "Mutsanna — rafa'", ar: "المثنى رفعًا" }, belakang: { id: "Alif (pengganti dhammah)", ar: "الألف" } },
      { depan: { id: "Mutsanna — nashab & jarr", ar: "المثنى نصبًا وجرًا" }, belakang: { id: "Ya'", ar: "الياء" } },
      { depan: { id: "Jamak mudzakkar salim — rafa'", ar: "جمع المذكر رفعًا" }, belakang: { id: "Waw", ar: "الواو" } },
      { depan: { id: "Jamak mudzakkar salim — nashab & jarr", ar: "جمع المذكر نصبًا وجرًا" }, belakang: { id: "Ya'", ar: "الياء" } },
      { depan: { id: "Jamak mu'annats salim — nashab", ar: "جمع المؤنث نصبًا" }, belakang: { id: "Kasrah (pengganti fathah)", ar: "الكسرة" } },
      { depan: { id: "Jamak mu'annats salim — rafa' & jarr", ar: "جمع المؤنث رفعًا وجرًا" }, belakang: { id: "Dhammah & kasrah (asli)", ar: "الضمة والكسرة" } }
    ] },
    { t: "cek", q: { id: "*Ra'aitu thalibatin* — *thalibat* manshub dengan…", ar: "«رأيت طالباتٍ» منصوب بـ…" }, o: [{ id: "Fathah", ar: "الفتحة" }, { id: "Ya'", ar: "الياء" }, { id: "Kasrah pengganti fathah", ar: "الكسرة نيابة عن الفتحة" }, { id: "Alif", ar: "الألف" }], j: 2, b: { id: "Jamak mu'annats salim dinashab dengan kasrah.", ar: "جمع المؤنث السالم ينصب بالكسرة." } },

    { t: "judul", id: "Tathbiq: Surah Al-Buruj (1–7)", ar: "التطبيق: سورة البروج" },
    { t: "p", id: "Kini setiap kata ditanya: **mabni atau mu'rab? Jika mu'rab, tandanya asli atau pengganti?**", ar: "نسأل عن كل كلمة: مبنية أم معربة؟ وإن كانت معربة فبعلامة أصلية أم فرعية؟" },
    { t: "irab", ayat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ وَالْيَوْمِ الْمَوْعُودِ ۝ وَشَاهِدٍ وَمَشْهُودٍ ۝ قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ", src: "البروج: ١–٥", kata: [
      { w: "وَ", h: "bina", id: "Huruf qasam & jar — **huruf mabni** (setiap kali menyebut huruf, ikuti dengan \"mabni\").", ar: "حرف قسم وجر مبني." },
      { w: "السَّمَاءِ", h: "jar", id: "Isim majrur oleh waw dengan **kasrah — tanda asli**.", ar: "اسم مجرور بالواو وعلامة جره الكسرة، وهي علامة أصلية." },
      { w: "ذَاتِ", h: "jar", id: "Isim majrur — kasrah asli.", ar: "اسم مجرور بعلامة أصلية." },
      { w: "الْبُرُوجِ", h: "jar", id: "Majrur dengan kasrah asli.", ar: "مجرور بالكسرة الأصلية." },
      { w: "وَالْيَوْمِ", h: "jar", id: "Waw 'athaf mabni 'alal-fath + *al-yaum* majrur, kasrah asli.", ar: "الواو حرف عطف مبني، واليوم مجرور بالكسرة." },
      { w: "الْمَوْعُودِ", h: "jar", id: "Majrur, kasrah asli.", ar: "مجرور بالكسرة الأصلية." },
      { w: "وَشَاهِدٍ", h: "jar", id: "Di-'athaf-kan, majrur dengan kasrah asli.", ar: "اسم معطوف مجرور بالكسرة الأصلية." },
      { w: "وَمَشْهُودٍ", h: "jar", id: "Sama seperti *wa syahidin*.", ar: "نفس إعراب «وشاهد»." },
      { w: "قُتِلَ", h: "bina", id: "Fi'il madhi **mabni 'alal-fath**, *mabni lil-majhul* (bentuk pasif).", ar: "فعل ماض مبني على الفتح، مبني للمجهول." },
      { w: "أَصْحَابُ", h: "raf", id: "Isim mu'rab, marfu' dengan **dhammah asli**.", ar: "اسم معرب مرفوع بالضمة الأصلية." },
      { w: "الْأُخْدُودِ", h: "jar", id: "Majrur, kasrah asli.", ar: "مجرور بالكسرة الأصلية." },
      { w: "النَّارِ ذَاتِ الْوَقُودِ", h: "jar", id: "Ketiganya mu'rab, majrur dengan kasrah asli.", ar: "أسماء معربة مجرورة بالكسرة الأصلية." }
    ] },
    { t: "irab", ayat: "إِذْ هُمْ عَلَيْهَا قُعُودٌ ۝ وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ", src: "البروج: ٦–٧", kata: [
      { w: "إِذْ", h: "bina", id: "Zharf **mabni 'alas-sukun**.", ar: "ظرف مبني على السكون." },
      { w: "هُمْ", h: "bina", id: "Dhamir munfashil **mabni 'alas-sukun**.", ar: "ضمير منفصل مبني على السكون." },
      { w: "عَلَيْ", h: "bina", id: "*'Ala* — huruf jar mabni 'alas-sukun.", ar: "حرف جر مبني على السكون." },
      { w: "هَا", h: "bina", id: "Dhamir muttashil mabni 'alas-sukun *fi mahalli jarr*.", ar: "ضمير متصل مبني على السكون في محل جر." },
      { w: "قُعُودٌ", h: "raf", id: "Marfu' dengan dhammah asli.", ar: "مرفوع بعلامة أصلية وهي الضمة." },
      { w: "وَهُمْ", h: "bina", id: "Waw 'athaf mabni + *hum* dhamir mabni 'alas-sukun.", ar: "الواو حرف عطف مبني، وهم ضمير مبني على السكون." },
      { w: "عَلَى", h: "bina", id: "Huruf jar mabni.", ar: "حرف جر مبني." },
      { w: "مَا", h: "bina", id: "Isim maushul **mabni 'alas-sukun**.", ar: "اسم موصول مبني على السكون." },
      { w: "يَفْعَلُونَ", h: "raf", id: "Fi'il mudhari' mu'rab (tanpa nun taukid/niswah), marfu' dengan **tanda pengganti: tsubut an-nun** (tetapnya nun). Waw jama'ah: dhamir muttashil mabni *fi mahalli raf'in* fa'il.", ar: "فعل مضارع مرفوع بعلامة فرعية وهي ثبوت النون، والواو ضمير متصل مبني في محل رفع فاعل." },
      { w: "بِـ", h: "bina", id: "Ba' jar **mabni 'alal-kasr** (karena diucapkan kasrah).", ar: "الباء حرف جر مبني على الكسر." },
      { w: "الْمُؤْمِنِينَ", h: "jar", id: "**Inilah syahidnya**: majrur oleh ba' dengan **ya' pengganti kasrah**, karena jamak mudzakkar salim (mufrad *mu'min*; rafa' *mu'minun*, nashab-jarr *mu'minin*).", ar: "اسم مجرور بالباء وعلامة جره الياء نيابة عن الكسرة؛ لأنه جمع مذكر سالم." },
      { w: "شُهُودٌ", h: "raf", id: "Mu'rab, marfu' dengan dhammah asli.", ar: "معرب مرفوع بعلامة أصلية." }
    ] },
    { t: "ringkasan", item: [
      { id: "I'rab = berubahnya akhir kata karena berbedanya 'amil; hanya pada isim dan fi'il.", ar: "الإعراب تغير أواخر الكلم لاختلاف العوامل." },
      { id: "Keadaan i'rab: rafa', nashab (isim & fi'il), jarr (khusus isim), jazm (khusus fi'il).", ar: "الرفع والنصب مشتركان، والجر للأسماء، والجزم للأفعال." },
      { id: "Tanda asli: dhammah, fathah, kasrah, sukun.", ar: "العلامات الأصلية: الضمة والفتحة والكسرة والسكون." },
      { id: "Mutsanna: alif / ya'. Jamak mudzakkar salim: waw / ya'. Jamak mu'annats salim: nashab dengan kasrah.", ar: "المثنى بالألف والياء، وجمع المذكر بالواو والياء، وجمع المؤنث ينصب بالكسرة." }
    ] }
  ],
  istilah: [
    { ar: "الإعراب", latin: "al-i'rab", id: "Perubahan akhir kata", def: { id: "Berubahnya akhir kata karena berbedanya 'amil yang masuk.", ar: "تغير أواخر الكلمات لاختلاف العوامل الداخلة عليها." } },
    { ar: "الرفع", latin: "ar-raf'", id: "Rafa'", def: { id: "Keadaan i'rab untuk isim & fi'il; tanda aslinya dhammah.", ar: "يكون في الأسماء والأفعال، وعلامته الأصلية الضمة." } },
    { ar: "النصب", latin: "an-nashb", id: "Nashab", def: { id: "Keadaan i'rab untuk isim & fi'il; tanda aslinya fathah.", ar: "علامته الأصلية الفتحة." } },
    { ar: "الجر", latin: "al-jarr", id: "Jarr", def: { id: "Khusus isim; tanda aslinya kasrah.", ar: "يختص بالأسماء، وعلامته الكسرة." } },
    { ar: "الجزم", latin: "al-jazm", id: "Jazm", def: { id: "Khusus fi'il; tanda aslinya sukun.", ar: "يختص بالأفعال، وعلامته السكون." } },
    { ar: "العلامة الفرعية", latin: "al-'alamah al-far'iyyah", id: "Tanda pengganti", def: { id: "Tanda yang menggantikan (*niyabatan 'an*) tanda asli, mis. alif pada mutsanna.", ar: "ما ينوب عن العلامة الأصلية." } },
    { ar: "المثنى", latin: "al-mutsanna", id: "Bentuk dua", def: { id: "Rafa' dengan alif; nashab & jarr dengan ya'.", ar: "يرفع بالألف وينصب ويجر بالياء." } },
    { ar: "جمع المؤنث السالم", latin: "jam' al-mu'annats as-salim", id: "Jamak mu'annats salim", def: { id: "Nashab dengan kasrah; rafa' dhammah, jarr kasrah.", ar: "ينصب بالكسرة نيابة عن الفتحة." } },
    { ar: "ثبوت النون", latin: "tsubut an-nun", id: "Tetapnya nun", def: { id: "Tanda rafa' pengganti pada *al-af'al al-khamsah*, mis. *yaf'alun*.", ar: "علامة رفع الأفعال الخمسة." } }
  ],
  latihan: {
    pg: [
      { q: { id: "I'rab secara istilah adalah…", ar: "الإعراب اصطلاحًا…" }, o: [{ id: "Tetapnya akhir kata", ar: "لزوم آخر الكلمة" }, { id: "Berubahnya akhir kata karena berbedanya 'amil", ar: "تغير أواخر الكلم لاختلاف العوامل" }, { id: "Menerjemahkan kalimat", ar: "ترجمة الجملة" }, { id: "Membuang huruf akhir", ar: "حذف الآخر" }], j: 1 },
      { q: { id: "Keadaan i'rab yang khusus untuk isim adalah…", ar: "ما يختص بالأسماء…" }, o: [{ id: "Rafa'", ar: "الرفع" }, { id: "Nashab", ar: "النصب" }, { id: "Jarr", ar: "الجر" }, { id: "Jazm", ar: "الجزم" }], j: 2 },
      { q: { id: "Tanda asli jazm adalah…", ar: "العلامة الأصلية للجزم…" }, o: [{ id: "Kasrah", ar: "الكسرة" }, { id: "Sukun", ar: "السكون" }, { id: "Hadzf", ar: "الحذف" }, { id: "Fathah", ar: "الفتحة" }], j: 1 },
      { q: { id: "*Hadhara huna rajulani* — *rajulani* marfu' dengan…", ar: "«رجلان» مرفوع بـ…" }, o: [{ id: "Dhammah", ar: "الضمة" }, { id: "Waw", ar: "الواو" }, { id: "Alif", ar: "الألف" }, { id: "Ya'", ar: "الياء" }], j: 2 },
      { q: { id: "*Wadda'tu al-muhandisin* — *al-muhandisin* manshub dengan…", ar: "«المهندسين» منصوب بـ…" }, o: [{ id: "Fathah", ar: "الفتحة" }, { id: "Ya' pengganti fathah", ar: "الياء نيابة عن الفتحة" }, { id: "Kasrah", ar: "الكسرة" }, { id: "Alif", ar: "الألف" }], j: 1 },
      { q: { id: "*Ghorastu syajaratin* — *syajarat* manshub dengan…", ar: "«شجرات» منصوب بـ…" }, o: [{ id: "Fathah", ar: "الفتحة" }, { id: "Ya'", ar: "الياء" }, { id: "Kasrah pengganti fathah", ar: "الكسرة نيابة عن الفتحة" }, { id: "Dhammah", ar: "الضمة" }], j: 2 },
      { q: { id: "*Aina'at asy-syajaratu* — *asy-syajaratu* marfu' dengan…", ar: "«الشجراتُ» مرفوع بـ…" }, o: [{ id: "Dhammah (asli)", ar: "الضمة الأصلية" }, { id: "Waw", ar: "الواو" }, { id: "Alif", ar: "الألف" }, { id: "Kasrah", ar: "الكسرة" }], j: 0 },
      { q: { id: "Dalam {بِالْمُؤْمِنِينَ}, tanda jarr *al-mu'minin* adalah…", ar: "علامة جر «المؤمنين»…" }, o: [{ id: "Kasrah", ar: "الكسرة" }, { id: "Ya' pengganti kasrah", ar: "الياء نيابة عن الكسرة" }, { id: "Fathah", ar: "الفتحة" }, { id: "Waw", ar: "الواو" }], j: 1 },
      { q: { id: "{يَفْعَلُونَ} marfu' dengan…", ar: "«يفعلون» مرفوع بـ…" }, o: [{ id: "Dhammah", ar: "الضمة" }, { id: "Tsubut an-nun", ar: "ثبوت النون" }, { id: "Waw", ar: "الواو" }, { id: "Ia mabni", ar: "مبني" }], j: 1 },
      { q: { id: "Isim **tidak** bisa dalam keadaan…", ar: "الاسم لا يكون…" }, o: [{ id: "Marfu'", ar: "مرفوعًا" }, { id: "Manshub", ar: "منصوبًا" }, { id: "Majrur", ar: "مجرورًا" }, { id: "Majzum", ar: "مجزومًا" }], j: 3 }
    ],
    bs: [
      { t: { id: "Rafa' dan nashab terdapat pada isim maupun fi'il.", ar: "الرفع والنصب مشتركان." }, j: true },
      { t: { id: "Fi'il bisa dijarr.", ar: "الفعل يُجر." }, j: false, b: { id: "Jarr khusus isim.", ar: "الجر يختص بالأسماء." } },
      { t: { id: "Mutsanna dinashab dengan ya' pengganti fathah.", ar: "المثنى ينصب بالياء." }, j: true },
      { t: { id: "Jamak mudzakkar salim dirafa' dengan alif.", ar: "جمع المذكر يرفع بالألف." }, j: false, b: { id: "Dengan waw.", ar: "بالواو." } },
      { t: { id: "Jamak mu'annats salim dijarr dengan kasrah asli.", ar: "جمع المؤنث يجر بالكسرة الأصلية." }, j: true },
      { t: { id: "*Asshabu* dalam {قُتِلَ أَصْحَابُ الْأُخْدُودِ} marfu' dengan tanda asli.", ar: "«أصحابُ» مرفوع بعلامة أصلية." }, j: true },
      { t: { id: "*Qutila* adalah fi'il mabni lil-ma'lum.", ar: "«قُتل» مبني للمعلوم." }, j: false, b: { id: "*Mabni lil-majhul* (pasif).", ar: "مبني للمجهول." } },
      { t: { id: "Huruf bisa mu'rab.", ar: "الحروف قد تعرب." }, j: false, b: { id: "Semua huruf mabni.", ar: "الحروف كلها مبنية." } }
    ],
    jodoh: [
      { a: { id: "Mutsanna — rafa'", ar: "المثنى رفعًا" }, b: { id: "Alif", ar: "الألف" } },
      { a: { id: "Jamak mudzakkar salim — rafa'", ar: "جمع المذكر رفعًا" }, b: { id: "Waw", ar: "الواو" } },
      { a: { id: "Jamak mu'annats salim — nashab", ar: "جمع المؤنث نصبًا" }, b: { id: "Kasrah", ar: "الكسرة" } },
      { a: { id: "Mutsanna & jamak mudzakkar — nashab/jarr", ar: "المثنى والجمع نصبًا وجرًا" }, b: { id: "Ya'", ar: "الياء" } },
      { a: { id: "Tanda asli nashab", ar: "علامة النصب الأصلية" }, b: { id: "Fathah", ar: "الفتحة" } },
      { a: { id: "Tanda asli jazm", ar: "علامة الجزم الأصلية" }, b: { id: "Sukun", ar: "السكون" } }
    ],
    isian: [
      { t: { id: "Jarr khusus untuk ______, sedangkan jazm khusus untuk fi'il.", ar: "الجر يختص بـ______، والجزم بالأفعال." }, j: { id: "isim", ar: "الأسماء" }, x: [{ id: "huruf", ar: "الحروف" }, { id: "fi'il", ar: "الأفعال" }, { id: "dhamir", ar: "الضمائر" }] },
      { t: { id: "Mutsanna dirafa' dengan alif ______ dhammah.", ar: "يرفع المثنى بالألف ______ عن الضمة." }, j: { id: "pengganti (niyabatan)", ar: "نيابةً" }, x: [{ id: "bersama", ar: "مع" }, { id: "sebelum", ar: "قبل" }, { id: "tanpa", ar: "دون" }] },
      { t: { id: "Jamak mu'annats salim dinashab dengan ______.", ar: "جمع المؤنث السالم ينصب بـ______." }, j: { id: "kasrah", ar: "الكسرة" }, x: [{ id: "fathah", ar: "الفتحة" }, { id: "ya'", ar: "الياء" }, { id: "alif", ar: "الألف" }] },
      { t: { id: "Pada *wadda'tu*, fi'il madhi mabni 'ala ______ karena bersambung ta' fa'il.", ar: "«ودَّعتُ» فعل ماض مبني على ______ لاتصاله بتاء الفاعل." }, j: { id: "sukun", ar: "السكون" }, x: [{ id: "fathah", ar: "الفتح" }, { id: "dhammah", ar: "الضم" }, { id: "kasrah", ar: "الكسر" }] }
    ],
    pilah: { t: { id: "Tanda i'rab kata yang dibahas (isim atau fi'il mu'rabnya): asli atau pengganti?", ar: "صنِّف: علامة أصلية أم فرعية؟" },
      kategori: [{ id: "Asli", ar: "أصلية" }, { id: "Pengganti", ar: "فرعية" }],
      item: [
        { t: { ar: "جَاءَ مُحَمَّدٌ" }, k: 0 }, { t: { ar: "حَضَرَ رَجُلَانِ" }, k: 1 },
        { t: { ar: "خَرَجَ الْمُهَنْدِسُونَ" }, k: 1 }, { t: { ar: "رَأَيْتُ طَالِبَاتٍ" }, k: 1 },
        { t: { ar: "أَيْنَعَتِ الشَّجَرَاتُ" }, k: 0 }, { t: { ar: "جِئْتُ بِشَجَرَاتٍ" }, k: 0 },
        { t: { ar: "يَفْعَلُونَ" }, k: 1 }, { t: { ar: "أَصْحَابُ الْأُخْدُودِ" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف الإعراب، واذكر أحواله، وما يختص منها بالأسماء وما يختص بالأفعال.", id: "Definisikan i'rab, sebutkan keadaannya, mana yang khusus isim dan mana yang khusus fi'il." }, j: { ar: "الإعراب تغير أواخر الكلمات لاختلاف العوامل الداخلة عليها. وأحواله أربعة: الرفع والنصب ويشترك فيهما الاسم والفعل، والجر ويختص بالأسماء، والجزم ويختص بالأفعال.", id: "I'rab = **berubahnya akhir kata karena berbedanya 'amil**. Keadaannya: **rafa' & nashab** (isim dan fi'il), **jarr** (khusus isim), **jazm** (khusus fi'il)." } },
    { t: { ar: "ما العلامات الأصلية للإعراب؟", id: "Apa tanda-tanda asli i'rab?" }, j: { ar: "الضمة للرفع، والفتحة للنصب، والكسرة للجر، والسكون للجزم.", id: "Dhammah (rafa'), fathah (nashab), kasrah (jarr), sukun (jazm)." } },
    { t: { ar: "كيف يعرب المثنى وجمع المذكر السالم؟ مثِّل.", id: "Bagaimana i'rab mutsanna dan jamak mudzakkar salim? Beri contoh." }, j: { ar: "المثنى يرفع بالألف: حضر رجلان، وينصب ويجر بالياء: أكرمت الرجلين، نظرت إلى الرجلين. وجمع المذكر السالم يرفع بالواو: خرج المهندسون، وينصب ويجر بالياء: ودعت المهندسين، نظرت إلى المهندسين.", id: "**Mutsanna**: rafa' alif (*hadhara rajulani*), nashab/jarr ya' (*akramtu ar-rajulaini*). **Jamak mudzakkar salim**: rafa' waw (*kharaja al-muhandisun*), nashab/jarr ya' (*wadda'tu al-muhandisin*)." } },
    { t: { ar: "كيف يعرب جمع المؤنث السالم؟", id: "Bagaimana i'rab jamak mu'annats salim?" }, j: { ar: "يرفع بالضمة: أينعت الشجراتُ، وينصب بالكسرة نيابة عن الفتحة: غرست شجراتٍ، ويجر بالكسرة: جئت بشجراتٍ.", id: "Rafa' dengan dhammah (*aina'at asy-syajaratu*), **nashab dengan kasrah** pengganti fathah (*gharastu syajaratin*), jarr dengan kasrah (*ji'tu bi syajaratin*)." } },
    { t: { ar: "أعرب «بالمؤمنين» و«يفعلون» من قوله تعالى: ﴿وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ﴾.", id: "I'rablah *bil-mu'minin* dan *yaf'alun* dari ayat tersebut." }, j: { ar: "يفعلون: فعل مضارع مرفوع وعلامة رفعه ثبوت النون، والواو ضمير متصل مبني على السكون في محل رفع فاعل. بالمؤمنين: الباء حرف جر مبني على الكسر، والمؤمنين اسم مجرور بالباء وعلامة جره الياء نيابة عن الكسرة لأنه جمع مذكر سالم.", id: "*Yaf'alun*: mudhari' marfu' dengan **tsubut an-nun**; waw = dhamir mabni 'alas-sukun *fi mahalli raf'* fa'il. *Bil-mu'minin*: ba' huruf jar mabni 'alal-kasr; *al-mu'minin* majrur dengan **ya'** pengganti kasrah karena jamak mudzakkar salim." } }
  ]
});
