export type LessonStatus = 'not_started' | 'in_progress' | 'completed';

export type VocabularyStatus = 'learning' | 'reviewing' | 'mastered';

export interface VideoResource {
  id: string;
  title: string;
  youtubeVideoId: string | null; // e.g. "pxPq71KI4JQ" or null if unverified
  sourceUrl: string;
  channelName: string;
  teachingLanguage: 'vi' | 'ja' | 'en';
  lessonIds: string[];
  category: 'alphabet' | 'grammar' | 'vocabulary' | 'kanji' | 'listening' | 'exam';
  isFree: boolean;
  verificationStatus: 'verified' | 'unverified' | 'supplementary';
  lastVerifiedAt?: string;
  searchQuery?: string; // Query used when searching YouTube if unverified
}

export interface VocabularyItem {
  id: string;
  word: string; // Kanji / Kana
  reading: string; // Hiragana / Katakana
  romaji?: string;
  meaning: string; // Tiếng Việt
  wordType: 'danh từ' | 'động từ' | 'tính từ -i' | 'tính từ -na' | 'phó từ' | 'liên từ' | 'cụm từ' | 'trợ từ';
  exampleSentence: string;
  exampleReading: string;
  exampleMeaning: string;
  topic: string;
  lessonId: string;
  jlptLevel: 'N5';
  audioUrl?: string;
}

export interface GrammarExample {
  japanese: string;
  kana: string;
  romaji?: string;
  vietnamese: string;
  type?: 'positive' | 'negative' | 'question';
}

export interface GrammarItem {
  id: string;
  pattern: string; // e.g. ~ は ~ です
  title: string;
  meaning: string; // Giải thích ngắn gọn
  vietnameseExplanation: string; // Giải thích chi tiết
  formationRules: string[]; // Quy tắc kết hợp
  whenToUse: string; // Khi nào sử dụng
  examples: GrammarExample[];
  commonMistakes: string[]; // Các lỗi thường gặp
  distinctions?: string; // Phân biệt với ngữ pháp khác
  lessonId: string;
  jlptLevel: 'N5';
}

export interface KanjiItem {
  id: string;
  character: string;
  hanViet: string; // Hán Việt: NHẬT, NGUYỆT, v.v.
  meaning: string; // Nghĩa tiếng Việt
  onyomi: string[];
  kunyomi: string[];
  strokeCount: number;
  strokeOrderSvg?: string;
  commonWords: {
    word: string;
    reading: string;
    meaning: string;
  }[];
  exampleSentences: {
    sentence: string;
    reading: string;
    meaning: string;
  }[];
  lessonId?: string;
  jlptLevel: 'N5';
}

export interface QuizQuestion {
  id: string;
  question: string;
  questionType: 'multiple_choice' | 'fill_in' | 'audio_choice' | 'kana_reading';
  options: string[];
  correctAnswerIndex: number;
  explanation: string;
  audioPrompt?: string;
}

export interface Quiz {
  id: string;
  title: string;
  description?: string;
  lessonId?: string;
  category: 'kana' | 'vocab' | 'grammar' | 'kanji' | 'listening' | 'reading' | 'mixed' | 'mock_exam' | 'exam';
  timeLimitMinutes?: number;
  questions: QuizQuestion[];
}

export interface QuizAttempt {
  id: string;
  quizId: string;
  quizTitle: string;
  category: string;
  score: number;
  totalQuestions: number;
  percentage: number;
  completedAt: string;
  userAnswers: {
    questionId: string;
    selectedIndex: number;
    isCorrect: boolean;
  }[];
}

export interface Lesson {
  id: string;
  slug: string;
  weekNumber: number;
  phaseId: number;
  lessonNumber: number; // e.g. 1
  title: string;
  japaneseTitle?: string;
  description: string;
  objectives: string[];
  estimatedDurationMinutes: number;
  prerequisites?: string[];
  mainVideo: VideoResource;
  supplementaryVideos: VideoResource[];
  vocabulary: VocabularyItem[];
  grammar: GrammarItem[];
  kanji?: KanjiItem[];
  practiceQuiz: Quiz;
}

export interface DailyStudyTask {
  id: string;
  day: number; // 1 to 7
  title: string;
  description: string;
  estimatedMinutes: number;
  targetRoute?: string;
}

export interface LearningWeek {
  weekNumber: number;
  phaseId: number;
  title: string;
  japaneseTitle?: string;
  objectives: string[];
  estimatedStudyHours: number;
  lessons: string[]; // lesson slugs or IDs
  dailyTasks: DailyStudyTask[];
  weeklyQuizId: string;
}

export interface LearningPhase {
  id: number;
  phaseNumber: number;
  title: string;
  description: string;
  weeks: number[]; // e.g. [1, 2]
  color: string;
}

export interface LessonProgress {
  lessonSlug: string;
  status: LessonStatus;
  completedAt?: string;
  videoWatchedSeconds?: number;
  bestQuizScore?: number;
}

export interface VocabularyReview {
  vocabId: string;
  status: VocabularyStatus;
  interval: number; // Days until next review
  repetition: number;
  easeFactor: number;
  nextReviewDate: string; // ISO string
  lastReviewedDate?: string;
}

export interface StudySession {
  date: string; // YYYY-MM-DD
  minutesSpent: number;
  lessonsStudied: string[];
  quizzesTaken: number;
  vocabReviewed: number;
}

export interface PersonalNote {
  id: string;
  lessonSlug: string;
  lessonTitle: string;
  content: string;
  createdAt: string;
  updatedAt: string;
}

export interface Bookmark {
  id: string;
  type: 'vocabulary' | 'grammar' | 'kanji' | 'lesson';
  itemId: string;
  title: string;
  subtitle?: string;
  route: string;
  savedAt: string;
}

export interface UserSettings {
  showRomaji: boolean;
  dailyGoalMinutes: number;
  audioAutoPlay: boolean;
  dailyReminderEnabled: boolean;
  userName: string;
}

