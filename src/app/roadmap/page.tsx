'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  CheckCircle2,
  Circle,
  Clock,
  ArrowRight,
  BookOpen,
  HelpCircle,
  Calendar,
  ChevronDown,
  ChevronUp,
  Sparkles,
  Layers,
  Award,
} from 'lucide-react';
import { LEARNING_PHASES } from '@/data/phases';
import { LEARNING_WEEKS } from '@/data/weeks';
import { LESSONS } from '@/data/lessons';
import { getLessonProgress } from '@/lib/storage';
import { LessonProgress, LessonStatus } from '@/types';

export default function RoadmapPage() {
  const [mounted, setMounted] = useState(false);
  const [progressMap, setProgressMap] = useState<Record<string, LessonProgress>>({});
  const [expandedWeeks, setExpandedWeeks] = useState<Record<number, boolean>>({
    1: true,
    2: true,
  });

  useEffect(() => {
    setMounted(true);
    const progress = getLessonProgress();
    setProgressMap(progress);
  }, []);

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) => ({
      ...prev,
      [weekNum]: !prev[weekNum],
    }));
  };

  const getWeekProgress = (lessonSlugs: string[]) => {
    if (!lessonSlugs.length) return 0;
    const completed = lessonSlugs.filter(
      (slug) => progressMap[slug]?.status === 'completed'
    ).length;
    return Math.round((completed / lessonSlugs.length) * 100);
  };

  const getPhaseProgress = (weeksList: number[]) => {
    const phaseWeeks = LEARNING_WEEKS.filter((w) => weeksList.includes(w.weekNumber));
    const allLessonSlugs = phaseWeeks.flatMap((w) => w.lessons);
    return getWeekProgress(allLessonSlugs);
  };

  const getStatusBadge = (status?: LessonStatus) => {
    if (status === 'completed') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
          <CheckCircle2 className="w-3.5 h-3.5" />
          Đã hoàn thành
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
        Chưa học
      </span>
    );
  };

  if (!mounted) {
    return (
      <div className="space-y-6 max-w-5xl animate-pulse">
        <div className="h-10 w-64 bg-stone-200 rounded-lg" />
        <div className="h-40 bg-stone-200 rounded-2xl" />
      </div>
    );
  }

  // Calculate overall roadmap progress
  const totalRoadmapLessons = LESSONS.length;
  const completedLessons = Object.values(progressMap).filter(
    (p) => p.status === 'completed'
  ).length;
  const overallRoadmapPercent = Math.round(
    (completedLessons / totalRoadmapLessons) * 100
  );

  return (
    <div className="space-y-10 max-w-5xl pb-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-50 border border-rose-200 text-xs font-bold text-[#D93829]">
          <Sparkles className="w-3.5 h-3.5" />
          Lộ trình chuẩn 12 tuần Sơ cấp N5
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Lộ Trình Học Tiếng Nhật N5 Từng Bước
        </h1>
        <p className="text-stone-600 text-sm max-w-3xl leading-relaxed">
          Được thiết kế chuyên biệt cho người Việt tự học từ con số 0. Đi từ nền tảng 2 bảng chữ cái, phát âm Tokyo chuẩn đến 25 bài Minna no Nihongo I và chiến thuật luyện đề JLPT thực chiến.
        </p>

        {/* Global Progress Bar */}
        <div className="p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs mt-4">
          <div className="flex items-center justify-between text-sm font-semibold text-stone-800 mb-2">
            <span>Tiến độ toàn bộ lộ trình: {overallRoadmapPercent}%</span>
            <span className="text-stone-500 text-xs">
              {completedLessons} / {totalRoadmapLessons} bài học đã hoàn thành
            </span>
          </div>
          <div className="w-full bg-stone-100 h-3 rounded-full overflow-hidden">
            <div
              className="bg-[#D93829] h-full rounded-full transition-all duration-500"
              style={{ width: `${overallRoadmapPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* 5 PHASES */}
      <div className="space-y-12">
        {LEARNING_PHASES.map((phase) => {
          const phasePercent = getPhaseProgress(phase.weeks);
          const weeksInPhase = LEARNING_WEEKS.filter((w) =>
            phase.weeks.includes(w.weekNumber)
          );

          return (
            <div
              key={phase.id}
              className="space-y-6 pt-4 border-t-2 border-stone-200/60 first:border-t-0 first:pt-0"
            >
              {/* Phase Banner */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-5 rounded-2xl bg-white border border-[#E8E2D5] shadow-xs">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-stone-900 text-white">
                      Giai đoạn {phase.phaseNumber}
                    </span>
                    <span className="text-xs text-stone-500 font-medium">
                      Tuần {phase.weeks.join(' - ')}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-stone-900">{phase.title}</h2>
                  <p className="text-xs text-stone-600 max-w-2xl">{phase.description}</p>
                </div>

                <div className="flex items-center gap-4 shrink-0">
                  <div className="text-right">
                    <div className="text-xs text-stone-500">Hoàn thành</div>
                    <div className="text-lg font-bold text-stone-900">{phasePercent}%</div>
                  </div>
                  <div className="w-14 h-14 rounded-full bg-stone-50 border-4 border-[#E8E2D5] flex items-center justify-center font-bold text-xs text-stone-700">
                    {phasePercent}%
                  </div>
                </div>
              </div>

              {/* Weeks inside this Phase */}
              <div className="space-y-4 pl-0 md:pl-4">
                {weeksInPhase.map((week) => {
                  const weekPercent = getWeekProgress(week.lessons);
                  const isExpanded = !!expandedWeeks[week.weekNumber];
                  const weekLessonsData = LESSONS.filter((l) =>
                    week.lessons.includes(l.slug)
                  );

                  return (
                    <div
                      key={week.weekNumber}
                      className="rounded-2xl bg-white border border-[#E8E2D5] shadow-xs overflow-hidden transition-all"
                    >
                      {/* Week Accordion Header */}
                      <div
                        onClick={() => toggleWeek(week.weekNumber)}
                        className="p-5 flex items-center justify-between cursor-pointer hover:bg-stone-50/80 transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-xl bg-stone-100 flex items-center justify-center font-bold text-stone-800 text-sm shrink-0">
                            W{week.weekNumber}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <h3 className="font-bold text-stone-900 text-base">
                                {week.title}
                              </h3>
                              {week.japaneseTitle && (
                                <span className="hidden sm:inline text-xs font-mono text-stone-500">
                                  ({week.japaneseTitle})
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-4 text-xs text-stone-500 mt-1">
                              <span className="flex items-center gap-1">
                                <Clock className="w-3.5 h-3.5" />
                                {week.estimatedStudyHours} giờ học
                              </span>
                              <span>•</span>
                              <span>{week.lessons.length} bài học chính</span>
                              <span>•</span>
                              <span className="font-semibold text-stone-700">
                                {weekPercent}% xong
                              </span>
                            </div>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="w-20 bg-stone-100 h-2 rounded-full overflow-hidden hidden sm:block">
                            <div
                              className="bg-[#D93829] h-full rounded-full"
                              style={{ width: `${weekPercent}%` }}
                            />
                          </div>
                          <button
                            className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-200/60"
                            aria-label="Thu gọn hoặc mở rộng tuần"
                          >
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5" />
                            ) : (
                              <ChevronDown className="w-5 h-5" />
                            )}
                          </button>
                        </div>
                      </div>

                      {/* Week Expanded Body */}
                      {isExpanded && (
                        <div className="px-5 pb-6 pt-2 border-t border-stone-100 space-y-6">
                          {/* Objectives */}
                          <div className="bg-stone-50 p-4 rounded-xl border border-stone-200/80 space-y-2">
                            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                              Mục tiêu cần đạt trong tuần:
                            </h4>
                            <ul className="space-y-1.5 text-xs text-stone-600">
                              {week.objectives.map((obj, oIdx) => (
                                <li key={oIdx} className="flex items-start gap-2">
                                  <span className="w-1.5 h-1.5 rounded-full bg-[#D93829] shrink-0 mt-1.5" />
                                  <span>{obj}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Lessons List in this Week */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider">
                              Bài học liên kết:
                            </h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                              {weekLessonsData.map((lesson) => {
                                const prog = progressMap[lesson.slug];
                                return (
                                  <Link
                                    key={lesson.slug}
                                    href={`/lessons/${lesson.slug}`}
                                    className="p-4 rounded-xl border border-stone-200 hover:border-[#D93829] hover:bg-stone-50/50 transition-all flex flex-col justify-between group"
                                  >
                                    <div className="space-y-1.5">
                                      <div className="flex items-center justify-between">
                                        <span className="text-[11px] font-bold text-stone-500">
                                          Bài {lesson.lessonNumber}
                                        </span>
                                        {getStatusBadge(prog?.status)}
                                      </div>
                                      <h5 className="font-bold text-sm text-stone-900 group-hover:text-[#D93829] transition-colors">
                                        {lesson.title}
                                      </h5>
                                      <p className="text-xs text-stone-500 line-clamp-2">
                                        {lesson.description}
                                      </p>
                                    </div>

                                    <div className="pt-3 mt-3 border-t border-stone-100 flex items-center justify-between text-xs text-stone-500">
                                      <span>~{lesson.estimatedDurationMinutes} phút</span>
                                      <span className="font-semibold text-[#D93829] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                                        Vào học <ArrowRight className="w-3.5 h-3.5" />
                                      </span>
                                    </div>
                                  </Link>
                                );
                              })}
                            </div>
                          </div>

                          {/* Daily Study Schedule (Day 1 - 7) */}
                          <div className="space-y-3">
                            <h4 className="text-xs font-bold text-stone-700 uppercase tracking-wider flex items-center gap-1.5">
                              <Calendar className="w-3.5 h-3.5 text-stone-500" />
                              Lịch trình học khuyến nghị 7 ngày:
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                              {week.dailyTasks.map((task) => (
                                <div
                                  key={task.id}
                                  className="p-3 rounded-xl bg-stone-50/80 border border-stone-200 text-xs flex flex-col justify-between"
                                >
                                  <div>
                                    <div className="flex items-center justify-between text-[11px] font-bold text-stone-500 mb-1">
                                      <span>Ngày {task.day}</span>
                                      <span>{task.estimatedMinutes} ph</span>
                                    </div>
                                    <div className="font-semibold text-stone-900 mb-1">
                                      {task.title}
                                    </div>
                                    <p className="text-[11px] text-stone-600 line-clamp-2">
                                      {task.description}
                                    </p>
                                  </div>
                                  {task.targetRoute && (
                                    <Link
                                      href={task.targetRoute}
                                      className="mt-2 text-[11px] font-semibold text-[#D93829] hover:underline inline-flex items-center gap-1"
                                    >
                                      Bắt đầu →
                                    </Link>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Weekly Final Quiz Button */}
                          <div className="pt-2 flex items-center justify-between bg-rose-50/60 p-4 rounded-xl border border-rose-100">
                            <div>
                              <div className="font-bold text-xs text-stone-900">
                                Bài kiểm tra tổng hợp Tuần {week.weekNumber}
                              </div>
                              <div className="text-[11px] text-stone-500">
                                Đánh giá mức độ nắm vững kiến thức từ vựng và ngữ pháp của cả tuần.
                              </div>
                            </div>
                            <Link
                              href="/practice"
                              className="px-4 py-2 rounded-xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-semibold text-xs transition-colors shrink-0"
                            >
                              Làm bài kiểm tra tuần
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

