'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Map,
  BookOpen,
  Sparkles,
  Languages,
  Layers,
  BookMarked,
  PenTool,
  Headphones,
  Newspaper,
  CheckSquare,
  Award,
  RefreshCw,
  BarChart3,
  FileText,
  Settings,
  Flame,
  ChevronRight,
  Menu,
  X,
} from 'lucide-react';
import { calculateStreak, getVocabReviews, getStudySessions, getUserSettings } from '@/lib/storage';

interface NavItem {
  name: string;
  href: string;
  icon: React.ElementType;
  badge?: string | number;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

export default function Sidebar() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [streak, setStreak] = useState(0);
  const [dueVocabCount, setDueVocabCount] = useState(0);
  const [minutesToday, setMinutesToday] = useState(0);
  const [dailyGoal, setDailyGoal] = useState(20);

  useEffect(() => {
    const updateStats = () => {
      const { currentStreak } = calculateStreak();
      setStreak(currentStreak);

      const reviews = getVocabReviews();
      const now = new Date();
      const dueCount = Object.values(reviews).filter(
        (r) => new Date(r.nextReviewDate) <= now
      ).length;
      setDueVocabCount(dueCount);

      const today = new Date().toISOString().split('T')[0];
      const sessions = getStudySessions();
      setMinutesToday(sessions[today]?.minutesSpent || 0);

      const settings = getUserSettings();
      setDailyGoal(settings.dailyGoalMinutes || 20);
    };

    updateStats();
    // Listen for storage changes
    window.addEventListener('storage', updateStats);
    const interval = setInterval(updateStats, 10000);
    return () => {
      window.removeEventListener('storage', updateStats);
      clearInterval(interval);
    };
  }, []);

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const navSections: NavSection[] = [
    {
      title: 'Học tập cốt lõi',
      items: [
        { name: 'Bảng điều khiển', href: '/', icon: LayoutDashboard },
        { name: 'Lộ trình 12 tuần', href: '/roadmap', icon: Map },
        { name: 'Danh sách bài học', href: '/lessons', icon: BookOpen },
      ],
    },
    {
      title: 'Chữ cái & Từ vựng',
      items: [
        { name: 'Bảng Hiragana', href: '/hiragana', icon: Sparkles },
        { name: 'Bảng Katakana', href: '/katakana', icon: Languages },
        { name: 'Từ vựng & Flashcard', href: '/vocabulary', icon: Layers },
        { name: 'Chữ Hán Kanji N5', href: '/kanji', icon: PenTool },
      ],
    },
    {
      title: 'Ngữ pháp & Kỹ năng',
      items: [
        { name: 'Thư viện Ngữ pháp', href: '/grammar', icon: BookMarked },
        { name: 'Luyện Nghe hiểu', href: '/listening', icon: Headphones },
        { name: 'Luyện Đọc hiểu', href: '/reading', icon: Newspaper },
      ],
    },
    {
      title: 'Thực hành & Thi thử',
      items: [
        { name: 'Luyện tập trắc nghiệm', href: '/practice', icon: CheckSquare },
        { name: 'Thi thử JLPT N5', href: '/mock-exam', icon: Award },
        {
          name: 'Hàng chờ ôn tập (SRS)',
          href: '/review',
          icon: RefreshCw,
          badge: dueVocabCount > 0 ? dueVocabCount : undefined,
        },
      ],
    },
    {
      title: 'Cá nhân & Cài đặt',
      items: [
        { name: 'Tiến độ học tập', href: '/progress', icon: BarChart3 },
        { name: 'Sổ tay ghi chú', href: '/notes', icon: FileText },
        { name: 'Cài đặt học tập', href: '/settings', icon: Settings },
      ],
    },
  ];

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#FAF8F5] border-r border-[#E8E2D5] text-stone-800">
      {/* Brand / Logo */}
      <div className="p-5 border-b border-[#E8E2D5] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-[#D93829] text-white flex items-center justify-center font-bold text-xl shadow-sm transition-transform group-hover:scale-105">
            日
          </div>
          <div>
            <div className="font-bold text-lg text-stone-900 tracking-tight flex items-center gap-1.5">
              <span>Nihongo N5</span>
              <span className="text-[10px] px-1.5 py-0.5 rounded bg-rose-100 text-[#D93829] font-medium">
                Sơ cấp
              </span>
            </div>
            <p className="text-xs text-stone-500">Tiếng Nhật cho người Việt</p>
          </div>
        </Link>
        <button
          onClick={() => setMobileOpen(false)}
          className="md:hidden p-1.5 text-stone-500 hover:text-stone-800 hover:bg-stone-200/60 rounded-lg"
          aria-label="Đóng menu"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Mini Streak & Goal Widget in Sidebar */}
      <div className="p-4 mx-3 my-2 bg-white rounded-xl border border-[#E8E2D5] shadow-xs">
        <div className="flex items-center justify-between text-xs mb-2">
          <div className="flex items-center gap-1.5 font-medium text-amber-700">
            <Flame className="w-4 h-4 fill-amber-500 text-amber-500 animate-pulse" />
            <span>Streak: {streak} ngày</span>
          </div>
          <span className="text-stone-500">
            {minutesToday}/{dailyGoal} ph
          </span>
        </div>
        <div className="w-full bg-stone-100 h-2 rounded-full overflow-hidden">
          <div
            className="bg-[#D93829] h-full rounded-full transition-all duration-500"
            style={{ width: `${Math.min(100, Math.round((minutesToday / Math.max(1, dailyGoal)) * 100))}%` }}
          />
        </div>
      </div>

      {/* Navigation Sections */}
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-5">
        {navSections.map((section, idx) => (
          <div key={idx}>
            <p className="px-3 text-[11px] font-semibold text-stone-600 uppercase tracking-wider mb-1.5">
              {section.title}
            </p>
            <div className="space-y-0.5">
              {section.items.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== '/' && pathname.startsWith(item.href));
                const Icon = item.icon;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center justify-between px-3 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? 'bg-[#D93829] text-white shadow-xs font-semibold'
                        : 'text-stone-600 hover:text-stone-900 hover:bg-stone-200/50'
                    }`}
                  >
                    <div className="flex items-center gap-2.5">
                      <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-stone-500'}`} />
                      <span>{item.name}</span>
                    </div>
                    {item.badge !== undefined && (
                      <span
                        className={`text-[11px] px-1.5 py-0.2 rounded-full font-bold ${
                          isActive
                            ? 'bg-white text-[#D93829]'
                            : 'bg-rose-100 text-[#D93829]'
                        }`}
                      >
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Footer Info */}
      <div className="p-3 border-t border-[#E8E2D5] text-[11px] text-stone-500 flex items-center justify-between">
        <span>Phiên bản 1.0 (N5 MVP)</span>
        <span className="text-stone-500">JLPT 日本語</span>
      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Header */}
      <header className="md:hidden fixed top-0 left-0 right-0 h-14 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E8E2D5] px-4 flex items-center justify-between z-30">
        <button
          onClick={() => setMobileOpen(true)}
          className="p-2 -ml-2 text-stone-700 hover:bg-stone-200/60 rounded-lg"
          aria-label="Mở menu"
        >
          <Menu className="w-5 h-5" />
        </button>
        <Link href="/" className="flex items-center gap-2 font-bold text-stone-900">
          <div className="w-7 h-7 rounded-lg bg-[#D93829] text-white flex items-center justify-center font-bold text-sm">
            日
          </div>
          <span>Nihongo N5</span>
        </Link>
        <div className="flex items-center gap-1 text-xs font-semibold text-amber-700 bg-amber-50 px-2 py-1 rounded-full border border-amber-200/60">
          <Flame className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
          <span>{streak}d</span>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div
        className={`md:hidden fixed inset-y-0 left-0 w-72 z-50 transform transition-transform duration-300 ease-in-out ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {sidebarContent}
      </div>

      {/* Desktop Persistent Sidebar */}
      <aside className="hidden md:block w-64 h-screen sticky top-0 shrink-0 z-20">
        {sidebarContent}
      </aside>
    </>
  );
}

