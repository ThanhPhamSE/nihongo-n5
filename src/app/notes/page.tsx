'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  FileText,
  Trash2,
  Edit3,
  Save,
  ArrowRight,
  BookOpen,
} from 'lucide-react';
import { getNotes, saveNote, deleteNote } from '@/lib/storage';
import { PersonalNote } from '@/types';

export default function NotesPage() {
  const [mounted, setMounted] = useState(false);
  const [notes, setNotes] = useState<PersonalNote[]>([]);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editContent, setEditContent] = useState('');

  useEffect(() => {
    setMounted(true);
    setNotes(getNotes());
  }, []);

  const handleDelete = (id: string) => {
    if (confirm('Bạn có chắc chắn muốn xóa ghi chú này không?')) {
      deleteNote(id);
      setNotes(getNotes());
    }
  };

  const handleStartEdit = (note: PersonalNote) => {
    setEditingId(note.id);
    setEditContent(note.content);
  };

  const handleSaveEdit = (note: PersonalNote) => {
    saveNote(note.lessonSlug, note.lessonTitle, editContent);
    setEditingId(null);
    setNotes(getNotes());
  };

  if (!mounted) {
    return <div className="p-8 max-w-4xl mx-auto animate-pulse h-96 bg-stone-200/60 rounded-3xl" />;
  }

  return (
    <div className="space-y-8 max-w-4xl mx-auto pb-24">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-50 text-amber-700 text-xs font-bold mb-2">
          <FileText className="w-3.5 h-3.5" />
          Sổ tay ghi chú cá nhân
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Ghi Chú Học Tập Của Tôi
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Lưu trữ toàn bộ các mẹo nhớ, từ mới và lưu ý quan trọng bạn đã viết trong từng bài học.
        </p>
      </div>

      {notes.length === 0 ? (
        <div className="bg-white rounded-3xl border border-[#E8E2D5] p-12 text-center shadow-xs space-y-4">
          <div className="w-16 h-16 rounded-3xl bg-stone-100 text-stone-400 flex items-center justify-center mx-auto">
            <FileText className="w-8 h-8" />
          </div>
          <div className="space-y-1">
            <h2 className="text-xl font-bold text-stone-900">Chưa có ghi chú nào</h2>
            <p className="text-xs text-stone-500 max-w-sm mx-auto">
              Khi học bất kỳ bài học nào, bạn có thể viết ghi chú ở cuối trang để lưu lại tại đây.
            </p>
          </div>
          <Link
            href="/lessons"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-stone-900 hover:bg-[#D93829] text-white text-xs font-semibold transition-colors shadow-xs"
          >
            <span>Khám phá các bài học</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          {notes.map((note) => {
            const isEditing = editingId === note.id;
            return (
              <div
                key={note.id}
                className="bg-white rounded-2xl border border-[#E8E2D5] p-5 shadow-xs space-y-3"
              >
                <div className="flex items-center justify-between border-b border-stone-100 pb-3">
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-4 h-4 text-[#D93829]" />
                    <Link
                      href={`/lessons/${note.lessonSlug}`}
                      className="font-bold text-sm text-stone-900 hover:text-[#D93829] transition-colors"
                    >
                      {note.lessonTitle}
                    </Link>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="text-[11px] text-stone-500 hidden sm:inline">
                      Cập nhật: {new Date(note.updatedAt).toLocaleDateString('vi-VN')}
                    </span>
                    <button
                      onClick={() => handleStartEdit(note)}
                      className="p-1.5 text-stone-500 hover:text-stone-800 rounded-lg hover:bg-stone-100"
                      title="Chỉnh sửa"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(note.id)}
                      className="p-1.5 text-stone-500 hover:text-rose-600 rounded-lg hover:bg-rose-50"
                      title="Xóa ghi chú"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {isEditing ? (
                  <div className="space-y-3 pt-1">
                    <textarea
                      rows={3}
                      value={editContent}
                      onChange={(e) => setEditContent(e.target.value)}
                      className="w-full p-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829]"
                    />
                    <div className="flex justify-end gap-2">
                      <button
                        onClick={() => setEditingId(null)}
                        className="px-3 py-1.5 rounded-lg border border-stone-200 text-stone-600 text-xs font-medium hover:bg-stone-50"
                      >
                        Hủy
                      </button>
                      <button
                        onClick={() => handleSaveEdit(note)}
                        className="px-4 py-1.5 rounded-lg bg-[#D93829] text-white text-xs font-semibold hover:bg-[#BC2D20] flex items-center gap-1"
                      >
                        <Save className="w-3.5 h-3.5" />
                        <span>Lưu lại</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="text-xs text-stone-700 whitespace-pre-line leading-relaxed">
                    {note.content}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

