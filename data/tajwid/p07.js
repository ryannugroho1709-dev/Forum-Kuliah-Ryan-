/* Tajwid — Pertemuan 7: Bab Tafkhim dan Tarqiq (huruf isti'la, alif, lam, ra) */
Kuliah.pertemuan("tajwid", {
  no: 7, motif: "persimpangan", tema: 4, durasi: 26,
  telegram: "https://t.me/Shifaaulqloub7/288",
  bab: { id: "Bab tafkhim (menebalkan) dan tarqiq (menipiskan)", ar: "باب التفخيم والترقيق" },
  judul: { id: "Tafkhim dan Tarqiq: Huruf Isti'la, Alif, Lam Jalalah, dan Ra", ar: "التفخيم والترقيق: حروف الاستعلاء والألف واللام والراء" },
  ringkas: {
    id: "Definisi tafkhim dan tarqiq, tujuh huruf tafkhim dan urutan kekuatannya, lima tingkat tafkhim (tiga pendapat ulama), tafkhim nisbi pada qaf/ghain/kha, serta hukum alif, lam lafzhul jalalah, dan ra: delapan keadaan tafkhim, enam keadaan tarqiq, dan lima kata ra waqaf yang boleh dua wajah.",
    ar: "تعريف التفخيم والترقيق، وحروف التفخيم السبعة وترتيبها، ومراتب التفخيم، والتفخيم النسبي، وأحكام الألف واللام والراء: حالات تفخيمها وترقيقها والكلمات التي يجوز فيها الوجهان وقفًا."
  },
  tujuan: [
    { id: "Mendefinisikan tafkhim dan tarqiq serta menyebut huruf-huruf yang selalu tebal, selalu tipis, dan yang berubah-ubah.", ar: "تعريف التفخيم والترقيق وبيان الحروف المفخمة دائمًا والمرققة دائمًا والدائرة بينهما." },
    { id: "Mengurutkan tujuh huruf tafkhim menurut kekuatannya beserta alasannya.", ar: "ترتيب حروف التفخيم السبعة بحسب القوة مع التعليل." },
    { id: "Menjelaskan tingkat tafkhim menurut Ibnul Jazari, Ibnu ath-Thahhan, dan Al-Mutawalli, serta tafkhim nisbi.", ar: "بيان مراتب التفخيم عند ابن الجزري وابن الطحان والمتولي والتفخيم النسبي." },
    { id: "Menentukan hukum alif, lam lafzhul jalalah, dan ra pada contoh ayat.", ar: "تطبيق أحكام الألف واللام والراء على الأمثلة." }
  ],
  isi: [
    { t: "pembuka", id: "Bab ini membahas **ketebalan dan ketipisan bunyi huruf**. Tidak semua huruf diucapkan sama: sebagian selalu tebal, sebagian selalu tipis, dan tiga huruf (alif, lam pada lafzhul jalalah, dan ra) bergantung keadaannya. Pelafalannya paling mudah dipahami melalui **mendengar dan berlatih langsung** dengan guru.", ar: "في هذا الباب نتعلم أحكام تفخيم الحروف وترقيقها، فمن الحروف ما يفخم دائمًا ومنها ما يرقق دائمًا ومنها ما يدور بين الأمرين، ولا تتضح الأمثلة إلا بالسماع والتدريب مع الشيخ." },

    { t: "judul", id: "Pengertian Tafkhim dan Tarqiq", ar: "تعريف التفخيم والترقيق" },
    { t: "banding", judul: { id: "Tafkhim vs Tarqiq", ar: "التفخيم مقابل الترقيق" },
      kiri: { judul: { id: "Tafkhim (menebalkan)", ar: "التفخيم" }, ikon: "mosque", warna: "green", poin: [
        { id: "**Bahasa:** menggemukkan, menebalkan, mengagungkan.", ar: "لغة: التسمين والتغليظ والتعظيم." },
        { id: "**Istilah:** kegemukan/kekuatan yang masuk pada bunyi huruf saat diucapkan sehingga **mulut terpenuhi oleh gema huruf**.", ar: "اصطلاحًا: سِمَن أو قوة أو تغليظ يدخل على صوت الحرف عند النطق به فيمتلئ الفم بصداه." },
        { id: "Contoh: *shaama*, {الضَّالِّينَ} (bukan *shii*).", ar: "صَامَ، الضَّالِّينَ" }
      ] },
      kanan: { judul: { id: "Tarqiq (menipiskan)", ar: "الترقيق" }, ikon: "leaf", warna: "blue", poin: [
        { id: "**Bahasa:** berasal dari *riqqah* — menipis/langsing.", ar: "لغة: مشتق من الرقة وهي النحافة." },
        { id: "**Istilah:** kelangsingan yang masuk pada bunyi huruf sehingga **mulut tidak terpenuhi oleh gemanya**.", ar: "اصطلاحًا: نُحُول يدخل على صوت الحرف عند النطق به فلا يمتلئ الفم بصداه." },
        { id: "Contoh: {الْعَابِدُونَ الْحَامِدُونَ} — *'aa*, *haa*.", ar: "الْعَابِدُونَ الْحَامِدُونَ" }
      ] } },
    { t: "langkah", judul: { id: "Cara mengucapkannya", ar: "كيفية النطق" }, item: [
      { judul: { id: "Tafkhim", ar: "النطق بالتفخيم" }, id: "Saat mengucapkan huruf **isti'la**, ruang dalam mulut meluas; udara dari paru-paru mengalir deras ke langit-langit atas, pangkal lidah terangkat dan mulut menyempit sehingga **mulut penuh dengan gema huruf**. Itulah tafkhim.", ar: "عند النطق بالحرف المستعلي يتسع التجويف الداخلي للفم فيتجه الهواء إلى سقف الحنك الأعلى، فيجد أقصى اللسان مرتفعًا فيمتلئ الفم بصدى الحرف." },
      { judul: { id: "Tarqiq", ar: "النطق بالترقيق" }, id: "Saat mengucapkan huruf **istifal**, rongga mulut menyempit; udara yang keluar sedikit, pangkal lidah turun dan mulut lapang di depan sehingga **mulut tidak penuh gema**; huruf keluar tipis.", ar: "عند النطق بالحرف المستفل يضيق التجويف ويتجه الهواء ضئيلًا فيجد أقصى اللسان منخفضًا فلا يمتلئ الفم بصداه." }
    ] },
    { t: "kutipan", ar: "فَرَقِّقَنْ مُسْتَفِلاً مِنْ أَحْرُفِ ....... وَحَاذِرَنْ تَفْخِيمَ لَفْظِ الأَلِفِ", id: "Tipiskanlah huruf-huruf istifal, dan waspadalah jangan menebalkan bunyi alif.", oleh: { id: "Ibnul Jazari", ar: "الإمام ابن الجزري رحمه الله" } },

    { t: "judul", id: "Tiga Kelompok Huruf", ar: "أقسام الحروف" },
    { t: "peta", ikon: "layers", pusat: { id: "Huruf menurut tafkhim/tarqiq", ar: "أقسام الحروف" }, cabang: [
      { id: "Selalu tafkhim", ar: "ما يفخم دائمًا", sub: [{ id: "Tujuh huruf isti'la: خ ص ض غ ط ق ظ (*khushsha dhaghthin qizh*)", ar: "خص ضغط قظ" }] },
      { id: "Selalu tarqiq", ar: "ما يرقق دائمًا", sub: [{ id: "Seluruh huruf lainnya", ar: "باقي الحروف" }] },
      { id: "Antara keduanya", ar: "الدائرة بين التفخيم والترقيق", sub: [{ id: "Alif, lam lafzhul jalalah, ra", ar: "الألف ولام لفظ الجلالة والراء" }] }
    ] },
    { t: "p", id: "Setelah dikeluarkan tujuh huruf tafkhim, huruf-huruf yang tersisa semuanya tarqiq kecuali **tiga huruf**: alif, lam, dan ra — masing-masing memiliki dua wajah, tafkhim dan tarqiq, sebagaimana akan dirinci.", ar: "حروفه باقي الحروف بعد حروف التفخيم على ثلاثة: الألف واللام والراء فلها وجهان الترقيق والتفخيم." },
    { t: "kutipan", ar: "وَحَرْفَ الِاسْتِعْلاَءِ فَخِّمْ وَاخْصُصَا ....... الِاطْبَاقَ أَقْوَى نَحْوُ: قَالَ وَالْعَصَا", id: "Tebalkan huruf isti'la, dan khususkan huruf ithbaq sebagai yang paling kuat, seperti *qaala* dan *al-'ashaa*.", oleh: { id: "Ibnul Jazari", ar: "الإمام ابن الجزري رحمه الله" } },

    { t: "judul", id: "Urutan Kekuatan Tujuh Huruf Tafkhim", ar: "ترتيب حروف التفخيم من حيث القوة" },
    { t: "p", id: "Tafkhim tiap huruf sesuai kadar isti'la-nya (kata Al-Mar'asyi): semakin kuat isti'la, semakin kuat tafkhimnya. Urutan dari terkuat ke terlemah:", ar: "قال المرعشي: وتفخيم كل حرف منها يكون على قدر استعلائه، فما كان استعلاؤه أبلغ كان تفخيمه أبلغ." },
    { t: "langkah", item: [
      { judul: { id: "Tha (ط)", ar: "الطاء" }, id: "Karena ia **huruf paling kuat**.", ar: "لأنها أقوى الحروف." },
      { judul: { id: "Dhad (ض)", ar: "الضاد" }, id: "Karena bersifat **istithalah** (memanjang), sebagaimana dijelaskan pada bab sifat.", ar: "لاتصافها بصفة الاستطالة." },
      { judul: { id: "Shad (ص)", ar: "الصاد" }, id: "Karena dibedakan dari zha dengan **shafir** (desis), dan makhrajnya lebih masuk ke dalam mulut daripada zha.", ar: "لتميزها عن الظاء بالصفير ومخرجها أدخل إلى الفم من الظاء." },
      { judul: { id: "Zha (ظ)", ar: "الظاء" }, id: "Dibedakan dari qaf karena bersifat **ithbaq**.", ar: "تميزت عن القاف لاتصافها بالإطباق." },
      { judul: { id: "Qaf (ق)", ar: "القاف" }, id: "Dibedakan dari ghain karena bersifat **syiddah**.", ar: "لاتصافها عن الغين بالشدة." },
      { judul: { id: "Ghain (غ)", ar: "الغين" }, id: "Dibedakan dari kha karena bersifat **jahr**.", ar: "لتميزها عن الخاء بالجهر." },
      { judul: { id: "Kha (خ)", ar: "الخاء" }, id: "Yang terlemah, karena bersifat **hams**.", ar: "لاتصافها بالهمس." }
    ] },
    { t: "tanya", q: { id: "Mengapa shad lebih kuat daripada zha, padahal zha bersifat jahr (sifat kuat)?", ar: "لماذا قويت الصاد عن الظاء مع أن الظاء متصفة بالجهر وهي صفة قوة؟" }, a: { id: "Karena **hams bersama shafir** membantu mengalirnya napas dengan suara desis, sehingga mulut terpenuhi gema shad ketika diucapkan **lebih banyak** daripada gema zha.", ar: "الهمس مع الصفير يساعدان على جريان النفس بصوت صفيري، مما يؤدي إلى امتلاء الفم بصدى الصاد عند النطق بها أكثر من الظاء." } },
    { t: "cek", q: { id: "Urutan yang benar dari terkuat tafkhimnya adalah…", ar: "الترتيب الصحيح من الأقوى تفخيمًا…" }, o: [{ id: "Dhad, tha, shad, zha", ar: "الضاد ثم الطاء ثم الصاد ثم الظاء" }, { id: "Tha, dhad, shad, zha", ar: "الطاء ثم الضاد ثم الصاد ثم الظاء" }, { id: "Shad, tha, dhad, zha", ar: "الصاد ثم الطاء ثم الضاد ثم الظاء" }, { id: "Tha, shad, dhad, zha", ar: "الطاء ثم الصاد ثم الضاد ثم الظاء" }], j: 1, b: { id: "Tha (terkuat), dhad (istithalah), shad (shafir), zha (ithbaq), lalu qaf, ghain, kha.", ar: "الطاء ثم الضاد ثم الصاد ثم الظاء ثم القاف ثم الغين ثم الخاء." } },

    { t: "judul", id: "Tingkatan Tafkhim (Maratib at-Tafkhim)", ar: "مراتب التفخيم" },
    { t: "tabel", judul: { id: "Pendapat pertama: Ibnul Jazari — lima tingkat", ar: "المذهب الأول: ابن الجزري، خمس مراتب" }, kolom: [{ id: "Tingkat", ar: "المرتبة" }, { id: "Keadaan huruf", ar: "الحال" }, { id: "Contoh", ar: "المثال" }, { id: "Alasan", ar: "العلة" }], baris: [
      [{ id: "1 (terkuat)", ar: "الأولى" }, { id: "Berfathah, diikuti alif", ar: "المفتوح الذي بعده ألف" }, { id: "{قَالَ}، {خَابَ}، {صَابِرًا}، {طَالَ}", ar: "قال، خاب، صابرا، طال" }, { id: "Isyba' fathah dengan alif membuat mulut penuh gema paling banyak", ar: "إشباع الفتحة بالألف" }],
      [{ id: "2", ar: "الثانية" }, { id: "Berfathah, tidak diikuti alif", ar: "المفتوح الذي ليس بعده ألف" }, { id: "{رَزَقَكُمُ}، {خَلَقَكُمْ}، {طَبَعَ}، {ضَرَبَ}", ar: "رزقكم، خلقكم، طبع، ضرب" }, { id: "Fathah memenuhi mulut lebih banyak dari tingkat selanjutnya", ar: "الفتحة تملأ الفم" }],
      [{ id: "3", ar: "الثالثة" }, { id: "Berdhammah", ar: "المضموم" }, { id: "{يَقُولُ}، {قُتِلَ}، {مَنضُودٍ}، {غُلِبَتِ}، {خُلِقُوا}، {مَحْظُورًا}", ar: "يقول، قتل، منضود" }, { id: "Dhammah menuntut rongga mulut membulat dan penuh gema", ar: "الضم يقتضي تجويف الفم وامتلاءه" }],
      [{ id: "4", ar: "الرابعة" }, { id: "Sukun", ar: "الساكن" }, { id: "{أَقْسَمُوا}، {يَظْلِمُ}، {يَقْتُلُونَ}، {إِطْعَامُ}", ar: "أقسموا، يظلم، يقتلون، إطعام" }, { id: "Berada di bawah yang berharakat fathah/dhammah", ar: "" }],
      [{ id: "5 (terlemah)", ar: "الخامسة" }, { id: "Berkasrah", ar: "المكسور" }, { id: "{قِيلَ}، {بَطِرَتْ}، {صِرَاطَ}، {ظِلَالٍ}، {غِلٍّ}، {خِيَانَةً}، {خِلَالٌ}", ar: "قيل، بطرت، صراط، ظلال، غل، خيانة، خلال" }, { id: "Kasrah tidak memenuhi mulut dengan gema, dan tidak sekokoh sukun pada makhrajnya; ia tingkat terlemah", ar: "لا تؤدي إلى امتلاء الفم ولا إلى استقرار تام في مخرجه كالساكن" }]
    ] },
    { t: "akordion", judul: { id: "Dua pendapat lain tentang tingkatan", ar: "مذهبان آخران" }, item: [
      { judul: { id: "Ibnu ath-Thahhan al-Andalusi — tiga tingkat", ar: "ابن الطحان الأندلسي: ثلاث مراتب" }, id: "(1) Yang berfathah, ditambah sukun yang sebelumnya berfathah. (2) Yang berdhammah, ditambah sukun yang sebelumnya berdhammah. (3) Yang berkasrah, ditambah sukun yang sebelumnya berkasrah.", ar: "الأولى: المفتوح ويلحق به الساكن قبله فتح. الثانية: المضموم ويلحق به الساكن قبله ضم. الثالثة: المكسور ويلحق به الساكن قبله كسر." },
      { judul: { id: "Muhammad bin Ahmad al-Mutawalli — lima tingkat", ar: "المتولي: خمس مراتب" }, id: "(1) Berfathah diikuti alif. (2) Berfathah tanpa alif, beserta sukun yang sebelumnya berfathah. (3) Berdhammah, beserta sukun yang sebelumnya berdhammah. (4) Sukun yang sebelumnya berkasrah. (5) Berkasrah.", ar: "الأولى: المفتوح الذي بعده ألف. الثانية: المفتوح الذي ليس بعده ألف ومعه الساكن وما قبله مفتوح. الثالثة: المضموم ومعه الساكن وما قبله مضموم. الرابعة: الساكن وما قبله كسر. الخامسة: المكسور." }
    ] },

    { t: "judul", id: "Tafkhim Nisbi (Relatif)", ar: "التفخيم النسبي" },
    { t: "definisi", judul: { id: "At-Tafkhim an-Nisbi", ar: "التفخيم النسبي" }, lughah: { id: "Penebalan relatif/sebanding.", ar: "التفخيم المقيس بالنسبة." }, istilah: { id: "Melafalkan huruf isti'la yang **munfatihah** (tidak ithbaq) dengan derajat **di bawah huruf-huruf ithbaq tetapi di atas huruf istifal**. Qaf, ghain, dan kha ditebalkan penuh, **kecuali** bila berkasrah atau sukun setelah kasrah — maka tafkhimnya nisbi (paling rendah derajat tebalnya).", ar: "هو النطق بأحرف الاستعلاء المنفتحة بدرجة دون الحروف المطبقة وفوق الحروف المستفلة؛ فالقاف والغين والخاء إذا كانت مكسورة أو ساكنة وما قبلها مكسور تفخم تفخيمًا نسبيًا." } },
    { t: "tabel", judul: { id: "Empat keadaan tafkhim nisbi", ar: "حالات التفخيم النسبي" }, kolom: [{ id: "Keadaan", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1. Sukun setelah kasrah asli atau kasrah 'aridh", ar: "ساكن قبله كسر أصلي أو عارض" }, { id: "Asli: {تُزِغْ}، {أَفْرِغْ}، {إِخْوَانًا}. 'Aridh: {أَنِ ٱغْدُوا}، {فِي ٱخْتِلَافِ}", ar: "تزغ، أفرغ، إخوانا، أن اغدوا، في اختلاف" }],
      [{ id: "2. Berkasrah", ar: "مكسورة" }, { id: "{قِيلَ}، {غِيضَ}، {خِيفَةً}", ar: "قيل، غيض، خيفة" }],
      [{ id: "3. Sebelum ghain/kha ada ya layyinah", ar: "قبل الغين والخاء ياء لينة" }, { id: "{شَيْخٌ}", ar: "شيخ" }],
      [{ id: "4. Kata {نَبْغِ}", ar: "كلمة نَبْغِ" }, { id: "{مَا كُنَّا نَبْغِ} (Al-Kahfi: 64): ada yang menebalkan penuh (asli), ada yang nisbi saat waqaf karena kasrah asli (asalnya *nabghii*, ya dibuang)", ar: "نبغ بسورة الكهف" }]
    ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Pengecualian kha sukun + ra, dan peringatan", ar: "استثناء وتنبيه" }, id: "**Pengecualian:** kha sukun yang diikuti ra dan didahului kasrah ditebalkan **kuat**, karena ra yang tebal sesudahnya, agar selaras dan mudah diucapkan: {إِخْرَاجًا}، {وَقَالَتِ ٱخْرُجْ عَلَيْهِنَّ} (Yusuf: 31). Peringatan: waspadai **tafkhim berlebihan** pada ghain, kha, qaf sukun setelah kasrah (derajat tafkhim terendah), dan **jangan menyebutnya 'tarqiq'** — huruf isti'la tidak pernah ditipiskan.", ar: "ويستثنى كل خاء سكنت بعدها راء وقبلها كسر فإنه يجب النطق بها مفخمة تفخيمًا قويًا لوقوع راء مفخمة بعدها لتتناسب. وينبغي الحذر من التفخيم الزائد في الغين والخاء والقاف إذا سكنت وسبقت بكسر، كما ينبغي الانتباه من وصفها بالترقيق لأن أحرف الاستعلاء لا ترقق أبدًا." },
    { t: "kutipan", ar: "فَهْيَ و إنْ تَكُنْ بِأدْنى مَنْزِلة ..... فَخِيمَةٌ قَطْعاً مِنَ الْمُسْتَفِلَة", id: "Walau ia berada di derajat terendah, ia tetap tebal secara pasti dibanding huruf istifal; maka jangan dikatakan ia tipis seperti lawannya — itulah yang benar.", oleh: { id: "Al-Mutawalli", ar: "العلامة المتولي" } },
    { t: "contoh", judul: { id: "Contoh tafkhim nisbi dalam ayat", ar: "أمثلة قرآنية للتفخيم النسبي" }, sorot: [
      { label: { ar: "رَبَّنَا لَا تُزِغْ قُلُوبَنَا" }, warna: "green", id: "Ali 'Imran: 8 — ghain sukun setelah kasrah: jangan dibaca *tuzigh* dengan ghain tipis.", ar: "لا نقول تُزغ بترقيق الغين." },
      { label: { ar: "رَبَّنَا أَفْرِغْ عَلَيْنَا صَبْرًا" }, warna: "blue", id: "Al-Baqarah: 250 — ghain sukun setelah kasrah.", ar: "أفرغ" },
      { label: { ar: "إِلَّا مَنِ ٱغْتَرَفَ غُرْفَةً" }, warna: "gold", id: "Al-Baqarah: 249 — ghain setelah kasrah 'aridh pada *mani-ghtarafa*.", ar: "اغترف" },
      { label: { ar: "رَبِّ ٱغْفِرْ لِي وَلِوَالِدَيَّ" }, warna: "green", id: "Nuh: 28 — ghain setelah kasrah 'aridh.", ar: "اغفر" },
      { label: { ar: "ٱلَّذِي ٱخْتَلَفُوا" }, warna: "blue", id: "Kha sukun setelah kasrah 'aridh.", ar: "اختلفوا" },
      { label: { ar: "وَقِيلَ لَهُمْ" }, warna: "gold", id: "Qaf berkasrah; juga {ٱهْدِنَا ٱلصِّرَاطَ ٱلْمُسْتَقِيمَ} — qaf berkasrah tetap tebal (jangan ditipiskan).", ar: "قِيلَ" }
    ] },

    { t: "judul", id: "Hukum Alif dari Segi Tafkhim dan Tarqiq", ar: "أولًا: حكم الألف" },
    { t: "poin", item: [
      { ikon: "ear", judul: { id: "Alif mengikuti huruf sebelumnya", ar: "الألف تتبع ما قبلها" }, id: "Alif layyinah (madd) **tidak ditebalkan dan tidak ditipiskan sendiri**, tetapi mengikuti huruf sebelumnya: setelah huruf tebal ia ditebalkan ({الصَّاخَّةُ}), setelah huruf tipis ia ditipiskan ({الْكِتَابُ}). Sebabnya alif tidak memiliki kerja anggota ucap sendiri sehingga bisa disifati tebal atau tipis.", ar: "الألف اللينة لا تتصف بترقيق ولا تفخيم ولكنها تتبع ما قبلها؛ لأن الألف ليس فيه عمل عضو أصلًا." },
      { ikon: "scale", judul: { id: "Kebalikan ghunnah", ar: "العكس في الغنة" }, id: "Ghunnah mengikuti huruf **sesudahnya**, sedangkan alif mengikuti huruf **sebelumnya**.", ar: "وَتَتبَع مَا قَبْلَهَا الأَلِف ..... وَالعَكْسُ فِي الغُنّ أُلِف" },
      { ikon: "check", judul: { id: "Ya madd selalu tipis", ar: "الياء المدية" }, id: "Ya madd selalu tipis berdasarkan kesepakatan.", ar: "الياء المدية دائمًا مرققة باتفاق." },
      { ikon: "ink", judul: { id: "Waw madd menurut Al-Mar'asyi", ar: "الواو المدية عند المرعشي" }, id: "Beliau berpendapat waw madd ikut huruf sebelumnya; waw madd setelah huruf tebal ditebalkan, seperti {وَٱلطُّورِ}، {ٱلصُّورِ}، {قُوا أَنفُسَكُمْ}, karena menipiskannya tidak mungkin kecuali dengan menggerakkan tengah lidah ke arah langit-langit.", ar: "ويرى المرعشي أن الواو المدية تفخم بعد الحرف المفخم." },
      { ikon: "bolt", judul: { id: "Alif setelah huruf tipis", ar: "الألف بعد المرقق" }, id: "Contoh alif setelah huruf tipis: {تِجَارَةٍ}، {الْقَهَّارِ}، {حَافِظُوا}. Hamzah di awal kata dilafalkan lembut, tidak ditebalkan, misalnya {الْحَمْدُ} (Ibnul Jazari).", ar: "كمجاورة الجيم والهاء والحاء للألف، والهمزة يتحفظ من تغليظ النطق بها." }
    ] },

    { t: "judul", id: "Hukum Lam dari Segi Tafkhim dan Tarqiq", ar: "ثانيًا: حكم اللام" },
    { t: "p", id: "Lam di Al-Qur'an ada yang **sukun** (hukumnya berputar antara izhhar dan idgham, sudah dijelaskan di bab lam sukun) dan ada yang **berharakat** (hukumnya antara tafkhim dan tarqiq). **Asalnya lam ditipiskan** karena termasuk huruf istifal, baik berfathah ({لَكُمْ}), berkasrah ({لِلْمُتَّقِينَ}), maupun berdhammah ({قُلُوبُهُمْ}).", ar: "اللامات إما ساكنة وإما متحركة؛ فالساكنة دائرة بين الإظهار والإدغام، والمتحركة بين التفخيم والترقيق، والأصل فيها الترقيق لأنها من حروف الاستفال." },
    { t: "banding", judul: { id: "Lam lafzhul jalalah ({ٱللَّهِ}, {ٱللَّهُمَّ}) — pengecualian dari asal", ar: "لام لفظ الجلالة" },
      kiri: { judul: { id: "Tafkhim", ar: "التفخيم" }, ikon: "sun", warna: "green", poin: [
        { id: "Setelah **fathah**: {قَالَ ٱللَّهُ}، {رَسُولُ ٱللَّهِ}", ar: "بعد فتح" },
        { id: "Setelah **dhammah**: {عَبْدُ ٱللَّهِ}، {قَالُوا ٱللَّهُمَّ}", ar: "بعد ضم" },
        { id: "Saat **memulai** dengannya: {ٱللَّهُ نُورُ ٱلسَّمَاوَاتِ وَٱلْأَرْضِ}", ar: "إذا ابتدأ بها" }
      ] },
      kanan: { judul: { id: "Tarqiq (mutlak)", ar: "الترقيق" }, ikon: "moon", warna: "blue", poin: [
        { id: "Hanya satu keadaan: **setelah kasrah** — baik kasrah menyambung ({لِلَّهِ}), terpisah ({قُلِ ٱللَّهُمَّ}), asli ({بِسْمِ ٱللَّهِ}), 'aridh, atau tanwin ({أَحَدٌ ٱللَّهُ} — tanwin dikasrahkan).", ar: "في حالة واحدة: إذا وقعت بعد كسر، متصلة أو منفصلة، أصلية أو عارضة أو تنوين." },
        { id: "Maka {بِسْمِ ٱللَّهِ} dibaca dengan lam tipis karena mim sebelumnya berkasrah.", ar: "بسم الله: ترقق لأن الميم مكسورة." }
      ] } },
    { t: "kutipan", ar: "وَفَخِّمِ اللاَّمَ مِنِ اسْمِ اللَّهِ ..... عَنْ فَتْحٍ اوْ ضَمٍّ كَعبْدُ اللَّهِ", id: "Tebalkan lam dari lafzhul jalalah bila datang setelah fathah atau dhammah, seperti *'abdullah*.", oleh: { id: "Ibnul Jazari", ar: "الإمام ابن الجزري رحمه الله" } },

    { t: "judul", id: "Hukum Ra dari Segi Tafkhim dan Tarqiq", ar: "ثالثًا: حكم الراء" },
    { t: "p", id: "Ra memiliki tiga keadaan: **selalu tebal**, **selalu tipis**, atau **ditentukan oleh keadaannya** (dua wajah pada kata tertentu saat waqaf). Ibnul Jazari merangkum kaidah tarqiq dalam nazham: ra ditipiskan bila berkasrah; juga bila sukun setelah kasrah, selama tidak sebelum huruf isti'la dan kasrah itu asli; dan khilaf pada *firq*; serta tidak ditonjolkan takrirnya bila bertasydid.", ar: "الراء لها ثلاث حالات: تفخم دائمًا أو ترقق دائمًا أو يُحكم عليها بين التفخيم والترقيق." },
    { t: "kutipan", ar: "وَرَقِّقِ الرَّاءَ إِذَا مَا كُسِرَتْ ...... كَذَاكَ بَعْدَ الْكَسْرِ حَيْثُ سَكَنَتْ إِنْ لَمْ تَكُنْ مِنْ قَبْلِ حَرْفِ اسْتِعْلاَ ..... أَوْ كَانَتِ الْكَسْرَةُ لَيْسَتْ أَصْلاَ وَالْخُلْفُ فِي فِرْقٍ لِكَسْرٍ يُوجَدُ ...... وَأَخْفِ تَكْرِيرًا إِذَا تُشَدَّدُ", id: "Tipiskan ra bila berkasrah, dan begitu pula bila sukun setelah kasrah — asalkan tidak sebelum huruf isti'la dan kasrahnya asli; ada khilaf pada *firq*; dan sembunyikan takrir bila ra bertasydid.", oleh: { id: "Ibnul Jazari", ar: "الإمام ابن الجزري رحمه الله" } },
    { t: "tabel", judul: { id: "Delapan keadaan ra TAFKHIM", ar: "حالات تفخيم الراء الثمان" }, kolom: [{ id: "No", ar: "الحالة" }, { id: "Keadaan", ar: "الضابط" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1", ar: "١" }, { id: "Ra berfathah", ar: "مفتوحة" }, { id: "{رَمَضَانَ}، {أَتْرَابًا}، {غَفَرَ} (washl)", ar: "رمضان، أترابا" }],
      [{ id: "2", ar: "٢" }, { id: "Ra sukun setelah fathah", ar: "ساكنة وقبلها مفتوح" }, { id: "{مَرْيَمَ}، {الْأَرْضِ}، {خَرْدَلٍ}; waqaf: {كَفَرْ}", ar: "مريم، الأرض، خردل" }],
      [{ id: "3", ar: "٣" }, { id: "Ra sukun karena waqaf, sebelumnya sukun (bukan ya), sebelum sukun itu fathah", ar: "ساكنة للوقف وقبلها ساكن غير الياء وقبله مفتوح" }, { id: "{الْحَشْرْ}، {الْعَصْرْ}، {الْفَجْرْ}، {النَّارْ} (di washl: kasrah, tipis; di waqaf: tebal)", ar: "الحشر، العصر، الفجر، النار" }],
      [{ id: "4", ar: "٤" }, { id: "Ra berdhammah", ar: "مضمومة" }, { id: "{رُزِقُوا}، {بُرُوجًا}، {عُرُبًا}; waqaf dengan raum atau sukun pada {نَحْشُرُ}، {الْأَشِرُ}", ar: "رزقوا، بروجا، عربا" }],
      [{ id: "5", ar: "٥" }, { id: "Ra sukun setelah dhammah", ar: "ساكنة وقبلها مضموم" }, { id: "{الْقُرْآنُ}، {مُرْشِدًا}، {يَشْكُرْ}", ar: "القرآن، مرشدا، يشكر" }],
      [{ id: "6", ar: "٦" }, { id: "Ra sukun karena waqaf, sebelumnya sukun (bukan ya), sebelumnya lagi dhammah", ar: "ساكنة للوقف وقبلها ساكن غير الياء وقبله مضموم" }, { id: "{خُسْرٍ}، {حُورٌ}، {الْقُبُورِ}", ar: "خسر، حور، القبور" }],
      [{ id: "7", ar: "٧" }, { id: "Ra sukun asli setelah kasrah asli, diikuti huruf isti'la berfathah", ar: "ساكنة بعد كسر أصلي وبعدها حرف استعلاء مفتوح" }, { id: "{فِرْقَةٍ}، {قِرْطَاسٍ}، {إِرْصَادًا}، {مِرْصَادًا}، {لَبِالْمِرْصَادِ}", ar: "فرقة، قرطاس، إرصادا، مرصادا" }],
      [{ id: "8", ar: "٨" }, { id: "Ra sukun asli setelah hamzah washl yang didahului kasrah (asli terpisah, atau 'aridh terpisah/menyambung)", ar: "ساكنة بعد همزة وصل قبلها كسر" }, { id: "{الَّذِي ارْتَضَىٰ}، {رَبِّ ارْحَمْهُمَا}، {إِنِ ارْتَبْتُمْ}، {أَمِ ارْتَابُوا}، {ارْجِعِي}، {ارْكَعُوا}", ar: "الذي ارتضى، رب ارحمهما، إن ارتبتم، ارجعي، اركعوا" }]
    ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Kasrah asli vs kasrah 'aridh", ar: "الكسر الأصلي والعارض" }, id: "**Kasrah asli:** huruf itu sendiri memang berkasrah pada asal katanya. **Kasrah 'aridh:** harakat yang didatangkan untuk menghindari dua sukun atau untuk menggerakkan huruf. Karena itu ra pada {ٱرْجِعِي}، {ٱرْكَعُوا} tidak ditipiskan — kasrah di depannya hanya 'aridh. Pada {فِرْقَةٍ} dan {مِرْصَادًا}, penghalang tarqiq adalah huruf isti'la sesudah ra (qaf, shad).", ar: "الكسر الأصلي هو أن يكون الحرف في ذاته مكسورًا، والعارض حركة نأتي بها للتخلص من الساكنين أو لتحريك الحرف." },
    { t: "tabel", judul: { id: "Enam keadaan ra TARQIQ", ar: "حالات ترقيق الراء الست" }, kolom: [{ id: "No", ar: "الحالة" }, { id: "Keadaan", ar: "الضابط" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1", ar: "١" }, { id: "Ra berkasrah (awal, tengah, atau akhir kata saat washl); termasuk kasrah 'aridh karena dua sukun", ar: "مكسورة أول الكلمة أو وسطها أو آخرها وصلًا" }, { id: "{رِجَالٌ}، {رِيحٌ}، {كَرِيمٌ}، {وَٱلْفَجْرِ وَلَيَالٍ}; {وَٱذْكُرِ ٱسْمَ رَبِّكَ}، {وَذَرِ ٱلَّذِينَ}", ar: "رجال، ريح، كريم، واذكر اسم ربك" }],
      [{ id: "2", ar: "٢" }, { id: "Ra sukun asli di tengah kata setelah kasrah asli tanpa huruf isti'la sesudahnya; atau di akhir kata setelah kasrah lalu huruf istifal / isti'la berfathah; atau sukun 'aridh karena waqaf setelah kasrah", ar: "ساكنة سكونًا أصليًا وسط الكلمة وقبلها كسر أصلي وليس بعدها استعلاء" }, { id: "{فِرْعَوْنَ}، {شِرْعَةً}، {الْفِرْدَوْسَ}، {مِرْفَقًا}; {رَبِّ ٱغْفِرْ لِي}; {فَٱصْبِرْ صَبْرًا جَمِيلًا}، {وَلَا تُصَعِّرْ خَدَّكَ}، {أَنْ أَنذِرْ قَوْمَكَ}; waqaf: {مُنتَشِرْ}، {نُقِرْ}", ar: "فرعون، شرعة، الفردوس، مرفقا" }],
      [{ id: "3", ar: "٣" }, { id: "Ra sukun karena waqaf setelah sukun istifal yang didahului kasrah, dalam satu kata", ar: "ساكنة للوقف وقبلها ساكن مستفل قبله كسر" }, { id: "{حِجْرْ}، {السِّحْرْ}", ar: "حجر، السحر" }],
      [{ id: "4", ar: "٤" }, { id: "Ra sukun setelah ya madd atau ya layyinah (saat waqaf)", ar: "ساكنة وقبلها ياء مدية أو لينة" }, { id: "{قَدِيرْ}، {بَشِيرْ}، {خَيْرْ}، {غَيْرْ}، {ضَيْرْ}", ar: "قدير، بشير، خير، غير، ضير" }],
      [{ id: "5", ar: "٥" }, { id: "Ra yang diimalahkan — hanya satu kata menurut Hafsh", ar: "الراء الممالة" }, { id: "{مَجْرَىٰهَا} (Hud: 41)", ar: "مجراها بسورة هود" }],
      [{ id: "6", ar: "٦" }, { id: "Ra berkasrah saat washl lalu diwaqafi dengan **raum**", ar: "المكسورة وصلًا الموقوف عليها بوجه الروم" }, { id: "{وَٱلْعَصْرِ}، {ٱلصُّورِ} — dibaca dengan sedikit kasrah yang terdengar oleh yang dekat", ar: "والعصر، الصور" }]
    ] },
    { t: "cek", q: { id: "Ra pada {ٱرْكَعُوا} (didahului hamzah washl yang dikasrah 'aridh) dibaca…", ar: "الراء في {ٱرْكَعُوا} تقرأ…" }, o: [{ id: "Tipis karena setelah kasrah", ar: "مرققة لوقوعها بعد كسر" }, { id: "Tebal karena kasrahnya 'aridh", ar: "مفخمة لأن الكسر عارض" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Diimalahkan", ar: "ممالة" }], j: 1, b: { id: "Kasrah di depannya 'aridh, maka ra ditebalkan (kasus 8 tafkhim).", ar: "تفخم لأن الكسرة عارضة." } },
    { t: "cek", q: { id: "Ra pada {فِرْعَوْنَ} dibaca…", ar: "الراء في {فِرْعَوْنَ}…" }, o: [{ id: "Tebal", ar: "مفخمة" }, { id: "Tipis, karena sukun setelah kasrah asli dan tanpa isti'la sesudahnya", ar: "مرققة" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Imalah", ar: "إمالة" }], j: 1, b: { id: "Sukun asli di tengah kata setelah kasrah asli, sesudahnya 'ain (istifal): tarqiq.", ar: "العين مستفلة فترقق." } },

    { t: "judul", id: "Ra yang Diwaqafi dengan Sukun: Dua Wajah", ar: "الراء الموقوف عليها بالسكون: جواز الوجهين" },
    { t: "p", id: "Pada beberapa kata, ra yang diwaqafi dengan sukun boleh **ditebalkan atau ditipiskan**. Kelompok pertama: **tarqiq lebih utama** (karena ra berkasrah saat washl).", ar: "أولًا: الراء الموقوف عليها بالسكون وجواز الترقيق والتفخيم فيها لكن الترقيق أولى." },
    { t: "poin", item: [
      { ikon: "route", judul: { id: "{فِرْقٍ} (Asy-Syu'ara': 63)", ar: "فِرْقٍ" }, id: "Ra sukun di tengah kata setelah kasrah asli dan diikuti qaf berkasrah. Menebalkan: karena ra sukun diikuti huruf isti'la. Menipiskan: karena ada kasrah di depannya, dan qaf (isti'la) lemah karena berkasrah — sehingga ra berada di antara dua kasrah. Ad-Dani: kedua wajah baik; yang dipakai adalah **tarqiq** (dikutip An-Nuwairi dalam Syarh ath-Thayyibah). Berlaku washl dan waqaf: {كُلُّ فِرْقٍ كَالطَّوْدِ الْعَظِيمِ}.", ar: "اختلف أهل الأداء في تفخيم راء فرق؛ ومن قال بالترقيق نظر إلى وجود كسرة قبلها مع ضعف قوة حرف الاستعلاء القاف لكونه مكسورًا. قال الداني: والوجهان جيدان والمأخوذ به الترقيق." },
      { ikon: "route", judul: { id: "{وَنُذُرِ} (enam tempat dalam Al-Qamar)", ar: "وَنُذُرِ" }, id: "Boleh tarqiq karena ya yang dibuang di akhir (asalnya *wa nudzurii*), dan boleh tafkhim karena dhammah sebelum ra. **Tarqiq lebih utama**: ra berkasrah saat washl.", ar: "يجوز ترقيق الراء نظرًا للياء المحذوفة في آخر الكلمة ويجوز تفخيمها نظرًا للضمة التي تسبقها والترقيق أولى." },
      { ikon: "route", judul: { id: "{يَسْرِ} (Al-Fajr: 4)", ar: "يَسْرِ" }, id: "Tafkhim karena fathah sebelum sin sukun; tarqiq karena ya yang dibuang (asalnya *yasrii*). **Tarqiq lebih utama**.", ar: "يجوز تفخيم راء يسر للفتحة ويجوز ترقيقها للياء المحذوفة والترقيق أولى." },
      { ikon: "route", judul: { id: "{فَأَسْرِ} (Hud, Al-Hijr, Ad-Dukhan) dan {أَنْ أَسْرِ} (Thaha, Asy-Syu'ara')", ar: "فَأَسْرِ / أَنْ أَسْرِ" }, id: "Fi'il amr yang mabni dengan membuang huruf 'illat (ya). Yang menipiskan melihat pada asal (ya yang dibuang) dan pada washl (kasrah), sehingga waqaf diperlakukan seperti washl. Yang menebalkan tidak melihat asal maupun washl, melainkan mengikuti keadaan baru yaitu waqaf dengan sukun, dan sebelumnya sukun yang sebelumnya fathah. Tarqiq lebih utama; sebagian ulama mengunggulkan tafkhim saja pada waqaf berdasarkan kaidah dasar ra waqaf setelah fathah/dhammah.", ar: "فمن رققها نظر إلى الأصل وإلى الوصل فأجرى الوقف مجرى الوصل، ومن فخمها اعتد بالعارض وهو الوقف بالسكون، وبعض العلماء رجح التفخيم قولًا واحدًا عند الوقف." },
      { ikon: "route", judul: { id: "{الْقِطْرِ} (Saba': 12)", ar: "الْقِطْرِ" }, id: "Ra sukun saat waqaf, sebelumnya huruf isti'la sukun (tha), sebelum itu kasrah. Yang menipiskan melihat kasrah di washl dan kasrah sebelum sukun isti'la; yang menebalkan mengikuti waqaf dan menganggap tha penghalang tarqiq. **Ibnul Jazari memilih tarqiq** karena ra berkasrah saat washl.", ar: "واختار ابن الجزري الترقيق فيها وقفًا لأنها مكسورة." }
    ] },
    { t: "banding", judul: { id: "{مِصْرَ}: tafkhim lebih utama", ar: "ثانيًا: ما كان فيه التفخيم أولى" },
      kiri: { judul: { id: "Yang menebalkan", ar: "من فخمها" }, ikon: "mosque", warna: "green", poin: [
        { id: "Melihat ra yang **berfathah saat washl** ({مِصْرَ}), dan menganggap huruf isti'la (shad) sebagai penghalang kokoh bagi tarqiq.", ar: "نظر إلى الراء المفتوحة في الوصل واعتبر حرف الاستعلاء حاجزًا حصينًا مانعًا من الترقيق." },
        { id: "**Ibnul Jazari memilih tafkhim**.", ar: "اختار ابن الجزري فيها التفخيم." }
      ] },
      kanan: { judul: { id: "Yang menipiskan", ar: "من رققها" }, ikon: "leaf", warna: "blue", poin: [
        { id: "Tidak melihat keadaan washl; mengikuti waqaf (sukun), dan menganggap kasrah sebelum huruf isti'la sukun mewajibkan tarqiq.", ar: "لم ينظر إلى حالتها في الوصل واعتد بالعارض وهو الوقف." }
      ] } },
    { t: "catatan", gaya: "soal", judul: { id: "Soal ulangan", ar: "سؤال" }, id: "Mengapa tafkhim lebih utama pada {مِصْرَ} sedangkan tarqiq lebih utama pada {الْقِطْرِ}? **Jawab:** pada {مِصْرَ} ra berfathah saat washl (maka tebal), sedangkan pada {الْقِطْرِ} ra berkasrah saat washl (maka tipis); waqaf mengikuti washl pada pendapat yang diutamakan.", ar: "لأن {مِصْرَ} مفتوحة في الوصل و{الْقِطْرِ} مكسورة في الوصل." },
    { t: "tanya", q: { id: "Apa perbedaan kasrah asli dan kasrah 'aridh?", ar: "ما الفرق بين الكسر الأصلي والعارض؟" }, a: { id: "Kasrah asli: huruf itu sendiri berkasrah dalam asal katanya. Kasrah 'aridh: harakat yang didatangkan untuk menghindari dua sukun atau untuk menggerakkan huruf; ia tidak mengubah ra menjadi tipis.", ar: "الكسر الأصلي هو أن يكون حرف ذاته مكسورًا، أما العارض فحركة نأتي بها للتخلص من الساكنين أو لتحريك الحرف." } },
    { t: "tanya", q: { id: "Apa bedanya alif dan ghunnah dalam mengikuti huruf lain?", ar: "ما الفرق بين الألف والغنة في التبعية؟" }, a: { id: "Alif mengikuti huruf **sebelumnya** (tebal jika sebelumnya tebal, tipis jika tipis), sedangkan ghunnah mengikuti huruf **sesudahnya**.", ar: "الألف تتبع ما قبلها، والغنة تابعة لما بعدها." } },
    { t: "balik", judul: { id: "Kartu kilat tafkhim-tarqiq", ar: "بطاقات" }, item: [
      { depan: { id: "Huruf tafkhim", ar: "حروف التفخيم" }, belakang: { id: "خ ص ض غ ط ق ظ", ar: "خص ضغط قظ" } },
      { depan: { id: "Huruf tiga keadaan", ar: "الدائرة" }, belakang: { id: "Alif, lam lafzhul jalalah, ra", ar: "الألف واللام والراء" } },
      { depan: { id: "Lam jalalah setelah kasrah", ar: "لام الجلالة بعد كسر" }, belakang: { id: "Tarqiq", ar: "الترقيق" } },
      { depan: { id: "Lam jalalah setelah fathah/dhammah/awal", ar: "بعد فتح أو ضم" }, belakang: { id: "Tafkhim", ar: "التفخيم" } },
      { depan: { id: "{مِصْرَ} saat waqaf", ar: "مصر" }, belakang: { id: "Dua wajah; tafkhim lebih utama (pilihan Ibnul Jazari)", ar: "الوجهان والتفخيم أولى" } },
      { depan: { id: "{الْقِطْرِ} saat waqaf", ar: "القطر" }, belakang: { id: "Dua wajah; tarqiq lebih utama (pilihan Ibnul Jazari)", ar: "الوجهان والترقيق أولى" } }
    ] },
    { t: "ringkasan", item: [
      { id: "Tafkhim = menebalkan, mulut terpenuhi gema huruf; tarqiq = menipiskan. Tujuh huruf tafkhim: خص ضغط قظ.", ar: "التفخيم سِمَن يدخل على الحرف والترقيق نحول." },
      { id: "Urutan kekuatan: tha, dhad, shad, zha, qaf, ghain, kha.", ar: "الطاء ثم الضاد ثم الصاد ثم الظاء ثم القاف ثم الغين ثم الخاء." },
      { id: "Ibnul Jazari: lima tingkat (fathah+alif, fathah, dhammah, sukun, kasrah); ada pendapat Ibnu ath-Thahhan (tiga) dan Al-Mutawalli (lima).", ar: "مراتب التفخيم خمس عند ابن الجزري وثلاث عند ابن الطحان." },
      { id: "Tafkhim nisbi: qaf/ghain/kha berkasrah atau sukun setelah kasrah; kha sukun+ra ditebalkan kuat.", ar: "التفخيم النسبي." },
      { id: "Alif mengikuti huruf sebelumnya; ya madd selalu tipis; lam jalalah tebal setelah fathah/dhammah dan tipis setelah kasrah.", ar: "الألف تتبع ما قبلها واللام تفخم بعد الفتح والضم وترقق بعد الكسر." },
      { id: "Ra: delapan keadaan tafkhim, enam keadaan tarqiq, dan lima kata waqaf dengan dua wajah ({فِرْقٍ}، {وَنُذُرِ}، {يَسْرِ}، {أَسْرِ}، {الْقِطْرِ}) serta {مِصْرَ} yang tafkhim lebih utama.", ar: "حالات تفخيم الراء ثمان وترقيقها ست." }
    ] }
  ],
  istilah: [
    { ar: "التفخيم", latin: "at-tafkhim", id: "Menebalkan huruf", def: { id: "Kegemukan/kekuatan pada bunyi huruf sehingga mulut penuh gema.", ar: "سمن يدخل على صوت الحرف فيمتلئ الفم بصداه." } },
    { ar: "الترقيق", latin: "at-tarqiq", id: "Menipiskan huruf", def: { id: "Kelangsingan pada bunyi huruf sehingga mulut tidak penuh gema.", ar: "نحول يدخل على صوت الحرف." } },
    { ar: "حروف الاستعلاء", latin: "huruf al-isti'la'", id: "Huruf isti'la", def: { id: "Tujuh huruf yang pangkal lidahnya naik ke langit-langit: خص ضغط قظ.", ar: "خ ص ض غ ط ق ظ" } },
    { ar: "حروف الاستفال", latin: "huruf al-istifal", id: "Huruf istifal", def: { id: "Huruf selain isti'la; ditipiskan.", ar: "باقي الحروف." } },
    { ar: "التفخيم النسبي", latin: "at-tafkhim an-nisbi", id: "Tafkhim relatif", def: { id: "Tebal pada derajat terendah: qaf/ghain/kha berkasrah atau sukun setelah kasrah.", ar: "أدنى درجات التفخيم." } },
    { ar: "الكسر العارض", latin: "al-kasr al-'aridh", id: "Kasrah 'aridh", def: { id: "Kasrah yang datang untuk menghindari dua sukun atau memulai.", ar: "حركة للتخلص من الساكنين." } },
    { ar: "همزة الوصل", latin: "hamzat al-washl", id: "Hamzah washl", def: { id: "Hamzah yang diucapkan saat memulai dan gugur saat bersambung.", ar: "تثبت ابتداءً وتسقط درجًا." } },
    { ar: "لام لفظ الجلالة", latin: "lam lafzh al-jalalah", id: "Lam pada lafzhul jalalah", def: { id: "Tebal setelah fathah/dhammah, tipis setelah kasrah.", ar: "تفخم بعد فتح أو ضم وترقق بعد كسر." } },
    { ar: "الإمالة", latin: "al-imalah", id: "Imalah", def: { id: "Kasrah-an fathah menuju ya; Hafsh hanya pada {مَجْرَىٰهَا}.", ar: "إمالة الفتحة نحو الكسرة." } },
    { ar: "الروم", latin: "ar-raum", id: "Raum", def: { id: "Mengucapkan sebagian harakat saat waqaf dengan suara lirih.", ar: "الإتيان بثلثي الحركة." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Huruf yang selalu ditebalkan adalah…", ar: "الحروف التي تفخم دائمًا…" }, o: [{ id: "Alif, lam, ra", ar: "الألف واللام والراء" }, { id: "خ ص ض غ ط ق ظ", ar: "خص ضغط قظ" }, { id: "ب ت ث", ar: "ب ت ث" }, { id: "ح ع ه", ar: "ح ع ه" }], j: 1, b: { id: "Tujuh huruf isti'la.", ar: "حروف الاستعلاء السبعة." } },
      { q: { id: "Huruf tafkhim yang terkuat adalah…", ar: "أقوى حروف التفخيم…" }, o: [{ id: "Kha", ar: "الخاء" }, { id: "Dhad", ar: "الضاد" }, { id: "Tha", ar: "الطاء" }, { id: "Qaf", ar: "القاف" }], j: 2, b: { id: "Tha huruf paling kuat.", ar: "الطاء أقوى الحروف." } },
      { q: { id: "Tingkat tafkhim pertama (terkuat) menurut Ibnul Jazari adalah huruf isti'la yang…", ar: "المرتبة الأولى عند ابن الجزري…" }, o: [{ id: "Berkasrah", ar: "مكسور" }, { id: "Sukun", ar: "ساكن" }, { id: "Berdhammah", ar: "مضموم" }, { id: "Berfathah diikuti alif", ar: "مفتوح بعده ألف" }], j: 3, b: { id: "Contoh {قَالَ}، {طَالَ}.", ar: "قال، طال." } },
      { q: { id: "{قِيلَ} termasuk…", ar: "{قِيلَ} من…" }, o: [{ id: "Tafkhim kuat", ar: "التفخيم القوي" }, { id: "Tafkhim nisbi", ar: "التفخيم النسبي" }, { id: "Tarqiq penuh", ar: "الترقيق" }, { id: "Imalah", ar: "الإمالة" }], j: 1, b: { id: "Qaf berkasrah — tafkhim nisbi, bukan tarqiq.", ar: "القاف المكسورة تفخيمها نسبي." } },
      { q: { id: "Alif dalam {الصَّاخَّةُ} dibaca…", ar: "الألف في {الصَّاخَّةُ}…" }, o: [{ id: "Tipis", ar: "مرققة" }, { id: "Tebal karena mengikuti shad", ar: "مفخمة لأنها تتبع ما قبلها" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Imalah", ar: "ممالة" }], j: 1, b: { id: "Alif mengikuti huruf sebelumnya.", ar: "تتبع ما قبلها." } },
      { q: { id: "Lam pada {بِسْمِ ٱللَّهِ} dibaca…", ar: "لام {بِسْمِ ٱللَّهِ}…" }, o: [{ id: "Tebal", ar: "مفخمة" }, { id: "Tipis karena setelah kasrah", ar: "مرققة لأنها بعد كسر" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Idgham", ar: "إدغام" }], j: 1, b: { id: "Mim berkasrah sebelum lafzhul jalalah.", ar: "الميم مكسورة." } },
      { q: { id: "Lam pada {عَبْدُ ٱللَّهِ} dibaca…", ar: "لام {عَبْدُ ٱللَّهِ}…" }, o: [{ id: "Tipis", ar: "مرققة" }, { id: "Idgham", ar: "إدغام" }, { id: "Tebal karena setelah dhammah", ar: "مفخمة لأنها بعد ضم" }, { id: "Samar", ar: "إخفاء" }], j: 2, b: { id: "Setelah dhammah: tafkhim.", ar: "بعد ضم." } },
      { q: { id: "Ra pada {مَرْيَمَ} dibaca…", ar: "الراء في {مَرْيَمَ}…" }, o: [{ id: "Tipis", ar: "مرققة" }, { id: "Tebal, sukun setelah fathah", ar: "مفخمة" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Imalah", ar: "إمالة" }], j: 1, b: { id: "Keadaan kedua tafkhim.", ar: "ساكنة وقبلها مفتوح." } },
      { q: { id: "Ra pada {مِرْصَادًا} ditebalkan karena…", ar: "تفخم راء {مِرْصَادًا} لـ…" }, o: [{ id: "Kasrah asli", ar: "الكسر الأصلي" }, { id: "Huruf isti'la (shad) sesudahnya", ar: "حرف الاستعلاء بعدها" }, { id: "Ya madd", ar: "ياء مدية" }, { id: "Waqaf", ar: "الوقف" }], j: 1, b: { id: "Huruf isti'la setelah ra sukun mencegah tarqiq.", ar: "حرف الاستعلاء يمنع الترقيق." } },
      { q: { id: "Ra pada {شِرْعَةً} dibaca…", ar: "الراء في {شِرْعَةً}…" }, o: [{ id: "Tipis", ar: "مرققة" }, { id: "Tebal", ar: "مفخمة" }, { id: "Dua wajah", ar: "وجهان" }, { id: "Imalah", ar: "إمالة" }], j: 0, b: { id: "Sukun setelah kasrah asli, tanpa huruf isti'la sesudahnya.", ar: "بعدها عين وهي مستفلة." } },
      { q: { id: "Kata yang diimalahkan oleh Hafsh di tema ra tarqiq adalah…", ar: "الكلمة الممالة عند حفص…" }, o: [{ id: "{مَجْرَىٰهَا}", ar: "مَجْرَاهَا" }, { id: "{فِرْقٍ}", ar: "فِرْقٍ" }, { id: "{مِصْرَ}", ar: "مِصْرَ" }, { id: "{يَسْرِ}", ar: "يَسْرِ" }], j: 0, b: { id: "Satu-satunya kata dengan imalah menurut Hafsh.", ar: "كلمة واحدة في القرآن." } },
      { q: { id: "Pilihan Ibnul Jazari pada {مِصْرَ} saat waqaf adalah…", ar: "اختيار ابن الجزري في {مِصْرَ}…" }, o: [{ id: "Tarqiq", ar: "الترقيق" }, { id: "Tafkhim", ar: "التفخيم" }, { id: "Imalah", ar: "الإمالة" }, { id: "Isymam", ar: "الإشمام" }], j: 1, b: { id: "Tafkhim karena ra berfathah saat washl.", ar: "نقول: مِصْرَ." } }
    ],
    bs: [
      { t: { id: "Huruf isti'la tidak pernah ditipiskan.", ar: "أحرف الاستعلاء لا ترقق أبدًا." }, j: true },
      { t: { id: "Tafkhim nisbi berarti huruf isti'la itu ditipiskan.", ar: "التفخيم النسبي ترقيق." }, j: false, b: { id: "Ia tetap tebal, hanya dengan derajat terendah.", ar: "فخيمة قطعًا." } },
      { t: { id: "Alif mengikuti huruf sebelumnya dalam tafkhim dan tarqiq.", ar: "الألف تتبع ما قبلها." }, j: true },
      { t: { id: "Ya madd terkadang ditebalkan.", ar: "الياء المدية قد تفخم." }, j: false, b: { id: "Ya madd selalu tipis berdasarkan kesepakatan.", ar: "مرققة باتفاق." } },
      { t: { id: "Lam jalalah setelah kasrah ditipiskan.", ar: "لام الجلالة بعد الكسر ترقق." }, j: true },
      { t: { id: "Pada {أَحَدٌ ٱللَّهُ} lam jalalah ditebalkan karena didahului tanwin.", ar: "تفخم لام الجلالة بعد التنوين." }, j: false, b: { id: "Tanwin dikasrahkan, sehingga lam ditipiskan.", ar: "التنوين يكسر فترقق." } },
      { t: { id: "Ra pada {الْقُرْآنُ} ditebalkan karena sukun setelah dhammah.", ar: "تفخم راء القرآن." }, j: true },
      { t: { id: "Ra pada {قَدِيرْ} saat waqaf ditebalkan.", ar: "تفخم راء قدير وقفًا." }, j: false, b: { id: "Ra sukun setelah ya madd: tarqiq.", ar: "بعد ياء مدية ترقق." } },
      { t: { id: "Ra pada {فِرْقٍ} boleh ditebalkan atau ditipiskan, tarqiq lebih utama.", ar: "في فرق وجهان والترقيق أولى." }, j: true },
      { t: { id: "Ibnul Jazari memilih tarqiq pada {مِصْرَ}.", ar: "اختار ابن الجزري الترقيق في مصر." }, j: false, b: { id: "Beliau memilih tafkhim.", ar: "اختار التفخيم." } }
    ],
    jodoh: [
      { a: { id: "{قَالَ}", ar: "قال" }, b: { id: "Tafkhim tingkat 1", ar: "المرتبة الأولى" } },
      { a: { id: "{يَقُولُ}", ar: "يقول" }, b: { id: "Tafkhim tingkat 3 (dhammah)", ar: "المرتبة الثالثة" } },
      { a: { id: "{قِيلَ}", ar: "قيل" }, b: { id: "Tafkhim nisbi", ar: "التفخيم النسبي" } },
      { a: { id: "{عَبْدُ ٱللَّهِ}", ar: "عبد الله" }, b: { id: "Lam tebal", ar: "اللام مفخمة" } },
      { a: { id: "{فِرْعَوْنَ}", ar: "فرعون" }, b: { id: "Ra tipis", ar: "ترقيق" } },
      { a: { id: "{مَرْيَمَ}", ar: "مريم" }, b: { id: "Ra tebal", ar: "تفخيم" } },
      { a: { id: "{وَنُذُرِ}", ar: "ونذر" }, b: { id: "Dua wajah saat waqaf", ar: "وجهان" } },
      { a: { id: "{إِخْرَاجًا}", ar: "إخراجا" }, b: { id: "Kha ditebalkan kuat", ar: "تفخيم قوي" } }
    ],
    isian: [
      { t: { id: "Tujuh huruf tafkhim terkumpul dalam ______ ضغط قظ.", ar: "حروف التفخيم ______ ضغط قظ." }, j: { id: "خص", ar: "خص" }, x: [{ id: "حص", ar: "حص" }, { id: "جص", ar: "جص" }, { id: "عص", ar: "عص" }] },
      { t: { id: "Huruf yang terlemah tafkhimnya karena bersifat hams adalah ______.", ar: "أضعف حروف التفخيم لاتصافها بالهمس: ______." }, j: { id: "kha", ar: "الخاء" }, x: [{ id: "tha", ar: "الطاء" }, { id: "dhad", ar: "الضاد" }, { id: "shad", ar: "الصاد" }] },
      { t: { id: "Ghunnah mengikuti huruf sesudahnya, sedangkan alif mengikuti huruf ______.", ar: "الغنة تتبع ما بعدها والألف تتبع ______." }, j: { id: "sebelumnya", ar: "ما قبلها" }, x: [{ id: "sesudahnya", ar: "ما بعدها" }, { id: "terjauh", ar: "الأبعد" }, { id: "tengah", ar: "الوسط" }] },
      { t: { id: "Ra sukun setelah kasrah asli yang diikuti huruf isti'la berfathah ______ (tafkhim/tarqiq), seperti {فِرْقَةٍ}.", ar: "راء {فِرْقَةٍ}: ______." }, j: { id: "tafkhim", ar: "تفخيم" }, x: [{ id: "tarqiq", ar: "ترقيق" }, { id: "idgham", ar: "إدغام" }, { id: "ikhfa", ar: "إخفاء" }] },
      { t: { id: "Ra pada {مَجْرَىٰهَا} dibaca dengan ______ menurut Hafsh.", ar: "راء {مَجْرَاهَا}: ______." }, j: { id: "imalah", ar: "الإمالة" }, x: [{ id: "isymam", ar: "الإشمام" }, { id: "madd lazim", ar: "المد اللازم" }, { id: "saktah", ar: "السكت" }] }
    ],
    pilah: { t: { id: "Pilah menurut hukum ra: TAFKHIM atau TARQIQ.", ar: "صنِّف راءات: تفخيم أم ترقيق؟" },
      kategori: [{ id: "Tafkhim", ar: "تفخيم" }, { id: "Tarqiq", ar: "ترقيق" }],
      item: [
        { t: { id: "{رَمَضَانَ}", ar: "رمضان" }, k: 0 },
        { t: { id: "{رِجَالٌ}", ar: "رجال" }, k: 1 },
        { t: { id: "{الْقُرْآنُ}", ar: "القرآن" }, k: 0 },
        { t: { id: "{فِرْعَوْنَ}", ar: "فرعون" }, k: 1 },
        { t: { id: "{قِرْطَاسٍ}", ar: "قرطاس" }, k: 0 },
        { t: { id: "{بَشِيرْ} (waqaf)", ar: "بشير" }, k: 1 },
        { t: { id: "{ارْكَعُوا}", ar: "اركعوا" }, k: 0 },
        { t: { id: "{كَرِيمٌ}", ar: "كريم" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "لماذا قويت الصاد عن الظاء مع أن الظاء متصفة بالجهر؟ ورتب حروف التفخيم السبعة من حيث القوة.", id: "Mengapa shad lebih kuat daripada zha padahal zha bersifat jahr? Urutkan tujuh huruf tafkhim menurut kekuatannya." },
      j: { ar: "الهمس مع الصفير يساعدان على جريان النفس بصوت صفيري، فيمتلئ الفم بصدى الصاد أكثر من الظاء. والترتيب: الطاء لأنها أقوى الحروف، ثم الضاد للاستطالة، ثم الصاد للصفير ولأن مخرجها أدخل، ثم الظاء للإطباق، ثم القاف للشدة، ثم الغين للجهر، ثم الخاء للهمس.",
         id: "Karena hams bersama shafir membantu napas mengalir dengan desis sehingga mulut lebih penuh gema shad daripada zha. Urutan: **tha** (paling kuat), **dhad** (istithalah), **shad** (shafir, makhraj lebih dalam), **zha** (ithbaq), **qaf** (syiddah), **ghain** (jahr), **kha** (hams)." } },
    { t: { ar: "اذكر مراتب التفخيم الخمس عند ابن الجزري مع مثال لكل مرتبة.", id: "Sebutkan lima tingkat tafkhim menurut Ibnul Jazari dengan satu contoh tiap tingkat." },
      j: { ar: "الأولى: المفتوح بعده ألف {قَالَ}. الثانية: المفتوح بلا ألف {خَلَقَكُمْ}. الثالثة: المضموم {يَقُولُ}. الرابعة: الساكن {يَقْتُلُونَ}. الخامسة: المكسور {قِيلَ} وهي أضعفها.",
         id: "(1) berfathah + alif: {قَالَ}; (2) berfathah tanpa alif: {خَلَقَكُمْ}; (3) berdhammah: {يَقُولُ}; (4) sukun: {يَقْتُلُونَ}; (5) berkasrah: {قِيلَ} — yang terlemah." } },
    { t: { ar: "ما التفخيم النسبي؟ ومتى تفخم الخاء الساكنة بعد كسر تفخيمًا قويًا؟", id: "Apa itu tafkhim nisbi? Kapan kha sukun setelah kasrah ditebalkan kuat?" },
      j: { ar: "هو النطق بأحرف الاستعلاء المنفتحة بدرجة دون المطبقة وفوق المستفلة، ويكون في القاف والغين والخاء المكسورة أو الساكنة بعد كسر مثل {تُزِغْ} و{قِيلَ}. وتفخم الخاء الساكنة بعد كسر تفخيمًا قويًا إذا جاءت بعدها راء مثل {إِخْرَاجًا}.",
         id: "Tafkhim nisbi: melafalkan huruf isti'la munfatihah dengan derajat di bawah huruf ithbaq dan di atas istifal — pada qaf/ghain/kha berkasrah atau sukun setelah kasrah ({تُزِغْ}, {قِيلَ}). Kha sukun setelah kasrah ditebalkan kuat bila diikuti ra, seperti {إِخْرَاجًا}." } },
    { t: { ar: "بيّن حكم لام لفظ الجلالة مع التمثيل.", id: "Jelaskan hukum lam lafzhul jalalah dengan contoh." },
      j: { ar: "الأصل في اللام الترقيق، وتستثنى لام لفظ الجلالة فتفخم بعد فتح أو ضم أو عند الابتداء مثل {قَالَ ٱللَّهُ} و{عَبْدُ ٱللَّهِ} و{ٱللَّهُ نُورُ}، وترقق بعد كسر سواء كان متصلًا أو منفصلًا أصليًا أو عارضًا أو تنوينًا مثل {بِسْمِ ٱللَّهِ} و{قُلِ ٱللَّهُمَّ}.",
         id: "Asal lam adalah tarqiq. Lam jalalah **ditebalkan** setelah fathah, dhammah, atau saat memulai ({قَالَ ٱللَّهُ}, {عَبْدُ ٱللَّهِ}, {ٱللَّهُ نُورُ}); **ditipiskan** setelah kasrah — menyambung/terpisah, asli/'aridh/tanwin ({بِسْمِ ٱللَّهِ}, {قُلِ ٱللَّهُمَّ})." } },
    { t: { ar: "عدد حالات تفخيم الراء وترقيقها مع مثال لكل حالة.", id: "Sebutkan keadaan tafkhim dan tarqiq ra beserta contoh. Mana kata yang memiliki dua wajah saat waqaf?" },
      j: { ar: "التفخيم ثمان حالات: مفتوحة {رَمَضَانَ}، ساكنة بعد فتح {مَرْيَمَ}، ساكنة للوقف بعد ساكن قبله فتح {الْحَشْر}، مضمومة {رُزِقُوا}، ساكنة بعد ضم {الْقُرْآنُ}، ساكنة للوقف بعد ساكن قبله ضم {خُسْر}، ساكنة بعد كسر أصلي وبعدها استعلاء {فِرْقَةٍ}، ساكنة بعد همزة وصل مكسورة كسرًا عارضًا {ٱرْكَعُوا}. والترقيق ست حالات: مكسورة {رِجَالٌ}، ساكنة بعد كسر أصلي بلا استعلاء {فِرْعَوْنَ}، ساكنة للوقف بعد ساكن مستفل قبله كسر {السِّحْر}، ساكنة بعد ياء {قَدِيرْ}، ممالة {مَجْرَىٰهَا}، مكسورة وصلًا موقوف عليها بالروم {وَالْعَصْرِ}. وتجوز الوجهان وقفًا في {فِرْقٍ} و{وَنُذُرِ} و{يَسْرِ} و{أَسْرِ} و{الْقِطْرِ} والترقيق أولى، وفي {مِصْرَ} والتفخيم أولى.",
         id: "**Tafkhim (8):** berfathah {رَمَضَانَ}; sukun setelah fathah {مَرْيَمَ}; waqaf setelah sukun yang sebelumnya fathah {الْحَشْر}; berdhammah {رُزِقُوا}; sukun setelah dhammah {الْقُرْآنُ}; waqaf setelah sukun yang sebelumnya dhammah {خُسْر}; sukun setelah kasrah asli + isti'la {فِرْقَةٍ}; sukun setelah hamzah washl berkasrah 'aridh {ٱرْكَعُوا}. **Tarqiq (6):** berkasrah {رِجَالٌ}; sukun setelah kasrah asli tanpa isti'la {فِرْعَوْنَ}; waqaf setelah sukun istifal berkasrah {السِّحْر}; setelah ya {قَدِيرْ}; imalah {مَجْرَىٰهَا}; raum {وَالْعَصْرِ}. **Dua wajah saat waqaf:** {فِرْقٍ}، {وَنُذُرِ}، {يَسْرِ}، {أَسْرِ}، {الْقِطْرِ} (tarqiq lebih utama) dan {مِصْرَ} (tafkhim lebih utama)." } }
  ]
});
