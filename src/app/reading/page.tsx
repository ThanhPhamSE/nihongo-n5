'use client';

import React, { useState } from 'react';
import {
  Newspaper,
  BookOpen,
  Volume2,
  CheckCircle2,
  Eye,
  EyeOff,
  RotateCcw,
} from 'lucide-react';
import { READING_PASSAGES, ReadingPassage } from '@/data/reading';
import { speakJapanese } from '@/lib/utils';
import { recordActivityToday } from '@/lib/storage';

export default function ReadingPage() {
  const [selectedPassage, setSelectedPassage] = useState<ReadingPassage>(READING_PASSAGES[0]);
  const [showFurigana, setShowFurigana] = useState(false);
  const [showTranslation, setShowTranslation] = useState(false);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSelectAnswer = (qIdx: number, optIdx: number) => {
    if (submitted) return;
    setSelectedAnswers((prev) => ({ ...prev, [qIdx]: optIdx }));
  };

  const handleSubmit = () => {
    setSubmitted(true);
    setShowTranslation(true);
    recordActivityToday(7, undefined, true);
  };

  const handleReset = (passage: ReadingPassage) => {
    setSelectedPassage(passage);
    setSelectedAnswers({});
    setSubmitted(false);
    setShowTranslation(false);
  };

  return (
    <div className="space-y-8 max-w-5xl pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
          <Newspaper className="w-3.5 h-3.5" />
          Kỹ năng Đọc hiểu (Dokkai)
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Luyện Đọc Hiểu Tiếng Nhật N5
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Các đoạn văn ngắn, thông báo, nhật ký chuẩn cấu trúc đề thi JLPT N5 kèm từ vựng bổ trợ và giải thích đáp án.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Passage selection */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E8E2D5] p-5 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-stone-900">Danh sách bài đọc</h3>
          <div className="space-y-2">
            {READING_PASSAGES.map((pass) => {
              const isSelected = selectedPassage.id === pass.id;
              return (
                <div
                  key={pass.id}
                  onClick={() => handleReset(pass)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-blue-50 border-blue-400 shadow-xs'
                      : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-100/60 px-2 py-0.5 rounded">
                      {pass.level}
                    </span>
                    <BookOpen className="w-3.5 h-3.5 text-stone-500" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                    {pass.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-1">
                    {pass.passageVi}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Passage Text & Questions */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-center justify-between gap-4">
            <div>
              <span className="text-xs font-bold text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-100">
                {selectedPassage.level}
              </span>
              <h2 className="text-xl font-bold text-stone-900 mt-2">
                {selectedPassage.title}
              </h2>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => speakJapanese(selectedPassage.passageJa)}
                className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-[#D93829] hover:bg-rose-50 transition-colors"
                title="Nghe đọc bài"
              >
                <Volume2 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setShowFurigana(!showFurigana)}
                className="px-3 py-1.5 rounded-xl border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50"
              >
                {showFurigana ? 'Xem Kanji' : 'Xem Kana'}
              </button>
            </div>
          </div>

          {/* Reading Passage Content Box */}
          <div className="bg-stone-50 p-6 rounded-3xl border border-stone-200/80 space-y-3">
            <p className="font-jp text-stone-900 text-sm md:text-base leading-loose whitespace-pre-line font-medium">
              {showFurigana ? selectedPassage.passageKana : selectedPassage.passageJa}
            </p>
          </div>

          {/* Vocab Hints Box */}
          {selectedPassage.vocabHints.length > 0 && (
            <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-200/80 space-y-2 text-xs">
              <span className="font-bold text-amber-900">💡 Gợi ý từ mới trong bài:</span>
              <div className="flex flex-wrap gap-2 pt-1">
                {selectedPassage.vocabHints.map((vh, i) => (
                  <span
                    key={i}
                    className="bg-white px-2.5 py-1 rounded-lg border border-amber-200 text-stone-800"
                  >
                    <strong>{vh.word}</strong> ({vh.reading}): {vh.meaning}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* Translation Box if toggled */}
          {showTranslation && (
            <div className="p-5 rounded-2xl bg-stone-100 border border-stone-200 text-xs space-y-1">
              <span className="font-bold text-stone-800">Bản dịch tiếng Việt tham khảo:</span>
              <p className="text-stone-700 leading-relaxed whitespace-pre-line mt-1">
                {selectedPassage.passageVi}
              </p>
            </div>
          )}

          {/* Questions */}
          <div className="space-y-6 pt-4 border-t border-stone-100">
            <h3 className="font-bold text-sm text-stone-900 uppercase tracking-wide">
              Câu hỏi đọc hiểu ({selectedPassage.questions.length} câu)
            </h3>

            {selectedPassage.questions.map((q, qIdx) => {
              const userChoice = selectedAnswers[qIdx];
              return (
                <div key={qIdx} className="space-y-3 pb-5 border-b border-stone-100 last:border-b-0">
                  <div className="font-semibold text-sm text-stone-900">
                    <span className="font-bold text-[#D93829] mr-2">Câu {qIdx + 1}:</span>
                    {q.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = userChoice === oIdx;
                      let btnStyle = 'border-stone-200 hover:bg-stone-50 text-stone-800';

                      if (submitted) {
                        if (oIdx === q.correctIndex) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                        } else if (isChosen && oIdx !== q.correctIndex) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                        }
                      } else if (isChosen) {
                        btnStyle = 'border-[#D93829] bg-rose-50 text-[#D93829] font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={submitted}
                          onClick={() => handleSelectAnswer(qIdx, oIdx)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {submitted && (
                    <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200 text-xs text-stone-600">
                      <span className="font-bold text-stone-800">Giải thích: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex items-center justify-between pt-2">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={
                    Object.keys(selectedAnswers).length <
                    selectedPassage.questions.length
                  }
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-[#D93829] text-white font-semibold text-xs transition-colors disabled:opacity-50"
                >
                  Nộp câu trả lời
                </button>
              ) : (
                <button
                  onClick={() => handleReset(selectedPassage)}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors"
                >
                  Làm lại bài này
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

