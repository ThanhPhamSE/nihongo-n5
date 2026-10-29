'use client';

import React, { useState } from 'react';
import {
  Headphones,
  Volume2,
  Play,
  RotateCcw,
  CheckCircle2,
  Eye,
  EyeOff,
  HelpCircle,
} from 'lucide-react';
import { LISTENING_LESSONS, ListeningDialogue } from '@/data/listening';
import { speakJapanese } from '@/lib/utils';
import { recordActivityToday } from '@/lib/storage';

export default function ListeningPage() {
  const [selectedLesson, setSelectedLesson] = useState<ListeningDialogue>(LISTENING_LESSONS[0]);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [submitted, setSubmitted] = useState(false);
  const [showTranscript, setShowTranscript] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlayAudio = async () => {
    setIsPlaying(true);
    await speakJapanese(selectedLesson.audioScriptJa);
    setIsPlaying(false);
  };

  const handleSelectOption = (idx: number) => {
    if (submitted) return;
    setSelectedOption(idx);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setSubmitted(true);
    setShowTranscript(true);
    recordActivityToday(5, undefined, true);
  };

  const handleReset = (lesson: ListeningDialogue) => {
    setSelectedLesson(lesson);
    setSelectedOption(null);
    setSubmitted(false);
    setShowTranscript(false);
  };

  const isCorrect = selectedOption === selectedLesson.correctIndex;

  return (
    <div className="space-y-8 max-w-5xl pb-20">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-2">
          <Headphones className="w-3.5 h-3.5" />
          Kỹ năng Nghe hiểu (Choukai)
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Luyện Nghe Hiểu Tiếng Nhật N5
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Hội thoại thực tế theo các tình huống giao tiếp thường ngày, rèn phản xạ bắt từ khóa và ngữ điệu chuẩn bản xứ.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: List of Listening Tasks */}
        <div className="lg:col-span-4 bg-white rounded-3xl border border-[#E8E2D5] p-5 shadow-xs space-y-3">
          <h3 className="font-bold text-sm text-stone-900">Danh sách bài nghe</h3>
          <div className="space-y-2">
            {LISTENING_LESSONS.map((lis, idx) => {
              const isSelected = selectedLesson.id === lis.id;
              return (
                <div
                  key={lis.id}
                  onClick={() => handleReset(lis)}
                  className={`p-3.5 rounded-2xl cursor-pointer transition-all border ${
                    isSelected
                      ? 'bg-purple-50 border-purple-400 shadow-xs'
                      : 'bg-stone-50/50 border-stone-200/80 hover:bg-stone-100'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-[11px] font-bold text-purple-700">
                      Bài {idx + 1}
                    </span>
                    <Headphones className="w-3.5 h-3.5 text-stone-500" />
                  </div>
                  <h4 className="text-xs font-bold text-stone-900 line-clamp-1">
                    {lis.title}
                  </h4>
                  <p className="text-[11px] text-stone-500 line-clamp-2 mt-0.5">
                    {lis.situation}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right Column: Audio Player & Question */}
        <div className="lg:col-span-8 bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-bold text-purple-700 bg-purple-50 px-3 py-1 rounded-full border border-purple-100">
              Luyện nghe N5
            </span>
            <h2 className="text-2xl font-extrabold text-stone-900 tracking-tight">
              {selectedLesson.title}
            </h2>
            <p className="text-xs text-stone-600 bg-stone-50 p-3.5 rounded-2xl border border-stone-200/80">
              📌 <strong>Tình huống:</strong> {selectedLesson.situation}
            </p>
          </div>

          {/* Audio Player Card */}
          <div className="bg-gradient-to-r from-purple-50 to-rose-50 p-6 rounded-3xl border border-purple-100 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <button
                onClick={handlePlayAudio}
                disabled={isPlaying}
                className="w-14 h-14 rounded-2xl bg-stone-900 hover:bg-[#D93829] text-white flex items-center justify-center transition-colors shadow-md disabled:opacity-50 shrink-0"
              >
                {isPlaying ? (
                  <RotateCcw className="w-6 h-6 animate-spin" />
                ) : (
                  <Play className="w-6 h-6 ml-0.5" />
                )}
              </button>
              <div>
                <div className="font-bold text-sm text-stone-900">
                  {isPlaying ? 'Đang phát âm thanh...' : 'Bấm để nghe đoạn hội thoại'}
                </div>
                <div className="text-xs text-stone-500">
                  Phát âm giọng Tokyo tự nhiên qua Web Speech
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowTranscript(!showTranscript)}
              className="px-4 py-2 rounded-xl bg-white border border-stone-200 text-stone-700 text-xs font-semibold hover:bg-stone-50 flex items-center gap-1.5 shadow-xs shrink-0"
            >
              {showTranscript ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
              <span>{showTranscript ? 'Ẩn lời thoại' : 'Xem lời thoại'}</span>
            </button>
          </div>

          {/* Transcript Revealed if toggled */}
          {showTranscript && (
            <div className="space-y-3 bg-stone-50 p-5 rounded-3xl border border-stone-200 text-xs">
              <div>
                <span className="font-bold text-stone-700">Lời thoại tiếng Nhật:</span>
                <p className="font-jp text-sm text-stone-900 mt-1 leading-relaxed">
                  {selectedLesson.audioScriptJa}
                </p>
              </div>
              <div>
                <span className="font-bold text-stone-700">Phiên âm Hiragana:</span>
                <p className="font-jp text-stone-500 mt-0.5">
                  {selectedLesson.audioScriptKana}
                </p>
              </div>
              <div className="pt-2 border-t border-stone-200">
                <span className="font-bold text-stone-700">Bản dịch tiếng Việt:</span>
                <p className="text-stone-700 mt-0.5 leading-relaxed">
                  {selectedLesson.audioScriptVi}
                </p>
              </div>
            </div>
          )}

          {/* Question Section */}
          <div className="space-y-4 pt-4 border-t border-stone-100">
            <h3 className="font-bold text-base text-stone-900">
              {selectedLesson.question}
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {selectedLesson.options.map((opt, idx) => {
                const isSelected = selectedOption === idx;
                let btnStyle = 'border-stone-200 hover:bg-stone-50 text-stone-800';

                if (submitted) {
                  if (idx === selectedLesson.correctIndex) {
                    btnStyle = 'border-emerald-500 bg-emerald-50 text-emerald-800 font-bold';
                  } else if (isSelected && idx !== selectedLesson.correctIndex) {
                    btnStyle = 'border-rose-400 bg-rose-50 text-rose-800 line-through';
                  }
                } else if (isSelected) {
                  btnStyle = 'border-purple-600 bg-purple-50 text-purple-900 font-bold';
                }

                return (
                  <button
                    key={idx}
                    disabled={submitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`p-4 rounded-2xl border text-xs text-left transition-all ${btnStyle}`}
                  >
                    {opt}
                  </button>
                );
              })}
            </div>

            {submitted && (
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 text-xs space-y-1">
                <div
                  className={`font-bold flex items-center gap-1.5 ${
                    isCorrect ? 'text-emerald-700' : 'text-rose-700'
                  }`}
                >
                  <CheckCircle2 className="w-4 h-4" />
                  <span>{isCorrect ? 'Chính xác! Làm rất tốt!' : 'Chưa chính xác.'}</span>
                </div>
                <p className="text-stone-600 leading-relaxed">
                  {selectedLesson.explanation}
                </p>
              </div>
            )}

            <div className="flex items-center justify-between pt-2">
              {!submitted ? (
                <button
                  onClick={handleSubmit}
                  disabled={selectedOption === null}
                  className="px-6 py-2.5 rounded-xl bg-stone-900 hover:bg-[#D93829] text-white font-semibold text-xs transition-colors disabled:opacity-50"
                >
                  Nộp đáp án
                </button>
              ) : (
                <button
                  onClick={() => handleReset(selectedLesson)}
                  className="px-4 py-2 rounded-xl bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold text-xs transition-colors"
                >
                  Làm lại bài này
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

