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
];
