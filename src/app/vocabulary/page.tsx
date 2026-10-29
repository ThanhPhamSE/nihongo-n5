'use client';

import React, { useState, useEffect } from 'react';
import {
  Layers,
  Volume2,
  Bookmark,
  Search,
  Shuffle,
  ChevronLeft,
  ChevronRight,
  RotateCw,
  Check,
  Eye,
  EyeOff,
  Sparkles,
} from 'lucide-react';
import { VOCABULARY_LIST } from '@/data/vocabulary';
import { speakJapanese } from '@/lib/utils';
import {
  getVocabReviews,
  recordVocabReview,
  isBookmarked,
  toggleBookmark,
} from '@/lib/storage';
import { VocabularyItem } from '@/types';

export default function VocabularyPage() {
  const [mounted, setMounted] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showRomaji, setShowRomaji] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTopic, setSelectedTopic] = useState('all');
  const [vocabReviews, setVocabReviews] = useState<Record<string, any>>({});
  const [bookmarkedList, setBookmarkedList] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setMounted(true);
    setVocabReviews(getVocabReviews());
  }, []);

  const topics = ['all', ...Array.from(new Set(VOCABULARY_LIST.map((v) => v.topic)))];

  const filteredList = VOCABULARY_LIST.filter((v) => {
    if (selectedTopic !== 'all' && v.topic !== selectedTopic) return false;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return (
        v.word.toLowerCase().includes(q) ||
        v.reading.toLowerCase().includes(q) ||
        v.meaning.toLowerCase().includes(q)
      );
    }
    return true;
  });

  const currentVocab: VocabularyItem | undefined = filteredList[currentIndex];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredList.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredList.length) % filteredList.length);
  };

  const handleReview = (result: 'again' | 'hard' | 'good' | 'easy') => {
    if (!currentVocab) return;
    recordVocabReview(currentVocab.id, result);
    setVocabReviews(getVocabReviews());
    handleNext();
  };

  const handleToggleFav = (v: VocabularyItem) => {
    const res = toggleBookmark({
      type: 'vocabulary',
      itemId: v.id,
      title: v.word,
      subtitle: `${v.reading} - ${v.meaning}`,
      route: '/vocabulary',
    });
    setBookmarkedList((prev) => ({ ...prev, [v.id]: res }));
  };

  if (!mounted) {
    return <div className="p-8 max-w-4xl mx-auto animate-pulse h-96 bg-stone-200/60 rounded-3xl" />;
  }

  const reviewStatus = currentVocab ? vocabReviews[currentVocab.id]?.status : null;

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-bold mb-2">
            <Layers className="w-3.5 h-3.5" />
            Flashcard N5
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Từ Vựng &amp; Flashcard Thông Minh
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Ứng dụng thuật toán lặp lại ngắt quãng (Spaced Repetition) để ghi nhớ từ vựng sâu vào trí nhớ dài hạn.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setShowRomaji(!showRomaji)}
            className="px-3.5 py-2 rounded-xl bg-white border border-stone-200 text-xs font-medium text-stone-700 hover:bg-stone-50 flex items-center gap-1.5 shadow-xs"
          >
            {showRomaji ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showRomaji ? 'Ẩn Romaji' : 'Hiện Romaji'}</span>
          </button>
        </div>
      </div>

      {/* Filter and Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#E8E2D5] shadow-xs flex flex-col sm:flex-row items-center gap-3">
        <div className="relative flex-1 w-full">
          <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm kiếm từ vựng tiếng Nhật, Hiragana hoặc tiếng Việt..."
            value={searchQuery}
            onChange={(e) => {
              setSearchQuery(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829]"
          />
        </div>

        <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <select
            value={selectedTopic}
            onChange={(e) => {
              setSelectedTopic(e.target.value);
              setCurrentIndex(0);
              setIsFlipped(false);
            }}
            className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-medium text-stone-700 focus:outline-none focus:border-[#D93829]"
          >
            {topics.map((t) => (
              <option key={t} value={t}>
                {t === 'all' ? 'Tất cả chủ đề' : `Chủ đề: ${t}`}
              </option>
            ))}
          </select>
        </div>
      </div>

      {filteredList.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-3xl border border-[#E8E2D5] text-stone-500 text-sm">
          Không tìm thấy từ vựng nào khớp với bộ lọc.
        </div>
      ) : (
        /* Flashcard Area */
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-stone-500 px-2">
            <span>
              Thẻ {currentIndex + 1} / {filteredList.length}
            </span>
            <div className="flex items-center gap-2">
              {reviewStatus && (
                <span
                  className={`px-2 py-0.5 rounded text-[11px] font-semibold ${
                    reviewStatus === 'mastered'
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'bg-amber-50 text-amber-700'
                  }`}
                >
                  {reviewStatus === 'mastered' ? 'Đã thuộc' : 'Đang học'}
                </span>
              )}
              <span className="text-stone-500">Chủ đề: {currentVocab.topic}</span>
            </div>
          </div>

          {/* Interactive Flip Card */}
          <div
            onClick={() => setIsFlipped(!isFlipped)}
            className="min-h-[320px] bg-white rounded-3xl border-2 border-[#E8E2D5] hover:border-[#D93829] cursor-pointer shadow-md transition-all p-8 flex flex-col justify-between select-none relative group"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-stone-500 uppercase tracking-wider bg-stone-100 px-2.5 py-1 rounded-lg">
                {currentVocab.wordType}
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    speakJapanese(currentVocab.reading || currentVocab.word);
                  }}
                  className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-[#D93829] hover:bg-rose-50 transition-colors"
                  title="Nghe phát âm"
                >
                  <Volume2 className="w-5 h-5" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    handleToggleFav(currentVocab);
                  }}
                  className="p-2 rounded-xl bg-stone-100 text-stone-700 hover:text-amber-500 hover:bg-amber-50 transition-colors"
                >
                  <Bookmark
                    className={`w-5 h-5 ${
                      bookmarkedList[currentVocab.id] || isBookmarked(currentVocab.id)
                        ? 'fill-amber-500 text-amber-500'
                        : ''
                    }`}
                  />
                </button>
              </div>
            </div>

            {/* Front vs Back Content */}
            {!isFlipped ? (
              <div className="py-8 text-center space-y-3">
                <div className="text-5xl font-black font-jp text-stone-900 tracking-wide">
                  {currentVocab.word}
                </div>
                <div className="text-lg font-mono text-stone-500">{currentVocab.reading}</div>
                {showRomaji && currentVocab.romaji && (
                  <div className="text-xs font-mono text-stone-500 italic">
                    /{currentVocab.romaji}/
                  </div>
                )}
                <div className="pt-4 text-xs font-semibold text-[#D93829] flex items-center justify-center gap-1">
                  <RotateCw className="w-3.5 h-3.5" />
                  <span>Nhấp vào thẻ để lật xem nghĩa</span>
                </div>
              </div>
            ) : (
              <div className="py-6 text-center space-y-4">
                <div className="text-2xl font-bold text-[#D93829]">
                  {currentVocab.meaning}
                </div>

                {currentVocab.exampleSentence && (
                  <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 max-w-md mx-auto text-left space-y-1">
                    <div className="font-jp text-sm font-semibold text-stone-900">
                      {currentVocab.exampleSentence}
                    </div>
                    {showRomaji && currentVocab.exampleReading && (
                      <div className="text-xs font-mono text-stone-500">
                        {currentVocab.exampleReading}
                      </div>
                    )}
                    <div className="text-xs text-stone-600 font-medium pt-1">
                      {currentVocab.exampleMeaning}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Footer indicator */}
            <div className="flex items-center justify-between text-xs text-stone-500 border-t border-stone-100 pt-3">
              <span>JLPT {currentVocab.jlptLevel}</span>
              <span className="font-medium text-stone-500">
                {isFlipped ? 'Đang xem mặt sau' : 'Mặt trước (Tiếng Nhật)'}
              </span>
            </div>
          </div>

          {/* SRS Evaluation Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <button
              onClick={() => handleReview('again')}
              className="py-3 px-2 rounded-2xl bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold transition-all"
            >
              <div>Quên rồi</div>
              <div className="text-[10px] font-normal text-rose-600">Ôn lại ngay</div>
            </button>
            <button
              onClick={() => handleReview('hard')}
              className="py-3 px-2 rounded-2xl bg-amber-50 hover:bg-amber-100 text-amber-700 border border-amber-200 text-xs font-bold transition-all"
            >
              <div>Hơi khó nhớ</div>
              <div className="text-[10px] font-normal text-amber-600">Ôn sau 1 ngày</div>
            </button>
            <button
              onClick={() => handleReview('good')}
              className="py-3 px-2 rounded-2xl bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold transition-all"
            >
              <div>Nhớ được</div>
              <div className="text-[10px] font-normal text-blue-600">Ôn sau 3 ngày</div>
            </button>
            <button
              onClick={() => handleReview('easy')}
              className="py-3 px-2 rounded-2xl bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 text-xs font-bold transition-all"
            >
              <div>Đã thuộc làu</div>
              <div className="text-[10px] font-normal text-emerald-600">Ôn sau 7 ngày</div>
            </button>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between pt-2">
            <button
              onClick={handlePrev}
              className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-50 flex items-center gap-1 shadow-xs"
            >
              <ChevronLeft className="w-4 h-4" />
              <span>Từ trước</span>
            </button>

            <button
              onClick={() => {
                const rand = Math.floor(Math.random() * filteredList.length);
                setCurrentIndex(rand);
                setIsFlipped(false);
              }}
              className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 text-xs font-semibold flex items-center gap-1"
            >
              <Shuffle className="w-3.5 h-3.5" />
              <span>Xáo ngẫu nhiên</span>
            </button>

            <button
              onClick={handleNext}
              className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1 shadow-xs"
            >
              <span>Từ tiếp theo</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

