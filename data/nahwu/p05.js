/* Nahwu — Pertemuan 5: I'rab Fi'il Mudhari' (Nawashib, Jawazim, Rafa') */
Kuliah.pertemuan("nahwu", {
  no: 5, motif: "amil", tema: 6, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/220",
  bab: { id: "I'rab fi'il mudhari'", ar: "إعراب المضارع" },
  judul: { id: "I'rab Fi'il Mudhari': Kapan Manshub, Majzum, dan Marfu'", ar: "إعراب الفعل المضارع: نصبه وجزمه ورفعه" },
  ringkas: {
    id: "Fi'il mudhari' **manshub** bila didahului salah satu dari empat *nawashib* (*an, lan, idzan, kay*) — dengan syarat untuk *idzan* dan *kay* — atau oleh *an mudhmarah*; **majzum** di 16 tempat: empat alat yang menjazm satu fi'il (*lam, lamma, lam amr, la nahiyah*) dan 12 alat syarat yang menjazm dua fi'il; serta **marfu'** bila bebas dari nashib dan jazim. Tathbiq: Surah Al-Muthaffifin.",
    ar: "المضارع ينصب بأن ولن وإذن وكي وبأن المضمرة، ويجزم في ستة عشر موضعًا: أربعة تجزم فعلًا واحدًا، واثنتا عشرة أداة تجزم فعلين، ويرفع إذا تجرد من الناصب والجازم، مع التطبيق على سورة المطففين."
  },
  tujuan: [
    { id: "Menyebut empat nawashib beserta syarat *idzan* dan *kay*.", ar: "ذكر النواصب الأربعة وشروط إذن وكي." },
    { id: "Memahami *an mudhmarah* (jawazan dan wujuban).", ar: "فهم أن المضمرة جوازًا ووجوبًا." },
    { id: "Menyebut alat jazm satu fi'il dan dua fi'il.", ar: "ذكر الجوازم لفعل واحد ولفعلين." },
    { id: "Menentukan kapan mudhari' marfu'.", ar: "معرفة متى يرفع المضارع." }
  ],
  isi: [
    { t: "pembuka", id: "Fi'il mudhari' hanya memiliki tiga kemungkinan: **manshub, majzum, atau marfu'**. Kuncinya: lihat apa yang mendahuluinya.", ar: "الفعل المضارع إما منصوب أو مجزوم أو مرفوع، فينبغي أن يعرف في أي تركيب يكون كذلك." },
    { t: "judul", id: "Pertama: Nashab Fi'il Mudhari'", ar: "أولًا: نصب المضارع" },
    { t: "p", id: "Ada alat yang **menashab dengan sendirinya**: ***an, lan, idzan, kay***. Ada pula yang menashab melalui ***an mudhmarah*** (an yang disembunyikan): *lam ta'lil*, *hatta*, *lam juhud*, dan lainnya.", ar: "من النواصب ما ينصب بنفسه: أن ولن وإذن وكي، ومنها ما ينصب بأن المضمرة: كلام التعليل وحتى ولام الجحود." },
    { t: "poin", item: [
      { ikon: "key", judul: { ar: "أَنْ" }, id: "*Harf mashdari* mabni 'alas-sukun. *Yasurruni an tanjaha* — aku senang engkau lulus. {وَاللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ} [An-Nisa': 27]: *yatuba* manshub dengan fathah zhahirah.", ar: "يَسُرُّنِي أَنْ تَنْجَحَ. ﴿وَاللَّهُ يُرِيدُ أَن يَتُوبَ عَلَيْكُمْ﴾." },
      { ikon: "key", judul: { ar: "لَنْ" }, id: "*Lan yasuda al-kaslan* — pemalas tidak akan memimpin. *Lan yadhi'a haqqun wara'ahu muthalib* — hak tak akan hilang selama ada yang menuntutnya (bukan *lan yadhi'u*).", ar: "لَنْ يَسُودَ الْكَسْلَانُ. لَنْ يَضِيعَ حَقٌّ وَرَاءَهُ مُطَالِبٌ." },
      { ikon: "key", judul: { ar: "إِذَنْ" }, id: "Jawaban bagi yang berkata \"Aku akan bersungguh-sungguh\": ***Idzan tablugha al-majda*** — kalau begitu engkau akan meraih kemuliaan.", ar: "جوابًا لمن قال: سأجتهد: إِذَنْ تَبْلُغَ الْمَجْدَ." },
      { ikon: "key", judul: { ar: "كَيْ" }, id: "*Ji'tu kay ata'allama* — aku datang agar belajar. *Tasallahu bil-iman kay tashunu anfusakum* — *tashunu* manshub dengan hadzf an-nun (al-af'al al-khamsah).", ar: "جِئْتُ كَيْ أَتَعَلَّمَ. تَسَلَّحُوا بِالْإِيمَانِ كَيْ تَصُونُوا أَنْفُسَكُمْ." }
    ] },
    { t: "banding", judul: { id: "Syarat beramalnya «idzan» dan «kay»", ar: "شروط إذن وكي" },
      kiri: { judul: { ar: "إِذَنْ" }, ikon: "flag", warna: "blue", poin: [
        { id: "**Di awal jawaban** (*mushaddarah*). *Tablughu al-majda idzan* → fi'il marfu'.", ar: "أن تكون مصدَّرة في أول الجواب." },
        { id: "**Tidak dipisah** dari fi'ilnya, kecuali oleh sumpah: *idzan wallahi tablugha al-majda*.", ar: "ألا يفصل بينها وبين الفعل فاصل إلا القسم." } ] },
      kanan: { judul: { ar: "كَيْ" }, ikon: "flag", warna: "green", poin: [
        { id: "Didahului **lam ta'lil**, baik terucap maupun diperkirakan: *ji'tu likay ata'allama* = *ji'tu kay ata'allama*.", ar: "أن تتقدم عليها لام التعليل لفظًا أو تقديرًا." } ] } },
    { t: "catatan", gaya: "info", judul: { id: "An mudhmarah", ar: "أن المضمرة" }, id: "{وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ} — lam di sini **lam juhud** (didahului *ma kana*); *yu'adzdziba* manshub oleh ***an* yang wajib disembunyikan**. Adapun setelah **lam ta'lil**, *an* boleh disembunyikan (jawazan).", ar: "﴿وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ﴾: اللام لام الجحود، والفعل منصوب بأن المضمرة وجوبًا. وأما بعد لام التعليل فأن مضمرة جوازًا." },

    { t: "judul", id: "Kedua: Jazm Fi'il Mudhari'", ar: "ثانيًا: جزم المضارع" },
    { t: "sub", id: "A. Alat yang menjazm satu fi'il", ar: "ما يجزم فعلًا واحدًا" },
    { t: "tabel", kolom: [{ id: "Alat", ar: "الأداة" }, { id: "Contoh", ar: "المثال" }, { id: "Keterangan", ar: "الإعراب" }],
      baris: [
        [{ ar: "لَمْ" }, { ar: "لَمْ أَخُنْ عَهْدًا، وَلَمْ أُخْلِفْ وُعُودًا" }, { id: "*Akhun* asalnya *akhunu* (أَخُونُ); setelah dijazm, nun menjadi sukun sehingga bertemu dua sukun (waw & nun), maka waw dibuang → *akhun*.", ar: "أخنْ: مجزوم بالسكون وحذفت الواو لالتقاء الساكنين." }],
        [{ ar: "لَمَّا" }, { ar: "لَمَّا يُثْمِرْ بُسْتَانُنَا" }, { id: "Kebun kami belum berbuah", ar: "يثمرْ: مجزوم بلما وعلامة جزمه السكون" }],
        [{ id: "Lam amr", ar: "لام الأمر" }, { ar: "لِيَلْزَمْ كُلُّ إِنْسَانٍ حَدَّهُ" }, { id: "Lam amr mabni 'alal-kasr", ar: "يلزمْ: مجزوم بلام الأمر" }],
        [{ id: "La nahiyah", ar: "لا الناهية" }, { ar: "لَا تَيْأَسْ مِنْ رَحْمَةِ اللهِ" }, { id: "Jangan berputus asa dari rahmat Allah", ar: "تيأسْ: مجزوم بلا الناهية" }]
      ] },
    { t: "sub", id: "B. Alat yang menjazm dua fi'il (fi'il syarat & jawab syarat)", ar: "ما يجزم فعلين: فعل الشرط وجوابه" },
    { t: "tabel", kolom: [{ id: "Alat", ar: "الأداة" }, { id: "Contoh", ar: "المثال" }, { id: "Makna", ar: "المعنى" }],
      baris: [
        [{ ar: "إِنْ" }, { ar: "إِنْ تَصْبِرْ تَنَلْ" }, { id: "Jika engkau sabar, engkau meraih", ar: "" }],
        [{ ar: "إِذْمَا" }, { ar: "إِذْمَا تَتَعَلَّمْ تَتَقَدَّمْ" }, { id: "Jika engkau belajar, engkau maju", ar: "" }],
        [{ ar: "مَنْ" }, { ar: "مَنْ يَبْحَثْ يَجِدْ" }, { id: "Siapa mencari, ia menemukan", ar: "" }],
        [{ ar: "مَا" }, { ar: "مَا تُحَصِّلْ فِي الصِّغَرِ يَنْفَعْكَ فِي الْكِبَرِ" }, { id: "Apa yang kau raih di masa kecil bermanfaat saat dewasa — *yanfa'ka* (bukan *yanfa'uka*)", ar: "" }],
        [{ ar: "مَهْمَا" }, { ar: "مَهْمَا تُبْطِنْ تُظْهِرْهُ الْأَيَّامُ" }, { id: "Apa pun yang kau sembunyikan, hari-hari akan menampakkannya", ar: "" }],
        [{ ar: "مَتَى" }, { ar: "مَتَى يَصْلُحْ قَلْبُكَ تَصْلُحْ جَوَارِحُكَ" }, { id: "Kapan hatimu baik, anggota badanmu baik", ar: "" }],
        [{ ar: "أَيَّانَ" }, { ar: "أَيَّانَ تَحْسُنْ سَرِيرَتُكَ تُحْمَدْ سِيرَتُكَ" }, { id: "Kapan pun batinmu baik, perilakumu dipuji", ar: "" }],
        [{ ar: "أَيْنَ" }, { ar: "أَيْنَ تَتَوَجَّهْ تُصَادِفْ رِزْقَكَ" }, { id: "Ke mana pun engkau menuju, engkau temui rezekimu", ar: "" }],
        [{ ar: "أَنَّى" }, { ar: "أَنَّى يَذْهَبْ ذُو الْمَالِ يَجِدْ رَفِيقًا" }, { id: "Ke mana pun hartawan pergi, ia dapat teman", ar: "" }],
        [{ ar: "حَيْثُمَا" }, { ar: "حَيْثُمَا تَسْتَقِمْ يُقَدِّرْ لَكَ اللهُ نَجَاحًا" }, { id: "Di mana pun engkau istiqamah, Allah takdirkan sukses", ar: "" }],
        [{ ar: "كَيْفَمَا" }, { ar: "كَيْفَمَا تَكُنْ يَكُنْ قَرِينُكَ" }, { id: "Bagaimana engkau, begitulah temanmu", ar: "" }],
        [{ ar: "أَيّ" }, { ar: "أَيُّ إِنْسَانٍ يَحْتَرِمْهُ الرَّئِيسُ يَحْتَرِمْهُ الْمَرْءُوسُ" }, { id: "Siapa pun yang dihormati pemimpin, dihormati bawahan", ar: "" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "16 tempat jazm", ar: "ستة عشر موضعًا" }, id: "Mudhari' dijazm di **16 tempat**: **4** alat menjazm satu fi'il (*lam, lamma, lam amr, la nahiyah*) + **12** alat syarat menjazm dua fi'il. *In* dan yang sesudahnya disebut **adawat asy-syarth**.", ar: "يجزم المضارع في ستة عشر موضعًا: أربعة تجزم فعلًا، واثنتا عشرة تجزم فعلين، وتسمى أدوات الشرط." },

    { t: "judul", id: "Ketiga: Rafa' Fi'il Mudhari'", ar: "ثالثًا: رفع المضارع" },
    { t: "p", id: "**Asal fi'il mudhari' adalah marfu'.** Ia marfu' selama **tidak didahului nashib maupun jazim**. Ia keluar dari asal ini hanya karena alat nashab atau jazm.", ar: "يرفع المضارع إذا تجرد من الناصب والجازم، وهذا هو الأصل." },
    { t: "contoh", sorot: [
      { label: { ar: "يُخَفِّفُ اللهُ عَنْكُمْ" }, warna: "blue", id: "Allah meringankan kalian — *yukhaffifu* marfu' dengan dhammah zhahirah.", ar: "مرفوع بالضمة الظاهرة لأنه لم يسبق بناصب ولا جازم." },
      { label: { ar: "يُثْمِرُ بُسْتَانُنَا" }, warna: "green", id: "Kebun kami berbuah (bandingkan: *lamma yutsmir*).", ar: "يثمرُ: مرفوع." },
      { label: { ar: "يَلْزَمُ الْإِنْسَانُ حَدَّهُ" }, warna: "gold", id: "Manusia menetapi batasnya (bandingkan: *li-yalzam*).", ar: "يلزمُ: مرفوع." }
    ] },
    { t: "cek", q: { id: "*Ma tuhashshil fish-shighari yanfa'ka* — mengapa *yanfa'ka* sukun?", ar: "لماذا «ينفعْك» بالسكون؟" }, o: [{ id: "Karena mabni", ar: "لأنه مبني" }, { id: "Karena jawab syarat yang majzum", ar: "لأنه جواب الشرط مجزوم" }, { id: "Karena didahului *lam*", ar: "لأنه سبق بلم" }, { id: "Karena waqf", ar: "للوقف" }], j: 1, b: { id: "*Ma* syarthiyyah menjazm dua fi'il: *tuhashshil* (syarat) dan *yanfa'* (jawab).", ar: "ما الشرطية تجزم فعلين." } },

    { t: "judul", id: "Tathbiq: Surah Al-Muthaffifin (1–6)", ar: "التطبيق: سورة المطففين" },
    { t: "irab", ayat: "وَيْلٌ لِّلْمُطَفِّفِينَ ۝ الَّذِينَ إِذَا اكْتَالُوا عَلَى النَّاسِ يَسْتَوْفُونَ ۝ وَإِذَا كَالُوهُمْ أَو وَّزَنُوهُمْ يُخْسِرُونَ", src: "المطففين: ١–٣", kata: [
      { w: "وَيْلٌ", h: "raf", id: "Isim — bertanwin dan bisa menerima *al*.", ar: "اسم؛ لأنه منون ويقبل أل." },
      { w: "لِـ", h: "bina", id: "Lam jar mabni 'alal-kasr.", ar: "حرف جر مبني على الكسر." },
      { w: "الْمُطَفِّفِينَ", h: "jar", id: "Majrur oleh lam dengan **ya'** (tanda pengganti) karena jamak mudzakkar salim.", ar: "اسم مجرور باللام وعلامة جره الياء لأنه جمع مذكر سالم." },
      { w: "الَّذِينَ", h: "bina", id: "Isim maushul mabni 'alal-fath.", ar: "اسم موصول مبني على الفتح." },
      { w: "إِذَا", h: "bina", id: "Zharf mabni 'alas-sukun.", ar: "ظرف مبني على السكون." },
      { w: "اكْتَالُوا", h: "bina", id: "Fi'il madhi **mabni 'alad-dhamm** karena bersambung waw jama'ah; waw = dhamir mabni 'alas-sukun *fi mahalli raf'* fa'il; alif fariqah.", ar: "فعل ماض مبني على الضم لاتصاله بواو الجماعة، والواو فاعل، والألف فارقة." },
      { w: "عَلَى", h: "bina", id: "Huruf jar mabni 'alas-sukun.", ar: "حرف جر مبني على السكون." },
      { w: "النَّاسِ", h: "jar", id: "Isim majrur (didahului huruf jar dan ber-*al*).", ar: "اسم مجرور." },
      { w: "يَسْتَوْفُونَ", h: "raf", id: "Mudhari' **tidak didahului nashib/jazim** → marfu' dengan **tsubut an-nun**.", ar: "فعل مضارع مرفوع بثبوت النون لأنه لم يسبق بناصب ولا جازم." },
      { w: "وَإِذَا", h: "bina", id: "Waw 'athaf mabni + *idza* zharf mabni.", ar: "الواو حرف عطف، وإذا ظرف مبني." },
      { w: "كَالُوهُمْ", h: "bina", id: "Madhi mabni 'alad-dhamm + waw (fa'il) + *hum* dhamir mabni 'alas-sukun *fi mahalli nashb* maf'ul bih.", ar: "فعل ماض مبني على الضم، والواو فاعل، وهم ضمير في محل نصب مفعول به." },
      { w: "أَوْ", h: "bina", id: "Huruf 'athaf.", ar: "حرف عطف." },
      { w: "وَزَنُوهُمْ", h: "bina", id: "Tiga kata: *wazana* (fi'il), waw jama'ah (fa'il), *hum* (maf'ul bih).", ar: "وزن فعل، والواو فاعل، وهم مفعول به." },
      { w: "يُخْسِرُونَ", h: "raf", id: "Marfu' dengan tsubut an-nun; waw fa'il.", ar: "فعل مضارع مرفوع بثبوت النون، والواو فاعل." }
    ] },
    { t: "irab", ayat: "أَلَا يَظُنُّ أُولَٰئِكَ أَنَّهُم مَّبْعُوثُونَ ۝ لِيَوْمٍ عَظِيمٍ ۝ يَوْمَ يَقُومُ النَّاسُ لِرَبِّ الْعَالَمِينَ", src: "المطففين: ٤–٦", kata: [
      { w: "أَلَا", h: "bina", id: "Dua kata: hamzah istifham + *la* nafi — keduanya huruf.", ar: "الهمزة حرف استفهام، ولا حرف نفي." },
      { w: "يَظُنُّ", h: "raf", id: "Mudhari' marfu' — tidak didahului nashib/jazim (*la* nafi tidak menjazm).", ar: "فعل مضارع مرفوع لأنه لم يسبق بناصب ولا جازم." },
      { w: "أُولَٰئِكَ", h: "bina", id: "*Ula'i*: isim isyarah mabni 'alal-kasr; *kaf*: huruf khithab.", ar: "أولاء اسم إشارة مبني على الكسر، والكاف حرف خطاب." },
      { w: "أَنَّهُمْ", h: "bina", id: "*Anna* (huruf) + *hum* dhamir mabni *fi mahalli nashb* isim *anna*.", ar: "أنّ حرف، وهم ضمير متصل مبني على السكون في محل نصب اسم أنّ." },
      { w: "مَّبْعُوثُونَ", h: "raf", id: "Jamak mudzakkar salim, marfu' dengan **waw** (khabar *anna*).", ar: "مرفوع بالواو نيابة عن الضمة لأنه جمع مذكر سالم." },
      { w: "لِيَوْمٍ", h: "jar", id: "Jar-majrur.", ar: "جار ومجرور." },
      { w: "عَظِيمٍ", h: "jar", id: "Isim — bertanwin dan menerima *al*.", ar: "اسم؛ لأنه منون ويقبل أل." },
      { w: "يَوْمَ", h: "nas", id: "Zharf manshub.", ar: "ظرف منصوب." },
      { w: "يَقُومُ", h: "raf", id: "Mudhari' marfu' — tidak didahului nashib/jazim.", ar: "فعل مضارع مرفوع." },
      { w: "النَّاسُ", h: "raf", id: "Isim marfu'.", ar: "اسم مرفوع." },
      { w: "لِرَبِّ", h: "jar", id: "Jar-majrur.", ar: "جار ومجرور." },
      { w: "الْعَالَمِينَ", h: "jar", id: "Majrur dengan **ya'** pengganti kasrah — *mulhaq* (dianggap seperti) jamak mudzakkar salim.", ar: "مجرور بالياء نيابة عن الكسرة لأنه ملحق بجمع المذكر السالم." }
    ] },
    { t: "ringkasan", item: [
      { id: "Nawashib dengan sendirinya: *an, lan, idzan, kay*; *idzan* & *kay* bersyarat.", ar: "النواصب بنفسها: أن، لن، إذن، كي." },
      { id: "*An mudhmarah*: wajib setelah lam juhud, boleh setelah lam ta'lil.", ar: "أن المضمرة وجوبًا بعد لام الجحود وجوازًا بعد لام التعليل." },
      { id: "Jazm satu fi'il: *lam, lamma, lam amr, la nahiyah*.", ar: "لم، لما، لام الأمر، لا الناهية." },
      { id: "Jazm dua fi'il (12): *in, idzma, man, ma, mahma, mata, ayyana, aina, anna, haitsuma, kaifama, ayy*.", ar: "إن، إذما، من، ما، مهما، متى، أيان، أين، أنى، حيثما، كيفما، أي." },
      { id: "Mudhari' marfu' bila bebas dari nashib dan jazim — itulah asalnya.", ar: "يرفع المضارع إذا تجرد من الناصب والجازم." }
    ] }
  ],
  istilah: [
    { ar: "النواصب", latin: "an-nawashib", id: "Alat penashab", def: { id: "*An, lan, idzan, kay* — menashab mudhari' dengan sendirinya.", ar: "أن ولن وإذن وكي." } },
    { ar: "أن المصدرية", latin: "an al-mashdariyyah", id: "An mashdariyyah", def: { id: "Huruf nashab yang bersama fi'ilnya bermakna mashdar.", ar: "حرف مصدري ونصب." } },
    { ar: "إذن", latin: "idzan", id: "Kalau begitu", def: { id: "Menashab bila di awal jawaban dan tidak dipisah kecuali oleh sumpah.", ar: "تنصب إذا صُدِّرت ولم يفصل بينها وبين الفعل إلا القسم." } },
    { ar: "لام التعليل", latin: "lam at-ta'lil", id: "Lam sebab", def: { id: "Wajib mendahului *kay* (terucap/diperkirakan); setelahnya *an* boleh disembunyikan.", ar: "تتقدم كي لفظًا أو تقديرًا." } },
    { ar: "لام الجحود", latin: "lam al-juhud", id: "Lam pengingkaran", def: { id: "Lam setelah *ma kana/lam yakun*; mudhari' sesudahnya manshub dengan *an* wajib tersembunyi.", ar: "ينصب بعدها المضارع بأن مضمرة وجوبًا." } },
    { ar: "الجوازم", latin: "al-jawazim", id: "Alat penjazm", def: { id: "16 alat: 4 untuk satu fi'il, 12 untuk dua fi'il.", ar: "ستة عشر: أربعة لفعل واثنتا عشرة لفعلين." } },
    { ar: "لا الناهية", latin: "la an-nahiyah", id: "La larangan", def: { id: "Menjazm satu fi'il: *la tay'as*.", ar: "تجزم فعلًا واحدًا." } },
    { ar: "فعل الشرط", latin: "fi'l asy-syarth", id: "Fi'il syarat", def: { id: "Fi'il pertama setelah alat syarat — majzum.", ar: "الفعل الأول بعد أداة الشرط." } },
    { ar: "جواب الشرط", latin: "jawab asy-syarth", id: "Jawab syarat", def: { id: "Fi'il kedua — juga majzum.", ar: "الفعل الثاني المجزوم." } },
    { ar: "الملحق بجمع المذكر", latin: "al-mulhaq bi jam' al-mudzakkar", id: "Diserupakan jamak mudzakkar", def: { id: "Seperti *al-'alamin*: di-i'rab seperti jamak mudzakkar salim.", ar: "كالعالمين يعرب إعرابه." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Alat yang menashab mudhari' dengan sendirinya adalah…", ar: "النواصب بنفسها…" }, o: [{ id: "*An, lan, idzan, kay*", ar: "أن، لن، إذن، كي" }, { id: "*Lam, lamma, la*", ar: "لم، لما، لا" }, { id: "*Inna, anna*", ar: "إن، أن" }, { id: "*Hatta, lam*", ar: "حتى، اللام" }], j: 0 },
      { q: { id: "*Tablughu al-majda idzan* — *tablughu* marfu' karena…", ar: "«تبلغُ المجد إذن» رفع لأن…" }, o: [{ id: "*Idzan* tidak di awal jawaban", ar: "إذن غير مصدرة" }, { id: "Dipisah sumpah", ar: "فصل بالقسم" }, { id: "*Idzan* huruf jazm", ar: "إذن جازمة" }, { id: "Fi'ilnya mabni", ar: "الفعل مبني" }], j: 0 },
      { q: { id: "Syarat *kay* menashab adalah…", ar: "شرط كي…" }, o: [{ id: "Di awal kalimat", ar: "التصدير" }, { id: "Didahului lam ta'lil (terucap/diperkirakan)", ar: "تقدم لام التعليل" }, { id: "Tidak dipisah sumpah", ar: "عدم الفصل" }, { id: "Bersambung nun", ar: "اتصال النون" }], j: 1 },
      { q: { id: "Dalam {وَمَا كَانَ اللَّهُ لِيُعَذِّبَهُمْ}, *yu'adzdziba* manshub oleh…", ar: "«ليعذبهم» منصوب بـ…" }, o: [{ id: "Lam ta'lil", ar: "لام التعليل" }, { id: "*An* mudhmarah wujuban setelah lam juhud", ar: "أن المضمرة وجوبًا بعد لام الجحود" }, { id: "*Kay*", ar: "كي" }, { id: "*Lan*", ar: "لن" }], j: 1 },
      { q: { id: "Alat yang menjazm **satu** fi'il adalah…", ar: "ما يجزم فعلًا واحدًا…" }, o: [{ id: "*In, man, ma*", ar: "إن، من، ما" }, { id: "*Lam, lamma, lam amr, la nahiyah*", ar: "لم، لما، لام الأمر، لا الناهية" }, { id: "*Mata, aina*", ar: "متى، أين" }, { id: "*An, lan*", ar: "أن، لن" }], j: 1 },
      { q: { id: "Jumlah alat syarat yang menjazm dua fi'il adalah…", ar: "عدد أدوات الشرط الجازمة لفعلين…" }, o: [{ id: "4", ar: "٤" }, { id: "10", ar: "١٠" }, { id: "12", ar: "١٢" }, { id: "16", ar: "١٦" }], j: 2 },
      { q: { id: "*Lam akhun 'ahdan* — waw pada *akhunu* dibuang karena…", ar: "حذفت الواو من «أخن»…" }, o: [{ id: "Mu'tal akhir", ar: "معتل الآخر" }, { id: "Bertemunya dua sukun", ar: "التقاء الساكنين" }, { id: "Al-af'al al-khamsah", ar: "الأمثلة الخمسة" }, { id: "Waqf", ar: "الوقف" }], j: 1 },
      { q: { id: "Mudhari' marfu' bila…", ar: "يرفع المضارع إذا…" }, o: [{ id: "Didahului *lan*", ar: "سبق بلن" }, { id: "Bebas dari nashib dan jazim", ar: "تجرد من الناصب والجازم" }, { id: "Didahului *lam*", ar: "سبق بلم" }, { id: "Bersambung nun taukid", ar: "اتصلت به نون التوكيد" }], j: 1 },
      { q: { id: "{اكْتَالُوا} adalah fi'il madhi mabni 'ala…", ar: "«اكتالوا» مبني على…" }, o: [{ id: "Fathah", ar: "الفتح" }, { id: "Sukun", ar: "السكون" }, { id: "Dhammah, karena bersambung waw jama'ah", ar: "الضم لاتصاله بواو الجماعة" }, { id: "Kasrah", ar: "الكسر" }], j: 2 },
      { q: { id: "{لِرَبِّ الْعَالَمِينَ} — *al-'alamin* majrur dengan…", ar: "«العالمين» مجرور بـ…" }, o: [{ id: "Kasrah", ar: "الكسرة" }, { id: "Ya', karena mulhaq jamak mudzakkar salim", ar: "الياء لأنه ملحق بجمع المذكر السالم" }, { id: "Fathah", ar: "الفتحة" }, { id: "Ia mabni", ar: "مبني" }], j: 1 }
    ],
    bs: [
      { t: { id: "*An* dan *lan* beramal tanpa syarat.", ar: "أن ولن تعملان بلا شرط." }, j: true },
      { t: { id: "*Idzan wallahi tablugha al-majda* — *tabluga* tetap manshub.", ar: "إذن والله تبلغَ: منصوب." }, j: true, b: { id: "Pemisahan dengan sumpah dimaafkan.", ar: "يغتفر الفصل بالقسم." } },
      { t: { id: "*Lamma* termasuk alat yang menjazm dua fi'il.", ar: "لما تجزم فعلين." }, j: false, b: { id: "*Lamma* menjazm satu fi'il.", ar: "تجزم فعلًا واحدًا." } },
      { t: { id: "*Ayy* termasuk alat syarat yang menjazm dua fi'il.", ar: "أيّ تجزم فعلين." }, j: true },
      { t: { id: "Asal fi'il mudhari' adalah manshub.", ar: "الأصل في المضارع النصب." }, j: false, b: { id: "Asalnya marfu'.", ar: "الأصل الرفع." } },
      { t: { id: "*Tashunu* dalam *kay tashunu anfusakum* manshub dengan hadzf an-nun.", ar: "«تصونوا» منصوب بحذف النون." }, j: true },
      { t: { id: "{يَظُنُّ} marfu' karena tidak didahului nashib maupun jazim.", ar: "«يظن» مرفوع." }, j: true },
      { t: { id: "*Ula'i* pada {أُولَٰئِكَ} mabni 'alal-fath.", ar: "«أولاء» مبني على الفتح." }, j: false, b: { id: "Mabni 'alal-kasr; kaf-nya huruf khithab.", ar: "مبني على الكسر." } }
    ],
    jodoh: [
      { a: { ar: "لَنْ يَسُودَ الْكَسْلَانُ" }, b: { id: "Nashab dengan *lan*", ar: "نصب بلن" } },
      { a: { ar: "جِئْتُ كَيْ أَتَعَلَّمَ" }, b: { id: "Nashab dengan *kay*", ar: "نصب بكي" } },
      { a: { ar: "لَا تَيْأَسْ" }, b: { id: "Jazm dengan la nahiyah", ar: "جزم بلا الناهية" } },
      { a: { ar: "لِيَلْزَمْ" }, b: { id: "Jazm dengan lam amr", ar: "جزم بلام الأمر" } },
      { a: { ar: "مَنْ يَبْحَثْ يَجِدْ" }, b: { id: "Jazm dua fi'il", ar: "جزم فعلين" } },
      { a: { ar: "يُخَفِّفُ اللهُ عَنْكُمْ" }, b: { id: "Rafa' — bebas nashib & jazim", ar: "رفع لتجرده" } }
    ],
    isian: [
      { t: { id: "*Idzan* menashab bila berada di ______ jawaban.", ar: "إذن تنصب إذا كانت في ______ الجواب." }, j: { id: "awal", ar: "أول" }, x: [{ id: "akhir", ar: "آخر" }, { id: "tengah", ar: "وسط" }, { id: "luar", ar: "خارج" }] },
      { t: { id: "Setelah lam ______, *an* wajib disembunyikan.", ar: "تضمر أن وجوبًا بعد لام ______." }, j: { id: "juhud", ar: "الجحود" }, x: [{ id: "ta'lil", ar: "التعليل" }, { id: "amr", ar: "الأمر" }, { id: "qasam", ar: "القسم" }] },
      { t: { id: "Fi'il pertama setelah alat syarat disebut fi'il syarat, yang kedua disebut ______ syarat.", ar: "الفعل الأول فعل الشرط والثاني ______ الشرط." }, j: { id: "jawab", ar: "جواب" }, x: [{ id: "khabar", ar: "خبر" }, { id: "badal", ar: "بدل" }, { id: "na't", ar: "نعت" }] },
      { t: { id: "Mudhari' dijazm di ______ tempat.", ar: "يجزم المضارع في ______ موضعًا." }, j: { id: "16", ar: "ستة عشر" }, x: [{ id: "4", ar: "أربعة" }, { id: "12", ar: "اثني عشر" }, { id: "11", ar: "أحد عشر" }] }
    ],
    pilah: { t: { id: "Pilah alat-alat ini", ar: "صنِّف الأدوات" },
      kategori: [{ id: "Penashab", ar: "ناصب" }, { id: "Jazm 1 fi'il", ar: "يجزم فعلًا" }, { id: "Jazm 2 fi'il", ar: "يجزم فعلين" }],
      item: [
        { t: { ar: "أَنْ" }, k: 0 }, { t: { ar: "إِذَنْ" }, k: 0 }, { t: { ar: "كَيْ" }, k: 0 },
        { t: { ar: "لَمْ" }, k: 1 }, { t: { ar: "لَمَّا" }, k: 1 }, { t: { id: "La nahiyah", ar: "لا الناهية" }, k: 1 },
        { t: { ar: "مَهْمَا" }, k: 2 }, { t: { ar: "أَيَّانَ" }, k: 2 }, { t: { ar: "حَيْثُمَا" }, k: 2 }, { t: { ar: "إِذْمَا" }, k: 2 }
      ] },
    urut: { t: { id: "Urutkan ke-12 alat syarat sesuai urutan dalam kitab", ar: "رتب أدوات الشرط كما في الكتاب" }, item: [{ ar: "إِنْ" }, { ar: "إِذْمَا" }, { ar: "مَنْ" }, { ar: "مَا" }, { ar: "مَهْمَا" }, { ar: "مَتَى" }, { ar: "أَيَّانَ" }, { ar: "أَيْنَ" }, { ar: "أَنَّى" }, { ar: "حَيْثُمَا" }, { ar: "كَيْفَمَا" }, { ar: "أَيّ" }] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "اذكر نواصب المضارع بنفسها مع مثال لكل منها.", id: "Sebutkan alat penashab mudhari' dengan sendirinya beserta contoh." }, j: { ar: "أن: يسرني أن تنجحَ. لن: لن يسودَ الكسلان. إذن: إذن تبلغَ المجد. كي: جئت كي أتعلمَ.", id: "***An***: *yasurruni an tanjaha*. ***Lan***: *lan yasuda al-kaslan*. ***Idzan***: *idzan tablugha al-majda*. ***Kay***: *ji'tu kay ata'allama*." } },
    { t: { ar: "ما شروط عمل إذن وكي؟", id: "Apa syarat beramalnya *idzan* dan *kay*?" }, j: { ar: "إذن: أن تكون مصدرة في أول الجواب، وألا يفصل بينها وبين الفعل فاصل إلا القسم. كي: أن تتقدمها لام التعليل لفظًا أو تقديرًا.", id: "***Idzan***: di awal jawaban dan tidak dipisah dari fi'ilnya kecuali oleh sumpah. ***Kay***: didahului **lam ta'lil**, terucap atau diperkirakan." } },
    { t: { ar: "اذكر الجوازم التي تجزم فعلًا واحدًا مع الأمثلة.", id: "Sebutkan alat jazm satu fi'il dengan contoh." }, j: { ar: "لم: لم أخنْ عهدًا. لما: لما يثمرْ بستاننا. لام الأمر: ليلزمْ كل إنسان حده. لا الناهية: لا تيأسْ من رحمة الله.", id: "***Lam***: *lam akhun 'ahdan*. ***Lamma***: *lamma yutsmir bustanuna*. **Lam amr**: *li-yalzam kullu insanin haddahu*. **La nahiyah**: *la tay'as min rahmatillah*." } },
    { t: { ar: "عدِّد أدوات الشرط الجازمة لفعلين، وأعرب: «من يبحثْ يجدْ».", id: "Sebutkan alat syarat yang menjazm dua fi'il, lalu i'rablah *man yabhats yajid*." }, j: { ar: "إن، إذما، من، ما، مهما، متى، أيان، أين، أنى، حيثما، كيفما، أي. من: اسم شرط جازم مبني على السكون، يبحثْ: فعل الشرط مجزوم وعلامة جزمه السكون، يجدْ: جواب الشرط مجزوم وعلامة جزمه السكون.", id: "*In, idzma, man, ma, mahma, mata, ayyana, aina, anna, haitsuma, kaifama, ayy*. *Man*: isim syarat jazim mabni 'alas-sukun; *yabhats*: fi'il syarat majzum dengan sukun; *yajid*: jawab syarat majzum dengan sukun." } },
    { t: { ar: "متى يرفع المضارع؟ ومثِّل من سورة المطففين.", id: "Kapan mudhari' marfu'? Beri contoh dari Surah Al-Muthaffifin." }, j: { ar: "يرفع إذا تجرد من الناصب والجازم، نحو: ﴿يَسْتَوْفُونَ﴾ و﴿يُخْسِرُونَ﴾ مرفوعان بثبوت النون، و﴿يَظُنُّ﴾ و﴿يَقُومُ﴾ مرفوعان بالضمة.", id: "Bila **tidak didahului nashib maupun jazim** — itulah asalnya. Contoh: {يَسْتَوْفُونَ}, {يُخْسِرُونَ} (tsubut an-nun); {يَظُنُّ}, {يَقُومُ} (dhammah)." } }
  ]
});
