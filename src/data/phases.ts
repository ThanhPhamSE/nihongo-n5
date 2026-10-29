import { LearningPhase } from '@/types';

export const LEARNING_PHASES: LearningPhase[] = [
  {
    id: 1,
    phaseNumber: 1,
    title: 'Giai đoạn 1: Khởi động & Hai bảng chữ cái',
    description: 'Nắm vững phát âm chuẩn Tokyo, bảng Hiragana, Katakana, biến âm (Dakuon/Handakuon), âm ghép (Yoon), âm ngắt (Sokuon) và trường âm.',
    weeks: [1, 2],
    color: 'bg-rose-50 text-rose-700 border-rose-200',
  },
  {
    id: 2,
    phaseNumber: 2,
    title: 'Giai đoạn 2: Nền tảng giao tiếp sơ cấp (Bài 1 - 8)',
    description: 'Dựa theo giáo trình chuẩn Minna no Nihongo. Tự giới thiệu bản thân, đại từ chỉ định, hỏi giá cả nơi chốn, thời gian, ngày tháng, động từ cơ bản và tính từ.',
    weeks: [3, 4, 5],
    color: 'bg-amber-50 text-amber-700 border-amber-200',
  },
  {
    id: 3,
    phaseNumber: 3,
    title: 'Giai đoạn 3: Động từ & Thể Te (Bài 9 - 16)',
    description: 'Sở thích, năng lực, lượng từ số đếm, chia động từ 3 nhóm, thể Te (てください, ています), xin phép, cấm đoán và nối câu.',
    weeks: [6, 7, 8],
    color: 'bg-emerald-50 text-emerald-700 border-emerald-200',
  },
  {
    id: 4,
    phaseNumber: 4,
    title: 'Giai đoạn 4: Thể Nai, Thể Ta & Thể Thông Thường (Bài 17 - 25)',
    description: 'Thể Nai (không được làm, phải làm), thể Ta (đã từng làm, liệt kê hành động), thể ngắn (thể thông thường trong hội thoại thân mật) và câu điều kiện.',
    weeks: [9, 10],
    color: 'bg-sky-50 text-sky-700 border-sky-200',
  },
  {
    id: 5,
    phaseNumber: 5,
    title: 'Giai đoạn 5: Luyện đề & Tổng ôn thi JLPT N5',
    description: 'Luyện đề thi thử chuẩn cấu trúc N5 (Từ vựng/Chữ Hán, Ngữ pháp/Đọc hiểu, Nghe hiểu) có bấm giờ, phân tích lỗi sai và củng cố kiến thức.',
    weeks: [11, 12],
    color: 'bg-purple-50 text-purple-700 border-purple-200',
  },
];

