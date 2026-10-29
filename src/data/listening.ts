export interface ListeningDialogue {
  id: string;
  title: string;
  situation: string;
  audioScriptJa: string;
  audioScriptKana: string;
  audioScriptVi: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export const LISTENING_LESSONS: ListeningDialogue[] = [
  {
    "id": "lis-1",
    "title": "Hội thoại 1: Tự giới thiệu bản thân tại lớp học",
    "situation": "Bạn Nam lần đầu tiên đến lớp học tiếng Nhật và giới thiệu bản thân với thầy giáo.",
    "audioScriptJa": "男の人：はじめまして。わたしは ナムです。ベトナムから きました。学生です。どうぞ よろしく おねがいします。先生：ナムさん、はじめまして。田中です。こちらこそ よろしく。",
    "audioScriptKana": "おとこのひと：はじめまして。わたしは なむです。べとなむから きました。がくせいです。どうぞ よろしく おねがいします。せんせい：なむさん、はじめまして。たなかです。こちらこそ よろしく。",
    "audioScriptVi": "Nam: Rất vui được gặp thầy. Em tên là Nam. Em đến từ Việt Nam. Em là học sinh. Rất mong được thầy giúp đỡ. / Thầy giáo: Chào Nam, thầy là Tanaka. Thầy cũng rất vui được gặp em.",
    "question": "ナムさんは どこの 国の人ですか。 (Bạn Nam là người nước nào?)",
    "options": [
      "にほんじん (Người Nhật)",
      "ベトナムじん (Người Việt Nam)",
      "アメリカじん (Người Mỹ)",
      "ちゅうごくじん (Người Trung Quốc)"
    ],
    "correctIndex": 1,
    "explanation": "Trong đoạn hội thoại, bạn Nam nói rõ: \"ベトナムから きました\" (Tôi đến từ Việt Nam). Do đó đáp án chính xác là Người Việt Nam."
  },
  {
    "id": "lis-2",
    "title": "Hội thoại 2: Hỏi giờ tàu chạy tại nhà ga",
    "situation": "Một hành khách hỏi nhân viên nhà ga Tokyo về chuyến tàu đi Kyoto tiếp theo.",
    "audioScriptJa": "女の人：すみません。京都行きの 電車は 何時に 出ますか。駅員：１０時１５分です。女の人：何番線ですか。駅員：３番線ですよ。女の人：どうも ありがとうございます。",
    "audioScriptKana": "おんなのひと：すみません。きょうとゆきの でんしゃは なんじに でますか。えきいん：じゅうじ じゅうごふんです。おんなのひと：なんばんせんですか。えきいん：さんばんせんですよ。おんなのひと：どうも ありがとうございます。",
    "audioScriptVi": "Cô gái: Xin lỗi, tàu đi Kyoto xuất phát lúc mấy giờ ạ? / Nhân viên: Lúc 10 giờ 15 phút. / Cô gái: Ở đường ray số mấy ạ? / Nhân viên: Đường ray số 3 nhé. / Cô gái: Cảm ơn anh rất nhiều.",
    "question": "電車は 何時に 出発しますか。 (Tàu điện xuất phát lúc mấy giờ?)",
    "options": [
      "９時１５分 (9:15)",
      "１０時 (10:00)",
      "１０時１５分 (10:15)",
      "１０時５０分 (10:50)"
    ],
    "correctIndex": 2,
    "explanation": "Nhân viên nhà ga đã trả lời: \"１０時１５分です\" (10 giờ 15 phút)."
  },
  {
    "id": "lis-3",
    "title": "Hội thoại 3: Mua sắm tại cửa hàng tiện lợi Konbini",
    "situation": "Khách hàng thanh toán tiền nước và bánh mì tại quầy thu ngân Seven Eleven.",
    "audioScriptJa": "店員：いらっしゃいませ。お弁当と お茶ですね。６５０円になります。男の人：Suicaで はらえますか。店員：はい、どうぞ こちらに タッチしてください。",
    "audioScriptKana": "てんいん：いらっしゃいませ。おべんとうと おちゃですね。ろっぴゃくごじゅうえんになります。おとこのひと：すいかで はらえますか。てんいん：はい、どうぞ こちらに たっちしてください。",
    "audioScriptVi": "Thu ngân: Xin kính chào quý khách. Một phần cơm hộp và một chai trà, tổng cộng hết 650 Yên ạ. / Khách: Tôi thanh toán bằng thẻ Suica được không? / Thu ngân: Dạ được, xin mời chạm thẻ vào đây ạ.",
    "question": "ぜんぶで いくらですか。 (Tất cả hết bao nhiêu tiền?)",
    "options": [
      "５６０円 (560 Yên)",
      "６５０円 (650 Yên)",
      "６００円 (600 Yên)",
      "７５０円 (750 Yên)"
    ],
    "correctIndex": 1,
    "explanation": "Nhân viên nói rõ: \"６５０円 (ろっぴゃくごじゅうえん) になります\"."
  },
  {
    "id": "lis-4",
    "title": "Hội thoại 4: Rủ rê đi uống cà phê cuối tuần",
    "situation": "Hai người bạn đồng nghiệp trò chuyện vào giờ giải lao thứ Sáu.",
    "audioScriptJa": "男の人：ミラーさん、あした いっしょに 駅前の カフェへ 行きませんか。女の人：あしたは ちょっと 忙しいです。日曜日は どうですか。男の人：日曜日ですね。いいですよ。何時に 会いましょうか。女の人：午後２時は どうですか。男の人：じゃ、２時に 駅で 会いましょう。",
    "audioScriptKana": "おとこのひと：みらーさん、あした いっしょに えきまえの かふぇへ いきませんか。おんなのひと：あしたは ちょっと いそがしいです。にちようびは どうですか。おとこのひと：にちようびですね。いいですよ。なんじに あいましょうか。おんなのひと：ごごにじは どうですか。おとこのひと：じゃ、にじに えきで あいましょう。",
    "audioScriptVi": "Nam: Chị Miller, ngày mai cùng đi quán cà phê trước ga với tôi không? / Miller: Ngày mai tôi hơi bận rồi. Chủ nhật thì sao? / Nam: Chủ nhật à, được đấy. Mấy giờ gặp nhau nhỉ? / Miller: 2 giờ chiều nhé? / Nam: Vậy 2 giờ gặp nhau ở ga nhé.",
    "question": "ふたりは いつ 会いますか。 (Hai người sẽ gặp nhau khi nào?)",
    "options": [
      "土曜日の 午後２時",
      "日曜日の 午前１０時",
      "日曜日の 午後２時",
      "月曜日の 朝"
    ],
    "correctIndex": 2,
    "explanation": "Họ đồng ý gặp nhau vào \"日曜日\" (Chủ nhật) lúc \"午後２時\" (2 giờ chiều)."
  },
  {
    "id": "lis-5",
    "title": "Hội thoại 5: Gọi món tại quán ăn Nhật Bản Teishoku",
    "situation": "Khách hàng bước vào quán cơm phần và gọi món với phục vụ quán.",
    "audioScriptJa": "店員：いらっしゃいませ。何名様ですか。男の人：１人です。店員：こちらの カウンター席へ どうぞ。男の人：すみません。から揚げ定食を ひとつ ください。あと、お水も お願いします。店員：かしこまりました。少々 お待ちください。",
    "audioScriptKana": "てんいん：いらっしゃいませ。なんめいさまですか。おとこのひと：ひとりです。てんいん：こちらの かうんたーせきへ どうぞ。おとこのひと：すみません。からあげていしょくを ひとつ ください。あと、おみずも おねがいします。てんいん：かしこまりました。しょうしょう おまちください。",
    "audioScriptVi": "Nhân viên: Kính chào quý khách! Đi mấy người ạ? / Khách: 1 người. / Nhân viên: Xin mời vào bàn quầy này ạ. / Khách: Cho tôi 1 suất cơm gà rán karaage teishoku nhé. Với cả cho xin cốc nước lọc. / Nhân viên: Tôi hiểu rồi ạ, xin quý khách đợi một chút.",
    "question": "男の人は 何を 注文しましたか。 (Người đàn ông đã gọi món gì?)",
    "options": [
      "てんぷら定食 (Cơm Tempura)",
      "から揚げ定食 (Cơm gà rán)",
      "とんかつ定食 (Cơm thịt heo chiên)",
      "ラーメン (Mì ramen)"
    ],
    "correctIndex": 1,
    "explanation": "Khách hàng nói: \"から揚げ定食を ひとつ ください\" (Cho tôi 1 suất cơm gà rán)."
  },
  {
    "id": "lis-6",
    "title": "Hội thoại 6: Hỏi thăm đường đi tới bưu điện",
    "situation": "Một người đi bộ hỏi đường một người dân trên phố.",
    "audioScriptJa": "男の人：すみません。この 近くに 郵便局は ありますか。女の人：ええ、あそこの 信号を 右へ 曲がってください。銀行の 隣に ありますよ。男の人：あそこの 信号を 右ですね。ありがとうございます。女の人：いいえ、どういたしまして。",
    "audioScriptKana": "おとこのひと：すみません。この ちかくに ゆうびんきょくは ありますか。おんなのひと：ええ、あそこの しんごうを みぎへ まがってください。ぎんこうの となりに ありますよ。おとこのひと：あそこの しんごうを みぎですね。ありがとうございます。おんなのひと：いいえ、どういたしまして。",
    "audioScriptVi": "Nam: Xin lỗi, gần đây có bưu điện không ạ? / Nữ: Có chứ, bạn hãy rẽ phải ở cột đèn giao thông đằng kia. Nó nằm ngay cạnh ngân hàng đấy. / Nam: Rẽ phải ở đèn giao thông đằng kia phải không ạ? Cảm ơn chị. / Nữ: Không có gì đâu ạ.",
    "question": "郵便局は どこに ありますか。 (Bưu điện nằm ở đâu?)",
    "options": [
      "信号の 左側",
      "銀行の 隣",
      "駅の 中",
      "学校の 前"
    ],
    "correctIndex": 1,
    "explanation": "Người phụ nữ chỉ dẫn: \"銀行の 隣に ありますよ\" (Nó nằm ở bên cạnh ngân hàng)."
  },
  {
    "id": "lis-7",
    "title": "Hội thoại 7: Xin phép mượn từ điển trong giờ học",
    "situation": "Học sinh hỏi mượn từ điển của bạn ngồi bên cạnh.",
    "audioScriptJa": "男の人：リーさん、その 辞書を ちょっと 借りても いいですか。女の人：あ、すみません。今 私が 使っています。男の人：そうですか。じゃ、また あとで 借ります。女の人：５分後に 終わりますから、ちょっと 待ってくださいね。",
    "audioScriptKana": "おとこのひと：りーさん、その じしょを ちょっと かりても いいですか。おんなのひと：あ、すみません。いま わたしが つかっています。おとこのひと：そうですか。じゃ、また あとで かります。おんなのひと：ごふんごに おわりますから、ちょっと まってくださいね。",
    "audioScriptVi": "Nam: Bạn Lee ơi, mình mượn cuốn từ điển đó một lát được không? / Lee: Ôi xin lỗi, hiện tại mình đang dùng. / Nam: Vậy à. Thế lát nữa mình mượn nhé. / Lee: 5 phút nữa là mình dùng xong rồi nên cậu chờ chút nhé.",
    "question": "女の人は なぜ 今 辞書を 貸せませんか。 (Tại sao bạn nữ chưa cho mượn từ điển ngay bây giờ?)",
    "options": [
      "辞書を 持っていません。",
      "今 自分が 使っています。",
      "辞書が 壊れています。",
      "家へ 帰ります。"
    ],
    "correctIndex": 1,
    "explanation": "Bạn nữ nói: \"今 私が 使っています\" (Bây giờ chính mình đang dùng)."
  },
  {
    "id": "lis-8",
    "title": "Hội thoại 8: Gọi điện thoại xin phép nghỉ ốm",
    "situation": "Nhân viên gọi điện thoại cho sếp thông báo bị sốt và xin nghỉ phép một ngày.",
    "audioScriptJa": "男の人：もしもし、課長、山田です。おはようございます。上司：山田さん、おはよう。どうしましたか。男の人：けさから 熱が ３８度 ありまして、頭も 痛いんです。今日 休んでも よろしいでしょうか。上司：それは 大変ですね。病院へ 行って、ゆっくり 休んでください。男の人：ありがとうございます。失礼します。",
    "audioScriptKana": "おとこのひと：もしもし、かちょう、やまだです。おはようございます。じょうし：やまださん、おはよう。どうしましたか。おとこのひと：けさから ねつが さんじゅうはちど ありまして、あたまも いたいんです。きょう やすんでも よろしいでしょうか。じょうし：それは たいへんですね。びょういんへ いって、ゆっくり やすんでください。おとこのひと：ありがとうございます。しつれいします。",
    "audioScriptVi": "Yamada: Alô, thưa tổ trưởng, tôi là Yamada đây ạ. Chào buổi sáng tổ trưởng. / Sếp: Chào Yamada. Có chuyện gì thế? / Yamada: Từ sáng nay tôi bị sốt 38 độ, đầu cũng rất đau. Hôm nay tôi xin phép nghỉ có được không ạ? / Sếp: Thế thì vất vả quá nhỉ. Cậu hãy đi khám bệnh rồi nghỉ ngơi cho lại sức nhé. / Yamada: Vâng, tôi cảm ơn tổ trưởng. Chào tổ trưởng ạ.",
    "question": "山田さんは 今日 どうしますか。 (Anh Yamada hôm nay sẽ làm gì?)",
    "options": [
      "会社へ 行きます。",
      "仕事を 休みます。",
      "出張します。",
      "旅行へ 行きます。"
    ],
    "correctIndex": 1,
    "explanation": "Yamada xin nghỉ vì bị sốt: \"今日 休んでも よろしいでしょうか\" và sếp đã đồng ý cho nghỉ ngơi."
  },
  {
    "id": "lis-9",
    "title": "Hội thoại 9: Hỏi thăm sở thích lúc rảnh rỗi",
    "situation": "Hai người bạn cùng lớp trò chuyện về sở thích cá nhân.",
    "audioScriptJa": "女の人：タオさんの 趣味は 何ですか。男の人：私の 趣味は サッカーと 写真を 撮ることです。休みの 日は いつも カメラを 持って 公園へ 行きます。女の人：へえ、素敵ですね！どんな 写真を 撮るんですか。男の人：鳥や 花の 写真が 多いですね。",
    "audioScriptKana": "おんなのひと：たおさんの しゅみは なんですか。おとこのひと：わたしの しゅみは さっかーと しゃしんを とることです。やすみの ひは いつも かめらを もって こうえんへ いきます。おんなのひと：へえ、すてきですね！どんな しゃしんを とるんですか。おとこのひと：とりや はなの しゃしんが おおいですね。",
    "audioScriptVi": "Nữ: Thao ơi, sở thích của bạn là gì thế? / Thao: Sở thích của mình là bóng đá và chụp ảnh. Ngày nghỉ mình luôn mang máy ảnh đi công viên. / Nữ: Ồ tuyệt thật đấy! Bạn hay chụp ảnh thể loại gì? / Thao: Chủ yếu là chụp chim chóc và hoa lá bạn ạ.",
    "question": "タオさんは 休みの日に 何を しますか。 (Bạn Thao làm gì vào ngày nghỉ?)",
    "options": [
      "映画を 見ます。",
      "公園で 写真を 撮ります。",
      "家で 料理を 作ります。",
      "買い物に 行きます。"
    ],
    "correctIndex": 1,
    "explanation": "Thao nói rõ: \"休みの 日は いつも カメラを 持って 公園へ 行きます\" (Ngày nghỉ tôi luôn mang máy ảnh ra công viên chụp)."
  },
  {
    "id": "lis-10",
    "title": "Hội thoại 10: Hỏi giá và mua áo sơ mi",
    "situation": "Khách hàng thử áo và hỏi giá tại cửa hàng quần áo.",
    "audioScriptJa": "男の人：すみません、この 白い シャツを 着てみても いいですか。店員：はい、試着室は あちらでございます。・・・男の人：サイズが ちょうど いいです。これ、いくらですか。店員：税込みで ２９００円で ございます。男の人：じゃ、これを ください。",
    "audioScriptKana": "おとこのひと：すみません、この しろい しゃつを きてみても いいですか。てんいん：はい、しちゃくしつは あちらでございます。・・・おとこのひと：さいずが ちょうど いいです。これ、いくらですか。てんいん：ぜいこみで にせんきゅうひゃくえんで ございます。おとこのひと：じゃ、これを ください。",
    "audioScriptVi": "Khách: Xin lỗi, tôi mặc thử chiếc áo sơ mi trắng này được không? / Nhân viên: Dạ được, phòng thử đồ ở phía đằng kia ạ. ... Khách: Kích cỡ vừa vặn lắm. Chiếc này bao nhiêu tiền vậy? / Nhân viên: Đã bao gồm thuế là 2900 Yên ạ. / Khách: Vậy lấy cho tôi chiếc này nhé.",
    "question": "シャツは いくらでしたか。 (Chiếc áo sơ mi giá bao nhiêu tiền?)",
    "options": [
      "１９００円 (1900 Yên)",
      "２９００円 (2900 Yên)",
      "３９００円 (3900 Yên)",
      "２５００円 (2500 Yên)"
    ],
    "correctIndex": 1,
    "explanation": "Nhân viên báo giá là \"２９００円 (にせんきゅうひゃくえん)\"."
  },
  {
    "id": "lis-11",
    "title": "Hội thoại 11: Mượn ô khi bất ngờ trời đổ mưa",
    "situation": "Khi tan làm trời bất ngờ đổ mưa rào, hai nhân viên trò chuyện ở cửa công ty.",
    "audioScriptJa": "女の人：あ、雨が 降ってきましたね。傘を 持っていません。男の人：私は 置き傘が もう１本 ありますよ。貸しましょうか。女の人：本当ですか。助かります！明日 お返ししますね。男の人：ええ、いいですよ。風邪を 引かないように 気をつけて。",
    "audioScriptKana": "おんなのひと：あ、あめが ふってきましたね。かさを もっていません。おとこのひと：わたしは おきがさが もういっぽん ありますよ。かしましょうか。おんなのひと：ほんとうですか。たすかります！あした おかえししますね。おとこのひと：ええ、いいですよ。かぜを ひかないように きをつけて。",
    "audioScriptVi": "Nữ: Á, trời mưa rồi kìa! Mình lại không mang ô theo. / Nam: Tôi có thêm một cây dù để sơ cua ở công ty này. Để tôi cho bạn mượn nhé? / Nữ: Thật hả bạn? Cứu tinh của mình rồi! Ngày mai mình gửi trả nhé. / Nam: Ừ, không sao đâu. Coi chừng cảm lạnh đấy.",
    "question": "男の人は 女の人に 何を 貸しますか。 (Người đàn ông cho người phụ nữ mượn cái gì?)",
    "options": [
      "傘 (Chiếc ô)",
      "コート (Áo khoác)",
      "お金 (Tiền)",
      "車 (Xe hơi)"
    ],
    "correctIndex": 0,
    "explanation": "Người đàn ông nói: \"置き傘が もう１本 ありますよ。貸しましょうか\" (Tôi còn 1 cây ô để sơ cua ở đây, để tôi cho bạn mượn nhé)."
  },
  {
    "id": "lis-12",
    "title": "Hội thoại 12: Đặt bàn ăn tối tại nhà hàng Ý",
    "situation": "Khách hàng gọi điện thoại đặt bàn trước cho bữa tiệc sinh nhật.",
    "audioScriptJa": "店員：はい、マリオレストランでございます。男の人：すみません。今晩の 予約を お願いしたいのですが。店員：ありがとうございます。何名様で、何時からでしょうか。男の人：４名で、７時半からです。名前は 鈴木です。店員：鈴木様、４名様で ７時半ですね。お待ちしております。",
    "audioScriptKana": "てんいん：はい、まりおれすとらんでございます。おとこのひと：すみません。こんばんの よやくを おねがいしたいのですが。てんいん：ありがとうございます。なんめいさまで、なんじからでしょうか。おとこのひと：よにんで、しちじはんからです。なまえは すずきです。てんいん：すずきさま、よにんさまで しちじはんですね。おまちしております。",
    "audioScriptVi": "Nhà hàng: Vâng, nhà hàng Mario xin nghe ạ. / Khách: Xin lỗi, tôi muốn đặt bàn tối nay ạ. / Nhà hàng: Cảm ơn quý khách. Đi mấy người và từ mấy giờ ạ? / Khách: 4 người, từ 7 giờ rưỡi. Tôi tên là Suzuki. / Nhà hàng: Dạ vâng anh Suzuki, 4 người lúc 7 giờ rưỡi ạ. Chúng tôi rất mong được đón tiếp quý khách.",
    "question": "予約は 何時からですか。 (Đặt bàn từ mấy giờ?)",
    "options": [
      "６時半 (6:30)",
      "７時 (7:00)",
      "７時半 (7:30)",
      "８時 (8:00)"
    ],
    "correctIndex": 2,
    "explanation": "Khách hàng nói rõ: \"４名で、７時半からです\" (4 người, từ 7 giờ rưỡi)."
  }
,
  // === 18 bài hội thoại bổ sung đạt 30 bài luyện nghe N5 ===
  {
  "id": "lis-13",
  "title": "Hội thoại 13: Hỏi số điện thoại và trao đổi liên lạc",
  "situation": "Hai bạn sinh viên mới quen trao đổi số điện thoại để liên lạc học nhóm.",
  "audioScriptJa": "男の人：アンさん、電話番号は何番ですか。女の人：ゼロ九ゼロ、一二三四、五六七八です。男の人：ゼロ九ゼロ、一二三四、五六七八ですね。女の人：はい、そうです。男の人：ありがとう。今夜 メッセージを 送りますね。",
  "audioScriptKana": "おとこのひと：あんさん、でんわばんごうは なんばんですか。おんなのひと：ぜろきゅうぜろ、いちにさんよん、ごろくななはちです。おとこのひと：ぜろきゅうぜろ、いちにさんよん、ごろくななはちですね。おんなのひと：はい、そうです。おとこのひと：ありがとう。こんや めっせーじを おくりますね。",
  "audioScriptVi": "Nam: An ơi, số điện thoại của bạn là bao nhiêu thế? / An: Là 090-1234-5678 nhé. / Nam: 090-1234-5678 đúng không? / An: Ừ, đúng rồi. / Nam: Cảm ơn nhé. Tối nay mình nhắn tin cho bạn nha.",
  "question": "アンさんの 電話番号は どれですか。 (Số điện thoại của bạn An là số nào?)",
  "options": [
    "090-1234-5678",
    "080-1234-5678",
    "090-4321-8765",
    "090-1234-8888"
  ],
  "correctIndex": 0,
  "explanation": "Bạn An đọc rõ ràng số điện thoại: ゼロ九ゼロ (090), 一二三四 (1234), 五六七八 (5678)."
},
  {
  "id": "lis-14",
  "title": "Hội thoại 14: Hỏi đường tới bảo tàng mỹ thuật",
  "situation": "Du khách hỏi một cụ già đi dạo đường đi đến bảo tàng mỹ thuật gần nhất.",
  "audioScriptJa": "男の人：すみません。美術館へ 行きたいんですが、どう行けば いいですか。おじいさん：まっすぐ 行って、二つ目の 信号を 左へ 曲がってください。大きな 公園の 前に ありますよ。男の人：二つ目の 信号を 左ですね。歩いて 何分ぐらいですか。おじいさん：十分ぐらいですよ。",
  "audioScriptKana": "おとこのひと：すみません。びじゅつかんへ いきたいんですが、どういけば いいですか。おじいさん：まっすぐ いって、ふたつめの しんごうを ひだりへ まがってください。おおきな こうえんの まえに ありますよ。おとこのひと：ふたつめの しんごうを ひだりですね。あるいて なんぷんぐらいですか。おじいさん：じゅっぷんぐらいですよ。",
  "audioScriptVi": "Du khách: Xin lỗi bác, cháu muốn đến bảo tàng mỹ thuật thì đi thế nào ạ? / Cụ già: Cháu cứ đi thẳng, tới cột đèn giao thông thứ hai thì rẽ trái nhé. Nó nằm ngay trước công viên lớn. / Du khách: Rẽ trái ở cột đèn giao thông thứ hai ạ. Đi bộ mất khoảng mấy phút vậy bác? / Cụ già: Khoảng 10 phút thôi cháu à.",
  "question": "美術館まで 歩いて どのくらい かかりますか。 (Đi bộ đến bảo tàng mỹ thuật mất khoảng bao lâu?)",
  "options": [
    "５分 (5 phút)",
    "１０分 (10 phút)",
    "２０分 (20 phút)",
    "３０分 (30 phút)"
  ],
  "correctIndex": 1,
  "explanation": "Cụ già trả lời: \"十分ぐらいですよ\" (Khoảng 10 phút thôi)."
},
  {
  "id": "lis-15",
  "title": "Hội thoại 15: Mua vé xem phim và chọn chỗ ngồi",
  "situation": "Khách hàng mua vé xem phim tại quầy vé rạp Toho Cinema.",
  "audioScriptJa": "店員：いらっしゃいませ。どの 映画を ご覧になりますか。女の人：２時からの「桜の記憶」を 大人２枚 お願いします。店員：お席は こちらの 画面から お選びください。女の人：真ん中の G-10 と G-11 で お願いします。店員：かしこまりました。お二人様で ３６００円です。",
  "audioScriptKana": "てんいん：いらっしゃいませ。どの えいがを ごらんになりますか。おんなのひと：にじからの「さくらのきおく」を おとなにまい おねがいします。てんいん：おせきは こちらの がめんから おえらびください。おんなのひと：まんなかの じーじゅう と じーじゅういち で おねがいします。てんいん：かしこまりました。おふたりさまで さんぜんろっぴゃくえんです。",
  "audioScriptVi": "Nhân viên: Kính chào quý khách. Quý khách muốn xem phim nào ạ? / Nữ: Cho tôi 2 vé người lớn suất 2 giờ phim \"Ký ức hoa anh đào\" nhé. / Nhân viên: Xin mời quý khách chọn chỗ trên màn hình này. / Nữ: Cho tôi hàng ghế giữa G-10 và G-11 nhé. / Nhân viên: Vâng, 2 người hết 3600 Yên ạ.",
  "question": "映画の 切符は 全部で いくらですか。 (Tất cả vé phim hết bao nhiêu tiền?)",
  "options": [
    "１８００円 (1800 Yên)",
    "２０００円 (2000 Yên)",
    "３６００円 (3600 Yên)",
    "４０００円 (4000 Yên)"
  ],
  "correctIndex": 2,
  "explanation": "Nhân viên thông báo tổng tiền 2 người: \"３６００円 (さんぜんろっぴゃくえん) です\"."
},
  {
  "id": "lis-16",
  "title": "Hội thoại 16: Nhờ người qua đường chụp ảnh kỷ niệm",
  "situation": "Một du khách nhờ người qua đường chụp ảnh trước cổng đền Asakusa Sensoji.",
  "audioScriptJa": "女の人：すみません、シャッターを 押して いただけませんか。男の人：いいですよ。この ボタンですね。女の人：はい、赤い 門が 入るように お願いします。男の人：はい、チーズ！もう 一枚 撮りましょうか。女の人：ありがとうございます！とても きれいに 撮れています。",
  "audioScriptKana": "おんなのひと：すみません、しゃったーを おして いただけませんか。おとこのひと：いいですよ。この ぼたんですね。おんなのひと：はい、あかい もんが はいるように おねがいします。おとこのひと：はい、ちーず！もう いちまい とりましょうか。おんなのひと：ありがとうございます！とても きれいに とれています。",
  "audioScriptVi": "Nữ: Xin lỗi anh, anh bấm máy chụp ảnh giúp tôi được không ạ? / Nam: Được chứ bạn. Là nút này đúng không? / Nữ: Vâng, xin nhờ anh lấy góc thấy cả cánh cổng màu đỏ nhé. / Nam: Được rồi, cười lên nào! Có cần chụp thêm kiểu nữa không? / Nữ: Cảm ơn anh nhiều lắm! Ảnh chụp rất đẹp ạ.",
  "question": "女の人は 何を 頼みましたか。 (Người phụ nữ đã nhờ vả điều gì?)",
  "options": [
    "道を 教えてもらう",
    "写真を 撮ってもらう",
    "荷物を 持ってもらう",
    "時計を 見せてもらう"
  ],
  "correctIndex": 1,
  "explanation": "Người phụ nữ nhờ chụp ảnh: \"シャッターを 押して いただけませんか\" (Anh bấm máy chụp ảnh giúp tôi được không ạ)."
},
  {
  "id": "lis-17",
  "title": "Hội thoại 17: Trả phòng khách sạn và thanh toán",
  "situation": "Khách hàng hoàn tất thủ tục check-out tại quầy lễ tân khách sạn.",
  "audioScriptJa": "フロント：おはようございます。チェックアウトでございますか。男の人：はい、３０５号室の グエンです。フロント：ありがとうございます。お部屋のお電話や 冷蔵庫の ご利用は ございますか。男の人：いいえ、ありません。フロント：かしこまりました。鍵を お預かりいたします。ご宿泊ありがとうございました。",
  "audioScriptKana": "ふろんと：おはようございます。ちぇっくあうとでございますか。おとこのひと：はい、さんぜろごごうしつの ぐえんです。ふろんと：ありがとうございます。おへやの おでんわや れいぞうこの ごりようは ございますか。おとこのひと：いいえ、ありません。ふろんと：かしこまりました。かぎを おあずかりいたします。ごしゅくはく ありがとうございました。",
  "audioScriptVi": "Lễ tân: Chào buổi sáng quý khách. Quý khách muốn trả phòng ạ? / Khách: Vâng, tôi là Nguyen phòng 305. / Lễ tân: Cảm ơn quý khách. Quý khách có dùng điện thoại bàn hay đồ trong tủ lạnh không ạ? / Khách: Dạ không có. / Lễ tân: Dạ vâng, tôi xin nhận lại chìa khóa. Cảm ơn quý khách đã lưu trú tại khách sạn chúng tôi.",
  "question": "男の人の 部屋番号は 何番ですか。 (Số phòng của vị khách là phòng số mấy?)",
  "options": [
    "２０５号室",
    "３０５号室",
    "５０３号室",
    "３１５号室"
  ],
  "correctIndex": 1,
  "explanation": "Khách nói rõ ràng: \"３０５号室 (さんぜろごごうしつ) の グエンです\"."
},
  {
  "id": "lis-18",
  "title": "Hội thoại 18: Đi cắt tóc tại tiệm Salon Nhật",
  "situation": "Khách hàng trao đổi với thợ làm tóc về kiểu tóc mong muốn.",
  "audioScriptJa": "美容師：いらっしゃいませ。今日は どのように されますか。女の人：横を 少し 短くして、前髪は 眉毛の 下くらいで お願いします。美容師：かしこまりました。後ろの 長さは どうしますか。女の人：後ろは ２センチくらい 切ってください。美容師：わかりました。シャンプーから はじめますね。",
  "audioScriptKana": "びようし：いらっしゃいませ。きょうは どのように されますか。おんなのひと：よこを すこし みじかくして、まえがみは まゆげの したくらいで おねがいします。びようし：かしこまりました。うしろの ながさは どうしますか。おんなのひと：うしろは にせんちくらい きってください。びようし：わかりました。しゃんぷーから はじめますね。",
  "audioScriptVi": "Thợ tóc: Kính chào quý khách. Hôm nay quý khách muốn cắt kiểu như thế nào ạ? / Nữ: Hai bên tỉa ngắn một chút, còn tóc mái thì để ngang dưới lông mày giúp tôi nhé. / Thợ tóc: Vâng ạ. Còn độ dài phía sau gáy thì sao ạ? / Nữ: Phía sau cắt ngắn khoảng 2 cm giúp tôi. / Thợ tóc: Tôi hiểu rồi, chúng ta bắt đầu từ gội đầu nhé.",
  "question": "後ろの 髪は 何センチ 切りますか。 (Phần tóc phía sau cắt đi mấy cm?)",
  "options": [
    "１センチ",
    "２センチ",
    "３センチ",
    "５センチ"
  ],
  "correctIndex": 1,
  "explanation": "Khách yêu cầu: \"後ろは ２センチくらい 切ってください\" (Phía sau cắt khoảng 2 cm)."
},
  {
  "id": "lis-19",
  "title": "Hội thoại 19: Mua đồ ăn nhanh tại McDonald's",
  "situation": "Khách hàng gọi đồ ăn combo tại quầy bán đồ ăn nhanh.",
  "audioScriptJa": "店員：ご注文を どうぞ。男の人：チーズバーガーセットを ひとつ ください。店員：お飲み物は 何に なさいますか。男の人：コーラで お願いします。店員：店内でお召し上がりですか、お持ち帰りですか。男の人：持ち帰りで お願いします。",
  "audioScriptKana": "てんいん：ごちゅうもんを どうぞ。おとこのひと：ちーずばーがーせっとを ひとつ ください。てんいん：おのみものは なにに なさいますか。おとこのひと：こーらで おねがいします。てんいん：てんないでおめしあがりですか、おもちかえりですか。おとこのひと：もちかえりで おねがいします。",
  "audioScriptVi": "Nhân viên: Xin mời quý khách gọi món. / Khách: Cho tôi 1 suất combo burger phô mai. / Nhân viên: Quý khách chọn đồ uống gì ạ? / Khách: Cho tôi nước Coca Cola. / Nhân viên: Quý khách dùng tại quán hay mang về ạ? / Khách: Cho tôi mang về nhé.",
  "question": "男の人は どこで 食べますか。 (Người đàn ông sẽ ăn ở đâu?)",
  "options": [
    "店内で 食べます。",
    "持ち帰って 外や 家で 食べます。",
    "車で 食べます。",
    "まだ 決めていません。"
  ],
  "correctIndex": 1,
  "explanation": "Khách hàng chọn hình thức mang về: \"持ち帰りで お願いします\" (Cho tôi mang về)."
},
  {
  "id": "lis-20",
  "title": "Hội thoại 20: Rủ đồng nghiệp đi ăn mì sau giờ tan sở",
  "situation": "Hai đồng nghiệp tan ca lúc 7 giờ tối và quyết định đi ăn tối cùng nhau.",
  "audioScriptJa": "男の人：鈴木さん、仕事が 終わりましたね。お腹が 空きませんか。女の人：ええ、ぺこぺこです。何か 食べに 行きませんか。男の人：駅の 近くに 新しい ラーメン屋が できましたよ。行きましょうか。女の人：いいですね！ラーメン 大好きです。行きましょう！",
  "audioScriptKana": "おとこのひと：すずきさん、しごとが おわりましたね。おなかが すきませんか。おんなのひと：ええ、ぺこぺこです。なにか たべに いきませんか。おとこのひと：えきの ちかくに あたらしい らーめんやが できましたよ。いきましょうか。おんなのひと：いいですね！らーめん だいすきです。いきましょう！",
  "audioScriptVi": "Nam: Chị Suzuki ơi, việc xong rồi nhỉ. Chị có thấy đói bụng không? / Suzuki: Đói cồn cào rồi anh ơi. Đi kiếm gì ăn đi? / Nam: Gần ga mới mở quán mì ramen mới đấy. Mình qua đó ăn nhé? / Suzuki: Tuyệt quá! Em cực kỳ thích ăn ramen. Đi thôi nào!",
  "question": "ふたりは 何を 食べに 行きますか。 (Hai người sẽ đi ăn món gì?)",
  "options": [
    "すし (Sushi)",
    "ラーメン (Mì ramen)",
    "カレー (Cà ri)",
    "焼肉 (Thịt nướng)"
  ],
  "correctIndex": 1,
  "explanation": "Hai người rủ nhau đi ăn mì ramen: \"新しい ラーメン屋が できましたよ。行きましょうか\"."
},
  {
  "id": "lis-21",
  "title": "Hội thoại 21: Hỏi vị trí nhà vệ sinh ở siêu thị Aeon Mall",
  "situation": "Khách hàng hỏi nhân viên quầy thông tin vị trí phòng vệ sinh cho người khuyết tật/trẻ nhỏ.",
  "audioScriptJa": "女の人：すみません、お手洗いは どこですか。店員：お手洗いは エスカレーターの 後ろに ございます。男の人用と 女の人用の 間に 多目的トイレも ございます。女の人：わかりました。ありがとうございます。",
  "audioScriptKana": "おんなのひと：すみません、おてあらいは どこですか。てんいん：おてあらいは えすかれーたーの うしろに ございます。おとこのひとようと おんなのひとようの あいだに たもくてきといれも ございます。おんなのひと：わかりました。ありがとうございます。",
  "audioScriptVi": "Nữ: Xin lỗi anh, nhà vệ sinh ở đâu ạ? / Nhân viên: Nhà vệ sinh nằm ở phía sau thang cuốn ạ. Ở giữa phòng nam và phòng nữ còn có cả nhà vệ sinh đa năng ạ. / Nữ: Tôi hiểu rồi. Cảm ơn anh.",
  "question": "お手洗いは どこに ありますか。 (Nhà vệ sinh nằm ở đâu?)",
  "options": [
    "エレベーターの 中",
    "エスカレーターの 後ろ",
    "入口の すぐ 隣",
    "２階の レストラン"
  ],
  "correctIndex": 1,
  "explanation": "Nhân viên chỉ đường: \"エスカレーターの 後ろに ございます\" (Nằm ở phía sau thang cuốn)."
},
  {
  "id": "lis-22",
  "title": "Hội thoại 22: Dự báo thời tiết cuối tuần đi dã ngoại",
  "situation": "Hai bạn trẻ bàn nhau xem có nên đi công viên ngắm hoa hay không dựa vào thời tiết.",
  "audioScriptJa": "男の人：明日の 天気予報 見た？女の人：うん、午前中は 曇りだけど、午後から 雨が 降るらしいよ。男の人：じゃ、お花見は 日曜日に 変えようか。女の人：そうだね。日曜日は 朝から 晴れるって 言ってたよ。",
  "audioScriptKana": "おとこのひと：あしたの てんきよほう みた？おんなのひと：うん、ごぜんちゅうは くもりだけど、ごごから あめが ふるらしいよ。おとこのひと：じゃ、おはなみは にちようびに かえようか。おんなのひと：そうだね。にちようびは あさから はれるって いってたよ。",
  "audioScriptVi": "Nam: Cậu xem dự báo thời tiết ngày mai chưa? / Nữ: Xem rồi, buổi sáng thì âm u, còn chiều nghe bảo trời mưa đấy. / Nam: Thế dời lịch đi ngắm hoa sang Chủ nhật nhé? / Nữ: Ừ chuẩn đấy. Chủ nhật nghe bảo từ sáng trời đã nắng đẹp rồi.",
  "question": "ふたりは いつ お花見に 行きますか。 (Hai người sẽ đi ngắm hoa vào hôm nào?)",
  "options": [
    "土曜日の 午前",
    "土曜日の 午後",
    "日曜日",
    "来週の 月曜日"
  ],
  "correctIndex": 2,
  "explanation": "Họ quyết định đổi sang Chủ nhật vì ngày mai mưa: \"お花見は 日曜日に 変えようか。日曜日は 朝から 晴れる\"."
},
  {
  "id": "lis-23",
  "title": "Hội thoại 23: Tìm đồ thất lạc (quên túi xách trên tàu)",
  "situation": "Hành khách đến phòng quản lý đồ thất lạc của ga tàu điện.",
  "audioScriptJa": "男の人：すみません。電車の中に かばんを 忘れてしまいました。駅員：どんな かばんでしたか。男の人：黒い 革の リュックで、中に パソコンと 青い 傘が 入っています。駅員：何時の 電車でしたか。男の人：山手線で、１５分前の 電車です。駅員：調べてみますので、こちらで 少々 お待ちください。",
  "audioScriptKana": "おとこのひと：すみません。でんしゃのなかに かばんを わすれてしまいました。えきいん：どんな かばんでしたか。おとこのひと：くろい かわの りゅっくで、なかに ぱそこんと あおい かさが はいっています。えきいん：なんじの でんしゃでしたか。おとこのひと：やまのてせんで、じゅうごふんまえの でんしゃです。えきいん：しらべてみますので、こちらで しょうしょう おまちください。",
  "audioScriptVi": "Khách: Xin lỗi anh, tôi lỡ bỏ quên chiếc túi trên tàu rồi. / Nhân viên: Chiếc túi trông như thế nào ạ? / Khách: Là ba lô da màu đen, bên trong có máy tính và cây dù màu xanh biển. / Nhân viên: Là chuyến tàu lúc mấy giờ vậy ạ? / Khách: Chuyến tàu tuyến Yamanote cách đây 15 phút ạ. / Nhân viên: Để tôi tra cứu ngay, xin anh đợi ở đây một chút ạ.",
  "question": "かばんの 中に 何が 入っていますか。 (Trong ba lô có đựng những món đồ gì?)",
  "options": [
    "財布と 本",
    "パソコンと 青い 傘",
    "携帯と お金",
    "洋服と 靴"
  ],
  "correctIndex": 1,
  "explanation": "Khách khai báo rõ ràng: \"中に パソコンと 青い 傘が 入っています\" (Bên trong có máy vi tính và chiếc ô màu xanh biển)."
},
  {
  "id": "lis-24",
  "title": "Hội thoại 24: Mua quà lưu niệm bánh ngọt Tokyo Banana",
  "situation": "Du khách chọn mua đặc sản bánh kẹo tại cửa hàng quà lưu niệm ga Tokyo.",
  "audioScriptJa": "店員：いらっしゃいませ。東京土産の「東京ばな奈」はいかがでしょうか。女の人：賞味期限は どのくらいですか。店員：今日から ２週間でございます。女の人：じゃ、８個入りの 箱を ３つ ください。店員：プレゼント用の 小分けの 袋は お付けしますか。女の人：はい、３枚 お願いします。",
  "audioScriptKana": "てんいん：いらっしゃいませ。とうきょうみやげの「とうきょうばなな」はいかがでしょうか。おんなのひと：しょうみきげんは どのくらいですか。てんいん：きょうから にしゅうかんでございます。おんなのひと：じゃ、はっこいりの はこを みっつ ください。てんいん：ぷれぜんとようの こわけの ふくろは おつけしますか。おんなのひと：はい、さんまい おねがいします。",
  "audioScriptVi": "Nhân viên: Kính chào quý khách. Món bánh đặc sản Tokyo Banana làm quà rất hợp đấy ạ. / Nữ: Hạn sử dụng được bao lâu vậy em? / Nhân viên: Dạ được 2 tuần kể từ hôm nay ạ. / Nữ: Vậy lấy cho chị 3 hộp loại 8 chiếc nhé. / Nhân viên: Chị có cần thêm túi nilon nhỏ để chia tặng quà không ạ? / Nữ: Có, cho chị xin 3 chiếc túi nhé.",
  "question": "女の人は 何箱 買いましたか。 (Người phụ nữ đã mua bao nhiêu hộp?)",
  "options": [
    "１箱 (1 hộp)",
    "２箱 (2 hộp)",
    "３箱 (3 hộp)",
    "８箱 (8 hộp)"
  ],
  "correctIndex": 2,
  "explanation": "Người phụ nữ nói: \"８個入りの 箱を ３つ ください\" (Cho tôi 3 hộp loại 8 cái)."
},
  {
  "id": "lis-25",
  "title": "Hội thoại 25: Mua thuốc đau đầu tại hiệu thuốc MatsuKiyo",
  "situation": "Khách hàng mua thuốc giảm đau không cần kê đơn tại cửa hàng Matsumoto Kiyoshi.",
  "audioScriptJa": "男の人：すみません。頭が 痛いので、薬が 欲しいんですが。薬剤師：熱は ありますか。男の人：いいえ、熱は ありません。頭だけ 痛いです。薬剤師：では、こちらの 鎮痛薬が おすすめです。１回 ２錠、食後に 水で 飲んでください。男の人：眠くなりますか。薬剤師：この 薬は 眠くなりませんよ。ご安心ください。",
  "audioScriptKana": "おとこのひと：すみません。あたまが いたいので、くすりが ほしいんですが。やくざいし：ねつは ありますか。おとこのひと：いいえ、ねつは ありません。あたまだけ いたいです。やくざいし：では、こちらの ちんつうやくが おすすめです。いっかい にじょう、しょくごに みずで のんでください。おとこのひと：ねむくなりますか。やくざいし：この くすりは ねむくなりませんよ。ごあんしんください。",
  "audioScriptVi": "Khách: Xin lỗi anh, tôi bị đau đầu nên muốn mua thuốc ạ. / Dược sĩ: Bạn có bị sốt không? / Khách: Dạ không, tôi không sốt, chỉ bị nhức đầu thôi. / Dược sĩ: Thế thì tôi khuyên dùng loại thuốc giảm đau này nhé. Mỗi lần uống 2 viên cùng nước lọc sau bữa ăn. / Khách: Thuốc này có gây buồn ngủ không anh? / Dược sĩ: Loại thuốc này không gây buồn ngủ đâu bạn nhé. Bạn yên tâm.",
  "question": "薬は １回に 何錠 飲みますか。 (Mỗi lần uống mấy viên thuốc?)",
  "options": [
    "１錠 (1 viên)",
    "２錠 (2 viên)",
    "３錠 (3 viên)",
    "４錠 (4 viên)"
  ],
  "correctIndex": 1,
  "explanation": "Dược sĩ hướng dẫn cách uống: \"１回 ２錠、食後に 水で 飲んでください\" (Mỗi lần 2 viên sau ăn)."
},
  {
  "id": "lis-26",
  "title": "Hội thoại 26: Gọi điện báo đến muộn do kẹt xe",
  "situation": "Người đi làm gọi điện báo cho đồng nghiệp vì bị kẹt xe trên đường đến cuộc họp.",
  "audioScriptJa": "男の人：もしもし、林さん。田中です。すみません、事故で 電車が 止まってしまいました。女の人：えっ、大丈夫ですか。今 どこに いますか。男の人：新宿駅です。あと ２０分くらい 遅れそうです。女の人：わかりました。課長に 伝えておきますから、気をつけて 来てくださいね。男の人：ありがとうございます。本当に すみません。",
  "audioScriptKana": "おとこのひと：もしもし、はやしさん。たなかです。すみません、じこで でんしゃが とまってしまいました。おんなのひと：えっ、だいじょうぶですか。いま どこに いますか。おとこのひと：しんじゅくえきです。あと にじゅっぷんくらい おくれそうです。おんなのひと：わかりました。かちょうに つたえておきますから、きをつけて きてくださいね。おとこのひと：ありがとうございます。ほんとうに すみません。",
  "audioScriptVi": "Tanaka: Alô chị Hayashi à, Tanaka đây ạ. Xin lỗi chị, vì tai nạn nên tàu điện bị dừng mất rồi. / Hayashi: Ôi thế à, cậu không sao chứ? Hiện giờ cậu đang ở đâu? / Tanaka: Em đang ở ga Shinjuku. Chắc em đến muộn khoảng 20 phút nữa ạ. / Hayashi: Chị hiểu rồi, để chị báo lại với trưởng phòng, cậu cứ bình tĩnh cẩn thận đi nhé. / Tanaka: Em cảm ơn chị, em xin lỗi nhiều ạ.",
  "question": "田中さんは なぜ 遅れますか。 (Tại sao anh Tanaka lại bị muộn?)",
  "options": [
    "寝坊しました (Ngủ quên)",
    "事故で 電車が 止まりました (Tàu dừng vì tai nạn)",
    "道に 迷いました (Lạc đường)",
    "病院へ 行きました (Đi bệnh viện)"
  ],
  "correctIndex": 1,
  "explanation": "Tanaka giải thích nguyên nhân: \"事故で 電車が 止まってしまいました\" (Vì có sự cố tai nạn nên tàu điện đã dừng lại)."
},
  {
  "id": "lis-27",
  "title": "Hội thoại 27: Đổi tiền đô la sang Yên tại ngân hàng",
  "situation": "Du khách đổi 500 USD sang đồng Yên Nhật tại quầy giao dịch ngân hàng.",
  "audioScriptJa": "銀行員：いらっしゃいませ。今日は どのような ご用件でしょうか。女の人：アメリカドルを 日本円に 両替したいのですが。銀行員：かしこまりました。おいくら 両替されますか。女の人：５００ドルです。銀行員：こちらの 用紙に お名前と ご住所を ご記入の上、パスポートを 見せてください。女の人：はい、どうぞ。",
  "audioScriptKana": "ぎんこういん：いらっしゃいませ。きょうは どのような ごようけんしょうか。おんなのひと：あめりかどるを にほんえんに りょうがえしたいのですが。ぎんこういん：かしこまりました。おいくら りょうがえされますか。おんなのひと：ごひゃくどるです。ぎんこういん：こちらの ようしに おなまえと ごじゅうしょを ごきにゅうのうえ、ぱすぽーとを みせてください。おんなのひと：はい、どうぞ。",
  "audioScriptVi": "Nhân viên: Kính chào quý khách. Hôm nay chúng tôi có thể hỗ trợ gì cho quý khách ạ? / Nữ: Tôi muốn đổi đô la Mỹ sang đồng Yên Nhật ạ. / Nhân viên: Vâng ạ. Quý khách muốn đổi bao nhiêu ạ? / Nữ: 500 đô la Mỹ. / Nhân viên: Xin mời quý khách điền họ tên và địa chỉ vào phiếu này, đồng thời xuất trình hộ chiếu giúp tôi ạ. / Nữ: Vâng, gửi anh nhé.",
  "question": "女の人は いくら 両替しますか。 (Người phụ nữ muốn đổi bao nhiêu tiền?)",
  "options": [
    "１００ドル (100 USD)",
    "３００ドル (300 USD)",
    "５００ドル (500 USD)",
    "１０００ドル (1000 USD)"
  ],
  "correctIndex": 2,
  "explanation": "Khách nói rõ ràng số tiền: \"５００ドル (ごひゃくどる) です\"."
},
  {
  "id": "lis-28",
  "title": "Hội thoại 28: Hỏi cách đi ra sân bay Narita nhanh nhất",
  "situation": "Hành khách hỏi thông tin tại quầy Information ga Tokyo.",
  "audioScriptJa": "男の人：すみません。成田空港まで いちばん 早く 行くには どうすれば いいですか。案内係：成田エクスプレスが いちばん 早いです。乗り換えなしで、約１時間で 着きますよ。男の人：普通の 電車だと どのくらい かかりますか。案内係：普通の 電車だと 乗り換えが １回 あって、１時間半くらい かかりますね。男の人：わかりました。成田エクスプレスの 切符を 買います。",
  "audioScriptKana": "おとこのひと：すみません。なりたくうこうまで いちばん はやく いくには どうすれば いいですか。あんないがかり：なりたえくすぷれすが いちばん はやいです。のりかえなしで、やくいちじかんで つきますよ。おとこのひと：ふつうの でんしゃだと どのくらい かかりますか。あんないがかり：ふつうの でんしゃだと のりかえが いっかい あって、いちじかんはんくらい かかりますね。おとこのひと：わかりました。なりたえくすぷれすの きっぷを かいます。",
  "audioScriptVi": "Khách: Xin lỗi anh, để đi đến sân bay Narita nhanh nhất thì nên đi thế nào ạ? / Hướng dẫn viên: Tàu Narita Express là nhanh nhất ạ. Đi thẳng không cần đổi tàu, mất tầm 1 tiếng là đến nơi. / Khách: Nếu đi tàu thường thì mất khoảng bao lâu ạ? / Hướng dẫn viên: Tàu thường thì phải đổi tàu 1 lần và mất khoảng 1 tiếng rưỡi ạ. / Khách: Tôi hiểu rồi, tôi sẽ mua vé Narita Express.",
  "question": "成田エクスプレスで 空港まで どのくらい かかりますか。 (Đi Narita Express đến sân bay mất bao lâu?)",
  "options": [
    "約３０分",
    "約１時間",
    "約１時間半",
    "約２時間"
  ],
  "correctIndex": 1,
  "explanation": "Nhân viên giải thích: \"成田エクスプレスが いちばん 早いです。乗り換えなしで、約１時間で 着きますよ\"."
},
  {
  "id": "lis-29",
  "title": "Hội thoại 29: Gọi tính tiền tại quán nhậu Izakaya",
  "situation": "Nhóm bạn ăn uống xong và gọi phục vụ quán để thanh toán hóa đơn.",
  "audioScriptJa": "男の人：すみません、お会計を お願いします。店員：はい、テーブルで お伺いいたします。全部で ８４００円になります。男の人：別々で 払えますか。店員：申し訳ございません、お会計は ご一緒で お願いしております。男の人：わかりました。じゃ、カードで 払います。",
  "audioScriptKana": "おとこのひと：すみません、おかいけいを おねがいします。てんいん：はい、てーぶるで おうかがいいたします。ぜんぶで はっせんよんひゃくえんになります。おとこのひと：べつべつで はらえますか。てんいん：もうしわけございません、おかいけいは ごいっしょで おねがいしております。おとこのひと：わかりました。じゃ、かーどで はらいます。",
  "audioScriptVi": "Khách: Em ơi, cho anh xin tính tiền nhé! / Phục vụ: Dạ vâng, em xin phép thanh toán tại bàn ạ. Tất cả của bàn mình hết 8400 Yên ạ. / Khách: Bọn anh thanh toán riêng từng người được không em? / Phục vụ: Dạ xin lỗi anh, quán em chỉ nhận thanh toán gộp một lần thôi ạ. / Khách: Được rồi, vậy anh trả thẻ nhé.",
  "question": "お会計は 全部で いくらですか。 (Tổng tiền thanh toán là bao nhiêu?)",
  "options": [
    "４８００円",
    "７４００円",
    "８４００円",
    "９４００円"
  ],
  "correctIndex": 2,
  "explanation": "Nhân viên đọc rõ tổng tiền: \"全部で ８４００円 (はっせんよんひゃくえん) になります\"."
},
  {
  "id": "lis-30",
  "title": "Hội thoại 30: Chúc mừng và tạm biệt bạn về nước",
  "situation": "Buổi tiệc chia tay một người bạn du học sinh hoàn thành khóa học trở về Việt Nam.",
  "audioScriptJa": "女の人：ナムさん、いよいよ 明日 帰国ですね。日本での １年間は どうでしたか。男の人：あっという間でしたが、本当に 楽しかったです。先生や 友達の おかげです。女の人：国へ 帰っても、日本語の 勉強を 続けてくださいね。男の人：はい！ベトナムで 日本の 会社に 就職したいです。女の人：頑張って！応援していますよ。元気でね！",
  "audioScriptKana": "おんなのひと：なむさん、いよいよ あした きこくですね。にほんでの いちねんかんは どうでしたか。おとこのひと：あっというまでしたが、ほんとうに たのしかったです。せんせいや ともだちの おかげです。おんなのひと：くにへ かえっても、にほんごの べんきょうを つづけてくださいね。おとこのひと：はい！べとなむで にほんの かいしゃに しゅうしょくしたいです。おんなのひと：がんばって！おうえんしていますよ。げんきでね！",
  "audioScriptVi": "Nữ: Nam ơi, vậy là ngày mai cậu về nước rồi nhỉ. Một năm ở Nhật Bản cậu thấy thế nào? / Nam: Thời gian trôi nhanh như chớp mắt nhưng mình thật sự rất vui. Tất cả là nhờ có thầy cô và bạn bè giúp đỡ. / Nữ: Về nước rồi cậu vẫn nhớ tiếp tục học tiếng Nhật nhé. / Nam: Chắc chắn rồi! Mình muốn xin vào làm việc tại công ty Nhật ở Việt Nam. / Nữ: Cố lên nhé! Tụi mình luôn ủng hộ cậu. Giữ gìn sức khỏe nhé!",
  "question": "ナムさんは ベトナムで 何を したいですか。 (Bạn Nam muốn làm gì tại Việt Nam?)",
  "options": [
    "旅行会社を 作りたい",
    "日本の 会社に 就職したい",
    "大学院に 行きたい",
    "日本語学校の 先生に なりたい"
  ],
  "correctIndex": 1,
  "explanation": "Nam chia sẻ dự định: \"ベトナムで 日本の 会社に 就職したいです\" (Tôi muốn xin vào làm việc ở công ty Nhật tại Việt Nam)."
}
];
