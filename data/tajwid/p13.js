/* Tajwid — Pertemuan 13: Bab Hamzat al-Washl (dan Hamzat al-Qath') */
Kuliah.pertemuan("tajwid", {
  no: 13, motif: "generasi", tema: 3, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/510",
  bab: { id: "Bab Hamzat al-Washl", ar: "باب همزة الوصل" },
  judul: { id: "Hamzat al-Washl & Hamzat al-Qath'", ar: "همزة الوصل وهمزة القطع" },
  ringkas: {
    id: "Pengertian hamzat al-washl dan lawannya (hamzat al-qath'), sebab penamaan dan tandanya di mushaf, enam syarat, tempatnya pada isim, fi'il, dan huruf, cara memulai (dhammah/kasrah/fathah), kasus berkumpulnya hamzah washl dengan hamzah qath' sukun, serta hamzah istifham yang masuk pada hamzah washl.",
    ar: "تعريف همزة الوصل وهمزة القطع، وسبب التسمية وعلامتها في المصحف، وشروطها، ومواقعها في الأسماء والأفعال والحروف، وكيفية الابتداء بها، واجتماعها مع همزة القطع الساكنة، ودخول همزة الاستفهام على همزة الوصل."
  },
  tujuan: [
    { id: "Membedakan hamzat al-washl dari hamzat al-qath' dari segi definisi, tanda, dan hukumnya.", ar: "التفريق بين همزة الوصل وهمزة القطع تعريفًا وعلامةً وحكمًا." },
    { id: "Menyebut enam syarat hamzat al-washl serta tempatnya pada isim, fi'il, dan huruf.", ar: "ذكر شروط همزة الوصل الستة ومواقعها في الأسماء والأفعال والحروف." },
    { id: "Menentukan harakat awal (dhammah, kasrah, atau fathah) ketika memulai kata berhamzah washl.", ar: "تحديد حركة الابتداء بهمزة الوصل: ضمًّا أو كسرًا أو فتحًا." },
    { id: "Menjelaskan hukum berkumpulnya hamzah washl dengan hamzah qath' sukun pada tujuh fi'il Al-Qur'an.", ar: "بيان حكم اجتماع همزة الوصل وهمزة القطع الساكنة في الأفعال السبعة." },
    { id: "Menjelaskan hukum masuknya hamzah istifham pada kata berhamzah washl (fi'il dan isim berlam ta'rif).", ar: "بيان حكم دخول همزة الاستفهام على همزة الوصل في الفعل والاسم." }
  ],
  isi: [
    { t: "pembuka", id: "Pertemuan ini membahas **bab hamzat al-washl**: hamzah tambahan di awal kata yang diucapkan ketika memulai bacaan, tetapi **gugur** ketika kata itu dibaca bersambung dengan kata sebelumnya. Pembahasannya tidak lepas dari lawannya, **hamzat al-qath'**, yang selalu tetap ditulis dan dilafazkan.", ar: "موضوع هذه المحاضرة «باب همزة الوصل»، وهي الهمزة الزائدة في أول الكلمة، تثبت عند الابتداء وتسقط في الدرج، ولا ينفك الكلام عنها عن مقابلتها وهي همزة القطع." },

    { t: "judul", id: "Pengertian: Hamzat al-Washl dan Hamzat al-Qath'", ar: "التعريف بالهمزتين" },
    { t: "definisi", judul: { id: "Hamzat al-washl", ar: "همزة الوصل" }, lughah: { id: "Hamzah yang menyambung: ketika kalimat disambung, kata sesudahnya tersambung dengan kata sebelumnya dan hamzah itu gugur dalam lafaz.", ar: "سُميت بذلك لأنك إذا وصلت الكلام اتصل ما بعدها بما قبلها وسقطت هي في اللفظ." }, istilah: { id: "**Hamzah tambahan di awal kata yang tetap ada ketika memulai (ibtida') dan gugur ketika bersambung (idraj/wasl)**, karena orang yang berbicara memakainya untuk bisa melafazkan huruf yang sukun. Ia ada pada isim, fi'il, dan huruf, dan hanya datang dalam satu bentuk, yakni di awal kata.", ar: "هي الهمزة الزائدة في أول الكلمة، تثبت في حال الابتداء وتسقط في الدرج، لوصول المتكلم بها إلى النطق بالساكن، في الأسماء والأفعال والحروف، ولا تأتي إلا على شكل واحد في أول الكلمة." } },
    { t: "definisi", judul: { id: "Hamzat al-qath'", ar: "همزة القطع" }, lughah: { id: "Hamzah yang memutus: pelafazannya memutus kata itu dari kata sebelumnya.", ar: "سُميت لأن اللفظ بها يقطع قبلها عما بعدها." }, istilah: { id: "**Hamzah yang tetap dilafazkan dan ditulis — ketika memulai, bersambung, maupun berhenti.** Ada pada isim, fi'il, dan huruf; letaknya di awal, tengah, atau akhir kata. Tandanya kepala 'ain kecil, bisa di atas ya', waw, alif, atau di atas garis.", ar: "هي الهمزة التي تثبت لفظًا ورسمًا ابتداءً ووصلًا ووقفًا، وتكون في الأسماء والأفعال والحروف، وفي بداية الكلمة ووسطها وآخرها، وعلامتها رأس عين، ولها أشكال مختلفة: على ياء أو واو أو ألف أو على السطر." } },
    { t: "banding", judul: { id: "Washl melawan qath'", ar: "الفرق بين الهمزتين" },
      kiri: { judul: { id: "Hamzat al-washl", ar: "همزة الوصل" }, ikon: "chain", warna: "green", poin: [
        { id: "Tetap ketika memulai, **gugur** ketika bersambung.", ar: "تثبت ابتداءً وتسقط وصلًا." },
        { id: "Hanya di **awal kata**.", ar: "لا تكون إلا في أول الكلمة." },
        { id: "Tanda di mushaf: kepala *shad* kecil di atas alif.", ar: "علامتها رأس صاد صغيرة على الألف." } ] },
      kanan: { judul: { id: "Hamzat al-qath'", ar: "همزة القطع" }, ikon: "key", warna: "blue", poin: [
        { id: "Tetap **dalam semua keadaan**: ibtida', wasl, dan waqf.", ar: "تثبت ابتداءً ووصلًا ووقفًا." },
        { id: "Di awal, tengah, atau akhir kata.", ar: "في أول الكلمة ووسطها وآخرها." },
        { id: "Tanda: kepala 'ain kecil; di bawah alif bila berkasrah.", ar: "رأس عين، وتحت الألف إذا كانت مكسورة." } ] } },
    { t: "poin", judul: { id: "Asal-usul dan sebab penamaan", ar: "أصل الهمزة وسبب التسمية" }, item: [
      { ikon: "scroll", judul: { id: "Perbedaan tentang asalnya", ar: "الخلاف في أصلها" }, id: "Ada yang berpendapat ia memang dibuat sebagai hamzah; ada yang berpendapat asalnya **alif**, karena ia tampil sebagai alif pada {ءَآللَّهُ} dan {ءَآلرَّجُلُ} ketika istifham.", ar: "قيل: وُضعت همزة، وقيل: أصلها الألف؛ لأنها تثبت ألفًا في «ءالله» و«ءالرجل» في حال الاستفهام." },
      { ikon: "chain", judul: { id: "Mengapa disebut *washl*", ar: "سبب التسمية بالوصل" }, id: "Karena bila kalimat disambung, kata sesudahnya menyambung dengan sebelumnya dan hamzah gugur dalam lafaz. Ada pula yang berkata: karena pembicara **sampai** (*washala*) lewat hamzah itu kepada huruf sukun.", ar: "لأنك إذا وصلت الكلام اتصل ما بعدها بما قبلها وسقطت، وقيل: لوصول المتكلم بها إلى النطق بالساكن." },
      { ikon: "bulb", judul: { id: "*Sullam al-lisan* (tangga lidah)", ar: "سلّم اللسان" }, id: "Al-Khalil bin Ahmad menyebutnya **tangga lidah**: sebab tidak boleh berhenti pada huruf berharakat dan tidak boleh memulai dengan huruf sukun, maka perlu sesuatu agar bisa melafazkan yang sukun — itulah hamzat al-washl.", ar: "كان الخليل بن أحمد يسميها «سلّم اللسان»؛ لأنه لما كان لا يوقف بمتحرك ولا يبتدأ بساكن كان لا بد من الإتيان بشيء حتى نتمكن من النطق بالساكن، وهذا الشيء هو همزة الوصل." } ] },
    { t: "catatan", gaya: "info", judul: { id: "Tanda di mushaf", ar: "علامتها في المصحف" }, id: "Di mushaf, hamzat al-washl ditandai **kepala *shad* kecil** di atas alif — diambil dari kata *washl* — sehingga mudah dikenali.", ar: "علامة همزة الوصل في رسم المصحف وضع رأس صاد صغيرة على حرف الألف، للدلالة على الوصل، مأخوذة من كلمة «وصل»." },

    { t: "judul", id: "Enam Syarat Hamzat al-Washl", ar: "شروط همزة الوصل" },
    { t: "langkah", item: [
      { id: "Ditulis dalam khath dengan **bentuk alif**.", ar: "تثبت في الخط على صورة الألف." },
      { id: "Ketika memulai, keluar dari **makhraj hamzah**.", ar: "تخرج ابتداءً من مخرج الهمزة." },
      { id: "Berharakat dengan **harakat lafzhiyyah 'aridhah** (harakat sementara untuk memulai).", ar: "تتحرك بحركة لفظية عارضة." },
      { id: "**Gugur** dalam idraj/wasl.", ar: "تسقط في درج الكلام أي حال الوصل." },
      { id: "Berada di **awal kata saja**.", ar: "تتصدر الكلمة فتكون في أولها فقط." },
      { id: "Huruf sesudahnya **sukun muhaqqaq** (sukun asli).", ar: "الحرف الذي بعدها ساكن محقق." } ] },
    { t: "peta", ikon: "layers", pusat: { id: "Tempat hamzat al-washl", ar: "مواقع همزة الوصل" }, cabang: [
      { id: "Isim", ar: "الأسماء", sub: [{ id: "Qiyasi (punya kaidah sharaf, paling banyak)", ar: "قياسية" }, { id: "Sima'i (hanya didengar dari orang Arab, sedikit)", ar: "سماعية" }] },
      { id: "Fi'il", ar: "الأفعال", sub: [{ id: "Madhi khumasi & sudasi", ar: "الماضي الخماسي والسداسي" }, { id: "Amr tsulatsi, khumasi, sudasi", ar: "أمر الثلاثي والخماسي والسداسي" }] },
      { id: "Huruf", ar: "الحروف", sub: [{ id: "Hanya pada lam ta'rif (*al*)", ar: "لام التعريف فقط" }] } ] },

    { t: "judul", id: "Hamzat al-Washl pada Isim", ar: "همزة الوصل في الأسماء" },
    { t: "p", id: "Pada isim, hamzah washl terbagi dua. **Qiyasi** berarti ada kaidah sharaf yang menjadi patokan dan banyak contohnya (ini yang terbanyak). **Sima'i** berarti didengar begitu saja dari orang Arab tanpa kaidah (lebih sedikit). Isim qiyasi adalah **mashdar dari fi'il madhi khumasi (lima huruf) dan sudasi (enam huruf)**. Untuk mengetahui jumlah hurufnya, kembalikan isim itu ke fi'il madhi-nya: misalnya *ikhtilaf* (enam huruf) berasal dari *ikhtalafa* (lima huruf).", ar: "همزة الوصل في الأسماء قياسية وهي الأكثر، وهي مصدر الفعل الماضي الخماسي ومصدر الفعل الماضي السداسي، وسماعية وهي الأقل ورودًا. ولمعرفة هل الفعل خماسي أو سداسي ننظر للاسم؛ فكلمة «اختلاف» من ست أحرف وفعلها «اختلف» من خمسة، ويمكن معرفة أصل الكلمة بردها إلى فعلها الماضي." },
    { t: "contoh", judul: { id: "Mashdar madhi khumasi — dimulai dengan kasrah", ar: "مصدر الماضي الخماسي: يُبدأ بالكسر" },
      ayat: { ar: "{وَحَرَّمُوا۟ مَا رَزَقَهُمُ ٱللَّهُ ٱفۡتِرَاۤءً عَلَى ٱللَّهِۚ}", src: "QS. Al-An'am", id: "Mereka mengharamkan rezeki yang Allah berikan kepada mereka, sebagai kebohongan atas nama Allah." },
      sorot: [
        { label: { ar: "ٱفۡتِرَاۤءً" }, warna: "green", id: "Mashdar fi'il khumasi *iftara*. Ketika memulai: **ifthira'** dengan kasrah, sebab huruf ketiga fi'ilnya (ta') berfathah. Ketika bersambung dengan kata sebelumnya, alif washl tidak dilafazkan.", ar: "مصدر فعل ماضٍ خماسي، يبدأ بها مكسورة لأن ثالث الفعل مفتوح وهو التاء، وفي الوصل تسقط." },
        { label: { ar: "ٱبۡتِغَاۤءَ مَرۡضَاتِ ٱللَّهِ" }, warna: "blue", id: "Dari QS. Al-Baqarah ({وَمِنَ ٱلنَّاسِ مَن یَشۡرِی نَفۡسَهُ ٱبۡتِغَاۤءَ مَرۡضَاتِ ٱللَّهِۚ}): mashdar fi'il khumasi, dimulai dengan kasrah.", ar: "مصدر فعل ماضٍ خماسي، يبدأ بها مكسورة." },
        { label: { ar: "ٱنتِقَامٍ" }, warna: "gold", id: "Dari QS. Ali 'Imran ({وَٱللَّهُ عَزِیزࣱ ذُو ٱنتِقَامٍ}): mashdar fi'il khumasi, dimulai dengan kasrah.", ar: "مصدر فعل ماضٍ خماسي، يبدأ بهمزة الوصل مكسورة." } ] },
    { t: "contoh", judul: { id: "Mashdar madhi sudasi dan amr sudasi", ar: "مصدر الماضي السداسي وأمره" },
      sorot: [
        { label: { ar: "ٱسۡتِغۡفَارُ" }, warna: "green", id: "{وَمَا كَانَ ٱسۡتِغۡفَارُ إِبۡرَ ٰ⁠هِیمَ لِأَبِیهِ} (QS. At-Taubah) — mashdar fi'il sudasi, dimulai dengan kasrah.", ar: "مصدر الماضي السداسي، يبدأ بها مكسورة." },
        { label: { ar: "ٱسۡتِكۡبَارࣰا" }, warna: "blue", id: "{وَأَصَرُّوا۟ وَٱسۡتَكۡبَرُوا۟ ٱسۡتِكۡبَارࣰا} (QS. Nuh) — dimulai dengan kasrah karena huruf ketiga fi'ilnya berkasrah.", ar: "يبدأ بها مكسورة لأن ثالث الفعل مكسور." },
        { label: { ar: "ٱسۡتَغۡفِرۡ" }, warna: "gold", id: "{قَالُوا۟ یَـٰۤأَبَانَا ٱسۡتَغۡفِرۡ لَنَا ذُنُوبَنَاۤ} (QS. Yusuf) — fi'il amr sudasi; dimulai dengan kasrah.", ar: "أمر الفعل السداسي." } ] },
    { t: "catatan", gaya: "tanbih", id: "Mashdar dari fi'il **tsulatsi** (misalnya *itsman*) dan mashdar dari fi'il **ruba'i** (misalnya *ith'am*, *ikhraj*, *ishlah*) hamzahnya adalah **hamzat qath'**, bukan hamzat washl.", ar: "أما الماضي الثلاثي في كلمة «إثمًا» وإذا أخذ، ومصادر الماضي الرباعي «إطعام وإخراج وإصلاحًا» فهمزتها همزة قطعية." },
    { t: "cek", q: { id: "Ketika memulai {ٱفۡتِرَاۤءً}, hamzah washl dibaca dengan harakat…", ar: "عند الابتداء بـ {ٱفۡتِرَاۤءً} تُنطق همزة الوصل…" }, o: [{ id: "Dhammah", ar: "ضمة" }, { id: "Fathah", ar: "فتحة" }, { id: "Kasrah", ar: "كسرة" }, { id: "Tidak dibaca", ar: "لا تُنطق" }], j: 2, b: { id: "Mashdar fi'il madhi khumasi dimulai dengan kasrah.", ar: "مصدر الماضي الخماسي يبدأ بالكسر." } },

    { t: "sub", id: "Isim sima'i: sepuluh isim (tujuh ada di Al-Qur'an)", ar: "الأسماء السماعية" },
    { t: "p", id: "Isim sima'i berjumlah **sepuluh**: **tujuh** disebut di Al-Qur'an, dan **tiga** tidak ada di Al-Qur'an tetapi dikenal dari ucapan orang Arab. Semuanya **dimulai dengan kasrah**.", ar: "الأسماء السماعية عشرة أسماء، ورد منها في القرآن سبعة، وثلاثة غير موجودة بالقرآن ولكنها من كلام العرب، وكلها يبدأ بها مكسورة." },
    { t: "tabel", judul: { id: "Tujuh isim sima'i dalam Al-Qur'an", ar: "الأسماء السبعة في القرآن" }, kolom: [{ id: "Isim", ar: "الاسم" }, { id: "Contoh ayat", ar: "المثال" }], baris: [
      [{ id: "1. [[ٱبۡن]] *ibn* (putra)", ar: "ابن" }, "{وَعِیسَى ٱبۡنِ مَرۡیَمَ} (Al-Ma'idah); {قَالَ ٱبۡنَ أُمَّ} (Al-A'raf); {وَٱبۡنَ ٱلسَّبِیلِ} (Al-Isra'); {إِنَّ ٱبۡنَكَ سَرَقَ} (Yusuf); {وَنَادَىٰ نُوحٌ ٱبۡنَهُ} (Hud); {نَبَأَ ٱبۡنَیۡ ءَادَمَ} (Al-Ma'idah)"],
      [{ id: "2. [[ٱبۡنَت]] *ibnat* (putri)", ar: "ابنت" }, "{إِحۡدَى ٱبۡنَتَیَّ هَـٰتَیۡنِ} (Al-Qashash); {وَمَرۡیَمَ ٱبۡنَتَ عِمۡرَ ٰ⁠نَ} (At-Tahrim)"],
      [{ id: "3. [[ٱمۡرُؤ]] *imru'* (seseorang)", ar: "امرؤ" }, "{إِنِ ٱمۡرُؤٌا۟ هَلَكَ} (An-Nisa'); {لِكُلِّ ٱمۡرِئࣲ مِّنۡهُم مَّا ٱكۡتَسَبَ} (An-Nur); {مَا كَانَ أَبُوكِ ٱمۡرَأَ سَوۡءࣲ} (Maryam); {كُلُّ ٱمۡرِىِٕ بِمَا كَسَبَ رَهِینࣱ} (Ath-Thur); juga di Al-Ma'arij, Al-Muddatstsir, dan 'Abasa"],
      [{ id: "4. [[ٱمۡرَأَة]] *imra'ah* (perempuan)", ar: "امرأة" }, "{إِذۡ قَالَتِ ٱمۡرَأَتُ عِمۡرَ ٰ⁠نَ} (Ali 'Imran); {وَإِنِ ٱمۡرَأَةٌ خَافَتۡ} (An-Nisa'); {إِنِّی وَجَدتُّ ٱمۡرَأَةࣰ تَمۡلِكُهُمۡ} (An-Naml); {إِلَّا ٱمۡرَأَتَهُۥ}; {وَوَجَدَ مِن دُونِهِمُ ٱمۡرَأَتَیۡنِ} (Al-Qashash)"],
      [{ id: "5. [[ٱثۡنَیۡن]] *itsnain* (dua, mudzakkar)", ar: "اثنين" }, "{ٱثۡنَا عَشَرَ شَهۡرࣰا} (At-Taubah); {ثَانِیَ ٱثۡنَیۡنِ إِذۡ هُمَا فِی ٱلۡغَارِ}; {ٱثۡنَیۡ عَشَرَ نَقِیبࣰا} (Al-Ma'idah); {حِینَ ٱلۡوَصِیَّةِ ٱثۡنَانِ ذَوَا عَدۡلࣲ مِّنكُمۡ}"],
      [{ id: "6. [[ٱسۡم]] *ism* (nama)", ar: "اسم" }, "{أَن یُذۡكَرَ فِیهَا ٱسۡمُهُۥ} (Al-Baqarah); {ٱسۡمُهُۥۤ أَحۡمَدُ} (Ash-Shaff); {وَٱذۡكُرِ ٱسۡمَ رَبِّكَ} (Al-Muzzammil); {سَبِّحِ ٱسۡمَ رَبِّكَ ٱلۡأَعۡلَى} (Al-A'la)"],
      [{ id: "7. [[ٱثۡنَتَیۡن]] *itsnatain* (dua, mu'annats)", ar: "اثنتين" }, "{ٱثۡنَتَا عَشۡرَةَ عَیۡنࣰا} (Al-Baqarah); {ٱثۡنَتَیۡ عَشۡرَةَ أَسۡبَاطًا} (Al-A'raf); {فَوۡقَ ٱثۡنَتَیۡنِ} (An-Nisa'); {أَمَتَّنَا ٱثۡنَتَیۡنِ وَأَحۡیَیۡتَنَا ٱثۡنَتَیۡنِ} (Ghafir)"] ] },
    { t: "poin", judul: { id: "Tiga isim sima'i di luar Al-Qur'an, dan isim lain", ar: "الأسماء الثلاثة وبقية الأسماء" }, item: [
      { ikon: "scroll", judul: { id: "Tiga isim dari ucapan Arab", ar: "ثلاثة من كلام العرب" }, id: "(1) *ism* sebagai nama bagian belakang (dubur); (2) *ibnum* — *ibn* dengan tambahan mim; (3) *aymu Allah* (sumpah), kadang ditambah nun menjadi *aymunullah*. Diperselisihkan apakah ia isim atau huruf; yang kuat ia **isim**, dan hamzahnya boleh **difathah atau dikasrah** ketika memulai.", ar: "كلمة «اسم» وهو اسم للدبر، و«ابنم» وهي ابن بزيادة الميم، و«وايم الله» في القسم، وقد تزاد نون، واختلف في اسميته وحرفيته، والراجح أنه اسم، ويجوز فتح همزته أو كسرها عند الابتداء." },
      { ikon: "key", judul: { id: "Isim lainnya (bukan mashdar)", ar: "بقية الأسماء غير المصادر" }, id: "Hamzahnya **hamzat qath'**, misalnya *ardh*, *amsi*, *anta*, *aba'*, *akh*, *ikhwah*, *ulu*.", ar: "همزتها همزة قطع، كمثل: أرض، وأمس، وأنت، وآباء، وأخ، وإخوة، وأولو." } ] },
    { t: "banding", judul: { id: "{ٱلِٱسۡمُ} pada QS. Al-Hujurat saat memulai: dua cara", ar: "الابتداء بـ {ٱلِٱسۡمُ} في الحجرات" },
      kiri: { judul: { id: "Wajah pertama: mengikuti asal", ar: "الوجه الأول: النظر إلى الأصل" }, ikon: "key", warna: "green", poin: [
        { id: "Memulai dengan hamzah washl pada *al* (hamzah berfathah, tetap diucapkan), lalu lam **berkasrah** (kasrah untuk menghindari dua sukun), kemudian sin sukun, mim dhammah.", ar: "إثبات همزة التعريف محققة مفتوحة وبعدها لام مكسورة للتخلص من التقاء الساكنين ثم سين ساكنة ثم ميم مضمومة." },
        { id: "Dibaca: **al-lisma** (hamzah fathah + lam kasrah).", ar: "نقول: «ألِسْمُ»." } ] },
      kanan: { judul: { id: "Wajah kedua: mengikuti harakat lam yang 'aridhah", ar: "الوجه الثاني: الاعتداد بحركة اللام" }, ikon: "bulb", warna: "amber", poin: [
        { id: "Harakat lam hanya didatangkan untuk menghindari dua sukun, tetapi **dianggap**; maka hamzah ta'rif dibuang dan memulai langsung dari lam berkasrah.", ar: "اعتددنا بحركة اللام العارضة فنبدأ باللام فقط، فتحذف همزة التعريف." },
        { id: "Dibaca: **lismu** (lam kasrah, sin sukun, mim dhammah).", ar: "نقول: «لِسْمُ»." } ] } },
    { t: "ayat", ar: "{بِئۡسَ ٱلِٱسۡمُ ٱلۡفُسُوقُ بَعۡدَ ٱلۡإِیمَـٰنِۚ}", id: "Seburuk-buruk panggilan adalah (panggilan) kefasikan setelah keimanan.", src: "QS. Al-Hujurat" },

    { t: "judul", id: "Hamzat al-Washl pada Fi'il", ar: "همزة الوصل في الأفعال" },
    { t: "p", id: "Pada fi'il, hamzah washl bisa **qiyasi** atau **sima'i**. Yang qiyasi ada pada **madhi khumasi dan sudasi**, serta pada **amr tsulatsi, khumasi, dan sudasi**. Hukum memulainya: **dhammah** atau **kasrah**.", ar: "همزة الوصل في الأفعال إما قياسية وإما سماعية، فالقياسية توجد في الماضي الخماسي والسداسي، وفي أمر الثلاثي والخماسي والسداسي، وحكمها أن يبدأ بها مضمومة أو مكسورة." },
    { t: "peta", ikon: "compass", pusat: { id: "Harakat awal fi'il berhamzah washl", ar: "حركة الابتداء بهمزة الوصل في الفعل" }, cabang: [
      { id: "Dhammah (2 keadaan)", ar: "الضم", sub: [{ id: "Amr tsulatsi yang huruf ketiganya dhammah asli", ar: "أمر الثلاثي ثالثه مضموم ضمًّا أصليًّا" }, { id: "Madhi khumasi/sudasi mabni majhul", ar: "الماضي الخماسي والسداسي المبني للمجهول" }] },
      { id: "Kasrah (3 keadaan)", ar: "الكسر", sub: [{ id: "Amr yang huruf ketiganya fathah/kasrah, dan amr sudasi", ar: "الأمر ثالثه مفتوح أو مكسور، وأمر السداسي" }, { id: "Madhi khumasi & sudasi", ar: "الماضي الخماسي والسداسي" }, { id: "Amr yang huruf ketiganya dhammah 'aridhah (4 fi'il)", ar: "الأمر ثالثه مضموم ضمة عارضة" }] } ] },
    { t: "contoh", judul: { id: "Kapan dimulai dengan dhammah", ar: "متى نبدأ بها مضمومة؟" },
      sorot: [
        { label: { ar: "ٱدۡعُ ٱخۡرُجۡ ٱدۡخُلِ ٱكۡتُبۡ ٱنظُرۡ" }, warna: "green", id: "**Amr tsulatsi** yang huruf ketiganya berdhammah asli: *ud'u*, *ukhruj*, *udkhul*, *uktub*, *unzhur*.", ar: "أمر الفعل الماضي الثلاثي ثالثه مضموم ضمًّا أصليًّا." },
        { label: { ar: "ٱبۡتُلِیَ ٱجۡتُثَّتۡ ٱسۡتُحۡفِظُوا۟" }, warna: "blue", id: "**Madhi khumasi** ({ٱبۡتُلِیَ}, {ٱجۡتُثَّتۡ}) dan **madhi sudasi** ({ٱسۡتُحۡفِظُوا۟}) bentuk pasif — dimulai dengan dhammah.", ar: "ماضي الخماسي: {ٱبۡتُلِیَ} {ٱجۡتُثَّتۡ}، وماضي السداسي: {ٱسۡتُحۡفِظُوا۟}." } ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Yang keluar dari kaidah (hamzahnya qath')", ar: "تنبيهات" }, id: "(1) **Fi'il mudhari'** — hamzahnya hanya qath': {أَعۡمَلُ} {أَسۡمَعُ} {أَذۡبَحُكَ} {أُشۡهِدُۚ} {أَخۡرُج}. (2) **Madhi tsulatsi** ({أَذِنَ} {أَمَرَ}) dan **madhi ruba'i** ({فَأَكۡرَمَهُ} {فَأَقَامَهُ}) — hamzah qath'. (3) **Amr ruba'i** ({أَدۡخِلۡنِی} {أَخۡرِجۡنِی} {أَكۡرِمِی}) — hamzah qath'.", ar: "خرج بقيد الماضي والأمر الفعل المضارع فهمزته همزة قطع: {أَعۡمَلُ} {أَسۡمَعُ} {أَذۡبَحُكَ}؛ وخرج الماضي الثلاثي {أَذِنَ} {أَمَرَ} والرباعي {فَأَكۡرَمَهُ} {فَأَقَامَهُ}؛ وخرج الأمر الرباعي {أَدۡخِلۡنِی} {أَخۡرِجۡنِی} {أَكۡرِمِی} فهمزتها همزة قطع." },
    { t: "contoh", judul: { id: "Kapan dimulai dengan kasrah: dua keadaan pertama", ar: "متى نبدأ بها مكسورة؟" },
      sorot: [
        { label: { ar: "ٱسۡتَجِیبُوا۟ ٱعۡلَمُوۤا۟ ٱذۡهَبُوا۟" }, warna: "green", id: "**Amr yang huruf ketiganya berfathah** — dimulai dengan kasrah. Demikian juga amr yang huruf ketiganya berkasrah: *idhrib*, *irji'*, *ighfir*; dan amr sudasi: *istaghfiru*, {ٱسۡتَـٔۡجِرۡهُۖ}, {ٱسۡتَهۡزِءُوۤا۟}.", ar: "إذا كان فعل أمر ثالثه مفتوح فنبدأ بها مكسورة، أو ثالثه مكسور (اضرب، ارجع، اغفر)، أو كالأمر من الفعل السداسي." },
        { label: { ar: "ٱعۡتَدَىٰ ٱقۡتَرَبَ ٱشۡتَرَىٰ ٱرۡتَضَىٰ ٱفۡتَرَىٰ ٱتَّقَىٰ" }, warna: "blue", id: "**Madhi khumasi** — kasrah.", ar: "الماضي الخماسي." },
        { label: { ar: "ٱسۡتَسۡقَىٰ ٱسۡتَكۡبَرَ ٱسۡتَطۡعَمَاۤ ٱسۡتَحَقَّ ٱسۡتَفۡتَحُوا۟" }, warna: "gold", id: "**Madhi sudasi** — kasrah.", ar: "الماضي السداسي." } ] },
    { t: "cek", q: { id: "Fi'il {ٱدۡعُ} dimulai dengan hamzah washl berharakat…", ar: "يُبدأ بهمزة الوصل في {ٱدۡعُ} بـ…" }, o: [{ id: "Kasrah", ar: "كسرة" }, { id: "Dhammah", ar: "ضمة" }, { id: "Fathah", ar: "فتحة" }, { id: "Sukun", ar: "سكون" }], j: 1, b: { id: "Amr tsulatsi yang huruf ketiganya berdhammah asli — dimulai dengan dhammah.", ar: "أمر ثلاثي ثالثه مضموم ضمًّا أصليًّا." } },

    { t: "sub", id: "Keadaan ketiga: huruf ketiga dhammah yang 'aridhah", ar: "ثالث الفعل مضموم ضمة عارضة" },
    { t: "p", id: "Dalam Al-Qur'an ada **empat fi'il amr** yang huruf ketiganya berdhammah secara 'aridhah: {ٱمۡشُوا۟} {ٱقۡضُوۤا۟} {ٱبۡنُوا۟} {ٱئۡتُوا۟}. Fi'il kelima yang serupa adalah {ٱمۡضُوا۟}, tetapi karena didahului waw, hamzah washl tidak berada di awalnya. Asal bentuknya *imsyiyu*, *iqdhiyu*, *ibniyu*, *i'tiyu*; dhammah berat pada ya', maka harakatnya dipindahkan ke huruf sebelumnya, ya' menjadi sukun lalu **gugur** karena bertemu dua sukun. Karena itu dhammahnya hanyalah 'aridh, dan ketika memulai **dibaca dengan kasrah** (mengikuti asal).", ar: "جاء في القرآن أربعة أفعال أمر ثالثها مضموم ضمة عارضة هي: {ٱمۡشُوا۟} {ٱقۡضُوۤا۟} {ٱبۡنُوا۟} {ٱئۡتُوا۟}، وهناك فعل خامس يتبع هذه المجموعة وهو {ٱمۡضُوا۟} لكنه مسبوق بالواو فلا تقع همزة الوصل في أوله. وأصلها: امشيوا، اقضيوا، ابنيوا، ائتيوا، فلما استثقلت الضمة على الياء نُقلت حركتها إلى الحرف الذي قبلها بعد سلب حركتها فسكنت الياء فحذفت لالتقاء الساكنين، لذا تقرأ بكسر همزتها عند الابتداء بها عملًا بالأصل." },
    { t: "tabel", judul: { id: "Contoh ayat dan cara memulai", ar: "الأمثلة وكيفية الابتداء" }, kolom: [{ id: "Ayat", ar: "الآية" }, { id: "Memulai dengan", ar: "عند الابتداء" }], baris: [
      ["{أَنِ ٱمۡشُوا۟ وَٱصۡبِرُوا۟ عَلَىٰۤ ءَالِهَتِكُمۡۖ} (Shad: 6)", "[[إِمْشُوا]] *imsyu* (kasrah)"],
      ["{ٱئۡتُونِی بِكِتَـٰبࣲ} (Al-Ahqaf: 4)", "[[إِيتُونِي]] *itûni* — hamzah sukun diganti **ya' madd**"],
      ["{ثُمَّ ٱئۡتُوا۟ صَفࣰّاۚ} (Thaha: 64)", "[[إِيتُوا]]"],
      ["{قَالُوا۟ ٱبۡنُوا۟ لَهُۥ بُنۡیَـٰنࣰا} (Ash-Shaffat: 97)", "[[إِبْنُوا]]"],
      ["{ثُمَّ ٱقۡضُوۤا۟ إِلَیَّ وَلَا تُنظِرُونِ} (Yunus: 71)", "[[إِقْضُوا]]"],
      ["{وَٱمۡضُوا۟ حَیۡثُ تُؤۡمَرُونَ} (Al-Hijr: 65)", "didahului waw — tidak dimulai dengan hamzah washl"] ] },
    { t: "kutipan", ar: "الدليل على أن الأصل في هذه الأفعال الكسر وأن الضم عارض: أنك إذا أمرت المخاطب الواحد قلت: إمشِ، إيتِ، إبنِ، إقضِ، وإذا أمرت الاثنين قلت: إمشيا، إيتيا، إبنيا، إقضيا بكسر الشين والتاء والنون والضاد.", id: "Dalil bahwa asal pada fi'il-fi'il ini adalah kasrah dan dhammah hanya 'aridh: bila engkau memerintah satu orang engkau berkata *imsyi*, *i'ti*, *ibni*, *iqdhi*, dan bila memerintah dua orang engkau berkata *imsyiya*, *i'tiya*, *ibniya*, *iqdhiya* — huruf ketiganya berkasrah. Maka wajib memulai dengan kasrah mengikuti asalnya.", oleh: "Para ulama (disampaikan Syaikh Muhammad asy-Syuqairi)" },
    { t: "catatan", gaya: "faidah", judul: { id: "Cara menghitung huruf ketiga bila ada tasydid", ar: "كيفية عدّ ثالث الفعل" }, id: "Bila huruf kedua setelah hamzah bertasydid, huruf bertasydid dihitung **dua huruf**: yang pertama sukun, yang kedua berharakat. Contoh *ittaba'a*: yang menjadi huruf ketiga adalah **ta' kedua yang berfathah**, bukan ba' yang berkasrah.", ar: "إذا كان ثاني حرف بعد الهمزة مباشرةً حرفًا مشددًا فالحرف المشدد عبارة عن حرفين: الأول ساكن والثاني متحرك؛ فمثلًا «إتَّبع» التاء المتحركة بالفتح الثانية هي ثالث الفعل وليس الباء المكسورة." },

    { t: "judul", id: "Hamzat al-Washl pada Huruf: Hanya pada Lam Ta'rif", ar: "همزة الوصل في الحروف" },
    { t: "poin", item: [
      { ikon: "key", judul: { id: "Satu-satunya huruf", ar: "لام التعريف فقط" }, id: "Dari semua huruf, hamzah washl hanya masuk pada **lam ta'rif** (dan lam ta'rif hanya ada pada isim). Hamzahnya qiyasi dan **hanya dimulai dengan fathah**, demi keringanan dan karena sangat sering muncul di Al-Qur'an.", ar: "تدخل همزة الوصل على لام التعريف فقط من بين الحروف، ولام التعريف لا تكون إلا في الأسماء، وهمزة الوصل فيها قياسية ولا يبدأ بها إلا مفتوحة طلبًا للخفة ولكثرة دورانها في القرآن." },
      { ikon: "check", judul: { id: "Contoh", ar: "أمثلة" }, id: "{ٱلۡحَمۡدُ} {ٱلرَّحۡمَـٰنِ} {ٱلۡإِنسَـٰنُ} {ٱلصَّـٰبِرِینَ} {ٱلنَّاسِ} {ٱلدُّنۡیَا}.", ar: "{ٱلۡحَمۡدُ، ٱلرَّحۡمَـٰنِ، ٱلۡإِنسَـٰنُ، ٱلصَّـٰبِرِینَ، ٱلنَّاسِ، ٱلدُّنۡیَا}." },
      { ikon: "shield", judul: { id: "Huruf lain berhamzah = qath'", ar: "بقية الحروف" }, id: "Huruf lain yang diawali hamzah memakai **hamzat qath'**: *aw*, *idz*, *an*, *inna*, *ila*, *am*.", ar: "أما بقية الحروف التي أولها همزة فهمزتها قطعية: أو، إذ، أن، إنّ، إلى، أم." } ] },
    { t: "tabel", judul: { id: "Faidah penting: kata {ٱلۡأَیۡكَةِ} di empat tempat", ar: "فائدة مهمة: كلمة {الأيكة}" }, kolom: [{ id: "Tempat", ar: "الموضع" }, { id: "Bentuk", ar: "الحكم" }], baris: [
      ["{وَإِن كَانَ أَصۡحَـٰبُ ٱلۡأَیۡكَةِ لَظَـٰلِمِینَ} (Al-Hijr: 78)", "Hamzah washl **tetap** sebelum lam sukun — dibaca {ٱلۡأَیۡكَةِ} ketika memulai dan bersambung, oleh semua qari."],
      ["{وَأَصۡحَـٰبُ ٱلۡأَیۡكَةِ وَقَوۡمُ تُبَّع} (Qaf: 14)", "Sama: tetap bagi semua qari."],
      ["{كَذَّبَ أَصۡحَـٰبُ لۡـَٔیۡكَةِ ٱلۡمُرۡسَلِینَ} (Asy-Syu'ara': 176)", "Hamzah washl **tidak ditulis** (gugur ketika wasl). Saat **memulai** ada perbedaan qari: sebagian mendatangkan hamzah washl untuk melafazkan lam sukun — di antaranya **Hafsh**, yang membaca {ٱلۡأَیۡكَةِ} — sebagian lain membaca lam berfathah tanpa hamzah sesudahnya: {لۡـَٔیۡكَةِ}."],
      ["{وَقَوۡمُ لُوطࣲ وَأَصۡحَـٰبُ لۡـَٔیۡكَةِۚ} (Shad: 13)", "Sama dengan Asy-Syu'ara'."] ] },

    { t: "judul", id: "Hamzat al-Qath': Tempat-tempatnya", ar: "مواضع همزة القطع" },
    { t: "p", id: "Hamzat al-qath' adalah hamzah bergerak yang dilafazkan dan ditulis di awal kata dan di tengahnya. Ia dinamai *qath'* karena pelafazannya memutus dari kata sebelumnya. Dalam penulisannya, alif diberi kepala 'ain kecil di atasnya bila berdhammah atau berfathah, dan di bawah alif bila berkasrah.", ar: "همزة القطع هي التي تنطق وتكتب، وهي همزة متحركة تقع في أول الكلمة وينطق بها في ابتداء الكلام وفي وسطه، وسميت همزة القطع لأن اللفظ بها يقطع قبلها عما بعدها، وترسم ألفًا عليها رأس عين صغيرة في حالتي الضم والفتح، وترسم تحت الألف إذا كانت مكسورة." },
    { t: "daftar", judul: { id: "Hamzat al-qath' terdapat pada…", ar: "تكون همزة القطع في…" }, item: [
      { id: "**Semua isim**, kecuali yang telah disebut pada hamzah washl — misalnya *ab*, *abawan*, *abna'*, *Ahmad*, *Ibrahim*, *Isma'il*.", ar: "جميع الأسماء إلا ما تقدم ذكره في همزة الوصل، مثل: أب، أبوان، أبناء، أحمد، إبراهيم، إسماعيل." },
      { id: "**Dhamir**: *ana*, *anta*, *iyyaka*.", ar: "الضمائر: أنا، أنت، إياك." },
      { id: "**Fi'il**: madhi tsulatsi dan mashdarnya (*akala*, *akhdzan*); madhi ruba'i, amr-nya, dan mashdarnya (*akrama*, *ikraman*); serta **setiap fi'il mudhari' yang dimulai hamzah** (*aktubu* dan sejenisnya).", ar: "الأفعال: ماضي الثلاثي ومصدره مثل: أكلًا، أخذًا؛ وماضي الرباعي وأمره ومصدره مثل: أكرم وإكرامًا؛ وكل مضارع مبدوء بهمزة مثل: أكتب." },
      { id: "**Huruf dan semua adat**, kecuali *al* ta'rif: *idzan*, *ay*, *idz*, *idz ma*, *am*, *aw*, *in*, *ila*, *illa*, *amma*, *ayya*, serta hamzah istifham dan hamzah nida'.", ar: "الحروف وكل الأدوات ما عدا «ال» مثل: إذًا، أي، وإذ، وإذ ما، وأم، وأو، وإن، وإلى، وإلا، وأما، وأيّا، وهمزة الاستفهام والنداء." } ] },

    { t: "judul", id: "Berkumpulnya Hamzat al-Washl dan Hamzat al-Qath'", ar: "اجتماع همزتي الوصل والقطع في كلمة واحدة" },
    { t: "poin", item: [
      { ikon: "puzzle", judul: { id: "Kasus 1: hamzah washl mendahului hamzah qath' sukun", ar: "تقدم همزة الوصل على همزة القطع الساكنة" }, id: "Khusus pada **fi'il**. Hamzah qath' sukun adalah **fa' fi'il** (huruf pertama akar kata). Contoh: {ٱؤۡتُمِنَ}, {ٱئۡتِنَا}, {ٱئۡذَن}.", ar: "خاص بالأفعال فقط، وتكون همزة القطع الساكنة فاءً للكلمة." },
      { ikon: "puzzle", judul: { id: "Kasus 2: hamzah istifham mendahului hamzah washl sukun", ar: "تقدم همزة الاستفهام على همزة الوصل" }, id: "Hamzah qath' istifham masuk pada kata berhamzah washl. Hukumnya berbeda untuk **fi'il** dan **isim** (dibahas di bagian akhir).", ar: "تقدم همزة القطع الاستفهامية على همزة الوصل، وهذه الكلمة إما أن تكون فعلًا وإما اسمًا، ولكل حالة حكمها." } ] },
    { t: "p", id: "**Kasus 1.** Ketika **memulai**, hamzah washl tetap dilafazkan dan hamzah qath' sukun diganti **huruf madd yang sejenis dengan harakat hamzah washl** (dhammah → waw madd, kasrah → ya' madd). Ketika **bersambung**, hamzah washl gugur dan hamzah qath' tetap dibaca. Hal ini terjadi pada **tujuh fi'il** dalam Al-Qur'an:", ar: "في حالة البدء بأي فعل منها تثبت همزة الوصل وتبدل همزة القطع الساكنة حرف مد من جنس حركة ما قبلها، وقد ورد في سبعة أفعال في القرآن الكريم." },
    { t: "tabel", judul: { id: "Tujuh fi'il", ar: "الأفعال السبعة" }, kolom: [{ id: "Ayat", ar: "الآية" }, { id: "Memulai dengan", ar: "عند الابتداء" }], baris: [
      ["{فَلۡیُؤَدِّ ٱلَّذِی ٱؤۡتُمِنَ أَمَـٰنَتَهُۥ} (Al-Baqarah: 283)", "[[أُوتُمِنَ]] — hamzah **dhammah** + waw madd"],
      ["{إِلَى ٱلۡهُدَى ٱئۡتِنَا} (Al-An'am: 71); {یَـٰصَـٰلِحُ ٱئۡتِنَا} (Al-A'raf: 77); {أَوِ ٱئۡتِنَا} (Al-Anfal: 32); {ٱئۡتِنَا بِعَذَابِ ٱللَّهِ} (Al-'Ankabut: 29)", "[[إِيتِنَا]] — kasrah + ya' madd"],
      ["{ٱئۡذَن لِّی} (At-Taubah: 49)", "[[إِيذَن]]"],
      ["{ٱئۡتِ بِقُرۡءَانٍ غَیۡرِ هَـٰذَاۤ} (Yunus: 15); {أَنِ ٱئۡتِ ٱلۡقَوۡمَ ٱلظَّـٰلِمِینَ} (Asy-Syu'ara': 10)", "[[إِيتِ]]"],
      ["{ٱئۡتُونِی بِكُلِّ سَـٰحِرٍ عَلِیمࣲ} (Yunus); {ٱئۡتُونِی بِهِۦۖ} (Yusuf, dua tempat); {ٱئۡتُونِی بِكِتَـٰبࣲ} (Al-Ahqaf)", "[[إِيتُونِي]]"],
      ["{ثُمَّ ٱئۡتُوا۟ صَفࣰّاۚ} (Thaha); {ٱئۡتُوا۟ بِـَٔابَاۤىِٕنَاۤ} (Al-Jatsiyah)", "[[إِيتُوا]]"],
      ["{ٱئۡتِیَا طَوۡعًا أَوۡ كَرۡهࣰا} (Fushshilat)", "[[إِيتِيَا]]"] ] },
    { t: "catatan", gaya: "faidah", id: "Saat **bersambung**: {یَـٰصَـٰلِحُ ٱئۡتِنَا} dilafazkan *ya shalihu'tina* (ha' dhammah lalu hamzah sukun), dan {أَوِ ٱئۡتِنَا} dilafazkan *awi'tina* (waw berkasrah lalu hamzah sukun). Hamzah washl gugur, hamzah qath' di belakangnya tetap.", ar: "في حالة وصل الأفعال السابقة بما قبلها تسقط همزة الوصل المتقدمة وتثبت همزة القطع التي تليها ساكنة، فلو قلنا {یَـٰصَـٰلِحُ ٱئۡتِنَا} يلفظ بحاء مضمومة بعدها همزة ساكنة، وفي {أَوِ ٱئۡتِنَا} بواو مكسورة بعدها همزة." },

    { t: "judul", id: "Hamzah Istifham yang Masuk pada Hamzah Washl", ar: "دخول همزة الاستفهام على همزة الوصل" },
    { t: "banding", judul: { id: "Dua keadaan, dua hukum", ar: "الفعل والاسم" },
      kiri: { judul: { id: "Masuk pada fi'il berhamzah washl", ar: "على الفعل" }, ikon: "scroll", warna: "green", poin: [
        { id: "Hamzah washl **gugur** (tulisan dan lafaz); yang tinggal hamzah istifham yang selalu **berfathah**.", ar: "تسقط همزة الوصل خطًّا ولفظًا وتبقى همزة الاستفهام مفتوحة." },
        { id: "Sebabnya: hamzah istifham menggantikan hamzah washl dalam melafazkan sukun di awal; tidak terjadi kerancuan antara istifham dan khabar.", ar: "سدت همزة الاستفهام مسدها في النطق بالساكن ولا يلتبس الاستفهام بالخبر." } ] },
      kanan: { judul: { id: "Masuk pada isim ber-*al*", ar: "على الاسم المحلّى بأل" }, ikon: "shield", warna: "amber", poin: [
        { id: "Hamzah washl **tidak boleh dibuang** agar istifham tidak tertukar dengan khabar, tetapi **diubah**.", ar: "لا يجوز حذف همزة الوصل لئلا يلتبس الاستفهام بالخبر بل تبقى مع تغييرها." },
        { id: "Dua cara: **ibdal** — diganti alif dengan mad panjang (mad lazim kilmi mutsaqqal, **6 harakat**, disebut juga mad al-farq); atau **tashil** — antara alif dan hamzah, **tanpa mad**.", ar: "إما إبدالها ألفًا مع المد الطويل لملاقاتها ساكنًا أصليًّا، مد لازم كلمي مثقل ويسمى مد الفرق، وإما تسهيلها بين الألف والهمزة مع القصر." } ] } },
    { t: "tabel", judul: { id: "Tujuh fi'il yang dimasuki hamzah istifham", ar: "الأفعال السبعة بعد الاستفهام" }, kolom: [{ id: "Ayat", ar: "الآية" }, { id: "Dibaca", ar: "النطق" }], baris: [
      ["{قُلۡ أَتَّخَذۡتُمۡ عِندَ ٱللَّهِ عَهۡدࣰا} (Al-Baqarah)", "[[أَتَّخَذْتُمْ]]"],
      ["{أَطَّلَعَ ٱلۡغَیۡبَ} (Maryam)", "[[أَطَّلَعَ]]"],
      ["{أَفۡتَرَىٰ عَلَى ٱللَّهِ كَذِبًا} (Saba')", "[[أَفْتَرَى]]"],
      ["{أَصۡطَفَى ٱلۡبَنَاتِ عَلَى ٱلۡبَنِینَ} (Ash-Shaffat)", "[[أَصْطَفَى]]"],
      ["{أَتَّخَذۡنَـٰهُمۡ سِخۡرِیًّا} (Shad)", "[[أَتَّخَذْنَاهُمْ]]"],
      ["{أَسۡتَكۡبَرۡتَ أَمۡ كُنتَ مِنَ ٱلۡعَالِینَ} (Shad)", "[[أَسْتَكْبَرْتَ]]"],
      ["{سَوَاۤءٌ عَلَیۡهِمۡ أَسۡتَغۡفَرۡتَ لَهُمۡ} (Al-Munafiqun)", "[[أَسْتَغْفَرْتَ]]"] ] },
    { t: "p", id: "Asal fi'il-fi'il ini (sebelum istifham) adalah *ittakhadztum*, *ithtala'a*, *iftara*, *ishthafa*, *ittakhadznahum*, *istakbarta*, *istaghfarta* — yakni berhamzah washl berkasrah saat memulai. Ketika hamzah istifham masuk, ia menggantikan tempat hamzah washl, maka hamzah washl dibuang. Bila ditambahkan waw di depannya, pembuangan itu sah pada semuanya.", ar: "وأصل هذه الأفعال قبل دخول همزة الاستفهام عليها على الترتيب: اتخذتم، اطلع، افترى، اصطفى، اتخذناهم، استكبرت، استغفرت، أي أنها مبدوءة بهمزة وصل مكسورة ابتداءً، فلما دخلت عليها همزة الاستفهام سدت مسدها في النطق بالساكن فحذفت همزة الوصل، كما لا يترتب على حذفها التباس الاستفهام بالخبر، كما أنه إذا أدخلنا عليها الواو صح إسقاط الهمزة في الجميع." },
    { t: "tabel", judul: { id: "Tiga kata isim (masing-masing dua kali)", ar: "الكلمات الثلاث" }, kolom: [{ id: "Kata", ar: "الكلمة" }, { id: "Ayat", ar: "الآية" }, { id: "Ibdal / tashil", ar: "الإبدال والتسهيل" }], baris: [
      [{ id: "[[ءَآلذَّكَرَيْنِ]]", ar: "ءآلذكرين" }, "{قُلۡ ءَاۤلذَّكَرَیۡنِ حَرَّمَ أَمِ ٱلۡأُنثَیَیۡنِ} (Al-An'am, dua tempat)", "Ibdal: alif dipanjangkan 6 harakat; atau tashil tanpa mad"],
      [{ id: "[[ءَآلْآنَ]]", ar: "ءآلآن" }, "{ءَاۤلۡـَٔـٰنَ وَقَدۡ كُنتُم بِهِۦ تَسۡتَعۡجِلُونَ} dan {ءَاۤلۡـَٔـٰنَ وَقَدۡ عَصَیۡتَ قَبۡلُ} (Yunus)", "Ibdal (6 harakat) atau tashil"],
      [{ id: "[[ءَآللهُ]]", ar: "ءآلله" }, "{قُلۡ ءَاۤللَّهُ أَذِنَ لَكُمۡۖ}; {ءَاۤللَّهُ خَیۡرٌ أَمَّا یُشۡرِكُونَ} (An-Naml)", "Ibdal (6 harakat) atau tashil"] ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Dua wajah sah, ibdal lebih didahulukan", ar: "الوجهان" }, id: "Kedua wajah — ibdal dan tashil — sah dan **dibaca (maqru')**, sedangkan **ibdal lebih didahulukan dalam ada'** (pelafalan). Contoh pada Al-An'am: *qul **aaaa**dzakarain* (ibdal, 6 harakat) atau *qul a-dzakarain* dengan tashil.", ar: "والوجهان صحيحان مقروء بهما، ووجه الإبدال هو المقدم في الأداء." },
    { t: "cek", q: { id: "Ketika hamzah istifham masuk pada {ٱلذَّكَرَیۡنِ}, hamzah washl pada *al* harus…", ar: "إذا دخلت همزة الاستفهام على {ٱلذَّكَرَیۡنِ} فهمزة الوصل…" }, o: [{ id: "Dibuang", ar: "تحذف" }, { id: "Diubah menjadi alif panjang (6 harakat) atau ditashil", ar: "تبدل ألفًا مشبعة أو تسهّل" }, { id: "Dibaca kasrah", ar: "تكسر" }, { id: "Dibaca dhammah", ar: "تضم" }], j: 1, b: { id: "Pada isim ber-*al* hamzah washl tidak boleh dibuang agar tidak rancu dengan khabar; ia diubah (ibdal) atau ditashil.", ar: "لا تحذف في الاسم لئلا يلتبس بالخبر بل تبدل أو تسهل." } },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kesimpulan dan pengecualian", ar: "الخلاصة" }, id: "**Kesimpulan:** hamzah qath' istifham yang masuk pada hamzah washl pada isim ber-*al* → hamzah washl **diubah menjadi alif dengan mad 6 harakat atau ditashil**; pada **fi'il** → hamzah washl **dibuang**. Adapun hamzah yang selalu **ditahqiq** setelah hamzah istifham adalah seperti {أَأَنذَرۡتَهُمۡ} — kecuali adanya tashil pada sebagian qari. Dan pada {أَأَعۡجَمِیٌّ}, hamzah kedua **ditashil oleh Imam Hafsh**.", ar: "الخلاصة أن همزة القطع الاستفهامية إذا دخلت على همزة الوصل في الاسم المحلى بـ«أل» أبدلت ألفًا تمد مدًّا مشبعًا أو سهلت، أما إذا دخلت على همزة وصل في أول الفعل فتحذف همزة الوصل، وأما الهمزة التي تحقق دائمًا حيث وقعت بعد همزة الاستفهام فنحو «أأنذرتهم» إلا ما فيها من التسهيل لبعض القراء، كما أن كلمة «أأعجمي» تسهل همزتها الثانية للإمام حفص." },

    { t: "tanya", q: { id: "Mengapa hamzah washl disebut *sullam al-lisan*?", ar: "لماذا سميت همزة الوصل «سلّم اللسان»؟" }, a: { id: "Karena tidak boleh berhenti pada huruf berharakat dan tidak boleh memulai dengan huruf sukun, sehingga dibutuhkan sesuatu yang mengantar lidah untuk melafazkan huruf sukun — itulah hamzah washl (kata Al-Khalil bin Ahmad).", ar: "لأنه لا يوقف بمتحرك ولا يبتدأ بساكن، فكان لا بد من الإتيان بشيء نتمكن به من النطق بالساكن." } },
    { t: "tanya", q: { id: "Mengapa {ٱمۡشُوا۟} dan {ٱئۡتُوا۟} dimulai dengan kasrah padahal huruf ketiganya dhammah?", ar: "لماذا يبدأ بكسر الهمزة في {ٱمۡشُوا۟} {ٱئۡتُوا۟} مع أن ثالثها مضموم؟" }, a: { id: "Karena dhammahnya hanya 'aridhah (pindahan dari ya' yang digugurkan). Asalnya berkasrah, terbukti pada bentuk *imsyi*, *i'ti*, *ibni*, *iqdhi* dan bentuk dual-nya; maka memulai dengan kasrah mengikuti asal.", ar: "لأن الضمة عارضة، والأصل الكسر بدليل «إمشِ، إيتِ، إبنِ، إقضِ» وتثنيتها." } },
    { t: "balik", judul: { id: "Kartu kilat", ar: "بطاقات مراجعة" }, item: [
      { depan: { id: "Hamzah washl pada huruf hanya masuk pada…", ar: "همزة الوصل في الحروف تدخل على…" }, belakang: { id: "Lam ta'rif; dimulai dengan fathah", ar: "لام التعريف، ويبدأ بها مفتوحة" } },
      { depan: { id: "Memulai {ٱبۡنِ}, {ٱمۡرَأَة}, {ٱثۡنَیۡنِ} dengan…", ar: "الابتداء بـ ابن، امرأة، اثنين" }, belakang: { id: "Kasrah (isim sima'i)", ar: "الكسر (أسماء سماعية)" } },
      { depan: { id: "Memulai {ٱدۡخُلِ}", ar: "الابتداء بـ {ٱدۡخُلِ}" }, belakang: { id: "Dhammah (huruf ketiga dhammah asli)", ar: "الضم؛ ثالثه مضموم أصلًا" } },
      { depan: { id: "Memulai {ٱئۡتُونِی}", ar: "الابتداء بـ {ٱئۡتُونِی}" }, belakang: { id: "*Itûni* — kasrah, hamzah sukun jadi ya' madd", ar: "إيتوني: كسر وتبدل الهمزة ياءً مدية" } },
      { depan: { id: "Memulai {ٱؤۡتُمِنَ}", ar: "الابتداء بـ {ٱؤۡتُمِنَ}" }, belakang: { id: "*Utumina* — dhammah, hamzah sukun jadi waw madd", ar: "أوتمن: ضم وتبدل الهمزة واوًا مدية" } },
      { depan: { id: "Hamzah istifham + fi'il berhamzah washl", ar: "همزة الاستفهام + فعل بهمزة وصل" }, belakang: { id: "Hamzah washl dibuang", ar: "تسقط همزة الوصل" } } ] },
    { t: "ringkasan", item: [
      { id: "Hamzat al-washl: hamzah tambahan di awal kata; tetap saat memulai, gugur saat bersambung; tandanya kepala shad kecil.", ar: "همزة الوصل: زائدة في أول الكلمة، تثبت ابتداءً وتسقط درجًا، وعلامتها رأس صاد." },
      { id: "Enam syarat: ditulis alif, makhraj hamzah, harakat 'aridhah, gugur saat wasl, di awal kata, huruf sesudahnya sukun asli.", ar: "ست شروط: صورة الألف، مخرج الهمزة، حركة عارضة، تسقط في الدرج، في أول الكلمة، بعدها ساكن محقق." },
      { id: "Pada isim: qiyasi (mashdar madhi khumasi & sudasi — kasrah) dan sima'i (sepuluh isim, tujuh di Al-Qur'an — kasrah). Isim lain: qath'.", ar: "في الأسماء: قياسية (مصدر الخماسي والسداسي) وسماعية عشرة منها سبعة في القرآن؛ وبقية الأسماء همزتها قطع." },
      { id: "Pada fi'il: dhammah (2 keadaan) atau kasrah (3 keadaan); mudhari', madhi tsulatsi/ruba'i, dan amr ruba' i = qath'.", ar: "في الأفعال: الضم في حالتين، والكسر في ثلاث حالات؛ والمضارع والثلاثي والرباعي همزتها قطع." },
      { id: "Pada huruf: hanya lam ta'rif, dimulai fathah. {ٱلۡأَیۡكَةِ} di empat tempat punya hukum khusus.", ar: "في الحروف: لام التعريف فقط، ويبدأ بالفتح؛ و{الأيكة} أربعة مواضع." },
      { id: "Washl + qath' sukun (tujuh fi'il): saat memulai hamzah qath' diganti huruf madd sejenis harakat hamzah washl.", ar: "اجتماع الوصل والقطع الساكنة: تبدل القطع حرف مد من جنس حركة همزة الوصل ابتداءً." },
      { id: "Istifham + washl: fi'il → washl dibuang; isim ber-*al* → ibdal (6 harakat) atau tashil, ibdal lebih didahulukan.", ar: "الاستفهام مع الوصل: في الفعل تحذف، وفي الاسم تبدل أو تسهل." } ] }
  ],
  istilah: [
    { ar: "همزة الوصل", latin: "hamzat al-washl", id: "Hamzah penyambung", def: { id: "Hamzah tambahan di awal kata, tetap saat memulai dan gugur saat bersambung.", ar: "الهمزة الزائدة في أول الكلمة تثبت ابتداءً وتسقط درجًا." } },
    { ar: "همزة القطع", latin: "hamzat al-qath'", id: "Hamzah pemutus", def: { id: "Hamzah yang tetap dilafazkan dan ditulis, saat memulai, bersambung, dan berhenti.", ar: "التي تثبت لفظًا ورسمًا ابتداءً ووصلًا ووقفًا." } },
    { ar: "الدرج", latin: "ad-darj", id: "Bersambung (idraj)", def: { id: "Membaca bersambung tanpa berhenti; hamzah washl gugur di sini.", ar: "الوصل في القراءة وفيه تسقط همزة الوصل." } },
    { ar: "سلّم اللسان", latin: "sullam al-lisan", id: "Tangga lidah", def: { id: "Sebutan Al-Khalil untuk hamzah washl karena menolong melafazkan huruf sukun.", ar: "تسمية الخليل لهمزة الوصل لأنها توصل إلى النطق بالساكن." } },
    { ar: "قياسية", latin: "qiyasiyyah", id: "Qiyasi", def: { id: "Hamzah washl yang punya kaidah sharaf dan banyak contohnya.", ar: "لها قاعدة صرفية يقاس عليها." } },
    { ar: "سماعية", latin: "sima'iyyah", id: "Sima'i", def: { id: "Hamzah washl yang hanya didengar dari orang Arab tanpa kaidah.", ar: "سمعت هكذا من العرب وليس لها قاعدة." } },
    { ar: "حركة عارضة", latin: "harakah 'aridhah", id: "Harakat sementara", def: { id: "Harakat yang hanya didatangkan di awal bacaan, bukan harakat asli kata.", ar: "حركة لفظية تأتي عند الابتداء ولا أصل لها." } },
    { ar: "مد الفرق", latin: "madd al-farq", id: "Mad pembeda", def: { id: "Mad lazim kilmi mutsaqqal 6 harakat pada hamzah istifham + al, membedakan istifham dari khabar.", ar: "مد لازم كلمي مثقل يفرق بين الاستفهام والخبر." } },
    { ar: "التسهيل", latin: "at-tashil", id: "Tashil (meringankan hamzah)", def: { id: "Melafazkan hamzah antara hamzah dan alif, tanpa mad.", ar: "النطق بالهمزة بين الهمزة والألف مع القصر." } },
    { ar: "لام التعريف", latin: "lam at-ta'rif", id: "Lam ta'rif (*al*)", def: { id: "Satu-satunya huruf yang dimasuki hamzah washl; dimulai fathah.", ar: "الحرف الوحيد الذي تدخله همزة الوصل ويبدأ بها مفتوحة." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Hamzah yang tetap dilafazkan saat memulai namun gugur saat bersambung disebut…", ar: "الهمزة التي تثبت ابتداءً وتسقط درجًا تسمى…" }, o: [{ id: "Hamzat al-qath'", ar: "همزة القطع" }, { id: "Hamzat al-washl", ar: "همزة الوصل" }, { id: "Hamzat istifham", ar: "همزة الاستفهام" }, { id: "Hamzat nida'", ar: "همزة النداء" }], j: 1, b: { id: "Itulah definisi hamzat al-washl.", ar: "هذا تعريف همزة الوصل." } },
      { q: { id: "Tanda hamzat al-washl di mushaf adalah…", ar: "علامة همزة الوصل في المصحف…" }, o: [{ id: "Kepala 'ain kecil", ar: "رأس عين" }, { id: "Kepala shad kecil di atas alif", ar: "رأس صاد صغيرة على الألف" }, { id: "Titik di bawah alif", ar: "نقطة تحت الألف" }, { id: "Tanda sukun", ar: "علامة السكون" }], j: 1, b: { id: "Kepala shad diambil dari kata washl.", ar: "مأخوذة من كلمة وصل." } },
      { q: { id: "Hamzah washl pada huruf hanya masuk pada…", ar: "تدخل همزة الوصل من الحروف على…" }, o: [{ id: "Lam ta'rif", ar: "لام التعريف" }, { id: "Wawu 'athaf", ar: "واو العطف" }, { id: "Ba' jar", ar: "باء الجر" }, { id: "Fa'", ar: "الفاء" }], j: 0, b: { id: "Hanya lam ta'rif; harakat awalnya fathah.", ar: "لام التعريف فقط ويبدأ بها مفتوحة." } },
      { q: { id: "Hamzah pada {ٱفۡتِرَاۤءً} saat memulai dibaca…", ar: "همزة {ٱفۡتِرَاۤءً} عند الابتداء…" }, o: [{ id: "Dhammah", ar: "مضمومة" }, { id: "Fathah", ar: "مفتوحة" }, { id: "Qath' dengan fathah", ar: "قطع مفتوحة" }, { id: "Kasrah", ar: "مكسورة" }], j: 3, b: { id: "Mashdar fi'il madhi khumasi: kasrah.", ar: "مصدر الماضي الخماسي يبدأ بالكسر." } },
      { q: { id: "Hamzah pada {ٱكۡتُبۡ} dimulai dengan…", ar: "الابتداء بـ {ٱكۡتُبۡ}…" }, o: [{ id: "Kasrah", ar: "كسر" }, { id: "Fathah", ar: "فتح" }, { id: "Dhammah", ar: "ضم" }, { id: "Sukun", ar: "سكون" }], j: 2, b: { id: "Huruf ketiga (ta') berdhammah asli.", ar: "ثالث الفعل مضموم أصلًا." } },
      { q: { id: "Hamzah pada {ٱسۡتَجِیبُوا۟} dimulai dengan kasrah karena…", ar: "يبدأ بكسر الهمزة في {ٱسۡتَجِیبُوا۟} لأنه…" }, o: [{ id: "Mudhari'", ar: "مضارع" }, { id: "Madhi ruba'i", ar: "ماضٍ رباعي" }, { id: "Amr sudasi (huruf ketiga fathah)", ar: "أمر سداسي ثالثه مفتوح" }, { id: "Isim sima'i", ar: "اسم سماعي" }], j: 2, b: { id: "Amr yang huruf ketiganya fathah/kasrah dan amr sudasi dimulai dengan kasrah.", ar: "الأمر ثالثه مفتوح أو مكسور." } },
      { q: { id: "Berapa isim sima'i yang ada di Al-Qur'an?", ar: "كم الأسماء السماعية الواردة في القرآن؟" }, o: [{ id: "Tiga", ar: "ثلاثة" }, { id: "Lima", ar: "خمسة" }, { id: "Tujuh", ar: "سبعة" }, { id: "Sepuluh", ar: "عشرة" }], j: 2, b: { id: "Sepuluh isim sima'i: tujuh ada di Al-Qur'an dan tiga dari kalam Arab.", ar: "عشرة أسماء ورد منها سبعة في القرآن." } },
      { q: { id: "Manakah yang hamzahnya QATH'?", ar: "أي الكلمات همزتها قطع؟" }, o: [{ id: "{ٱبۡنِ}", ar: "{ٱبۡنِ}" }, { id: "{ٱسۡمُ}", ar: "{ٱسۡمُ}" }, { id: "{أَخۡرِجۡنِی}", ar: "{أَخۡرِجۡنِی}" }, { id: "{ٱمۡرَأَةٌ}", ar: "{ٱمۡرَأَةٌ}" }], j: 2, b: { id: "Amr ruba'i: hamzahnya qath'.", ar: "الأمر الرباعي همزته قطع." } },
      { q: { id: "Memulai {ٱئۡتُونِی} dibaca…", ar: "الابتداء بـ {ٱئۡتُونِی}…" }, o: [{ id: "*Utûni*", ar: "أُوتوني" }, { id: "*Itûni*", ar: "إيتوني" }, { id: "*A'tuni*", ar: "أْتوني" }, { id: "*Atuni*", ar: "أَتوني" }], j: 1, b: { id: "Dimulai kasrah dan hamzah sukun diganti ya' madd.", ar: "كسر الهمزة وإبدال الهمزة الساكنة ياءً مدية." } },
      { q: { id: "Memulai {ٱؤۡتُمِنَ} (Al-Baqarah: 283) dibaca…", ar: "الابتداء بـ {ٱؤۡتُمِنَ}…" }, o: [{ id: "*Utumina*", ar: "أُوتُمِنَ" }, { id: "*Itumina*", ar: "إيتُمِنَ" }, { id: "*Atumina*", ar: "أَتُمِنَ" }, { id: "*Awtumina* kasrah", ar: "إِؤتُمِنَ" }], j: 0, b: { id: "Dhammah dan waw madd.", ar: "همزة مضمومة وبعدها واو مدية." } },
      { q: { id: "Jika hamzah istifham masuk pada fi'il {ٱتَّخَذۡتُمۡ}, hasilnya…", ar: "إذا دخلت همزة الاستفهام على الفعل {ٱتَّخَذۡتُمۡ}…" }, o: [{ id: "Hamzah washl dibuang → {أَتَّخَذۡتُمۡ}", ar: "تسقط همزة الوصل فيصير {أَتَّخَذۡتُمۡ}" }, { id: "Hamzah washl dibaca mad 6", ar: "تمد ست حركات" }, { id: "Ditashil", ar: "تسهل" }, { id: "Tetap dua hamzah", ar: "تبقى همزتان" }], j: 0, b: { id: "Pada fi'il, hamzah washl dibuang.", ar: "في الفعل تحذف همزة الوصل." } },
      { q: { id: "{ءَاۤللَّهُ} bisa dibaca dengan dua wajah, yaitu…", ar: "{ءَاۤللَّهُ} فيه وجهان هما…" }, o: [{ id: "Ibdal 6 harakat atau tashil", ar: "إبدال ست حركات أو تسهيل" }, { id: "Ghunnah atau idgham", ar: "غنة أو إدغام" }, { id: "Qashr atau tawassuth", ar: "قصر أو توسط" }, { id: "Ikhfa' atau iqlab", ar: "إخفاء أو قلب" }], j: 0, b: { id: "Ibdal (mad lazim kilmi mutsaqqal) atau tashil; ibdal lebih didahulukan.", ar: "الإبدال هو المقدم، والتسهيل جائز." } }
    ],
    bs: [
      { t: { id: "Hamzat al-washl hanya terdapat di awal kata.", ar: "همزة الوصل لا تكون إلا في أول الكلمة." }, j: true },
      { t: { id: "Hamzat al-qath' gugur ketika bersambung.", ar: "همزة القطع تسقط في الدرج." }, j: false, b: { id: "Itu sifat hamzah washl; hamzah qath' tetap pada ibtida', wasl, dan waqf.", ar: "تثبت ابتداءً ووصلًا ووقفًا." } },
      { t: { id: "Al-Khalil bin Ahmad menyebut hamzah washl dengan *sullam al-lisan*.", ar: "سماها الخليل «سلّم اللسان»." }, j: true },
      { t: { id: "Mashdar fi'il madhi khumasi dimulai dengan dhammah.", ar: "مصدر الماضي الخماسي يبدأ بالضم." }, j: false, b: { id: "Dimulai dengan kasrah, misalnya {ٱبۡتِغَاۤءَ}.", ar: "يبدأ بالكسر." } },
      { t: { id: "Mashdar fi'il ruba'i seperti *ikhraj* dan *ishlah* hamzahnya qath'.", ar: "همزة مصدر الرباعي «إخراج، إصلاح» همزة قطع." }, j: true },
      { t: { id: "Semua isim sima'i dimulai dengan kasrah.", ar: "كل الأسماء السماعية يبدأ بها مكسورة." }, j: true },
      { t: { id: "Hamzah pada fi'il mudhari' bisa berupa hamzah washl.", ar: "همزة المضارع قد تكون همزة وصل." }, j: false, b: { id: "Fi'il mudhari' hamzahnya hanya qath', misalnya {أَسۡمَعُ}.", ar: "همزة المضارع لا تكون إلا قطعًا." } },
      { t: { id: "Hamzah washl pada lam ta'rif dimulai dengan fathah.", ar: "همزة الوصل في لام التعريف يبدأ بها مفتوحة." }, j: true },
      { t: { id: "Pada isim ber-*al*, hamzah washl dibuang ketika dimasuki hamzah istifham.", ar: "في الاسم المحلى بأل تحذف همزة الوصل عند دخول الاستفهام." }, j: false, b: { id: "Tidak boleh dibuang agar tidak rancu dengan khabar; diubah menjadi alif panjang atau ditashil.", ar: "تبدل أو تسهل." } },
      { t: { id: "Hamzah istifham pada {أَسۡتَغۡفَرۡتَ} menggantikan hamzah washl yang dibuang.", ar: "همزة الاستفهام في {أَسۡتَغۡفَرۡتَ} سدت مسد همزة الوصل المحذوفة." }, j: true }
    ],
    jodoh: [
      { a: { id: "Kepala shad kecil", ar: "رأس صاد صغيرة" }, b: { id: "Tanda hamzat al-washl", ar: "علامة همزة الوصل" } },
      { a: { id: "{ٱدۡخُلِ}", ar: "{ٱدۡخُلِ}" }, b: { id: "Dimulai dhammah", ar: "يبدأ بالضم" } },
      { a: { id: "{ٱعۡتَدَىٰ}", ar: "{ٱعۡتَدَىٰ}" }, b: { id: "Madhi khumasi — kasrah", ar: "ماضٍ خماسي: كسر" } },
      { a: { id: "{ٱمۡشُوا۟}", ar: "{ٱمۡشُوا۟}" }, b: { id: "Dhammah 'aridhah — dimulai kasrah", ar: "ضمة عارضة: يبدأ بالكسر" } },
      { a: { id: "{أَدۡخِلۡنِی}", ar: "{أَدۡخِلۡنِی}" }, b: { id: "Amr ruba'i — hamzah qath'", ar: "أمر رباعي: همزة قطع" } },
      { a: { id: "{ٱبۡنَت}", ar: "{ٱبۡنَت}" }, b: { id: "Isim sima'i", ar: "اسم سماعي" } },
      { a: { id: "{ٱئۡتِنَا}", ar: "{ٱئۡتِنَا}" }, b: { id: "*Itina* — kasrah + ya' madd", ar: "إيتنا" } },
      { a: { id: "{ءَاۤلۡـَٔـٰنَ}", ar: "{ءَاۤلۡـَٔـٰنَ}" }, b: { id: "Ibdal 6 harakat atau tashil", ar: "إبدال أو تسهيل" } }
    ],
    isian: [
      { t: { id: "Hamzat al-washl dinamai demikian karena kata sesudahnya ______ dengan kata sebelumnya ketika disambung.", ar: "سميت همزة الوصل لأن ما بعدها ______ بما قبلها في الوصل." }, j: { id: "tersambung", ar: "يتصل" }, x: [{ id: "terputus", ar: "ينقطع" }, { id: "berhenti", ar: "يقف" }, { id: "terbalik", ar: "ينعكس" }] },
      { t: { id: "Ada ______ isim sima'i, tujuh di antaranya ada di Al-Qur'an.", ar: "الأسماء السماعية ______ أسماء منها سبعة في القرآن." }, j: { id: "sepuluh", ar: "عشرة" }, x: [{ id: "lima", ar: "خمسة" }, { id: "dua belas", ar: "اثنا عشر" }, { id: "tiga", ar: "ثلاثة" }] },
      { t: { id: "Memulai fi'il {ٱبۡنُوا۟} dibaca dengan hamzah ______.", ar: "الابتداء بـ {ٱبۡنُوا۟} بهمزة ______." }, j: { id: "berkasrah", ar: "مكسورة" }, x: [{ id: "berdhammah", ar: "مضمومة" }, { id: "berfathah", ar: "مفتوحة" }, { id: "sukun", ar: "ساكنة" }] },
      { t: { id: "Hamzah istifham masuk pada fi'il {ٱسۡتَكۡبَرۡتَ}, maka hamzah ______ dibuang.", ar: "إذا دخلت همزة الاستفهام على {ٱسۡتَكۡبَرۡتَ} حذفت همزة ______." }, j: { id: "washl", ar: "الوصل" }, x: [{ id: "qath'", ar: "القطع" }, { id: "istifham", ar: "الاستفهام" }, { id: "nida'", ar: "النداء" }] },
      { t: { id: "Mad pada {ءَاۤلذَّكَرَیۡنِ} dengan ibdal adalah mad lazim kilmi mutsaqqal sepanjang ______ harakat.", ar: "المد في {ءَاۤلذَّكَرَیۡنِ} بالإبدال لازم كلمي مثقل ______ حركات." }, j: { id: "enam", ar: "ست" }, x: [{ id: "dua", ar: "اثنتان" }, { id: "empat", ar: "أربع" }, { id: "lima", ar: "خمس" }] }
    ],
    pilah: { t: { id: "Pilah: kata berikut dimulai dengan KASRAH, DHAMMAH, atau berhamzah QATH'?", ar: "صنّف الكلمات: ابتداء بكسر أو ضم أو همزة قطع." },
      kategori: [{ id: "Dimulai kasrah", ar: "يبدأ بالكسر" }, { id: "Dimulai dhammah", ar: "يبدأ بالضم" }, { id: "Hamzah qath'", ar: "همزة قطع" }],
      item: [
        { t: { id: "{ٱسۡتِغۡفَارُ}", ar: "{ٱسۡتِغۡفَارُ}" }, k: 0 },
        { t: { id: "{ٱنظُرۡ}", ar: "{ٱنظُرۡ}" }, k: 1 },
        { t: { id: "{ٱبۡتُلِیَ}", ar: "{ٱبۡتُلِیَ}" }, k: 1 },
        { t: { id: "{ٱقۡتَرَبَ}", ar: "{ٱقۡتَرَبَ}" }, k: 0 },
        { t: { id: "{أَسۡمَعُ}", ar: "{أَسۡمَعُ}" }, k: 2 },
        { t: { id: "{ٱمۡشُوا۟}", ar: "{ٱمۡشُوا۟}" }, k: 0 },
        { t: { id: "{فَأَكۡرَمَهُ}", ar: "{فَأَكۡرَمَهُ}" }, k: 2 },
        { t: { id: "{ٱخۡرُجۡ}", ar: "{ٱخۡرُجۡ}" }, k: 1 },
        { t: { id: "{ٱثۡنَیۡنِ}", ar: "{ٱثۡنَیۡنِ}" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرّف همزة الوصل وهمزة القطع، وبيّن الفرق بينهما.", id: "Definisikan hamzat al-washl dan hamzat al-qath', lalu jelaskan perbedaannya." },
      j: { ar: "همزة الوصل: الهمزة الزائدة في أول الكلمة التي تثبت في حال الابتداء وتسقط في الدرج، ولا تأتي إلا في أول الكلمة، وعلامتها رأس صاد صغيرة. وهمزة القطع: التي تثبت لفظًا ورسمًا ابتداءً ووصلًا ووقفًا، وتكون في أول الكلمة ووسطها وآخرها، وعلامتها رأس عين.",
        id: "**Hamzat al-washl**: hamzah tambahan di awal kata yang tetap saat memulai dan gugur saat bersambung; hanya di awal kata; tanda kepala shad kecil. **Hamzat al-qath'**: hamzah yang tetap dilafazkan dan ditulis saat memulai, bersambung, dan berhenti; bisa di awal, tengah, atau akhir kata; tanda kepala 'ain kecil." } },
    { t: { ar: "اذكر شروط همزة الوصل الستة.", id: "Sebutkan enam syarat hamzat al-washl." },
      j: { ar: "١- تثبت في الخط على صورة الألف. ٢- تخرج ابتداءً من مخرج الهمزة. ٣- تتحرك بحركة لفظية عارضة. ٤- تسقط في درج الكلام. ٥- تتصدر الكلمة فتكون في أولها فقط. ٦- الحرف الذي بعدها ساكن محقق.",
        id: "(1) ditulis berbentuk alif; (2) keluar dari makhraj hamzah saat memulai; (3) berharakat lafzhiyyah 'aridhah; (4) gugur saat bersambung; (5) hanya di awal kata; (6) huruf sesudahnya sukun muhaqqaq." } },
    { t: { ar: "بيّن كيف يُبدأ بهمزة الوصل في الأفعال، مع التمثيل.", id: "Jelaskan cara memulai hamzah washl pada fi'il, dengan contoh." },
      j: { ar: "يبدأ بالضم في حالتين: أمر الثلاثي ثالثه مضموم ضمًّا أصليًّا مثل {ٱدۡعُ} {ٱكۡتُبۡ}، والماضي الخماسي والسداسي المبني للمجهول مثل {ٱبۡتُلِیَ} {ٱسۡتُحۡفِظُوا۟}. ويبدأ بالكسر في ثلاث حالات: الأمر ثالثه مفتوح أو مكسور وأمر السداسي مثل {ٱعۡلَمُوۤا۟} {ٱسۡتَغۡفِرۡ}، والماضي الخماسي والسداسي مثل {ٱقۡتَرَبَ} {ٱسۡتَكۡبَرَ}، والأمر ثالثه مضموم ضمة عارضة مثل {ٱمۡشُوا۟} {ٱقۡضُوۤا۟} {ٱبۡنُوا۟} {ٱئۡتُوا۟}.",
        id: "**Dhammah** pada dua keadaan: amr tsulatsi yang huruf ketiganya dhammah asli ({ٱدۡعُ}, {ٱكۡتُبۡ}) dan madhi khumasi/sudasi mabni majhul ({ٱبۡتُلِیَ}, {ٱسۡتُحۡفِظُوا۟}). **Kasrah** pada tiga keadaan: amr dengan huruf ketiga fathah/kasrah dan amr sudasi ({ٱعۡلَمُوۤا۟}, {ٱسۡتَغۡفِرۡ}); madhi khumasi/sudasi ({ٱقۡتَرَبَ}, {ٱسۡتَكۡبَرَ}); dan amr dengan dhammah 'aridhah ({ٱمۡشُوا۟}, {ٱقۡضُوۤا۟}, {ٱبۡنُوا۟}, {ٱئۡتُوا۟})." } },
    { t: { ar: "كيف يبدأ القارئ بـ {ٱئۡتُونِی} و{ٱؤۡتُمِنَ}؟ ولماذا؟", id: "Bagaimana memulai {ٱئۡتُونِی} dan {ٱؤۡتُمِنَ}? Mengapa?" },
      j: { ar: "يبدأ بـ {ٱئۡتُونِی} «إيتوني» بكسر همزة الوصل وإبدال الهمزة الساكنة ياءً مدية؛ لأن الأصل الكسر والضم عارض. ويبدأ بـ {ٱؤۡتُمِنَ} «أُوتُمِنَ» بضم همزة الوصل وإبدال الهمزة الساكنة واوًا مدية مجانسة لحركة ما قبلها.",
        id: "{ٱئۡتُونِی}: *itûni* — hamzah washl dikasrah dan hamzah sukun diganti ya' madd, karena asalnya kasrah dan dhammahnya 'aridh. {ٱؤۡتُمِنَ}: *utumina* — hamzah washl didhammah dan hamzah sukun diganti waw madd, sejenis harakat sebelumnya." } },
    { t: { ar: "ما حكم دخول همزة الاستفهام على همزة الوصل في الفعل والاسم؟", id: "Apa hukum masuknya hamzah istifham pada hamzah washl pada fi'il dan isim?" },
      j: { ar: "في الفعل: تحذف همزة الوصل ولا يلتبس الاستفهام بالخبر نحو {أَسۡتَكۡبَرۡتَ} {أَصۡطَفَى}. وفي الاسم المحلى بـ«أل»: لا تحذف لئلا يلتبس الاستفهام بالخبر، بل تبدل ألفًا مع المد اللازم الكلمي المثقل ست حركات ويسمى مد الفرق، أو تسهل بين الألف والهمزة مع القصر، والإبدال هو المقدم، نحو {ءَاۤلذَّكَرَیۡنِ} {ءَاۤلۡـَٔـٰنَ} {ءَاۤللَّهُ}.",
        id: "**Pada fi'il**: hamzah washl dibuang (tidak rancu dengan khabar), contoh {أَسۡتَكۡبَرۡتَ}, {أَصۡطَفَى}. **Pada isim ber-*al***: tidak boleh dibuang agar tidak rancu; diubah menjadi alif dengan mad lazim kilmi mutsaqqal 6 harakat (mad al-farq), atau ditashil antara alif dan hamzah tanpa mad; ibdal lebih didahulukan. Contoh {ءَاۤلذَّكَرَیۡنِ}, {ءَاۤلۡـَٔـٰنَ}, {ءَاۤللَّهُ}." } }
  ]
});
