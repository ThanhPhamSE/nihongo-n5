const fs = require('fs');
const path = require('path');

const targetFile = path.join(__dirname, '../src/data/lessons.ts');

const NEW_QUESTIONS = {
  'tuan-1-hiragana-co-ban': [
    {
      id: 'q1-4',
      question: 'Từ "ありがとう" có nghĩa là gì trong tiếng Việt?',
      questionType: 'multiple_choice',
      options: ['Xin lỗi', 'Cảm ơn', 'Tạm biệt', 'Không có chi'],
      correctAnswerIndex: 1,
      explanation: 'ありがとう (Arigatou) là từ cảm ơn thông dụng trong tiếng Nhật.',
    },
    {
      id: 'q1-5',
      question: 'Chữ cái "ね" thuộc hàng âm nào trong bảng Hiragana?',
      questionType: 'multiple_choice',
      options: ['Hàng Ma', 'Hàng Na', 'Hàng Ta', 'Hàng Ra'],
      correctAnswerIndex: 1,
      explanation: 'ね (ne) thuộc hàng Na (な, に, ぬ, ね, の).',
    },
    {
      id: 'q1-6',
      question: 'Từ "おはよう" là lời chào dùng vào thời điểm nào?',
      questionType: 'multiple_choice',
      options: ['Buổi sáng', 'Buổi trưa', 'Buổi tối', 'Trước khi đi ngủ'],
      correctAnswerIndex: 0,
      explanation: 'おはよう (Ohayou) dùng để chào vào buổi sáng.',
    },
  ],

  'tuan-1-bien-am-hiragana': [
    {
      id: 'q2-4',
      question: 'Chữ "が" (ga) là biến âm của chữ nào khi thêm dấu Tenten (゛)?',
      questionType: 'multiple_choice',
      options: ['か (ka)', 'さ (sa)', 'た (ta)', 'は (ha)'],
      correctAnswerIndex: 0,
      explanation: 'Hàng Ka thêm dấu tenten ゛ trở thành hàng Ga (が, ぎ, ぐ, げ, ご).',
    },
    {
      id: 'q2-5',
      question: 'Chữ "ぱ" (pa) có dấu tròn Maru (゜) là biến âm của chữ nào?',
      questionType: 'multiple_choice',
      options: ['ば (ba)', 'は (ha)', 'ま (ma)', 'た (ta)'],
      correctAnswerIndex: 1,
      explanation: 'Hàng Ha thêm dấu maru ゜ trở thành hàng Pa (ぱ, ぴ, ぷ, ぺ, ぽ).',
    },
    {
      id: 'q2-6',
      question: 'Khi đóng vai trò là trợ từ chủ ngữ, chữ "は" được phát âm là gì?',
      questionType: 'multiple_choice',
      options: ['ha', 'wa', 'fa', 'ba'],
      correctAnswerIndex: 1,
      explanation: 'Khi làm trợ từ đứng sau chủ đề câu, "は" đọc là "wa".',
    },
  ],

  'tuan-2-katakana-toan-tap': [
    {
      id: 'q3-4',
      question: 'Từ Katakana "コーヒー" có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Trà xanh', 'Cà phê', 'Nước ngọt', 'Bia'],
      correctAnswerIndex: 1,
      explanation: 'コーヒー (koohii) mượn từ tiếng Hà Lan/Anh có nghĩa là cà phê.',
    },
    {
      id: 'q3-5',
      question: 'Từ Katakana "パン" (pan) có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Bánh mì', 'Cơm hộp', 'Xúc xích', 'Bánh kem'],
      correctAnswerIndex: 0,
      explanation: 'パン (pan) mượn từ tiếng Bồ Đào Nha có nghĩa là bánh mì.',
    },
    {
      id: 'q3-6',
      question: 'Chữ Katakana "ア" tương ứng với chữ Hiragana nào?',
      questionType: 'multiple_choice',
      options: ['い', 'う', 'あ', 'お'],
      correctAnswerIndex: 2,
      explanation: 'ア là chữ cái "a" trong bảng Katakana, tương ứng với chữ あ.',
    },
  ],

  'tuan-2-am-ghep-truong-am': [
    {
      id: 'q4-4',
      question: 'Từ "きって" (con tem) chứa âm đặc biệt nào ở giữa?',
      questionType: 'multiple_choice',
      options: ['Trường âm', 'Âm ngắt (Sokuon っ)', 'Âm ghép (Yoon)', 'Biến âm'],
      correctAnswerIndex: 1,
      explanation: 'Chữ っ nhỏ biểu thị âm ngắt, ngắt một phách trước phụ t.',
    },
    {
      id: 'q4-5',
      question: 'Âm ghép "しゃ" (sha) được tạo thành từ chữ nào ghép với "ゃ" nhỏ?',
      questionType: 'multiple_choice',
      options: ['し (shi)', 'き (ki)', 'ち (chi)', 'ひ (hi)'],
      correctAnswerIndex: 0,
      explanation: 'し (shi) ghép với ゃ nhỏ tạo thành âm "sha".',
    },
    {
      id: 'q4-6',
      question: 'Ký hiệu trường âm dấu gạch ngang "ー" trong Katakana có tác dụng gì?',
      questionType: 'multiple_choice',
      options: ['Kéo dài nguyên âm thêm một phách', 'Ngắt âm lại', 'Hạ giọng câu', 'Nối hai từ lại'],
      correctAnswerIndex: 0,
      explanation: 'Dấu ー là dấu trường âm đặc trưng của chữ Katakana.',
    },
  ],

  'minna-bai-1-tu-gioi-thieu': [
    {
      id: 'q5-4',
      question: 'Chọn trợ từ thích hợp: "わたし ___ 学生です。"',
      questionType: 'multiple_choice',
      options: ['が', 'は', 'を', 'に'],
      correctAnswerIndex: 1,
      explanation: 'Trợ từ "は" đi sau chủ đề "わたし" (Tôi là học sinh).',
    },
    {
      id: 'q5-5',
      question: 'Dạng phủ định lịch sự của "です" trong câu danh từ là gì?',
      questionType: 'multiple_choice',
      options: ['でした', 'じゃありません', 'くありません', 'ます'],
      correctAnswerIndex: 1,
      explanation: 'Phủ định của N です là N じゃありません (hoặc ではありません).',
    },
    {
      id: 'q5-6',
      question: 'Từ "せんせい" (tiên sinh) có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Học sinh', 'Bác sĩ/Giáo viên', 'Kỹ sư', 'Nhân viên'],
      correctAnswerIndex: 1,
      explanation: '先生 (せんせい) dùng để gọi thầy cô giáo, bác sĩ hoặc người có chuyên môn.',
    },
  ],

  'minna-bai-2-do-vat-xung-quanh': [
    {
      id: 'q6-4',
      question: 'Từ chỉ định nào dùng để chỉ vật ở gần người nghe?',
      questionType: 'multiple_choice',
      options: ['これ', 'それ', 'あれ', 'どれ'],
      correctAnswerIndex: 1,
      explanation: 'それ dùng để chỉ đồ vật ở gần phía người nghe.',
    },
    {
      id: 'q6-5',
      question: 'Điền vào chỗ trống: "この 辞書 ___ 先生のです。"',
      questionType: 'multiple_choice',
      options: ['は', 'の', 'を', 'も'],
      correctAnswerIndex: 0,
      explanation: 'Trợ từ "は" nhấn mạnh chủ đề: Cuốn từ điển này là của thầy giáo.',
    },
    {
      id: 'q6-6',
      question: 'Phân biệt "これ" và "この": Sau "この" bắt buộc phải đi kèm với gì?',
      questionType: 'multiple_choice',
      options: ['Động từ', 'Danh từ', 'Tính từ', 'Trợ từ ngay lập tức'],
      correctAnswerIndex: 1,
      explanation: 'この + Danh từ (ví dụ: この本, この人).',
    },
  ],

  'minna-bai-3-noi-chon-mua-sam': [
    {
      id: 'q7-4',
      question: 'Từ để hỏi giá tiền trong tiếng Nhật là gì?',
      questionType: 'multiple_choice',
      options: ['どこ', 'いくら', 'だれ', 'なんじ'],
      correctAnswerIndex: 1,
      explanation: 'いくら dùng để hỏi giá tiền: "いくらですか" (Bao nhiêu tiền?).',
    },
    {
      id: 'q7-5',
      question: 'Từ nào chỉ vị trí "ở đằng kia" (xa cả người nói lẫn người nghe)?',
      questionType: 'multiple_choice',
      options: ['ここ', 'そこ', 'あそこ', 'どこ'],
      correctAnswerIndex: 2,
      explanation: 'あそこ chỉ vị trí ở xa cả hai người.',
    },
    {
      id: 'q7-6',
      question: 'Câu "お手洗いは どこですか" có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Nhà vệ sinh ở đâu ạ?', 'Cửa hàng ở đâu ạ?', 'Nhà ga ở đâu ạ?', 'Phòng học ở đâu ạ?'],
      correctAnswerIndex: 0,
      explanation: 'お手洗い (おてあらい) là cách nói lịch sự của nhà vệ sinh.',
    },
  ],

  'minna-bai-4-thoi-gian-dong-tu': [
    {
      id: 'q8-4',
      question: 'Chọn trợ từ đi sau mốc thời gian cụ thể: "毎朝 ７時 ___ 起きます。"',
      questionType: 'multiple_choice',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswerIndex: 0,
      explanation: 'Trợ từ "に" đi sau mốc thời gian có con số cụ thể (7時に).',
    },
    {
      id: 'q8-5',
      question: 'Cặp trợ từ nào biểu thị mốc bắt đầu và kết thúc "từ... đến..."?',
      questionType: 'multiple_choice',
      options: ['へ ... に', 'から ... まで', 'で ... と', 'も ... は'],
      correctAnswerIndex: 1,
      explanation: '〜から 〜まで: từ ... đến ... (ví dụ: ９時から ５時まで).',
    },
    {
      id: 'q8-6',
      question: 'Động từ "おきます" (thức dậy) ở thể quá khứ là gì?',
      questionType: 'multiple_choice',
      options: ['おきません', 'おきました', 'おきませんでした', 'おきている'],
      correctAnswerIndex: 1,
      explanation: 'Đuôi 〜ました là dạng khẳng định quá khứ của động từ.',
    },
  ],

  'minna-bai-5-di-chuyen-phuong-tien': [
    {
      id: 'q9-4',
      question: 'Chọn trợ từ chỉ phương tiện di chuyển: "電車 ___ 行きます。"',
      questionType: 'multiple_choice',
      options: ['に', 'で', 'を', 'へ'],
      correctAnswerIndex: 1,
      explanation: 'Trợ từ "で" đi sau phương tiện giao thông (電車で, バスで).',
    },
    {
      id: 'q9-5',
      question: 'Chọn trợ từ chỉ hướng đích đến: "日本 ___ 来ました。"',
      questionType: 'multiple_choice',
      options: ['へ', 'で', 'を', 'と'],
      correctAnswerIndex: 0,
      explanation: 'Trợ từ "へ" (hoặc に) chỉ phương hướng đích đến.',
    },
    {
      id: 'q9-6',
      question: 'Trường hợp nào đi bộ thì KHÔNG dùng trợ từ "で"?',
      questionType: 'multiple_choice',
      options: ['自転車', '歩いて (あるいて)', 'タクシー', '飛行機'],
      correctAnswerIndex: 1,
      explanation: 'Đi bộ dùng cụm "歩いて" (aruite), không đi kèm trợ từ で.',
    },
  ],

  'minna-bai-6-hanh-dong-an-uong': [
    {
      id: 'q10-4',
      question: 'Chọn trợ từ biểu thị đối tượng chịu tác động: "ご飯 ___ 食べます。"',
      questionType: 'multiple_choice',
      options: ['を', 'に', 'で', 'が'],
      correctAnswerIndex: 0,
      explanation: 'Trợ từ "を" đứng trước động từ ngoại động chỉ đối tượng bị tác động.',
    },
    {
      id: 'q10-5',
      question: 'Chọn trợ từ chỉ địa điểm diễn ra hành động: "レストラン ___ 食べます。"',
      questionType: 'multiple_choice',
      options: ['に', 'で', 'へ', 'を'],
      correctAnswerIndex: 1,
      explanation: 'Hành động xảy ra ở đâu thì đi với trợ từ "で".',
    },
    {
      id: 'q10-6',
      question: 'Mẫu câu rủ rê cùng nhau làm gì "〜ましょう" có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Không được làm', 'Cùng làm... nhé!', 'Muốn làm', 'Đã làm xong'],
      correctAnswerIndex: 1,
      explanation: 'V-ましょう là câu hô hào, rủ rê cùng hành động.',
    },
  ],

  'minna-bai-7-cong-cu-cho-nhan': [
    {
      id: 'q11-4',
      question: 'Chọn trợ từ chỉ công cụ/dụng cụ: "はし ___ 食べます。"',
      questionType: 'multiple_choice',
      options: ['で', 'に', 'を', 'と'],
      correctAnswerIndex: 0,
      explanation: 'Dùng đũa ăn: はしで (trợ từ で chỉ công cụ/phương tiện).',
    },
    {
      id: 'q11-5',
      question: 'Chọn trợ từ chỉ người nhận quà: "友達 ___ プレゼントを あげます。"',
      questionType: 'multiple_choice',
      options: ['に', 'で', 'を', 'から'],
      correctAnswerIndex: 0,
      explanation: 'Tặng cho ai thì người đó đi với trợ từ "に".',
    },
    {
      id: 'q11-6',
      question: 'Động từ "もらいます" có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Cho, tặng', 'Nhận được', 'Mượn', 'Bán'],
      correctAnswerIndex: 1,
      explanation: 'もらう nghĩa là nhận được từ người khác.',
    },
  ],

  'minna-bai-8-tinh-tu-mieu-ta': [
    {
      id: 'q12-4',
      question: 'Dạng phủ định của tính từ đuôi い "高い" (たかい - đắt) là gì?',
      questionType: 'multiple_choice',
      options: ['高くないです', '高いじゃないです', '高くありませんでした', '高くないでした'],
      correctAnswerIndex: 0,
      explanation: 'Tính từ đuôi い bỏ い thêm くない (高くないです).',
    },
    {
      id: 'q12-5',
      question: 'Khi tính từ đuôi な bổ nghĩa cho danh từ, ta làm như thế nào?',
      questionType: 'multiple_choice',
      options: ['Giữ nguyên chữ な nối với danh từ', 'Bỏ な', 'Thêm trợ từ の', 'Đổi sang đuôi い'],
      correctAnswerIndex: 0,
      explanation: 'Tính từ đuôi な đứng trước danh từ phải giữ chữ な (ví dụ: きれいな花).',
    },
    {
      id: 'q12-6',
      question: 'Phủ định hiện tại của tính từ đuôi な "静か" (しずか) là gì?',
      questionType: 'multiple_choice',
      options: ['静かくないです', '静かじゃありません', '静かでした', '静かじゃないでした'],
      correctAnswerIndex: 1,
      explanation: 'Tính từ đuôi な phủ định giống danh từ: 静かじゃありません.',
    },
  ],

  'minna-bai-9-so-thich-nang-luc': [
    {
      id: 'q13-4',
      question: 'Chọn trợ từ đi trước "好きです": "日本語 ___ 好きです。"',
      questionType: 'multiple_choice',
      options: ['を', 'が', 'に', 'で'],
      correctAnswerIndex: 1,
      explanation: 'Tân ngữ của tính từ 好き/嫌い/上手/下手 luôn đi với trợ từ "が".',
    },
    {
      id: 'q13-5',
      question: 'Trợ từ nào đi trước "わかります" (hiểu) và "できます" (có thể)?',
      questionType: 'multiple_choice',
      options: ['が', 'を', 'に', 'で'],
      correctAnswerIndex: 0,
      explanation: 'Đối tượng hiểu/làm được đi với trợ từ "が" (ví dụ: 日本語が わかります).',
    },
    {
      id: 'q13-6',
      question: 'Phó từ nào mang nghĩa "hoàn toàn không... chút nào" đi với câu phủ định?',
      questionType: 'multiple_choice',
      options: ['とても', 'たくさん', 'ぜんぜん', '少し'],
      correctAnswerIndex: 2,
      explanation: 'ぜんぜん + Phủ định: hoàn toàn không chút nào.',
    },
  ],

  'minna-bai-10-vi-tri-ton-tai': [
    {
      id: 'q14-4',
      question: 'Với con người và động vật sống, ta dùng động từ tồn tại nào?',
      questionType: 'multiple_choice',
      options: ['あります', 'います', 'します', 'いきます'],
      correctAnswerIndex: 1,
      explanation: 'Con người và sinh vật cử động được dùng động từ "います".',
    },
    {
      id: 'q14-5',
      question: 'Với đồ vật vô tri và cây cối, ta dùng động từ tồn tại nào?',
      questionType: 'multiple_choice',
      options: ['あります', 'います', 'おきます', 'みます'],
      correctAnswerIndex: 0,
      explanation: 'Đồ vật, cây cối, sự kiện dùng "あります".',
    },
    {
      id: 'q14-6',
      question: 'Chọn trợ từ vị trí tồn tại: "机の 上 ___ 本が あります。"',
      questionType: 'multiple_choice',
      options: ['で', 'に', 'を', 'へ'],
      correctAnswerIndex: 1,
      explanation: 'Nơi có vật tồn tại dùng trợ từ "に" (机の上に).',
    },
  ],

  'minna-bai-11-so-dem-luong-tu': [
    {
      id: 'q15-4',
      question: 'Đếm đồ vật chung: "1 cái", "2 cái" đọc là gì?',
      questionType: 'multiple_choice',
      options: ['いち、に', 'ひとつ、ふたつ', 'いっぽん、にほん', 'ひとり、ふたり'],
      correctAnswerIndex: 1,
      explanation: 'Đếm đồ vật chung: ひとつ (1 cái), ふたつ (2 cái), みっつ (3 cái)...',
    },
    {
      id: 'q15-5',
      question: 'Lượng từ số lượng thường đứng ở vị trí nào trong câu?',
      questionType: 'multiple_choice',
      options: ['Đầu câu', 'Ngay trước động từ', 'Cuối câu sau です', 'Sau trợ từ は'],
      correctAnswerIndex: 1,
      explanation: 'Lượng từ thường đứng ngay trước động từ và không cần trợ từ.',
    },
    {
      id: 'q15-6',
      question: 'Đếm người: "1 người", "2 người" đọc là gì?',
      questionType: 'multiple_choice',
      options: ['いちにん、ににん', 'ひとり、ふたり', 'いっさい、にさい', 'ひとつ、ふたつ'],
      correctAnswerIndex: 1,
      explanation: '1 người là ひとり, 2 người là ふたり (từ 3 người là さんにん).',
    },
  ],

  'minna-bai-14-chia-the-te-nho-va': [
    {
      id: 'q16-4',
      question: 'Động từ nhóm 1 đuôi き "書きます" (かきます) đổi sang thể て là gì?',
      questionType: 'multiple_choice',
      options: ['かいて', 'かいって', 'かちて', 'かみて'],
      correctAnswerIndex: 0,
      explanation: 'Quy tắc nhóm 1: き biến thành いて (かきます -> かいて).',
    },
    {
      id: 'q16-5',
      question: 'Động từ nhóm 1 đuôi み "飲みます" (のみます) đổi sang thể て là gì?',
      questionType: 'multiple_choice',
      options: ['のんで', 'のみて', 'のって', 'のいて'],
      correctAnswerIndex: 0,
      explanation: 'Quy tắc nhóm 1: み/に/び biến thành んで (のみます -> のんで).',
    },
    {
      id: 'q16-6',
      question: 'Mẫu câu nhờ vả lịch sự "Xin hãy làm V": V thể て + ___?',
      questionType: 'multiple_choice',
      options: ['ください', 'もいいです', 'はいけません', 'から'],
      correctAnswerIndex: 0,
      explanation: 'V-てください: Xin hãy làm gì đó.',
    },
  ],

  'minna-bai-15-xin-phep-cam-doan': [
    {
      id: 'q17-4',
      question: 'Mẫu câu xin phép "Tôi làm ... có được không?" là gì?',
      questionType: 'multiple_choice',
      options: ['V-ても いいですか', 'V-ては いけません', 'V-てください', 'V-ています'],
      correctAnswerIndex: 0,
      explanation: 'V-てもいいですか dùng để xin phép đối phương.',
    },
    {
      id: 'q17-5',
      question: 'Mẫu câu cấm đoán "Không được làm ..." là gì?',
      questionType: 'multiple_choice',
      options: ['V-ても いいです', 'V-ては いけません', 'V-ないで ください', 'V-たほうがいい'],
      correctAnswerIndex: 1,
      explanation: 'V-てはいけません biểu thị sự cấm đoán mạnh.',
    },
    {
      id: 'q17-6',
      question: 'Câu "ここで 写真を 撮っては いけません" có nghĩa là gì?',
      questionType: 'multiple_choice',
      options: ['Xin hãy chụp ảnh ở đây.', 'Được phép chụp ảnh ở đây.', 'Không được chụp ảnh ở đây.', 'Đang chụp ảnh ở đây.'],
      correctAnswerIndex: 2,
      explanation: '撮ってはいけません: Không được phép chụp ảnh.',
    },
  ],

  'minna-bai-17-the-nai-bat-buoc': [
    {
      id: 'q18-4',
      question: 'Động từ nhóm 2 "食べます" chia sang thể ない là gì?',
      questionType: 'multiple_choice',
      options: ['たべらない', 'たべない', 'たばない', 'たべしない'],
      correctAnswerIndex: 1,
      explanation: 'Động từ nhóm 2 chỉ cần bỏ ます thêm ない (たべます -> たべない).',
    },
    {
      id: 'q18-5',
      question: 'Mẫu câu bắt buộc "Phải làm V" là gì?',
      questionType: 'multiple_choice',
      options: ['V-なければ なりません', 'V-なくても いいです', 'V-ないで ください', 'V-た ことが あります'],
      correctAnswerIndex: 0,
      explanation: 'V-なければなりません: Phải làm việc gì đó.',
    },
    {
      id: 'q18-6',
      question: 'Mẫu câu "Không cần làm V cũng được" là gì?',
      questionType: 'multiple_choice',
      options: ['V-なくても いいです', 'V-なければ なりません', 'V-ても いいです', 'V-ては いけません'],
      correctAnswerIndex: 0,
      explanation: 'V-なくてもいいです: Không làm cũng không sao.',
    },
  ],

  'minna-bai-19-the-ta-kinh-nghiem': [
    {
      id: 'q19-4',
      question: 'Mẫu câu biểu thị kinh nghiệm "Đã từng làm V" là gì?',
      questionType: 'multiple_choice',
      options: ['V-た ことが あります', 'V-て います', 'V-る ことが できます', 'V-た ほうが いいです'],
      correctAnswerIndex: 0,
      explanation: 'V-た ことがある nói về trải nghiệm đã từng có trong quá khứ.',
    },
    {
      id: 'q19-5',
      question: 'Động từ đặc biệt "行きます" (いきます) chia thể た là gì?',
      questionType: 'multiple_choice',
      options: ['いいた', 'いった', 'いきいた', 'いきた'],
      correctAnswerIndex: 1,
      explanation: 'Động từ 行きます là trường hợp bất quy tắc: いった.',
    },
    {
      id: 'q19-6',
      question: 'Mẫu câu liệt kê các hành động tiêu biểu không theo thứ tự thời gian là gì?',
      questionType: 'multiple_choice',
      options: ['〜て、〜て', '〜たり、〜たり します', '〜ながら', '〜まえに'],
      correctAnswerIndex: 1,
      explanation: 'V1-たり、V2-たり します dùng để liệt kê hành động tượng trưng.',
    },
  ],

  'minna-bai-20-the-thong-thuong': [
    {
      id: 'q20-4',
      question: 'Thể thông thường (thể ngắn) dạng khẳng định hiện tại của "行きます" là gì?',
      questionType: 'multiple_choice',
      options: ['いく', 'いかない', 'いった', 'いかなかった'],
      correctAnswerIndex: 0,
      explanation: 'Khẳng định hiện tại thể ngắn tương ứng với thể từ điển (Jishokei): いく.',
    },
    {
      id: 'q20-5',
      question: 'Thể thông thường của "食べません" là gì?',
      questionType: 'multiple_choice',
      options: ['たべる', 'たべない', 'たべた', 'たべなかった'],
      correctAnswerIndex: 1,
      explanation: 'Phủ định hiện tại thể ngắn tương ứng với thể ない: たべない.',
    },
    {
      id: 'q20-6',
      question: 'Thể thông thường của tính từ đuôi な "きれいです" là gì?',
      questionType: 'multiple_choice',
      options: ['きれい', 'きれいだ', 'きれいで', 'きれいくない'],
      correctAnswerIndex: 1,
      explanation: 'Tính từ đuôi な và danh từ trong câu khẳng định thể ngắn chuyển です thành だ.',
    },
  ],

  'tuan-11-tong-on-tu-vung-ngu-phap': [
    {
      id: 'q21-4',
      question: 'Phó từ nào mang ý nghĩa mức độ "rất, vô cùng"?',
      questionType: 'multiple_choice',
      options: ['あまり', 'とても', 'ぜんぜん', 'すこし'],
      correctAnswerIndex: 1,
      explanation: 'とても nghĩa là rất, cực kỳ (ví dụ: とても暑い).',
    },
    {
      id: 'q21-5',
      question: 'Dạng quá khứ của tính từ đuôi い "あつい" (nóng) là gì?',
      questionType: 'multiple_choice',
      options: ['あつかったです', 'あついでした', 'あつくないでした', 'あついくない'],
      correctAnswerIndex: 0,
      explanation: 'Tính từ đuôi い bỏ い thêm かった (あつかったです).',
    },
    {
      id: 'q21-6',
      question: 'Phân biệt "から" và "ので": Liên từ "ので" có đặc điểm gì?',
      questionType: 'multiple_choice',
      options: ['Mang sắc thái lịch sự, khách quan và nhẹ nhàng hơn から', 'Chỉ dùng cho câu mệnh lệnh', 'Chỉ dùng với người dưới', 'Không dùng trong văn viết'],
      correctAnswerIndex: 0,
      explanation: 'ので mang sắc thái khách quan, lịch sự hơn から.',
    },
  ],

  'tuan-11-ky-nang-doc-va-nghe': [
    {
      id: 'q22-4',
      question: 'Trong bài thi nghe JLPT N5, thông tin kết luận quyết định thường nằm ở đâu?',
      questionType: 'multiple_choice',
      options: ['Câu nói đầu tiên', 'Đoạn cuối của lượt thoại', 'Chỉ người hỏi mới nói', 'Không xác định được'],
      correctAnswerIndex: 1,
      explanation: 'Trong giao tiếp Nhật, lời chốt hạ hoặc thay đổi ý định thường xuất hiện ở câu cuối cùng.',
    },
    {
      id: 'q22-5',
      question: 'Liên từ "でも" đặt ở đầu câu mang ý nghĩa gì?',
      questionType: 'multiple_choice',
      options: ['Và rồi', 'Nhưng, tuy nhiên', 'Vì thế', 'Hoặc là'],
      correctAnswerIndex: 1,
      explanation: 'でも dùng để chuyển ý mang nghĩa "tuy nhiên / nhưng mà".',
    },
    {
      id: 'q22-6',
      question: 'Liên từ "ですから / だから" biểu thị mối quan hệ gì giữa hai câu?',
      questionType: 'multiple_choice',
      options: ['Tương phản đối lập', 'Nguyên nhân - kết quả (Vì thế cho nên)', 'Liệt kê song song', 'Thời gian trước sau'],
      correctAnswerIndex: 1,
      explanation: 'だから / ですから mang nghĩa "vì vậy, cho nên".',
    },
  ],

  'tuan-12-de-thi-thu-n5-chuan': [
    {
      id: 'q23-4',
      question: 'Điểm sàn tối thiểu của từng phần thi trong kỳ thi JLPT N5 là bao nhiêu điểm?',
      questionType: 'multiple_choice',
      options: ['10 điểm', '19 điểm', '25 điểm', '30 điểm'],
      correctAnswerIndex: 1,
      explanation: 'Điểm sàn mỗi phần thi là 19/60 điểm. Dưới 19 điểm sẽ bị điểm liệt.',
    },
    {
      id: 'q23-5',
      question: 'Tổng điểm tối thiểu để đỗ chứng chỉ JLPT N5 là bao nhiêu trên thang 180 điểm?',
      questionType: 'multiple_choice',
      options: ['60 điểm', '80 điểm', '90 điểm', '100 điểm'],
      correctAnswerIndex: 1,
      explanation: 'Điểm chuẩn đỗ N5 là 80 / 180 điểm (kèm điều kiện không bị điểm liệt phần nào).',
    },
    {
      id: 'q23-6',
      question: 'Phần thi Kiến thức ngôn ngữ (Từ vựng) N5 có thời gian làm bài là bao nhiêu phút?',
      questionType: 'multiple_choice',
      options: ['20 phút', '25 phút', '30 phút', '40 phút'],
      correctAnswerIndex: 0,
      explanation: 'Phần thi Kiến thức ngôn ngữ (Từ vựng) N5 kéo dài 20 phút (quy chuẩn mới).',
    },
  ],

  'tuan-12-chien-luoc-phong-thi': [
    {
      id: 'q24-4',
      question: 'Loại bút nào bắt buộc phải dùng để tô phiếu trả lời trắc nghiệm JLPT?',
      questionType: 'multiple_choice',
      options: ['Bút bi xanh', 'Bút chì đen 2B hoặc HB', 'Bút mực nước', 'Bút dạ quang'],
      correctAnswerIndex: 1,
      explanation: 'Máy chấm thi chỉ đọc được than chì từ bút chì 2B hoặc HB.',
    },
    {
      id: 'q24-5',
      question: 'Khi gặp một câu hỏi khó trong phòng thi, thí sinh nên làm gì?',
      questionType: 'multiple_choice',
      options: ['Ngồi nghĩ cho đến khi ra đáp án', 'Đánh dấu tạm, làm câu dễ trước rồi quay lại sau', 'Bỏ trống không tô', 'Hỏi giám thị'],
      correctAnswerIndex: 1,
      explanation: 'Quản lý thời gian rất quan trọng: làm câu dễ trước, đánh dấu câu khó để xem lại sau.',
    },
    {
      id: 'q24-6',
      question: 'Trong phần thi Nghe hiểu JLPT, mỗi đoạn băng được phát mấy lần?',
      questionType: 'multiple_choice',
      options: ['1 lần duy nhất', '2 lần', '3 lần', 'Tùy thí sinh yêu cầu'],
      correctAnswerIndex: 0,
      explanation: 'Đặc trưng bài thi nghe JLPT là chỉ phát đúng 1 lần duy nhất, không phát lại.',
    },
  ],
};

