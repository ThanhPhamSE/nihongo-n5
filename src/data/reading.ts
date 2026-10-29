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
    id: 'read-1',
    title: 'Bài đọc 1: 私の一日 (Một ngày của tôi)',
    level: 'N5 Cơ bản',
    passageJa: `わたしは 毎朝 ６時半に 起きます。シャワーを 浴びて、朝ごはんを 食べます。朝ごはんは いつも パンと 卵と コーヒーです。\n７時４５分に うちを 出て、電車で 会社へ 行きます。会社は ８時半から ５時半までです。\n夜は ７時に うちへ 帰ります。晩ごはんを 食べたあとで、１時間 日本語を 勉強します。そして、１１時半に 寝ます。`,
    passageKana: `わたしは まいあさ ろくじはんに おきます。しゃわーを あびて、あさごはんを たべます。あさごはんは いつも ぱんと たまごと こーひーです。\nななじよんじゅうごふんに うちを でて、でんしゃで かいしゃへ いきます。かいしゃは はちじはんから ごじはんまでです。\nよるは しちじに うちへ かえります。ばんごはんを たべたあとで、いちじかん にほんごを べんきょうします。そして、じゅういちじはんに ねます。`,
    passageVi: `Tôi thức dậy lúc 6 giờ rưỡi mỗi sáng. Sau khi tắm vòi sen, tôi ăn sáng. Bữa sáng tôi luôn ăn bánh mì, trứng và uống cà phê.\n7 giờ 45 tôi rời nhà và đi tàu điện đến công ty. Giờ làm việc ở công ty là từ 8 giờ rưỡi đến 5 giờ rưỡi.\nBuổi tối tôi về nhà lúc 7 giờ. Sau khi ăn tối, tôi học tiếng Nhật trong 1 tiếng. Và tôi đi ngủ lúc 11 giờ rưỡi.`,
    vocabHints: [
      { word: 'シャワーを浴びる', reading: 'しゃわーをあびる', meaning: 'Tắm vòi hoa sen' },
      { word: '卵', reading: 'たまご', meaning: 'Quả trứng' },
      { word: '出ます', reading: 'でます', meaning: 'Rời khỏi, đi ra' },
    ],
    questions: [
      {
        question: 'この人は 何時に うちを 出ますか。 (Người này rời nhà lúc mấy giờ?)',
        options: ['６時半 (6:30)', '７時４５分 (7:45)', '８時半 (8:30)', '７時 (7:00)'],
        correctIndex: 1,
        explanation: 'Trong bài viết rõ: "７時４５分に うちを 出て" (Rời nhà lúc 7 giờ 45).',
      },
      {
        question: '夜、何を しますか。 (Buổi tối người này làm gì?)',
        options: [
          'テレビを ２時間 見ます。',
          '日本語を １時間 勉強します。',
          '会社で 晩ごはんを 食べます。',
          '９時に 寝ます。',
        ],
        correctIndex: 1,
        explanation: 'Trong bài viết: "晩ごはんを 食べたあとで、１時間 日本語を 勉強します" (Sau khi ăn tối, học tiếng Nhật trong 1 tiếng).',
      },
    ],
  },
  {
    id: 'read-2',
    title: 'Bài đọc 2: 私の部屋 (Căn phòng của tôi)',
    level: 'N5 Cơ bản',
    passageJa: `わたしの アパートは 駅から 歩いて ５分ぐらいです。部屋は あまり 大きくないですが、とても 明るくて 静かです。\n部屋の 中に 机と ベッドと 本棚が あります。机の 上に パソコンが あります。机の 隣に 大きな 窓が あります。\n窓から 桜の 木が 見えます。春は とても きれいです。わたしは この 部屋が 大好きです。`,
    passageKana: `わたしの あぱーとは えきから あるいて ごふんぐらいです。へやは あまり おおきくないですが、とても あかるくて しずかです。\nへやの なかに つくえと べっどと ほんだなが あります。つくえの うえに ぱそこんが あります。つくえの となりに おおきな まどが あります。\nまどから さくらの きが みえます。はるは とても きれいです。わたしは この へやが だいすきです。`,
    passageVi: `Căn hộ của tôi đi bộ từ ga mất khoảng 5 phút. Phòng tuy không lớn lắm nhưng rất sáng sủa và yên tĩnh.\nTrong phòng có bàn học, giường và giá sách. Trên bàn có máy vi tính. Bên cạnh bàn có một chiếc cửa sổ lớn.\nTừ cửa sổ có thể nhìn thấy cây hoa anh đào. Mùa xuân rất là đẹp. Tôi rất thích căn phòng này.`,
    vocabHints: [
      { word: '明るい', reading: 'あかるい', meaning: 'Sáng sủa, rạng rỡ' },
      { word: '窓', reading: 'まど', meaning: 'Cửa sổ' },
      { word: '桜', reading: 'さくら', meaning: 'Hoa anh đào' },
    ],
    questions: [
      {
        question: '部屋は どんな 部屋ですか。 (Căn phòng là một căn phòng như thế nào?)',
        options: [
          '大きくて にぎやかです。',
          '小さくて 暗いです。',
          'あまり 大きくないですが、明るくて 静かです。',
          '駅から 遠くて 不便です。',
        ],
        correctIndex: 2,
        explanation: 'Đoạn đầu bài miêu tả: "部屋は あまり 大きくないですが、とても 明るくて 静かです".',
      },
      {
        question: '窓から 何が 見えますか。 (Từ cửa sổ nhìn thấy cái gì?)',
        options: ['駅 (Nhà ga)', '桜の 木 (Cây hoa anh đào)', '海 (Biển)', '高い ビル (Tòa nhà cao tầng)'],
        correctIndex: 1,
        explanation: 'Trong bài viết: "窓から 桜の 木が 見えます" (Từ cửa sổ nhìn thấy cây hoa anh đào).',
      },
    ],
  },
  {
    id: 'read-3',
    title: 'Bài đọc 3: 図書館の お知らせ (Thông báo của thư viện)',
    level: 'N5 Tìm kiếm thông tin',
    passageJa: `【さくら図書館の 利用案内】\n開館時間：午前９時 〜 午後７時（土日・祝日は 午後５時まで）\n休館日：毎週 月曜日（月曜日が 祝日のときは 火曜日）\n本を 借りる とき：１人 ５冊まで、２週間 借りることが できます。\n注意：図書館の 中で 食べたり 飲んだり しては いけません。携帯電話で 話さないで ください。`,
    passageKana: `【さくらとしょかんの りようあんない】\nかいかんじかん：ごぜんくじ 〜 ごごしちじ（どにち・しゅくじつは ごごごじまで）\nきゅうかんび：まいしゅう げつようび\nほんを かりる とき：ひとり ごさつまで、にしゅうかん かりることが できます。\nちゅうい：としょかんの なかで たべたり のんだり しては いけません。`,
    passageVi: `【Hướng dẫn sử dụng Thư viện Sakura】\nGiờ mở cửa: 9:00 sáng - 7:00 tối (Thứ Bảy, Chủ Nhật và ngày lễ mở đến 5:00 chiều)\nNgày nghỉ: Thứ Hai hàng tuần (Nếu thứ Hai trùng ngày lễ thì nghỉ thứ Ba)\nKhi mượn sách: Mỗi người được mượn tối đa 5 cuốn trong vòng 2 tuần.\nLưu ý: Không được phép ăn uống trong thư viện. Vui lòng không nói chuyện điện thoại.`,
    vocabHints: [
      { word: '開館時間', reading: 'かいかんじかん', meaning: 'Giờ mở cửa' },
      { word: '借りる', reading: 'かりる', meaning: 'Mượn' },
      { word: '冊', reading: 'さつ', meaning: 'Cuốn, quyển (sách)' },
    ],
    questions: [
      {
        question: '日曜日は 何時まで 開いて いますか。 (Chủ Nhật thư viện mở đến mấy giờ?)',
        options: ['午後５時まで (Đến 5:00 chiều)', '午後７時まで (Đến 7:00 tối)', '午前９時まで (Đến 9:00 sáng)', '休館日です (Nghỉ đóng cửa)'],
        correctIndex: 0,
        explanation: 'Thông báo ghi rõ: "（土日・祝日は 午後５時まで）" nghĩa là thứ Bảy, Chủ Nhật và ngày lễ chỉ mở đến 5 giờ chiều.',
      },
      {
        question: '本は 何冊、何週間 借りられますか。 (Được mượn mấy cuốn sách, trong mấy tuần?)',
        options: ['３冊、１週間', '５冊、２週間', '１０冊、１か月', '何冊でも 借りられます'],
        correctIndex: 1,
        explanation: 'Thông báo ghi: "１人 ５冊まで、２週間 借りることが できます" (Tối đa 5 cuốn, trong 2 tuần).',
      },
    ],
  },
];

