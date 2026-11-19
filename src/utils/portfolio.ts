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
