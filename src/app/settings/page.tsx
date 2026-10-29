'use client';

import React, { useState, useEffect } from 'react';
import {
  Settings,
  Save,
  Download,
  Upload,
  Trash2,
  CheckCircle2,
  AlertTriangle,
  Info,
} from 'lucide-react';
import {
  getUserSettings,
  saveUserSettings,
  exportAllUserData,
  importAllUserData,
  resetAllUserData,
} from '@/lib/storage';
import { UserSettings } from '@/types';

export default function SettingsPage() {
  const [mounted, setMounted] = useState(false);
  const [settings, setSettings] = useState<UserSettings>({
    userName: 'Học viên N5',
    dailyGoalMinutes: 20,
    showRomaji: true,
    audioAutoPlay: true,
    dailyReminderEnabled: false,
  });
  const [savedFeedback, setSavedFeedback] = useState(false);
  const [importStatus, setImportStatus] = useState<string | null>(null);

  useEffect(() => {
    setMounted(true);
    setSettings(getUserSettings());
  }, []);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    saveUserSettings(settings);
    setSavedFeedback(true);
    setTimeout(() => setSavedFeedback(false), 2000);
  };

  const handleExportJSON = () => {
    const jsonStr = exportAllUserData();
    const blob = new Blob([jsonStr], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `nihongo_n5_backup_${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportJSON = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      const success = importAllUserData(content);
      if (success) {
        setImportStatus('Khôi phục dữ liệu thành công! Đang tải lại...');
        setTimeout(() => window.location.reload(), 1500);
      } else {
        setImportStatus('Lỗi: Tệp tin không đúng định dạng sao lưu.');
      }
    };
    reader.readAsText(file);
  };

  const handleResetData = () => {
    const confirm1 = confirm(
      'CẢNH BÁO: Thao tác này sẽ xóa toàn bộ tiến độ học, từ vựng, điểm thi thử và ghi chú của bạn. Bạn có chắc chắn không?'
    );
    if (!confirm1) return;

    const confirm2 = prompt('Gõ chữ "XÓA HẾT" để xác nhận đặt lại toàn bộ:');
    if (confirm2 === 'XÓA HẾT') {
      resetAllUserData();
      alert('Đã đặt lại dữ liệu thành công.');
      window.location.reload();
    }
  };

  if (!mounted) {
    return <div className="p-8 max-w-3xl mx-auto animate-pulse h-96 bg-stone-200/60 rounded-3xl" />;
  }

  return (
    <div className="space-y-8 max-w-3xl mx-auto pb-24">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-stone-100 text-stone-700 text-xs font-bold mb-2">
          <Settings className="w-3.5 h-3.5" />
          Cài đặt hệ thống
        </div>
        <h1 className="text-3xl font-extrabold text-stone-900 tracking-tight">
          Cài Đặt &amp; Quản Lý Dữ Liệu
        </h1>
        <p className="text-stone-600 text-sm mt-1">
          Tùy chỉnh mục tiêu học tập hàng ngày, hiển thị phiên âm Romaji và sao lưu tiến độ.
        </p>
      </div>

      {/* Info notice about localStorage */}
      <div className="p-4 rounded-2xl bg-amber-50/70 border border-amber-200/80 text-xs text-amber-900 flex items-start gap-3">
        <Info className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
        <div>
          <span className="font-bold">Lưu ý lưu trữ: </span>
          Dữ liệu học tập (tiến độ bài học, thẻ từ vựng SRS, kết quả thi thử) được lưu trữ an toàn trong bộ nhớ trình duyệt (localStorage) của thiết bị này. Hãy dùng tính năng <strong>Sao lưu dữ liệu</strong> bên dưới khi muốn chuyển sang máy tính khác.
        </div>
      </div>

      {/* Settings Form */}
      <form onSubmit={handleSave} className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-6">
        <div className="flex items-center justify-between border-b border-stone-100 pb-4">
          <h2 className="text-base font-bold text-stone-900">Tùy chọn học tập</h2>
          {savedFeedback && (
            <span className="text-xs text-emerald-600 font-bold flex items-center gap-1 animate-pulse">
              <CheckCircle2 className="w-4 h-4" />
              Đã lưu cài đặt!
            </span>
          )}
        </div>

        {/* User Name */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">Tên người học hiển thị:</label>
          <input
            type="text"
            value={settings.userName}
            onChange={(e) => setSettings({ ...settings, userName: e.target.value })}
            className="w-full p-3 rounded-xl border border-stone-200 text-xs focus:outline-none focus:border-[#D93829]"
            placeholder="Ví dụ: Nam, Lan, Tuấn..."
          />
        </div>

        {/* Daily Goal Minutes */}
        <div className="space-y-1.5">
          <label className="text-xs font-bold text-stone-700">
            Mục tiêu học mỗi ngày (phút):
          </label>
          <div className="grid grid-cols-4 gap-2">
            {[15, 20, 30, 45].map((mins) => (
              <button
                type="button"
                key={mins}
                onClick={() => setSettings({ ...settings, dailyGoalMinutes: mins })}
                className={`py-2.5 rounded-xl border text-xs font-bold transition-all ${
                  settings.dailyGoalMinutes === mins
                    ? 'border-[#D93829] bg-rose-50 text-[#D93829]'
                    : 'border-stone-200 hover:bg-stone-50 text-stone-700'
                }`}
              >
                {mins} phút / ngày
              </button>
            ))}
          </div>
        </div>

        {/* Toggle Show Romaji */}
        <div className="flex items-center justify-between pt-2 border-t border-stone-100">
          <div>
            <div className="text-xs font-bold text-stone-900">Mặc định hiển thị phiên âm Romaji</div>
            <div className="text-[11px] text-stone-500">
              Khuyến nghị tắt dần khi bạn đã nhớ thành thạo 2 bảng Hiragana &amp; Katakana.
            </div>
          </div>
          <input
            type="checkbox"
            checked={settings.showRomaji}
            onChange={(e) => setSettings({ ...settings, showRomaji: e.target.checked })}
            className="w-4 h-4 accent-[#D93829] cursor-pointer"
          />
        </div>

        <div className="flex justify-end pt-4">
          <button
            type="submit"
            className="px-6 py-2.5 rounded-xl bg-[#D93829] hover:bg-[#BC2D20] text-white text-xs font-bold transition-colors shadow-xs flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" />
            <span>Lưu cài đặt</span>
          </button>
        </div>
      </form>

      {/* Data Backup & Restore */}
      <div className="bg-white rounded-3xl border border-[#E8E2D5] p-6 md:p-8 shadow-xs space-y-5">
        <h2 className="text-base font-bold text-stone-900">Sao lưu &amp; Phục hồi dữ liệu</h2>

        {importStatus && (
          <div className="p-3 bg-stone-100 rounded-xl text-xs text-stone-800 font-semibold">
            {importStatus}
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-xs text-stone-900">Xuất file JSON sao lưu</h3>
            <p className="text-[11px] text-stone-500">
              Tải toàn bộ tiến độ, streak, bài học và từ vựng SRS về máy tính dưới dạng file JSON.
            </p>
            <button
              onClick={handleExportJSON}
              className="px-4 py-2 rounded-xl bg-stone-900 text-white text-xs font-semibold hover:bg-stone-800 flex items-center gap-1.5 transition-colors"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Tải file sao lưu (.json)</span>
            </button>
          </div>

          <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200 space-y-2">
            <h3 className="font-bold text-xs text-stone-900">Nhập file sao lưu</h3>
            <p className="text-[11px] text-stone-500">
              Khôi phục lại tiến độ học tập từ file JSON sao lưu trước đó.
            </p>
            <label className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl border border-stone-300 bg-white text-stone-800 text-xs font-semibold hover:bg-stone-50 cursor-pointer shadow-xs">
              <Upload className="w-3.5 h-3.5" />
              <span>Chọn file sao lưu</span>
              <input
                type="file"
                accept=".json"
                onChange={handleImportJSON}
                className="hidden"
              />
            </label>
          </div>
        </div>
      </div>

      {/* Danger Zone: Reset Data */}
      <div className="bg-rose-50/50 rounded-3xl border border-rose-200 p-6 md:p-8 shadow-xs space-y-3">
        <div className="flex items-center gap-2 text-rose-800 font-bold text-sm">
          <AlertTriangle className="w-4 h-4 text-rose-600" />
          <span>Vùng nguy hiểm: Đặt lại toàn bộ dữ liệu</span>
        </div>
        <p className="text-xs text-rose-700">
          Xóa vĩnh viễn toàn bộ tiến độ học tập, chuỗi streak, lịch sử ôn tập từ vựng và ghi chú trên trình duyệt hiện tại.
        </p>
        <button
          onClick={handleResetData}
          className="px-5 py-2.5 rounded-xl bg-rose-600 hover:bg-rose-700 text-white text-xs font-bold transition-colors flex items-center gap-1.5"
        >
          <Trash2 className="w-4 h-4" />
          <span>Đặt lại toàn bộ dữ liệu học tập</span>
        </button>
      </div>
    </div>
  );
}

