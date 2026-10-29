'use client';

import React, { useState } from 'react';
import { Volume2, Languages, CheckCircle2, RotateCcw, Sparkles } from 'lucide-react';
import { KATAKANA_DATA, KanaCharacter } from '@/data/kana';
import { speakJapanese } from '@/lib/utils';
import { recordActivityToday } from '@/lib/storage';

export default function KatakanaPage() {
  const [activeTab, setActiveTab] = useState<'basic' | 'dakuon' | 'handakuon'>('basic');
  const [mode, setMode] = useState<'grid' | 'quiz'>('grid');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredChars = KATAKANA_DATA.filter((k) => k.type === activeTab);

  const startQuiz = () => {
    setMode('quiz');
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  const currentQuizChar = KATAKANA_DATA[quizIndex % KATAKANA_DATA.length];

  const generateOptions = (correct: KanaCharacter) => {
    const wrong = KATAKANA_DATA.filter((k) => k.romaji !== correct.romaji)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((k) => k.romaji);
    return [correct.romaji, ...wrong].sort(() => 0.5 - Math.random());
  };

  const [currentOptions, setCurrentOptions] = useState<string[]>(() =>
    generateOptions(KATAKANA_DATA[0])
  );

  const handleAnswer = (option: string) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);
    const isCorrect = option === currentQuizChar.romaji;
    if (isCorrect) {
      setQuizScore((prev) => prev + 1);
    }
    recordActivityToday(1);

    setTimeout(() => {
      if (quizIndex + 1 >= 10) {
        setQuizCompleted(true);
      } else {
        const nextIdx = quizIndex + 1;
        setQuizIndex(nextIdx);
        setSelectedAnswer(null);
        setCurrentOptions(generateOptions(KATAKANA_DATA[nextIdx % KATAKANA_DATA.length]));
      }
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-5xl pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
            <Languages className="w-3.5 h-3.5" />
            Bảng chữ cái cứng
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Bảng Chữ Cái Katakana (カタカナ)
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Bảng chữ cái nét thẳng dùng để viết từ mượn tiếng nước ngoài, tên riêng quốc tế và thuật ngữ hiện đại.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setMode('grid')}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              mode === 'grid'
                ? 'bg-stone-900 text-white'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            Bảng tra cứu
          </button>
          <button
            onClick={startQuiz}
            className={`px-4 py-2 rounded-xl text-xs font-semibold transition-colors ${
              mode === 'quiz'
                ? 'bg-[#D93829] text-white shadow-xs'
                : 'bg-white border border-stone-200 text-stone-700 hover:bg-stone-50'
            }`}
          >
            Luyện trắc nghiệm
          </button>
        </div>
      </div>

      {mode === 'grid' ? (
        <>
          {/* Confusing pairs highlight note */}
          <div className="p-4 rounded-2xl bg-amber-50/80 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
            <span className="font-bold text-base">⚠️</span>
            <div>
              <span className="font-bold">Lưu ý các cặp chữ dễ nhầm lẫn trong Katakana:</span>
              <p className="mt-0.5 text-stone-700">
                • <strong>シ (shi)</strong> (nét phẩy từ dưới lên) vs <strong>ツ (tsu)</strong> (nét phẩy từ trên xuống)
                <br />
                • <strong>ソ (so)</strong> (nét phẩy đứng từ trên) vs <strong>ン (n)</strong> (nét phẩy nằm từ dưới lên)
              </p>
            </div>
          </div>

          {/* Grid Cards */}
          <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {filteredChars.map((item) => (
              <div
                key={item.char}
                onClick={() => {
                  setSelectedChar(item);
                  speakJapanese(item.char);
                }}
                className="bg-white rounded-2xl border border-[#E8E2D5] p-3.5 flex flex-col items-center justify-center hover:border-[#D93829] hover:shadow-md cursor-pointer transition-all group"
              >
                <span className="text-3xl font-extrabold font-jp text-stone-900 group-hover:text-[#D93829] transition-colors">
                  {item.char}
                </span>
                <span className="text-xs font-mono font-medium text-stone-500 mt-1">
                  {item.romaji}
                </span>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakJapanese(item.char);
                  }}
                  className="mt-2 text-stone-500 hover:text-[#D93829]"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>
            ))}
          </div>

          {/* Detail Modal / Panel */}
          {selectedChar && (
            <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-amber-50 text-amber-800 font-jp font-bold text-4xl flex items-center justify-center border border-amber-200">
                    {selectedChar.char}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">
                      Phiên âm: /{selectedChar.romaji}/
                    </h3>
                    {selectedChar.mnemonic && (
                      <p className="text-xs text-stone-500">
                        💡 Phân biệt: {selectedChar.mnemonic}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  onClick={() => speakJapanese(selectedChar.char)}
                  className="px-4 py-2 rounded-xl bg-[#D93829] text-white text-xs font-semibold flex items-center gap-1.5 shadow-xs"
                >
                  <Volume2 className="w-4 h-4" />
                  <span>Phát âm</span>
                </button>
              </div>

              {selectedChar.examples && selectedChar.examples.length > 0 && (
                <div className="pt-3 border-t border-stone-100 space-y-2">
                  <span className="text-xs font-bold text-stone-700 uppercase">
                    Từ mượn ví dụ:
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedChar.examples.map((ex, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs"
                      >
                        <div>
                          <span className="font-bold font-jp text-stone-900 text-sm">
                            {ex.word}
                          </span>{' '}
                          <span className="text-stone-500">({ex.reading})</span>
                          <div className="text-stone-600 font-medium">{ex.meaning}</div>
                        </div>
                        <button
                          onClick={() => speakJapanese(ex.word)}
                          className="p-1 text-stone-500 hover:text-[#D93829]"
                        >
                          <Volume2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          )}
        </>
      ) : (
        /* Quiz Mode */
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8 max-w-xl mx-auto shadow-sm text-center space-y-6">
          {!quizCompleted ? (
            <>
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>Câu {quizIndex + 1} / 10</span>
                <span>Điểm: {quizScore}</span>
              </div>

              <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-[#D93829] h-full transition-all"
                  style={{ width: `${((quizIndex + 1) / 10) * 100}%` }}
                />
              </div>

              <div className="py-8 space-y-3">
                <div className="text-7xl font-extrabold font-jp text-stone-900">
                  {currentQuizChar.char}
                </div>
                <p className="text-xs text-stone-500">Chữ Katakana này đọc là gì?</p>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {currentOptions.map((opt) => {
                  let btnColor = 'border-stone-200 hover:bg-stone-50 text-stone-800';
                  if (selectedAnswer) {
                    if (opt === currentQuizChar.romaji) {
                      btnColor = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                    } else if (opt === selectedAnswer) {
                      btnColor = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                    }
                  }

                  return (
                    <button
                      key={opt}
                      disabled={!!selectedAnswer}
                      onClick={() => handleAnswer(opt)}
                      className={`p-4 rounded-2xl border text-base font-bold font-mono transition-all ${btnColor}`}
                    >
                      {opt}
                    </button>
                  );
                })}
              </div>
            </>
          ) : (
            <div className="py-6 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-500 mx-auto" />
              <h3 className="text-xl font-bold text-stone-900">Hoàn thành bài kiểm tra Katakana!</h3>
              <p className="text-sm text-stone-600">
                Bạn đạt được <span className="font-bold text-[#D93829] text-lg">{quizScore} / 10</span> câu đúng!
              </p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={startQuiz}
                  className="px-5 py-2.5 rounded-xl bg-[#D93829] text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Luyện tập lại</span>
                </button>
                <button
                  onClick={() => setMode('grid')}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs hover:bg-stone-200 transition-colors"
                >
                  Xem bảng Katakana
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