let content = fs.readFileSync(targetFile, 'utf-8');

for (const [slug, questions] of Object.entries(NEW_QUESTIONS)) {
  const slugMarker = `slug: '${slug}'`;
  const slugIndex = content.indexOf(slugMarker);
  if (slugIndex === -1) {
    console.warn(`Not found slug: ${slug}`);
    continue;
  }

  // Find practiceQuiz
  const quizMarker = 'practiceQuiz: {';
  const quizIndex = content.indexOf(quizMarker, slugIndex);
  if (quizIndex === -1) continue;

  // Find questions: [
  const qMarker = 'questions: [';
  const qStart = content.indexOf(qMarker, quizIndex);
  if (qStart === -1) continue;

  // Count bracket nesting to find matching ']' of questions array
  let depth = 0;
  let matchingCloseIndex = -1;
  const startScanningAt = qStart + qMarker.length - 1; // points to '['

  for (let i = startScanningAt; i < content.length; i++) {
    if (content[i] === '[') {
      depth++;
    } else if (content[i] === ']') {
      depth--;
      if (depth === 0) {
        matchingCloseIndex = i;
        break;
      }
    }
  }

  if (matchingCloseIndex === -1) {
    console.error(`Could not find matching bracket for questions in ${slug}`);
    continue;
  }

  // Format new questions as JS objects
  const formattedQuestions = questions.map(q => {
    return `        {\n          id: '${q.id}',\n          question: '${q.question.replace(/'/g, "\\'")}',\n          questionType: '${q.questionType}',\n          options: ${JSON.stringify(q.options)},\n          correctAnswerIndex: ${q.correctAnswerIndex},\n          explanation: '${q.explanation.replace(/'/g, "\\'")}',\n        }`;
  }).join(',\n');

  // Insert before the matching ']'
  const before = content.slice(0, matchingCloseIndex).trimEnd();
  const after = content.slice(matchingCloseIndex);
  content = before + ',\n' + formattedQuestions + '\n      ' + after;
  console.log(`Successfully added ${questions.length} questions to ${slug}`);
}

fs.writeFileSync(targetFile, content);
console.log('All 24 lessons updated with extended practice questions!');
