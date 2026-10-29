export interface KanaCharacter {
  char: string;
  romaji: string;
  type: 'basic' | 'dakuon' | 'handakuon' | 'yoon';
  row: string; // 'a', 'ka', 'sa', etc.
  mnemonic?: string; // Mẹo nhớ vui
  examples: {
    word: string;
    reading: string;
    meaning: string;
  }[];
}

export const HIRAGANA_DATA: KanaCharacter[] = [
  // Basic A-row
  { char: 'あ', romaji: 'a', type: 'basic', row: 'a', mnemonic: 'Trông giống quả táo có cuống cong', examples: [{ word: 'あい', reading: 'ai', meaning: 'Tình yêu' }, { word: 'あめ', reading: 'ame', meaning: 'Mưa' }] },
  { char: 'い', romaji: 'i', type: 'basic', row: 'a', mnemonic: 'Hai chiếc đũa song song', examples: [{ word: 'いえ', reading: 'ie', meaning: 'Ngôi nhà' }, { word: 'いぬ', reading: 'inu', meaning: 'Con chó' }] },
  { char: 'う', romaji: 'u', type: 'basic', row: 'a', mnemonic: 'Người đang cúi gập lưng vác nặng', examples: [{ word: 'うえ', reading: 'ue', meaning: 'Phía trên' }, { word: 'うみ', reading: 'umi', meaning: 'Biển' }] },
  { char: 'え', romaji: 'e', type: 'basic', row: 'a', mnemonic: 'Một chú chim đang bay xiên', examples: [{ word: 'えき', reading: 'eki', meaning: 'Nhà ga' }, { word: 'えん', reading: 'en', meaning: 'Tiền Yên' }] },
  { char: 'お', romaji: 'o', type: 'basic', row: 'a', mnemonic: 'Người trượt bóng chày', examples: [{ word: 'おとこ', reading: 'otoko', meaning: 'Đàn ông' }, { word: 'おちゃ', reading: 'ocha', meaning: 'Trà' }] },

  // Ka-row
  { char: 'か', romaji: 'ka', type: 'basic', row: 'ka', mnemonic: 'Lưỡi liềm cắt lúa', examples: [{ word: 'かさ', reading: 'kasa', meaning: 'Cái ô' }, { word: 'かわ', reading: 'kawa', meaning: 'Con sông' }] },
  { char: 'き', romaji: 'ki', type: 'basic', row: 'ka', mnemonic: 'Chiếc chìa khóa mở tủ', examples: [{ word: 'き', reading: 'ki', meaning: 'Cây cối' }, { word: 'きって', reading: 'kitte', meaning: 'Con tem' }] },
  { char: 'く', romaji: 'ku', type: 'basic', row: 'ka', mnemonic: 'Cái mỏ chim bồ câu', examples: [{ word: 'くるま', reading: 'kuruma', meaning: 'Xe ô tô' }, { word: 'くち', reading: 'kuchi', meaning: 'Cái miệng' }] },
  { char: 'け', romaji: 'ke', type: 'basic', row: 'ka', mnemonic: 'Cái thùng rượu gỗ kê trên giá', examples: [{ word: 'けさ', reading: 'kesa', meaning: 'Sáng nay' }] },
  { char: 'こ', romaji: 'ko', type: 'basic', row: 'ka', mnemonic: 'Hai thanh gỗ đặt song song', examples: [{ word: 'こども', reading: 'kodomo', meaning: 'Trẻ em' }, { word: 'ここ', reading: 'koko', meaning: 'Ở đây' }] },

  // Sa-row
  { char: 'さ', romaji: 'sa', type: 'basic', row: 'sa', mnemonic: 'Thìa múc chè', examples: [{ word: 'さかな', reading: 'sakana', meaning: 'Con cá' }] },
  { char: 'し', romaji: 'shi', type: 'basic', row: 'sa', mnemonic: 'Lưỡi câu cá uốn cong', examples: [{ word: 'しお', reading: 'shio', meaning: 'Muối' }, { word: 'しろ', reading: 'shiro', meaning: 'Màu trắng' }] },
  { char: 'す', romaji: 'su', type: 'basic', row: 'sa', mnemonic: 'Vòng dây thòng lọng xoắn ốc', examples: [{ word: 'すし', reading: 'sushi', meaning: 'Món sushi' }] },
  { char: 'せ', romaji: 'se', type: 'basic', row: 'sa', mnemonic: 'Bậc cầu thang', examples: [{ word: 'せんせい', reading: 'sensei', meaning: 'Thầy cô giáo' }] },
  { char: 'そ', romaji: 'so', type: 'basic', row: 'sa', mnemonic: 'Đường ziczac uốn lượn', examples: [{ word: 'そら', reading: 'sora', meaning: 'Bầu trời' }] },

  // Ta-row
  { char: 'た', romaji: 'ta', type: 'basic', row: 'ta', mnemonic: 'Chữ t và a lồng ghép', examples: [{ word: 'たまご', reading: 'tamago', meaning: 'Quả trứng' }] },
  { char: 'ち', romaji: 'chi', type: 'basic', row: 'ta', mnemonic: 'Số 5 bị đảo ngược', examples: [{ word: 'ちず', reading: 'chizu', meaning: 'Bản đồ' }] },
  { char: 'つ', romaji: 'tsu', type: 'basic', row: 'ta', mnemonic: 'Cơn sóng thần Tsunami uốn lượn', examples: [{ word: 'つき', reading: 'tsuki', meaning: 'Mặt trăng' }] },
  { char: 'て', romaji: 'te', type: 'basic', row: 'ta', mnemonic: 'Bàn tay dang rộng', examples: [{ word: 'て', reading: 'te', meaning: 'Bàn tay' }] },
  { char: 'と', romaji: 'to', type: 'basic', row: 'ta', mnemonic: 'Ngón chân cái bị gai đâm', examples: [{ word: 'ともだち', reading: 'tomodachi', meaning: 'Bạn bè' }] },

  // Na-row
  { char: 'な', romaji: 'na', type: 'basic', row: 'na', mnemonic: 'Kiếm sĩ vung kiếm chém hoa', examples: [{ word: 'なつ', reading: 'natsu', meaning: 'Mùa hè' }] },
  { char: 'に', romaji: 'ni', type: 'basic', row: 'na', mnemonic: 'Kim khâu và sợi chỉ', examples: [{ word: 'にく', reading: 'niku', meaning: 'Thịt' }] },
  { char: 'ぬ', romaji: 'nu', type: 'basic', row: 'na', mnemonic: 'Sợi mì xoắn vòng', examples: [{ word: 'いぬ', reading: 'inu', meaning: 'Con chó' }] },
  { char: 'ね', romaji: 'ne', type: 'basic', row: 'na', mnemonic: 'Con mèo có cái đuôi cong', examples: [{ word: 'ねこ', reading: 'neko', meaning: 'Con mèo' }] },
  { char: 'の', romaji: 'no', type: 'basic', row: 'na', mnemonic: 'Biển cấm tròn xoe', examples: [{ word: 'のみもの', reading: 'nomimono', meaning: 'Đồ uống' }] },

  // Ha-row
  { char: 'は', romaji: 'ha', type: 'basic', row: 'ha', mnemonic: 'Cây cột nhà bên trái', examples: [{ word: 'はな', reading: 'hana', meaning: 'Bông hoa' }] },
  { char: 'ひ', romaji: 'hi', type: 'basic', row: 'ha', mnemonic: 'Chiếc miệng cười toe toét', examples: [{ word: 'ひと', reading: 'hito', meaning: 'Người' }] },
  { char: 'ふ', romaji: 'fu', type: 'basic', row: 'ha', mnemonic: 'Núi Phú Sĩ mây phủ', examples: [{ word: 'ふね', reading: 'fune', meaning: 'Con thuyền' }] },
  { char: 'へ', romaji: 'he', type: 'basic', row: 'ha', mnemonic: 'Mái nhà che nắng', examples: [{ word: 'へや', reading: 'heya', meaning: 'Căn phòng' }] },
  { char: 'ほ', romaji: 'ho', type: 'basic', row: 'ha', mnemonic: 'Cây thánh giá có mái che', examples: [{ word: 'ほん', reading: 'hon', meaning: 'Quyển sách' }] },

  // Ma-row
  { char: 'ま', romaji: 'ma', type: 'basic', row: 'ma', mnemonic: 'Mặt nạ hóa trang', examples: [{ word: 'まち', reading: 'machi', meaning: 'Thành phố' }] },
  { char: 'み', romaji: 'mi', type: 'basic', row: 'ma', mnemonic: 'Nốt nhạc êm dịu', examples: [{ word: 'みず', reading: 'mizu', meaning: 'Nước' }] },
  { char: 'む', romaji: 'mu', type: 'basic', row: 'ma', mnemonic: 'Chú bò kêu u u', examples: [{ word: 'むし', reading: 'mushi', meaning: 'Côn trùng' }] },
  { char: 'め', romaji: 'me', type: 'basic', row: 'ma', mnemonic: 'Con mắt tròn xoe', examples: [{ word: 'め', reading: 'me', meaning: 'Đôi mắt' }] },
  { char: 'も', romaji: 'mo', type: 'basic', row: 'ma', mnemonic: 'Lưỡi câu bắt nhiều mồi hơn', examples: [{ word: 'もり', reading: 'mori', meaning: 'Khu rừng' }] },

  // Ya-row
  { char: 'や', romaji: 'ya', type: 'basic', row: 'ya', mnemonic: 'Chiếc sừng con hươu', examples: [{ word: 'やま', reading: 'yama', meaning: 'Ngọn núi' }] },
  { char: 'ゆ', romaji: 'yu', type: 'basic', row: 'ya', mnemonic: 'Suối nước nóng bốc hơi', examples: [{ word: 'ゆき', reading: 'yuki', meaning: 'Tuyết' }] },
  { char: 'よ', romaji: 'yo', type: 'basic', row: 'ya', mnemonic: 'Chiếc chìa khóa ô tô', examples: [{ word: 'よる', reading: 'yoru', meaning: 'Buổi tối' }] },

  // Ra-row
  { char: 'ら', romaji: 'ra', type: 'basic', row: 'ra', mnemonic: 'Chú lạc đà có bướu', examples: [{ word: 'らいしゅう', reading: 'raishuu', meaning: 'Tuần sau' }] },
  { char: 'り', romaji: 'ri', type: 'basic', row: 'ra', mnemonic: 'Dải ruy băng buộc quà', examples: [{ word: 'りんご', reading: 'ringo', meaning: 'Quả táo' }] },
  { char: 'る', romaji: 'ru', type: 'basic', row: 'ra', mnemonic: 'Có vòng tròn nhỏ ở chân', examples: [{ word: 'くるま', reading: 'kuruma', meaning: 'Xe hơi' }] },
  { char: 'れ', romaji: 're', type: 'basic', row: 'ra', mnemonic: 'Người đang ngồi nghỉ', examples: [{ word: 'れきし', reading: 'rekishi', meaning: 'Lịch sử' }] },
  { char: 'ろ', romaji: 'ro', type: 'basic', row: 'ra', mnemonic: 'Giống chữ る nhưng không thắt nút', examples: [{ word: 'ろうそく', reading: 'rousoku', meaning: 'Cây nến' }] },

  // Wa, Wo, N
  { char: 'わ', romaji: 'wa', type: 'basic', row: 'wa', mnemonic: 'Cái hồ lô tròn', examples: [{ word: 'わたし', reading: 'watashi', meaning: 'Tôi' }] },
  { char: 'を', romaji: 'wo', type: 'basic', row: 'wa', mnemonic: 'Trợ từ chỉ tân ngữ (đọc là o)', examples: [{ word: 'みず を のむ', reading: 'mizu o nomu', meaning: 'Uống nước' }] },
  { char: 'ん', romaji: 'n', type: 'basic', row: 'wa', mnemonic: 'Chữ n cách điệu', examples: [{ word: 'にほん', reading: 'nihon', meaning: 'Nhật Bản' }] },

  // Biến âm Dakuon Ga, Za, Da, Ba
  { char: 'が', romaji: 'ga', type: 'dakuon', row: 'ka', examples: [{ word: 'がくせい', reading: 'gakusei', meaning: 'Học sinh' }] },
  { char: 'ぎ', romaji: 'gi', type: 'dakuon', row: 'ka', examples: [{ word: 'ぎんこう', reading: 'ginkou', meaning: 'Ngân hàng' }] },
  { char: 'ぐ', romaji: 'gu', type: 'dakuon', row: 'ka', examples: [{ word: 'ぐらい', reading: 'gurai', meaning: 'Khoảng' }] },
  { char: 'げ', romaji: 'ge', type: 'dakuon', row: 'ka', examples: [{ word: 'げつようび', reading: 'getsuyoubi', meaning: 'Thứ hai' }] },
  { char: 'ご', romaji: 'go', type: 'dakuon', row: 'ka', examples: [{ word: 'ごはん', reading: 'gohan', meaning: 'Cơm' }] },

  { char: 'ざ', romaji: 'za', type: 'dakuon', row: 'sa', examples: [{ word: 'ざっし', reading: 'zasshi', meaning: 'Tạp chí' }] },
  { char: 'じ', romaji: 'ji', type: 'dakuon', row: 'sa', examples: [{ word: 'じかん', reading: 'jikan', meaning: 'Thời gian' }] },
  { char: 'ず', romaji: 'zu', type: 'dakuon', row: 'sa', examples: [{ word: 'ちず', reading: 'chizu', meaning: 'Bản đồ' }] },
  { char: 'ぜ', romaji: 'ze', type: 'dakuon', row: 'sa', examples: [{ word: 'ぜんぶ', reading: 'zenbu', meaning: 'Toàn bộ' }] },
  { char: 'ぞ', romaji: 'zo', type: 'dakuon', row: 'sa', examples: [{ word: 'ぞう', reading: 'zou', meaning: 'Con voi' }] },

  { char: 'だ', romaji: 'da', type: 'dakuon', row: 'ta', examples: [{ word: 'だいがく', reading: 'daigaku', meaning: 'Đại học' }] },
  { char: 'ぢ', romaji: 'ji', type: 'dakuon', row: 'ta', examples: [{ word: 'はなぢ', reading: 'hanaji', meaning: 'Chảy máu cam' }] },
  { char: 'づ', romaji: 'zu', type: 'dakuon', row: 'ta', examples: [{ word: 'つづく', reading: 'tsuzuku', meaning: 'Tiếp tục' }] },
  { char: 'で', romaji: 'de', type: 'dakuon', row: 'ta', examples: [{ word: 'でんわ', reading: 'denwa', meaning: 'Điện thoại' }] },
  { char: 'ど', romaji: 'do', type: 'dakuon', row: 'ta', examples: [{ word: 'どこ', reading: 'doko', meaning: 'Ở đâu' }] },

  { char: 'ば', romaji: 'ba', type: 'dakuon', row: 'ha', examples: [{ word: 'ばんごう', reading: 'bangou', meaning: 'Số thứ tự' }] },
  { char: 'び', romaji: 'bi', type: 'dakuon', row: 'ha', examples: [{ word: 'びょういん', reading: 'byouin', meaning: 'Bệnh viện' }] },
  { char: 'ぶ', romaji: 'bu', type: 'dakuon', row: 'ha', examples: [{ word: 'ぶたにく', reading: 'butaniku', meaning: 'Thịt lợn' }] },
  { char: 'べ', romaji: 'be', type: 'dakuon', row: 'ha', examples: [{ word: 'べんきょう', reading: 'benkyou', meaning: 'Học tập' }] },
  { char: 'ぼ', romaji: 'bo', type: 'dakuon', row: 'ha', examples: [{ word: 'ぼうし', reading: 'boushi', meaning: 'Cái mũ' }] },

  // Biến âm Handakuon Pa
  { char: 'ぱ', romaji: 'pa', type: 'handakuon', row: 'ha', examples: [{ word: 'ぱん', reading: 'pan', meaning: 'Bánh mì' }] },
  { char: 'ぴ', romaji: 'pi', type: 'handakuon', row: 'ha', examples: [{ word: 'ぴかぴか', reading: 'pikapika', meaning: 'Lấp lánh' }] },
  { char: 'ぷ', romaji: 'pu', type: 'handakuon', row: 'ha', examples: [{ word: 'てんぷら', reading: 'tenpura', meaning: 'Món Tempura' }] },
  { char: 'ぺ', romaji: 'pe', type: 'handakuon', row: 'ha', examples: [{ word: 'ぺらぺら', reading: 'perapera', meaning: 'Nói lưu loát' }] },
  { char: 'ぽ', romaji: 'po', type: 'handakuon', row: 'ha', examples: [{ word: 'ぽけっと', reading: 'poketto', meaning: 'Túi áo' }] },
];

