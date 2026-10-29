'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  BarChart3,
  Flame,
  CheckCircle2,
  Clock,
  Award,
  TrendingUp,
  Calendar,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import {
  getLessonProgress,
  getStudySessions,
  calculateStreak,
  getVocabReviews,
  getQuizAttempts,
  getUserSettings,
} from '@/lib/storage';
import { LESSONS } from '@/data/lessons';
import { QuizAttempt } from '@/types';

export default function ProgressPage() {
  const [mounted, setMounted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [longestStreak, setLongestStreak] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [totalMinutes, setTotalMinutes] = useState(0);
  const [vocabStats, setVocabStats] = useState({ mastered: 0, learning: 0 });
  const [quizAttempts, setQuizAttempts] = useState<QuizAttempt[]>([]);
  const [past30Days, setPast30Days] = useState<{ date: string; minutes: number }[]>([]);

  useEffect(() => {
    setMounted(true);

    // Lessons progress
    const progress = getLessonProgress();
    const completed = Object.values(progress).filter(
      (p) => p.status === 'completed'
    ).length;
    setCompletedCount(completed);

    // Streaks
    const s = calculateStreak();
    setStreak(s.currentStreak);
    setLongestStreak(s.longestStreak);

    // Study sessions
    const sessions = getStudySessions();
    let mins = 0;
    Object.values(sessions).forEach((sess) => {
      mins += sess.minutesSpent;
    });
    setTotalMinutes(mins);

    // Past 30 days heatmap
    const days: { date: string; minutes: number }[] = [];
    for (let i = 29; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const dStr = d.toISOString().split('T')[0];
      days.push({
        date: dStr,
        minutes: sessions[dStr]?.minutesSpent || 0,
      });
    }
    setPast30Days(days);

    // Vocab stats
    const reviews = getVocabReviews();
    let mastered = 0;
    let learning = 0;
    Object.values(reviews).forEach((r) => {
      if (r.status === 'mastered') mastered++;
      else learning++;
    });
    setVocabStats({ mastered, learning });

    // Quiz attempts
    setQuizAttempts(getQuizAttempts());
  }, []);

  if (!mounted) {
    return <div className="p-8 max-w-5xl mx-auto animate-pulse h-96 bg-stone-200/60 rounded-3xl" />;
  }

  const totalLessons = LESSONS.length;
  const roadmapPercent = Math.round((completedCount / totalLessons) * 100);

  return (
    <div className="space-y-8 max-w-5xl pb-24">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
          <BarChart3 className="w-3.5 h-3.5" />
          Báo cáo học tập cá nhân
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Tiến Độ &amp; Lịch Sử Học Tập
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Theo dõi chuỗi ngày kiên trì, số giờ tích lũy và kết quả các bài kiểm tra thực tế trên trình duyệt của bạn.
        </p>
      </div>

      {/* Primary KPI Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="p-5 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-600 flex items-center justify-center">
            <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Chuỗi ngày học</div>
            <div className="text-2xl font-black text-stone-900">{streak} ngày</div>
            <div className="text-[10px] text-stone-500">Kỷ lục: {longestStreak} ngày</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Bài hoàn thành</div>
            <div className="text-2xl font-black text-stone-900">
              {completedCount} / {totalLessons}
            </div>
            <div className="text-[10px] text-emerald-700 font-semibold">
              Tiến độ {roadmapPercent}%
            </div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#D93829] flex items-center justify-center">
            <Clock className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Tổng thời gian học</div>
            <div className="text-2xl font-black text-stone-900">
              {Math.round(totalMinutes / 60)}h {totalMinutes % 60}m
            </div>
            <div className="text-[10px] text-stone-500">Tích lũy thực tế</div>
          </div>
        </div>

        <div className="p-5 rounded-3xl bg-white border border-[#E8E2D5] shadow-xs space-y-2">
          <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs text-stone-500 font-medium">Từ vựng đã thuộc</div>
            <div className="text-2xl font-black text-stone-900">
              {vocabStats.mastered} từ
            </div>
            <div className="text-[10px] text-stone-500">
              {vocabStats.learning} từ đang học
            </div>
          </div>
        </div>
      </div>

      {/* 30-Day Activity Heatmap */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-base">
            <Calendar className="w-4 h-4 text-[#D93829]" />
            <h3>Biểu đồ chuyên cần (30 ngày gần nhất)</h3>
          </div>
          <span className="text-xs text-stone-500">
            Màu càng đậm = Học càng nhiều phút
          </span>
        </div>

        <div className="grid grid-cols-6 sm:grid-cols-10 md:grid-cols-15 gap-2 pt-2">
          {past30Days.map((d, i) => {
            let color = 'bg-stone-100';
            if (d.minutes > 40) color = 'bg-[#D93829] text-white';
            else if (d.minutes > 20) color = 'bg-rose-400 text-white';
            else if (d.minutes > 5) color = 'bg-rose-200 text-rose-900';
            else if (d.minutes > 0) color = 'bg-rose-100 text-rose-800';

            return (
              <div
                key={i}
                title={`${d.date}: ${d.minutes} phút`}
                className={`h-10 rounded-xl flex flex-col items-center justify-center text-[10px] font-bold cursor-pointer transition-transform hover:scale-105 ${color}`}
              >
                <span>{d.date.split('-')[2]}</span>
                {d.minutes > 0 && (
                  <span className="text-[9px] opacity-80">{d.minutes}m</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Recent Quiz Attempts List */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-4">
        <h3 className="font-bold text-stone-900 text-base">
          Lịch sử các bài kiểm tra &amp; Thi thử đã làm:
        </h3>

        {quizAttempts.length === 0 ? (
          <div className="p-8 text-center bg-stone-50 rounded-2xl border border-stone-200 text-xs text-stone-500">
            Bạn chưa làm bài kiểm tra nào. Hãy làm thử một bài trắc nghiệm nhé!
          </div>
        ) : (
          <div className="space-y-2.5">
            {quizAttempts.slice(0, 10).map((att) => (
              <div
                key={att.id}
                className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between text-xs"
              >
                <div className="space-y-0.5">
                  <div className="font-bold text-stone-900 text-sm">
                    {att.quizTitle}
                  </div>
                  <div className="text-[11px] text-stone-500">
                    Hoàn thành lúc: {new Date(att.completedAt).toLocaleString('vi-VN')}
                  </div>
                </div>

                <div className="text-right">
                  <div className="font-black text-sm text-[#D93829]">
                    {att.score} / {att.totalQuestions} ({att.percentage}%)
                  </div>
                  <span
                    className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded ${
                      att.percentage >= 80
                        ? 'bg-emerald-100 text-emerald-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {att.percentage >= 80 ? 'Đạt điểm giỏi' : 'Cần ôn thêm'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

