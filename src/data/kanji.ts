import { KanjiItem } from '@/types';

export const KANJI_LIST: KanjiItem[] = [
  // Số đếm 1-10
  {
    id: 'k-ichi',
    character: '一',
    hanViet: 'NHẤT',
    meaning: 'Số một, một',
    onyomi: ['イチ', 'イツ'],
    kunyomi: ['ひと', 'ひと.つ'],
    strokeCount: 1,
    commonWords: [
      { word: '一つ', reading: 'ひとつ', meaning: 'Một cái' },
      { word: '一日', reading: 'ついたち', meaning: 'Ngày mùng 1' },
      { word: '一人', reading: 'ひとり', meaning: 'Một người' },
    ],
    exampleSentences: [
      { sentence: 'りんご を 一つ ください。', reading: 'Ringo o hitotsu kudasai.', meaning: 'Cho tôi xin một quả táo.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-ni',
    character: '二',
    hanViet: 'NHỊ',
    meaning: 'Số hai, hai',
    onyomi: ['ニ'],
    kunyomi: ['ふた', 'ふた.つ'],
    strokeCount: 2,
    commonWords: [
      { word: '二つ', reading: 'ふたつ', meaning: 'Hai cái' },
      { word: '二日', reading: 'ふつか', meaning: 'Ngày mùng 2' },
      { word: '二人', reading: 'ふたり', meaning: 'Hai người' },
    ],
    exampleSentences: [
      { sentence: 'パン を 二つ かいました。', reading: 'Pan o futatsu kaimashita.', meaning: 'Tôi đã mua hai chiếc bánh mì.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-san',
    character: '三',
    hanViet: 'TAM',
    meaning: 'Số ba, ba',
    onyomi: ['サン'],
    kunyomi: ['み', 'みっ.つ'],
    strokeCount: 3,
    commonWords: [
      { word: '三つ', reading: 'みっつ', meaning: 'Ba cái' },
      { word: '三日', reading: 'みっか', meaning: 'Ngày mùng 3' },
      { word: '三月', reading: 'さんがつ', meaning: 'Tháng ba' },
    ],
    exampleSentences: [
      { sentence: 'たまご を 三つ ください。', reading: 'Tamago o mittsu kudasai.', meaning: 'Cho tôi xin ba quả trứng.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-yon',
    character: '四',
    hanViet: 'TỨ',
    meaning: 'Số bốn, bốn',
    onyomi: ['シ'],
    kunyomi: ['よ', 'よっ.つ', 'よん'],
    strokeCount: 5,
    commonWords: [
      { word: '四つ', reading: 'よっつ', meaning: 'Bốn cái' },
      { word: '四日', reading: 'よっか', meaning: 'Ngày mùng 4' },
      { word: '四時', reading: 'よじ', meaning: 'Bốn giờ' },
    ],
    exampleSentences: [
      { sentence: 'いま 四時 です。', reading: 'Ima yoji desu.', meaning: 'Bây giờ là bốn giờ.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-go',
    character: '五',
    hanViet: 'NGŨ',
    meaning: 'Số năm, năm',
    onyomi: ['ゴ'],
    kunyomi: ['いつ', 'いつ.つ'],
    strokeCount: 4,
    commonWords: [
      { word: '五つ', reading: 'いつつ', meaning: 'Năm cái' },
      { word: '五日', reading: 'いつか', meaning: 'Ngày mùng 5' },
      { word: '五月', reading: 'ごがつ', meaning: 'Tháng năm' },
    ],
    exampleSentences: [
      { sentence: '五人 で 行きました。', reading: 'Gonin de ikimashita.', meaning: 'Chúng tôi đã đi 5 người.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-roku',
    character: '六',
    hanViet: 'LỤC',
    meaning: 'Số sáu, sáu',
    onyomi: ['ロク'],
    kunyomi: ['む', 'むっ.つ', 'むい'],
    strokeCount: 4,
    commonWords: [
      { word: '六つ', reading: 'むっつ', meaning: 'Sáu cái' },
      { word: '六日', reading: 'むいか', meaning: 'Ngày mùng 6' },
      { word: '六時', reading: 'ろくじ', meaning: 'Sáu giờ' },
    ],
    exampleSentences: [
      { sentence: '毎朝 六時 に 起きます。', reading: 'Maiasa rokuji ni okimasu.', meaning: 'Mỗi sáng tôi thức dậy lúc 6 giờ.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-nana',
    character: '七',
    hanViet: 'THẤT',
    meaning: 'Số bảy, bảy',
    onyomi: ['シチ'],
    kunyomi: ['なな', 'なな.つ', 'なの'],
    strokeCount: 2,
    commonWords: [
      { word: '七つ', reading: 'ななつ', meaning: 'Bảy cái' },
      { word: '七日', reading: 'なのか', meaning: 'Ngày mùng 7' },
      { word: '七時', reading: 'しちじ', meaning: 'Bảy giờ' },
    ],
    exampleSentences: [
      { sentence: '七時 に 晩ごはん を 食べます。', reading: 'Shichiji ni bangohan o tabemasu.', meaning: 'Tôi ăn tối lúc 7 giờ.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-hachi',
    character: '八',
    hanViet: 'BÁT',
    meaning: 'Số tám, tám',
    onyomi: ['ハチ'],
    kunyomi: ['や', 'やっ.つ', 'よう'],
    strokeCount: 2,
    commonWords: [
      { word: '八つ', reading: 'やっつ', meaning: 'Tám cái' },
      { word: '八日', reading: 'ようか', meaning: 'Ngày mùng 8' },
      { word: '八月', reading: 'はちがつ', meaning: 'Tháng tám' },
    ],
    exampleSentences: [
      { sentence: '八月 は とても 暑い です。', reading: 'Hachigatsu wa totemo atsui desu.', meaning: 'Tháng tám rất nóng.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-kyuu',
    character: '九',
    hanViet: 'CỬU',
    meaning: 'Số chín, chín',
    onyomi: ['キュウ', 'ク'],
    kunyomi: ['ここの', 'ここの.つ'],
    strokeCount: 2,
    commonWords: [
      { word: '九つ', reading: 'ここのつ', meaning: 'Chín cái' },
      { word: '九日', reading: 'ここのか', meaning: 'Ngày mùng 9' },
      { word: '九時', reading: 'くじ', meaning: 'Chín giờ' },
    ],
    exampleSentences: [
      { sentence: '九時 に 会社 が 始まります。', reading: 'Kuji ni kaisha ga hajimarimasu.', meaning: 'Công ty bắt đầu làm lúc 9 giờ.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-juu',
    character: '十',
    hanViet: 'THẬP',
    meaning: 'Số mười, mười',
    onyomi: ['ジュウ', 'ジッ'],
    kunyomi: ['とお', 'と'],
    strokeCount: 2,
    commonWords: [
      { word: '十', reading: 'とお', meaning: 'Mười cái' },
      { word: '十日', reading: 'とおか', meaning: 'Ngày mùng 10' },
      { word: '十月', reading: 'じゅうがつ', meaning: 'Tháng mười' },
    ],
    exampleSentences: [
      { sentence: '十人 の 学生 が います。', reading: 'Juunin no gakusei ga imasu.', meaning: 'Có mười học sinh.' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },

  // Nhật, Nguyệt, Hỏa, Thủy, Mộc, Kim, Thổ
  {
    id: 'k-nichi',
    character: '日',
    hanViet: 'NHẬT',
    meaning: 'Mặt trời, ngày, Nhật Bản',
    onyomi: ['ニチ', 'ジツ'],
    kunyomi: ['ひ', '-び', '-か'],
    strokeCount: 4,
    commonWords: [
      { word: '日曜日', reading: 'にちようび', meaning: 'Chủ nhật' },
      { word: '日本', reading: 'にほん', meaning: 'Nhật Bản' },
      { word: '毎日', reading: 'まいにち', meaning: 'Mỗi ngày' },
    ],
    exampleSentences: [
      { sentence: '日曜日 に 休みます。', reading: 'Nichiyoubi ni yasumimasu.', meaning: 'Tôi nghỉ ngơi vào Chủ nhật.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-tsuki',
    character: '月',
    hanViet: 'NGUYỆT',
    meaning: 'Mặt trăng, tháng',
    onyomi: ['ゲツ', 'ガツ'],
    kunyomi: ['つき'],
    strokeCount: 4,
    commonWords: [
      { word: '月曜日', reading: 'げつようび', meaning: 'Thứ hai' },
      { word: '一月', reading: 'いちがつ', meaning: 'Tháng một' },
      { word: '今月', reading: 'こんげつ', meaning: 'Tháng này' },
    ],
    exampleSentences: [
      { sentence: '月曜日 から 金曜日 まで 働きます。', reading: 'Getsuyoubi kara kinyoubi made hatarakimasu.', meaning: 'Tôi làm việc từ thứ hai đến thứ sáu.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-hi',
    character: '火',
    hanViet: 'HỎA',
    meaning: 'Lửa',
    onyomi: ['カ'],
    kunyomi: ['ひ', '-び'],
    strokeCount: 4,
    commonWords: [
      { word: '火曜日', reading: 'かようび', meaning: 'Thứ ba' },
      { word: '火', reading: 'ひ', meaning: 'Lửa, ngọn lửa' },
    ],
    exampleSentences: [
      { sentence: '火曜日 に テスト が あります。', reading: 'Kayoubi ni tesuto ga arimasu.', meaning: 'Thứ ba có bài kiểm tra.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-mizu',
    character: '水',
    hanViet: 'THỦY',
    meaning: 'Nước',
    onyomi: ['スイ'],
    kunyomi: ['みず'],
    strokeCount: 4,
    commonWords: [
      { word: '水曜日', reading: 'すいようび', meaning: 'Thứ tư' },
      { word: '水', reading: 'みず', meaning: 'Nước' },
    ],
    exampleSentences: [
      { sentence: '冷たい 水 を 飲みます。', reading: 'Tsumetai mizu o nomimasu.', meaning: 'Tôi uống nước lạnh.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-ki',
    character: '木',
    hanViet: 'MỘC',
    meaning: 'Cây gỗ',
    onyomi: ['ボク', 'モク'],
    kunyomi: ['き'],
    strokeCount: 4,
    commonWords: [
      { word: '木曜日', reading: 'もくようび', meaning: 'Thứ năm' },
      { word: '木', reading: 'き', meaning: 'Cái cây' },
    ],
    exampleSentences: [
      { sentence: '庭 に 大きな 木 が あります。', reading: 'Niwa ni ookina ki ga arimasu.', meaning: 'Trong sân có một cái cây to.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-kane',
    character: '金',
    hanViet: 'KIM',
    meaning: 'Vàng, tiền',
    onyomi: ['キン', 'コン'],
    kunyomi: ['かね', 'かな-'],
    strokeCount: 8,
    commonWords: [
      { word: '金曜日', reading: 'きんようび', meaning: 'Thứ sáu' },
      { word: 'お金', reading: 'おかね', meaning: 'Tiền bạc' },
    ],
    exampleSentences: [
      { sentence: 'お金 が ありません。', reading: 'Okane ga arimasen.', meaning: 'Tôi không có tiền.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-tsuchi',
    character: '土',
    hanViet: 'THỔ',
    meaning: 'Đất',
    onyomi: ['ド', 'ト'],
    kunyomi: ['つち'],
    strokeCount: 3,
    commonWords: [
      { word: '土曜日', reading: 'どようび', meaning: 'Thứ bảy' },
      { word: '土地', reading: 'とち', meaning: 'Đất đai' },
    ],
    exampleSentences: [
      { sentence: '土曜日 に 映画 を 見ます。', reading: 'Doyoubi ni eiga o mimasu.', meaning: 'Thứ bảy tôi đi xem phim.' },
    ],
    lessonId: 'minna-bai-4-thoi-gian-dong-tu',
    jlptLevel: 'N5',
  },

  // Người, Tự nhiên, Địa điểm
  {
    id: 'k-hito',
    character: '人',
    hanViet: 'NHÂN',
    meaning: 'Người',
    onyomi: ['ジン', 'ニン'],
    kunyomi: ['ひと'],
    strokeCount: 2,
    commonWords: [
      { word: '日本人', reading: 'にほんじん', meaning: 'Người Nhật' },
      { word: 'ベトナム人', reading: 'べとなむじん', meaning: 'Người Việt Nam' },
      { word: 'あの人', reading: 'あのひと', meaning: 'Người kia' },
    ],
    exampleSentences: [
      { sentence: 'あの 人 は だれ ですか。', reading: 'Ano hito wa dare desu ka.', meaning: 'Người kia là ai vậy?' },
    ],
    lessonId: 'minna-bai-1-tu-gioi-thieu',
    jlptLevel: 'N5',
  },
  {
    id: 'k-yama',
    character: '山',
    hanViet: 'SƠN',
    meaning: 'Núi',
    onyomi: ['サン'],
    kunyomi: ['やま'],
    strokeCount: 3,
    commonWords: [
      { word: '富士山', reading: 'ふじさん', meaning: 'Núi Phú Sĩ' },
      { word: '山', reading: 'やま', meaning: 'Ngọn núi' },
    ],
    exampleSentences: [
      { sentence: '夏 に 山 へ 行きます。', reading: 'Natsu ni yama e ikimasu.', meaning: 'Mùa hè tôi đi lên núi.' },
    ],
    lessonId: 'minna-bai-5-di-chuyen-phuong-tien',
    jlptLevel: 'N5',
  },
  {
    id: 'k-kawa',
    character: '川',
    hanViet: 'XUYÊN',
    meaning: 'Sông',
    onyomi: ['セン'],
    kunyomi: ['かわ'],
    strokeCount: 3,
    commonWords: [
      { word: '川', reading: 'かわ', meaning: 'Con sông' },
      { word: 'ナイル川', reading: 'ないるがわ', meaning: 'Sông Nile' },
    ],
    exampleSentences: [
      { sentence: '川 で 魚 を 釣ります。', reading: 'Kawa de sakana o tsurimasu.', meaning: 'Tôi câu cá ở dòng sông.' },
    ],
    lessonId: 'minna-bai-5-di-chuyen-phuong-tien',
    jlptLevel: 'N5',
  },
  {
    id: 'k-kuruma',
    character: '車',
    hanViet: 'XA',
    meaning: 'Xe cộ, ô tô',
    onyomi: ['シャ'],
    kunyomi: ['くるま'],
    strokeCount: 7,
    commonWords: [
      { word: '車', reading: 'くるま', meaning: 'Xe ô tô' },
      { word: '電車', reading: 'でんしゃ', meaning: 'Tàu điện' },
      { word: '自動車', reading: 'じどうしゃ', meaning: 'Xe hơi tự động' },
    ],
    exampleSentences: [
      { sentence: '車 を 運転します。', reading: 'Kuruma o untenshimasu.', meaning: 'Tôi lái xe ô tô.' },
    ],
    lessonId: 'minna-bai-5-di-chuyen-phuong-tien',
    jlptLevel: 'N5',
  },
  // === Mở rộng từ phiên làm việc 2 ===
  {
  "id": "k-nen",
  "character": "年",
  "hanViet": "NIÊN",
  "meaning": "Năm (year)",
  "onyomi": [
    "ネン"
  ],
  "kunyomi": [
    "とし"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "今年",
      "reading": "ことし",
      "meaning": "Năm nay"
    },
    {
      "word": "来年",
      "reading": "らいねん",
      "meaning": "Năm sau"
    },
    {
      "word": "去年",
      "reading": "きょねん",
      "meaning": "Năm ngoái"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今年 ２０歳に なります。",
      "reading": "Kotoshi hatachi ni narimasu.",
      "meaning": "Năm nay tôi tròn 20 tuổi."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-tsuki-month",
  "character": "月",
  "hanViet": "NGUYỆT",
  "meaning": "Tháng, mặt trăng",
  "onyomi": [
    "ゲツ",
    "ガツ"
  ],
  "kunyomi": [
    "つき"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "今月",
      "reading": "こんげつ",
      "meaning": "Tháng này"
    },
    {
      "word": "毎月",
      "reading": "まいつき",
      "meaning": "Mỗi tháng"
    },
    {
      "word": "月曜日",
      "reading": "げつようび",
      "meaning": "Thứ Hai"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "来月 日本へ 行きます。",
      "reading": "Raigetsu nihon e ikimasu.",
      "meaning": "Tháng sau tôi đi Nhật."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-hi-day",
  "character": "日",
  "hanViet": "NHẬT",
  "meaning": "Ngày, mặt trời",
  "onyomi": [
    "ニチ",
    "ジツ"
  ],
  "kunyomi": [
    "ひ",
    "か"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "今日",
      "reading": "きょう",
      "meaning": "Hôm nay"
    },
    {
      "word": "日曜日",
      "reading": "にちようび",
      "meaning": "Chủ Nhật"
    },
    {
      "word": "毎日",
      "reading": "まいにち",
      "meaning": "Mỗi ngày"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今日は いい 天気です。",
      "reading": "Kyou wa ii tenki desu.",
      "meaning": "Hôm nay thời tiết đẹp."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-ji-time",
  "character": "時",
  "hanViet": "THỜI",
  "meaning": "Giờ, thời gian",
  "onyomi": [
    "ジ"
  ],
  "kunyomi": [
    "とき"
  ],
  "strokeCount": 10,
  "commonWords": [
    {
      "word": "何時",
      "reading": "なんじ",
      "meaning": "Mấy giờ"
    },
    {
      "word": "時間",
      "reading": "じかん",
      "meaning": "Thời gian"
    },
    {
      "word": "時々",
      "reading": "ときどき",
      "meaning": "Đôi khi"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今 何時ですか。",
      "reading": "Ima nanji desu ka.",
      "meaning": "Bây giờ là mấy giờ?"
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-hun-minute",
  "character": "分",
  "hanViet": "PHÂN",
  "meaning": "Phút, phần",
  "onyomi": [
    "フン",
    "ブン",
    "ブ"
  ],
  "kunyomi": [
    "わ.かる"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "五分",
      "reading": "ごふん",
      "meaning": "5 phút"
    },
    {
      "word": "三十分",
      "reading": "さんじゅっぷん",
      "meaning": "30 phút"
    },
    {
      "word": "自分",
      "reading": "じぶん",
      "meaning": "Bản thân"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "五分 待ってください。",
      "reading": "Gofun matte kudasai.",
      "meaning": "Xin đợi 5 phút."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-han-half",
  "character": "半",
  "hanViet": "BÁN",
  "meaning": "Nửa, rưỡi",
  "onyomi": [
    "ハン"
  ],
  "kunyomi": [
    "なか.ば"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "三時半",
      "reading": "さんじはん",
      "meaning": "3 giờ rưỡi"
    },
    {
      "word": "半分",
      "reading": "はんぶん",
      "meaning": "Một nửa"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "七時半に 起きます。",
      "reading": "Shichijihan ni okimasu.",
      "meaning": "Tôi thức dậy lúc 7 rưỡi."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-ima-now",
  "character": "今",
  "hanViet": "KIM",
  "meaning": "Bây giờ, hiện tại",
  "onyomi": [
    "コン",
    "キン"
  ],
  "kunyomi": [
    "いま"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "今日",
      "reading": "きょう",
      "meaning": "Hôm nay"
    },
    {
      "word": "今月",
      "reading": "こんげつ",
      "meaning": "Tháng này"
    },
    {
      "word": "今週",
      "reading": "こんしゅう",
      "meaning": "Tuần này"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今 どこに いますか。",
      "reading": "Ima doko ni imasu ka.",
      "meaning": "Bây giờ bạn đang ở đâu?"
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-sen-before",
  "character": "先",
  "hanViet": "TIÊN",
  "meaning": "Trước, đầu tiên",
  "onyomi": [
    "セン"
  ],
  "kunyomi": [
    "さき"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "先生",
      "reading": "せんせい",
      "meaning": "Giáo viên"
    },
    {
      "word": "先週",
      "reading": "せんしゅう",
      "meaning": "Tuần trước"
    },
    {
      "word": "先月",
      "reading": "せんげつ",
      "meaning": "Tháng trước"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "先生に 聞きます。",
      "reading": "Sensei ni kikimasu.",
      "meaning": "Tôi hỏi thầy giáo."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-mai-every",
  "character": "毎",
  "hanViet": "MỖI",
  "meaning": "Mỗi, mỗi ngày",
  "onyomi": [
    "マイ"
  ],
  "kunyomi": [],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "毎日",
      "reading": "まいにち",
      "meaning": "Mỗi ngày"
    },
    {
      "word": "毎朝",
      "reading": "まいあさ",
      "meaning": "Mỗi sáng"
    },
    {
      "word": "毎週",
      "reading": "まいしゅう",
      "meaning": "Mỗi tuần"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "毎日 運動します。",
      "reading": "Mainichi undou shimasu.",
      "meaning": "Mỗi ngày tôi đều tập thể dục."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-ko-child",
  "character": "子",
  "hanViet": "TỬ",
  "meaning": "Con, trẻ em",
  "onyomi": [
    "シ",
    "ス"
  ],
  "kunyomi": [
    "こ"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "子ども",
      "reading": "こども",
      "meaning": "Con trẻ"
    },
    {
      "word": "女の子",
      "reading": "おんなのこ",
      "meaning": "Bé gái"
    },
    {
      "word": "男の子",
      "reading": "おとこのこ",
      "meaning": "Bé trai"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "子どもが 三人 います。",
      "reading": "Kodomo ga sannin imasu.",
      "meaning": "Tôi có 3 đứa con."
    }
  ],
  "lessonId": "minna-bai-9-so-thich-kha-nang",
  "jlptLevel": "N5"
},
  {
  "id": "k-jo-woman",
  "character": "女",
  "hanViet": "NỮ",
  "meaning": "Phụ nữ, con gái",
  "onyomi": [
    "ジョ",
    "ニョ"
  ],
  "kunyomi": [
    "おんな",
    "め"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "女の人",
      "reading": "おんなのひと",
      "meaning": "Người phụ nữ"
    },
    {
      "word": "女の子",
      "reading": "おんなのこ",
      "meaning": "Bé gái"
    },
    {
      "word": "彼女",
      "reading": "かのじょ",
      "meaning": "Cô ấy"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "女の先生が います。",
      "reading": "Onna no sensei ga imasu.",
      "meaning": "Có giáo viên nữ."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-dan-man",
  "character": "男",
  "hanViet": "NAM",
  "meaning": "Đàn ông, con trai",
  "onyomi": [
    "ダン",
    "ナン"
  ],
  "kunyomi": [
    "おとこ"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "男の人",
      "reading": "おとこのひと",
      "meaning": "Người đàn ông"
    },
    {
      "word": "男の子",
      "reading": "おとこのこ",
      "meaning": "Bé trai"
    },
    {
      "word": "男性",
      "reading": "だんせい",
      "meaning": "Nam giới"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "男の先生が 好きです。",
      "reading": "Otoko no sensei ga suki desu.",
      "meaning": "Tôi thích thầy giáo nam."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-chichi-father",
  "character": "父",
  "hanViet": "PHỤ",
  "meaning": "Bố (của mình)",
  "onyomi": [
    "フ"
  ],
  "kunyomi": [
    "ちち"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "父",
      "reading": "ちち",
      "meaning": "Bố"
    },
    {
      "word": "父親",
      "reading": "ちちおや",
      "meaning": "Người cha"
    },
    {
      "word": "お父さん",
      "reading": "おとうさん",
      "meaning": "Bố (gọi)"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "父は 会社員です。",
      "reading": "Chichi wa kaishain desu.",
      "meaning": "Bố tôi là nhân viên công ty."
    }
  ],
  "lessonId": "minna-bai-9-so-thich-kha-nang",
  "jlptLevel": "N5"
},
  {
  "id": "k-haha-mother",
  "character": "母",
  "hanViet": "MẪU",
  "meaning": "Mẹ (của mình)",
  "onyomi": [
    "ボ"
  ],
  "kunyomi": [
    "はは"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "母",
      "reading": "はは",
      "meaning": "Mẹ"
    },
    {
      "word": "母親",
      "reading": "ははおや",
      "meaning": "Người mẹ"
    },
    {
      "word": "お母さん",
      "reading": "おかあさん",
      "meaning": "Mẹ (gọi)"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "母は 料理が 上手です。",
      "reading": "Haha wa ryouri ga jouzu desu.",
      "meaning": "Mẹ tôi nấu ăn rất giỏi."
    }
  ],
  "lessonId": "minna-bai-9-so-thich-kha-nang",
  "jlptLevel": "N5"
},
  {
  "id": "k-tomo-friend",
  "character": "友",
  "hanViet": "HỮU",
  "meaning": "Bạn bè",
  "onyomi": [
    "ユウ"
  ],
  "kunyomi": [
    "とも"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "友達",
      "reading": "ともだち",
      "meaning": "Bạn bè"
    },
    {
      "word": "友人",
      "reading": "ゆうじん",
      "meaning": "Bạn bè (văn viết)"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "友達と 映画を 見ます。",
      "reading": "Tomodachi to eiga o mimasu.",
      "meaning": "Xem phim cùng bạn."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-gaku-study",
  "character": "学",
  "hanViet": "HỌC",
  "meaning": "Học, khoa học",
  "onyomi": [
    "ガク"
  ],
  "kunyomi": [
    "まな.ぶ"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "学生",
      "reading": "がくせい",
      "meaning": "Học sinh"
    },
    {
      "word": "学校",
      "reading": "がっこう",
      "meaning": "Trường học"
    },
    {
      "word": "大学",
      "reading": "だいがく",
      "meaning": "Đại học"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "私は 学生です。",
      "reading": "Watashi wa gakusei desu.",
      "meaning": "Tôi là học sinh."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-sei-life",
  "character": "生",
  "hanViet": "SINH",
  "meaning": "Sống, học sinh, sinh ra",
  "onyomi": [
    "セイ",
    "ショウ"
  ],
  "kunyomi": [
    "い.きる",
    "う.まれる"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "学生",
      "reading": "がくせい",
      "meaning": "Học sinh"
    },
    {
      "word": "先生",
      "reading": "せんせい",
      "meaning": "Giáo viên"
    },
    {
      "word": "誕生日",
      "reading": "たんじょうび",
      "meaning": "Sinh nhật"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "誕生日は いつですか。",
      "reading": "Tanjoubi wa itsu desu ka.",
      "meaning": "Sinh nhật bạn là khi nào?"
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-ko-school",
  "character": "校",
  "hanViet": "HIỆU",
  "meaning": "Trường học",
  "onyomi": [
    "コウ"
  ],
  "kunyomi": [],
  "strokeCount": 10,
  "commonWords": [
    {
      "word": "学校",
      "reading": "がっこう",
      "meaning": "Trường học"
    },
    {
      "word": "高校",
      "reading": "こうこう",
      "meaning": "Cấp 3"
    },
    {
      "word": "校長",
      "reading": "こうちょう",
      "meaning": "Hiệu trưởng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "学校へ 行きます。",
      "reading": "Gakkou e ikimasu.",
      "meaning": "Tôi đến trường."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-higashi",
  "character": "東",
  "hanViet": "ĐÔNG",
  "meaning": "Hướng Đông",
  "onyomi": [
    "トウ"
  ],
  "kunyomi": [
    "ひがし"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "東京",
      "reading": "とうきょう",
      "meaning": "Tokyo"
    },
    {
      "word": "東口",
      "reading": "ひがしぐち",
      "meaning": "Cửa Đông"
    },
    {
      "word": "東南アジア",
      "reading": "とうなんアジア",
      "meaning": "Đông Nam Á"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "東京に 住んでいます。",
      "reading": "Toukyou ni sunde imasu.",
      "meaning": "Tôi đang sống ở Tokyo."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-nishi",
  "character": "西",
  "hanViet": "TÂY",
  "meaning": "Hướng Tây",
  "onyomi": [
    "セイ",
    "サイ"
  ],
  "kunyomi": [
    "にし"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "西口",
      "reading": "にしぐち",
      "meaning": "Cửa Tây"
    },
    {
      "word": "関西",
      "reading": "かんさい",
      "meaning": "Kansai"
    },
    {
      "word": "西洋",
      "reading": "せいよう",
      "meaning": "Phương Tây"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "西口で 待ちます。",
      "reading": "Nishiguchi de machimasu.",
      "meaning": "Tôi đợi ở cửa Tây."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-minami",
  "character": "南",
  "hanViet": "NAM",
  "meaning": "Hướng Nam",
  "onyomi": [
    "ナン",
    "ナ"
  ],
  "kunyomi": [
    "みなみ"
  ],
  "strokeCount": 9,
  "commonWords": [
    {
      "word": "南口",
      "reading": "みなみぐち",
      "meaning": "Cửa Nam"
    },
    {
      "word": "南アジア",
      "reading": "みなみアジア",
      "meaning": "Nam Á"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "南へ 歩きます。",
      "reading": "Minami e arukimasu.",
      "meaning": "Tôi đi về hướng Nam."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-kita",
  "character": "北",
  "hanViet": "BẮC",
  "meaning": "Hướng Bắc",
  "onyomi": [
    "ホク"
  ],
  "kunyomi": [
    "きた"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "北口",
      "reading": "きたぐち",
      "meaning": "Cửa Bắc"
    },
    {
      "word": "北海道",
      "reading": "ほっかいどう",
      "meaning": "Hokkaido"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "北海道に 行きたいです。",
      "reading": "Hokkaido ni ikitai desu.",
      "meaning": "Tôi muốn đi Hokkaido."
    }
  ],
  "lessonId": "minna-bai-13-mong-muon-di-de-lam-gi",
  "jlptLevel": "N5"
},
  {
  "id": "k-kuni",
  "character": "国",
  "hanViet": "QUỐC",
  "meaning": "Đất nước, quốc gia",
  "onyomi": [
    "コク"
  ],
  "kunyomi": [
    "くに"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "国",
      "reading": "くに",
      "meaning": "Đất nước"
    },
    {
      "word": "外国",
      "reading": "がいこく",
      "meaning": "Nước ngoài"
    },
    {
      "word": "外国語",
      "reading": "がいこくご",
      "meaning": "Ngoại ngữ"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "日本は どんな 国ですか。",
      "reading": "Nihon wa donna kuni desu ka.",
      "meaning": "Nhật Bản là đất nước như thế nào?"
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-mise",
  "character": "店",
  "hanViet": "ĐIẾM",
  "meaning": "Cửa hàng, tiệm",
  "onyomi": [
    "テン"
  ],
  "kunyomi": [
    "みせ"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "店員",
      "reading": "てんいん",
      "meaning": "Nhân viên bán hàng"
    },
    {
      "word": "書店",
      "reading": "しょてん",
      "meaning": "Hiệu sách"
    },
    {
      "word": "食堂",
      "reading": "しょくどう",
      "meaning": "Nhà ăn"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "この 店は 安いですね。",
      "reading": "Kono mise wa yasui desu ne.",
      "meaning": "Tiệm này rẻ nhỉ."
    }
  ],
  "lessonId": "minna-bai-3-dia-diem-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-eki",
  "character": "駅",
  "hanViet": "DỊCH",
  "meaning": "Nhà ga",
  "onyomi": [
    "エキ"
  ],
  "kunyomi": [],
  "strokeCount": 14,
  "commonWords": [
    {
      "word": "駅",
      "reading": "えき",
      "meaning": "Nhà ga"
    },
    {
      "word": "駅員",
      "reading": "えきいん",
      "meaning": "Nhân viên nhà ga"
    },
    {
      "word": "駅前",
      "reading": "えきまえ",
      "meaning": "Trước ga"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "駅で 待ち合わせましょう。",
      "reading": "Eki de machiawasemashou.",
      "meaning": "Hãy gặp nhau ở nhà ga nhé."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-ame",
  "character": "雨",
  "hanViet": "VŨ",
  "meaning": "Mưa",
  "onyomi": [
    "ウ"
  ],
  "kunyomi": [
    "あめ",
    "あま"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "雨",
      "reading": "あめ",
      "meaning": "Mưa"
    },
    {
      "word": "雨の日",
      "reading": "あめのひ",
      "meaning": "Ngày mưa"
    },
    {
      "word": "大雨",
      "reading": "おおあめ",
      "meaning": "Mưa to"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今日は 雨が 降っています。",
      "reading": "Kyou wa ame ga futte imasu.",
      "meaning": "Hôm nay đang mưa."
    }
  ],
  "lessonId": "minna-bai-12-so-sanh",
  "jlptLevel": "N5"
},
  {
  "id": "k-ten",
  "character": "天",
  "hanViet": "THIÊN",
  "meaning": "Trời, thiên nhiên",
  "onyomi": [
    "テン"
  ],
  "kunyomi": [
    "あま",
    "あめ"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "天気",
      "reading": "てんき",
      "meaning": "Thời tiết"
    },
    {
      "word": "天ぷら",
      "reading": "てんぷら",
      "meaning": "Tempura"
    },
    {
      "word": "天才",
      "reading": "てんさい",
      "meaning": "Thiên tài"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "今日の 天気は 良いです。",
      "reading": "Kyou no tenki wa yoi desu.",
      "meaning": "Thời tiết hôm nay đẹp."
    }
  ],
  "lessonId": "minna-bai-12-so-sanh",
  "jlptLevel": "N5"
},
  {
  "id": "k-ki-spirit",
  "character": "気",
  "hanViet": "KHÍ",
  "meaning": "Khí, cảm giác, khí lực",
  "onyomi": [
    "キ",
    "ケ"
  ],
  "kunyomi": [],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "天気",
      "reading": "てんき",
      "meaning": "Thời tiết"
    },
    {
      "word": "元気",
      "reading": "げんき",
      "meaning": "Khỏe mạnh"
    },
    {
      "word": "気持ち",
      "reading": "きもち",
      "meaning": "Cảm giác"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "お元気ですか。",
      "reading": "Ogenki desu ka.",
      "meaning": "Bạn có khỏe không?"
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-iku-go",
  "character": "行",
  "hanViet": "HÀNH",
  "meaning": "Đi",
  "onyomi": [
    "コウ",
    "ギョウ",
    "アン"
  ],
  "kunyomi": [
    "い.く",
    "おこな.う"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "行きます",
      "reading": "いきます",
      "meaning": "Đi"
    },
    {
      "word": "銀行",
      "reading": "ぎんこう",
      "meaning": "Ngân hàng"
    },
    {
      "word": "旅行",
      "reading": "りょこう",
      "meaning": "Du lịch"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "学校へ 行きます。",
      "reading": "Gakkou e ikimasu.",
      "meaning": "Tôi đi học."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-kuru-come",
  "character": "来",
  "hanViet": "LAI",
  "meaning": "Đến, đi đến",
  "onyomi": [
    "ライ"
  ],
  "kunyomi": [
    "く.る",
    "き.たる"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "来ます",
      "reading": "きます",
      "meaning": "Đến"
    },
    {
      "word": "来年",
      "reading": "らいねん",
      "meaning": "Năm sau"
    },
    {
      "word": "来週",
      "reading": "らいしゅう",
      "meaning": "Tuần sau"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "明日 友達が 来ます。",
      "reading": "Ashita tomodachi ga kimasu.",
      "meaning": "Ngày mai bạn đến."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-kaeru-return",
  "character": "帰",
  "hanViet": "QUY",
  "meaning": "Về, trở về",
  "onyomi": [
    "キ"
  ],
  "kunyomi": [
    "かえ.る"
  ],
  "strokeCount": 10,
  "commonWords": [
    {
      "word": "帰ります",
      "reading": "かえります",
      "meaning": "Về nhà"
    },
    {
      "word": "帰国",
      "reading": "きこく",
      "meaning": "Về nước"
    },
    {
      "word": "帰宅",
      "reading": "きたく",
      "meaning": "Về nhà"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "６時に 帰ります。",
      "reading": "Rokuji ni kaerimasu.",
      "meaning": "Tôi về nhà lúc 6 giờ."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-tabe-eat",
  "character": "食",
  "hanViet": "THỰC",
  "meaning": "Ăn, thức ăn",
  "onyomi": [
    "ショク",
    "ジキ"
  ],
  "kunyomi": [
    "た.べる"
  ],
  "strokeCount": 9,
  "commonWords": [
    {
      "word": "食べます",
      "reading": "たべます",
      "meaning": "Ăn"
    },
    {
      "word": "食事",
      "reading": "しょくじ",
      "meaning": "Bữa ăn"
    },
    {
      "word": "食堂",
      "reading": "しょくどう",
      "meaning": "Nhà ăn"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "ご飯を 食べましょう。",
      "reading": "Gohan o tabemashou.",
      "meaning": "Cùng ăn cơm nào."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-nomu-drink",
  "character": "飲",
  "hanViet": "ẨM",
  "meaning": "Uống",
  "onyomi": [
    "イン"
  ],
  "kunyomi": [
    "の.む"
  ],
  "strokeCount": 12,
  "commonWords": [
    {
      "word": "飲みます",
      "reading": "のみます",
      "meaning": "Uống"
    },
    {
      "word": "飲み物",
      "reading": "のみもの",
      "meaning": "Đồ uống"
    },
    {
      "word": "飲食店",
      "reading": "いんしょくてん",
      "meaning": "Nhà hàng/quán ăn"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "水を 飲みます。",
      "reading": "Mizu o nomimasu.",
      "meaning": "Tôi uống nước."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-miru-see",
  "character": "見",
  "hanViet": "KIẾN",
  "meaning": "Nhìn, thấy",
  "onyomi": [
    "ケン"
  ],
  "kunyomi": [
    "み.る",
    "み.える"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "見ます",
      "reading": "みます",
      "meaning": "Xem"
    },
    {
      "word": "見物",
      "reading": "けんぶつ",
      "meaning": "Tham quan"
    },
    {
      "word": "意見",
      "reading": "いけん",
      "meaning": "Ý kiến"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "テレビを 見ます。",
      "reading": "Terebi o mimasu.",
      "meaning": "Tôi xem tivi."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-kiku-listen",
  "character": "聞",
  "hanViet": "VĂN",
  "meaning": "Nghe, hỏi",
  "onyomi": [
    "ブン",
    "モン"
  ],
  "kunyomi": [
    "き.く"
  ],
  "strokeCount": 14,
  "commonWords": [
    {
      "word": "聞きます",
      "reading": "ききます",
      "meaning": "Nghe, hỏi"
    },
    {
      "word": "新聞",
      "reading": "しんぶん",
      "meaning": "Báo"
    },
    {
      "word": "聴く",
      "reading": "きく",
      "meaning": "Lắng nghe"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "音楽を 聞きます。",
      "reading": "Ongaku o kikimasu.",
      "meaning": "Tôi nghe nhạc."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-yomu-read",
  "character": "読",
  "hanViet": "ĐỌC",
  "meaning": "Đọc",
  "onyomi": [
    "ドク",
    "トク",
    "トウ"
  ],
  "kunyomi": [
    "よ.む"
  ],
  "strokeCount": 14,
  "commonWords": [
    {
      "word": "読みます",
      "reading": "よみます",
      "meaning": "Đọc"
    },
    {
      "word": "読書",
      "reading": "どくしょ",
      "meaning": "Đọc sách"
    },
    {
      "word": "音読み",
      "reading": "おんよみ",
      "meaning": "Âm Hán"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "本を 読みます。",
      "reading": "Hon o yomimasu.",
      "meaning": "Tôi đọc sách."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-kaku-write",
  "character": "書",
  "hanViet": "THƯ",
  "meaning": "Viết",
  "onyomi": [
    "ショ"
  ],
  "kunyomi": [
    "か.く"
  ],
  "strokeCount": 10,
  "commonWords": [
    {
      "word": "書きます",
      "reading": "かきます",
      "meaning": "Viết"
    },
    {
      "word": "教科書",
      "reading": "きょうかしょ",
      "meaning": "Sách giáo khoa"
    },
    {
      "word": "辞書",
      "reading": "じしょ",
      "meaning": "Từ điển"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "手紙を 書きます。",
      "reading": "Tegami o kakimasu.",
      "meaning": "Tôi viết thư."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-hanasu-speak",
  "character": "話",
  "hanViet": "THOẠI",
  "meaning": "Nói, chuyện",
  "onyomi": [
    "ワ"
  ],
  "kunyomi": [
    "はな.す",
    "はなし"
  ],
  "strokeCount": 13,
  "commonWords": [
    {
      "word": "話します",
      "reading": "はなします",
      "meaning": "Nói"
    },
    {
      "word": "会話",
      "reading": "かいわ",
      "meaning": "Hội thoại"
    },
    {
      "word": "電話",
      "reading": "でんわ",
      "meaning": "Điện thoại"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "日本語で 話してください。",
      "reading": "Nihongo de hanashite kudasai.",
      "meaning": "Hãy nói bằng tiếng Nhật."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-kau-buy",
  "character": "買",
  "hanViet": "MÃI",
  "meaning": "Mua",
  "onyomi": [
    "バイ"
  ],
  "kunyomi": [
    "か.う"
  ],
  "strokeCount": 12,
  "commonWords": [
    {
      "word": "買います",
      "reading": "かいます",
      "meaning": "Mua"
    },
    {
      "word": "買い物",
      "reading": "かいもの",
      "meaning": "Mua sắm"
    },
    {
      "word": "売買",
      "reading": "ばいばい",
      "meaning": "Mua bán"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "スーパーで 野菜を 買います。",
      "reading": "Suupaa de yasai o kaimasu.",
      "meaning": "Tôi mua rau ở siêu thị."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-deru-exit",
  "character": "出",
  "hanViet": "XUẤT",
  "meaning": "Ra, xuất phát",
  "onyomi": [
    "シュツ",
    "スイ"
  ],
  "kunyomi": [
    "で.る",
    "だ.す"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "出ます",
      "reading": "でます",
      "meaning": "Ra ngoài"
    },
    {
      "word": "出口",
      "reading": "でぐち",
      "meaning": "Cửa ra"
    },
    {
      "word": "出張",
      "reading": "しゅっちょう",
      "meaning": "Công tác"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "朝 ８時に 家を 出ます。",
      "reading": "Asa hachiji ni ie o demasu.",
      "meaning": "Tôi rời nhà lúc 8 giờ sáng."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-hairu-enter",
  "character": "入",
  "hanViet": "NHẬP",
  "meaning": "Vào, nhập",
  "onyomi": [
    "ニュウ"
  ],
  "kunyomi": [
    "はい.る",
    "い.る",
    "い.れる"
  ],
  "strokeCount": 2,
  "commonWords": [
    {
      "word": "入ります",
      "reading": "はいります",
      "meaning": "Đi vào"
    },
    {
      "word": "入口",
      "reading": "いりぐち",
      "meaning": "Cửa vào"
    },
    {
      "word": "入学",
      "reading": "にゅうがく",
      "meaning": "Nhập học"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "教室に 入ってください。",
      "reading": "Kyoushitsu ni haitte kudasai.",
      "meaning": "Xin mời vào phòng học."
    }
  ],
  "lessonId": "minna-bai-14-sai-khien-te-kudasai",
  "jlptLevel": "N5"
},
  {
  "id": "k-yasumu-rest",
  "character": "休",
  "hanViet": "HƯU",
  "meaning": "Nghỉ, nghỉ ngơi",
  "onyomi": [
    "キュウ"
  ],
  "kunyomi": [
    "やす.む"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "休みます",
      "reading": "やすみます",
      "meaning": "Nghỉ"
    },
    {
      "word": "休日",
      "reading": "きゅうじつ",
      "meaning": "Ngày nghỉ"
    },
    {
      "word": "夏休み",
      "reading": "なつやすみ",
      "meaning": "Nghỉ hè"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "明日は 休みです。",
      "reading": "Ashita wa yasumi desu.",
      "meaning": "Ngày mai là ngày nghỉ."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-oo-big",
  "character": "大",
  "hanViet": "ĐẠI",
  "meaning": "To, lớn",
  "onyomi": [
    "ダイ",
    "タイ"
  ],
  "kunyomi": [
    "おお.きい"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "大きい",
      "reading": "おおきい",
      "meaning": "To lớn"
    },
    {
      "word": "大学",
      "reading": "だいがく",
      "meaning": "Đại học"
    },
    {
      "word": "大切",
      "reading": "たいせつ",
      "meaning": "Quan trọng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "大きな 公園ですね。",
      "reading": "Ookina kouen desu ne.",
      "meaning": "Công viên rộng lớn nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-shou-small",
  "character": "小",
  "hanViet": "TIỂU",
  "meaning": "Nhỏ, bé",
  "onyomi": [
    "ショウ"
  ],
  "kunyomi": [
    "ちい.さい",
    "こ",
    "お"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "小さい",
      "reading": "ちいさい",
      "meaning": "Nhỏ"
    },
    {
      "word": "小学校",
      "reading": "しょうがっこう",
      "meaning": "Trường tiểu học"
    },
    {
      "word": "小説",
      "reading": "しょうせつ",
      "meaning": "Tiểu thuyết"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "小さい 子どもです。",
      "reading": "Chiisai kodomo desu.",
      "meaning": "Đứa trẻ bé nhỏ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-taka-tall",
  "character": "高",
  "hanViet": "CAO",
  "meaning": "Cao, đắt",
  "onyomi": [
    "コウ"
  ],
  "kunyomi": [
    "たか.い"
  ],
  "strokeCount": 10,
  "commonWords": [
    {
      "word": "高い",
      "reading": "たかい",
      "meaning": "Cao, đắt"
    },
    {
      "word": "高校",
      "reading": "こうこう",
      "meaning": "Cấp 3"
    },
    {
      "word": "高速",
      "reading": "こうそく",
      "meaning": "Tốc độ cao"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "このビルは 高いですね。",
      "reading": "Kono biru wa takai desu ne.",
      "meaning": "Tòa nhà này cao nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-yasu-cheap",
  "character": "安",
  "hanViet": "AN",
  "meaning": "Rẻ, bình yên",
  "onyomi": [
    "アン"
  ],
  "kunyomi": [
    "やす.い"
  ],
  "strokeCount": 6,
  "commonWords": [
    {
      "word": "安い",
      "reading": "やすい",
      "meaning": "Rẻ"
    },
    {
      "word": "安全",
      "reading": "あんぜん",
      "meaning": "An toàn"
    },
    {
      "word": "不安",
      "reading": "ふあん",
      "meaning": "Lo lắng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "このお店は 安いですね。",
      "reading": "Kono omise wa yasui desu ne.",
      "meaning": "Tiệm này rẻ nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-shin-new",
  "character": "新",
  "hanViet": "TÂN",
  "meaning": "Mới",
  "onyomi": [
    "シン"
  ],
  "kunyomi": [
    "あたら.しい",
    "あら.た"
  ],
  "strokeCount": 13,
  "commonWords": [
    {
      "word": "新しい",
      "reading": "あたらしい",
      "meaning": "Mới"
    },
    {
      "word": "新幹線",
      "reading": "しんかんせん",
      "meaning": "Tàu siêu tốc"
    },
    {
      "word": "新聞",
      "reading": "しんぶん",
      "meaning": "Báo"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "新しい 本を 買いました。",
      "reading": "Atarashii hon o kaimashita.",
      "meaning": "Tôi đã mua sách mới."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-furu-old",
  "character": "古",
  "hanViet": "CỔ",
  "meaning": "Cũ, cổ xưa",
  "onyomi": [
    "コ"
  ],
  "kunyomi": [
    "ふる.い"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "古い",
      "reading": "ふるい",
      "meaning": "Cũ"
    },
    {
      "word": "古典",
      "reading": "こてん",
      "meaning": "Cổ điển"
    },
    {
      "word": "古代",
      "reading": "こだい",
      "meaning": "Cổ đại"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "古いお寺ですね。",
      "reading": "Furui otera desu ne.",
      "meaning": "Ngôi chùa cổ nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-naga-long",
  "character": "長",
  "hanViet": "TRƯỞNG",
  "meaning": "Dài, trưởng",
  "onyomi": [
    "チョウ"
  ],
  "kunyomi": [
    "なが.い"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "長い",
      "reading": "ながい",
      "meaning": "Dài"
    },
    {
      "word": "社長",
      "reading": "しゃちょう",
      "meaning": "Giám đốc"
    },
    {
      "word": "長男",
      "reading": "ちょうなん",
      "meaning": "Con trai trưởng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "長い 橋ですね。",
      "reading": "Nagai hashi desu ne.",
      "meaning": "Cây cầu dài nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-shiro-white",
  "character": "白",
  "hanViet": "BẠCH",
  "meaning": "Màu trắng",
  "onyomi": [
    "ハク",
    "ビャク"
  ],
  "kunyomi": [
    "しろ.い"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "白い",
      "reading": "しろい",
      "meaning": "Trắng"
    },
    {
      "word": "白板",
      "reading": "しろいた",
      "meaning": "Bảng trắng"
    },
    {
      "word": "告白",
      "reading": "こくはく",
      "meaning": "Thú nhận tình cảm"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "白い シャツを 着ています。",
      "reading": "Shiroi shatsu o kite imasu.",
      "meaning": "Đang mặc áo sơ mi trắng."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
}
,
  // === Mở rộng từ phiên làm việc 3 (Bộ Kanji đầy đủ chuẩn N5) ===
  {
  "id": "k-ue-above",
  "character": "上",
  "hanViet": "THƯỢNG",
  "meaning": "Trên, phía trên",
  "onyomi": [
    "ジョウ",
    "ショウ"
  ],
  "kunyomi": [
    "うえ",
    "あ.がる",
    "のぼ.る"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "上手",
      "reading": "じょうず",
      "meaning": "Giỏi"
    },
    {
      "word": "上着",
      "reading": "うわぎ",
      "meaning": "Áo khoác"
    },
    {
      "word": "屋上",
      "reading": "おくじょう",
      "meaning": "Sân thượng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "机の 上に 本が あります。",
      "reading": "Tsukue no ue ni hon ga arimasu.",
      "meaning": "Trên bàn có quyển sách."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-shita-below",
  "character": "下",
  "hanViet": "HẠ",
  "meaning": "Dưới, phía dưới",
  "onyomi": [
    "カ",
    "ゲ"
  ],
  "kunyomi": [
    "した",
    "さ.がる",
    "くだ.る"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "下手",
      "reading": "へた",
      "meaning": "Kém, dở"
    },
    {
      "word": "地下鉄",
      "reading": "ちかてつ",
      "meaning": "Tàu điện ngầm"
    },
    {
      "word": "靴下",
      "reading": "くつした",
      "meaning": "Tất chân"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "椅子の 下に 猫が います。",
      "reading": "Isu no shita ni neko ga imasu.",
      "meaning": "Dưới ghế có con mèo."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-migi-right",
  "character": "右",
  "hanViet": "HỮU",
  "meaning": "Bên phải",
  "onyomi": [
    "ウ",
    "ユウ"
  ],
  "kunyomi": [
    "みぎ"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "右",
      "reading": "みぎ",
      "meaning": "Bên phải"
    },
    {
      "word": "右手",
      "reading": "みぎて",
      "meaning": "Tay phải"
    },
    {
      "word": "右側",
      "reading": "みぎがわ",
      "meaning": "Phía bên phải"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "右へ 曲がってください。",
      "reading": "Migi e magatte kudasai.",
      "meaning": "Xin hãy rẽ phải."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-hidari-left",
  "character": "左",
  "hanViet": "TẢ",
  "meaning": "Bên trái",
  "onyomi": [
    "サ"
  ],
  "kunyomi": [
    "ひだり"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "左",
      "reading": "ひだり",
      "meaning": "Bên trái"
    },
    {
      "word": "左手",
      "reading": "ひだりて",
      "meaning": "Tay trái"
    },
    {
      "word": "左右",
      "reading": "さゆう",
      "meaning": "Trái phải"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "銀行は 左側に あります。",
      "reading": "Ginkou wa hidarigawa ni arimasu.",
      "meaning": "Ngân hàng ở bên trái."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-naka-inside",
  "character": "中",
  "hanViet": "TRUNG",
  "meaning": "Trong, ở giữa, Trung Quốc",
  "onyomi": [
    "チュウ"
  ],
  "kunyomi": [
    "なか"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "中国",
      "reading": "ちゅうごく",
      "meaning": "Trung Quốc"
    },
    {
      "word": "一日中",
      "reading": "いちにちじゅう",
      "meaning": "Suốt cả ngày"
    },
    {
      "word": "中学校",
      "reading": "ちゅうがっこう",
      "meaning": "Trường cấp 2"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "かばんの 中を 見ます。",
      "reading": "Kaban no naka o mimasu.",
      "meaning": "Nhìn vào trong cặp."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-soto-outside",
  "character": "外",
  "hanViet": "NGOẠI",
  "meaning": "Ngoài, nước ngoài",
  "onyomi": [
    "ガイ",
    "ゲ"
  ],
  "kunyomi": [
    "そと",
    "ほか",
    "はず.す"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "外国",
      "reading": "がいこく",
      "meaning": "Nước ngoài"
    },
    {
      "word": "外国人",
      "reading": "がいこくじん",
      "meaning": "Người nước ngoài"
    },
    {
      "word": "海外",
      "reading": "かいがい",
      "meaning": "Hải ngoại"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "外は とても 寒いです。",
      "reading": "Soto wa totemo samui desu.",
      "meaning": "Bên ngoài rất lạnh."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-mae-front",
  "character": "前",
  "hanViet": "TIỀN",
  "meaning": "Trước, phía trước",
  "onyomi": [
    "ゼン"
  ],
  "kunyomi": [
    "まえ"
  ],
  "strokeCount": 9,
  "commonWords": [
    {
      "word": "午前",
      "reading": "ごぜん",
      "meaning": "Buổi sáng"
    },
    {
      "word": "名前",
      "reading": "なまえ",
      "meaning": "Tên"
    },
    {
      "word": "駅前",
      "reading": "えきまえ",
      "meaning": "Trước ga"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "駅の 前で 待ちましょう。",
      "reading": "Eki no mae de machimashou.",
      "meaning": "Gặp nhau trước ga nhé."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-ushiro-back",
  "character": "後",
  "hanViet": "HẬU",
  "meaning": "Sau, phía sau",
  "onyomi": [
    "ゴ",
    "コウ"
  ],
  "kunyomi": [
    "のち",
    "うし.ろ",
    "あと"
  ],
  "strokeCount": 9,
  "commonWords": [
    {
      "word": "午後",
      "reading": "ごご",
      "meaning": "Buổi chiều"
    },
    {
      "word": "後ろ",
      "reading": "うしろ",
      "meaning": "Phía sau"
    },
    {
      "word": "最後",
      "reading": "さいご",
      "meaning": "Cuối cùng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "５分後に 電話します。",
      "reading": "Gofungo ni denwa shimasu.",
      "meaning": "Sau 5 phút tôi sẽ gọi lại."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-ki-tree",
  "character": "木",
  "hanViet": "MỘC",
  "meaning": "Cây, gỗ",
  "onyomi": [
    "ボク",
    "モク"
  ],
  "kunyomi": [
    "き"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "木曜日",
      "reading": "もくようび",
      "meaning": "Thứ Năm"
    },
    {
      "word": "大木",
      "reading": "たいぼく",
      "meaning": "Cây cổ thụ"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "庭に 大きな 木が あります。",
      "reading": "Niwa ni ookina ki ga arimasu.",
      "meaning": "Trong vườn có cây to."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-hayashi-grove",
  "character": "林",
  "hanViet": "LÂM",
  "meaning": "Rừng thưa, rặng cây",
  "onyomi": [
    "リン"
  ],
  "kunyomi": [
    "はやし"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "小林",
      "reading": "こばやし",
      "meaning": "Họ Kobayashi"
    },
    {
      "word": "林道",
      "reading": "りんどう",
      "meaning": "Đường mòn xuyên rừng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "林の 中を 歩きます。",
      "reading": "Hayashi no naka o arukimasu.",
      "meaning": "Đi bộ trong rừng cây."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-mori-forest",
  "character": "森",
  "hanViet": "SÂM",
  "meaning": "Rừng rậm, rừng già",
  "onyomi": [
    "シン"
  ],
  "kunyomi": [
    "もり"
  ],
  "strokeCount": 12,
  "commonWords": [
    {
      "word": "森",
      "reading": "もり",
      "meaning": "Khu rừng rậm"
    },
    {
      "word": "森田",
      "reading": "もりた",
      "meaning": "Họ Morita"
    },
    {
      "word": "森林",
      "reading": "しんりん",
      "meaning": "Rừng rậm"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "森に たくさんの 鳥が います。",
      "reading": "Mori ni takusan no tori ga imasu.",
      "meaning": "Trong rừng có nhiều chim."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-kawa-river",
  "character": "川",
  "hanViet": "XUYÊN",
  "meaning": "Con sông",
  "onyomi": [
    "セン"
  ],
  "kunyomi": [
    "かわ"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "小川",
      "reading": "おがわ",
      "meaning": "Con suối nhỏ"
    },
    {
      "word": "川岸",
      "reading": "かわぎし",
      "meaning": "Bờ sông"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "川で 泳いでは いけません。",
      "reading": "Kawa de oyoide wa ikemasen.",
      "meaning": "Không được bơi ở sông."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-yama-mountain",
  "character": "山",
  "hanViet": "SƠN",
  "meaning": "Ngọn núi",
  "onyomi": [
    "サン",
    "セン"
  ],
  "kunyomi": [
    "やま"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "富士山",
      "reading": "ふじさん",
      "meaning": "Núi Phú Sĩ"
    },
    {
      "word": "山登り",
      "reading": "やまのぼり",
      "meaning": "Leo núi"
    },
    {
      "word": "火山",
      "reading": "かざん",
      "meaning": "Núi lửa"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "休みに 山へ 行きます。",
      "reading": "Yasumi ni yama e ikimasu.",
      "meaning": "Ngày nghỉ tôi đi lên núi."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-ta-field",
  "character": "田",
  "hanViet": "ĐIỀN",
  "meaning": "Cánh đồng lúa",
  "onyomi": [
    "デン"
  ],
  "kunyomi": [
    "た"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "田中",
      "reading": "たなか",
      "meaning": "Họ Tanaka"
    },
    {
      "word": "山田",
      "reading": "やまだ",
      "meaning": "Họ Yamada"
    },
    {
      "word": "水田",
      "reading": "すいでん",
      "meaning": "Ruộng nước"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "田んぼで 米を 作ります。",
      "reading": "Tanbo de kome o tsukurimasu.",
      "meaning": "Trồng lúa ở ruộng."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-inu-dog",
  "character": "犬",
  "hanViet": "KHUYỂN",
  "meaning": "Con chó",
  "onyomi": [
    "ケン"
  ],
  "kunyomi": [
    "いぬ"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "子犬",
      "reading": "こいぬ",
      "meaning": "Chó con"
    },
    {
      "word": "番犬",
      "reading": "ばんけん",
      "meaning": "Chó giữ nhà"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "公園で 犬と 散歩します。",
      "reading": "Kouen de inu to sanpo shimasu.",
      "meaning": "Đi dạo với chó trong công viên."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-sakana-fish",
  "character": "魚",
  "hanViet": "NGƯ",
  "meaning": "Con cá",
  "onyomi": [
    "ギョ"
  ],
  "kunyomi": [
    "さかな",
    "うお"
  ],
  "strokeCount": 11,
  "commonWords": [
    {
      "word": "金魚",
      "reading": "きんぎょ",
      "meaning": "Cá vàng"
    },
    {
      "word": "魚屋",
      "reading": "さかなや",
      "meaning": "Tiệm cá"
    },
    {
      "word": "生魚",
      "reading": "なまざかな",
      "meaning": "Cá tươi sống"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "魚料理が 好きです。",
      "reading": "Sakanaryouri ga suki desu.",
      "meaning": "Tôi thích món cá."
    }
  ],
  "lessonId": "minna-bai-6-an-uong-mua-sam",
  "jlptLevel": "N5"
},
  {
  "id": "k-tori-bird",
  "character": "鳥",
  "hanViet": "ĐIỂU",
  "meaning": "Con chim",
  "onyomi": [
    "チョウ"
  ],
  "kunyomi": [
    "とり"
  ],
  "strokeCount": 11,
  "commonWords": [
    {
      "word": "小鳥",
      "reading": "ことり",
      "meaning": "Chim non"
    },
    {
      "word": "焼き鳥",
      "reading": "やきとり",
      "meaning": "Gà nướng xiên"
    },
    {
      "word": "白鳥",
      "reading": "はくちょう",
      "meaning": "Thiên nga"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "空に 鳥が 飛んでいます。",
      "reading": "Sora ni tori ga tonde imasu.",
      "meaning": "Chim đang bay trên trời."
    }
  ],
  "lessonId": "minna-bai-10-vi-tri-ton-tai",
  "jlptLevel": "N5"
},
  {
  "id": "k-hana-flower",
  "character": "花",
  "hanViet": "HOA",
  "meaning": "Bông hoa",
  "onyomi": [
    "カ",
    "ケ"
  ],
  "kunyomi": [
    "はな"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "花見",
      "reading": "はなみ",
      "meaning": "Ngắm hoa"
    },
    {
      "word": "花屋",
      "reading": "はなや",
      "meaning": "Tiệm hoa"
    },
    {
      "word": "花火",
      "reading": "はなび",
      "meaning": "Pháo hoa"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "きれいな 花ですね。",
      "reading": "Kirei na hana desu ne.",
      "meaning": "Bông hoa đẹp nhỉ."
    }
  ],
  "lessonId": "minna-bai-8-tinh-tu",
  "jlptLevel": "N5"
},
  {
  "id": "k-tatsu-stand",
  "character": "立",
  "hanViet": "LẬP",
  "meaning": "Đứng lên, thành lập",
  "onyomi": [
    "リツ",
    "リュウ"
  ],
  "kunyomi": [
    "た.つ",
    "た.てる"
  ],
  "strokeCount": 5,
  "commonWords": [
    {
      "word": "立ちます",
      "reading": "たちます",
      "meaning": "Đứng lên"
    },
    {
      "word": "国立",
      "reading": "こくりつ",
      "meaning": "Quốc lập, công lập"
    },
    {
      "word": "私立",
      "reading": "しりつ",
      "meaning": "Tư lập, dân lập"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "起立してください。",
      "reading": "Kiritsu shite kudasai.",
      "meaning": "Xin mời đứng dậy."
    }
  ],
  "lessonId": "minna-bai-14-sai-khien-te-kudasai",
  "jlptLevel": "N5"
},
  {
  "id": "k-iu-say",
  "character": "言",
  "hanViet": "NGÔN",
  "meaning": "Nói, lời nói",
  "onyomi": [
    "ゲン",
    "ゴン"
  ],
  "kunyomi": [
    "い.う",
    "こと"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "言います",
      "reading": "いいます",
      "meaning": "Nói"
    },
    {
      "word": "言語",
      "reading": "げんご",
      "meaning": "Ngôn ngữ"
    },
    {
      "word": "方言",
      "reading": "ほうげん",
      "meaning": "Phương ngữ"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "日本語で 何と 言いますか。",
      "reading": "Nihongo de nan to iimasu ka.",
      "meaning": "Tiếng Nhật nói thế nào?"
    }
  ],
  "lessonId": "minna-bai-21-cau-gian-tiep",
  "jlptLevel": "N5"
},
  {
  "id": "k-go-language",
  "character": "語",
  "hanViet": "NGỮ",
  "meaning": "Ngôn ngữ, tiếng",
  "onyomi": [
    "ゴ"
  ],
  "kunyomi": [
    "かた.る"
  ],
  "strokeCount": 14,
  "commonWords": [
    {
      "word": "日本語",
      "reading": "にほんご",
      "meaning": "Tiếng Nhật"
    },
    {
      "word": "英語",
      "reading": "えいご",
      "meaning": "Tiếng Anh"
    },
    {
      "word": "単語",
      "reading": "たんご",
      "meaning": "Từ vựng"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "日本語を 勉強します。",
      "reading": "Nihongo o benkyou shimasu.",
      "meaning": "Tôi học tiếng Nhật."
    }
  ],
  "lessonId": "minna-bai-1-tu-gioi-thieu",
  "jlptLevel": "N5"
},
  {
  "id": "k-hashiru-run",
  "character": "走",
  "hanViet": "TẨU",
  "meaning": "Chạy",
  "onyomi": [
    "ソウ"
  ],
  "kunyomi": [
    "はし.る"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "走ります",
      "reading": "はしります",
      "meaning": "Chạy"
    },
    {
      "word": "ご馳走",
      "reading": "ごちそう",
      "meaning": "Bữa ăn thịnh soạn"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "毎朝 走っています。",
      "reading": "Maiasa hashitte imasu.",
      "meaning": "Mỗi sáng tôi đều chạy bộ."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-aruku-walk",
  "character": "歩",
  "hanViet": "BỘ",
  "meaning": "Đi bộ",
  "onyomi": [
    "ホ",
    "ブ"
  ],
  "kunyomi": [
    "ある.く",
    "あゆ.む"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "歩きます",
      "reading": "あるきます",
      "meaning": "Đi bộ"
    },
    {
      "word": "散歩",
      "reading": "さんぽ",
      "meaning": "Đi dạo"
    },
    {
      "word": "歩行者",
      "reading": "ほこうしゃ",
      "meaning": "Người đi bộ"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "駅まで 歩いて １０分です。",
      "reading": "Eki made aruite juppun desu.",
      "meaning": "Đi bộ ra ga mất 10 phút."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-tomaru-stop",
  "character": "止",
  "hanViet": "CHỈ",
  "meaning": "Dừng lại",
  "onyomi": [
    "シ"
  ],
  "kunyomi": [
    "と.まる",
    "と.める"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "止まります",
      "reading": "とまります",
      "meaning": "Dừng xe"
    },
    {
      "word": "中止",
      "reading": "ちゅうし",
      "meaning": "Hủy bỏ"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "赤信号で 止まります。",
      "reading": "Akashingou de tomarimasu.",
      "meaning": "Dừng lại khi đèn đỏ."
    }
  ],
  "lessonId": "minna-bai-23-khi-va-neu",
  "jlptLevel": "N5"
},
  {
  "id": "k-kuruma-car",
  "character": "車",
  "hanViet": "XA",
  "meaning": "Xe hơi, bánh xe",
  "onyomi": [
    "シャ"
  ],
  "kunyomi": [
    "くるま"
  ],
  "strokeCount": 7,
  "commonWords": [
    {
      "word": "電車",
      "reading": "でんしゃ",
      "meaning": "Tàu điện"
    },
    {
      "word": "自転車",
      "reading": "じてんしゃ",
      "meaning": "Xe đạp"
    },
    {
      "word": "自動車",
      "reading": "じどうしゃ",
      "meaning": "Ô tô"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "車を 運転します。",
      "reading": "Kuruma o unten shimasu.",
      "meaning": "Lái xe ô tô."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-mon-gate",
  "character": "門",
  "hanViet": "MÔN",
  "meaning": "Cổng",
  "onyomi": [
    "モン"
  ],
  "kunyomi": [
    "かど"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "校門",
      "reading": "こうもん",
      "meaning": "Cổng trường"
    },
    {
      "word": "専門",
      "reading": "せんもん",
      "meaning": "Chuyên môn"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "正門の前で 会いましょう。",
      "reading": "Seimon no mae de aimashou.",
      "meaning": "Gặp nhau trước cổng chính nhé."
    }
  ],
  "lessonId": "minna-bai-5-di-den-ve",
  "jlptLevel": "N5"
},
  {
  "id": "k-hi-fire",
  "character": "火",
  "hanViet": "HỎA",
  "meaning": "Lửa",
  "onyomi": [
    "カ"
  ],
  "kunyomi": [
    "ひ"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "火曜日",
      "reading": "かようび",
      "meaning": "Thứ Ba"
    },
    {
      "word": "火事",
      "reading": "かじ",
      "meaning": "Vụ cháy"
    },
    {
      "word": "花火",
      "reading": "はなび",
      "meaning": "Pháo hoa"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "火曜日は 休みです。",
      "reading": "Kayoubi wa yasumi desu.",
      "meaning": "Thứ Ba được nghỉ."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-mizu-water",
  "character": "水",
  "hanViet": "THỦY",
  "meaning": "Nước",
  "onyomi": [
    "スイ"
  ],
  "kunyomi": [
    "みず"
  ],
  "strokeCount": 4,
  "commonWords": [
    {
      "word": "水曜日",
      "reading": "すいようび",
      "meaning": "Thứ Tư"
    },
    {
      "word": "水泳",
      "reading": "すいえい",
      "meaning": "Bơi lội"
    },
    {
      "word": "海水",
      "reading": "かいすい",
      "meaning": "Nước biển"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "冷たい 水を ください。",
      "reading": "Tsumetai mizu o kudasai.",
      "meaning": "Cho tôi xin nước lạnh."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-kin-gold",
  "character": "金",
  "hanViet": "KIM",
  "meaning": "Vàng, tiền",
  "onyomi": [
    "キン",
    "コン"
  ],
  "kunyomi": [
    "かね",
    "かな"
  ],
  "strokeCount": 8,
  "commonWords": [
    {
      "word": "お金",
      "reading": "おかね",
      "meaning": "Tiền bạc"
    },
    {
      "word": "金曜日",
      "reading": "きんようび",
      "meaning": "Thứ Sáu"
    },
    {
      "word": "料金",
      "reading": "りょうきん",
      "meaning": "Tiền cước phí"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "お金を 払います。",
      "reading": "Okane o haraimasu.",
      "meaning": "Tôi trả tiền."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
},
  {
  "id": "k-tsuchi-earth",
  "character": "土",
  "hanViet": "THỔ",
  "meaning": "Đất, thổ nhưỡng",
  "onyomi": [
    "ド",
    "ト"
  ],
  "kunyomi": [
    "つち"
  ],
  "strokeCount": 3,
  "commonWords": [
    {
      "word": "土曜日",
      "reading": "どようび",
      "meaning": "Thứ Bảy"
    },
    {
      "word": "土地",
      "reading": "とち",
      "meaning": "Đất đai"
    }
  ],
  "exampleSentences": [
    {
      "sentence": "土曜日に 映画を 見ます。",
      "reading": "Doyoubi ni eiga o mimasu.",
      "meaning": "Thứ Bảy tôi xem phim."
    }
  ],
  "lessonId": "minna-bai-4-thoi-gian",
  "jlptLevel": "N5"
}
];
