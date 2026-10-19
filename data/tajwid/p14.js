/* Tajwid — Pertemuan 14: Bab Al-Hadzf wal-Itsbat (penutup) */
Kuliah.pertemuan("tajwid", {
  no: 14, motif: "kaidah", tema: 4, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/546",
  bab: { id: "Bab Al-Hadzf wal-Itsbat", ar: "باب الحذف والإثبات" },
  judul: { id: "Al-Hadzf wal-Itsbat (Pembuangan dan Penetapan Huruf Madd)", ar: "الحذف والإثبات" },
  ringkas: {
    id: "Pengertian itsbat dan hadzf, jenis-jenis hadzf, kaidah waqf mengikuti rasm beserta empat bentuknya, lalu rincian huruf alif, waw, dan ya' — yang tsabit atau mahdzuf dalam rasm, wasl, dan waqf — beserta contoh-contoh ayat dan pengecualiannya.",
    ar: "تعريف الإثبات والحذف، وأنواع الحذف، وقاعدة الوقف على الرسم وصورها الأربع، ثم تفصيل حروف المد الثلاثة: الألف والواو والياء، ثابتةً ومحذوفةً رسمًا ووصلًا ووقفًا، مع الأمثلة والمستثنيات."
  },
  tujuan: [
    { id: "Membedakan itsbat dari hadzf, serta menyebut jenis-jenis hadzf.", ar: "التفريق بين الإثبات والحذف وذكر أنواع الحذف." },
    { id: "Menjelaskan kaidah waqf mengikuti rasm dan empat bentuknya.", ar: "بيان قاعدة الوقف على الرسم وصورها الأربع." },
    { id: "Menentukan keadaan alif dalam rasm, wasl, dan waqf pada contoh-contoh ayat.", ar: "تحديد حال الألف رسمًا ووصلًا ووقفًا في الأمثلة." },
    { id: "Menentukan keadaan waw dan ya' dalam rasm, wasl, dan waqf.", ar: "تحديد حال الواو والياء رسمًا ووصلًا ووقفًا." },
    { id: "Mengenali pengecualian: tanda sifr mustadir, tujuh alif, dan pasangan ya' tsabit/mahdzuf.", ar: "معرفة المستثنيات: الصفر المستدير والألفات السبع ونظائر الياءات." }
  ],
  isi: [
    { t: "pembuka", id: "Bab **al-hadzf wal-itsbat** adalah bab khusus tentang tiga huruf madd: **alif, waw, dan ya'**. Ia termasuk kekhasan **rasm utsmani** yang wajib diikuti secara syar'i, kecuali yang menyelisihi rasm karena riwayat yang mutawatir. Pembahasan ini menutup rangkaian materi tajwid.", ar: "باب الحذف والإثبات خاص بحروف المد الثلاثة: الألف والواو والياء، وهو من خصائص الرسم العثماني الواجب اتباعه شرعًا إلا ما خالف الرسم بالتواتر." },
    { t: "catatan", gaya: "info", judul: { id: "Tidak terbatas pada huruf madd", ar: "قد يكون في غير حروف المد" }, id: "Hadzf dan itsbat dalam rasm kadang terjadi pada huruf lain. Contoh: nun dalam {تَأۡمَ۬نَّا عَلَىٰ یُوسُفَ} (Yusuf) dan lam dalam {ٱلَّذِی} {وٱلَّیۡلِ} {وٱلَّـٰۤـِٔی} {وٱلَّتِی}. Pembaca wajib mengikuti rasm dalam bacaannya agar tahu mana yang ditetapkan dan mana yang dibuang.", ar: "وقد يكون في بعض الحروف الأخرى مثل النون في {تَأۡمَ۬نَّا عَلَىٰ یُوسُفَ} واللام في {ٱلَّذِی وٱلَّیۡلِ وٱلَّـٰۤـِٔی وٱلَّتِی}، فالقارئ مطالب باتباع الرسم في قراءته." },

    { t: "judul", id: "Definisi dan Jenis Hadzf", ar: "التعريف والأنواع" },
    { t: "definisi", judul: { id: "Al-Itsbat", ar: "الإثبات" }, istilah: { id: "**Tetapnya huruf dalam rasm (tulisan)**, dan kadang ia dibuang dalam lafaz.", ar: "ثبوت الحرف رسمًا، وقد يحذف لفظًا." } },
    { t: "definisi", judul: { id: "Al-Hadzf", ar: "الحذف" }, istilah: { id: "**Tidak adanya huruf dalam rasm**, dan kadang ia tetap dilafazkan. Maksud *lafzhan*: dalam pengucapan — huruf yang ditulis bisa tidak diucapkan, dan huruf yang tidak ditulis bisa diucapkan.", ar: "عدم ثبوت الحرف رسمًا، وقد يثبت لفظًا؛ أي في حالة النطق قد يكتب الحرف وقد يحذف في النطق، وقد لا يكتب وقد يثبت في النطق." } },
    { t: "poin", judul: { id: "Tiga jenis hadzf", ar: "أنواع الحذف" }, item: [
      { ikon: "scale", judul: { id: "Hadzf muhaqqaq", ar: "الحذف المحقق" }, id: "Karena sebab nahwu: **jazm** atau **bina'**. Contoh {وَلَمۡ یُؤۡتَ} (asalnya *yu'ta*) dan {وَٱنۡهَ عَنِ ٱلۡمُنكَرِ} (asalnya *unha*).", ar: "لعلة نحوية كالجزم أو البناء، مثل: {وَلَمۡ یُؤۡتَ} وأصله يؤتى، و{وَٱنۡهَ عَنِ ٱلۡمُنكَرِ} وأصله وانهى." },
      { ikon: "leaf", judul: { id: "Hadzf muqaddar", ar: "الحذف المقدر" }, id: "Untuk **meringankan** pengucapan dua huruf yang sama. Contoh {لَا یَسۡتَحۡیِ} dan {یُحۡیِۦ وَیُمِیتُ}.", ar: "لعلة التخفيف في النطق بحرفين متماثلين مثل: {لَا یَسۡتَحۡیِ} و{یُحۡیِۦ وَیُمِیتُ}." },
      { ikon: "scroll", judul: { id: "Dibuang tanpa sebab", ar: "المحذوف بغير علة" }, id: "Seperti yang tsabit dalam rasm, kecuali bila ada nash riwayat yang membuangnya. Contoh {يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ} (Hud) — asalnya *ya'ti*; ketika waqf dibaca *ya't*, sesuai riwayat.", ar: "كالثابت رسمًا إلا إذا ورد نص بحذفه في الرواية، مثل «يأت» في {يَوْمَ يَأْتِ لَا تَكَلَّمُ نَفْسٌ}." } ] },

    { t: "judul", id: "Kaidah Waqf dan Empat Bentuknya", ar: "القاعدة وصورها الأربع" },
    { t: "kutipan", ar: "إذا ثبت حرف المد المتطرف رسمًا فإنه يثبت وقفًا، وإذا حذف رسمًا فإنه يحذف وقفًا إلا ما استثني بسبب الرواية، فالعبرة تكون بالرسم.", id: "Jika huruf madd di ujung kata tsabit dalam rasm, ia tsabit ketika waqf; jika dibuang dalam rasm, ia dibuang ketika waqf — kecuali yang dikecualikan karena riwayat. Yang dijadikan patokan adalah **rasm**.", oleh: "Kaidah dalam bab ini" },
    { t: "tabel", judul: { id: "Empat bentuk (shurah)", ar: "الصور الأربع" }, kolom: [{ id: "Bentuk", ar: "الصورة" }, { id: "Rasm / wasl", ar: "الرسم والوصل" }, { id: "Hukum waqf & contoh", ar: "الحكم والمثال" }], baris: [
      [{ id: "1", ar: "الأولى" }, "Tsabit dalam rasm dan wasl", "**Itsbat.** {قُوا أَنفُسَكُمْ وَأَهْلِيكُمْ}, {وَفِیۤ أَنفُسِكُمۡ}, {وَمَاۤ أُنزِلَ}"],
      [{ id: "2", ar: "الثانية" }, "Tsabit dalam rasm, gugur dalam wasl", "**Itsbat.** Tujuh alif (kecuali *salasila* dua wajah), alif 'iwadh yang ditulis, yang gugur karena dua sukun {فِی ٱلسَّمَاۤءِ} → *fi*"],
      [{ id: "3", ar: "الثالثة" }, "Dibuang dalam rasm dan wasl", "**Hadzf.** {یَـٰۤأَیُّهَ ٱلسَّاحِرُ} → *ya ayyuhe*; {ٱلدَّاع}; {یَخۡش}"],
      [{ id: "4", ar: "الرابعة" }, "Dibuang dalam rasm, tsabit dalam wasl", "**Hadzf.** Shilah sughra pada {إِنَّهُۥ كَانَ} → waqf *innahu* (ha' sukun)"] ] },
    { t: "cek", q: { id: "Kata {یَـٰۤأَیُّهَ ٱلسَّاحِرُ} ketika waqf pada *ayyuha* dibaca…", ar: "الوقف على {أَیُّهَ} في {یَـٰۤأَیُّهَ ٱلسَّاحِرُ}…" }, o: [{ id: "Dengan alif", ar: "بالألف" }, { id: "Dengan ha' tanpa alif (*ayyuh*)", ar: "بالهاء دون ألف «أيه»" }, { id: "Dengan waw", ar: "بالواو" }, { id: "Tidak boleh waqf", ar: "لا يوقف" }], j: 1, b: { id: "Alifnya dibuang dalam rasm dan wasl; maka waqf pada ha' tanpa alif.", ar: "حذفت رسمًا فيوقف عليها بالهاء." } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Pengecualian pada bentuk 2, 3, dan 4", ar: "المستثنيات" }, id: "**Bentuk 2:** huruf yang diberi **sifr mustadir** (lingkaran kecil) — tsabit dalam rasm tetapi tidak diucapkan, misalnya {ثَمُودَا۟} (Hud, Al-Furqan, Al-'Ankabut, An-Najm), {قَوَارِیرَا۟} (kedua), dan {قَالُوۤا۟}. **Bentuk 3:** alif 'iwadh yang tidak ditulis pada {دُعَاۤءَ} {نِدَاۤءَ}, dan bentuk dari *ihya'* bila diikuti sukun seperti {تُحۡیِ ٱلۡمَوۡتَىٰ}: ketika waqf **ditetapkan** (*tuhyi*). **Bentuk 4:** {آتَان} dalam surah An-Naml punya **dua wajah** ketika waqf; dan bentuk dari *ihya'* bila diikuti huruf berharakat seperti {یُحۡیِۦ وَیُمِیتُ} dan {یَسۡتَحۡیِ}: ketika waqf **ditetapkan**.", ar: "يستثنى من الثانية الحروف ذات الصفر المستدير: {ثَمُودَا۟} في هود والفرقان والعنكبوت والنجم، و{قَوَارِیرَا۟} الثانية، و{قَالُوۤا۟}. ويستثنى من الثالثة ألفات العوض غير المرسومة في {دُعَاۤءَ، نِدَاۤءَ}، وما تصرف من الإحياء إذا أتى بعده ساكن {تُحۡیِ ٱلۡمَوۡتَىٰ} فوقفًا الإثبات. ويستثنى من الرابعة {آتَان} بسورة النمل ففيها وجهان، وما تصرف من الإحياء إذا أتى بعده متحرك {یُحۡیِۦ وَیُمِیتُ} {یَسۡتَحۡیِ} فحكمها وقفًا الإثبات." },

    { t: "judul", id: "Pertama: Huruf Alif", ar: "أولًا: الألف" },
    { t: "peta", ikon: "tree", pusat: { id: "Alif dalam rasm, wasl, dan waqf", ar: "الألف حذفًا وإثباتًا" }, cabang: [
      { id: "Tsabit dalam rasm", ar: "الثابتة رسمًا", sub: [{ id: "Tsabit saat wasl dan waqf", ar: "وصلًا ووقفًا" }, { id: "Tsabit waqf, gugur wasl", ar: "تثبت وقفًا وتحذف وصلًا" }, { id: "Gugur wasl dan waqf (bertanda sifr)", ar: "محذوفة وصلًا ووقفًا" }] },
      { id: "Dibuang dalam rasm", ar: "المحذوفة رسمًا", sub: [{ id: "Gugur wasl dan waqf", ar: "وصلًا ووقفًا" }, { id: "Tsabit wasl dan waqf (alif khanjariyyah)", ar: "تثبت وصلًا ووقفًا" }, { id: "Tsabit waqf saja", ar: "تثبت وقفًا فقط" }] } ] },
    { t: "sub", id: "Alif tsabit dalam rasm: tsabit wasl dan waqf", ar: "الحالة الأولى: إثباتها وصلًا ووقفًا" },
    { t: "ayat", ar: "{رَبَّنَا وَآتِنَا مَا وَعَدتَّنَا عَلَى رُسُلِكَ}", id: "Wahai Rabb kami, berikanlah kepada kami apa yang Engkau janjikan kepada kami melalui rasul-rasul-Mu.", src: "QS. Ali 'Imran: 194" },
    { t: "sub", id: "Tsabit ketika waqf, gugur ketika wasl (lima macam)", ar: "الحالة الثانية: تثبت وقفًا وتحذف وصلًا" },
    { t: "contoh", judul: { id: "Alif yang gugur karena dua sukun", ar: "الألف المحذوفة لالتقاء الساكنين" },
      ayat: { ar: "{قُلۡنَا ٱحۡمِلۡ فِیهَا}", src: "QS. Hud: 40", id: "Kami berfirman: muatkanlah ke dalamnya." },
      sorot: [
        { label: { ar: "قُلۡنَا ٱحۡمِلۡ" }, warna: "green", id: "Alif pada *qulna* sukun dan ha' pada *ihmil* sukun; untuk menghindari dua sukun, alif dibuang saat wasl: *qulnah-mil*. Saat waqf pada *qulna*, alif **ditetapkan**.", ar: "التخلص من الساكنين بحذف الألف وصلًا، وإذا وقفنا على «قلنا» أثبتنا الألف." } ] },
    { t: "tabel", judul: { id: "Kata *ayyuha*: kecuali tiga tempat", ar: "لفظ «أيها»" }, kolom: [{ id: "Tempat", ar: "الموضع" }, { id: "Waqf", ar: "الوقف" }], baris: [
      ["Semua {یَـٰۤأَیُّهَا} lainnya, misalnya {یَـٰۤأَیُّهَا ٱلنَّبِیُّ}", "Dengan **alif**"],
      ["QS. An-Nur: {وَتُوبُوا إِلَى اللَّهِ جَمِيعاً أَيُّهَا الْمُؤْمِنُونَ}", "*ayyuh* (tanpa alif, dengan ha')"],
      ["QS. Az-Zukhruf: {وَقَالُوا يَا أَيُّهَا السَّاحِرُ}", "*ya ayyuh*"],
      ["QS. Ar-Rahman: {سَنَفْرُغُ لَكُمْ أَيُّهَا الثَّقَلَانِ}", "*ayyuh* — alifnya dibuang dalam rasm, maka waqf dengan ha'"] ] },
    { t: "tabel", judul: { id: "Tujuh alif (ditetapkan saat waqf, gugur saat wasl)", ar: "الألفات السبع" }, kolom: [{ id: "Kata", ar: "الكلمة" }, { id: "Ayat", ar: "الآية" }], baris: [
      ["1. [[أَنَا]]", "{قَالَ أَنَا أُحْيِـي وَأُمِيتُ}"],
      ["2. [[لَّكِنَّا]]", "{لَّكِنَّا هُوَ اللَّهُ رَبِّي} (Al-Kahf) — waqf *lakinna*, wasl alif gugur"],
      ["3. [[الظُّنُونَا]]", "{وَتَظُنُّونَ بِاللَّهِ الظُّنُونَا} (Al-Ahzab)"],
      ["4. [[الرَّسُولَا]]", "{وَأَطَعۡنَا ٱلرَّسُولَا} (Al-Ahzab)"],
      ["5. [[السَّبِيلَا]]", "{فَأَضَلُّونَا ٱلسَّبِیلَا} (Al-Ahzab)"],
      ["6. [[قَوَارِيرَا]] (pertama)", "{وَأَكْوَابٍ كَانَتْ قَوَارِيرَا} (Al-Insan: 15); wasl: {قَوَارِيرَ مِن فِضَّةٍ}"],
      ["7. [[سَلَاسِلَا]]", "{إِنَّا أَعْتَدْنَا لِلْكَافِرِينَ سَلَاسِلَا وَأَغْلَالاً وَسَعِيراً} (Al-Insan: 4) — **dua wajah**: itsbat (lebih didahulukan) atau hadzf saat waqf: *salasila*/*salasil*"] ] },
    { t: "poin", judul: { id: "Alif lain yang ditetapkan saat waqf", ar: "ألفات أخرى تثبت وقفًا" }, item: [
      { ikon: "wind", judul: { id: "Dari nun taukid khafifah", ar: "المبدلة من نون التوكيد الخفيفة" }, id: "{لَنَسْفَعاً بِالنَّاصِيَةِ} — asalnya *lanasfa'an*; waqf: *lanasfa'a*.", ar: "{لَنَسْفَعاً بِالنَّاصِيَةِ} إذا وقفنا نقول: لَنَسْفَعا." },
      { ikon: "pen", judul: { id: "Dari tanwin manshub", ar: "المبدلة من التنوين المنصوب" }, id: "{عَلِیمًا حَكِیمࣰا} — waqf: *'alima*, *hakima*. Juga {إِذࣰا لَّٱرۡتَابَ} (waqf *idza*) dan {ٱهۡبِطُوا۟ مِصۡرࣰا} (Al-Baqarah: 61; waqf *mishra*).", ar: "الألف المبدلة من التنوين المنصوب «عليمًا»، والألف في «إذا»، وفي «مصرًا» {اهْبِطُواْ مِصْراً} (البقرة ٦١)." } ] },
    { t: "sub", id: "Alif tsabit dalam rasm tetapi gugur saat wasl dan waqf", ar: "الحالة الثالثة: محذوفة وصلًا ووقفًا" },
    { t: "daftar", item: [
      { id: "{وَثَمُودَا۟} di **empat tempat**: Hud, Al-Furqan, Al-'Ankabut, dan An-Najm.", ar: "{وَثَمُودَا۟} في أربعة مواضع: هود والفرقان والعنكبوت والنجم." },
      { id: "{قَوَارِیرَا۠} **yang kedua** di Al-Insan: 16 — tsabit dalam rasm tetapi gugur wasl dan waqf (waqf *qawarir*), berbeda dengan yang pertama yang ditetapkan saat waqf.", ar: "{قَوَارِیرَا۠} الموضع الثاني في الإنسان (١٦) محذوفة وصلًا ووقفًا، بخلاف الأول فإنه يثبت وقفًا." },
      { id: "Alif sesudah **waw jama'ah**: {قَالُوا۟} {یَتۡلُوا۟}.", ar: "الألف بعد واو الجماعة: {قَالُوا۟، یَتۡلُوا۟}." },
      { id: "{لَأَا۟ذۡبَحَنَّهُ} (An-Naml): alif sesudah hamzah.", ar: "{لَأَا۟ذۡبَحَنَّهُ} بسورة النمل." } ] },
    { t: "sub", id: "Alif yang dibuang dalam rasm", ar: "الألف المحذوفة رسمًا" },
    { t: "tabel", kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Sebab / contoh", ar: "السبب والمثال" }], baris: [
      [{ id: "Gugur wasl & waqf: karena **jazm**", ar: "الجزم" }, "{وَلَمۡ یَخۡشَ إِلَّا ٱللَّهَۖ} (At-Taubah: 18) → waqf *yakhsy*"],
      [{ id: "Gugur wasl & waqf: karena **bina'**", ar: "البناء" }, "{ثُمَّ تَوَلَّ عَنۡهُمۡ} (An-Naml: 28) → waqf *tawalla*"],
      [{ id: "Gugur wasl & waqf: **ma istifhamiyyah** yang dimasuki huruf jar", ar: "ما الاستفهامية" }, "*bima, lima, fima, 'amma, mimma* → {فَنَاظِرَةُۢ بِمَ یَرۡجِعُ ٱلۡمُرۡسَلُونَ} (An-Naml: 35), {عَمَّ یَتَسَاۤءَلُونَ} (An-Naba': 1), {مِّمَّا خَلَقَ} (An-Nahl: 81). Waqf: *bim, fim, mim* (sukun), *'amm* dan *mimm* (tasydid)"],
      [{ id: "Gugur: alif sesudah **waw jama'ah**", ar: "بعد واو الجماعة" }, "{وَجَاۤءُو} {بَاۤءُو} {فَاۤءُو} {سَعَوۡ} {عَتَوۡ} {تَبُوۤء}"],
      [{ id: "Gugur: *ayyuh* pada tiga tempat", ar: "أيه" }, "{أَیُّهَ ٱلۡمُؤۡمِنُونَ} {أَیُّهَ ٱلسَّاحِرُ} {أَیُّهَ ٱلثَّقَلَانِ}"],
      [{ id: "**Tsabit** wasl & waqf: alif khanjariyyah", ar: "الألف الخنجرية" }, "Alif kecil di atas huruf, dibaca **dua harakat**: {ٱلسَّمَـٰوَات}, {ٱلصَّـٰلِحِینَ}"],
      [{ id: "**Tsabit hanya saat waqf**", ar: "تثبت وقفًا فقط" }, "Kata berakhiran hamzah tanwin fathah: {دُعَاۤء} {نِدَاۤءࣰ} — alifnya 'iwadh dari tanwin manshub"] ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Catatan tentang Ibrahim", ar: "ملحوظة" }, id: "Alif pada kata {إِبۡرَٰ⁠هِـۧمَ} dibuang dalam **seluruh** Al-Qur'an, sedangkan ya'-nya dibuang **hanya di Surah Al-Baqarah**.", ar: "حذفت ألف كلمة {إِبۡرَٰ⁠هِـۧمَ} في جميع القرآن وحذفت ياؤه في البقرة فقط." },
    { t: "cek", q: { id: "Pada waqf, {قَوَارِیرَا۠} yang KEDUA (Al-Insan: 16) dibaca…", ar: "الوقف على {قَوَارِیرَا۠} الثانية…" }, o: [{ id: "*Qawarira* (alif ditetapkan)", ar: "قواريرا بالألف" }, { id: "*Qawarir* (tanpa alif)", ar: "قوارير بلا ألف" }, { id: "*Qawariri*", ar: "قواريري" }, { id: "Tidak boleh waqf", ar: "لا يوقف" }], j: 1, b: { id: "Tsabit dalam rasm namun bertanda sifr; gugur wasl dan waqf. Yang pertama (ayat 15) ditetapkan saat waqf.", ar: "الثانية محذوفة وصلًا ووقفًا، والأولى تثبت وقفًا." } },

    { t: "judul", id: "Kedua: Huruf Waw", ar: "ثانيًا: الواو" },
    { t: "tabel", judul: { id: "Waw tsabit dalam rasm", ar: "الواو الثابتة رسمًا" }, kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Tsabit wasl & waqf (tidak diikuti sukun)", ar: "وصلًا ووقفًا" }, "{وَقَالُوا۟ لِجُلُودِهِمۡ}, {وَٱسۡتَعِینُوا۟}"],
      [{ id: "Tsabit waqf, gugur wasl karena dua sukun", ar: "وقفًا فقط" }, "{كَاشِفُوا۟ ٱلۡعَذَابِ} (Ad-Dukhan: 15): waqf *kasyifu* (mad thabi'i 2 harakat); wasl *kasyiful-'adzab*"],
      [{ id: "Gugur wasl & waqf: ber-**sifr mustadir**", ar: "الصفر المستدير" }, "{وَأُو۟لَـٰتُ}, {أُو۟لَـٰۤىِٕكَ} (seluruh Al-Qur'an), {سَأُو۟رِیكُمۡ}: dibaca *ulaika*, bukan *ulaa'ika* dengan waw; waw itu ditulis karena hamzah berdhammah"] ] },
    { t: "tabel", judul: { id: "Waw yang dibuang dalam rasm", ar: "الواو المحذوفة رسمًا" }, kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Gugur wasl & waqf karena **jazm**", ar: "الجزم" }, "{وَمَن یَعۡشُ عَن ذِكۡرِ ٱلرَّحۡمَـٰنِ} (Az-Zukhruf: 36): waqf *ya'sy* (sukun), wasl *ya'syu* (dhammah)"],
      [{ id: "Gugur karena **bina'**", ar: "البناء" }, "{وَٱعۡفُ عَنَّا}: asal *wa'fu*; waqf *wa'fu*→*wa'f*, wasl dhammah"],
      [{ id: "Gugur **tanpa sebab** (empat tempat, disepakati)", ar: "لغير علة" }, "{وَیَدۡعُ ٱلۡإِنسَـٰنُ} (Al-Isra': 11); {وَیَمۡحُ ٱللَّهُ ٱلۡبَـٰطِلَ} (Asy-Syura: 24); {یَوۡمَ یَدۡعُ ٱلدَّاعِ} (Al-Qamar: 6); {سَنَدۡعُ ٱلزَّبَانِیَةَ} (Al-'Alaq: 18) — asal *wa yad'u, yamhu, sanad'u* (fi'il); waqf tanpa waw"],
      [{ id: "Kelima menurut As-Suyuthi", ar: "الموضع الخامس عند السيوطي" }, "{وَصَـٰلِحُ ٱلۡمُؤۡمِنِینَۖ} (At-Tahrim: 4): waqf *wa shalih*; asalnya *ash-shalihin* (isim jins) — **bukan** Nabi Shalih 'alaihis salam"],
      [{ id: "Tsabit wasl, gugur waqf: **shilah ha' dhamir**", ar: "صلة هاء الضمير" }, "{أَیَحۡسَبُ أَن لَّمۡ یَرَهُۥۤ أَحَدٌ} (Al-Balad: 7): waqf *yarah*"] ] },
    { t: "cek", q: { id: "Waqf pada {وَیَدۡعُ ٱلۡإِنسَـٰنُ} (Al-Isra': 11) yaitu pada kata *yad'u*, dibaca…", ar: "الوقف على {وَیَدۡعُ} في الإسراء…" }, o: [{ id: "*yad'u* dengan waw", ar: "يدعو بالواو" }, { id: "*yad'* tanpa waw", ar: "يدع بلا واو" }, { id: "*yad'i*", ar: "يدعي" }, { id: "*yad'a*", ar: "يدعا" }], j: 1, b: { id: "Waw dibuang tanpa sebab pada empat tempat; waqf tanpa waw.", ar: "حذفت الواو فيوقف بلا واو." } },

    { t: "judul", id: "Ketiga: Huruf Ya'", ar: "ثالثًا: الياء" },
    { t: "tabel", judul: { id: "Ya' tsabit dalam rasm", ar: "الياء الثابتة رسمًا" }, kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Tsabit rasm, wasl, waqf (tidak diikuti sukun)", ar: "وصلًا ووقفًا" }, "{إِنِّیۤ أَنَا} (Al-Hijr: 89); {رَبِّ أَرِنِی كَیۡفَ تُحۡیِ ٱلۡمَوۡتَىٰۖ} (Al-Baqarah: 260); {تَوَفَّنِی مُسۡلِمࣰا} (Yusuf: 101). Ya'-ya' ini punya pasangan yang dibuang: **17 kata**"],
      [{ id: "Tsabit waqf, gugur wasl: dua sukun", ar: "لالتقاء الساكنين" }, "{وَفِی ٱلسَّمَاۤءِ} (Adz-Dzariyat: 22): waqf *wa fi*"],
      [{ id: "Ya' pada jama' mudzakkar salim", ar: "الملحقة بجمع المذكر" }, "{حَاضِرِی ٱلۡمَسۡجِدِ} → *hadhiri*; {مُحِلِّی ٱلصَّیۡدِ}; {مُعۡجِزِی ٱللَّهِ}; {ٱلۡمُقِیمِی ٱلصَّلَوٰةِ}; *muhlikī*"],
      [{ id: "Ya' pada mashdar / fi'il / isim", ar: "المصدر والفعل والاسم" }, "{عَهۡدِی ٱلظَّـٰلِمِینَ} (Al-Baqarah: 124) → waqf *'ahdi*; {وَیُرۡبِی ٱلصَّدَقَـٰتِۗ} (Al-Baqarah: 276); *mukhzi*, *aydi*"],
      [{ id: "Ya' idhafah (7 kata yang disebut dosen)", ar: "ياءات الإضافة" }, "*inni, akhi, linafsi, dzikri, yalaitani, qaumi, ba'di* — tsabit rasm & waqf, gugur wasl karena dua sukun"],
      [{ id: "Gugur wasl & waqf: ber-**sifr mustadir**", ar: "الصفر المستدير" }, "{وَمَلَإِی۟هِ}, {أَفَإِی۟ن مَّاتَ}, {نَّبَإِی۟}: tsabit dalam rasm tetapi dibuang wasl dan waqf. Menurut Hafsh {نَّبَإِی۟ ٱلۡمُرۡسَلِینَ} dibaca *naba'i* dengan hamzah; pada riwayat selain Hafsh ada beberapa wajah"] ] },
    { t: "tabel", judul: { id: "Ya' yang dibuang dalam rasm", ar: "الياء المحذوفة رسمًا" }, kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Gugur wasl & waqf: **jazm**", ar: "الجزم" }, "{وَلَا تَبۡغِ ٱلۡفَسَادَ} (Al-Qashash: 77), asal *tabghi*"],
      [{ id: "Gugur: **bina'**", ar: "البناء" }, "{یَـٰۤأَیُّهَا ٱلنَّبِیُّ ٱتَّقِ ٱللَّهَ}, asal *ittaqi*"],
      [{ id: "Gugur: **isim manqush** bertanwin", ar: "الاسم المنقوص المنون" }, "*bagh, 'ad, baq, qadh* — asal *baghi, 'adi, baqi, qadhi*"],
      [{ id: "Gugur: **ya' zawa'id**", ar: "ياءات الزوائد" }, "{وَمَاۤ أَنتَ بِهَـٰدِ ٱلۡعُمۡیِ} (Ar-Rum: 53), *bil-wad*, *shal*, *yunad*"],
      [{ id: "Gugur: **munada mudhaf** ke ya' mutakallim", ar: "المنادى المضاف إلى ياء المتكلم" }, "{رَبِّ أَرِنِی} {رَبِّ ٱبۡنِ لِی} {یَـٰقَوۡمِ ٱعۡبُدُوا۟}; dikecualikan {یَـٰعِبَادِیَ} di Al-'Ankabut: 56 dan Az-Zumar: 53"],
      [{ id: "Tsabit wasl, gugur waqf: **shilah ha' dhamir**", ar: "صلة هاء الضمير" }, "{بِهِۦ بَصِیرࣰا} (Al-Insyiqaq: 15) → waqf *bih*"],
      [{ id: "Tsabit wasl; waqf **dua wajah**", ar: "جواز الوجهين وقفًا" }, "{ءَاتَىٰنِۦَ} (An-Naml: 36)"],
      [{ id: "Tsabit wasl & waqf", ar: "وصلًا ووقفًا" }, "{یُحۡیِۦ وَیُمِیتُ} (Al-Baqarah: 258) → waqf *yuhyi*"],
      [{ id: "Gugur wasl, tsabit waqf", ar: "وقفًا فقط" }, "{تُحۡیِ ٱلۡمَوۡتَىٰۖ} (Al-Baqarah: 260) → waqf *tuhyi*"] ] },
    { t: "banding", judul: { id: "Ya' yang tsabit dalam rasm vs pasangannya yang dibuang", ar: "نظائر الياءات" },
      kiri: { judul: { id: "Tsabit rasm (17 kata, 22 tempat)", ar: "ثابتة: سبع عشرة كلمة في اثنين وعشرين موضعًا" }, ikon: "check", warna: "green", poin: [
        { id: "{وَٱخۡشَوۡنِی} (Al-Baqarah: 150)", ar: "{وَٱخۡشَوۡنِی}" },
        { id: "{فَٱتَّبِعُونِی} (Ali 'Imran: 31)", ar: "{فَٱتَّبِعُونِی}" },
        { id: "*yahdini*, *hadani*, *dini*, *al-muhtadi* (Al-A'raf)", ar: "يهديني، هداني، ديني، المهتدي" },
        { id: "*fakiduni*, *nabghi*, *tas'alni*, *i'buduni*, *al-aydi*, *yattaqi*, *akhkhartani*, *du'a'i*", ar: "فكيدوني، نبغي، تسألني، اعبدوني، الأيدي، يتقي، أخرتني، دعائي" } ] },
      kanan: { judul: { id: "Pasangannya yang dibuang (16 kata, 18 tempat)", ar: "نظائرها المحذوفة: ست عشرة كلمة في ثمانية عشر موضعًا" }, ikon: "x", warna: "amber", poin: [
        { id: "{وَٱخۡشَوۡنِۚ ٱلۡیَوۡمَ أَكۡمَلۡتُ} (Al-Ma'idah: 3)", ar: "{وَٱخۡشَوۡنِۚ}" },
        { id: "{ٱتَّبِعُونِ أَهۡدِكُمۡ} (Ghafir: 38); {وَمَنِ ٱتَّبَعَنِ} (Ali 'Imran: 20)", ar: "{ٱتَّبِعُونِ} {ٱتَّبَعَنِ}" },
        { id: "{أَن یَهۡدِیَنِ رَبِّی} (Al-Kahf: 24); {وَقَدۡ هَدَىٰنِۚ} (Al-An'am: 80); {وَلِیَ دِینِ} (Al-Kafirun: 6); *al-muhtad* (Al-Isra', Al-Kahf)", ar: "{یَهۡدِیَنِ} {هَدَىٰنِ} {دِینِ} المهتد" },
        { id: "*fakiduni* / *nabghi* / *tas'alni* / *i'buduni* / *al-ayd* / *yattaqi* / *akhkhartani* / *du'a'i* — bentuk tanpa ya'", ar: "فكيدون، نبغ، تسألن، اعبدون، الأيد، يتق، أخرتن، دعاء" } ] } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Pasangan: {يَأْتِي} dan {يَأْتِ}", ar: "مثال آخر" }, id: "Kata *ya'ti* / *ta'ti* ditetapkan ya'-nya di seluruh Al-Qur'an, dan pasangannya yang dibuang ada di Surah Hud: {یَوۡمَ یَأۡتِ لَا} (Hud: 105).", ar: "كلمة {يأتي، وتأتي} ثابتة في جميع القرآن ولها نظائر محذوفة في سورة هود {یَوۡمَ یَأۡتِ لَا} [هود ١٠٥]." },
    { t: "catatan", gaya: "hikmah", judul: { id: "Penutup", ar: "الختام" }, id: "Dengan ini berakhir pembahasan bab al-hadzf wal-itsbat. Patokan utama bab ini: **ikuti rasm utsmani**, lalu perhatikan pengecualian karena riwayat. *Jazakumullahu khairan wa taqabbalallahu minna wa minkum shalihal a'mal.*", ar: "وبهذا انتهت محاضرة الحذف والإثبات. وجزاكم الله خيرًا وتقبل الله منا ومنكم صالح الأعمال." },
    { t: "tanya", q: { id: "Apa patokan waqf pada huruf madd di ujung kata?", ar: "ما الأصل في الوقف على حرف المد المتطرف؟" }, a: { id: "Patokannya **rasm**: tsabit dalam rasm → ditetapkan saat waqf; dibuang dalam rasm → dibuang saat waqf; kecuali yang dikecualikan karena riwayat.", ar: "العبرة بالرسم، إلا ما استثني بسبب الرواية." } },
    { t: "tanya", q: { id: "Apa arti sifr mustadir di atas huruf?", ar: "ما معنى الصفر المستدير فوق الحرف؟" }, a: { id: "Huruf itu tsabit dalam rasm tetapi **tidak diucapkan**, baik saat wasl maupun waqf, misalnya {قَالُوۤا۟} dan {أُو۟لَـٰۤىِٕكَ}.", ar: "أن الحرف ثابت رسمًا لكنه لا ينطق." } },
    { t: "balik", judul: { id: "Kartu kilat", ar: "بطاقات مراجعة" }, item: [
      { depan: { id: "Itsbat", ar: "الإثبات" }, belakang: { id: "Huruf ada dalam rasm", ar: "ثبوت الحرف رسمًا" } },
      { depan: { id: "Hadzf", ar: "الحذف" }, belakang: { id: "Huruf tidak ada dalam rasm", ar: "عدم ثبوت الحرف رسمًا" } },
      { depan: { id: "Waqf pada {یَـٰۤأَیُّهَ ٱلسَّاحِرُ}", ar: "الوقف على {أَیُّهَ}" }, belakang: { id: "*ya ayyuh* (tanpa alif)", ar: "يا أيه" } },
      { depan: { id: "Waqf pada {إِنَّهُۥ كَانَ}", ar: "الوقف على {إِنَّهُۥ}" }, belakang: { id: "*innah* (shilah dibuang)", ar: "إنَّهْ" } },
      { depan: { id: "Waqf pada {بِمَ}, {لِمَ}", ar: "الوقف على بم، لم" }, belakang: { id: "Mim sukun", ar: "بسكون الميم" } },
      { depan: { id: "Alif khanjariyyah dibaca…", ar: "الألف الخنجرية تُمد…" }, belakang: { id: "Dua harakat", ar: "حركتين" } } ] },
    { t: "ringkasan", item: [
      { id: "Itsbat = tsabit dalam rasm; hadzf = tidak tsabit dalam rasm; keduanya bisa berbeda dengan lafaz.", ar: "الإثبات ثبوت الحرف رسمًا، والحذف عدم ثبوته رسمًا، وقد يخالف اللفظ." },
      { id: "Hadzf ada tiga: muhaqqaq (jazm/bina'), muqaddar (takhfif), dan tanpa sebab.", ar: "الحذف: محقق، ومقدر، وبغير علة." },
      { id: "Kaidah waqf: patokannya rasm; tsabit → ditetapkan, dibuang → dibuang, kecuali karena riwayat.", ar: "العبرة بالرسم إلا ما استثني بسبب الرواية." },
      { id: "Empat bentuk: tsabit rasm+wasl (itsbat); tsabit rasm, gugur wasl (itsbat); dibuang rasm+wasl (hadzf); dibuang rasm, tsabit wasl (hadzf).", ar: "الصور الأربع وأحكامها." },
      { id: "Alif: tujuh alif ditetapkan saat waqf, *salasila* dua wajah, {ثَمُودَا۟} dan {قَوَارِیرَا۠} kedua gugur.", ar: "الألفات السبع، وسلاسلا وجهان، وثمودا وقواريرا الثانية محذوفتان." },
      { id: "Waw: empat tempat dibuang tanpa sebab (+ kelima menurut As-Suyuthi); ya': 17 kata tsabit punya pasangan yang dibuang.", ar: "الواو المحذوفة في أربعة مواضع، والياءات الثابتة سبع عشرة كلمة ولها نظائر محذوفة." } ] }
  ],
  istilah: [
    { ar: "الإثبات", latin: "al-itsbat", id: "Penetapan huruf", def: { id: "Tetapnya huruf dalam rasm; kadang dibuang dalam lafaz.", ar: "ثبوت الحرف رسمًا وقد يحذف لفظًا." } },
    { ar: "الحذف", latin: "al-hadzf", id: "Pembuangan huruf", def: { id: "Tidak adanya huruf dalam rasm; kadang tetap dilafazkan.", ar: "عدم ثبوت الحرف رسمًا وقد يثبت لفظًا." } },
    { ar: "الرسم العثماني", latin: "ar-rasm al-'utsmani", id: "Rasm utsmani", def: { id: "Tulisan mushaf yang wajib diikuti secara syar'i.", ar: "رسم المصحف الواجب اتباعه شرعًا." } },
    { ar: "الصفر المستدير", latin: "ash-shifr al-mustadir", id: "Lingkaran kecil", def: { id: "Tanda bahwa huruf tsabit dalam rasm tetapi tidak diucapkan.", ar: "علامة ثبوت الحرف رسمًا دون نطق." } },
    { ar: "الألف الخنجرية", latin: "al-alif al-khanjariyyah", id: "Alif kecil", def: { id: "Tanda alif yang dibuang dalam rasm tetapi tetap diucapkan (2 harakat).", ar: "شكلة تفيد نطق الألف المحذوفة رسمًا." } },
    { ar: "ألف العوض", latin: "alif al-'iwadh", id: "Alif pengganti", def: { id: "Alif pengganti tanwin manshub, ditetapkan ketika waqf.", ar: "الألف المبدلة من التنوين المنصوب." } },
    { ar: "الصلة الصغرى", latin: "ash-shilah ash-shughra", id: "Shilah kecil", def: { id: "Mad pada ha' dhamir ketika wasl; dibuang ketika waqf.", ar: "مد هاء الضمير وصلًا وتحذف وقفًا." } },
    { ar: "الحذف المحقق", latin: "al-hadzf al-muhaqqaq", id: "Hadzf karena sebab nahwu", def: { id: "Dibuang karena jazm atau bina'.", ar: "حذف لعلة نحوية كالجزم والبناء." } },
    { ar: "الحذف المقدر", latin: "al-hadzf al-muqaddar", id: "Hadzf untuk takhfif", def: { id: "Dibuang untuk meringankan dua huruf serupa.", ar: "حذف للتخفيف لتماثل حرفين." } },
    { ar: "ياءات الزوائد", latin: "yā'āt az-zawā'id", id: "Ya' tambahan", def: { id: "Ya' yang dibuang dalam rasm, seperti {بِهَـٰدِ ٱلۡعُمۡیِ}.", ar: "ياءات محذوفة رسمًا مثل {بِهَـٰدِ ٱلۡعُمۡیِ}." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Al-hadzf menurut ceramah adalah…", ar: "الحذف هو…" }, o: [{ id: "Tetapnya huruf dalam rasm", ar: "ثبوت الحرف رسمًا" }, { id: "Tidak tsabitnya huruf dalam rasm", ar: "عدم ثبوت الحرف رسمًا" }, { id: "Memanjangkan huruf", ar: "مد الحرف" }, { id: "Menggabung dua huruf", ar: "إدغام حرفين" }], j: 1, b: { id: "Hadzf: tidak ada dalam rasm, kadang tetap dilafazkan.", ar: "الحذف عدم ثبوت الحرف رسمًا." } },
      { q: { id: "{وَلَمۡ یُؤۡتَ} termasuk hadzf…", ar: "{وَلَمۡ یُؤۡتَ} من الحذف…" }, o: [{ id: "Muqaddar", ar: "المقدر" }, { id: "Tanpa sebab", ar: "بغير علة" }, { id: "Muhaqqaq (karena jazm)", ar: "المحقق" }, { id: "Karena dua sukun", ar: "لالتقاء الساكنين" }], j: 2, b: { id: "Dibuang karena jazm.", ar: "حذف لعلة نحوية." } },
      { q: { id: "{لَا یَسۡتَحۡیِ} termasuk hadzf…", ar: "{لَا یَسۡتَحۡیِ} من الحذف…" }, o: [{ id: "Muhaqqaq", ar: "المحقق" }, { id: "Muqaddar (takhfif)", ar: "المقدر" }, { id: "Karena bina'", ar: "للبناء" }, { id: "Karena jazm", ar: "للجزم" }], j: 1, b: { id: "Meringankan dua huruf yang sama.", ar: "للتخفيف في النطق بحرفين متماثلين." } },
      { q: { id: "Waqf pada {قُلۡنَا} dalam {قُلۡنَا ٱحۡمِلۡ} (Hud: 40)…", ar: "الوقف على «قلنا» في {قُلۡنَا ٱحۡمِلۡ}…" }, o: [{ id: "Alif dibuang", ar: "تحذف الألف" }, { id: "Alif ditetapkan", ar: "تثبت الألف" }, { id: "Diganti ya'", ar: "تبدل ياءً" }, { id: "Diganti hamzah", ar: "تبدل همزة" }], j: 1, b: { id: "Alif gugur saat wasl karena dua sukun, ditetapkan saat waqf.", ar: "تحذف وصلًا لالتقاء الساكنين وتثبت وقفًا." } },
      { q: { id: "Waqf pada {أَیُّهَ ٱلثَّقَلَانِ} (Ar-Rahman)…", ar: "الوقف على {أَیُّهَ ٱلثَّقَلَانِ}…" }, o: [{ id: "*ayyuha*", ar: "أيها" }, { id: "*ayyuh* (dengan ha')", ar: "أيه" }, { id: "*ayyu*", ar: "أيّ" }, { id: "*ayyuhi*", ar: "أيهي" }], j: 1, b: { id: "Salah satu dari tiga tempat yang alifnya dibuang.", ar: "من المواضع الثلاثة." } },
      { q: { id: "Berapa jumlah alif yang ditetapkan saat waqf dan gugur saat wasl (alif sab'ah) menurut ceramah?", ar: "عدد الألفات التي تثبت وقفًا وتحذف وصلًا عند المحاضر…" }, o: [{ id: "Tiga", ar: "ثلاث" }, { id: "Lima", ar: "خمس" }, { id: "Tujuh", ar: "سبع" }, { id: "Sembilan", ar: "تسع" }], j: 2, b: { id: "Tujuh alif; *salasila* punya dua wajah.", ar: "الألفات السبع." } },
      { q: { id: "Kata yang alifnya TIDAK dibaca saat wasl maupun waqf (bertanda sifr)…", ar: "كلمة ألفها محذوفة وصلًا ووقفًا…" }, o: [{ id: "{وَثَمُودَا۟}", ar: "{وَثَمُودَا۟}" }, { id: "{لَّكِنَّا}", ar: "{لَّكِنَّا}" }, { id: "{ٱلظُّنُونَا}", ar: "{ٱلظُّنُونَا}" }, { id: "{عَلِیمًا}", ar: "{عَلِیمًا}" }], j: 0, b: { id: "Tsamuda di empat tempat bertanda sifr.", ar: "ثمودا في أربعة مواضع." } },
      { q: { id: "Waqf pada {بِمَ یَرۡجِعُ} (An-Naml: 35)…", ar: "الوقف على «بم»…" }, o: [{ id: "*bima*", ar: "بما" }, { id: "*bim* (mim sukun)", ar: "بمْ" }, { id: "*bimmi*", ar: "بمِّ" }, { id: "*bimu*", ar: "بمُ" }], j: 1, b: { id: "Alif *ma* istifhamiyyah dibuang; waqf pada mim sukun.", ar: "يوقف بسكون الميم." } },
      { q: { id: "Berapa tempat waw dibuang tanpa sebab dan disepakati?", ar: "كم موضعًا تحذف فيه الواو لغير علة اتفاقًا؟" }, o: [{ id: "Dua", ar: "اثنان" }, { id: "Empat", ar: "أربعة" }, { id: "Enam", ar: "ستة" }, { id: "Tujuh", ar: "سبعة" }], j: 1, b: { id: "{وَیَدۡعُ}, {وَیَمۡحُ}, {یَدۡعُ ٱلدَّاعِ}, {سَنَدۡعُ}.", ar: "أربعة مواضع." } },
      { q: { id: "Tempat kelima waw yang dibuang menurut As-Suyuthi adalah…", ar: "الموضع الخامس عند السيوطي…" }, o: [{ id: "{وَصَـٰلِحُ ٱلۡمُؤۡمِنِینَ}", ar: "{وَصَـٰلِحُ ٱلۡمُؤۡمِنِینَ}" }, { id: "{كَاشِفُوا۟}", ar: "{كَاشِفُوا۟}" }, { id: "{أُو۟لَـٰۤىِٕكَ}", ar: "{أُو۟لَـٰۤىِٕكَ}" }, { id: "{وَٱعۡفُ}", ar: "{وَٱعۡفُ}" }], j: 0, b: { id: "Yang dimaksud bukan Nabi Shalih, tetapi isim jins (orang-orang saleh).", ar: "ولم يقصد به النبي صالح عليه السلام." } },
      { q: { id: "Waqf pada {بِهِۦ بَصِیرࣰا} (Al-Insyiqaq: 15)…", ar: "الوقف على {بِهِۦ}…" }, o: [{ id: "*bihi*", ar: "بهي" }, { id: "*bih*", ar: "به" }, { id: "*bihu*", ar: "بهو" }, { id: "*bihia*", ar: "بها" }], j: 1, b: { id: "Ya' shilah ha' dhamir dibuang saat waqf.", ar: "تحذف الصلة وقفًا." } },
      { q: { id: "{یُحۡیِۦ وَیُمِیتُ} ketika waqf pada *yuhyi*…", ar: "الوقف على {یُحۡیِۦ}…" }, o: [{ id: "Ya' dibuang", ar: "تحذف الياء" }, { id: "Ya' ditetapkan", ar: "تثبت الياء" }, { id: "Diganti alif", ar: "تبدل ألفًا" }, { id: "Diganti waw", ar: "تبدل واوًا" }], j: 1, b: { id: "Bentuk *ihya'* yang diikuti huruf berharakat ditetapkan saat waqf.", ar: "ما تصرف من الإحياء إذا أتى بعده متحرك حكمه وقفًا الإثبات." } }
    ],
    bs: [
      { t: { id: "Bab hadzf dan itsbat khusus untuk tiga huruf madd: alif, waw, ya'.", ar: "الباب خاص بحروف المد الثلاثة." }, j: true },
      { t: { id: "Patokan waqf dalam bab ini adalah lafaz, bukan rasm.", ar: "العبرة في الوقف باللفظ لا بالرسم." }, j: false, b: { id: "Patokannya rasm.", ar: "العبرة بالرسم." } },
      { t: { id: "Alif pada {ثَمُودَا۟} tsabit dalam rasm tetapi tidak dibaca saat wasl dan waqf.", ar: "ألف {ثَمُودَا۟} ثابتة رسمًا محذوفة وصلًا ووقفًا." }, j: true },
      { t: { id: "Pada {سَلَاسِلَا} saat waqf hanya satu wajah, yaitu dibuang.", ar: "في {سَلَاسِلَا} وجه واحد وقفًا." }, j: false, b: { id: "Dua wajah: itsbat (lebih didahulukan) dan hadzf.", ar: "فيها وجهان." } },
      { t: { id: "Alif khanjariyyah pada {ٱلسَّمَـٰوَات} dibaca dua harakat.", ar: "الألف الخنجرية في {السماوات} تمد حركتين." }, j: true },
      { t: { id: "Alif pada {دُعَاۤء} ditetapkan hanya saat waqf.", ar: "ألف {دُعَاۤء} تثبت وقفًا فقط." }, j: true },
      { t: { id: "Alif pada {إِبۡرَٰهِـۧمَ} dibuang hanya di Surah Al-Baqarah.", ar: "حذفت ألف إبراهيم في البقرة فقط." }, j: false, b: { id: "Alifnya dibuang di seluruh Al-Qur'an; yang hanya di Al-Baqarah adalah ya'-nya.", ar: "ألفه في جميع القرآن وياؤه في البقرة." } },
      { t: { id: "Waw pada {كَاشِفُوا۟ ٱلۡعَذَابِ} ditetapkan saat waqf dan gugur saat wasl.", ar: "واو {كَاشِفُوا۟} تثبت وقفًا وتحذف وصلًا." }, j: true },
      { t: { id: "Ya' pada {وَفِی ٱلسَّمَاۤءِ} ditetapkan saat wasl dan dibuang saat waqf.", ar: "ياء {وَفِی ٱلسَّمَاۤءِ} تثبت وصلًا وتحذف وقفًا." }, j: false, b: { id: "Sebaliknya: tsabit saat waqf, gugur saat wasl karena dua sukun.", ar: "تثبت وقفًا وتحذف وصلًا." } },
      { t: { id: "Ya' pada {وَٱخۡشَوۡنِی} (Al-Baqarah: 150) punya pasangan yang dibuang di Al-Ma'idah: 3.", ar: "لـ {وَٱخۡشَوۡنِی} نظير محذوف في المائدة." }, j: true }
    ],
    jodoh: [
      { a: { id: "Hadzf muhaqqaq", ar: "الحذف المحقق" }, b: { id: "Karena jazm atau bina'", ar: "لعلة الجزم أو البناء" } },
      { a: { id: "Hadzf muqaddar", ar: "الحذف المقدر" }, b: { id: "Untuk takhfif dua huruf serupa", ar: "للتخفيف" } },
      { a: { id: "{إِنَّهُۥ كَانَ} saat waqf", ar: "{إِنَّهُۥ} وقفًا" }, b: { id: "*innah*", ar: "إنَّهْ" } },
      { a: { id: "{ثُمَّ تَوَلَّ عَنۡهُمۡ}", ar: "{تَوَلَّ}" }, b: { id: "Alif dibuang karena bina'", ar: "حذف للبناء" } },
      { a: { id: "{وَلَمۡ یَخۡشَ}", ar: "{یَخۡشَ}" }, b: { id: "Alif dibuang karena jazm", ar: "حذف للجزم" } },
      { a: { id: "{وَٱعۡفُ عَنَّا}", ar: "{وَٱعۡفُ}" }, b: { id: "Waw dibuang karena bina'", ar: "حذف للبناء" } },
      { a: { id: "{وَمَن یَعۡشُ}", ar: "{یَعۡشُ}" }, b: { id: "Waw dibuang karena jazm", ar: "حذف للجزم" } },
      { a: { id: "{وَلَا تَبۡغِ}", ar: "{تَبۡغِ}" }, b: { id: "Ya' dibuang karena jazm", ar: "حذف للجزم" } }
    ],
    urut: { t: { id: "Urutkan empat bentuk kaidah waqf sebagaimana disebutkan dosen.", ar: "رتب الصور الأربع كما ذكرها الشيخ." },
      item: [
        { id: "Tsabit dalam rasm dan wasl → itsbat", ar: "ثبت رسمًا ووصلًا: الإثبات" },
        { id: "Tsabit dalam rasm, gugur wasl → itsbat", ar: "ثبت رسمًا وحذف وصلًا: الإثبات" },
        { id: "Dibuang dalam rasm dan wasl → hadzf", ar: "حذف رسمًا ووصلًا: الحذف" },
        { id: "Dibuang dalam rasm, tsabit wasl → hadzf", ar: "حذف رسمًا وثبت وصلًا: الحذف" }
      ] },
    isian: [
      { t: { id: "Al-itsbat adalah tetapnya huruf dalam ______.", ar: "الإثبات هو ثبوت الحرف في ______." }, j: { id: "rasm", ar: "الرسم" }, x: [{ id: "makhraj", ar: "المخرج" }, { id: "sifat", ar: "الصفة" }, { id: "mad", ar: "المد" }] },
      { t: { id: "Waqf pada {بِمَ} dibaca dengan mim ______.", ar: "الوقف على {بِمَ} بميم ______." }, j: { id: "sukun", ar: "ساكنة" }, x: [{ id: "fathah", ar: "مفتوحة" }, { id: "dhammah", ar: "مضمومة" }, { id: "kasrah", ar: "مكسورة" }] },
      { t: { id: "Lingkaran kecil di atas huruf disebut ______ mustadir.", ar: "الدائرة الصغيرة تسمى ______ المستدير." }, j: { id: "shifr", ar: "الصفر" }, x: [{ id: "naqth", ar: "النقط" }, { id: "syaddah", ar: "الشدة" }, { id: "sukun", ar: "السكون" }] },
      { t: { id: "Waqf pada {وَیَدۡعُ ٱلۡإِنسَـٰنُ} adalah *wa yad'* karena waw ______.", ar: "الوقف على {وَیَدۡعُ} بلا واو لأن الواو ______." }, j: { id: "dibuang tanpa sebab", ar: "محذوفة لغير علة" }, x: [{ id: "ditasydid", ar: "مشددة" }, { id: "diganti ya'", ar: "مبدلة ياء" }, { id: "diidghamkan", ar: "مدغمة" }] },
      { t: { id: "Menurut As-Suyuthi, waw yang dibuang tempat kelima pada kata {وَصَـٰلِحُ} bukan Nabi Shalih tetapi ______.", ar: "{وَصَـٰلِحُ} ليس النبي صالحًا بل ______." }, j: { id: "orang-orang saleh (isim jins)", ar: "الصالحين (اسم جنس)" }, x: [{ id: "malaikat", ar: "الملائكة" }, { id: "nama kota", ar: "اسم بلد" }, { id: "nama surah", ar: "اسم سورة" }] }
    ],
    pilah: { t: { id: "Pilah: ketika WAQF, huruf madd pada kata berikut DITETAPKAN atau DIBUANG?", ar: "صنّف: عند الوقف يثبت أو يحذف حرف المد." },
      kategori: [{ id: "Ditetapkan", ar: "يثبت" }, { id: "Dibuang", ar: "يحذف" }],
      item: [
        { t: { id: "{قُلۡنَا} (Hud: 40)", ar: "{قُلۡنَا}" }, k: 0 },
        { t: { id: "{عَلِیمًا}", ar: "{عَلِیمًا}" }, k: 0 },
        { t: { id: "{وَثَمُودَا۟}", ar: "{وَثَمُودَا۟}" }, k: 1 },
        { t: { id: "{یَـٰۤأَیُّهَ ٱلسَّاحِرُ}", ar: "{أَیُّهَ}" }, k: 1 },
        { t: { id: "{ٱلصَّـٰلِحِینَ} (alif kecil, saat dibaca)", ar: "الألف الخنجرية" }, k: 0 },
        { t: { id: "{إِنَّهُۥ}", ar: "{إِنَّهُۥ}" }, k: 1 },
        { t: { id: "{تُحۡیِ ٱلۡمَوۡتَىٰ} (ya')", ar: "{تُحۡیِ}" }, k: 0 },
        { t: { id: "{ٱلدَّاع}", ar: "{ٱلدَّاع}" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرّف الإثبات والحذف، واذكر أنواع الحذف.", id: "Definisikan itsbat dan hadzf, lalu sebutkan jenis-jenis hadzf." },
      j: { ar: "الإثبات: ثبوت الحرف رسمًا وقد يحذف لفظًا. والحذف: عدم ثبوت الحرف رسمًا وقد يثبت لفظًا. وأنواع الحذف: المحقق لعلة نحوية كالجزم والبناء، والمقدر للتخفيف لتماثل حرفين، والمحذوف بغير علة.",
        id: "**Itsbat**: tetapnya huruf dalam rasm (bisa dibuang dalam lafaz). **Hadzf**: tidak ada dalam rasm (bisa tetap dilafazkan). Jenis hadzf: **muhaqqaq** (karena jazm/bina'), **muqaddar** (takhfif dua huruf serupa), dan **tanpa sebab**." } },
    { t: { ar: "اذكر قاعدة الوقف على حرف المد المتطرف وصورها الأربع.", id: "Sebutkan kaidah waqf pada huruf madd di ujung kata dan empat bentuknya." },
      j: { ar: "القاعدة: إذا ثبت حرف المد رسمًا ثبت وقفًا، وإذا حذف رسمًا حذف وقفًا إلا ما استثني بسبب الرواية. الصور: ١- ثبت رسمًا ووصلًا: الإثبات. ٢- ثبت رسمًا وحذف وصلًا: الإثبات. ٣- حذف رسمًا ووصلًا: الحذف. ٤- حذف رسمًا وثبت وصلًا: الحذف.",
        id: "Kaidah: tsabit dalam rasm → ditetapkan saat waqf; dibuang dalam rasm → dibuang saat waqf, kecuali karena riwayat. Bentuk: (1) tsabit rasm+wasl: itsbat; (2) tsabit rasm, gugur wasl: itsbat; (3) dibuang rasm+wasl: hadzf; (4) dibuang rasm, tsabit wasl: hadzf." } },
    { t: { ar: "ما حكم الوقف على: {قُلۡنَا ٱحۡمِلۡ}، {أَیُّهَ ٱلسَّاحِرُ}، {وَثَمُودَا۟}، {بِمَ}؟ ولماذا؟", id: "Apa hukum waqf pada {قُلۡنَا}, {أَیُّهَ ٱلسَّاحِرُ}, {وَثَمُودَا۟}, dan {بِمَ}? Mengapa?" },
      j: { ar: "«قلنا» بإثبات الألف لأنها ثابتة رسمًا ومحذوفة وصلًا لالتقاء الساكنين. «أيه» بالهاء دون ألف لأن الألف محذوفة رسمًا. «ثمودا» بلا ألف وصلًا ووقفًا لأنها ثابتة رسمًا وعليها صفر مستدير. «بم» بسكون الميم لأن ألف ما الاستفهامية حذفت رسمًا ووصلًا ووقفًا.",
        id: "*Qulna*: alif **ditetapkan** (tsabit rasm, gugur wasl karena dua sukun). *Ayyuh*: waqf **dengan ha' tanpa alif** (dibuang dalam rasm). *Tsamuda*: **tanpa alif** wasl dan waqf (tsabit rasm tapi bertanda sifr). *Bim*: **mim sukun** (alif *ma* istifhamiyyah dibuang rasm, wasl, waqf)." } },
    { t: { ar: "اذكر المواضع الأربعة التي تحذف فيها الواو لغير علة مع الوقف عليها.", id: "Sebutkan empat tempat waw dibuang tanpa sebab beserta cara waqfnya." },
      j: { ar: "{وَیَدۡعُ ٱلۡإِنسَـٰنُ} (الإسراء ١١) وقفًا «ويدع»، {وَیَمۡحُ ٱللَّهُ} (الشورى ٢٤) «ويمح»، {یَوۡمَ یَدۡعُ ٱلدَّاعِ} (القمر ٦) «يوم يدع»، {سَنَدۡعُ ٱلزَّبَانِیَةَ} (العلق ١٨) «سندع»؛ وكلها أفعال أصلها: يدعو، يمحو، سندعو. وذكر السيوطي موضعًا خامسًا {وَصَـٰلِحُ ٱلۡمُؤۡمِنِینَ} (التحريم ٤).",
        id: "{وَیَدۡعُ} (Al-Isra' 11) → *wa yad'*; {وَیَمۡحُ} (Asy-Syura 24) → *wa yamh*; {یَدۡعُ ٱلدَّاعِ} (Al-Qamar 6) → *yad'*; {سَنَدۡعُ} (Al-'Alaq 18) → *sanad'*. Semuanya fi'il (asal *yad'u, yamhu, sanad'u*). As-Suyuthi menambah tempat kelima: {وَصَـٰلِحُ ٱلۡمُؤۡمِنِینَ} (At-Tahrim 4)." } },
    { t: { ar: "ما حكم الياء في {وَفِی ٱلسَّمَاۤءِ} و{بِهِۦ بَصِیرࣰا} و{تُحۡیِ ٱلۡمَوۡتَىٰ} و{أَفَإِی۟ن مَّاتَ}؟", id: "Bagaimana hukum ya' pada {وَفِی ٱلسَّمَاۤءِ}, {بِهِۦ بَصِیرࣰا}, {تُحۡیِ ٱلۡمَوۡتَىٰ}, dan {أَفَإِی۟ن مَّاتَ}?" },
      j: { ar: "{وَفِی ٱلسَّمَاۤءِ}: ثابتة رسمًا ووقفًا محذوفة وصلًا لالتقاء الساكنين. {بِهِۦ}: محذوفة رسمًا، ثابتة وصلًا، محذوفة وقفًا لأنها صلة هاء الضمير «به». {تُحۡیِ}: محذوفة رسمًا ووصلًا، ثابتة وقفًا «تحيي». {أَفَإِی۟ن}: ثابتة رسمًا محذوفة وصلًا ووقفًا لوجود الصفر المستدير.",
        id: "{وَفِی ٱلسَّمَاۤءِ}: tsabit rasm & waqf, gugur wasl (dua sukun). {بِهِۦ}: dibuang rasm, tsabit wasl, dibuang waqf (*bih*). {تُحۡیِ}: dibuang rasm & wasl, ditetapkan waqf (*tuhyi*). {أَفَإِی۟ن}: tsabit rasm tetapi gugur wasl & waqf karena sifr mustadir." } }
  ]
});
