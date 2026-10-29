import type { Metadata } from 'next';
import './globals.css';
import Sidebar from '@/components/Sidebar';

export const metadata: Metadata = {
  title: 'Nihongo N5 - Tự Học Tiếng Nhật Cho Người Mới Bắt Đầu',
  description: 'Nền tảng tự học tiếng Nhật sơ cấp N5 dành riêng cho người Việt Nam: Lộ trình 12 tuần bài bản, video bài giảng YouTube tiếng Việt, từ vựng Flashcard, ngữ pháp, Kanji và đề thi thử JLPT N5.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <body className="bg-[#FDFBF7] text-stone-900 antialiased min-h-screen">
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1 w-full max-w-7xl mx-auto pt-14 md:pt-0 overflow-x-hidden min-h-screen flex flex-col">
            <div className="flex-1 p-4 md:p-8 lg:p-10">
              {children}
            </div>
            <footer className="mt-auto border-t border-[#E8E2D5] py-6 px-4 md:px-8 text-center text-xs text-stone-500 bg-[#FAF8F5]">
              <div className="flex flex-col md:flex-row items-center justify-between gap-2 max-w-5xl mx-auto">
                <p>© 2026 Nihongo N5 - Dự án học tiếng Nhật sơ cấp cho người Việt Nam bắt đầu từ số 0.</p>
                <p className="text-stone-500">Giáo trình tham khảo Minna no Nihongo I &amp; JLPT N5 Official Guidelines.</p>
              </div>
            </footer>
          </main>
        </div>
      </body>
    </html>
  );
}

