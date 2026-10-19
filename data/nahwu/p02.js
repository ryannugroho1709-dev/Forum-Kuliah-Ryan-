/* Nahwu — Pertemuan 2: Mabni dan Mu'rab */
Kuliah.pertemuan("nahwu", {
  no: 2, motif: "bina", tema: 6, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/108",
  bab: { id: "Kata, mabni & mu'rab", ar: "الكلمة والمبني والمعرب" },
  judul: { id: "Mabni dan Mu'rab: Kata yang Tetap dan Kata yang Berubah", ar: "المبني والمعرب" },
  ringkas: {
    id: "Kata dari sisi akhirnya terbagi dua: **mabni** (akhirnya tetap satu keadaan) dan **mu'rab** (akhirnya berubah sesuai 'amil). Dibahas empat macam bina' (sukun, dhammah, fathah, kasrah) dan dalilnya, siapa saja yang mabni dari huruf, fi'il, dan isim (dhamir, isim maushul, isim isyarah, isim syarat), lalu tathbiq pada Surah Ath-Thariq.",
    ar: "الكلمات من حيث البناء والإعراب قسمان: مبني ومعرب، وأنواع البناء أربعة، ودليلها السماع، والمبنيات من الحروف والأفعال والأسماء (الضمائر والأسماء الموصولة وأسماء الإشارة وأسماء الشرط)، مع التطبيق على سورة الطارق."
  },
  tujuan: [
    { id: "Mendefinisikan mabni dan mu'rab beserta contohnya.", ar: "تعريف المبني والمعرب مع الأمثلة." },
    { id: "Menyebut empat macam bina' dan dalilnya (sama').", ar: "ذكر أنواع البناء الأربعة ودليلها." },
    { id: "Menentukan kata yang mabni dari huruf, fi'il, dan isim.", ar: "معرفة المبني من الحروف والأفعال والأسماء." },
    { id: "Menghafal dhamir munfashil dan bina'-nya.", ar: "حفظ الضمائر المنفصلة وبنائها." },
    { id: "Membedakan mabni dan mu'rab dalam ayat.", ar: "التمييز بين المبني والمعرب في الآيات." }
  ],
  isi: [
    { t: "judul", id: "Dua Golongan Kata", ar: "الكلمات من حيث البناء والإعراب" },
    { t: "definisi", judul: { id: "Mabni", ar: "المبني" }, lughah: { id: "Dari kata *al-bina'* (bangunan) yang bermakna **tetap, langgeng, dan melekat**.", ar: "مأخوذ من البناء، ومعناه الثبوت والدوام واللزوم." }, istilah: { id: "Kata yang **akhirnya selalu satu keadaan** dalam susunan apa pun.", ar: "ما يلزم آخره حالة واحدة في أي تركيب كان." } },
    { t: "definisi", judul: { id: "Mu'rab", ar: "المعرب" }, istilah: { id: "Kata yang **akhirnya berubah-ubah** mengikuti perubahan 'amil (faktor) yang masuk kepadanya.", ar: "ما يكون آخره على أحوال مختلفة، ويتغير بتغير العوامل الداخلة عليه." } },
    { t: "banding", judul: { id: "Contoh: «haitsu» vs «Muhammad»", ar: "حيثُ ومحمد" },
      kiri: { judul: { id: "Mabni: حَيْثُ", ar: "مبني" }, ikon: "lock", warna: "blue", poin: [{ id: "Selalu dhammah di akhir, apa pun posisinya", ar: "حَيْثُ — تلزم الضم دائمًا" }, { id: "*Aina* selalu fathah: \"Mana bukunya?\", \"Dari mana kamu datang?\"", ar: "أَيْنَ الكِتَابُ؟ مِنْ أَيْنَ جِئْتَ؟" }] },
      kanan: { judul: { id: "Mu'rab: مُحَمَّد", ar: "معرب" }, ikon: "swap", warna: "green", poin: [{ id: "Datang Muhammad (fa'il → dhammah)", ar: "أَقْبَلَ مُحَمَّدٌ" }, { id: "Aku melihat Muhammad (maf'ul bih → fathah)", ar: "رَأَيْتُ مُحَمَّدًا" }, { id: "Aku melewati Muhammad (setelah huruf jar → kasrah)", ar: "مَرَرْتُ بِمُحَمَّدٍ" }] } },

    { t: "judul", id: "Empat Macam Bina'", ar: "أنواع البناء" },
    { t: "p", id: "Akhir kata mabni yang tetap itu tidak keluar dari empat keadaan: **sukun, dhammah, fathah, atau kasrah**.", ar: "ما يلازم آخر الكلمة المبنية لا يتجاوز أربعة: السكون والضم والفتح والكسر." },
    { t: "tabel", kolom: [{ id: "Bina'", ar: "البناء" }, { id: "Contoh", ar: "أمثلة" }, { id: "Keterangan", ar: "ملاحظة" }],
      baris: [
        [{ id: "Mabni 'alas-sukun", ar: "مبني على السكون" }, { ar: "لَمْ، لَنْ، مِنْ، عَنْ، كَمْ" }, { id: "Huruf-huruf ini selalu sukun", ar: "حروف تلزم السكون" }],
        [{ id: "Mabni 'alad-dhamm", ar: "مبني على الضم" }, { ar: "حَيْثُ، نَحْنُ، مُنْذُ" }, { id: "Selalu dhammah", ar: "تلزم الضم" }],
        [{ id: "Mabni 'alal-fath", ar: "مبني على الفتح" }, { ar: "أَيْنَ، لَيْتَ، ثُمَّ" }, { id: "Selalu fathah", ar: "تلزم الفتح" }],
        [{ id: "Mabni 'alal-kasr", ar: "مبني على الكسر" }, { ar: "بِـ (بِسْمِ اللهِ)، لِـ (لِكُلِّ مُجْتَهِدٍ نَصِيبٌ)" }, { id: "Ba' dan lam jar", ar: "الباء واللام الجارتان" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Dari mana kita tahu bina'-nya?", ar: "ما الدليل؟" }, id: "Dalilnya adalah **istiqra' dan naql** — dinukil dari kitab-kitab yang sahih dan dari lisan orang Arab, yaitu **as-sama'** (didengar dari Arab). *Haitsu* dinukil dari Arab dengan dhammah: tidak diucapkan *haitsa* atau *haitsi*. Kaidah praktisnya: kata mabni **dibina' sesuai bunyi akhirnya** (*yubna 'ala ma yunthaqu bihi*).", ar: "الدليل الاستقراء والنقل من الكتب الصحيحة ومن أفواه العرب، وهو السماع؛ فالمبني يبنى على ما ينطق به آخره." },

    { t: "judul", id: "Siapa Saja yang Mabni?", ar: "أصناف المبنيات" },
    { t: "poin", item: [
      { ikon: "chain", judul: { id: "1. Semua huruf", ar: "جميع الحروف" }, id: "Setiap huruf adalah mabni: huruf jar, huruf qasam, huruf 'athaf, huruf nasikh (*inna, laita*…). Maka setiap menyebut \"huruf\" selalu diikuti \"mabni\".", ar: "الحروف كلها مبنية: حرف جر مبني، حرف قسم مبني، حرف عطف مبني، حرف ناسخ مبني." },
      { ikon: "bolt", judul: { id: "2. Fi'il (pada asalnya)", ar: "الأفعال" }, id: "Asal fi'il adalah mabni: **madhi dan amr selalu mabni**. **Mudhari' mu'rab**, kecuali jika bersambung dengan **nun taukid** atau **nun niswah** — saat itu ia mabni.", ar: "الأصل في الأفعال البناء: الماضي والأمر مبنيان، والمضارع معرب إلا إذا اتصلت به نون التوكيد أو نون النسوة." },
      { ikon: "user", judul: { id: "3. Sebagian isim", ar: "بعض الأسماء" }, id: "Asal isim adalah mu'rab. Yang keluar dari asal ini (mabni): **dhamir, isim maushul, isim isyarah, isim syarat**.", ar: "الأصل في الأسماء الإعراب، ويخرج عنه: الضمائر والأسماء الموصولة وأسماء الإشارة وأسماء الشرط." }
    ] },
    { t: "sub", id: "Dhamir munfashil (kata ganti terpisah) — semuanya mabni", ar: "الضمائر المنفصلة كلها مبنية" },
    { t: "tabel", kolom: [{ id: "Dhamir", ar: "الضمير" }, { id: "Mabni 'ala…", ar: "مبني على" }, { id: "Dhamir", ar: "الضمير" }, { id: "Mabni 'ala…", ar: "مبني على" }],
      baris: [
        [{ ar: "أَنَا" }, { id: "sukun", ar: "السكون" }, { ar: "إِيَّايَ" }, { id: "fathah", ar: "الفتح" }],
        [{ ar: "نَحْنُ" }, { id: "dhammah", ar: "الضم" }, { ar: "إِيَّانَا" }, { id: "sukun", ar: "السكون" }],
        [{ ar: "أَنْتَ" }, { id: "fathah", ar: "الفتح" }, { ar: "إِيَّاكَ" }, { id: "fathah", ar: "الفتح" }],
        [{ ar: "أَنْتِ" }, { id: "kasrah", ar: "الكسر" }, { ar: "إِيَّاكِ" }, { id: "kasrah", ar: "الكسر" }],
        [{ ar: "أَنْتُمَا، أَنْتُمْ" }, { id: "sukun", ar: "السكون" }, { ar: "إِيَّاكُمَا، إِيَّاكُمْ" }, { id: "sukun", ar: "السكون" }],
        [{ ar: "أَنْتُنَّ" }, { id: "fathah", ar: "الفتح" }, { ar: "إِيَّاكُنَّ" }, { id: "fathah", ar: "الفتح" }],
        [{ ar: "هُوَ، هِيَ" }, { id: "fathah", ar: "الفتح" }, { ar: "إِيَّاهُ، إِيَّاهَا" }, { id: "sukun", ar: "السكون" }],
        [{ ar: "هُمَا، هُمْ" }, { id: "sukun", ar: "السكون" }, { ar: "إِيَّاهُمَا، إِيَّاهُمْ" }, { id: "sukun", ar: "السكون" }],
        [{ ar: "هُنَّ" }, { id: "fathah", ar: "الفتح" }, { ar: "إِيَّاهُنَّ" }, { id: "fathah", ar: "الفتح" }]
      ] },
    { t: "sub", id: "Dhamir muttashil (bersambung) — juga mabni", ar: "الضمائر المتصلة مبنية" },
    { t: "contoh", judul: { id: "Dhamir yang menempel pada fi'il dan isim", ar: "اتصال الضمائر بالأفعال والأسماء" },
      sorot: [
        { label: { id: "Pada fi'il", ar: "بالفعل" }, warna: "blue", id: "*Katabtu* — ta' fa'il mabni 'alad-dhamm, *fi mahalli raf'in fa'il*. *Katabna* — *na* mabni 'alas-sukun. *Katabti* — mabni 'alal-kasr. *Katabtuma* — mabni 'alas-sukun.", ar: "كَتَبْتُ: ضمير مبني على الضم في محل رفع فاعل. كَتَبْنَا: «نا» مبني على السكون. كَتَبْتِ: مبني على الكسر. كَتَبْتُمَا: مبني على السكون." },
        { label: { id: "Pada isim", ar: "بالاسم" }, warna: "green", id: "*Kitabi* — ya' mutakallim pada isim. *Kitabuna* — *na* mabni 'alas-sukun, menempel pada isim. *'Allamani* — ya' menempel pada fi'il.", ar: "كِتَابِي، كِتَابُنَا، عَلَّمَنِي، عَلَّمَنَا: ضمائر متصلة مبنية." }
      ] },
    { t: "banding", judul: { id: "Isim maushul & isim isyarah: mabni, kecuali bentuk mutsanna", ar: "الموصولات والإشارات" },
      kiri: { judul: { id: "Mabni", ar: "مبنية" }, ikon: "lock", warna: "blue", poin: [
        { id: "*alladzi* (sukun), *allati* (sukun), *alladzina* (fathah), *al-lati* (sukun)", ar: "الَّذِي، الَّتِي، الَّذِينَ، اللَّاتِي" },
        { id: "*hadza* (sukun), *hadzihi* (kasrah), *ha'ula'i* (kasrah)", ar: "هَذَا، هَذِهِ، هَؤُلَاءِ" } ] },
      kanan: { judul: { id: "Mu'rab (seperti mutsanna)", ar: "معربة" }, ikon: "swap", warna: "amber", poin: [
        { id: "*alladzani / alladzaini*, *allatani / allataini* — rafa' dengan alif, nashab-jarr dengan ya'", ar: "اللَّذَانِ/اللَّذَيْنِ، اللَّتَانِ/اللَّتَيْنِ" },
        { id: "*hadzani / hadzaini*, *hatani / hataini*", ar: "هَذَانِ/هَذَيْنِ، هَاتَانِ/هَاتَيْنِ" } ] } },
    { t: "contoh", judul: { id: "Ha'ula'i selalu kasrah", ar: "هؤلاء تلزم الكسر" }, id: "Datang mereka ini — aku melihat mereka ini — aku melewati mereka ini: *ha'ula'i* tetap kasrah di semua posisi, karena ia mabni.", ar: "أَقْبَلَ هَؤُلَاءِ، رَأَيْتُ هَؤُلَاءِ، مَرَرْتُ بِهَؤُلَاءِ — مبني على الكسر بغض النظر عن موقعه." },
    { t: "poin", judul: { id: "Isim syarat — mabni", ar: "أسماء الشرط مبنية" }, item: [
      { ikon: "fork", judul: { ar: "مَنْ، مَا، مَهْمَا، مَتَى" }, id: "Mabni 'alas-sukun. *Man yajtahid yanjah* — siapa yang bersungguh-sungguh, ia berhasil.", ar: "مبنية على السكون: مَنْ يَجْتَهِدْ يَنْجَحْ." },
      { ikon: "fork", judul: { ar: "أَيَّانَ، أَيْنَ" }, id: "Mabni 'alal-fath.", ar: "مبنيتان على الفتح." },
      { ikon: "fork", judul: { ar: "أَنَّى، حَيْثُمَا، كَيْفَمَا، أَيْنَمَا" }, id: "Juga termasuk isim syarat yang mabni. (Pengecualian: *ayy* adalah isim syarat yang mu'rab.)", ar: "وهي من أسماء الشرط المبنية، إلا «أيّ» فمعربة." }
    ] },
    { t: "cek", q: { id: "Fi'il mudhari' menjadi mabni apabila…", ar: "يبنى المضارع إذا…" }, o: [{ id: "Didahului *lam*", ar: "سبق بلم" }, { id: "Bersambung dengan nun taukid atau nun niswah", ar: "اتصلت به نون التوكيد أو النسوة" }, { id: "Didahului *lan*", ar: "سبق بلن" }, { id: "Menjadi khabar", ar: "وقع خبرًا" }], j: 1, b: { id: "Selain dua keadaan itu, mudhari' selalu mu'rab.", ar: "وفي غير ذلك هو معرب." } },

    { t: "judul", id: "Tathbiq: Surah Ath-Thariq (1–7)", ar: "التطبيق: سورة الطارق" },
    { t: "p", id: "Pertanyaan kuncinya: **mana yang mabni dan mana yang mu'rab?** Warna kata menunjukkan keadaannya: abu-abu = mabni; warna lain = mu'rab (sesuai keadaan i'rabnya).", ar: "ما المعرب وما المبني في هذه الآيات؟" },
    { t: "irab", ayat: "وَالسَّمَاءِ وَالطَّارِقِ ۝ وَمَا أَدْرَاكَ مَا الطَّارِقُ ۝ النَّجْمُ الثَّاقِبُ ۝ إِن كُلُّ نَفْسٍ لَّمَّا عَلَيْهَا حَافِظٌ", src: "الطارق: ١–٤", kata: [
      { w: "وَ", h: "bina", id: "Huruf qasam dan jar — **mabni 'alal-fath** (karena diucapkan fathah).", ar: "حرف قسم وجر مبني على الفتح." },
      { w: "السَّمَاءِ", h: "jar", id: "**Mu'rab** — di tempat lain bisa *as-sama'u, as-sama'a*; di sini majrur.", ar: "معربة؛ لتغير آخرها في غير هذه الآية." },
      { w: "وَالطَّارِقِ", h: "jar", id: "Waw (huruf mabni) + *ath-thariq* (**mu'rab**).", ar: "الواو مبنية، والطارق معرب." },
      { w: "وَ", h: "bina", id: "Huruf 'athaf — mabni.", ar: "حرف عطف مبني." },
      { w: "مَا", h: "bina", id: "Isim istifham — **mabni**.", ar: "اسم استفهام مبني." },
      { w: "أَدْرَى", h: "bina", id: "*Adraka* = tiga kata: **fi'il madhi** *adra* — mabni 'alal-fath *muqaddar* pada alif karena *ta'adzdzur*…", ar: "أدرى: فعل ماض مبني على الفتح المقدر على الألف للتعذر…" },
      { w: "(هُوَ)", h: "bina", id: "…fa'il berupa **dhamir mustatir** (tersembunyi) *huwa* — mabni…", ar: "…والفاعل ضمير مستتر تقديره هو…" },
      { w: "كَ", h: "bina", id: "…dan *kaf*: dhamir muttashil **mabni 'alal-fath**, *fi mahalli nashbin* maf'ul bih. Ketiganya mabni.", ar: "…والكاف ضمير متصل مبني على الفتح في محل نصب مفعول به." },
      { w: "مَا", h: "bina", id: "Isim istifham — mabni.", ar: "اسم استفهام مبني." },
      { w: "الطَّارِقُ", h: "raf", id: "**Mu'rab** — akhirnya bisa berubah.", ar: "معرب." },
      { w: "النَّجْمُ الثَّاقِبُ", h: "raf", id: "Keduanya **mu'rab**.", ar: "معربان." },
      { w: "إِنْ", h: "bina", id: "Huruf — mabni.", ar: "حرف مبني." },
      { w: "كُلُّ", h: "raf", id: "**Mu'rab**.", ar: "معرب." },
      { w: "نَفْسٍ", h: "jar", id: "**Mu'rab**.", ar: "معرب." },
      { w: "لَمَّا", h: "bina", id: "Mabni 'alas-sukun.", ar: "مبنية على السكون." },
      { w: "عَلَى", h: "bina", id: "*'Alaiha*: *'ala* huruf jar mabni 'alas-sukun…", ar: "على: حرف جر مبني على السكون…" },
      { w: "هَا", h: "bina", id: "…dan *ha* dhamir muttashil mabni 'alas-sukun.", ar: "…والهاء ضمير متصل مبني على السكون." },
      { w: "حَافِظٌ", h: "raf", id: "**Mu'rab**.", ar: "معرب." }
    ] },
    { t: "irab", ayat: "فَلْيَنظُرِ الْإِنسَانُ مِمَّ خُلِقَ ۝ خُلِقَ مِن مَّاءٍ دَافِقٍ ۝ يَخْرُجُ مِن بَيْنِ الصُّلْبِ وَالتَّرَائِبِ", src: "الطارق: ٥–٧", kata: [
      { w: "فَـ", h: "bina", id: "Huruf isti'naf — mabni.", ar: "الفاء حرف استئناف مبني." },
      { w: "لِـ", h: "bina", id: "Lam amr — huruf mabni.", ar: "لام الأمر حرف مبني." },
      { w: "يَنظُرِ", h: "jaz", id: "**Fi'il mudhari' — mu'rab** (tidak bersambung nun taukid/niswah). Majzum oleh lam amr dengan sukun, lalu dikasrah **untuk menghindari bertemunya dua sukun** (*at-takhallush min iltiqa' as-sakinain*).", ar: "فعل مضارع معرب مجزوم بلام الأمر وعلامة جزمه السكون، وحرك بالكسر تخلصًا من التقاء الساكنين." },
      { w: "الْإِنسَانُ", h: "raf", id: "**Mu'rab**.", ar: "معرب." },
      { w: "مِمَّ", h: "bina", id: "Dua kata: *min* (huruf mabni) + *ma* (isim istifham mabni).", ar: "من حرف مبني، وما اسم استفهام مبني." },
      { w: "خُلِقَ", h: "bina", id: "Fi'il madhi — **mabni 'alal-fath**.", ar: "فعل ماض مبني على الفتح." },
      { w: "مِن", h: "bina", id: "Huruf jar — mabni.", ar: "حرف جر مبني." },
      { w: "مَاءٍ دَافِقٍ", h: "jar", id: "Keduanya **mu'rab**.", ar: "معربان." },
      { w: "يَخْرُجُ", h: "raf", id: "Fi'il mudhari' tanpa nun taukid/niswah → **mu'rab**.", ar: "فعل مضارع معرب." },
      { w: "بَيْنِ", h: "jar", id: "Isim majrur dengan kasrah — mu'rab.", ar: "اسم مجرور وعلامة جره الكسرة، معرب." },
      { w: "الصُّلْبِ وَالتَّرَائِبِ", h: "jar", id: "Mu'rab; waw 'athaf di antaranya mabni.", ar: "معربان، والواو حرف عطف مبني." }
    ] },
    { t: "ringkasan", item: [
      { id: "Mabni: akhirnya tetap. Mu'rab: akhirnya berubah sesuai 'amil.", ar: "المبني يلزم حالة واحدة، والمعرب يتغير آخره." },
      { id: "Bina' ada empat: sukun, dhammah, fathah, kasrah — dalilnya sama'.", ar: "البناء أربعة، ودليله السماع." },
      { id: "Semua huruf mabni; madhi & amr mabni; mudhari' mu'rab kecuali dengan nun taukid/niswah.", ar: "الحروف مبنية، والماضي والأمر مبنيان، والمضارع معرب إلا مع النونين." },
      { id: "Isim mabni: dhamir, isim maushul (kecuali mutsanna), isim isyarah (kecuali mutsanna), isim syarat (kecuali *ayy*).", ar: "الأسماء المبنية: الضمائر والموصولات والإشارات وأسماء الشرط." }
    ] }
  ],
  istilah: [
    { ar: "المبني", latin: "al-mabni", id: "Kata tetap", def: { id: "Kata yang akhirnya tetap satu keadaan dalam susunan apa pun.", ar: "ما يلزم آخره حالة واحدة." } },
    { ar: "المعرب", latin: "al-mu'rab", id: "Kata yang berubah", def: { id: "Kata yang akhirnya berubah sesuai 'amil yang masuk.", ar: "ما يتغير آخره بتغير العوامل." } },
    { ar: "العامل", latin: "al-'amil", id: "Faktor penentu i'rab", def: { id: "Kata/sebab yang memengaruhi akhir kata mu'rab.", ar: "ما يؤثر في آخر الكلمة المعربة." } },
    { ar: "السماع", latin: "as-sama'", id: "Didengar dari Arab", def: { id: "Dalil bina': dinukil dari lisan orang Arab.", ar: "النقل عن العرب." } },
    { ar: "الضمير المنفصل", latin: "adh-dhamir al-munfashil", id: "Kata ganti terpisah", def: { id: "Dhamir yang berdiri sendiri: *ana, nahnu, huwa, iyyaka*…", ar: "ما يستقل بنفسه كأنا ونحن وإياك." } },
    { ar: "الضمير المتصل", latin: "adh-dhamir al-muttashil", id: "Kata ganti bersambung", def: { id: "Dhamir yang menempel pada fi'il/isim/huruf: ta' fa'il, *na*, *ya'*…", ar: "ما يتصل بالفعل أو الاسم أو الحرف." } },
    { ar: "الاسم الموصول", latin: "al-ism al-maushul", id: "Kata sambung", def: { id: "*Alladzi, allati, alladzina, al-lati* — mabni; *alladzani/allatani* mu'rab.", ar: "الذي والتي والذين واللاتي مبنية." } },
    { ar: "اسم الإشارة", latin: "ism al-isyarah", id: "Kata tunjuk", def: { id: "*Hadza, hadzihi, ha'ula'i* — mabni; *hadzani/hatani* mu'rab.", ar: "هذا وهذه وهؤلاء مبنية." } },
    { ar: "التقاء الساكنين", latin: "iltiqa' as-sakinain", id: "Bertemunya dua sukun", def: { id: "Dihindari dengan memberi harakat (biasanya kasrah) pada yang pertama.", ar: "يتخلص منه بتحريك الأول غالبًا بالكسر." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Makna bahasa *al-bina'* adalah…", ar: "معنى البناء لغة…" }, o: [{ id: "Berubah", ar: "التغير" }, { id: "Tetap dan melekat", ar: "الثبوت واللزوم" }, { id: "Jelas", ar: "الإبانة" }, { id: "Tersembunyi", ar: "الاستتار" }], j: 1 },
      { q: { id: "Kata yang akhirnya berubah karena berubahnya 'amil disebut…", ar: "ما يتغير آخره بتغير العوامل…" }, o: [{ id: "Mabni", ar: "مبني" }, { id: "Mu'rab", ar: "معرب" }, { id: "Muqaddar", ar: "مقدر" }, { id: "Mustatir", ar: "مستتر" }], j: 1 },
      { q: { id: "*Haitsu* adalah kata mabni 'ala…", ar: "«حيثُ» مبنية على…" }, o: [{ id: "Sukun", ar: "السكون" }, { id: "Dhammah", ar: "الضم" }, { id: "Fathah", ar: "الفتح" }, { id: "Kasrah", ar: "الكسر" }], j: 1 },
      { q: { id: "Dalil macam-macam bina' adalah…", ar: "دليل أنواع البناء…" }, o: [{ id: "Qiyas", ar: "القياس" }, { id: "Sama' (nukilan dari orang Arab)", ar: "السماع" }, { id: "Ijma' ahli nahwu", ar: "إجماع النحاة" }, { id: "Akal", ar: "العقل" }], j: 1 },
      { q: { id: "Fi'il yang pada asalnya mu'rab adalah…", ar: "الفعل المعرب في الأصل…" }, o: [{ id: "Madhi", ar: "الماضي" }, { id: "Amr", ar: "الأمر" }, { id: "Mudhari'", ar: "المضارع" }, { id: "Semuanya", ar: "الكل" }], j: 2 },
      { q: { id: "Manakah isim yang **mu'rab**?", ar: "أيها معرب؟" }, o: [{ ar: "هَؤُلَاءِ" }, { ar: "الَّذِينَ" }, { ar: "هَذَانِ" }, { ar: "نَحْنُ" }], j: 2 },
      { q: { id: "*Anta* adalah dhamir mabni 'ala…", ar: "«أنتَ» مبني على…" }, o: [{ id: "Fathah", ar: "الفتح" }, { id: "Kasrah", ar: "الكسر" }, { id: "Sukun", ar: "السكون" }, { id: "Dhammah", ar: "الضم" }], j: 0 },
      { q: { id: "Dalam {وَمَا أَدْرَاكَ}, *kaf* adalah…", ar: "الكاف في «أدراك»…" }, o: [{ id: "Huruf khithab", ar: "حرف خطاب" }, { id: "Dhamir muttashil mabni 'alal-fath, *fi mahalli nashb* maf'ul bih", ar: "ضمير متصل مبني على الفتح في محل نصب مفعول به" }, { id: "Isim mu'rab manshub", ar: "اسم معرب منصوب" }, { id: "Fi'il", ar: "فعل" }], j: 1 },
      { q: { id: "Ra' pada {فَلْيَنظُرِ} dikasrah karena…", ar: "كُسرت الراء في «فلينظرِ»…" }, o: [{ id: "Majrur", ar: "مجرور" }, { id: "Menghindari bertemunya dua sukun", ar: "تخلصًا من التقاء الساكنين" }, { id: "Mabni 'alal-kasr", ar: "مبني على الكسر" }, { id: "Isim manqush", ar: "اسم منقوص" }], j: 1 },
      { q: { id: "Isim syarat yang **tidak** mabni adalah…", ar: "اسم الشرط المعرب…" }, o: [{ ar: "مَنْ" }, { ar: "مَهْمَا" }, { ar: "أَيّ" }, { ar: "مَتَى" }], j: 2 }
    ],
    bs: [
      { t: { id: "Semua huruf adalah mabni.", ar: "الحروف كلها مبنية." }, j: true },
      { t: { id: "Fi'il madhi bisa menjadi mu'rab.", ar: "الماضي قد يكون معربًا." }, j: false, b: { id: "Madhi selalu mabni.", ar: "الماضي مبني دائمًا." } },
      { t: { id: "*Ha'ula'i* dibaca kasrah baik sebagai fa'il, maf'ul bih, maupun majrur.", ar: "هؤلاء تلزم الكسر." }, j: true },
      { t: { id: "*Alladzani* termasuk isim maushul yang mabni.", ar: "«اللذان» مبني." }, j: false, b: { id: "*Alladzani/allatani* mu'rab seperti mutsanna.", ar: "معربان كالمثنى." } },
      { t: { id: "*Yandhur* dalam {فَلْيَنظُرِ} adalah mu'rab.", ar: "«ينظر» معرب." }, j: true },
      { t: { id: "Asal isim adalah mabni.", ar: "الأصل في الأسماء البناء." }, j: false, b: { id: "Asal isim mu'rab; asal fi'il mabni.", ar: "الأصل في الأسماء الإعراب." } },
      { t: { id: "*Nahnu* mabni 'alad-dhamm.", ar: "«نحن» مبني على الضم." }, j: true },
      { t: { id: "Mudhari' yang bersambung nun niswah menjadi mabni.", ar: "المضارع المتصل بنون النسوة مبني." }, j: true }
    ],
    jodoh: [
      { a: { ar: "لَمْ" }, b: { id: "Mabni 'alas-sukun", ar: "مبني على السكون" } },
      { a: { ar: "حَيْثُ" }, b: { id: "Mabni 'alad-dhamm", ar: "مبني على الضم" } },
      { a: { ar: "أَيْنَ" }, b: { id: "Mabni 'alal-fath", ar: "مبني على الفتح" } },
      { a: { ar: "بِـ" }, b: { id: "Mabni 'alal-kasr", ar: "مبني على الكسر" } },
      { a: { ar: "هَذِهِ" }, b: { id: "Isim isyarah mabni 'alal-kasr", ar: "اسم إشارة مبني على الكسر" } },
      { a: { ar: "الَّذِينَ" }, b: { id: "Isim maushul mabni 'alal-fath", ar: "اسم موصول مبني على الفتح" } }
    ],
    isian: [
      { t: { id: "Mabni secara istilah: kata yang akhirnya ______ satu keadaan.", ar: "المبني ما يلزم آخره ______ واحدة." }, j: { id: "tetap (lazim)", ar: "حالة" }, x: [{ id: "berubah", ar: "تغيرًا" }, { id: "hilang", ar: "حذفًا" }, { id: "bertanwin", ar: "تنوينًا" }] },
      { t: { id: "Mudhari' mabni bila bersambung nun taukid atau nun ______.", ar: "يبنى المضارع مع نون التوكيد ونون ______." }, j: { id: "niswah", ar: "النسوة" }, x: [{ id: "wiqayah", ar: "الوقاية" }, { id: "tanwin", ar: "التنوين" }, { id: "mutsanna", ar: "المثنى" }] },
      { t: { id: "Kata mabni dibina' sesuai ______ akhirnya.", ar: "يبنى المبني على ما ______ به آخره." }, j: { id: "bunyi/ucapan", ar: "يُنطق" }, x: [{ id: "makna", ar: "يُعنى" }, { id: "tulisan", ar: "يُكتب" }, { id: "asal", ar: "يُشتق" }] },
      { t: { id: "*Hadzani* dan *hatani* mu'rab karena keduanya ______.", ar: "هذان وهاتان معربان لأنهما ______." }, j: { id: "mutsanna", ar: "مثنى" }, x: [{ id: "jamak", ar: "جمع" }, { id: "dhamir", ar: "ضمير" }, { id: "huruf", ar: "حرف" }] }
    ],
    pilah: { t: { id: "Pilah: mabni atau mu'rab?", ar: "صنِّف: مبني أم معرب؟" },
      kategori: [{ id: "Mabni", ar: "مبني" }, { id: "Mu'rab", ar: "معرب" }],
      item: [
        { t: { ar: "أَيْنَ" }, k: 0 }, { t: { ar: "مُحَمَّد" }, k: 1 }, { t: { ar: "هُوَ" }, k: 0 }, { t: { ar: "يَخْرُجُ" }, k: 1 },
        { t: { ar: "كَتَبَ" }, k: 0 }, { t: { ar: "اللَّتَانِ" }, k: 1 }, { t: { ar: "الَّتِي" }, k: 0 }, { t: { ar: "النَّجْم" }, k: 1 }, { t: { ar: "اُكْتُبْ" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرِّف المبني والمعرب مع التمثيل.", id: "Definisikan mabni dan mu'rab dengan contoh." }, j: { ar: "المبني: ما يلزم آخره حالة واحدة في أي تركيب كان، نحو: حيثُ، أينَ. والمعرب: ما يتغير آخره بتغير العوامل الداخلة عليه، نحو: أقبل محمدٌ، رأيت محمدًا، مررت بمحمدٍ.", id: "**Mabni**: akhirnya tetap satu keadaan dalam susunan apa pun (*haitsu, aina*). **Mu'rab**: akhirnya berubah sesuai 'amil (*Muhammadun – Muhammadan – Muhammadin*)." } },
    { t: { ar: "ما أنواع البناء؟ مثِّل لكل نوع، واذكر دليلها.", id: "Apa saja macam bina'? Beri contoh masing-masing dan sebutkan dalilnya." }, j: { ar: "أربعة: السكون: لم، لن. الضم: حيث، نحن. الفتح: أين، ليت، ثم. الكسر: باء الجر ولامه. ودليلها الاستقراء والسماع عن العرب.", id: "Empat: **sukun** (*lam, lan*), **dhammah** (*haitsu, nahnu*), **fathah** (*aina, laita, tsumma*), **kasrah** (ba' dan lam jar). Dalilnya istiqra' dan **sama'** dari orang Arab." } },
    { t: { ar: "متى يكون الفعل المضارع مبنيًا؟ وما حكم الماضي والأمر؟", id: "Kapan fi'il mudhari' mabni? Bagaimana hukum madhi dan amr?" }, j: { ar: "الماضي والأمر مبنيان دائمًا، والمضارع معرب إلا إذا اتصلت به نون التوكيد أو نون النسوة فيبنى.", id: "Madhi dan amr **selalu mabni**. Mudhari' mu'rab, kecuali bila bersambung **nun taukid** atau **nun niswah**." } },
    { t: { ar: "اذكر الأسماء المبنية، وما يستثنى منها.", id: "Sebutkan isim-isim yang mabni dan pengecualiannya." }, j: { ar: "الضمائر كلها، والأسماء الموصولة إلا اللذان واللتان، وأسماء الإشارة إلا هذان وهاتان، وأسماء الشرط إلا أيّ.", id: "Semua **dhamir**; **isim maushul** kecuali *alladzani/allatani*; **isim isyarah** kecuali *hadzani/hatani*; **isim syarat** kecuali *ayy*." } },
    { t: { ar: "بيِّن المبني والمعرب في قوله تعالى: ﴿وَمَا أَدْرَاكَ مَا الطَّارِقُ﴾.", id: "Tentukan yang mabni dan mu'rab dalam {وَمَا أَدْرَاكَ مَا الطَّارِقُ}." }, j: { ar: "الواو حرف مبني، وما اسم استفهام مبني، وأدرى فعل ماض مبني والفاعل ضمير مستتر مبني والكاف ضمير مبني، وما مبني، والطارق معرب.", id: "*Wa* (huruf) mabni, *ma* (istifham) mabni, *adra* (madhi) mabni + fa'il dhamir mustatir mabni + *kaf* dhamir mabni, *ma* mabni, dan *ath-thariq* **mu'rab**." } }
  ]
});
