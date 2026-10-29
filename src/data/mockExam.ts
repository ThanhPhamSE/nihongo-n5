export interface MockExamQuestion {
  id: string;
  section: 'vocab' | 'grammar_reading' | 'listening';
  mondai: string; // e.g. "問題 1: ___ の言葉はどう読みますか。"
  questionNumber: number;
  question: string;
  audioPrompt?: string; // For listening section
  options: string[];
  correctIndex: number;
  explanation: string;
  points: number;
}

export interface MockExam {
  id: string;
  title: string;
  description: string;
  timeLimitMinutes: number;
  totalPoints: number;
  passThresholdPoints: number;
  sectionPassingPoints: {
    vocab: number;
    grammar_reading: number;
    listening: number;
  };
  questions: MockExamQuestion[];
}

export const JLPT_N5_MOCK_EXAM: MockExam = {
  id: 'n5-mock-exam-1',
  title: 'Đề thi thử JLPT N5 Số 1 (Chuẩn cấu trúc chính thức)',
  description: 'Đề thi mô phỏng đầy đủ 3 phần: Kiến thức ngôn ngữ (Từ vựng/Chữ Hán), Ngữ pháp & Đọc hiểu, và Nghe hiểu. Hệ thống tính điểm quy đổi theo thang 180 điểm chuẩn.',
  timeLimitMinutes: 30,
  totalPoints: 180,
  passThresholdPoints: 80,
  sectionPassingPoints: {
    vocab: 19,
    grammar_reading: 19,
    listening: 19,
  },
  questions: [
    // --- PHẦN 1: TỪ VỰNG & CHỮ HÁN (60 điểm) ---
    {
      id: 'm1-q1',
      section: 'vocab',
      mondai: '問題 1: ___ の言葉はどう読みますか。１・２・３・４から いちばん いい ものを ひとつ えらんでください。',
      questionNumber: 1,
      question: 'きのう、あたらしい 【本】 を かいました。',
      options: ['ほん', 'ぼん', 'ぽん', 'ばん'],
      correctIndex: 0,
      explanation: 'Chữ Hán 【本】 (BẢN/BỔN) đọc là ほん (hon), nghĩa là quyển sách.',
      points: 7,
    },
    {
      id: 'm1-q2',
      section: 'vocab',
      mondai: '問題 1: ___ の言葉はどう読みますか。',
      questionNumber: 2,
      question: 'まいあさ 【六時】 に おきます。',
      options: ['しちじ', 'ろくじ', 'はちじ', 'くじ'],
      correctIndex: 1,
      explanation: 'Chữ Hán 【六時】 (LỤC THỜI) đọc là ろくじ (rokuji), nghĩa là 6 giờ.',
      points: 7,
    },
    {
      id: 'm1-q3',
      section: 'vocab',
      mondai: '問題 1: ___ の言葉はどう読みますか。',
      questionNumber: 3,
      question: 'あの 【人】 は わたし の ともだち です。',
      options: ['おとこ', 'ひと', 'こ', 'おんな'],
      correctIndex: 1,
      explanation: 'Chữ Hán 【人】 (NHÂN) đứng độc lập đọc theo Kunyomi là ひと (hito), nghĩa là người.',
      points: 7,
    },
    {
      id: 'm1-q4',
      section: 'vocab',
      mondai: '問題 2: ___ の言葉は どう かきますか。漢字を えらんでください。',
      questionNumber: 4,
      question: 'つめたい 【みず】 を のみます。',
      options: ['木', '火', '水', '金'],
      correctIndex: 2,
      explanation: '【みず】 trong tiếng Nhật viết bằng chữ Hán 【水】 (THỦY), nghĩa là nước.',
      points: 7,
    },
    {
      id: 'm1-q5',
      section: 'vocab',
      mondai: '問題 2: ___ の言葉は どう かきますか。漢字を えらんでください。',
      questionNumber: 5,
      question: 'あの 【やま】 は とても たかい です。',
      options: ['川', '山', '田', '土'],
      correctIndex: 1,
      explanation: '【やま】 viết bằng chữ Hán 【山】 (SƠN), nghĩa là ngọn núi.',
      points: 7,
    },
    {
      id: 'm1-q6',
      section: 'vocab',
      mondai: '問題 3: （　　）に 何を 入れますか。いちばん いい ものを ひとつ えらんでください。',
      questionNumber: 6,
      question: 'へや を でる とき、でんき を （　　）。',
      options: ['つけます', 'けします', 'あけます', 'しめます'],
      correctIndex: 1,
      explanation: 'Khi rời khỏi phòng, hành động đúng là "tắt đèn" -> でんき を けします (tắt điện).',
      points: 8,
    },
    {
      id: 'm1-q7',
      section: 'vocab',
      mondai: '問題 3: （　　）に 何を 入れますか。',
      questionNumber: 7,
      question: 'この りょうり は （　　） おいしい です。',
      options: ['とても', 'あまり', 'ぜんぜん', 'すこし'],
      correctIndex: 0,
      explanation: 'Câu khẳng định "rất ngon" đi với phó từ khẳng định "とても" (rất). あまり và ぜんぜん phải đi với phủ định.',
      points: 8,
    },
    {
      id: 'm1-q8',
      section: 'vocab',
      mondai: '問題 4: つぎの ぶんと だいたい おなじ いみの ぶんは どれですか。',
      questionNumber: 8,
      question: 'きのう、かいしゃ を やすみました。',
      options: [
        'きのう、かいしゃ へ いきませんでした。',
        'きのう、かいしゃ へ いきました。',
        'きのう、かいしゃ で はたらきました。',
        'きのう、かいしゃ を やめました。',
      ],
      correctIndex: 0,
      explanation: 'Nghỉ làm ở công ty (かいしゃ を やすみました) đồng nghĩa với việc không đến công ty (かいしゃ へ いきませんでした).',
      points: 9,
    },

    // --- PHẦN 2: NGỮ PHÁP & ĐỌC HIỂU (60 điểm) ---
    {
      id: 'm1-q9',
      section: 'grammar_reading',
      mondai: '問題 1: （　　）に 何を 入れますか。助詞を えらんでください。',
      questionNumber: 9,
      question: 'わたし は 日曜日 （　　） テニス を します。',
      options: ['に', 'で', 'を', 'へ'],
      correctIndex: 0,
      explanation: 'Ngày trong tuần (日曜日) là mốc thời gian xác định nên đi với trợ từ に.',
      points: 7,
    },
    {
      id: 'm1-q10',
      section: 'grammar_reading',
      mondai: '問題 1: （　　）に 何を 入れますか。助詞を えらんでください。',
      questionNumber: 10,
      question: 'スーパー （　　） パン と 牛乳 を 買いました。',
      options: ['に', 'へ', 'で', 'を'],
      correctIndex: 2,
      explanation: 'Hành động mua sắm (買いました) diễn ra tại siêu thị, nơi diễn ra hành động dùng trợ từ で.',
      points: 7,
    },
    {
      id: 'm1-q11',
      section: 'grammar_reading',
      mondai: '問題 1: （　　）に 何を 入れますか。',
      questionNumber: 11,
      question: 'すみません、その 窓 を （　　） ください。',
      options: ['あけて', 'あけます', 'あける', 'あけない'],
      correctIndex: 0,
      explanation: 'Mẫu câu nhờ vả lịch sự yêu cầu động từ chia sang thể て: V-て + ください -> あけてください.',
      points: 7,
    },
    {
      id: 'm1-q12',
      section: 'grammar_reading',
      mondai: '問題 2: ★ に 入る ものは どれですか。言葉を ならびかえてください。',
      questionNumber: 12,
      question: 'わたしは　＿＿　＿＿　★　＿＿　行きます。\n(1: で　2: 会社　3: 電車　4: へ)',
      options: ['1: で', '2: 会社', '3: 電車', '4: へ'],
      correctIndex: 1, // Thứ tự đúng: 電車(3) で(1) 会社(2) へ(4) -> Vị trí ★ là 会社 (2)
      explanation: 'Thứ tự đúng: わたしは [電車(3)] [で(1)] [★会社(2)] [へ(4)] 行きます。Vậy ở vị trí dấu sao là số 2 (会社).',
      points: 8,
    },
    {
      id: 'm1-q13',
      section: 'grammar_reading',
      mondai: '問題 3: 適切な 形を えらんでください。',
      questionNumber: 13,
      question: 'あした は 休みですから、早く （　　） いいです。',
      options: ['起きなくても', '起きなければ', '起きないで', '起きて'],
      correctIndex: 0,
      explanation: 'Mẫu câu không cần làm gì cũng được: V-なくてもいいです -> 起きなくてもいいです (Không cần dậy sớm cũng được).',
      points: 8,
    },
    {
      id: 'm1-q14',
      section: 'grammar_reading',
      mondai: '問題 4: 読解（文章を 読んで、質問に 答えてください）',
      questionNumber: 14,
      question: '【文章】田中さんは 毎朝 ７時に 起きます。朝ごはんは いつも 食べません。コーヒーだけ 飲みます。８時に 車で 会社へ 行きます。夜は ８時まで 働きます。田中さんは 忙しいですから、週末は よく うちで ゆっくり 休みます。\n\n質問：田中さんは 朝、何を食べますか。',
      options: [
        'パンと 卵を 食べます。',
        '何も 食べません。',
        'くだものを 食べます。',
        '会社で 食べます。',
      ],
      correctIndex: 1,
      explanation: 'Trong bài đọc ghi rõ: "朝ごはんは いつも 食べません。コーヒーだけ 飲みます" (Bữa sáng luôn không ăn gì, chỉ uống cà phê).',
      points: 11,
    },
    {
      id: 'm1-q15',
      section: 'grammar_reading',
      mondai: '問題 4: 読解（質問に 答えてください）',
      questionNumber: 15,
      question: '質問：田中さんは 週末、何を しますか。',
      options: [
        '車で 旅行へ 行きます。',
        '会社で ８時まで 働きます。',
        'うちで ゆっくり 休みます。',
        'テニスを します。',
      ],
      correctIndex: 2,
      explanation: 'Câu cuối bài ghi: "週末は よく うちで ゆっくり 休みます" (Cuối tuần thường thong thả nghỉ ngơi ở nhà).',
      points: 12,
    },

    // --- PHẦN 3: NGHE HIỂU (60 điểm) ---
    {
      id: 'm1-q16',
      section: 'listening',
      mondai: '問題 1: 聴解（課題理解）- 音声を 聞いて、質問に 答えてください。',
      questionNumber: 16,
      question: '男の人は これから どこへ 行きますか。 (Người đàn ông tiếp theo đây sẽ đi đâu?)',
      audioPrompt: '女の人：山田さん、これから どこへ 行きますか。男の人：駅の 前の 銀行へ 行って、お金を おろします。そのあとで、本屋へ 行きます。女の人：そうですか。男の人：じゃ、行ってきます。',
      options: [
        '駅前の 銀行 (Ngân hàng trước ga)',
        '本屋 (Hiệu sách)',
        'うち (Về nhà)',
        '郵便局 (Bưu điện)',
      ],
      correctIndex: 0,
      explanation: 'Người đàn ông nói hành động làm ngay bây giờ: "駅の 前の 銀行へ 行って... そのあとで 本屋へ" (Đến ngân hàng trước ga, sau đó mới đi hiệu sách). Vậy nơi đi ngay bây giờ là Ngân hàng trước ga.',
      points: 12,
    },
    {
      id: 'm1-q17',
      section: 'listening',
      mondai: '問題 1: 聴解（ポイント理解）',
      questionNumber: 17,
      question: '会議は 何曜日に ありますか。 (Cuộc họp diễn ra vào thứ mấy?)',
      audioPrompt: '男の人：鈴木さん、今週の 会議は 木曜日でしたね。女の人：あ、すみません。木曜日は 部長が 出張ですから、金曜日に かわりましたよ。男の人：そうですか。わかりました。',
      options: ['水曜日 (Thứ 4)', '木曜日 (Thứ 5)', '金曜日 (Thứ 6)', '土曜日 (Thứ 7)'],
      correctIndex: 2,
      explanation: 'Ban đầu định là thứ Năm (木曜日), nhưng vì trưởng phòng đi công tác nên đã đổi sang thứ Sáu: "金曜日に かわりましたよ".',
      points: 12,
    },
    {
      id: 'm1-q18',
      section: 'listening',
      mondai: '問題 2: 聴解（発話表現）',
      questionNumber: 18,
      question: '友達の 家に 入るとき、何と 言いますか。 (Khi bước vào nhà bạn bè, nói câu gì lịch sự?)',
      audioPrompt: '場面：友達の 家を 訪問して、玄関から 部屋に 上がります。何と 言いますか。',
      options: [
        'いただきます。',
        'おじゃまします。',
        'ごちそうさまでした。',
        'いってきます。',
      ],
      correctIndex: 1,
      explanation: 'Khi bước vào nhà người khác, người Nhật luôn nói "おじゃまします" (Xin phép làm phiền gia đình ạ).',
      points: 12,
    },
    {
      id: 'm1-q19',
      section: 'listening',
      mondai: '問題 3: 聴解（即時応答）',
      questionNumber: 19,
      question: '「コーヒーを もう いっぱい いかがですか。」と 言われました。何と 答えますか。',
      audioPrompt: '音声：「コーヒーを もう いっぱい いかがですか。」',
      options: [
        'いいえ、まだです。',
        'いいえ、もう けっこうです。',
        'どういたしまして。',
        'ごめんなさい。',
      ],
      correctIndex: 1,
      explanation: 'Khi được mời thêm nước/cà phê và muốn từ chối khéo, cách đáp lịch sự nhất là: "いいえ、もう けっこうです" (Dạ thôi, tôi đủ rồi ạ).',
      points: 12,
    },
    {
      id: 'm1-q20',
      section: 'listening',
      mondai: '問題 3: 聴解（即時応答）',
      questionNumber: 20,
      question: '「どうも ありがとうございました。」と 言われました。何と 答えますか。',
      audioPrompt: '音声：「どうも ありがとうございました。」',
      options: [
        'どういたしまして。',
        'こちらこそ。',
        'はい、そうです。',
        'さようなら。',
      ],
      correctIndex: 0,
      explanation: 'Đáp lại lời cảm ơn "どうも ありがとうございました" chuẩn mực nhất là "どういたしまして" (Không có gì ạ).',
      points: 12,
    },
  ],
};

