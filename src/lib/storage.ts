import {
  LessonProgress,
  LessonStatus,
  VocabularyReview,
  VocabularyStatus,
  StudySession,
  PersonalNote,
  Bookmark,
  QuizAttempt,
  UserSettings,
} from '@/types';

const STORAGE_KEYS = {
  LESSON_PROGRESS: 'nihongo_n5_lesson_progress',
  VOCAB_REVIEWS: 'nihongo_n5_vocab_reviews',
  STUDY_SESSIONS: 'nihongo_n5_study_sessions',
  PERSONAL_NOTES: 'nihongo_n5_personal_notes',
  BOOKMARKS: 'nihongo_n5_bookmarks',
  QUIZ_ATTEMPTS: 'nihongo_n5_quiz_attempts',
  USER_SETTINGS: 'nihongo_n5_user_settings',
  LAST_ACTIVE_DATE: 'nihongo_n5_last_active_date',
};

export const DEFAULT_SETTINGS: UserSettings = {
  showRomaji: true,
  dailyGoalMinutes: 20,
  audioAutoPlay: true,
  dailyReminderEnabled: false,
  userName: 'Học viên N5',
};

function safeGetItem<T>(key: string, defaultValue: T): T {
  if (typeof window === 'undefined') return defaultValue;
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : defaultValue;
  } catch {
    return defaultValue;
  }
}

function safeSetItem<T>(key: string, value: T): void {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (e) {
    console.error('Lỗi khi lưu localStorage:', e);
  }
}

// --- LESSON PROGRESS ---
export function getLessonProgress(): Record<string, LessonProgress> {
  return safeGetItem<Record<string, LessonProgress>>(STORAGE_KEYS.LESSON_PROGRESS, {});
}

export function saveLessonStatus(
  lessonSlug: string,
  status: LessonStatus,
  quizScore?: number
): void {
  const current = getLessonProgress();
  const existing = current[lessonSlug] || {
    lessonSlug,
    status: 'not_started',
  };

  current[lessonSlug] = {
    ...existing,
    status,
    completedAt: status === 'completed' ? new Date().toISOString() : existing.completedAt,
    bestQuizScore: quizScore !== undefined
      ? Math.max(quizScore, existing.bestQuizScore || 0)
      : existing.bestQuizScore,
  };

  safeSetItem(STORAGE_KEYS.LESSON_PROGRESS, current);
  recordActivityToday(status === 'completed' ? 10 : 5, lessonSlug);
}

// --- STUDY SESSIONS & STREAK ---
export function getStudySessions(): Record<string, StudySession> {
  return safeGetItem<Record<string, StudySession>>(STORAGE_KEYS.STUDY_SESSIONS, {});
}

export function recordActivityToday(
  minutesSpent: number = 5,
  lessonSlug?: string,
  isQuiz: boolean = false,
  vocabCount: number = 0
): void {
  const today = new Date().toISOString().split('T')[0];
  const sessions = getStudySessions();
  const current = sessions[today] || {
    date: today,
    minutesSpent: 0,
    lessonsStudied: [],
    quizzesTaken: 0,
    vocabReviewed: 0,
  };

  const updatedLessons = lessonSlug && !current.lessonsStudied.includes(lessonSlug)
    ? [...current.lessonsStudied, lessonSlug]
    : current.lessonsStudied;

  sessions[today] = {
    ...current,
    minutesSpent: current.minutesSpent + minutesSpent,
    lessonsStudied: updatedLessons,
    quizzesTaken: isQuiz ? current.quizzesTaken + 1 : current.quizzesTaken,
    vocabReviewed: current.vocabReviewed + vocabCount,
  };

  safeSetItem(STORAGE_KEYS.STUDY_SESSIONS, sessions);
}

