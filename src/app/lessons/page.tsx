'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  Search,
  Filter,
  CheckCircle2,
  Clock,
  Circle,
  ArrowRight,
  Sparkles,
  PlayCircle,
  HelpCircle,
} from 'lucide-react';
import { LESSONS } from '@/data/lessons';
import { LEARNING_PHASES } from '@/data/phases';
import { getLessonProgress } from '@/lib/storage';
import { LessonProgress, LessonStatus } from '@/types';

export default function LessonsDirectoryPage() {
  const [mounted, setMounted] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, LessonProgress>>({});
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedPhase, setSelectedPhase] = useState<number | 'all'>('all');
  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  useEffect(() => {
    setMounted(true);
    setProgressMap(getLessonProgress());
  }, []);

  const filteredLessons = LESSONS.filter((lesson) => {
    // Search query
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = lesson.title.toLowerCase().includes(q);
      const matchDesc = lesson.description.toLowerCase().includes(q);
      const matchVocab = lesson.vocabulary.some(
        (v) =>
          v.word.toLowerCase().includes(q) ||
          v.reading.toLowerCase().includes(q) ||
          v.meaning.toLowerCase().includes(q)
      );
      const matchGrammar = lesson.grammar.some(
        (g) =>
          g.pattern.toLowerCase().includes(q) ||
          g.meaning.toLowerCase().includes(q)
      );
      if (!matchTitle && !matchDesc && !matchVocab && !matchGrammar) {
        return false;
      }
    }

    // Phase filter
    if (selectedPhase !== 'all' && lesson.phaseId !== selectedPhase) {
      return false;
    }

    // Status filter
    if (selectedStatus !== 'all') {
      const status = progressMap[lesson.slug]?.status || 'not_started';
      if (status !== selectedStatus) {
        return false;
      }
    }

    return true;
  });

  const getStatusBadge = (status?: LessonStatus) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Đã học xong
        </span>
      );
    }
    if (status === 'in_progress') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-amber-50 text-amber-700 border border-amber-200">
          <Clock className="w-3.5 h-3.5" />
          Đang học
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-stone-100 text-stone-600">
        <Circle className="w-3.5 h-3.5 text-stone-500" />
        Chưa bắt đầu
      </span>
    );
  };

  if (!mounted) {
    return (
      <div className="space-y-6 max-w-6xl animate-pulse">
        <div className="h-10 w-64 bg-stone-200 rounded-lg" />
        <div className="h-12 bg-stone-200 rounded-xl" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-44 bg-stone-200 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const completedCount = Object.values(progressMap).filter(
    (p) => p.status === 'completed'
  ).length;

  return (
    <div className="space-y-8 max-w-6xl pb-16">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            Thư viện bài giảng N5
          </div>
          <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
            Tất Cả Bài Học Sơ Cấp N5
          </h1>
          <p className="text-stone-600 text-sm mt-1">
            Tổng cộng {LESSONS.length} bài học tích hợp video YouTube tiếng Việt, từ vựng và bài tập tương tác.
          </p>
        </div>

        <div className="px-4 py-2.5 bg-white rounded-2xl border border-[#E8E2D5] text-xs flex items-center gap-4 shrink-0 shadow-xs">
          <div>
            <span className="text-stone-500">Đã hoàn thành: </span>
            <span className="font-bold text-stone-900">
              {completedCount} / {LESSONS.length} bài
            </span>
          </div>
          <div className="w-20 bg-stone-100 h-2 rounded-full overflow-hidden">
            <div
              className="bg-[#D93829] h-full rounded-full"
              style={{
                width: `${Math.round((completedCount / LESSONS.length) * 100)}%`,
              }}
            />
          </div>
        </div>
      </div>

      {/* Filter & Search Bar */}
      <div className="p-4 bg-white rounded-2xl border border-[#E8E2D5] shadow-xs space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          {/* Search Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-stone-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Tìm theo tên bài, từ vựng hoặc mẫu ngữ pháp..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-stone-200 text-sm focus:outline-none focus:border-[#D93829] focus:ring-2 focus:ring-rose-100"
            />
          </div>

          {/* Phase Filter Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
            <button
              onClick={() => setSelectedPhase('all')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                selectedPhase === 'all'
                  ? 'bg-stone-900 text-white'
                  : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
              }`}
            >
              Tất cả giai đoạn
            </button>
            {LEARNING_PHASES.map((p) => (
              <button
                key={p.id}
                onClick={() => setSelectedPhase(p.id)}
                className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-colors ${
                  selectedPhase === p.id
                    ? 'bg-[#D93829] text-white'
                    : 'bg-stone-100 text-stone-600 hover:bg-stone-200'
                }`}
              >
                Giai đoạn {p.phaseNumber}
              </button>
            ))}
          </div>

          {/* Status Dropdown */}
          <select
            value={selectedStatus}
            onChange={(e) => setSelectedStatus(e.target.value)}
            className="px-3 py-2 rounded-xl border border-stone-200 text-xs font-medium text-stone-700 focus:outline-none focus:border-[#D93829]"
          >
            <option value="all">Mọi trạng thái</option>
            <option value="completed">Đã hoàn thành</option>
            <option value="in_progress">Đang học</option>
            <option value="not_started">Chưa học</option>
          </select>
        </div>
      </div>

      {/* Lessons Cards Grid */}
      {filteredLessons.length === 0 ? (
        <div className="text-center py-16 bg-white rounded-3xl border border-[#E8E2D5] p-8 space-y-3">
          <HelpCircle className="w-12 h-12 text-stone-300 mx-auto" />
          <h3 className="text-base font-bold text-stone-800">
            Không tìm thấy bài học nào phù hợp
          </h3>
          <p className="text-xs text-stone-500">
            Hãy thử tìm kiếm từ khóa khác hoặc bỏ các bộ lọc để xem lại danh sách.
          </p>
          <button
            onClick={() => {
              setSearchQuery('');
              setSelectedPhase('all');
              setSelectedStatus('all');
            }}
            className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-medium"
          >
            Đặt lại bộ lọc
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filteredLessons.map((lesson) => {
            const prog = progressMap[lesson.slug];
            const isCompleted = prog?.status === 'completed';

            return (
              <div
                key={lesson.slug}
                className="bg-white rounded-2xl border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-md transition-all p-5 flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-[#D93829] bg-rose-50 px-2.5 py-0.5 rounded-full border border-rose-100">
                      Tuần {lesson.weekNumber} • Bài {lesson.lessonNumber}
                    </span>
                    {getStatusBadge(prog?.status)}
                  </div>

                  <div>
                    <h3 className="font-bold text-base text-stone-900 group-hover:text-[#D93829] transition-colors leading-snug">
                      {lesson.title}
                    </h3>
                    {lesson.japaneseTitle && (
                      <p className="text-xs font-mono text-stone-500 mt-0.5">
                        {lesson.japaneseTitle}
                      </p>
                    )}
                  </div>

                  <p className="text-xs text-stone-600 line-clamp-3 leading-relaxed">
                    {lesson.description}
                  </p>

                  {/* Badges Info */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-1">
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                      {lesson.vocabulary.length} Từ vựng
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-stone-100 text-stone-600">
                      {lesson.grammar.length} Ngữ pháp
                    </span>
                    <span className="text-[11px] px-2 py-0.5 rounded-md bg-rose-50 text-rose-700 font-medium">
                      {lesson.mainVideo.channelName}
                    </span>
                  </div>
                </div>

                <div className="pt-4 mt-4 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    ~{lesson.estimatedDurationMinutes} phút
                  </span>
                  <Link
                    href={`/lessons/${lesson.slug}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-900 group-hover:bg-[#D93829] text-white font-medium transition-colors shadow-xs"
                  >
                    <span>{isCompleted ? 'Ôn tập lại' : 'Vào học'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

