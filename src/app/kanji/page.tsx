'use client';

import React, { useState } from 'react';
import {
  PenTool,
  Search,
  Volume2,
  Bookmark,
  Sparkles,
  Info,
} from 'lucide-react';
import { KANJI_LIST } from '@/data/kanji';
import { speakJapanese } from '@/lib/utils';
import { isBookmarked, toggleBookmark } from '@/lib/storage';
import { KanjiItem } from '@/types';

export default function KanjiPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedKanji, setSelectedKanji] = useState<KanjiItem>(KANJI_LIST[0]);
  const [bookmarkedList, setBookmarkedList] = useState<Record<string, boolean>>({});

  const filteredKanji = KANJI_LIST.filter((k) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      k.character.includes(q) ||
      k.hanViet.toLowerCase().includes(q) ||
      k.meaning.toLowerCase().includes(q) ||
      k.onyomi.some((o) => o.toLowerCase().includes(q)) ||
      k.kunyomi.some((ku) => ku.toLowerCase().includes(q))
    );
  });

  const handleToggleFav = (item: KanjiItem) => {
    const res = toggleBookmark({
      type: 'kanji',
      itemId: item.id,
      title: `${item.character} (${item.hanViet})`,
      subtitle: item.meaning,
      route: '/kanji',
    });
    setBookmarkedList((prev) => ({ ...prev, [item.id]: res }));
  };

  return (
    <div className="space-y-8 max-w-6xl pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
          <PenTool className="w-3.5 h-3.5" />
          Hán Tự Nhập Môn
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Chữ Hán Kanji Sơ Cấp N5
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Học Kanji kết hợp âm Hán Việt - lợi thế vàng của người Việt Nam khi học tiếng Nhật.
        </p>
      </div>

      {/* Official Disclaimer */}
      <div className="p-4 rounded-2xl bg-stone-100 border border-stone-200 text-xs text-stone-600 flex items-start gap-2.5">
        <Info className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" />
        <div>
          Kỳ thi JLPT chính thức không công bố danh sách từ vựng/Kanji cố định cho từng cấp độ. Danh mục này được chọn lọc từ các bộ giáo trình chuẩn N5 phổ biến nhất để tối ưu hiệu quả ôn thi.
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#E8E2D5] shadow-xs">
        <div className="relative">
          <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Tìm theo chữ Hán, âm Hán Việt (NHẬT, NGUYỆT...) hoặc nghĩa tiếng Việt..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829]"
          />
        </div>
      </div>

      {/* Main Grid + Detail */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Kanji Grid */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E8E2D5] p-5 shadow-xs">
          <div className="grid grid-cols-4 sm:grid-cols-5 gap-3 max-h-[640px] overflow-y-auto pr-1">
            {filteredKanji.map((item) => {
              const isSelected = selectedKanji.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedKanji(item)}
                  className={`p-3 rounded-2xl cursor-pointer text-center transition-all border flex flex-col items-center justify-center ${
                    isSelected
                      ? 'bg-rose-50 border-[#D93829] shadow-xs'
                      : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100'
                  }`}
                >
                  <span className="text-3xl font-black font-jp text-stone-900 mb-1">
                    {item.character}
                  </span>
                  <span className="text-[11px] font-bold text-[#D93829]">
                    {item.hanViet}
                  </span>
                  <span className="text-[10px] text-stone-500 truncate w-full">
                    {item.meaning}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Detail Card */}
        <div className="lg:col-span-6 bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-start justify-between">
            <div className="flex items-center gap-5">
              <div className="w-24 h-24 rounded-3xl bg-rose-50 text-[#D93829] font-jp font-black text-6xl flex items-center justify-center border-2 border-rose-100 shadow-xs">
                {selectedKanji.character}
              </div>
              <div className="space-y-1">
                <span className="text-xs font-bold text-stone-500 uppercase tracking-wider">
                  Âm Hán Việt
                </span>
                <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
                  {selectedKanji.hanViet}
                </h2>
                <div className="text-sm font-semibold text-[#D93829]">
                  {selectedKanji.meaning}
                </div>
                <div className="text-xs text-stone-500">
                  Số nét: <span className="font-semibold">{selectedKanji.strokeCount} nét</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => handleToggleFav(selectedKanji)}
              className="p-2.5 rounded-2xl bg-stone-100 text-stone-600 hover:text-amber-500 hover:bg-amber-50 transition-colors"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  bookmarkedList[selectedKanji.id] || isBookmarked(selectedKanji.id)
                    ? 'fill-amber-500 text-amber-500'
                    : ''
                }`}
              />
            </button>
          </div>

          {/* Onyomi & Kunyomi */}
          <div className="grid grid-cols-2 gap-3">
            <div className="p-4 rounded-2xl bg-rose-50/50 border border-rose-100 space-y-1">
              <div className="text-[11px] font-bold text-rose-700 uppercase">
                Âm On (Katakana)
              </div>
              <div className="font-jp font-bold text-sm text-stone-900">
                {selectedKanji.onyomi.join(', ') || '—'}
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-blue-50/50 border border-blue-100 space-y-1">
              <div className="text-[11px] font-bold text-blue-700 uppercase">
                Âm Kun (Hiragana)
              </div>
              <div className="font-jp font-bold text-sm text-stone-900">
                {selectedKanji.kunyomi.join(', ') || '—'}
              </div>
            </div>
          </div>

          {/* Common Vocabulary */}
          <div className="space-y-2">
            <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              Từ ghép thường gặp trong đề thi:
            </h3>
            <div className="space-y-2">
              {selectedKanji.commonWords.map((cw, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-bold font-jp text-stone-900 text-sm">
                      {cw.word}
                    </span>
                    <span className="text-stone-500 font-mono">({cw.reading})</span>
                    <span className="text-stone-700 font-medium">{cw.meaning}</span>
                  </div>
                  <button
                    onClick={() => speakJapanese(cw.reading)}
                    className="p-1 text-stone-500 hover:text-[#D93829]"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Example Sentences */}
          {selectedKanji.exampleSentences && selectedKanji.exampleSentences.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                Ví dụ ngữ cảnh:
              </h3>
              <div className="space-y-2">
                {selectedKanji.exampleSentences.map((ex, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 rounded-xl bg-amber-50/50 border border-amber-200/60 text-xs space-y-1"
                  >
                    <div className="flex items-center justify-between font-jp text-stone-900 font-medium">
                      <span>{ex.sentence}</span>
                      <button
                        onClick={() => speakJapanese(ex.sentence)}
                        className="p-1 text-stone-500 hover:text-[#D93829]"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="text-[11px] text-stone-500 font-mono">{ex.reading}</div>
                    <div className="text-stone-700 font-semibold">{ex.meaning}</div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

