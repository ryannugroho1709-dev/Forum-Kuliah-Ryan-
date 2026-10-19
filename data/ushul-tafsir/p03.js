/* Ushul Tafsir — Pertemuan 3: Tafsir Al-Qur'an dengan Sunnah */
Kuliah.pertemuan("ushul-tafsir", {
  no: 3, motif: "lentera", tema: 2, durasi: 24,
  telegram: "https://t.me/Shifaaulqloub7/126",
  bab: { id: "Sumber tafsir", ar: "مصادر التفسير" },
  judul: { id: "Tafsir Al-Qur'an dengan Sunnah", ar: "تفسير القرآن بالسنة" },
  ringkas: {
    id: "Sumber kedua tafsir: definisi, dua bagiannya (tafsir nabawi langsung & tafsir ijtihadi dengan sunnah), seberapa banyak Nabi ﷺ menafsirkan, enam fungsi sunnah terhadap Al-Qur'an, lima bentuk pemanfaatan sunnah oleh mufassir, kehujjahan, dan tokoh-tokohnya.",
    ar: "المصدر الثاني: تعريف تفسير القرآن بالسنة، وقسماه: التفسير النبوي والتفسير الاجتهادي، ومقدار التفسير النبوي، وأحوال السنة مع القرآن، وصور استفادة المفسر من السنة، وحجيته، وأبرز المعتنين به."
  },
  tujuan: [
    { id: "Membedakan tafsir nabawi (langsung) dari tafsir dengan sunnah yang tidak langsung (ijtihadi).", ar: "التفريق بين التفسير النبوي المباشر والتفسير بالسنة غير المباشر." },
    { id: "Menyebut enam fungsi sunnah terhadap Al-Qur'an beserta contohnya.", ar: "ذكر أحوال السنة مع القرآن الستة مع الأمثلة." },
    { id: "Menjelaskan lima bentuk pemanfaatan sunnah oleh mufassir.", ar: "بيان صور استفادة المفسر من السنة." },
    { id: "Menjelaskan kehujjahan tafsir dengan sunnah.", ar: "بيان حجية تفسير القرآن بالسنة." }
  ],
  isi: [
    { t: "pembuka", id: "Allah mengutus Rasul-Nya ﷺ, menurunkan Al-Kitab bersamanya, dan memerintahkannya menjelaskan Kitab itu kepada manusia. Sunnah secara keseluruhan — **ucapan, perbuatan, maupun persetujuan (taqrir)** — menjelaskan dan menafsirkan Al-Qur'an, serta menjadi rujukan dalam memahaminya.", ar: "إن الله أرسل رسوله ﷺ وأنزل معه الكتاب وأمره ببيانه للناس، والسنة بمجملها سواء كانت قولية أو فعلية أو تقريرية فإنها موضحة لعامة القرآن مفسرة له، وهي مرجع في فهمه وبيانه." },
    { t: "ayat", ar: "وَأَنزَلْنَا إِلَيْكَ الذِّكْرَ لِتُبَيِّنَ لِلنَّاسِ مَا نُزِّلَ إِلَيْهِمْ وَلَعَلَّهُمْ يَتَفَكَّرُونَ", id: "Dan Kami turunkan Adz-Dzikr kepadamu agar engkau menjelaskan kepada manusia apa yang telah diturunkan kepada mereka, dan agar mereka berpikir.", src: "QS. An-Nahl: 44" },

    { t: "judul", id: "Definisi & Dua Bagian Tafsir dengan Sunnah", ar: "التعريف والأقسام" },
    { t: "definisi", istilah: { id: "**Menjelaskan makna-makna Al-Qur'an dengan Sunnah Nabi.** Artinya: sunnah datang menerangkan makna yang belum jelas dalam Al-Qur'an.", ar: "بيان معاني القرآن الكريم بالسنة النبوية المطهرة؛ أي: أن تأتي السنة فتبين وتفسر معنى غير بيِّن ولا واضح في القرآن." } },
    { t: "banding",
      kiri: { judul: { id: "Tafsir nabawi (tafsir langsung dengan sunnah)", ar: "التفسير النبوي (المباشر)" }, ikon: "lamp", warna: "green", poin: [
        { id: "Nabi ﷺ menyebut atau mengisyaratkan suatu ayat lalu menjelaskan maknanya, atau menyetujui pemahaman sahabatnya.", ar: "أن يعمد النبي ﷺ إلى آية يذكرها أو يشير إليها ثم يبين معناها، أو يُقرّ أحد أصحابه على فهمه لها." },
        { id: "Nabi ﷺ **sengaja** menjelaskan ayat; mufassir hanya meriwayatkan.", ar: "يقصد النبي ﷺ بيان معنى الآية قصدًا مباشرًا، وليس للمفسر فيه سوى النقل والرواية." } ] },
      kanan: { judul: { id: "Tafsir ijtihadi (tidak langsung)", ar: "التفسير الاجتهادي (غير المباشر)" }, ikon: "bulb", warna: "amber", poin: [
        { id: "Mufassir menafsirkan ayat dengan sabda Nabi ﷺ yang **tidak diucapkan dalam konteks tafsir**.", ar: "أن يفسر المفسر الآية بكلام للنبي ﷺ لم يرد منه في سياق التفسير." },
        { id: "Sampainya hadits lewat riwayat, tetapi **mengaitkannya dengan ayat adalah ijtihad**.", ar: "الوصول إلى الحديث طريقه النقل، لكن حمله على الآية إنما يكون باجتهاد." } ] } },

    { t: "sub", id: "Tafsir nabawi bisa berupa ucapan, perbuatan, dan persetujuan", ar: "التفسير النبوي: قول وفعل وتقرير" },
    { t: "poin", item: [
      { ikon: "chat", judul: { id: "Ucapan (qauli)", ar: "بالقول" }, id: "\"*Ummul Qur'an* adalah **as-sab' al-matsani** dan Al-Qur'an yang agung.\" — menafsirkan {سَبْعًا مِّنَ الْمَثَانِي} (Al-Hijr: 87) dengan Al-Fatihah. (HR. Al-Bukhari)", ar: "«أم القرآن هي السبع المثاني والقرآن العظيم» ففسر {سَبْعًا مِّنَ الْمَثَانِي} بالفاتحة." },
      { ikon: "mosque", judul: { id: "Perbuatan (fi'li)", ar: "بالفعل" }, id: "Dalam hadits Jabir tentang haji: beliau menuju Maqam Ibrahim sambil membaca {وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى}, lalu menjadikan maqam di antara beliau dan Ka'bah dan shalat dua rakaat. (HR. Muslim)", ar: "ثم نفذ إلى مقام إبراهيم فقرأ {وَاتَّخِذُوا مِن مَّقَامِ إِبْرَاهِيمَ مُصَلًّى} فجعل المقام بينه وبين البيت فصلى ركعتين." },
      { ikon: "checkCircle", judul: { id: "Persetujuan (taqriri)", ar: "بالتقرير" }, id: "'Amr bin al-'Ash junub di malam sangat dingin saat perang Dzatus Salasil; ia bertayamum, berdalil {وَلَا تَقْتُلُوا أَنفُسَكُمْ}, lalu menjadi imam. Nabi ﷺ **tertawa dan tidak berkata apa-apa** — menyetujui pemahamannya. (HR. Ahmad & Abu Dawud)", ar: "قال عمرو: ذكرت قول الله تعالى {وَلَا تَقْتُلُوا أَنفُسَكُمْ} فتيممت ثم صليت، فضحك النبي ﷺ ولم يقل شيئًا." } ] },
    { t: "atsar", ar: "تلا رسول الله ﷺ يومًا {أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا} فقال شاب من أهل اليمن: بل عليها أقفالها حتى يكون الله عز وجل يفتحها أو يفرجها. فما زال الشاب في نفس عمر حتى وَلِيَ فاستعان به.", id: "Rasulullah ﷺ membaca *\"Tidakkah mereka merenungkan Al-Qur'an, ataukah hati mereka terkunci?\"* Seorang pemuda Yaman berkata, \"Bahkan hati itu terkunci sampai Allah yang membukanya.\" (Beliau mendiamkannya.) Pemuda itu terus terkesan di hati 'Umar, hingga ketika menjadi khalifah ia meminta bantuannya.", src: "Riwayat Ath-Thabari, dari 'Urwah" },

    { t: "sub", id: "Seberapa banyak Nabi ﷺ menafsirkan Al-Qur'an secara langsung?", ar: "ما مقدار التفسير النبوي؟" },
    { t: "p", id: "Penulis menjawab: **sangat sedikit**, dan riwayat-riwayat marfu' menjadi saksinya. Jika ada yang berkata, \"Sebagian ulama menyatakan tafsir sahabat berstatus marfu' (berasal dari Nabi ﷺ)\", jawabannya dari beberapa sisi:", ar: "إن القدر الوارد عن النبي ﷺ من التفسير النبوي المباشر قليل جدًا، والآثار المرفوعة إليه شاهدة بهذا. وإن قال قائل: إن بعض العلماء حكى أن تفسير الصحابي مرفوع، فالجواب من وجوه:" },
    { t: "langkah", item: [
      { id: "Telah tetap bahwa para sahabat **berijtihad** dalam menjelaskan makna Al-Qur'an tanpa menisbatkannya kepada Nabi ﷺ.", ar: "أنه قد ثبت اجتهاد الصحابة في بيان معاني القرآن، ولم ينسبوها إلى النبي ﷺ." },
      { id: "Kebiasaan mereka: jika memiliki penjelasan dari Nabi ﷺ, mereka **menisbatkannya kepada beliau**.", ar: "أن العادة الغالبة عليهم إذا كان معهم بيان نبوي أن ينسبوه إليه ﷺ." },
      { id: "(Tambahan pensyarah) Mereka **banyak berbeda pendapat** dalam tafsir, dan tak seorang pun berhujjah bahwa pendapatnya adalah tafsir Nabi ﷺ — padahal mereka tahu tak boleh menyelisihi beliau.", ar: "كثرة اختلافهم في التفسير، ولم يحتج أحد منهم على قوله بأنه تفسير النبي ﷺ مع علمهم أنه لا يسعهم مخالفته." } ] },
    { t: "catatan", gaya: "faidah", id: "Nabi ﷺ hanya menjelaskan **apa yang mereka butuhkan**. Beliau tidak menafsirkan kata demi kata — tak terbayang beliau menjelaskan makna \"gunung\", \"laut\", \"langit\", \"bumi\" — karena mereka adalah ahli fasih, balaghah, dan bayan.", ar: "إنما بيَّن لهم ما يحتاجون إليه، ولم يتناول القرآن كلمة كلمة؛ فلا يتصور أن يفسر لهم معنى الجبال والبحار والسماء والأرض؛ فهم أهل الفصاحة والبلاغة والبيان." },

    { t: "judul", id: "Enam Fungsi Sunnah terhadap Al-Qur'an", ar: "أحوال السنة مع القرآن" },
    { t: "tabel", kolom: [{ id: "Fungsi", ar: "الحال" }, { id: "Contoh", ar: "المثال" }], baris: [
      [{ id: "1. Mengkhususkan yang umum", ar: "تخصيص العام" }, { id: "{فَاعْتَزِلُوا النِّسَاءَ فِي الْمَحِيضِ} — Nabi ﷺ: \"Lakukan apa saja kecuali jima'.\" Menjauhi istri yang haid hanya dalam jima'. (HR. Muslim, dari Anas)", ar: "«اصنعوا كل شيء إلا النكاح»" }],
      [{ id: "2. Menjelaskan yang global (mujmal)", ar: "بيان المجمل" }, { id: "{سَبْعًا مِّنَ الْمَثَانِي} = Ummul Qur'an (Al-Fatihah). (HR. Al-Bukhari)", ar: "«أم القرآن هي السبع المثاني»" }],
      [{ id: "3. Menerangkan yang musykil", ar: "إيضاح المشكل" }, { id: "Orang Najran bertanya: kalian membaca {يَا أُخْتَ هَارُونَ}, padahal Musa jauh sebelum Isa. Nabi ﷺ: \"Mereka biasa memberi nama dengan nama nabi-nabi dan orang saleh sebelum mereka.\" (HR. Muslim, dari Al-Mughirah)", ar: "«إنهم كانوا يسمون بأنبيائهم والصالحين قبلهم»" }],
      [{ id: "4. Menyebut yang mubham", ar: "تبيين المبهم" }, { id: "{فَوَجَدَا عَبْدًا مِّنْ عِبَادِنَا} — Nabi ﷺ: \"…lalu keduanya menemukan **Khadhir**.\" (HR. Al-Bukhari & Muslim)", ar: "«فوجدا خَضِرًا»" }],
      [{ id: "5. Membatasi yang mutlak", ar: "تقييد المطلق" }, { id: "{فَاقْطَعُوا أَيْدِيَهُمَا} — Nabi ﷺ memotong tangan pencuri **dari pergelangan** (*al-kuu'*), bukan seluruh tangan.", ar: "قطع يد السارق من الكوع" }],
      [{ id: "6. Menjelaskan kata asing (gharib)", ar: "بيان الغريب" }, { id: "{ذَٰلِكَ أَدْنَىٰ أَلَّا تَعُولُوا} — Nabi ﷺ: \"agar kalian tidak **berbuat zalim**.\" (Riwayat Ibnu Hibban & Ibnul Mundzir, dari 'Aisyah)", ar: "ألا تعولوا: ألا تجوروا" }] ] },
    { t: "cek", q: { id: "Penjelasan Nabi ﷺ bahwa \"hamba\" dalam kisah Musa adalah Khadhir termasuk fungsi…", ar: "بيان النبي ﷺ أن العبد في قصة موسى هو الخضر من…" }, o: [{ id: "Bayan al-gharib", ar: "بيان الغريب" }, { id: "Tabyin al-mubham", ar: "تبيين المبهم" }, { id: "Taqyid al-muthlaq", ar: "تقييد المطلق" }], j: 1, b: { id: "Kata \"hamba\" disebut tanpa nama (mubham), lalu sunnah menyebut namanya.", ar: "تبيين المبهم." } },

    { t: "judul", id: "Lima Bentuk Pemanfaatan Sunnah oleh Mufassir", ar: "صور استفادة المفسر من السنة" },
    { t: "langkah", item: [
      { judul: { id: "Menyebut hadits yang sesuai dengan makna ayat", ar: "حديث مطابق لمعنى الآية" }, id: "Ibnu Katsir pada {وَجِيءَ يَوْمَئِذٍ بِجَهَنَّمَ} membawakan hadits Muslim: \"Jahannam didatangkan pada hari itu dengan **70.000 tali kekang**, setiap tali ditarik oleh 70.000 malaikat.\"", ar: "«يؤتى بجهنم يومئذ لها سبعون ألف زمام، مع كل زمام سبعون ألف ملك يجرونها»." },
      { judul: { id: "Menyebut hadits yang memuat kata Qur'ani yang sama", ar: "حديث وردت فيه اللفظة القرآنية" }, id: "Untuk {عِزِينَ} (Al-Ma'arij: 37), Ibnu Katsir membawakan sabda Nabi ﷺ saat melihat sahabat berkelompok-kelompok: \"Mengapa aku melihat kalian *'izin*?\" — yakni **berkelompok-kelompok**.", ar: "«ما لي أراكم عزين» أي: حِلَقًا وجماعات." },
      { judul: { id: "Bersandar pada sunnah untuk tarjih", ar: "الاعتماد على السنة في الترجيح" }, id: "{بِأَيْدِي سَفَرَةٍ كِرَامٍ بَرَرَةٍ}: ada yang menafsirkan para qari dari sahabat, ada yang menafsirkan malaikat. Ibnul 'Arabi menguatkan **malaikat** dengan hadits \"Orang yang membaca Al-Qur'an dan mahir **bersama** *as-safarah al-kiram al-bararah*\" — kata *bersama* menunjukkan mereka berbeda dari si pembaca.", ar: "«مثل الذي يقرأ القرآن وهو حافظ له مع السفرة الكرام البررة»؛ فقوله «مع» يدل على أنه غيرهم." },
      { judul: { id: "Menafsirkan ayat dengan *ta'awwul* (penerapan) Nabi ﷺ", ar: "تفسير الآية بتأوُّل النبي ﷺ" }, id: "Setelah turun Surah An-Nashr, beliau memperbanyak dalam ruku' dan sujudnya: *Subhanakallahumma rabbana wa bihamdika, allahummaghfir li* — 'Aisyah berkata: \"**beliau mentakwil (mengamalkan) Al-Qur'an**.\" Juga sabda beliau di Shafa: \"Aku mulai dengan apa yang Allah mulai.\"", ar: "قالت عائشة: «يتأوَّل القرآن» أي: يطبق ما جاء فيه. وقوله ﷺ: «أبدأ بما بدأ الله به»." },
      { judul: { id: "Ayat mengisyaratkan tema yang dijelaskan Nabi ﷺ", ar: "إشارة الآية إلى موضوع بيَّنه الرسول ﷺ" }, id: "Pada {كَلَّا لَا تُطِعْهُ وَاسْجُدْ وَاقْتَرِبْ}, Ibnu Katsir membawakan hadits: \"Saat paling dekat seorang hamba dengan Rabbnya adalah ketika ia sujud, maka perbanyaklah doa.\" Ini menguatkan makna ayat.", ar: "«أقرب ما يكون العبد من ربه وهو ساجد فأكثروا الدعاء» وفيه تقوية للمعنى." } ] },

    { t: "judul", id: "Kehujjahan Tafsir Al-Qur'an dengan Sunnah", ar: "حجية تفسير القرآن بالسنة" },
    { t: "poin", item: [
      { ikon: "shield", judul: { id: "Tafsir nabawi langsung", ar: "التفسير النبوي المباشر" }, id: "**Hujjah tanpa perselisihan.** Mufassir tidak boleh melampauinya, dan kepadanyalah kembali jika ada pendapat yang menyelisihinya.", ar: "حجة بلا خلاف، ولا يجوز لمفسر أن يتجاوزه بحال، وإليه المصير إذا جاء قول يخالفه." },
      { ikon: "checkCircle", judul: { id: "Ijtihadi yang hampir disepakati", ar: "ما يكاد يقع عليه الاتفاق" }, id: "Jika para ulama sepakat bahwa hadits itu menafsirkan ayat → **hujjah tanpa perselisihan**.", ar: "فإذا اتفق العلماء على أن الحديث يفسر الآية فهذا حجة بلا خلاف." },
      { ikon: "scale", judul: { id: "Ijtihadi yang samar", ar: "ما فيه خفاء" }, id: "Jika pendalilan hadits atas makna ayat samar dan diperselisihkan → **tidak menjadi hujjah secara mutlak**, tetapi menjadi **qarinah (indikator) untuk tarjih**.", ar: "ما يكون الاستدلال بالحديث فيه خفاء فيقع فيه منازعة؛ فهذا لا يكون حجة مطلقًا، وإنما يكون الحديث قرينة في الترجيح." } ] },

    { t: "judul", id: "Mufassir yang Banyak Memakai Sunnah", ar: "أبرز المعتنين بتفسير القرآن بالسنة" },
    { t: "tokoh", item: [
      { nama: { id: "Al-Hasan al-Bashri", ar: "الحسن البصري" }, wafat: 110, karya: { id: "Sering berkata: \"Sampai kepada kami bahwa Nabi ﷺ…\"", ar: "بلغنا أن النبي ﷺ" } },
      { nama: { id: "Qatadah as-Sadusi", ar: "قتادة السدوسي" }, wafat: 117, karya: { id: "\"Disebutkan kepada kami bahwa Nabi ﷺ…\"", ar: "ذُكر لنا أن النبي ﷺ" } },
      { nama: { id: "'Abdurrazzaq ash-Shan'ani", ar: "عبد الرزاق الصنعاني" }, wafat: 211, karya: { id: "Tafsir 'Abdurrazzaq", ar: "تفسير عبد الرزاق" } },
      { nama: { id: "Ibnu Jarir ath-Thabari", ar: "ابن جرير الطبري" }, wafat: 310, karya: { id: "Jami' al-Bayan", ar: "جامع البيان" } },
      { nama: { id: "Ibnu Abi Hatim", ar: "ابن أبي حاتم" }, wafat: 327, karya: { id: "Tafsir Ibnu Abi Hatim", ar: "تفسير ابن أبي حاتم" } },
      { nama: { id: "Al-Baghawi", ar: "البغوي" }, wafat: 516, karya: { id: "Ma'alim at-Tanzil", ar: "معالم التنزيل" } },
      { nama: { id: "Ibnu Katsir", ar: "ابن كثير" }, wafat: 774, karya: { id: "Tafsir al-Qur'an al-'Azhim — paling banyak memuat sunnah", ar: "تفسير القرآن العظيم" } },
      { nama: { id: "Jalaluddin as-Suyuthi", ar: "جلال الدين السيوطي" }, wafat: 911, karya: { id: "Ad-Durr al-Mantsur fit-Tafsir bil-Ma'tsur", ar: "الدر المنثور" } } ] },
    { t: "tanya", q: { id: "Apakah setiap hadits yang disebut mufassir ketika mengomentari ayat termasuk tafsir?", ar: "هل كل استفادة من السنة يذكرها المفسر تعليقًا على الآية تكون من التفسير؟" },
      a: { id: "**Tidak.** Hadits yang dibawakan mufassir bisa untuk menjelaskan makna (itulah tafsir), tetapi bisa juga untuk **hukum-hukum** ayat, **istinbath**, **istisyhad**, dan tujuan lainnya.", ar: "ما يذكره المفسرون قد يكون في بيان معنى الآية وهو التفسير، وقد يكون في أحكام الآية، أو في الاستنباط منها، أو في الاستشهاد بها، وغير ذلك." } },
    { t: "ringkasan", item: [
      { id: "Tafsir dengan sunnah = menjelaskan makna Al-Qur'an dengan Sunnah Nabi ﷺ.", ar: "بيان معاني القرآن بالسنة." },
      { id: "Dua bagian: tafsir nabawi (langsung) dan tafsir ijtihadi (tidak langsung).", ar: "قسمان: نبوي مباشر، واجتهادي غير مباشر." },
      { id: "Tafsir nabawi langsung sangat sedikit — beliau menjelaskan yang dibutuhkan saja.", ar: "التفسير النبوي المباشر قليل جدًا." },
      { id: "Fungsi sunnah: takhshish, bayan mujmal, idhah musykil, tabyin mubham, taqyid, bayan gharib.", ar: "أحوال السنة: تخصيص، وبيان مجمل، وإيضاح مشكل، وتبيين مبهم، وتقييد، وبيان غريب." },
      { id: "Tafsir nabawi = hujjah; tafsir ijtihadi: hujjah bila disepakati, qarinah tarjih bila samar.", ar: "النبوي حجة، والاجتهادي حجة إن اتُّفق عليه، وقرينة ترجيح إن كان فيه خفاء." } ] }
  ],
  istilah: [
    { ar: "تفسير القرآن بالسنة", latin: "tafsir al-Qur'an bis-sunnah", id: "Tafsir dengan sunnah", def: { id: "Menjelaskan makna Al-Qur'an dengan Sunnah Nabi ﷺ.", ar: "بيان معاني القرآن الكريم بالسنة النبوية." } },
    { ar: "التفسير النبوي", latin: "at-tafsir an-nabawi", id: "Tafsir nabawi (langsung)", def: { id: "Nabi ﷺ menyebut ayat lalu menjelaskannya, atau menyetujui pemahaman sahabat.", ar: "بيان الرسول ﷺ لمعاني القرآن الكريم." } },
    { ar: "التفسير الاجتهادي بالسنة", latin: "at-tafsir al-ijtihadi", id: "Tafsir ijtihadi dengan sunnah", def: { id: "Mufassir menafsirkan ayat dengan hadits yang tidak diucapkan dalam konteks tafsir.", ar: "أن يفسر المفسر الآية بكلام للنبي ﷺ لم يرد منه في سياق التفسير." } },
    { ar: "التقرير", latin: "at-taqrir", id: "Persetujuan Nabi ﷺ", def: { id: "Nabi ﷺ mendiamkan/menyetujui ucapan atau perbuatan sahabat.", ar: "إقرار النبي ﷺ." } },
    { ar: "المجمل", latin: "al-mujmal", id: "Global (belum rinci)", def: { id: "Lafaz yang maknanya belum jelas rinciannya.", ar: "ما لم تتضح دلالته." } },
    { ar: "المشكل", latin: "al-musykil", id: "Musykil (menimbulkan kerancuan)", def: { id: "Ayat yang tampak menimbulkan kebingungan, seperti {يَا أُخْتَ هَارُونَ}.", ar: "ما يقع فيه إشكال." } },
    { ar: "المبهم", latin: "al-mubham", id: "Tidak disebut namanya", def: { id: "Orang/tempat yang tidak disebut secara tertentu, seperti \"hamba\" dalam kisah Musa.", ar: "ما لم يُعيَّن." } },
    { ar: "الغريب", latin: "al-gharib", id: "Kata asing", def: { id: "Kata yang maknanya tidak dipahami umum, seperti *ta'ulu*.", ar: "اللفظ الذي يخفى معناه." } },
    { ar: "يتأوَّل القرآن", latin: "yata'awwalu al-Qur'an", id: "Mengamalkan/menerapkan Al-Qur'an", def: { id: "Ucapan 'Aisyah tentang Nabi ﷺ yang memperbanyak tasbih & istighfar setelah An-Nashr.", ar: "أي يطبق ما جاء في القرآن." } },
    { ar: "القرينة", latin: "al-qarinah", id: "Indikator penguat", def: { id: "Petunjuk yang membantu tarjih, tidak berdiri sebagai hujjah mutlak.", ar: "ما يُستعان به في الترجيح." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tafsir nabawi menurut penulis adalah…", ar: "التفسير النبوي عند المصنف…" }, o: [{ id: "Mufassir mengaitkan hadits apa saja dengan ayat", ar: "ربط المفسر أي حديث بالآية" }, { id: "Nabi ﷺ menyebut/mengisyaratkan ayat lalu menjelaskannya, atau menyetujui pemahaman sahabat", ar: "أن يعمد النبي ﷺ إلى آية فيبين معناها أو يقر صحابيًّا على فهمها" }, { id: "Tafsir sahabat secara umum", ar: "تفسير الصحابة عمومًا" }, { id: "Hadits-hadits tentang keutamaan surah", ar: "أحاديث فضائل السور" }], j: 1 },
      { q: { id: "Pada tafsir ijtihadi dengan sunnah, yang merupakan ijtihad adalah…", ar: "في التفسير الاجتهادي بالسنة، الاجتهاد يكون في…" }, o: [{ id: "Sampainya hadits kepada mufassir", ar: "وصول الحديث" }, { id: "Mengaitkan hadits dengan ayat", ar: "حمل الحديث على الآية" }, { id: "Lafaz haditsnya", ar: "لفظ الحديث" }, { id: "Sanad haditsnya", ar: "سند الحديث" }], j: 1 },
      { q: { id: "Kisah 'Amr bin al-'Ash bertayamum karena dingin adalah contoh tafsir nabawi dengan…", ar: "قصة تيمم عمرو بن العاص مثال على التفسير النبوي بـ…" }, o: [{ id: "Ucapan", ar: "القول" }, { id: "Perbuatan", ar: "الفعل" }, { id: "Persetujuan (taqrir)", ar: "التقرير" }, { id: "Isyarat", ar: "الإشارة" }], j: 2 },
      { q: { id: "Berapa banyak tafsir langsung dari Nabi ﷺ menurut penulis?", ar: "ما مقدار التفسير النبوي المباشر عند المصنف؟" }, o: [{ id: "Seluruh Al-Qur'an", ar: "القرآن كله" }, { id: "Separuh Al-Qur'an", ar: "نصف القرآن" }, { id: "Sangat sedikit", ar: "قليل جدًا" }, { id: "Tidak ada sama sekali", ar: "لا شيء" }], j: 2 },
      { q: { id: "Hadits \"Lakukan apa saja kecuali jima'\" terhadap {فَاعْتَزِلُوا النِّسَاءَ فِي الْمَحِيضِ} berfungsi sebagai…", ar: "حديث «اصنعوا كل شيء إلا النكاح» مع آية المحيض من…" }, o: [{ id: "Takhshish al-'amm", ar: "تخصيص العام" }, { id: "Bayan al-gharib", ar: "بيان الغريب" }, { id: "Tabyin al-mubham", ar: "تبيين المبهم" }, { id: "Idhah al-musykil", ar: "إيضاح المشكل" }], j: 0 },
      { q: { id: "Jawaban Nabi ﷺ tentang {يَا أُخْتَ هَارُونَ} termasuk…", ar: "جواب النبي ﷺ عن {يَا أُخْتَ هَارُونَ} من…" }, o: [{ id: "Taqyid al-muthlaq", ar: "تقييد المطلق" }, { id: "Idhah al-musykil", ar: "إيضاح المشكل" }, { id: "Bayan al-mujmal", ar: "بيان المجمل" }, { id: "Takhshish al-'amm", ar: "تخصيص العام" }], j: 1 },
      { q: { id: "Makna {أَلَّا تَعُولُوا} menurut riwayat dari Nabi ﷺ adalah…", ar: "معنى {أَلَّا تَعُولُوا} في الرواية…" }, o: [{ id: "Agar tidak banyak tanggungan", ar: "ألا تكثر عيالكم" }, { id: "Agar tidak berbuat zalim", ar: "ألا تجوروا" }, { id: "Agar tidak miskin", ar: "ألا تفتقروا" }, { id: "Agar tidak lupa", ar: "ألا تنسوا" }], j: 1 },
      { q: { id: "Ibnul 'Arabi menguatkan bahwa *as-safarah* dalam Surah 'Abasa adalah malaikat dengan berdalil…", ar: "رجح ابن العربي أن السفرة هم الملائكة مستدلًّا بـ…" }, o: [{ id: "Ijma' sahabat", ar: "إجماع الصحابة" }, { id: "Kata \"bersama\" dalam hadits orang yang mahir membaca Al-Qur'an", ar: "لفظ «مع» في حديث الماهر بالقرآن" }, { id: "Syair Arab", ar: "شعر العرب" }, { id: "Israiliyyat", ar: "الإسرائيليات" }], j: 1 },
      { q: { id: "Status tafsir ijtihadi dengan sunnah yang pendalilannya samar dan diperselisihkan adalah…", ar: "حكم التفسير الاجتهادي بالسنة إذا كان الاستدلال فيه خفاء…" }, o: [{ id: "Hujjah mutlak", ar: "حجة مطلقًا" }, { id: "Bukan hujjah mutlak, tetapi qarinah dalam tarjih", ar: "ليس حجة مطلقًا وإنما قرينة في الترجيح" }, { id: "Tertolak sepenuhnya", ar: "مردود تمامًا" }, { id: "Sama dengan tafsir nabawi", ar: "كالتفسير النبوي" }], j: 1 },
      { q: { id: "Kitab *Ad-Durr al-Mantsur fit-Tafsir bil-Ma'tsur* karya…", ar: "«الدر المنثور في التفسير بالمأثور» لـ…" }, o: [{ id: "Ibnu Katsir", ar: "ابن كثير" }, { id: "As-Suyuthi", ar: "السيوطي" }, { id: "Al-Baghawi", ar: "البغوي" }, { id: "Ath-Thabari", ar: "الطبري" }], j: 1 }
    ],
    bs: [
      { t: { id: "Sunnah yang menjelaskan Al-Qur'an mencakup ucapan, perbuatan, dan persetujuan Nabi ﷺ.", ar: "السنة المبينة للقرآن قولية وفعلية وتقريرية." }, j: true },
      { t: { id: "Pada tafsir nabawi, mufassir memiliki peran ijtihad dalam memilih maknanya.", ar: "في التفسير النبوي للمفسر دور الاجتهاد." }, j: false, b: { id: "Mufassir hanya meriwayatkan dan menukil.", ar: "ليس له فيه سوى النقل والرواية." } },
      { t: { id: "Para sahabat biasa menisbatkan penjelasan kepada Nabi ﷺ jika memang berasal dari beliau.", ar: "كان من عادة الصحابة نسبة البيان النبوي إليه ﷺ." }, j: true },
      { t: { id: "Nabi ﷺ menafsirkan seluruh Al-Qur'an kata demi kata, termasuk kata \"langit\" dan \"bumi\".", ar: "فسر النبي ﷺ القرآن كلمة كلمة." }, j: false },
      { t: { id: "Pemotongan tangan pencuri dari pergelangan adalah contoh taqyid al-muthlaq oleh sunnah.", ar: "قطع اليد من الكوع مثال لتقييد المطلق بالسنة." }, j: true },
      { t: { id: "Setiap hadits yang dibawakan mufassir saat membahas ayat pasti termasuk tafsir.", ar: "كل حديث يذكره المفسر عند الآية فهو تفسير." }, j: false, b: { id: "Bisa untuk hukum, istinbath, atau istisyhad.", ar: "قد يكون للأحكام أو الاستنباط أو الاستشهاد." } },
      { t: { id: "Ibnu Katsir termasuk mufassir yang paling banyak membawakan sunnah, melebihi Al-Baghawi.", ar: "ابن كثير أكثر من البغوي في ذكر السنة." }, j: true },
      { t: { id: "Tafsir nabawi yang shahih boleh ditinggalkan jika ada pendapat salaf yang berbeda.", ar: "يجوز ترك التفسير النبوي لقول السلف." }, j: false, b: { id: "Tafsir nabawi hujjah, tidak boleh dilampaui; kepadanya dikembalikan.", ar: "إليه المصير." } }
    ],
    jodoh: [
      { a: { id: "Takhshish al-'amm", ar: "تخصيص العام" }, b: { id: "\"Lakukan apa saja kecuali jima'\"", ar: "اصنعوا كل شيء إلا النكاح" } },
      { a: { id: "Bayan al-mujmal", ar: "بيان المجمل" }, b: { id: "As-sab' al-matsani = Al-Fatihah", ar: "السبع المثاني: أم القرآن" } },
      { a: { id: "Idhah al-musykil", ar: "إيضاح المشكل" }, b: { id: "{يَا أُخْتَ هَارُونَ}", ar: "يا أخت هارون" } },
      { a: { id: "Tabyin al-mubham", ar: "تبيين المبهم" }, b: { id: "\"Hamba\" = Khadhir", ar: "العبد: الخضر" } },
      { a: { id: "Taqyid al-muthlaq", ar: "تقييد المطلق" }, b: { id: "Potong tangan dari pergelangan", ar: "القطع من الكوع" } },
      { a: { id: "Bayan al-gharib", ar: "بيان الغريب" }, b: { id: "*Ta'ulu* = berbuat zalim", ar: "تعولوا: تجوروا" } }
    ],
    urut: { t: { id: "Urutkan mufassir berikut menurut tahun wafat (paling awal → akhir).", ar: "رتب حسب الوفاة." },
      item: [{ id: "Al-Hasan al-Bashri (110 H)", ar: "الحسن البصري" }, { id: "Qatadah (117 H)", ar: "قتادة" }, { id: "'Abdurrazzaq (211 H)", ar: "عبد الرزاق" }, { id: "Ath-Thabari (310 H)", ar: "الطبري" }, { id: "Al-Baghawi (516 H)", ar: "البغوي" }, { id: "Ibnu Katsir (774 H)", ar: "ابن كثير" }, { id: "As-Suyuthi (911 H)", ar: "السيوطي" }] },
    isian: [
      { t: { id: "Tafsir dengan sunnah adalah menjelaskan makna Al-Qur'an dengan ______ Nabi.", ar: "بيان معاني القرآن بـ______ النبوية." }, j: { id: "Sunnah", ar: "السنة" }, x: [{ id: "Sirah", ar: "السيرة" }, { id: "Bahasa", ar: "اللغة" }, { id: "Qira'at", ar: "القراءات" }] },
      { t: { id: "'Aisyah berkata tentang istighfar Nabi ﷺ setelah An-Nashr: beliau ______ Al-Qur'an.", ar: "قالت عائشة: ______ القرآن." }, j: { id: "mentakwil (mengamalkan)", ar: "يتأوَّل" }, x: [{ id: "menghafal", ar: "يحفظ" }, { id: "menulis", ar: "يكتب" }, { id: "menghapus", ar: "ينسخ" }] },
      { t: { id: "Saat paling dekat seorang hamba dengan Rabbnya adalah ketika ia ______.", ar: "أقرب ما يكون العبد من ربه وهو ______." }, j: { id: "sujud", ar: "ساجد" }, x: [{ id: "berdiri", ar: "قائم" }, { id: "duduk", ar: "جالس" }, { id: "ruku'", ar: "راكع" }] },
      { t: { id: "Makna *'izin* dalam hadits \"Mengapa aku melihat kalian 'izin?\" adalah ______.", ar: "عزين في الحديث: ______." }, j: { id: "berkelompok-kelompok", ar: "حِلقًا وجماعات" }, x: [{ id: "berlari", ar: "مسرعين" }, { id: "bersedih", ar: "حزانى" }, { id: "diam", ar: "صامتين" }] }
    ],
    pilah: { t: { id: "Pilah: tafsir NABAWI (langsung) atau IJTIHADI (pengaitan oleh mufassir)?", ar: "صنِّف: تفسير نبوي أم اجتهادي؟" },
      kategori: [{ id: "Tafsir nabawi", ar: "تفسير نبوي" }, { id: "Tafsir ijtihadi", ar: "تفسير اجتهادي" }],
      item: [
        { t: { id: "\"Ummul Qur'an adalah as-sab' al-matsani\"", ar: "أم القرآن هي السبع المثاني" }, k: 0 },
        { t: { id: "Ibnu Katsir membawakan hadits 70.000 tali kekang Jahannam pada Al-Fajr: 23", ar: "ابن كثير يذكر حديث زمام جهنم" }, k: 1 },
        { t: { id: "Nabi ﷺ menyetujui tayamum 'Amr dengan dalil {وَلَا تَقْتُلُوا أَنفُسَكُمْ}", ar: "إقرار عمرو" }, k: 0 },
        { t: { id: "Ibnul 'Arabi menguatkan *safarah* = malaikat dengan hadits orang yang mahir membaca", ar: "ترجيح ابن العربي" }, k: 1 },
        { t: { id: "Nabi ﷺ: \"…lalu keduanya menemukan Khadhir\"", ar: "فوجدا خضرًا" }, k: 0 },
        { t: { id: "Ibnu Katsir membawakan hadits sujud pada {وَاسْجُدْ وَاقْتَرِبْ}", ar: "حديث السجود عند آية العلق" }, k: 1 }
      ] }
  },
  tugas: [
    { t: { ar: "ما الفرق بين تفسير القرآن بالسنة المباشر وغير المباشر؟", id: "Apa perbedaan tafsir Al-Qur'an dengan sunnah yang langsung dan tidak langsung?" },
      j: { ar: "المباشر (التفسير النبوي): أن يعمد النبي ﷺ إلى آية يذكرها في كلامه أو يشير إليها ثم يبين معناها، أو يُقر أحد أصحابه على فهمه لها؛ وليس للمفسر فيه سوى النقل والرواية، وهو حجة بلا خلاف. وغير المباشر (الاجتهادي): أن يفسر المفسر الآية بكلام للنبي ﷺ لم يرد منه في سياق التفسير؛ فالوصول إلى الحديث بالنقل، لكن حمله على الآية باجتهاد المفسر.",
           id: "**Langsung (tafsir nabawi):** Nabi ﷺ sendiri menyebut/mengisyaratkan ayat lalu menjelaskan maknanya, atau menyetujui pemahaman sahabat; mufassir hanya meriwayatkan; hujjah tanpa perselisihan. **Tidak langsung (ijtihadi):** mufassir menafsirkan ayat dengan sabda Nabi ﷺ yang tidak diucapkan dalam konteks tafsir; haditsnya sampai lewat riwayat, tetapi pengaitannya dengan ayat adalah ijtihad mufassir." } },
    { t: { ar: "ما أنواع تفسير السنة للقرآن؟", id: "Apa saja jenis (fungsi) sunnah dalam menafsirkan Al-Qur'an?" },
      j: { ar: "ستة أحوال: ١- تخصيص العام: «اصنعوا كل شيء إلا النكاح». ٢- بيان المجمل: «أم القرآن هي السبع المثاني». ٣- إيضاح المشكل: «إنهم كانوا يسمون بأنبيائهم» في {يَا أُخْتَ هَارُونَ}. ٤- تبيين المبهم: «فوجدا خضرًا». ٥- تقييد المطلق: قطع يد السارق من الكوع. ٦- بيان الغريب: {أَلَّا تَعُولُوا} أي ألا تجوروا.",
           id: "Enam: (1) **takhshish al-'amm** — \"lakukan apa saja kecuali jima'\"; (2) **bayan al-mujmal** — as-sab' al-matsani = Al-Fatihah; (3) **idhah al-musykil** — \"mereka biasa memberi nama dengan nama nabi\" pada {يَا أُخْتَ هَارُونَ}; (4) **tabyin al-mubham** — hamba itu Khadhir; (5) **taqyid al-muthlaq** — potong tangan dari pergelangan; (6) **bayan al-gharib** — *ta'ulu* = berbuat zalim." } },
    { t: { ar: "كيف يفسر المفسر القرآن بالسنة؟", id: "Bagaimana mufassir menafsirkan Al-Qur'an dengan sunnah?" },
      j: { ar: "من صور استفادة المفسر من السنة: ١- أن يذكر حديثًا مطابقًا لمعنى الآية (حديث زمام جهنم). ٢- أن يذكر حديثًا وردت فيه اللفظة القرآنية (عزين). ٣- أن يعتمد على السنة في ترجيح أحد المعاني (السفرة هم الملائكة). ٤- أن يفسر الآية بتأوُّل النبي ﷺ لها (التسبيح والاستغفار بعد سورة النصر). ٥- أن يكون في الآية إشارة إلى موضوع بينه الرسول ﷺ فيورده (حديث السجود).",
           id: "Melalui lima bentuk: (1) menyebut hadits yang **sesuai makna ayat** (Jahannam & 70.000 tali kekang); (2) hadits yang **memuat kata Qur'ani** yang sama (*'izin*); (3) **tarjih** dengan sunnah (*safarah* = malaikat); (4) menafsirkan dengan **ta'awwul** Nabi ﷺ (tasbih & istighfar setelah An-Nashr); (5) ayat **mengisyaratkan tema** yang dijelaskan Nabi ﷺ (hadits sujud pada akhir Al-'Alaq)." } },
    { t: { ar: "هل تفسير القرآن بالسنة حجة؟ ولماذا؟", id: "Apakah tafsir Al-Qur'an dengan sunnah itu hujjah? Mengapa?" },
      j: { ar: "التفسير النبوي المباشر حجة بلا خلاف؛ لأنه بيان من أوكل الله إليه البيان {لِتُبَيِّنَ لِلنَّاسِ}، فلا يجوز تجاوزه وإليه المصير عند المخالفة. وأما الاجتهادي فنوعان: ما يكاد يقع الاتفاق على أن الحديث يفسر الآية فهو حجة بلا خلاف، وما يكون الاستدلال فيه خفيًّا فيقع فيه النزاع فلا يكون حجة مطلقًا وإنما قرينة في الترجيح؛ لأنه مبني على اجتهاد المفسر.",
           id: "**Tafsir nabawi langsung: hujjah tanpa perselisihan**, karena itu penjelasan dari orang yang diberi tugas menjelaskan ({لِتُبَيِّنَ لِلنَّاسِ}); tak boleh dilampaui. **Tafsir ijtihadi:** (a) jika hampir disepakati bahwa hadits itu menafsirkan ayat → hujjah; (b) jika pendalilannya samar dan diperselisihkan → bukan hujjah mutlak, hanya qarinah tarjih — karena ia dibangun di atas ijtihad mufassir." } }
  ]
});
