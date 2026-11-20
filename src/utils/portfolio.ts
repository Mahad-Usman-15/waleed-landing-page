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
