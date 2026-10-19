/* Tajwid — Pertemuan 12: Bab At-Ta'at (huruf ta dalam rasm mushaf) */
Kuliah.pertemuan("tajwid", {
  no: 12, motif: "akar", tema: 2, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/473",
  bab: { id: "Bab at-ta'at (kata yang ditulis dengan ta maftuhah dalam rasm mushaf)", ar: "باب التاءات" },
  judul: { id: "Bab At-Ta'at: Ta Maftuhah dalam Rasm Mushaf", ar: "شرح باب التاءات" },
  ringkas: {
    id: "Kata-kata yang dalam Mushaf Utsmani ditulis dengan ta maftuhah (ت), bukan ta marbuthah/ha (ة): rahmat, ni'mat, la'nat, imra'at, ma'shiyat, syajarat, sunnat, kata yang hanya sekali, kalimat, serta plural dan kata lain; dan kaidah waqaf mengikuti rasm.",
    ar: "الكلمات التي رُسمت في المصحف العثماني بالتاء المفتوحة لا بالتاء المربوطة: رحمت، نعمت، لعنت، امرأت، معصيت، شجرت، سنت، وما جاء في موضع واحد، وكلمت، والجموع وغيرها؛ وقاعدة الوقف تبعًا للرسم."
  },
  tujuan: [
    { id: "Menjelaskan kaidah: yang ditulis dengan ta, waqaf dengan ta; yang ditulis dengan ha, waqaf dengan ha.", ar: "بيان قاعدة الوقف بحسب الرسم." },
    { id: "Menyebut kata-kata yang ditulis ta maftuhah beserta jumlah dan tempatnya (rahmat 7, ni'mat 11, la'nat 2, imra'at 7, ma'shiyat 2, syajarat 1, sunnat 5, kalimat 5).", ar: "ذكر الكلمات المرسومة بالتاء وعدد مواضعها." },
    { id: "Mengenali lima kata yang ta maftuhah-nya hanya satu kali dalam Al-Qur'an.", ar: "معرفة الكلمات الخمس التي جاءت في موضع واحد." },
    { id: "Mengetahui perbedaan qari (Abu 'Amr, Ibnu Katsir, Al-Kisa'i) pada waqaf rahmat.", ar: "معرفة خلاف القراء في الوقف على «رحمت»." },
    { id: "Mengenali plural dan kata lain yang ditulis dengan ta maftuhah.", ar: "معرفة الجموع والكلمات الأخرى المرسومة بالتاء." }
  ],
  isi: [
    { t: "pembuka", id: "Bab ini membahas kata-kata yang dalam **Mushaf Utsmani ada yang ditulis dengan ta maftuhah (ت)** dan ada yang dengan **ta marbuthah/ha (ة)**. Kaidahnya sederhana namun penting untuk waqaf: **apa yang ditulis dengan ta, kita berhenti dengan ta; apa yang ditulis dengan ha, kita berhenti dengan ha.**", ar: "نتكلم في باب التاءات عن الكلمات التي رُسمت في المصحف مرة بالتاء المفتوحة ومرة بالتاء المربوطة أو الهاء، فما رُسم بالتاء يوقف عليه بالتاء، وما رُسم بالهاء يوقف عليه بالهاء." },
    { t: "kutipan", ar: "وَرَحْمَتُ الزُّخْرُفِ بِالتَّا زَبَرَهْ ... الْأَعْرَافِ رُومٍ هُودٍ كَافِ الْبَقَرَهْ", id: "Rahmat Az-Zukhruf dengan ta telah ditulis (dalam mushaf), demikian Al-A'raf, Ar-Rum, Hud, dan kaf (Maryam), serta Al-Baqarah.", oleh: "Ibnul Jazari, bait pembuka Bab At-Ta'at" },
    { t: "kutipan", ar: "نِعْمَتُهَا ثَلَاثُ نَحْلٍ إِبْرَهَمْ ... مَعًا أَخِيرَاتُ عُقُودُ الثَّانِ هَمْ", id: "Ni'mat: tiga di An-Nahl, Ibrahim (dua), dan yang terakhir-terakhir; Al-Ma'idah yang kedua “hum” (yaitu: yang kedua dari Al-Ma'idah).", oleh: "Ibnul Jazari" },
    { t: "definisi", judul: { id: "Makna kata “zabarah” dalam nazham", ar: "معنى «زبره»" },
      lughah: { id: "**Zabarahu** berarti *kataba* (menulis). Maksudnya: apa yang ditulis oleh Sayyidina 'Utsman radhiyallahu 'anhu dan para sahabat ketika menyatukan manusia pada satu mushaf.", ar: "«زبره» أي: كتبه؛ ما كتبه سيدنا عثمان رضي الله عنه والصحابة لما جمع الناس على مصحف واحد." },
      istilah: { id: "Dari akar yang sama lahir kata **az-Zabur**, yakni “yang tertulis” — lembaran-lembaran Nabi Dawud 'alaihissalam.", ar: "ومنه الزبور أي المكتوب، وهو صحف داود عليه السلام." } },
    { t: "ayat", ar: "وَلَقَدْ كَتَبْنَا فِي الزَّبُورِ مِن بَعْدِ الذِّكْرِ أَنَّ الْأَرْضَ يَرِثُهَا عِبَادِيَ الصَّالِحُونَ", id: "Dan sungguh telah Kami tulis dalam Zabur setelah adz-Dzikr bahwa bumi ini diwarisi hamba-hamba-Ku yang saleh.", src: "الأنبياء ١٠٥" },
    { t: "banding", judul: { id: "Kaidah dasar waqaf mengikuti rasm", ar: "قاعدة الوقف حسب الرسم" },
      kiri: { judul: { id: "Ditulis dengan ta (ت)", ar: "ما رُسم بالتاء" }, ikon: "key", warna: "green", poin: [
        { id: "Berhenti dengan **ta** (dibaca *rahmat*, *ni'mat*).", ar: "يوقف عليه بالتاء." },
        { id: "Dalam mushaf tampak “رَحْمَتَ”, bukan “رَحْمَةَ”.", ar: "تُكتب «رحمت» لا «رحمة»." } ] },
      kanan: { judul: { id: "Ditulis dengan ha (ة)", ar: "ما رُسم بالهاء" }, ikon: "leaf", warna: "amber", poin: [
        { id: "Berhenti dengan **ha** (dibaca *rahmah*).", ar: "يوقف عليه بالهاء." },
        { id: "Berlaku sesuai riwayat masing-masing qari.", ar: "وكلٌّ على حسب روايته." } ] } },
    { t: "cek", q: { id: "Kata yang ditulis dalam mushaf dengan ta maftuhah, ketika waqaf dibaca…", ar: "ما رُسم بالتاء المفتوحة يوقف عليه…" }, o: [{ id: "Dengan ha", ar: "بالهاء" }, { id: "Dengan alif", ar: "بالألف" }, { id: "Dengan ta", ar: "بالتاء" }, { id: "Dengan mad", ar: "بالمد" }], j: 2, b: { id: "Apa yang ditulis dengan ta, waqaf dengan ta.", ar: "ما رسم بالتاء يوقف عليه بالتاء." } },

    { t: "judul", id: "Kata 1: رَحْمَتَ (rahmat) — tujuh tempat", ar: "الكلمة الأولى: رحمت" },
    { t: "catatan", gaya: "tanbih", judul: { id: "Perbedaan qari pada waqaf rahmat", ar: "خلاف القراء في الوقف" }, id: "{رَحْمَتَ} ditulis dengan ta maftuhah di tujuh tempat, dan **semua qari waqaf dengan ta**, **kecuali** Abu 'Amr al-Bashri, Ibnu Katsir al-Makki, dan Al-Kisa'i al-Kufi, yang berhenti dengan **ha**; itu adalah **dialek Quraisy**.", ar: "رسمت «رحمت» بالتاء المفتوحة في سبعة مواضع، ويوقف عليها لجميع القراء بالتاء، عدا أبي عمرو البصري وابن كثير المكي والكسائي الكوفي فهم يقفون بالهاء وهي لغة لقريش." },
    { t: "tabel", judul: { id: "Tujuh tempat rahmat (urutan nazham)", ar: "مواضع رحمت السبعة" }, kolom: [{ id: "Surah", ar: "السورة" }, { id: "Ayat", ar: "الآية" }], baris: [
      [{ id: "Az-Zukhruf: 32 (pertama)", ar: "الزخرف ٣٢" }, { id: "{أَهُمْ يَقْسِمُونَ رَحْمَتَ رَبِّكَ}", ar: "{رَحْمَتَ رَبِّكَ}" }],
      [{ id: "Az-Zukhruf: 32 (kedua)", ar: "الزخرف ٣٢" }, { id: "{وَرَحْمَتُ رَبِّكَ خَيْرٌ مِّمَّا يَجْمَعُونَ}", ar: "{وَرَحْمَتُ رَبِّكَ}" }],
      [{ id: "Al-A'raf: 56", ar: "الأعراف ٥٦" }, { id: "{إِنَّ رَحْمَتَ اللَّهِ قَرِيبٌ مِّنَ الْمُحْسِنِينَ}", ar: "{رَحْمَتَ اللَّهِ}" }],
      [{ id: "Ar-Rum: 50", ar: "الروم ٥٠" }, { id: "{فَانظُرْ إِلَىٰ آثَارِ رَحْمَتِ اللَّهِ}", ar: "{رَحْمَتِ اللَّهِ}" }],
      [{ id: "Hud: 73", ar: "هود ٧٣" }, { id: "{رَحْمَتُ اللَّهِ وَبَرَكَاتُهُ عَلَيْكُمْ أَهْلَ الْبَيْتِ}", ar: "{رَحْمَتُ اللَّهِ}" }],
      [{ id: "Maryam: 2 (“kaf”)", ar: "مريم ٢" }, { id: "{ذِكْرُ رَحْمَتِ رَبِّكَ عَبْدَهُ زَكَرِيَّا}", ar: "{رَحْمَتِ رَبِّكَ}" }],
      [{ id: "Al-Baqarah: 218", ar: "البقرة ٢١٨" }, { id: "{أُولَٰئِكَ يَرْجُونَ رَحْمَتَ اللَّهِ}", ar: "{رَحْمَتَ اللَّهِ}" }] ] },
    { t: "contoh", judul: { id: "Contoh waqaf pada rahmat", ar: "مثال الوقف" }, ayat: { ar: "{أَهُمْ يَقْسِمُونَ رَحْمَتَ رَبِّكَ}", src: "الزخرف ٣٢", id: "Apakah mereka yang membagi-bagi rahmat Rabbmu?" },
      sorot: [
        { label: { id: "Mayoritas qari", ar: "الجمهور" }, warna: "green", id: "Berhenti: {رَحْمَتْ} (dengan ta).", ar: "يوقفون بالتاء: «رحمت»." },
        { label: { id: "Abu 'Amr, Ibnu Katsir, Al-Kisa'i", ar: "أبو عمرو وابن كثير والكسائي" }, warna: "gold", id: "Berhenti: {رَحْمَهْ} (dengan ha), dialek Quraisy.", ar: "يوقفون بالهاء «رحمه» وهي لغة لقريش." } ] },
    { t: "p", id: "Syaikh menegaskan bahwa tujuh tempat ini disusun mengikuti urutan bait Ibnul Jazari.", ar: "وقد رتّبنا هذه المواضع على حسب ما كتبه ابن الجزري في ترتيب الأبيات." },

    { t: "judul", id: "Kata 2: نِعْمَتَ (ni'mat) — sebelas tempat", ar: "الكلمة الثانية: نعمت" },
    { t: "tabel", judul: { id: "Sebelas tempat ni'mat", ar: "مواضع نعمت" }, kolom: [{ id: "Surah", ar: "السورة" }, { id: "Ayat", ar: "الآية" }], baris: [
      [{ id: "Al-Baqarah: 231", ar: "البقرة ٢٣١" }, { id: "{وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ وَمَا أَنزَلَ عَلَيْكُم}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "An-Nahl: 72", ar: "النحل ٧٢" }, { id: "{أَفَبِالْبَاطِلِ يُؤْمِنُونَ وَبِنِعْمَتِ اللَّهِ هُمْ يَكْفُرُونَ}", ar: "{وَبِنِعْمَتِ اللَّهِ}" }],
      [{ id: "An-Nahl: 83", ar: "النحل ٨٣" }, { id: "{يَعْرِفُونَ نِعْمَتَ اللَّهِ ثُمَّ يُنكِرُونَهَا}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "An-Nahl: 114", ar: "النحل ١١٤" }, { id: "{وَاشْكُرُوا نِعْمَتَ اللَّهِ إِن كُنتُمْ إِيَّاهُ تَعْبُدُونَ}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "Ibrahim: 28", ar: "إبراهيم ٢٨" }, { id: "{أَلَمْ تَرَ إِلَى الَّذِينَ بَدَّلُوا نِعْمَتَ اللَّهِ كُفْرًا}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "Ibrahim: 34", ar: "إبراهيم ٣٤" }, { id: "{وَإِن تَعُدُّوا نِعْمَتَ اللَّهِ لَا تُحْصُوهَا}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "Al-Ma'idah: 11 (yang kedua di surah itu)", ar: "المائدة ١١" }, { id: "{اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ هَمَّ قَوْمٌ}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "Luqman: 31", ar: "لقمان ٣١" }, { id: "{أَلَمْ تَرَ أَنَّ الْفُلْكَ تَجْرِي فِي الْبَحْرِ بِنِعْمَتِ اللَّهِ}", ar: "{بِنِعْمَتِ اللَّهِ}" }],
      [{ id: "Fathir: 3", ar: "فاطر ٣" }, { id: "{يَا أَيُّهَا النَّاسُ اذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ}", ar: "{نِعْمَتَ اللَّهِ}" }],
      [{ id: "Ath-Thur: 29", ar: "الطور ٢٩" }, { id: "{فَذَكِّرْ فَمَا أَنتَ بِنِعْمَتِ رَبِّكَ بِكَاهِنٍ وَلَا مَجْنُونٍ}", ar: "{بِنِعْمَتِ رَبِّكَ}" }],
      [{ id: "Ali 'Imran: 103", ar: "آل عمران ١٠٣" }, { id: "{وَاذْكُرُوا نِعْمَتَ اللَّهِ عَلَيْكُمْ إِذْ كُنتُمْ أَعْدَاءً فَأَلَّفَ بَيْنَ قُلُوبِكُمْ}", ar: "{نِعْمَتَ اللَّهِ}" }] ] },
    { t: "catatan", gaya: "faidah", id: "Nazham berkata *“ni'matuha tsalatsu Nahl”*: ada **tiga tempat** di An-Nahl. Dan *“akhirat 'uqud ats-tsani hum”*: yang dimaksud ialah **Al-Ma'idah yang kedua**, sebab tempat pertama di surah itu ditulis dengan ha.", ar: "«نعمتها ثلاث نحل» أي ثلاثة مواضع بالنحل، و«أخيرات عقود الثان هم» أي الموضع الثاني من المائدة؛ لأن الأول رسم بالهاء." },
    { t: "cek", q: { id: "Berapa tempat {نِعْمَتَ} ditulis dengan ta di Surah An-Nahl menurut nazham?", ar: "كم موضعًا لـ«نعمت» بالتاء في النحل؟" }, o: [{ id: "Satu", ar: "واحد" }, { id: "Dua", ar: "اثنان" }, { id: "Tiga", ar: "ثلاثة" }, { id: "Empat", ar: "أربعة" }], j: 2, b: { id: "“Ni'matuha tsalatsu Nahl”: tiga tempat.", ar: "«نعمتها ثلاث نحل»." } },

    { t: "judul", id: "Kata 3–6: la'nat, imra'at, ma'shiyat, syajarat", ar: "لعنت وامرأت ومعصيت وشجرت" },
    { t: "peta", ikon: "tree", pusat: { id: "Ta maftuhah (bagian 1)", ar: "التاء المفتوحة" }, cabang: [
      { id: "لَعْنَتَ (2 tempat)", ar: "لعنت", sub: [{ id: "Ali 'Imran: 61", ar: "آل عمران ٦١" }, { id: "An-Nur: 7", ar: "النور ٧" }] },
      { id: "امْرَأَتَ (7 tempat)", ar: "امرأت", sub: [{ id: "Yusuf: 30 dan 51", ar: "يوسف ٣٠، ٥١" }, { id: "Ali 'Imran: 35, Al-Qashash: 9", ar: "آل عمران ٣٥، القصص ٩" }, { id: "At-Tahrim: 10 (dua), 11", ar: "التحريم" }] },
      { id: "مَعْصِيَتَ (2 tempat)", ar: "معصيت", sub: [{ id: "Al-Mujadilah: 8", ar: "المجادلة ٨" }, { id: "Al-Mujadilah: 9", ar: "المجادلة ٩" }] },
      { id: "شَجَرَتَ (1 tempat)", ar: "شجرت", sub: [{ id: "Ad-Dukhan: 43", ar: "الدخان ٤٣" }] } ] },
    { t: "contoh", judul: { id: "La'nat (2 tempat)", ar: "لعنت" }, ayat: { ar: "{ثُمَّ نَبْتَهِلْ فَنَجْعَل لَّعْنَتَ اللَّهِ عَلَى الْكَاذِبِينَ}", src: "آل عمران ٦١", id: "Kemudian kita bermubahalah, lalu kita jadikan laknat Allah atas orang-orang yang dusta." },
      sorot: [
        { label: { id: "Tempat kedua", ar: "الموضع الثاني" }, warna: "blue", id: "An-Nur: 7 {وَالْخَامِسَةُ أَنَّ لَعْنَتَ اللَّهِ عَلَيْهِ إِن كَانَ مِنَ الْكَاذِبِينَ}.", ar: "النور: {أَنَّ لَعْنَتَ اللَّهِ عَلَيْهِ}." } ] },
    { t: "akordion", judul: { id: "Tujuh tempat {امْرَأَتَ}", ar: "امرأت في سبعة مواضع" }, item: [
      { judul: { id: "Yusuf: 30", ar: "يوسف ٣٠" }, id: "{وَقَالَ نِسْوَةٌ فِي الْمَدِينَةِ امْرَأَتُ الْعَزِيزِ تُرَاوِدُ فَتَاهَا عَن نَّفْسِهِ}", ar: "{امْرَأَتُ الْعَزِيزِ}" },
      { judul: { id: "Yusuf: 51", ar: "يوسف ٥١" }, id: "{قَالَتِ امْرَأَتُ الْعَزِيزِ الْآنَ حَصْحَصَ الْحَقُّ}", ar: "{امْرَأَتُ الْعَزِيزِ}" },
      { judul: { id: "Ali 'Imran: 35", ar: "آل عمران ٣٥" }, id: "{إِذْ قَالَتِ امْرَأَتُ عِمْرَانَ}", ar: "{امْرَأَتُ عِمْرَانَ}" },
      { judul: { id: "Al-Qashash: 9", ar: "القصص ٩" }, id: "{وَقَالَتِ امْرَأَتُ فِرْعَوْنَ}", ar: "{امْرَأَتُ فِرْعَوْنَ}" },
      { judul: { id: "At-Tahrim: 10 (dua tempat)", ar: "التحريم ١٠" }, id: "{امْرَأَتَ نُوحٍ وَامْرَأَتَ لُوطٍ}", ar: "{امْرَأَتَ نُوحٍ وَامْرَأَتَ لُوطٍ}" },
      { judul: { id: "At-Tahrim: 11", ar: "التحريم ١١" }, id: "{امْرَأَتَ فِرْعَوْنَ}", ar: "{امْرَأَتَ فِرْعَوْنَ}" } ] },
    { t: "catatan", gaya: "faidah", id: "**Kaidah:** setiap kata {امْرَأَة} yang **diidhafahkan kepada suaminya** ditulis dengan **ta maftuhah**.", ar: "فكل لفظ «امرأة» أُضيفت إلى زوجها فإنها تُكتب بالتاء المفتوحة." },
    { t: "contoh", judul: { id: "Ma'shiyat dan syajarat", ar: "معصيت وشجرت" }, ayat: { ar: "{وَيَتَنَاجَوْنَ بِالْإِثْمِ وَالْعُدْوَانِ وَمَعْصِيَتِ الرَّسُولِ}", src: "المجادلة ٨", id: "Dan mereka berbisik-bisik untuk dosa, permusuhan, dan mendurhakai Rasul." },
      sorot: [
        { label: { id: "Ma'shiyat", ar: "معصيت" }, warna: "blue", id: "Dua tempat, keduanya dalam Surah Al-Mujadilah (ayat 8 dan 9).", ar: "موضعان بالمجادلة." },
        { label: { id: "Syajarat", ar: "شجرت" }, warna: "green", id: "Satu tempat: Ad-Dukhan: 43 {إِنَّ شَجَرَتَ الزَّقُّومِ}.", ar: "موضع واحد بالدخان." } ] },

    { t: "judul", id: "Kata 7: سُنَّتَ (sunnat) — lima tempat", ar: "الكلمة السابعة: سنت" },
    { t: "kutipan", ar: "سُنَّتْ فَاطِرِ كُلًّا وَالْأَنْفَالَ وَحَرْفَ غَافِرِ", id: "Sunnat: Fathir semuanya, Al-Anfal, dan huruf (tempat) di Ghafir.", oleh: "Ibnul Jazari" },
    { t: "tabel", judul: { id: "Lima tempat sunnat", ar: "مواضع سنت" }, kolom: [{ id: "Surah", ar: "السورة" }, { id: "Ayat", ar: "الآية" }], baris: [
      [{ id: "Fathir: 43 (1)", ar: "فاطر ٤٣" }, { id: "{فَهَلْ يَنظُرُونَ إِلَّا سُنَّتَ الْأَوَّلِينَ}", ar: "{سُنَّتَ الْأَوَّلِينَ}" }],
      [{ id: "Fathir: 43 (2)", ar: "فاطر ٤٣" }, { id: "{فَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَبْدِيلًا}", ar: "{لِسُنَّتِ اللَّهِ تَبْدِيلًا}" }],
      [{ id: "Fathir: 43 (3)", ar: "فاطر ٤٣" }, { id: "{وَلَن تَجِدَ لِسُنَّتِ اللَّهِ تَحْوِيلًا}", ar: "{لِسُنَّتِ اللَّهِ تَحْوِيلًا}" }],
      [{ id: "Al-Anfal: 38", ar: "الأنفال ٣٨" }, { id: "{وَإِن يَعُودُوا فَقَدْ مَضَتْ سُنَّتُ الْأَوَّلِينَ}", ar: "{سُنَّتُ الْأَوَّلِينَ}" }],
      [{ id: "Ghafir: 85", ar: "غافر ٨٥" }, { id: "{سُنَّتَ اللَّهِ الَّتِي قَدْ خَلَتْ فِي عِبَادِهِ}", ar: "{سُنَّتَ اللَّهِ}" }] ] },
    { t: "catatan", gaya: "info", id: "Jadi di Surah Fathir saja ada **tiga tempat**, ditambah Al-Anfal dan Ghafir menjadi **lima**.", ar: "فهنا ثلاثة مواضع في فاطر، وموضع في الأنفال، وموضع في غافر." },
    { t: "cek", q: { id: "Jumlah tempat {سُنَّتَ} yang ditulis dengan ta maftuhah adalah…", ar: "عدد مواضع «سنت» بالتاء…" }, o: [{ id: "Dua", ar: "اثنان" }, { id: "Lima", ar: "خمسة" }, { id: "Tujuh", ar: "سبعة" }, { id: "Sebelas", ar: "أحد عشر" }], j: 1, b: { id: "Tiga di Fathir, satu di Al-Anfal, satu di Ghafir.", ar: "ثلاثة في فاطر وواحد في الأنفال وواحد في غافر." } },

    { t: "judul", id: "Lima Kata yang Hanya Sekali dengan Ta", ar: "كلمات في موضع واحد" },
    { t: "poin", judul: { id: "Lima kata, masing-masing satu tempat", ar: "كلمات خمس في موضع واحد" }, item: [
      { ikon: "star8", judul: { id: "قُرَّتُ (qurrat)", ar: "قرت" }, id: "Al-Qashash: 9 {قُرَّتُ عَيْنٍ لِّي وَلَكَ}. Jika berhenti dibaca *qurrah*; hanya satu tempat.", ar: "القصص ٩ {قُرَّتُ عَيْنٍ لِّي وَلَكَ}." },
      { ikon: "leaf", judul: { id: "جَنَّتُ (jannat)", ar: "جنت" }, id: "Al-Waqi'ah: 89 {فَرَوْحٌ وَرَيْحَانٌ وَجَنَّتُ نَعِيمٍ}.", ar: "الواقعة ٨٩." },
      { ikon: "palm", judul: { id: "فِطْرَتَ (fithrat)", ar: "فطرت" }, id: "Ar-Rum: 30 {فِطْرَتَ اللَّهِ الَّتِي فَطَرَ النَّاسَ عَلَيْهَا}.", ar: "الروم ٣٠." },
      { ikon: "shield", judul: { id: "بَقِيَّتُ (baqiyyat)", ar: "بقيت" }, id: "Hud: 86 {بَقِيَّتُ اللَّهِ خَيْرٌ لَّكُمْ}.", ar: "هود ٨٦." },
      { ikon: "user", judul: { id: "ابْنَتَ (ibnat)", ar: "ابنت" }, id: "At-Tahrim: 12 {وَمَرْيَمَ ابْنَتَ عِمْرَانَ}.", ar: "التحريم ١٢." } ] },

    { t: "judul", id: "Kata 13: كَلِمَتُ (kalimat) — lima tempat", ar: "الكلمة الثالثة عشرة: كلمت" },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kaidah “wa kullu ma ukhtulifa”", ar: "«وكل ما اختلف»" }, id: "Nazham menutup dengan kaidah: **setiap kata yang qari berbeda dalam bacaannya, ada yang membaca mufrad (tunggal)** — maka tempat itu ditulis dengan ta maftuhah. Karena itu pada beberapa tempat mushaf-mushaf berbeda rasmnya.", ar: "وكل ما اختلف: أي كل كلمة أو موضع اختلف القراء في قراءته فمنهم من قرأه بالإفراد فإن هذا الموضع يرسم بالتاء المفتوحة." },
    { t: "tabel", judul: { id: "Lima tempat kalimat", ar: "مواضع كلمت" }, kolom: [{ id: "Surah", ar: "السورة" }, { id: "Ayat", ar: "الآية" }, { id: "Catatan", ar: "ملاحظة" }], baris: [
      [{ id: "Al-An'am: 115", ar: "الأنعام ١١٥" }, { id: "{وَتَمَّتْ كَلِمَتُ رَبِّكَ صِدْقًا وَعَدْلًا}", ar: "{كَلِمَتُ رَبِّكَ}" }, { id: "—", ar: "—" }],
      [{ id: "Al-A'raf: 137", ar: "الأعراف ١٣٧" }, { id: "{وَتَمَّتْ كَلِمَتُ رَبِّكَ الْحُسْنَىٰ عَلَىٰ بَنِي إِسْرَائِيلَ بِمَا صَبَرُوا}", ar: "{كَلِمَتُ رَبِّكَ الْحُسْنَىٰ}" }, { id: "Mushaf berbeda rasm", ar: "اختلفت فيه المصاحف" }],
      [{ id: "Yunus: 33", ar: "يونس ٣٣" }, { id: "{كَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ عَلَى الَّذِينَ فَسَقُوا}", ar: "{كَلِمَتُ رَبِّكَ}" }, { id: "—", ar: "—" }],
      [{ id: "Yunus: 96", ar: "يونس ٩٦" }, { id: "{إِنَّ الَّذِينَ حَقَّتْ عَلَيْهِمْ كَلِمَتُ رَبِّكَ لَا يُؤْمِنُونَ}", ar: "{كَلِمَتُ رَبِّكَ}" }, { id: "Diperselisihkan", ar: "مختلف فيه" }],
      [{ id: "Ghafir: 6", ar: "غافر ٦" }, { id: "{وَكَذَٰلِكَ حَقَّتْ كَلِمَتُ رَبِّكَ}", ar: "{كَلِمَتُ رَبِّكَ}" }, { id: "Mushaf berbeda rasm", ar: "اختلفت فيه المصاحف" }] ] },

    { t: "judul", id: "Plural dan Kata Lain yang Ditulis dengan Ta", ar: "الجموع وكلمات أخرى" },
    { t: "akordion", judul: { id: "Kata-kata tambahan", ar: "كلمات أخرى" }, item: [
      { judul: { id: "جِمَالَتٌ (jimalat)", ar: "جمالات" }, id: "Al-Mursalat: 33 {كَأَنَّهُ جِمَالَتٌ صُفْرٌ}; dibaca *jimalat* atau *jimalat* (jama' mu'annats) sesuai riwayat.", ar: "المرسلات {كَأَنَّهُ جِمَالَتٌ صُفْرٌ} فتقرأ جمالت وجمالات على حسب الرواية." },
      { judul: { id: "بَيِّنَتٍ (bayyinat)", ar: "بينت" }, id: "Fathir: 40 {فَهُمْ عَلَىٰ بَيِّنَتٍ مِّنْهُ}.", ar: "فاطر {فَهُمْ عَلَىٰ بَيِّنَتٍ مِّنْهُ}." },
      { judul: { id: "غَيَابَتِ (ghayabat)", ar: "غيابت" }, id: "Yusuf: 10 {وَأَلْقُوهُ فِي غَيَابَتِ الْجُبِّ}, dan tempat lain {أَن يَجْعَلُوهُ فِي غَيَابَتِ الْجُبِّ} (ayat 15); dibaca *ghayabat* atau *ghayabat* menurut riwayat.", ar: "يوسف {فِي غَيَابَتِ الْجُبِّ} فتقرأ غيابت وغيابات على حسب الرواية." },
      { judul: { id: "Isim jama' bertaut ta", ar: "أسماء الجموع" }, id: "Isim-isim jama' yang berakhir ta, seperti: الآيات، آيات، مبيّنات، بيّنات، متبرّجات، المؤتفكات، المنشآت، العاديات، الذاريات، المرسلات، النازعات.", ar: "كالآيات، وآيات، ومبينات، وبينات، ومتبرجات، والمؤتفكات، والمنشآت، والعاديات، والذاريات، والمرسلات، والنازعات." },
      { judul: { id: "Ta pada akhir kata", ar: "كلمات مختومة بالتاء" }, id: "Seperti: مَلَكُوت، جَالُوت، طَالُوت، التَّابُوت، الطَّاغُوت.", ar: "كلمة: ملكوت، جالوت، وطالوت، والتابوت، والطاغوت." },
      { judul: { id: "يَا أَبَتِ (abat)", ar: "أبت" }, id: "Ditulis dengan ta maftuhah di Surah Yusuf, Maryam, Al-Qashash, dan Ash-Shaffat.", ar: "في سورة يوسف ومريم والقصص والصافات." },
      { judul: { id: "هَيْهَاتَ (haihat)", ar: "هيهات" }, id: "Al-Mu'minun: 36 {هَيْهَاتَ هَيْهَاتَ لِمَا تُوعَدُونَ}.", ar: "المؤمنون ٣٦." },
      { judul: { id: "مَرْضَاتِ (mardhat)", ar: "مرضات" }, id: "Tiga tempat: Al-Baqarah, An-Nisa, dan At-Tahrim.", ar: "في ثلاثة مواضع: البقرة والنساء والتحريم." },
      { judul: { id: "ذَاتَ (dzat)", ar: "ذات" }, id: "Al-Anfal: 1 {ذَاتَ بَيْنِكُمْ} dan An-Naml: 60 {ذَاتَ بَهْجَةٍ}.", ar: "الأنفال {ذَاتَ بَيْنِكُمْ} والنمل {ذَاتَ بَهْجَةٍ}." },
      { judul: { id: "وَلَاتَ dan اللَّاتَ", ar: "ولات واللات" }, id: "Shad: 3 {وَلَاتَ حِينَ مَنَاصٍ} dan An-Najm: 19 {أَفَرَأَيْتُمُ اللَّاتَ وَالْعُزَّىٰ}.", ar: "ص {وَلَاتَ حِينَ مَنَاصٍ} والنجم {أَفَرَأَيْتُمُ اللَّاتَ وَالْعُزَّىٰ}." } ] },
    { t: "contoh", judul: { id: "Menerapkan kaidah waqaf", ar: "تطبيق القاعدة" }, ayat: { ar: "{فَهُمْ عَلَىٰ بَيِّنَتٍ مِّنْهُ}", src: "فاطر ٤٠", id: "Maka mereka berada di atas keterangan yang nyata dari-Nya." },
      sorot: [
        { label: { id: "Rasm", ar: "الرسم" }, warna: "blue", id: "{بَيِّنَتٍ} ditulis dengan ta maftuhah.", ar: "رُسمت بالتاء." },
        { label: { id: "Waqaf", ar: "الوقف" }, warna: "green", id: "Berhenti dengan **ta**, sesuai rasm.", ar: "يوقف عليها بالتاء." } ] },
    { t: "catatan", gaya: "hikmah", id: "Semua kata di atas dibaca atau dihentikan dengan ta maftuhah; kaidah penutup: **apa yang ditulis dengan ta, waqaf dengan ta, dan apa yang ditulis dengan ha, waqaf dengan ha — masing-masing sesuai riwayatnya.**", ar: "كل هذه الكلمات تقرأ بالتاء المفتوحة أو يوقف عليها بالتاء المفتوحة، فما رُسم بالتاء يوقف عليه بالتاء، وما رُسم بالهاء يوقف عليه بالهاء، وكل على حسب روايته." },
    { t: "balik", judul: { id: "Kartu hafalan", ar: "بطاقات المراجعة" }, item: [
      { depan: { id: "رَحْمَتَ: jumlah tempat?", ar: "رحمت: كم موضعًا؟" }, belakang: { id: "Tujuh", ar: "سبعة" } },
      { depan: { id: "نِعْمَتَ: jumlah tempat?", ar: "نعمت: كم موضعًا؟" }, belakang: { id: "Sebelas", ar: "أحد عشر" } },
      { depan: { id: "لَعْنَتَ: jumlah dan tempat", ar: "لعنت: كم وأين؟" }, belakang: { id: "Dua: Ali 'Imran dan An-Nur", ar: "اثنان: آل عمران والنور" } },
      { depan: { id: "امْرَأَتَ: jumlah dan kaidah", ar: "امرأت: العدد والقاعدة" }, belakang: { id: "Tujuh; idhafah kepada suami", ar: "سبعة؛ مضافة إلى زوجها" } },
      { depan: { id: "سُنَّتَ: jumlah?", ar: "سنت: العدد؟" }, belakang: { id: "Lima (3 Fathir, 1 Anfal, 1 Ghafir)", ar: "خمسة" } },
      { depan: { id: "Qari yang waqaf rahmat dengan ha?", ar: "من يقف بالهاء على رحمت؟" }, belakang: { id: "Abu 'Amr, Ibnu Katsir, Al-Kisa'i", ar: "أبو عمرو وابن كثير والكسائي" } } ] },
    { t: "tanya", q: { id: "Apa makna “zabarah” dalam nazham?", ar: "ما معنى «زبره» في النظم؟" }, a: { id: "Berarti *kataba* (menulis) — yaitu apa yang ditulis 'Utsman dan para sahabat dalam mushaf; dari akar yang sama lahir kata *az-Zabur*.", ar: "أي كتبه؛ ما كتبه عثمان والصحابة في المصحف، ومنه الزبور أي المكتوب." } },
    { t: "tanya", q: { id: "Mengapa kata {قُرَّتُ} di Al-Qashash: 9 perlu diingat khusus?", ar: "لماذا تحفظ «قرت» في القصص خاصةً؟" }, a: { id: "Karena hanya satu tempat dalam Al-Qur'an yang ditulis dengan ta maftuhah (selebihnya {قُرَّةُ}).", ar: "لأنها ترسم بالتاء المفتوحة في موضع واحد فقط." } },
    { t: "ringkasan", item: [
      { id: "Kaidah: yang ditulis dengan ta, waqaf dengan ta; yang ditulis dengan ha, waqaf dengan ha.", ar: "ما رُسم بالتاء يوقف عليه بالتاء وما رُسم بالهاء فبالهاء." },
      { id: "Rahmat 7, ni'mat 11, la'nat 2, imra'at 7, ma'shiyat 2, syajarat 1, sunnat 5, kalimat 5 tempat.", ar: "رحمت ٧، نعمت ١١، لعنت ٢، امرأت ٧، معصيت ٢، شجرت ١، سنت ٥، كلمت ٥." },
      { id: "Lima kata satu tempat: qurrat, jannat, fithrat, baqiyyat, ibnat.", ar: "قرت، جنت، فطرت، بقيت، ابنت." },
      { id: "Abu 'Amr, Ibnu Katsir, dan Al-Kisa'i waqaf dengan ha pada rahmat (dialek Quraisy).", ar: "أبو عمرو وابن كثير والكسائي يقفون بالهاء على رحمت." },
      { id: "Plural dan kata lain: jimalat, bayyinat, ghayabat, abat, haihat, mardhat, dzat, wa lata, allata.", ar: "جمالات، بينات، غيابات، أبت، هيهات، مرضات، ذات، ولات، اللات." } ] }
  ],
  istilah: [
    { ar: "التاء المفتوحة", latin: "at-ta' al-maftuhah", id: "Ta terbuka (ت)", def: { id: "Ta yang ditulis ت dalam rasm, dihentikan dengan ta.", ar: "التاء المبسوطة التي يوقف عليها بالتاء." } },
    { ar: "التاء المربوطة", latin: "at-ta' al-marbuthah", id: "Ta terikat (ة)", def: { id: "Ta yang ditulis ة dan dihentikan dengan ha.", ar: "ما يوقف عليه بالهاء." } },
    { ar: "زبره", latin: "zabarah", id: "Menulis", def: { id: "Maknanya kataba: apa yang ditulis 'Utsman dan para sahabat.", ar: "أي: كتبه." } },
    { ar: "الزبور", latin: "az-zabur", id: "Kitab Dawud", def: { id: "Berarti “yang tertulis”: lembaran Nabi Dawud.", ar: "المكتوب، صحف داود." } },
    { ar: "لغة قريش", latin: "lughat Quraisy", id: "Dialek Quraisy", def: { id: "Dialek yang dipakai Abu 'Amr, Ibnu Katsir, Al-Kisa'i saat waqaf rahmat dengan ha.", ar: "وهي لغة لقريش." } },
    { ar: "الإفراد", latin: "al-ifrad", id: "Bentuk tunggal", def: { id: "Bacaan mufrad pada kata yang diperselisihkan sehingga ditulis dengan ta.", ar: "قراءة بالمفرد." } },
    { ar: "رحمت", latin: "rahmat", id: "Rahmat (ta)", def: { id: "Tujuh tempat dengan ta maftuhah.", ar: "سبعة مواضع." } },
    { ar: "نعمت", latin: "ni'mat", id: "Nikmat (ta)", def: { id: "Sebelas tempat dengan ta maftuhah.", ar: "أحد عشر موضعًا." } },
    { ar: "امرأت", latin: "imra'at", id: "Istri (ta)", def: { id: "Tujuh tempat; diidhafahkan kepada suaminya.", ar: "مضافة إلى زوجها." } },
    { ar: "سنت", latin: "sunnat", id: "Sunnah/ketetapan (ta)", def: { id: "Lima tempat: tiga di Fathir, Al-Anfal, Ghafir.", ar: "خمسة مواضع." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Menurut kaidah bab ini, kata yang ditulis dengan ta maftuhah dalam mushaf, saat waqaf…", ar: "ما رُسم بالتاء المفتوحة يوقف عليه…" }, o: [{ id: "Dengan ha", ar: "بالهاء" }, { id: "Dengan ta", ar: "بالتاء" }, { id: "Dengan alif", ar: "بالألف" }, { id: "Tidak boleh berhenti", ar: "لا يوقف" }], j: 1, b: { id: "Yang ditulis ta, waqaf dengan ta.", ar: "ما رسم بالتاء يوقف عليه بالتاء." } },
      { q: { id: "Kata “zabarah” dalam nazham bermakna…", ar: "«زبره» تعني…" }, o: [{ id: "Menghapus", ar: "محاه" }, { id: "Membaca", ar: "قرأه" }, { id: "Menulis", ar: "كتبه" }, { id: "Menghafal", ar: "حفظه" }], j: 2, b: { id: "Zabarahu = kataba.", ar: "زبره: كتبه." } },
      { q: { id: "Jumlah tempat {رَحْمَتَ} dengan ta maftuhah adalah…", ar: "عدد «رحمت»…" }, o: [{ id: "Dua", ar: "اثنان" }, { id: "Tujuh", ar: "سبعة" }, { id: "Sebelas", ar: "أحد عشر" }, { id: "Lima", ar: "خمسة" }], j: 1, b: { id: "Tujuh tempat.", ar: "سبعة." } },
      { q: { id: "Qari yang waqaf dengan ha pada rahmat…", ar: "من يقف بالهاء على «رحمت»…" }, o: [{ id: "Nafi', Ashim, Hamzah", ar: "نافع وعاصم وحمزة" }, { id: "Abu 'Amr, Ibnu Katsir, Al-Kisa'i", ar: "أبو عمرو وابن كثير والكسائي" }, { id: "Ibnu 'Amir, Hamzah", ar: "ابن عامر وحمزة" }, { id: "Semua qari", ar: "جميع القراء" }], j: 1, b: { id: "Itu dialek Quraisy.", ar: "وهي لغة لقريش." } },
      { q: { id: "{نِعْمَتَ} ditulis dengan ta di berapa tempat?", ar: "«نعمت» بالتاء في كم موضعًا؟" }, o: [{ id: "Tujuh", ar: "سبعة" }, { id: "Sembilan", ar: "تسعة" }, { id: "Sebelas", ar: "أحد عشر" }, { id: "Dua belas", ar: "اثنا عشر" }], j: 2, b: { id: "Sebelas tempat.", ar: "أحد عشر." } },
      { q: { id: "Yang dimaksud “akhirat 'uqud ats-tsani” adalah…", ar: "«أخيرات عقود الثان» يعني…" }, o: [{ id: "Al-Ma'idah yang kedua", ar: "الموضع الثاني بالمائدة" }, { id: "Al-Ma'idah yang pertama", ar: "الموضع الأول بالمائدة" }, { id: "Al-Baqarah kedua", ar: "الثاني بالبقرة" }, { id: "An-Nahl kedua", ar: "الثاني بالنحل" }], j: 0, b: { id: "Karena yang pertama di Al-Ma'idah ditulis dengan ha.", ar: "لأن الأول رسم بالهاء." } },
      { q: { id: "{لَعْنَتَ} ditulis dengan ta di…", ar: "«لعنت» بالتاء في…" }, o: [{ id: "Ali 'Imran dan An-Nur", ar: "آل عمران والنور" }, { id: "Al-Baqarah dan An-Nisa", ar: "البقرة والنساء" }, { id: "Hud dan Yusuf", ar: "هود ويوسف" }, { id: "Fathir dan Ghafir", ar: "فاطر وغافر" }], j: 0, b: { id: "Ali 'Imran dan An-Nur.", ar: "آل عمران والنور." } },
      { q: { id: "{امْرَأَتَ} yang diidhafahkan kepada suami ditulis dengan ta di berapa tempat?", ar: "«امرأت» في كم موضعًا؟" }, o: [{ id: "Dua", ar: "اثنان" }, { id: "Tiga", ar: "ثلاثة" }, { id: "Lima", ar: "خمسة" }, { id: "Tujuh", ar: "سبعة" }], j: 3, b: { id: "Tujuh tempat.", ar: "سبعة." } },
      { q: { id: "{مَعْصِيَتِ الرَّسُولِ} ditulis dengan ta di Surah…", ar: "«معصيت» في سورة…" }, o: [{ id: "Al-Mujadilah", ar: "المجادلة" }, { id: "Al-Hujurat", ar: "الحجرات" }, { id: "Al-Hasyr", ar: "الحشر" }, { id: "Ath-Thalaq", ar: "الطلاق" }], j: 0, b: { id: "Dua tempat di Al-Mujadilah.", ar: "موضعان بالمجادلة." } },
      { q: { id: "{شَجَرَتَ الزَّقُّومِ} terdapat dalam Surah…", ar: "{شَجَرَتَ الزَّقُّومِ}…" }, o: [{ id: "Ash-Shaffat", ar: "الصافات" }, { id: "Ad-Dukhan", ar: "الدخان" }, { id: "Al-Waqi'ah", ar: "الواقعة" }, { id: "Al-Isra", ar: "الإسراء" }], j: 1, b: { id: "Ad-Dukhan: 43.", ar: "الدخان ٤٣." } },
      { q: { id: "Dari berikut, yang hanya satu tempat dengan ta maftuhah adalah…", ar: "ما جاء بالتاء في موضع واحد…" }, o: [{ id: "رَحْمَتَ", ar: "رحمت" }, { id: "نِعْمَتَ", ar: "نعمت" }, { id: "فِطْرَتَ", ar: "فطرت" }, { id: "سُنَّتَ", ar: "سنت" }], j: 2, b: { id: "Fithrat hanya di Ar-Rum: 30.", ar: "فطرت في الروم ٣٠." } },
      { q: { id: "{وَلَاتَ حِينَ مَنَاصٍ} terdapat dalam Surah…", ar: "{وَلَاتَ حِينَ مَنَاصٍ}…" }, o: [{ id: "Shad", ar: "ص" }, { id: "An-Najm", ar: "النجم" }, { id: "Yasin", ar: "يس" }, { id: "Qaf", ar: "ق" }], j: 0, b: { id: "Surah Shad.", ar: "سورة ص." } }
    ],
    bs: [
      { t: { id: "Kata yang ditulis ta maftuhah dihentikan dengan ta.", ar: "ما رسم بالتاء يوقف عليه بالتاء." }, j: true },
      { t: { id: "Semua qari tanpa kecuali waqaf dengan ha pada rahmat.", ar: "كل القراء يقفون بالهاء على رحمت." }, j: false, b: { id: "Hanya Abu 'Amr, Ibnu Katsir, dan Al-Kisa'i.", ar: "أبو عمرو وابن كثير والكسائي فقط." } },
      { t: { id: "Ni'mat di Al-Ma'idah yang kedua ditulis dengan ta.", ar: "نعمت في المائدة الموضع الثاني بالتاء." }, j: true },
      { t: { id: "Sunnat ditulis ta di empat tempat.", ar: "سنت في أربعة مواضع." }, j: false, b: { id: "Lima tempat.", ar: "خمسة مواضع." } },
      { t: { id: "Imra'at yang diidhafahkan kepada suaminya ditulis dengan ta maftuhah.", ar: "امرأة المضافة لزوجها بالتاء." }, j: true },
      { t: { id: "{قُرَّتُ عَيْنٍ} dengan ta terdapat di banyak tempat.", ar: "قرت في مواضع كثيرة." }, j: false, b: { id: "Hanya satu: Al-Qashash: 9.", ar: "موضع واحد." } },
      { t: { id: "Kalimat memiliki lima tempat dan sebagian mushaf berbeda rasmnya.", ar: "كلمت خمسة مواضع واختلفت المصاحف في بعضها." }, j: true },
      { t: { id: "Mardhat ditulis ta di tiga tempat: Al-Baqarah, An-Nisa, At-Tahrim.", ar: "مرضات في ثلاثة." }, j: true },
      { t: { id: "Az-Zabur berarti kitab-kitab para nabi sebelum Dawud.", ar: "الزبور كتب الأنبياء قبل داود." }, j: false, b: { id: "Az-Zabur berarti yang tertulis, yaitu lembaran Dawud.", ar: "الزبور صحف داود." } },
      { t: { id: "Haihat ditulis dengan ta maftuhah di Al-Mu'minun: 36.", ar: "هيهات بالتاء في المؤمنون." }, j: true }
    ],
    jodoh: [
      { a: { id: "رَحْمَتَ", ar: "رحمت" }, b: { id: "Tujuh tempat", ar: "سبعة" } },
      { a: { id: "نِعْمَتَ", ar: "نعمت" }, b: { id: "Sebelas tempat", ar: "أحد عشر" } },
      { a: { id: "لَعْنَتَ", ar: "لعنت" }, b: { id: "Ali 'Imran dan An-Nur", ar: "آل عمران والنور" } },
      { a: { id: "سُنَّتَ", ar: "سنت" }, b: { id: "Fathir (3), Al-Anfal, Ghafir", ar: "فاطر ثلاثة والأنفال وغافر" } },
      { a: { id: "شَجَرَتَ", ar: "شجرت" }, b: { id: "Ad-Dukhan: 43", ar: "الدخان" } },
      { a: { id: "قُرَّتُ", ar: "قرت" }, b: { id: "Al-Qashash: 9", ar: "القصص" } },
      { a: { id: "جَنَّتُ", ar: "جنت" }, b: { id: "Al-Waqi'ah: 89", ar: "الواقعة" } },
      { a: { id: "بَقِيَّتُ", ar: "بقيت" }, b: { id: "Hud: 86", ar: "هود" } }
    ],
    urut: { t: { id: "Urutkan kata menurut jumlah tempat ta maftuhah (paling sedikit → paling banyak).", ar: "رتب حسب عدد المواضع." },
      item: [{ id: "شَجَرَتَ (1)", ar: "شجرت" }, { id: "لَعْنَتَ (2)", ar: "لعنت" }, { id: "سُنَّتَ (5)", ar: "سنت" }, { id: "رَحْمَتَ (7)", ar: "رحمت" }, { id: "نِعْمَتَ (11)", ar: "نعمت" }] },
    isian: [
      { t: { id: "Kata ______ ditulis dengan ta di Surah Ar-Rum: 30 {فِطْرَتَ اللَّهِ}.", ar: "______ في الروم." }, j: { id: "fithrat", ar: "فطرت" }, x: [{ id: "qurrat", ar: "قرت" }, { id: "ibnat", ar: "ابنت" }, { id: "baqiyyat", ar: "بقيت" }] },
      { t: { id: "Waqaf dengan ha pada rahmat adalah dialek ______.", ar: "لغة ______." }, j: { id: "Quraisy", ar: "قريش" }, x: [{ id: "Tamim", ar: "تميم" }, { id: "Hudzail", ar: "هذيل" }, { id: "Thayyi'", ar: "طيئ" }] },
      { t: { id: "Setiap {امْرَأَتَ} yang ______ kepada suaminya ditulis dengan ta.", ar: "امرأة ______ إلى زوجها." }, j: { id: "diidhafahkan", ar: "أضيفت" }, x: [{ id: "dijama'kan", ar: "جمعت" }, { id: "ditakhfif", ar: "خففت" }, { id: "dinakirahkan", ar: "نكرت" }] },
      { t: { id: "{مَرْضَاتِ} ditulis ta di Al-Baqarah, An-Nisa, dan ______.", ar: "مرضات في البقرة والنساء و______." }, j: { id: "At-Tahrim", ar: "التحريم" }, x: [{ id: "Al-Mujadilah", ar: "المجادلة" }, { id: "Al-Hasyr", ar: "الحشر" }, { id: "Ash-Shaff", ar: "الصف" }] },
      { t: { id: "Maksud “kullu ma ukhtulifa” ialah kata yang dibaca ______ oleh sebagian qari ditulis dengan ta.", ar: "ما قرأه بعض القراء ______." }, j: { id: "mufrad (tunggal)", ar: "بالإفراد" }, x: [{ id: "jama'", ar: "بالجمع" }, { id: "mu'annats", ar: "بالتأنيث" }, { id: "tasydid", ar: "بالتشديد" }] }
    ],
    pilah: { t: { id: "Pilah kata dengan ta maftuhah menurut jumlah tempatnya.", ar: "صنِّف حسب عدد المواضع." },
      kategori: [{ id: "Satu tempat", ar: "موضع واحد" }, { id: "Lebih dari satu tempat", ar: "أكثر من موضع" }],
      item: [
        { t: { id: "قُرَّتُ", ar: "قرت" }, k: 0 },
        { t: { id: "رَحْمَتَ", ar: "رحمت" }, k: 1 },
        { t: { id: "جَنَّتُ", ar: "جنت" }, k: 0 },
        { t: { id: "نِعْمَتَ", ar: "نعمت" }, k: 1 },
        { t: { id: "بَقِيَّتُ", ar: "بقيت" }, k: 0 },
        { t: { id: "سُنَّتَ", ar: "سنت" }, k: 1 },
        { t: { id: "ابْنَتَ", ar: "ابنت" }, k: 0 },
        { t: { id: "امْرَأَتَ", ar: "امرأت" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "ما القاعدة في الوقف على ما رسم بالتاء المفتوحة أو بالهاء؟", id: "Apa kaidah waqaf pada kata yang ditulis dengan ta maftuhah atau ha?" },
      j: { ar: "ما رُسم بالتاء يوقف عليه بالتاء، وما رُسم بالهاء يوقف عليه بالهاء، وكل على حسب روايته.", id: "Yang ditulis dengan ta, waqaf dengan ta; yang ditulis dengan ha, waqaf dengan ha, sesuai riwayat masing-masing." } },
    { t: { ar: "اذكر مواضع «رحمت» السبعة ومن يقف عليها بالهاء.", id: "Sebutkan tujuh tempat rahmat dan siapa yang waqaf dengan ha." },
      j: { ar: "الزخرف (موضعان)، الأعراف ٥٦، الروم ٥٠، هود ٧٣، مريم ٢، البقرة ٢١٨. ويقف عليها بالهاء أبو عمرو وابن كثير والكسائي، وهي لغة قريش.", id: "Az-Zukhruf (dua tempat), Al-A'raf: 56, Ar-Rum: 50, Hud: 73, Maryam: 2, Al-Baqarah: 218. Yang waqaf dengan ha: Abu 'Amr al-Bashri, Ibnu Katsir al-Makki, dan Al-Kisa'i; itu dialek Quraisy." } },
    { t: { ar: "ما الكلمات الخمس التي رسمت بالتاء المفتوحة في موضع واحد؟", id: "Apa lima kata yang ditulis dengan ta maftuhah hanya di satu tempat?" },
      j: { ar: "قرت (القصص ٩)، وجنت (الواقعة ٨٩)، وفطرت (الروم ٣٠)، وبقيت (هود ٨٦)، وابنت (التحريم ١٢).", id: "Qurrat (Al-Qashash: 9), jannat (Al-Waqi'ah: 89), fithrat (Ar-Rum: 30), baqiyyat (Hud: 86), dan ibnat (At-Tahrim: 12)." } },
    { t: { ar: "ما قاعدة «امرأة» المرسومة بالتاء؟ وكم مواضعها؟", id: "Apa kaidah {امْرَأَة} yang ditulis dengan ta dan berapa tempatnya?" },
      j: { ar: "كل لفظ «امرأة» أضيفت إلى زوجها تكتب بالتاء المفتوحة، وهي سبعة مواضع: يوسف (٢)، آل عمران، القصص، والتحريم (٣).", id: "Setiap {امْرَأَة} yang diidhafahkan kepada suaminya ditulis ta maftuhah. Tujuh tempat: dua di Yusuf, satu Ali 'Imran, satu Al-Qashash, tiga di At-Tahrim." } },
    { t: { ar: "ما معنى «وكل ما اختلف جمعًا وفردًا فيه بالتاء عرف»؟", id: "Apa makna “wa kullu ma ukhtulifa jam'an wa fardan fihi bit-ta' 'urif”?" },
      j: { ar: "أي: كل كلمة اختلف القراء في قراءتها بالجمع والإفراد، فهذا الموضع يرسم بالتاء المفتوحة؛ ومنه كلمت وجمالت وغيابت.", id: "Maknanya: setiap kata yang qari berbeda membacanya antara jama' dan mufrad dikenali dengan ta maftuhah; contoh: kalimat, jimalat, ghayabat." } }
  ]
});
