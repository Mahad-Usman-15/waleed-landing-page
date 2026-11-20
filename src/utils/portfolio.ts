export function formatTimecode(totalSeconds: number): string {
  const clamped = Math.max(0, Math.floor(totalSeconds));
  const minutes = Math.floor(clamped / 60);
  const seconds = clamped % 60;
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
}

export function getProgressPercent(currentSeconds: number, totalSeconds: number): number {
  if (totalSeconds <= 0) {
    return 0;
  }
  const ratio = (currentSeconds / totalSeconds) * 100;
  return Math.min(100, Math.max(0, Math.round(ratio * 100) / 100));
}

export function clampSeconds(value: number, durationSeconds: number): number {
  if (durationSeconds <= 0) {
    return 0;
  }
  return Math.min(durationSeconds, Math.max(0, Math.round(value)));
}

export const WHATSAPP_BASE_URL = 'https://wa.me/923358150666';

export function buildWhatsAppUrl(message: string): string {
  return `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(message)}`;
}

export const WHATSAPP_MESSAGES = {
  header: 'Hi Waleed, I found your portfolio and I would like to discuss a video project.',
  hero: 'Hi Waleed, I saw your work and I want to start a video or motion project with you. Can we talk?',
  bannerAndFooter: 'Hi Waleed, I would like to book a project. Here is what I need: ',
  faq: 'Hi Waleed, I have a question about starting a video project.',
  caseStudy: (projectTitle: string) =>
    `Hi Waleed, I liked your ${projectTitle} project and I want something similar for my brand. Can we talk?`,
  service: (serviceName: string) =>
    `Hi Waleed, I am interested in your ${serviceName} service. Can you share details and pricing?`,
} as const;

export function getAdjacentIndex(
  currentIndex: number,
  direction: 'prev' | 'next',
  length: number
): number {
  if (length <= 0) {
    return -1;
  }
  if (direction === 'next') {
    return (currentIndex + 1) % length;
  }
  return (currentIndex - 1 + length) % length;
}

export const REVIEWS_AUTO_ADVANCE_MS = 5000;
export const REVIEWS_MOBILE_MEDIA_QUERY = '(max-width: 767px)';
export const REVIEWS_SWIPE_THRESHOLD_PX = 40;

export function getLoopedSlideIndex(
  currentIndex: number,
  delta: number,
  totalSlides: number
): number {
  if (totalSlides <= 0) {
    return 0;
  }
  return (((currentIndex + delta) % totalSlides) + totalSlides) % totalSlides;
}

export function getSwipeDirection(
  deltaX: number,
  thresholdPx = REVIEWS_SWIPE_THRESHOLD_PX
): 'next' | 'prev' | null {
  if (deltaX <= -thresholdPx) {
    return 'next';
  }
  if (deltaX >= thresholdPx) {
    return 'prev';
  }
  return null;
}

export const FEATURED_CASE_STUDIES_COUNT = 4;
export const CASE_STUDY_STACK_MIN_SCALE = 0.95;
export const CASE_STUDY_STACK_MIN_BRIGHTNESS = 0.78;

export function getVisibleCaseStudies<T>(studies: readonly T[], showAll: boolean): T[] {
  return showAll ? [...studies] : studies.slice(0, FEATURED_CASE_STUDIES_COUNT);
}

export function getCaseStudyStickyTop(index: number, isMobile: boolean): number {
  const safeIndex = Math.max(0, index);
  return isMobile ? 72 + safeIndex * 8 : 96 + safeIndex * 16;
}

export function getCaseStudyStackRange(
  index: number,
  total: number
): {
  start: number;
  end: number;
  targetScale: number;
  targetBrightness: number;
} {
  if (total <= 1 || index >= total - 1) {
    return {
      start: 0,
      end: 1,
      targetScale: 1,
      targetBrightness: 1,
    };
  }
  return {
    start: Math.max(0, index) / total,
    end: 1,
    targetScale: CASE_STUDY_STACK_MIN_SCALE,
    targetBrightness: CASE_STUDY_STACK_MIN_BRIGHTNESS,
  };
}

export function computeCaseStudyStackValues(
  progress: number,
  index: number,
  total: number,
  reducedMotion: boolean
): { scale: number; brightness: number } {
  if (reducedMotion || total <= 1 || index >= total - 1) {
    return { scale: 1, brightness: 1 };
  }
  const { start, end, targetScale, targetBrightness } = getCaseStudyStackRange(index, total);
  const span = Math.max(0.0001, end - start);
  const t = Math.min(1, Math.max(0, (progress - start) / span));
  return {
    scale: Math.round((1 - t * (1 - targetScale)) * 10000) / 10000,
    brightness: Math.round((1 - t * (1 - targetBrightness)) * 10000) / 10000,
  };
}

export type VideoAspectRatio = '16:9' | '9:16';

export function buildCaseStudyMediaPaths(
  name: string,
  fullVideoBaseUrl: string
): { posterSrc: string; fullSrc: string } {
  return {
    posterSrc: `/posters/${name}.jpg`,
    fullSrc: `${fullVideoBaseUrl}/${name}_full.mp4`,
  };
}

export function resolveVideoAspectRatio(
  videoWidth: number,
  videoHeight: number,
  fallback: VideoAspectRatio
): VideoAspectRatio {
  if (videoWidth > 0 && videoHeight > 0) {
    return videoHeight > videoWidth ? '9:16' : '16:9';
  }
  return fallback;
}
