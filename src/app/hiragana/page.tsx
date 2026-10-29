'use client';

import React, { useState } from 'react';
import { Volume2, Sparkles, CheckCircle2, RotateCcw, Shuffle, BookOpen } from 'lucide-react';
import { HIRAGANA_DATA, KanaCharacter } from '@/data/kana';
import { speakJapanese } from '@/lib/utils';
import { recordActivityToday } from '@/lib/storage';

export default function HiraganaPage() {
  const [activeTab, setActiveTab] = useState<'basic' | 'dakuon' | 'handakuon'>('basic');
  const [mode, setMode] = useState<'grid' | 'quiz'>('grid');
  const [selectedChar, setSelectedChar] = useState<KanaCharacter | null>(null);

  // Quiz State
  const [quizIndex, setQuizIndex] = useState(0);
  const [quizScore, setQuizScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [quizCompleted, setQuizCompleted] = useState(false);

  const filteredChars = HIRAGANA_DATA.filter((k) => k.type === activeTab);

  const startQuiz = () => {
    setMode('quiz');
    setQuizIndex(0);
    setQuizScore(0);
    setSelectedAnswer(null);
    setQuizCompleted(false);
  };

  const currentQuizChar = HIRAGANA_DATA[quizIndex % HIRAGANA_DATA.length];

  // Generate 4 options for quiz
  const generateOptions = (correct: KanaCharacter) => {
    const wrong = HIRAGANA_DATA.filter((k) => k.romaji !== correct.romaji)
      .sort(() => 0.5 - Math.random())
      .slice(0, 3)
      .map((k) => k.romaji);
    return [correct.romaji, ...wrong].sort(() => 0.5 - Math.random());
  };

  const [currentOptions, setCurrentOptions] = useState<string[]>(() =>
    generateOptions(HIRAGANA_DATA[0])
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
        setCurrentOptions(generateOptions(HIRAGANA_DATA[nextIdx % HIRAGANA_DATA.length]));
      }
    }, 1200);
  };

  return (
    <div className="space-y-8 max-w-5xl pb-16">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Bảng chữ cái mềm
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Bảng Chữ Cái Hiragana (ひらがな)
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Bảng chữ cái cơ bản nhất trong tiếng Nhật gồm 46 chữ cái thuần, âm đục (Dakuon) và âm bán đục (Handakuon).
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
          {/* Tabs Filter */}
          <div className="flex items-center gap-2 border-b border-stone-200 pb-3">
            <button
              onClick={() => setActiveTab('basic')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'basic'
                  ? 'bg-[#D93829] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              46 Chữ cơ bản (A, Ka, Sa...)
            </button>
            <button
              onClick={() => setActiveTab('dakuon')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'dakuon'
                  ? 'bg-[#D93829] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              Âm đục (Ga, Za, Da, Ba)
            </button>
            <button
              onClick={() => setActiveTab('handakuon')}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-colors ${
                activeTab === 'handakuon'
                  ? 'bg-[#D93829] text-white'
                  : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
              }`}
            >
              Âm bán đục (Pa, Pi, Pu...)
            </button>
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

          {/* Detail Modal / Panel if selected */}
          {selectedChar && (
            <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#D93829] font-jp font-bold text-4xl flex items-center justify-center border border-rose-100">
                    {selectedChar.char}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-stone-900">
                      Phiên âm: /{selectedChar.romaji}/
                    </h3>
                    {selectedChar.mnemonic && (
                      <p className="text-xs text-stone-500">
                        💡 Mẹo nhớ: {selectedChar.mnemonic}
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
                    Từ vựng ví dụ:
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
                <p className="text-xs text-stone-500">Chữ cái này đọc là gì?</p>
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
              <h3 className="text-xl font-bold text-stone-900">Hoàn thành bài kiểm tra!</h3>
              <p className="text-sm text-stone-600">
                Bạn đạt được <span className="font-bold text-[#D93829] text-lg">{quizScore} / 10</span> câu đúng!
              </p>
              <div className="flex items-center justify-center gap-3 pt-4">
                <button
                  onClick={startQuiz}
                  className="px-5 py-2.5 rounded-xl bg-[#D93829] text-white font-semibold text-xs transition-colors flex items-center gap-1.5"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>Làm lại bài khác</span>
                </button>
                <button
                  onClick={() => setMode('grid')}
                  className="px-5 py-2.5 rounded-xl bg-stone-100 text-stone-700 font-semibold text-xs hover:bg-stone-200 transition-colors"
                >
                  Xem bảng tra cứu
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

