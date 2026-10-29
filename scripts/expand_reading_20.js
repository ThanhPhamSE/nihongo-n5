const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/reading.ts');

const MORE_READING = [
  {
    id: 'read-6',
    title: 'Bài đọc 6: 夏休みの絵葉書 (Bưu thiếp kỳ nghỉ hè)',
    level: 'N5 Bưu thiếp',
    passageJa: `田中先生、お元気ですか。\nわたしは 今、沖縄の 海の 近くの ホテルに います。毎日 天気が よくて、海は とても 青くて きれいです。\n昨日は 船に 乗って、きれいな 魚を たくさん 見ました。沖縄の 料理も おいしいです。\n東京は まだ 暑いですか。先生も お体に 気をつけてください。\nまた 来週 学校で お会いしましょう。\n８月１５日　アンより`,
    passageKana: `たなかせんせい、おげんきですか。\nわたしは いま、おきなわの うみの ちかくの ほてるに います。まいにち てんきが よくて、うみは とても あおくて きれいです。\nきのうは ふねに のって、きれいな さかなを たくさん みました。おきなわの りょうりも おいしいです。\nとうきょうは まだ あついですか。せんせいも おからだに きをつけてください。\nまた らいしゅう がっこうで おあいしましょう。\nはちがつじゅうごにち　あんより`,
    passageVi: `Kính gửi thầy Tanaka, thầy có khỏe không ạ?\nEm hiện đang ở khách sạn gần bờ biển Okinawa. Hàng ngày thời tiết rất đẹp, biển xanh và trong vắt.\nHôm qua em đã đi thuyền và ngắm nhìn rất nhiều đàn cá sặc sỡ. Món ăn Okinawa cũng rất ngon miệng ạ.\nỞ Tokyo trời còn nóng không ạ? Thầy hãy nhớ giữ gìn sức khỏe nhé.\nHẹn gặp lại thầy vào tuần sau ở trường ạ.\nNgày 15 tháng 8 - Em An`,
    vocabHints: [
      { word: '絵葉書', reading: 'えはがき', meaning: 'Bưu thiếp có tranh ảnh' },
      { word: '沖縄', reading: 'おきなわ', meaning: 'Tỉnh Okinawa' },
      { word: '青い', reading: 'あおい', meaning: 'Màu xanh nước biển' },
      { word: 'お体に気をつけて', reading: 'おからだにきをつけて', meaning: 'Giữ gìn sức khỏe' },
    ],
    questions: [
      {
        question: 'アンさんは 今 どこに いますか。 (Bạn An hiện đang ở đâu?)',
        options: ['東京の 学校', '沖縄の ホテル', 'ベトナムの 家', '京都の お寺'],
        correctIndex: 1,
        explanation: 'Thư viết: "わたしは 今、沖縄の 海の 近くの ホテルに います" (Hiện tôi đang ở khách sạn gần biển Okinawa).',
      },
      {
        question: '昨日は 何を しましたか。 (Hôm qua bạn An đã làm gì?)',
        options: ['宿題を しました。', '船に 乗って 魚を 見ました。', '山に 登りました。', '先生に 会いました。'],
        correctIndex: 1,
        explanation: 'Thư kể: "昨日は 船に 乗って、きれいな 魚を たくさん 見ました" (Hôm qua tôi đi tàu ngắm cá).',
      },
    ],
  },
  {
    id: 'read-7',
    title: 'Bài đọc 7: ごみの出し方 (Thông báo quy định vứt rác chung cư)',
    level: 'N5 Thông báo đời sống',
    passageJa: `【アパートの 住人の みなさんへ】\nごみは 朝 ８時までに、１階の ごみ置き場に 出してください。\n・燃えるごみ（生ごみ・紙など）：火曜日と 金曜日\n・燃えないごみ（ビン・缶・ペットボトル）：水曜日\n※ 粗大ごみ（家具や 自転車など）は 捨てる前に 事務所に 連絡してください。\nルールを 守って、きれいに 使いましょう。`,
    passageKana: `【あぱーとの じゅうにんの みなさんへ】\nごみは あさ はちじまでに、いっかいの ごみおきばに だしてください。\n・もえるごみ（なまごみ・かみなど）：かようびと きんようび\n・もえないごみ（びん・かん・ぺっとぼとる）：すいようび\n※ そだいごみ（かぐや じてんしゃなど）は すてるまえに じむしょに れんらくしてください。\nるーるを まもって、きれいに つかいましょう。`,
    passageVi: `【Gửi toàn thể cư dân tòa chung cư】\nXin vui lòng mang rác ra khu tập kết tầng 1 trước 8 giờ sáng.\n- Rác cháy được (rác thực phẩm thừa, giấy vụn...): Thứ Ba và thứ Sáu\n- Rác không cháy được (chai thủy tinh, lon nhôm, chai nhựa PET): Thứ Tư\n※ Rác cồng kềnh (đồ gỗ nội thất, xe đạp...): Hãy liên hệ văn phòng quản lý trước khi bỏ rác.\nHãy cùng nhau tuân thủ quy tắc để giữ gìn môi trường sống sạch đẹp!`,
    vocabHints: [
      { word: '住人', reading: 'じゅうにん', meaning: 'Cư dân' },
      { word: '燃えるごみ', reading: 'もえるごみ', meaning: 'Rác cháy được' },
      { word: '燃えないごみ', reading: 'もえないごみ', meaning: 'Rác không cháy được' },
      { word: '粗大ごみ', reading: 'そだいごみ', meaning: 'Rác cồng kềnh cỡ lớn' },
    ],
    questions: [
      {
        question: 'ペットボトルは 何曜日に 出しますか。 (Chai nhựa bỏ rác vào thứ mấy?)',
        options: ['火曜日', '水曜日', '金曜日', '土曜日'],
        correctIndex: 1,
        explanation: 'Thông báo quy định: "燃えないごみ（ビン・缶・ペットボトル）：水曜日".',
      },
      {
        question: 'ごみは 何時までに 出さなければなりませんか。 (Phải bỏ rác trước mấy giờ?)',
        options: ['朝７時', '朝８時', '午前１０時', '夜８時'],
        correctIndex: 1,
        explanation: 'Quy định viết: "ごみは 朝 ８時までに 出してください".',
      },
    ],
  },
  {
    id: 'read-8',
    title: 'Bài đọc 8: 私の好きな猫「ミケ」 (Chú mèo cưng Mike của tôi)',
    level: 'N5 Câu chuyện đời thường',
    passageJa: `私の 家には 猫が １匹 います。名前は「ミケ」です。白い 体に 茶色と 黒の 模様が あります。\nミケは とても おとなしくて、あまり 鳴きません。昼間は いつも 暖かい 窓の そばで 寝ています。\nでも、私が 学校から 帰ると、玄関まで 走って 迎えに 来ます。\n魚が 大好きで、缶詰の 魚を あげると、とても 喜びます。ミケは 私の 大切な 家族です。`,
    passageKana: `わたしの いえには ねこが いっぴき います。なまえは「みけ」です。しろい からだに ちゃいろと くろの もようが あります。\nみけは とても おとなしくて、あまり なきません。ひるまは いつも あたたかい まどの そばで ねています。\nでも、わたしが がっこうから かえると、げんかんまで はしって むかえに きます。\nさかなが だいすきで、かんづめの さかなを あげると、とても よろこびます。みけは わたしの たいせつな かぞくです。`,
    passageVi: `Nhà tôi có nuôi một chú mèo. Tên của nó là "Mike". Thân màu trắng với những khoang lông màu nâu và đen.\nMike rất ngoan và hiếm khi kêu to. Ban ngày nó luôn nằm ngủ bên khung cửa sổ ấm áp.\nThế nhưng cứ khi tôi đi học về là nó chạy ngay ra cửa chính đón tôi.\nNó rất thích ăn cá, hễ cho ăn cá hộp là nó mừng rỡ vô cùng. Mike là một thành viên gia đình quý giá của tôi.`,
    vocabHints: [
      { word: '匹', reading: 'ひき / ぴき', meaning: 'Con (từ đếm con vật nhỏ)' },
      { word: '模様', reading: 'もよう', meaning: 'Hoa văn, vằn' },
      { word: '玄関', reading: 'げんかん', meaning: 'Cửa ra vào, tiền sảnh' },
      { word: '喜びます', reading: 'よろこびます', meaning: 'Vui mừng, sung sướng' },
    ],
    questions: [
      {
        question: 'ミケは 昼間 どこで 何を していますか。 (Ban ngày chú mèo Mike làm gì ở đâu?)',
        options: ['庭で 走っています。', '暖かい 窓の そばで 寝ています。', '台所で 魚を 食べています。', '公園で 遊んでいます。'],
        correctIndex: 1,
        explanation: 'Đoạn văn viết: "昼間は いつも 暖かい 窓の そばで 寝ています".',
      },
      {
        question: 'ミケは 何が いちばん 好きですか。 (Mèo Mike thích nhất cái gì?)',
        options: ['肉', '魚', 'パン', '野菜'],
        correctIndex: 1,
        explanation: 'Tác giả viết: "魚が 大好きで、缶詰の 魚を あげると、とても 喜びます".',
      },
    ],
  },
  {
    id: 'read-9',
    title: 'Bài đọc 9: スポーツジムの利用案内 (Bảng quy định phòng tập thể hình)',
    level: 'N5 Bảng hướng dẫn',
    passageJa: `【フィットネスジム・サンライズ】\n営業時間：午前１０時 ～ 午後１１時（最終受付 午後１０時半）\n料金：一般 １回 ８００円（月会費 ６０００円）\n【お願い】\n１．室内用の 運動靴を 必ず はいてください。外靴での 利用は できません。\n２．トレーニングの 後は、使った マシンを タオルで 拭いてください。\n３．シャワールームは 無料で 利用できます。石鹸と シャンプーは 自分で 持ってきてください。`,
    passageKana: `【ふぃっとねすじむ・さんらいず】\nえいぎょうじかん：ごぜんじゅうじ ～ ごごじゅういちじ（さいしゅううけつけ ごごじゅうじはん）\nりょうきん：いっぱん いっかい はっぴゃくえん（げっかいひ ろくせんえん）\n【おねがい】\n１．しつないようの うんどうぐつを かならず はいてください。そとづつでの りようは できません。\n２．とれーにんぐの あとは、つかった ましんを たおるで ふいてください。\n３．しゃわーるーむは むりょうで りようできます。せっけんと しゃんぷーは じぶんで もってきてください。`,
    passageVi: `【Phòng tập thể hình Thể thao Sunrise】\nGiờ mở cửa: 10:00 sáng ~ 11:00 đêm (Nhận khách lần cuối: 10:30 tối)\nHọc phí: Khách vãng lai 800 Yên/lượt (Vé tháng: 6.000 Yên/tháng)\n【Quy định xin lưu ý】\n1. Bắt buộc phải mang giày thể thao chuyên dùng trong nhà. Tuyệt đối không mang giày dép đi ngoài đường.\n2. Sau khi tập luyện, xin hãy dùng khăn lau sạch các máy tập vừa dùng.\n3. Phòng tắm vòi sen được sử dụng miễn phí. Xin quý khách vui lòng tự mang xà phòng và dầu gội đầu.`,
    vocabHints: [
      { word: '営業時間', reading: 'えいぎょうじかん', meaning: 'Giờ mở cửa kinh doanh' },
      { word: '運動靴', reading: 'うんどうぐつ', meaning: 'Giày thể thao' },
      { word: '拭きます', reading: 'ふきます', meaning: 'Lau chùi' },
      { word: '無料', reading: 'むりょう', meaning: 'Miễn phí' },
    ],
    questions: [
      {
        question: 'ジムに 何を 持って行かなければなりませんか。 (Bắt buộc phải mang món đồ gì vào phòng tập?)',
        options: ['外靴', '室内用の 運動靴', '自分の マシン', 'シャワー'],
        correctIndex: 1,
        explanation: 'Quy tắc 1: "室内用の 運動靴を 必ず はいてください" (Nhất định phải mang giày thể thao trong nhà).',
      },
      {
        question: 'シャワーを 使うとき、お金が かかりますか。 (Dùng phòng tắm có mất tiền không?)',
        options: ['はい、８００円 かかります。', 'はい、６０００円 かかります。', 'いいえ、無料で 使えます。', '使えません。'],
        correctIndex: 2,
        explanation: 'Quy tắc 3 viết: "シャワールームは 無料で 利用できます" (Phòng tắm được dùng miễn phí).',
      },
    ],
  },
  {
    id: 'read-10',
    title: 'Bài đọc 10: 引っ越しパーティーの招待メール (Email mời tiệc tân gia)',
    level: 'N5 Thư điện tử',
    passageJa: `クラスの みなさん\nこんにちは。キムです。\n先週、新しい アパートに 引っ越しました。\n今週の 土曜日に、私の 部屋で 引っ越しパーティーを します。\n時間：５月２０日（土）午後６時から\n場所：さくらハイツ ２０２号室（駅から 歩いて ３分）\nおいしい 韓国料理を たくさん 作ります。飲み物や お菓子は 好きな ものを 持ってきてください。\n来られる 人は、木曜日までに 返事を くださいね。\n楽しみに 待っています！`,
    passageKana: `くらすの みなさん\nこんにちは。きむです。\nせんしゅう、あたらしい あぱーとに ひっこしました。\nこんしゅうの どようびに、わたしの へやで ひっこしぱーてぃーを します。\nじかん：ごがつはつか（ど）ごごろくじから\nばしょ：さくらはいつ にぜろにごうしつ（えきから あるいて さんぷん）\nおいしい かんこくりょうりを たくさん つくります。のみものや おかしは すきな ものを もってきてください。\nこられる ひとは、もくようびまでに へんじを くださいね。\nたのしみに まっています！`,
    passageVi: `Gửi tất cả các bạn trong lớp,\nXin chào mọi người, mình là Kim đây.\nTuần trước mình đã chuyển sang một căn hộ mới.\nThứ Bảy tuần này mình tổ chức tiệc tân gia tại phòng mình nhé.\nThời gian: Ngày 20 tháng 5 (Thứ Bảy) từ 6 giờ tối.\nĐịa điểm: Chung cư Sakura Heights phòng 202 (Đi bộ từ ga mất 3 phút).\nMình sẽ nấu thật nhiều món ăn Hàn Quốc ngon miệng. Đồ uống và bánh kẹo thì các bạn cứ tự mang món mình thích đến nha.\nAi tham gia được xin vui lòng phản hồi trước ngày thứ Năm nhé.\nRất mong chờ được gặp mọi người!`,
    vocabHints: [
      { word: '引っ越し', reading: 'ひっこし', meaning: 'Chuyển nhà' },
      { word: '招待', reading: 'しょうたい', meaning: 'Mời, lời mời' },
      { word: '返事', reading: 'へんじ', meaning: 'Hồi âm, câu trả lời' },
    ],
    questions: [
      {
        question: 'パーティーは いつ、何時から 始まりますか。 (Tiệc bắt đầu khi nào và từ mấy giờ?)',
        options: ['５月２０日（土）午後６時', '５月２０日（土）午前１０時', '木曜日の 午後６時', '先週の 土曜日'],
        correctIndex: 0,
        explanation: 'Email ghi rõ: "５月２０日（土）午後６時から" (Ngày 20/5 thứ Bảy từ 6 giờ chiều).',
      },
      {
        question: '参加する 人は いつまでに 返事を しますか。 (Người tham dự cần trả lời trước khi nào?)',
        options: ['火曜日まで', '木曜日まで', '金曜日まで', '土曜日まで'],
        correctIndex: 1,
        explanation: 'Email yêu cầu: "来られる 人は、木曜日までに 返事を くださいね".',
      },
    ],
  },
  {
    id: 'read-11',
    title: 'Bài đọc 11: 日本の四季と花 (Bốn mùa và các loài hoa tại Nhật)',
    level: 'N5 Văn hóa đời sống',
    passageJa: `日本には 四つの 季節が あります。春、夏、秋、冬です。それぞれの 季節に きれいな 花が 咲きます。\n春は 桜です。４月に なると、みんなで 公園へ 行って、桜の 下で お花見を します。\n夏は ひまわりです。太陽の ように 明るい 黄色い 花で、見るだけで 元気配になります。\n秋は 紅葉です。木々の 葉が 赤や 黄色に 変わって、山が とても きれいです。\n冬は 雪が 降って 白い 世界に なりますが、梅の 花が 咲き始めます。`,
    passageKana: `にほんには よっつの きせつが あります。はる、なつ、あき、ふゆです。それぞれの きせつに きれいな はなが さきます。\nはるは さくらです。しがつに なると、みんなで こうえんへ いって、さくらの したで おはなみを します。\nなつは ひまわりです。たいようの ように あかるい きいろい はなで、みるだけで げんきになります。\nあきは こうよう（もみじ）です。きぎの はが あかや きいろに かわって、やまが とても きれいです。\nふゆは ゆきが ふって しろい せかいに なりますが、うめの はなが さきはじめます。`,
    passageVi: `Nhật Bản có 4 mùa rõ rệt: Xuân, Hạ, Thu, Đông. Mỗi mùa lại có những loài hoa tươi đẹp đua nở.\nMùa xuân là mùa hoa anh đào Sakura. Cứ đến tháng 4, mọi người lại cùng nhau ra công viên tổ chức ngắm hoa dưới bóng cây.\nMùa hè là hoa hướng dương Himawari. Bông hoa màu vàng rực rỡ như ánh mặt trời, chỉ cần nhìn thấy là cảm thấy tràn đầy năng lượng.\nMùa thu là mùa lá đỏ Koyo. Lá cây chuyển dần sang sắc đỏ và vàng khiến núi đồi đẹp như tranh vẽ.\nMùa đông tuyết rơi biến vạn vật thành thế giới trắng xóa, nhưng hoa mận Ume đã bắt đầu chớm nở.`,
    vocabHints: [
      { word: '四季', reading: 'しき', meaning: 'Bốn mùa' },
      { word: 'ひまわり', reading: 'ひまわり', meaning: 'Hoa hướng dương' },
      { word: '紅葉', reading: 'こうよう / もみじ', meaning: 'Lá đỏ mùa thu' },
      { word: '梅', reading: 'うめ', meaning: 'Hoa mận' },
    ],
    questions: [
      {
        question: '春の 代表的な 花は 何ですか。 (Loài hoa tiêu biểu của mùa xuân là gì?)',
        options: ['ひまわり (Hoa hướng dương)', '桜 (Hoa anh đào)', '梅 (Hoa mận)', 'バラ (Hoa hồng)'],
        correctIndex: 1,
        explanation: 'Bài viết khẳng định: "春は 桜です" (Mùa xuân là hoa anh đào).',
      },
      {
        question: '秋に 山は どのように なりますか。 (Mùa thu núi non thay đổi như thế nào?)',
        options: [
          '雪で 白く なります。',
          '葉が 赤や 黄色に 変わって、とても きれいです。',
          '花が 全部 枯れます。',
          '海のように 青く なります。',
        ],
        correctIndex: 1,
        explanation: 'Đoạn văn viết: "木々の 葉が 赤や 黄色に 変わって、山が とても きれいです".',
      },
    ],
  },
  {
    id: 'read-12',
    title: 'Bài đọc 12: ファミレスのランチメニュー (Thực đơn cơm trưa quán Family Restaurant)',
    level: 'N5 Menu ẩm thực',
    passageJa: `【レストラン・トマトの 平日限定 ランチセット】\n提供時間：平日 午前１１時 ～ 午後３時（土日祝日は ありません）\nＡセット：ハンバーグステーキ ＋ ライス ＋ スープ（８５０円）\nＢセット：トマトパスタ ＋ ミニサラダ ＋ スープ（７８０円）\nＣセット：チキン南蛮 ＋ ライス ＋ みそ汁（８２０円）\n※ ランチを ご注文の お客様は、＋１５0円で ドリンクバーが 付けられます。\nライスは 大盛りが 無料です。ご注文時に 店員に お伝えください。`,
    passageKana: `【れすとらん・とまとの へいじつげんてい らんちせっと】\nていきょうじかん：へいじつ ごぜんじゅういちじ ～ ごごさんじ（どにちしゅくじつは ありません）\nえーせっと：はんばーぐすてーき ＋ らいす ＋ すーぷ（はっぴゃくごじゅうえん）\nびーせっと：とまとぱすた ＋ みにさらだ ＋ すーぷ（ななひゃくはちじゅうえん）\nしーせっと：ちきんなんばん ＋ らいす ＋ みそしる（はっぴゃくにじゅうえん）\n※ らんちを ごちゅうもんの おきゃくさまは、＋ひゃくごじゅうえんで どりんくばーが つけられます。\nらいすは おおもりが むりょうです。ごちゅうもんじに てんいんに おつたえください。`,
    passageVi: `【Set Cơm Trưa Ngày Thường tại Nhà hàng Family Tomato】\nKhung giờ phục vụ: 11:00 trưa ~ 3:00 chiều các ngày thường (Không áp dụng Thứ Bảy, CN và ngày lễ)\nSet A: Bít tết thịt băm Hambagu + Cơm + Canh súp (850 Yên)\nSet B: Mì Ý sốt cà chua + Salad nhỏ + Canh súp (780 Yên)\nSet C: Gà sốt Nanban + Cơm + Canh miso (820 Yên)\n※ Quý khách gọi set cơm trưa chỉ cần thêm 150 Yên để dùng quầy đồ uống Drink Bar không giới hạn.\nCơm xới nhiều (Oomori) hoàn toàn miễn phí. Vui lòng báo nhân viên khi gọi món.`,
    vocabHints: [
      { word: '平日限定', reading: 'へいじつげんてい', meaning: 'Chỉ giới hạn ngày thường' },
      { word: 'ドリンクバー', reading: 'どりんくばー', meaning: 'Quầy nước uống tự phục vụ không giới hạn' },
      { word: '大盛り', reading: 'おおもり', meaning: 'Suất cơm xới nhiều' },
    ],
    questions: [
      {
        question: '日曜日にも この ランチセットを 食べられますか。 (Chủ Nhật có ăn được set cơm trưa này không?)',
        options: ['はい、午後３時まで 食べられます。', 'いいえ、土日祝日は ありません。', 'はい、夜に 食べられます。', '予約すれば 食べられます。'],
        correctIndex: 1,
        explanation: 'Thực đơn ghi chú: "土日祝日は ありません" (Không có vào thứ Bảy, Chủ Nhật và ngày lễ).',
      },
      {
        question: 'ライスの 大盛りは いくらですか。 (Xới cơm suất nhiều thì tốn bao nhiêu tiền?)',
        options: ['無料 (0 Yên)', '１５０円', '７８０円', '８５０円'],
        correctIndex: 0,
        explanation: 'Ghi chú nêu rõ: "ライスは 大盛りが 無料です" (Cơm xới nhiều miễn phí).',
      },
    ],
  },
  {
    id: 'read-13',
    title: 'Bài đọc 13: 長野でのスキー旅行 (Chuyến đi trượt tuyết ở Nagano)',
    level: 'N5 Nhật ký hành trình',
    passageJa: `１月の 連休に、友達と ４人で 長野県へ スキーに 行きました。\n朝 ６時の 新幹線に 乗って、８時半に スキー場に 着きました。周りは 全部 白い 雪で、とても きれいでした。\n私は スキーが 初めてでしたから、最初は 何回も 転びました。でも、友達が 親切に 教えてくれたので、午後には ひとりで 滑れるように なりました。\n滑った 後で、みんなで 温泉に 入りました。体が とても 温まって、気持ちよかったです。最高の 旅行でした。`,
    passageKana: `いちがつの れんきゅうに、ともだちと よにんで ながのけんへ すきーに いきました。\nあさ ろくじの しんかんせんに のって、はちじはんに すきーじょうに つきました。まわりは ぜんぶ しろい ゆきで、とても きれいでした。\nわたしは すきーが はじめてでしたから、さいしょは なんかいも ころびました。でも、ともだちが しんせつに おしえてくれたので、ごごには ひとりで すべれるように なりました。\nすべった あとで、みんなで おんせんに はいりました。からだが とても あたたまって、きもちよかったです。さいこうの りょこうでした。`,
    passageVi: `Vào kỳ nghỉ lễ tháng 1, tôi cùng 3 người bạn đã đến tỉnh Nagano để trượt tuyết.\nChúng tôi lên chuyến tàu siêu tốc lúc 6 giờ sáng và đến khu trượt tuyết lúc 8 giờ rưỡi. Xung quanh bốn bề đều là tuyết trắng tinh khôi, đẹp vô cùng.\nVì đây là lần đầu tiên tôi đi trượt tuyết nên lúc đầu tôi bị ngã liên tục. Nhưng nhờ bạn bè tận tình chỉ bảo, đến chiều tôi đã có thể tự mình trượt được.\nSau khi trượt tuyết xong, cả nhóm rủ nhau đi tắm suối nước nóng Onsen. Cơ thể ấm dần lên, sảng khoái tuyệt vời. Đó quả thực là một chuyến đi tuyệt nhất!`,
    vocabHints: [
      { word: 'スキー場', reading: 'すきーじょう', meaning: 'Bãi trượt tuyết' },
      { word: '転びます', reading: 'ころびます', meaning: 'Ngã, té nhào' },
      { word: '滑ります', reading: 'すべります', meaning: 'Trượt (tuyết)' },
      { word: '温泉', reading: 'おんせん', meaning: 'Suối nước nóng' },
    ],
    questions: [
      {
        question: 'この人は なぜ 最初 何回も 転びましたか。 (Tại sao ban đầu người này bị ngã nhiều lần?)',
        options: ['スキーが 初めてでしたから。', '雪が なかったから。', '靴が 小さかったから。', '友達が いなかったから。'],
        correctIndex: 0,
        explanation: 'Bài viết nêu nguyên nhân: "私は スキーが 初めてでしたから、最初は 何回も 転びました".',
      },
      {
        question: 'スキーを 滑った あとで 何を しましたか。 (Sau khi trượt tuyết xong họ đã làm gì?)',
        options: ['新幹線に 乗って すぐ 帰りました。', '温泉に 入りました。', 'もう一度 映画を 見ました。', '仕事を しました。'],
        correctIndex: 1,
        explanation: 'Bài viết: "滑った 後で、みんなで 温泉に 入りました".',
      },
    ],
  },
  {
    id: 'read-14',
    title: 'Bài đọc 14: 日本のバスの乗り方 (Cách đi xe buýt công cộng ở Nhật)',
    level: 'N5 Cẩm nang sinh hoạt',
    passageJa: `日本の バスは、後ろの ドアから 乗って、前の ドアから 降ります。\n乗る ときに、入口の 機械から「整理券」を 取るか、ICカード（Suicaなど）を タッチします。\n降りる バス停の 名前が アナウンスされたら、壁や 手すりの ボタンを 押してください。\nバスが 完全に 止まってから、席を 立ってください。\n運賃は、前の 運賃箱に 整理券と お金を 入れるか、ICカードを もう一度 タッチして 支払います。`,
    passageKana: `にほんの ばすは、うしろの どあから のって、まえの どあから おります。\nのる ときに、いりぐちの きかいから「せいりけん」を とるか、あいしーかーど（すいかなど）を たっちします。\nおりる ばすていの なまえが あなうんすされたら、かべや てすりの ぼたんを おしてください。\nばすが かんぜんに とまってから、せきを たってください。\nうんちんは、まえの うんちんばこに せいりけんと おかねを いれるか、あいしーかーどを もういちど たっちして しはらいます。`,
    passageVi: `Xe buýt ở Nhật Bản thường lên ở cửa sau và xuống ở cửa trước.\nKhi bước lên xe, bạn rút "vé thứ tự số ghế Seiriken" từ máy ở cửa, hoặc chạm thẻ IC giao thông (như Suica/Pasmo).\nKhi nghe thông báo tên trạm bạn muốn xuống, hãy bấm nút chuông báo trên vách hoặc thanh vịn.\nChờ xe buýt dừng hẳn lại rồi mới đứng dậy khỏi ghế.\nTiền vé thanh toán bằng cách bỏ vé thứ tự kèm tiền mặt vào hộp tiền phía trước bác tài, hoặc chạm thẻ IC một lần nữa.`,
    vocabHints: [
      { word: '整理券', reading: 'せいりけん', meaning: 'Vé đánh số thứ tự trạm lên xe' },
      { word: '運賃', reading: 'うんちん', meaning: 'Tiền vé cước tàu xe' },
      { word: '運賃箱', reading: 'うんちんばこ', meaning: 'Hộp thu tiền vé' },
      { word: '手すり', reading: 'てすり', meaning: 'Tay vịn' },
    ],
    questions: [
      {
        question: 'バスには どの ドアから 乗りますか。 (Lên xe buýt từ cửa nào?)',
        options: ['前の ドア', '後ろの ドア', 'どちらからでも いい', '窓から'],
        correctIndex: 1,
        explanation: 'Quy định viết: "後ろの ドアから 乗って、前の ドアから 降ります".',
      },
      {
        question: 'いつ 席を 立ちますか。 (Khi nào thì nên đứng dậy khỏi ghế?)',
        options: ['バスが 走っている とき', 'ボタンを 押した すぐ あと', 'バスが 完全に 止まってから', '前の 人が 降りた とき'],
        correctIndex: 2,
        explanation: 'Lưu ý an toàn: "バスが 完全に 止まってから、席を 立ってください" (Xe dừng hẳn mới đứng dậy).',
      },
    ],
  },
  {
    id: 'read-15',
    title: 'Bài đọc 15: 机の上のメモ (Lời nhắn để lại trên bàn làm việc)',
    level: 'N5 Ghi chú công việc',
    passageJa: `佐藤さんへ\n午後３時半頃、ABC商事の 山田様から お電話が ありました。\n来週 月曜日の 会議の 資料について、確認したいとの ことです。\n「また 明日の 朝 ９時半に こちらから お電話します」と おっしゃっていました。\nなお、折り返しの お電話は 不要との ことです。\nよろしく お願いいたします。\n１０月５日　１６：００　受付　小林`,
    passageKana: `さとうさんへ\nごごさんじはんごろ、えーびーしーしょうじの やまださまから おでんわが ありました。\nらいしゅう げつようびの かいぎの しりょうについて、かくにんしたいとの ことです。\n「また あしたの あさ きゅうじはんに こちらから おでんわします」と おっしゃっていました。\nなお、おりかえしの おでんわは ふようとの ことです。\nよろしく おねがいいたします。\nじゅうがついつか　じゅうろくじ　うけつけ　こばやし`,
    passageVi: `Gửi anh Sato,\nKhoảng 3 giờ rưỡi chiều, ông Yamada bên công ty thương mại ABC có gọi điện đến cho anh.\nÔng ấy muốn xác nhận lại tài liệu cho cuộc họp vào thứ Hai tuần sau.\nÔng nhắn lại rằng: "Sáng mai lúc 9 giờ rưỡi tôi sẽ chủ động gọi điện lại sau".\nNgoài ra ông ấy bảo anh không cần phải gọi điện lại đâu ạ.\nTrân trọng báo tin anh.\nNgày 5 tháng 10, lúc 16:00 - Tiếp tân Kobayashi`,
    vocabHints: [
      { word: '確認', reading: 'かくにん', meaning: 'Xác nhận, kiểm tra lại' },
      { word: '折り返し', reading: 'おりかえし', meaning: 'Gọi điện thoại lại' },
      { word: '不要', reading: 'ふよう', meaning: 'Không cần thiết' },
    ],
    questions: [
      {
        question: '山田様は いつ また 電話を しますか。 (Ông Yamada sẽ gọi điện lại khi nào?)',
        options: ['今日の 夕方', '明日の 朝 ９時半', '来週の 月曜日', '今夜 ８時'],
        correctIndex: 1,
        explanation: 'Nội dung lời nhắn: "また 明日の 朝 ９時半に こちらから お電話します".',
      },
      {
        question: '佐藤さんは 山田様に 電話を かけなければなりませんか。 (Anh Sato có cần gọi điện lại cho ông Yamada không?)',
        options: ['はい、今すぐ かけます。', 'はい、明日の 朝 かけます。', 'いいえ、電話は 不要です。', 'わかりません。'],
        correctIndex: 2,
        explanation: 'Lời nhắn ghi rõ: "折り返しの お電話は 不要との ことです" (Không cần gọi lại).',
      },
    ],
  },
  {
    id: 'read-16',
    title: 'Bài đọc 16: うさぎと かめ (Truyện ngụ ngôn Rùa và Thỏ)',
    level: 'N5 Truyện ngụ ngôn',
    passageJa: `昔々、足の 速い うさぎと、歩くのが 遅い かめが いました。\nうさぎは いつも「かめさん、君は 本当に 遅いね」と 笑っていました。\nある日、かめは「じゃ、山の てっぺんまで かけっこを しましょう」と 言いました。\n走りはじめて すぐ、うさぎは かめを ずっと 後ろに 残しました。\nうさぎは「かめは まだまだ 来ない。ここで 少し 昼寝を しよう」と 木の 下で 眠ってしまいました。\nその 間に、かめは 休まないで 一歩一歩 歩き続けました。\nうさぎが 目を 覚ました とき、かめは もう ゴールに 着いていました。`,
    passageKana: `むかしむかし、あしの はやい うさぎと、あるくのが おそい かめが いました。\nうさぎは いつも「かめさん、きみは ほんとうに おそいね」と わらっていました。\nあるひ、かめは「じゃ、やまの てっぺんまで かけっこを しましょう」と いいました。\n走りはじめて すぐ、うさぎは かめを ずっと うしろに のこしました。\nうさぎは「かめは まだまだ こない。ここで すこし ひるねを しよう」と きの したで ねむってしまいました。\nその あいだに、かめは やすまないで いっぽいっぱい あるきつづけました。\nうさぎが めを さました とき、かめは もう ごーるに ついていました。`,
    passageVi: `Ngày xửa ngày xưa, có một chú thỏ chạy rất nhanh và một chú rùa đi đứng rất chậm chạp.\nThỏ lúc nào cũng chế giễu: "Bác rùa ơi, bác đi chậm như sên vậy ha ha".\nMột hôm, rùa bảo: "Thế thì chúng ta hãy cùng chạy thi lên tận đỉnh núi xem sao".\nVừa xuất phát, thỏ đã bỏ xa rùa lại tít đằng sau.\nThỏ nghĩ bụng: "Rùa còn lâu mới tới nơi. Tranh thủ ngủ trưa một giấc dưới gốc cây này đã".\nTrong lúc đó, rùa không hề nghỉ ngơi mà cứ kiên trì từng bước một tiến lên.\nĐến khi thỏ giật mình tỉnh giấc thì rùa đã cán đích từ lâu rồi!`,
    vocabHints: [
      { word: 'かけっこ', reading: 'かけっこ', meaning: 'Chạy đua' },
      { word: '昼寝', reading: 'ひるね', meaning: 'Ngủ trưa' },
      { word: '目を覚ます', reading: 'めをさます', meaning: 'Tỉnh giấc, thức dậy' },
      { word: 'ゴール', reading: 'ごーる', meaning: 'Vạch đích' },
    ],
    questions: [
      {
        question: 'うさぎは なぜ 木の 下で 眠りましたか。 (Tại sao thỏ lại lăn ra ngủ dưới gốc cây?)',
        options: [
          '病気配に なったから。',
          'かめは まだまだ 来ないと 思ったから。',
          '走るのが 嫌いに なったから。',
          '夜に なったから。',
        ],
        correctIndex: 1,
        explanation: 'Thỏ chủ quan: "かめは まだまだ 来ない。ここで 少し 昼寝を しよう と 眠ってしまいました".',
      },
      {
        question: 'かけっこに 勝ったのは だれですか。 (Ai là người chiến thắng cuộc đua?)',
        options: ['うさぎ (Thỏ)', 'かめ (Rùa)', 'ふたりとも 引き分け', '鳥 (Chim)'],
        correctIndex: 1,
        explanation: 'Rùa kiên trì về đích trước: "うさぎが 目を 覚ました とき、かめは もう ゴールに 着いていました".',
      },
    ],
  },
  {
    id: 'read-17',
    title: 'Bài đọc 17: 券売機での切符の買い方 (Cách mua vé tàu tại máy bán vé)',
    level: 'N5 Chỉ dẫn giao thông',
    passageJa: `日本の 駅で 電車の 切符を 買う 方法です。\n１．券売機の 上に ある 路線図を 見て、行きたい 駅までの 運賃を 調べます。\n２．券売機の 画面の「きっぷ購入」ボタンを 押します。\n３．お金（硬貨または 紙幣）を 券売機に 入れます。\n４．画面に 表示された 金額の ボタンを 押します。（例：１７０円）\n５．切符と お釣り、レシートを 忘れずに 取ります。\n※ 困った ときは、「呼び出し」ボタンを 押すと、駅員さんが 来て 教えてくれます。`,
    passageKana: `にほんの えきで でんしゃの きっぷを かう ほうほうです。\n１．けんばいきの うえに ある ろせんずを みて、いきたい えきまでの うんちんを しらべます。\n２．けんばいきの がめんの「きっぷこうにゅう」ぼたんを おします。\n３．おかね（こうかまたは しへい）を けんばいきに いれます。\n４．がめんに ひょうじされた きんがくの ぼたんを おします。（れい：ひゃくななじゅうえん）\n５．きっぷと おつり、れしーとを わすれずに とります。\n※ こまった ときは、「よびだし」ぼたんを おすと、えきいんさんが きて おしえてくれます。`,
    passageVi: `Cách mua vé tàu điện tại nhà ga Nhật Bản:\n1. Quan sát bản đồ lộ trình tàu phía trên máy bán vé để tra cứu giá tiền đến ga bạn muốn đi.\n2. Bấm vào nút "Mua vé (きっぷ購入)" trên màn hình máy bán vé.\n3. Nhét tiền mặt (tiền xu hoặc tiền giấy) vào khe nhận tiền của máy.\n4. Bấm vào nút hiển thị số tiền tương ứng với ga đến của bạn (ví dụ: 170 Yên).\n5. Lấy vé, tiền thừa và hóa đơn in ra, đừng bỏ quên nhé!\n※ Khi gặp khó khăn, bạn chỉ cần bấm nút "Gọi nhân viên (呼び出し)", nhân viên ga sẽ xuất hiện hướng dẫn ngay.`,
    vocabHints: [
      { word: '券売機', reading: 'けんばいき', meaning: 'Máy bán vé tự động' },
      { word: '路線図', reading: 'ろせんず', meaning: 'Bản đồ tuyến đường' },
      { word: '硬貨', reading: 'こうか', meaning: 'Tiền xu' },
      { word: '紙幣', reading: 'しへい', meaning: 'Tiền giấy' },
    ],
    questions: [
      {
        question: '最初、何を 見て 運賃を 調べますか。 (Đầu tiên quan sát cái gì để tra cứu giá vé?)',
        options: ['駅員の 顔', '券売機の 上の 路線図', '自分の 財布', '電車の 窓'],
        correctIndex: 1,
        explanation: 'Bước 1: "券売機の 上に ある 路線図を 見て、行きたい 駅までの 運賃を 調べます".',
      },
      {
        question: '使い方が わからない とき、どうしますか。 (Khi không biết cách dùng thì phải làm sao?)',
        options: ['家に 帰ります。', '「呼び出し」ボタンを 押して 駅員に 聞きます。', 'お金を たくさん 入れます。', '電車に 乗ってしまいます。'],
        correctIndex: 1,
        explanation: 'Ghi chú: "困った ときは、「呼び出し」ボタンを 押すと、駅員さんが 来て 教えてくれます".',
      },
    ],
  },
  {
    id: 'read-18',
    title: 'Bài đọc 18: お茶の淹れ方 (Nghệ thuật pha trà xanh Nhật Bản)',
    level: 'N5 Văn hóa ẩm thực',
    passageJa: `日本茶（煎茶）を おいしく 淹れる コツを 紹介します。\nまず、お湯を 沸かします。でも、熱湯を すぐ 急須に 入れては いけません。\nお湯を 一度 湯飲みに 注いで、少し 冷まします。だいたい ７０度から ８０度が ちょうど いいです。\n次に、急須に 茶葉を 大さじ１杯（約３グラム）入れます。\nそして、冷ました お湯を 急須に 注いで、１分間 待ちます。\n最後に、濃さが 同じに なるように、少しずつ 交互に 湯飲みに 注ぎます。最後の一滴まで しっかり 注ぐと、とても おいしいです。`,
    passageKana: `にほんちゃ（せんちゃ）を おいしく いれる こつを しょうかいします。\nまず、おゆを わかします。でも、ねっとうを すぐ きゅうすに いれては いけません。\nおゆを いちど ゆのみに そそいで、すこし さまします。だいたい ななじゅうどから はちじゅうどが ちょうど いいです。\nつぎに、きゅうすに ちゃばを おおさじいっぱい（やくさんぐらむ）いれます。\nそして、さました おゆを きゅうすに そそいで、いっぷんかん まちます。\nさいごに、こさが おなじに なるように、すこしずつ こうごに ゆのみに そそぎます。さいごのいってきまで しっかり そそぐと、とても おいしいです。`,
    passageVi: `Giới thiệu bí quyết pha trà xanh Nhật Bản Sencha thơm ngon đúng điệu:\nĐầu tiên, bạn đun sôi nước. Tuy nhiên, tuyệt đối không được đổ ngay nước sôi sùng sục vào ấm trà.\nHãy rót nước sôi qua chén trà một lần để hạ bớt nhiệt độ. Nhiệt độ khoảng 70 đến 80 độ C là vừa vặn nhất.\nTiếp theo, cho 1 thìa canh lá trà (khoảng 3 gam) vào ấm pha trà Kyusu.\nSau đó rót phần nước ấm đã hạ nhiệt vào ấm trà và chờ đúng 1 phút.\nCuối cùng, để độ đậm đà của các chén đồng đều, hãy rót lần lượt từng chút một vào từng chén. Rót đến giọt cuối cùng thì chén trà sẽ thơm ngon đậm vị nhất!`,
    vocabHints: [
      { word: '急須', reading: 'きゅうす', meaning: 'Ấm trà kiểu Nhật' },
      { word: '湯飲み', reading: 'ゆのみ', meaning: 'Tách/chén uống trà' },
      { word: '茶葉', reading: 'ちゃば', meaning: 'Lá trà' },
      { word: '一滴', reading: 'いってき', meaning: 'Một giọt' },
    ],
    questions: [
      {
        question: 'お茶を 淹れる お湯の 温度は 何度くらいが いいですか。 (Nhiệt độ nước thích hợp để pha trà là bao nhiêu độ?)',
        options: ['１００度 (Nước sôi 100 độ)', '７０度から ８０度', '４０度 (Nước ấm 40 độ)', '冷たい 水'],
        correctIndex: 1,
        explanation: 'Bí quyết nêu rõ: "だいたい ７０度から ８０度が ちょうど いいです".',
      },
      {
        question: 'お湯を 急須に 注いでから、何分間 待ちますか。 (Sau khi rót nước vào ấm cần đợi mấy phút?)',
        options: ['１分間', '３分間', '５分間', '１０分間'],
        correctIndex: 0,
        explanation: 'Bài viết: "冷ました お湯を 急須に 注いで、１分間 待ちます".',
      },
    ],
  },
  {
    id: 'read-19',
    title: 'Bài đọc 19: 日本のお正月「おせち料理」 (Ẩm thực Tết Nhật Bản Osechi)',
    level: 'N5 Phong tục truyền thống',
    passageJa: `日本では、お正月の １月１日から ３日までの 間に「おせち料理」を 食べます。\nおせち料理は「重箱」という 特別な 箱に きれいに 並べられています。\n料理の ひとつひとつに 特別な 意味が 込められています。\nたとえば、「黒豆」は 元気に 働けるように という 願いです。\n「数の子」は 子どもが たくさん 生まれるように という 願いです。\nまた、「えび」は 腰が 曲がるまで 長生きできるように という 意味が あります。\nお正月は 料理を 作らないで、ゆっくり 休むために、日持ちする 料理が 多いです。`,
    passageKana: `にほんでは、おしょうがつの いちがつついたちから みっかまでの あいだに「おせちりょうり」を たべます。\nおせちりょうりは「じゅうばこ」という とくべつな はこに きれいに ならべられています。\nりょうりの ひとつひとつに とくべつな いみが こめられています。\nたとえば、「くろまめ」は げんきに はたらけるように という ねがいです。\n「かずのこ」は こどもが たくさん うまれるように という ねがいです。\nまた、「えび」は こしが まがるまで ながいきできるように という いみが あります。\nおしょうがつは りょうりを つくらないで、ゆっくり やすむために、ひもちする りょうりが おおいです。`,
    passageVi: `Ở Nhật Bản, từ mùng 1 đến mùng 3 Tết người dân sẽ thưởng thức món ăn truyền thống Osechi.\nOsechi được xếp vô cùng đẹp mắt trong những chiếc hộp sơn mài nhiều tầng gọi là Jubako.\nMỗi một món ăn bên trong đều mang một ý nghĩa may mắn riêng biệt.\nVí dụ, "Đậu đen Kuromame" tượng trưng cho lời chúc sức khỏe dẻo dai để siêng năng làm việc.\n"Trứng cá trích Kazunoko" mang ý nghĩa con đàn cháu đống.\nCòn "Con tôm Ebi" với lưng cong mang ý nghĩa sống lâu trường thọ tới khi lưng còng.\nĐể trong dịp Tết phụ nữ không phải bận rộn nấu nướng mà được nghỉ ngơi, các món trong Osechi đều có thể bảo quản được nhiều ngày.`,
    vocabHints: [
      { word: '正月', reading: 'しょうがつ', meaning: 'Tết năm mới' },
      { word: '重箱', reading: 'じゅうばこ', meaning: 'Hộp sơn mài nhiều tầng đựng cỗ' },
      { word: '長生き', reading: 'ながいき', meaning: 'Sống lâu trường thọ' },
      { word: '日持ち', reading: 'ひもち', meaning: 'Để lâu không hỏng' },
    ],
    questions: [
      {
        question: '「えび」には どんな 意味が ありますか。 (Món tôm có ý nghĩa biểu trưng gì?)',
        options: ['お金持ちに なる', '長生きできるように', '頭が よくなる', '早く 走れる'],
        correctIndex: 1,
        explanation: 'Ý nghĩa của tôm lưng cong: "「えび」は 腰が 曲がるまで 長生きできるように という 意味が あります".',
      },
      {
        question: 'おせち料理は どんな 箱に 入っていますか。 (Món Osechi được xếp vào loại hộp nào?)',
        options: ['お弁当箱', '「重箱」という 特別な 箱', '紙の 箱', 'プラスチックの コップ'],
        correctIndex: 1,
        explanation: 'Đoạn văn viết: "おせち料理は「重箱」という 特別な 箱に きれいに 並べられています".',
      },
    ],
  },
  {
    id: 'read-20',
    title: 'Bài đọc 20: 私の将来の夢 (Ước mơ tương lai của tôi)',
    level: 'N5 Ước mơ & Dự định',
    passageJa: `私は ベトナムの ダナン出身の 大学生です。大学で ITを 勉強しています。\n子どもの 頃から 日本の アニメや ロボットが 大好きでした。\n今、日本語学校で 毎晩 一生懸命 日本語を 勉強しています。文法や 漢字は 難しいですが、毎日 新しい 言葉を 覚えるのは とても 楽しいです。\n私の 夢は、大学を 卒業した あとで、日本へ 行って ITエンジニアとして 働くことです。\nそして、いつか 日本と ベトナムを 繋ぐ 素晴らしい アプリを 開発したいです。\n夢を 叶えるために、これからも 諦めずに 頑張ります！`,
    passageKana: `わたしは べとなむの だなんしゅっしんの だいがくせいです。だいがくで あいてぃーを べんきょうしています。\nこどもの ころから にほんの あにめや ろぼっとが だいすきでした。\nいま、にほんごがっこうで まいばん いっしょうけんめい にほんごを べんきょうしています。ぶんぽうや かんじは むずかしいですが、まいにち あたらしい ことばを おぼえるのは とても たのしいです。\nわたしの ゆめは、だいがくを そつぎょうした あとで、にほんへ いって あいてぃーえんじにあとして はたらくことです。\nそして、いつか にほんと べとなむを つなぐ すばらしい あぷりを かいはつしたいです。\nゆめを かなえるために、これからも あきらめずに がんばります！`,
    passageVi: `Tôi là một sinh viên đại học đến từ Đà Nẵng, Việt Nam. Ở trường đại học tôi theo học chuyên ngành IT.\nTừ thuở bé tôi đã rất đam mê phim hoạt hình anime và robot của Nhật Bản.\nHiện nay, mỗi tối tôi đều chăm chỉ học tiếng Nhật tại trung tâm. Dẫu ngữ pháp và chữ Kanji rất khó, nhưng mỗi ngày được học thêm những từ mới là một niềm vui lớn.\nƯớc mơ của tôi là sau khi tốt nghiệp đại học sẽ sang Nhật Bản làm việc với tư cách là một kỹ sư IT.\nVà một ngày nào đó, tôi muốn phát triển những ứng dụng tuyệt vời làm cầu nối giữa hai đất nước Nhật Bản và Việt Nam.\nĐể biến ước mơ thành hiện thực, tôi sẽ không ngừng nỗ lực và không bao giờ từ bỏ!`,
    vocabHints: [
      { word: '将来', reading: 'しょうらい', meaning: 'Tương lai' },
      { word: '夢', reading: 'ゆめ', meaning: 'Ước mơ' },
      { word: '一生懸命', reading: 'いっしょうけんめい', meaning: 'Hết lòng, chăm chỉ hết mình' },
      { word: '諦めずに', reading: 'あきらめずに', meaning: 'Không từ bỏ' },
    ],
    questions: [
      {
        question: 'この人の 将来の 夢は何ですか。 (Ước mơ tương lai của bạn sinh viên này là gì?)',
        options: [
          '日本語の 先生に なること。',
          '日本へ 行って ITエンジニアとして 働くこと。',
          'アニメの 歌手に なること。',
          'ダナンで レストランを 開くこと。',
        ],
        correctIndex: 1,
        explanation: 'Ước mơ được chia sẻ rõ: "私の 夢は、大学を 卒業した あとで、日本へ 行って ITエンジニアとして 働くことです".',
      },
      {
        question: 'この人は どこで 何を 勉強していますか。 (Người này đang học ngành gì?)',
        options: ['医学 (Y học)', 'IT (Công nghệ thông tin)', '文学 (Văn học)', '料理 (Nấu ăn)'],
        correctIndex: 1,
        explanation: 'Câu đầu bài: "大学で ITを 勉強しています".',
      },
    ],
  },
];

let currentContent = fs.readFileSync(targetFile, 'utf-8');
currentContent = currentContent.replace(/\];\s*$/, '');
const formattedNew = MORE_READING.map(item => JSON.stringify(item, null, 2)).join(',\n  ');
currentContent += ',\n  // === 15 bài đọc mở rộng đạt 20 bài luyện đọc N5 ===\n  ' + formattedNew + '\n];\n';
fs.writeFileSync(targetFile, currentContent);
console.log('Appended 15 new reading passages. Total now 20 reading lessons!');
