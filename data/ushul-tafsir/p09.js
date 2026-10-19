/* Ushul Tafsir — Pertemuan 9: Bagaimana Menafsirkan Al-Qur'an? (Riwayat & Ijtihad) */
Kuliah.pertemuan("ushul-tafsir", {
  no: 9, motif: "sanad", tema: 1, durasi: 26,
  telegram: "https://t.me/Shifaaulqloub7/351",
  bab: { id: "Jalan tafsir & bekal mufassir", ar: "طرق التفسير وعلوم المفسر" },
  judul: { id: "Bagaimana Menafsirkan Al-Qur'an? Jalan Riwayat (Naql) dan Jalan Ijtihad (Ra'yu)", ar: "كيف تفسر القرآن؟ طريقا النقل والاجتهاد" },
  ringkas: {
    id: "Dua jalan tafsir. Jalan riwayat: definisi, dua bentuknya, cara periwayatan, tiga gaya mufassir menukil, unsur-unsur susupan (dakhil), dan kitab-kitabnya. Jalan ijtihad: definisi, ra'yu terpuji dan tercela beserta hukum, dalil, contoh, dan kitab-kitabnya, serta apa yang dilakukan mufassir setelah tiga kurun.",
    ar: "طريقا التفسير: النقل (تعريفه وصورتاه وطرقه وأساليب النقل والدخيل على المنقول والمؤلفات)، والاجتهاد أو الرأي (تعريفه وقسماه: المحمود والمذموم، وحكمهما وأمثلتهما والمؤلفات)، ثم الاجتهاد بعد القرون الخيرية."
  },
  tujuan: [
    { id: "Mendefinisikan tafsir manqul dan membedakan manqul murni dari manqul nisbi.", ar: "تعريف التفسير المنقول والتفريق بين المنقول الخالص والنسبي." },
    { id: "Menjelaskan cara periwayatan tafsir dan tiga gaya mufassir dalam menukil.", ar: "شرح طرق النقل وأساليب المفسرين في النقل." },
    { id: "Mendefinisikan tafsir dengan ra'yu dan membedakan yang terpuji dari yang tercela.", ar: "تعريف التفسير بالرأي والتفريق بين المحمود والمذموم." },
    { id: "Mengetahui dua sikap mufassir setelah tiga kurun terbaik.", ar: "معرفة حال الاجتهاد بعد القرون الخيرية." }
  ],
  isi: [
    { t: "judul", id: "Jalan Pertama: Tafsir Manqul (Riwayat)", ar: "الطريق الأول: التفسير المنقول" },
    { t: "definisi", istilah: { id: "**Meriwayatkan penjelasan makna ayat yang datang dari Nabi ﷺ, para sahabat, tabi'in, atau atba' tabi'in.** Ia bersandar pada riwayat, tanpa ijtihad untuk menjelaskan makna.", ar: "التفسير بالمنقول: هو رواية بيان معنى الآيات الوارد عن النبي ﷺ أو صحابته الكرام أو التابعين أو تابعيهم بإحسان، فهو تفسير يعتمد على المنقول وليس فيه اجتهاد لبيان المعنى." } },
    { t: "banding", judul: { id: "Dua bentuk tafsir manqul", ar: "صورتا التفسير المنقول" },
      kiri: { judul: { id: "Manqul murni (khalish)", ar: "المنقول الخالص (البحت)" }, ikon: "chain", warna: "green", poin: [
        { id: "Tidak ada ruang ijtihad; bagian mufassir hanya **meriwayatkan**.", ar: "لا مجال للاجتهاد فيه، وحظ المفسر منه الرواية المحضة." },
        { id: "Contoh: sahabat menukil tafsir Nabi ﷺ.", ar: "كأن ينقل الصحابي تفسير النبي ﷺ." } ] },
      kanan: { judul: { id: "Manqul nisbi (relatif)", ar: "المنقول النسبي" }, ikon: "swap", warna: "amber", poin: [
        { id: "**Riwayat** dari sisi penukilnya, **ijtihad** dari sisi orang yang mengucapkannya.", ar: "منقول من جهة تناقله بالرواية، واجتهادي من جهة قائله." },
        { id: "Contoh: tabi'i menukil tafsir sahabat — bagi sahabat itu ijtihad, bagi tabi'i itu riwayat.", ar: "كنقل التابعي تفسير الصحابي." } ] } },

    { t: "sub", id: "Cara periwayatan tafsir", ar: "طرق النقل" },
    { t: "poin", item: [
      { ikon: "ear", judul: { id: "1. Sanad mendengar (tahammul wal-ada')", ar: "الإسناد السماعي بالتحمل والأداء" }, id: "Murid mendengar gurunya menafsirkan, lalu menukilnya — dengan hafalan atau tulisan — kepada generasi berikutnya.", ar: "أن يسمع التلميذ شيخه يفسر القرآن فينقل ما سمعه، وهذا يعتمد على الحفظ أو الكتابة." },
      { ikon: "book", judul: { id: "2. Menukil dari kitab", ar: "النقل من كتاب" }, id: "Dari naskah guru; atau *munawalah* (guru menyerahkan kitabnya dan mengijazahkannya); atau *wijadah* (menemukan kitab guru lalu meriwayatkannya) — tingkatan riwayat paling rendah, namun boleh dan tidak mensyaratkan sezaman.", ar: "من نسخة الشيخ، أو بالمناولة، أو بالوجادة وهي أقل أنواع الرواية، والرواية بالوجادة جائزة ولا يشترط فيها المعاصرة." } ] },
    { t: "langkah", judul: { id: "Awal mula penulisan tafsir", ar: "بداية كتابة التفسير" }, item: [
      { id: "**Mujahid (w. 104 H)** menulis tafsir gurunya, Ibnu 'Abbas, semasa sang guru masih hidup.", ar: "كتب مجاهد تفسير شيخه ابن عباس في حياته." },
      { id: "Khalifah **'Abdul Malik bin Marwan** meminta **Sa'id bin Jubair** menuliskan tafsir — di masa sahabat junior seperti Anas bin Malik masih hidup.", ar: "طلب عبد الملك بن مروان من سعيد بن جبير أن يكتب له التفسير فكتبه." },
      { id: "**'Atha' bin Dinar** menemukan naskah Sa'id itu dan meriwayatkannya — riwayat **wijadah**.", ar: "وجد عطاء بن دينار النسخة فرواها عن سعيد بن جبير وجادة." },
      { id: "Penulisan berkembang pada masa atba' tabi'in; naskah-naskah itu menjadi rujukan hingga hari ini.", ar: "تنامت كتابة التفسير في عهد أتباع التابعين وصارت النسخ مرجعًا." } ] },

    { t: "sub", id: "Tiga gaya mufassir menukil dari kitab tafsir", ar: "أساليب المفسرين في النقل" },
    { t: "akordion", item: [
      { judul: { id: "1. Menyebut sumber atau pemilik pendapat (ini asalnya)", ar: "١- ذكر مصدر القول أو صاحبه" }, id: "Ibnu 'Athiyyah pada {قُل لَّا أَقُولُ لَكُمْ عِندِي خَزَائِنُ اللَّهِ}: makna kedua \"aku bukan Tuhan\"… lalu ia berkata, \"**Dan ini pendapat Ath-Thabari.**\"", ar: "قال ابن عطية: …والآخر أنه ليس بإله… وهذا هو قول الطبري." },
      { judul: { id: "2. Menukil dengan sumber yang tidak disebut", ar: "٢- النقل مع إبهام المصدر" }, id: "Seperti \"sebagian mufassir berkata\". Abu Hayyan pada {يَعْمَهُونَ}: \"Sebagian mufassir berkata: tafsir terakhir ini lebih dekat kepada kebenaran, karena mereka bukan ragu dalam kekafirannya, tetapi bersikeras.\"", ar: "قال أبو حيان: قال بعض المفسرين: وهذا التفسير الأخير أقرب إلى الصواب." },
      { judul: { id: "3. Menukil tanpa menyebut kitab maupun penulisnya", ar: "٣- النقل دون الإشارة" }, id: "Juga banyak terjadi, walau bukan asalnya. Kadang karena mufassir sudah menyebut sumbernya di awal kitab, atau ia mengadopsi pendapat itu. Contoh: Ath-Thabari pada {وَالَّذِي فَطَرَنَا} menukil uraian Al-Farra' (*Ma'ani al-Qur'an*) tanpa menyebutnya — ia telah menyebut sumber-sumbernya di awal tafsir.", ar: "قد ينقل المفسر ولا يبين اعتمادًا على أنه قد بين مصادره في أول كتابه، كنقل الطبري كلام الفراء في {وَالَّذِي فَطَرَنَا}." } ] },
    { t: "kutipan", ar: "ومن النصيحة أن تضاف الفائدة التي تُستغرب إلى قائلها، فمن فعل ذلك بورك له في علمه وحاله، ومن أوهم ذلك وأوهم فيما يأخذه من كلام غيره أنه له فهو جدير ألا يُنتفع بعلمه ولا يبارك له في حال.", id: "Termasuk nasihat (kejujuran ilmiah) adalah menisbatkan faedah yang unik kepada orang yang mengucapkannya. Siapa melakukannya akan diberkahi ilmu dan keadaannya; siapa yang mengesankan perkataan orang lain sebagai miliknya, layak tidak diberi manfaat ilmunya.", oleh: { id: "Imam An-Nawawi (dan Ibnu 'Abdil Barr: \"Termasuk keberkahan ilmu adalah menisbatkan perkataan kepada pengucapnya\")", ar: "النووي، وابن عبد البر" } },

    { t: "sub", id: "Unsur susupan (ad-dakhil) dalam tafsir manqul", ar: "الدخيل على المنقول" },
    { t: "catatan", gaya: "tanbih", id: "Tafsir ma'tsur telah disusupi pemalsuan dan khurafat, di antaranya karena: (1) **sisipan musuh Islam**, seperti zindiq Yahudi yang berpura-pura masuk Islam untuk menyisipkan berita yang telah diubah; (2) **sisipan pengikut mazhab batil** seperti Rafidhah yang memalsukan hadits dan menisbatkannya kepada Nabi ﷺ atau sahabat; (3) **banyaknya pendapat yang dinisbatkan kepada sahabat tanpa sanad**, sehingga yang shahih bercampur dengan yang tidak. Maka wajib **tatsabbut (verifikasi)** dalam meriwayatkan.", ar: "دخل التفسير المأثور الوضع والدس والخرافات لأمور: ما دسه أعداء الإسلام كزنادقة اليهود، وما دسه أصحاب المذاهب الباطلة كالرافضة، ونقل كثير من الأقوال المنسوبة إلى الصحابة بغير إسناد؛ لذا ينبغي التثبت عند الرواية." },
    { t: "daftar", judul: { id: "Kitab-kitab yang memuat tafsir manqul", ar: "أهم الكتب التي نقلت التفسير" }, item: [
      { id: "Tafsir Ibnu 'Uyainah · Tafsir Ibnu Abi Hatim · Tafsir Abu asy-Syaikh Ibnu Hibban", ar: "تفسير ابن عيينة، وتفسير ابن أبي حاتم، وتفسير أبي الشيخ ابن حبان" },
      { id: "Tafsir Ath-Thabari · Tafsir Ibnu 'Athiyyah · *Bahr al-'Ulum* (Abu al-Laits as-Samarqandi)", ar: "تفسير الطبري، وتفسير ابن عطية، وبحر العلوم لأبي الليث السمرقندي" },
      { id: "*Al-Kasyf wal-Bayan* (Ats-Tsa'labi) · *Ad-Durr al-Mantsur* (As-Suyuthi) · Tafsir Ibnu Katsir", ar: "الكشف والبيان للثعلبي، والدر المنثور للسيوطي، وتفسير ابن كثير" } ] },

    { t: "judul", id: "Jalan Kedua: Tafsir dengan Ijtihad (Ra'yu)", ar: "الطريق الثاني: التفسير بالاجتهاد والرأي" },
    { t: "definisi", istilah: { id: "**Berijtihad menafsirkan Al-Qur'an dengan alat-alat ijtihad**: ilmu tentang Al-Qur'an, Sunnah, perkataan sahabat, tabi'in dan atba'nya, bahasa Arab, dan riwayat israiliyyat — lalu menafsirkan yang belum ia temukan tafsirnya dari salaf, atau mendatangkan pendapat yang **tidak bertentangan** dengan pendapat salaf.", ar: "الاجتهاد في تفسير القرآن بما معه من آلات الاجتهاد من العلم بالقرآن والسنة وأقوال الصحابة والتابعين ومن تبعهم ولغة العرب وما روي من الإسرائيليات، ثم يجتهد في تفسير ما لم يقف على تفسيره من أقوال السلف، أو أن يأتي بقول لا يناقض أقوالهم." } },
    { t: "banding",
      kiri: { judul: { id: "Ra'yu terpuji (mahmud)", ar: "الرأي المحمود" }, ikon: "check", warna: "green", poin: [
        { id: "Bersumber dari Al-Qur'an dan Sunnah; pelakunya menguasai bahasa Arab dan kaidah syariat.", ar: "المستمد من القرآن والسنة، وصاحبه عالم باللغة وقواعد الشريعة." },
        { id: "Berdasarkan ilmu atau dugaan kuat; inilah ra'yu tiga kurun pertama.", ar: "ما كان عن علم أو غلبة ظن، وهو الذي كان في طبقات السلف." },
        { id: "**Hukum: boleh.**", ar: "حكمه: جائز." } ] },
      kanan: { judul: { id: "Ra'yu tercela (madzmum)", ar: "الرأي المذموم" }, ikon: "x", warna: "red", poin: [
        { id: "Bersandar pada pemahaman pribadi dan ra'yu semata yang tidak sesuai syariat dan tidak bersandar pada nashnya.", ar: "يعتمد فيه المفسر على فهمه الخاص واستنباطه بالرأي المجرد الذي لا يتفق مع الشريعة." },
        { id: "**Hukum: haram** — berkata atas nama Allah tanpa ilmu.", ar: "حكمه: حرام؛ لأنه قول على الله بغير علم." } ] } },
    { t: "sub", id: "Dalil bolehnya ra'yu yang terpuji", ar: "أدلة جواز الرأي المحمود" },
    { t: "langkah", item: [
      { id: "Ayat-ayat yang memerintahkan tadabbur: {أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ أَمْ عَلَىٰ قُلُوبٍ أَقْفَالُهَا}.", ar: "قوله تعالى: {أَفَلَا يَتَدَبَّرُونَ الْقُرْآنَ}." },
      { id: "Doa Nabi ﷺ untuk Ibnu 'Abbas: \"Ya Allah, pahamkanlah ia dalam agama dan ajarkan ia takwil.\" Jika tafsir hanya riwayat, tak ada keistimewaan Ibnu 'Abbas atas sahabat lain.", ar: "«اللهم فقهه في الدين وعلمه التأويل»، فلو كان التأويل مقصورًا على النقل لما كان لابن عباس مزية." },
      { id: "Para sahabat **berbeda pendapat** dalam tafsir — tanda bahwa itu ijtihad; seandainya tauqifi, mereka tak mungkin berbeda.", ar: "أن الصحابة اختلفوا في التفسير على وجوه، فدل على أنه من اجتهادهم." },
      { id: "Ibnu Taimiyah: \"Adapun orang yang berbicara tentang apa yang ia ketahui secara bahasa dan syariat, maka tidak ada dosa atasnya.\"", ar: "قال ابن تيمية: فأما من تكلم بما يعلم من ذلك لغة وشرعًا فلا حرج عليه." } ] },
    { t: "hadits", ar: "لما نزلت {حَتَّىٰ يَتَبَيَّنَ لَكُمُ الْخَيْطُ الْأَبْيَضُ مِنَ الْخَيْطِ الْأَسْوَدِ مِنَ الْفَجْرِ} قال له عدي بن حاتم: يا رسول الله، إني أجعل تحت وسادتي عقالين: عقالًا أبيض وعقالًا أسود، أعرف الليل من النهار. فقال ﷺ: «إن وسادتك لعريض، إنما هو سواد الليل وبياض النهار»", id: "Ketika turun {…hingga jelas bagimu benang putih dari benang hitam, yaitu fajar}, 'Adi bin Hatim berkata, \"Wahai Rasulullah, aku meletakkan dua tali di bawah bantalku, putih dan hitam, untuk mengenali malam dari siang.\" Beliau bersabda, \"Sungguh bantalmu lebar! Itu adalah gelapnya malam dan terangnya siang.\" — 'Adi memahami dengan ra'yunya dan beliau **tidak melarangnya berijtihad**, tetapi menjelaskan makna yang benar.", src: "HR. Muslim" },
    { t: "atsar", ar: "أقول فيها برأيي، فإن كان صوابًا فمن الله: هو ما دون الولد والوالد. فلما كان عمر قال: إني لأستحيي من الله أن أخالف أبا بكر.", id: "Abu Bakar tentang *kalalah*: \"Aku berkata dengan ra'yuku — jika benar maka dari Allah: yaitu (mayit) yang tidak meninggalkan anak dan orang tua.\" Ketika 'Umar menjadi khalifah ia berkata, \"Aku malu kepada Allah untuk menyelisihi Abu Bakar\" — menunjukkan 'Umar sebenarnya punya pendapat lain, tetapi meninggalkannya karena hormat.", src: "Riwayat Ath-Thabari, dari Asy-Sya'bi" },
    { t: "catatan", gaya: "info", id: "Pada generasi sahabat junior muncul mufassir tabi'in dengan ijtihad mandiri: **Sa'id bin Jubair, Mujahid bin Jabr, 'Ikrimah, Al-Hasan, dan Muhammad bin Ka'b al-Qurazhi.**", ar: "برز في جيل صغار الصحابة مفسرون من التابعين لهم آراء اجتهادية مستقلة: سعيد بن جبير ومجاهد وعكرمة والحسن ومحمد بن كعب القرظي." },
    { t: "sub", id: "Ra'yu yang tercela: dalil dan kemunculannya", ar: "الرأي المذموم: أدلته ونشأته" },
    { t: "ayat", ar: "قُلْ إِنَّمَا حَرَّمَ رَبِّيَ الْفَوَاحِشَ مَا ظَهَرَ مِنْهَا وَمَا بَطَنَ وَالْإِثْمَ وَالْبَغْيَ بِغَيْرِ الْحَقِّ وَأَن تُشْرِكُوا بِاللَّهِ مَا لَمْ يُنَزِّلْ بِهِ سُلْطَانًا وَأَن تَقُولُوا عَلَى اللَّهِ مَا لَا تَعْلَمُونَ", id: "…dan (diharamkan) kalian berkata tentang Allah apa yang tidak kalian ketahui.", src: "QS. Al-A'raf: 33" },
    { t: "hadits", ar: "من قال في القرآن برأيه فأصاب فقد أخطأ", id: "Siapa yang berbicara tentang Al-Qur'an dengan ra'yunya, lalu kebetulan benar, sungguh ia telah salah.", src: "HR. At-Tirmidzi, dari Jundub — ia berkata: hadits gharib; sebagian ahli hadits mempersoalkan Suhail bin Abi Hazm" },
    { t: "p", id: "At-Tirmidzi menjelaskan: sebagian ulama sahabat dan lainnya bersikap keras terhadap menafsirkan Al-Qur'an **tanpa ilmu**. Adapun Mujahid, Qatadah, dan lainnya yang menafsirkan, tidak disangka mereka berbicara tanpa ilmu. Ra'yu tercela **muncul dan menyebar bersama munculnya bid'ah**: ahli bid'ah berakidah dulu, baru menafsirkan, dengan dua cara: (1) **menafikan makna zahir** yang menyelisihi mazhabnya; (2) **membawa makna kepada akidahnya** — memelintir nash.", ar: "ظهر الرأي المذموم وانتشر حينما ظهرت البدع؛ لأن أهل البدع يعتقدون رأيًا ثم يكون لهم تفسير بعد ذلك، ولهم مع النصوص طريقان: نفي الدلالة الظاهرة التي تخالف مذهبهم، وحمل المعنى على ما يعتقدون." },
    { t: "atsar", ar: "يا أمير المؤمنين، إنما أنزل علينا القرآن فقرأناه، وعلمنا فيما نزل، وإنه يكون بعدنا أقوام يقرؤون القرآن ولا يعرفون فيما نزل، فيكون لكل قوم فيه رأي، فإذا كان لكل قوم فيه رأي اختلفوا، فإذا اختلفوا اقتتلوا.", id: "'Umar bertanya bagaimana umat ini bisa berselisih padahal kitab, nabi, dan kiblatnya satu. Ibnu 'Abbas: \"Al-Qur'an turun kepada kami, kami membacanya dan tahu tentang apa ia turun. Akan datang setelah kami kaum yang membaca Al-Qur'an tapi tidak tahu tentang apa ia turun, sehingga setiap kaum punya ra'yu; bila demikian mereka berselisih, dan bila berselisih mereka saling memerangi.\"", src: "Riwayat dari Ibrahim at-Taimi" },
    { t: "daftar", judul: { id: "Kitab-kitab tafsir bercorak ra'yu/ijtihad (disebut dalam kuliah)", ar: "أهم الكتب التي نقلت التفسير بالرأي" }, item: [
      { id: "Tafsir 'Abdurrahman bin Kaisan al-Asham · Tafsir Abu 'Ali al-Jubba'i · Tafsir Al-Qadhi 'Abdul Jabbar", ar: "تفسير الأصم، وتفسير أبي علي الجبائي، وتفسير القاضي عبد الجبار" },
      { id: "*Al-Kasysyaf* (Az-Zamakhsyari) · *Mafatih al-Ghaib* (Al-Fakhr ar-Razi) · Tafsir Ibnu Furak", ar: "الكشاف للزمخشري، ومفاتح الغيب للرازي، وتفسير ابن فورك" },
      { id: "Tafsir An-Nasafi · Tafsir Al-Khazin · Tafsir Abu Hayyan · *Anwar at-Tanzil* (Al-Baidhawi)", ar: "تفسير النسفي، والخازن، وأبي حيان، وأنوار التنزيل للبيضاوي" } ] },
    { t: "catatan", gaya: "tanbih", id: "Daftar ini adalah kitab yang **dominan corak ra'yu-nya**; kadar terpuji dan tercelanya berbeda-beda. Sebagiannya (seperti karya Al-Jubba'i, Al-Qadhi 'Abdul Jabbar, dan *Al-Kasysyaf*) memuat penafsiran berdasarkan akidah Mu'tazilah, sehingga dibaca dengan kritis.", ar: "هذه كتب غلب عليها الرأي، وفيها المحمود والمذموم بحسب مناهج أصحابها." },

    { t: "judul", id: "Ijtihad Setelah Tiga Kurun Terbaik", ar: "الاجتهاد في التفسير بعد القرون الخيرية" },
    { t: "poin", item: [
      { ikon: "scale", judul: { id: "1. Memilih di antara pendapat salaf dan men-tarjih", ar: "التخيُّر من أقوال السلف والترجيح بينها" }, id: "Ini termasuk ra'yu karena pemilihan dibangun di atas ijtihad. Teladan terbaiknya **Ath-Thabari**, yang berjanji menyebut kesepakatan dan perselisihan umat, menjelaskan alasan setiap mazhab, dan menerangkan yang benar menurutnya dengan seringkas mungkin.", ar: "وقد كان أمثل المفسرين طريقة في هذا الطبري… ومخبرون في كل ذلك بما انتهى إليه من اتفاق الحجة… ومبيِّنو علل كل مذهب من مذاهبهم، وموضِّحو الصحيح لدينا من ذلك." },
      { ikon: "sparkle", judul: { id: "2. Mendatangkan pendapat baru", ar: "أن يأتي المفسر برأي جديد" }, id: "Banyak terjadi; generasi belakangan mendatangkan pendapat yang benar di bawah **syarat pendapat baru**: **tidak menyelisihi pendapat salaf**. Namun banyak pula terjadi pada ahli bid'ah yang menyelisihi manhaj salaf dalam sumber dan cara menerima ilmu (dibahas di Pertemuan 13).", ar: "ومن ضوابط القول الحادث ألا يخالف أقوالهم، لكن وقع فيه شيء كثير عند أهل البدع." } ] },
    { t: "ringkasan", item: [
      { id: "Tafsir manqul = meriwayatkan penjelasan makna dari Nabi ﷺ & salaf; ada yang murni, ada yang nisbi.", ar: "المنقول خالص ونسبي." },
      { id: "Periwayatan: lewat pendengaran atau kitab (naskah, munawalah, wijadah).", ar: "طرق النقل: السماع والكتاب." },
      { id: "Gaya menukil: menyebut sumber (asal), menyamarkan sumber, atau tanpa menyebut.", ar: "أساليب النقل الثلاثة." },
      { id: "Ra'yu terpuji boleh; ra'yu tercela haram dan muncul bersama bid'ah.", ar: "المحمود جائز والمذموم حرام." },
      { id: "Setelah tiga kurun: memilih & men-tarjih pendapat salaf, atau pendapat baru yang tak menyelisihi mereka.", ar: "التخير والترجيح، أو القول الجديد الذي لا يخالفهم." } ] }
  ],
  istilah: [
    { ar: "التفسير المنقول", latin: "at-tafsir al-manqul", id: "Tafsir riwayat", def: { id: "Meriwayatkan penjelasan makna dari Nabi ﷺ dan salaf, tanpa ijtihad.", ar: "رواية بيان معنى الآيات الوارد عن النبي ﷺ والسلف." } },
    { ar: "المنقول الخالص", latin: "al-manqul al-khalish", id: "Riwayat murni", def: { id: "Tidak ada ruang ijtihad; mufassir hanya meriwayatkan.", ar: "لا مجال للاجتهاد فيه." } },
    { ar: "المنقول النسبي", latin: "al-manqul an-nisbi", id: "Riwayat relatif", def: { id: "Riwayat bagi penukil, ijtihad bagi pengucapnya.", ar: "منقول من وجه، اجتهادي من وجه." } },
    { ar: "المناولة", latin: "al-munawalah", id: "Penyerahan kitab", def: { id: "Guru menyerahkan kitabnya kepada murid disertai ijazah.", ar: "أن يناوله الشيخ كتابه فيجيزه فيه." } },
    { ar: "الوجادة", latin: "al-wijadah", id: "Menemukan kitab", def: { id: "Menemukan kitab guru lalu meriwayatkannya; tidak mensyaratkan sezaman.", ar: "أن يجد كتاب الشيخ فيرويه عنه." } },
    { ar: "الدخيل", latin: "ad-dakhil", id: "Unsur susupan", def: { id: "Pemalsuan & khurafat yang masuk ke tafsir ma'tsur.", ar: "ما دُسَّ في التفسير المأثور." } },
    { ar: "الرأي المحمود", latin: "ar-ra'y al-mahmud", id: "Ijtihad terpuji", def: { id: "Bersumber dari Al-Qur'an & Sunnah, oleh ahli bahasa dan syariat; hukumnya boleh.", ar: "جائز." } },
    { ar: "الرأي المذموم", latin: "ar-ra'y al-madzmum", id: "Ijtihad tercela", def: { id: "Ra'yu semata yang tak sesuai syariat; haram.", ar: "حرام؛ قول على الله بغير علم." } },
    { ar: "الكلالة", latin: "al-kalalah", id: "Kalalah", def: { id: "Mayit yang tidak meninggalkan anak dan orang tua (tafsir Abu Bakar dengan ra'yunya).", ar: "ما دون الولد والوالد." } },
    { ar: "القول الحادث", latin: "al-qaul al-hadits", id: "Pendapat baru", def: { id: "Pendapat yang tak didahului salaf; syaratnya tidak menyelisihi mereka.", ar: "ضابطه ألا يخالف أقوال السلف." } }
  ],
  latihan: {
    pg: [
      { q: { id: "Tafsir manqul adalah…", ar: "التفسير المنقول هو…" }, o: [{ id: "Meriwayatkan penjelasan makna ayat dari Nabi ﷺ, sahabat, tabi'in, atau atba'nya", ar: "رواية بيان معنى الآيات الوارد عن النبي ﷺ والسلف" }, { id: "Ijtihad mufassir belakangan", ar: "اجتهاد المتأخرين" }, { id: "Terjemahan Al-Qur'an", ar: "ترجمة القرآن" }, { id: "Ilmu qira'at", ar: "القراءات" }], j: 0 },
      { q: { id: "Tabi'i menukil tafsir sahabat. Dari sisi tabi'i itu adalah…", ar: "نقل التابعي تفسير الصحابي هو بالنسبة للتابعي…" }, o: [{ id: "Ijtihad", ar: "اجتهاد" }, { id: "Riwayat (manqul nisbi)", ar: "نقل (منقول نسبي)" }, { id: "Ijma'", ar: "إجماع" }, { id: "Ra'yu tercela", ar: "رأي مذموم" }], j: 1 },
      { q: { id: "'Atha' bin Dinar meriwayatkan tafsir Sa'id bin Jubair dengan cara…", ar: "روى عطاء بن دينار تفسير سعيد بن جبير…" }, o: [{ id: "Sama' (mendengar)", ar: "سماعًا" }, { id: "Munawalah", ar: "مناولة" }, { id: "Wijadah", ar: "وجادة" }, { id: "Ijazah lisan", ar: "إجازة" }], j: 2 },
      { q: { id: "Ibnu 'Athiyyah berkata \"Dan ini pendapat Ath-Thabari\". Ini gaya menukil…", ar: "قول ابن عطية «وهذا قول الطبري» من أسلوب…" }, o: [{ id: "Menyebut sumber/pemilik pendapat", ar: "ذكر مصدر القول أو صاحبه" }, { id: "Menyamarkan sumber", ar: "إبهام المصدر" }, { id: "Tanpa menyebut", ar: "دون إشارة" }, { id: "Wijadah", ar: "وجادة" }], j: 0 },
      { q: { id: "Salah satu penyebab masuknya unsur susupan ke tafsir ma'tsur adalah…", ar: "من أسباب الدخيل في التفسير المأثور…" }, o: [{ id: "Banyaknya ahli bahasa", ar: "كثرة اللغويين" }, { id: "Pendapat yang dinisbatkan kepada sahabat tanpa sanad", ar: "نقل الأقوال المنسوبة للصحابة بغير إسناد" }, { id: "Penulisan tafsir Mujahid", ar: "كتابة مجاهد" }, { id: "Kodifikasi bahasa", ar: "تدوين اللغة" }], j: 1 },
      { q: { id: "Hukum tafsir dengan ra'yu yang tercela adalah…", ar: "حكم التفسير بالرأي المذموم…" }, o: [{ id: "Makruh", ar: "مكروه" }, { id: "Boleh", ar: "جائز" }, { id: "Haram", ar: "حرام" }, { id: "Mustahab", ar: "مستحب" }], j: 2 },
      { q: { id: "Doa Nabi ﷺ untuk Ibnu 'Abbas dijadikan dalil bahwa…", ar: "استُدل بدعاء النبي ﷺ لابن عباس على أن…" }, o: [{ id: "Tafsir hanya riwayat", ar: "التفسير نقل فقط" }, { id: "Tafsir tidak terbatas pada riwayat; ijtihad yang terpuji dibolehkan", ar: "التأويل ليس مقصورًا على النقل" }, { id: "Ibnu 'Abbas tidak berijtihad", ar: "ابن عباس لم يجتهد" }, { id: "Tafsir khusus Ahli Bait", ar: "التفسير خاص بآل البيت" }], j: 1 },
      { q: { id: "Kisah 'Adi bin Hatim dan dua tali menunjukkan bahwa…", ar: "قصة عدي بن حاتم تدل على أن…" }, o: [{ id: "Nabi ﷺ melarang memahami Al-Qur'an dengan ra'yu", ar: "النبي ﷺ نهى عن الفهم بالرأي" }, { id: "Nabi ﷺ tidak melarangnya berijtihad, tetapi menjelaskan makna yang benar", ar: "لم ينهه بل بيَّن له المعنى الصحيح" }, { id: "Ayat itu mansukh", ar: "نسخ الآية" }, { id: "Benang bermakna hakiki", ar: "الخيط حقيقي" }], j: 1 },
      { q: { id: "Dua cara ahli bid'ah terhadap nash adalah…", ar: "طريقا أهل البدع مع النصوص…" }, o: [{ id: "Menghafal & menulis", ar: "الحفظ والكتابة" }, { id: "Menafikan makna zahir yang menyelisihi mazhab & membawa makna kepada akidahnya", ar: "نفي الدلالة الظاهرة وحمل المعنى على ما يعتقدون" }, { id: "Wijadah & munawalah", ar: "الوجادة والمناولة" }, { id: "Ijma' & qiyas", ar: "الإجماع والقياس" }], j: 1 },
      { q: { id: "Syarat pendapat tafsir baru setelah tiga kurun adalah…", ar: "ضابط القول الحادث…" }, o: [{ id: "Harus disepakati ahli bahasa", ar: "اتفاق اللغويين" }, { id: "Tidak menyelisihi pendapat salaf", ar: "ألا يخالف أقوال السلف" }, { id: "Ditulis dalam kitab", ar: "أن يُدوَّن" }, { id: "Disertai sanad", ar: "أن يُسنَد" }], j: 1 }
    ],
    bs: [
      { t: { id: "Wijadah termasuk tingkatan riwayat paling rendah, tetapi tetap dibolehkan.", ar: "الوجادة أقل أنواع الرواية وهي جائزة." }, j: true },
      { t: { id: "Wijadah mensyaratkan perawi sezaman dengan pemilik kitab.", ar: "يشترط في الوجادة المعاصرة." }, j: false },
      { t: { id: "Mujahid menulis tafsir Ibnu 'Abbas setelah Ibnu 'Abbas wafat.", ar: "كتب مجاهد تفسير ابن عباس بعد وفاته." }, j: false, b: { id: "Semasa Ibnu 'Abbas masih hidup.", ar: "في حياة شيخه." } },
      { t: { id: "Menyebut sumber atau pemilik pendapat adalah gaya asal yang dipegang mayoritas ulama.", ar: "ذكر مصدر القول هو الأصل المعتبر." }, j: true },
      { t: { id: "Perbedaan pendapat sahabat dalam tafsir menunjukkan bahwa sebagian tafsir adalah ijtihad.", ar: "اختلاف الصحابة في التفسير يدل على أنه من اجتهادهم." }, j: true },
      { t: { id: "At-Tirmidzi menilai hadits \"siapa yang berbicara tentang Al-Qur'an dengan ra'yunya lalu benar…\" sebagai hadits gharib.", ar: "قال الترمذي عن حديث جندب: حديث غريب." }, j: true },
      { t: { id: "Ra'yu tercela sudah tersebar luas sejak masa sahabat senior.", ar: "انتشر الرأي المذموم منذ عهد كبار الصحابة." }, j: false, b: { id: "Menyebar bersama munculnya bid'ah.", ar: "حينما ظهرت البدع." } },
      { t: { id: "Memilih dan men-tarjih di antara pendapat salaf termasuk tafsir dengan ra'yu.", ar: "التخير من أقوال السلف والترجيح من التفسير بالرأي." }, j: true }
    ],
    jodoh: [
      { a: { id: "Manqul murni", ar: "منقول خالص" }, b: { id: "Sahabat menukil tafsir Nabi ﷺ", ar: "نقل الصحابي تفسير النبي ﷺ" } },
      { a: { id: "Manqul nisbi", ar: "منقول نسبي" }, b: { id: "Tabi'i menukil tafsir sahabat", ar: "نقل التابعي تفسير الصحابي" } },
      { a: { id: "Munawalah", ar: "مناولة" }, b: { id: "Guru menyerahkan kitab + ijazah", ar: "يناوله كتابه فيجيزه" } },
      { a: { id: "Wijadah", ar: "وجادة" }, b: { id: "'Atha' bin Dinar & naskah Sa'id", ar: "عطاء ونسخة سعيد" } },
      { a: { id: "Menyamarkan sumber", ar: "إبهام المصدر" }, b: { id: "\"Sebagian mufassir berkata\" (Abu Hayyan)", ar: "قال بعض المفسرين" } },
      { a: { id: "Ra'yu terpuji", ar: "رأي محمود" }, b: { id: "Kalalah menurut Abu Bakar", ar: "الكلالة عند أبي بكر" } }
    ],
    isian: [
      { t: { id: "Ibnu 'Abdil Barr: termasuk ______ ilmu adalah menisbatkan perkataan kepada pengucapnya.", ar: "من ______ العلم أن تضيف الشيء إلى قائله." }, j: { id: "keberkahan", ar: "بركة" }, x: [{ id: "kesulitan", ar: "صعوبة" }, { id: "hiasan", ar: "زينة" }, { id: "syarat", ar: "شروط" }] },
      { t: { id: "Nabi ﷺ kepada 'Adi: \"Sungguh bantalmu ______!\"", ar: "«إن وسادك ______»" }, j: { id: "lebar", ar: "لعريض" }, x: [{ id: "tinggi", ar: "لعالٍ" }, { id: "lembut", ar: "للين" }, { id: "kecil", ar: "لصغير" }] },
      { t: { id: "'Umar: \"Aku malu kepada Allah untuk ______ Abu Bakar.\"", ar: "«إني لأستحيي من الله أن ______ أبا بكر»" }, j: { id: "menyelisihi", ar: "أخالف" }, x: [{ id: "mendahului", ar: "أسبق" }, { id: "meninggalkan", ar: "أترك" }, { id: "memuji", ar: "أمدح" }] },
      { t: { id: "Ra'yu tercela muncul dan menyebar ketika muncul ______.", ar: "ظهر الرأي المذموم حينما ظهرت ______." }, j: { id: "bid'ah", ar: "البدع" }, x: [{ id: "kodifikasi", ar: "الكتابة" }, { id: "qira'at", ar: "القراءات" }, { id: "penaklukan", ar: "الفتوح" }] }
    ],
    pilah: { t: { id: "Pilah: termasuk jalan RIWAYAT (naql) atau jalan IJTIHAD (ra'yu)?", ar: "صنِّف: نقل أم اجتهاد؟" },
      kategori: [{ id: "Riwayat", ar: "نقل" }, { id: "Ijtihad", ar: "اجتهاد" }],
      item: [
        { t: { id: "Sahabat menukil tafsir Nabi ﷺ", ar: "نقل الصحابي تفسير النبي ﷺ" }, k: 0 },
        { t: { id: "Abu Bakar: kalalah = selain anak & orang tua", ar: "قول أبي بكر في الكلالة" }, k: 1 },
        { t: { id: "'Atha' meriwayatkan naskah Sa'id bin Jubair", ar: "رواية عطاء" }, k: 0 },
        { t: { id: "Ath-Thabari memilih yang terkuat di antara pendapat salaf", ar: "ترجيح الطبري" }, k: 1 },
        { t: { id: "Mujahid menulis tafsir Ibnu 'Abbas", ar: "كتابة مجاهد لتفسير ابن عباس" }, k: 0 },
        { t: { id: "'Adi bin Hatim memahami dua tali", ar: "فهم عدي" }, k: 1 }
      ] }
  },
  tugas: [
    { t: { ar: "عرِّف التفسير المنقول.", id: "Definisikan tafsir manqul." }, j: { ar: "التفسير المنقول: هو رواية بيان معنى الآيات الوارد عن النبي ﷺ أو صحابته الكرام أو التابعين أو تابعيهم بإحسان، وهو يعتمد على المنقول وليس فيه اجتهاد لبيان المعنى، وله صورتان: منقول خالص لا مجال للاجتهاد فيه، ومنقول نسبي يكون نقلًا من جهة راويه واجتهادًا من جهة قائله.", id: "**Meriwayatkan penjelasan makna ayat dari Nabi ﷺ, sahabat, tabi'in, atau atba'nya**, tanpa ijtihad. Dua bentuk: **murni** (tanpa ruang ijtihad) dan **nisbi** (riwayat bagi penukil, ijtihad bagi pengucapnya)." } },
    { t: { ar: "عرِّف التفسير بالاجتهاد والرأي.", id: "Definisikan tafsir dengan ijtihad dan ra'yu." }, j: { ar: "هو الاجتهاد في تفسير القرآن بما مع المفسر من آلات الاجتهاد: من العلم بالقرآن والسنة وأقوال الصحابة والتابعين ومن تبعهم ولغة العرب وما روي من الإسرائيليات، ثم يجتهد في تفسير ما لم يقف على تفسيره من أقوال السلف، أو يأتي بقول تفسيري لا يناقض أقوالهم.", id: "**Berijtihad menafsirkan Al-Qur'an dengan alat-alat ijtihad** (ilmu Al-Qur'an, Sunnah, perkataan salaf, bahasa Arab, israiliyyat), lalu menafsirkan yang belum ditemukan tafsirnya dari salaf atau mendatangkan pendapat yang tidak bertentangan dengan mereka." } },
    { t: { ar: "التفسير بالرأي ينقسم إلى قسمين، فما هما؟", id: "Tafsir dengan ra'yu terbagi dua. Apa saja?" }, j: { ar: "الأول: الرأي المحمود، وهو المستمد من القرآن والسنة، وصاحبه عالم باللغة العربية وأساليبها وقواعد الشريعة وأصولها، وهو ما كان عن علم أو غلبة ظن، وحكمه الجواز. الثاني: الرأي المذموم، وهو الذي يعتمد فيه المفسر على فهمه الخاص واستنباطه بالرأي المجرد الذي لا يتفق مع الشريعة ولا يستند إلى نصوصها، وحكمه التحريم.", id: "(1) **Ra'yu terpuji** — bersumber dari Al-Qur'an & Sunnah oleh orang yang menguasai bahasa Arab dan kaidah syariat; berdasar ilmu/dugaan kuat; **boleh**. (2) **Ra'yu tercela** — bersandar pada pemahaman pribadi dan ra'yu semata yang tak sesuai syariat; **haram**." } },
    { t: { ar: "ما حكم التفسير بالرأي المذموم؟", id: "Apa hukum tafsir dengan ra'yu yang tercela?" }, j: { ar: "حرام لا يجوز؛ لأنه قول على الله بغير علم، قال تعالى: {وَأَن تَقُولُوا عَلَى اللَّهِ مَا لَا تَعْلَمُونَ}، وروي حديث: «من قال في القرآن برأيه فأصاب فقد أخطأ»، وشدد السلف في تفسير القرآن بغير علم.", id: "**Haram**, karena berkata atas nama Allah tanpa ilmu ({وَأَن تَقُولُوا عَلَى اللَّهِ مَا لَا تَعْلَمُونَ}). Diriwayatkan pula hadits \"siapa berbicara tentang Al-Qur'an dengan ra'yunya lalu benar, sungguh ia salah\" (gharib menurut At-Tirmidzi), dan salaf bersikap keras terhadap tafsir tanpa ilmu." } }
  ]
});
