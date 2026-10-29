'use client';

import React, { useState, useEffect } from 'react';
import {
  Award,
  Clock,
  Play,
  RotateCcw,
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Volume2,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { JLPT_N5_MOCK_EXAM, MockExamQuestion } from '@/data/mockExam';
import { speakJapanese } from '@/lib/utils';
import { saveQuizAttempt } from '@/lib/storage';

export default function MockExamPage() {
  const [examStarted, setExamStarted] = useState(false);
  const [examFinished, setExamFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(JLPT_N5_MOCK_EXAM.timeLimitMinutes * 60);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [results, setResults] = useState<{
    totalScore: number;
    vocabScore: number;
    grammarReadingScore: number;
    listeningScore: number;
    passed: boolean;
  } | null>(null);

  // Timer countdown
  useEffect(() => {
    if (!examStarted || examFinished) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          handleFinishExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [examStarted, examFinished]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const handleStartExam = () => {
    setExamStarted(true);
    setExamFinished(false);
    setSelectedAnswers({});
    setTimeLeft(JLPT_N5_MOCK_EXAM.timeLimitMinutes * 60);
    setResults(null);
  };

  const handleSelectAnswer = (qId: string, optIdx: number) => {
    if (examFinished) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [qId]: optIdx,
    }));
  };

  const handleFinishExam = () => {
    let vocabScore = 0;
    let grammarReadingScore = 0;
    let listeningScore = 0;

    const userAnswers = JLPT_N5_MOCK_EXAM.questions.map((q) => {
      const isCor = selectedAnswers[q.id] === q.correctIndex;
      if (isCor) {
        if (q.section === 'vocab') vocabScore += q.points;
        else if (q.section === 'grammar_reading') grammarReadingScore += q.points;
        else if (q.section === 'listening') listeningScore += q.points;
      }
      return {
        questionId: q.id,
        selectedIndex: selectedAnswers[q.id] ?? -1,
        isCorrect: isCor,
      };
    });

    const totalScore = vocabScore + grammarReadingScore + listeningScore;
    const passed =
      totalScore >= JLPT_N5_MOCK_EXAM.passThresholdPoints &&
      vocabScore >= JLPT_N5_MOCK_EXAM.sectionPassingPoints.vocab &&
      grammarReadingScore >= JLPT_N5_MOCK_EXAM.sectionPassingPoints.grammar_reading &&
      listeningScore >= JLPT_N5_MOCK_EXAM.sectionPassingPoints.listening;

    const res = {
      totalScore,
      vocabScore,
      grammarReadingScore,
      listeningScore,
      passed,
    };

    setResults(res);
    setExamFinished(true);

    saveQuizAttempt({
      quizId: JLPT_N5_MOCK_EXAM.id,
      quizTitle: JLPT_N5_MOCK_EXAM.title,
      category: 'mock_exam',
      score: totalScore,
      totalQuestions: JLPT_N5_MOCK_EXAM.totalPoints,
      percentage: Math.round((totalScore / JLPT_N5_MOCK_EXAM.totalPoints) * 100),
      userAnswers,
    });

    if (passed) {
      try {
        confetti({ particleCount: 120, spread: 80, origin: { y: 0.6 } });
      } catch {}
    }
  };

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-24">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-rose-50 text-[#D93829] text-xs font-bold mb-2">
          <Award className="w-3.5 h-3.5" />
          Mô phỏng thi JLPT chính thức
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Thi Thử JLPT N5 (Mock Exam)
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Đề thi mô phỏng định dạng 3 phần: Từ vựng/Kanji, Ngữ pháp/Đọc hiểu, Nghe hiểu theo thang điểm 180 chuẩn JLPT.
        </p>
      </div>

      {!examStarted ? (
        /* Exam Intro Card */
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8 shadow-xs space-y-6 text-center max-w-2xl mx-auto">
          <div className="w-16 h-16 rounded-2xl bg-rose-50 text-[#D93829] flex items-center justify-center mx-auto">
            <Award className="w-8 h-8" />
          </div>

          <div className="space-y-2">
            <h2 className="text-2xl font-bold text-stone-900">
              {JLPT_N5_MOCK_EXAM.title}
            </h2>
            <p className="text-xs text-stone-600 leading-relaxed max-w-lg mx-auto">
              {JLPT_N5_MOCK_EXAM.description}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3 py-2 text-center text-xs">
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <div className="text-stone-500">Thời gian</div>
              <div className="text-base font-bold text-stone-900">
                {JLPT_N5_MOCK_EXAM.timeLimitMinutes} phút
              </div>
            </div>
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <div className="text-stone-500">Tổng điểm</div>
              <div className="text-base font-bold text-stone-900">
                {JLPT_N5_MOCK_EXAM.totalPoints} điểm
              </div>
            </div>
            <div className="p-3 bg-stone-50 rounded-2xl border border-stone-200">
              <div className="text-stone-500">Điểm đỗ</div>
              <div className="text-base font-bold text-emerald-700">
                ≥ {JLPT_N5_MOCK_EXAM.passThresholdPoints} điểm
              </div>
            </div>
          </div>

          <div className="p-4 bg-amber-50/60 rounded-2xl border border-amber-200/80 text-left text-xs text-stone-700 space-y-1">
            <span className="font-bold text-amber-900">Quy tắc chuẩn JLPT:</span>
            <ul className="list-disc list-inside space-y-0.5 text-[11px]">
              <li>Điểm liệt: Mỗi phần bắt buộc phải đạt tối thiểu 19 điểm (trên 60 điểm).</li>
              <li>Tổng 3 phần phải đạt từ 80 điểm trở lên mới được công nhận đỗ (Pass).</li>
              <li>Đề thi tự động nộp khi hết thời gian đếm ngược.</li>
            </ul>
          </div>

          <button
            onClick={handleStartExam}
            className="px-8 py-3.5 rounded-2xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-bold text-sm shadow-md transition-all active:scale-95"
          >
            Bắt đầu làm bài thi ngay
          </button>
        </div>
      ) : !examFinished ? (
        /* Ongoing Exam View */
        <div className="space-y-6">
          {/* Sticky Timer Bar */}
          <div className="sticky top-16 md:top-4 z-20 bg-stone-900 text-white p-4 rounded-2xl shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-rose-400 animate-pulse" />
              <span className="text-xs text-stone-300">Thời gian còn lại:</span>
              <span className="font-mono text-xl font-bold text-white tracking-wider">
                {formatTime(timeLeft)}
              </span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-stone-300 hidden sm:inline">
                Đã chọn: {Object.keys(selectedAnswers).length} / {JLPT_N5_MOCK_EXAM.questions.length} câu
              </span>
              <button
                onClick={handleFinishExam}
                className="px-4 py-2 rounded-xl bg-[#D93829] hover:bg-[#BC2D20] text-white text-xs font-bold transition-colors"
              >
                Nộp bài thi
              </button>
            </div>
          </div>

          {/* Questions grouped */}
          <div className="space-y-6">
            {JLPT_N5_MOCK_EXAM.questions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              return (
                <div
                  key={q.id}
                  className="bg-white rounded-3xl border border-[#E8E2D5] p-6 shadow-xs space-y-4"
                >
                  <div className="flex items-start justify-between gap-3 text-xs">
                    <span className="font-bold text-stone-500 uppercase tracking-wide">
                      {q.mondai}
                    </span>
                    <span className="font-bold text-[#D93829] bg-rose-50 px-2.5 py-0.5 rounded-full shrink-0">
                      {q.points} điểm
                    </span>
                  </div>

                  {/* Audio prompt button if listening */}
                  {q.audioPrompt && (
                    <div className="p-3.5 rounded-2xl bg-purple-50/70 border border-purple-100 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs font-bold text-purple-900">
                        <Volume2 className="w-4 h-4 text-purple-700" />
                        <span>Âm thanh hội thoại bài nghe:</span>
                      </div>
                      <button
                        onClick={() => speakJapanese(q.audioPrompt || '')}
                        className="px-3 py-1.5 rounded-xl bg-purple-600 text-white text-xs font-semibold flex items-center gap-1 shadow-xs"
                      >
                        <Play className="w-3.5 h-3.5" />
                        <span>Phát âm thanh</span>
                      </button>
                    </div>
                  )}

                  <div className="font-jp text-base font-bold text-stone-900 whitespace-pre-line leading-relaxed">
                    <span className="text-[#D93829] mr-2">Câu {idx + 1}:</span>
                    {q.question}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {q.options.map((opt, oIdx) => {
                      const isChosen = userChoice === oIdx;
                      return (
                        <button
                          key={oIdx}
                          onClick={() => handleSelectAnswer(q.id, oIdx)}
                          className={`p-3.5 rounded-2xl border text-xs text-left transition-all font-medium ${
                            isChosen
                              ? 'border-[#D93829] bg-rose-50 text-[#D93829] font-bold shadow-xs'
                              : 'border-stone-200 hover:bg-stone-50 text-stone-800'
                          }`}
                        >
                          <span className="font-mono mr-2">{oIdx + 1}.</span>
                          {opt}
                        </button>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="text-center pt-4">
            <button
              onClick={handleFinishExam}
              className="px-8 py-3.5 rounded-2xl bg-[#D93829] hover:bg-[#BC2D20] text-white font-bold text-sm shadow-md transition-all active:scale-95"
            >
              Hoàn thành và Nộp bài thi
            </button>
          </div>
        </div>
      ) : (
        /* Results View */
        <div className="space-y-6">
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-8 text-center shadow-xs space-y-6">
            <div className="w-16 h-16 rounded-3xl flex items-center justify-center mx-auto shadow-md">
              {results?.passed ? (
                <CheckCircle2 className="w-12 h-12 text-emerald-500" />
              ) : (
                <XCircle className="w-12 h-12 text-rose-500" />
              )}
            </div>

            <div className="space-y-1">
              <span
                className={`text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider ${
                  results?.passed
                    ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                    : 'bg-rose-50 text-rose-700 border border-rose-200'
                }`}
              >
                {results?.passed ? '合格 - ĐÃ ĐẠT (PASS)' : '不合格 - CHƯA ĐẠT (FAIL)'}
              </span>
              <h2 className="text-3xl font-black text-stone-900 pt-2">
                Tổng điểm: {results?.totalScore} / 180
              </h2>
              <p className="text-xs text-stone-500">
                {results?.passed
                  ? 'Chúc mừng bạn! Bạn đã vượt qua điểm chuẩn N5 và không bị điểm liệt môn nào.'
                  : 'Rất tiếc bạn chưa vượt qua kỳ thi này. Hãy rà soát lại các câu sai bên dưới và tiếp tục ôn tập!'}
              </p>
            </div>

            {/* Breakdown per section */}
            <div className="grid grid-cols-3 gap-3 max-w-lg mx-auto text-xs">
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="text-stone-500 font-medium">Từ vựng &amp; Kanji</div>
                <div className="text-lg font-bold text-stone-900">
                  {results?.vocabScore} / 60
                </div>
                <div className="text-[10px] text-stone-500">
                  {results && results.vocabScore >= 19 ? '✓ Đạt' : '✗ Dính điểm liệt'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="text-stone-500 font-medium">Ngữ pháp &amp; Đọc</div>
                <div className="text-lg font-bold text-stone-900">
                  {results?.grammarReadingScore} / 60
                </div>
                <div className="text-[10px] text-stone-500">
                  {results && results.grammarReadingScore >= 19 ? '✓ Đạt' : '✗ Dính điểm liệt'}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-1">
                <div className="text-stone-500 font-medium">Nghe hiểu</div>
                <div className="text-lg font-bold text-stone-900">
                  {results?.listeningScore} / 60
                </div>
                <div className="text-[10px] text-stone-500">
                  {results && results.listeningScore >= 19 ? '✓ Đạt' : '✗ Dính điểm liệt'}
                </div>
              </div>
            </div>

            <div className="pt-2 flex items-center justify-center gap-3">
              <button
                onClick={handleStartExam}
                className="px-6 py-2.5 rounded-xl bg-[#D93829] text-white text-xs font-bold shadow-xs flex items-center gap-2"
              >
                <RotateCcw className="w-4 h-4" />
                <span>Thi lại đề thi này</span>
              </button>
            </div>
          </div>

          {/* Detailed Question Review */}
          <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 space-y-6 shadow-xs">
            <h3 className="font-bold text-base text-stone-900">
              Chi tiết câu trả lời &amp; Lời giải giải thích:
            </h3>

            {JLPT_N5_MOCK_EXAM.questions.map((q, idx) => {
              const userChoice = selectedAnswers[q.id];
              const isCor = userChoice === q.correctIndex;

              return (
                <div
                  key={q.id}
                  className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 space-y-2 text-xs"
                >
                  <div className="flex items-center justify-between font-bold">
                    <span className="text-stone-900 font-jp">
                      Câu {idx + 1}: {q.question}
                    </span>
                    <span
                      className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${
                        isCor
                          ? 'bg-emerald-100 text-emerald-800'
                          : 'bg-rose-100 text-rose-800'
                      }`}
                    >
                      {isCor ? `+${q.points} điểm` : '0 điểm'}
                    </span>
                  </div>

                  <div className="text-stone-600">
                    <div>
                      Lựa chọn của bạn:{' '}
                      <span className={isCor ? 'font-bold text-emerald-700' : 'line-through text-rose-700'}>
                        {userChoice !== undefined ? q.options[userChoice] : 'Chưa chọn'}
                      </span>
                    </div>
                    {!isCor && (
                      <div className="font-semibold text-emerald-700 mt-0.5">
                        Đáp án đúng: {q.options[q.correctIndex]}
                      </div>
                    )}
                  </div>

                  <div className="pt-2 border-t border-stone-200 text-stone-500">
                    <strong className="text-stone-700">Giải thích: </strong>
                    {q.explanation}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
