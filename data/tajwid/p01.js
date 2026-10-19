/* Tajwid — Pertemuan 1: Mukadimah Ilmu Tajwid, Isti'adzah, dan Basmalah */
Kuliah.pertemuan("tajwid", {
  no: 1, motif: "kalam", tema: 0, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/66",
  bab: { id: "Mabadi' ilmu tajwid, bab isti'adzah, dan bab basmalah", ar: "مبادئ علم التجويد، وباب الاستعاذة، وباب البسملة" },
  judul: { id: "Mukadimah Ilmu Tajwid, Isti'adzah, dan Basmalah", ar: "مقدمة علم التجويد والاستعاذة والبسملة" },
  ringkas: {
    id: "Mabadi' ilmu tajwid (definisi, keutamaan, tujuan, sumber, masalah, rukun, perumus), dua bagian tajwid beserta hukumnya, tingkatan bacaan (tahqiq, hadr, tadwir, tartil), lahn jali dan khafi, lalu bab isti'adzah (hukum, redaksi, jahr dan israr) dan bab basmalah (hukum, kedudukan, serta wajah-wajah yang dibolehkan).",
    ar: "مبادئ علم التجويد: حده وفضله وغايته واستمداده ومسائله وأركانه وواضعه، وأقسامه وحكمه، ومراتب القراءة، واللحن الجلي والخفي، ثم باب الاستعاذة (حكمها وصيغها وجهرها وإسرارها)، وباب البسملة (حكمها وأوجهها الجائزة)."
  },
  tujuan: [
    { id: "Menjelaskan definisi, keutamaan, tujuan, dan rukun ilmu tajwid.", ar: "بيان تعريف علم التجويد وفضله وغايته وأركانه." },
    { id: "Membedakan tajwid amali dan ilmi beserta hukumnya, serta tingkatan bacaan dan jenis lahn.", ar: "التفريق بين التجويد العملي والعلمي وحكمهما، ومراتب القراءة وأنواع اللحن." },
    { id: "Menjelaskan hukum, redaksi, serta keadaan jahr dan israr pada isti'adzah.", ar: "شرح حكم الاستعاذة وصيغها ومواضع الجهر والإسرار بها." },
    { id: "Menjelaskan hukum basmalah dan wajah-wajah yang dibolehkan antara isti'adzah, basmalah, dan awal surah.", ar: "بيان حكم البسملة وأوجه الوصل والقطع الجائزة بين الاستعاذة والبسملة وأول السورة." },
    { id: "Menerapkan wajah-wajah tersebut pada contoh ayat, termasuk Al-Anfal–At-Taubah.", ar: "تطبيق الأوجه على الأمثلة ومنها بين الأنفال والتوبة." }
  ],
  isi: [
    { t: "pembuka", id: "Kuliah Tajwid dimulai dengan **mabadi' ilmu tajwid**, yaitu pengantar singkat yang memperkenalkan ilmu ini sebelum masuk ke hukum-hukumnya. Nabi ﷺ bersabda: *\"Sebaik-baik kalian adalah orang yang mempelajari Al-Qur'an dan mengajarkannya.\"* Kitab yang dibahas: *Al-Bidayah fi 'Ilm at-Tajwid*, dijelaskan oleh Syaikh Muhammad asy-Syuqairi.", ar: "نبدأ بمبادئ علم التجويد، وهي التعريف بالعلم قبل الدخول في أحكامه، من كتاب البداية في علم التجويد بشرح الشيخ محمد الشقيري." },
    { t: "ayat", ar: "وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا", id: "Dan bacalah Al-Qur'an itu dengan tartil (perlahan dan tertib).", src: "QS. Al-Muzzammil: 4" },
    { t: "kutipan", ar: "وَالأَخْذُ بِالتَّجْوِيدِ حَتْمٌ لاَزِمُ ... مَنْ لَمْ يُجَوِّدِ الْقُرْآنَ آثِمُ * لأَنَّهُ بِهِ الإِلَهُ أَنْزَلاَ ... وَهَكَذَا مِنْهُ إِلَيْنَا وَصَلاَ", id: "Mengambil (mengamalkan) tajwid itu wajib dan pasti; siapa tidak men-tajwid-kan Al-Qur'an, ia berdosa. Sebab dengannya Allah menurunkannya, dan demikian pula ia sampai kepada kita dari-Nya.", oleh: "Imam Ibnul Jazari, Al-Muqaddimah al-Jazariyyah" },

    { t: "judul", id: "Mabadi' Ilmu Tajwid", ar: "مبادئ علم التجويد" },
    { t: "definisi", judul: { id: "Ta'rif ilmu tajwid", ar: "حد علم التجويد" },
      lughah: { id: "**At-tahsin wal-itqan** (memperindah dan memantapkan). Dari ucapan *jawwadtu asy-syai'a* = aku memperbagusnya; *hadza syai'un jayyid* = ini sesuatu yang bagus.", ar: "التحسين والإتقان، من قولنا: جوَّدت الشيء أي حسَّنته، وهذا شيء جيد أي حسن." },
      istilah: { id: "Ilmu yang membahas kata-kata Al-Qur'an dari sisi **memberikan kepada huruf haknya dan mustahaknya**.", ar: "علم يبحث في الكلمات القرآنية من حيث إعطاء الحروف حقها ومستحقها." } },
    { t: "poin", judul: { id: "Hak huruf dan mustahak huruf", ar: "حق الحرف ومستحقه" }, item: [
      { ikon: "key", judul: { id: "Hak huruf (haqqul-harf)", ar: "حق الحرف" }, id: "Mengeluarkan tiap huruf dari **makhraj** yang ditentukan tanpa menyimpang atau melampaui, serta **sifat-sifat lazim** yang tak terpisah dari huruf, seperti jahr, rakhawah, dan isti'la'.", ar: "إخراج كل حرف من مخرجه المحدد دون انحراف أو تجاوز، مع الصفات اللازمة التي لا تنفك عنه كالجهر والرخاوة والاستعلاء." },
      { ikon: "layers", judul: { id: "Mustahak huruf (mustahaqqul-harf)", ar: "مستحق الحرف" }, id: "Hukum-hukum yang **timbul dari sifat-sifat itu** saat huruf bersusun, seperti tafkhim, tarqiq, izhhar, dan idgham.", ar: "الأحكام التي تنشأ عن تلك الصفات كالتفخيم والترقيق والإظهار والإدغام." } ] },
    { t: "tabel", judul: { id: "Tujuh mabadi' ilmu tajwid", ar: "مبادئ العلم" }, kolom: [{ id: "Mabda'", ar: "المبدأ" }, { id: "Penjelasan Syaikh", ar: "البيان" }], baris: [
      [{ id: "Keutamaan", ar: "الفضل" }, { id: "Termasuk **ilmu paling mulia**, karena berkaitan dengan kitab paling mulia, yaitu Al-Qur'an.", ar: "من أشرف العلوم لتعلقه بأشرف الكتب وهو القرآن الكريم." }],
      [{ id: "Tujuan dan buah", ar: "الغاية والثمرة" }, { id: "Menjaga lisan dari **lahn** dalam Kitab Allah, agar pembaca meraih kebahagiaan di dunia dan akhirat.", ar: "صون اللسان عن اللحن في كتاب الله ليفوز القارئ بالسعادة في الدنيا والآخرة." }],
      [{ id: "Sumber (istimdad)", ar: "الاستمداد" }, { id: "Dari cara baca Nabi ﷺ, para sahabat, tabi'in, dan pengikut mereka, hingga sampai kepada kita secara **mutawatir**.", ar: "من كيفية قراءة النبي ﷺ وأصحابه والتابعين ومن تبعهم إلى أن وصل إلينا بالتواتر." }],
      [{ id: "Masalah-masalahnya", ar: "المسائل" }, { id: "Kaidah-kaidah yang dipelajari: hukum nun sukun dan tanwin, nun dan mim bertasydid, mad, dan lainnya.", ar: "القواعد التي ندرسها كأحكام النون الساكنة والتنوين والنون والميم المشددتين والمدود وغيرها." }] ] },

    { t: "judul", id: "Rukun Ilmu Tajwid dan Perumusnya", ar: "أركان علم التجويد وواضعه" },
    { t: "langkah", judul: { id: "Tajwid bertumpu pada empat hal (Al-'Allamah Muhammad Makki)", ar: "يتوقف التجويد على أربعة أمور" }, item: [
      { id: "Mengetahui **makhraj huruf**.", ar: "معرفة مخارج الحروف." },
      { id: "Mengetahui **sifat huruf**.", ar: "معرفة صفات الحروف." },
      { id: "Mengetahui **hukum-hukum yang baru muncul** akibat penyusunan huruf.", ar: "معرفة ما يتجدد لها بسبب التركيب من الأحكام." },
      { id: "**Riyadhah lisan**: melatih lisan dan memperbanyak pengulangan.", ar: "رياضة اللسان وكثرة التكرار." } ] },
    { t: "banding", judul: { id: "Siapa perumus (wadhi') ilmu tajwid?", ar: "واضع علم التجويد" },
      kiri: { judul: { id: "Dari sisi praktik (amaliyyah)", ar: "من الناحية العملية" }, ikon: "pen", warna: "green", poin: [
        { id: "**Nabi ﷺ**: Al-Qur'an turun kepada beliau dalam keadaan terbaca dengan tajwid, beliau menerimanya demikian, lalu para sahabat menerimanya demikian hingga sampai secara mutawatir.", ar: "النبي ﷺ؛ لأنه نزل عليه القرآن مجوَّدًا وتلقاه مجوَّدًا وتلقاه الصحابة مجوَّدًا إلى أن وصل إلينا بالتواتر." } ] },
      kanan: { judul: { id: "Dari sisi teori ilmiah (penyusun kaidah)", ar: "من الناحية النظرية العلمية" }, ikon: "scroll", warna: "blue", poin: [
        { id: "Dikatakan: **Abul-Aswad ad-Du'ali**.", ar: "قيل: أبو الأسود الدؤلي." },
        { id: "Dikatakan: **Al-Khalil bin Ahmad al-Farahidi**, imam nahwu.", ar: "وقيل: الخليل بن أحمد الفراهيدي إمام النحو." },
        { id: "Dikatakan: **Abu 'Ubaid al-Qasim bin Sallam**.", ar: "وقيل: أبو عبيد القاسم بن سلام." } ] } },

    { t: "judul", id: "Dua Bagian Tajwid dan Hukumnya", ar: "أقسام علم التجويد وحكمه" },
    { t: "banding", judul: { id: "Tajwid amali dan tajwid ilmi", ar: "التجويد العملي والعلمي" },
      kiri: { judul: { id: "Tajwid amali (praktik)", ar: "التجويد العملي التطبيقي" }, ikon: "quran", warna: "green", poin: [
        { id: "Membaca Al-Qur'an dengan bacaan ber-tajwid **sebagaimana diturunkan kepada Nabi ﷺ**.", ar: "تلاوة القرآن تلاوة مجودة كما أنزلت على النبي ﷺ." },
        { id: "Hukum: **wajib 'ain** atas setiap orang yang hendak membaca Al-Qur'an.", ar: "واجب وجوبًا عينيًا على كل من يريد أن يقرأ القرآن." } ] },
      kanan: { judul: { id: "Tajwid ilmi (teori)", ar: "التجويد العلمي النظري" }, ikon: "book", warna: "blue", poin: [
        { id: "Mengetahui kaidah dan hukum-hukum ilmiahnya.", ar: "معرفة قواعده وأحكامه العلمية." },
        { id: "**Orang awam**: mempelajarinya **sunnah (mandub)**, tidak wajib.", ar: "عامة الناس: تعلمه بالنسبة لهم مندوب ليس واجبًا." },
        { id: "**Orang khusus** yang memimpin bacaan dan pengajaran: **wajib 'ain**, agar menjadi teladan bagi orang lain.", ar: "خاصة الناس الذين يتصدرون القراءة والإقراء: واجب وجوبًا عينيًا ليكونوا قدوة لغيرهم." } ] } },
    { t: "poin", judul: { id: "Dalil kewajiban tajwid amali", ar: "الدليل على وجوب التجويد العملي" }, item: [
      { ikon: "quran", judul: { id: "Dalil Al-Qur'an", ar: "من القرآن" }, id: "{وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا} (Al-Muzzammil: 4).", ar: "قوله تعالى: {وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا}." },
      { ikon: "scroll", judul: { id: "Dalil Sunnah", ar: "من السنة" }, id: "Ummu Salamah ditanya tentang cara bacaan dan shalat Rasulullah ﷺ. Beliau lalu **menggambarkan bacaan yang diterangkan huruf demi huruf**. Syaikh menyebutnya hadits hasan shahih.", ar: "لما سئلت أم سلمة عن كيفية قراءة الرسول ﷺ نعتت قراءة مفسرة حرفًا حرفًا، وهذا حديث حسن صحيح." },
      { ikon: "users", judul: { id: "Ijma'", ar: "الإجماع" }, id: "Umat Islam sepakat atas wajibnya membaca Al-Qur'an dengan tajwid sejak zaman Nabi ﷺ hingga sekarang tanpa perselisihan.", ar: "أجمعت الأمة على وجوب تلاوة القرآن بالتجويد من زمن النبي ﷺ إلى زماننا دون اختلاف." } ] },
    { t: "cek", q: { id: "Hukum mempelajari tajwid ilmi bagi orang awam adalah…", ar: "حكم تعلم التجويد العلمي بالنسبة لعامة الناس:" }, o: [{ id: "Wajib 'ain", ar: "واجب عيني" }, { id: "Mandub (sunnah)", ar: "مندوب" }, { id: "Haram", ar: "حرام" }, { id: "Makruh", ar: "مكروه" }], j: 1, b: { id: "Bagi awam mandub; wajib 'ain hanya bagi yang memimpin bacaan dan pengajaran.", ar: "مندوب لعامة الناس، وواجب عيني على من يتصدر للقراءة والإقراء." } },

    { t: "judul", id: "Tingkatan Bacaan (Maratib al-Qira'ah)", ar: "مراتب القراءة" },
    { t: "tabel", judul: { id: "Tiga tingkatan bacaan", ar: "المراتب الثلاث" }, kolom: [{ id: "Tingkat", ar: "المرتبة" }, { id: "Bahasa", ar: "لغة" }, { id: "Istilah", ar: "اصطلاحًا" }], baris: [
      [{ id: "1. Tahqiq", ar: "التحقيق" }, { id: "Berlebih dalam mendatangkan sesuatu sesuai hakikatnya tanpa tambah-kurang.", ar: "المبالغة في الإتيان بالشيء على حقيقته بلا زيادة أو نقص." }, { id: "Memberi huruf haknya: **mad dipanjangkan penuh**, hamzah ditegaskan, harakat disempurnakan, ghunnah dipenuhi, dan huruf dijelaskan satu per satu.", ar: "إعطاء الحروف حقها من إشباع المد وتحقيق الهمز وإتمام الحركات وتوفية الغنات وتفكيك الحروف أي بيانها." }],
      [{ id: "2. Hadr", ar: "الحدر" }, { id: "Mashdar *inhadara*; *yahdiru* bila bergegas.", ar: "مصدر انحدر يحدر إذا أسرع." }, { id: "Membaca **cepat dan ringkas** sambil tetap menjaga hukum: izhhar, idgham, qashr, mad, makhraj, dan sifat.", ar: "إدراج القراءة وسرعتها مع مراعاة أحكام التجويد من إظهار وإدغام وقصر ومد ومخارج وصفات." }],
      [{ id: "3. Tadwir", ar: "التدوير" }, { id: "—", ar: "—" }, { id: "**Pertengahan** antara hadr dan tahqiq.", ar: "التوسط بين مرتبتي الحدر والتحقيق." }] ] },
    { t: "definisi", judul: { id: "Tartil (tingkat keempat menurut sebagian ulama)", ar: "الترتيل" },
      lughah: { id: "**At-tahsin**: *rattil al-kalam* = perindah susunannya. Allah tidak cukup dengan perintah {وَرَتِّلِ}, tetapi menambahkan mashdar {تَرْتِيلًا} untuk menegaskan besarnya perkara dan pahalanya.", ar: "التحسين، كقولنا: رتل الكلام أي أحسن تأليفه. ولم يكتف الله بالأمر {وَرَتِّلِ} بل أتى بالمصدر {تَرْتِيلًا} لعظم الأمر وعظم الأجر وللتأكيد على أهميته." },
      istilah: { id: "Membaca dengan **tenang, tidak tergesa, dan penuh ketenangan hati**, memberi tiap huruf haknya dari makhraj, sifat, dan mad. Sebagian ulama: tartil **mencakup ketiga tingkat** di atas.", ar: "قراءة القرآن بتمهل وتؤدة واطمئنان، وإعطاء كل حرف حقه من المخارج والصفات والمدود، وقيل يشمل المراتب الثلاث السابقة." } },

    { t: "judul", id: "Lahn (Kesalahan dalam Bacaan)", ar: "اللحن" },
    { t: "definisi", judul: { id: "Al-lahn", ar: "اللحن" },
      lughah: { id: "**Miring dari yang benar**.", ar: "الميل عن الصواب." },
      istilah: { id: "Kesalahan yang menimpa kata, kadang **merusak makna**, kadang **melanggar kaidah bacaan dan tajwid**.", ar: "خطأ يطرأ على الكلمة فيُخل بالمعنى تارة ويُخل بقواعد القراءة والتجويد تارة أخرى." } },
    { t: "banding", judul: { id: "Lahn jali dan lahn khafi", ar: "اللحن الجلي والخفي" },
      kiri: { judul: { id: "Lahn jali (nyata)", ar: "اللحن الجلي" }, ikon: "eye", warna: "red", poin: [
        { id: "Kesalahan pada lafaz yang **merusak bangun kata**, baik mengubah makna maupun tidak.", ar: "خطأ يطرأ على اللفظ فيخل بمبنى الكلمة سواء أخل بالمعنى أم لا." },
        { id: "Dinamai *jali* karena **tampak jelas dan diketahui orang awam**.", ar: "سمي جليًا لأنه ينجلي أي يظهر ويعرفه عامة الناس." },
        { id: "Hukum: **haram menurut ijma' ulama** bila disengaja atau diremehkan.", ar: "حرام بإجماع العلماء إن تعمده القارئ أو تساهل فيه." } ] },
      kanan: { judul: { id: "Lahn khafi (tersembunyi)", ar: "اللحن الخفي" }, ikon: "ear", warna: "amber", poin: [
        { id: "Kesalahan yang merusak **kebiasaan baku bacaan** namun tidak merusak makna; tidak berkaitan dengan kesalahan nyata pada huruf dan harakat.", ar: "خطأ يخل بعرف القراءة ولا يخل بالمعنى، لا تعلق له بالخطأ البين في الحروف والشكل." },
        { id: "Hanya diketahui **ahli**: meninggalkan ikhfa', iqlab, izhhar, ghunnah, tarqiq atau tafkhim ra'.", ar: "لا يعرفه إلا المتخصصون: كترك الإخفاء والقلب والإظهار والغنة وترقيق الراء وتفخيمها." },
        { id: "Hukum: **diperselisihkan antara haram dan makruh**.", ar: "فيه خلاف بين العلماء ما بين التحريم والكراهة." } ] } },
    { t: "tabel", judul: { id: "Contoh lahn jali dari Syaikh", ar: "أمثلة اللحن الجلي" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Contoh dan penjelasan", ar: "المثال" }], baris: [
      [{ id: "Mengubah sukun menjadi tasydid", ar: "تبديل السكون بالتشديد" }, { id: "Waqaf pada {نَسْتَعِينُ}: nun harus sukun, sebagian orang membacanya *nasta'in-n* bertasydid. Ini salah.", ar: "الوقف على «نَسْتَعِينُ» بالتشديد «نستعينّ» خطأ." }],
      [{ id: "Mengurangi harakat/tasydid", ar: "نقصان الحركة" }, { id: "Waqaf pada {الْيَمِّ}: mim bertasydid perlu ghunnah dua harakat; sebagian membacanya sukun tanpa tasydid.", ar: "الوقف على «الْيَمِّ» بلا تشديد نقص." }],
      [{ id: "Mengubah sukun menjadi harakat", ar: "جعل السكون حركة" }, { id: "{أَنْعَمْتَ}: nun sukun dibaca fathah.", ar: "«أَنْعَمْتَ» يحرك النون بالفتح." }],
      [{ id: "Menambah huruf", ar: "زيادة حرف" }, { id: "{الْكَوْثَرَ} dibaca *al-kautsaar* (menambah alif sebelum ra').", ar: "«الْكَوْثَرَ» يقرؤها «الكوثَار»." }],
      [{ id: "Mengurangi huruf", ar: "نقصان حرف" }, { id: "{مِمَّا كَانَا فِيهِ} dibaca *kaana fihi* (alif tatsniyah dibuang).", ar: "«مِمَّا كَانَا فِيهِ» يقرؤها «كان فيه»." }],
      [{ id: "Mengganti huruf", ar: "إبدال حرف بحرف" }, { id: "{الْحَمْدُ لِلَّهِ} dibaca *al-hamdu* dengan ha' (ه) sebagai ganti ha' (ح); lebih tampak pada bacaan orang non-Arab.", ar: "«الْحَمْدُ» فيبدل الحاء هاء، ويظهر في قراءة الأعاجم." }] ] },
    { t: "cek", q: { id: "Meninggalkan ikhfa' dan salah dalam tarqiq/tafkhim ra' termasuk…", ar: "ترك الإخفاء وترقيق الراء وتفخيمها من:" }, o: [{ id: "Lahn jali", ar: "اللحن الجلي" }, { id: "Lahn khafi", ar: "اللحن الخفي" }, { id: "Bacaan hadr", ar: "الحدر" }, { id: "Tadwir", ar: "التدوير" }], j: 1, b: { id: "Itu lahn khafi, yang hanya diketahui ahli dan hukumnya diperselisihkan.", ar: "هو اللحن الخفي، لا يعرفه إلا المتخصصون." } },

    { t: "judul", id: "Bab Isti'adzah", ar: "باب الاستعاذة" },
    { t: "definisi", judul: { id: "Al-isti'adzah", ar: "الاستعاذة" },
      lughah: { id: "**Berlindung, berpegang teguh, dan membentengi diri.**", ar: "الالتجاء والاعتصام والتحصن." },
      istilah: { id: "Berlindung kepada Allah Ta'ala, berpegang pada keagungan-Nya, dan membentengi diri dengan-Nya dari **setan yang terkutuk**.", ar: "اللجوء إلى الله تعالى والاعتصام بجنابه والتحصن به من الشيطان الرجيم." } },
    { t: "ayat", ar: "فَإِذَا قَرَأْتَ الْقُرْآنَ فَاسْتَعِذْ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ", id: "Apabila engkau membaca Al-Qur'an, maka berlindunglah kepada Allah dari setan yang terkutuk.", src: "QS. An-Nahl: 98" },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kapan isti'adzah dibaca?", ar: "وقت الاستعاذة" }, id: "Orang yang hendak mulai membaca memulai dengan isti'adzah, di dalam shalat maupun di luarnya. Sebagian orang berpegang pada lahiriah ayat sehingga berpendapat isti'adzah **sesudah** membaca; kesimpulannya: **waktunya sebelum membaca**, berdasarkan riwayat generasi khalaf dari salaf.", ar: "إذا أراد المسلم أن يشرع في القراءة بدأ بالاستعاذة في الصلاة وغيرها. وتمسك قوم بظاهر النص فذهبوا إلى أنها بعد القراءة، والخلاصة أن وقتها قبل القراءة بنقل الخلف عن السلف." },
    { t: "daftar", judul: { id: "Ayat lain yang memuat perintah isti'adzah secara tegas", ar: "مواضع الاستعاذة الصريحة" }, item: [
      { id: "{وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ إِنَّهُ سَمِيعٌ عَلِيمٌ} (Al-A'raf).", ar: "في سورة الأعراف." },
      { id: "{وَقُلْ رَبِّ أَعُوذُ بِكَ مِنْ هَمَزَاتِ الشَّيَاطِينِ * وَأَعُوذُ بِكَ رَبِّ أَنْ يَحْضُرُونِ} (Al-Mu'minun).", ar: "في سورة المؤمنون." },
      { id: "{وَإِمَّا يَنْزَغَنَّكَ مِنَ الشَّيْطَانِ نَزْغٌ فَاسْتَعِذْ بِاللَّهِ إِنَّهُ هُوَ السَّمِيعُ الْعَلِيمُ} (Fushshilat). Syaikh menyebut kata *a'udzu* terulang tujuh belas kali dalam Al-Qur'an.", ar: "في سورة فصلت. وذكر أن مادة «أعوذ» وردت في القرآن سبع عشرة مرة." } ] },
    { t: "peta", ikon: "shield", pusat: { id: "Hukum isti'adzah", ar: "حكم الاستعاذة" }, cabang: [
      { id: "Disepakati: **disyariatkan**", ar: "اتفقوا على مشروعيتها", sub: [{ id: "Perselisihan: apakah perintah dalam ayat bermakna wajib atau sunnah?", ar: "هل الأمر للوجوب أم للندب؟" }] },
      { id: "**Jumhur**: mustahabbah (sunnah), tidak berdosa yang meninggalkan — **pendapat rajih**", ar: "الجمهور: مستحبة ولا يأثم تاركها وهو الراجح" },
      { id: "**'Atha' bin Abi Rabah** (dikisahkan ar-Razi): wajib di dalam shalat dan di luarnya; yang meninggalkan berdosa", ar: "عطاء بن أبي رباح: واجبة في الصلاة وخارجها" },
      { id: "Pendapat lain: mandub (berpahala yang mengerjakan); dan pendapat wajib dengan hukuman — **dilemahkan**", ar: "قيل مندوبة، وقيل واجبة يعاقب فاعلها وضعف هذا الرأي" },
      { id: "**Ibnu Sirin**: cukup sekali seumur hidup untuk menggugurkan kewajibannya", ar: "ابن سيرين: لو تعوّذ مرة واحدة في عمره لكفى" } ] },
    { t: "poin", judul: { id: "Redaksi isti'adzah", ar: "صيغ الاستعاذة" }, item: [
      { ikon: "star8", judul: { id: "Yang dipilih jumhur", ar: "المختار عند الجمهور" }, id: "{أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ}; boleh ditambah.", ar: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ، وإن زاد عليه فهو جائز." },
      { ikon: "scroll", judul: { id: "Redaksi hadits Abu Sa'id", ar: "حديث أبي سعيد" }, id: "Nabi ﷺ ketika berdiri shalat membuka lalu berkata: *A'udzu billahis-sami'il-'alim minasy-syaithanir-rajim min hamzihi wa nafkhihi wa nafsihi*. (HR. Abu Dawud dan At-Tirmidzi; dishahihkan Al-Albani)", ar: "أعوذ بالله السميع العليم من الشيطان الرجيم من همزه ونفخه ونفثه." },
      { ikon: "layers", judul: { id: "Redaksi lain yang disebut", ar: "صيغ أخرى" }, id: "*A'udzu billahis-sami'il-'alim minasy-syaithanir-rajim*; *A'udzu billahi minasy-syaithanir-rajim min hamzihi wa nafkhihi wa nafsihi*; *A'udzu billahi minasy-syaithanir-rajim innallaha huwas-sami'ul-'alim*.", ar: "أعوذ بالله السميع العليم من الشيطان الرجيم؛ أعوذ بالله من الشيطان الرجيم من همزه ونفخه ونفثه؛ أعوذ بالله من الشيطان الرجيم إن الله هو السميع العليم." },
      { ikon: "pen", judul: { id: "Redaksi dengan perubahan", ar: "صيغة التغيير" }, id: "*Allahumma inni a'udzu bika minasy-syaithanir-rajim* — diriwayatkan Ahmad, Ibnu Majah, Abu Dawud, Al-Hakim dan lainnya dengan sanad shahih.", ar: "اللهم إني أعوذ بك من الشيطان الرجيم." } ] },
    { t: "poin", judul: { id: "Jahr (nyaring) dan israr (pelan) pada isti'adzah", ar: "الجهر والإسرار بالاستعاذة" }, item: [
      { ikon: "bolt", judul: { id: "Dijaharkan bila…", ar: "مواضع الجهر" }, id: "(1) Membaca dalam jamaah dan **dialah yang memulai**; (2) dalam **majelis pengajaran**; (3) membuka bacaan di acara dan **pertemuan umum**.", ar: "إذا قرأ في جماعة وكان هو المبتدئ، وفي مقام التعليم، وعند افتتاح القراءة في المناسبات والمحافل العامة." },
      { ikon: "moon", judul: { id: "Dipelankan bila…", ar: "مواضع الإسرار" }, id: "(1) Membaca **lirih**; (2) membaca nyaring tetapi **sendirian**; (3) membaca **dalam shalat** secara mutlak; (4) membaca di tengah jamaah dan **bukan** pemulainya.", ar: "إذا قرأ سرًا، أو جهرًا وكان منفردًا، أو في الصلاة مطلقًا، أو وسط جماعة ولم يكن المبتدئ." } ] },
    { t: "catatan", gaya: "hikmah", judul: { id: "Hikmah menjaharkan isti'adzah", ar: "الحكمة من الجهر" }, id: "Agar pendengar **terjaga sejak awal bacaan** sehingga tak ada yang terlewat, karena isti'adzah adalah **syiar dan tanda dimulainya bacaan**. Ad-Dani dalam *At-Taisir*: tidak diketahui perselisihan di antara ahli ada' tentang menjaharkannya saat memulai Al-Qur'an dan awal hizb, karena mengikuti nash dan meneladani sunnah.", ar: "ليحصل الانتباه للسامع فلا يفوته شيء، لأن التعوذ شعار القراءة وعلامتها. وقال الداني في التيسير: لا أعلم خلافًا بين أهل الأداء في الجهر بها عند افتتاح القرآن وعند الابتداء برؤوس الأحزاب اتباعًا للنص واقتداءً بالسنة." },
    { t: "tanya", q: { id: "Jika pembaca berhenti lalu hendak melanjutkan, apakah ia mengulang isti'adzah?", ar: "لو قطع القارئ القراءة وأراد أن يكمل فماذا يفعل؟" }, a: { id: "Bergantung penyebabnya. Bila **udzur yang terpaksa** (batuk, bersin, atau menafsirkan apa yang dibaca), **tidak mengulang**. Bila **pilihan sendiri** seperti sibuk dengan hal lain atau berbicara, **ia mengulang** isti'adzah.", ar: "إذا عرض عارض اضطراري كسعال أو عطاس أو تفسير لما يقرأ لم يعد الاستعاذة، أما إذا كان العارض اختياريًا كالتشاغل عن القراءة أو الكلام فيعيد الاستعاذة." } },
    { t: "cek", q: { id: "Pendapat yang dinilai rajih tentang hukum isti'adzah menurut jumhur adalah…", ar: "الراجح في حكم الاستعاذة عند الجمهور:" }, o: [{ id: "Wajib dan berdosa yang meninggalkan", ar: "واجبة يأثم تاركها" }, { id: "Mustahabbah, tidak berdosa yang meninggalkan", ar: "مستحبة لا يأثم تاركها" }, { id: "Haram", ar: "حرام" }, { id: "Cukup sekali seumur hidup", ar: "تكفي مرة في العمر" }], j: 1, b: { id: "Jumhur: mustahabbah dan tak berdosa yang meninggalkannya, dan ini yang rajih.", ar: "ذهب الجمهور إلى أنها مستحبة ولا يأثم تاركها وهو الراجح." } },

    { t: "judul", id: "Bab Basmalah", ar: "باب البسملة" },
    { t: "definisi", judul: { id: "Al-basmalah", ar: "البسملة" },
      lughah: { id: "Mashdar dari *basmala*, yaitu mengucapkan {بِسْمِ اللَّهِ}. Seperti *hasbalah* (*hasbiyallahu wa ni'mal-wakil*) dan *hauqalah* (*la haula wa la quwwata illa billah*).", ar: "مصدر بسمل أي قال: بِسْمِ اللَّهِ، كالحسبلة (حسبي الله ونعم الوكيل) والحوقلة (لا حول ولا قوة إلا بالله)." },
      istilah: { id: "Redaksinya **satu**: {بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ}. Tempatnya sebelum memulai bacaan. Dalam riwayat Hafsh, basmalah dibaca di antara dua surah, **kecuali antara Al-Anfal dan At-Taubah**.", ar: "صيغتها واحدة: بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ. ومحلها قبل الشروع في القراءة، ولنا في رواية حفص البسملة بين كل سورتين ويستثنى ما بين الأنفال والتوبة." } },
    { t: "ayat", ar: "إِنَّهُ مِنْ سُلَيْمَانَ وَإِنَّهُ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ", id: "Sesungguhnya surat itu dari Sulaiman, dan sesungguhnya isinya: dengan nama Allah Yang Maha Pengasih lagi Maha Penyayang.", src: "QS. An-Naml: 30 — ulama sepakat basmalah adalah bagian ayat di sini" },
    { t: "peta", ikon: "mushaf", pusat: { id: "Basmalah di awal surah: empat pendapat", ar: "البسملة أول السور: أربعة أقوال" }, cabang: [
      { id: "Ayat dari **setiap surah selain At-Taubah** — maka wajib dibaca di antara surah", ar: "آية من كل السور سوى التوبة، ولذا وجب الإتيان بها" },
      { id: "**Ayat tersendiri** diturunkan untuk tabarruk dan pemisah antar surah — maka mustahab", ar: "آية مستقلة للتبرك والفصل بين السور فهي مستحبة" },
      { id: "Ayat dari **awal Al-Fatihah saja**", ar: "آية من أول سورة الفاتحة دون غيرها" },
      { id: "**Bukan ayat** dari surah mana pun", ar: "ليست آية من أي سورة" } ] },
    { t: "atsar", ar: "كَانُوا فِي عَهْدِ النَّبِيِّ ﷺ لَا يَعْرِفُونَ انْقِضَاءَ السُّورَةِ حَتَّى تَنْزِلَ {بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ} فَإِذَا نَزَلَتْ عَلِمُوا أَنْ قَدِ انْقَضَتِ السُّورَةُ وَنَزَلَتْ أُخْرَى", id: "Pada zaman Nabi ﷺ mereka tidak mengetahui berakhirnya suatu surah hingga turun basmalah; bila turun, mereka tahu surah itu telah selesai dan surah lain turun.", src: "Dari Sa'id bin Jubair" },
    { t: "catatan", gaya: "faidah", judul: { id: "Sebab perbedaan: tujuh huruf", ar: "سبب الاختلاف" }, id: "Untuk mempertemukan perbedaan antara yang membaca basmalah dan yang tidak: Al-Qur'an diturunkan atas **tujuh huruf**; pada sebagiannya basmalah turun, pada yang lain tidak. Masing-masing membaca sesuai jalur mutawatirnya, sehingga selesai problem menetapkan atau menafikannya. Hamzah az-Zayyat (salah satu dari sepuluh qari) menyambung dua surah **tanpa basmalah**, sebab baginya Al-Qur'an bagaikan satu surah; ia berkata ia melakukannya agar pembaca tahu i'rab akhir surah-surah. Para qari tidak berselisih dalam **meninggalkan basmalah di awal Bara'ah**.", ar: "لتحقيق الاختلاف: أن القرآن أنزل على سبعة أحرف فنزل في بعضها البسملة ولم ينزل في الآخر، فكلٌ يقرأ على حسب التواتر. وحمزة الزيات يصل بين السورتين من غير بسملة لأن القرآن كله عنده كسورة واحدة، ولا خلاف بين القراء في ترك التسمية أول براءة." },
    { t: "kutipan", ar: "وَمَهْمَا تَصِلْهَا أَوْ بَدَأْتَ بَرَاءَةً ... لِتَنْزِيلِهَا بِالسَّيْفِ لَسْتَ مُبَسْمِلاَ", id: "Bila engkau menyambungkannya atau memulai Bara'ah, engkau tidak membaca basmalah, karena surah itu turun dengan pedang (perintah memerangi dan memutus perjanjian).", oleh: "Imam Asy-Syathibi" },
    { t: "catatan", gaya: "info", judul: { id: "Dalil pembacaan basmalah di awal surah", ar: "دليل البسملة أول السور" }, id: "Hadits: Jibril turun pada tiap surah dengan membuka basmalah. Dan dari Anas, Nabi ﷺ bersabda: *\"Baru saja diturunkan kepadaku suatu surah\"*, lalu beliau membaca {بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ} sampai selesai. Para qari **sepakat** membaca basmalah di awal surah, termasuk Al-Fatihah.", ar: "في الحديث: إن جبريل نزل في كل سورة مفتتحًا بالتسمية. وروى أنس أنه ﷺ قرأ: {بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * إِنَّا أَعْطَيْنَاكَ الْكَوْثَرَ} حتى ختمها. واتفق القراء على البسملة في ابتداء السور." },

    { t: "tabel", kolom: [{ id: "Wajah", ar: "الوجه" }, { id: "Isti'adzah — basmalah — awal surah", ar: "الاستعاذة والبسملة وأول السورة" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1. Sambung semuanya (washl al-jami')", ar: "وصل الجميع" }, { id: "Ketiganya disambung tanpa henti.", ar: "وصل الاستعاذة مع البسملة مع أول السورة" }, { id: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم", ar: "أعوذ ... بسم الله ... الم" }],
      [{ id: "2. Putus semuanya (qath' al-jami')", ar: "قطع الجميع" }, { id: "Berhenti setelah tiap bagian.", ar: "قطع الاستعاذة عن البسملة عن أول السورة" }, { id: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ * بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * الم", ar: "أعوذ ... * بسم الله ... * الم" }],
      [{ id: "3. Putus yang pertama, sambung kedua dengan ketiga", ar: "قطع الأول ووصل الثاني بالثالث" }, { id: "Berhenti setelah isti'adzah; basmalah bersambung dengan awal surah.", ar: "قطع الأول ووصل الثاني بالثالث" }, { id: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ * بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ الم", ar: "أعوذ ... * بسم الله ... الم" }],
      [{ id: "4. Sambung pertama dengan kedua, putus ketiga", ar: "وصل الأول بالثاني وقطع الثالث" }, { id: "Isti'adzah bersambung basmalah; berhenti di akhir basmalah.", ar: "وصل الأول بالثاني وقطع الثالث" }, { id: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * الم", ar: "أعوذ ... بسم الله ... * الم" }] ] },
    { t: "contoh", judul: { id: "Antara dua surah berurutan: tiga wajah", ar: "الأوجه بين السورتين" }, ayat: { ar: "وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ * بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ * قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ", src: "Akhir Al-Ikhlash menuju Al-Falaq", id: "Dan tidak ada sesuatu pun yang setara dengan-Nya. — Dengan nama Allah… — Katakanlah: Aku berlindung kepada Tuhan yang menguasai subuh." },
      id: "Tiga wajah disusun menurut urutan mushaf. Yang **tidak boleh**: menyambung akhir surah pertama dengan basmalah lalu **berhenti di basmalah**, agar basmalah tidak tampak seolah ayat dari surah pertama.",
      ar: "ثلاثة أوجه مرتبة بترتيب المصحف، ويمتنع وصل آخر السورة الأولى بالبسملة مع الوقف عليها كي لا تظهر وكأنها آية من الأولى.",
      sorot: [
        { label: { id: "1. Putus semuanya", ar: "قطع الجميع" }, warna: "green", id: "Berhenti di akhir surah, berhenti di basmalah, lalu mulai surah berikutnya.", ar: "قطع آخر السورة عن البسملة عن أول الثانية." },
        { label: { id: "2. Putus pertama, sambung 2 dan 3", ar: "قطع الأول ووصل الثاني بالثالث" }, warna: "blue", id: "Berhenti di akhir surah; basmalah disambung dengan awal surah berikutnya.", ar: "قطع الأول ووصل الثاني بالثالث." },
        { label: { id: "3. Sambung semuanya", ar: "وصل الجميع" }, warna: "gold", id: "Akhir surah, basmalah, dan awal surah berikutnya disambung.", ar: "وصل الجميع." },
        { label: { id: "Dilarang", ar: "ممنوع" }, warna: "red", id: "Menyambung akhir surah dengan basmalah lalu waqaf di basmalah.", ar: "وصل آخر السورة بالبسملة مع الوقف عليها." } ] },
    { t: "contoh", judul: { id: "Antara Al-Anfal dan At-Taubah: tiga wajah tanpa basmalah", ar: "بين الأنفال والتوبة" }, ayat: { ar: "إِنَّ اللَّهَ بِكُلِّ شَيْءٍ عَلِيمٌ * بَرَاءَةٌ مِنَ اللَّهِ وَرَسُولِهِ إِلَى الَّذِينَ عَاهَدْتُمْ مِنَ الْمُشْرِكِينَ", src: "Akhir Al-Anfal menuju awal At-Taubah", id: "Sungguh Allah Maha Mengetahui segala sesuatu. — (Inilah pernyataan) pemutusan hubungan dari Allah dan Rasul-Nya kepada orang-orang musyrik yang kamu telah mengadakan perjanjian." },
      id: "Wajah-wajah ini juga berlaku antara surah mana pun dengan At-Taubah **dengan syarat surah itu berada sebelumnya dalam urutan mushaf**; bila berada sesudahnya dalam urutan, hanya **qath'** yang tertentu.",
      ar: "وهذه الأوجه جائزة بين أي سورة والتوبة بشرط أن تكون قبلها في الترتيب، فإن كانت بعدها تعين القطع فقط.",
      sorot: [
        { label: { id: "Waqaf", ar: "الوقف" }, warna: "green", id: "Berhenti dengan nafas di akhir Al-Anfal, lalu mulai At-Taubah.", ar: "الوقف على آخر الأنفال ثم الابتداء." },
        { label: { id: "Saktah", ar: "السكت" }, warna: "amber", id: "Diam sejenak tanpa mengambil nafas.", ar: "السكت دون تنفس." },
        { label: { id: "Washl", ar: "الوصل" }, warna: "blue", id: "Menyambung: {عَلِيمٌ بَرَاءَةٌ}.", ar: "وصل: عليمٌ براءةٌ." } ] },
    { t: "banding", judul: { id: "Memulai bacaan dari awal At-Taubah (Bara'ah)", ar: "الافتتاح بسورة براءة" },
      kiri: { judul: { id: "Dua wajah yang dibolehkan", ar: "الوجهان" }, ikon: "check", warna: "green", poin: [
        { id: "**Qath'**: {أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ * بَرَاءَةٌ مِنَ اللَّهِ وَرَسُولِهِ…}.", ar: "القطع." },
        { id: "**Washl**: {أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ بَرَاءَةٌ مِنَ اللَّهِ وَرَسُولِهِ…}.", ar: "الوصل." } ] },
      kanan: { judul: { id: "Yang tidak ada", ar: "المنتفي" }, ikon: "flag", warna: "red", poin: [
        { id: "**Tanpa basmalah** di awal Bara'ah, dibaca atau disambung setelah Al-Anfal.", ar: "لا بسملة في أول براءة سواء ابتدأ بها أو قرأها بعد الأنفال." } ] } },

    { t: "judul", id: "Basmalah di Tengah Surah dan Kasus Khusus", ar: "البسملة وسط السور وأحوال خاصة" },
    { t: "akordion", judul: { id: "Ringkasan wajah menurut keadaan", ar: "الأوجه حسب الأحوال" }, item: [
      { judul: { id: "Di tengah surah", ar: "وسط السورة" }, id: "Pembaca **bebas memilih** membaca basmalah atau tidak. Bila membaca basmalah, ada **empat wajah** sebagaimana di awal surah (selain At-Taubah). Bila tanpa basmalah, hanya dua wajah: **memutus isti'adzah** dari ayat atau **menyambungnya** dengan ayat. Dalam At-Taubah, jumhur mengikuti wajah yang sama, sedangkan **Al-Ja'bari melarangnya** (tidak ada nash yang membolehkan, dan basmalah pun tak disebut di awal surah itu).", ar: "القارئ مخير بين البسملة وتركها؛ فإن أتى بها فله أربعة أوجه كبداية السورة، وإن لم يأت بها فله قطع الاستعاذة عن الآية أو وصلها. وفي التوبة مذهب الجمهور نفس الأوجه، ومنع الجعبري." },
      { judul: { id: "Awal ayat dengan nama Allah atau Nabi ﷺ", ar: "الآية تبدأ باسم الله أو النبي ﷺ" }, id: "Bila ayat dimulai dengan nama Allah, dhamir yang kembali kepada-Nya, nama atau sifat Nabi ﷺ, **memutus isti'adzah dari ayat lebih utama** daripada menyambungnya, karena menyambung terasa **buruk**. Tidak patut dikatakan: {أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ اللَّهُ وَلِيُّ الَّذِينَ آمَنُوا} dengan menyambung, atau {… الرَّجِيمِ مُحَمَّدٌ رَسُولُ اللَّهِ}. Bila disambung dengan isti'adzah, basmalah menjadi **wajib** sebagai pemisah.", ar: "عند البدء بآية تبدأ باسم من أسماء الله أو ضمير يعود عليه أو اسم النبي ﷺ أو صفته يكون قطع الاستعاذة أولى من وصلها لما في الوصل من البشاعة، وإذا وصل بالاستعاذة فإن البسملة واجبة للفصل." },
      { judul: { id: "Awal ayat berupa nama setan", ar: "الآية تبدأ بذكر الشيطان" }, id: "Basmalah dapat **wajib dihindari** karena buruk menyebutnya sebelum nama setan, contoh {الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ وَيَأْمُرُكُمْ بِالْفَحْشَاءِ}. Empat wajah: qath' semuanya; sambung isti'adzah-basmalah lalu putus; sambung isti'adzah dengan ayat; putus isti'adzah dari ayat.", ar: "قد تكون البسملة واجبة الامتناع لبشاعة ذكرها مثل: {الشَّيْطَانُ يَعِدُكُمُ الْفَقْرَ…}، وهنا أربعة أوجه: قطع الجميع، ووصل الأول بالثاني وقطع الثالث، ووصل الاستعاذة بالآية، وقطع الاستعاذة عن الآية." },
      { judul: { id: "Mengulang surah yang sama dan berpindah bagian", ar: "تكرار السورة والانتقال من جزء إلى جزء" }, id: "Pada pengulangan surah yang sama basmalah **dibaca**, diperlakukan seperti menyambung dua surah yang tak berurutan: qath' semuanya atau qath' pertama-washl dua dan tiga. Dua wajah ini juga boleh bila surah yang disambung mendahului dalam mushaf (misal Al-Falaq dan Al-Ikhlas), kecuali **An-Nas dan Al-Fatihah**, yang padanya ada tiga wajah. Berpindah dari bagian satu surah ke bagian surah lain juga **mengharuskan basmalah**.", ar: "الأوجه عند تكرار نفس السورة يتعين لها البسملة وتعامل معاملة الوصل بين سورتين غير مرتبتين؛ وكذا عند الانتقال من جزء سورة إلى جزء سورة أخرى." } ] },
    { t: "contoh", judul: { id: "Awal Ali 'Imran: Alif Lam Mim", ar: "أول آل عمران" }, ayat: { ar: "الم * اللَّهُ لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ", src: "Ali 'Imran: 1–2", id: "Alif Lam Mim. Allah, tidak ada tuhan selain Dia, Yang Maha Hidup, Yang terus-menerus mengurus makhluk-Nya." },
      id: "Bila waqaf pada {الم}: mim disukunkan, lam dan mim masing-masing dipanjangkan **enam harakat**, dan Syaikh menyebut pula ada ghunnah dua harakat di antara lam dan mim. Bila **washl**, ada dua wajah.",
      ar: "إذا وقفنا على «آلم» نقف بسكون الميم مع مد اللام ست حركات والميم ست حركات، وبين اللام والميم غنة حركتين. أما حال الوصل فلنا وجهان.",
      sorot: [
        { label: { id: "Wajah 1", ar: "الوجه الأول" }, warna: "green", id: "Mim dibaca **enam harakat** dengan fathah mim untuk menghindari bertemunya dua sukun; sebab aslinya mim itu sukun (mad lazim).", ar: "مد الميم ست حركات مع فتح الميم للتخلص من التقاء الساكنين." },
        { label: { id: "Wajah 2", ar: "الوجه الثاني" }, warna: "blue", id: "Mim dipendekkan **dua harakat** dengan fathah, karena mim kini tidak sukun lagi sehingga sebab mad lazim hilang.", ar: "قصر الميم حركتين مع فتح الميم لأنها أصبحت غير ساكنة وانتفى سبب المد اللازم." } ] },

    { t: "balik", judul: { id: "Kartu hafalan: istilah kunci", ar: "بطاقات المراجعة" }, item: [
      { depan: { id: "Tahqiq / Hadr / Tadwir?", ar: "التحقيق والحدر والتدوير" }, belakang: { id: "Pelan penuh hak huruf / cepat ringkas tetap berhukum / pertengahan keduanya.", ar: "بطيء مع إشباع / سريع مع مراعاة الأحكام / وسط بينهما" } },
      { depan: { id: "Hukum tajwid amali?", ar: "حكم التجويد العملي" }, belakang: { id: "Wajib 'ain atas setiap yang membaca Al-Qur'an.", ar: "واجب عيني" } },
      { depan: { id: "Lahn jali vs khafi?", ar: "الجلي والخفي" }, belakang: { id: "Jali: merusak bangun kata, haram ijma'. Khafi: merusak adat bacaan, khilaf haram-makruh.", ar: "الجلي حرام بالإجماع، والخفي فيه خلاف" } },
      { depan: { id: "Wajah awal surah (selain At-Taubah)?", ar: "الأوجه عند ابتداء السورة" }, belakang: { id: "Empat: sambung semua; putus semua; putus-1 sambung 2-3; sambung 1-2 putus-3.", ar: "أربعة" } },
      { depan: { id: "Wajah antara Al-Anfal dan At-Taubah?", ar: "بين الأنفال والتوبة" }, belakang: { id: "Waqaf, saktah, washl — tanpa basmalah.", ar: "الوقف والسكت والوصل" } } ] },

    { t: "ringkasan", item: [
      { id: "Tajwid: *at-tahsin wal-itqan*; istilahnya memberi huruf **hak dan mustahaknya**.", ar: "التجويد: التحسين والإتقان، واصطلاحًا إعطاء الحروف حقها ومستحقها." },
      { id: "Tajwid bertumpu pada empat hal: makhraj, sifat, hukum yang muncul karena susunan, dan riyadhah lisan.", ar: "يتوقف على: المخارج والصفات وأحكام التركيب ورياضة اللسان." },
      { id: "Tajwid amali **wajib 'ain**; tajwid ilmi mandub bagi awam, wajib 'ain bagi yang memimpin bacaan dan pengajaran.", ar: "العملي واجب عيني، والعلمي مندوب للعامة وواجب على المتصدرين." },
      { id: "Tingkatan bacaan: tahqiq, hadr, tadwir; sebagian menambah tartil, sebagian memasukkannya ke dalam ketiganya.", ar: "المراتب: التحقيق والحدر والتدوير، ويضاف الترتيل أو يشملها." },
      { id: "Lahn jali haram secara ijma' bila disengaja atau diremehkan; lahn khafi diperselisihkan antara haram dan makruh.", ar: "الجلي حرام بإجماع، والخفي مختلف فيه." },
      { id: "Isti'adzah disyariatkan; hukum rajih menurut jumhur mustahabbah; dijaharkan di jamaah/pengajaran/acara umum bagi pemulai, dipelankan dalam shalat atau sendirian.", ar: "الاستعاذة مشروعة، والراجح استحبابها، تجهر في مواضع وتسر في أخرى." },
      { id: "Basmalah: dibaca di awal tiap surah selain At-Taubah; empat wajah di awal surah, tiga antar surah, tiga tanpa basmalah antara Al-Anfal dan At-Taubah, dua di awal At-Taubah.", ar: "البسملة: أربعة أوجه أول السورة، وثلاثة بين السورتين، وثلاثة بين الأنفال والتوبة، ووجهان في أول التوبة." } ] }
  ],
  istilah: [
    { ar: "التجويد", latin: "at-tajwid", id: "memperindah dan memantapkan", def: { id: "Ilmu yang membahas kata Al-Qur'an dari sisi memberi huruf hak dan mustahaknya.", ar: "علم يبحث في الكلمات القرآنية من حيث إعطاء الحروف حقها ومستحقها." } },
    { ar: "حق الحرف", latin: "haqqul-harf", id: "hak huruf", def: { id: "Makhraj yang ditentukan dan sifat-sifat lazim yang tak terpisah dari huruf.", ar: "المخرج المحدد والصفات اللازمة التي لا تنفك عن الحرف." } },
    { ar: "مستحق الحرف", latin: "mustahaqqul-harf", id: "mustahak huruf", def: { id: "Hukum-hukum yang timbul dari sifat huruf, seperti tafkhim, tarqiq, izhhar, idgham.", ar: "الأحكام التي تنشأ عن الصفات كالتفخيم والترقيق والإظهار والإدغام." } },
    { ar: "التحقيق", latin: "at-tahqiq", id: "bacaan penuh pelan", def: { id: "Memberi huruf haknya dari isyba' mad, tahqiq hamzah, penyempurnaan harakat dan ghunnah.", ar: "إعطاء الحروف حقها من إشباع المد وتحقيق الهمز وإتمام الحركات وتوفية الغنات." } },
    { ar: "الحدر", latin: "al-hadr", id: "bacaan cepat", def: { id: "Membaca cepat dan ringkas dengan tetap menjaga hukum tajwid.", ar: "إدراج القراءة وسرعتها مع مراعاة أحكام التجويد." } },
    { ar: "التدوير", latin: "at-tadwir", id: "bacaan pertengahan", def: { id: "Pertengahan antara hadr dan tahqiq.", ar: "التوسط بين مرتبتي الحدر والتحقيق." } },
    { ar: "الترتيل", latin: "at-tartil", id: "membaca tertib dan tenang", def: { id: "Membaca dengan tenang dan penuh ketenangan, memberi tiap huruf haknya dari makhraj, sifat, dan mad.", ar: "قراءة القرآن بتمهل وتؤدة واطمئنان وإعطاء كل حرف حقه." } },
    { ar: "اللحن", latin: "al-lahn", id: "kesalahan bacaan", def: { id: "Kesalahan yang menimpa kata, merusak makna atau kaidah bacaan; terbagi jali dan khafi.", ar: "خطأ يطرأ على الكلمة فيخل بالمعنى أو بقواعد القراءة؛ جلي وخفي." } },
    { ar: "الاستعاذة", latin: "al-isti'adzah", id: "berlindung kepada Allah", def: { id: "Berlindung kepada Allah dan membentengi diri dengan-Nya dari setan yang terkutuk.", ar: "اللجوء إلى الله والتحصن به من الشيطان الرجيم." } },
    { ar: "البسملة", latin: "al-basmalah", id: "ucapan Bismillah", def: { id: "Ucapan {بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ}, dibaca antara dua surah kecuali Al-Anfal dan At-Taubah.", ar: "قول بسم الله الرحمن الرحيم، وتقرأ بين السورتين إلا بين الأنفال والتوبة." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Secara bahasa, tajwid berarti…", ar: "التجويد لغة:" }, o: [{ id: "Menghafal", ar: "الحفظ" }, { id: "Memperindah dan memantapkan", ar: "التحسين والإتقان" }, { id: "Menafsirkan", ar: "التفسير" }, { id: "Menulis", ar: "الكتابة" }], j: 1, b: { id: "Dari *jawwadtu asy-syai'a*, yaitu memperbagusnya.", ar: "من جودت الشيء أي حسنته." } },
      { q: { id: "Hukum membaca Al-Qur'an dengan tajwid secara praktik adalah…", ar: "حكم التجويد العملي:" }, o: [{ id: "Sunnah", ar: "مندوب" }, { id: "Mubah", ar: "مباح" }, { id: "Wajib 'ain", ar: "واجب عيني" }, { id: "Fardhu kifayah", ar: "فرض كفاية" }], j: 2, b: { id: "Wajib 'ain atas setiap yang hendak membaca Al-Qur'an.", ar: "واجب وجوبًا عينيًا." } },
      { q: { id: "Manakah yang BUKAN salah satu dari empat rukun tajwid menurut Muhammad Makki?", ar: "ليس من أركان التجويد الأربعة:" }, o: [{ id: "Mengetahui makhraj", ar: "معرفة المخارج" }, { id: "Mengetahui sifat huruf", ar: "معرفة الصفات" }, { id: "Menghafal seluruh Al-Qur'an", ar: "حفظ القرآن كله" }, { id: "Riyadhah lisan", ar: "رياضة اللسان" }], j: 2, b: { id: "Empat rukun: makhraj, sifat, hukum susunan, dan riyadhah lisan.", ar: "الأركان: المخارج والصفات وأحكام التركيب ورياضة اللسان." } },
      { q: { id: "Tingkat bacaan yang cepat namun tetap menjaga hukum tajwid disebut…", ar: "المرتبة السريعة مع مراعاة الأحكام:" }, o: [{ id: "Tahqiq", ar: "التحقيق" }, { id: "Tadwir", ar: "التدوير" }, { id: "Hadr", ar: "الحدر" }, { id: "Saktah", ar: "السكت" }], j: 2, b: { id: "Hadr = idraj dan cepat dengan menjaga hukum.", ar: "الحدر إدراج القراءة وسرعتها." } },
      { q: { id: "Waqaf pada {نَسْتَعِينُ} dengan membaca nun bertasydid termasuk…", ar: "الوقف على «نَسْتَعِينُ» بتشديد النون:" }, o: [{ id: "Lahn khafi", ar: "لحن خفي" }, { id: "Lahn jali", ar: "لحن جلي" }, { id: "Tadwir", ar: "تدوير" }, { id: "Bacaan yang benar", ar: "قراءة صحيحة" }], j: 1, b: { id: "Mengubah sukun menjadi tasydid adalah lahn jali.", ar: "تبديل السكون بالتشديد لحن جلي." } },
      { q: { id: "Menurut Syaikh, kapan waktu isti'adzah?", ar: "وقت الاستعاذة:" }, o: [{ id: "Sesudah membaca", ar: "بعد القراءة" }, { id: "Sebelum membaca", ar: "قبل القراءة" }, { id: "Di tengah bacaan", ar: "وسط القراءة" }, { id: "Hanya di akhir surah", ar: "آخر السورة فقط" }], j: 1, b: { id: "Waktunya sebelum membaca, berdasarkan riwayat khalaf dari salaf.", ar: "قبل القراءة بنقل الخلف عن السلف." } },
      { q: { id: "Pendapat 'Atha' bin Abi Rabah tentang isti'adzah adalah…", ar: "قول عطاء بن أبي رباح في الاستعاذة:" }, o: [{ id: "Mustahabbah", ar: "مستحبة" }, { id: "Wajib di dalam dan luar shalat", ar: "واجبة في الصلاة وخارجها" }, { id: "Makruh", ar: "مكروهة" }, { id: "Cukup sekali seumur hidup", ar: "تكفي مرة" }], j: 1, b: { id: "Dinukil ar-Razi bahwa pembaca yang meninggalkannya berdosa. Cukup sekali seumur hidup adalah pendapat Ibnu Sirin.", ar: "حكى الرازي عنه الوجوب، والاكتفاء بمرة قول ابن سيرين." } },
      { q: { id: "Isti'adzah dipelankan jika…", ar: "يسر بالاستعاذة إذا:" }, o: [{ id: "Mengajar murid", ar: "كان يعلم" }, { id: "Membuka acara umum", ar: "افتتح محفلًا عامًا" }, { id: "Membaca di dalam shalat", ar: "قرأ في الصلاة" }, { id: "Memulai bacaan dalam jamaah", ar: "ابتدأ القراءة في جماعة" }], j: 2, b: { id: "Dalam shalat secara mutlak isti'adzah dipelankan.", ar: "في الصلاة مطلقًا." } },
      { q: { id: "Antara dua surah berurutan, wajah mana yang TIDAK boleh?", ar: "أي وجه لا يجوز بين السورتين؟" }, o: [{ id: "Qath' semuanya", ar: "قطع الجميع" }, { id: "Washl semuanya", ar: "وصل الجميع" }, { id: "Menyambung akhir surah dengan basmalah lalu waqaf di basmalah", ar: "وصل آخر السورة بالبسملة مع الوقف عليها" }, { id: "Qath' pertama, washl kedua dan ketiga", ar: "قطع الأول ووصل الثاني بالثالث" }], j: 2, b: { id: "Agar basmalah tidak tampak sebagai ayat dari surah pertama.", ar: "كي لا تظهر البسملة وكأنها آية من السورة الأولى." } },
      { q: { id: "Antara Al-Anfal dan At-Taubah, wajah yang dibolehkan adalah…", ar: "بين الأنفال والتوبة:" }, o: [{ id: "Basmalah wajib", ar: "البسملة واجبة" }, { id: "Waqaf, saktah, washl tanpa basmalah", ar: "الوقف والسكت والوصل دون بسملة" }, { id: "Hanya washl dengan basmalah", ar: "الوصل مع البسملة فقط" }, { id: "Isti'adzah saja", ar: "الاستعاذة فقط" }], j: 1, b: { id: "Tiga wajah tanpa basmalah.", ar: "ثلاثة أوجه دون بسملة." } },
      { q: { id: "Hukum lahn khafi menurut ulama adalah…", ar: "حكم اللحن الخفي:" }, o: [{ id: "Haram ijma'", ar: "حرام بالإجماع" }, { id: "Diperselisihkan antara haram dan makruh", ar: "خلاف بين التحريم والكراهة" }, { id: "Mubah", ar: "مباح" }, { id: "Wajib", ar: "واجب" }], j: 1, b: { id: "Yang haram ijma' adalah lahn jali.", ar: "الجلي هو المحرم بالإجماع." } },
      { q: { id: "Bila waqaf pada {الم} di awal Ali 'Imran, lam dan mim dibaca…", ar: "الوقف على «الم» في أول آل عمران:" }, o: [{ id: "2 harakat", ar: "حركتين" }, { id: "4 harakat", ar: "أربع حركات" }, { id: "6 harakat", ar: "ست حركات" }, { id: "1 harakat", ar: "حركة" }], j: 2, b: { id: "Lam dan mim masing-masing enam harakat.", ar: "مد اللام ست والميم ست." } }
    ],
    bs: [
      { t: { id: "Tajwid ilmi wajib 'ain atas setiap muslim awam.", ar: "التجويد العلمي واجب عيني على عامة المسلمين." }, j: false, b: { id: "Bagi awam mandub; wajib 'ain bagi yang memimpin bacaan dan pengajaran.", ar: "مندوب للعامة." } },
      { t: { id: "Ibnul Jazari menegaskan bahwa orang yang tidak men-tajwid-kan Al-Qur'an berdosa.", ar: "من لم يجود القرآن آثم عند ابن الجزري." }, j: true },
      { t: { id: "Tadwir adalah pertengahan antara hadr dan tahqiq.", ar: "التدوير توسط بين الحدر والتحقيق." }, j: true },
      { t: { id: "Lahn jali hanya diketahui oleh ahli.", ar: "اللحن الجلي لا يعرفه إلا المتخصصون." }, j: false, b: { id: "Yang hanya diketahui ahli adalah lahn khafi; jali dikenal orang awam.", ar: "هذا الخفي." } },
      { t: { id: "Membaca {الْحَمْدُ} dengan ha' (ه) sebagai ganti ha' (ح) adalah lahn jali.", ar: "إبدال حاء الحمد هاء لحن جلي." }, j: true },
      { t: { id: "Menurut jumhur, isti'adzah wajib dan berdosa yang meninggalkan.", ar: "الجمهور على وجوب الاستعاذة." }, j: false, b: { id: "Jumhur: mustahabbah dan tak berdosa yang meninggalkan.", ar: "مستحبة ولا يأثم تاركها." } },
      { t: { id: "Bila batuk atau bersin menghentikan bacaan, isti'adzah tidak diulang.", ar: "إذا قطع القراءة لسعال لم يعد الاستعاذة." }, j: true },
      { t: { id: "Basmalah dibaca di awal Surah At-Taubah menurut riwayat Hafsh.", ar: "يبسمل في أول التوبة برواية حفص." }, j: false, b: { id: "Tidak ada basmalah di awal Bara'ah, baik dimulai ataupun dibaca setelah Al-Anfal.", ar: "لا خلاف في ترك التسمية أول براءة." } },
      { t: { id: "Para qari sepakat membaca basmalah di awal surah (selain Bara'ah), baik yang membaca basmalah antar surah maupun tidak.", ar: "اتفق القراء على البسملة في ابتداء السور." }, j: true },
      { t: { id: "Bila waqaf pada {الم} di awal Ali 'Imran, tersedia dua wajah washl: mim enam harakat atau dua harakat dengan fathah.", ar: "في وصل «الم» وجهان: ست حركات أو حركتان." }, j: true }
    ],
    jodoh: [
      { a: { id: "Hak huruf", ar: "حق الحرف" }, b: { id: "Makhraj dan sifat lazim", ar: "المخرج والصفات اللازمة" } },
      { a: { id: "Mustahak huruf", ar: "مستحق الحرف" }, b: { id: "Hukum yang timbul dari sifat: tafkhim, tarqiq, izhhar, idgham", ar: "الأحكام الناشئة عن الصفات" } },
      { a: { id: "Tahqiq", ar: "التحقيق" }, b: { id: "Memberi hak huruf, isyba' mad, tahqiq hamzah", ar: "إشباع المد وتحقيق الهمز" } },
      { a: { id: "Hadr", ar: "الحدر" }, b: { id: "Cepat dan ringkas, hukum tetap dijaga", ar: "إدراج وسرعة" } },
      { a: { id: "Lahn jali", ar: "اللحن الجلي" }, b: { id: "Haram ijma' bila disengaja", ar: "حرام بإجماع" } },
      { a: { id: "Lahn khafi", ar: "اللحن الخفي" }, b: { id: "Meninggalkan ikhfa' atau salah tarqiq ra'", ar: "ترك الإخفاء وترقيق الراء" } },
      { a: { id: "Jahr isti'adzah", ar: "جهر الاستعاذة" }, b: { id: "Dalam pengajaran dan acara umum", ar: "في التعليم والمحافل" } },
      { a: { id: "Waqaf, saktah, washl tanpa basmalah", ar: "الوقف والسكت والوصل" }, b: { id: "Antara Al-Anfal dan At-Taubah", ar: "بين الأنفال والتوبة" } }
    ],
    urut: { t: { id: "Urutkan tingkat bacaan dari yang paling lambat hingga paling cepat.", ar: "رتب مراتب القراءة من الأبطأ إلى الأسرع." },
      item: [{ id: "Tahqiq", ar: "التحقيق" }, { id: "Tadwir", ar: "التدوير" }, { id: "Hadr", ar: "الحدر" }, { id: "(Tartil mencakup ketiganya)", ar: "الترتيل يشملها" }] },
    isian: [
      { t: { id: "Tajwid secara bahasa berarti ______ dan memantapkan.", ar: "التجويد لغة: ______ والإتقان." }, j: { id: "memperindah", ar: "التحسين" }, x: [{ id: "menghafal", ar: "الحفظ" }, { id: "menulis", ar: "الكتابة" }, { id: "menafsirkan", ar: "التفسير" }] },
      { t: { id: "Perumus praktik tajwid adalah ______ karena Al-Qur'an turun kepadanya dalam keadaan ber-tajwid.", ar: "واضع التجويد عمليًا: ______." }, j: { id: "Nabi ﷺ", ar: "النبي ﷺ" }, x: [{ id: "Al-Khalil", ar: "الخليل" }, { id: "Abul-Aswad", ar: "أبو الأسود" }, { id: "Hamzah", ar: "حمزة" }] },
      { t: { id: "Isti'adzah dilakukan ______ membaca Al-Qur'an.", ar: "الاستعاذة ______ القراءة." }, j: { id: "sebelum", ar: "قبل" }, x: [{ id: "sesudah", ar: "بعد" }, { id: "di tengah", ar: "وسط" }, { id: "tanpa", ar: "دون" }] },
      { t: { id: "Dalam riwayat Hafsh, tidak ada basmalah antara Al-Anfal dan ______.", ar: "لا بسملة بين الأنفال و______." }, j: { id: "At-Taubah", ar: "التوبة" }, x: [{ id: "Al-Fatihah", ar: "الفاتحة" }, { id: "Yunus", ar: "يونس" }, { id: "An-Nas", ar: "الناس" }] },
      { t: { id: "Pendapat bahwa cukup sekali seumur hidup untuk isti'adzah adalah dari ______.", ar: "من قال تكفي الاستعاذة مرة في العمر: ______." }, j: { id: "Ibnu Sirin", ar: "ابن سيرين" }, x: [{ id: "'Atha'", ar: "عطاء" }, { id: "Ar-Razi", ar: "الرازي" }, { id: "Ad-Dani", ar: "الداني" }] }
    ],
    pilah: { t: { id: "Pilah: lahn JALI atau lahn KHAFI?", ar: "صنِّف: لحن جلي أم لحن خفي؟" },
      kategori: [{ id: "Lahn jali", ar: "لحن جلي" }, { id: "Lahn khafi", ar: "لحن خفي" }],
      item: [
        { t: { id: "Membaca {أَنْعَمْتَ} dengan nun berharakat fathah", ar: "تحريك نون «أَنْعَمْتَ»" }, k: 0 },
        { t: { id: "Meninggalkan ikhfa'", ar: "ترك الإخفاء" }, k: 1 },
        { t: { id: "Membaca {الْكَوْثَرَ} sebagai *al-kautsaar*", ar: "قراءة «الكوثار»" }, k: 0 },
        { t: { id: "Salah tarqiq atau tafkhim ra'", ar: "ترقيق الراء وتفخيمها خطأ" }, k: 1 },
        { t: { id: "Menghilangkan ghunnah", ar: "ترك الغنة" }, k: 1 },
        { t: { id: "Mengganti ha' (ح) menjadi ha' (ه) pada {الْحَمْدُ}", ar: "إبدال الحاء هاء" }, k: 0 },
        { t: { id: "Membuang alif pada {مِمَّا كَانَا}", ar: "حذف ألف «كَانَا»" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف علم التجويد لغة واصطلاحًا، ثم بيِّن المراد بحق الحرف ومستحقه.", id: "Definisikan ilmu tajwid secara bahasa dan istilah, lalu jelaskan maksud hak huruf dan mustahaknya." },
      j: { ar: "التجويد لغة: التحسين والإتقان. واصطلاحًا: علم يبحث في الكلمات القرآنية من حيث إعطاء الحروف حقها ومستحقها. حق الحرف: إخراجه من مخرجه مع صفاته اللازمة كالجهر والرخاوة والاستعلاء. ومستحقه: الأحكام الناشئة عن تلك الصفات كالتفخيم والترقيق والإظهار والإدغام.",
           id: "Bahasa: **memperindah dan memantapkan**. Istilah: ilmu yang membahas kata-kata Al-Qur'an dari sisi memberikan **hak dan mustahak huruf**. Hak huruf: makhraj yang tepat dan sifat lazim (jahr, rakhawah, isti'la'). Mustahak: hukum yang timbul dari sifat itu (tafkhim, tarqiq, izhhar, idgham)." } },
    { t: { ar: "ما الفرق بين التجويد العملي والعلمي من حيث التعريف والحكم والدليل؟", id: "Apa perbedaan tajwid amali dan ilmi dari sisi definisi, hukum, dan dalil?" },
      j: { ar: "العملي: تلاوة القرآن مجودًا كما أنزل، وهو واجب عيني على كل قارئ، ودليله: {وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا} وحديث أم سلمة والإجماع. العلمي: معرفة القواعد والأحكام، وهو مندوب لعامة الناس وواجب عيني على من يتصدر للقراءة والإقراء، ودليله آية النفر {فَلَوْلَا نَفَرَ…}.",
           id: "**Amali**: membaca Al-Qur'an ber-tajwid sebagaimana diturunkan; **wajib 'ain**; dalilnya {وَرَتِّلِ…}, hadits Ummu Salamah, dan ijma'. **Ilmi**: mengetahui kaidah dan hukumnya; **mandub** bagi awam, **wajib 'ain** bagi yang memimpin bacaan dan pengajaran; dalilnya ayat tentang berangkat memperdalam agama (At-Taubah: 122)." } },
    { t: { ar: "بيِّن الفرق بين اللحن الجلي واللحن الخفي مع مثالين لكل منهما وحكمه.", id: "Jelaskan perbedaan lahn jali dan khafi dengan dua contoh dan hukumnya." },
      j: { ar: "الجلي: خطأ يخل بمبنى الكلمة سواء أخل بالمعنى أم لا، ويعرفه العامة، مثل: إبدال حرف بحرف (الحمد: الهمد)، وزيادة حرف (الكوثار)، وحكمه حرام بإجماع إن تعمد أو تساهل. الخفي: خطأ يخل بعرف القراءة ولا يخل بالمعنى، ولا يعرفه إلا المتخصصون، مثل ترك الإخفاء وتفخيم الراء في موضع الترقيق، وحكمه خلاف بين التحريم والكراهة.",
           id: "**Jali**: merusak bangun kata, diketahui awam; contoh mengganti huruf ({الْحَمْدُ} jadi *al-himdu* dengan ha' ه) dan menambah huruf (*al-kautsaar*); haram ijma' jika disengaja atau diremehkan. **Khafi**: merusak adat bacaan tanpa merusak makna, diketahui ahli; contoh meninggalkan ikhfa' dan salah tafkhim/tarqiq ra'; hukumnya khilaf antara haram dan makruh." } },
    { t: { ar: "ما حكم الاستعاذة؟ واذكر الأقوال ومواضع الجهر والإسرار بها.", id: "Apa hukum isti'adzah? Sebutkan pendapat ulama serta tempat jahr dan israr." },
      j: { ar: "اتفقوا على مشروعيتها واختلفوا: الجمهور مستحبة ولا يأثم تاركها وهو الراجح؛ وحكى الرازي عن عطاء الوجوب في الصلاة وخارجها؛ وقيل مندوبة؛ وقيل واجبة يعاقب فاعلها وضعف؛ وقال ابن سيرين: تكفي مرة في العمر. الجهر: إذا ابتدأ في جماعة، وفي التعليم، وعند افتتاح القراءة في المحافل. الإسرار: القراءة سرًا، والمنفرد جهرًا، وفي الصلاة مطلقًا، ووسط جماعة وهو غير المبتدئ.",
           id: "Disepakati disyariatkan; perselisihannya: **jumhur mustahabbah** (rajih); 'Atha' (dinukil ar-Razi) **wajib**; ada yang mandub; wajib-berhukuman dilemahkan; Ibnu Sirin: cukup sekali seumur hidup. **Jahr**: pemulai dalam jamaah, pengajaran, acara umum. **Israr**: bacaan lirih, sendiri, dalam shalat, di tengah jamaah bukan pemulai." } },
    { t: { ar: "اذكر الأوجه الجائزة عند ابتداء سورة غير التوبة، وبين السورتين، وبين الأنفال والتوبة.", id: "Sebutkan wajah yang dibolehkan di awal surah selain At-Taubah, antara dua surah, dan antara Al-Anfal dan At-Taubah." },
      j: { ar: "عند ابتداء سورة غير التوبة أربعة: وصل الجميع، وقطع الجميع، وقطع الأول ووصل الثاني بالثالث، ووصل الأول بالثاني وقطع الثالث. وبين السورتين ثلاثة: قطع الجميع، وقطع الأول ووصل الثاني بالثالث، ووصل الجميع، ويمتنع وصل آخر السورة بالبسملة مع الوقف عليها. وبين الأنفال والتوبة ثلاثة دون بسملة: الوقف والسكت والوصل.",
           id: "**Awal surah (selain At-Taubah): 4** — sambung semua; putus semua; putus-1 sambung 2-3; sambung 1-2 putus-3. **Antara dua surah: 3** — putus semua; putus-1 sambung 2-3; sambung semua; dilarang menyambung akhir surah dengan basmalah lalu waqaf di basmalah. **Al-Anfal–At-Taubah: 3 tanpa basmalah** — waqaf, saktah, washl." } }
  ]
});
