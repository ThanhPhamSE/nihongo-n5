'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  BookMarked,
  Search,
  Volume2,
  Bookmark,
  Sparkles,
  ArrowRight,
  AlertTriangle,
  HelpCircle,
} from 'lucide-react';
import { GRAMMAR_LIBRARY } from '@/data/grammar';
import { speakJapanese } from '@/lib/utils';
import { isBookmarked, toggleBookmark } from '@/lib/storage';
import { GrammarItem } from '@/types';

export default function GrammarPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState<GrammarItem>(GRAMMAR_LIBRARY[0]);
  const [bookmarkedList, setBookmarkedList] = useState<Record<string, boolean>>({});

  const filteredGrammar = GRAMMAR_LIBRARY.filter((g) => {
    if (!searchQuery.trim()) return true;
    const q = searchQuery.toLowerCase();
    return (
      g.pattern.toLowerCase().includes(q) ||
      g.title.toLowerCase().includes(q) ||
      g.meaning.toLowerCase().includes(q) ||
      g.vietnameseExplanation.toLowerCase().includes(q)
    );
  });

  const handleToggleFav = (item: GrammarItem) => {
    const res = toggleBookmark({
      type: 'grammar',
      itemId: item.id,
      title: item.pattern,
      subtitle: item.title,
      route: '/grammar',
    });
    setBookmarkedList((prev) => ({ ...prev, [item.id]: res }));
  };

  return (
    <div className="space-y-8 max-w-6xl pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold mb-2">
          <BookMarked className="w-3.5 h-3.5" />
          Thư viện ngữ pháp
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Ngữ Pháp Tiếng Nhật N5 Toàn Tập
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Hệ thống 25 bài ngữ pháp sơ cấp theo khung giáo trình chuẩn Minna no Nihongo, giải thích chi tiết dưới góc nhìn người Việt.
        </p>
      </div>

      {/* Main 2-column layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List & Search */}
        <div className="lg:col-span-5 bg-white rounded-3xl border border-[#E8E2D5] p-5 shadow-xs space-y-4">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm kiếm mẫu ngữ pháp..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829]"
            />
          </div>

          <div className="space-y-1.5 max-h-[600px] overflow-y-auto pr-1">
            {filteredGrammar.map((item) => {
              const isSelected = selectedItem.id === item.id;
              return (
                <div
                  key={item.id}
                  onClick={() => setSelectedItem(item)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-rose-50 border-[#D93829] shadow-xs'
                      : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100 hover:border-stone-300'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span
                      className={`font-bold font-mono text-xs ${
                        isSelected ? 'text-[#D93829]' : 'text-stone-900'
                      }`}
                    >
                      {item.pattern}
                    </span>
                    <span className="text-[10px] text-stone-500 font-medium">N5</span>
                  </div>
                  <div className="text-xs font-semibold text-stone-800 line-clamp-1">
                    {item.title}
                  </div>
                  <div className="text-[11px] text-stone-500 line-clamp-1 mt-0.5">
                    {item.meaning}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Detailed View */}
        <div className="lg:col-span-7 bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#D93829] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                JLPT {selectedItem.jlptLevel}
              </span>
              <h2 className="text-2xl font-extrabold text-stone-900 font-mono tracking-tight pt-1">
                {selectedItem.pattern}
              </h2>
              <h3 className="text-sm font-bold text-stone-700">{selectedItem.title}</h3>
            </div>

            <button
              onClick={() => handleToggleFav(selectedItem)}
              className="p-2.5 rounded-2xl bg-stone-100 text-stone-600 hover:text-amber-500 hover:bg-amber-50 transition-colors shrink-0"
              title="Lưu ngữ pháp"
            >
              <Bookmark
                className={`w-5 h-5 ${
                  bookmarkedList[selectedItem.id] || isBookmarked(selectedItem.id)
                    ? 'fill-amber-500 text-amber-500'
                    : ''
                }`}
              />
            </button>
          </div>

          {/* Explanation */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              Giải thích ý nghĩa &amp; Cách dùng:
            </h4>
            <p className="text-xs text-stone-700 leading-relaxed whitespace-pre-line bg-stone-50 p-4 rounded-2xl border border-stone-200/80">
              {selectedItem.vietnameseExplanation}
            </p>
          </div>

          {/* Formation Rules */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              Cấu trúc &amp; Quy tắc kết hợp:
            </h4>
            <div className="bg-stone-900 text-stone-100 p-4 rounded-2xl text-xs font-mono space-y-1">
              {selectedItem.formationRules.map((rule, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <span className="text-rose-400">›</span>
                  <span>{rule}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Examples */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
              Ví dụ mẫu thực tế:
            </h4>
            <div className="space-y-2.5">
              {selectedItem.examples.map((ex, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-amber-50/50 border border-amber-200/70 text-xs space-y-1.5"
                >
                  <div className="flex items-center justify-between font-jp text-stone-900 font-semibold text-sm">
                    <span>{ex.japanese}</span>
                    <button
                      onClick={() => speakJapanese(ex.japanese)}
                      className="p-1.5 text-stone-500 hover:text-[#D93829] rounded-lg hover:bg-white"
                      title="Nghe câu ví dụ"
                    >
                      <Volume2 className="w-4 h-4" />
                    </button>
                  </div>
                  {ex.kana && (
                    <div className="text-[11px] font-mono text-stone-500">{ex.kana}</div>
                  )}
                  <div className="text-stone-700 font-medium">{ex.vietnamese}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Common Mistakes */}
          {selectedItem.commonMistakes.length > 0 && (
            <div className="p-4 rounded-2xl bg-rose-50 border border-rose-200 text-xs space-y-1.5 text-rose-900">
              <div className="font-bold text-rose-700 flex items-center gap-1.5">
                <AlertTriangle className="w-4 h-4" />
                <span>Lưu ý &amp; Lỗi người Việt thường mắc:</span>
              </div>
              <ul className="list-disc list-inside space-y-1 text-stone-700">
                {selectedItem.commonMistakes.map((err, idx) => (
                  <li key={idx}>{err}</li>
                ))}
              </ul>
            </div>
          )}

          {/* Distinctions if any */}
          {selectedItem.distinctions && (
            <div className="p-4 rounded-2xl bg-blue-50 border border-blue-200 text-xs space-y-1 text-blue-900">
              <span className="font-bold text-blue-700">Phân biệt &amp; So sánh:</span>
              <p className="text-stone-700">{selectedItem.distinctions}</p>
            </div>
          )}

          {/* Link to Lesson */}
          {selectedItem.lessonId && (
            <div className="pt-2">
              <Link
                href={`/lessons/${selectedItem.lessonId}`}
                className="inline-flex items-center gap-2 text-xs font-bold text-[#D93829] hover:underline"
              >
                <span>Học chi tiết tại bài học liên kết</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