export function calculateStreak(): { currentStreak: number; longestStreak: number } {
  const sessions = getStudySessions();
  const dates = Object.keys(sessions)
    .filter((d) => sessions[d].minutesSpent > 0)
    .sort();

  if (dates.length === 0) return { currentStreak: 0, longestStreak: 0 };

  const today = new Date().toISOString().split('T')[0];
  const yesterday = new Date(Date.now() - 86400000).toISOString().split('T')[0];

  let currentStreak = 0;
  let checkDate = dates.includes(today) ? new Date(today) : (dates.includes(yesterday) ? new Date(yesterday) : null);

  if (checkDate) {
    while (true) {
      const dateStr = checkDate.toISOString().split('T')[0];
      if (sessions[dateStr] && sessions[dateStr].minutesSpent > 0) {
        currentStreak++;
        checkDate = new Date(checkDate.getTime() - 86400000);
      } else {
        break;
      }
    }
  }

  // Calculate longest streak
  let longestStreak = 0;
  let tempStreak = 0;
  let prevTimestamp: number | null = null;

  for (const d of dates) {
    const currentTimestamp = new Date(d).getTime();
    if (prevTimestamp === null) {
      tempStreak = 1;
    } else {
      const diffDays = Math.round((currentTimestamp - prevTimestamp) / 86400000);
      if (diffDays === 1) {
        tempStreak++;
      } else if (diffDays > 1) {
        tempStreak = 1;
      }
    }
    prevTimestamp = currentTimestamp;
    if (tempStreak > longestStreak) {
      longestStreak = tempStreak;
    }
  }

  return { currentStreak, longestStreak };
}

// --- VOCABULARY SRS REVIEW ---
export function getVocabReviews(): Record<string, VocabularyReview> {
  return safeGetItem<Record<string, VocabularyReview>>(STORAGE_KEYS.VOCAB_REVIEWS, {});
}

export function recordVocabReview(vocabId: string, result: 'again' | 'hard' | 'good' | 'easy'): void {
  const reviews = getVocabReviews();
  const existing = reviews[vocabId] || {
    vocabId,
    status: 'learning' as VocabularyStatus,
    interval: 1,
    repetition: 0,
    easeFactor: 2.5,
    nextReviewDate: new Date().toISOString(),
  };

  let nextInterval = 1;
  let nextRep = existing.repetition;
  let nextEase = existing.easeFactor;
  let newStatus: VocabularyStatus = 'learning';

  if (result === 'again') {
    nextInterval = 1;
    nextRep = 0;
    nextEase = Math.max(1.3, existing.easeFactor - 0.2);
    newStatus = 'learning';
  } else if (result === 'hard') {
    nextInterval = Math.max(1, Math.round(existing.interval * 1.2));
    nextEase = Math.max(1.3, existing.easeFactor - 0.15);
    newStatus = 'learning';
  } else if (result === 'good') {
    if (existing.repetition === 0) nextInterval = 1;
    else if (existing.repetition === 1) nextInterval = 3;
    else nextInterval = Math.round(existing.interval * existing.easeFactor);
    nextRep += 1;
    newStatus = nextRep >= 3 ? 'mastered' : 'reviewing';
  } else if (result === 'easy') {
    if (existing.repetition === 0) nextInterval = 2;
    else if (existing.repetition === 1) nextInterval = 5;
    else nextInterval = Math.round(existing.interval * existing.easeFactor * 1.3);
    nextRep += 1;
    nextEase += 0.15;
    newStatus = 'mastered';
  }

  const nextDate = new Date();
  nextDate.setDate(nextDate.getDate() + nextInterval);

  reviews[vocabId] = {
    vocabId,
    status: newStatus,
    interval: nextInterval,
    repetition: nextRep,
    easeFactor: Number(nextEase.toFixed(2)),
    nextReviewDate: nextDate.toISOString(),
    lastReviewedDate: new Date().toISOString(),
  };

  safeSetItem(STORAGE_KEYS.VOCAB_REVIEWS, reviews);
  recordActivityToday(1, undefined, false, 1);
}

// --- PERSONAL NOTES ---
export function getNotes(): PersonalNote[] {
  return safeGetItem<PersonalNote[]>(STORAGE_KEYS.PERSONAL_NOTES, []);
}

