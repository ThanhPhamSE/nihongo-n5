'use client';

import React, { useState } from 'react';
import {
  CheckSquare,
  Sparkles,
  RotateCcw,
  CheckCircle2,
  AlertCircle,
  Award,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { saveQuizAttempt } from '@/lib/storage';

interface QuizItem {
  id: string;
  category: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

const PRACTICE_QUESTIONS: QuizItem[] = [
  {
    id: 'p-1',
    category: 'Kana',
    question: 'Chữ Hiragana "ち" có phiên âm romaji là gì?',
    options: ['shi', 'chi', 'tsu', 'ta'],
    correctIndex: 1,
    explanation: 'ち đọc là "chi", nằm trong hàng Ta (ta, chi, tsu, te, to).',
  },
  {
    id: 'p-2',
    category: 'Kana',
    question: 'Chữ Katakana "ツ" có phiên âm romaji là gì?',
    options: ['shi', 'tsu', 'so', 'n'],
    correctIndex: 1,
    explanation: 'ツ có nét phẩy dọc từ trên xuống đọc là "tsu". Khác với シ (shi) phẩy ngang.',
  },
  {
    id: 'p-3',
    category: 'Ngữ pháp',
    question: 'Chọn trợ từ thích hợp: わたし ( ... ) ベトナム人 です。',
    options: ['は', 'が', 'を', 'に'],
    correctIndex: 0,
    explanation: 'Chủ ngữ đóng vai trò chủ đề trong câu khẳng định sơ cấp đi với trợ từ は (đọc là wa).',
  },
  {
    id: 'p-4',
    category: 'Ngữ pháp',
    question: 'Điền trợ từ: バス ( ... ) 会社 へ 行きます。',
    options: ['へ', 'で', 'に', 'を'],
    correctIndex: 1,
    explanation: 'Phương tiện giao thông đi kèm với trợ từ で.',
  },
  {
    id: 'p-5',
    category: 'Ngữ pháp',
    question: 'Mẫu câu cấm đoán quy định "Không được hút thuốc ở đây" là:',
    options: [
      'ここで たばこを すってもいいです。',
      'ここで たばこを すってはいけません。',
      'ここで たばこを すってください。',
      'ここで たばこを すいます。',
    ],
    correctIndex: 1,
    explanation: '〜てはいけません là mẫu câu cấm đoán theo luật lệ hoặc nội quy.',
  },
  {
    id: 'p-6',
    category: 'Kanji',
    question: 'Chữ Hán 【水】 có âm Hán Việt và nghĩa là gì?',
    options: ['HỎA - Lửa', 'MỘC - Cây', 'THỦY - Nước', 'KIM - Tiền vàng'],
    correctIndex: 2,
    explanation: 'Chữ 【水】 là chữ THỦY, nghĩa là nước (みず).',
  },
  {
    id: 'p-7',
    category: 'Kanji',
    question: 'Chữ 【山】 trong "富士山" đọc là gì?',
    options: ['かわ', 'やま / さん', 'た', 'ひと'],
    correctIndex: 1,
    explanation: 'Chữ 【山】 có Onyomi là サン, Kunyomi là やま (ngọn núi).',
  },
  {
    id: 'p-8',
    category: 'Từ vựng',
    question: 'Từ "美味しい" (おいしい) có nghĩa là gì?',
    options: ['Đắt đỏ', 'Ngon miệng', 'Đẹp đẽ', 'Thú vị'],
    correctIndex: 1,
    explanation: '美味しい (oishii) nghĩa là ngon miệng.',
  },
  {
    id: 'p-9',
    category: 'Từ vựng',
    question: 'Thể quá khứ của động từ "たべます" (ăn) là gì?',
    options: ['たべません', 'たべました', 'たべた', 'たべる'],
    correctIndex: 1,
    explanation: 'Dạng quá khứ lịch sự là たべました (đã ăn).',
  },
  {
    id: 'p-10',
    category: 'Ngữ pháp',
    question: 'Động từ "いきます" (đi) khi chia sang thể Te là gì?',
    options: ['いいて', 'いって', 'いきて', 'いで'],
    correctIndex: 1,
    explanation: 'Ngoại lệ đặc biệt nhóm 1: いきます -> いって.',
  },
];

export default function PracticePage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const categories = ['all', 'Kana', 'Ngữ pháp', 'Kanji', 'Từ vựng'];

  const filteredQuestions = PRACTICE_QUESTIONS.filter((q) => {
    if (selectedCategory === 'all') return true;
    return q.category === selectedCategory;
  });

  const currentQ = filteredQuestions[currentIdx];

  const handleSelectAnswer = (optIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentIdx]: optIdx,
    }));
  };

  const handleFinish = () => {
    let correctCount = 0;
    const userAnswers = filteredQuestions.map((q, idx) => {
      const isCor = selectedAnswers[idx] === q.correctIndex;
      if (isCor) correctCount++;
      return {
        questionId: q.id,
        selectedIndex: selectedAnswers[idx] ?? -1,
        isCorrect: isCor,
      };
    });

    setScore(correctCount);
    setSubmitted(true);

    const percent = Math.round((correctCount / filteredQuestions.length) * 100);
    saveQuizAttempt({
      quizId: `practice_${selectedCategory}`,
      quizTitle: `Luyện tập trắc nghiệm: ${selectedCategory === 'all' ? 'Tổng hợp' : selectedCategory}`,
      category: selectedCategory,
      score: correctCount,
      totalQuestions: filteredQuestions.length,
      percentage: percent,
      userAnswers,
    });

    if (percent >= 80) {
      try {
        confetti({ particleCount: 80, spread: 60, origin: { y: 0.6 } });
      } catch {}
    }
  };

  const handleReset = () => {
    setSelectedAnswers({});
    setSubmitted(false);
    setCurrentIdx(0);
    setScore(0);
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
          <CheckSquare className="w-3.5 h-3.5" />
          Bài tập &amp; Quizzes
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Luyện Tập Trắc Nghiệm N5
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Ôn tập nhanh chữ cái, từ vựng, ngữ pháp và Kanji với hệ thống chấm điểm tức thì.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              handleReset();
            }}
            className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-colors ${
              selectedCategory === cat
                ? 'bg-stone-900 text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-600 hover:bg-stone-50'
            }`}
          >
            {cat === 'all' ? 'Tất cả chủ đề' : cat}
          </button>
        ))}
      </div>

      {/* Main Quiz Container */}
      {!submitted ? (
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span className="font-bold text-[#D93829] uppercase tracking-wider">
              {currentQ.category}
            </span>
            <span>
              Câu {currentIdx + 1} / {filteredQuestions.length}
            </span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D93829] h-full transition-all"
              style={{
                width: `${((currentIdx + 1) / filteredQuestions.length) * 100}%`,
              }}
            />
          </div>

          {/* Question Text */}
          <div className="py-4">
            <h2 className="text-lg md:text-xl font-bold text-stone-900 leading-snug">
              {currentQ.question}
            </h2>
          </div>

          {/* Options */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {currentQ.options.map((opt, optIdx) => {
              const isSelected = selectedAnswers[currentIdx] === optIdx;
              return (
                <button
                  key={optIdx}
                  onClick={() => handleSelectAnswer(optIdx)}
                  className={`p-4 rounded-2xl border text-xs text-left font-medium transition-all ${
                    isSelected
                      ? 'border-[#D93829] bg-rose-50 text-[#D93829] font-bold shadow-xs'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-800'
                  }`}
                >
                  <span className="font-mono mr-2">{String.fromCharCode(65 + optIdx)}.</span>
                  {opt}
                </button>
              );
            })}
          </div>

          {/* Pagination Controls */}
          <div className="flex items-center justify-between pt-4 border-t border-stone-100">
            <button
              onClick={() => setCurrentIdx((p) => Math.max(0, p - 1))}
              disabled={currentIdx === 0}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold disabled:opacity-40"
            >
              Câu trước
            </button>

            {currentIdx < filteredQuestions.length - 1 ? (
              <button
                onClick={() => setCurrentIdx((p) => p + 1)}
                className="px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-[#D93829] text-white text-xs font-semibold shadow-xs"
              >
                Câu tiếp theo
              </button>
            ) : (
              <button
                onClick={handleFinish}
                disabled={Object.keys(selectedAnswers).length < filteredQuestions.length}
                className="px-6 py-2.5 rounded-xl bg-[#D93829] hover:bg-[#BC2D20] text-white text-xs font-semibold disabled:opacity-50 shadow-xs"
              >
                Hoàn thành &amp; Nộp bài
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8 text-center shadow-xs space-y-4">
            <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
            <h2 className="text-2xl font-extrabold text-stone-900">
              Kết Quả Luyện Tập
            </h2>
            <div className="text-4xl font-black text-[#D93829]">
              {score} / {filteredQuestions.length}
            </div>
            <p className="text-xs text-stone-500">
              Tỷ lệ chính xác: {Math.round((score / filteredQuestions.length) * 100)}%
            </p>
            <div className="pt-2">
              <button
                onClick={handleReset}
                className="px-6 py-2.5 rounded-xl bg-[#D93829] text-white text-xs font-bold shadow-xs flex items-center gap-2 mx-auto"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Làm lại bộ câu hỏi này</span>
              </button>
            </div>
          </div>

          {/* Review of all answers */}
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 space-y-6 shadow-xs">
            <h3 className="font-bold text-base text-stone-900">
              Chi tiết bài làm &amp; Giải thích từng câu:
            </h3>

            {filteredQuestions.map((q, qIdx) => {
              const userChoice = selectedAnswers[qIdx];
              const isCor = userChoice === q.correctIndex;
              return (
                <div key={q.id} className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs">
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-stone-900">
                      Câu {qIdx + 1}: {q.question}
                    </span>
                    <span
                      className={`px-2 py-0.5 rounded text-[11px] ${
                        isCor
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCor ? 'Đúng' : 'Sai'}
                    </span>
                  </div>

                  <div className="text-stone-600">
                    <div>
                      Đáp án của bạn:{' '}
                      <span className={isCor ? 'font-bold text-emerald-700' : 'line-through text-rose-700'}>
                        {userChoice !== undefined ? q.options[userChoice] : 'Chưa chọn'}
                      </span>
                    </div>
                    {!isCor && (
                      <div className="font-semibold text-emerald-700 mt-0.5">
                        Đáp án đúng: {q.options[q.correctIndex]}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-200 text-stone-500">
                    <strong className="text-stone-700">Giải thích: </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

