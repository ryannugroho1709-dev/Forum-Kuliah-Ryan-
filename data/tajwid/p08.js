/* Tajwid — Pertemuan 8: Bab Pertemuan Dua Sukun (iltiqa' as-sakinain) */
Kuliah.pertemuan("tajwid", {
  no: 8, motif: "kompas", tema: 5, durasi: 22,
  telegram: "https://t.me/Shifaaulqloub7/324",
  bab: { id: "Bab pertemuan dua sukun (iltiqa' as-sakinain)", ar: "باب التقاء الساكنين" },
  judul: { id: "Pertemuan Dua Sukun: Dalam Satu Kata dan Dua Kata", ar: "التقاء الساكنين في كلمة وفي كلمتين" },
  ringkas: {
    id: "Orang Arab tidak memulai dengan sukun dan tidak berhenti pada huruf berharakat. Bila dua sukun bertemu dalam satu kata, umumnya dibiarkan atau dilepas dengan memanjangkan/men-tasydid; bila dalam dua kata, dilepas dengan membuang huruf madd atau dengan menggerakkan sukun pertama (kasrah, dhammah, atau fathah).",
    ar: "لا تبدأ العرب بساكن ولا تقف على متحرك، وإذا التقى ساكنان في كلمة بقيا غالبًا وفي كلمتين يُتخلص منهما بالحذف أو بالتحريك: بالكسر أو الضم أو الفتح."
  },
  tujuan: [
    { id: "Menjelaskan mengapa dua sukun tidak boleh bertemu di awal dan bagaimana keadaannya dalam satu kata.", ar: "بيان قاعدة العرب في الابتداء والوقف وحال الساكنين في كلمة." },
    { id: "Membedakan cara melepas dua sukun dalam dua kata: dengan membuang dan dengan menggerakkan.", ar: "التفريق بين التخلص بالحذف والتخلص بالتحريك." },
    { id: "Menentukan harakat pengganti: kasrah, dhammah, atau fathah, beserta contoh ayatnya.", ar: "تحديد الحركة: الكسر والضم والفتح مع الأمثلة." },
    { id: "Menghafal pengganti huruf madd yang dibuang: alif → fathah, waw → dhammah, ya → kasrah.", ar: "حفظ التعويض عن حرف المد المحذوف." }
  ],
  isi: [
    { t: "pembuka", id: "Kaidah bahasa Arab: **orang Arab tidak memulai dengan huruf sukun dan tidak berhenti pada huruf berharakat** — kecuali waqaf dengan sukun, raum, atau isymam sesuai harakat akhir huruf. Memulai dengan sukun sulit, sebab permulaan membutuhkan keringanan dan gerak; sedangkan waqaf membutuhkan sukun.", ar: "القاعدة في اللغة العربية أن العرب لا يبدؤون بساكن ولا يقفون على متحرك إلا إذا وقفوا بالسكون أو الروم أو الإشمام؛ لأن الساكن يصعب البدء به والبدء يحتاج إلى الخفة والحركة، أما الوقف فلا بد من تسكين الحرف الأخير." },
    { t: "kutipan", ar: "والإسكان أصل الوقوف وهو اشتقاقه", id: "Sukun adalah dasar waqaf, dan dari sanalah kata *waqaf* diturunkan.", oleh: { id: "Asy-Syathibi (sebagaimana dikutip dosen)", ar: "الإمام الشاطبي رحمه الله تعالى" } },

    { t: "peta", ikon: "compass", pusat: { id: "Pertemuan dua sukun", ar: "التقاء الساكنين" }, cabang: [
      { id: "Dalam satu kata", ar: "في كلمة", sub: [{ id: "Waqaf / sukun 'aridh: dibiarkan", ar: "سكون عارض: يبقى" }, { id: "Wasl dan waqaf: madd lazim kalimi mutsaqqal (tasydid)", ar: "سكون أصلي: المد اللازم" }] },
      { id: "Dalam dua kata", ar: "في كلمتين", sub: [{ id: "Hanya saat washl", ar: "وصلًا فقط" }, { id: "Dilepas dengan membuang huruf madd (lafzhan)", ar: "التخلص بالحذف" }, { id: "Dilepas dengan menggerakkan: kasrah, dhammah, fathah", ar: "التخلص بالتحريك" }] }
    ] },

    { t: "judul", id: "Dua Sukun dalam Satu Kata", ar: "التقاء الساكنين في كلمة" },
    { t: "p", id: "Dalam satu kata, dua sukun bisa bertemu tanpa perubahan apa pun karena mudah diucapkan — dan ini terjadi **saat waqaf**, atau pada keadaan washl sekaligus waqaf. Tiga bentuknya:", ar: "قد يلتقيان في كلمة ولا يحدث عليه أي تغيير لسهولة النطق به وقد يكون وقفًا، أو وصلًا ووقفًا." },
    { t: "tabel", judul: { id: "Bentuk-bentuk dua sukun dalam satu kata", ar: "صور التقاء الساكنين في الكلمة" }, kolom: [{ id: "Bentuk", ar: "الصورة" }, { id: "Penjelasan", ar: "الشرح" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Sukun 'aridh setelah huruf sahih sukun", ar: "سكون عارض بعد ساكن صحيح" }, { id: "Huruf terakhir disukunkan karena waqaf, sebelumnya sudah sukun", ar: "إذا وقفنا على الحرف سكن وقبله ساكن صحيح" }, { id: "{الْفَتْحُ}، {الْقَدْرِ}", ar: "الفتح، القدر" }],
      [{ id: "Sukun 'aridh setelah huruf madd atau layyin", ar: "سكون عارض بعد حرف مد أو لين" }, { id: "Waqaf pada huruf setelah alif/ya layyinah", ar: "ساكن بعد حرف مد أو لين" }, { id: "{الْحِسَابِ} (alif madd), {الْبَيْتَ} (ya layyinah)", ar: "الحساب، البيت" }],
      [{ id: "Sukun asli setelah huruf madd", ar: "سكون أصلي بعد حرف مد" }, { id: "Madd lazim kalimi mutsaqqal: kedua sukun dilepas dengan tasydid; terjadi di washl dan waqaf", ar: "مد لازم كلمي مثقل" }, { id: "{دَابَّةٍ}، {الصَّاخَّةُ}، {الْـَٔانَ}، {ءَآلذَّكَرَيْنِ}", ar: "دابة، الصاخة، آلذكرين" }]
    ] },
    { t: "catatan", gaya: "faidah", judul: { id: "Mengapa {دَابَّةٍ} dibaca madd?", ar: "لماذا مد {دَابَّةٍ}؟" }, id: "Asal huruf ba bertasydid adalah satu huruf sukun dan satu huruf berharakat yang diidghamkan. Karena sukun pertama (ba) bertemu alif yang sukun, pelepasan dilakukan dengan **memanjangkan huruf madd** (sukun pertama) sehingga ada tempat untuk idgham.", ar: "فهنا تم التخلص من الساكنين بمد الساكن الأول؛ لأن أصل الباء حرف ساكن وحرف متحرك وأدغم الساكن في المتحرك." },

    { t: "judul", id: "Dua Sukun dalam Dua Kata", ar: "التقاء الساكنين في كلمتين" },
    { t: "p", id: "Jika dua sukun bertemu dalam **dua kata**, terjadi perubahan karena sulit diucapkan, dan ini **hanya terjadi saat washl**. Pelepasannya ada dua cara:", ar: "وقد يلتقي الساكنان في كلمتين وهنا يحدث فيه تغيير لصعوبة النطق به ولا يكون إلا وصلًا. والتخلص منهما إما بالحذف أو بالتحريك." },
    { t: "banding", judul: { id: "Dua cara melepas dua sukun", ar: "طريقتا التخلص" },
      kiri: { judul: { id: "1. Membuang (hadzf)", ar: "التخلص بالحذف" }, ikon: "pen", warna: "amber", poin: [
        { id: "Berlaku bila sukun pertama adalah **huruf madd**.", ar: "إذا كان الساكن الأول حرف مد." },
        { id: "Dibuang **dalam pengucapan, bukan dalam tulisan** (tetap tertulis di mushaf).", ar: "الحذف يكون لفظًا لا رسمًا." }
      ] },
      kanan: { judul: { id: "2. Menggerakkan (tahrik)", ar: "التخلص بالتحريك" }, ikon: "bolt", warna: "green", poin: [
        { id: "Sukun pertama diberi harakat: **kasrah**, **dhammah**, atau **fathah**.", ar: "بالكسر أو الضم أو الفتح." },
        { id: "Berlaku pada sukun yang bukan huruf madd (sahih, tanwin, ya/waw layyinah, mim jamak, dsb.).", ar: "في غير حروف المد." }
      ] } },

    { t: "sub", id: "Cara pertama: Membuang huruf madd (lafzhan)", ar: "أولًا: التخلص بالحذف" },
    { t: "contoh", judul: { id: "Huruf madd dibuang saat washl, tetap saat waqaf", ar: "حذف حرف المد وصلًا" }, sorot: [
      { label: { ar: "ذَاقَا الشَّجَرَةَ" }, warna: "green", id: "Waqaf: *dzaaqaa*. Washl: *dzaaqasy-syajarata* — alif dibuang dan diganti fathah pada qaf; tidak dibaca *dzaaqaa asy-syajarah*.", ar: "فإذا وقفنا قلنا ذاقا وإذا وصلنا قلنا ذاقَ الشجرة." },
      { label: { ar: "إِذَا الشَّمْسُ كُوِّرَتْ" }, warna: "blue", id: "Alif dibuang: *idzasy-syamsu*, bukan *idzaa asy-syamsu*.", ar: "تم التخلص من الساكنين بحذف الألف." },
      { label: { ar: "قَالُوا الْحَمْدُ لِلَّهِ" }, warna: "gold", id: "Waw madd dibuang dan diganti dhammah pada lam: *qaalul hamdu*.", ar: "قالُ الحمد." },
      { label: { ar: "وَفِي السَّمَاءِ" }, warna: "green", id: "Ya madd pada *fii* dibuang saat washl, tetap saat waqaf; tertulis di mushaf.", ar: "حرف المد ثابت رسمًا يحذف وصلًا ويثبت وقفًا." }
    ] },
    { t: "akordion", judul: { id: "Dua kata yang hurufnya hilang dari tulisan mushaf", ar: "حذف حرف المد وصلًا ووقفًا" }, item: [
      { judul: { id: "{تُحْيِ ٱلْمَوْتَىٰ}", ar: "تُحْيِ الْمَوْتَىٰ" }, id: "Ya kedua (lam kalimah) tidak ditulis di mushaf untuk menghindari dua sukun, sehingga dibuang baik washl maupun waqaf; yang tersisa ya 'ain kalimah.", ar: "الياء الثانية التي هي لام الكلمة حذفت رسمًا للتخلص من الساكنين." },
      { judul: { id: "{نُنجِي ٱلْمُؤْمِنِينَ}", ar: "نُنجِي الْمُؤْمِنِينَ" }, id: "Ya tidak tertulis di mushaf (dibuang rasm dan washl). Dosen menjelaskan bahwa pengucapannya disesuaikan dengan keadaan tersebut: saat bersambung jim berkasrah, *nunjil mu'minin*.", ar: "نقف عليها بسكون الجيم وحذف الياء لأنها حذفت رسمًا ووصلًا، وصلنا ننجِ المؤمنين جيم مكسورة." }
    ] },
    { t: "catatan", gaya: "hikmah", judul: { id: "Pengganti huruf madd yang dibuang", ar: "التعويض عن حرف المد" }, id: "Huruf madd yang dibuang diganti harakat yang sejenis: **alif → fathah**, **waw → dhammah**, **ya → kasrah**.", ar: "حرف المد عند حذفه يتم التعويض عنه بحركة مجانسة له؛ فالألف يعوض عنها بفتحة والواو بضمة والياء بكسرة." },
    { t: "cek", q: { id: "Pada {إِذَا ٱلشَّمْسُ كُوِّرَتْ} dua sukun dilepas dengan…", ar: "في {إِذَا الشَّمْسُ كُوِّرَتْ} يتم التخلص بـ…" }, o: [{ id: "Menggerakkan dengan kasrah", ar: "التحريك بالكسر" }, { id: "Membuang alif (lafzhan)", ar: "حذف الألف لفظًا" }, { id: "Menambah ghunnah", ar: "الغنة" }, { id: "Idgham", ar: "الإدغام" }], j: 1, b: { id: "Sukun pertama alif madd, maka dibuang dalam pengucapan.", ar: "الألف حرف مد فيحذف." } },

    { t: "sub", id: "Cara kedua: Menggerakkan sukun pertama", ar: "ثانيًا: التخلص بالتحريك" },
    { t: "p", id: "Pelepasan dengan menggerakkan terjadi bila sukun pertama adalah salah satu dari **tiga jenis** berikut: huruf sahih (selain huruf madd), **tanwin**, dan **ya layyinah / waw layyinah / mim jamak** yang memiliki aturan sendiri (lihat rincian di bawah). Harakat yang dipakai ada tiga:", ar: "التخلص بالتحريك إذا كان الساكن الأول أحد حروف كلمة (لتنود)، والتنوين وحرف الياء المدية." },
    { t: "tabel", judul: { id: "Tiga harakat pelepas dua sukun", ar: "حركة التخلص من الساكنين" }, kolom: [{ id: "Harakat", ar: "الحركة" }, { id: "Berlaku pada", ar: "تكون في" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Kasrah (paling umum, riwayat Hafsh)", ar: "الكسر" }, { id: "Huruf sahih bukan huruf madd; tanwin; ya layyinah", ar: "حرف صحيح، والتنوين، والياء اللينة" }, { id: "{لَقَدِ ٱسْتَكْبَرُوا}، {قُلِ ٱدْعُوا}، {بِزِينَةٍ ٱلْكَوَاكِبِ}، {يَا صَاحِبَيِ ٱلسِّجْنِ}", ar: "لقدِ استكبروا" }],
      [{ id: "Dhammah", ar: "الضم" }, { id: "Waw jamak (waw layyinah), dan mim jamak", ar: "واو الجماعة وميم الجمع" }, { id: "{فَتَمَنَّوُا ٱلْمَوْتَ}، {عَلَيْكُمُ ٱلصِّيَامُ}", ar: "فتمنَّوُا الموت" }],
      [{ id: "Fathah", ar: "الفتح" }, { id: "*Min* jarrah, ta ta'nits + alif tatsniyah, dan mim huruf hijaiyah pada Ali 'Imran", ar: "من الجارة وتاء التأنيث وميم آل عمران" }, { id: "{مِنَ ٱلْمُؤْمِنِينَ}، {كَانَتَا تَحْتَ}، {الم ۝ ٱللَّهُ}", ar: "من المؤمنين" }]
    ] },

    { t: "sub", id: "Kasrah: huruf sahih, tanwin, ya layyinah", ar: "التحريك بالكسر" },
    { t: "contoh", judul: { id: "(1) Huruf sahih bukan huruf madd — Hafsh dengan kasrah", ar: "الحرف الصحيح" }, sorot: [
      { label: { ar: "لَقَدِ ٱسْتَكْبَرُوا" }, warna: "green", id: "Dal sukun bertemu sin sukun (alif washl gugur saat bersambung) → dal dikasrah: *laqadistakbaru*.", ar: "الألف تسقط في الدرج فالتقت الدال مع السين." },
      { label: { ar: "قُلِ ٱدْعُوا" }, warna: "blue", id: "Lam sukun pada *qul* dikasrah: *qulid'uu*.", ar: "قلِ ادعوا." },
      { label: { ar: "وَقَالَتِ ٱخْرُجْ" }, warna: "gold", id: "Ta dikasrah.", ar: "وقالتِ اخرج" },
      { label: { ar: "أَنِ ٱقْتُلُوا / أَنِ ٱمْشُوا / أَوِ ٱخْرُجُوا / أَوِ ٱدْعُوا / أَوِ ٱنقُصْ / وَلَقَدِ ٱسْتُهْزِئَ" }, warna: "green", id: "Contoh lain: nun, waw, dan dal sukun yang dikasrah.", ar: "أنِ اقتلوا، أنِ امشوا، أوِ اخرجوا" }
    ] },
    { t: "contoh", judul: { id: "(2) Tanwin — fathah/dhammah/kasrah berubah menjadi kasrah", ar: "التنوين" }, sorot: [
      { label: { ar: "بِزِينَةٍ ٱلْكَوَاكِبِ" }, warna: "green", id: "Tanwin adalah nun sukun, bertemu lam sukun → dikasrah: *bizinatinil kawakib*.", ar: "أصل التنوين نون ساكنة." },
      { label: { ar: "أَحَدٌ ٱللَّهُ" }, warna: "blue", id: "Dibaca *ahadunillah*, bukan *ahadun Allah* dengan sukun.", ar: "أحدٌ الله" },
      { label: { ar: "بِرَحْمَةٍ ٱدْخُلُوا" }, warna: "gold", id: "Dibaca dengan kasrah pada nun tanwin.", ar: "برحمةٍ ادخلوا" },
      { label: { ar: "فَتِيلًا ٱنظُرْ" }, warna: "green", id: "Tanwin fathah (dan dhammah) tetap dikasrahkan: *fatiilanin zhur*.", ar: "تنوين الفتح أو الضم يحول إلى كسر." }
    ] },
    { t: "contoh", judul: { id: "(3) Ya layyinah setelah fathah", ar: "الياء اللينة" }, sorot: [
      { label: { ar: "يَا صَاحِبَيِ ٱلسِّجْنِ" }, warna: "blue", id: "Ya layyinah (sukun, sebelumnya fathah) dikasrah: *shaahibayis-sijni*, bukan *shaahibayy as-sijn*.", ar: "تم كسر الياء اللينة." }
    ] },

    { t: "sub", id: "Dhammah: waw jamak dan mim jamak", ar: "التحريك بالضم" },
    { t: "poin", item: [
      { ikon: "users", judul: { id: "Waw jamak (waw layyinah)", ar: "واو الجماعة" }, id: "Waw sukun setelah fathah yang bertemu sukun digerakkan dengan **dhammah**: {فَتَمَنَّوُا ٱلْمَوْتَ} (*fatamannawul mawta*), {وَعَصَوُا ٱلرَّسُولَ}, {وَآتُوا ٱلزَّكَاةَ}. Waw ini adalah waw jamak (dhamir jamak).", ar: "الواو اللينة وهي واو ساكنة ما قبلها مفتوح مثل فَتَمَنَّوُا الْمَوْتَ وَعَصَوُا الرَّسُولَ وَآتُوا الزَّكَاةَ." },
      { ikon: "chain", judul: { id: "Mim jamak", ar: "ميم الجمع" }, id: "Mim jamak yang bertemu sukun digerakkan **dhammah**, karena dhammah adalah asal harakatnya dan menunjukkan jamak: {عَلَيْكُمُ ٱلصِّيَامُ}, {إِلَيْهِمُ ٱثْنَيْنِ}.", ar: "لأن الضم هو أصل الحركة ولأنها تدل على الجمع." }
    ] },

    { t: "sub", id: "Fathah: min jarrah, ta ta'nits, dan Ali 'Imran", ar: "التحريك بالفتح" },
    { t: "langkah", item: [
      { judul: { id: "(1) *Min* huruf jar", ar: "من الجارة" }, id: "Hukum asalnya mabni sukun, digerakkan fathah demi keringanan: {مِنَ ٱلْمُؤْمِنِينَ}, {مِنَ ٱلشَّاهِدِينَ}. Dibedakan dari *man* (isim maushul, 'yang').", ar: "حرف جر مبني على السكون حرك بالفتح لخفة النطق به." },
      { judul: { id: "(2) Ta ta'nits + alif tatsniyah", ar: "تاء التأنيث مع ألف التثنية" }, id: "Ta ta'nits sukun digerakkan fathah karena alif tatsniyah tidak cocok kecuali dengan fathah sebelumnya: {كَانَتَا تَحْتَ}. Jangan memendekkan alif.", ar: "ألف التثنية لا يناسبها إلا فتح ما قبلها." },
      { judul: { id: "(3) Awal Ali 'Imran: {الم ۝ ٱللَّهُ}", ar: "بداية سورة آل عمران" }, id: "Mim huruf hijaiyah mabni sukun bertemu lam lafzhul jalalah (setelah hamzah washl gugur) → difathahkan agar lafzhul jalalah ditebalkan: *alif lam miim allaahu*. Boleh pula dengan madd, sesuai pembahasan bab basmalah (wajah-wajah permulaan surah).", ar: "فحركت بالفتح لتفخيم لفظ الجلالة فنقول الم الله أو نقرأها مع المد." }
    ] },
    { t: "cek", q: { id: "Pada {عَلَيْكُمُ ٱلصِّيَامُ}, mim jamak digerakkan dengan…", ar: "ميم الجمع في {عَلَيْكُمُ الصِّيَامُ} تحرك بـ…" }, o: [{ id: "Fathah", ar: "الفتح" }, { id: "Kasrah", ar: "الكسر" }, { id: "Dhammah", ar: "الضم" }, { id: "Dibuang", ar: "الحذف" }], j: 2, b: { id: "Dhammah adalah asal harakatnya dan menunjukkan jamak.", ar: "الضم هو الأصل." } },
    { t: "cek", q: { id: "Harakat pengganti huruf waw madd yang dibuang adalah…", ar: "التعويض عن الواو المحذوفة…" }, o: [{ id: "Dhammah", ar: "ضمة" }, { id: "Fathah", ar: "فتحة" }, { id: "Kasrah", ar: "كسرة" }, { id: "Sukun", ar: "سكون" }], j: 0, b: { id: "Alif → fathah, waw → dhammah, ya → kasrah.", ar: "الواو بضمة." } },

    { t: "balik", judul: { id: "Kartu kilat dua sukun", ar: "بطاقات" }, item: [
      { depan: { id: "Dua sukun dalam dua kata terjadi saat…", ar: "التقاء الساكنين في كلمتين" }, belakang: { id: "Washl saja", ar: "وصلًا فقط" } },
      { depan: { id: "Sukun pertama huruf madd →", ar: "الساكن الأول حرف مد" }, belakang: { id: "Dibuang (lafzhan)", ar: "الحذف" } },
      { depan: { id: "Sukun pertama huruf sahih/tanwin/ya layyinah →", ar: "صحيح، تنوين، ياء لينة" }, belakang: { id: "Kasrah", ar: "الكسر" } },
      { depan: { id: "Waw jamak / mim jamak →", ar: "واو الجماعة وميم الجمع" }, belakang: { id: "Dhammah", ar: "الضم" } },
      { depan: { id: "*Min* jarrah / ta ta'nits+alif tatsniyah →", ar: "من الجارة وتاء التأنيث" }, belakang: { id: "Fathah", ar: "الفتح" } }
    ] },
    { t: "tanya", q: { id: "Apa bedanya penggantian huruf madd yang dibuang pada alif, waw, dan ya?", ar: "ما التعويض عن حرف المد المحذوف؟" }, a: { id: "Alif diganti **fathah**, waw diganti **dhammah**, ya diganti **kasrah** — harakat sejenis dengan hurufnya.", ar: "الألف بفتحة والواو بضمة والياء بكسرة." } },
    { t: "tanya", q: { id: "Mengapa tanwin fathah dan dhammah pada {فَتِيلًا ٱنظُرْ} dikasrahkan?", ar: "لماذا يتحول التنوين بالفتح أو الضم إلى كسر؟" }, a: { id: "Karena tanwin pada dasarnya nun sukun; ketika bertemu sukun lain pada washl, ia digerakkan dengan kasrah (harakat pelepas yang umum di riwayat Hafsh) — apa pun jenis tanwinnya.", ar: "لأن أصل التنوين نون ساكنة فيتخلص من التقاء الساكنين بالكسر مطلقًا." } },
    { t: "ringkasan", item: [
      { id: "Orang Arab tidak memulai dengan sukun dan tidak berhenti pada huruf berharakat; sukun adalah dasar waqaf.", ar: "لا تبدأ العرب بساكن ولا تقف على متحرك." },
      { id: "Dua sukun dalam satu kata dibiarkan (waqaf) atau dilepas dengan tasydid (madd lazim kalimi mutsaqqal).", ar: "في الكلمة تبقى أو تُخفف بالتشديد." },
      { id: "Dalam dua kata (hanya washl): dibuang bila sukun pertama huruf madd; digerakkan bila bukan.", ar: "في كلمتين: حذف أو تحريك." },
      { id: "Kasrah: huruf sahih, tanwin, ya layyinah. Dhammah: waw jamak & mim jamak. Fathah: *min*, ta ta'nits+alif tatsniyah, mim Ali 'Imran.", ar: "الكسر والضم والفتح." },
      { id: "Pengganti huruf madd yang dibuang: alif–fathah, waw–dhammah, ya–kasrah.", ar: "التعويض بحركة مجانسة." }
    ] }
  ],
  istilah: [
    { ar: "التقاء الساكنين", latin: "iltiqa' as-sakinain", id: "Pertemuan dua sukun", def: { id: "Bertemunya dua huruf sukun berurutan.", ar: "اجتماع حرفين ساكنين متواليين." } },
    { ar: "السكون العارض", latin: "as-sukun al-'aridh", id: "Sukun 'aridh", def: { id: "Sukun yang muncul karena waqaf.", ar: "سكون يحدث لأجل الوقف." } },
    { ar: "المد اللازم الكلمي المثقل", latin: "al-madd al-lazim al-kalimi al-mutsaqqal", id: "Madd lazim kalimi mutsaqqal", def: { id: "Huruf madd diikuti huruf bertasydid dalam satu kata.", ar: "حرف مد بعده حرف مشدد في كلمة." } },
    { ar: "التخلص بالحذف", latin: "at-takhallush bil-hadzf", id: "Dilepas dengan membuang", def: { id: "Huruf madd dibuang dalam ucapan, bukan tulisan.", ar: "حذف حرف المد لفظًا." } },
    { ar: "التخلص بالتحريك", latin: "at-takhallush bit-tahrik", id: "Dilepas dengan menggerakkan", def: { id: "Sukun pertama diberi kasrah, dhammah, atau fathah.", ar: "تحريك الساكن الأول." } },
    { ar: "التنوين", latin: "at-tanwin", id: "Tanwin", def: { id: "Nun sukun tambahan di akhir isim.", ar: "نون ساكنة زائدة تلحق آخر الاسم." } },
    { ar: "واو الجماعة", latin: "wawul jama'ah", id: "Waw jamak", def: { id: "Waw yang menunjukkan jamak; digerakkan dhammah.", ar: "واو تدل على الجمع." } },
    { ar: "ميم الجمع", latin: "mim al-jam'", id: "Mim jamak", def: { id: "Mim pada dhamir jamak seperti *-kum* dan *-hum*.", ar: "الميم في كم وهم." } },
    { ar: "من الجارة", latin: "min al-jarrah", id: "*Min* huruf jar", def: { id: "Berfathah saat bertemu sukun.", ar: "تحرك بالفتح." } },
    { ar: "همزة الوصل", latin: "hamzat al-washl", id: "Hamzah washl", def: { id: "Gugur saat bersambung, sehingga memunculkan pertemuan dua sukun.", ar: "تسقط في الدرج." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Kaidah bahasa Arab tentang permulaan adalah…", ar: "القاعدة في الابتداء…" }, o: [{ id: "Memulai dengan sukun", ar: "البدء بساكن" }, { id: "Tidak memulai dengan sukun", ar: "لا يبدؤون بساكن" }, { id: "Memulai dengan tanwin", ar: "البدء بتنوين" }, { id: "Memulai dengan madd", ar: "البدء بمد" }], j: 1, b: { id: "Karena permulaan membutuhkan gerak.", ar: "الابتداء يحتاج إلى الحركة." } },
      { q: { id: "Dua sukun dalam dua kata terjadi…", ar: "التقاء الساكنين في كلمتين يكون…" }, o: [{ id: "Waqaf saja", ar: "وقفًا" }, { id: "Washl saja", ar: "وصلًا" }, { id: "Washl dan waqaf", ar: "وصلًا ووقفًا" }, { id: "Ibtida' saja", ar: "ابتداءً" }], j: 1, b: { id: "Hanya saat washl.", ar: "لا يكون إلا وصلًا." } },
      { q: { id: "Pada {ذَاقَا ٱلشَّجَرَةَ} saat washl, yang terjadi adalah…", ar: "في {ذَاقَا الشَّجَرَةَ} وصلًا…" }, o: [{ id: "Alif dibaca panjang", ar: "تمد الألف" }, { id: "Alif dibuang dalam ucapan", ar: "تحذف الألف لفظًا" }, { id: "Qaf dikasrah", ar: "تكسر القاف" }, { id: "Ditambah ghunnah", ar: "غنة" }], j: 1, b: { id: "Huruf madd dibuang lafzhan.", ar: "الحذف لفظًا لا رسمًا." } },
      { q: { id: "Pada {قَالُوا ٱلْحَمْدُ} lam kata *qaaluu* dibaca dengan…", ar: "في {قَالُوا الْحَمْدُ} الواو…" }, o: [{ id: "Waw dibuang diganti dhammah", ar: "تحذف الواو وتعوض بضمة" }, { id: "Waw dikasrah", ar: "تكسر" }, { id: "Waw difathah", ar: "تفتح" }, { id: "Waw diidghamkan", ar: "تدغم" }], j: 0, b: { id: "Waw madd dibuang dan diganti dhammah.", ar: "تعويض بحركة مجانسة." } },
      { q: { id: "Harakat yang digunakan pada {لَقَدِ ٱسْتَكْبَرُوا} adalah…", ar: "الحركة في {لَقَدِ اسْتَكْبَرُوا}…" }, o: [{ id: "Fathah", ar: "فتح" }, { id: "Dhammah", ar: "ضم" }, { id: "Kasrah", ar: "كسر" }, { id: "Sukun", ar: "سكون" }], j: 2, b: { id: "Huruf sahih bukan madd dikasrah.", ar: "الكسر في الحرف الصحيح." } },
      { q: { id: "Tanwin pada {بِزِينَةٍ ٱلْكَوَاكِبِ} diucapkan…", ar: "التنوين في {بِزِينَةٍ الْكَوَاكِبِ}…" }, o: [{ id: "Dengan kasrah pada nun", ar: "بكسر النون" }, { id: "Dengan sukun", ar: "بالسكون" }, { id: "Dengan ghunnah", ar: "بغنة" }, { id: "Dibuang", ar: "محذوف" }], j: 0, b: { id: "Tanwin adalah nun sukun, digerakkan kasrah.", ar: "تحرك النون بالكسر." } },
      { q: { id: "Pada {فَتَمَنَّوُا ٱلْمَوْتَ} waw digerakkan dengan…", ar: "الواو في {فَتَمَنَّوُا الْمَوْتَ}…" }, o: [{ id: "Kasrah", ar: "كسر" }, { id: "Fathah", ar: "فتح" }, { id: "Dhammah", ar: "ضم" }, { id: "Dibuang", ar: "حذف" }], j: 2, b: { id: "Waw jamak digerakkan dhammah.", ar: "واو الجماعة بالضم." } },
      { q: { id: "Mim jamak pada {عَلَيْكُمُ ٱلصِّيَامُ} dhammah karena…", ar: "ضمة ميم الجمع لأنها…" }, o: [{ id: "Dhammah asal harakat dan menunjukkan jamak", ar: "أصل الحركة وتدل على الجمع" }, { id: "Fathah ringan", ar: "الفتح أخف" }, { id: "Kasrah jarang", ar: "الكسر أثقل" }, { id: "Akhir kata", ar: "آخر الكلمة" }], j: 0, b: { id: "Alasan dosen.", ar: "لأنها تدل على الجمع." } },
      { q: { id: "Pada {مِنَ ٱلْمُؤْمِنِينَ} nun *min* digerakkan fathah karena…", ar: "تحريك نون {مِنَ} بالفتح لـ…" }, o: [{ id: "Keringanan pengucapan", ar: "خفة النطق" }, { id: "Madd lazim", ar: "المد" }, { id: "Waqaf", ar: "الوقف" }, { id: "Idgham", ar: "الإدغام" }], j: 0, b: { id: "Min jarrah mabni sukun, difathah demi ringan.", ar: "لخفة النطق به." } },
      { q: { id: "Pada {كَانَتَا تَحْتَ} ta digerakkan fathah karena…", ar: "فتح التاء في {كَانَتَا} لأن…" }, o: [{ id: "Ta' marbuthah", ar: "تاء مربوطة" }, { id: "Alif tatsniyah hanya cocok dengan fathah sebelumnya", ar: "ألف التثنية لا يناسبها إلا فتح ما قبلها" }, { id: "Ta tidak berharakat", ar: "التاء ساكنة" }, { id: "Mim jamak", ar: "ميم الجمع" }], j: 1, b: { id: "Alasan dosen.", ar: "لا يناسبها إلا فتح ما قبلها." } },
      { q: { id: "{دَابَّةٍ} adalah contoh…", ar: "{دَابَّةٍ} مثال…" }, o: [{ id: "Dua sukun dalam dua kata", ar: "ساكنان في كلمتين" }, { id: "Madd lazim kalimi mutsaqqal (satu kata)", ar: "مد لازم كلمي مثقل" }, { id: "Madd 'aridh", ar: "مد عارض" }, { id: "Madd badal", ar: "مد بدل" }], j: 1, b: { id: "Sukun alif bertemu tasydid dalam satu kata.", ar: "في كلمة واحدة." } },
      { q: { id: "Pada awal Ali 'Imran {الم ۝ ٱللَّهُ}, mim difathahkan agar…", ar: "فتحت الميم في آل عمران لـ…" }, o: [{ id: "Lafzhul jalalah ditebalkan", ar: "تفخيم لفظ الجلالة" }, { id: "Ghunnah", ar: "الغنة" }, { id: "Qalqalah", ar: "القلقلة" }, { id: "Ikhfa", ar: "الإخفاء" }], j: 0, b: { id: "Fathah menebalkan lam jalalah.", ar: "لتفخيم لفظ الجلالة." } }
    ],
    bs: [
      { t: { id: "Orang Arab berhenti pada huruf berharakat tanpa perubahan.", ar: "تقف العرب على متحرك." }, j: false, b: { id: "Waqaf harus dengan sukun, raum, atau isymam.", ar: "إلا بالسكون أو الروم أو الإشمام." } },
      { t: { id: "Waqaf pada {الْفَتْحُ} adalah dua sukun dalam satu kata.", ar: "الوقف على الفتح التقاء ساكنين." }, j: true },
      { t: { id: "Dua sukun dalam dua kata juga terjadi saat waqaf.", ar: "يكون التقاء الساكنين في كلمتين وقفًا." }, j: false, b: { id: "Hanya saat washl.", ar: "وصلًا فقط." } },
      { t: { id: "Pembuangan huruf madd terjadi dalam ucapan, bukan dalam tulisan, kecuali kasus rasm khusus.", ar: "الحذف لفظًا لا رسمًا." }, j: true },
      { t: { id: "Pengganti ya madd yang dibuang adalah fathah.", ar: "تعويض الياء بفتحة." }, j: false, b: { id: "Ya diganti kasrah.", ar: "الياء بكسرة." } },
      { t: { id: "Tanwin fathah pada {فَتِيلًا ٱنظُرْ} dikasrah.", ar: "تنوين الفتح يكسر." }, j: true },
      { t: { id: "Waw jamak pada {وَعَصَوُا ٱلرَّسُولَ} digerakkan kasrah.", ar: "واو الجماعة تكسر." }, j: false, b: { id: "Digerakkan dhammah.", ar: "تضم." } },
      { t: { id: "Mim jamak yang bertemu sukun digerakkan dhammah.", ar: "ميم الجمع تضم." }, j: true },
      { t: { id: "*Min* jarrah pada {مِنَ ٱلشَّاهِدِينَ} difathahkan.", ar: "من الجارة تفتح." }, j: true },
      { t: { id: "Ya layyinah pada {يَا صَاحِبَيِ ٱلسِّجْنِ} digerakkan dhammah.", ar: "الياء اللينة تضم." }, j: false, b: { id: "Dikasrahkan.", ar: "تكسر." } }
    ],
    jodoh: [
      { a: { id: "{ذَاقَا ٱلشَّجَرَةَ}", ar: "ذاقا الشجرة" }, b: { id: "Alif dibuang saat washl", ar: "حذف الألف" } },
      { a: { id: "{قُلِ ٱدْعُوا}", ar: "قل ادعوا" }, b: { id: "Kasrah", ar: "الكسر" } },
      { a: { id: "{فَتَمَنَّوُا ٱلْمَوْتَ}", ar: "فتمنوا الموت" }, b: { id: "Dhammah", ar: "الضم" } },
      { a: { id: "{مِنَ ٱلْمُؤْمِنِينَ}", ar: "من المؤمنين" }, b: { id: "Fathah", ar: "الفتح" } },
      { a: { id: "{أَحَدٌ ٱللَّهُ}", ar: "أحد الله" }, b: { id: "Tanwin dikasrah", ar: "تنوين مكسور" } },
      { a: { id: "{دَابَّةٍ}", ar: "دابة" }, b: { id: "Madd lazim kalimi mutsaqqal", ar: "مد لازم كلمي" } },
      { a: { id: "{عَلَيْكُمُ ٱلصِّيَامُ}", ar: "عليكم الصيام" }, b: { id: "Mim jamak", ar: "ميم الجمع" } },
      { a: { id: "{كَانَتَا تَحْتَ}", ar: "كانتا تحت" }, b: { id: "Ta ta'nits + alif tatsniyah", ar: "تاء التأنيث وألف التثنية" } }
    ],
    urut: { t: { id: "Urutkan alur pelepasan dua sukun pada {ذَاقَا ٱلشَّجَرَةَ} saat washl.", ar: "رتب خطوات التخلص من الساكنين في {ذَاقَا الشَّجَرَةَ}." },
      item: [{ id: "Dua sukun bertemu: alif dan lam (alif washl gugur)", ar: "التقى الألف واللام الساكنان" }, { id: "Sukun pertama adalah huruf madd (alif)", ar: "الأول حرف مد" }, { id: "Alif dibuang dalam ucapan", ar: "يحذف الألف لفظًا" }, { id: "Qaf diganti harakat yang sejenis: fathah", ar: "يعوض بفتحة" }, { id: "Dibaca *dzaaqasy-syajarata*", ar: "ذاقَ الشجرة" }] },
    isian: [
      { t: { id: "Pengganti alif yang dibuang adalah ______.", ar: "التعويض عن الألف: ______." }, j: { id: "fathah", ar: "فتحة" }, x: [{ id: "dhammah", ar: "ضمة" }, { id: "kasrah", ar: "كسرة" }, { id: "sukun", ar: "سكون" }] },
      { t: { id: "Pada {أَوِ ٱخْرُجُوا} waw sukun digerakkan dengan ______.", ar: "الواو في {أَوِ اخْرُجُوا}: ______." }, j: { id: "kasrah", ar: "كسرة" }, x: [{ id: "dhammah", ar: "ضمة" }, { id: "fathah", ar: "فتحة" }, { id: "dibuang", ar: "حذف" }] },
      { t: { id: "Pada {فَتَمَنَّوُا ٱلْمَوْتَ}, harakat pada waw adalah ______.", ar: "حركة الواو: ______." }, j: { id: "dhammah", ar: "ضمة" }, x: [{ id: "kasrah", ar: "كسرة" }, { id: "fathah", ar: "فتحة" }, { id: "sukun", ar: "سكون" }] },
      { t: { id: "Dua sukun dalam dua kata hanya terjadi saat ______.", ar: "التقاء الساكنين في كلمتين يكون ______ فقط." }, j: { id: "washl", ar: "وصلًا" }, x: [{ id: "waqaf", ar: "وقفًا" }, { id: "ibtida'", ar: "ابتداءً" }, { id: "saktah", ar: "سكتًا" }] },
      { t: { id: "Tanwin pada hakikatnya adalah ______ sukun.", ar: "أصل التنوين ______ ساكنة." }, j: { id: "nun", ar: "نون" }, x: [{ id: "mim", ar: "ميم" }, { id: "lam", ar: "لام" }, { id: "waw", ar: "واو" }] }
    ],
    pilah: { t: { id: "Pilah menurut harakat pelepas dua sukun: KASRAH, DHAMMAH, atau FATHAH.", ar: "صنِّف حسب الحركة:" },
      kategori: [{ id: "Kasrah", ar: "كسر" }, { id: "Dhammah", ar: "ضم" }, { id: "Fathah", ar: "فتح" }],
      item: [
        { t: { id: "{لَقَدِ ٱسْتَكْبَرُوا}", ar: "لقد استكبروا" }, k: 0 },
        { t: { id: "{وَعَصَوُا ٱلرَّسُولَ}", ar: "وعصوا الرسول" }, k: 1 },
        { t: { id: "{مِنَ ٱلشَّاهِدِينَ}", ar: "من الشاهدين" }, k: 2 },
        { t: { id: "{بِزِينَةٍ ٱلْكَوَاكِبِ}", ar: "بزينة الكواكب" }, k: 0 },
        { t: { id: "{إِلَيْهِمُ ٱثْنَيْنِ}", ar: "إليهم اثنين" }, k: 1 },
        { t: { id: "{كَانَتَا تَحْتَ}", ar: "كانتا تحت" }, k: 2 },
        { t: { id: "{يَا صَاحِبَيِ ٱلسِّجْنِ}", ar: "صاحبي السجن" }, k: 0 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "ما قاعدة العرب في الابتداء والوقف؟ وما حال التقاء الساكنين في كلمة؟", id: "Apa kaidah orang Arab dalam memulai dan berhenti? Bagaimana keadaan dua sukun dalam satu kata?" },
      j: { ar: "العرب لا يبدؤون بساكن ولا يقفون على متحرك إلا بالسكون أو الروم أو الإشمام. وإذا التقى ساكنان في كلمة فقد لا يحدث تغيير لسهولة النطق كالوقف على {الْفَتْحُ} و{الْقَدْرِ} و{الْحِسَابِ} و{الْبَيْتَ}، أو يتخلص منهما بمد الساكن الأول كالمد اللازم الكلمي المثقل {دَابَّةٍ} و{الصَّاخَّةُ}.",
         id: "Orang Arab tidak memulai dengan sukun dan tidak berhenti pada huruf berharakat kecuali dengan sukun, raum, atau isymam. Dua sukun dalam satu kata biasanya dibiarkan karena mudah diucapkan (waqaf {الْفَتْحُ}, {الْقَدْرِ}, {الْحِسَابِ}, {الْبَيْتَ}), atau dilepas dengan memanjangkan sukun pertama dan menasydid, seperti madd lazim kalimi mutsaqqal {دَابَّةٍ}, {الصَّاخَّةُ}." } },
    { t: { ar: "كيف يتم التخلص من الساكنين في كلمتين؟ وما شرط كل طريقة؟", id: "Bagaimana dua sukun dalam dua kata dilepas, dan apa syarat tiap cara?" },
      j: { ar: "يتم بالحذف إذا كان الساكن الأول حرف مد، فيحذف لفظًا لا رسمًا ويعوض بحركة مجانسة مثل {ذَاقَا الشَّجَرَةَ} و{قَالُوا الْحَمْدُ} و{وَفِي السَّمَاءِ}. وبالتحريك إذا لم يكن حرف مد: بالكسر في الحرف الصحيح والتنوين والياء اللينة، وبالضم في واو الجماعة وميم الجمع، وبالفتح في من الجارة وتاء التأنيث مع ألف التثنية وميم الم آل عمران.",
         id: "(1) **Dibuang** bila sukun pertama huruf madd — dibuang dalam ucapan bukan tulisan, diganti harakat sejenis ({ذَاقَا ٱلشَّجَرَةَ}, {قَالُوا ٱلْحَمْدُ}, {وَفِي ٱلسَّمَاءِ}). (2) **Digerakkan** bila bukan huruf madd: kasrah (huruf sahih, tanwin, ya layyinah), dhammah (waw jamak, mim jamak), fathah (*min* jarrah, ta ta'nits+alif tatsniyah, mim Ali 'Imran)." } },
    { t: { ar: "ما التعويض عن حرف المد المحذوف؟ مثّل.", id: "Apa pengganti huruf madd yang dibuang? Beri contoh." },
      j: { ar: "الألف بفتحة مثل {ذَاقَ الشَّجَرَةَ}، والواو بضمة مثل {قَالُ الْحَمْدُ}، والياء بكسرة.",
         id: "Alif → fathah ({ذَاقَا ٱلشَّجَرَةَ} → *dzaaqasy-syajarah*), waw → dhammah ({قَالُوا ٱلْحَمْدُ} → *qaalul hamdu*), ya → kasrah." } },
    { t: { ar: "اذكر أمثلة التحريك بالكسر في الحرف الصحيح والتنوين والياء اللينة.", id: "Beri contoh penggerakan kasrah pada huruf sahih, tanwin, dan ya layyinah." },
      j: { ar: "الحرف الصحيح: {لَقَدِ اسْتَكْبَرُوا} و{قُلِ ادْعُوا} و{وَقَالَتِ اخْرُجْ}. والتنوين: {بِزِينَةٍ الْكَوَاكِبِ} و{أَحَدٌ اللَّهُ} و{فَتِيلًا انظُرْ}. والياء اللينة: {يَا صَاحِبَيِ السِّجْنِ}.",
         id: "Huruf sahih: {لَقَدِ ٱسْتَكْبَرُوا}, {قُلِ ٱدْعُوا}, {وَقَالَتِ ٱخْرُجْ}. Tanwin: {بِزِينَةٍ ٱلْكَوَاكِبِ}, {أَحَدٌ ٱللَّهُ}, {فَتِيلًا ٱنظُرْ}. Ya layyinah: {يَا صَاحِبَيِ ٱلسِّجْنِ}." } },
    { t: { ar: "لماذا حركت الميم بالفتح في أول سورة آل عمران؟", id: "Mengapa mim difathahkan di awal Ali 'Imran?" },
      j: { ar: "لأن الميم حرف هجاء مبني على السكون التقت بلام لفظ الجلالة الساكنة بعد حذف همز الوصل فحركت بالفتح لتفخيم لفظ الجلالة، ويجوز معه المد.",
         id: "Mim huruf hijaiyah mabni sukun bertemu lam lafzhul jalalah yang sukun setelah hamzah washl gugur, maka difathahkan agar lafzhul jalalah ditebalkan; boleh pula dengan madd." } }
  ]
});
