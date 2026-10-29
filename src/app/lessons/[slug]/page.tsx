'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  ExternalLink,
  HelpCircle,
  Play,
  RotateCcw,
  Save,
  Search,
  Sparkles,
  Volume2,
  Bookmark,
  Share2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { LESSONS } from '@/data/lessons';
import { speakJapanese } from '@/lib/utils';
import {
  getLessonProgress,
  saveLessonStatus,
  getNotes,
  saveNote,
  isBookmarked,
  toggleBookmark,
} from '@/lib/storage';
import { Lesson, LessonProgress } from '@/types';

export default function LessonDetailPage() {
  const params = useParams();
  const router = useRouter();
  const slug = params?.slug as string;

  const lesson = LESSONS.find((l) => l.slug === slug);
  const currentIndex = LESSONS.findIndex((l) => l.slug === slug);
  const prevLesson = currentIndex > 0 ? LESSONS[currentIndex - 1] : null;
  const nextLesson = currentIndex < LESSONS.length - 1 ? LESSONS[currentIndex + 1] : null;

  const [mounted, setMounted] = useState(false);
  const [progress, setProgress] = useState<LessonProgress | null>(null);
  const [userNote, setUserNote] = useState('');
  const [noteSavedFeedback, setNoteSavedFeedback] = useState(false);
  const [bookmarked, setBookmarked] = useState(false);

  // Interactive Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [submittedQuiz, setSubmittedQuiz] = useState(false);
  const [quizScore, setQuizScore] = useState(0);

  useEffect(() => {
    setMounted(true);
    if (!lesson) return;

    // Load progress
    const allProgress = getLessonProgress();
    const cur = allProgress[slug] || { lessonSlug: slug, status: 'in_progress' };
    setProgress(cur);

    // If not started, set to in_progress
    if (!allProgress[slug] || allProgress[slug].status === 'not_started') {
      saveLessonStatus(slug, 'in_progress');
    }

    // Load personal note
    const notes = getNotes();
    const existing = notes.find((n) => n.lessonSlug === slug);
    if (existing) {
      setUserNote(existing.content);
    }

    // Bookmark
    setBookmarked(isBookmarked(lesson.id));
  }, [slug, lesson]);

  if (!mounted || !lesson) {
    if (mounted && !lesson) {
      return (
        <div className="p-8 text-center space-y-4">
          <p className="text-stone-600">Không tìm thấy bài học này.</p>
          <Link href="/lessons" className="text-sm font-bold text-[#D93829] underline">
            Quay lại danh sách bài học
          </Link>
        </div>
      );
    }
    return (
      <div className="space-y-6 max-w-4xl animate-pulse">
        <div className="h-6 w-48 bg-stone-200 rounded" />
        <div className="h-12 w-96 bg-stone-200 rounded" />
        <div className="h-96 bg-stone-200 rounded-3xl" />
      </div>
    );
  }

  const isCompleted = progress?.status === 'completed';

  const handleMarkComplete = () => {
    saveLessonStatus(slug, 'completed', quizScore);
    setProgress({
      lessonSlug: slug,
      status: 'completed',
      completedAt: new Date().toISOString(),
      bestQuizScore: quizScore,
    });

    try {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    } catch {
      // Ignore if confetti not supported
    }
  };

  const handleSaveNote = () => {
    saveNote(slug, lesson.title, userNote);
    setNoteSavedFeedback(true);
    setTimeout(() => setNoteSavedFeedback(false), 2000);
  };

  const handleToggleBookmark = () => {
    const newState = toggleBookmark({
      type: 'lesson',
      itemId: lesson.id,
      title: lesson.title,
      subtitle: `Tuần ${lesson.weekNumber} • Bài ${lesson.lessonNumber}`,
      route: `/lessons/${lesson.slug}`,
    });
    setBookmarked(newState);
  };

  const handleSelectQuizAnswer = (qId: string, optIndex: number) => {
    if (submittedQuiz) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optIndex,
    }));
  };

  const handleSubmitQuiz = () => {
    let correct = 0;
    lesson.practiceQuiz.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correct++;
      }
    });
    setQuizScore(correct);
    setSubmittedQuiz(true);

    if (correct === lesson.practiceQuiz.questions.length) {
      try {
        confetti({
          particleCount: 60,
          spread: 60,
          origin: { y: 0.7 },
        });
      } catch {}
    }
  };

  const handleResetQuiz = () => {
    setSelectedAnswers({});
    setSubmittedQuiz(false);
    setQuizScore(0);
  };

  const youtubeSearchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(
    lesson.mainVideo.searchQuery || `${lesson.title} tiếng Nhật`
  )}`;

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-20">
      {/* Breadcrumb & Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-stone-500">
        <div className="flex items-center gap-2">
          <Link href="/" className="hover:text-stone-900 transition-colors">
            Trang chủ
          </Link>
          <span>/</span>
          <Link href="/roadmap" className="hover:text-stone-900 transition-colors">
            Lộ trình tuần {lesson.weekNumber}
          </Link>
          <span>/</span>
          <span className="font-semibold text-stone-800">Bài {lesson.lessonNumber}</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handleToggleBookmark}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-xs font-medium transition-colors ${
              bookmarked
                ? 'bg-rose-50 text-[#D93829] border-rose-200'
                : 'bg-white text-stone-600 border-stone-200 hover:bg-stone-50'
            }`}
          >
            <Bookmark className={`w-3.5 h-3.5 ${bookmarked ? 'fill-[#D93829]' : ''}`} />
            <span>{bookmarked ? 'Đã lưu' : 'Lưu bài học'}</span>
          </button>
        </div>
      </div>

      {/* Lesson Title Card */}
      <div className="space-y-3 bg-white p-6 md:p-8 rounded-3xl border border-[#E8E2D5] shadow-xs">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <span className="text-xs font-bold text-[#D93829] bg-rose-50 px-3 py-1 rounded-full border border-rose-100">
            Tuần {lesson.weekNumber} • Bài {lesson.lessonNumber}
          </span>
          <div className="flex items-center gap-3 text-xs text-stone-500">
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              ~{lesson.estimatedDurationMinutes} phút
            </span>
            {isCompleted && (
              <span className="inline-flex items-center gap-1 font-semibold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full border border-emerald-200">
                <CheckCircle2 className="w-3.5 h-3.5" />
                Đã học
              </span>
            )}
          </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-extrabold text-stone-900 tracking-tight">
          {lesson.title}
        </h1>
        {lesson.japaneseTitle && (
          <p className="text-base font-semibold text-stone-500 font-mono">
            {lesson.japaneseTitle}
          </p>
        )}
        <p className="text-stone-600 text-sm leading-relaxed">{lesson.description}</p>

        {/* Objectives Box */}
        <div className="bg-stone-50 p-4 rounded-2xl border border-stone-200/80 space-y-2 mt-4">
          <h2 className="text-xs font-bold text-stone-700 uppercase tracking-wide">
            Mục tiêu bài học cần nắm chắc:
          </h2>
          <ul className="space-y-1.5 text-xs text-stone-600">
            {lesson.objectives.map((obj, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#D93829] shrink-0 mt-1.5" />
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Video Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
            <Play className="w-4 h-4 text-[#D93829]" />
            Video bài giảng tiếng Việt
          </h2>
          <span className="text-xs text-stone-500 font-medium">
            Kênh: {lesson.mainVideo.channelName}
          </span>
        </div>

        {lesson.mainVideo.youtubeVideoId ? (
          /* Verified Embedded Player */
          <div className="bg-black rounded-3xl overflow-hidden shadow-lg aspect-video w-full relative">
            <iframe
              src={`https://www.youtube.com/embed/${lesson.mainVideo.youtubeVideoId}`}
              title={lesson.mainVideo.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              className="w-full h-full border-0"
            />
          </div>
        ) : (
          /* Graceful Unverified YouTube Search Fallback */
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 text-center space-y-4 shadow-xs">
            <div className="w-14 h-14 rounded-2xl bg-rose-50 text-[#D93829] flex items-center justify-center mx-auto">
              <Play className="w-7 h-7" />
            </div>
            <div className="space-y-1 max-w-md mx-auto">
              <h3 className="font-bold text-base text-stone-900">
                {lesson.mainVideo.title}
              </h3>
              <p className="text-xs text-stone-500">
                Kênh đề xuất: <span className="font-semibold text-stone-700">{lesson.mainVideo.channelName}</span>. Nhấp vào nút bên dưới để mở ngay video bài giảng chuẩn tiếng Việt trên YouTube.
              </p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href={youtubeSearchUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-semibold text-xs transition-colors shadow-sm"
              >
                <Search className="w-4 h-4" />
                <span>Tìm bài giảng trên YouTube ({lesson.mainVideo.channelName})</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              {lesson.mainVideo.sourceUrl && (
                <a
                  href={lesson.mainVideo.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-stone-100 hover:bg-stone-200 text-stone-800 font-semibold text-xs transition-colors"
                >
                  <span>Mở trang giáo trình nguồn</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Supplementary Videos if any */}
        {lesson.supplementaryVideos.length > 0 && (
          <div className="bg-stone-50 rounded-2xl p-4 border border-stone-200 space-y-2">
            <div className="text-xs font-bold text-stone-700">Video bổ trợ đã xác minh:</div>
            {lesson.supplementaryVideos.map((sv) => (
              <div key={sv.id} className="flex items-center justify-between text-xs">
                <span className="font-medium text-stone-800">{sv.title} ({sv.channelName})</span>
                <a
                  href={`https://www.youtube.com/watch?v=${sv.youtubeVideoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D93829] hover:underline flex items-center gap-1 font-semibold"
                >
                  Xem trên YouTube <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Vocabulary Section */}
      {lesson.vocabulary.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#D93829]" />
              Từ vựng trọng tâm ({lesson.vocabulary.length} từ)
            </h2>
            <Link
              href="/vocabulary"
              className="text-xs font-semibold text-[#D93829] hover:underline"
            >
              Học Flashcard toàn bộ →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {lesson.vocabulary.map((vocab) => (
              <div
                key={vocab.id}
                className="p-4 rounded-2xl bg-white border border-[#E8E2D5] space-y-2"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="text-xl font-bold text-stone-900 font-jp flex items-center gap-2">
                      <span>{vocab.word}</span>
                      <button
                        onClick={() => speakJapanese(vocab.reading || vocab.word)}
                        className="p-1 rounded-full text-stone-500 hover:text-[#D93829] hover:bg-rose-50 transition-colors"
                        title="Nghe phát âm chuẩn"
                      >
                        <Volume2 className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="text-xs text-stone-500 font-mono">
                      {vocab.reading} {vocab.romaji ? `(${vocab.romaji})` : ''}
                    </div>
                  </div>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-stone-100 text-stone-600 font-medium">
                    {vocab.wordType}
                  </span>
                </div>

                <div className="text-sm font-semibold text-stone-800">
                  {vocab.meaning}
                </div>

                {vocab.exampleSentence && (
                  <div className="pt-2 border-t border-stone-100 text-xs space-y-0.5 text-stone-600">
                    <div className="font-jp">{vocab.exampleSentence}</div>
                    <div className="text-[11px] text-stone-500 italic">
                      {vocab.exampleMeaning}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Grammar Section */}
      {lesson.grammar.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#D93829]" />
              Giải thích ngữ pháp chi tiết
            </h2>
          </div>

          <div className="space-y-4">
            {lesson.grammar.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-2xl border border-[#E8E2D5] p-5 md:p-6 space-y-4"
              >
                <div className="space-y-1">
                  <div className="inline-block px-3 py-1 rounded-lg bg-rose-50 text-[#D93829] font-mono font-bold text-sm">
                    {item.pattern}
                  </div>
                  <h3 className="text-base font-bold text-stone-900">{item.title}</h3>
                  <p className="text-xs text-stone-600 leading-relaxed whitespace-pre-line">
                    {item.vietnameseExplanation}
                  </p>
                </div>

                {/* Formation */}
                <div className="bg-stone-50 p-3.5 rounded-xl border border-stone-200/80 space-y-1 text-xs">
                  <div className="font-bold text-stone-700">Quy tắc kết hợp:</div>
                  <div className="font-mono text-stone-800 space-y-1">
                    {item.formationRules.map((rule, rIdx) => (
                      <div key={rIdx}>{rule}</div>
                    ))}
                  </div>
                </div>

                {/* Examples */}
                <div className="space-y-2">
                  <div className="text-xs font-bold text-stone-700">Ví dụ minh họa:</div>
                  <div className="space-y-2">
                    {item.examples.map((ex, eIdx) => (
                      <div
                        key={eIdx}
                        className="p-3 rounded-xl bg-amber-50/50 border border-amber-100 text-xs space-y-1"
                      >
                        <div className="flex items-center justify-between font-jp text-stone-900 font-medium">
                          <span>{ex.japanese}</span>
                          <button
                            onClick={() => speakJapanese(ex.japanese)}
                            className="p-1 text-stone-500 hover:text-[#D93829]"
                          >
                            <Volume2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="text-stone-500 text-[11px] font-mono">{ex.kana}</div>
                        <div className="text-stone-700 font-semibold">{ex.vietnamese}</div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Common Mistakes */}
                {item.commonMistakes.length > 0 && (
                  <div className="bg-rose-50/50 p-3.5 rounded-xl border border-rose-200 space-y-1 text-xs text-rose-900">
                    <div className="font-bold text-rose-700">Lưu ý &amp; Lỗi thường gặp:</div>
                    <ul className="list-disc list-inside space-y-0.5">
                      {item.commonMistakes.map((mis, mIdx) => (
                        <li key={mIdx}>{mis}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Interactive Practice Quiz */}
      {lesson.practiceQuiz && lesson.practiceQuiz.questions.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-stone-900 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#D93829]" />
              Bài tập tương tác cuối bài
            </h2>
            {submittedQuiz && (
              <span className="text-xs font-bold px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 border border-emerald-200">
                Đạt {quizScore} / {lesson.practiceQuiz.questions.length} câu đúng
              </span>
            )}
          </div>

          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 space-y-6">
            {lesson.practiceQuiz.questions.map((q, idx) => {
              const selected = selectedAnswers[q.id];
              return (
                <div key={q.id} className="space-y-3 pb-4 border-b border-stone-100 last:border-b-0">
                  <div className="font-bold text-sm text-stone-900 flex items-start gap-2">
                    <span className="w-6 h-6 rounded-full bg-stone-100 flex items-center justify-center text-xs shrink-0 mt-0.5">
                      {idx + 1}
                    </span>
                    <span>{q.question}</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = selected === oIdx;
                      let btnStyle = 'border-stone-200 hover:bg-stone-50 text-stone-700';

                      if (submittedQuiz) {
                        if (oIdx === q.correctAnswerIndex) {
                          btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                        } else if (isChosen && oIdx !== q.correctAnswerIndex) {
                          btnStyle = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                        }
                      } else if (isChosen) {
                        btnStyle = 'border-[#D93829] bg-rose-50 text-[#D93829] font-bold';
                      }

                      return (
                        <button
                          key={oIdx}
                          disabled={submittedQuiz}
                          onClick={() => handleSelectQuizAnswer(q.id, oIdx)}
                          className={`p-3 rounded-xl border text-xs text-left transition-all ${btnStyle}`}
                        >
                          {opt}
                        </button>
                      );
                    })}
                  </div>

                  {/* Explanation after submission */}
                  {submittedQuiz && (
                    <div className="pl-8 text-xs text-stone-600 bg-stone-50 p-3 rounded-xl border border-stone-200">
                      <span className="font-bold text-stone-700">Giải thích: </span>
                      {q.explanation}
                    </div>
                  )}
                </div>
              );
            })}

            <div className="flex items-center justify-between pt-2">
              {!submittedQuiz ? (
                <button
                  onClick={handleSubmitQuiz}
                  disabled={
                    Object.keys(selectedAnswers).length <
                    lesson.practiceQuiz.questions.length
                  }
                  className="px-6 py-2.5 rounded-xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-semibold text-xs transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-xs"
                >
                  Nộp bài kiểm tra
                </button>
              ) : (
                <button
                  onClick={handleResetQuiz}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Làm lại bài này</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Personal Notes Area */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-stone-900 flex items-center gap-2">
            <Save className="w-4 h-4 text-stone-500" />
            Ghi chú cá nhân cho bài này
          </h2>
          {noteSavedFeedback && (
            <span className="text-xs text-emerald-600 font-semibold animate-pulse">
              Đã lưu thành công!
            </span>
          )}
        </div>
        <textarea
          rows={3}
          value={userNote}
          onChange={(e) => setUserNote(e.target.value)}
          placeholder="Ghi lại các mẹo nhớ, từ mới hoặc lưu ý ngữ pháp của riêng bạn..."
          className="w-full p-3.5 rounded-2xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829] focus:ring-2 focus:ring-rose-100"
        />
        <div className="flex justify-end">
          <button
            onClick={handleSaveNote}
            className="px-4 py-2 rounded-xl bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-colors"
          >
            Lưu ghi chú
          </button>
        </div>
      </div>

      {/* Bottom Bar: Completion & Prev/Next Navigation */}
      <div className="bg-[#FAF8F5] p-6 rounded-3xl border border-[#E8E2D5] space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h3 className="font-bold text-base text-stone-900">
              {isCompleted ? 'Bạn đã hoàn thành bài học này! 🎉' : 'Hoàn thành bài học'}
            </h3>
            <p className="text-xs text-stone-500">
              Đánh dấu để lưu tiến độ vào lộ trình và nhận điểm thưởng học tập.
            </p>
          </div>
          <button
            onClick={handleMarkComplete}
            className={`px-6 py-3 rounded-2xl font-bold text-sm shadow-md transition-all active:scale-95 ${
              isCompleted
                ? 'bg-emerald-600 text-white hover:bg-emerald-700'
                : 'bg-[#D93829] hover:bg-[#BC2D20] text-white'
            }`}
          >
            {isCompleted ? '✓ Đã đánh dấu hoàn thành' : 'Đánh dấu đã hoàn thành'}
          </button>
        </div>

        <div className="pt-4 border-t border-[#E8E2D5] flex items-center justify-between text-xs">
          {prevLesson ? (
            <Link
              href={`/lessons/${prevLesson.slug}`}
              className="inline-flex items-center gap-1.5 font-semibold text-stone-700 hover:text-[#D93829] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Bài trước: {prevLesson.title}</span>
            </Link>
          ) : (
            <span />
          )}

          {nextLesson ? (
            <Link
              href={`/lessons/${nextLesson.slug}`}
              className="inline-flex items-center gap-1.5 font-semibold text-stone-700 hover:text-[#D93829] transition-colors"
            >
              <span>Bài tiếp theo: {nextLesson.title}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          ) : (
            <Link
              href="/mock-exam"
              className="inline-flex items-center gap-1.5 font-bold text-[#D93829]"
            >
              <span>Thi thử JLPT N5</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}

