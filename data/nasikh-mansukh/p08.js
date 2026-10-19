/* Nasikh-Mansukh — Pertemuan 8: Ayat-ayat yang diklaim mansukh: Al-Baqarah (penutup) & awal Ali 'Imran */
Kuliah.pertemuan("nasikh-mansukh", {
  no: 8, motif: "spektrum", durasi: 24,
  telegram: "https://t.me/Shifaaulqloub7/318",
  bab: { id: "Ayat-ayat yang diklaim mansukh: Al-Baqarah", ar: "الآيات المدعى نسخها: سورة البقرة" },
  judul: { id: "Penutup Al-Baqarah (ayat 35–37) & Awal Ali 'Imran (ayat 1–7)", ar: "خاتمة البقرة وأوائل آل عمران فيما ادُّعي عليه النسخ" },
  ringkas: {
    id: "Menutup daftar ayat Al-Baqarah yang diklaim mansukh (utang-piutang, \"apa yang ada di dalam jiwa\", dan \"tidak membebani melainkan sesuai kesanggupan\"), lalu memulai Ali 'Imran: tugas Nabi ﷺ hanya menyampaikan, taqiyyah dalam keadaan lemah, ayat tentang orang murtad, dan takwa \"sebenar-benarnya\". Dosen menekankan: banyak klaim naskh runtuh begitu makna ayat dipahami dengan benar.",
    ar: "ختام ما ادُّعي عليه النسخ في سورة البقرة: آية الدَّين، وآية ما في الأنفس، وآية {لا يكلف الله نفسًا إلا وسعها}، ثم بدء آل عمران: {إنما عليك البلاغ}، والتقية، وآيات من كفروا بعد إيمانهم، و{اتقوا الله حق تقاته}؛ والتأكيد على أن فهم المعنى أولًا يُسقط كثيرًا من دعاوى النسخ."
  },
  tujuan: [
    { id: "Menjelaskan mengapa perintah mencatat utang (Al-Baqarah: 282) tidak mansukh oleh ayat 283.", ar: "بيان سبب عدم نسخ آية كتابة الدَّين بآية {فإن أمن بعضكم بعضًا}." },
    { id: "Menguraikan tiga arah tafsir Al-Baqarah: 284 dan hubungannya dengan ayat 286.", ar: "ذكر الاتجاهات الثلاثة في تفسير آية {وإن تبدوا ما في أنفسكم} وصلتها بآية {لا يكلف الله}." },
    { id: "Membedakan klaim naskh oleh \"ayat pedang\" dari makna sebenarnya pada Ali 'Imran: 20 dan 28.", ar: "التفريق بين دعوى النسخ بآية السيف والمعنى الصحيح في آل عمران ٢٠ و٢٨." },
    { id: "Menjelaskan makna \"takwa sebenar-benarnya\" dan hubungannya dengan \"semampu kalian\".", ar: "بيان معنى {حق تقاته} وعلاقته بـ{ما استطعتم}." },
    { id: "Menunjukkan sikap dosen: klaim naskh harus diuji dengan memahami makna ayat lebih dahulu.", ar: "إدراك منهج الشيخ: فهم معنى الآية أولًا ثم الحكم بالنسخ." }
  ],
  isi: [
    { t: "pembuka", id: "Pertemuan kedelapan ini menuntaskan ayat-ayat Surah Al-Baqarah yang diklaim mansukh dalam kitab *Nawasikh al-Qur'an* karya Imam Ibnul Jauzi, lalu berpindah ke Surah Ali 'Imran. Pola yang berulang: **ada ayat, ada yang mengklaimnya mansukh, lalu dosen menimbang klaim itu** — dan hampir selalu menyimpulkan bahwa ayatnya *muhkam*.", ar: "نصل في هذا اللقاء الثامن إلى ختام ما ادُّعي عليه النسخ من سورة البقرة في كتاب «نواسخ القرآن» للإمام ابن الجوزي، ثم ننتقل إلى سورة آل عمران؛ والمنهج متكرر: آية، ودعوى نسخ، ثم ميزان الشيخ للدعوى، وغالبًا ما ينتهي إلى أنها محكمة." },

    { t: "judul", id: "Ayat ke-35: Mencatat Utang-Piutang", ar: "الآية الخامسة والثلاثون: كتابة الدَّين" },
    { t: "ayat", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ", id: "Wahai orang-orang beriman, apabila kalian bermuamalah dengan utang-piutang untuk waktu yang ditentukan, maka tulislah.", src: "QS. Al-Baqarah: 282" },
    { t: "p", id: "Ayat ini memerintahkan agar utang **ditetapkan dalam catatan** dan agar persaksian ditegakkan, baik dalam jual beli maupun utang. Sebagian ahli ilmu berkata ayat ini mansukh oleh ayat sesudahnya:", ar: "تتضمن الآية الأمر بإثبات الدَّين في كتاب حتى يثبت، وإثبات الشهادة في البيع وفي الدَّين؛ وقال بعض أهل العلم: إنها منسوخة بالآية التي بعدها:" },
    { t: "ayat", ar: "فَإِنْ أَمِنَ بَعْضُكُم بَعْضًا فَلْيُؤَدِّ الَّذِي اؤْتُمِنَ أَمَانَتَهُ وَلْيَتَّقِ اللَّهَ رَبَّهُ", id: "Jika sebagian kalian mempercayai sebagian yang lain, maka hendaklah yang dipercaya itu menunaikan amanatnya dan bertakwa kepada Allah, Rabbnya.", src: "QS. Al-Baqarah: 283" },
    { t: "definisi", judul: { id: "Perintah untuk wajib atau untuk anjuran?", ar: "الأمر للوجوب أم للاستحباب؟" }, lughah: { id: "*Al-amr*: tuntutan melakukan sesuatu. Pertanyaannya: apakah tuntutan di sini mengikat (wajib) atau sekadar dianjurkan (mustahab)?", ar: "الأمر: طلب الفعل؛ فهل هو هنا على سبيل الإلزام أم الندب؟" }, istilah: { id: "Ulama berbeda; **jumhur fuqaha menilai perintah menulis di sini sebagai perintah istihbab (anjuran)**. Jika begitu, tidak ada naskh, sebab ayat 283 hanya memberi pilihan/kelonggaran (takhyir dan ibahah) bagi yang saling percaya.", ar: "اختلف العلماء، وجمهور الفقهاء على أن الأمر هنا للاستحباب، وعليه فلا نسخ؛ لأن قوله {فإن أمن بعضكم بعضًا} تخيير وإباحة بعدم الكتابة." } },
    { t: "banding", judul: { id: "Dua cara membaca hubungan ayat 282 dan 283", ar: "وجها النظر في الآيتين" },
      kiri: { judul: { id: "Klaim: mansukh", ar: "دعوى النسخ" }, warna: "red", poin: [
        { id: "Ayat 283: jika saling percaya, jangan dicatat — dianggap menghapus kewajiban mencatat.", ar: "إذا أمن بعضكم بعضًا فلا تكتبوا هذا الدَّين." },
        { id: "Mengandaikan perintah 282 itu wajib.", ar: "يفترض أن الأمر في ٢٨٢ للوجوب." } ] },
      kanan: { judul: { id: "Pendapat rajih: muhkam", ar: "الصحيح: محكمة" }, warna: "green", poin: [
        { id: "Perintah itu anjuran; ayat 283 hanya memberi kelonggaran. Kelonggaran bukan penghapus.", ar: "الأمر استحباب، والآية الثانية تخيير وإباحة." },
        { id: "Kesimpulan: ayat ini muhkam, tidak ada naskh.", ar: "فالصحيح أن الآية محكمة ولا نسخ فيها." } ] } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Pelajaran metode", ar: "فائدة منهجية" }, id: "Sebelum memutuskan naskh, tentukan dulu **sifat hukum** pada ayat pertama. Jika perintahnya hanya anjuran, ayat kedua yang memberi kelonggaran tidak membatalkannya — keduanya bisa diamalkan bersama.", ar: "قبل الحكم بالنسخ نحدد طبيعة الحكم في الآية الأولى؛ فإذا كان الأمر للاستحباب فالآية الثانية التي فيها التخفيف لا تنسخه ويمكن العمل بهما معًا." },
    { t: "cek", q: { id: "Mengapa Al-Baqarah: 282 tidak dianggap mansukh oleh jumhur?", ar: "لماذا لا تُعد آية الدَّين منسوخة عند الجمهور؟" }, o: [{ id: "Karena ayat 283 turun lebih dahulu", ar: "لأن آية ٢٨٣ نزلت قبلها" }, { id: "Karena perintah menulis dipahami sebagai anjuran dan ayat 283 hanya memberi pilihan", ar: "لأن الأمر للاستحباب والآية التالية تخيير" }, { id: "Karena kedua ayat tidak berkaitan", ar: "لأنه لا علاقة بين الآيتين" }, { id: "Karena haditslah yang menghapusnya", ar: "لأن الحديث نسخها" }], j: 1, b: { id: "Perintah itu istihbab, sehingga ayat 283 tidak menghapus, hanya melonggarkan.", ar: "الأمر للاستحباب والتالية تخيير." } },

    { t: "judul", id: "Ayat ke-36: \"Apa yang Ada di Dalam Jiwa\"", ar: "الآية السادسة والثلاثون: ما في الأنفس" },
    { t: "ayat", ar: "وَإِن تُبْدُوا مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ", id: "Dan jika kalian menampakkan apa yang ada dalam diri kalian atau menyembunyikannya, Allah akan memperhitungkannya bagi kalian.", src: "QS. Al-Baqarah: 284" },
    { t: "p", id: "Pertanyaan pokoknya: yang **dinampakkan** jelas dihisab (karena berupa amal atau ucapan). Tetapi apakah yang **disembunyikan di dalam hati** juga dihisab? Banyak fuqaha dan mufassir berkata ayat ini mansukh oleh:", ar: "ما أُبدي يحاسَب عليه الإنسان لأنه عمل أو كلام، فهل يحاسَب على ما أخفاه في نفسه؟ ذهب كثير من المفسرين والفقهاء إلى أنها منسوخة بقوله تعالى:" },
    { t: "ayat", ar: "لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا", id: "Allah tidak membebani seseorang melainkan sesuai kesanggupannya.", src: "QS. Al-Baqarah: 286" },
    { t: "p", id: "Dalil mereka: ketika ayat 284 turun, para sahabat merasa **berat**. Nabi ﷺ lalu menenangkan mereka dan menyuruh mereka mengucapkan \"kami beriman\"; kemudian turunlah ayat peringanan (286).", ar: "واستدلوا بأن الصحابة لما نزلت آية ٢٨٤ شق عليهم ذلك، فقال لهم النبي ﷺ: قولوا «آمنا»، فنزل التخفيف: {لا يكلف الله نفسًا إلا وسعها}." },
    { t: "poin", judul: { id: "Tiga arah tafsir para mufassir", ar: "ثلاثة اتجاهات للمفسرين" }, item: [
      { ikon: "flag", judul: { id: "1. Mansukh oleh ayat 286", ar: "١. منسوخة" }, id: "Pendapat banyak mufassir dan fuqaha: yang tersembunyi di hati tidak lagi dihisab setelah ada ayat peringanan.", ar: "ما في النفس لا يحاسب عليه بعد آية التخفيف." },
      { ikon: "scale", judul: { id: "2. Muhkam: terkait persaksian", ar: "٢. محكمة: في الشهادة" }, id: "\"Apa yang ada dalam jiwa\" dipahami sebagai **kesaksian** (misalnya atas pencuri atau akad). Disertai ayat larangan menyembunyikan kesaksian; baik ditampakkan atau disembunyikan, Allah menghisabnya. Menurut kelompok ini ayat tidak mansukh.", ar: "ما في النفس هو الشهادة في الحق، ويؤيده {ولا تكتموا الشهادة ومن يكتمها فإنه آثم قلبه}؛ فالآية محكمة." },
      { ikon: "hourglass", judul: { id: "3. Muhkam: dihadapkan, bukan disiksa", ar: "٣. محكمة: عرض لا عقاب" }, id: "Yang diangkat adalah **kesulitan** yang dirasakan akibat dosa; di hari kiamat amal itu tetap diperlihatkan, tetapi bukan hisab untuk dihukum, sebagaimana hadits tentang Allah menutupi dosa hamba mukmin lalu mengampuninya.", ar: "رُفعت المشقة، ويُعرض العمل يوم القيامة لا حساب عقاب." } ] },
    { t: "ayat", ar: "وَلَا تَكْتُمُوا الشَّهَادَةَ ۚ وَمَن يَكْتُمْهَا فَإِنَّهُ آثِمٌ قَلْبُهُ", id: "Janganlah kalian menyembunyikan kesaksian; siapa menyembunyikannya, sesungguhnya hatinya berdosa.", src: "QS. Al-Baqarah: 283" },
    { t: "hadits", ar: "إنَّ اللهَ يُدْنِي عَبْدَهُ المُؤْمِنَ مِنْهُ يَوْمَ القِيَامَةِ فَيَضَعُ عَلَيْهِ كَنَفَهُ وَيُقَرِّرُهُ بِذُنُوبِهِ، فَيَقُولُ: أَلَمْ تَفْعَلْ كَذَا يَوْمَ كَذَا؟ فَلَمَّا يَظُنُّ العَبْدُ أَنَّهُ قَدْ هَلَكَ يَقُولُ اللهُ: سَتَرْتُهَا عَلَيْكَ فِي الدُّنْيَا وَأَنَا أَغْفِرُهَا لَكَ اليَوْمَ", id: "Allah mendekatkan hamba-Nya yang beriman kepada-Nya pada hari kiamat, meletakkan tabir-Nya padanya, lalu membuatnya mengakui dosa-dosanya... Ketika hamba itu mengira ia binasa, Allah berfirman: \"Telah Aku tutupi dosa itu atasmu di dunia dan hari ini Aku mengampuninya.\"", src: "Hadits (dibawakan dosen sebagai penguat pendapat ketiga)" },
    { t: "kutipan", ar: "وهذه كلها وجوه محتملة، وكما هو معلوم لديكم أن القرآن حمَّال ذو وجوه", id: "Semua ini adalah kemungkinan makna yang dapat dipertimbangkan; sebagaimana kalian ketahui, Al-Qur'an itu mengandung banyak segi makna.", oleh: "Dr. Nur Sya'lan (komentar penutup untuk ayat 36)" },
    { t: "catatan", gaya: "tanbih", judul: { id: "Perhatikan atribusi", ar: "تنبيه" }, id: "Pada ayat ini dosen **tidak** memvonis satu pendapat saja. Beliau memaparkan tiga arah: mansukh (menurut banyak mufassir), muhkam terkait persaksian, dan muhkam sebagai peringatan hisab yang tidak berupa hukuman. Jangan menyatakan \"pasti mansukh\" atau \"pasti muhkam\" melampaui yang beliau katakan.", ar: "لم يحسم الشيخ هنا بقول واحد، بل عرض ثلاثة اتجاهات: النسخ عند كثير من المفسرين، والإحكام بحمله على الشهادة، والإحكام بحمله على عرض لا عقاب فيه." },

    { t: "judul", id: "Ayat ke-37: \"Tidak Membebani Melainkan Sesuai Kesanggupan\"", ar: "الآية السابعة والثلاثون: {لا يكلف الله نفسًا إلا وسعها}" },
    { t: "p", id: "Ayat 286 sendiri juga diklaim mansukh. Mayoritas mufassir berpendapat ayat ini **muhkam**: Allah membebani hamba sebatas kemampuannya. Namun sebagian memahami *wus'* sebagai **kapasitas maksimal**, lalu mengklaim ayat ini dihapus oleh:", ar: "ذهب أكثر المفسرين إلى أن الآية محكمة وأن الله يكلف العبد قدر طاقته؛ لكن من فسرها بأنه يكلفه أقصى ما يطيقه ادَّعى نسخها بقوله:" },
    { t: "ayat", ar: "يُرِيدُ اللَّهُ بِكُمُ الْيُسْرَ وَلَا يُرِيدُ بِكُمُ الْعُسْرَ", id: "Allah menghendaki kemudahan bagi kalian dan tidak menghendaki kesukaran.", src: "QS. Al-Baqarah: 185" },
    { t: "banding", judul: { id: "Dua pemahaman makna \"wus'\"", ar: "فهمان لمعنى الوسع" },
      kiri: { judul: { id: "Pemahaman: kapasitas maksimal", ar: "أقصى الطاقة" }, warna: "red", poin: [
        { id: "Hamba dibebani sampai batas tertinggi kemampuannya — tentu berat.", ar: "يكلف الله الإنسان أقصى ما في طاقته، وفيه مشقة." },
        { id: "Dari sini muncul klaim: ayat 185 menaskhnya.", ar: "فقيل: إن آية اليسر ناسخة." } ] },
      kanan: { judul: { id: "Yang sahih: sesuai kemampuan", ar: "الصحيح: قدر الطاقة" }, warna: "green", poin: [
        { id: "Manusia dibebani sesuatu yang **ia sanggupi**, bukan batas maksimal.", ar: "مكلف بما يقدر عليه لا بأقصى ما يطيق." },
        { id: "Syariat penuh kemudahan; Allah menghendaki kemudahan — tidak bertentangan.", ar: "اليسر في الشريعة، والله يريد بكم اليسر." } ] } },
    { t: "hadits", ar: "إذا أمرتكم بأمر فأتوا منه ما استطعتم", id: "Apabila aku perintahkan kalian suatu perkara, kerjakanlah semampu kalian.", src: "Hadits (dibawakan dosen)" },
    { t: "tabel", judul: { id: "Peta Al-Baqarah yang ditutup di pertemuan ini", ar: "خلاصة آيات البقرة" }, kolom: [{ id: "Ayat (nomor urutan di kitab)", ar: "الآية" }, { id: "Yang diklaim nasikh", ar: "الناسخ المدعى" }, { id: "Putusan di kuliah", ar: "الحكم في المحاضرة" }], baris: [
      [{ id: "282 (ke-35)", ar: "٢٨٢" }, { id: "Ayat 283", ar: "٢٨٣" }, { id: "Muhkam (perintah anjuran)", ar: "محكمة" }],
      [{ id: "284 (ke-36)", ar: "٢٨٤" }, { id: "Ayat 286", ar: "٢٨٦" }, { id: "Tiga arah tafsir; muhkam menurut dua arah", ar: "ثلاثة اتجاهات" }],
      [{ id: "286 (ke-37)", ar: "٢٨٦" }, { id: "Ayat 185", ar: "١٨٥" }, { id: "Muhkam (mayoritas)", ar: "محكمة" }] ] },
    { t: "cek", q: { id: "Pemahaman yang benar tentang {إِلَّا وُسْعَهَا} menurut dosen adalah…", ar: "الفهم الصحيح لقوله {إلا وسعها} عند الشيخ…" }, o: [{ id: "Dibebani sampai batas maksimal kemampuan", ar: "أقصى الطاقة" }, { id: "Dibebani sesuai kemampuan dan syariat penuh kemudahan", ar: "قدر الطاقة مع اليسر" }, { id: "Tidak ada beban apa pun", ar: "لا تكليف" }, { id: "Dibebani di luar kemampuan", ar: "فوق الطاقة" }], j: 1, b: { id: "Beban sesuai kesanggupan; tidak bertentangan dengan kemudahan syariat.", ar: "قدر الطاقة." } },
    { t: "catatan", gaya: "info", id: "Dengan ayat ini, dosen menutup **semua ayat Al-Baqarah** yang diklaim mansukh: \"Dan dengan ini selesailah ayat-ayat yang diklaim mansukh dalam Surah Al-Baqarah.\"", ar: "وبهذا تنتهي الآيات التي ادُّعي عليها النسخ في سورة البقرة." },

    { t: "judul", id: "Surah Ali 'Imran: Ayat-ayat yang Diklaim Mansukh", ar: "سورة آل عمران: ما ادُّعي نسخه" },
    { t: "peta", ikon: "map", pusat: { id: "Ali 'Imran — klaim naskh (awal surah)", ar: "آل عمران" }, cabang: [
      { id: "Ayat 1 — Ali 'Imran: 20", ar: "الأولى: آل عمران ٢٠", sub: [{ id: "Klaim: dihapus ayat pedang", ar: "دعوى نسخها بآية السيف" }, { id: "Kata dosen: tidak benar", ar: "الصحيح: محكمة" }] },
      { id: "Ayat 2 — Ali 'Imran: 28", ar: "الثانية: آل عمران ٢٨", sub: [{ id: "Klaim: taqiyyah dihapus ayat pedang", ar: "دعوى نسخ الاتقاء" }, { id: "Kata dosen: rukhsah, tidak mansukh", ar: "رخصة لا نسخ فيها" }] },
      { id: "Ayat 3–5 — Ali 'Imran: 86–89", ar: "الثالثة إلى الخامسة", sub: [{ id: "Tiga pendapat tentang sebab turun", ar: "ثلاثة أقوال" }, { id: "Muhkam; ada pengecualian taubat", ar: "محكمة" }] },
      { id: "Ayat 7 — Ali 'Imran: 102", ar: "السابعة: آل عمران ١٠٢", sub: [{ id: "Klaim: dihapus At-Taghabun: 16", ar: "دعوى نسخها بآية التغابن" }, { id: "Sahih: muhkam (Thawus)", ar: "الصحيح محكمة" }] } ] },

    { t: "sub", id: "Ayat ke-1: \"Kewajibanmu Hanyalah Menyampaikan\" (Ali 'Imran: 20)", ar: "الآية الأولى: {فإنما عليك البلاغ}" },
    { t: "ayat", ar: "فَإِن تَوَلَّوْا فَإِنَّمَا عَلَيْكَ الْبَلَاغُ", id: "Jika mereka berpaling, maka sesungguhnya kewajibanmu hanyalah menyampaikan.", src: "QS. Ali 'Imran: 20" },
    { t: "p", id: "Sebagian mufassir mengklaim ayat ini dihapus ayat pedang: dahulu Nabi ﷺ hanya wajib menyampaikan, belum diwajibkan berperang atau mengubah kemungkaran dengan tangan. Dosen menyatakan: **klaim ini tidak benar.** Ayat tersebut menenangkan Nabi ﷺ yang sangat ingin mereka beriman dan memaksa dirinya dalam berdakwah: beliau tidak mampu \"menggiring hati\" mereka kepada kebaikan; tugasnya hanya menyampaikan dan memberi peringatan.", ar: "زعم بعض المفسرين أنها منسوخة بآية السيف؛ لأن النبي ﷺ كان عليه البلاغ فقط ثم فُرض القتال. وهذا القول غير صحيح؛ فقد كان النبي ﷺ حريصًا على إيمانهم، فسكَّن الله جأشه بقوله {إنما أنت نذير} وبأنه لا يقدر على سوق قلوبهم إلى الصلاح؛ فالآية محكمة." },
    { t: "catatan", gaya: "faidah", id: "Dasar penalaran dosen: ayat ini **menjelaskan batas kemampuan seorang rasul** (hidayah taufik bukan di tangannya), bukan menetapkan hukum yang kemudian dicabut. Maka tidak ada yang \"dihapus\".", ar: "الآية تبيِّن حدود قدرة الرسول، وليست حكمًا شُرع ثم رُفع؛ فلا نسخ." },

    { t: "sub", id: "Ayat ke-2: Taqiyyah (Ali 'Imran: 28)", ar: "الآية الثانية: {إلا أن تتقوا منهم تقاة}" },
    { t: "ayat", ar: "إِلَّا أَن تَتَّقُوا مِنْهُمْ تُقَاةً", id: "...kecuali kalian memelihara diri dari mereka dengan sebenar-benar penjagaan.", src: "QS. Ali 'Imran: 28" },
    { t: "contoh", judul: { id: "Menimbang klaim naskh pada ayat 28", ar: "ميزان دعوى النسخ" }, ayat: { ar: "إِلَّا مَنْ أُكْرِهَ وَقَلْبُهُ مُطْمَئِنٌّ بِالْإِيمَانِ", src: "QS. An-Nahl: 106", id: "Kecuali orang yang dipaksa sedang hatinya tetap tenang dalam keimanan." }, sorot: [
      { label: { id: "Klaim naskh", ar: "دعوى النسخ" }, warna: "red", id: "Sebagian mufassir: ayat ini mengajarkan berhati-hati terhadap kaum musyrik agar tidak memancing fitnah, lalu dihapus ayat-ayat perang.", ar: "اتقاء المشركين لئلا يثيروا فتنة ثم نُسخ بآيات القتال." },
      { label: { id: "Makna sebenarnya", ar: "المعنى الصحيح" }, warna: "green", id: "Dalam keadaan lemah dan dipaksa mengucapkan kata yang berbeda dari keyakinan, seseorang boleh memelihara diri **dengan lisan** (taqiyyah) selama hatinya tenang dalam iman.", ar: "حال الاستضعاف والإكراه، فللمرء أن يتقي بلسانه وقلبه مطمئن بالإيمان." },
      { label: { id: "Kesimpulan", ar: "الحكم" }, warna: "blue", id: "Ini rukhsah yang diizinkan syariat, bukan perintah yang telah dihapus. **Tidak ada naskh.**", ar: "رخصة أباحها الشرع، فلا نسخ." } ] },

    { t: "sub", id: "Ayat ke-3 s.d. 5: Orang yang Kafir Setelah Beriman", ar: "الآيات الثالثة والرابعة والخامسة" },
    { t: "ayat", ar: "كَيْفَ يَهْدِي اللَّهُ قَوْمًا كَفَرُوا بَعْدَ إِيمَانِهِمْ", id: "Bagaimana Allah akan menunjuki suatu kaum yang kafir setelah keimanan mereka?", src: "QS. Ali 'Imran: 86" },
    { t: "akordion", judul: { id: "Tiga pendapat tentang siapa yang dimaksud", ar: "ثلاثة أقوال في سبب النزول" }, item: [
      { judul: { id: "Pendapat 1: Al-Harits bin Suwaid", ar: "القول الأول" }, id: "Ayat turun tentang Al-Harits bin Suwaid yang masuk Islam lalu murtad. Seorang dari kaumnya membacakan ayat-ayat ini kepadanya, ia pun kembali dan masuk Islam.", ar: "نزلت في الحارث بن سويد أسلم ثم ارتد، فحملها إليه رجل من قومه فقرأها عليه فرجع وأسلم." },
      { judul: { id: "Pendapat 2: sepuluh orang", ar: "القول الثاني" }, id: "Ayat turun tentang sepuluh orang yang beriman kemudian murtad.", ar: "نزلت في عشرة آمنوا ثم ارتدوا." },
      { judul: { id: "Pendapat 3: Ahlul Kitab", ar: "القول الثالث" }, id: "Ayat turun tentang Ahlul Kitab yang beriman kepada Nabi ﷺ sebelum beliau diutus (karena kabar gembira dalam kitab mereka), lalu mengingkarinya.", ar: "نزلت في أهل الكتاب آمنوا بالنبي ﷺ قبل بعثته ثم كفروا به." } ] },
    { t: "p", id: "Kalimat \"bagaimana Allah akan menunjuki...\" adalah pertanyaan bernada **pengingkaran dan celaan**. Dosen menegaskan ayat ini **muhkam** dan tidak ada ruang naskh, karena Allah menutup dengan pengecualian bagi mereka yang bertobat:", ar: "الاستفهام هنا للاستنكار والتوبيخ، والصحيح أن الآية محكمة ولا وجه لدخول النسخ فيها؛ لأن الله استثنى التائبين:" },
    { t: "ayat", ar: "إِلَّا الَّذِينَ تَابُوا مِن بَعْدِ ذَٰلِكَ وَأَصْلَحُوا", id: "Kecuali orang-orang yang bertobat setelah itu dan memperbaiki diri.", src: "QS. Ali 'Imran: 89" },

    { t: "sub", id: "Ayat ke-7: Takwa \"Sebenar-benarnya\" (Ali 'Imran: 102)", ar: "الآية السابعة: {اتقوا الله حق تقاته}" },
    { t: "ayat", ar: "يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ", id: "Wahai orang-orang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa.", src: "QS. Ali 'Imran: 102" },
    { t: "langkah", judul: { id: "Alur argumen", ar: "مسار الاستدلال" }, item: [
      { judul: { id: "Klaim", ar: "الدعوى" }, id: "Sebagian berkata \"takwa sebenar-benarnya\" berarti **sesuai kemampuan**, lalu menganggapnya dihapus {فَاتَّقُوا اللَّهَ مَا اسْتَطَعْتُمْ} (At-Taghabun: 16). Dosen menilai ini pendapat yang jauh.", ar: "قالوا: منسوخة بقوله {فاتقوا الله ما استطعتم}، وهو قول بعيد." },
      { judul: { id: "Pendapat sahih", ar: "الصحيح" }, id: "Seorang hamba diperintahkan bertakwa **sesuai kesanggupannya**; inilah pendapat **Thawus** dan itulah yang sahih.", ar: "أنك مأمور بتقوى الله قدر استطاعتك، وهو مذهب طاووس وهو الصحيح." },
      { judul: { id: "Putusan", ar: "الحكم" }, id: "Kedua ayat saling menafsirkan, maka ayat 102 **muhkam**, tidak mansukh.", ar: "فالآية محكمة غير منسوخة." } ] },
    { t: "cek", q: { id: "Menurut dosen, pendapat sahih tentang {اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ} adalah…", ar: "الصحيح في آية {حق تقاته}…" }, o: [{ id: "Mansukh oleh At-Taghabun: 16", ar: "منسوخة بالتغابن" }, { id: "Muhkam; takwa sesuai kemampuan (pendapat Thawus)", ar: "محكمة قدر الاستطاعة" }, { id: "Mansukh oleh ayat pedang", ar: "منسوخة بآية السيف" }, { id: "Tidak diperintahkan lagi", ar: "لا يؤمر بها" }], j: 1, b: { id: "Itu pendapat Thawus yang sahih; ayat muhkam.", ar: "مذهب طاووس." } },

    { t: "balik", judul: { id: "Kartu ingatan: ayat ↔ klaim ↔ putusan", ar: "بطاقات المراجعة" }, item: [
      { depan: { id: "Ali 'Imran: 20", ar: "آل عمران ٢٠" }, belakang: { id: "Diklaim dihapus ayat pedang; sahih: muhkam (tugas Nabi ﷺ hanya menyampaikan).", ar: "محكمة." } },
      { depan: { id: "Ali 'Imran: 28", ar: "آل عمران ٢٨" }, belakang: { id: "Taqiyyah dengan lisan saat lemah/dipaksa; rukhsah, bukan naskh.", ar: "رخصة." } },
      { depan: { id: "Ali 'Imran: 86–89", ar: "آل عمران ٨٦-٨٩" }, belakang: { id: "Muhkam; ada pengecualian bagi yang bertobat.", ar: "محكمة." } },
      { depan: { id: "Ali 'Imran: 102", ar: "آل عمران ١٠٢" }, belakang: { id: "Muhkam; pendapat sahih Thawus: takwa semampu kalian.", ar: "مذهب طاووس." } } ] },

    { t: "tanya", q: { id: "Mengapa pertanyaan \"apa makna ayatnya?\" harus didahulukan sebelum menghukumi naskh?", ar: "لماذا يُسأل أولًا عن معنى الآية قبل الحكم بالنسخ؟" }, a: { id: "Karena banyak klaim naskh lahir dari **salah paham makna**. Setelah makna ayat 282, 28, atau 102 dipahami dengan benar, ternyata tidak ada pertentangan yang menuntut penghapusan.", ar: "لأن كثيرًا من دعاوى النسخ سببها سوء فهم المعنى؛ فإذا فُهمت الآية فهمًا صحيحًا زال التعارض." } },
    { t: "tanya", q: { id: "Apa beda sikap dosen pada Al-Baqarah: 284 dengan pada Ali 'Imran: 20?", ar: "ما الفرق بين موقف الشيخ في آية ٢٨٤ وآية آل عمران ٢٠؟" }, a: { id: "Pada 284 beliau memaparkan **tiga arah tafsir** yang masing-masing mungkin. Pada Ali 'Imran: 20 beliau **tegas**: klaim naskh \"tidak benar\" dan ayatnya muhkam.", ar: "في ٢٨٤ عرض ثلاثة اتجاهات محتملة، أما في آل عمران ٢٠ فحكم بوضوح أن دعوى النسخ غير صحيحة." } },
    { t: "ringkasan", item: [
      { id: "Al-Baqarah: 282 muhkam: perintah mencatat adalah anjuran, ayat 283 hanya memberi kelonggaran.", ar: "آية الدَّين محكمة؛ الأمر للاستحباب." },
      { id: "Al-Baqarah: 284 punya tiga arah tafsir: mansukh (menurut banyak mufassir), muhkam terkait persaksian, atau muhkam sebagai pengungkapan tanpa hukuman.", ar: "آية ٢٨٤ فيها ثلاثة اتجاهات." },
      { id: "Al-Baqarah: 286 muhkam menurut mayoritas; \"wus'\" bukan kapasitas maksimal.", ar: "آية ٢٨٦ محكمة عند الأكثر." },
      { id: "Ali 'Imran: 20 dan 28 tidak dihapus ayat pedang; yang pertama batas tugas Nabi ﷺ, yang kedua rukhsah taqiyyah.", ar: "آل عمران ٢٠ و٢٨ محكمتان." },
      { id: "Ali 'Imran: 86–89 dan 102 muhkam; takwa sebenar-benarnya = semampu kalian (Thawus).", ar: "آية ١٠٢ محكمة على قول طاووس." } ] }
  ],
  istilah: [
    { ar: "الأمر للاستحباب", latin: "al-amr lil-istihbab", id: "Perintah yang bersifat anjuran", def: { id: "Perintah yang tidak mengikat secara wajib; menjadi sebab ayat kedua dianggap hanya memberi kelonggaran, bukan menaskh.", ar: "أمر لا يقتضي الإلزام." } },
    { ar: "التخيير", latin: "at-takhyir", id: "Memberi pilihan", def: { id: "Memberi pilihan antara dua hal, seperti mencatat atau tidak jika saling percaya.", ar: "إعطاء الخيار بين فعلين." } },
    { ar: "الإباحة", latin: "al-ibahah", id: "Kebolehan", def: { id: "Hukum yang membolehkan tanpa perintah dan larangan.", ar: "التسوية بين الفعل والترك." } },
    { ar: "آية السيف", latin: "ayat as-saif", id: "Ayat pedang", def: { id: "Sebutan bagi ayat-ayat perang (At-Taubah) yang sering dijadikan nasikh oleh sebagian mufassir terhadap ayat sabar, dakwah, dan pemaafan.", ar: "آيات القتال التي يدَّعي بعضهم أنها تنسخ آيات الصبر والعفو." } },
    { ar: "التقية", latin: "at-taqiyyah", id: "Memelihara diri dengan lisan saat lemah", def: { id: "Mengucapkan kata yang berbeda dari keyakinan karena dipaksa, sementara hati tetap tenang dalam iman; termasuk rukhsah.", ar: "أن يقول المكره ما ليس يعتقده وقلبه مطمئن بالإيمان." } },
    { ar: "الوسع", latin: "al-wus'", id: "Kesanggupan", def: { id: "Batas kemampuan yang masih terjangkau; bukan kapasitas maksimal yang membinasakan.", ar: "ما يقدر عليه الإنسان بلا مشقة تهلكه." } },
    { ar: "البلاغ", latin: "al-balagh", id: "Penyampaian", def: { id: "Tugas Rasul: menyampaikan risalah; hidayah taufik di tangan Allah.", ar: "تبليغ الرسالة، والهداية بيد الله." } },
    { ar: "المحكم", latin: "al-muhkam", id: "Ayat yang tetap berlaku", def: { id: "Ayat yang tidak dihapus hukumnya.", ar: "ما لم يُرفع حكمه." } },
    { ar: "حمّال ذو وجوه", latin: "hammal dzu wujuh", id: "Memuat banyak segi makna", def: { id: "Ungkapan dosen: Al-Qur'an memiliki banyak kemungkinan makna sehingga ayat 284 dapat dipahami lebih dari satu arah.", ar: "القرآن يحتمل وجوهًا من المعاني." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Menurut jumhur fuqaha, perintah pada Al-Baqarah: 282 untuk…", ar: "الأمر في آية ٢٨٢ عند جمهور الفقهاء للـ…" }, o: [{ id: "Wajib", ar: "الوجوب" }, { id: "Istihbab (anjuran)", ar: "الاستحباب" }, { id: "Haram", ar: "التحريم" }, { id: "Makruh", ar: "الكراهة" }], j: 1, b: { id: "Jumhur memahaminya sebagai istihbab, maka tidak ada naskh.", ar: "للاستحباب فلا نسخ." } },
      { q: { id: "Ayat yang diklaim menaskh Al-Baqarah: 284 oleh banyak mufassir adalah…", ar: "الآية المدعى نسخها لـ٢٨٤ عند كثير من المفسرين…" }, o: [{ id: "Al-Baqarah: 185", ar: "البقرة ١٨٥" }, { id: "Ali 'Imran: 20", ar: "آل عمران ٢٠" }, { id: "At-Taghabun: 16", ar: "التغابن ١٦" }, { id: "Al-Baqarah: 286", ar: "البقرة ٢٨٦" }], j: 3, b: { id: "{لا يكلف الله نفسًا إلا وسعها} (ayat 286).", ar: "آية ٢٨٦." } },
      { q: { id: "Sebagian mufassir memahami \"apa yang ada di dalam jiwa\" pada ayat 284 sebagai…", ar: "بعض المفسرين حملوا «ما في أنفسكم» على…" }, o: [{ id: "Zakat", ar: "الزكاة" }, { id: "Persaksian", ar: "الشهادة" }, { id: "Utang", ar: "الدَّين" }, { id: "Warisan", ar: "الميراث" }], j: 1, b: { id: "Mereka menafsirkannya sebagai kesaksian, sehingga ayat muhkam.", ar: "الشهادة فالآية محكمة." } },
      { q: { id: "Ayat 286 diklaim dihapus oleh ayat…", ar: "آية ٢٨٦ ادُّعي نسخها بـ…" }, o: [{ id: "{يريد الله بكم اليسر}", ar: "يريد الله بكم اليسر" }, { id: "{فاتقوا الله ما استطعتم}", ar: "فاتقوا الله ما استطعتم" }, { id: "{فاقتلوا المشركين}", ar: "فاقتلوا المشركين" }, { id: "{إنما عليك البلاغ}", ar: "إنما عليك البلاغ" }], j: 0, b: { id: "Karena sebagian memahami \"wus'\" sebagai kapasitas maksimal.", ar: "حملوا الوسع على أقصى الطاقة." } },
      { q: { id: "Klaim bahwa Ali 'Imran: 20 dihapus ayat pedang menurut dosen…", ar: "دعوى نسخ آل عمران ٢٠ بآية السيف عند الشيخ…" }, o: [{ id: "Benar", ar: "صحيحة" }, { id: "Tidak benar", ar: "غير صحيحة" }, { id: "Disepakati", ar: "متفق عليها" }, { id: "Tidak dibahas", ar: "لم تُبحث" }], j: 1, b: { id: "Dosen menyatakan klaim itu tidak benar; ayat muhkam.", ar: "القول غير صحيح." } },
      { q: { id: "Taqiyyah pada Ali 'Imran: 28 dimaknai sebagai…", ar: "التقية في آل عمران ٢٨ معناها…" }, o: [{ id: "Tipu daya terhadap kaum muslimin", ar: "مخادعة المسلمين" }, { id: "Rukhsah dengan lisan saat lemah/dipaksa dengan hati tetap beriman", ar: "رخصة باللسان مع اطمئنان القلب" }, { id: "Perintah berperang", ar: "الأمر بالقتال" }, { id: "Larangan berdakwah", ar: "منع الدعوة" }], j: 1, b: { id: "Itu rukhsah, selaras dengan An-Nahl: 106.", ar: "رخصة." } },
      { q: { id: "Ayat pembanding yang dibawakan dosen untuk taqiyyah adalah…", ar: "الآية المؤيدة للتقية…" }, o: [{ id: "An-Nahl: 106", ar: "النحل ١٠٦" }, { id: "Al-Maidah: 5", ar: "المائدة ٥" }, { id: "An-Nisa: 6", ar: "النساء ٦" }, { id: "At-Taubah: 29", ar: "التوبة ٢٩" }], j: 0, b: { id: "{إلا من أكره وقلبه مطمئن بالإيمان}.", ar: "النحل ١٠٦." } },
      { q: { id: "Pertanyaan {كَيْفَ يَهْدِي اللَّهُ قَوْمًا كَفَرُوا} termasuk…", ar: "الاستفهام في {كيف يهدي الله} هو…" }, o: [{ id: "Pertanyaan biasa", ar: "استفهام حقيقي" }, { id: "Pengingkaran dan celaan", ar: "استنكار وتوبيخ" }, { id: "Doa", ar: "دعاء" }, { id: "Perintah", ar: "أمر" }], j: 1, b: { id: "Dosen menyebutnya istifham makna istinkar.", ar: "استفهام بمعنى الاستنكار." } },
      { q: { id: "Pendapat sahih untuk {حَقَّ تُقَاتِهِ} adalah pendapat…", ar: "الصحيح في {حق تقاته} قول…" }, o: [{ id: "Thawus", ar: "طاووس" }, { id: "Al-Harits bin Suwaid", ar: "الحارث بن سويد" }, { id: "Ibnu 'Abbas", ar: "ابن عباس" }, { id: "Al-Hasan", ar: "الحسن" }], j: 0, b: { id: "Takwa sesuai kemampuan; dosen menyebut pendapat Thawus.", ar: "مذهب طاووس." } },
      { q: { id: "Yang disebut dalam kuliah sebagai sebab turun ayat orang kafir setelah beriman, KECUALI…", ar: "ليس من أسباب نزول آيات من كفروا بعد إيمانهم…" }, o: [{ id: "Al-Harits bin Suwaid", ar: "الحارث بن سويد" }, { id: "Sepuluh orang yang murtad", ar: "عشرة ارتدوا" }, { id: "Ahlul Kitab", ar: "أهل الكتاب" }, { id: "Abdullah bin Ubay", ar: "عبد الله بن أبي" }], j: 3, b: { id: "Tiga pendapat yang disebut hanya yang tiga pertama.", ar: "الأقوال الثلاثة غيره." } }
    ],
    bs: [
      { t: { id: "Pada ayat 36, dosen hanya menyebut satu pendapat: mansukh.", ar: "في الآية السادسة والثلاثين ذكر الشيخ قولًا واحدًا هو النسخ." }, j: false, b: { id: "Beliau menyebut tiga arah tafsir, termasuk dua yang menyatakan muhkam.", ar: "ذكر ثلاثة اتجاهات." } },
      { t: { id: "Al-Baqarah: 282 dianggap muhkam karena perintah mencatat bersifat anjuran.", ar: "آية ٢٨٢ محكمة لأن الأمر للاستحباب." }, j: true },
      { t: { id: "Klaim naskh Ali 'Imran: 20 oleh ayat pedang dibenarkan dosen.", ar: "الشيخ يصحح دعوى نسخ آل عمران ٢٠." }, j: false, b: { id: "Beliau menyebutnya tidak benar.", ar: "القول غير صحيح." } },
      { t: { id: "Taqiyyah dengan lisan diperbolehkan jika hati tetap tenang dalam iman.", ar: "التقية باللسان جائزة والقلب مطمئن." }, j: true },
      { t: { id: "Ayat tentang orang kafir setelah beriman menutup pintu tobat sepenuhnya.", ar: "آية من كفروا بعد إيمانهم تغلق باب التوبة." }, j: false, b: { id: "Ada pengecualian {إلا الذين تابوا}.", ar: "استثنى التائبين." } },
      { t: { id: "Dosen memandang Ali 'Imran: 102 muhkam.", ar: "الشيخ يرى آية ١٠٢ محكمة." }, j: true },
      { t: { id: "\"Wus'\" dalam {إِلَّا وُسْعَهَا} berarti kemampuan maksimal yang membinasakan.", ar: "الوسع هو أقصى الطاقة المهلكة." }, j: false, b: { id: "Itu pemahaman yang dipakai pengklaim naskh; yang sahih sesuai kemampuan.", ar: "الصحيح قدر الطاقة." } },
      { t: { id: "Dosen menutup bagian Al-Baqarah pada pertemuan ini.", ar: "أنهى الشيخ آيات البقرة في هذا اللقاء." }, j: true }
    ],
    jodoh: [
      { a: { id: "Al-Baqarah: 282", ar: "البقرة ٢٨٢" }, b: { id: "Perintah mencatat utang; muhkam", ar: "كتابة الدين محكمة" } },
      { a: { id: "Al-Baqarah: 284", ar: "البقرة ٢٨٤" }, b: { id: "Apa yang ada di dalam jiwa; tiga arah tafsir", ar: "ما في الأنفس ثلاثة اتجاهات" } },
      { a: { id: "Al-Baqarah: 286", ar: "البقرة ٢٨٦" }, b: { id: "Tidak membebani melainkan sesuai kesanggupan", ar: "لا يكلف الله نفسًا إلا وسعها" } },
      { a: { id: "Ali 'Imran: 20", ar: "آل عمران ٢٠" }, b: { id: "Tugasmu hanya menyampaikan", ar: "إنما عليك البلاغ" } },
      { a: { id: "Ali 'Imran: 28", ar: "آل عمران ٢٨" }, b: { id: "Taqiyyah; rukhsah", ar: "التقية رخصة" } },
      { a: { id: "Ali 'Imran: 102", ar: "آل عمران ١٠٢" }, b: { id: "Takwa sesuai kemampuan; pendapat Thawus", ar: "مذهب طاووس" } },
      { a: { id: "Ali 'Imran: 86", ar: "آل عمران ٨٦" }, b: { id: "Kafir setelah beriman; pengecualian bagi yang bertobat", ar: "إلا الذين تابوا" } }
    ],
    urut: { t: { id: "Urutkan ayat berikut sesuai urutan pembahasan dosen dalam kuliah.", ar: "رتب الآيات حسب ترتيب الشيخ في المحاضرة." },
      item: [{ id: "Al-Baqarah: 282 (utang)", ar: "البقرة ٢٨٢" }, { id: "Al-Baqarah: 284 (apa yang ada dalam jiwa)", ar: "البقرة ٢٨٤" }, { id: "Al-Baqarah: 286 (tidak membebani)", ar: "البقرة ٢٨٦" }, { id: "Ali 'Imran: 20 (hanya menyampaikan)", ar: "آل عمران ٢٠" }, { id: "Ali 'Imran: 28 (taqiyyah)", ar: "آل عمران ٢٨" }, { id: "Ali 'Imran: 102 (takwa sebenar-benarnya)", ar: "آل عمران ١٠٢" }] },
    isian: [
      { t: { id: "Bagi jumhur, perintah mencatat utang bersifat ______ sehingga tidak ada naskh.", ar: "الأمر بكتابة الدين عند الجمهور ______ فلا نسخ." }, j: { id: "istihbab (anjuran)", ar: "استحباب" }, x: [{ id: "kewajiban", ar: "وجوب" }, { id: "pengharaman", ar: "تحريم" }, { id: "kemakruhan", ar: "كراهة" }] },
      { t: { id: "Pendapat sahih tentang {حَقَّ تُقَاتِهِ} adalah mazhab ______.", ar: "الصحيح في {حق تقاته} مذهب ______." }, j: { id: "Thawus", ar: "طاووس" }, x: [{ id: "Mujahid", ar: "مجاهد" }, { id: "Qatadah", ar: "قتادة" }, { id: "Ibnu Sirin", ar: "ابن سيرين" }] },
      { t: { id: "Terhadap Ali 'Imran: 20, dosen menyatakan bahwa tugas Nabi ﷺ hanyalah ______.", ar: "مهمة النبي ﷺ في آل عمران ٢٠ هي ______." }, j: { id: "menyampaikan", ar: "البلاغ" }, x: [{ id: "berperang", ar: "القتال" }, { id: "memaksa", ar: "الإكراه" }, { id: "menghukum", ar: "العقاب" }] },
      { t: { id: "Ungkapan dosen: Al-Qur'an itu ______ (memuat banyak segi makna).", ar: "القرآن ______ ذو وجوه." }, j: { id: "hammal", ar: "حمَّال" }, x: [{ id: "ghalib", ar: "غالب" }, { id: "mujmal", ar: "مجمل" }, { id: "nasikh", ar: "ناسخ" }] }
    ],
    pilah: { t: { id: "Pilah: klaim nasikh-nya ayat pedang, atau ayat selain pedang?", ar: "صنِّف: الناسخ المدعى آية السيف أو غيرها؟" },
      kategori: [{ id: "Ayat pedang / perang", ar: "آية السيف والقتال" }, { id: "Ayat selain pedang", ar: "غير آية السيف" }],
      item: [
        { t: { id: "Ali 'Imran: 20", ar: "آل عمران ٢٠" }, k: 0 },
        { t: { id: "Ali 'Imran: 28 (taqiyyah)", ar: "آل عمران ٢٨" }, k: 0 },
        { t: { id: "Al-Baqarah: 282 dihapus ayat 283", ar: "البقرة ٢٨٢" }, k: 1 },
        { t: { id: "Al-Baqarah: 284 dihapus ayat 286", ar: "البقرة ٢٨٤" }, k: 1 },
        { t: { id: "Al-Baqarah: 286 dihapus ayat 185", ar: "البقرة ٢٨٦" }, k: 1 },
        { t: { id: "Ali 'Imran: 102 dihapus At-Taghabun: 16", ar: "آل عمران ١٠٢" }, k: 1 }
      ] }
  },
  tugas: [
    { t: { ar: "في قول الله تعالى: {يَا أَيُّهَا الَّذِينَ آمَنُوا إِذَا تَدَايَنتُم بِدَيْنٍ إِلَىٰ أَجَلٍ مُّسَمًّى فَاكْتُبُوهُ ...} بيِّن المراد بهذه الآية وما أوجه النسخ في هذه الآية الكريمة.", id: "Pada firman Allah {Wahai orang-orang beriman, apabila kalian bermuamalah dengan utang-piutang untuk waktu tertentu maka tulislah...}: jelaskan maksud ayat ini dan sisi klaim naskh padanya." },
      j: { ar: "المراد: الأمر بإثبات الدَّين في كتاب وإثبات الشهادة في البيع والدَّين حتى يثبت. وقال بعضهم: إنها منسوخة بقوله {فإن أمن بعضكم بعضًا فليؤد الذي اؤتمن أمانته}، أي: إذا أمن بعضكم بعضًا فلا تكتبوا. واختلف العلماء هل الأمر للوجوب أم للاستحباب؟ وجمهور الفقهاء على أنه للاستحباب، وقوله {فإن أمن بعضكم بعضًا} تخيير وإباحة، فالصحيح أن الآية محكمة ولا نسخ فيها.",
        id: "Maksudnya: perintah menetapkan utang dalam tulisan dan menegakkan persaksian dalam jual beli dan utang. Sebagian orang mengklaim ayat ini dihapus oleh {fa in amina ba'dhukum ba'dhan...} (ayat 283): jika saling percaya, tidak perlu mencatat. Ulama berbeda apakah perintahnya wajib atau anjuran; **jumhur fuqaha menilainya anjuran**, dan ayat 283 hanya memberi pilihan dan kelonggaran. Maka **yang sahih: ayat ini muhkam, tidak ada naskh**." } },
    { t: { ar: "في قول الله تعالى: {وَإِن تُبْدُوا مَا فِي أَنفُسِكُمْ أَوْ تُخْفُوهُ يُحَاسِبْكُم بِهِ اللَّهُ ...} بيِّن المراد بهذه الآية مع بيان أوجه المفسرين فيها. وهل هي منسوخة أو لا؟", id: "Pada firman Allah {Jika kalian menampakkan apa yang ada dalam diri kalian atau menyembunyikannya, Allah akan menghisab kalian...}: jelaskan maksudnya beserta pandangan para mufassir, dan apakah ia mansukh atau tidak?" },
      j: { ar: "ما أُبدي يحاسب عليه الإنسان لأنه عمل أو كلام، والسؤال عما أخفاه في نفسه. للمفسرين ثلاثة اتجاهات: الأول: أنها منسوخة بقوله {لا يكلف الله نفسًا إلا وسعها}، وذكروا أن الصحابة شق عليهم ذلك لما نزلت. الثاني: أن المراد الشهادة، فهي محكمة، ويؤيده {ولا تكتموا الشهادة}. الثالث: أن المراد المشقة التي رُفعت، ويُعرض العمل يوم القيامة لا للعقاب بل كما في الحديث: «سترتها عليك في الدنيا وأنا أغفرها لك اليوم». وكلها وجوه محتملة.",
        id: "Yang ditampakkan pasti dihisab karena berupa amal/ucapan; pertanyaannya tentang yang disembunyikan di hati. Para mufassir punya **tiga arah**: (1) **mansukh** oleh {لا يكلف الله نفسًا إلا وسعها} (para sahabat merasa berat ketika ayat turun) — pendapat banyak mufassir dan fuqaha; (2) **muhkam**, maksudnya **kesaksian**, didukung larangan menyembunyikan kesaksian; (3) **muhkam**, yang diangkat adalah kesulitan; amal tetap diperlihatkan di hari kiamat tetapi bukan sebagai hisab hukuman, seperti hadits \"Aku telah menutupinya di dunia dan hari ini Aku mengampuninya\". Dosen menyebut semuanya sebagai kemungkinan makna." } },
    { t: { ar: "في قول الله تعالى: {يَا أَيُّهَا الَّذِينَ آمَنُوا اتَّقُوا اللَّهَ حَقَّ تُقَاتِهِ ...} هل هذه الآية منسوخة أو لا؟", id: "Pada firman Allah {Wahai orang-orang beriman, bertakwalah kepada Allah dengan sebenar-benar takwa...}: apakah ayat ini mansukh atau tidak?" },
      j: { ar: "هناك قولان: منهم من قال: «حق تقاته» ما تقدرون عليه من التقوى، وأنها منسوخة بقوله {فاتقوا الله ما استطعتم} [التغابن ١٦]، وهذا قول بعيد. والصحيح أنك مأمور بتقوى الله قدر استطاعتك، وهو مذهب طاووس، وعلى هذا فالآية محكمة غير منسوخة.",
        id: "Ada dua pendapat. Sebagian berkata maknanya takwa semampu kalian lalu ayat ini mansukh oleh {فاتقوا الله ما استطعتم} (At-Taghabun: 16) — dosen menilainya **pendapat yang jauh**. **Yang sahih:** seseorang diperintahkan bertakwa sesuai kemampuannya (pendapat **Thawus**), dan karena itu ayat ini **muhkam, tidak mansukh**." } }
  ]
});
