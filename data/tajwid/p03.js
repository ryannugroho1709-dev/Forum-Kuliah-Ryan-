/* Tajwid — Pertemuan 3: Bab Al-Mudud (hukum mad) */
Kuliah.pertemuan("tajwid", {
  no: 3, motif: "spektrum", tema: 3, durasi: 26,
  telegram: "https://t.me/Shifaaulqloub7/140",
  bab: { id: "Bab Al-Mudud (hukum mad)", ar: "باب المدود" },
  judul: { id: "Bab Al-Mudud: Mad Asli, Mad Far'i, dan Urutan Kekuatannya", ar: "باب المدود: المد الأصلي والفرعي وقوة المدود" },
  ringkas: {
    id: "Pengertian mad dan qashr, tiga huruf mad (wai), mad thabi'i beserta tiga mulhaqat-nya (tamkin, 'iwadh, shilah), mad far'i karena hamz (muttashil, munfashil, badal) dan karena sukun ('aridh lissukun, lazim), huruf-huruf pembuka surah, dan kaidah kekuatan antar-mad.",
    ar: "تعريف المد والقصر، وحروف المد الثلاثة، والمد الطبيعي وملحقاته (التمكين والعوض والصلة)، والمد الفرعي بسبب الهمز (المتصل والمنفصل والبدل) وبسبب السكون (العارض واللازم)، وفواتح السور، وقاعدة أقوى المدود."
  },
  tujuan: [
    { id: "Mendefinisikan mad dan qashr, menyebut huruf mad beserta syaratnya, dan membedakannya dari huruf lin dan huruf 'illah.", ar: "تعريف المد والقصر، وذكر حروف المد وشروطها، والتفريق بينها وبين حروف اللين والعلة." },
    { id: "Menjelaskan mad thabi'i, ragamnya, serta mulhaqat-nya (tamkin, 'iwadh, shilah sughra).", ar: "بيان المد الطبيعي وأنواعه وملحقاته: التمكين والعوض والصلة الصغرى." },
    { id: "Menentukan hukum, sebab, dan kadar harakat mad muttashil, munfashil, badal, 'aridh lissukun, dan lazim pada ayat berharakat.", ar: "تحديد حكم وسبب ومقدار المتصل والمنفصل والبدل والعارض واللازم في الآيات." },
    { id: "Menjelaskan kaidah kekuatan mad dan menerapkannya ketika dua sebab bertemu pada satu kata.", ar: "بيان قاعدة أقوى المدود وتطبيقها عند اجتماع سببين." },
    { id: "Mengenal empat kelompok huruf pembuka surah dan hukum mad masing-masing.", ar: "معرفة أقسام فواتح السور وحكم المد في كل منها." }
  ],
  isi: [
    { t: "pembuka", id: "Pertemuan ini membahas **bab mad** dalam *Al-Bidayah fi 'Ilm at-Tajwid* dan dilengkapi dengan nazham *Tuhfat al-Athfal* karya Al-Jamzuri. Mad adalah salah satu bab terbesar tajwid, karena hampir setiap ayat memuatnya. Kuncinya ada dua: **mengenali jenis mad** dari sebabnya (hamz atau sukun), lalu **menentukan kadar harakatnya**.", ar: "هذه المحاضرة في شرح باب المدود من كتاب «البداية في علم التجويد» مع أبيات الجمزوري في «تحفة الأطفال». ومدار الباب على أمرين: معرفة نوع المد من سببه (الهمز أو السكون)، ثم معرفة مقداره." },
    { t: "atsar", ar: "عَنْ قَتَادَةَ قَالَ: سَأَلْتُ أَنَسَ بْنَ مَالِكٍ عَنْ قِرَاءَةِ النَّبِيِّ ﷺ فَقَالَ: «كَانَ يَمُدُّ مَدًّا»", id: "Dari Qatadah: aku bertanya kepada Anas bin Malik tentang bacaan Nabi ﷺ, ia menjawab, “Beliau memanjangkan (mad) bacaannya.” Dalam lafaz lain: beliau memanjangkan suaranya. Menurut ustadz, kabar ini bersifat umum untuk semua jenis mad.", src: "Dalil asal bab mad (riwayat Qatadah dari Anas)" },

    { t: "judul", id: "Pengertian Mad dan Qashr", ar: "تعريف المد والقصر" },
    { t: "definisi", judul: { id: "Al-Madd (mad)", ar: "المد" },
      lughah: { id: "**Al-math** (memanjangkan/menarik), dan ada yang mengatakan **az-ziyadah** (tambahan).", ar: "المط، وقيل: الزيادة." },
      istilah: { id: "**Memanjangkan suara pada huruf mad atau huruf lin hingga lebih dari dua harakat ketika ada sebab.** Sebabnya hanya dua: **hamz** atau **sukun**.", ar: "إطالة الصوت بحرف المد أو اللين إلى أكثر من حركتين عند وجود السبب، والسبب إما الهمز أو السكون." } },
    { t: "ayat", ar: "وَيُمْدِدْكُم بِأَمْوَالٍ وَبَنِينَ", id: "Dan Dia memperbanyak harta dan anak-anakmu. (Contoh makna bahasa: *mad* = tambahan.)", src: "QS. Nuh: 12" },
    { t: "definisi", judul: { id: "Al-Qashr (lawan mad)", ar: "القصر" },
      lughah: { id: "**Al-man'** (mencegah) dan **al-habs** (menahan).", ar: "المنع والحبس." },
      istilah: { id: "**Menetapkan huruf mad atau lin tanpa tambahan panjang**, karena tidak ada sebab (hamz/sukun).", ar: "إثبات حرف المد أو اللين من غير زيادة فيه لعدم وجود السبب." } },
    { t: "ayat", ar: "حُورٌ مَّقْصُورَاتٌ فِي الْخِيَامِ", id: "(Bidadari) yang dipingit dalam kemah-kemah. (Contoh makna bahasa: *maqshurat* = ditahan/dipingit.)", src: "QS. Ar-Rahman: 72" },

    { t: "judul", id: "Huruf Mad, Huruf Lin, dan Huruf 'Illah", ar: "حروف المد واللين والعلة" },
    { t: "p", id: "Huruf mad ada **tiga**, terkumpul dalam kata **وَايْ (wai)** — dibaca dengan huruf *ra-ta tarqiq* (tipis). Ketiganya berkumpul pada kata-kata Al-Qur'an seperti {نُوحِيهَا}, {أُوذِينَا}, dan {وَأُوتِينَا}.", ar: "حروف المد ثلاثة مجموعة في كلمة «واي»، وتجتمع في نحو: {نُوحِيهَا}، {أُوذِينَا}، {وَأُوتِينَا}." },
    { t: "tabel", judul: { id: "Syarat tiap huruf mad", ar: "شرط كل حرف مد" }, kolom: [{ id: "Huruf", ar: "الحرف" }, { id: "Syarat menjadi huruf mad", ar: "شرطه" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Alif", ar: "الألف" }, { id: "Selalu huruf mad dan lin, sebab dalam Al-Qur'an ia selalu **sukun** dan huruf sebelumnya **fathah**.", ar: "ساكنة وما قبلها مفتوح دائمًا" }, { id: "{قَالَ}", ar: "قَالَ" }],
      [{ id: "Wawu", ar: "الواو" }, { id: "**Sukun** dan huruf sebelumnya **dhammah**.", ar: "ساكنة وما قبلها مضموم" }, { id: "{يَقُولُ}", ar: "يَقُولُ" }],
      [{ id: "Ya'", ar: "الياء" }, { id: "**Sukun** dan huruf sebelumnya **kasrah**.", ar: "ساكنة وما قبلها مكسور" }, { id: "{قِيلَ}", ar: "قِيلَ" }] ] },
    { t: "poin", judul: { id: "Empat nama huruf mad", ar: "أسماء حروف المد" }, item: [
      { ikon: "waves", judul: { id: "Huruf maddiyyah", ar: "حروف مدّية" }, id: "Karena suara **memanjang** padanya.", ar: "لامتداد الصوت بها." },
      { ikon: "ear", judul: { id: "Huruf jauwfiyyah", ar: "حروف جوفية" }, id: "Karena **makhrajnya dari al-jauf** (rongga mulut/tenggorokan).", ar: "لخروجها من الجوف." },
      { ikon: "wind", judul: { id: "Huruf hawa'iyyah", ar: "حروف هوائية" }, id: "Karena ia **berdiri pada udara mulut**.", ar: "لقيامها بهواء الفم." },
      { ikon: "eye", judul: { id: "Huruf khafiyyah", ar: "حروف خفية" }, id: "Karena ucapannya **samar** — ia huruf paling samar.", ar: "لخفاء النطق بها، فهي أخفى الحروف." } ] },
    { t: "banding", judul: { id: "Huruf mad vs huruf lin", ar: "حرف المد وحرف اللين" },
      kiri: { judul: { id: "Huruf mad", ar: "حرف المد" }, ikon: "waves", warna: "green", poin: [
        { id: "Sukun dan sebelumnya **harakat sejenis**: fathah-alif, dhammah-wawu, kasrah-ya'.", ar: "ساكن وقبله حركة من جنسه." },
        { id: "Contoh: {قَالَ}, {يَقُولُ}, {قِيلَ}.", ar: "قَالَ، يَقُولُ، قِيلَ." } ] },
      kanan: { judul: { id: "Huruf lin", ar: "حرف اللين" }, ikon: "wind", warna: "amber", poin: [
        { id: "**Wawu atau ya' sukun** yang sebelumnya **fathah** — disebut lin karena keluar dengan mudah.", ar: "الواو والياء الساكنتان وما قبلهما مفتوح؛ سُميتا لينًا لخروجهما بسهولة." },
        { id: "Contoh: {الْبَيْتَ}, {خَوْفٍ}.", ar: "الْبَيْتَ، خَوْفٍ." } ] } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Wawu dan ya' yang berharakat", ar: "إذا تحركتا" }, id: "Apabila wawu dan ya' **berharakat**, keduanya disebut **huruf 'illah** — bukan huruf mad dan bukan huruf lin.", ar: "وإذا تحركت الواو والياء سُميتا حرفي علة." },
    { t: "cek", q: { id: "Pada kata {الْبَيْتَ}, huruf ya' disebut…", ar: "الياء في {الْبَيْتَ} تسمى…" }, o: [{ id: "Huruf mad", ar: "حرف مد" }, { id: "Huruf lin", ar: "حرف لين" }, { id: "Huruf 'illah", ar: "حرف علة" }, { id: "Huruf qalqalah", ar: "حرف قلقلة" }], j: 1, b: { id: "Ya' sukun yang sebelumnya fathah = huruf lin.", ar: "ياء ساكنة مفتوح ما قبلها: حرف لين." } },

    { t: "judul", id: "Pembagian Mad: Asli dan Far'i", ar: "أقسام المد" },
    { t: "peta", ikon: "layers", pusat: { id: "Al-Mad", ar: "المد" }, cabang: [
      { id: "Mad asli (thabi'i)", ar: "المد الأصلي (الطبيعي)", sub: [{ id: "Tidak bergantung pada hamz/sukun; 2 harakat", ar: "لا يتوقف على همز أو سكون؛ حركتان" }, { id: "Mulhaqat: tamkin, 'iwadh, shilah sughra", ar: "ملحقاته: التمكين، العوض، الصلة الصغرى" }] },
      { id: "Mad far'i, sebab hamz", ar: "الفرعي بسبب الهمز", sub: [{ id: "Muttashil", ar: "المتصل" }, { id: "Munfashil", ar: "المنفصل" }, { id: "Badal", ar: "البدل" }] },
      { id: "Mad far'i, sebab sukun", ar: "الفرعي بسبب السكون", sub: [{ id: "'Aridh lissukun", ar: "العارض للسكون" }, { id: "Lazim (kilmi/harfi, mutsaqqal/mukhaffaf)", ar: "اللازم" }] } ] },

    { t: "judul", id: "Mad Thabi'i (Mad Asli)", ar: "المد الطبيعي (الأصلي)" },
    { t: "definisi", judul: { id: "Mad thabi'i", ar: "المد الطبيعي" },
      lughah: { id: "Disebut thabi'i karena orang yang berwatak (tabiat) bacaan yang lurus tidak mengurangi dan tidak melebihkannya.", ar: "سُمي طبيعيًا لأن صاحب الطبيعة السليمة لا ينقصه ولا يزيد عليه." },
      istilah: { id: "Mad yang **zat hurufnya tidak tegak tanpa mad itu**, dan panjangnya **tidak bergantung pada sebab** hamz atau sukun. Kadarnya **dua harakat**, baik saat washal maupun waqaf. Disebut juga mad asli, mad dzati, atau mad shighah — asli karena menjadi pangkal semua mad.", ar: "ما لا تقوم ذات الحرف إلا به، ولا يتوقف مده على سبب من همز أو سكون، ومقداره حركتان وصلًا ووقفًا. ويسمى أصليًا لأنه أصل لجميع المدود." } },
    { t: "contoh", judul: { id: "Dalam kata dan dalam huruf", ar: "في الكلمة وفي الحرف" }, sorot: [
      { label: { id: "Dalam kata", ar: "في كلمة" }, warna: "green", id: "{قَالُوا} — alif/wawu dipanjangkan dua harakat.", ar: "قَالُوا: حركتان." },
      { label: { id: "Dalam huruf (nama huruf)", ar: "في حرف" }, warna: "blue", id: "{حا} (dari *Ha-Mim*) — dua harakat saat waqaf maupun washal, tanpa lebih dan tanpa kurang.", ar: "حا: حركتان وقفًا ووصلًا دون زيادة أو نقص." } ] },
    { t: "catatan", gaya: "info", judul: { id: "Ukuran satu harakat", ar: "مقدار الحركة" }, id: "Menurut penulis *Al-'Amid*, ukuran harakat adalah **kadar mengucapkan satu huruf hijaiyah** sesuai cepat-lambat bacaan qari. Maka dua harakat = kadar mengucapkan **dua huruf**, seperti engkau mengucapkan “ba” lalu “ba” (*bab*) atau “ta” lalu “ta” (*tat*).", ar: "المقدار الصحيح للحركة كما قال صاحب «العميد»: مقدار النطق بالحرف الهجائي على الوجه الذي يقرأ به القارئ من السرعة والبطء، فحركتان بمقدار النطق بحرفين: كقولك «بب» أو «تت»." },
    { t: "peta", ikon: "chart", pusat: { id: "Macam mad thabi'i", ar: "أنواع المد الطبيعي" }, cabang: [
      { id: "Tsuna'i (pada huruf pembuka surah)", ar: "الثنائي", sub: [{ id: "Kelompok حَيٌّ طَهُرْ; 21 tempat; tetap saat washal", ar: "حيٌّ طهر: واحد وعشرون موضعًا" }] },
      { id: "Muthlaq (pada kata)", ar: "المطلق", sub: [{ id: "Tetap washal dan waqaf", ar: "ثابت وصلًا ووقفًا" }, { id: "Tetap hanya saat washal", ar: "ثابت وصلًا فقط" }, { id: "Tetap hanya saat waqaf", ar: "ثابت وقفًا فقط" }] } ] },
    { t: "tabel", judul: { id: "Mad thabi'i tsuna'i: 21 tempat huruf pembuka surah", ar: "الطبيعي الثنائي: واحد وعشرون موضعًا" }, kolom: [{ id: "Huruf", ar: "الحرف" }, { id: "Terdapat di awal surah", ar: "في أول سورة" }], baris: [
      [{ id: "Ha' (حا) dari Ha-Mim", ar: "الحاء من الحواميم" }, { id: "Ghafir, Fushshilat, Asy-Syura, Az-Zukhruf, Ad-Dukhan, Al-Jatsiyah, Al-Ahqaf (7)", ar: "غافر، فصلت، الشورى، الزخرف، الدخان، الجاثية، الأحقاف" }],
      [{ id: "Ya' (يا)", ar: "الياء" }, { id: "Maryam, Yasin (2)", ar: "مريم، ويس" }],
      [{ id: "Tha' (طا)", ar: "الطاء" }, { id: "Thaha, Asy-Syu'ara', An-Naml, Al-Qashash (4)", ar: "طه، الشعراء، النمل، القصص" }],
      [{ id: "Ha' (ها)", ar: "الهاء" }, { id: "Maryam, Thaha (2)", ar: "مريم، وطه" }],
      [{ id: "Ra' (را)", ar: "الراء" }, { id: "Yunus, Hud, Yusuf, Ar-Ra'd, Ibrahim, Al-Hijr (6)", ar: "يونس، هود، يوسف، الرعد، إبراهيم، الحجر" }] ] },
    { t: "tabel", judul: { id: "Mad thabi'i muthlaq: tiga keadaan", ar: "الطبيعي المطلق: ثلاث حالات" }, kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Penjelasan", ar: "الشرح" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1. Tetap washal dan waqaf", ar: "ثابت وصلًا ووقفًا" }, { id: "Huruf mad ada dalam tulisan mushaf — di tengah kata, di akhir kata, atau terhapus dari tulisan namun tetap dibaca.", ar: "يستوي في ذلك ثبوته في الرسم أو حذفه، وسطًا أو طرفًا" }, { id: "{مَلِكًا}, {يُوصِيكُمُ}, {وَضُحَاهَا}, {قَالُوا}", ar: "مَلِكًا، يُوصِيكُمُ، وَضُحَاهَا، قَالُوا" }],
      [{ id: "2. Tetap hanya saat washal", ar: "ثابت وصلًا فقط" }, { id: "Terutama **mad shilah** pada ha' dhamir yang dipanjangkan wawu/ya' kecil; saat waqaf, ha' disukunkan dan mad itu hilang. Juga mad thabi'i yang berubah menjadi mad 'aridh saat waqaf (tiga wajah: qashr, tawassuth, isyba').", ar: "عند وصل هاء الصلة بواو أو ياء، ويوقف عليها بالإسكان؛ وما يتحول وقفًا إلى عارض للسكون" }, { id: "{إِنَّ رَبَّهُ كَانَ بِهِ بَصِيرًا} (waqaf: *rabbih*, *bih*); {الْمُسْتَقِيمَ}", ar: "رَبَّهُ، بِهِ، الْمُسْتَقِيمَ" }],
      [{ id: "3. Tetap hanya saat waqaf", ar: "ثابت وقفًا فقط" }, { id: "Huruf mad muncul ketika waqaf: alif pengganti tanwin fathah (mad 'iwadh), alif-alif yang bertanda sukun panjang, dan lain-lain (lihat daftar di bawah).", ar: "كالوقف على الألف المبدلة من التنوين وغيرها" }, { id: "{دُعَاءً}, {عَلِيمًا}", ar: "دُعَاءً، عَلِيمًا" }] ] },
    { t: "akordion", judul: { id: "Rincian mad thabi'i yang tetap hanya ketika waqaf", ar: "ما يثبت وقفًا فقط" }, item: [
      { judul: { id: "Tujuh alif bertanda sukun panjang di mushaf", ar: "الألفات السبع" }, id: "Seperti {أَنَا}, {لَكِنَّا}, {الظُّنُونَا}, {الرَّسُولَا}, {السَّبِيلَا}, {سَلَاسِلَا}. Saat waqaf **alif dibaca**. Khusus {سَلَاسِلَا}, Hafsh punya **dua wajah waqaf**: dengan alif (*salasila*) atau tanpa alif (*salasil*).", ar: "يوقف عليها بالألف، إلا {سَلَاسِلَا} فلحفص فيها وجهان وقفًا: بالألف وبالحذف." },
      { judul: { id: "Dua tempat {قَوَارِيرَا}", ar: "قواريرا" }, id: "Tempat pertama pada Surah Al-Insan: {كَانَتْ قَوَارِيرَا}, dibaca dengan alif saat waqaf. Tempat kedua (ayat berikutnya) alifnya **terhapus washal dan waqaf**: *qawarira min fidhdhah* dibaca tanpa alif sama sekali (waqaf: *qawarir*).", ar: "الموضع الأول في الإنسان: ألفه تثبت وقفًا، والثاني محذوفة وصلًا ووقفًا." },
      { judul: { id: "Alif tatsniyah dan sejenisnya", ar: "ألف التثنية" }, id: "Alif dihapus saat washal untuk menghindari bertemunya dua sukun, tetapi ditetapkan saat waqaf: {ذَاقَا الشَّجَرَةَ} — waqaf: *dzaqa*. Juga {مُحِلِّي الصَّيْدِ} — waqaf: *muhilli*.", ar: "كالوقف على {ذَاقَا الشَّجَرَةَ} و{مُحِلِّي الصَّيْدِ}." },
      { judul: { id: "Isim maqshur bertanwin fathah", ar: "الاسم المقصور المنون" }, id: "{هُدًى}, *fata*, {طُوًى}: saat waqaf dibaca *huda*, *fata*, *thuwa* dengan alif panjang dua harakat.", ar: "هُدًى، فتًى، طُوًى: تثبت الألف وقفًا." },
      { judul: { id: "Mad munfashil saat waqaf pada huruf mad", ar: "المنفصل عند الوقف" }, id: "Pada tempat yang dibolehkan waqaf: {بِمَا أُنزِلَ} — waqaf pada *bima* menjadi mad thabi'i dua harakat.", ar: "بِمَا: تثبت الألف وقفًا فيما يجوز فيه الوقف." },
      { judul: { id: "Wawu dan ya' berharakat di akhir kata", ar: "الواو والياء المتطرفتان" }, id: "Wawu/ya' berharakat di akhir kata yang sebelumnya harakat sejenis: *huwa* menjadi *huw*(waqaf), *hiya* menjadi *hiy*, *tabtaghiya* menjadi *tabtaghi*. Huruf mad ditetapkan saat waqaf.", ar: "وهُوَ → وَهُو، وهِيَ → وَهِي، تبتغيَ → تبتغي." } ] },

    { t: "judul", id: "Mulhaqat Mad Thabi'i: Tamkin, 'Iwadh, Shilah", ar: "ملحقات المد الطبيعي" },
    { t: "p", id: "Tiga mad **dihubungkan (mulhaq) dengan mad thabi'i** karena kadarnya sama, dua harakat: **mad tamkin**, **mad 'iwadh**, dan **mad shilah sughra**.", ar: "يلحق بالمد الطبيعي ثلاثة أنواع: مد التمكين، ومد العوض، ومد الصلة الصغرى." },
    { t: "definisi", judul: { id: "Mad tamkin", ar: "مد التمكين" },
      istilah: { id: "Mad yang di dalamnya **bertemu dua ya' atau dua wawu**, yang pertama berupa **huruf mad atau bertasydid**. Wajib ditegaskan dua harakat agar tidak teridgham atau gugur.", ar: "ما اجتمع فيه ياءان أو واوان أولهما مدية أو مشددة." } },
    { t: "langkah", judul: { id: "Tiga bentuk mad tamkin", ar: "ثلاث صور" }, item: [
      { judul: { id: "Dua ya', yang pertama bertasydid", ar: "ياءان أولهما مشددة" }, id: "{حُيِّيتُمْ}, {النَّبِيِّينَ} — wajib ditegaskan (ditamkinkan).", ar: "حُيِّيتُم، النَّبِيِّينَ." },
      { judul: { id: "Wawu mad sebelum wawu berharakat, atau ya' mad sebelum ya' berharakat", ar: "واو مدية قبل واو متحركة أو ياء مدية قبل ياء متحركة" }, id: "{آمَنُوا وَعَمِلُوا}, {قَالُوا وَهُمْ}; {الَّذِي يُوعَدُونَ}, {الَّذِي يُوَسْوِسُ}. Dipanjangkan dua harakat **supaya tidak diidghamkan atau dilenyapkan** (wawu masuk ke wawu, ya' ke ya').", ar: "وجوب تمكين المد مقدار حركتين حذرًا من الإدغام أو الإسقاط." },
      { judul: { id: "Wawu mad setelah wawu dhammah, atau ya' mad setelah ya' kasrah", ar: "واو مدية بعد واو مضمومة أو ياء مدية بعد ياء مكسورة" }, id: "{يَلْوُونَ} (Ali 'Imran) dan {يُحْيِي وَيُمِيتُ}: wajib ditamkinkan saat membaca.", ar: "{يَلْوُونَ} بسورة آل عمران، و{يُحْيِي وَيُمِيتُ}." } ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Hukum tamkin saat waqaf dan washal", ar: "التمكين وقفًا ووصلًا" }, id: "Kadarnya dua harakat. Jika tamkin ada pada kata seperti {النَّبِيِّينَ}, maka saat **waqaf** ia menjadi mad 'aridh (boleh qashr, tawassuth, isyba'); saat **washal** hanya dua harakat. Adapun {يَسْتَحْيِي أَن}: saat **waqaf** dua harakat (mad tamkin); saat **washal** ia menjadi **mad munfashil** empat atau lima harakat.", ar: "في {النَّبِيِّينَ} وقفًا عارض للسكون يجوز فيه القصر والتوسط والإشباع، ووصلًا حركتان. وفي {يَسْتَحْيِي أَن} وقفًا حركتان تمكين، ووصلًا منفصل أربع أو خمس." },
    { t: "definisi", judul: { id: "Mad 'iwadh", ar: "مد العوض" },
      istilah: { id: "**Alif yang gugur saat washal dan tetap saat waqaf**; ia adalah **pengganti (ta'widh) tanwin fathah** ketika waqaf. Kadarnya dua harakat saat waqaf.", ar: "هو الألف المحذوفة وصلًا الثابتة وقفًا، وهو تعويض التنوين المنصوب ألفًا عند الوقف؛ مقداره حركتان عند الوقف." } },
    { t: "tabel", judul: { id: "Tiga bentuk mad 'iwadh", ar: "صور مد العوض" }, kolom: [{ id: "Bentuk", ar: "الصورة" }, { id: "Contoh & bacaan waqaf", ar: "المثال" }], baris: [
      [{ id: "Huruf mad tertulis", ar: "حرف المد مرسوم" }, { id: "{عَلِيمًا}, {حَكِيمًا}, {مِصْرًا} → waqaf: *'alima*, *hakima*, *mishra*", ar: "عَلِيمًا، حَكِيمًا، مِصْرًا" }],
      [{ id: "Huruf mad tidak tertulis", ar: "حرف المد غير مرسوم" }, { id: "{سَوَاءً}, {نِدَاءً} → waqaf: *sawa'a*, *nida'a*", ar: "سَوَاءً، نِدَاءً" }],
      [{ id: "Nun taukid khafifah yang ditulis seperti tanwin", ar: "نون التوكيد الخفيفة" }, { id: "{وَلَيَكُونًا}, {لَنَسْفَعًا بِالنَّاصِيَةِ} → waqaf dengan alif", ar: "وَلَيَكُونًا، لَنَسْفَعًا" }] ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Tanwin pada ta' marbuthah", ar: "تنبيه" }, id: "Tanwin fathah pada kata seperti *rahmatan*, *ni'matan* saat waqaf: tanwin dibuang dan **ta' marbuthah diganti ha' sukun** (*rahmah*, *ni'mah*). Ini bukan mad 'iwadh.", ar: "التنوين المنصوب في «رحمةً، نعمةً» يوقف عليه بحذف التنوين وإبدال التاء هاء." },
    { t: "definisi", judul: { id: "Mad shilah (sughra)", ar: "مد الصلة" },
      istilah: { id: "**Huruf mad (wawu atau ya') yang terhapus dalam tulisan dan saat waqaf, tetapi tetap dibaca saat washal.** Disebut juga *ha' kinayah*: ha' dhamir tambahan di luar bangun kata, untuk **mufrad mudzakkar ghaib**. Tidak termasuk ha' asli kata (*nafaqih*), ha' muannats (*ahliha*), ha' tatsniyah (*'alaihima*), maupun ha' jamak (*'alaihim*).", ar: "هو حرف المد الواو والياء المحذوف خطًّا ووقفًا الثابت وصلًا، ويسمى هاء الكناية: هاء الضمير الزائدة عن بنية الكلمة الدالة على المفرد المذكر الغائب." } },
    { t: "poin", judul: { id: "Syarat mad shilah", ar: "شروط مد الصلة" }, item: [
      { ikon: "layers", judul: { id: "Dalam dua kata", ar: "في كلمتين" }, id: "Ha' kinayah pada kata pertama, huruf sesudahnya pada kata berikutnya.", ar: "أن يكون في كلمتين." },
      { ikon: "route", judul: { id: "Saat washal", ar: "في الوصل" }, id: "Bukan saat waqaf.", ar: "أن يكون في حال الوصل لا الوقف." },
      { ikon: "key", judul: { id: "Ha' berharakat di antara dua huruf berharakat", ar: "متحركة بين متحركين" }, id: "Dhammah melahirkan wawu mad; kasrah melahirkan ya' mad. Contoh: {بِهِ}, {فِيهِ}, {مِنْهُ}, {عَلَيْهِ}.", ar: "يتولد من الضم واو مدية ومن الكسر ياء مدية: به، فيه، منه، عليه." } ] },
    { t: "banding", judul: { id: "Shilah sughra vs shilah kubra", ar: "الصلة الصغرى والكبرى" },
      kiri: { judul: { id: "Shilah sughra (termasuk mulhaqat thabi'i)", ar: "الصلة الصغرى" }, ikon: "leaf", warna: "green", poin: [
        { id: "Ha' kinayah berharakat **di antara dua huruf berharakat, bukan hamz**.", ar: "هاء الكناية متحركة بين متحركين باستثناء الهمزة." },
        { id: "**Dua harakat.** Contoh: {إِنَّهُ كَانَ بِعِبَادِهِ خَبِيرًا بَصِيرًا} — *innahu* diikuti wawu kecil, *bi'ibadihi* diikuti ya' kecil (sesudahnya bukan hamz).", ar: "حركتان؛ مثل {إِنَّهُ كَانَ بِعِبَادِهِ خَبِيرًا}." } ] },
      kanan: { judul: { id: "Shilah kubra (mad far'i)", ar: "الصلة الكبرى" }, ikon: "flame", warna: "amber", poin: [
        { id: "Sebabnya: sesudah ha' kinayah berharakat **muncul hamz**.", ar: "أن يقع بعد هاء الكناية المتحركة همزة." },
        { id: "**Empat atau lima harakat.** Contoh: {إِلَىٰ أَهْلِهِ إِلَّا أَن يَصَّدَّقُوا} (An-Nisa' 92).", ar: "أربع أو خمس حركات مثل {إِلَىٰ أَهْلِهِ إِلَّا}." } ] } },
    { t: "p", id: "Ustadz mengingatkan bahwa ada keadaan lain bagi ha' kinayah yang akan dibahas pada **bab ha' kinayah** nanti insya Allah.", ar: "وهناك حالات أخرى لهاء الكناية ستأتي في باب هاء الكناية إن شاء الله." },
    { t: "kutipan", ar: "وَالْمَدُّ أَصْلِيٌّ وَفَرْعِيٌّ لَهُ … وَسَمِّ أَوَّلًا طَبِيعِيًّا وَهُوَ … مَا لَا تَوَقُّفٌ لَهُ عَلَى سَبَبْ … وَلَا بِدُونِهِ الْحُرُوفُ تُجْتَلَبْ", id: "Mad itu asli dan far'i. Yang pertama dinamai thabi'i, yaitu yang tidak bergantung pada sebab, dan huruf-hurufnya tidak datang tanpa mad itu. Yang kedua, far'i, bergantung pada sebab seperti hamz atau sukun. (Bait 35-38)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },
    { t: "cek", q: { id: "Ha' kinayah pada {إِنَّهُ كَانَ} dibaca dengan…", ar: "هاء الكناية في {إِنَّهُ كَانَ}…" }, o: [{ id: "Mad shilah kubra, empat harakat", ar: "صلة كبرى أربع" }, { id: "Mad shilah sughra, dua harakat", ar: "صلة صغرى حركتان" }, { id: "Tidak dipanjangkan", ar: "لا تمد" }, { id: "Mad lazim, enam harakat", ar: "لازم ست" }], j: 1, b: { id: "Ha' kinayah berharakat di antara dua huruf berharakat dan yang sesudahnya bukan hamz: shilah sughra, dua harakat.", ar: "صلة صغرى حركتان." } },

    { t: "judul", id: "Mad Far'i: Sebabnya Hamz", ar: "المد الفرعي: ما سببه الهمز" },
    { t: "definisi", judul: { id: "Mad far'i (mazidi)", ar: "المد الفرعي المزيدي" },
      istilah: { id: "Mad **tambahan atas yang asli**: memanjangkan suara pada huruf mad karena **hamz** atau **sukun** sesudahnya. Disebut far'i karena cabang dari yang asli, dan kadarnya bermacam-macam. Zat huruf tetap ada tanpa mad ini, sehingga mad ini bergantung pada sebab.", ar: "هو المد الزائد على الأصلي، وهو إطالة الصوت بحرف المد بسبب وقوع همز أو سكون بعده؛ وسمي بذلك لتفرعه من الأصل وتفاوت مقاديره، ولأن ذات الحرف تكون بدونه وتوقفه على سبب." } },
    { t: "definisi", judul: { id: "Mad muttashil", ar: "المد المتصل" },
      istilah: { id: "**Hamz datang sesudah huruf mad dalam satu kata** tanpa pemisah. Contoh: {أُولَٰئِكَ}, {هَنِيئًا}, {بِالسُّوءِ}, {السَّمَاءِ}.", ar: "أن يأتي الهمز بعد حرف المد في كلمة واحدة دون فاصل." } },
    { t: "poin", judul: { id: "Sebab, nama, dan hukum muttashil", ar: "السبب والتسمية والحكم" }, item: [
      { ikon: "bolt", judul: { id: "Sebab", ar: "السبب" }, id: "Hamz itu **berat** diucapkan; huruf mad sebelumnya dipanjangkan agar mudah mengucapkannya dan sebagai penguat huruf mad yang lemah.", ar: "ثقل الهمزة عند النطق فزيد في المد قبلها للتمكن من النطق بها وتقوية لضعف حرف المد." },
      { ikon: "chain", judul: { id: "Nama", ar: "التسمية" }, id: "Karena hamz **bersambung** dengan huruf mad dalam satu kata.", ar: "لاتصال الهمز بحرف المد في كلمة واحدة." },
      { ikon: "scale", judul: { id: "Hukum: wajib", ar: "الحكم: الوجوب" }, id: "Para qari **sepakat wajib dipanjangkan** dan tidak boleh diqashr, meski berbeda dalam kadar tambahannya.", ar: "أجمع القراء على زيادته وعدم جواز قصره وإن اختلفوا في مقدار الزيادة." } ] },
    { t: "tabel", judul: { id: "Kadar harakat mad muttashil", ar: "مقدار المد المتصل" }, kolom: [{ id: "Kadar", ar: "المقدار" }, { id: "Keterangan", ar: "الملاحظة" }], baris: [
      [{ id: "4 harakat (tawassuth)", ar: "أربع حركات (توسط)" }, { id: "Paling didahulukan dalam praktik dan paling masyhur diamalkan.", ar: "المقدم في الأداء والمشهور عملًا" }],
      [{ id: "5 harakat (fuwaiq at-tawassuth)", ar: "خمس حركات (فويق التوسط)" }, { id: "Wajah lain yang dibolehkan.", ar: "وجه آخر" }],
      [{ id: "6 harakat (isyba')", ar: "ست حركات" }, { id: "Pada hamz di **akhir kata saat waqaf**, contoh {السُّفَهَاءُ}; juga bacaan Warsh dan Hamzah (6 harakat saat washal dan waqaf).", ar: "في الهمز المتطرف إذا وقفت عليه، وورش وحمزة يمدانه ست حركات وصلًا ووقفًا" }] ] },
    { t: "ayat", ar: "وَأَنزَلَ مِنَ السَّمَاءِ مَاءً فَأَخْرَجَ بِهِ", id: "…dan Dia menurunkan air dari langit, lalu dengan air itu Dia mengeluarkan… (Dua mad muttashil dalam satu ayat: *as-sama'i*, *ma'an*; keduanya **wajib disamakan** kadarnya — tidak boleh memanjangkan salah satu saja.)", src: "QS. Al-Baqarah: 22" },
    { t: "tabel", judul: { id: "Wajah waqaf pada muttashil menurut harakat hamz", ar: "أوجه الوقف على المتصل" }, kolom: [{ id: "Harakat hamz", ar: "حركة الهمز" }, { id: "Contoh", ar: "المثال" }, { id: "Wajah waqaf", ar: "الأوجه" }], baris: [
      [{ id: "Fathah (i'rab atau bina')", ar: "مفتوح" }, { id: "{السَّمَاءَ}, {جَاءَ}", ar: "السَّمَاءَ، جَاءَ" }, { id: "Sukun murni dengan **4, 5, atau 6** harakat. Tidak ada raum/isymam karena fathah.", ar: "السكون المحض بأربع أو خمس أو ست؛ ولا روم ولا إشمام لأنه مفتوح" }],
      [{ id: "Kasrah (i'rab atau bina')", ar: "مكسور" }, { id: "{وَالسَّمَاءِ}, {هَٰؤُلَاءِ}", ar: "وَالسَّمَاءِ، هَٰؤُلَاءِ" }, { id: "Lima wajah: sukun murni (4/5, dan 6) serta raum (4/5). Raum **tidak boleh disertai isyba'** karena raum seperti washal, dan saat washal hanya 4 atau 5.", ar: "فيه خمسة أوجه: السكون المحض، والروم بأربع أو خمس؛ لأن الروم كالوصل فلا يصح مع الإشباع" }],
      [{ id: "Dhammah (i'rab atau bina')", ar: "مضموم" }, { id: "{السُّفَهَاءُ}, {وَيَاسَمَاءُ}", ar: "السُّفَهَاءُ" }, { id: "Ustadz menyebut **delapan wajah**: sukun murni, isymam, dan raum, masing-masing dengan harakat panjang sesuai batasnya (4/5 pada raum dan isymam).", ar: "فيه ثمانية أوجه: السكون المحض، والإشمام، والروم" }] ] },
    { t: "banding", judul: { id: "Raum vs isymam", ar: "الروم والإشمام" },
      kiri: { judul: { id: "Raum", ar: "الروم" }, ikon: "ear", warna: "blue", poin: [{ id: "**Suara** yang hanya terdengar oleh orang dekat yang menyimak, tidak oleh yang jauh.", ar: "صوت يسمعه القريب المصغي دون البعيد." }] },
      kanan: { judul: { id: "Isymam", ar: "الإشمام" }, ikon: "eye", warna: "amber", poin: [{ id: "**Isyarat bibir**: mengatupkan (memoncongkan) kedua bibir setelah selesai huruf — dapat dilihat orang yang melihat, tidak oleh tuna netra. Hanya untuk huruf berharakat dhammah.", ar: "ضم الشفتين بعيد إتمام الحركة، يراه المبصر دون الأعمى." }] } },
    { t: "kutipan", ar: "فَوَاجِبٌ إِنْ جَاءَ هَمْزٌ بَعْدَ مَدْ … فِي كِلْمَةٍ وَذَا بِمُتَّصِلٍ يُعَدْ", id: "Wajib (dipanjangkan) jika hamz datang sesudah mad dalam satu kata; inilah yang dinamai muttashil. (Bait 43)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },
    { t: "definisi", judul: { id: "Mad munfashil", ar: "المد المنفصل" },
      istilah: { id: "**Hamz datang sesudah huruf mad, tetapi di kata lain** (huruf mad di akhir kata pertama, hamz di awal kata kedua). Contoh: {إِنَّا أَعْطَيْنَاكَ}, {فِي أَحْسَنِ}, {لَوْلَا أَنْ}, {يَا أَيُّهَا}, {مَالُهُ إِذَا}.", ar: "أن يأتي بعد حرف المد همز منفصل عنه في كلمة أخرى." } },
    { t: "poin", judul: { id: "Sebab, nama, hukum, dan kadar munfashil", ar: "المنفصل: السبب والحكم والمقدار" }, item: [
      { ikon: "puzzle", judul: { id: "Nama", ar: "التسمية" }, id: "Dinamai munfashil karena huruf mad **terpisah** dari hamz. Juga disebut mad *bast*, mad huruf dengan huruf, atau mad kata dengan kata.", ar: "لانفصال حرف المد عن الهمز، ويسمى مد البسط، ومد الحرف بحرف، ومد كلمة بكلمة." },
      { ikon: "scale", judul: { id: "Hukum: jawaz", ar: "الحكم: الجواز" }, id: "Boleh mad dan boleh qashr; tetap hanya saat **washal**. Saat waqaf pada huruf mad ia menjadi mad thabi'i (dua harakat), misalnya waqaf pada {فِي}.", ar: "جواز المد والقصر، ويثبت وصلًا فقط، وفي الوقف يسمى طبيعيًّا." },
      { ikon: "hourglass", judul: { id: "Kadar", ar: "المقدار" }, id: "Jalur **Asy-Syathibiyyah**: 4 atau 5 harakat bagi semua qari kecuali Warsh dan Hamzah (6 harakat seperti muttashil). Dalam jalur **Thayyibah an-Nasyr** disebut ada wajah dua harakat.", ar: "من طريق الشاطبية: أربع أو خمس للجميع عدا ورش وحمزة فست؛ ومن طريق طيبة النشر وجه الحركتين." } ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Adab dalam membaca", ar: "تنبيه" }, id: "Seorang qari tidak sepatutnya membaca dengan **qashr munfashil** kecuali ia memahami hukum-hukum yang berkaitan dengannya, agar tidak terjadi percampuran (*tarkib*) antar-jalur riwayat saat tilawah.", ar: "ولا ينبغي للقارئ أن يقرأ بقصر المنفصل إلا إذا كان على دراية بالأحكام المترتبة عليه حتى لا يحصل خلط أو تركيب في الطرق." },
    { t: "banding", judul: { id: "Munfashil hakiki vs hukmi", ar: "الانفصال الحقيقي والحكمي" },
      kiri: { judul: { id: "Munfashil hakiki", ar: "الانفصال الحقيقي" }, ikon: "door", warna: "green", poin: [
        { id: "Huruf mad **tertulis dalam rasm** dan dibaca.", ar: "حرف المد ثابت في الرسم واللفظ." },
        { id: "Contoh {فِي أَرْضِ}: **boleh waqaf** pada huruf mad ({فِي}).", ar: "يجوز الوقف على حرف المد." } ] },
      kanan: { judul: { id: "Munfashil hukmi", ar: "الانفصال الحكمي" }, ikon: "chain", warna: "red", poin: [
        { id: "Huruf mad **terhapus dari tulisan** tetapi dibaca: ya' nida' ({يَا أَيُّهَا}, {يَا آدَمُ}), ha' tanbih ({هَا أَنتُمْ}), dan {هَؤُلَاءِ}.", ar: "حرف المد محذوف في الرسم ثابت في اللفظ." },
        { id: "**Tidak boleh waqaf** pada huruf mad itu (tidak ada dalam tulisan); dianggap satu kata, sehingga tidak dibaca *ya* lalu berhenti.", ar: "لا يجوز الوقف على حرف المد لعدم ثبوته رسمًا؛ لأنها كالكلمة الواحدة." } ] } },
    { t: "kutipan", ar: "وَجَائِزٌ مَدٌّ وَقَصْرٌ إِنْ فُصِلْ … كُلٌّ بِكِلْمَةٍ وَهَذَا الْمُنْفَصِلْ", id: "Boleh mad dan boleh qashr bila terpisah, masing-masing dalam kata yang berbeda; inilah munfashil. (Bait 44)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },
    { t: "cek", q: { id: "Hukum mad muttashil dan munfashil secara berurutan adalah…", ar: "حكم المتصل والمنفصل على الترتيب…" }, o: [{ id: "Jawaz lalu wajib", ar: "جائز ثم واجب" }, { id: "Wajib lalu jawaz", ar: "واجب ثم جائز" }, { id: "Lazim lalu wajib", ar: "لازم ثم واجب" }, { id: "Wajib lalu wajib", ar: "واجب ثم واجب" }], j: 1, b: { id: "Muttashil wajib (tidak boleh qashr); munfashil jaiz (mad atau qashr).", ar: "المتصل واجب والمنفصل جائز." } },

    { t: "judul", id: "Mad Badal", ar: "المد البدل" },
    { t: "definisi", judul: { id: "Mad badal", ar: "المد البدل" },
      istilah: { id: "**Hamz mendahului huruf mad dalam satu kata**, dan tidak ada hamz maupun sukun sesudahnya; huruf mad itu **pengganti hamz kedua**. Contoh: {آدَمُ}, {إِيمَانًا}, {أُوتُوا}.", ar: "ما تقدم فيه الهمز على حرف المد في كلمة ولم يأت بعده همز ولا سكون، ويكون حرف المد فيه مبدلًا من الهمز." } },
    { t: "poin", judul: { id: "Asal kata dan kaidahnya", ar: "الأصل والقاعدة" }, item: [
      { ikon: "puzzle", judul: { id: "Asal kata", ar: "الأصل" }, id: "Asal *adamu* = *a'adamu* (أَأْدَمُ); *imanan* = *i'manan* (إِئْمَانًا); *utu* = *u'tu* (أُؤْتُوا). Hamz kedua yang sukun diganti huruf mad sejenis harakat sebelumnya.", ar: "أصل آدم: أأدم، وإيمانًا: إئمانًا، وأوتوا: أؤتوا." },
      { ikon: "key", judul: { id: "Kaidah", ar: "القاعدة" }, id: "Bila bertemu dua hamz — **yang pertama berharakat, yang kedua sukun** — hamz kedua diganti huruf mad sejenis harakat hamz pertama.", ar: "إذا اجتمعت همزتان الأولى متحركة والثانية ساكنة أُبدلت الثانية حرف مد من جنس حركة ما قبلها." },
      { ikon: "scale", judul: { id: "Hukum dan kadar", ar: "الحكم والمقدار" }, id: "Hukum: **jaiz**. Kadar: **dua harakat** bagi semua qira'ah, kecuali Warsh yang memiliki tiga wajah (qashr, tawassuth, isyba').", ar: "الجواز؛ حركتان لكل قراءة عدا ورش ففيه ثلاثة البدل." } ] },
    { t: "kutipan", ar: "أَوْ قُدِّمَ الْهَمْزُ عَلَى الْمَدِّ وَذَا … بَدَلْ كَآمَنُوا وَإِيمَانًا خُذَا", id: "Atau hamz mendahului mad — itulah badal, seperti *amanu* dan *imanan*. (Bait 46)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },
    { t: "p", id: "**Syabih bil-badal** (menyerupai badal) ialah hamz mendahului huruf mad, tetapi huruf mad itu **asli dalam kata**, bukan pengganti hamz. Contoh: {تَشَاءُونَ}, {لَيَئُوسٌ}, {الظَّمْآنُ}, {قُرْآنٍ}, {مَسْئُولًا}, {إِسْرَائِيلَ}, {دُعَاءً}. Ia serupa badal dalam hal hamz mendahului mad, tetapi berbeda dalam hal huruf madnya tidak berasal dari hamz.", ar: "الثاني: المد شبيه بالبدل: ما يكون فيه حرف المد بعد الهمزة أصليًّا في الكلمة لا مبدلًا من همزة، نحو: {يَشَاءُونَ}، {لَيَئُوسٌ}، {الظَّمْآنُ}، {قُرْآنٍ}، {مَسْئُولًا}، {إِسْرَائِيلَ}، {دُعَاءً}؛ سُمي شبيهًا بالبدل لاتفاقهما في شيء واختلافهما في شيء." },
    { t: "langkah", judul: { id: "Empat keadaan badal dan syabih bil-badal", ar: "أحوال البدل من حيث الإثبات والحذف" }, item: [
      { judul: { id: "Tetap washal dan waqaf", ar: "ثابت وقفًا ووصلًا" }, id: "Terjadi di awal kata, {إِي وَرَبِّي}, atau di tengahnya, {أَنبِئُونِي}.", ar: "في أول الكلمة {إِي وَرَبِّي} أو وسطها {أَنبِئُونِي}." },
      { judul: { id: "Tetap saat waqaf, tidak saat washal", ar: "ثابت وقفًا لا وصلًا" }, id: "{دُعَاءً}, {نِدَاءً}, {جَاءُوا}: saat washal tidak dianggap karena ada mad lain yang **lebih kuat** sesudahnya, yaitu munfashil (jika dibaca tawassuth empat harakat). Pada {وَجَاءُوا أَبَاهُمْ}: *jā-* muttashil, *-ū* badal, dan *-ū abāhum* munfashil. Saat washal: munfashil; saat waqaf: badal tetap.", ar: "لا يعتد به وصلًا لوقوع مد آخر بعده أقوى منه وهو المنفصل." },
      { judul: { id: "Tetap saat washal, tidak saat waqaf", ar: "ثابت وصلًا لا وقفًا" }, id: "{مَآبٍ}, {تَسْتَهْزِئُونَ}: saat waqaf bertemu badal dan 'aridh lissukun, maka yang dipakai **mad 'aridh** karena lebih kuat sebabnya.", ar: "في الوقف يجتمع بدل وعارض للسكون فيقدم العارض لقوته." },
      { judul: { id: "Tetap saat memulai bacaan (ibtida')", ar: "ثابت عند الابتداء" }, id: "{ائْتُونِي}, {ائْذَن لِّي}, {ائْتِ بِقُرْآنٍ}, {اؤْتُمِنَ}. Saat washal, hamz qatha' kedua dibaca sukun. Saat memulai, hamz kedua diganti huruf mad sejenis harakat hamz washl di awal; hamz washl didhammahkan bila huruf ketiga fi'il berharakat dhammah, dan dikasrahkan bila huruf ketiga fathah atau kasrah.", ar: "عند الابتداء تُبدل الهمزة الثانية حرف مد من جنس حركة همزة الوصل؛ تُضم إن كان ثالث الفعل مضمومًا وتُكسر إن كان مفتوحًا أو مكسورًا." } ] },

    { t: "judul", id: "Mad Far'i: Sebabnya Sukun", ar: "المد الفرعي: ما سببه السكون" },
    { t: "definisi", judul: { id: "Mad 'aridh lissukun", ar: "المد العارض للسكون" },
      istilah: { id: "Sesudah huruf mad ada huruf **berharakat apa pun saat washal**, lalu disukunkan **karena waqaf**, baik berhamz maupun tidak. Contoh: {الْفَائِزُونَ}, {لِلْمُتَّقِينَ}, {الْمِهَادُ}.", ar: "أن يأتي بعد حرف المد حرف متحرك بأي حركة في الوصل ثم يسكن للوقف سواء كان مهموزًا أو غير مهموز." } },
    { t: "poin", judul: { id: "Sebab, nama, dan hukum 'aridh", ar: "العارض: السبب والحكم" }, item: [
      { ikon: "hourglass", judul: { id: "Nama", ar: "التسمية" }, id: "Sukunnya **sementara** (*'aradha*) demi waqaf.", ar: "لأن السكون عرض له من أجل الوقف." },
      { ikon: "puzzle", judul: { id: "Wajah", ar: "وجه المد" }, id: "Mad dilakukan agar dapat **menggabungkan dua sukun** (huruf mad dan huruf yang disukunkan karena waqaf) — seolah menggantikan harakat huruf pertama.", ar: "التمكن من الجمع بين الساكنين فكأنه قام مقام تحريك الحرف الأول." },
      { ikon: "scale", judul: { id: "Hukum & kadar", ar: "الحكم والمقدار" }, id: "Hukum: **jaiz**; hanya tampak saat waqaf. Kadar: **2, 4, atau 6** harakat.", ar: "الجواز ولا يثبت إلا وقفًا؛ ست أو أربع أو حركتان." } ] },
    { t: "tabel", judul: { id: "Tiga wajah dan alasannya", ar: "وجوه العارض ومأخذها" }, kolom: [{ id: "Kadar", ar: "المقدار" }, { id: "Alasan", ar: "الوجه" }], baris: [
      [{ id: "2 harakat (qashr)", ar: "حركتان (القصر)" }, { id: "Memandang asalnya: thabi'i saat washal; tidak memperhitungkan sukun yang hanya sementara.", ar: "نظر لأصل المد وهو طبيعي في الوصل ولم يعتد بالسكون العارض" }],
      [{ id: "4 harakat (tawassuth)", ar: "أربع (التوسط)" }, { id: "Memandang adanya sukun 'aridh: ia tidak hilang sama sekali seperti thabi'i, tidak pula tetap seperti lazim.", ar: "نظر إلى وجود سكون عارض فلا هو معدوم ولا دائم" }],
      [{ id: "6 harakat (isyba')", ar: "ست (الإشباع)" }, { id: "Memandang adanya sukun, menyerupakannya dengan mad lazim, dan mempertahankan mad untuk keluar dari bertemunya dua sukun.", ar: "شبهه باللازم وأخذ بمده للتخلص من التقاء الساكنين" }] ] },
    { t: "tabel", judul: { id: "Empat jenis 'aridh lissukun", ar: "أنواع العارض للسكون" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Contoh", ar: "المثال" }, { id: "Hukum dan kadar", ar: "الحكم والمقدار" }], baris: [
      [{ id: "Mutlak (thabi'i saat washal)", ar: "المطلق" }, { id: "{الدِّينِ}, {تَفْعَلُونَ}, {نَسْتَعِينُ}", ar: "الدِّينِ، تَفْعَلُونَ، نَسْتَعِينُ" }, { id: "Jawaz: 2, 4, atau 6", ar: "جوازًا: حركتان أو أربع أو ست" }],
      [{ id: "Muttashil yang 'aridh", ar: "المتصل العارض" }, { id: "{السَّمَاءِ}, {يَشَاءُ}", ar: "السَّمَاءِ، يَشَاءُ" }, { id: "**Wajib** 4 atau 5; **boleh** 6", ar: "يمد وجوبًا أربع أو خمس ويجوز ست" }],
      [{ id: "Badal yang 'aridh", ar: "البدل العارض" }, { id: "{مَآبٍ}, {قُرْآنٍ}", ar: "مَآبٍ، قُرْآنٍ" }, { id: "Jawaz: 2, 4, atau 6", ar: "جوازًا حركتان أو أربع أو ست" }],
      [{ id: "'Aridh pada huruf lin", ar: "اللين" }, { id: "{خَوْفٌ}, {وَيْلٌ}, {قُرَيْشٍ}", ar: "خَوْفٌ، وَيْلٌ، قُرَيْشٍ" }, { id: "Jawaz: 2, 4, atau 6", ar: "جوازًا حركتان أو أربع أو ست" }] ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Mad lin", ar: "مد اللين" }, id: "**Mad lin** adalah wawu/ya' sukun yang didahului fathah saat waqaf, misalnya {بَيْتٍ} dan {خَوْفٌ}. Ia **dilekatkan** pada mad 'aridh lissukun dan mengikuti semua hukumnya (2/4/6).", ar: "ويُلحق بالمد العارض للسكون مد اللين: الواو والياء الساكنتان المفتوح ما قبلهما عند الوقف، كـ {بَيْتٍ} و{خَوْفٌ}." },
    { t: "kutipan", ar: "وَمِثْلُ ذَا إِنْ عَرَضَ السُّكُونُ … وَقْفًا كَتَعْلَمُونَ نَسْتَعِينُ", id: "Seperti itu pula (jaiz) bila sukun datang menyusul saat waqaf, seperti *ta'lamun* dan *nasta'in*. (Bait 45)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },
    { t: "cek", q: { id: "Pada {نَسْتَعِينُ} saat waqaf, kadar mad yang dibolehkan…", ar: "في {نَسْتَعِينُ} وقفًا يجوز…" }, o: [{ id: "2, 4, atau 6 harakat", ar: "2 أو 4 أو 6" }, { id: "Hanya 6 harakat", ar: "6 فقط" }, { id: "Hanya 4 atau 5 harakat", ar: "4 أو 5 فقط" }, { id: "Tidak boleh dipanjangkan", ar: "لا يجوز المد" }], j: 0, b: { id: "'Aridh lissukun: qashr, tawassuth, isyba' (2/4/6).", ar: "القصر والتوسط والإشباع." } },

    { t: "definisi", judul: { id: "Mad lazim", ar: "المد اللازم" },
      istilah: { id: "Sesudah huruf mad terdapat **sukun asli** — tetap saat **washal dan waqaf** — dalam kata atau dalam huruf, baik ringan maupun bertasydid. Contoh: {الضَّالِّينَ}, {الْحَاقَّةُ}, {قٓ}, {صٓ}. Disebut lazim karena **keharusan** dipanjangkan. Hukumnya **lazim**, kadarnya **enam harakat** bagi semua qari.", ar: "أن يأتي بعد حرف المد حرف ساكن سكونًا أصليًّا وصلًا ووقفًا، في كلمة أو حرف، مخففًا أو مشددًا. حكمه اللزوم، ومقداره ست حركات لجميع القراء." } },
    { t: "peta", ikon: "layers", pusat: { id: "Mad lazim: 4 jenis", ar: "أقسام المد اللازم" }, cabang: [
      { id: "Lazim kilmi", ar: "كلمي", sub: [{ id: "Mutsaqqal: sukun bertasydid", ar: "مثقل" }, { id: "Mukhaffaf: sukun tanpa tasydid", ar: "مخفف" }] },
      { id: "Lazim harfi", ar: "حرفي", sub: [{ id: "Mutsaqqal: diidghamkan", ar: "مثقل" }, { id: "Mukhaffaf: tidak diidghamkan", ar: "مخفف" }] } ] },
    { t: "tabel", judul: { id: "Lazim kilmi dan harfi", ar: "اللازم الكلمي والحرفي" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Ciri", ar: "الضابط" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Kilmi mutsaqqal", ar: "كلمي مثقل" }, { id: "Sesudah huruf mad ada sukun asli yang **diidghamkan (bertasydid)**, dalam satu kata. Karena pada asalnya dua huruf yang sama (yang pertama sukun, kedua berharakat), lalu diidghamkan. Contoh: *al-haqqah* asalnya *al-haqqah* = qaf sukun + qaf berharakat.", ar: "ما أتى بعد حرف المد سكون أصلي مدغم مشدد في كلمة واحدة" }, { id: "{الْحَاقَّةُ}, {الضَّالِّينَ}, {الطَّامَّةُ}, {أَتُحَاجُّونِّي}", ar: "الْحَاقَّةُ، الضَّالِّينَ، الطَّامَّةُ، أَتُحَاجُّونِّي" }],
      [{ id: "Kilmi mukhaffaf", ar: "كلمي مخفف" }, { id: "Sukun asli **tidak bertasydid** dan tidak diidghamkan, dalam satu kata. Hanya satu kata di Al-Qur'an.", ar: "سكون أصلي مخفف غير مدغم" }, { id: "{آلْآنَ}", ar: "آلْآنَ" }],
      [{ id: "Harfi mutsaqqal", ar: "حرفي مثقل" }, { id: "Huruf hijaiyah **tiga huruf, yang tengah huruf mad**, dan sesudahnya huruf bertasydid (karena idgham).", ar: "حرف هجاؤه ثلاثة وسطها حرف مد ويأتي بعده مشدد" }, { id: "{الم}, {طسم}", ar: "الٓمٓ، طسٓمٓ" }],
      [{ id: "Harfi mukhaffaf", ar: "حرفي مخفف" }, { id: "Huruf tiga huruf, huruf tengahnya mad, sesudahnya sukun asli tanpa tasydid.", ar: "سكون أصلي غير مشدد" }, { id: "{صٓ}, {نٓ}, {قٓ}", ar: "صٓ، نٓ، قٓ" }] ] },
    { t: "catatan", gaya: "info", judul: { id: "Mad tafriqah (pembeda)", ar: "مد التفرقة" }, id: "Mad lazim pada {آلذَّكَرَيْنِ} dan {آللَّهُ} dinamai **mad tafriqah**: membedakan *istifham* dari *khabar*. Hafsh membolehkan padanya **ibdal dengan isyba'** (alif panjang) atau **tashil**. Demikian pula {آلْآنَ وَقَدْ عَصَيْتَ} di Surah Yunus (dua tempat; istifham) dibedakan dari {الْآنَ خَفَّفَ اللَّهُ عَنكُمْ} di Surah Al-Anfal (khabar).", ar: "ويسمى مد التفرقة في {آلذَّكَرَيْنِ} و{آللَّهُ} وفي {آلْآنَ} لأنه يفرق بين الاستفهام والخبر؛ ولحفص في الأوليين الإبدال مع الإشباع والتسهيل." },
    { t: "poin", judul: { id: "Fawatih as-suwar: empat kelompok", ar: "فواتح السور: أربعة أقسام" }, item: [
      { ikon: "star8", judul: { id: "1. Tiga huruf, tengahnya mad: كم عسل نقص", ar: "النوع الأول: ثلاثة أحرف أوسطها حرف مد ولين" }, id: "Huruf **ن ص ق س ع ل ك م** diucapkan tiga huruf; yang diucap panjang adalah huruf mad di tengah (ya' pada سين dan ميم, wawu pada نون, alif pada قاف/صاد/لام/كاف). Semuanya dipanjangkan **enam harakat (lazim)**.", ar: "تمد حروفه كلها أي حرف المد الواقع في وسطها ست حركات مدًّا لازمًا." },
      { ikon: "waves", judul: { id: "2. 'Ain", ar: "النوع الثاني: العين" }, id: "Huruf **ع** diucapkan tiga huruf, tetapi huruf tengahnya **huruf lin, bukan huruf mad**. Boleh isyba', tawassuth, dan qashr — sebagaimana {كهيعص} dan {حم عسق}.", ar: "يجوز فيه الإشباع والتوسط والقصر." },
      { ikon: "leaf", judul: { id: "3. Dua huruf: حَيٌّ طَهُرْ", ar: "النوع الثالث: حرفان" }, id: "Diucapkan *ha-ya-tha-ha-ra*; termasuk mad thabi'i huruf (**dua harakat**).", ar: "حيٌّ طهر: مد طبيعي حرفي بمقدار حركتين." },
      { ikon: "eye", judul: { id: "4. Alif (hamz)", ar: "النوع الرابع: الألف غير المدية" }, id: "Alif pada {الم} diucapkan *alif* (hamz) tanpa mad di dalamnya.", ar: "حرف الألف غير المدّي وهو الهمز ليس فيه مد." } ] },
    { t: "contoh", judul: { id: "Menghitung mad dalam {الم} dan {طسم}", ar: "تطبيق على {الم} و{طسم}" }, sorot: [
      { label: { id: "الٓمٓ", ar: "الٓمٓ" }, warna: "green", id: "*Alif* tidak dimad. *Lam* = lam-**alif**-mim: yang dimad enam harakat adalah alif di tengah lam. *Mim* = mim-**ya'**-mim: ya' di tengah mim dimad enam harakat, dan terdapat ghunnah dua harakat antara lam dan mim karena idgham → **lazim harfi mutsaqqal**.", ar: "الألف لا تمد، واللام تمد ست، والميم تمد ست، وبين اللام والميم غنة حركتين." },
      { label: { id: "طسٓمٓ", ar: "طسٓمٓ" }, warna: "blue", id: "*Tha'* = *tha-a*: alif di tengah **dua harakat** (thabi'i). *Sin* = sin-**ya'**-nun: ya' tengah **enam harakat**. *Mim* = mim-**ya'**-mim: ya' tengah **enam harakat**; nun sukun di akhir *sin* diidghamkan ke mim sehingga mim bertasydid → lazim harfi mutsaqqal.", ar: "طا حركتان، وسين: الياء ست، وميم: الياء ست، وأدغمت النون الساكنة في الميم." },
      { label: { id: "قٓ", ar: "قٓ" }, warna: "gold", id: "*Qaf* = qaf-**alif**-fa': alif tengah **enam harakat**; huruf sesudahnya (fa') sukun karena waqaf tanpa idgham → **lazim harfi mukhaffaf**. Dibaca *{قٓ وَالْقُرْآنِ الْمَجِيدِ}* dengan alif enam harakat.", ar: "قٓ: تمد الألف ست حركات، وبعدها الفاء ساكنة غير مدغمة." } ] },
    { t: "akordion", judul: { id: "Wajah bacaan 'ain dan alif lam mim washal", ar: "العين وألم الله" }, item: [
      { judul: { id: "Wajah 'ain pada {كهيعص} dan {حم عسق}", ar: "وجوه العين" }, id: "Dari jalur **Asy-Syathibiyyah**: isyba' dan tawassuth; dari **Thayyibah an-Nasyr**: qashr. Ustadz menukil bait Asy-Syathibi: *wa fi 'ain al-wajhan wa thul fudhdhila* (dalam 'ain ada dua wajah, dan isyba' lebih diutamakan), Al-Jamzuri: *wath-thul akhash*. Ad-Dani dalam *Jami' al-Bayan*: dua wajah (isyba' dan tamkin) **sama-sama sahih dan baik**, yang pertama lebih sesuai kias. Abul Hasan bin Ghalbun: Kaf dan Shad dimad satu kadar, Ha' dan Ya' diqashr, 'ain ditamkinkan sedikit; sehingga beliau memilih **tawassuth saja** (dalam *At-Tadzkirah* dan *Jami' al-Bayan*), yang berarti meninggalkan wajah isyba' menurut riwayat Hafsh jalur Syathibiyyah dan Taisir.", ar: "من الشاطبية الإشباع والتوسط، والقصر من طيبة النشر؛ وذكر الداني أن الوجهين صحيحان جيدان والأول أقيس؛ وابن غلبون يتعين عنده التوسط." },
      { judul: { id: "{الم} bersambung dengan {اللَّهُ لَا إِلَٰهَ إِلَّا هُوَ}", ar: "الم الله لا إله إلا هو" }, id: "Saat washal ke ayat sesudahnya, pada mim ada dua wajah: **mad enam harakat**, atau **qashr dengan fathah** (mim difathahkan karena bertemu sukun, lalu dibaca pendek). Wajah kedua: berhenti pada {الم} lalu mulai {اللَّهُ…}.", ar: "يجوز في ميم {الم} وصلًا مع ما بعدها: المد ست حركات، والقصر مع الفتح." },
      { judul: { id: "Ringkasan Ibnu Taimiyyah", ar: "جمع ابن تيمية" }, id: "Ibnu Taimiyyah menghimpun fawatih as-suwar dalam ungkapan **صَحِّحْ طَرِيقَكَ مَعَ السُّنَّةِ**; Al-Jamzuri menghimpun empat belas huruf dengan **صِلْهُ سُحَيْرًا مَنْ قَطَعَكَ**.", ar: "(صحح طريقك مع السنة)، وعند الجمزوري: صله سحيرًا من قطعك." } ] },
    { t: "kutipan", ar: "وَلَازِمٌ إِنِ السُّكُونُ أُصِّلَا … وَصْلًا وَوَقْفًا بَعْدَ مَدٍّ طُوِّلَا", id: "Lazim ialah bila sukun asli, saat washal dan waqaf, sesudah mad — maka dipanjangkan. (Bait 47)", oleh: "Al-Jamzuri, Tuhfat al-Athfal" },

    { t: "judul", id: "Kaidah Kekuatan Mad dan Kasus-kasus Rancu", ar: "قاعدة أقوى المدود" },
    { t: "kutipan", ar: "أَقْوَى الْمُدُودِ لَازِمٌ فَمَا اتَّصَلْ … فَعَارِضٌ فَذُو انْفِصَالٍ فَبَدَلْ", id: "Mad terkuat adalah lazim, lalu muttashil, lalu 'aridh, lalu munfashil, lalu badal.", oleh: "As-Samanudi, Lala'i' al-Bayan" },
    { t: "langkah", judul: { id: "Urutan dari yang terkuat", ar: "ترتيب المدود قوة" }, item: [
      { judul: { id: "Lazim", ar: "اللازم" }, id: "Sebabnya sukun; tetap washal dan waqaf; bertemu huruf mad dalam satu kata atau satu huruf; dan para qari **sepakat** pada kadar enam harakat.", ar: "لثبوته وصلًا ووقفًا واجتماعه مع حرف المد في كلمة أو حرف ولإجماع القراء على مده." },
      { judul: { id: "Muttashil", ar: "المتصل" }, id: "Sebabnya hamz; tetap washal dan waqaf; satu kata; disepakati wajib, meski berbeda kadarnya (semua qari 4-5; Warsh dan Hamzah 6).", ar: "سببه الهمز وثبوته وصلًا ووقفًا واجتماعه في كلمة وإجماعهم على مده." },
      { judul: { id: "'Aridh lissukun", ar: "العارض للسكون" }, id: "Sebabnya sukun, bertemu dalam satu kata, meskipun sementara dan berbeda kadarnya.", ar: "سببه السكون لاجتماعه مع حرف المد في كلمة وإن كان عارضًا." },
      { judul: { id: "Munfashil", ar: "المنفصل" }, id: "Sebabnya hamz tetapi terpisah dari huruf mad, dan mereka berbeda dalam kadarnya.", ar: "سببه الهمز لانفصاله عن حرف المد واختلافهم في مقداره." },
      { judul: { id: "Badal", ar: "البدل" }, id: "**Paling lemah**, karena sebabnya mendahului hurufnya dan huruf mad umumnya pengganti, berbeda dengan mad-mad sebelumnya yang asli.", ar: "أضعف المدود لتقدم سببه عليه ولكون حرف المد مبدلًا من غيره غالبًا." } ] },
    { t: "catatan", gaya: "hikmah", judul: { id: "Kaidah penyelesaian", ar: "القاعدة" }, id: "Bila dalam satu atau dua kata berkumpul **dua sebab** dan salah satunya lebih kuat, **dipakai sebab yang kuat dan sebab lainnya diabaikan**. Inilah makna ucapan Al-Ja'bari: **“yang kuat menghapus (menasakh) hukum yang lemah.”**", ar: "إذا اجتمع سببان لمدين وكان أحدهما أقوى عومل بمقتضى السبب الأقوى وألغي الآخر، وهذا معنى قول الجعبري: «إن القوي ينسخ حكم الضعيف»." },
    { t: "tabel", judul: { id: "Lima kasus yang sering keliru", ar: "كلمات يخطأ فيها الناس" }, kolom: [{ id: "Kata", ar: "الكلمة" }, { id: "Dua sebab yang berkumpul", ar: "السببان" }, { id: "Yang dipakai", ar: "المعمول به" }], baris: [
      [{ id: "{آمِّينَ الْبَيْتَ الْحَرَامَ} (Al-Ma'idah)", ar: "آمِّينَ الْبَيْتَ الْحَرَامَ" }, { id: "Hamz mendahului mad (badal) **dan** sukun lazim sesudah mad (lazim).", ar: "تقدم الهمز (بدل) + سكون لازم (لازم)" }, { id: "**Mad lazim** (lebih kuat): 6 harakat.", ar: "يعمل بالأقوى: لازم" }],
      [{ id: "{رِئَاءَ النَّاسِ} (An-Nisa')", ar: "رِئَاءَ النَّاسِ" }, { id: "Hamz mendahului mad (badal) **dan** hamz sesudah mad dalam satu kata (muttashil).", ar: "بدل + متصل" }, { id: "**Muttashil** (lebih kuat).", ar: "المتصل" }],
      [{ id: "{فَلَمَّا رَأَىٰ أَيْدِيَهُمْ} (Hud: 70)", ar: "رَأَىٰ أَيْدِيَهُمْ" }, { id: "Hamz mendahului mad (badal) **dan** hamz sesudah mad di kata lain (munfashil).", ar: "بدل + منفصل" }, { id: "**Munfashil** (lebih kuat).", ar: "المنفصل" }],
      [{ id: "{يَشَاءُ} saat waqaf", ar: "يَشَاءُ وقفًا" }, { id: "Hamz sesudah mad (muttashil) **dan** sukun 'aridh karena waqaf.", ar: "متصل + عارض" }, { id: "**Muttashil** (sebab pertama lebih kuat): wajib dipanjangkan, **qashr dilarang**.", ar: "المتصل؛ يمتنع القصر" }],
      [{ id: "{كهيعص} dan {حم عسق}", ar: "عين مريم والشورى" }, { id: "Masalah 'ain: isyba', tawassuth, qashr (lihat akordion di atas).", ar: "في العين الأوجه الثلاثة" }, { id: "Isyba' didahulukan dari tawassuth dalam jalur Asy-Syathibiyyah; qashr dari Thayyibah.", ar: "الطول أخص" }] ] },
    { t: "balik", judul: { id: "Kartu kilat: nama mad dan sebabnya", ar: "بطاقات المدود" }, item: [
      { depan: { id: "Hamz sesudah mad dalam satu kata", ar: "همز بعد مد في كلمة" }, belakang: { id: "Muttashil (wajib, 4-5)", ar: "متصل" } },
      { depan: { id: "Hamz sesudah mad di kata lain", ar: "همز بعد مد في كلمة أخرى" }, belakang: { id: "Munfashil (jaiz, 4-5)", ar: "منفصل" } },
      { depan: { id: "Hamz mendahului mad pengganti hamz", ar: "همز قبل مد مبدل" }, belakang: { id: "Badal (2)", ar: "بدل" } },
      { depan: { id: "Sukun karena waqaf", ar: "سكون للوقف" }, belakang: { id: "'Aridh lissukun (2/4/6)", ar: "عارض" } },
      { depan: { id: "Sukun asli setelah mad", ar: "سكون أصلي بعد مد" }, belakang: { id: "Lazim (6)", ar: "لازم" } },
      { depan: { id: "Alif pengganti tanwin saat waqaf", ar: "ألف عن تنوين" }, belakang: { id: "'Iwadh (2)", ar: "عوض" } } ] },
    { t: "tanya", q: { id: "Mengapa mad badal dianggap yang terlemah di antara mad far'i?", ar: "لماذا يعد البدل أضعف المدود؟" },
      a: { id: "Karena **sebabnya (hamz) mendahului huruf mad**, dan huruf mad padanya umumnya **pengganti** dari hamz; sedangkan mad-mad yang lain asli dan sebabnya datang sesudah huruf mad.", ar: "لتقدم سببه عليه، ولكون حرف المد فيه مبدلًا من غيره غالبًا بخلاف المدود الأخرى الأصلية." } },
    { t: "tanya", q: { id: "Mengapa pada muttashil tidak dibolehkan raum bersama isyba' (enam harakat) saat waqaf pada hamz berkasrah?", ar: "لماذا لا يصح الروم مع الإشباع في المتصل المكسور الهمز؟" },
      a: { id: "Karena raum **seperti washal**; saat washal muttashil hanya 4 atau 5 harakat, maka raum hanya bersama 4 atau 5 harakat.", ar: "لأن الروم كالوصل وهو في الوصل يمد أربع أو خمس." } },
    { t: "tanya", q: { id: "Apa perbedaan mad lazim kilmi dan harfi?", ar: "ما الفرق بين اللازم الكلمي والحرفي؟" },
      a: { id: "**Kilmi**: sukun asli bertemu huruf mad dalam **satu kata**. **Harfi**: dalam **satu huruf hijaiyah** yang terucap tiga huruf dan huruf tengahnya mad, hanya ada pada pembuka surah.", ar: "الكلمي في كلمة، والحرفي في حرف هجاؤه ثلاثة أحرف وسطها مد، ولا يكون إلا في فواتح السور." } },
    { t: "ringkasan", item: [
      { id: "Mad = memanjangkan suara pada huruf mad/lin lebih dari dua harakat karena hamz atau sukun; qashr = lawannya.", ar: "المد إطالة الصوت بحرف المد أو اللين لسبب: همز أو سكون؛ وعكسه القصر." },
      { id: "Huruf mad tiga (wai): alif sebelum fathah, wawu sukun sebelum dhammah, ya' sukun sebelum kasrah.", ar: "حروف المد ثلاثة: الألف والواو والياء بشروطها." },
      { id: "Mad thabi'i = 2 harakat; mulhaqat-nya: tamkin, 'iwadh, shilah sughra.", ar: "الطبيعي حركتان وملحقاته: التمكين والعوض والصلة الصغرى." },
      { id: "Sebab hamz: muttashil (wajib 4-5), munfashil (jaiz 4-5), badal (jaiz 2).", ar: "بسبب الهمز: المتصل واجب، والمنفصل جائز، والبدل جائز." },
      { id: "Sebab sukun: 'aridh lissukun (2/4/6) dan lazim (6; kilmi/harfi, mutsaqqal/mukhaffaf).", ar: "بسبب السكون: العارض للسكون جائز، واللازم لازم ست حركات." },
      { id: "Urutan kekuatan: lazim, muttashil, 'aridh, munfashil, badal; yang kuat menghapus yang lemah.", ar: "أقوى المدود: لازم فمتصل فعارض فمنفصل فبدل." } ] }
  ],
  istilah: [
    { ar: "المد", latin: "al-madd", id: "Mad (memanjangkan)", def: { id: "Memanjangkan suara pada huruf mad/lin lebih dari dua harakat karena hamz atau sukun.", ar: "إطالة الصوت بحرف المد أو اللين إلى أكثر من حركتين عند وجود السبب." } },
    { ar: "القصر", latin: "al-qashr", id: "Qashr (tidak dipanjangkan)", def: { id: "Menetapkan huruf mad tanpa tambahan panjang karena tidak ada sebab.", ar: "إثبات حرف المد أو اللين من غير زيادة لعدم السبب." } },
    { ar: "المد الطبيعي", latin: "al-madd ath-thabi'i", id: "Mad asli", def: { id: "Mad dua harakat yang tidak bergantung pada hamz atau sukun.", ar: "ما لا يتوقف على سبب من همز أو سكون ومقداره حركتان." } },
    { ar: "مد التمكين", latin: "madd at-tamkin", id: "Mad tamkin", def: { id: "Bertemunya dua ya' atau dua wawu dengan yang pertama mad atau bertasydid; wajib ditegaskan dua harakat.", ar: "اجتماع ياءين أو واوين أولهما مدية أو مشددة." } },
    { ar: "مد العوض", latin: "madd al-'iwadh", id: "Mad 'iwadh", def: { id: "Alif pengganti tanwin fathah saat waqaf, dua harakat.", ar: "ألف تعوض التنوين المنصوب عند الوقف." } },
    { ar: "مد الصلة", latin: "madd ash-shilah", id: "Mad shilah", def: { id: "Wawu/ya' kecil pada ha' kinayah yang berharakat di antara dua huruf berharakat; sughra 2, kubra 4-5 bila sesudahnya hamz.", ar: "واو أو ياء تلحق هاء الكناية المتحركة بين متحركين." } },
    { ar: "المد المتصل", latin: "al-madd al-muttashil", id: "Mad muttashil", def: { id: "Hamz sesudah huruf mad dalam satu kata; wajib 4 atau 5 harakat.", ar: "همز بعد حرف المد في كلمة؛ واجب." } },
    { ar: "المد المنفصل", latin: "al-madd al-munfashil", id: "Mad munfashil", def: { id: "Hamz di awal kata sesudah huruf mad di akhir kata sebelumnya; jaiz 4 atau 5 harakat.", ar: "همز في كلمة بعد حرف مد في كلمة قبلها؛ جائز." } },
    { ar: "المد العارض للسكون", latin: "al-madd al-'aridh lis-sukun", id: "Mad 'aridh lissukun", def: { id: "Sukun karena waqaf sesudah huruf mad; 2, 4, atau 6 harakat.", ar: "سكون الوقف بعد حرف المد؛ حركتان أو أربع أو ست." } },
    { ar: "المد اللازم", latin: "al-madd al-lazim", id: "Mad lazim", def: { id: "Sukun asli sesudah huruf mad; wajib enam harakat.", ar: "سكون أصلي بعد حرف المد؛ ست حركات." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Sebab mad hanya ada dua, yaitu…", ar: "سبب المد اثنان هما…" }, o: [{ id: "Tasydid atau tanwin", ar: "التشديد أو التنوين" }, { id: "Hamz atau sukun", ar: "الهمز أو السكون" }, { id: "Ghunnah atau qalqalah", ar: "الغنة أو القلقلة" }, { id: "Fathah atau kasrah", ar: "الفتح أو الكسر" }], j: 1, b: { id: "Sebab mad: hamz atau sukun.", ar: "السبب: الهمز أو السكون." } },
      { q: { id: "Huruf mad tiga yang terkumpul dalam kata…", ar: "حروف المد الثلاثة مجموعة في كلمة…" }, o: [{ id: "نُوحِيهَا", ar: "نُوحِيهَا" }, { id: "حَيٌّ طَهُرْ", ar: "حَيٌّ طَهُرْ" }, { id: "كَمْ عَسَلْ", ar: "كَمْ عَسَلْ" }, { id: "صِلْهُ سُحَيْرًا", ar: "صِلْهُ سُحَيْرًا" }], j: 0, b: { id: "Tiga huruf mad (wai) berkumpul pada {نُوحِيهَا}.", ar: "تجتمع في نحو {نُوحِيهَا}." } },
      { q: { id: "Ya' pada {الْبَيْتَ} adalah…", ar: "الياء في {الْبَيْتَ}…" }, o: [{ id: "Huruf mad", ar: "حرف مد" }, { id: "Huruf 'illah", ar: "حرف علة" }, { id: "Huruf lin", ar: "حرف لين" }, { id: "Huruf ghunnah", ar: "حرف غنة" }], j: 2, b: { id: "Ya' sukun yang didahului fathah adalah huruf lin.", ar: "ياء ساكنة مفتوح ما قبلها: لين." } },
      { q: { id: "Kadar mad thabi'i adalah…", ar: "مقدار المد الطبيعي…" }, o: [{ id: "Dua harakat", ar: "حركتان" }, { id: "Empat harakat", ar: "أربع حركات" }, { id: "Lima harakat", ar: "خمس حركات" }, { id: "Enam harakat", ar: "ست حركات" }], j: 0, b: { id: "Mad thabi'i = dua harakat saat washal dan waqaf.", ar: "حركتان وصلًا ووقفًا." } },
      { q: { id: "Hukum mad pada {أُولَٰئِكَ} adalah…", ar: "الحكم في {أُولَٰئِكَ}…" }, o: [{ id: "Mad badal", ar: "مد بدل" }, { id: "Mad munfashil", ar: "مد منفصل" }, { id: "Mad muttashil", ar: "مد متصل" }, { id: "Mad lazim", ar: "مد لازم" }], j: 2, b: { id: "Hamz sesudah huruf mad dalam satu kata: muttashil.", ar: "همز بعد المد في كلمة: متصل." } },
      { q: { id: "Hukum mad pada {إِنَّا أَعْطَيْنَاكَ} adalah…", ar: "الحكم في {إِنَّا أَعْطَيْنَاكَ}…" }, o: [{ id: "Muttashil, wajib", ar: "متصل واجب" }, { id: "Munfashil, jaiz", ar: "منفصل جائز" }, { id: "Badal", ar: "بدل" }, { id: "'Aridh lissukun", ar: "عارض للسكون" }], j: 1, b: { id: "Alif di akhir {إِنَّا}, hamz di awal {أَعْطَيْنَاكَ}: munfashil, hukumnya jaiz.", ar: "منفصل جائز." } },
      { q: { id: "Hukum mad pada {آدَمُ} adalah…", ar: "الحكم في {آدَمُ}…" }, o: [{ id: "Badal", ar: "بدل" }, { id: "Muttashil", ar: "متصل" }, { id: "Lazim kilmi", ar: "لازم كلمي" }, { id: "Shilah kubra", ar: "صلة كبرى" }], j: 0, b: { id: "Hamz mendahului mad, dan mad adalah pengganti hamz kedua (asalnya a'adamu).", ar: "أصلها أأدم: مد بدل." } },
      { q: { id: "Mad pada {الضَّالِّينَ} adalah…", ar: "المد في {الضَّالِّينَ}…" }, o: [{ id: "'Aridh lissukun", ar: "عارض للسكون" }, { id: "Lazim kilmi mutsaqqal", ar: "لازم كلمي مثقل" }, { id: "Lazim harfi mukhaffaf", ar: "لازم حرفي مخفف" }, { id: "Munfashil", ar: "منفصل" }], j: 1, b: { id: "Sukun asli yang diidghamkan (bertasydid) dalam satu kata.", ar: "سكون أصلي مدغم في كلمة." } },
      { q: { id: "Mad pada {آلْآنَ} (Yunus) adalah…", ar: "المد في {آلْآنَ}…" }, o: [{ id: "Lazim kilmi mukhaffaf", ar: "لازم كلمي مخفف" }, { id: "Lazim harfi mutsaqqal", ar: "لازم حرفي مثقل" }, { id: "Badal", ar: "بدل" }, { id: "Thabi'i", ar: "طبيعي" }], j: 0, b: { id: "Sukun asli tanpa tasydid dalam satu kata; disebut juga mad tafriqah.", ar: "كلمي مخفف، ومد التفرقة." } },
      { q: { id: "Mad pada {الٓمٓ} adalah…", ar: "المد في {الٓمٓ}…" }, o: [{ id: "Lazim harfi mukhaffaf", ar: "لازم حرفي مخفف" }, { id: "Lazim harfi mutsaqqal", ar: "لازم حرفي مثقل" }, { id: "Mad lin", ar: "مد لين" }, { id: "Muttashil", ar: "متصل" }], j: 1, b: { id: "Huruf tiga yang tengahnya mad, diidghamkan ke huruf sesudahnya: mutsaqqal.", ar: "حرفي مثقل." } },
      { q: { id: "Urutan kekuatan mad dari yang terkuat adalah…", ar: "ترتيب قوة المدود…" }, o: [{ id: "Lazim, muttashil, 'aridh, munfashil, badal", ar: "لازم، متصل، عارض، منفصل، بدل" }, { id: "Muttashil, lazim, badal, 'aridh, munfashil", ar: "متصل، لازم، بدل، عارض، منفصل" }, { id: "Badal, munfashil, 'aridh, muttashil, lazim", ar: "بدل، منفصل، عارض، متصل، لازم" }, { id: "Lazim, 'aridh, muttashil, badal, munfashil", ar: "لازم، عارض، متصل، بدل، منفصل" }], j: 0, b: { id: "Mengikuti bait: aqwa al-mudud lazim fa mattashal fa 'aridh fa dzu infishal fa badal.", ar: "أقوى المدود لازم فما اتصل…" } },
      { q: { id: "Pada {يَشَاءُ} saat waqaf, mad yang diamalkan adalah…", ar: "في {يَشَاءُ} وقفًا يعمل بـ…" }, o: [{ id: "Hanya qashr dua harakat", ar: "القصر فقط" }, { id: "Muttashil: wajib dipanjangkan, qashr dilarang", ar: "المتصل؛ يمتنع القصر" }, { id: "Badal", ar: "البدل" }, { id: "Munfashil", ar: "المنفصل" }], j: 1, b: { id: "Muttashil lebih kuat dari 'aridh, maka yang diamalkan muttashil dan qashr dilarang.", ar: "المتصل أقوى فيمتنع القصر." } }
    ],
    bs: [
      { t: { id: "Alif dalam Al-Qur'an selalu huruf mad dan lin karena selalu sukun dan didahului fathah.", ar: "الألف دائمًا حرف مد ولين." }, j: true },
      { t: { id: "Wawu yang berharakat disebut huruf lin.", ar: "الواو المتحركة تسمى حرف لين." }, j: false, b: { id: "Wawu/ya' berharakat disebut huruf 'illah.", ar: "تسمى حرفي علة." } },
      { t: { id: "Mad muttashil wajib dipanjangkan dan tidak boleh diqashr.", ar: "المتصل واجب ولا يجوز قصره." }, j: true },
      { t: { id: "Mad munfashil terjadi bila hamz dan huruf mad berada dalam satu kata.", ar: "المنفصل: الهمز والمد في كلمة واحدة." }, j: false, b: { id: "Itu muttashil; munfashil berada dalam dua kata.", ar: "المنفصل في كلمتين." } },
      { t: { id: "Mad lazim enam harakat bagi semua qari.", ar: "اللازم ست حركات لجميع القراء." }, j: true },
      { t: { id: "Mad 'iwadh adalah alif pengganti tanwin fathah yang tetap saat waqaf.", ar: "العوض ألف عن التنوين وقفًا." }, j: true },
      { t: { id: "Pada ya' nida' {يَا أَيُّهَا} dibolehkan waqaf pada huruf mad.", ar: "يجوز الوقف على حرف المد في {يَا أَيُّهَا}." }, j: false, b: { id: "Munfashil hukmi: huruf mad hilang dari tulisan sehingga tidak boleh waqaf padanya.", ar: "الانفصال الحكمي لا يجوز الوقف." } },
      { t: { id: "Mad badal ialah hamz mendahului huruf mad pengganti hamz kedua, dan kadarnya dua harakat.", ar: "البدل: الهمز قبل المد وحركتان." }, j: true },
      { t: { id: "Mad 'aridh lissukun hanya boleh enam harakat.", ar: "العارض للسكون ست فقط." }, j: false, b: { id: "Boleh 2, 4, atau 6.", ar: "حركتان أو أربع أو ست." } },
      { t: { id: "Pada kasus {آمِّينَ الْبَيْتَ الْحَرَامَ}, yang diamalkan adalah mad lazim karena lebih kuat dari badal.", ar: "في {آمِّينَ} يعمل باللازم." }, j: true }
    ],
    jodoh: [
      { a: { id: "Muttashil", ar: "المتصل" }, b: { id: "{السَّمَاءِ}", ar: "السَّمَاءِ" } },
      { a: { id: "Munfashil", ar: "المنفصل" }, b: { id: "{فِي أَحْسَنِ}", ar: "فِي أَحْسَنِ" } },
      { a: { id: "Badal", ar: "البدل" }, b: { id: "{إِيمَانًا}", ar: "إِيمَانًا" } },
      { a: { id: "'Aridh lissukun", ar: "العارض للسكون" }, b: { id: "{نَسْتَعِينُ} saat waqaf", ar: "نَسْتَعِينُ وقفًا" } },
      { a: { id: "Lazim kilmi mutsaqqal", ar: "لازم كلمي مثقل" }, b: { id: "{الْحَاقَّةُ}", ar: "الْحَاقَّةُ" } },
      { a: { id: "Lazim harfi mukhaffaf", ar: "لازم حرفي مخفف" }, b: { id: "{قٓ}", ar: "قٓ" } },
      { a: { id: "'Iwadh", ar: "العوض" }, b: { id: "{عَلِيمًا} saat waqaf", ar: "عَلِيمًا وقفًا" } },
      { a: { id: "Tamkin", ar: "التمكين" }, b: { id: "{حُيِّيتُمْ}", ar: "حُيِّيتُمْ" } }
    ],
    urut: { t: { id: "Urutkan mad berikut dari yang terkuat ke yang terlemah.", ar: "رتب المدود من الأقوى إلى الأضعف." },
      item: [{ id: "Mad lazim", ar: "اللازم" }, { id: "Mad muttashil", ar: "المتصل" }, { id: "Mad 'aridh lissukun", ar: "العارض للسكون" }, { id: "Mad munfashil", ar: "المنفصل" }, { id: "Mad badal", ar: "البدل" }] },
    isian: [
      { t: { id: "Sebab mad ada dua: hamz dan ______.", ar: "سبب المد: الهمز و______." }, j: { id: "sukun", ar: "السكون" }, x: [{ id: "tasydid", ar: "التشديد" }, { id: "tanwin", ar: "التنوين" }, { id: "waqaf", ar: "الوقف" }] },
      { t: { id: "Hamz sesudah huruf mad dalam satu kata disebut mad ______.", ar: "الهمز بعد المد في كلمة: المد ______." }, j: { id: "muttashil", ar: "المتصل" }, x: [{ id: "munfashil", ar: "المنفصل" }, { id: "badal", ar: "البدل" }, { id: "lazim", ar: "اللازم" }] },
      { t: { id: "Kadar mad lazim adalah ______ harakat.", ar: "مقدار المد اللازم ______ حركات." }, j: { id: "enam", ar: "ست" }, x: [{ id: "dua", ar: "حركتان" }, { id: "empat", ar: "أربع" }, { id: "lima", ar: "خمس" }] },
      { t: { id: "Mad badal pada {آدَمُ} berasal dari hamz kedua yang ______.", ar: "البدل في {آدَمُ} أصله همزة ______." }, j: { id: "sukun", ar: "ساكنة" }, x: [{ id: "bertasydid", ar: "مشددة" }, { id: "terhapus", ar: "محذوفة" }, { id: "bertanwin", ar: "منونة" }] },
      { t: { id: "Mad paling lemah di antara mad far'i adalah mad ______.", ar: "أضعف المدود المد ______." }, j: { id: "badal", ar: "البدل" }, x: [{ id: "lazim", ar: "اللازم" }, { id: "muttashil", ar: "المتصل" }, { id: "'aridh", ar: "العارض" }] }
    ],
    pilah: { t: { id: "Pilah: mad sebab hamz, mad sebab sukun, atau mad thabi'i?", ar: "صنف: بسبب الهمز، أو بسبب السكون، أو طبيعي؟" },
      kategori: [{ id: "Sebab hamz", ar: "بسبب الهمز" }, { id: "Sebab sukun", ar: "بسبب السكون" }, { id: "Mad thabi'i", ar: "طبيعي" }],
      item: [
        { t: { id: "{السَّمَاءِ} (muttashil)", ar: "السَّمَاءِ" }, k: 0 },
        { t: { id: "{إِنَّا أَعْطَيْنَاكَ}", ar: "إِنَّا أَعْطَيْنَاكَ" }, k: 0 },
        { t: { id: "{الْحَاقَّةُ}", ar: "الْحَاقَّةُ" }, k: 1 },
        { t: { id: "{نَسْتَعِينُ} saat waqaf", ar: "نَسْتَعِينُ وقفًا" }, k: 1 },
        { t: { id: "{قَالَ}", ar: "قَالَ" }, k: 2 },
        { t: { id: "{عَلِيمًا} saat waqaf", ar: "عَلِيمًا وقفًا" }, k: 2 },
        { t: { id: "{إِيمَانًا}", ar: "إِيمَانًا" }, k: 0 },
        { t: { id: "{صٓ}", ar: "صٓ" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف المد والقصر لغة واصطلاحًا، وما سبب المد؟", id: "Definisikan mad dan qashr secara bahasa dan istilah. Apa sebab mad?" },
      j: { ar: "المد لغة: المط وقيل الزيادة، واصطلاحًا: إطالة الصوت بحرف المد أو اللين إلى أكثر من حركتين عند وجود السبب، والسبب إما الهمز أو السكون. والقصر لغة: المنع والحبس، واصطلاحًا: إثبات حرف المد أو اللين من غير زيادة لعدم وجود السبب.",
        id: "**Mad**: bahasa = *al-math* (memanjangkan) atau tambahan; istilah = memanjangkan suara pada huruf mad/lin lebih dari dua harakat ketika ada sebab, yaitu **hamz atau sukun**. **Qashr**: bahasa = mencegah/menahan; istilah = menetapkan huruf mad/lin tanpa tambahan karena tidak ada sebab." } },
    { t: { ar: "اذكر حروف المد وشروطها مع مثال لكل حرف، وفرّق بينها وبين حرف اللين.", id: "Sebutkan huruf mad beserta syarat dan contohnya, dan bedakan dari huruf lin." },
      j: { ar: "حروف المد ثلاثة (واي): الألف الساكنة المفتوح ما قبلها {قَالَ}، والواو الساكنة المضموم ما قبلها {يَقُولُ}، والياء الساكنة المكسور ما قبلها {قِيلَ}. وحرف اللين: الواو والياء الساكنتان المفتوح ما قبلهما {الْبَيْتَ}، {خَوْفٍ}. فإن تحركتا سميتا حرفي علة.",
        id: "Tiga (wai): **alif** sukun didahului fathah ({قَالَ}); **wawu** sukun didahului dhammah ({يَقُولُ}); **ya'** sukun didahului kasrah ({قِيلَ}). **Huruf lin**: wawu/ya' sukun yang didahului **fathah** ({الْبَيْتَ}, {خَوْفٍ}). Bila keduanya berharakat disebut huruf 'illah." } },
    { t: { ar: "ما الفرق بين المد المتصل والمنفصل من حيث التعريف والحكم والمقدار؟ ومثل لكل منهما.", id: "Bedakan mad muttashil dan munfashil dari definisi, hukum, dan kadar, serta beri contoh masing-masing." },
      j: { ar: "المتصل: همز بعد حرف المد في كلمة واحدة، كـ {السَّمَاءِ}، حكمه الوجوب، ومقداره أربع أو خمس (وست في الوقف على المتطرف، وورش وحمزة ست). المنفصل: همز بعد حرف المد في كلمة أخرى، كـ {إِنَّا أَعْطَيْنَاكَ}، حكمه الجواز (مد أو قصر) ويثبت وصلًا فقط، ومقداره أربع أو خمس من طريق الشاطبية.",
        id: "**Muttashil**: hamz sesudah huruf mad dalam **satu kata** ({السَّمَاءِ}); hukum **wajib**; kadar 4 atau 5 (6 pada waqaf hamz akhir kata; Warsh dan Hamzah 6). **Munfashil**: hamz di **kata berikutnya** ({إِنَّا أَعْطَيْنَاكَ}); hukum **jaiz**; hanya saat washal (saat waqaf menjadi thabi'i); kadar 4 atau 5 jalur Asy-Syathibiyyah." } },
    { t: { ar: "حدد نوع المد وحكمه في: {جَاءَ}، {آدَمُ}، {الدِّينِ}، {الضَّالِّينَ}، {قٓ}.", id: "Tentukan jenis mad dan hukumnya pada: {جَاءَ}, {آدَمُ}, {الدِّينِ}, {الضَّالِّينَ}, {قٓ}." },
      j: { ar: "{جَاءَ}: متصل واجب. {آدَمُ}: بدل جائز حركتان. {الدِّينِ}: طبيعي وصلًا وعارض للسكون وقفًا (2 أو 4 أو 6). {الضَّالِّينَ}: لازم كلمي مثقل ست حركات. {قٓ}: لازم حرفي مخفف ست حركات.",
        id: "{جَاءَ}: **muttashil**, wajib. {آدَمُ}: **badal**, jaiz, 2 harakat. {الدِّينِ}: thabi'i saat washal, **'aridh lissukun** saat waqaf (2/4/6). {الضَّالِّينَ}: **lazim kilmi mutsaqqal**, 6. {قٓ}: **lazim harfi mukhaffaf**, 6." } },
    { t: { ar: "رتب المدود الفرعية من الأقوى إلى الأضعف، واشرح قاعدة «القوي ينسخ الضعيف» بمثالين.", id: "Urutkan mad far'i dari yang terkuat, dan jelaskan kaidah “yang kuat menghapus yang lemah” dengan dua contoh." },
      j: { ar: "أقوى المدود لازم فمتصل فعارض فمنفصل فبدل. وإذا اجتمع سببان عومل بالأقوى وألغي الضعيف: في {آمِّينَ الْبَيْتَ الْحَرَامَ} يجتمع بدل ولازم فيعمل باللازم، وفي {رِئَاءَ النَّاسِ} يجتمع بدل ومتصل فيعمل بالمتصل.",
        id: "Urutan: **lazim, muttashil, 'aridh, munfashil, badal**. Bila dua sebab bertemu, dipakai yang lebih kuat dan yang lemah diabaikan. Contoh: {آمِّينَ الْبَيْتَ الْحَرَامَ} (badal + lazim) → **lazim**; {رِئَاءَ النَّاسِ} (badal + muttashil) → **muttashil**." } }
  ]
});
