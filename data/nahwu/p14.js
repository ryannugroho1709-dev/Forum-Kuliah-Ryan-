/* Nahwu — Pertemuan 14: At-Tawabi' (1): Na't dan 'Athaf */
Kuliah.pertemuan("nahwu", {
  no: 14, motif: "tawabi", tema: 6, durasi: 24,
  telegram: "https://t.me/Shifaaulqloub7/552",
  bab: { id: "At-Tawabi'", ar: "التوابع" },
  judul: { id: "At-Tawabi' (1): Na't dan 'Athaf", ar: "التوابع (١): النعت والعطف" },
  ringkas: {
    id: "**Tawabi'** adalah kata-kata yang mengikuti kata sebelumnya dalam i'rab — rafa', nashab, jarr, dan jazm. Jumlahnya empat: na't, 'athaf, taukid, badal. Pertemuan ini membahas **na't** (tabi' yang menjelaskan sifat yang diikutinya) dan **'athaf** (tabi' yang dihubungkan dengan huruf 'athaf), lengkap dengan makna delapan huruf 'athaf. Tathbiq: Surah An-Nashr.",
    ar: "التوابع كلمات تتبع ما قبلها في الإعراب، وهي أربعة: النعت والعطف والتوكيد والبدل. وفي هذا الدرس النعت والعطف ومعاني حروف العطف، مع التطبيق على سورة النصر."
  },
  tujuan: [
    { id: "Mendefinisikan tawabi' dan menyebut empat macamnya.", ar: "تعريف التوابع وذكر أنواعها." },
    { id: "Mendefinisikan na't dan menerapkan kaidah keikutsertaannya.", ar: "تعريف النعت وتطبيق تبعيته." },
    { id: "Mendefinisikan 'athaf, ma'thuf, dan ma'thuf 'alaih.", ar: "تعريف العطف والمعطوف والمعطوف عليه." },
    { id: "Menyebut delapan huruf 'athaf dan maknanya.", ar: "ذكر حروف العطف ومعانيها." }
  ],
  isi: [
    { t: "judul", id: "Apa Itu Tawabi'?", ar: "ما التوابع؟" },
    { t: "definisi", istilah: { id: "**Kata-kata yang mengikuti kata sebelumnya dalam i'rab**: dirafa' karena rafa'-nya, dinashab karena nashab-nya, dijarr karena jarr-nya, dan dijazm karena jazm-nya.", ar: "كلمات تتبع ما قبلها في الإعراب، فترفع برفعه، وتنصب بنصبه، وتجر بجره، وتجزم بجزمه." } },
    { t: "peta", ikon: "chain", pusat: { id: "I'rab tab'i (mengikut)", ar: "الإعراب التبعي" }, cabang: [
      { id: "1. Na't", ar: "النعت" }, { id: "2. 'Athaf", ar: "العطف" }, { id: "3. Taukid (P15)", ar: "التوكيد" }, { id: "4. Badal (P15)", ar: "البدل" }
    ] },

    { t: "judul", id: "1. Na't (Sifat)", ar: "النعت" },
    { t: "definisi", istilah: { id: "**Tabi' yang disebut untuk menjelaskan sifat pada yang diikutinya (*matbu'*/*man'ut*).**", ar: "تابع يذكر لبيان صفة في متبوعه." } },
    { t: "contoh", judul: { ar: "الطَّالِبُ الْمُجْتَهِدُ مَحْبُوبٌ" }, id: "Pelajar yang rajin itu dicintai. *Al-mujtahidu* menjelaskan sifat *ath-thalib* → **na't**. *Mahbubun* → khabar.", ar: "المجتهد: نعت، ومحبوب: خبر." },
    { t: "tabel", judul: { id: "Na't mengikuti man'utnya", ar: "النعت يتبع المنعوت" },
      kolom: [{ id: "Keadaan", ar: "الحالة" }, { id: "Contoh", ar: "المثال" }, { id: "Mengapa?", ar: "لماذا؟" }],
      baris: [
        [{ id: "Rafa'", ar: "رفع" }, { ar: "جَاءَ زَيْدٌ الْمُجْتَهِدُ" }, { id: "*Zaidun* fa'il marfu'", ar: "لأن زيدًا مرفوع" }],
        [{ id: "Nashab", ar: "نصب" }, { ar: "أَكْرَمْتُ زَيْدًا الْمُجْتَهِدَ" }, { id: "*Zaidan* maf'ul bih manshub", ar: "لأن زيدًا منصوب" }],
        [{ id: "Jarr", ar: "جر" }, { ar: "مَرَرْتُ بِزَيْدٍ الْمُجْتَهِدِ" }, { id: "*Zaidin* majrur oleh ba'", ar: "لأن زيدًا مجرور" }]
      ] },
    { t: "irab", judul: { id: "Contoh: عَدُوٌّ عَاقِلٌ خَيْرٌ مِنْ صَدِيقٍ جَاهِلٍ", ar: "عدو عاقل خير من صديق جاهل" }, tr: "Musuh yang berakal lebih baik daripada teman yang bodoh.", kata: [
      { w: "عَدُوٌّ", h: "raf", id: "Mubtada' marfu'.", ar: "مبتدأ مرفوع." },
      { w: "عَاقِلٌ", h: "raf", id: "**Na't** marfu' — karena man'utnya (*'aduwwun*) marfu'.", ar: "نعت مرفوع؛ لأن المنعوت مرفوع." },
      { w: "خَيْرٌ", h: "raf", id: "Khabar marfu'.", ar: "خبر مرفوع." },
      { w: "مِنْ", h: "bina", id: "Huruf jar.", ar: "حرف جر." },
      { w: "صَدِيقٍ", h: "jar", id: "Majrur oleh *min*.", ar: "مجرور بمن." },
      { w: "جَاهِلٍ", h: "jar", id: "**Na't** majrur dengan kasrah — karena man'utnya majrur.", ar: "نعت مجرور؛ لأن المنعوت مجرور." }
    ] },
    { t: "contoh", judul: { id: "Kisah kantong yang hilang", ar: "قصة الكيس" }, id: "Engkau menemukan kantong di jalan, lalu ada yang berkata \"*Dha'a li kisun*\" (kantongku hilang). Engkau tak boleh menyerahkannya sebelum ia menyebut **sifat-sifat khususnya**: \"*Dha'a li kisun **shaghirun aswadu***\" — kantong kecil berwarna hitam. *Shaghirun* dan *aswadu* adalah **dua na't** marfu' mengikuti *kisun* (fa'il). Na't **boleh berulang** dalam satu kalimat.", ar: "ضاع لي كيسٌ صغيرٌ أسود: صغير وأسود نعتان مرفوعان تبعًا لكيس المرفوع على أنه فاعل، وقد يتكرر النعت." },
    { t: "daftar", judul: { id: "Ikuti perubahannya", ar: "تتبع التغير" }, item: [
      { id: "Rafa': kantong kecil hilang", ar: "ضَاعَ لِي كِيسٌ صَغِيرٌ" },
      { id: "Nashab: aku kehilangan kantong kecil", ar: "فَقَدْتُ كِيسًا صَغِيرًا" },
      { id: "Jarr: aku bertanya tentang kantong kecil", ar: "أَسْأَلُ عَنْ كِيسٍ صَغِيرٍ" },
      { id: "Imam yang adil dicintai Allah dan manusia (rafa')", ar: "الْإِمَامُ الْعَادِلُ مَحْبُوبٌ عِنْدَ اللهِ وَالنَّاسِ" },
      { id: "Allah menaungi imam yang adil pada hari kiamat (nashab)", ar: "يُظِلُّ اللهُ الْإِمَامَ الْعَادِلَ يَوْمَ الْقِيَامَةِ" },
      { id: "Umat berbahagia dengan imam yang adil (jarr)", ar: "تَسْعَدُ الْأُمَّةُ بِالْإِمَامِ الْعَادِلِ" }
    ] },

    { t: "judul", id: "2. 'Athaf", ar: "العطف" },
    { t: "definisi", istilah: { id: "**Tabi' yang antara dirinya dan yang diikutinya terdapat salah satu huruf 'athaf.**", ar: "التابع الذي يتوسط بينه وبين متبوعه أحد حروف العطف." } },
    { t: "irab", judul: { id: "Contoh: قَامَ زَيْدٌ وَعَمْرٌو", ar: "قام زيد وعمرو" }, kata: [
      { w: "قَامَ", h: "bina", id: "Madhi mabni 'alal-fath.", ar: "فعل ماض مبني على الفتح." },
      { w: "زَيْدٌ", h: "raf", id: "Fa'il marfu' — **ma'thuf 'alaih** (sebelum huruf 'athaf).", ar: "فاعل مرفوع، وهو المعطوف عليه." },
      { w: "وَ", h: "bina", id: "**Huruf 'athaf** mabni 'alal-fath.", ar: "حرف عطف مبني على الفتح." },
      { w: "عَمْرٌو", h: "raf", id: "**Ma'thuf** marfu' — mengikuti *Zaidun*.", ar: "معطوف مرفوع." }
    ] },
    { t: "daftar", judul: { id: "Ma'thuf mengikuti ma'thuf 'alaih — bahkan dalam jazm", ar: "يتبع في الرفع والنصب والجر والجزم" }, item: [
      { id: "Nashab: aku melihat Zaid dan 'Amr", ar: "رَأَيْتُ زَيْدًا وَعَمْرًا" },
      { id: "Jarr: aku melewati Zaid dan 'Amr", ar: "مَرَرْتُ بِزَيْدٍ وَعَمْرٍو" },
      { id: "Jazm: Khalid tidak hadir atau (tidak) mengirim utusan — *yursil* majzum karena di-'athaf-kan pada *yahdhur* yang majzum", ar: "لَمْ يَحْضُرْ خَالِدٌ أَوْ يُرْسِلْ رَسُولًا" }
    ] },
    { t: "catatan", gaya: "faidah", judul: { id: "'Athaf untuk meringkas", ar: "العطف للاختصار" }, id: "Daripada berkata *inkasara al-qalamu wa inkasarat ad-dawatu*, cukup: ***inkasara al-qalamu wad-dawatu*** — pena dan tempat tinta pecah. *Ad-dawatu* marfu' mengikuti *al-qalamu* (fa'il). *Kasartu al-qalama wad-dawata* → manshub. *'Ajibtu min kasri al-qalami wad-dawati* → majrur.", ar: "انكسر القلمُ والدواةُ بدل جملتين، والدواة تتبع القلم في إعرابه." },
    { t: "tabel", judul: { id: "Delapan huruf 'athaf dan maknanya", ar: "حروف العطف ومعانيها" },
      kolom: [{ id: "Huruf", ar: "الحرف" }, { id: "Contoh", ar: "المثال" }, { id: "Makna", ar: "المعنى" }],
      baris: [
        [{ ar: "الْوَاوُ" }, { ar: "انْكَسَرَ الْقَلَمُ وَالدَّوَاةُ" }, { id: "**Muthlaq al-jam'** — sekadar mengumpulkan; siapa yang lebih dulu, Allah yang tahu", ar: "لمطلق الجمع" }],
        [{ ar: "الْفَاءُ" }, { ar: "انْكَسَرَ الْقَلَمُ فَالدَّوَاةُ" }, { id: "**Tartib + ta'qib** — berurutan dan langsung", ar: "للترتيب مع التعقيب" }],
        [{ ar: "ثُمَّ" }, { ar: "انْكَسَرَ الْقَلَمُ ثُمَّ الدَّوَاةُ" }, { id: "**Tartib + tarakhi** — berurutan dengan jeda waktu", ar: "للترتيب مع التراخي" }],
        [{ ar: "أَوْ" }, { ar: "انْكَسَرَ الْقَلَمُ أَوِ الدَّوَاةُ" }, { id: "**Takhyir atau syak** — pilihan/keraguan", ar: "للتخيير أو الشك" }],
        [{ ar: "أَمْ" }, { ar: "الْقَلَمَ كَسَرْتَ أَمِ الدَّوَاةَ؟" }, { id: "**Ta'yin** — menentukan salah satu dari dua", ar: "لتعيين أحد الشيئين" }],
        [{ ar: "لَا" }, { ar: "انْكَسَرَ الْقَلَمُ لَا الدَّوَاةُ" }, { id: "Menetapkan hukum bagi ma'thuf 'alaih, **menafikannya** dari ma'thuf", ar: "تثبت الحكم للمعطوف عليه وتنفيه عن المعطوف" }],
        [{ ar: "بَلْ" }, { ar: "لَمْ يَنْكَسِرِ الْقَلَمُ بَلِ الدَّوَاةُ" }, { id: "**Idhrab** — beralih; yang pecah tempat tinta, bukan pena", ar: "للإضراب" }],
        [{ ar: "لَكِنْ" }, { ar: "لَمْ يَنْكَسِرِ الْقَلَمُ لَكِنِ الدَّوَاةُ" }, { id: "**Istidrak** — meralat", ar: "للاستدراك" }]
      ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Kaidah umum", ar: "قاعدة" }, id: "**Kapan pun salah satu huruf 'athaf terletak di antara dua isim, isim kedua di-i'rab seperti isim pertama.**", ar: "متى وقع حرف من أحرف العطف بين اسمين أعرب الثاني بإعراب الأول." },
    { t: "cek", q: { id: "*Inkasara al-qalamu tsumma ad-dawatu* — maknanya…", ar: "معنى «ثم» هنا…" }, o: [{ id: "Pecah bersamaan", ar: "معًا" }, { id: "Tempat tinta pecah langsung setelah pena", ar: "بعده مباشرة" }, { id: "Tempat tinta pecah beberapa waktu setelah pena", ar: "بعده بمهلة" }, { id: "Salah satunya saja", ar: "أحدهما" }], j: 2, b: { id: "*Tsumma*: tartib dengan tarakhi (jeda).", ar: "ثم للترتيب مع التراخي." } },

    { t: "judul", id: "Tathbiq: Surah An-Nashr", ar: "التطبيق: سورة النصر" },
    { t: "irab", ayat: "إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ ۝ وَرَأَيْتَ النَّاسَ يَدْخُلُونَ فِي دِينِ اللَّهِ أَفْوَاجًا", src: "النصر: ١–٢", kata: [
      { w: "إِذَا", h: "bina", id: "Alat syarat **ghair jazimah** (tidak menjazm), zharf untuk masa depan.", ar: "أداة شرط غير جازمة، ظرف لما يستقبل من الزمان." },
      { w: "جَاءَ", h: "bina", id: "Madhi mabni 'alal-fath.", ar: "فعل ماض مبني على الفتح." },
      { w: "نَصْرُ", h: "raf", id: "**Fa'il** marfu' (dari marfu'at), mudhaf.", ar: "فاعل مرفوع، وهو مضاف." },
      { w: "اللَّهِ", h: "jar", id: "Mudhaf ilaih — dari majrurat.", ar: "مضاف إليه مجرور." },
      { w: "وَالْفَتْحُ", h: "raf", id: "**Syahid**: waw 'athaf + *al-fathu* **ma'thuf marfu'** — di-'athaf-kan kepada *nashru* (bukan kepada *Allah*), maka marfu'.", ar: "الواو حرف عطف، والفتح معطوف على «نصر» مرفوع." },
      { w: "وَ", h: "bina", id: "Waw 'athaf — **'athaf jumlah 'ala jumlah** (kalimat kepada kalimat).", ar: "حرف عطف، وهنا عطف جملة على جملة." },
      { w: "رَأَيْتَ", h: "bina", id: "*Ra'a*: madhi mabni 'alas-sukun (bersambung ta' fa'il); ta': dhamir mabni 'alal-fath *fi mahalli raf'* fa'il.", ar: "رأى فعل ماض مبني على السكون لاتصاله بتاء الفاعل، والتاء في محل رفع فاعل." },
      { w: "النَّاسَ", h: "nas", id: "Maf'ul bih — dari manshubat.", ar: "مفعول به منصوب." },
      { w: "يَدْخُلُونَ", h: "raf", id: "Al-af'al al-khamsah — marfu' dengan **tsubut an-nun**; waw fa'il.", ar: "فعل مضارع مرفوع بثبوت النون، والواو فاعل." },
      { w: "فِي", h: "bina", id: "Huruf jar mabni 'alas-sukun.", ar: "حرف جر مبني على السكون." },
      { w: "دِينِ", h: "jar", id: "Majrur oleh huruf jar.", ar: "اسم مجرور." },
      { w: "اللَّهِ", h: "jar", id: "Mudhaf ilaih.", ar: "مضاف إليه." },
      { w: "أَفْوَاجًا", h: "nas", id: "Bagaimana mereka masuk? Berbondong-bondong → **hal** manshub.", ar: "حال منصوب وعلامة نصبه الفتحة." }
    ] },
    { t: "irab", ayat: "فَسَبِّحْ بِحَمْدِ رَبِّكَ وَاسْتَغْفِرْهُ ۚ إِنَّهُ كَانَ تَوَّابًا", src: "النصر: ٣", kata: [
      { w: "فَـ", h: "bina", id: "Fa' yang masuk pada **jawab syarat** *idza*.", ar: "الفاء واقعة في جواب الشرط." },
      { w: "سَبِّحْ", h: "bina", id: "Fi'il amr mabni 'alas-sukun; fa'il mustatir *anta*.", ar: "فعل أمر مبني على السكون، والفاعل مستتر تقديره أنت." },
      { w: "بِحَمْدِ", h: "jar", id: "Ba' jar mabni 'alal-kasr + *hamdi* majrur.", ar: "الباء حرف جر، وحمد اسم مجرور." },
      { w: "رَبِّكَ", h: "jar", id: "*Rabbi*: mudhaf ilaih; *ka*: dhamir mabni 'alal-fath *fi mahalli jarr* mudhaf ilaih.", ar: "رب مضاف إليه، والكاف ضمير في محل جر مضاف إليه." },
      { w: "وَ", h: "bina", id: "**Syahid**: waw 'athaf — 'athaf jumlah 'ala jumlah.", ar: "الواو حرف عطف، عطف جملة على جملة." },
      { w: "اسْتَغْفِرْهُ", h: "bina", id: "Empat kata: (waw), fi'il amr *istaghfir* mabni 'alas-sukun, fa'il mustatir *anta*, dan *hu* dhamir *fi mahalli nashb* maf'ul bih.", ar: "استغفر فعل أمر مبني على السكون، والفاعل مستتر، والهاء ضمير في محل نصب مفعول به." },
      { w: "إِنَّهُ", h: "bina", id: "*Inna*: huruf taukid & nashab mabni 'alal-fath; *hu*: dhamir mabni 'alad-dhamm ***fi mahalli nashb* isim inna**.", ar: "إن حرف توكيد ونصب، والهاء ضمير في محل نصب اسم إن." },
      { w: "كَانَ", h: "bina", id: "Fi'il madhi **naqish** mabni 'alal-fath; isimnya dhamir mustatir *huwa*.", ar: "فعل ماض ناقص مبني على الفتح، واسمها ضمير مستتر تقديره هو." },
      { w: "تَوَّابًا", h: "nas", id: "**Khabar kana** manshub. Jumlah *kana* + isim + khabarnya ***fi mahalli raf'* khabar inna**.", ar: "خبر كان منصوب، وجملة كان واسمها وخبرها في محل رفع خبر إن." }
    ] },
    { t: "ringkasan", item: [
      { id: "Tawabi' mengikuti kata sebelumnya dalam rafa', nashab, jarr, dan jazm; ada empat: na't, 'athaf, taukid, badal.", ar: "التوابع أربعة." },
      { id: "Na't: tabi' penjelas sifat; boleh lebih dari satu (*kisun shaghirun aswadu*).", ar: "النعت يبين صفة متبوعه." },
      { id: "'Athaf: tabi' yang diantarai huruf 'athaf; ma'thuf mengikuti ma'thuf 'alaih — termasuk jazm.", ar: "العطف بحرف من حروفه." },
      { id: "Huruf 'athaf: waw (muthlaq al-jam'), fa' (tartib-ta'qib), *tsumma* (tartib-tarakhi), *au* (takhyir/syak), *am* (ta'yin), *la* (menafikan dari ma'thuf), *bal* (idhrab), *lakin* (istidrak).", ar: "معاني حروف العطف." }
    ] }
  ],
  istilah: [
    { ar: "التوابع", latin: "at-tawabi'", id: "Kata pengikut", def: { id: "Kata yang mengikuti kata sebelumnya dalam i'rab: na't, 'athaf, taukid, badal.", ar: "كلمات تتبع ما قبلها في الإعراب." } },
    { ar: "النعت", latin: "an-na't", id: "Sifat", def: { id: "Tabi' yang menjelaskan sifat pada yang diikutinya.", ar: "تابع يذكر لبيان صفة في متبوعه." } },
    { ar: "المنعوت", latin: "al-man'ut", id: "Yang disifati", def: { id: "Kata yang diikuti oleh na't.", ar: "المتبوع في النعت." } },
    { ar: "العطف", latin: "al-'athf", id: "Penghubungan", def: { id: "Tabi' yang diantarai huruf 'athaf dengan yang diikutinya.", ar: "التابع الذي يتوسط بينه وبين متبوعه حرف عطف." } },
    { ar: "المعطوف", latin: "al-ma'thuf", id: "Yang dihubungkan", def: { id: "Kata setelah huruf 'athaf.", ar: "ما بعد حرف العطف." } },
    { ar: "المعطوف عليه", latin: "al-ma'thuf 'alaih", id: "Yang dihubungi", def: { id: "Kata sebelum huruf 'athaf.", ar: "ما قبل حرف العطف." } },
    { ar: "مطلق الجمع", latin: "muthlaq al-jam'", id: "Sekadar mengumpulkan", def: { id: "Makna waw: tidak menunjukkan urutan.", ar: "معنى الواو." } },
    { ar: "الترتيب مع التعقيب", latin: "at-tartib ma'a at-ta'qib", id: "Berurutan langsung", def: { id: "Makna *fa'*.", ar: "معنى الفاء." } },
    { ar: "الترتيب مع التراخي", latin: "at-tartib ma'a at-tarakhi", id: "Berurutan berjeda", def: { id: "Makna *tsumma*.", ar: "معنى ثم." } },
    { ar: "الإضراب", latin: "al-idhrab", id: "Peralihan", def: { id: "Makna *bal*: *lam yankasir al-qalamu bal ad-dawatu*.", ar: "معنى بل." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tawabi' ada…", ar: "التوابع…" }, o: [{ id: "Dua", ar: "اثنان" }, { id: "Tiga", ar: "ثلاثة" }, { id: "Empat", ar: "أربعة" }, { id: "Enam", ar: "ستة" }], j: 2 },
      { q: { id: "Na't adalah tabi' yang…", ar: "النعت تابع…" }, o: [{ id: "Diantarai huruf 'athaf", ar: "يتوسطه حرف عطف" }, { id: "Menjelaskan sifat yang diikutinya", ar: "يبين صفة متبوعه" }, { id: "Menghilangkan dugaan", ar: "يزيل التوهم" }, { id: "Menggantikan yang sebelumnya", ar: "يحل محله" }], j: 1 },
      { q: { id: "*Marartu bi Zaidin al-mujtahidi* — *al-mujtahidi* majrur karena…", ar: "«المجتهدِ» مجرور لأن…" }, o: [{ id: "Mudhaf ilaih", ar: "مضاف إليه" }, { id: "Man'utnya majrur", ar: "المنعوت مجرور" }, { id: "Didahului huruf jar", ar: "سبق بحرف جر" }, { id: "Ia hal", ar: "حال" }], j: 1 },
      { q: { id: "Dalam *dha'a li kisun shaghirun aswadu*, terdapat…", ar: "في الجملة…" }, o: [{ id: "Satu na't", ar: "نعت واحد" }, { id: "Dua na't", ar: "نعتان" }, { id: "Dua ma'thuf", ar: "معطوفان" }, { id: "Badal", ar: "بدل" }], j: 1 },
      { q: { id: "*Lam yahdhur Khalidun au yursil rasulan* — *yursil* majzum karena…", ar: "«يرسلْ» مجزوم لأنه…" }, o: [{ id: "Didahului *au*", ar: "سبق بأو" }, { id: "Di-'athaf-kan pada fi'il majzum", ar: "معطوف على مجزوم" }, { id: "Jawab syarat", ar: "جواب الشرط" }, { id: "Fi'il amr", ar: "فعل أمر" }], j: 1 },
      { q: { id: "Huruf 'athaf bermakna *tartib + ta'qib* adalah…", ar: "الترتيب مع التعقيب…" }, o: [{ ar: "الْوَاوُ" }, { ar: "الْفَاءُ" }, { ar: "ثُمَّ" }, { ar: "أَوْ" }], j: 1 },
      { q: { id: "*Al-qalama kasarta am ad-dawata?* — *am* untuk…", ar: "«أم» هنا…" }, o: [{ id: "Syak", ar: "الشك" }, { id: "Menentukan salah satu dari dua", ar: "تعيين أحد الشيئين" }, { id: "Idhrab", ar: "الإضراب" }, { id: "Muthlaq al-jam'", ar: "مطلق الجمع" }], j: 1 },
      { q: { id: "*Inkasara al-qalamu la ad-dawatu* — artinya…", ar: "المعنى…" }, o: [{ id: "Keduanya pecah", ar: "انكسرا" }, { id: "Pena pecah, tempat tinta tidak", ar: "القلم دون الدواة" }, { id: "Tempat tinta pecah, pena tidak", ar: "الدواة دون القلم" }, { id: "Tidak ada yang pecah", ar: "لم ينكسر شيء" }], j: 1 },
      { q: { id: "{إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ} — *al-fathu* di-'athaf-kan kepada…", ar: "«الفتح» معطوف على…" }, o: [{ ar: "اللَّهِ" }, { ar: "نَصْرُ" }, { ar: "جَاءَ" }, { ar: "إِذَا" }], j: 1 },
      { q: { id: "{إِنَّهُ كَانَ تَوَّابًا} — khabar *inna* adalah…", ar: "خبر إن…" }, o: [{ ar: "تَوَّابًا" }, { id: "Jumlah *kana* + isim + khabarnya", ar: "جملة كان واسمها وخبرها" }, { id: "Ha'", ar: "الهاء" }, { id: "Dhamir mustatir", ar: "الضمير المستتر" }], j: 1 }
    ],
    bs: [
      { t: { id: "Tawabi' juga mengikuti dalam jazm.", ar: "تتبع في الجزم." }, j: true },
      { t: { id: "Na't tidak boleh berulang dalam satu kalimat.", ar: "لا يتكرر النعت." }, j: false, b: { id: "Boleh: *kisun shaghirun aswadu*.", ar: "قد يتكرر." } },
      { t: { id: "Waw 'athaf menunjukkan urutan waktu.", ar: "الواو للترتيب." }, j: false, b: { id: "Waw untuk *muthlaq al-jam'*.", ar: "لمطلق الجمع." } },
      { t: { id: "*Bal* bermakna idhrab.", ar: "بل للإضراب." }, j: true },
      { t: { id: "*Au* bermakna takhyir atau syak.", ar: "أو للتخيير أو الشك." }, j: true },
      { t: { id: "*Afwajan* dalam Surah An-Nashr adalah na't.", ar: "«أفواجًا» نعت." }, j: false, b: { id: "Hal manshub.", ar: "حال." } },
      { t: { id: "Waw dalam {وَاسْتَغْفِرْهُ} meng-'athaf-kan jumlah kepada jumlah.", ar: "عطف جملة على جملة." }, j: true },
      { t: { id: "*Idza* dalam {إِذَا جَاءَ} adalah alat syarat yang menjazm.", ar: "إذا جازمة." }, j: false, b: { id: "*Ghair jazimah*.", ar: "غير جازمة." } }
    ],
    jodoh: [
      { a: { ar: "الْوَاوُ" }, b: { id: "Muthlaq al-jam'", ar: "مطلق الجمع" } },
      { a: { ar: "الْفَاءُ" }, b: { id: "Tartib + ta'qib", ar: "الترتيب مع التعقيب" } },
      { a: { ar: "ثُمَّ" }, b: { id: "Tartib + tarakhi", ar: "الترتيب مع التراخي" } },
      { a: { ar: "أَوْ" }, b: { id: "Takhyir/syak", ar: "التخيير أو الشك" } },
      { a: { ar: "أَمْ" }, b: { id: "Ta'yin", ar: "التعيين" } },
      { a: { ar: "بَلْ" }, b: { id: "Idhrab", ar: "الإضراب" } },
      { a: { ar: "لَكِنْ" }, b: { id: "Istidrak", ar: "الاستدراك" } }
    ],
    isian: [
      { t: { id: "Tawabi' dirafa' karena rafa'-nya, dinashab karena nashab-nya, dijarr karena jarr-nya, dan dijazm karena ______-nya.", ar: "وتجزم بـ______ه." }, j: { id: "jazm", ar: "جزم" }, x: [{ id: "bina'", ar: "بناء" }, { id: "tanwin", ar: "تنوين" }, { id: "waqf", ar: "وقف" }] },
      { t: { id: "Kata sebelum huruf 'athaf disebut ma'thuf ______.", ar: "ما قبل حرف العطف: المعطوف ______." }, j: { id: "'alaih", ar: "عليه" }, x: [{ id: "ilaih", ar: "إليه" }, { id: "bih", ar: "به" }, { id: "minhu", ar: "منه" }] },
      { t: { id: "*La* sebagai huruf 'athaf menetapkan hukum bagi ma'thuf 'alaih dan ______ dari ma'thuf.", ar: "«لا» تثبت الحكم للمعطوف عليه و______ عن المعطوف." }, j: { id: "menafikannya", ar: "تنفيه" }, x: [{ id: "menetapkannya", ar: "تثبته" }, { id: "menundanya", ar: "تؤخره" }, { id: "mengulanginya", ar: "تكرره" }] },
      { t: { id: "*Tawwaban* dalam {إِنَّهُ كَانَ تَوَّابًا} adalah khabar ______.", ar: "«توابًا» خبر ______." }, j: { id: "kana", ar: "كان" }, x: [{ id: "inna", ar: "إن" }, { id: "mubtada'", ar: "المبتدأ" }, { id: "laisa", ar: "ليس" }] }
    ],
    pilah: { t: { id: "Kata utama: na't atau ma'thuf?", ar: "نعت أم معطوف؟" },
      kategori: [{ id: "Na't", ar: "نعت" }, { id: "Ma'thuf", ar: "معطوف" }],
      item: [
        { t: { id: "*Al-mujtahidu* — جَاءَ زَيْدٌ الْمُجْتَهِدُ", ar: "المجتهد" }, k: 0 },
        { t: { id: "*Jahilin* — مِنْ صَدِيقٍ جَاهِلٍ", ar: "جاهل" }, k: 0 },
        { t: { id: "*Al-'adilu* — الْإِمَامُ الْعَادِلُ", ar: "العادل" }, k: 0 },
        { t: { id: "*Aswadu* — كِيسٌ صَغِيرٌ أَسْوَدُ", ar: "أسود" }, k: 0 },
        { t: { id: "*'Amrun* — قَامَ زَيْدٌ وَعَمْرٌو", ar: "عمرو" }, k: 1 },
        { t: { id: "*Ad-dawatu* — انْكَسَرَ الْقَلَمُ ثُمَّ الدَّوَاةُ", ar: "الدواة" }, k: 1 },
        { t: { id: "*Al-fathu* — نَصْرُ اللهِ وَالْفَتْحُ", ar: "الفتح" }, k: 1 },
        { t: { id: "*Yursil* — لَمْ يَحْضُرْ خَالِدٌ أَوْ يُرْسِلْ", ar: "يرسل" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف التوابع واذكر أنواعها.", id: "Definisikan tawabi' dan sebutkan macamnya." }, j: { ar: "كلمات تتبع ما قبلها في الإعراب فترفع برفعه وتنصب بنصبه وتجر بجره وتجزم بجزمه، وهي: النعت والعطف والتوكيد والبدل.", id: "Kata yang **mengikuti kata sebelumnya dalam i'rab** (rafa', nashab, jarr, jazm): **na't, 'athaf, taukid, badal**." } },
    { t: { ar: "عرِّف النعت، ومثِّل له في الرفع والنصب والجر.", id: "Definisikan na't dan beri contoh dalam rafa', nashab, jarr." }, j: { ar: "تابع يذكر لبيان صفة في متبوعه. جاء زيدٌ المجتهدُ، أكرمت زيدًا المجتهدَ، مررت بزيدٍ المجتهدِ.", id: "Tabi' yang menjelaskan sifat yang diikutinya: *ja'a Zaidun al-mujtahidu; akramtu Zaidan al-mujtahida; marartu bi Zaidin al-mujtahidi*." } },
    { t: { ar: "عرِّف العطف، وبيِّن المعطوف والمعطوف عليه في: لم يحضرْ خالدٌ أو يرسلْ رسولًا.", id: "Definisikan 'athaf, lalu tentukan ma'thuf dan ma'thuf 'alaih dalam *lam yahdhur Khalidun au yursil rasulan*." }, j: { ar: "التابع الذي يتوسط بينه وبين متبوعه أحد حروف العطف. المعطوف عليه: يحضرْ، وحرف العطف: أو، والمعطوف: يرسلْ مجزوم لأنه معطوف على مجزوم.", id: "Tabi' yang diantarai huruf 'athaf. Ma'thuf 'alaih: *yahdhur*; huruf: *au*; ma'thuf: *yursil* — majzum karena mengikuti fi'il majzum." } },
    { t: { ar: "اذكر حروف العطف ومعانيها مع مثال الكتاب.", id: "Sebutkan huruf-huruf 'athaf dan maknanya dengan contoh dari kitab." }, j: { ar: "الواو لمطلق الجمع: انكسر القلم والدواة. الفاء للترتيب والتعقيب: فالدواة. ثم للترتيب والتراخي: ثم الدواة. أو للتخيير أو الشك. أم لتعيين أحد الشيئين: القلمَ كسرتَ أم الدواةَ؟ لا تثبت الحكم للمعطوف عليه وتنفيه عن المعطوف: لا الدواة. بل للإضراب: لم ينكسر القلم بل الدواة. لكن للاستدراك.", id: "Waw (muthlaq al-jam'), fa' (tartib-ta'qib), *tsumma* (tartib-tarakhi), *au* (takhyir/syak), *am* (ta'yin), *la* (menafikan dari ma'thuf), *bal* (idhrab), *lakin* (istidrak) — semuanya dengan contoh *al-qalam wad-dawah*." } },
    { t: { ar: "أعرب: ﴿إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ﴾.", id: "I'rablah {إِذَا جَاءَ نَصْرُ اللَّهِ وَالْفَتْحُ}." }, j: { ar: "إذا: أداة شرط غير جازمة ظرف لما يستقبل من الزمان. جاء: فعل ماض مبني على الفتح. نصر: فاعل مرفوع وهو مضاف. الله: مضاف إليه مجرور. الواو: حرف عطف مبني على الفتح. الفتح: معطوف على نصر مرفوع وعلامة رفعه الضمة.", id: "*Idza*: alat syarat ghair jazimah, zharf masa depan. *Ja'a*: madhi mabni 'alal-fath. *Nashru*: fa'il marfu', mudhaf. *Allahi*: mudhaf ilaih. Waw: huruf 'athaf. *Al-fathu*: ma'thuf kepada *nashru*, marfu'." } }
  ]
});
