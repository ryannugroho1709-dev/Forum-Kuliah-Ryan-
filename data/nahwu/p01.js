/* Nahwu — Pertemuan 1: Terbentuknya Kata (Isim, Fi'il, Huruf) */
Kuliah.pertemuan("nahwu", {
  no: 1, motif: "huruf", tema: 6, durasi: 20,
  telegram: "https://t.me/Shifaaulqloub7/72",
  bab: { id: "Kata, mabni & mu'rab", ar: "الكلمة والمبني والمعرب" },
  judul: { id: "Terbentuknya Kata: Isim, Fi'il, dan Huruf", ar: "تَكَوُّنُ الكلمات: الاسم والفعل والحرف" },
  ringkas: {
    id: "Pelajaran pembuka nahwu: kata tersusun dari huruf hijaiyah, kata dalam bahasa Arab hanya tiga jenis (isim, fi'il, huruf), pembagian fi'il (madhi, mudhari', amr), pembagian isim (mudzakkar–mu'annats; mufrad–mutsanna–jamak), serta pengertian *al-kalam al-mufid*. Ditutup dengan tathbiq memilah kata dalam Surah Al-Buruj.",
    ar: "الدرس الأول: تتكون الكلمات من الحروف الهجائية، وأنواع الكلمة ثلاثة: اسم وفعل وحرف، وأقسام الفعل: ماضٍ ومضارع وأمر، وأقسام الاسم من حيث التذكير والتأنيث ومن حيث العدد، والكلام المفيد، مع التطبيق على سورة البروج."
  },
  tujuan: [
    { id: "Menjelaskan bahwa kata tersusun dari huruf hijaiyah dan panjangnya 1–7 huruf.", ar: "بيان أن الكلمة تتكون من الحروف الهجائية من حرف إلى سبعة أحرف." },
    { id: "Membedakan isim, fi'il, dan huruf beserta contohnya.", ar: "التمييز بين الاسم والفعل والحرف مع الأمثلة." },
    { id: "Mengenali fi'il madhi, mudhari' (huruf *anaitu*), dan amr.", ar: "معرفة الماضي والمضارع (أحرف «أنيت») والأمر." },
    { id: "Membagi isim dari sisi jenis kelamin dan jumlah, termasuk macam-macam jamak.", ar: "تقسيم الاسم من حيث التذكير والتأنيث والعدد، وأنواع الجمع." },
    { id: "Memahami makna *al-kalam al-mufid*.", ar: "فهم معنى الكلام المفيد." }
  ],
  isi: [
    { t: "pembuka", id: "Dosen membuka setiap pelajaran dengan semboyan **«an-nahwu ta'sis wa tathbiq»** — nahwu itu pondasi (kaidah) sekaligus praktik. Setiap kaidah langsung diterapkan pada ayat-ayat Al-Qur'an, karena *sebaik-baik kalian adalah yang mempelajari Al-Qur'an dan mengajarkannya*: tafsirnya, i'rabnya, tilawahnya, dan tadabburnya.", ar: "النحو تأسيس وتطبيق، وما أحسن التطبيق إذا كان مع كتاب الله؛ فما أجمل أن نتعلم القرآن تفسيرًا وإعرابًا وتلاوة وتدبرًا." },

    { t: "judul", id: "Dari Apa Kata Tersusun?", ar: "مِمَّ تتكون الكلمات؟" },
    { t: "p", id: "Kata-kata tersusun dari **huruf hijaiyah** yang berjumlah **28 huruf** — dimulai dari alif dan diakhiri ya'. Dari huruf-huruf inilah tersusun kata yang kita ucapkan sehari-hari, seperti *ab* (ayah), *umm* (ibu), *akh* (saudara), *ukht* (saudari).", ar: "تتكون الكلمات من الحروف الهجائية، وهي ثمانية وعشرون حرفًا أولها الألف وآخرها الياء، نحو: أب، أم، أخ، أخت." },
    { t: "tabel", judul: { id: "Panjang kata: dari 1 sampai 7 huruf", ar: "عدد أحرف الكلمة من واحد إلى سبعة" },
      kolom: [{ id: "Jumlah huruf", ar: "عدد الأحرف" }, { id: "Contoh", ar: "مثال" }, { id: "Keterangan", ar: "ملاحظة" }],
      baris: [
        ["1", { ar: "بِـ ، أَ", id: "ba' dan hamzah" }, { id: "Ba' jar dalam {بِسْمِ اللَّهِ}; hamzah istifham dalam {أَلَمْ نَشْرَحْ}", ar: "باء الجر وهمزة الاستفهام" }],
        ["2", { ar: "مِنْ ، فِي", id: "min, fi" }, { id: "Huruf jar", ar: "حرفا جر" }],
        ["3", { ar: "عِنَب ، شَجَر", id: "'inab, syajar" }, { id: "Anggur, pohon", ar: "" }],
        ["4", { ar: "جَدْوَل ، جَعْفَر", id: "jadwal, ja'far" }, { id: "Tabel/sungai kecil, nama orang", ar: "" }],
        ["5", { ar: "سَفَرْجَل", id: "safarjal" }, { id: "Buah quince", ar: "" }],
        ["6", { ar: "زَعْفَرَان", id: "za'faran" }, { id: "Kunyit/safron", ar: "" }],
        ["7", { ar: "اسْتِفْهَام", id: "istifham" }, { id: "Batas maksimal — kata tidak melebihi 7 huruf", ar: "لا تتجاوز الكلمة سبعة أحرف" }]
      ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Satu huruf pun bisa menjadi satu kata", ar: "الحرف الواحد قد يكون كلمة" }, id: "Dalam {بِسْمِ اللَّهِ}, huruf *ba'* adalah satu kata utuh (huruf jar). Begitu pula hamzah istifham dalam {أَلَمْ نَشْرَحْ لَكَ صَدْرَكَ}. Jadi \"kata\" dalam nahwu tidak selalu sama dengan \"kata\" dalam tulisan — satu tulisan bisa terdiri dari beberapa kata.", ar: "الباء في «بسم الله» كلمة، وهمزة الاستفهام في «ألم نشرح» كلمة." },

    { t: "judul", id: "Tiga Jenis Kata", ar: "أنواع الكلمة ثلاثة" },
    { t: "p", id: "Kata dalam bahasa Arab hanya ada **tiga jenis: fi'il, isim, dan huruf**. Dalilnya adalah **istiqra'** (penelitian menyeluruh): para ulama meneliti ucapan orang Arab dan mendapati tidak ada yang keluar dari tiga jenis ini.", ar: "الكلمات في العربية ثلاثة أنواع: فعل واسم وحرف، ودليله الاستقراء؛ فالعلماء استقرؤوا كلام العرب فوجدوه لا يخرج عن هذه الثلاثة." },
    { t: "peta", ikon: "harakat", pusat: { id: "Al-Kalimah (kata)", ar: "الكلمة" }, cabang: [
      { id: "Fi'il", ar: "الفعل", sub: [{ id: "Peristiwa + terikat waktu", ar: "حدث مقترن بزمن" }, { id: "kataba – yaktubu – uktub", ar: "كَتَبَ – يَكْتُبُ – اُكْتُبْ" }] },
      { id: "Isim", ar: "الاسم", sub: [{ id: "Menunjuk zat; tidak terikat waktu", ar: "يدل على ذات ولا يقترن بزمن" }, { id: "Muhammad, tuffahah, ardh, sama'", ar: "مُحَمَّد، تُفَّاحَة، أَرْض، سَمَاء" }] },
      { id: "Huruf", ar: "الحرف", sub: [{ id: "Maknanya tampak hanya bersama kata lain", ar: "لا يظهر معناه إلا مع غيره" }, { id: "hal, fi, lam, min, ila, tsumma", ar: "هَلْ، فِي، لَمْ، مِنْ، إِلَى، ثُمَّ" }] }
    ] },
    { t: "poin", item: [
      { ikon: "bolt", judul: { id: "Fi'il", ar: "الفعل" }, id: "Kata yang menunjukkan **terjadinya sesuatu pada waktu tertentu**. *Kataba* (telah menulis) — masa lalu; *yaktubu* (sedang/akan menulis) — sekarang; *uktub* (tulislah!) — permintaan di masa depan.", ar: "ما يدل على حصول شيء في زمن معين، نحو: كتب، يكتب، اكتب." },
      { ikon: "user", judul: { id: "Isim", ar: "الاسم" }, id: "Kata yang menunjuk **zat tertentu** — manusia, hewan, tumbuhan, benda mati, atau sifat — dan **tidak terikat waktu**. Contoh: *Muhammad, 'Ali, tuffahah* (apel), *ardh* (bumi), *sama'* (langit).", ar: "ما يدل على ذات معينة من إنسان أو حيوان أو نبات أو جماد، ولا يرتبط بزمن." },
      { ikon: "chain", judul: { id: "Huruf", ar: "الحرف" }, id: "Kata yang **maknanya tidak tampak pada dirinya sendiri**, melainkan bersama kata lain: huruf jar, huruf qasam, huruf nasikh (inna dan saudara-saudaranya), huruf 'athaf, dan lainnya.", ar: "ما لا يظهر معناه إلا مع غيره: كحروف الجر والقسم والحروف الناسخة وحروف العطف." }
    ] },

    { t: "judul", id: "Pembagian Fi'il", ar: "أقسام الفعل" },
    { t: "langkah", item: [
      { judul: { id: "Fi'il madhi", ar: "الفعل الماضي" }, id: "Menunjukkan terjadinya sesuatu pada **waktu yang telah lewat dan selesai**: كَتَبَ، خَرَجَ، دَخَلَ، صَلَّى، نَامَ، دَحْرَجَ، انْطَلَقَ، اسْتَخْرَجَ.", ar: "ما يدل على حصول شيء في زمن مضى وانتهى." },
      { judul: { id: "Fi'il mudhari'", ar: "الفعل المضارع" }, id: "Menunjukkan terjadinya sesuatu **sekarang atau yang akan datang**. Wajib diawali salah satu **huruf mudhara'ah** yang terkumpul dalam kata **«أَنَيْتُ»**: alif, nun, ya', ta' — أَكُونُ، نَكُونُ، يَكُونُ، تَكُونُ.", ar: "ما يدل على حصول شيء في الحال أو الاستقبال، ولا بد أن يبدأ بأحد أحرف المضارعة المجموعة في «أنيت»." },
      { judul: { id: "Fi'il amr", ar: "فعل الأمر" }, id: "Kata untuk **meminta terjadinya sesuatu** di masa mendatang: اُكْتُبْ، اُخْرُجْ، دَحْرِجْ، انْطَلِقْ، اسْتَخْرِجْ.", ar: "ما يُطلب به حصول شيء في المستقبل." }
    ] },
    { t: "contoh", judul: { id: "Satu akar, tiga fi'il", ar: "مادة واحدة وثلاثة أفعال" },
      sorot: [
        { label: { id: "Madhi", ar: "ماضٍ" }, warna: "blue", id: "telah memukul · keluar · menggelindingkan · berangkat", ar: "ضَرَبَ · خَرَجَ · دَحْرَجَ · انْطَلَقَ" },
        { label: { id: "Mudhari'", ar: "مضارع" }, warna: "green", id: "sedang/akan memukul · keluar · menggelindingkan · berangkat", ar: "يَضْرِبُ · يَخْرُجُ · يُدَحْرِجُ · يَنْطَلِقُ" },
        { label: { id: "Amr", ar: "أمر" }, warna: "gold", id: "pukullah · keluarlah · gelindingkanlah · berangkatlah", ar: "اِضْرِبْ · اُخْرُجْ · دَحْرِجْ · اِنْطَلِقْ" }
      ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Katakan «fi'lun madhin», bukan «madhi»", ar: "قل: فعلٌ ماضٍ، لا: ماضي" }, id: "Kata *madhin* adalah **isim manqush** (isim yang berakhiran ya' dengan huruf sebelumnya berharakat kasrah). Jika tidak memakai *al* dan dalam keadaan **rafa' atau jarr**, ya'-nya dibuang: *madhin, qadhin, sa'in*. Dengan *al*: *al-madhi, al-qadhi*. Dalam keadaan **nashab**, ya' ditetapkan: *ra'aitu qadhiyan*.", ar: "لأن «ماضٍ» اسم منقوص، والمنقوص غير المحلى بأل تحذف ياؤه رفعًا وجرًا: ماضٍ، قاضٍ، ساعٍ، وتثبت نصبًا: رأيت قاضيًا." },

    { t: "judul", id: "Pembagian Isim", ar: "أقسام الاسم" },
    { t: "banding", judul: { id: "Dari sisi jenis kelamin", ar: "من حيث التذكير والتأنيث" },
      kiri: { judul: { id: "Mudzakkar", ar: "المذكر" }, ikon: "user", warna: "blue", poin: [{ id: "Menunjukkan laki-laki/jantan", ar: "ما دل على ذكر" }, { id: "Ahmad, Muhammad, 'Ali, Husain", ar: "أَحْمَد، مُحَمَّد، عَلِيّ، حُسَيْن" }, { id: "jamal (unta), hishan (kuda), hirr (kucing jantan)", ar: "جَمَل، حِصَان، هِرّ" }] },
      kanan: { judul: { id: "Mu'annats", ar: "المؤنث" }, ikon: "heart", warna: "amber", poin: [{ id: "Menunjukkan perempuan/betina", ar: "ما دل على أنثى" }, { id: "Fathimah, 'Aisyah", ar: "فَاطِمَة، عَائِشَة" }, { id: "naqah (unta betina), hirrah (kucing betina)", ar: "نَاقَة، هِرَّة" }] } },
    { t: "tabel", judul: { id: "Dari sisi jumlah", ar: "من حيث العدد" },
      kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Pengertian", ar: "التعريف" }, { id: "Contoh", ar: "أمثلة" }],
      baris: [
        [{ id: "Mufrad", ar: "المفرد" }, { id: "Menunjukkan satu (laki-laki atau perempuan)", ar: "ما دل على واحد أو واحدة" }, { ar: "مُجْتَهِد، مُجْتَهِدَة، قَلَم، كُرَّاسَة", id: "mujtahid, mujtahidah, qalam" }],
        [{ id: "Mutsanna", ar: "المثنى" }, { id: "Menunjukkan dua, dengan tambahan **alif-nun** atau **ya'-nun** pada mufradnya", ar: "ما دل على اثنين أو اثنتين بزيادة ألف ونون أو ياء ونون" }, { ar: "فَاضِلَانِ / فَاضِلَيْنِ، مُجْتَهِدَتَانِ / مُجْتَهِدَتَيْنِ", id: "fadhilani / fadhilaini" }],
        [{ id: "Jamak", ar: "الجمع" }, { id: "Menunjukkan lebih dari dua", ar: "ما دل على أكثر من اثنين أو اثنتين" }, { ar: "مُجْتَهِدُونَ، مُسْلِمَات، فُضَلَاء", id: "mujtahidun, muslimat, fudhala'" }]
      ] },
    { t: "peta", ikon: "layers", pusat: { id: "Macam-macam jamak", ar: "أقسام الجمع" }, cabang: [
      { id: "Jamak taksir", ar: "جمع التكسير", sub: [{ id: "Bentuk mufrad berubah", ar: "بتغيير صورة المفرد" }, { id: "rajul → rijal, kitab → kutub, qalam → aqlam", ar: "رَجُل ← رِجَال، كِتَاب ← كُتُب، قَلَم ← أَقْلَام، فَاضِل ← فُضَلَاء" }] },
      { id: "Jamak mudzakkar salim", ar: "جمع المذكر السالم", sub: [{ id: "Tambahan waw-nun / ya'-nun", ar: "بزيادة واو ونون أو ياء ونون" }, { id: "muslimun / muslimin, mu'minun / mu'minin", ar: "مُسْلِمُونَ / مُسْلِمِينَ، مُؤْمِنُونَ / مُؤْمِنِينَ" }] },
      { id: "Jamak mu'annats salim", ar: "جمع المؤنث السالم", sub: [{ id: "Tambahan alif-ta' (al-jam' al-mazid bil-alif wat-ta')", ar: "الجمع المزيد بالألف والتاء" }, { id: "muslimat, mu'minat, qanitat, 'abidat", ar: "مُسْلِمَات، مُؤْمِنَات، قَانِتَات، عَابِدَات" }] }
    ] },
    { t: "catatan", gaya: "info", judul: { id: "Jamak taksir vs jamak tashih", ar: "التكسير والتصحيح" }, id: "Disebut **taksir** (pecah) karena bentuk mufradnya \"dipecah\": *rajul* (ra' fathah, jim dhammah) menjadi *rijal* (ra' kasrah, jim fathah). Disebut **tashih/salim** (utuh) karena bentuk mufradnya tetap utuh, hanya ditambah akhiran: *muslim → muslimun*.", ar: "سمي التكسير لتغير صورة المفرد، وسمي السالم لسلامة صورة المفرد." },

    { t: "judul", id: "Al-Kalam al-Mufid", ar: "الكلام المفيد" },
    { t: "definisi", istilah: { id: "Ucapan yang memberikan **faedah sempurna sehingga pendengar merasa cukup** dan pembicara pantas diam setelahnya (*yahsunu as-sukutu 'alaiha*).", ar: "هو الذي يفيد إفادة يحسن السكوت عليها." } },
    { t: "banding", judul: { id: "Kalam vs bukan kalam", ar: "كلام وليس بكلام" },
      kiri: { judul: { id: "Kalam (mufid)", ar: "كلام مفيد" }, poin: [{ id: "Ilmu itu bermanfaat", ar: "العِلْمُ نَافِعٌ" }, { id: "Kebodohan itu berbahaya", ar: "الجَهْلُ ضَارٌّ" }, { id: "Sungguh beruntung orang-orang beriman", ar: "{قَدْ أَفْلَحَ الْمُؤْمِنُونَ}" }] },
      kanan: { judul: { id: "Belum kalam", ar: "ليس كلامًا" }, poin: [{ id: "\"Jika Muhammad datang…\" — pendengar masih menunggu kelanjutannya", ar: "إِنْ جَاءَ مُحَمَّدٌ" }] } },
    { t: "cek", q: { id: "Manakah yang termasuk *kalam mufid* menurut ahli nahwu?", ar: "أيُّها كلام مفيد عند النحاة؟" }, o: [{ ar: "إِنْ جَاءَ مُحَمَّدٌ" }, { ar: "العِلْمُ نَافِعٌ" }, { ar: "فِي البَيْتِ" }], j: 1, b: { id: "*Al-'ilmu nafi'un* memberi faedah sempurna; yang lain masih menggantung.", ar: "لأنه أفاد فائدة يحسن السكوت عليها." } },

    { t: "judul", id: "Tathbiq: Surah Al-Buruj (1–9)", ar: "التطبيق: سورة البروج" },
    { t: "p", id: "Pada tathbiq pertama ini, dosen belum mengi'rab secara lengkap — beliau **memilah setiap kata: isim, fi'il, atau huruf**, dan menunjukkan bahwa satu tulisan bisa terdiri dari beberapa kata. Ketuk setiap kata di bawah.", ar: "في هذا التطبيق نميز كل كلمة: اسم أم فعل أم حرف، ونبين أن المقطع الواحد قد يتكون من أكثر من كلمة." },
    { t: "irab", judul: { id: "Ayat 1–3", ar: "الآيات ١–٣" }, ayat: "وَالسَّمَاءِ ذَاتِ الْبُرُوجِ ۝ وَالْيَوْمِ الْمَوْعُودِ ۝ وَشَاهِدٍ وَمَشْهُودٍ", src: "البروج: ١–٣", kata: [
      { w: "وَ", h: "harf", id: "**Huruf** qasam dan jar — satu kata sendiri.", ar: "الواو: حرف قسم وجر، وهي كلمة." },
      { w: "السَّمَاءِ", h: "ism", id: "**Isim** — ber-*al* dan majrur.", ar: "اسم محلى بأل مجرور." },
      { w: "ذَاتِ", h: "ism", id: "**Isim** — karena majrur; isim-lah yang bisa di-jarr.", ar: "اسم؛ لأنه مجرور، والاسم يجر." },
      { w: "الْبُرُوجِ", h: "ism", id: "**Isim** ber-*al*.", ar: "اسم محلى بأل." },
      { w: "وَ", h: "harf", id: "**Huruf** 'athaf.", ar: "حرف عطف." },
      { w: "الْيَوْمِ", h: "ism", id: "**Isim**, di-'athaf-kan kepada *as-sama'*.", ar: "اسم معطوف على السماء." },
      { w: "الْمَوْعُودِ", h: "ism", id: "**Isim** — majrur.", ar: "اسم؛ لأنه مجرور." },
      { w: "وَشَاهِدٍ", h: "ism", id: "Dua kata: *wa* (huruf 'athaf) + *syahid* (**isim**, bertanwin).", ar: "كلمتان: حرف العطف والاسم «شاهد»." },
      { w: "وَمَشْهُودٍ", h: "ism", id: "Dua kata: huruf 'athaf + **isim** *masyhud*.", ar: "حرف عطف واسم." }
    ] },
    { t: "irab", judul: { id: "Ayat 4–7", ar: "الآيات ٤–٧" }, ayat: "قُتِلَ أَصْحَابُ الْأُخْدُودِ ۝ النَّارِ ذَاتِ الْوَقُودِ ۝ إِذْ هُمْ عَلَيْهَا قُعُودٌ ۝ وَهُمْ عَلَىٰ مَا يَفْعَلُونَ بِالْمُؤْمِنِينَ شُهُودٌ", src: "البروج: ٤–٧", kata: [
      { w: "قُتِلَ", h: "fiil", id: "**Fi'il madhi**.", ar: "فعل ماضٍ." },
      { w: "أَصْحَابُ", h: "ism", id: "**Isim**.", ar: "اسم." },
      { w: "الْأُخْدُودِ", h: "ism", id: "**Isim**.", ar: "اسم." },
      { w: "النَّارِ ذَاتِ الْوَقُودِ", h: "ism", id: "Semuanya **isim**.", ar: "كلها أسماء." },
      { w: "إِذْ", h: "ism", id: "*Zharf* (keterangan waktu) — termasuk isim.", ar: "ظرف." },
      { w: "هُمْ", h: "ism", id: "**Dhamir** (kata ganti) — dhamir adalah isim.", ar: "ضمير، والضمير اسم." },
      { w: "عَلَى", h: "harf", id: "*'Alaiha* = dua kata: **huruf jar** *'ala* …", ar: "«عليها» كلمتان: على حرف جر…" },
      { w: "هَا", h: "ism", id: "… + **dhamir** *ha* (isim).", ar: "…والضمير «ها» اسم." },
      { w: "قُعُودٌ", h: "ism", id: "**Isim**.", ar: "اسم." },
      { w: "مَا", h: "ism", id: "**Isim maushul** (kata sambung) — isim.", ar: "اسم موصول." },
      { w: "يَفْعَلُ", h: "fiil", id: "*Yaf'alun* = dua kata: **fi'il mudhari'** *yaf'al* …", ar: "«يفعلون» كلمتان: يفعل فعل مضارع…" },
      { w: "ونَ", h: "ism", id: "… + **waw jama'ah**, yaitu dhamir (isim).", ar: "…وواو الجماعة ضمير، والضمير اسم." },
      { w: "بِ", h: "harf", id: "**Huruf jar** ba'.", ar: "الباء حرف جر." },
      { w: "الْمُؤْمِنِينَ", h: "ism", id: "**Isim**, jamak mudzakkar salim (tambahan ya'-nun) — majrur dengan ya'.", ar: "اسم جمع مذكر سالم مجرور بالياء." },
      { w: "شُهُودٌ", h: "ism", id: "**Isim**.", ar: "اسم." }
    ] },
    { t: "irab", judul: { id: "Ayat 8–9", ar: "الآيتان ٨–٩" }, ayat: "وَمَا نَقَمُوا مِنْهُمْ إِلَّا أَن يُؤْمِنُوا بِاللَّهِ الْعَزِيزِ الْحَمِيدِ ۝ الَّذِي لَهُ مُلْكُ السَّمَاوَاتِ وَالْأَرْضِ ۚ وَاللَّهُ عَلَىٰ كُلِّ شَيْءٍ شَهِيدٌ", src: "البروج: ٨–٩", kata: [
      { w: "وَمَا", h: "harf", id: "Dua kata: huruf 'athaf + *ma* **huruf nafi**.", ar: "الواو حرف عطف، وما حرف نفي." },
      { w: "نَقَمُوا", h: "fiil", id: "Dua kata: **fi'il madhi** *naqama* + waw jama'ah (dhamir/isim).", ar: "الفعل الماضي «نقم» وواو الجماعة." },
      { w: "مِنْهُمْ", h: "harf", id: "Dua kata: *min* (huruf) + *hum* (dhamir/isim).", ar: "«من» حرف و«هم» ضمير." },
      { w: "إِلَّا", h: "harf", id: "**Huruf**.", ar: "حرف." },
      { w: "أَنْ", h: "harf", id: "**Huruf**.", ar: "حرف." },
      { w: "يُؤْمِنُوا", h: "fiil", id: "**Fi'il mudhari'** *yu'min* + waw jama'ah.", ar: "فعل مضارع وواو الجماعة." },
      { w: "بِاللَّهِ", h: "ism", id: "Ba' (huruf) + **lafzhul jalalah** (isim).", ar: "الباء حرف، ولفظ الجلالة اسم." },
      { w: "الْعَزِيزِ الْحَمِيدِ", h: "ism", id: "Dua **isim** majrur.", ar: "اسمان مجروران." },
      { w: "الَّذِي", h: "ism", id: "**Isim maushul**.", ar: "اسم موصول." },
      { w: "لَهُ", h: "harf", id: "Lam (huruf jar) + ha' (dhamir).", ar: "اللام حرف جر والهاء ضمير." },
      { w: "مُلْكُ", h: "ism", id: "**Isim** — bisa menerima *al* dan tanwin.", ar: "اسم؛ يقبل أل والتنوين." },
      { w: "السَّمَاوَاتِ", h: "ism", id: "**Isim**, jamak mu'annats salim (tambahan alif-ta').", ar: "اسم جمع مؤنث سالم." },
      { w: "وَالْأَرْضِ", h: "ism", id: "Huruf 'athaf + **isim**.", ar: "حرف عطف واسم." },
      { w: "وَاللَّهُ", h: "ism", id: "Waw isti'naf (huruf) + lafzhul jalalah (isim).", ar: "الواو استئنافية، ولفظ الجلالة اسم." },
      { w: "عَلَى", h: "harf", id: "**Huruf jar**.", ar: "حرف جر." },
      { w: "كُلِّ", h: "ism", id: "**Isim** — dimasuki huruf jar, dan huruf jar hanya masuk pada isim.", ar: "اسم؛ لدخول حرف الجر عليه." },
      { w: "شَيْءٍ", h: "ism", id: "**Isim** — bertanwin.", ar: "اسم؛ لأنه منون." },
      { w: "شَهِيدٌ", h: "ism", id: "**Isim** — bertanwin.", ar: "اسم؛ لأنه منون." }
    ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Tanda-tanda isim yang dipakai dosen", ar: "علامات الاسم المستعملة في التطبيق" }, id: "Saat memilah, dosen berdalil dengan tanda isim: **ber-*al***, **bertanwin**, **majrur/dimasuki huruf jar**. Fi'il mudhari' dikenali dari huruf *anaitu* di awalnya.", ar: "الاسم يعرف بأل والتنوين والجر ودخول حرف الجر." },
    { t: "ringkasan", item: [
      { id: "Kata tersusun dari 28 huruf hijaiyah; panjangnya 1–7 huruf.", ar: "الكلمة من الحروف الهجائية، من حرف إلى سبعة." },
      { id: "Jenis kata hanya tiga — isim, fi'il, huruf — berdasarkan istiqra'.", ar: "أنواع الكلمة ثلاثة بالاستقراء." },
      { id: "Fi'il: madhi, mudhari' (diawali huruf «أنيت»), amr.", ar: "الفعل: ماضٍ ومضارع وأمر." },
      { id: "Isim: mudzakkar/mu'annats; mufrad/mutsanna/jamak (taksir, mudzakkar salim, mu'annats salim).", ar: "الاسم: مذكر ومؤنث؛ مفرد ومثنى وجمع." },
      { id: "Kalam mufid = ucapan yang pantas didiamkan setelahnya.", ar: "الكلام المفيد ما يحسن السكوت عليه." }
    ] }
  ],
  istilah: [
    { ar: "الحروف الهجائية", latin: "al-huruf al-hija'iyyah", id: "Huruf hijaiyah", def: { id: "28 huruf (alif hingga ya') yang menyusun seluruh kata.", ar: "ثمانية وعشرون حرفًا تتكون منها الكلمات." } },
    { ar: "الاستقراء", latin: "al-istiqra'", id: "Penelitian induktif", def: { id: "Meneliti ucapan Arab secara menyeluruh; dalil bahwa kata hanya tiga jenis.", ar: "تتبع كلام العرب، وهو دليل انحصار الكلمة في ثلاثة." } },
    { ar: "الفعل", latin: "al-fi'l", id: "Kata kerja", def: { id: "Kata yang menunjukkan terjadinya sesuatu pada waktu tertentu.", ar: "ما دل على حصول شيء في زمن معين." } },
    { ar: "الاسم", latin: "al-ism", id: "Kata benda", def: { id: "Kata yang menunjuk zat tertentu dan tidak terikat waktu.", ar: "ما دل على ذات ولم يقترن بزمن." } },
    { ar: "الحرف", latin: "al-harf", id: "Huruf (partikel)", def: { id: "Kata yang maknanya tampak hanya bersama kata lain.", ar: "ما لا يظهر معناه إلا مع غيره." } },
    { ar: "أحرف المضارعة", latin: "ahruf al-mudhara'ah", id: "Huruf awalan mudhari'", def: { id: "Alif, nun, ya', ta' — terkumpul dalam «أَنَيْتُ».", ar: "الهمزة والنون والياء والتاء، مجموعة في «أنيت»." } },
    { ar: "الاسم المنقوص", latin: "al-ism al-manqush", id: "Isim berakhiran ya'", def: { id: "Ya'-nya dibuang saat rafa'/jarr tanpa *al*: *madhin, qadhin*.", ar: "تحذف ياؤه رفعًا وجرًا إذا لم يحلَّ بأل." } },
    { ar: "جمع التكسير", latin: "jam' at-taksir", id: "Jamak taksir", def: { id: "Jamak dengan berubahnya bentuk mufrad: *rajul → rijal*.", ar: "ما تغيرت فيه صورة المفرد." } },
    { ar: "جمع المذكر السالم", latin: "jam' al-mudzakkar as-salim", id: "Jamak mudzakkar salim", def: { id: "Tambahan waw-nun / ya'-nun: *muslimun/muslimin*.", ar: "ما زيد فيه واو ونون أو ياء ونون." } },
    { ar: "الكلام المفيد", latin: "al-kalam al-mufid", id: "Kalimat sempurna", def: { id: "Ucapan yang pantas didiamkan setelahnya.", ar: "ما أفاد فائدة يحسن السكوت عليها." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Jumlah huruf hijaiyah yang menyusun kata-kata Arab adalah…", ar: "عدد الحروف الهجائية…" }, o: [{ id: "26", ar: "٢٦" }, { id: "28", ar: "٢٨" }, { id: "29", ar: "٢٩" }, { id: "30", ar: "٣٠" }], j: 1 },
      { q: { id: "Kata terpanjang dalam bahasa Arab paling banyak terdiri dari… huruf, seperti *istifham*.", ar: "أقصى عدد لأحرف الكلمة…" }, o: [{ id: "5", ar: "٥" }, { id: "6", ar: "٦" }, { id: "7", ar: "٧" }, { id: "8", ar: "٨" }], j: 2 },
      { q: { id: "Dalil bahwa kata hanya terbagi tiga (isim, fi'il, huruf) adalah…", ar: "دليل انحصار الكلمة في ثلاثة…" }, o: [{ id: "Ijma'", ar: "الإجماع" }, { id: "Qiyas", ar: "القياس" }, { id: "Istiqra'", ar: "الاستقراء" }, { id: "Hadits", ar: "الحديث" }], j: 2 },
      { q: { id: "Kata yang menunjuk zat dan tidak terikat waktu disebut…", ar: "ما دل على ذات ولم يقترن بزمن…" }, o: [{ id: "Fi'il", ar: "فعل" }, { id: "Isim", ar: "اسم" }, { id: "Huruf", ar: "حرف" }, { id: "Kalam", ar: "كلام" }], j: 1 },
      { q: { id: "Huruf mudhara'ah terkumpul dalam kata…", ar: "أحرف المضارعة مجموعة في…" }, o: [{ ar: "«سألتمونيها»" }, { ar: "«أنيت»" }, { ar: "«وأي»" }, { ar: "«لن»" }], j: 1 },
      { q: { id: "Manakah fi'il amr?", ar: "أيها فعل أمر؟" }, o: [{ ar: "دَحْرَجَ" }, { ar: "يُدَحْرِجُ" }, { ar: "دَحْرِجْ" }, { ar: "مُدَحْرِج" }], j: 2 },
      { q: { id: "Mengapa diucapkan «fi'lun madhin» dan bukan «madhi»?", ar: "لماذا نقول: فعلٌ ماضٍ؟" }, o: [{ id: "Karena madhin isim manqush; ya'-nya dibuang saat rafa'/jarr tanpa *al*", ar: "لأنه اسم منقوص" }, { id: "Karena madhin fi'il", ar: "لأنه فعل" }, { id: "Karena dharurat syair", ar: "للضرورة" }, { id: "Karena madhin huruf", ar: "لأنه حرف" }], j: 0 },
      { q: { id: "*Rijal* (jamak dari *rajul*) termasuk…", ar: "«رجال» جمع…" }, o: [{ id: "Jamak mudzakkar salim", ar: "مذكر سالم" }, { id: "Jamak mu'annats salim", ar: "مؤنث سالم" }, { id: "Jamak taksir", ar: "تكسير" }, { id: "Mutsanna", ar: "مثنى" }], j: 2 },
      { q: { id: "Dalam {وَهُمْ عَلَى مَا يَفْعَلُونَ}, *yaf'alun* terdiri dari…", ar: "«يفعلون» تتكون من…" }, o: [{ id: "Satu kata", ar: "كلمة واحدة" }, { id: "Fi'il + waw jama'ah (dhamir)", ar: "فعل وواو الجماعة" }, { id: "Isim + huruf", ar: "اسم وحرف" }, { id: "Dua huruf", ar: "حرفين" }], j: 1 },
      { q: { id: "Dalam {وَاللَّهُ عَلَى كُلِّ شَيْءٍ}, *kull* adalah isim karena…", ar: "«كل» اسم لأنه…" }, o: [{ id: "Diawali huruf *anaitu*", ar: "بدئ بأحرف المضارعة" }, { id: "Dimasuki huruf jar", ar: "دخل عليه حرف الجر" }, { id: "Menunjukkan waktu lampau", ar: "دل على الماضي" }, { id: "Tidak bermakna", ar: "لا معنى له" }], j: 1 }
    ],
    bs: [
      { t: { id: "Satu huruf, seperti ba' dalam «بسم الله», bisa menjadi satu kata.", ar: "الحرف الواحد قد يكون كلمة." }, j: true },
      { t: { id: "Kata dalam bahasa Arab bisa terdiri dari 8 huruf.", ar: "قد تبلغ الكلمة ثمانية أحرف." }, j: false, b: { id: "Maksimal 7 huruf.", ar: "لا تتجاوز سبعة." } },
      { t: { id: "Fi'il mudhari' menunjukkan waktu sekarang atau yang akan datang.", ar: "المضارع للحال أو الاستقبال." }, j: true },
      { t: { id: "Huruf memiliki makna sempurna pada dirinya sendiri.", ar: "الحرف يظهر معناه بنفسه." }, j: false, b: { id: "Maknanya tampak hanya bersama kata lain.", ar: "لا يظهر معناه إلا مع غيره." } },
      { t: { id: "*Muslimat* adalah jamak mu'annats salim.", ar: "«مسلمات» جمع مؤنث سالم." }, j: true },
      { t: { id: "Mutsanna dibentuk dengan menambah waw-nun pada mufrad.", ar: "المثنى بزيادة واو ونون." }, j: false, b: { id: "Mutsanna: alif-nun atau ya'-nun. Waw-nun untuk jamak mudzakkar salim.", ar: "المثنى بالألف والنون أو الياء والنون." } },
      { t: { id: "«إن جاء محمد» sudah termasuk kalam mufid.", ar: "«إن جاء محمد» كلام مفيد." }, j: false, b: { id: "Belum, karena pendengar masih menunggu kelanjutannya.", ar: "لا يحسن السكوت عليه." } },
      { t: { id: "Ya' isim manqush tetap ditulis saat nashab: *ra'aitu qadhiyan*.", ar: "تثبت ياء المنقوص نصبًا." }, j: true }
    ],
    jodoh: [
      { a: { ar: "كَتَبَ" }, b: { id: "Fi'il madhi", ar: "فعل ماضٍ" } },
      { a: { ar: "يَكْتُبُ" }, b: { id: "Fi'il mudhari'", ar: "فعل مضارع" } },
      { a: { ar: "اُكْتُبْ" }, b: { id: "Fi'il amr", ar: "فعل أمر" } },
      { a: { ar: "مُسْلِمُونَ" }, b: { id: "Jamak mudzakkar salim", ar: "جمع مذكر سالم" } },
      { a: { ar: "أَقْلَام" }, b: { id: "Jamak taksir", ar: "جمع تكسير" } },
      { a: { ar: "فَاضِلَانِ" }, b: { id: "Mutsanna", ar: "مثنى" } },
      { a: { ar: "مُؤْمِنَات" }, b: { id: "Jamak mu'annats salim", ar: "جمع مؤنث سالم" } }
    ],
    isian: [
      { t: { id: "Kata dalam bahasa Arab ada tiga: isim, fi'il, dan ______.", ar: "الكلمة: اسم وفعل و______." }, j: { id: "huruf", ar: "حرف" }, x: [{ id: "kalam", ar: "كلام" }, { id: "jumlah", ar: "جملة" }, { id: "dhamir", ar: "ضمير" }] },
      { t: { id: "Fi'il yang menunjukkan permintaan di masa depan disebut fi'il ______.", ar: "ما يطلب به حصول شيء: فعل ______." }, j: { id: "amr", ar: "أمر" }, x: [{ id: "madhi", ar: "ماضٍ" }, { id: "mudhari'", ar: "مضارع" }, { id: "majhul", ar: "مجهول" }] },
      { t: { id: "*Al-kalam al-mufid* adalah ucapan yang pantas ______ setelahnya.", ar: "الكلام المفيد ما يحسن ______ عليه." }, j: { id: "didiamkan (as-sukut)", ar: "السكوت" }, x: [{ id: "diulang", ar: "التكرار" }, { id: "ditanyakan", ar: "السؤال" }, { id: "ditulis", ar: "الكتابة" }] },
      { t: { id: "Jamak taksir disebut demikian karena ______ mufradnya berubah.", ar: "سمي التكسير لتغير ______ المفرد." }, j: { id: "bentuk", ar: "صورة" }, x: [{ id: "makna", ar: "معنى" }, { id: "jenis", ar: "جنس" }, { id: "waktu", ar: "زمن" }] }
    ],
    pilah: { t: { id: "Pilah setiap kata: isim, fi'il, atau huruf?", ar: "صنِّف: اسم أم فعل أم حرف؟" },
      kategori: [{ id: "Isim", ar: "اسم" }, { id: "Fi'il", ar: "فعل" }, { id: "Huruf", ar: "حرف" }],
      item: [
        { t: { ar: "تُفَّاحَة" }, k: 0 }, { t: { ar: "انْطَلَقَ" }, k: 1 }, { t: { ar: "فِي" }, k: 2 },
        { t: { ar: "سَمَاء" }, k: 0 }, { t: { ar: "يَسْتَخْرِجُ" }, k: 1 }, { t: { ar: "ثُمَّ" }, k: 2 },
        { t: { ar: "هُمْ" }, k: 0 }, { t: { ar: "اُخْرُجْ" }, k: 1 }, { t: { ar: "لَمْ" }, k: 2 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "مِمَّ تتكون الكلمات؟ وكم عدد أحرف الكلمة؟ مثِّل لكل عدد.", id: "Dari apa kata tersusun? Berapa jumlah huruf sebuah kata? Beri contoh untuk tiap jumlah." }, j: { ar: "تتكون الكلمات من الحروف الهجائية وهي ثمانية وعشرون حرفًا. وقد تكون الكلمة حرفًا واحدًا كباء الجر، أو حرفين: من، في، أو ثلاثة: عنب، أو أربعة: جعفر، أو خمسة: سفرجل، أو ستة: زعفران، أو سبعة: استفهام، ولا تتجاوز سبعة.", id: "Dari **28 huruf hijaiyah**. Panjang kata 1–7 huruf: ba' jar (1), *min/fi* (2), *'inab* (3), *ja'far* (4), *safarjal* (5), *za'faran* (6), *istifham* (7); tidak lebih dari tujuh." } },
    { t: { ar: "ما أنواع الكلمة؟ وما دليل حصرها؟ عرِّف كل نوع مع مثال.", id: "Apa saja jenis kata? Apa dalil pembatasannya? Definisikan tiap jenis dengan contoh." }, j: { ar: "ثلاثة: الفعل وهو ما دل على حصول شيء في زمن معين ككتب، والاسم وهو ما دل على ذات ولم يرتبط بزمن كمحمد وتفاحة، والحرف وهو ما لا يظهر معناه إلا مع غيره كفي ولم. ودليل الحصر الاستقراء.", id: "Tiga: **fi'il** (terjadinya sesuatu pada waktu tertentu: *kataba*), **isim** (menunjuk zat, tak terikat waktu: *Muhammad, tuffahah*), **huruf** (maknanya tampak bersama kata lain: *fi, lam*). Dalilnya **istiqra'**." } },
    { t: { ar: "اذكر أقسام الفعل مع التعريف والمثال، وما أحرف المضارعة؟", id: "Sebutkan pembagian fi'il dengan definisi dan contoh. Apa huruf mudhara'ah?" }, j: { ar: "الماضي: ما دل على حصول شيء في زمن مضى: كتب. المضارع: ما دل على الحال أو الاستقبال ويبدأ بأحد أحرف «أنيت»: يكتب. الأمر: ما يطلب به حصول شيء في المستقبل: اكتب.", id: "**Madhi**: telah terjadi (*kataba*). **Mudhari'**: sekarang/akan datang, diawali huruf «**أنيت**» — alif, nun, ya', ta' (*yaktubu*). **Amr**: permintaan di masa depan (*uktub*)." } },
    { t: { ar: "قسِّم الاسم من حيث العدد، وبيِّن أنواع الجمع مع الأمثلة.", id: "Bagilah isim dari sisi jumlah dan jelaskan macam-macam jamak dengan contoh." }, j: { ar: "مفرد: مجتهد. مثنى بزيادة ألف ونون أو ياء ونون: مجتهدان/مجتهدين. جمع: تكسير بتغيير صورة المفرد: رجال، وتصحيح: مذكر سالم بالواو والنون أو الياء والنون: مسلمون/مسلمين، ومؤنث سالم بالألف والتاء: مسلمات.", id: "**Mufrad** (*mujtahid*), **mutsanna** (+alif-nun/ya'-nun: *mujtahidani/mujtahidaini*), **jamak**: *taksir* (bentuk berubah: *rijal*) dan *tashih* — **mudzakkar salim** (*muslimun/muslimin*) dan **mu'annats salim** (*muslimat*)." } },
    { t: { ar: "ما الكلام المفيد؟ مثِّل بمثال لكلام مفيد وآخر غير مفيد.", id: "Apa itu kalam mufid? Beri contoh yang mufid dan yang tidak." }, j: { ar: "الكلام المفيد ما أفاد فائدة يحسن السكوت عليها، نحو: العلم نافع. وأما «إن جاء محمد» فليس كلامًا عند النحاة.", id: "Ucapan yang memberi faedah sehingga **pantas didiamkan** setelahnya: *al-'ilmu nafi'un*. Sedangkan *in ja'a Muhammadun* belum disebut kalam." } }
  ]
});