export function saveNote(lessonSlug: string, lessonTitle: string, content: string): PersonalNote {
  const notes = getNotes();
  const existingIndex = notes.findIndex((n) => n.lessonSlug === lessonSlug);
  const now = new Date().toISOString();

  let updatedNote: PersonalNote;
  if (existingIndex >= 0) {
    updatedNote = {
      ...notes[existingIndex],
      content,
      updatedAt: now,
    };
    notes[existingIndex] = updatedNote;
  } else {
    updatedNote = {
      id: `note_${Date.now()}`,
      lessonSlug,
      lessonTitle,
      content,
      createdAt: now,
      updatedAt: now,
    };
    notes.unshift(updatedNote);
  }

  safeSetItem(STORAGE_KEYS.PERSONAL_NOTES, notes);
  return updatedNote;
}

export function deleteNote(id: string): void {
  const notes = getNotes().filter((n) => n.id !== id);
  safeSetItem(STORAGE_KEYS.PERSONAL_NOTES, notes);
}

// --- BOOKMARKS ---
export function getBookmarks(): Bookmark[] {
  return safeGetItem<Bookmark[]>(STORAGE_KEYS.BOOKMARKS, []);
}

export function isBookmarked(itemId: string): boolean {
  const bookmarks = getBookmarks();
  return bookmarks.some((b) => b.itemId === itemId);
}

export function toggleBookmark(bookmark: Omit<Bookmark, 'id' | 'savedAt'>): boolean {
  const bookmarks = getBookmarks();
  const existingIndex = bookmarks.findIndex((b) => b.itemId === bookmark.itemId);

  if (existingIndex >= 0) {
    bookmarks.splice(existingIndex, 1);
    safeSetItem(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return false; // Removed
  } else {
    bookmarks.unshift({
      ...bookmark,
      id: `bm_${Date.now()}`,
      savedAt: new Date().toISOString(),
    });
    safeSetItem(STORAGE_KEYS.BOOKMARKS, bookmarks);
    return true; // Added
  }
}

// --- QUIZ ATTEMPTS ---
export function getQuizAttempts(): QuizAttempt[] {
  return safeGetItem<QuizAttempt[]>(STORAGE_KEYS.QUIZ_ATTEMPTS, []);
}

export function saveQuizAttempt(attempt: Omit<QuizAttempt, 'id' | 'completedAt'>): QuizAttempt {
  const attempts = getQuizAttempts();
  const newAttempt: QuizAttempt = {
    ...attempt,
    id: `quiz_${Date.now()}`,
    completedAt: new Date().toISOString(),
  };

  attempts.unshift(newAttempt);
  safeSetItem(STORAGE_KEYS.QUIZ_ATTEMPTS, attempts);
  recordActivityToday(10, undefined, true);
  return newAttempt;
}

// --- USER SETTINGS ---
export function getUserSettings(): UserSettings {
  return safeGetItem<UserSettings>(STORAGE_KEYS.USER_SETTINGS, DEFAULT_SETTINGS);
}

export function saveUserSettings(settings: Partial<UserSettings>): UserSettings {
  const current = getUserSettings();
  const updated = { ...current, ...settings };
  safeSetItem(STORAGE_KEYS.USER_SETTINGS, updated);
  return updated;
}

// --- EXPORT, IMPORT, RESET ---
export function exportAllUserData(): string {
  if (typeof window === 'undefined') return '{}';
  const data: Record<string, unknown> = {};
  for (const key of Object.values(STORAGE_KEYS)) {
    const raw = localStorage.getItem(key);
    if (raw) {
      try {
        data[key] = JSON.parse(raw);
      } catch {
        data[key] = raw;
      }
    }
  }
  return JSON.stringify(data, null, 2);
}

export function importAllUserData(jsonString: string): boolean {
  if (typeof window === 'undefined') return false;
  try {
    const parsed = JSON.parse(jsonString);
    for (const [key, val] of Object.entries(parsed)) {
      if (typeof val === 'string') {
        localStorage.setItem(key, val);
      } else {
        localStorage.setItem(key, JSON.stringify(val));
      }
    }
    return true;
  } catch (e) {
    console.error('Lỗi khi import:', e);
    return false;
  }
}

export function resetAllUserData(): void {
  if (typeof window === 'undefined') return;
  for (const key of Object.values(STORAGE_KEYS)) {
    localStorage.removeItem(key);
  }
}

