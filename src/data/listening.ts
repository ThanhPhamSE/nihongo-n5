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
    id: 'lis-1',
    title: 'Hội thoại 1: Tự giới thiệu bản thân tại lớp học',
    situation: 'Bạn Nam lần đầu tiên đến lớp học tiếng Nhật và giới thiệu bản thân với thầy giáo.',
    audioScriptJa: '男の人：はじめまして。わたしは ナムです。ベトナムから きました。学生です。どうぞ よろしく おねがいします。先生：ナムさん、はじめまして。田中です。こちらこそ よろしく。',
    audioScriptKana: 'おとこのひと：はじめまして。わたしは なむです。べとなむから きました。がくせいです。どうぞ よろしく おねがいします。せんせい：なむさん、はじめまして。たなかです。こちらこそ よろしく。',
    audioScriptVi: 'Nam: Rất vui được gặp thầy. Em tên là Nam. Em đến từ Việt Nam. Em là học sinh. Rất mong được thầy giúp đỡ. / Thầy giáo: Chào Nam, thầy là Tanaka. Thầy cũng rất vui được gặp em.',
    question: 'ナムさんは どこの 国の人ですか。 (Bạn Nam là người nước nào?)',
    options: ['にほんじん (Người Nhật)', 'ベトナムじん (Người Việt Nam)', 'アメリカじん (Người Mỹ)', 'ちゅうごくじん (Người Trung Quốc)'],
    correctIndex: 1,
    explanation: 'Trong đoạn hội thoại, bạn Nam nói rõ: "ベトナムから きました" (Tôi đến từ Việt Nam) và "わたしは ナムです". Do đó đáp án chính xác là Người Việt Nam.',
  },
  {
    id: 'lis-2',
    title: 'Hội thoại 2: Hỏi giờ tàu chạy tại nhà ga',
    situation: 'Một hành khách hỏi nhân viên nhà ga Tokyo về chuyến tàu đi Kyoto tiếp theo.',
    audioScriptJa: '女の人：すみません。京都行きの 電車は 何時に 出ますか。駅員：１０時１５分です。女の人：何番線ですか。駅員：３番線ですよ。女の人：どうも ありがとうございます。',
    audioScriptKana: 'おんなのひと：すみません。きょうとゆきの でんしゃは なんじに でますか。えきいん：じゅうじ じゅうごふんです。おんなのひと：なんばんせんですか。えきいん：さんばんせんですよ。おんなのひと：どうも ありがとうございます。',
    audioScriptVi: 'Cô gái: Xin lỗi, tàu đi Kyoto xuất phát lúc mấy giờ ạ? / Nhân viên: Lúc 10 giờ 15 phút. / Cô gái: Ở đường ray số mấy ạ? / Nhân viên: Đường ray số 3 nhé. / Cô gái: Cảm ơn anh rất nhiều.',
    question: '電車は 何時に 出発しますか。 (Tàu điện xuất phát lúc mấy giờ?)',
    options: ['９時１５分 (9:15)', '１０時 (10:00)', '１０時１５分 (10:15)', '１０時５０分 (10:50)'],
    correctIndex: 2,
    explanation: 'Nhân viên nhà ga đã trả lời: "１０時１５分です" (10 giờ 15 phút).',
  },
  {
    id: 'lis-3',
    title: 'Hội thoại 3: Mua sắm tại cửa hàng tiện lợi Konbini',
    situation: 'Khách hàng thanh toán tiền nước và bánh mì tại quầy thu ngân Seven Eleven.',
    audioScriptJa: '店員：いらっしゃいませ。お弁当と お茶ですね。６５０円になります。男の人：Suicaで はらえますか。店員：はい、どうぞ こちらに タッチしてください。',
    audioScriptKana: 'てんいん：いらっしゃいませ。おべんとうと おちゃですね。ろっぴゃくごじゅうえんになります。おとこのひと：すいかで はらえますか。てんいん：はい、どうぞ こちらに たっちしてください。',
    audioScriptVi: 'Thu ngân: Xin kính chào quý khách. Một phần cơm hộp và một chai trà, tổng cộng hết 650 Yên ạ. / Khách: Tôi thanh toán bằng thẻ Suica được không? / Thu ngân: Dạ được, xin mời chạm thẻ vào đây ạ.',
    question: 'ぜんぶで いくらですか。 (Tất cả hết bao nhiêu tiền?)',
    options: ['５６０円 (560 Yên)', '６５０円 (650 Yên)', '６００円 (600 Yên)', '７５０円 (750 Yên)'],
    correctIndex: 1,
    explanation: 'Nhân viên nói rõ: "６５０円 (ろっぴゃくごじゅうえん) になります".',
  },
  {
    id: 'lis-4',
    title: 'Hội thoại 4: Rủ rê đi uống cà phê cuối tuần',
    situation: 'Hai người bạn đồng nghiệp trò chuyện vào giờ giải lao thứ Sáu.',
    audioScriptJa: '男の人：ミラーさん、あした いっしょに 駅前の カフェへ 行きませんか。女の人：あしたは ちょっと 忙しいです。日曜日は どうですか。男の人：日曜日ですね。いいですよ。何時に 会いましょうか。女の人：午後２時は どうですか。男の人：じゃ、２時に 駅で 会いましょう。',
    audioScriptKana: 'おとこのひと：みらーさん、あした いっしょに えきまえの かふぇへ いきませんか。おんなのひと：あしたは ちょっと いそがしいです。にちようびは どうですか。おとこのひと：にちようびですね。いいですよ。なんじに あいましょうか。おんなのひと：ごごにじは どうですか。おとこのひと：じゃ、にじに えきで あいましょう。',
    audioScriptVi: 'Nam: Chị Miller, ngày mai cùng đi quán cà phê trước ga với tôi không? / Miller: Ngày mai tôi hơi bận rồi. Chủ nhật thì sao? / Nam: Chủ nhật à, được đấy. Mấy giờ gặp nhau nhỉ? / Miller: 2 giờ chiều nhé? / Nam: Vậy 2 giờ gặp nhau ở ga nhé.',
    question: 'ふたりは いつ 会いますか。 (Hai người sẽ gặp nhau khi nào?)',
    options: ['土曜日の 午後２時', '日曜日の 午前１０時', '日曜日の 午後２時', '月曜日の 朝'],
    correctIndex: 2,
    explanation: 'Miller bận ngày mai (thứ bảy), hẹn đổi sang Chủ nhật lúc 2 giờ chiều (日曜日の午後２時).',
  },
  {
    id: 'lis-5',
    title: 'Hội thoại 5: Vị trí của đồ vật trong phòng làm việc',
    situation: 'Trưởng phòng hỏi nhân viên vị trí để tập tài liệu báo cáo cuộc họp.',
    audioScriptJa: '課長：佐藤さん、会議の 資料は どこに ありますか。佐藤：机の 上の パソコンの 隣に ありますよ。課長：ああ、ありました。ありがとう。',
    audioScriptKana: 'かちょう：さとうさん、かいぎの しりょうは どこに ありますか。さとう：つくえの うえの ぱそこんの となりに ありますよ。かちょう：ああ、ありました。ありがとう。',
    audioScriptVi: 'Trưởng phòng: Sato, tài liệu cuộc họp đang để ở đâu vậy? / Sato: Ở trên bàn, ngay cạnh máy tính ấy ạ. / Trưởng phòng: À, thấy rồi. Cảm ơn nhé.',
    question: '会議の資料は どこに ありますか。 (Tài liệu cuộc họp ở đâu?)',
    options: ['机の 下 (Dưới gầm bàn)', 'かばんの 中 (Trong cặp sách)', 'パソコンの 隣 (Bên cạnh máy tính)', '本棚の 上 (Trên giá sách)'],
    correctIndex: 2,
    explanation: 'Sato trả lời: "パソコンの 隣に あります" (ở bên cạnh chiếc máy tính trên bàn).',
  },
];

