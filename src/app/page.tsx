'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  BookOpen,
  CheckCircle2,
  Clock,
  Flame,
  ArrowRight,
  Sparkles,
  Layers,
  BookMarked,
  Headphones,
  Award,
  Calendar,
  RefreshCw,
  TrendingUp,
  Target,
  FileCheck,
} from 'lucide-react';
import {
  getLessonProgress,
  getStudySessions,
  calculateStreak,
  getVocabReviews,
  getUserSettings,
} from '@/lib/storage';
import { LESSONS } from '@/data/lessons';
import { LEARNING_WEEKS } from '@/data/weeks';

export default function Dashboard() {
  const [mounted, setMounted] = useState(false);
  const [streak, setStreak] = useState(0);
  const [userName, setUserName] = useState('Học viên N5');
  const [dailyGoal, setDailyGoal] = useState(20);
  const [todayMinutes, setTodayMinutes] = useState(0);
  const [completedCount, setCompletedCount] = useState(0);
  const [inProgressLessonSlug, setInProgressLessonSlug] = useState<string | null>(null);
  const [vocabStats, setVocabStats] = useState({ mastered: 0, learning: 0, due: 0 });
  const [weeklyActivity, setWeeklyActivity] = useState<{ dayName: string; minutes: number }[]>([]);

  useEffect(() => {
    setMounted(true);

    // Load progress
    const progress = getLessonProgress();
    const completedSlugs = Object.keys(progress).filter(
      (slug) => progress[slug].status === 'completed'
    );
    setCompletedCount(completedSlugs.length);

    // Find current lesson in progress or first uncompleted
    const inProgress = Object.keys(progress).find(
      (slug) => progress[slug].status === 'in_progress'
    );
    if (inProgress) {
      setInProgressLessonSlug(inProgress);
    } else {
      const firstUncompleted = LESSONS.find(
        (l) => !progress[l.slug] || progress[l.slug].status !== 'completed'
      );
      setInProgressLessonSlug(firstUncompleted?.slug || LESSONS[0].slug);
    }

    // Streak
    const { currentStreak } = calculateStreak();
    setStreak(currentStreak);

    // User settings
    const settings = getUserSettings();
    setUserName(settings.userName || 'Học viên N5');
    setDailyGoal(settings.dailyGoalMinutes || 20);

    // Sessions & Today's minutes
    const sessions = getStudySessions();
    const todayStr = new Date().toISOString().split('T')[0];
    setTodayMinutes(sessions[todayStr]?.minutesSpent || 0);

    // Weekly activity (Past 7 days)
    const dayNames = ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'];
    const past7Days: { dayName: string; minutes: number }[] = [];
    for (let i = 6; i >= 0; i--) {
      const d = new Date(Date.now() - i * 86400000);
      const dStr = d.toISOString().split('T')[0];
      const dayOfWeek = dayNames[d.getDay()];
      past7Days.push({
        dayName: dayOfWeek,
        minutes: sessions[dStr]?.minutesSpent || 0,
      });
    }
    setWeeklyActivity(past7Days);

    // Vocab SRS stats
    const reviews = getVocabReviews();
    const now = new Date();
    let mastered = 0;
    let learning = 0;
    let due = 0;

    Object.values(reviews).forEach((r) => {
      if (r.status === 'mastered') mastered++;
      else learning++;

      if (new Date(r.nextReviewDate) <= now) {
        due++;
      }
    });

    setVocabStats({ mastered, learning, due });
  }, []);

  if (!mounted) {
    return (
      <div className="space-y-6 animate-pulse">
        <div className="h-28 bg-stone-200/60 rounded-2xl" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-24 bg-stone-200/60 rounded-2xl" />
          ))}
        </div>
      </div>
    );
  }

  const totalLessons = LESSONS.length;
  const progressPercent = Math.round((completedCount / totalLessons) * 100);
  const currentLesson = LESSONS.find((l) => l.slug === inProgressLessonSlug) || LESSONS[0];
  const isFirstTime = completedCount === 0 && todayMinutes === 0 && streak === 0;

  // Max minutes for scaling weekly bar chart
  const maxWeeklyMinutes = Math.max(30, ...weeklyActivity.map((d) => d.minutes));

  return (
    <div className="space-y-8 max-w-6xl">
      {/* Top Banner / Welcome Card */}
      <div className="bg-gradient-to-br from-[#FAF5EE] via-[#F5EFE6] to-[#EFE7D8] p-6 md:p-8 rounded-3xl border border-[#E5DCBE] shadow-xs relative overflow-hidden">
        <div className="absolute right-4 -bottom-6 text-9xl font-black text-stone-900/5 select-none pointer-events-none">
          日本語
        </div>

        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-2">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-[#E5DCBE] text-xs font-semibold text-stone-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              <span>Cấp độ: Người mới bắt đầu (Zero to N5)</span>
            </div>
            <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
              Konnichiwa, {userName}! 🌸
            </h1>
            <p className="text-stone-600 text-sm max-w-xl leading-relaxed">
              {isFirstTime
                ? 'Chào mừng bạn đến với lộ trình 12 tuần chinh phục kỳ thi JLPT N5 từ con số 0. Hãy bắt đầu bài học đầu tiên hôm nay!'
                : `Hôm nay bạn đã học được ${todayMinutes} phút. Duy trì thói quen học mỗi ngày để đạt mục tiêu đỗ JLPT N5 nhé!`}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <Link
              href={`/lessons/${currentLesson.slug}`}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg active:scale-98"
            >
              <span>{completedCount === 0 ? 'Bắt đầu học ngay' : 'Tiếp tục bài học'}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/roadmap"
              className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl bg-white hover:bg-stone-50 border border-stone-300 text-stone-800 font-semibold text-sm transition-all"
            >
              <span>Xem toàn bộ lộ trình</span>
            </Link>
          </div>
        </div>
      </div>

      {/* KPI Stats Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Streak */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
            <Flame className="w-6 h-6 text-amber-500 fill-amber-500" />
          </div>
          <div>
            <div className="text-xs font-semibold text-stone-500">Chuỗi liên tục</div>
            <div className="text-2xl font-bold text-stone-900">{streak} ngày</div>
            <div className="text-[11px] text-amber-700 font-medium">
              {streak > 0 ? 'Đang duy trì rất tốt!' : 'Học hôm nay để tạo chuỗi'}
            </div>
          </div>
        </div>

        {/* Lessons Completed */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0">
            <CheckCircle2 className="w-6 h-6 text-emerald-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-stone-500">Bài hoàn thành</div>
            <div className="text-2xl font-bold text-stone-900">
              {completedCount} <span className="text-sm font-normal text-stone-500">/ {totalLessons}</span>
            </div>
            <div className="text-[11px] text-emerald-700 font-medium">Tiến độ {progressPercent}%</div>
          </div>
        </div>

        {/* Daily Goal */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-rose-50 border border-rose-200 flex items-center justify-center shrink-0">
            <Clock className="w-6 h-6 text-[#D93829]" />
          </div>
          <div>
            <div className="text-xs font-semibold text-stone-500">Mục tiêu hôm nay</div>
            <div className="text-2xl font-bold text-stone-900">
              {todayMinutes} <span className="text-sm font-normal text-stone-500">/ {dailyGoal} ph</span>
            </div>
            <div className="text-[11px] text-[#D93829] font-medium">
              {todayMinutes >= dailyGoal ? 'Đã đạt chỉ tiêu!' : `Còn ${Math.max(0, dailyGoal - todayMinutes)} phút`}
            </div>
          </div>
        </div>

        {/* SRS Vocab Queue */}
        <div className="bg-white p-5 rounded-2xl border border-[#E8E2D5] shadow-xs flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 border border-purple-200 flex items-center justify-center shrink-0">
            <RefreshCw className="w-6 h-6 text-purple-600" />
          </div>
          <div>
            <div className="text-xs font-semibold text-stone-500">Từ vựng cần ôn</div>
            <div className="text-2xl font-bold text-stone-900">
              {vocabStats.due} <span className="text-sm font-normal text-stone-500">từ</span>
            </div>
            <div className="text-[11px] text-purple-700 font-medium">
              {vocabStats.mastered} từ đã thuộc
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid: Current Lesson Card & Weekly Activity Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Current Lesson in Progress */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-xs flex flex-col justify-between">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-[#D93829] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
                Tuần {currentLesson.weekNumber} • Bài {currentLesson.lessonNumber}
              </span>
              <span className="text-xs text-stone-500 flex items-center gap-1 font-medium">
                <Clock className="w-3.5 h-3.5" />
                ~{currentLesson.estimatedDurationMinutes} phút
              </span>
            </div>

            <div>
              <h2 className="text-xl md:text-2xl font-bold text-stone-900 mb-1">
                {currentLesson.title}
              </h2>
              {currentLesson.japaneseTitle && (
                <p className="text-sm font-semibold text-stone-500 mb-2 font-mono">
                  {currentLesson.japaneseTitle}
                </p>
              )}
              <p className="text-sm text-stone-600 line-clamp-2 leading-relaxed">
                {currentLesson.description}
              </p>
            </div>

            {/* Key objectives */}
            <div className="space-y-2 pt-2">
              <p className="text-xs font-bold text-stone-700 uppercase tracking-wide">
                Mục tiêu trọng tâm:
              </p>
              <div className="space-y-1.5">
                {currentLesson.objectives.slice(0, 3).map((obj, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-stone-600">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#D93829] shrink-0 mt-1.5" />
                    <span>{obj}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-stone-100 mt-6 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-stone-500">
              <span className="font-semibold text-stone-700">Video bài giảng:</span>
              <span className="text-rose-600 bg-rose-50 px-2 py-0.5 rounded font-medium">
                {currentLesson.mainVideo.channelName} (Tiếng Việt)
              </span>
            </div>
            <Link
              href={`/lessons/${currentLesson.slug}`}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors shadow-xs"
            >
              <span>Vào học ngay</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Weekly Activity Bar Chart */}
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-xs flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="font-bold text-stone-900 text-base flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-[#D93829]" />
                Hoạt động 7 ngày qua
              </h3>
              <span className="text-xs text-stone-500">Phút học</span>
            </div>

            <p className="text-xs text-stone-500 mb-6">
              Thời gian học tập thực tế được ghi nhận trên trình duyệt của bạn.
            </p>

            {/* Chart Bars */}
            <div className="flex items-end justify-between h-40 pt-4 px-2">
              {weeklyActivity.map((day, idx) => {
                const heightPercent = Math.max(
                  8,
                  Math.round((day.minutes / maxWeeklyMinutes) * 100)
                );
                const isToday = idx === weeklyActivity.length - 1;
                return (
                  <div key={idx} className="flex flex-col items-center gap-2 w-8">
                    <span className="text-[10px] font-semibold text-stone-500">
                      {day.minutes > 0 ? `${day.minutes}` : ''}
                    </span>
                    <div className="w-full bg-stone-100 h-28 rounded-xl flex items-end overflow-hidden p-0.5">
                      <div
                        className={`w-full rounded-lg transition-all duration-500 ${
                          isToday ? 'bg-[#D93829]' : 'bg-stone-400 hover:bg-stone-500'
                        }`}
                        style={{ height: `${heightPercent}%` }}
                      />
                    </div>
                    <span
                      className={`text-xs font-medium ${
                        isToday ? 'font-bold text-[#D93829]' : 'text-stone-500'
                      }`}
                    >
                      {day.dayName}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="pt-4 border-t border-stone-100 text-center">
            <Link
              href="/progress"
              className="text-xs font-semibold text-[#D93829] hover:underline inline-flex items-center gap-1"
            >
              <span>Xem chi tiết lịch sử học tập &amp; Thống kê</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Access Learning Features */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="font-bold text-stone-900 text-lg">Lối tắt học nhanh</h3>
          <span className="text-xs text-stone-500">Tất cả tài nguyên học miễn phí</span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          <Link
            href="/hiragana"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#D93829] flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
              あ
            </div>
            <div className="font-semibold text-xs text-stone-800">Hiragana</div>
            <div className="text-[10px] text-stone-500">46 Chữ cái mềm</div>
          </Link>

          <Link
            href="/katakana"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition-transform">
              ア
            </div>
            <div className="font-semibold text-xs text-stone-800">Katakana</div>
            <div className="text-[10px] text-stone-500">46 Chữ cái cứng</div>
          </Link>

          <Link
            href="/vocabulary"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Layers className="w-5 h-5" />
            </div>
            <div className="font-semibold text-xs text-stone-800">Từ vựng</div>
            <div className="text-[10px] text-stone-500">Flashcard lật thẻ</div>
          </Link>

          <Link
            href="/grammar"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <BookMarked className="w-5 h-5" />
            </div>
            <div className="font-semibold text-xs text-stone-800">Ngữ pháp</div>
            <div className="text-[10px] text-stone-500">Minna 1-25 bài</div>
          </Link>

          <Link
            href="/listening"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center group-hover:scale-110 transition-transform">
              <Headphones className="w-5 h-5" />
            </div>
            <div className="font-semibold text-xs text-stone-800">Luyện nghe</div>
            <div className="text-[10px] text-stone-500">Hội thoại audio</div>
          </Link>

          <Link
            href="/mock-exam"
            className="p-4 rounded-2xl bg-white border border-[#E8E2D5] hover:border-[#D93829] hover:shadow-sm transition-all group text-center flex flex-col items-center justify-center gap-2"
          >
            <div className="w-10 h-10 rounded-xl bg-rose-50 text-[#D93829] flex items-center justify-center group-hover:scale-110 transition-transform">
              <Award className="w-5 h-5" />
            </div>
            <div className="font-semibold text-xs text-stone-800">Thi thử N5</div>
            <div className="text-[10px] text-stone-500">Tính điểm 180đ</div>
          </Link>
        </div>
      </div>

      {/* Recommended Today's Study Tasks */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-stone-900 text-lg">
            <Target className="w-5 h-5 text-[#D93829]" />
            <h3>Nhiệm vụ học tập đề xuất hôm nay</h3>
          </div>
          <span className="text-xs text-stone-500 font-medium">Lộ trình tuần 1 - 12</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-[#D93829]">Nhiệm vụ 1</span>
              <span className="text-stone-500">20 phút</span>
            </div>
            <h4 className="font-semibold text-stone-900 text-sm">Học bài mới theo lộ trình</h4>
            <p className="text-xs text-stone-600">
              Xem video bài giảng tiếng Việt và hoàn thành bài tập ngữ pháp của bài hiện tại.
            </p>
            <Link
              href={`/lessons/${currentLesson.slug}`}
              className="inline-block text-xs font-bold text-[#D93829] hover:underline pt-1"
            >
              Vào bài học →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-purple-700">Nhiệm vụ 2</span>
              <span className="text-stone-500">10 phút</span>
            </div>
            <h4 className="font-semibold text-stone-900 text-sm">Ôn tập từ vựng Flashcard</h4>
            <p className="text-xs text-stone-600">
              Lật thẻ từ vựng N5 đến hạn ôn tập hôm nay để củng cố trí nhớ dài hạn.
            </p>
            <Link
              href="/review"
              className="inline-block text-xs font-bold text-purple-700 hover:underline pt-1"
            >
              Ôn tập ngay ({vocabStats.due} từ) →
            </Link>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-emerald-700">Nhiệm vụ 3</span>
              <span className="text-stone-500">15 phút</span>
            </div>
            <h4 className="font-semibold text-stone-900 text-sm">Làm bài trắc nghiệm N5</h4>
            <p className="text-xs text-stone-600">
              Kiểm tra nhanh 10 câu hỏi ngữ pháp và từ vựng để đánh giá độ hiểu bài.
            </p>
            <Link
              href="/practice"
              className="inline-block text-xs font-bold text-emerald-700 hover:underline pt-1"
            >
              Làm trắc nghiệm →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

