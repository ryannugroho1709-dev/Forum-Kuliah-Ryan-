/* Ushul Tafsir — Pertemuan 15: Kaidah-kaidah Tarjih (1) */
Kuliah.pertemuan("ushul-tafsir", {
  no: 15, motif: "mizan", tema: 1, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/570",
  bab: { id: "Kaidah tafsir & tarjih", ar: "قواعد التفسير والترجيح" },
  judul: { id: "Kaidah-kaidah Tarjih (1): Lima Kaidah Pertama", ar: "قواعد الترجيح (١)" },
  ringkas: {
    id: "Definisi dan urgensi kaidah tarjih, lalu lima kaidah pertama: tafsir Nabi ﷺ didahulukan; yang umum tetap umum sampai ada pengkhusus; pendapat yang sesuai konteks lebih utama; makna yang masyhur didahulukan atas yang jarang; dan pendapat ijma'/jumhur/mayoritas didahulukan — masing-masing dengan contoh tarjih para imam tafsir.",
    ar: "تعريف قواعد الترجيح وأهميتها، ثم خمس قواعد: تفسير النبي ﷺ مقدم، والعام يبقى على عمومه، والقول الموافق للسياق أولى، واللفظ المشهور مقدم على الشاذ، والقول المجمع عليه أو قول الجمهور مقدم."
  },
  tujuan: [
    { id: "Mendefinisikan kaidah tarjih dan menjelaskan urgensinya bagi mufassir dan pembaca.", ar: "تعريف قواعد الترجيح وبيان أهميتها." },
    { id: "Memahami lima kaidah tarjih pertama beserta contoh dan alasannya.", ar: "فهم القواعد الخمس الأولى بأمثلتها وعللها." },
    { id: "Menerapkan kaidah tarjih pada contoh perbedaan tafsir.", ar: "تطبيق القواعد على الأمثلة." }
  ],
  isi: [
    { t: "judul", id: "Definisi & Urgensi Kaidah Tarjih", ar: "تعريف قواعد الترجيح وأهميتها" },
    { t: "definisi", istilah: { id: "**Kaidah-kaidah umum yang digunakan mufassir untuk men-tarjih (menguatkan salah satu) di antara pendapat-pendapat yang berbeda dalam menjelaskan makna Al-Qur'an.**", ar: "قواعد كلية يُعمِلها المفسر للترجيح بين الأقوال المختلفة في بيان معاني القرآن العظيم." } },
    { t: "banding", judul: { id: "Urgensinya tampak dari dua sisi", ar: "تظهر أهميتها من جهتين" },
      kiri: { judul: { id: "Bagi mufassir", ar: "من جهة المفسر" }, ikon: "pen", warna: "green", poin: [
        { id: "Membantu **memilih** pendapat tafsir.", ar: "تفيده في انتقاء اختياراته التفسيرية." },
        { id: "Menjaga **keseimbangan & konsistensi** pilihannya — tidak memilih dengan satu pertimbangan di sini lalu pertimbangan yang berlawanan di sana.", ar: "وفي توازن اختياراته، فلا تراه مضطربًا يختار باعتبار هنا وباعتبار مضاد هناك." } ] },
      kanan: { judul: { id: "Bagi pembaca", ar: "من جهة القارئ" }, ikon: "book", warna: "blue", poin: [
        { id: "**Belajar** cara menyikapi perbedaan tafsir dan menerapkannya.", ar: "يتعلم منها كيفية التعامل مع الاختلاف ويطبقها." },
        { id: "**Memakainya** ketika ia mulai menafsirkan Al-Qur'an.", ar: "ويستخدمها إذا شرع في التفسير." } ] } },

    { t: "judul", id: "Kaidah 1: Tafsir Nabi ﷺ Didahulukan atas Selainnya", ar: "القاعدة الأولى: تفسير النبي ﷺ مقدم على غيره" },
    { t: "ayat", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ", id: "Allah menyerahkan penjelasan Al-Qur'an kepada Nabi ﷺ. Jika penjelasan beliau berbeda dengan penjelasan selainnya, **kita terima penjelasan beliau dan tolak yang menyelisihinya**.", src: "QS. An-Nahl: 44" },
    { t: "contoh", ayat: { ar: "يَوْمَ نَقُولُ لِجَهَنَّمَ هَلِ امْتَلَأْتِ وَتَقُولُ هَلْ مِن مَّزِيدٍ", src: "ق: ٣٠" },
      sorot: [
        { label: { id: "Pendapat 1: penafian", ar: "النفي" }, warna: "blue", id: "\"*Hal min mazid*\" = **tidak ada tambahan lagi** — karena sudah sangat penuh dan sesak.", ar: "أي: ما من مزيد؛ لشدة امتلائها." },
        { label: { id: "Pendapat 2: meminta tambahan", ar: "الاستزادة" }, warna: "gold", id: "= \"**Tambahlah!**\" — Jahannam meminta tambahan.", ar: "تقول: زدني." },
        { label: { id: "Tarjih Ath-Thabari", ar: "ترجيح الطبري" }, warna: "green", id: "Pendapat kedua, **karena shahihnya berita dari Rasul ﷺ**: \"Jahannam **senantiasa** berkata: adakah tambahan? hingga Allah meletakkan kaki-Nya padanya, lalu ia berkata: cukup, cukup.\" (Anas). Kata \"**senantiasa**\" menunjukkan ucapan yang bersambung; dan dalam hadits Abu Hurairah \"**di situlah Dia memenuhinya**\" — berarti sebelumnya belum penuh.", ar: "قال الطبري: ففي قوله ﷺ: «لا تزال جهنم تقول هل من مزيد» دليل واضح على أن ذلك بمعنى الاستزادة لا بمعنى النفي؛ لأن قوله «لا تزال» دليل على اتصال قول بعد قول." } ] },

    { t: "judul", id: "Kaidah 2: Yang Umum Tetap Umum Selama Tak Ada Pengkhusus", ar: "القاعدة الثانية: يبقى العام على عمومه ما لم يخرجه مخصص" },
    { t: "catatan", gaya: "faidah", id: "Ungkapan penulis: **\"Asal dalam berita dan hukum adalah umum; tidak masuk pengkhususan kecuali dengan dalil.\"** Jika dalil pengkhusus ada, yang umum dikhususkan.", ar: "عبر المصنف عنها بقوله: الأصل في الأخبار والأحكام العموم، ولا يدخلها الخصوص إلا بدليل." },
    { t: "contoh", judul: { id: "Tetap umum — tak ada pengkhusus", ar: "يبقى على عمومه" }, ayat: { ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا لِيَسْتَأْذِنكُمُ الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ", src: "النور: ٥٨" },
      id: "Perbedaan: yang dimaksud **budak laki-laki saja**, atau **laki-laki dan perempuan**? Ath-Thabari: **keduanya**, karena Allah mengumumkan \"*alladzina malakat aimanukum*\" tanpa mengkhususkan laki-laki atau perempuan — **alasan tarjih: keumuman lafaz**.", ar: "قال الطبري: وأولى القولين بالصواب قول من قال: عُني به الذكور والإناث؛ لأن الله عمَّ بقوله {الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ} جميع أملاك أيماننا." },
    { t: "contoh", judul: { id: "Dikhususkan — karena ada dalil", ar: "يخصص بدليل" }, ayat: { ar: "وَلَا تُبَاشِرُوهُنَّ وَأَنتُمْ عَاكِفُونَ فِي الْمَسَاجِدِ", src: "البقرة: ١٨٧" },
      sorot: [
        { label: { id: "Pendapat 1", ar: "القول الأول" }, warna: "blue", id: "*Mubasyarah* terlarang bagi yang i'tikaf = **jima' saja**.", ar: "الجماع دون غيره." },
        { label: { id: "Pendapat 2", ar: "القول الثاني" }, warna: "gold", id: "= **semua bentuk mubasyarah**: menyentuh, mencium, jima' — karena Allah mengumumkan larangan.", ar: "جميع معاني المباشرة من لمس وقبلة وجماع." },
        { label: { id: "Tarjih Ath-Thabari", ar: "ترجيح الطبري" }, warna: "green", id: "Yang benar: **jima' atau yang setara dengannya yang mewajibkan mandi** — karena banyak riwayat bahwa istri-istri Nabi ﷺ **menyisir rambut beliau saat i'tikaf** ('Aisyah: \"beliau mendekatkan kepalanya kepadaku lalu aku menyisirnya\"). Menyisir pasti menyentuh, maka sentuhan bukan yang dilarang → **keumuman dikhususkan oleh sunnah**.", ar: "وأولى القولين عندي بالصواب: الجماع أو ما قام مقامه مما أوجب غسلًا؛ وقد تظاهرت الأخبار عن رسول الله ﷺ أن نساءه كن يرجِّلنه وهو معتكف." } ] },

    { t: "judul", id: "Kaidah 3: Pendapat yang Sesuai Konteks Lebih Utama", ar: "القاعدة الثالثة: القول الموافق للسياق أولى من غيره" },
    { t: "p", id: "*Siyaq* adalah yang mendahului dan mengikuti kalimat yang ditafsirkan. Tafsir sebuah lafaz harus **selaras dengan sebelum dan sesudahnya**.", ar: "السياق ما كان سابقًا للجملة المفسرة أو لاحقًا بها، فإذا أردنا أن نفسر لفظة لا بد أن تكون متسقة مع ما قبلها وما بعدها." },
    { t: "contoh", ayat: { ar: "فَلَمَّا دَخَلُوا عَلَىٰ يُوسُفَ آوَىٰ إِلَيْهِ أَبَوَيْهِ", src: "يوسف: ٩٩" },
      sorot: [
        { label: { id: "Pendapat 1", ar: "القول الأول" }, warna: "blue", id: "Ayah dan **bibinya** (dari pihak ibu), karena ibunya telah lama wafat.", ar: "أبوه وخالته، وكانت أمه قد ماتت." },
        { label: { id: "Pendapat 2", ar: "القول الثاني" }, warna: "gold", id: "Ayah dan **ibunya** yang masih hidup.", ar: "أبوه وأمه." },
        { label: { id: "Tarjih", ar: "الترجيح" }, warna: "green", id: "Ibnu Jarir: tidak ada dalil wafatnya sang ibu, dan **zahir Al-Qur'an menunjukkan ia hidup**. Ibnu Katsir: \"Inilah yang dimenangkan, yang ditunjukkan oleh **konteks**.\"", ar: "قال ابن جرير: ولم يقم دليل على موت أمه، وظاهر القرآن يدل على حياتها، قال ابن كثير: وهذا الذي نصره هو المنصور الذي يدل عليه السياق." } ] },

    { t: "judul", id: "Kaidah 4: Makna Masyhur dalam Bahasa Didahulukan atas yang Jarang/Syadz", ar: "القاعدة الرابعة: اللفظ المشهور في اللغة مقدم على الأقل أو الشاذ" },
    { t: "contoh", ayat: { ar: "وَأَذَانٌ مِّنَ اللَّهِ وَرَسُولِهِ إِلَى النَّاسِ يَوْمَ الْحَجِّ الْأَكْبَرِ", src: "التوبة: ٣" },
      sorot: [
        { label: { id: "Pendapat 1", ar: "القول الأول" }, warna: "blue", id: "*Yaum al-hajj al-akbar* = **hari nahr** (10 Dzulhijjah).", ar: "يوم النحر." },
        { label: { id: "Pendapat 2 (Mujahid)", ar: "قول مجاهد" }, warna: "gold", id: "= **seluruh hari Mina**, bukan satu hari tertentu.", ar: "أيام منى كلها." },
        { label: { id: "Tarjih Ath-Thabari", ar: "ترجيح الطبري" }, warna: "green", id: "**Hari nahr**, karena: banyak riwayat 'Ali menyampaikan Bara'ah kepada kaum musyrik pada hari nahr; Nabi ﷺ bersabda pada hari nahr, \"Inilah hari haji akbar\"; hari dinamai dengan amalan di dalamnya (hari 'Arafah, hari Adha, hari Fitri) dan amalan haji dilakukan pada hari nahr. Pendapat Mujahid — \"hari\" bermakna \"hari-hari\" — **mungkin dalam bahasa Arab tetapi bukan yang paling masyhur**; makna masyhur *yaum* adalah dari terbenam matahari hingga terbenam berikutnya.", ar: "قال الطبري: وأما ما قال مجاهد… فإن ذلك وإن كان جائزًا في كلام العرب… فليس بالأشهر الأعرف في كلام العرب من معانيه… وإنما محمل تأويل كتاب الله على الأشهر الأعرف من كلام من نزل الكتاب بلسانه." } ] },

    { t: "judul", id: "Kaidah 5: Pendapat Ijma', Jumhur, atau Mayoritas Didahulukan", ar: "القاعدة الخامسة: القول المجمع عليه أو قول الجمهور أو الأكثر مقدم" },
    { t: "contoh", ayat: { ar: "وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ بِالْحَقِّ إِذْ قَرَّبَا قُرْبَانًا", src: "المائدة: ٢٧" },
      sorot: [
        { label: { id: "Jumhur", ar: "الجمهور" }, warna: "green", id: "Dua putra Adam **dari sulbinya**: Qabil dan Habil.", ar: "ابنا آدم لصلبه، وهما قابيل وهابيل." },
        { label: { id: "Al-Hasan al-Bashri", ar: "الحسن البصري" }, warna: "gold", id: "Bukan anak kandungnya, karena **kurban hanya ada pada Bani Israil**.", ar: "ليسا لصلبه، ولم تكن القرابين إلا في بني إسرائيل." },
        { label: { id: "Tarjih Ibnu 'Athiyyah", ar: "ترجيح ابن عطية" }, warna: "green", id: "\"Ini keliru. **Bagaimana mungkin seorang Bani Israil tidak tahu cara mengubur** hingga harus meniru burung gagak?\" — pemakaman sudah dikenal di Bani Israil. Kurban memang berlanjut pada Bani Israil, tetapi sudah ada sejak putra Adam. \"**Yang benar pendapat jumhur.**\"", ar: "قال ابن عطية: وهذا وهم، وكيف يجهل صورة الدفن أحد من بني إسرائيل حتى يقتدي بالغراب؟ والصحيح قول الجمهور." } ] },
    { t: "cek", q: { id: "Kaidah apa yang dipakai Ath-Thabari ketika memilih \"budak laki-laki dan perempuan\" pada An-Nur: 58?", ar: "بأي قاعدة رجح الطبري في آية الاستئذان؟" }, o: [{ id: "Yang umum tetap umum", ar: "العام يبقى على عمومه" }, { id: "Konteks", ar: "السياق" }, { id: "Pendapat jumhur", ar: "قول الجمهور" }], j: 0, b: { id: "Allah mengumumkan lafaz *alladzina malakat aimanukum* tanpa pengkhusus.", ar: "لأن الله عمَّ ولم يخصص." } },
    { t: "ringkasan", item: [
      { id: "Kaidah tarjih = kaidah umum untuk men-tarjih antarpendapat tafsir; berguna bagi mufassir dan pembaca.", ar: "تعريف قواعد الترجيح وأهميتها." },
      { id: "1) Tafsir Nabi ﷺ didahulukan — *hal min mazid* = meminta tambahan.", ar: "القاعدة الأولى." },
      { id: "2) Umum tetap umum kecuali ada pengkhusus — An-Nur: 58 (umum); i'tikaf (dikhususkan sunnah).", ar: "القاعدة الثانية." },
      { id: "3) Sesuai konteks lebih utama — ibu Yusuf masih hidup.", ar: "القاعدة الثالثة." },
      { id: "4) Makna masyhur didahulukan — haji akbar = hari nahr.", ar: "القاعدة الرابعة." },
      { id: "5) Ijma'/jumhur didahulukan — dua putra Adam dari sulbinya.", ar: "القاعدة الخامسة." } ] }
  ],
  istilah: [
    { ar: "قواعد الترجيح", latin: "qawa'id at-tarjih", id: "Kaidah-kaidah tarjih", def: { id: "Kaidah umum untuk menguatkan salah satu pendapat tafsir yang berbeda.", ar: "قواعد كلية يُعملها المفسر للترجيح بين الأقوال." } },
    { ar: "الترجيح", latin: "at-tarjih", id: "Tarjih", def: { id: "Menguatkan salah satu pendapat atas yang lain dengan dalil/qarinah.", ar: "تقوية أحد القولين." } },
    { ar: "الاستزادة", latin: "al-istizadah", id: "Meminta tambahan", def: { id: "Makna *hal min mazid* yang dirajihkan dengan hadits.", ar: "معنى «هل من مزيد»." } },
    { ar: "المخصِّص", latin: "al-mukhashshish", id: "Dalil pengkhusus", def: { id: "Dalil yang mengeluarkan sebagian cakupan lafaz umum.", ar: "الدليل المخرج لبعض أفراد العام." } },
    { ar: "المباشرة", latin: "al-mubasyarah", id: "Mubasyarah", def: { id: "Dalam ayat i'tikaf: jima' atau yang setara (mewajibkan mandi).", ar: "الجماع أو ما قام مقامه." } },
    { ar: "يوم الحج الأكبر", latin: "yaum al-hajj al-akbar", id: "Hari haji akbar", def: { id: "Hari nahr menurut tarjih Ath-Thabari.", ar: "يوم النحر." } },
    { ar: "الجمهور", latin: "al-jumhur", id: "Mayoritas ulama", def: { id: "Pendapat mereka didahulukan atas pendapat perseorangan.", ar: "قول الأكثر." } },
    { ar: "ابنا آدم", latin: "ibna Adam", id: "Dua putra Adam", def: { id: "Qabil dan Habil dari sulbinya (jumhur).", ar: "قابيل وهابيل." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Kaidah tarjih didefinisikan sebagai…", ar: "قواعد الترجيح هي…" }, o: [{ id: "Kaidah umum untuk men-tarjih antarpendapat tafsir", ar: "قواعد كلية للترجيح بين الأقوال" }, { id: "Kaidah membaca Al-Qur'an", ar: "قواعد التلاوة" }, { id: "Kaidah menulis mushaf", ar: "قواعد الرسم" }, { id: "Kaidah nahwu", ar: "قواعد النحو" }], j: 0 },
      { q: { id: "Salah satu faedah kaidah tarjih bagi mufassir adalah…", ar: "من فوائد قواعد الترجيح للمفسر…" }, o: [{ id: "Konsisten dan seimbang dalam pilihannya", ar: "التوازن في اختياراته" }, { id: "Memperbanyak pendapat", ar: "تكثير الأقوال" }, { id: "Menghindari hadits", ar: "تجنب الحديث" }, { id: "Mempercepat menulis", ar: "سرعة التأليف" }], j: 0 },
      { q: { id: "Ath-Thabari menguatkan *hal min mazid* bermakna…", ar: "رجح الطبري أن «هل من مزيد» بمعنى…" }, o: [{ id: "Penafian (sudah penuh)", ar: "النفي" }, { id: "Meminta tambahan", ar: "الاستزادة" }, { id: "Pertanyaan biasa", ar: "استفهام محض" }, { id: "Ancaman", ar: "التهديد" }], j: 1 },
      { q: { id: "Kata dalam hadits yang menunjukkan ucapan Jahannam bersambung adalah…", ar: "اللفظ الدال على اتصال القول في الحديث…" }, o: [{ id: "\"Senantiasa (la tazal)\"", ar: "لا تزال" }, { id: "\"Cukup\"", ar: "قط" }, { id: "\"Kaki\"", ar: "قدم" }, { id: "\"Hari kiamat\"", ar: "يوم القيامة" }], j: 0 },
      { q: { id: "Ungkapan penulis untuk kaidah kedua adalah…", ar: "عبارة المصنف في القاعدة الثانية…" }, o: [{ id: "Asal dalam berita dan hukum adalah umum; tidak dikhususkan kecuali dengan dalil", ar: "الأصل في الأخبار والأحكام العموم" }, { id: "Asal semua ayat mansukh", ar: "الأصل النسخ" }, { id: "Asal makna adalah majaz", ar: "الأصل المجاز" }, { id: "Asal ayat khusus", ar: "الأصل الخصوص" }], j: 0 },
      { q: { id: "Dalil pengkhusus larangan *mubasyarah* bagi yang i'tikaf adalah…", ar: "المخصص لعموم المباشرة للمعتكف…" }, o: [{ id: "Ijma'", ar: "الإجماع" }, { id: "Istri Nabi ﷺ menyisir rambut beliau saat i'tikaf", ar: "ترجيل نسائه له وهو معتكف" }, { id: "Qiyas", ar: "القياس" }, { id: "Bahasa", ar: "اللغة" }], j: 1 },
      { q: { id: "Ibnu Katsir berkata tentang pendapat bahwa ibu Yusuf masih hidup: \"Inilah yang ditunjukkan oleh…\"", ar: "قال ابن كثير: وهذا الذي نصره هو المنصور الذي يدل عليه…" }, o: [{ id: "Ijma'", ar: "الإجماع" }, { id: "Konteks (siyaq)", ar: "السياق" }, { id: "Israiliyyat", ar: "الإسرائيليات" }, { id: "Sebab nuzul", ar: "سبب النزول" }], j: 1 },
      { q: { id: "Ath-Thabari menolak pendapat Mujahid bahwa haji akbar = seluruh hari Mina karena…", ar: "رد الطبري قول مجاهد في يوم الحج الأكبر لأن…" }, o: [{ id: "Mustahil dalam bahasa", ar: "مستحيل لغة" }, { id: "Mungkin dalam bahasa, tetapi bukan makna yang paling masyhur", ar: "جائز لكنه ليس بالأشهر الأعرف" }, { id: "Sanadnya lemah", ar: "ضعف السند" }, { id: "Bertentangan dengan qira'at", ar: "يخالف القراءة" }], j: 1 },
      { q: { id: "Hujjah Ibnu 'Athiyyah menolak pendapat Al-Hasan tentang dua putra Adam adalah…", ar: "حجة ابن عطية في رد قول الحسن…" }, o: [{ id: "Bani Israil tidak mungkin tak tahu cara mengubur hingga meniru gagak", ar: "كيف يجهل الدفن أحد من بني إسرائيل" }, { id: "Kurban tidak pernah ada", ar: "لم تكن قرابين" }, { id: "Hadits shahih", ar: "حديث صحيح" }, { id: "Qira'at", ar: "القراءة" }], j: 0 },
      { q: { id: "Tarjih \"dua putra Adam dari sulbinya\" memakai kaidah…", ar: "الترجيح في ابني آدم بقاعدة…" }, o: [{ id: "Pendapat jumhur didahulukan", ar: "قول الجمهور مقدم" }, { id: "Tafsir Nabi ﷺ", ar: "تفسير النبي ﷺ" }, { id: "Umum tetap umum", ar: "بقاء العموم" }, { id: "Makna masyhur", ar: "المشهور" }], j: 0 }
    ],
    bs: [
      { t: { id: "Kaidah tarjih bermanfaat pula bagi pembaca untuk belajar menyikapi perbedaan tafsir.", ar: "قواعد الترجيح تفيد القارئ تعلمًا وتطبيقًا." }, j: true },
      { t: { id: "Jika penjelasan Nabi ﷺ berbeda dengan penjelasan selainnya, keduanya disejajarkan.", ar: "إذا اختلف بيان النبي ﷺ وبيان غيره يُسوَّى بينهما." }, j: false },
      { t: { id: "Dalam An-Nur: 58, Ath-Thabari memilih budak laki-laki saja.", ar: "اختار الطبري في آية النور الذكور فقط." }, j: false, b: { id: "Ia memilih laki-laki dan perempuan karena keumuman lafaz.", ar: "الذكور والإناث." } },
      { t: { id: "Menyisir rambut pasti menyentuh, maka sentuhan bukan mubasyarah yang dilarang bagi yang i'tikaf.", ar: "الترجيل فيه مس، فالمس ليس مما منع على المعتكف." }, j: true },
      { t: { id: "Siyaq adalah yang mendahului dan mengikuti kalimat yang ditafsirkan.", ar: "السياق ما سبق الجملة المفسرة ولحقها." }, j: true },
      { t: { id: "Makna masyhur *yaum* menurut Ath-Thabari adalah dari terbitnya fajar hingga terbenam matahari.", ar: "الأغلب على معنى اليوم من طلوع الفجر إلى الغروب." }, j: false, b: { id: "Dari terbenam matahari hingga terbenam berikutnya.", ar: "من غروب الشمس إلى مثله من الغد." } },
      { t: { id: "Al-Hasan al-Bashri berpendapat dua putra Adam bukan anak kandungnya.", ar: "رأى الحسن أن ابني آدم ليسا لصلبه." }, j: true }
    ],
    jodoh: [
      { a: { id: "Tafsir Nabi ﷺ didahulukan", ar: "تقديم التفسير النبوي" }, b: { id: "{هَلْ مِن مَّزِيدٍ}", ar: "هل من مزيد" } },
      { a: { id: "Umum tetap umum", ar: "بقاء العموم" }, b: { id: "{لِيَسْتَأْذِنكُمُ الَّذِينَ مَلَكَتْ أَيْمَانُكُمْ}", ar: "ليستأذنكم" } },
      { a: { id: "Dikhususkan dalil", ar: "التخصيص بدليل" }, b: { id: "{وَلَا تُبَاشِرُوهُنَّ وَأَنتُمْ عَاكِفُونَ}", ar: "ولا تباشروهن" } },
      { a: { id: "Konteks", ar: "السياق" }, b: { id: "{آوَىٰ إِلَيْهِ أَبَوَيْهِ}", ar: "آوى إليه أبويه" } },
      { a: { id: "Makna masyhur", ar: "المشهور" }, b: { id: "{يَوْمَ الْحَجِّ الْأَكْبَرِ}", ar: "يوم الحج الأكبر" } },
      { a: { id: "Jumhur", ar: "الجمهور" }, b: { id: "{نَبَأَ ابْنَيْ آدَمَ}", ar: "نبأ ابني آدم" } }
    ],
    urut: { t: { id: "Susun lima kaidah tarjih pertama sesuai urutan kitab.", ar: "رتب القواعد الخمس الأولى." },
      item: [{ id: "Tafsir Nabi ﷺ didahulukan", ar: "تفسير النبي ﷺ مقدم" }, { id: "Umum tetap umum kecuali ada pengkhusus", ar: "يبقى العام على عمومه" }, { id: "Yang sesuai konteks lebih utama", ar: "الموافق للسياق أولى" }, { id: "Makna masyhur didahulukan atas yang syadz", ar: "المشهور مقدم على الشاذ" }, { id: "Ijma'/jumhur/mayoritas didahulukan", ar: "قول الجمهور مقدم" }] },
    isian: [
      { t: { id: "Nabi ﷺ: \"Jahannam senantiasa berkata: adakah tambahan? hingga Allah meletakkan ______-Nya.\"", ar: "«ما تزال جهنم تقول هل من مزيد حتى يضع الله عليها ______»" }, j: { id: "kaki", ar: "قدمه" }, x: [{ id: "tangan", ar: "يده" }, { id: "pintu", ar: "بابه" }, { id: "rahmat", ar: "رحمته" }] },
      { t: { id: "Ath-Thabari: mubasyarah yang dilarang bagi yang i'tikaf adalah jima' atau yang mewajibkan ______.", ar: "الجماع أو ما قام مقامه مما أوجب ______." }, j: { id: "mandi", ar: "غسلًا" }, x: [{ id: "wudhu", ar: "وضوءًا" }, { id: "kaffarah", ar: "كفارة" }, { id: "qadha'", ar: "قضاءً" }] },
      { t: { id: "Hari dinamai dengan amalan di dalamnya; amalan haji dilakukan pada hari ______.", ar: "يُضاف اليوم إلى المعنى الذي يكون فيه، والحج كله يوم ______." }, j: { id: "nahr", ar: "النحر" }, x: [{ id: "'Arafah", ar: "عرفة" }, { id: "tarwiyah", ar: "التروية" }, { id: "tasyriq", ar: "التشريق" }] },
      { t: { id: "Ibnu 'Athiyyah: \"Yang benar adalah pendapat ______.\"", ar: "قال ابن عطية: والصحيح قول ______." }, j: { id: "jumhur", ar: "الجمهور" }, x: [{ id: "Al-Hasan", ar: "الحسن" }, { id: "ahli bahasa", ar: "اللغويين" }, { id: "Bani Israil", ar: "بني إسرائيل" }] }
    ]
  },
  tugas: [
    { t: { ar: "عرِّف قواعد الترجيح.", id: "Definisikan kaidah-kaidah tarjih." }, j: { ar: "قواعد الترجيح: هي قواعد كلية يُعملها المفسر للترجيح بين الأقوال المختلفة في بيان معاني القرآن العظيم، وتفيد المفسر في انتقاء اختياراته وتوازنها، وتفيد القارئ تعلمًا وتطبيقًا واستخدامًا.", id: "**Kaidah-kaidah umum yang digunakan mufassir untuk men-tarjih di antara pendapat-pendapat yang berbeda dalam menjelaskan makna Al-Qur'an.** Berguna bagi mufassir (memilih dan konsisten) dan bagi pembaca (belajar, menerapkan, memakai)." } },
    { t: { ar: "إذا تعارض تفسير النبي ﷺ مع تفسير غيره فما المقدم؟ مع الدليل والتمثيل.", id: "Jika tafsir Nabi ﷺ bertentangan dengan tafsir selainnya, mana yang didahulukan? Sertakan dalil dan contoh." }, j: { ar: "المقدم تفسير النبي ﷺ؛ لقوله تعالى: {وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ}، فنقبل بيانه ونرد ما عارضه. ومثاله: {وَتَقُولُ هَلْ مِن مَّزِيدٍ} قيل: بمعنى النفي، وقيل: بمعنى الاستزادة، ورجح الطبري الاستزادة لصحة الخبر: «لا تزال جهنم تقول هل من مزيد حتى يضع الله عليها قدمه»؛ لأن «لا تزال» تدل على اتصال قول بعد قول.", id: "**Tafsir Nabi ﷺ didahulukan**, berdalil {لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ}. Contoh: {هَلْ مِن مَّزِيدٍ} — penafian atau meminta tambahan; Ath-Thabari memilih **meminta tambahan** karena hadits \"Jahannam *senantiasa* berkata: adakah tambahan…\" — kata \"senantiasa\" menunjukkan ucapan yang bersambung." } },
    { t: { ar: "إذا دل دليل على التخصيص هل يخرج العام عن عمومه؟ مع التمثيل.", id: "Jika ada dalil pengkhusus, apakah yang umum keluar dari keumumannya? Sertakan contoh." }, j: { ar: "نعم، الأصل بقاء العام على عمومه ما لم يرد مخصص، فإذا جاء الدليل خُصِّص به. مثاله: {وَلَا تُبَاشِرُوهُنَّ وَأَنتُمْ عَاكِفُونَ فِي الْمَسَاجِدِ} عام في كل مباشرة، فخصصته السنة؛ إذ كانت نساء النبي ﷺ يرجلنه وهو معتكف، فرجح الطبري أن المراد الجماع أو ما قام مقامه مما أوجب غسلًا.", id: "**Ya.** Asalnya umum tetap umum, tetapi bila ada dalil, ia dikhususkan. Contoh: larangan *mubasyarah* bagi yang i'tikaf (Al-Baqarah: 187) umum, lalu dikhususkan oleh sunnah — istri-istri Nabi ﷺ menyisir rambut beliau saat i'tikaf — sehingga Ath-Thabari memilih: jima' atau yang setara yang mewajibkan mandi." } },
    { t: { ar: "إذا ورد قولان تفسيريان متعارضان أحدهما موافق لسياق الآيات والآخر مخالف له فأيهما يرجح؟", id: "Jika ada dua pendapat tafsir yang bertentangan, satu sesuai konteks ayat dan satu menyelisihinya, mana yang dirajihkan?" }, j: { ar: "يرجح القول الموافق للسياق؛ لأن القول الموافق للسياق أولى من غيره. مثاله: {آوَىٰ إِلَيْهِ أَبَوَيْهِ} قيل: أبوه وخالته لأن أمه ماتت، وقيل: أبوه وأمه، ورجح ابن جرير الثاني؛ إذ لم يقم دليل على موت أمه وظاهر القرآن يدل على حياتها، قال ابن كثير: وهذا هو المنصور الذي يدل عليه السياق.", id: "**Yang sesuai konteks dirajihkan.** Contoh: {آوَىٰ إِلَيْهِ أَبَوَيْهِ} — ayah & bibi (ibu telah wafat) atau ayah & ibu; Ibnu Jarir memilih ayah & ibu karena tak ada dalil wafatnya ibu dan zahir Al-Qur'an menunjukkan ia hidup; Ibnu Katsir: \"itulah yang ditunjukkan konteks\"." } },
    { t: { ar: "هل قول الجمهور قرينة في ترجيح الأقوال التفسيرية؟ مع التمثيل.", id: "Apakah pendapat jumhur menjadi qarinah dalam men-tarjih pendapat tafsir? Sertakan contoh." }, j: { ar: "نعم، القول المجمع عليه أو قول الجمهور أو الأكثر مقدم على غيره. مثاله: {وَاتْلُ عَلَيْهِمْ نَبَأَ ابْنَيْ آدَمَ} قال الجمهور: هما ابناه لصلبه قابيل وهابيل، وقال الحسن: ليسا لصلبه ولم تكن القرابين إلا في بني إسرائيل، فقال ابن عطية: وهذا وهم، وكيف يجهل صورة الدفن أحد من بني إسرائيل حتى يقتدي بالغراب؟ والصحيح قول الجمهور.", id: "**Ya.** Pendapat ijma'/jumhur/mayoritas didahulukan. Contoh: dua putra Adam — jumhur: Qabil & Habil dari sulbinya; Al-Hasan: bukan anak kandung karena kurban hanya di Bani Israil. Ibnu 'Athiyyah: keliru — bagaimana orang Bani Israil tak tahu cara mengubur hingga meniru gagak? \"Yang benar pendapat jumhur.\"" } }
  ]
});
