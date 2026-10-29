export interface ReadingPassage {
  id: string;
  title: string;
  level: string;
  passageJa: string;
  passageKana: string;
  passageVi: string;
  vocabHints: {
    word: string;
    reading: string;
    meaning: string;
  }[];
  questions: {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
  }[];
}

export const READING_PASSAGES: ReadingPassage[] = [
  {
    "id": "read-1",
    "title": "Bài đọc 1: 私の一日 (Một ngày của tôi)",
    "level": "N5 Cơ bản",
    "passageJa": "わたしは 毎朝 ６時半に 起きます。シャワーを 浴びて、朝ごはんを 食べます。朝ごはんは いつも パンと 卵と コーヒーです。\n７時４５分に うちを 出て、電車で 会社へ 行きます。会社は ８時半から ５時半までです。\n夜は ７時に うちへ 帰ります。晩ごはんを 食べたあとで、１時間 日本語を 勉強します。そして、１１時半に 寝ます。",
    "passageKana": "わたしは まいあさ ろくじはんに おきます。しゃわーを あびて、あさごはんを たべます。あさごはんは いつも ぱんと たまごと こーひーです。\nななじよんじゅうごふんに うちを でて、でんしゃで かいしゃへ いきます。かいしゃは はちじはんから ごじはんまでです。\nよるは しちじに うちへ かえります。ばんごはんを たべたあとで、いちじかん にほんごを べんきょうします。そして、じゅういちじはんに ねます。",
    "passageVi": "Tôi thức dậy lúc 6 giờ rưỡi mỗi sáng. Sau khi tắm vòi sen, tôi ăn sáng. Bữa sáng tôi luôn ăn bánh mì, trứng và uống cà phê.\n7 giờ 45 tôi rời nhà và đi tàu điện đến công ty. Giờ làm việc ở công ty là từ 8 giờ rưỡi đến 5 giờ rưỡi.\nBuổi tối tôi về nhà lúc 7 giờ. Sau khi ăn tối, tôi học tiếng Nhật trong 1 tiếng. Và tôi đi ngủ lúc 11 giờ rưỡi.",
    "vocabHints": [
      {
        "word": "シャワーを浴びる",
        "reading": "しゃわーをあびる",
        "meaning": "Tắm vòi hoa sen"
      },
      {
        "word": "卵",
        "reading": "たまご",
        "meaning": "Quả trứng"
      },
      {
        "word": "出ます",
        "reading": "でます",
        "meaning": "Rời khỏi, đi ra"
      }
    ],
    "questions": [
      {
        "question": "この人は 何時に うちを 出ますか。 (Người này rời nhà lúc mấy giờ?)",
        "options": [
          "６時半 (6:30)",
          "７時４５分 (7:45)",
          "８時半 (8:30)",
          "７時 (7:00)"
        ],
        "correctIndex": 1,
        "explanation": "Trong bài viết rõ: \"７時４５分に うちを 出て\" (Rời nhà lúc 7 giờ 45)."
      },
      {
        "question": "夜、何を しますか。 (Buổi tối người này làm gì?)",
        "options": [
          "テレビを ２時間 見ます。",
          "日本語を １時間 勉強します。",
          "会社で 晩ごはんを 食べます。",
          "９時に 寝ます。"
        ],
        "correctIndex": 1,
        "explanation": "Trong bài viết: \"晩ごはんを 食べたあとで、１時間 日本語を 勉強します\" (Sau khi ăn tối, học tiếng Nhật trong 1 tiếng)."
      }
    ]
  },
  {
    "id": "read-2",
    "title": "Bài đọc 2: 私の部屋 (Căn phòng của tôi)",
    "level": "N5 Cơ bản",
    "passageJa": "わたしの アパートは 駅から 歩いて ５分ぐらいです。部屋は あまり 大きくないですが、とても 明るくて 静かです。\n部屋の 中に 机と ベッドと 本棚が あります。机の 上に パソコンが あります。机の 隣に 大きな 窓が あります。\n窓から 桜の 木が 見えます。春は とても きれいです。わたしは この 部屋が 大好きです。",
    "passageKana": "わたしの あぱーとは えきから あるいて ごふんぐらいです。へやは あまり おおきくないですが、とても あかるくて しずかです。\nへやの なかに つくえと べっどと ほんだなが あります。つくえの うえに ぱそこんが あります。つくえの となりに おおきな まどが あります。\nまどから さくらの きが みえます。はるは とても きれいです。わたしは この へやが だいすきです。",
    "passageVi": "Căn hộ của tôi đi bộ từ ga mất khoảng 5 phút. Phòng tuy không lớn lắm nhưng rất sáng sủa và yên tĩnh.\nTrong phòng có bàn học, giường và giá sách. Trên bàn có máy vi tính. Bên cạnh bàn có một chiếc cửa sổ lớn.\nTừ cửa sổ có thể nhìn thấy cây hoa anh đào. Mùa xuân rất là đẹp. Tôi rất thích căn phòng này.",
    "vocabHints": [
      {
        "word": "アパート",
        "reading": "あぱーと",
        "meaning": "Căn hộ chung cư"
      },
      {
        "word": "本棚",
        "reading": "ほんだな",
        "meaning": "Giá sách"
      },
      {
        "word": "窓",
        "reading": "まど",
        "meaning": "Cửa sổ"
      },
      {
        "word": "見えます",
        "reading": "みえます",
        "meaning": "Nhìn thấy, có thể nhìn"
      }
    ],
    "questions": [
      {
        "question": "部屋は どんな 部屋ですか。 (Căn phòng là căn phòng như thế nào?)",
        "options": [
          "大きくて にぎやかです。",
          "あまり 大きくないですが、明るくて 静かです。",
          "駅から 遠くて 暗いです。",
          "とても 狭くて 汚いです。"
        ],
        "correctIndex": 1,
        "explanation": "Trong bài nêu rõ: \"部屋は あまり 大きくないですが、とても 明るくて 静かです\"."
      },
      {
        "question": "窓から 何が 見えますか。 (Từ cửa sổ nhìn thấy cái gì?)",
        "options": [
          "高い ビル",
          "駅の 電車",
          "桜の 木",
          "川と 海"
        ],
        "correctIndex": 2,
        "explanation": "Đoạn văn viết: \"窓から 桜の 木が 見えます\" (Từ cửa sổ có thể nhìn thấy cây hoa anh đào)."
      }
    ]
  },
  {
    "id": "read-3",
    "title": "Bài đọc 3: 週末の旅行 (Chuyến du lịch cuối tuần)",
    "level": "N5 Trung cấp",
    "passageJa": "先週の 土曜日に 友達と 京都へ 行きました。東京から 新幹線で 行きました。新幹線は とても 速くて 便利でした。\n京都で 古い お寺や 神社を たくさん 見ました。昼ごはんは 有名な 店で 抹茶アイスと そばを 食べました。\n天気は とても よかったです。写真も たくさん 撮りました。少し 疲れましたが、とても 楽しかったです。また 行きたいです。",
    "passageKana": "せんしゅうの どようびに ともだちと きょうとへ いきました。とうきょうから しんかんせんで いきました。しんかんせんは とても はやくて べんりでした。\nきょうとで ふるい おてらや じんじゃを たくさん みました。ひるごはんは ゆうめいな みせで まっちゃあいすと そばを たべました。\nてんきは とても よかったです。しゃしんも たくさん とりました。すこし つかれましたが、とても たのしかったです。また いきたいです。",
    "passageVi": "Thứ Bảy tuần trước tôi đã cùng bạn đi Kyoto. Chúng tôi đi bằng tàu siêu tốc Shinkansen từ Tokyo. Shinkansen rất nhanh và thuận tiện.\nỞ Kyoto chúng tôi đã đi thăm rất nhiều ngôi chùa cổ và đền thần. Bữa trưa chúng tôi ăn kem matcha và mì soba tại một quán nổi tiếng.\nThời tiết rất là đẹp. Chúng tôi cũng chụp rất nhiều ảnh. Hơi mệt một chút nhưng cực kỳ vui. Tôi muốn được đi lần nữa.",
    "vocabHints": [
      {
        "word": "新幹線",
        "reading": "しんかんせん",
        "meaning": "Tàu siêu tốc Shinkansen"
      },
      {
        "word": "お寺",
        "reading": "おてら",
        "meaning": "Chùa Phật giáo"
      },
      {
        "word": "神社",
        "reading": "じんじゃ",
        "meaning": "Đền Thần đạo Shinto"
      },
      {
        "word": "疲れます",
        "reading": "つかれます",
        "meaning": "Mệt mỏi"
      }
    ],
    "questions": [
      {
        "question": "何で 京都へ 行きましたか。 (Đã đi đến Kyoto bằng phương tiện gì?)",
        "options": [
          "飛行機 (Máy bay)",
          "新幹線 (Tàu siêu tốc)",
          "バス (Xe buýt)",
          "車 (Xe hơi)"
        ],
        "correctIndex": 1,
        "explanation": "Bài đọc nói: \"東京から 新幹線で 行きました\" (Đi từ Tokyo bằng tàu siêu tốc Shinkansen)."
      },
      {
        "question": "昼ごはんに 何を 食べましたか。 (Bữa trưa họ đã ăn món gì?)",
        "options": [
          "すしと ラーメン",
          "抹茶アイスと そば",
          "カレーと サラダ",
          "天ぷらと ご飯"
        ],
        "correctIndex": 1,
        "explanation": "Bài viết: \"昼ごはんは 有名な 店で 抹茶アイスと そばを 食べました\"."
      }
    ]
  },
  {
    "id": "read-4",
    "title": "Bài đọc 4: 図書館の案内 (Thông báo hướng dẫn thư viện)",
    "level": "N5 Thông báo thực tế",
    "passageJa": "【さくら図書館の お知らせ】\n開館時間：午前９時 ～ 午後７時（土曜日・日曜日は 午後５時まで）\n休館日：毎週月曜日（月曜日が 祝日の 場合は、火曜日が 休みになります）\n本は １人 ５冊まで、２週間 借りることが できます。\n館内では 静かに してください。飲食は できません。飲み物は １階の ロビーで お願いします。",
    "passageKana": "【さくらとしょかんの おしらせ】\nかいかんじかん：ごぜんくじ ～ ごごしちじ（どようび・にちようびは ごごごじまで）\nきゅうかんび：まいしゅうげつようび（げつようびが しゅくじつの ばあいは、かようびが やすみになります）\nほんは ひとり ごさつまで、にしゅうかん かりることが できます。\nかんないでは しずかに してください。いんしょくは できません。のみものは いっかいの ろびーで おねがいします。",
    "passageVi": "【Thông báo của Thư viện Sakura】\nGiờ mở cửa: 9:00 sáng ~ 7:00 tối (Thứ Bảy, Chủ Nhật mở đến 5:00 chiều)\nNgày nghỉ: Thứ Hai hàng tuần (Nếu thứ Hai trùng ngày lễ thì thứ Ba sẽ nghỉ bù)\nMỗi người được mượn tối đa 5 cuốn sách trong vòng 2 tuần.\nXin vui lòng giữ im lặng trong thư viện. Không được ăn uống. Uống nước xin mời xuống sảnh tầng 1.",
    "vocabHints": [
      {
        "word": "開館時間",
        "reading": "かいかんじかん",
        "meaning": "Giờ mở cửa"
      },
      {
        "word": "休館日",
        "reading": "きゅうかんび",
        "meaning": "Ngày đóng cửa nghỉ"
      },
      {
        "word": "飲食",
        "reading": "いんしょく",
        "meaning": "Ăn uống"
      }
    ],
    "questions": [
      {
        "question": "土曜日は 何時まで 開いていますか。 (Thứ Bảy thư viện mở đến mấy giờ?)",
        "options": [
          "午後５時 (17:00)",
          "午後７時 (19:00)",
          "午後９時 (21:00)",
          "午前９時 (9:00)"
        ],
        "correctIndex": 0,
        "explanation": "Thông báo ghi rõ: \"土曜日・日曜日は 午後５時まで\" (Thứ Bảy và Chủ Nhật mở đến 5 giờ chiều)."
      },
      {
        "question": "本は 何冊まで 借りられますか。 (Được mượn tối đa mấy quyển sách?)",
        "options": [
          "２冊",
          "３冊",
          "５冊",
          "１０冊"
        ],
        "correctIndex": 2,
        "explanation": "Thông báo viết: \"本は １人 ５冊まで\" (Mỗi người tối đa 5 quyển)."
      }
    ]
  },
  {
    "id": "read-5",
    "title": "Bài đọc 5: 田中さんへのメール (Email gửi anh Tanaka)",
    "level": "N5 Thư từ / Email",
    "passageJa": "田中さん\nお疲れ様です。ナムです。\n明日の ミーティングの 時間と 場所が 変わりましたので、連絡します。\n時間は 午後２時から 午後３時半までに なりました。\n場所は ３階の 第２会議室です。\n資料は 私が コピーして 持って行きますので、準備しなくても いいです。\nそれでは、明日 よろしく お願いいたします。\nナムより",
    "passageKana": "たなかさん\nおつかれさまです。なむです。\nあしたの みーてぃんぐの じかんと ばしょが かわりましたので、れんらくします。\nじかんは ごごにじから ごごさんじはんまでに なりました。\nばしょは さんかいの だいにかいぎしつです。\nしりょうは わたしが こぴーして もっていきますので、じゅんびしなくても いいです。\nそれでは、あした よろしく おねがいいたします。\nなむより",
    "passageVi": "Anh Tanaka thân mến,\nChào anh, em là Nam đây ạ.\nEm xin liên lạc để báo rằng thời gian và địa điểm cuộc họp ngày mai đã có thay đổi.\nThời gian đổi thành: Từ 2:00 chiều đến 3:30 chiều.\nĐịa điểm: Phòng họp số 2 ở tầng 3.\nTài liệu em sẽ photo và mang đến nên anh không cần chuẩn bị trước đâu ạ.\nHẹn gặp anh ngày mai ạ.\nNam",
    "vocabHints": [
      {
        "word": "変わります",
        "reading": "かわります",
        "meaning": "Thay đổi"
      },
      {
        "word": "第２会議室",
        "reading": "だいにかいぎしつ",
        "meaning": "Phòng họp số 2"
      },
      {
        "word": "準備",
        "reading": "じゅんび",
        "meaning": "Chuẩn bị"
      }
    ],
    "questions": [
      {
        "question": "ミーティングは 何階で ありますか。 (Cuộc họp diễn ra ở tầng mấy?)",
        "options": [
          "１階",
          "２階",
          "３階",
          "４階"
        ],
        "correctIndex": 2,
        "explanation": "Email ghi: \"場所は ３階の 第２会議室です\" (Ở phòng họp số 2, tầng 3)."
      },
      {
        "question": "田中さんは 資料を 準備しなければなりませんか。 (Anh Tanaka có phải chuẩn bị tài liệu không?)",
        "options": [
          "はい、全部 準備します。",
          "いいえ、ナムさんが 持って行きます。",
          "はい、コピー機で 作ります。",
          "いいえ、資料は ありません。"
        ],
        "correctIndex": 1,
        "explanation": "Nam viết: \"資料は 私が コピーして 持って行きますので、準備しなくても いいです\" (Tài liệu em sẽ photo mang theo nên anh không cần chuẩn bị)."
      }
    ]
  }
];
