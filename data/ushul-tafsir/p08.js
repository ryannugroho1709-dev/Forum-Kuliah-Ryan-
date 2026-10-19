/* Ushul Tafsir — Pertemuan 8: Tafsir Lughawi (Kebahasaan) */
Kuliah.pertemuan("ushul-tafsir", {
  no: 8, motif: "kalam", tema: 2, durasi: 24,
  telegram: "https://t.me/Shifaaulqloub7/312",
  bab: { id: "Sumber tafsir", ar: "مصادر التفسير" },
  judul: { id: "Tafsir Lughawi: Menafsirkan Al-Qur'an dengan Bahasa Arab", ar: "التفسير اللغوي" },
  ringkas: {
    id: "Sumber kelima tafsir: definisi tafsir lughawi, tiga fase sejarahnya, empat keadaan pendapat ahli bahasa dari sisi kehujjahan, tiga syarat tafsir lughawi, kaidah ketika makna bahasa bertentangan dengan makna syar'i, dan tokoh-tokohnya.",
    ar: "تعريف التفسير اللغوي، واللغة المصدر الخامس، ومراحله التاريخية، وحجيته وأحواله الأربع، وشروطه الثلاثة، وإذا تعارض المعنى اللغوي مع الشرعي فأيهما يقدم، والمؤلفات فيه."
  },
  tujuan: [
    { id: "Mendefinisikan tafsir lughawi dan menjelaskan mengapa bahasa menjadi sumber tafsir.", ar: "تعريف التفسير اللغوي وبيان كون اللغة مصدرًا." },
    { id: "Menjelaskan tiga fase sejarah tafsir dengan bahasa.", ar: "شرح المراحل التاريخية الثلاث." },
    { id: "Menyebut empat keadaan pendapat ahli bahasa dan hukumnya.", ar: "ذكر أحوال أقوال اللغويين الأربع وحكمها." },
    { id: "Menyebut tiga syarat tafsir lughawi dan kaidah tarjih makna syar'i atas lughawi.", ar: "ذكر شروط التفسير اللغوي وتقديم المعنى الشرعي." }
  ],
  isi: [
    { t: "judul", id: "Definisi & Kedudukan Bahasa", ar: "التعريف ومكانة اللغة" },
    { t: "definisi", istilah: { id: "**Menjelaskan makna-makna Al-Qur'an al-Karim dengan apa yang ada dalam bahasa Arab** — yakni makna kosakata dan susunan kalimat dilihat dari makna dan pemakaiannya di kalangan orang Arab.", ar: "بيان معاني القرآن الكريم بما ورد في لغة العرب؛ أي أن معاني المفردات والتراكيب يُنظر إلى معناها عند العرب وفي لسانهم واستعمالهم." } },
    { t: "ayat", ar: "بِلِسَانٍ عَرَبِيٍّ مُّبِينٍ", id: "Dengan bahasa Arab yang jelas.", src: "QS. Asy-Syu'ara': 195" },
    { t: "p", id: "Al-Qur'an turun dengan bahasa Arab agar dipahami lalu disampaikan. Karena itu bahasa menjadi sumber wajib bagi yang hendak memahami Al-Qur'an: **makna kata memengaruhi tafsir**, dan tidak mengetahuinya — atau menafsirkannya dengan selain yang dikenal orang Arab — menjerumuskan pada kesalahan. Penguasaan bahasa Arab juga **membentengi** dari membawa lafaz Al-Qur'an pada istilah-istilah rusak seperti istilah sufi dan bathiniyyah, yang tidak dikenal orang Arab maupun syariat.", ar: "نزل القرآن بلغة العرب ليفهموه ثم يبلغوه للناس، فكانت من المصادر اللازمة لمن أراد أن يفهم القرآن؛ لأن دلالة الكلمة يُعرف بها التفسير، والجهل بها مدعاة للخطأ، والعلم بلسان العرب يحول دون حمل ألفاظ القرآن على المعاني الخاطئة والمصطلحات الفاسدة كالمصطلحات الصوفية والباطنية." },

    { t: "judul", id: "Tiga Fase Sejarah Tafsir dengan Bahasa", ar: "المراحل التاريخية للتفسير باللغة" },
    { t: "langkah", item: [
      { judul: { id: "Fase tiga kurun terbaik", ar: "التفسير باللغة عند القرون الخيرية" }, id: "**Sahabat** adalah pemilik bahasa; tafsir mereka dari sisi bahasa tak bisa digugat. **Tabi'in** ada yang Arab murni, ada pula *mawali* yang belajar bahasa dari sahabat — tak ada yang menyelisihi bahasa Arab. **Atba' tabi'in** masih di masa ihtijaj; minimal mereka menukil bahasa dari dua generasi sebelumnya.", ar: "الصحابة أهل اللسان، والتابعون منهم العرب الخلص ومنهم الموالي الذين تعلموا اللغة من الصحابة، وأتباع التابعين ما يزالون في عصر الاحتجاج، وأقل أحوالهم أن يكونوا نقلة للغة." },
      { judul: { id: "Fase kodifikasi bahasa", ar: "مرحلة التدوين اللغوي" }, id: "Dimulai paruh kedua abad ke-2 H. Yang pertama: **Al-Khalil bin Ahmad al-Farahidi (w. 175 H)** dengan *Kitab al-'Ain*. Ditulis pula kitab-kitab *gharib al-Qur'an* dan *ma'ani al-Qur'an*. Generasi ini menjadi hakim dan rujukan bagi ahli bahasa dan mufassir sesudahnya.", ar: "كان تدوين اللغة في النصف الثاني من القرن الثاني، وأول من دوَّن الخليل بن أحمد الفراهيدي (ت ١٧٥هـ) في كتاب العين، وكُتبت كتب في غريب القرآن ومعانيه، وصارت هذه الطبقة الحَكَم على من جاء بعدهم." },
      { judul: { id: "Fase setelah kodifikasi", ar: "مرحلة ما بعد التدوين" }, id: "Bersandar pada nukilan dari ahli bahasa terdahulu. Dimanfaatkan untuk: **men-tarjih antarpendapat bahasa**, dan **menambah pendapat baru yang tidak membatalkan pendapat salaf**.", ar: "اعتمادهم على النقل مما دونه المتقدمون، واستفادوا منه في الترجيح بين الأقوال اللغوية، وفي إضافة قول جديد لا يبطل قول السلف." } ] },

    { t: "judul", id: "Kehujjahan: Empat Keadaan Pendapat Ahli Bahasa", ar: "حجية التفسير باللغة: أحوال أقوال اللغويين" },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Hukum", ar: "الحكم" }], baris: [
      [{ id: "1. Sesuai dengan pendapat sahabat & tabi'in (sering terjadi)", ar: "أن يتوافق قولهم مع أقوال الصحابة والتابعين" }, { id: "**Hujjah** — karena sesuai salaf", ar: "حجة" }],
      [{ id: "2. Tafsir bahasa mereka membatalkan tafsir bahasa salaf (sangat jarang)", ar: "أن يكون تفسيرهم مبطلًا لتفسير السلف" }, { id: "**Ditolak**", ar: "يُرد عليهم" }],
      [{ id: "3. Menambah makna dari jenis tanawwu' (variasi)", ar: "أن يكون فيه إضافة من قبيل التنوع" }, { id: "**Diterima** jika ayat mengandungnya", ar: "يصح إذا احتملته الآية" }],
      [{ id: "4. Makna bahasa yang tidak diriwayatkan dari mufassir salaf", ar: "أن يرد عنهم المعنى اللغوي ولا يكون واردًا عن السلف" }, { id: "**Diterima** — mereka ahli di bidangnya", ar: "محله القبول" }] ] },
    { t: "contoh", judul: { id: "Contoh keadaan 3 (tanawwu')", ar: "مثال الحالة الثالثة" },
      ayat: { ar: "وَيُدْخِلُهُمُ الْجَنَّةَ عَرَّفَهَا لَهُمْ", src: "محمد: ٦", id: "Dan memasukkan mereka ke dalam surga yang telah Dia *'arrafaha* bagi mereka." },
      sorot: [
        { label: { id: "Salaf", ar: "السلف" }, warna: "green", id: "*'Arrafaha*: **Dia jelaskan/kenalkan kepada mereka**, hingga seseorang mendatangi rumahnya di surga seperti mendatangi rumahnya di dunia.", ar: "أي بيَّنها لهم حتى إن الرجل ليأتي منزله منها كما كان يأتي منزله في الدنيا." },
        { label: { id: "Kitab al-'Ain", ar: "كتاب العين" }, warna: "gold", id: "*Al-'arf* = aroma harum; *'arrafaha* = **Dia harumkan** surga bagi mereka.", ar: "العَرْف ريح طيب… {عَرَّفَهَا لَهُمْ} أي طيَّبها." },
        { label: { id: "Kesimpulan", ar: "النتيجة" }, warna: "blue", id: "Dua makna berbeda tetapi **tidak bertentangan**, dan ayat mengandung keduanya → diterima sebagai tanawwu'.", ar: "المعنيان متغايران غير متناقضين، والآية تحتملهما على سبيل التنوع." } ] },
    { t: "contoh", judul: { id: "Contoh keadaan 4", ar: "مثال الحالة الرابعة" },
      ayat: { ar: "لَن نُّؤْثِرَكَ عَلَىٰ مَا جَاءَنَا مِنَ الْبَيِّنَاتِ وَالَّذِي فَطَرَنَا", src: "طه: ٧٢" },
      id: "Al-Farra': kata *alladzi* majrur karena di-'athaf-kan (\"dan atas Dzat yang menciptakan kami\"); dan **boleh juga sebagai sumpah** — \"Kami tidak akan mengutamakanmu, demi Allah yang menciptakan kami\". Makna dari salaf adalah 'athaf; makna bahasa tambahan ini tidak membatalkannya, dan ahli bahasa adalah ahli bidangnya → diterima.",
      ar: "قال الفراء: «الذي» في موضع خفض أي: وعلى الذي فطرنا، ولو أرادوا القسم بها كانت خفضًا وكان صوابًا، كأنهم قالوا: لن نؤثرك والله الذي فطرنا." },

    { t: "judul", id: "Tiga Syarat Tafsir Lughawi", ar: "شروط التفسير اللغوي" },
    { t: "sub", id: "Syarat 1: Menafsirkan dengan makna yang dikenal orang Arab saat Al-Qur'an turun", ar: "الشرط الأول: أن يفسَّر بالمعنى المعروف عند العرب وقت النزول" },
    { t: "p", id: "Al-Qur'an ditafsirkan dengan makna **yang paling umum dan dikenal**, bukan yang *syadz* (ganjil) atau jarang. \"Dikenal\" = dipakai dalam percakapan mereka, baik selalu (*muththarid*) maupun umumnya (*ghalib*). Jika qiyas yang kuat bertentangan dengan banyaknya pemakaian, **banyaknya pemakaian** didahulukan.", ar: "القرآن يُفسَّر على الأغلب المشهور المعروف من لغة العرب دون الشاذ أو القليل، والمراد بالمعروف: المستعمل في كلامهم مطَّردًا أو غالبًا، فإن تعارض القياس القوي وكثرة الاستعمال فكثرة الاستعمال هي المقدمة." },
    { t: "kutipan", ar: "إنما يوجَّه الكلام إلى الأغلب المعروف في استعمال الناس من معانيه دون الخفي، حتى تأتي بخلاف ذلك ما يوجب صرفه إلى الخفي من معانيه حجةٌ يجب التسليم لها من كتاب أو خبر عن الرسول ﷺ أو إجماع من أهل التأويل.", id: "Perkataan diarahkan kepada makna yang paling umum dikenal dalam pemakaian orang (Arab), bukan yang samar — kecuali datang hujjah yang wajib diterima dari Al-Qur'an, berita dari Rasul ﷺ, atau ijma' ahli takwil yang mengharuskan memalingkannya ke makna samar.", oleh: { id: "Ibnu Jarir ath-Thabari", ar: "ابن جرير الطبري" } },
    { t: "banding", judul: { id: "Masyhur vs syadz/tak dikenal", ar: "المشهور والشاذ" },
      kiri: { judul: { id: "Tafsir yang benar", ar: "المقبول" }, ikon: "check", warna: "green", poin: [
        { id: "{لَا يَذُوقُونَ فِيهَا بَرْدًا} — *bard* = **hawa dingin** (makna masyhur). Ath-Thabari & An-Nahhas menolak *bard* = tidur karena itu bukan namanya yang dikenal.", ar: "البرد: برد الهواء، لا النوم." } ] },
      kanan: { judul: { id: "Tafsir yang ditolak (tak dikenal orang Arab)", ar: "المردود" }, ikon: "x", warna: "red", poin: [
        { id: "{إِنَّ أَوَّلَ بَيْتٍ وُضِعَ لِلنَّاسِ} = Rasul ﷺ", ar: "أول بيت: الرسول ﷺ" },
        { id: "*Thair ababil* = lalat/nyamuk", ar: "الطير الأبابيل: الذباب أو البعوض" },
        { id: "*Al-hijarah* = kuman penyebar penyakit", ar: "الحجارة: الجراثيم" } ] } },
    { t: "sub", id: "Syarat 2: Wajib memperhatikan konteks (siyaq)", ar: "الشرط الثاني: وجوب مراعاة السياق" },
    { t: "p", id: "Mufassir hanya memilih makna yang sesuai konteks. Tafsir yang keluar dari petunjuk lafaz dan konteksnya adalah **permainan yang tidak diakui bahasa, agama, maupun akal**. Jika dibenarkan, setiap pengikut hawa nafsu bisa memelintir Al-Qur'an sesukanya.", ar: "كل تفسير خرج بمعاني كتاب الله عما تدل عليه ألفاظه وسياقه فهو مردود؛ لأنه ضرب من الترخص والتلاعب لا تقره لغة ولا يرتضيه دين ولا عقل." },
    { t: "daftar", judul: { id: "Contoh tafsir yang keluar dari konteks (ditolak)", ar: "أمثلة لتفسيرات مخالفة للسياق" }, item: [
      { id: "{خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ} = mandi ketika menemui setiap imam (sebagian Syi'ah).", ar: "الغسل عند لقاء كل إمام." },
      { id: "{وَالتِّينِ وَالزَّيْتُونِ} = Rasul ﷺ dan 'Ali; {وَطُورِ سِينِينَ} = Al-Hasan dan Al-Husain; {وَهَٰذَا الْبَلَدِ الْأَمِينِ} = dua belas imam (sebagian Itsna 'Asyariyyah).", ar: "التين والزيتون: الرسول وعلي، وطور سينين: الحسن والحسين…" },
      { id: "{وَالْجَارِ ذِي الْقُرْبَىٰ} = hati; {وَالْجَارِ الْجُنُبِ} = tabiat; {وَالصَّاحِبِ بِالْجَنبِ} = akal; {وَابْنِ السَّبِيلِ} = anggota badan yang taat.", ar: "الجار ذي القربى: القلب، والجار الجنب: الطبيعة…" } ] },
    { t: "sub", id: "Syarat 3: Mengetahui keadaan seputar turunnya ayat", ar: "الشرط الثالث: معرفة ملابسات النزول" },
    { t: "contoh", ayat: { ar: "إِنَّمَا النَّسِيءُ زِيَادَةٌ فِي الْكُفْرِ", src: "التوبة: ٣٧" },
      id: "*An-nasi'* secara bahasa = **penundaan** — tetapi penundaan apa? Harus diketahui kisah ayatnya: **menunda/menggeser bulan-bulan haram dan menghalalkannya**. Ibnu 'Abbas: Junadah bin 'Auf al-Kinani (Abu Tsumamah) datang setiap musim haji lalu mengumumkan, \"Ketahuilah, Shafar tahun ini halal!\" — sehingga mereka mengharamkan Shafar setahun dan menghalalkannya setahun.",
      ar: "النسيء هو التأخير، لكن تحديد هذا التأخير يحتاج إلى معرفة قصة الآية؛ والمراد تأخير الأشهر الحرم واستحلالها. قال ابن عباس: كان جنادة بن عوف بن أمية الكناني يوافي الموسم كل عام… فينادي: ألا إن صفر العام الأول حلال." },

    { t: "judul", id: "Jika Makna Bahasa Bertentangan dengan Makna Syar'i", ar: "إذا تعارض المعنى اللغوي مع المعنى الشرعي" },
    { t: "catatan", gaya: "faidah", judul: { id: "Kaidah", ar: "القاعدة" }, id: "**Makna syar'i didahulukan**, kecuali ada dalil bahwa yang dimaksud makna bahasa — karena Al-Qur'an turun untuk menjelaskan syariat, bukan untuk menjelaskan bahasa.", ar: "المقدم هو المعنى الشرعي، إلا إذا دل الدليل على إرادة المعنى اللغوي؛ لأن القرآن نزل لبيان الشرع لا لبيان اللغة." },
    { t: "tabel", kolom: [{ id: "Ayat", ar: "الآية" }, { id: "Makna yang dipilih", ar: "المعنى المختار" }, { id: "Alasan", ar: "العلة" }], baris: [
      [{ id: "{وَوَيْلٌ لِّلْمُشْرِكِينَ الَّذِينَ لَا يُؤْتُونَ الزَّكَاةَ} (Fushshilat: 6–7)", ar: "لا يؤتون الزكاة" }, { id: "**Syar'i**: tidak menunaikan zakat harta — bukan \"tidak memberi ketaatan yang menyucikan\" (makna bahasa)", ar: "زكاة الأموال" }, { id: "Hakikat syar'i didahulukan", ar: "تقديم الحقيقة الشرعية" }],
      [{ id: "{وَلَا تُصَلِّ عَلَىٰ أَحَدٍ مِّنْهُم مَّاتَ أَبَدًا} (At-Taubah: 84)", ar: "ولا تصل على أحد منهم" }, { id: "**Syar'i**: shalat jenazah", ar: "صلاة الجنازة" }, { id: "Makna syar'i & konteks", ar: "المعنى الشرعي والسياق" }],
      [{ id: "{خُذْ مِنْ أَمْوَالِهِمْ صَدَقَةً… وَصَلِّ عَلَيْهِمْ} (At-Taubah: 103)", ar: "وصل عليهم" }, { id: "**Bahasa**: doa", ar: "الدعاء" }, { id: "Ada dalil: Nabi ﷺ berdoa \"Allahumma shalli 'ala ali Abi Aufa\" saat menerima sedekah", ar: "«اللهم صل على آل أبي أوفى»" }] ] },

    { t: "judul", id: "Tokoh & Kitab Tafsir Lughawi", ar: "أبرز المعتنين بالتفسير اللغوي" },
    { t: "tokoh", item: [
      { nama: { id: "Ibnu 'Abbas", ar: "ابن عباس" }, wafat: 68 },
      { nama: { id: "'Ikrimah", ar: "عكرمة" }, wafat: 105 },
      { nama: { id: "Mujahid", ar: "مجاهد" }, wafat: 104 },
      { nama: { id: "Ibnu Zaid", ar: "ابن زيد" }, wafat: 182 },
      { nama: { id: "Al-Farra'", ar: "الفراء" }, wafat: 207, karya: { id: "Ma'ani al-Qur'an", ar: "معاني القرآن" } },
      { nama: { id: "Abu 'Ubaidah", ar: "أبو عبيدة" }, wafat: 210, karya: { id: "Majaz al-Qur'an", ar: "مجاز القرآن" } },
      { nama: { id: "Ath-Thabari", ar: "الطبري" }, wafat: 310, karya: { id: "Jami' al-Bayan", ar: "جامع البيان" } },
      { nama: { id: "Al-Wahidi", ar: "الواحدي" }, wafat: 468, karya: { id: "At-Tafsir al-Basith", ar: "التفسير البسيط" } },
      { nama: { id: "Ar-Raghib al-Ashfahani", ar: "الراغب الأصفهاني" }, wafat: 502, karya: { id: "Mufradat Alfazh al-Qur'an", ar: "مفردات ألفاظ القرآن" } },
      { nama: { id: "Ath-Thahir bin 'Asyur", ar: "الطاهر بن عاشور" }, wafat: 1393, karya: { id: "At-Tahrir wat-Tanwir", ar: "التحرير والتنوير" } } ] },
    { t: "catatan", gaya: "info", id: "Tahun wafat pada daftar tokoh ini ditambahkan dari kitab-kitab biografi untuk memudahkan urutan; dalam kuliah hanya disebut nama dan karyanya.", ar: "سنوات الوفاة مضافة للتوضيح." },
    { t: "ringkasan", item: [
      { id: "Tafsir lughawi = menjelaskan makna Al-Qur'an dengan bahasa Arab.", ar: "بيان معاني القرآن بما ورد في لغة العرب." },
      { id: "Sejarah: tiga kurun → kodifikasi (Al-Khalil, Kitab al-'Ain) → setelah kodifikasi.", ar: "ثلاث مراحل." },
      { id: "Pendapat ahli bahasa: sesuai salaf (hujjah), membatalkan salaf (ditolak), tanawwu' (diterima), tambahan baru (diterima).", ar: "أربع حالات." },
      { id: "Syarat: makna masyhur saat nuzul, memperhatikan konteks, mengetahui keadaan nuzul.", ar: "ثلاثة شروط." },
      { id: "Makna syar'i didahulukan atas makna bahasa, kecuali ada dalil.", ar: "تقديم المعنى الشرعي إلا بدليل." } ] }
  ],
  istilah: [
    { ar: "التفسير اللغوي", latin: "at-tafsir al-lughawi", id: "Tafsir kebahasaan", def: { id: "Menjelaskan makna Al-Qur'an dengan apa yang ada dalam bahasa Arab.", ar: "بيان معاني القرآن الكريم بما ورد في لغة العرب." } },
    { ar: "كتاب العين", latin: "Kitab al-'Ain", id: "Kamus Arab pertama", def: { id: "Karya Al-Khalil bin Ahmad al-Farahidi (w. 175 H).", ar: "للخليل بن أحمد الفراهيدي." } },
    { ar: "عصر الاحتجاج", latin: "'ashr al-ihtijaj", id: "Masa hujjah bahasa", def: { id: "Masa yang bahasanya dijadikan dalil kebahasaan.", ar: "العصر الذي يُحتج بلغة أهله." } },
    { ar: "المطَّرد", latin: "al-muththarid", id: "Selalu dipakai", def: { id: "Pemakaian yang tak pernah berubah.", ar: "الذي لا يتخلف البتة." } },
    { ar: "الشاذ", latin: "asy-syadz", id: "Ganjil/jarang", def: { id: "Sedikit dan tidak sesuai qiyas; tafsir tidak dibawa kepadanya.", ar: "ما كان وجوده قليلًا ولا يجيء على القياس." } },
    { ar: "السياق", latin: "as-siyaq", id: "Konteks", def: { id: "Yang sebelum dan sesudah kalimat; wajib diperhatikan.", ar: "ما سبق الكلام ولحقه." } },
    { ar: "ملابسات النزول", latin: "mulabasat an-nuzul", id: "Keadaan seputar turunnya ayat", def: { id: "Seperti kisah *nasi'*.", ar: "قصة الآية وظروفها." } },
    { ar: "النسيء", latin: "an-nasi'", id: "Penundaan bulan haram", def: { id: "Menggeser bulan haram dan menghalalkannya.", ar: "تأخير الأشهر الحرم واستحلالها." } },
    { ar: "الحقيقة الشرعية", latin: "al-haqiqah asy-syar'iyyah", id: "Makna syar'i", def: { id: "Didahulukan atas makna bahasa kecuali ada dalil.", ar: "مقدمة على الحقيقة اللغوية." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tafsir lughawi adalah…", ar: "التفسير اللغوي هو…" }, o: [{ id: "Menjelaskan makna Al-Qur'an dengan apa yang ada dalam bahasa Arab", ar: "بيان معاني القرآن بما ورد في لغة العرب" }, { id: "Menerjemahkan Al-Qur'an ke bahasa lain", ar: "ترجمة القرآن" }, { id: "Meng-i'rab seluruh ayat", ar: "إعراب الآيات" }, { id: "Menjelaskan qira'at", ar: "بيان القراءات" }], j: 0 },
      { q: { id: "Orang pertama yang membukukan bahasa Arab adalah…", ar: "أول من دوَّن اللغة…" }, o: [{ id: "Sibawaih", ar: "سيبويه" }, { id: "Al-Khalil bin Ahmad al-Farahidi", ar: "الخليل بن أحمد الفراهيدي" }, { id: "Al-Farra'", ar: "الفراء" }, { id: "Abu 'Ubaidah", ar: "أبو عبيدة" }], j: 1 },
      { q: { id: "Pendapat ahli bahasa yang membatalkan tafsir bahasa salaf hukumnya…", ar: "قول اللغويين المبطل لتفسير السلف حكمه…" }, o: [{ id: "Hujjah", ar: "حجة" }, { id: "Ditolak", ar: "يُرد" }, { id: "Didahulukan", ar: "يقدم" }, { id: "Disejajarkan", ar: "يساويه" }], j: 1 },
      { q: { id: "Makna *'arrafaha lahum* = \"Dia harumkan\" (Kitab al-'Ain) diterima karena…", ar: "قُبل تفسير {عَرَّفَهَا لَهُمْ} بطيَّبها لأنه…" }, o: [{ id: "Membatalkan pendapat salaf", ar: "يبطل قول السلف" }, { id: "Tanawwu': berbeda tapi tidak bertentangan, ayat mengandung keduanya", ar: "تنوع غير متناقض والآية تحتمله" }, { id: "Ijma'", ar: "إجماع" }, { id: "Sebab nuzul", ar: "سبب نزول" }], j: 1 },
      { q: { id: "{لَا يَذُوقُونَ فِيهَا بَرْدًا}: makna *bard* yang dipilih Ath-Thabari adalah…", ar: "معنى البرد عند الطبري…" }, o: [{ id: "Tidur", ar: "النوم" }, { id: "Hawa dingin", ar: "برد الهواء" }, { id: "Air", ar: "الماء" }, { id: "Es", ar: "الثلج" }], j: 1 },
      { q: { id: "Tafsir *thair ababil* = lalat/nyamuk ditolak karena…", ar: "تفسير الطير الأبابيل بالذباب مردود لأنه…" }, o: [{ id: "Tidak dikenal orang Arab saat Al-Qur'an turun", ar: "لا تعرفه العرب وقت النزول" }, { id: "Bertentangan dengan qira'at", ar: "يخالف القراءات" }, { id: "Sanadnya lemah", ar: "ضعف سنده" }, { id: "Mansukh", ar: "منسوخ" }], j: 0 },
      { q: { id: "Tafsir {وَالتِّينِ وَالزَّيْتُونِ} = Rasul ﷺ dan 'Ali menyalahi syarat…", ar: "تفسير التين والزيتون بالرسول وعلي يخالف شرط…" }, o: [{ id: "Memperhatikan konteks", ar: "مراعاة السياق" }, { id: "Sanad", ar: "الإسناد" }, { id: "Qira'at", ar: "القراءة" }, { id: "Naskh", ar: "النسخ" }], j: 0 },
      { q: { id: "Untuk mengetahui maksud *an-nasi'*, mufassir memerlukan syarat…", ar: "لمعرفة المراد بالنسيء يحتاج المفسر إلى…" }, o: [{ id: "Mengetahui keadaan seputar turunnya ayat", ar: "معرفة ملابسات النزول" }, { id: "Ilmu qira'at", ar: "القراءات" }, { id: "Ilmu nahwu saja", ar: "النحو فقط" }, { id: "Israiliyyat", ar: "الإسرائيليات" }], j: 0 },
      { q: { id: "Jika makna bahasa dan makna syar'i bertentangan, yang didahulukan adalah…", ar: "إذا تعارض المعنى اللغوي والشرعي قُدِّم…" }, o: [{ id: "Makna bahasa", ar: "اللغوي" }, { id: "Makna syar'i, kecuali ada dalil", ar: "الشرعي إلا بدليل" }, { id: "Yang lebih singkat", ar: "الأوجز" }, { id: "Tawaqquf", ar: "التوقف" }], j: 1 },
      { q: { id: "{وَصَلِّ عَلَيْهِمْ} (At-Taubah: 103) dimaknai doa karena…", ar: "حُملت {وَصَلِّ عَلَيْهِمْ} على الدعاء لأن…" }, o: [{ id: "Makna bahasa selalu didahulukan", ar: "اللغوي مقدم دائمًا" }, { id: "Ada dalil: Nabi ﷺ berdoa \"Allahumma shalli 'ala ali Abi Aufa\"", ar: "لدليل «اللهم صل على آل أبي أوفى»" }, { id: "Ijma' ahli bahasa", ar: "إجماع اللغويين" }, { id: "Qira'at", ar: "قراءة" }], j: 1 }
    ],
    bs: [
      { t: { id: "Tabi'in dari kalangan mawali tidak dipercaya dalam tafsir bahasa.", ar: "الموالي من التابعين لا يوثق بتفسيرهم اللغوي." }, j: false, b: { id: "Mereka belajar bahasa dari sahabat; tak ada yang menyelisihi bahasa Arab.", ar: "تعلموا اللغة من الصحابة." } },
      { t: { id: "Kodifikasi bahasa dimulai pada paruh kedua abad ke-2 H.", ar: "بدأ تدوين اللغة في النصف الثاني من القرن الثاني." }, j: true },
      { t: { id: "Setelah kodifikasi, boleh menambah pendapat baru asal tidak membatalkan pendapat salaf.", ar: "يجوز بعد التدوين إضافة قول جديد لا يبطل قول السلف." }, j: true },
      { t: { id: "Jika qiyas yang kuat bertentangan dengan banyaknya pemakaian, qiyas didahulukan.", ar: "إذا تعارض القياس القوي وكثرة الاستعمال قُدم القياس." }, j: false, b: { id: "Banyaknya pemakaian yang didahulukan.", ar: "كثرة الاستعمال هي المقدمة." } },
      { t: { id: "Makna bahasa yang tidak diriwayatkan dari salaf tetap bisa diterima dari ahli bahasa.", ar: "المعنى اللغوي الذي لم يرد عن السلف محله القبول." }, j: true },
      { t: { id: "{لَا يُؤْتُونَ الزَّكَاةَ} dalam Fushshilat dirajihkan bermakna zakat harta.", ar: "رُجِّح في آية فصلت أن الزكاة زكاة المال." }, j: true },
      { t: { id: "Tafsir *al-jar dzil qurba* = hati termasuk tafsir yang sesuai konteks.", ar: "تفسير الجار ذي القربى بالقلب موافق للسياق." }, j: false },
      { t: { id: "Abu 'Ubaidah menulis *Majaz al-Qur'an*.", ar: "لأبي عبيدة «مجاز القرآن»." }, j: true }
    ],
    jodoh: [
      { a: { id: "Al-Khalil", ar: "الخليل" }, b: { id: "Kitab al-'Ain", ar: "كتاب العين" } },
      { a: { id: "Al-Farra'", ar: "الفراء" }, b: { id: "Ma'ani al-Qur'an", ar: "معاني القرآن" } },
      { a: { id: "Abu 'Ubaidah", ar: "أبو عبيدة" }, b: { id: "Majaz al-Qur'an", ar: "مجاز القرآن" } },
      { a: { id: "Ar-Raghib", ar: "الراغب" }, b: { id: "Mufradat Alfazh al-Qur'an", ar: "المفردات" } },
      { a: { id: "Al-Wahidi", ar: "الواحدي" }, b: { id: "At-Tafsir al-Basith", ar: "البسيط" } },
      { a: { id: "Ibnu 'Asyur", ar: "ابن عاشور" }, b: { id: "At-Tahrir wat-Tanwir", ar: "التحرير والتنوير" } }
    ],
    isian: [
      { t: { id: "Al-Qur'an turun untuk menjelaskan ______, bukan untuk menjelaskan bahasa.", ar: "نزل القرآن لبيان ______ لا لبيان اللغة." }, j: { id: "syariat", ar: "الشرع" }, x: [{ id: "sejarah", ar: "التاريخ" }, { id: "sains", ar: "العلوم" }, { id: "syair", ar: "الشعر" }] },
      { t: { id: "Al-Qur'an ditafsirkan dengan makna yang paling ______ dari bahasa Arab, bukan yang syadz.", ar: "يُفسَّر القرآن على ______ من لغة العرب دون الشاذ." }, j: { id: "umum dan dikenal", ar: "الأغلب المشهور" }, x: [{ id: "jarang", ar: "النادر" }, { id: "baru", ar: "الحادث" }, { id: "rumit", ar: "الغامض" }] },
      { t: { id: "*An-nasi'* secara bahasa berarti ______.", ar: "النسيء لغةً: ______." }, j: { id: "penundaan", ar: "التأخير" }, x: [{ id: "lupa", ar: "النسيان" }, { id: "tambahan", ar: "الزيادة" }, { id: "perpindahan", ar: "الانتقال" }] },
      { t: { id: "Al-Farra': kata *alladzi* pada {وَالَّذِي فَطَرَنَا} boleh juga bermakna ______.", ar: "قال الفراء: ولو أرادوا ______ بها كانت خفضًا." }, j: { id: "sumpah (qasam)", ar: "القسم" }, x: [{ id: "pertanyaan", ar: "الاستفهام" }, { id: "syarat", ar: "الشرط" }, { id: "perintah", ar: "الأمر" }] }
    ],
    pilah: { t: { id: "Pilah: tafsir lughawi berikut DITERIMA atau DITOLAK?", ar: "صنِّف: مقبول أم مردود؟" },
      kategori: [{ id: "Diterima", ar: "مقبول" }, { id: "Ditolak", ar: "مردود" }],
      item: [
        { t: { id: "*Bard* = hawa dingin", ar: "البرد: برد الهواء" }, k: 0 },
        { t: { id: "*Thair ababil* = nyamuk", ar: "الأبابيل: البعوض" }, k: 1 },
        { t: { id: "*'Arrafaha* = Dia harumkan", ar: "عرفها: طيبها" }, k: 0 },
        { t: { id: "{خُذُوا زِينَتَكُمْ عِندَ كُلِّ مَسْجِدٍ} = mandi saat menemui imam", ar: "الغسل عند لقاء الإمام" }, k: 1 },
        { t: { id: "*Alladzi fatharana* bisa bermakna sumpah (Al-Farra')", ar: "قول الفراء في القسم" }, k: 0 },
        { t: { id: "*Al-hijarah* = kuman", ar: "الحجارة: الجراثيم" }, k: 1 },
        { t: { id: "*An-nasi'* = menggeser bulan haram", ar: "النسيء: تأخير الأشهر الحرم" }, k: 0 }
      ] }
  },
  tugas: [
    { t: { ar: "عرِّف التفسير اللغوي.", id: "Definisikan tafsir lughawi." }, j: { ar: "التفسير اللغوي: هو بيان معاني القرآن الكريم بما ورد في لغة العرب؛ أي أن معاني المفردات والتراكيب يُنظر إلى معناها عند العرب وفي لسانهم واستعمالهم.", id: "**Menjelaskan makna-makna Al-Qur'an dengan apa yang ada dalam bahasa Arab** — makna kosakata dan susunan kalimat dilihat dari makna dan pemakaiannya di kalangan orang Arab." } },
    { t: { ar: "للتفسير اللغوي أربع حالات، اذكرها وبيِّن ما منها يكون حجة مقبولة وما منها يكون مردودًا.", id: "Tafsir lughawi memiliki empat keadaan. Sebutkan dan jelaskan mana yang diterima dan mana yang ditolak." }, j: { ar: "١- أن يتوافق قول اللغويين مع أقوال الصحابة والتابعين، وهذا حجة. ٢- أن يكون تفسيرهم مبطلًا لتفسير السلف اللغوي، وهذا قليل ومردود. ٣- أن يكون فيه إضافة من قبيل التنوع تحتملها الآية، فيقبل، كتفسير {عَرَّفَهَا لَهُمْ} بطيَّبها. ٤- أن يرد عنهم المعنى اللغوي ولا يكون واردًا عن السلف، ومحله القبول لأنهم أهل الاختصاص، كقول الفراء في {وَالَّذِي فَطَرَنَا}.", id: "(1) **Sesuai pendapat sahabat & tabi'in** → hujjah. (2) **Membatalkan tafsir bahasa salaf** → jarang, ditolak. (3) **Tambahan bersifat tanawwu'** yang dikandung ayat → diterima (*'arrafaha* = Dia harumkan). (4) **Makna bahasa yang tak diriwayatkan dari salaf** → diterima, karena mereka ahlinya (Al-Farra' tentang {وَالَّذِي فَطَرَنَا})." } },
    { t: { ar: "ما هي شروط التفسير اللغوي؟", id: "Apa syarat-syarat tafsir lughawi?" }, j: { ar: "ثلاثة شروط: ١- أن يُفسَّر بالمعنى اللغوي المعروف عند العرب وقت نزول القرآن، على الأغلب المشهور دون الشاذ (كتفسير البرد ببرد الهواء لا بالنوم). ٢- وجوب مراعاة السياق، فيُرد ما خرج عنه (كتفسير بعضهم الزينة بالغسل عند لقاء الإمام). ٣- معرفة ملابسات النزول عند الحاجة (كمعرفة قصة النسيء).", id: "(1) **Makna yang dikenal orang Arab saat Al-Qur'an turun** — yang paling umum, bukan syadz (*bard* = hawa dingin, bukan tidur); (2) **memperhatikan konteks** — yang keluar dari konteks ditolak (*zinah* = mandi menemui imam); (3) **mengetahui keadaan seputar turunnya ayat** bila dibutuhkan (kisah *nasi'*)." } }
  ]
});
