/* Tajwid — Pertemuan 6: Bab 'Alaqat al-Huruf (Mutamatsilain, Mutaqaribain, Mutajanisain, Mutaba'idain) */
Kuliah.pertemuan("tajwid", {
  no: 6, motif: "saringan", tema: 3, durasi: 25,
  telegram: "https://t.me/Shifaaulqloub7/252",
  bab: { id: "Bab hubungan antarhuruf ('alaqat al-huruf)", ar: "باب علاقات الحروف" },
  judul: { id: "Hubungan Antarhuruf: Mutamatsilain, Mutaqaribain, Mutajanisain, Mutaba'idain", ar: "علاقات الحروف: المتماثلان والمتقاربان والمتجانسان والمتباعدان" },
  ringkas: {
    id: "Empat hubungan dua huruf yang bertemu: sama persis (mutamatsilain), berdekatan (mutaqaribain), satu makhraj beda sifat (mutajanisain), dan berjauhan (mutaba'idain). Masing-masing terbagi shaghir, kabir, dan muthlaq; lengkap dengan hukumnya menurut riwayat Hafsh beserta pengecualiannya.",
    ar: "علاقات الحروف أربع: التماثل والتقارب والتجانس والتباعد، ولكل منها ثلاثة أقسام: الصغير والكبير والمطلق، مع بيان أحكامها عند حفص وما استُثني منها."
  },
  tujuan: [
    { id: "Membedakan empat hubungan huruf berdasarkan kesamaan nama, rasm, makhraj, dan sifat.", ar: "التفريق بين علاقات الحروف الأربع بحسب الاسم والرسم والمخرج والصفة." },
    { id: "Menyebut tiga pembagian tiap hubungan (shaghir, kabir, muthlaq) beserta ciri harakatnya.", ar: "ذكر أقسام كل علاقة الثلاثة وضابط الحركة والسكون فيها." },
    { id: "Menerapkan hukum idgham/izhhar pada contoh ayat, termasuk dua pengecualian mutamatsilain shaghir dan delapan tempat mutajanisain shaghir.", ar: "تطبيق الأحكام على الأمثلة القرآنية مع المستثنيات." },
    { id: "Menjelaskan dua cara baca ta'manna dan mukkanni serta tarmihim bihijarah.", ar: "بيان الوجهين في {تَأْمَنَّا} و{مَكَّنِّي} و{تَرْمِيهِم بِحِجَارَةٍ}." }
  ],
  isi: [
    { t: "pembuka", id: "Bab ini membahas apa yang terjadi ketika **dua huruf bertemu**, dalam satu kata maupun dua kata. Ada empat kemungkinan hubungan antara keduanya, dan setiap hubungan menentukan apakah huruf pertama **dimasukkan (idgham)** ke huruf kedua atau **dijelaskan (izhhar)**.", ar: "في هذا الباب نتعرف على علاقة الحرفين إذا التقيا في كلمة أو كلمتين، وهي أربع علاقات: المتماثلان والمتقاربان والمتجانسان والمتباعدان، وبها يُعرف الإدغام والإظهار." },

    { t: "peta", ikon: "chain", pusat: { id: "Hubungan dua huruf yang bertemu", ar: "علاقات الحروف" }, cabang: [
      { id: "Mutamatsilain (sama persis)", ar: "المتماثلان", sub: [{ id: "nama, rasm, makhraj, sifat sama", ar: "اتحدا اسمًا ورسمًا ومخرجًا وصفة" }] },
      { id: "Mutaqaribain (berdekatan)", ar: "المتقاربان", sub: [{ id: "makhraj dekat, sifat berbeda", ar: "تقاربا مخرجًا واختلفا صفة" }] },
      { id: "Mutajanisain (sejenis)", ar: "المتجانسان", sub: [{ id: "makhraj sama, sifat berbeda", ar: "اتفقا مخرجًا واختلفا صفة" }] },
      { id: "Mutaba'idain (berjauhan)", ar: "المتباعدان", sub: [{ id: "makhraj dan sifat berjauhan", ar: "تباعدا مخرجًا واختلفا صفة" }] }
    ] },

    { t: "judul", id: "Pertama: Mutamatsilain (Dua Huruf Sama)", ar: "أولًا: المتماثلان" },
    { t: "definisi", judul: { id: "Al-Mutamatsilan", ar: "المتماثلان" }, lughah: { id: "Dua hal yang serupa/sama.", ar: "المتشابهان." }, istilah: { id: "**Dua huruf yang sama dalam nama, rasm (bentuk tulisan), makhraj, dan sifat**; seperti ba dengan ba, lam dengan lam, ta dengan ta. Bisa bertemu dalam satu kata atau dua kata: {مِن نَّارٍ}، {ٱذْهَب بِّكِتَابِي}، {سَلَكَكُمْ}، {إِذْ ذَهَبَ}، {يُسْرِف فِي}.", ar: "الحرفان اللذان اتحدا اسمًا ورسمًا ومخرجًا وصفة، كباء مع باء ولام مع لام وتاء مع تاء، وقد يلتقيان في كلمة وفي كلمتين." } },
    { t: "kutipan", ar: "إِنْ فِي الصِّفَاتِ وَالمَخَارِجِ اتَّفَقْ ..... حَرْفَانِ فَالْمِثْلاَنِ فِيهِمَا أَحَقْ", id: "Jika dua huruf sepakat dalam sifat dan makhraj, maka keduanya disebut *al-mitslan*.", oleh: { id: "Al-Jazuri (Matan Tuhfatul Athfal)", ar: "الإمام الجمزوري رحمه الله" } },
    { t: "tabel", judul: { id: "Tiga pembagian mutamatsilain", ar: "أقسام المتماثلين" }, kolom: [{ id: "Bagian", ar: "القسم" }, { id: "Ciri", ar: "الضابط" }, { id: "Hukum", ar: "الحكم" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Shaghir", ar: "الصغير" }, { id: "Huruf pertama sukun, kedua berharakat", ar: "الأول ساكن والثاني متحرك" }, { id: "Idgham (dengan dua pengecualian)", ar: "الإدغام إلا في مسألتين" }, { id: "{ٱضْرِب بِّعَصَاكَ}", ar: "اضرب بعصاك" }],
      [{ id: "Kabir", ar: "الكبير" }, { id: "Kedua huruf berharakat", ar: "الحرفان متحركان" }, { id: "Izhhar (kecuali As-Susi dari Abu 'Amr)", ar: "الإظهار لكل القراء عدا السوسي" }, { id: "{ٱلرَّحِيمِ مَالِكِ}", ar: "الرحيم مالك" }],
      [{ id: "Muthlaq", ar: "المطلق" }, { id: "Pertama berharakat, kedua sukun", ar: "الأول متحرك والثاني ساكن" }, { id: "Izhhar", ar: "الإظهار" }, { id: "{يَمْسَسْكَ}", ar: "يمسسك" }]
    ] },

    { t: "sub", id: "Mutamatsilain shaghir: idgham, kecuali dua tempat", ar: "المتماثلان الصغير" },
    { t: "contoh", judul: { id: "Idgham mutamatsilain shaghir", ar: "إدغام المتماثلين الصغير" }, sorot: [
      { label: { ar: "ٱضْرِب بِّعَصَاكَ" }, warna: "green", id: "Ba sukun masuk ke ba berharakat, lalu ba kedua ditasydid.", ar: "الباء الأولى ساكنة والثانية متحركة فأدغمت وشددت." },
      { label: { ar: "قُل لَّا" }, warna: "blue", id: "Lam sukun masuk ke lam berharakat.", ar: "اللام في اللام." },
      { label: { ar: "أَيْنَمَا يُوَجِّههُّ" }, warna: "gold", id: "Ha sukun masuk ke ha.", ar: "أدغمت الهاء في الهاء." }
    ] },
    { t: "banding", judul: { id: "Dua pengecualian: tetap izhhar", ar: "مستثنيات الإدغام في المتماثلين الصغير" },
      kiri: { judul: { id: "1. Huruf pertama adalah waw/ya madd", ar: "الأولى: واو أو ياء مدّيتان" }, ikon: "pen", warna: "amber", poin: [
        { id: "{قَالُوا وَهُمْ} dan {ٱلَّذِي يُوَسْوِسُ} (An-Nas: 5): huruf madd tidak boleh diidghamkan agar madd tidak hilang.", ar: "حرف المد لا يدغم في غيره لئلا يذهب المد." },
        { id: "Alasan ini sejalan dengan pendapat yang menempatkan ya madd di tengah lidah dan waw di bibir. Adapun menurut jumhur, makhraj keduanya di rongga mulut (al-jauf), sehingga tidak ada kesamaan makhraj sama sekali; maka wajib izhhar.", ar: "وعلى مذهب الجمهور مخرجهما الجوف فلا تماثل فوجب الإظهار." }
      ] },
      kanan: { judul: { id: "2. Huruf pertama adalah ha saktah", ar: "الثانية: هاء السكت" }, ikon: "hourglass", warna: "blue", poin: [
        { id: "{مَا أَغْنَىٰ عَنِّي مَالِيَهْ ۜ هَلَكَ عَنِّي سُلْطَانِيَهْ} (Al-Haqqah: 28-29).", ar: "{مَالِيَهْ هَلَكَ}" },
        { id: "Dua wajah menurut Hafsh: **izhhar dengan saktah** (lebih kuat/arjah), atau **idgham** saat washl (ha ke ha).", ar: "وجهان: الإظهار حال السكت وهو الأرجح، أو الإدغام حال الوصل." }
      ] } },
    { t: "contoh", judul: { id: "Waw dan ya layyinah di-idghamkan", ar: "استثناء الواو والياء اللينتين" }, sorot: [
      { label: { ar: "عَصَوا وَّكَانُوا" }, warna: "green", id: "Waw layyinah sukun berfathah sebelumnya: makhraj dan sifat sama, maka wajib idgham.", ar: "الواو الأولى لينة ساكنة مفتوح ما قبلها فاتحدا مخرجًا وصفة." },
      { label: { ar: "لَا تَخْتَصِمُوا لَدَيَّ" }, warna: "blue", id: "Ya layyinah sukun berfathah sebelumnya: wajib idgham.", ar: "الياء اللينة الساكنة المفتوح ما قبلها." }
    ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Ghunnah dalam idgham mutamatsilain", ar: "الغنة في إدغام المتماثلين" }, id: "Idgham mutamatsilain hanya disertai **ghunnah** pada dua keadaan: **mim bertemu mim** ({هُم مِّن}) dan **nun bertemu nun** ({مِن نَّارٍ}). Pada huruf lain, idgham dilakukan **tanpa ghunnah**.", ar: "إدغام المتماثلين لا غنة فيه إلا في حالتين: الميم مع الميم والنون مع النون، وباقي الحروف إدغام بغير غنة." },
    { t: "cek", q: { id: "Pada {قَالُوا وَهُمْ}, waw pertama tidak diidghamkan karena…", ar: "لماذا لا تدغم الواو الأولى في {قَالُوا وَهُمْ}؟" }, o: [{ id: "Ia ha saktah", ar: "لأنها هاء سكت" }, { id: "Ia waw layyinah", ar: "لأنها واو لينة" }, { id: "Ia huruf madd, dan huruf madd tidak diidghamkan", ar: "لأنها حرف مد ولا يدغم" }, { id: "Makhrajnya berjauhan", ar: "لتباعد المخرج" }], j: 2, b: { id: "Waw pertama adalah waw madd; huruf madd tidak diidghamkan agar madd tidak hilang.", ar: "حرف المد لا يدغم لئلا يذهب المد." } },

    { t: "sub", id: "Mutamatsilain kabir dan muthlaq", ar: "المتماثلان الكبير والمطلق" },
    { t: "p", id: "**Kabir** dinamai demikian karena kedua huruf berharakat; bagi yang meng-idghamkannya, kerjanya lebih banyak (huruf pertama harus disukunkan lebih dulu). Ada pula yang menyebut karena banyak terjadi dan harakat lebih banyak daripada sukun. Contoh: {ٱلرَّحِيمِ مَالِكِ}، {مَنَاسِكَكُمْ}، {وَجَعَلَ لَكُمْ}، {فِيهِ هُدًى}. Hukumnya **izhhar bagi semua qari kecuali As-Susi dari Abu 'Amr al-Bashri** yang meng-idghamkannya.", ar: "سمي كبيرًا لأن الحرفين متحركان، ولأن العمل فيه أكثر عند من يدغمه إذ يحتاج إلى تسكين الأول، وقيل لكثرة وقوعه. وحكمه الإظهار لكل القراء عدا السوسي عن أبي عمرو البصري فله الإدغام." },
    { t: "akordion", judul: { id: "Dua pengecualian Hafsh pada mutamatsilain kabir", ar: "مستثنيات حفص في المتماثلين الكبير" }, item: [
      { judul: { id: "{تَأْمَنَّا} (Yusuf: 11) — dua wajah", ar: "{تَأْمَنَّا} بسورة يوسف" }, id: "Asalnya *ta'mununa*, nun pertama diidghamkan ke nun kedua. **Wajah 1: isymam** — bibir dimonyongkan (isyarat dhammah) bersamaan dengan pengucapan nun pertama; hanya bisa dilihat oleh yang melihat, tidak oleh tunanetra. **Wajah 2: raum** — mengucapkan sekitar dua pertiga harakat dengan suara lirih yang terdengar oleh yang dekat saja (disebut sebagian ulama ikhfa); hanya sempurna dengan talaqqi langsung. Contoh: {مَا لَكَ لَا تَأْمَنَّا عَلَىٰ يُوسُفَ}.", ar: "الوجه الأول: الإدغام مع الإشمام، ضم الشفتين مقارنًا للنطق بالنون الأولى الساكنة حال إدغامها إشارة إلى أن الأصل الضم، يراه المبصر دون الأعمى. الوجه الثاني: الروم بتبعيض الحركة بصوت خفي بالإتيان بثلثي الحركة يسمعه القريب دون البعيد، ولا يتحقق إلا بالمشافهة." },
      { judul: { id: "Raum saat washl vs raum saat waqaf", ar: "الروم وصلًا والروم وقفًا" }, id: "Raum pada {تَأْمَنَّا} di saat washl: harakat yang tersisa lebih banyak daripada yang hilang (sebagian ulama menaksir dua pertiga; sebagian lain menyebutnya sekadar cepatnya pengucapan huruf). Raum saat waqaf: membawa dua pertiga harakat pada akhir kata seperti {نَسْتَعِينُ} dan {الْفَتْحُ}.", ar: "الروم في حال الوصل مقدار الحركة الباقي أكثر من الذاهب، أما الروم حال الوقف فهو الإتيان بثلثي الحركة كالوقف على {نَسْتَعِينُ} و{الْفَتْحُ}." },
      { judul: { id: "{مَكَّنِّي} (Al-Kahfi: 95)", ar: "{مَكَّنِّي} بسورة الكهف" }, id: "Asalnya *makkananii* dengan dua nun. Hafsh membaca dengan **meng-idghamkan nun pertama ke nun kedua**, sehingga menjadi satu nun bertasydid: {مَا مَكَّنِّي فِيهِ رَبِّي خَيْرٌ}.", ar: "أصلها مَكَنَنِي بنونين وقد قرأ حفص بإدغام النون الأولى في الثانية فصارت مَكَّنِّي بنون واحدة مشددة." }
    ] },
    { t: "definisi", judul: { id: "Mutamatsilain muthlaq", ar: "المتماثلان المطلق" }, lughah: { id: "Muthlaq = tidak terikat.", ar: "المطلق: غير المقيد." }, istilah: { id: "Huruf pertama **berharakat**, huruf kedua **sukun**, dalam satu kata: {تُتْلَىٰ}، {يَمْسَسْكَ}، {شَقَقْنَا}، {مَمْنُونٍ}. Dinamai *muthlaq* karena tidak terikat dengan sebutan shaghir maupun kabir. **Hukumnya izhhar**, karena tidak boleh mengidghamkan huruf berharakat ke huruf sukun; huruf berharakat lebih kuat daripada sukun, kecuali yang dikecualikan.", ar: "أن يتحرك الأول ويسكن الثاني في كلمة، وسمي مطلقًا لعدم تقيده بصغير ولا كبير، وحكمه الإظهار لأنه لا يجوز إدغام المتحرك في الساكن لأن المتحرك أقوى." } },

    { t: "judul", id: "Kedua: Mutaqaribain (Dua Huruf Berdekatan)", ar: "ثانيًا: المتقاربان" },
    { t: "definisi", judul: { id: "Al-Mutaqaribani", ar: "المتقاربان" }, lughah: { id: "Dua hal yang berdekatan.", ar: "المتدانيان." }, istilah: { id: "Dua huruf yang **berdekatan makhraj** namun berbeda sifat (dal–sin: {قَدْ سَمِعَ}، {عَدَدَ سِنِينَ}); atau **berdekatan sifat bukan makhraj** (sin–syin: {ذِي ٱلْعَرْشِ سَبِيلًا}; qaf–dal: {قَدَرًا}; qaf–tha: {يَلْتَقِطْهُ}); atau berdekatan makhraj sekaligus sifat (lam–ra: {قُل رَّبِّي}; qaf–kaf: {فَوْقِكُمْ}).", ar: "الحرفان اللذان تقاربا مخرجًا واختلفا صفة، أو تقاربا صفة لا مخرجًا، أو تقاربا مخرجًا وصفة." } },
    { t: "kutipan", ar: "وَإِنْ يَكُونَا مَخْرَجًا تَقَارَبَا ...... وَفِي الصِّفَاتِ اخْتَلَفَا يُلَقَّبَا مُتْقَارِبَيْنِ", id: "Jika dua huruf berdekatan makhrajnya dan berbeda sifatnya, keduanya dijuluki *mutaqaribain*.", oleh: { id: "Al-Jazuri", ar: "الإمام الجمزوري رحمه الله" } },
    { t: "p", id: "Mutaqaribain terbagi tiga: **shaghir** (pertama sukun, kedua berharakat), **kabir** (keduanya berharakat), dan **muthlaq** (pertama berharakat, kedua sukun). Hukum asal shaghir menurut Hafsh adalah **izhhar**, kecuali sejumlah masalah (dalam tafrigh disebut 32 masalah) yang disepakati harus tidak diizhharkan. Kelompok yang disepakati dikelompokkan sebagai berikut.", ar: "ينقسم المتقاربان إلى صغير وكبير ومطلق. والصغير أن يسكن الأول ويتحرك الثاني، وحكمه الإظهار عند حفص عدا اثنتين وثلاثين مسألة متفق على عدم إظهارها." },
    { t: "tabel", judul: { id: "Masalah mutaqaribain shaghir yang disepakati", ar: "المسائل المتفق عليها في المتقاربين الصغير" }, kolom: [{ id: "Kelompok", ar: "المجموعة" }, { id: "Rincian", ar: "التفصيل" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Disepakati idgham: nun sukun", ar: "النون الساكنة" }, { id: "Nun sukun masuk ke lam, ra, ya, waw (huruf *yarmaluun* yang berdekatan)", ar: "تدغم في اللام والراء والياء والواو" }, { id: "{مَن يَعْمَلْ}، {مِن رَّبِّهِمْ}، {مِن لَّدُنْهُ}", ar: "من يعمل، من ربهم" }],
      [{ id: "Disepakati idgham: lam syamsiyyah", ar: "اللام الشمسية" }, { id: "Lam ta'rif diidghamkan ke huruf syamsiyyah", ar: "تدغم في الحروف الشمسية" }, { id: "{الطَّامَّةُ}، {الشَّمْسِ}، {الصَّمَدُ}، {الرَّحْمَةُ}، {التَّوَّابُ}، {الضَّالِّينَ}", ar: "الطامة، الشمس، الصمد" }],
      [{ id: "Disepakati idgham: lam pada *qul*/*bal* + ra", ar: "لام قل وبل قبل الراء" }, { id: "Lam sukun pada kata *qul* dan huruf *bal* bila diikuti ra", ar: "اللام الساكنة في قُل وبَل إذا جاء بعدها راء" }, { id: "{قُل رَّبِّي}، {بَل رَّفَعَهُ ٱللَّهُ}", ar: "قل ربي، بل رفعه" }],
      [{ id: "Disepakati qalb", ar: "المتفق على قلبه" }, { id: "Nun sukun sebelum ba", ar: "النون الساكنة قبل الباء" }, { id: "{مِنۢ بَعْدِ}", ar: "من بعد" }],
      [{ id: "Disepakati ikhfa", ar: "المتفق على إخفائه" }, { id: "Nun sukun sebelum huruf ikhfa (13 huruf dalam hitungan tafrigh, tanpa qaf dan kaf yang termasuk mutaba'id)", ar: "النون الساكنة قبل أحرف الإخفاء" }, { id: "{كُنتُمْ}، {مِن شَيْءٍ}، {مِن جُوعٍ}، {سُندُسٍ}", ar: "كنتم، من شيء، من جوع، سندس" }]
    ] },
    { t: "catatan", gaya: "tanbih", judul: { id: "Pengecualian dalam kelompok yang disepakati", ar: "مستثنيات" }, id: "(1) Nun sukun dengan waw tetap **izhhar** pada {يس وَٱلْقُرْآنِ} dan {ن وَٱلْقَلَمِ} karena riwayatnya demikian. (2) Nun dengan ra pada {مَنْ رَاقٍ} (Al-Qiyamah: 27) tidak diidghamkan karena wajib **saktah**, dan saktah mencegah idgham. (3) Begitu pula {بَلْ رَانَ} (Al-Muthaffifin: 14): wajib saktah sehingga tidak diidghamkan. Tafrigh menyebut lam syamsiyyah \"tiga belas huruf\", sedangkan hitungan baku adalah **empat belas** huruf (ت ث د ذ ر ز س ش ص ض ط ظ ل ن).", ar: "يستثنى النون مع الواو في {يس وَالْقُرْآنِ} و{ن وَالْقَلَمِ} لأن الرواية فيهما بالإظهار، والنون مع الراء في {مَنْ رَاقٍ} وكذلك {بَلْ رَانَ} لوجوب السكت والسكت يمنع الإدغام." },
    { t: "contoh", judul: { id: "Masalah yang diperselisihkan: {نَخْلُقكُّم}", ar: "المختلف فيه: {نَخْلُقكُّم}" }, ayat: { ar: "أَلَمْ نَخْلُقكُّم مِّن مَّاءٍ مَّهِينٍ", src: "المرسلات: ٢٠", id: "Bukankah Kami menciptakan kamu dari air yang hina?" }, sorot: [
      { label: { ar: "الإدغام الكامل" }, warna: "green", id: "Pendapat jumhur: qaf sukun diidghamkan **sempurna** ke kaf; tidak tampak sifat qaf seperti isti'la dan qalqalah.", ar: "لا يظهر شيء من صفات القاف كالاستعلاء والقلقلة، وهو رأي الجمهور." },
      { label: { ar: "الإدغام الناقص" }, warna: "amber", id: "Idgham **naqish**: sebagian sifat qaf tetap (isti'la) dan sebagian hilang (qalqalah); yaitu mengucapkan sebagian bunyi qaf.", ar: "بقاء بعض صفات القاف كالاستعلاء وزوال بعضها كالقلقلة." }
    ] },
    { t: "kutipan", ar: "والخُلفُ بِنَخلقكُم وَقع", id: "Terdapat perbedaan (cara baca) pada *nakhluqkum*.", oleh: { id: "Ibnul Jazari", ar: "الإمام ابن الجزري" } },
    { t: "p", id: "**Mutaqaribain kabir** (keduanya berharakat), mis. {ذِي ٱلْعَرْشِ سَبِيلًا} dan {عَدَدَ سِنِينَ} — dal berfathah dan sin berkasrah — hukumnya **izhhar**. **Mutaqaribain muthlaq** (pertama berharakat, kedua sukun), mis. {عَلَيْكَ} (lam–ya) dan {لَن} (lam–nun), hukumnya **izhhar**. Yang dimaksud 'berdekatan' adalah kedekatan **nisbi (menurut kewajaran)**; bisa jadi dua huruf dari satu anggota ucap tidak dianggap berdekatan, seperti sin dan qaf (pendapat yang rajih).", ar: "المتقاربان الكبير: أن يتحرك الحرفان وحكمه الإظهار. والمطلق: أن يتحرك الأول ويسكن الثاني وحكمه الإظهار. والمراد التقارب النسبي أي المعقول، فقد لا يكون الحرفان متقاربين مع كون مخرجهما من عضو واحد كالسين والقاف وهو الراجح." },
    { t: "catatan", gaya: "faidah", judul: { id: "Kaidah penyimpul", ar: "قاعدة" }, id: "Setiap dua huruf yang sah diidghamkan menurut riwayat, sedangkan keduanya tidak memenuhi definisi *mitsl* maupun *jins*, maka alasan bolehnya idgham adalah **taqarub (kedekatan)**. Bila di antara dua makhraj terdapat satu makhraj atau lebih yang menyela, sebabnya disebut **taqarub nisbi**.", ar: "كل حرفين صح إدغامهما رواية ولم ينطبق عليهما تعريف المثلين أو المتجانسين كان مسوغ الإدغام حينئذ تقارب. فإن فصل بين المخرجين مخرج فأكثر كان سبب الإدغام التقارب النسبي." },

    { t: "judul", id: "Ketiga: Mutajanisain (Satu Makhraj, Beda Sifat)", ar: "ثالثًا: المتجانسان" },
    { t: "definisi", judul: { id: "Al-Mutajanisani", ar: "المتجانسان" }, lughah: { id: "Dua hal yang sejenis.", ar: "المتحدان جنسًا." }, istilah: { id: "Dua huruf yang **sama makhrajnya namun berbeda sebagian sifatnya**, seperti dal, tha, dan ta — makhrajnya satu, yaitu ujung lidah, tetapi sifatnya berlainan.", ar: "الحرفان اللذان اتفقا في المخرج واختلفا في بعض الصفات كالدال والطاء والتاء، المخرج واحد وهو طرف اللسان لكنهما مختلفان في الصفات." } },
    { t: "kutipan", ar: "أَوْ يَكُونَا اتَّفَقَا ..... فِي مَخْرَجٍ دُونَ الصِّفَاتِ حُقِّقَا بِالمتجانسين", id: "Atau dua huruf yang sepakat makhrajnya tanpa sifatnya, itulah *mutajanisain*.", oleh: { id: "Al-Jazuri", ar: "الإمام الجمزوري رحمه الله" } },
    { t: "p", id: "**Shaghir** (pertama sukun, kedua berharakat): hukum asalnya **izhhar**, mis. {وَفِي خَلْقِكُمْ وَمَا} (mim dan waw dari kedua bibir: mim dengan mengatupkan bibir, waw dengan membuka bibir) dan {فَٱصْفَحْ عَنْهُمْ} (ha dan 'ain dari tengah tenggorokan). Namun ada **delapan tempat** yang hukumnya bukan izhhar:", ar: "الصغير: أن يسكن الأول ويتحرك الثاني وحكمه الإظهار كقوله تعالى {وَفِي خَلْقِكُمْ وَمَا} و{فَٱصْفَحْ عَنْهُمْ} إلا في ثمانية مواضع ليس حكمها الإظهار:" },
    { t: "tabel", judul: { id: "Delapan tempat pengecualian mutajanisain shaghir", ar: "المواضع الثمانية المستثناة" }, kolom: [{ id: "Jenis", ar: "النوع" }, { id: "Huruf", ar: "الحرفان" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "Idgham sempurna (disepakati) 1", ar: "إدغام كامل" }, { id: "Dal ke ta", ar: "الدال في التاء" }, { id: "{قَد تَّبَيَّنَ}، {وَجَدتُّم}، {وَمَهَّدتُّ}", ar: "قد تبين، وجدتم، ومهدت" }],
      [{ id: "Idgham sempurna 2", ar: "إدغام كامل" }, { id: "Ta ke dal", ar: "التاء في الدال" }, { id: "{أَثْقَلَت دَّعَوَا}، {أُجِيبَت دَّعْوَتُكُمَا}", ar: "أثقلت دعوا، أجيبت دعوتكما" }],
      [{ id: "Idgham sempurna 3", ar: "إدغام كامل" }, { id: "Ta ke tha", ar: "التاء في الطاء" }, { id: "{وَقَالَت طَّائِفَةٌ}، {هَمَّت طَّائِفَتَانِ}", ar: "قالت طائفة، همت طائفتان" }],
      [{ id: "Idgham sempurna 4", ar: "إدغام كامل" }, { id: "Dzal ke zha", ar: "الذال في الظاء" }, { id: "{إِذ ظَّلَمُوا}، {إِذ ظَّلَمْتُمْ}", ar: "إذ ظلموا، إذ ظلمتم" }],
      [{ id: "Idgham sempurna 5", ar: "إدغام كامل" }, { id: "Tsa ke dzal", ar: "الثاء في الذال" }, { id: "{يَلْهَث ذَّٰلِكَ}", ar: "يلهث ذلك" }],
      [{ id: "Idgham sempurna 6", ar: "إدغام كامل" }, { id: "Ba ke mim", ar: "الباء في الميم" }, { id: "{يَا بُنَيَّ ٱرْكَب مَّعَنَا}", ar: "اركب معنا" }],
      [{ id: "Idgham naqish (disepakati)", ar: "إدغام ناقص" }, { id: "Tha ke ta", ar: "الطاء في التاء" }, { id: "{أَحَطتُ}، {بَسَطتَ}، {فَرَّطتُمْ}", ar: "أحطت، بسطت، فرطتم" }],
      [{ id: "Diperselisihkan", ar: "مختلف فيه" }, { id: "Mim sukun sebelum ba", ar: "الميم الساكنة قبل الباء" }, { id: "{تَرْمِيهِم بِحِجَارَةٍ}", ar: "ترميهم بحجارة" }]
    ] },
    { t: "langkah", judul: { id: "Cara melafalkan idgham sempurna dan naqish", ar: "طريقة النطق" }, item: [
      { judul: { id: "Idgham sempurna", ar: "الإدغام الكامل" }, id: "Huruf pertama dihilangkan seluruhnya dan masuk ke huruf kedua yang ditasydid: dibaca {قَد تَّبَيَّنَ}, bukan *qad tabayyana* dengan dal jelas; {وَجَدتُّم}; {وَمَهَّدتُّ}.", ar: "لا نقول قدْ تبين ولا وجدْتم، إنما نقرأ {قَد تَّبَيَّنَ} و{وَجَدتُّم} و{وَمَهَّدتُّ}." },
      { judul: { id: "Perhatikan tafkhim", ar: "التنبيه على التفخيم" }, id: "Pada {هَمَّت طَّائِفَتَانِ}, jaga agar huruf sebelum ta (ha, mim, qaf, lam pada contoh-contoh sejenis) tidak ikut ditebalkan.", ar: "ينتبه لئلا يفخم ما قبل التاء." },
      { judul: { id: "Idgham naqish (tha ke ta)", ar: "الإدغام الناقص" }, id: "Jangan membaca *ahatthu* (tha murni) dan jangan pula *ahattu* (ta murni). Ucapkan **sebagian bunyi ta bersama tha** pada {أَحَطتُ} dan {بَسَطتَ}. Pada {فَرَّطتُمْ}: fa dan ha ditipiskan, lalu pada tha lidah dinaikkan menempel pangkal gigi seri atas sehingga tampak ketebalan tha **tanpa qalqalah**.", ar: "لا نقول أحطّ ولا أحتّ، وإنما {أَحَطتُ} نأتي بجزء من التاء مع الطاء، وفي {فَرَّطتُمْ} نرفع اللسان فيظهر تفخيم الطاء دون قلقلة." }
    ] },
    { t: "catatan", gaya: "info", judul: { id: "{تَرْمِيهِم بِحِجَارَةٍ}: dua wajah", ar: "{تَرْمِيهِم بِحِجَارَةٍ}" }, id: "Mim sukun sebelum ba diperselisihkan antara **izhhar** (mim jelas) dan **ikhfa** (syafawi); pendapat jumhur adalah ikhfa, dan persoalannya memang khilaf. Idgham mutajanisain bisa terjadi dalam satu kata ({وَمَهَّدتُّ}) atau dua kata ({وَقَالَت طَّائِفَةٌ}).", ar: "وهي مسألة مختلف فيها بين الإظهار والإخفاء، وهذا قول الجمهور والأمر فيه خلاف." },
    { t: "banding", judul: { id: "Mutajanisain kabir vs muthlaq", ar: "المتجانسان الكبير والمطلق" },
      kiri: { judul: { id: "Kabir (keduanya berharakat)", ar: "الكبير" }, ikon: "layers", warna: "green", poin: [
        { id: "Contoh: {ٱلصَّالِحَاتِ طُوبَىٰ} (ta berkasrah, tha berdhammah). Hukum: **izhhar**.", ar: "الصالحات طوبى، وحكمه الإظهار" },
        { id: "Pengecualian: {يَهِدِّي} (Yunus: 35) — asalnya *yahtadi*; ta disukunkan untuk idgham, ha dikasrah agar lepas dari dua sukun, ta diubah menjadi dal, lalu diidghamkan.", ar: "إلا {يَهِدِّي} بسورة يونس وأصلها يهتدي" }
      ] },
      kanan: { judul: { id: "Muthlaq (pertama berharakat, kedua sukun)", ar: "المطلق" }, ikon: "scale", warna: "blue", poin: [
        { id: "Contoh: {مَبْعُوثُونَ} — ba sukun setelah mim berharakat; mim dan ba satu makhraj (bibir). Hukum: **izhhar**.", ar: "مبعوثون: الميم والباء من الشفتين" }
      ] } },
    { t: "p", id: "Ada pula **mutajanis dalam sifat**, yaitu dua huruf yang sama sifatnya tetapi berbeda makhraj. Contoh singkat dari dosen — shaghir: dal–jim {لَقَدْ جَاءَكُمْ}, ta–kaf {أَخْرَجَتْكَ}; kabir: ha–tsa {حَثِيثًا}, ta–kaf {قَرْيَتِكَ}; muthlaq: mim–nun {مِنْهَاجًا}. Hukum semuanya **izhhar**.", ar: "وقد يكون هناك متجانسان صفة: حرفان اتفقا صفة واختلفا مخرجًا، كالدال مع الجيم {لَقَدْ جَاءَكُمْ} والتاء مع الكاف {أَخْرَجَتْكَ} وفي الكبير {حَثِيثًا} و{قَرْيَتِكَ} والمطلق {مِنْهَاجًا}، وحكمه الإظهار." },
    { t: "kutipan", ar: "وَأَوَّلَى مِثْلٍ وَجِنْسٍ إنْ سَكَنْ ..... أَدْغِمْ كَقُلْ رَبِّ وَبَلْ لاَ وَأَبِنْ", id: "Dua huruf semisal atau sejenis yang pertama sukun, idghamkanlah, seperti *qul rabbi* dan *bal laa*.", oleh: { id: "Ibnul Jazari (Muqaddimah Al-Jazariyyah)", ar: "الإمام ابن الجزري رحمه الله" } },
    { t: "cek", q: { id: "Manakah yang termasuk idgham NAQISH (tidak sempurna)?", ar: "أي الكلمات التالية فيها إدغام ناقص؟" }, o: [{ id: "{قَد تَّبَيَّنَ}", ar: "قَد تَّبَيَّنَ" }, { id: "{أَحَطتُ}", ar: "أَحَطتُ" }, { id: "{إِذ ظَّلَمُوا}", ar: "إِذ ظَّلَمُوا" }, { id: "{يَلْهَث ذَّٰلِكَ}", ar: "يَلْهَث ذَّٰلِكَ" }], j: 1, b: { id: "Tha ke ta pada {أَحَطتُ} dibaca dengan sebagian sifat tha tetap — idgham naqish.", ar: "إدغام الطاء في التاء ناقص." } },

    { t: "judul", id: "Keempat: Mutaba'idain (Dua Huruf Berjauhan)", ar: "رابعًا: المتباعدان" },
    { t: "definisi", judul: { id: "Al-Mutaba'idani", ar: "المتباعدان" }, lughah: { id: "Dua hal yang saling berjauhan.", ar: "المتبعدان." }, istilah: { id: "Dua huruf yang **berjauhan makhrajnya** dan berbeda sifat (ta–kha {تَخْرُجُونَ}), atau berjauhan makhraj namun sepakat sifat (kaf–ta {فَٱكْتُبُوهُ}).", ar: "الحرفان اللذان تباعدا مخرجًا واختلفا صفة، كالتاء مع الخاء، أو تباعدا مخرجًا واتفقا صفة كالكاف مع التاء." } },
    { t: "tabel", judul: { id: "Pembagian mutaba'idain", ar: "أقسام المتباعدين" }, kolom: [{ id: "Bagian", ar: "القسم" }, { id: "Ciri", ar: "الضابط" }, { id: "Contoh", ar: "المثال" }, { id: "Penjelasan makhraj", ar: "المخرج" }], baris: [
      [{ id: "Shaghir", ar: "الصغير" }, { id: "Pertama sukun, kedua berharakat", ar: "الأول ساكن والثاني متحرك" }, { id: "{تُلِيَتْ عَلَيْهِمْ}", ar: "ت مع ع" }, { id: "Ta dari ujung lidah, 'ain dari tenggorokan", ar: "التاء من طرف اللسان والعين من الحلق" }],
      [{ id: "Kabir", ar: "الكبير" }, { id: "Keduanya berharakat", ar: "الأول متحرك والثاني متحرك" }, { id: "{فَاكِهُونَ}", ar: "ك مع ه" }, { id: "Kaf dari pangkal lidah, ha dari tenggorokan", ar: "الكاف من أقصى اللسان والهاء من الحلق" }],
      [{ id: "Muthlaq", ar: "المطلق" }, { id: "Pertama berharakat, kedua sukun (kebalikan shaghir)", ar: "الأول متحرك والثاني ساكن" }, { id: "{أَنفُسِكُمْ}", ar: "ء مع ن" }, { id: "Hamzah dari tenggorokan, nun dari ujung lidah", ar: "الهمزة من الحلق والنون من طرف اللسان" }]
    ] },
    { t: "catatan", gaya: "hikmah", id: "Ketiga bagian mutaba'idain **wajib diizhharkan bagi seluruh qari**, dan tidak mungkin diidghamkan karena makhraj berjauhan dan sifat berbeda. **Pengecualian pada shaghir hanya dua masalah** yang hukumnya **ikhfa**, bukan izhhar: nun dengan qaf ({ٱنقَلَبُوا}) dan nun dengan kaf ({أَنكَالًا}) — nun dari ujung lidah, qaf/kaf dari pangkal lidah.", ar: "وجميع هذه الأقسام الثلاثة يجب إظهارها لجميع القراء ولا يمكن الإدغام فيها لتباعد المخرج واختلاف الصفة، ويستثنى من المتباعدين الصغير مسألتان حكمهما الإخفاء: النون مع القاف {ٱنقَلَبُوا} والنون مع الكاف {أَنكَالًا}." },

    { t: "balik", judul: { id: "Kartu hafalan: hukum cepat", ar: "بطاقات المراجعة" }, item: [
      { depan: { id: "Mutamatsilain shaghir", ar: "المتماثلان الصغير" }, belakang: { id: "Idgham; pengecualian: waw/ya madd dan ha saktah", ar: "الإدغام إلا مسألتين" } },
      { depan: { id: "Mutamatsilain kabir", ar: "المتماثلان الكبير" }, belakang: { id: "Izhhar (As-Susi idgham); khusus Hafsh: {تَأْمَنَّا} & {مَكَّنِّي}", ar: "الإظهار" } },
      { depan: { id: "Mutaqaribain shaghir", ar: "المتقاربان الصغير" }, belakang: { id: "Izhhar, kecuali masalah yang disepakati idgham/qalb/ikhfa", ar: "الإظهار إلا ما اتفق على إدغامه" } },
      { depan: { id: "Mutajanisain shaghir", ar: "المتجانسان الصغير" }, belakang: { id: "Izhhar, kecuali delapan tempat", ar: "الإظهار إلا ثمانية مواضع" } },
      { depan: { id: "Mutaba'idain", ar: "المتباعدان" }, belakang: { id: "Izhhar semuanya; shaghir: nun+qaf/kaf ikhfa", ar: "الإظهار" } }
    ] },
    { t: "tanya", q: { id: "Mengapa waw madd tidak diidghamkan pada {قَالُوا وَهُمْ}, sedangkan waw layyinah pada {عَصَوا وَّكَانُوا} diidghamkan?", ar: "لماذا لم تدغم واو المد في {قَالُوا وَهُمْ} وأدغمت اللينة في {عَصَوا وَّكَانُوا}؟" }, a: { id: "Huruf madd tidak boleh diidghamkan karena madd akan hilang (dan, menurut jumhur, makhrajnya al-jauf sehingga tidak sama makhraj). Waw layyinah (sukun, berfathah sebelumnya) makhrajnya dua bibir dan sifatnya sama dengan waw berharakat di sesudahnya, sehingga bersatu makhraj dan sifat — wajib idgham.", ar: "حرف المد لا يدغم لئلا يذهب المد وهو من الجوف عند الجمهور، أما الواو اللينة الساكنة المفتوح ما قبلها فمخرجها الشفتان فاتحدا في المخرج والصفة فوجب الإدغام." } },
    { t: "tanya", q: { id: "Mengapa mutamatsilain kabir dinamai kabir?", ar: "لماذا سمي المتماثلان الكبير كبيرًا؟" }, a: { id: "Karena kedua hurufnya berharakat; bagi yang meng-idghamkannya pekerjaannya lebih banyak karena harus menyukunkan huruf pertama dulu. Ada yang berkata karena sering terjadi dan harakat lebih banyak daripada sukun.", ar: "لأن الحرفين متحركان، وعند من يدغمه يكون العمل فيه أكثر، وقيل لكثرة وقوعه وأن الحركة أكثر من السكون." } },
    { t: "ringkasan", item: [
      { id: "Empat hubungan huruf: mutamatsilain, mutaqaribain, mutajanisain, mutaba'idain; masing-masing shaghir, kabir, muthlaq.", ar: "علاقات الحروف أربع، ولكل منها صغير وكبير ومطلق." },
      { id: "Mutamatsilain shaghir: idgham, kecuali waw/ya madd dan ha saktah (dua wajah).", ar: "المتماثلان الصغير: الإدغام إلا واو أو ياء المد وهاء السكت." },
      { id: "Mutamatsilain kabir: izhhar; Hafsh: {تَأْمَنَّا} (isymam/raum) dan {مَكَّنِّي} (idgham).", ar: "الكبير: الإظهار، واستثنى حفص تأمنا ومكنني." },
      { id: "Mutaqaribain shaghir: izhhar kecuali yang disepakati idgham, qalb, ikhfa; {نَخْلُقكُّم}: idgham kamil atau naqish.", ar: "المتقاربان الصغير: الإظهار إلا المتفق على إدغامه أو قلبه أو إخفائه." },
      { id: "Mutajanisain shaghir: izhhar kecuali delapan tempat (enam idgham sempurna, satu naqish, satu khilaf).", ar: "المتجانسان الصغير: الإظهار إلا ثمانية مواضع." },
      { id: "Mutaba'idain: seluruhnya izhhar; pengecualian nun+qaf/kaf: ikhfa.", ar: "المتباعدان: الإظهار، ويستثنى النون مع القاف والكاف فالإخفاء." }
    ] }
  ],
  istilah: [
    { ar: "المتماثلان", latin: "al-mutamatsilan", id: "Dua huruf sama persis", def: { id: "Dua huruf yang sama nama, rasm, makhraj, dan sifatnya.", ar: "ما اتحدا اسمًا ورسمًا ومخرجًا وصفة." } },
    { ar: "المتقاربان", latin: "al-mutaqaribani", id: "Dua huruf berdekatan", def: { id: "Berdekatan makhraj dan/atau sifat, tetapi tidak sama.", ar: "ما تقاربا مخرجًا أو صفة." } },
    { ar: "المتجانسان", latin: "al-mutajanisani", id: "Dua huruf sejenis", def: { id: "Sama makhraj, berbeda sebagian sifat.", ar: "اتفقا مخرجًا واختلفا صفة." } },
    { ar: "المتباعدان", latin: "al-mutaba'idani", id: "Dua huruf berjauhan", def: { id: "Berjauhan makhrajnya dan berbeda sifatnya.", ar: "تباعدا مخرجًا." } },
    { ar: "الصغير", latin: "ash-shaghir", id: "Shaghir", def: { id: "Huruf pertama sukun, kedua berharakat.", ar: "أن يسكن الأول ويتحرك الثاني." } },
    { ar: "الكبير", latin: "al-kabir", id: "Kabir", def: { id: "Kedua huruf berharakat.", ar: "أن يتحرك الحرفان." } },
    { ar: "المطلق", latin: "al-muthlaq", id: "Muthlaq", def: { id: "Huruf pertama berharakat, kedua sukun.", ar: "أن يتحرك الأول ويسكن الثاني." } },
    { ar: "الإدغام الناقص", latin: "al-idgham an-naqish", id: "Idgham tidak sempurna", def: { id: "Sebagian sifat huruf pertama tetap terdengar.", ar: "بقاء بعض صفات الحرف الأول." } },
    { ar: "الإشمام", latin: "al-isymam", id: "Isymam", def: { id: "Memonyongkan bibir sebagai isyarat dhammah, terlihat oleh mata.", ar: "ضم الشفتين إشارة إلى الضم." } },
    { ar: "الروم", latin: "ar-raum", id: "Raum", def: { id: "Mengucapkan sebagian harakat dengan suara lirih.", ar: "الإتيان بثلثي الحركة بصوت خفي." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Dua huruf yang sama nama, rasm, makhraj, dan sifatnya disebut…", ar: "الحرفان المتحدان اسمًا ورسمًا ومخرجًا وصفة…" }, o: [{ id: "Mutaqaribain", ar: "متقاربان" }, { id: "Mutamatsilain", ar: "متماثلان" }, { id: "Mutajanisain", ar: "متجانسان" }, { id: "Mutaba'idain", ar: "متباعدان" }], j: 1, b: { id: "Itulah definisi mutamatsilain.", ar: "هذا تعريف المتماثلين." } },
      { q: { id: "Hukum {ٱضْرِب بِّعَصَاكَ} adalah…", ar: "حكم {ٱضْرِب بِّعَصَاكَ}…" }, o: [{ id: "Izhhar", ar: "إظهار" }, { id: "Ikhfa", ar: "إخفاء" }, { id: "Idgham mutamatsilain shaghir", ar: "إدغام متماثلين صغير" }, { id: "Qalb", ar: "قلب" }], j: 2, b: { id: "Ba sukun bertemu ba berharakat: idgham mutamatsilain shaghir.", ar: "الباء الساكنة في الباء المتحركة." } },
      { q: { id: "Mengapa waw pada {قَالُوا وَهُمْ} tidak diidghamkan?", ar: "لماذا لا تدغم الواو في {قَالُوا وَهُمْ}؟" }, o: [{ id: "Ia ha saktah", ar: "هاء سكت" }, { id: "Ia huruf madd", ar: "حرف مد" }, { id: "Ia huruf qalqalah", ar: "حرف قلقلة" }, { id: "Ia berharakat", ar: "متحرك" }], j: 1, b: { id: "Huruf madd tidak diidghamkan agar tidak hilang maddnya.", ar: "حرف المد لا يدغم." } },
      { q: { id: "Pilih contoh mutamatsilain kabir:", ar: "اختر مثال المتماثلين الكبير:" }, o: [{ id: "{يَمْسَسْكَ}", ar: "يمسسك" }, { id: "{ٱضْرِب بِّعَصَاكَ}", ar: "اضرب بعصاك" }, { id: "{ٱلرَّحِيمِ مَالِكِ}", ar: "الرحيم مالك" }, { id: "{مَن يَعْمَلْ}", ar: "من يعمل" }], j: 2, b: { id: "Mim berkasrah bertemu mim berfathah/berharakat: kedua huruf berharakat.", ar: "الحرفان متحركان." } },
      { q: { id: "Kata {تَأْمَنَّا} dalam Surah Yusuf dibaca dengan…", ar: "تُقرأ {تَأْمَنَّا} بـ…" }, o: [{ id: "Isymam atau raum", ar: "الإشمام أو الروم" }, { id: "Ikhfa saja", ar: "الإخفاء فقط" }, { id: "Qalb", ar: "القلب" }, { id: "Madd lazim", ar: "المد اللازم" }], j: 0, b: { id: "Dua wajah: idgham dengan isymam, atau raum.", ar: "الإدغام مع الإشمام أو الروم." } },
      { q: { id: "Yang termasuk mutaqaribain shaghir yang disepakati qalb adalah…", ar: "المتقاربان المتفق على قلبهما…" }, o: [{ id: "Nun sukun + ba", ar: "النون الساكنة والباء" }, { id: "Lam + ra", ar: "اللام والراء" }, { id: "Nun + waw", ar: "النون والواو" }, { id: "Qaf + kaf", ar: "القاف والكاف" }], j: 0, b: { id: "{مِنۢ بَعْدِ}: iqlab.", ar: "من بعد: إقلاب." } },
      { q: { id: "Pada {يس وَٱلْقُرْآنِ} nun sukun dan waw dibaca…", ar: "النون والواو في {يس وَٱلْقُرْآنِ} تُقرأ…" }, o: [{ id: "Idgham", ar: "إدغام" }, { id: "Izhhar", ar: "إظهار" }, { id: "Ikhfa", ar: "إخفاء" }, { id: "Qalb", ar: "قلب" }], j: 1, b: { id: "Riwayatnya izhhar.", ar: "الرواية بالإظهار." } },
      { q: { id: "{نَخْلُقكُّم} memiliki dua wajah, yaitu…", ar: "في {نَخْلُقكُّم} وجهان وهما…" }, o: [{ id: "Izhhar dan ikhfa", ar: "الإظهار والإخفاء" }, { id: "Idgham kamil dan idgham naqish", ar: "الإدغام الكامل والناقص" }, { id: "Qalb dan idgham", ar: "القلب والإدغام" }, { id: "Madd dan qashr", ar: "المد والقصر" }], j: 1, b: { id: "Jumhur: idgham kamil; ada pula idgham naqish.", ar: "الجمهور على الكامل ومنهم من يقول بالناقص." } },
      { q: { id: "Hukum {أَحَطتُ} adalah idgham…", ar: "حكم {أَحَطتُ} إدغام…" }, o: [{ id: "Kamil", ar: "كامل" }, { id: "Naqish", ar: "ناقص" }, { id: "Bighunnah", ar: "بغنة" }, { id: "Syafawi", ar: "شفوي" }], j: 1, b: { id: "Tha ke ta diidghamkan dengan sebagian sifat tha tetap.", ar: "إدغام الطاء في التاء إدغام ناقص." } },
      { q: { id: "Hukum {ٱلصَّالِحَاتِ طُوبَىٰ} (mutajanisain kabir) adalah…", ar: "حكم {ٱلصَّالِحَاتِ طُوبَىٰ}…" }, o: [{ id: "Idgham", ar: "إدغام" }, { id: "Izhhar", ar: "إظهار" }, { id: "Ikhfa", ar: "إخفاء" }, { id: "Iqlab", ar: "إقلاب" }], j: 1, b: { id: "Mutajanisain kabir hukumnya izhhar, kecuali {يَهِدِّي}.", ar: "الإظهار إلا {يَهِدِّي}." } },
      { q: { id: "Dua huruf yang berjauhan makhraj dan hukumnya ikhfa pada mutaba'idain shaghir adalah…", ar: "المتباعدان اللذان حكمهما الإخفاء…" }, o: [{ id: "Nun dengan qaf/kaf", ar: "النون مع القاف والكاف" }, { id: "Ta dengan 'ain", ar: "التاء مع العين" }, { id: "Kaf dengan ha", ar: "الكاف مع الهاء" }, { id: "Hamzah dengan nun", ar: "الهمزة مع النون" }], j: 0, b: { id: "{ٱنقَلَبُوا} dan {أَنكَالًا}.", ar: "انقلبوا وأنكالا." } },
      { q: { id: "Hukum {فَاكِهُونَ} (kaf dan ha berharakat, berjauhan) adalah…", ar: "حكم {فَاكِهُونَ}…" }, o: [{ id: "Idgham", ar: "إدغام" }, { id: "Ikhfa", ar: "إخفاء" }, { id: "Izhhar", ar: "إظهار" }, { id: "Iqlab", ar: "إقلاب" }], j: 2, b: { id: "Mutaba'idain kabir: izhhar.", ar: "المتباعدان الكبير: الإظهار." } }
    ],
    bs: [
      { t: { id: "Mutamatsilain shaghir hukum asalnya idgham.", ar: "المتماثلان الصغير حكمه الإدغام." }, j: true },
      { t: { id: "Waw layyinah berfathah sebelumnya pada {عَصَوا وَّكَانُوا} tetap diizhharkan.", ar: "تظهر الواو في {عَصَوا وَّكَانُوا}." }, j: false, b: { id: "Wajib idgham karena makhraj dan sifatnya sama.", ar: "وجب الإدغام." } },
      { t: { id: "Mutamatsilain muthlaq hukumnya izhhar.", ar: "المتماثلان المطلق حكمه الإظهار." }, j: true },
      { t: { id: "Hafsh membaca {مَكَّنِّي} dengan idgham nun pertama ke nun kedua.", ar: "قرأ حفص {مَكَّنِّي} بالإدغام." }, j: true },
      { t: { id: "Lam syamsiyyah diidghamkan pada empat belas huruf, termasuk dalam {الرَّحْمَةُ}.", ar: "اللام الشمسية تدغم في أربعة عشر حرفًا." }, j: true },
      { t: { id: "{مَنْ رَاقٍ} diidghamkan karena nun bertemu ra.", ar: "{مَنْ رَاقٍ} تدغم." }, j: false, b: { id: "Wajib saktah, dan saktah mencegah idgham.", ar: "السكت يمنع الإدغام." } },
      { t: { id: "{قَد تَّبَيَّنَ} termasuk idgham kamil mutajanisain.", ar: "قد تبين إدغام كامل." }, j: true },
      { t: { id: "Pada {فَرَّطتُمْ}, tha dibaca dengan qalqalah yang jelas.", ar: "تقلقل الطاء في {فَرَّطتُمْ}." }, j: false, b: { id: "Tha tampak tebal namun tanpa qalqalah (idgham naqish).", ar: "دون قلقلة." } },
      { t: { id: "Semua bagian mutaba'idain wajib diizhharkan, kecuali nun+qaf/kaf yang diikhfakan.", ar: "المتباعدان الإظهار إلا النون مع القاف والكاف." }, j: true },
      { t: { id: "Mutajanisain shaghir {وَفِي خَلْقِكُمْ وَمَا} diidghamkan.", ar: "{وَفِي خَلْقِكُمْ وَمَا} تدغم." }, j: false, b: { id: "Hukumnya izhhar.", ar: "حكمه الإظهار." } }
    ],
    jodoh: [
      { a: { id: "{ٱضْرِب بِّعَصَاكَ}", ar: "اضرب بعصاك" }, b: { id: "Mutamatsilain shaghir", ar: "متماثلان صغير" } },
      { a: { id: "{ٱلرَّحِيمِ مَالِكِ}", ar: "الرحيم مالك" }, b: { id: "Mutamatsilain kabir", ar: "متماثلان كبير" } },
      { a: { id: "{يَمْسَسْكَ}", ar: "يمسسك" }, b: { id: "Mutamatsilain muthlaq", ar: "متماثلان مطلق" } },
      { a: { id: "{قَد تَّبَيَّنَ}", ar: "قد تبين" }, b: { id: "Dal ke ta (idgham kamil)", ar: "الدال في التاء" } },
      { a: { id: "{أَحَطتُ}", ar: "أحطت" }, b: { id: "Idgham naqish", ar: "إدغام ناقص" } },
      { a: { id: "{إِذ ظَّلَمُوا}", ar: "إذ ظلموا" }, b: { id: "Dzal ke zha", ar: "الذال في الظاء" } },
      { a: { id: "{تُلِيَتْ عَلَيْهِمْ}", ar: "تليت عليهم" }, b: { id: "Mutaba'idain shaghir", ar: "متباعدان صغير" } },
      { a: { id: "{أَنكَالًا}", ar: "أنكالا" }, b: { id: "Ikhfa", ar: "إخفاء" } }
    ],
    isian: [
      { t: { id: "Dua huruf yang sama makhraj namun beda sifat disebut ______.", ar: "الحرفان المتفقان مخرجًا المختلفان صفة: ______." }, j: { id: "mutajanisain", ar: "المتجانسان" }, x: [{ id: "mutamatsilain", ar: "المتماثلان" }, { id: "mutaba'idain", ar: "المتباعدان" }, { id: "mutawaliyain", ar: "المتواليان" }] },
      { t: { id: "Pada {تَأْمَنَّا} dua wajahnya adalah isymam dan ______.", ar: "{تَأْمَنَّا} وجهاها الإشمام و______." }, j: { id: "raum", ar: "الروم" }, x: [{ id: "ikhfa", ar: "الإخفاء" }, { id: "qalb", ar: "القلب" }, { id: "saktah", ar: "السكت" }] },
      { t: { id: "Pada {مَالِيَهْ هَلَكَ}, ha saktah menurut Hafsh diizhharkan saat ______ (lebih kuat).", ar: "في {مَالِيَهْ هَلَكَ} الإظهار حال ______." }, j: { id: "saktah", ar: "السكت" }, x: [{ id: "waqaf", ar: "الوقف" }, { id: "ibtida'", ar: "الابتداء" }, { id: "imalah", ar: "الإمالة" }] },
      { t: { id: "Idgham mutamatsilain hanya bersama ghunnah pada mim dengan mim dan ______ dengan nun.", ar: "الغنة في الميم مع الميم و______ مع النون." }, j: { id: "nun", ar: "النون" }, x: [{ id: "lam", ar: "اللام" }, { id: "ra", ar: "الراء" }, { id: "waw", ar: "الواو" }] },
      { t: { id: "Dalam {يَهِدِّي} asal katanya adalah ______.", ar: "أصل {يَهِدِّي}: ______." }, j: { id: "yahtadi", ar: "يهتدي" }, x: [{ id: "yahdi", ar: "يهدي" }, { id: "yahdiyu", ar: "يهديو" }, { id: "yuhdi", ar: "يهدى" }] }
    ],
    pilah: { t: { id: "Pilah menurut hubungannya: MUTAMATSILAIN, MUTAJANISAIN, atau MUTABA'IDAIN.", ar: "صنِّف حسب العلاقة:" },
      kategori: [{ id: "Mutamatsilain", ar: "متماثلان" }, { id: "Mutajanisain", ar: "متجانسان" }, { id: "Mutaba'idain", ar: "متباعدان" }],
      item: [
        { t: { id: "{ٱضْرِب بِّعَصَاكَ}", ar: "اضرب بعصاك" }, k: 0 },
        { t: { id: "{وَقَالَت طَّائِفَةٌ}", ar: "وقالت طائفة" }, k: 1 },
        { t: { id: "{فَاكِهُونَ}", ar: "فاكهون" }, k: 2 },
        { t: { id: "{يَلْهَث ذَّٰلِكَ}", ar: "يلهث ذلك" }, k: 1 },
        { t: { id: "{مَنَاسِكَكُمْ}", ar: "مناسككم" }, k: 0 },
        { t: { id: "{أَنفُسِكُمْ}", ar: "أنفسكم" }, k: 2 },
        { t: { id: "{وَجَدتُّم}", ar: "وجدتم" }, k: 1 }
      ] }
  },
  tugasBuatan: true,
  tugas: [
    { t: { ar: "عرّف المتماثلين وبيّن أقسامهما وحكم كل قسم مع التمثيل.", id: "Definisikan mutamatsilain, sebutkan pembagian dan hukum tiap bagian beserta contohnya." },
      j: { ar: "المتماثلان: الحرفان اللذان اتحدا اسمًا ورسمًا ومخرجًا وصفة. وهما صغير: يسكن الأول ويتحرك الثاني وحكمه الإدغام مثل {ٱضْرِب بِّعَصَاكَ} إلا مسألتين: واو أو ياء المد مثل {قَالُوا وَهُمْ} وهاء السكت مثل {مَالِيَهْ هَلَكَ}. وكبير: يتحرك الحرفان مثل {ٱلرَّحِيمِ مَالِكِ} وحكمه الإظهار لكل القراء عدا السوسي، واستثنى حفص {تَأْمَنَّا} و{مَكَّنِّي}. ومطلق: يتحرك الأول ويسكن الثاني مثل {يَمْسَسْكَ} وحكمه الإظهار.",
         id: "**Mutamatsilain:** dua huruf yang sama nama, rasm, makhraj, sifat. **Shaghir** (pertama sukun, kedua berharakat): idgham, mis. {ٱضْرِب بِّعَصَاكَ}, kecuali waw/ya madd ({قَالُوا وَهُمْ}) dan ha saktah ({مَالِيَهْ هَلَكَ}). **Kabir** (keduanya berharakat): izhhar, mis. {ٱلرَّحِيمِ مَالِكِ} (As-Susi idgham); Hafsh mengecualikan {تَأْمَنَّا} dan {مَكَّنِّي}. **Muthlaq** (pertama berharakat, kedua sukun): izhhar, mis. {يَمْسَسْكَ}." } },
    { t: { ar: "اذكر الوجهين في {تَأْمَنَّا} وبيّن الفرق بين الروم وصلًا والروم وقفًا.", id: "Sebutkan dua wajah {تَأْمَنَّا} dan bedakan raum saat washl dan saat waqaf." },
      j: { ar: "في {تَأْمَنَّا} وجهان: الإدغام مع الإشمام (ضم الشفتين مقارنًا للنطق بالنون الأولى يراه المبصر دون الأعمى)، أو الروم (الإتيان بثلثي الحركة بصوت خفي يسمعه القريب دون البعيد). والروم في الوصل مقدار الحركة الباقي أكثر من الذاهب، أما الروم وقفًا فهو الإتيان بثلثي الحركة كالوقف على {نَسْتَعِينُ} و{الْفَتْحُ}.",
         id: "Dua wajah: (1) idgham disertai **isymam** — memonyongkan bibir bersamaan nun pertama (terlihat oleh yang melihat, tidak oleh tunanetra); (2) **raum** — dua pertiga harakat dengan suara lirih yang terdengar oleh yang dekat saja. Raum saat washl: harakat yang tersisa lebih banyak daripada yang hilang; raum saat waqaf: membawa dua pertiga harakat pada akhir kata seperti {نَسْتَعِينُ} dan {الْفَتْحُ}." } },
    { t: { ar: "عدّد المسائل المتفق على إدغامها وقلبها وإخفائها في المتقاربين الصغير مع الأمثلة.", id: "Sebutkan masalah mutaqaribain shaghir yang disepakati idgham, qalb, dan ikhfa beserta contoh." },
      j: { ar: "المتفق على إدغامه: النون الساكنة في اللام والراء والياء والواو مثل {مَن يَعْمَلْ} و{مِن رَّبِّهِمْ}، واللام الشمسية مثل {الصَّمَدُ}، ولام قل وبل قبل الراء مثل {قُل رَّبِّي}. والمتفق على قلبه: النون الساكنة قبل الباء مثل {مِنۢ بَعْدِ}. والمتفق على إخفائه: النون الساكنة قبل أحرف الإخفاء مثل {كُنتُمْ}. ويستثنى {يس وَالْقُرْآنِ} و{ن وَالْقَلَمِ} بالإظهار، و{مَنْ رَاقٍ} و{بَلْ رَانَ} لوجوب السكت.",
         id: "**Idgham:** nun sukun ke lam/ra/ya/waw ({مَن يَعْمَلْ}), lam syamsiyyah ({الصَّمَدُ}), lam *qul/bal* + ra ({قُل رَّبِّي}). **Qalb:** nun sukun + ba ({مِنۢ بَعْدِ}). **Ikhfa:** nun sukun sebelum huruf ikhfa ({كُنتُمْ}). Pengecualian: {يس وَٱلْقُرْآنِ} dan {ن وَٱلْقَلَمِ} (izhhar), serta {مَنْ رَاقٍ} dan {بَلْ رَانَ} (wajib saktah)." } },
    { t: { ar: "اذكر المواضع الثمانية المستثناة من إظهار المتجانسين الصغير.", id: "Sebutkan delapan tempat yang dikecualikan dari izhhar pada mutajanisain shaghir." },
      j: { ar: "ستة مواضع إدغامها كامل: الدال في التاء {قَد تَّبَيَّنَ} و{وَجَدتُّم} و{وَمَهَّدتُّ}، والتاء في الدال {أَثْقَلَت دَّعَوَا} و{أُجِيبَت دَّعْوَتُكُمَا}، والتاء في الطاء {وَقَالَت طَّائِفَةٌ} و{هَمَّت طَّائِفَتَانِ}، والذال في الظاء {إِذ ظَّلَمُوا}، والثاء في الذال {يَلْهَث ذَّٰلِكَ}، والباء في الميم {ٱرْكَب مَّعَنَا}. والسابع إدغام ناقص: الطاء في التاء {أَحَطتُ} و{بَسَطتَ} و{فَرَّطتُمْ}. والثامن مختلف فيه: الميم الساكنة قبل الباء {تَرْمِيهِم بِحِجَارَةٍ} بين الإظهار والإخفاء.",
         id: "Enam idgham kamil: dal→ta, ta→dal, ta→tha, dzal→zha, tsa→dzal, ba→mim (contoh di tabel); ketujuh idgham naqish: tha→ta ({أَحَطتُ}, {بَسَطتَ}, {فَرَّطتُمْ}); kedelapan diperselisihkan: mim sukun sebelum ba ({تَرْمِيهِم بِحِجَارَةٍ}) antara izhhar dan ikhfa." } },
    { t: { ar: "ما حكم المتباعدين؟ وما المستثنى من المتباعدين الصغير؟", id: "Apa hukum mutaba'idain? Apa pengecualian pada yang shaghir?" },
      j: { ar: "حكم أقسام المتباعدين الثلاثة (الصغير والكبير والمطلق) الإظهار لجميع القراء، ولا إدغام لتباعد المخرج واختلاف الصفة. ويستثنى من الصغير مسألتان حكمهما الإخفاء: النون مع القاف {ٱنقَلَبُوا} والنون مع الكاف {أَنكَالًا}.",
         id: "Ketiga bagian (shaghir, kabir, muthlaq) wajib **izhhar** bagi semua qari karena makhraj berjauhan dan sifat berbeda. Dua pengecualian pada shaghir hukumnya **ikhfa**: nun+qaf ({ٱنقَلَبُوا}) dan nun+kaf ({أَنكَالًا})." } }
  ]
});
