'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  RefreshCw,
  Volume2,
  CheckCircle2,
  RotateCw,
  Sparkles,
  ArrowRight,
  Smile,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { VOCABULARY_LIST } from '@/data/vocabulary';
import { getVocabReviews, recordVocabReview } from '@/lib/storage';
import { speakJapanese } from '@/lib/utils';
import { VocabularyItem } from '@/types';

export default function ReviewPage() {
  const [mounted, setMounted] = useState(false);
  const [dueVocab, setDueVocab] = useState<VocabularyItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setMounted(true);
    loadDueVocab();
  }, []);

  const loadDueVocab = () => {
    const reviews = getVocabReviews();
    const now = new Date();

    // Find words due for review or not yet learned
    const due = VOCABULARY_LIST.filter((v) => {
      const r = reviews[v.id];
      if (!r) return true; // New words
      return new Date(r.nextReviewDate) <= now;
    });

    setDueVocab(due);
    setCurrentIndex(0);
    setIsFlipped(false);
    setCompleted(false);
  };

  const currentWord: VocabularyItem | undefined = dueVocab[currentIndex];

  const handleGrade = (grade: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentWord) return;
    recordVocabReview(currentWord.id, grade);
    setIsFlipped(false);

    if (currentIndex + 1 >= dueVocab.length) {
      setCompleted(true);
      try {
        confetti({ particleCount: 90, spread: 70, origin: { y: 0.6 } });
      } catch {}
    } else {
      setCurrentIndex((p) => p + 1);
    }
  };

  if (!mounted) {
    return <div className="p-8 max-w-2xl mx-auto animate-pulse h-96 bg-stone-200/60 rounded-3xl" />;
  }

  return (
    <div className="space-y-8 max-w-2xl mx-auto pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
          <RefreshCw className="w-3.5 h-3.5" />
          Hàng chờ ôn tập (SRS Queue)
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Ôn Tập Ngắt Quãng Hôm Nay
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Thuật toán Spaced Repetition tự động tính toán thời điểm vàng để ôn lại từ vựng trước khi bạn kịp quên.
        </p>
      </div>

      {dueVocab.length === 0 || completed ? (
        /* Empty / Completed State */
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-10 text-center shadow-xs space-y-5">
          <div className="w-16 h-16 rounded-3xl bg-emerald-50 text-emerald-600 flex items-center justify-center mx-auto border border-emerald-200">
            <CheckCircle2 className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-stone-900">
              Tuyệt vời! Không còn từ nào cần ôn hôm nay
            </h2>
            <p className="text-xs text-stone-600 max-w-md mx-auto leading-relaxed">
              Bạn đã hoàn thành toàn bộ hàng chờ ôn tập của ngày hôm nay. Hãy tiếp tục học bài mới trong lộ trình hoặc luyện tập thêm!
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/vocabulary"
              className="px-5 py-2.5 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 transition-colors"
            >
              Xem toàn bộ từ vựng N5
            </Link>
            <Link
              href="/lessons"
              className="px-5 py-2.5 rounded-xl bg-[#D93829] text-white text-xs font-semibold hover:bg-[#BC2D20] transition-colors"
            >
              Học bài tiếp theo →
            </Link>
          </div>
        </div>
      ) : (
        /* Ongoing Flashcard Review */
        <div className="space-y-5">
          <div className="flex items-center justify-between text-xs text-stone-500">
            <span>
              Từ cần ôn: {currentIndex + 1} / {dueVocab.length}
            </span>
            <span className="font-semibold text-stone-700">Chủ đề: {currentWord.topic}</span>
          </div>

          <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D93829] h-full transition-all"
              style={{ width: `${((currentIndex + 1) / dueVocab.length) * 100}%` }}
            />
          </div>

          {/* Flashcard Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[300px] bg-white rounded-3xl border-2 border-[#E8E2D5] hover:border-[#D93829] cursor-pointer shadow-md transition-all p-8 flex flex-col justify-between select-none relative"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider bg-stone-100 px-2.5 py-0.5 rounded-md">
                {currentWord.wordType}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  speakJapanese(currentWord.reading || currentWord.word);
                }}
                className="p-2 rounded-xl bg-stone-100 hover:bg-rose-50 text-stone-600 hover:text-[#D93829]"
              >
                <Volume2 className="w-5 h-5" />
              </button>
            </div>

            {!isFlipped ? (
              <div className="py-6 text-center space-y-2">
                <div className="text-5xl font-black font-jp text-stone-900">
                  {currentWord.word}
                </div>
                <div className="text-base font-mono text-stone-500">
                  {currentWord.reading}
                </div>
                <div className="pt-4 text-xs font-semibold text-[#D93829] flex items-center justify-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Nhấp để lật xem đáp án</span>
                </div>
              </div>
            ) : (
              <div className="py-4 text-center space-y-3">
                <div className="text-2xl font-bold text-[#D93829]">
                  {currentWord.meaning}
                </div>
                {currentWord.exampleSentence && (
                  <div className="bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80 text-left text-xs space-y-1">
                    <div className="font-jp font-semibold text-stone-900">
                      {currentWord.exampleSentence}
                    </div>
                    <div className="text-stone-600 font-medium">
                      {currentWord.exampleMeaning}
                    </div>
                  </div>
                )}
              </div>
            )}

            <div className="text-[11px] text-stone-500 text-center border-t border-stone-100 pt-3">
              {isFlipped ? 'Đánh giá độ nhớ của bạn bên dưới' : 'Bạn có nhớ từ này không?'}
            </div>
          </div>

          {/* Review grading buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-2">
            <button
              onClick={() => handleGrade('again')}
              className="py-3 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold"
            >
              <div>Quên rồi</div>
              <div className="text-[10px] font-normal text-rose-600">Học lại ngay</div>
            </button>
            <button
              onClick={() => handleGrade('hard')}
              className="py-3 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold"
            >
              <div>Khó nhớ</div>
              <div className="text-[10px] font-normal text-amber-600">Ôn sau 1 ngày</div>
            </button>
            <button
              onClick={() => handleGrade('good')}
              className="py-3 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold"
            >
              <div>Nhớ được</div>
              <div className="text-[10px] font-normal text-blue-600">Ôn sau 3 ngày</div>
            </button>
            <button
              onClick={() => handleGrade('easy')}
              className="py-3 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold"
            >
              <div>Đã thuộc</div>
              <div className="text-[10px] font-normal text-emerald-600">Ôn sau 7 ngày</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