export const KATAKANA_DATA: KanaCharacter[] = [
  { char: 'ア', romaji: 'a', type: 'basic', row: 'a', examples: [{ word: 'アメリカ', reading: 'amerika', meaning: 'Nước Mỹ' }] },
  { char: 'イ', romaji: 'i', type: 'basic', row: 'a', examples: [{ word: 'インド', reading: 'indo', meaning: 'Ấn Độ' }] },
  { char: 'ウ', romaji: 'u', type: 'basic', row: 'a', examples: [{ word: 'ウエブ', reading: 'webu', meaning: 'Trang web' }] },
  { char: 'エ', romaji: 'e', type: 'basic', row: 'a', examples: [{ word: 'エレベーター', reading: 'erebeetaa', meaning: 'Thang máy' }] },
  { char: 'オ', romaji: 'o', type: 'basic', row: 'a', examples: [{ word: 'オレンジ', reading: 'orenji', meaning: 'Quả cam' }] },

  { char: 'カ', romaji: 'ka', type: 'basic', row: 'ka', examples: [{ word: 'カメラ', reading: 'kamera', meaning: 'Máy ảnh' }] },
  { char: 'キ', romaji: 'ki', type: 'basic', row: 'ka', examples: [{ word: 'キッチン', reading: 'kicchin', meaning: 'Nhà bếp' }] },
  { char: 'ク', romaji: 'ku', type: 'basic', row: 'ka', examples: [{ word: 'クラス', reading: 'kurasu', meaning: 'Lớp học' }] },
  { char: 'ケ', romaji: 'ke', type: 'basic', row: 'ka', examples: [{ word: 'ケーキ', reading: 'keeki', meaning: 'Bánh kem' }] },
  { char: 'コ', romaji: 'ko', type: 'basic', row: 'ka', examples: [{ word: 'コーヒー', reading: 'koohii', meaning: 'Cà phê' }] },

  { char: 'サ', romaji: 'sa', type: 'basic', row: 'sa', examples: [{ word: 'サラダ', reading: 'sarada', meaning: 'Món salad' }] },
  { char: 'シ', romaji: 'shi', type: 'basic', row: 'sa', mnemonic: 'Phẩy từ dưới lên', examples: [{ word: 'シャツ', reading: 'shatsu', meaning: 'Áo sơ mi' }] },
  { char: 'ス', romaji: 'su', type: 'basic', row: 'sa', examples: [{ word: 'スーパー', reading: 'suupaa', meaning: 'Siêu thị' }] },
  { char: 'セ', romaji: 'se', type: 'basic', row: 'sa', examples: [{ word: 'セーター', reading: 'seetaa', meaning: 'Áo len' }] },
  { char: 'ソ', romaji: 'so', type: 'basic', row: 'sa', mnemonic: 'Nét phẩy chéo từ trên xuống', examples: [{ word: 'ソファ', reading: 'sofa', meaning: 'Ghế sô pha' }] },

  { char: 'タ', romaji: 'ta', type: 'basic', row: 'ta', examples: [{ word: 'タクシー', reading: 'takushii', meaning: 'Xe taxi' }] },
  { char: 'チ', romaji: 'chi', type: 'basic', row: 'ta', examples: [{ word: 'チケット', reading: 'chiketto', meaning: 'Tấm vé' }] },
  { char: 'ツ', romaji: 'tsu', type: 'basic', row: 'ta', mnemonic: 'Phẩy dọc từ trên xuống', examples: [{ word: 'ツアー', reading: 'tsuaa', meaning: 'Tour du lịch' }] },
  { char: 'テ', romaji: 'te', type: 'basic', row: 'ta', examples: [{ word: 'テレビ', reading: 'terebi', meaning: 'Tivi' }] },
  { char: 'ト', romaji: 'to', type: 'basic', row: 'ta', examples: [{ word: 'トイレ', reading: 'toire', meaning: 'Nhà vệ sinh' }] },

  { char: 'ナ', romaji: 'na', type: 'basic', row: 'na', examples: [{ word: 'ナイフ', reading: 'naifu', meaning: 'Con dao' }] },
  { char: 'ニ', romaji: 'ni', type: 'basic', row: 'na', examples: [{ word: 'ニュース', reading: 'nyuusu', meaning: 'Tin tức' }] },
  { char: 'ヌ', romaji: 'nu', type: 'basic', row: 'na', examples: [{ word: 'カヌー', reading: 'kanuu', meaning: 'Thuyền cano' }] },
  { char: 'ネ', romaji: 'ne', type: 'basic', row: 'na', examples: [{ word: 'ネクタイ', reading: 'nekutai', meaning: 'Cà vạt' }] },
  { char: 'ノ', romaji: 'no', type: 'basic', row: 'na', examples: [{ word: 'ノート', reading: 'nooto', meaning: 'Vở ghi bài' }] },

  { char: 'ハ', romaji: 'ha', type: 'basic', row: 'ha', examples: [{ word: 'ハンバーガー', reading: 'hanbaagaa', meaning: 'Bánh hamburger' }] },
  { char: 'ヒ', romaji: 'hi', type: 'basic', row: 'ha', examples: [{ word: 'ヒント', reading: 'hinto', meaning: 'Gợi ý' }] },
  { char: 'フ', romaji: 'fu', type: 'basic', row: 'ha', examples: [{ word: 'フォーク', reading: 'fooku', meaning: 'Cái nĩa' }] },
  { char: 'ヘ', romaji: 'he', type: 'basic', row: 'ha', examples: [{ word: 'ヘリコプター', reading: 'herikoputaa', meaning: 'Máy bay trực thăng' }] },
  { char: 'ホ', romaji: 'ho', type: 'basic', row: 'ha', examples: [{ word: 'ホテル', reading: 'hoteru', meaning: 'Khách sạn' }] },

  { char: 'マ', romaji: 'ma', type: 'basic', row: 'ma', examples: [{ word: 'マスク', reading: 'masuku', meaning: 'Khẩu trang' }] },
  { char: 'ミ', romaji: 'mi', type: 'basic', row: 'ma', examples: [{ word: 'ミルク', reading: 'miruku', meaning: 'Sữa tươi' }] },
  { char: 'ム', romaji: 'mu', type: 'basic', row: 'ma', examples: [{ word: 'チーム', reading: 'chiimu', meaning: 'Đội nhóm' }] },
  { char: 'メ', romaji: 'me', type: 'basic', row: 'ma', examples: [{ word: 'メニュー', reading: 'menyuu', meaning: 'Thực đơn' }] },
  { char: 'モ', romaji: 'mo', type: 'basic', row: 'ma', examples: [{ word: 'モデル', reading: 'moderu', meaning: 'Người mẫu' }] },

  { char: 'ヤ', romaji: 'ya', type: 'basic', row: 'ya', examples: [{ word: 'ダイヤ', reading: 'daiya', meaning: 'Kim cương' }] },
  { char: 'ユ', romaji: 'yu', type: 'basic', row: 'ya', examples: [{ word: 'ユニフォーム', reading: 'yunifoomu', meaning: 'Đồng phục' }] },
  { char: 'ヨ', romaji: 'yo', type: 'basic', row: 'ya', examples: [{ word: 'ヨーグルト', reading: 'yooguruto', meaning: 'Sữa chua' }] },

  { char: 'ラ', romaji: 'ra', type: 'basic', row: 'ra', examples: [{ word: 'ラジオ', reading: 'rajio', meaning: 'Đài phát thanh' }] },
  { char: 'リ', romaji: 'ri', type: 'basic', row: 'ra', examples: [{ word: 'リーダー', reading: 'riidaa', meaning: 'Người đứng đầu' }] },
  { char: 'ル', romaji: 'ru', type: 'basic', row: 'ra', examples: [{ word: 'ルール', reading: 'ruuru', meaning: 'Quy tắc' }] },
  { char: 'レ', romaji: 're', type: 'basic', row: 'ra', examples: [{ word: 'レストラン', reading: 'resutoran', meaning: 'Nhà hàng' }] },
  { char: 'ロ', romaji: 'ro', type: 'basic', row: 'ra', examples: [{ word: 'ロボット', reading: 'robotto', meaning: 'Người máy' }] },

  { char: 'ワ', romaji: 'wa', type: 'basic', row: 'wa', examples: [{ word: 'ワイン', reading: 'wain', meaning: 'Rượu vang' }] },
  { char: 'ヲ', romaji: 'wo', type: 'basic', row: 'wa', examples: [{ word: 'ヲ', reading: 'wo', meaning: 'Trợ từ hiếm gặp' }] },
  { char: 'ン', romaji: 'n', type: 'basic', row: 'wa', mnemonic: 'Phẩy từ dưới hất lên', examples: [{ word: 'パン', reading: 'pan', meaning: 'Bánh mì' }] },
];

