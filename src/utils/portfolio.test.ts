import test from 'node:test';
import assert from 'node:assert/strict';
import {
  buildCaseStudyMediaPaths,
  buildWhatsAppUrl,
  clampSeconds,
  computeCaseStudyStackValues,
  FEATURED_CASE_STUDIES_COUNT,
  formatTimecode,
  getAdjacentIndex,
  getCaseStudyStackRange,
  getCaseStudyStickyTop,
  getLoopedSlideIndex,
  getProgressPercent,
  getSwipeDirection,
  getVisibleCaseStudies,
  resolveVideoAspectRatio,
  REVIEWS_AUTO_ADVANCE_MS,
  REVIEWS_MOBILE_MEDIA_QUERY,
  WHATSAPP_BASE_URL,
  WHATSAPP_MESSAGES,
} from './portfolio';

test('formatTimecode formats zero and single/double digit seconds', () => {
  assert.equal(formatTimecode(0), '00:00');
  assert.equal(formatTimecode(24), '00:24');
  assert.equal(formatTimecode(60), '01:00');
  assert.equal(formatTimecode(125), '02:05');
  assert.equal(formatTimecode(-5), '00:00');
});

test('getProgressPercent calculates bounded percentages', () => {
  assert.equal(getProgressPercent(24, 60), 40);
  assert.equal(getProgressPercent(0, 60), 0);
  assert.equal(getProgressPercent(75, 60), 100);
  assert.equal(getProgressPercent(10, 0), 0);
});

test('clampSeconds bounds scrubber positions safely', () => {
  assert.equal(clampSeconds(-10, 60), 0);
  assert.equal(clampSeconds(24.4, 60), 24);
  assert.equal(clampSeconds(90, 60), 60);
  assert.equal(clampSeconds(10, 0), 0);
});

test('getAdjacentIndex wraps cleanly across case study items', () => {
  assert.equal(getAdjacentIndex(0, 'prev', 9), 8);
  assert.equal(getAdjacentIndex(8, 'next', 9), 0);
  assert.equal(getAdjacentIndex(3, 'next', 9), 4);
  assert.equal(getAdjacentIndex(0, 'next', 0), -1);
});

test('buildWhatsAppUrl encodes messages cleanly with base URL', () => {
  const sample = 'Hi Waleed, test message: 100%?';
  assert.equal(
    buildWhatsAppUrl(sample),
    `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(sample)}`
  );
});

test('all WhatsApp messages match expected templates and contain no em dashes or hyphens', () => {
  const messages = [
    WHATSAPP_MESSAGES.header,
    WHATSAPP_MESSAGES.hero,
    WHATSAPP_MESSAGES.bannerAndFooter,
    WHATSAPP_MESSAGES.faq,
    WHATSAPP_MESSAGES.caseStudy('Networking Showreel'),
    WHATSAPP_MESSAGES.service('Explainer Videos'),
  ];

  for (const msg of messages) {
    assert.equal(/[—–-]/.test(msg), false, `Unexpected dash in message: ${msg}`);
    const url = buildWhatsAppUrl(msg);
    assert.ok(url.startsWith('https://wa.me/923358150666?text='));
    assert.equal(decodeURIComponent(url.split('?text=')[1]), msg);
  }
});

test('getLoopedSlideIndex wraps smoothly forward and backward', () => {
  assert.equal(REVIEWS_AUTO_ADVANCE_MS, 5000);
  assert.equal(REVIEWS_MOBILE_MEDIA_QUERY, '(max-width: 767px)');
  assert.equal(getLoopedSlideIndex(0, 1, 3), 1);
  assert.equal(getLoopedSlideIndex(2, 1, 3), 0);
  assert.equal(getLoopedSlideIndex(0, -1, 3), 2);
  assert.equal(getLoopedSlideIndex(1, -1, 3), 0);
  assert.equal(getLoopedSlideIndex(0, 1, 0), 0);
});

test('getSwipeDirection detects horizontal swipe thresholds', () => {
  assert.equal(getSwipeDirection(-50), 'next');
  assert.equal(getSwipeDirection(50), 'prev');
  assert.equal(getSwipeDirection(-20), null);
  assert.equal(getSwipeDirection(20), null);
  assert.equal(getSwipeDirection(-40), 'next');
  assert.equal(getSwipeDirection(40), 'prev');
});

test('getVisibleCaseStudies slices featured projects and expands cleanly', () => {
  assert.equal(FEATURED_CASE_STUDIES_COUNT, 4);
  const sample = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  assert.deepEqual(getVisibleCaseStudies(sample, false), [1, 2, 3, 4]);
  assert.deepEqual(getVisibleCaseStudies(sample, true), sample);
});

test('getCaseStudyStickyTop computes desktop and mobile sticky offsets', () => {
  assert.equal(getCaseStudyStickyTop(0, false), 96);
  assert.equal(getCaseStudyStickyTop(1, false), 112);
  assert.equal(getCaseStudyStickyTop(3, false), 144);
  assert.equal(getCaseStudyStickyTop(0, true), 72);
  assert.equal(getCaseStudyStickyTop(1, true), 80);
  assert.equal(getCaseStudyStickyTop(3, true), 96);
});

test('computeCaseStudyStackValues scales and dims covered cards and disables under reduced motion', () => {
  assert.deepEqual(getCaseStudyStackRange(3, 4), {
    start: 0,
    end: 1,
    targetScale: 1,
    targetBrightness: 1,
  });
  assert.deepEqual(computeCaseStudyStackValues(0, 0, 4, false), { scale: 1, brightness: 1 });
  assert.deepEqual(computeCaseStudyStackValues(1, 0, 4, false), { scale: 0.95, brightness: 0.78 });
  assert.deepEqual(computeCaseStudyStackValues(1, 3, 4, false), { scale: 1, brightness: 1 });
  assert.deepEqual(computeCaseStudyStackValues(0.75, 0, 4, true), { scale: 1, brightness: 1 });
});

test('buildCaseStudyMediaPaths uses the uploaded video and exact poster filenames', () => {
  assert.deepEqual(buildCaseStudyMediaPaths('car_drift', '', 'CAR DRIFT.jpeg'), {
    posterSrc: '/posters/CAR%20DRIFT.jpeg',
    fullSrc: '/car_drift.mp4',
  });
  assert.deepEqual(buildCaseStudyMediaPaths('sidequest_nn', 'https://cdn.example.com', 'sidequest.jpeg'), {
    posterSrc: '/posters/sidequest.jpeg',
    fullSrc: 'https://cdn.example.com/sidequest_nn.mp4',
  });
});

test('resolveVideoAspectRatio detects vertical vs horizontal video dimensions with fallback', () => {
  assert.equal(resolveVideoAspectRatio(1080, 1920, '16:9'), '9:16');
  assert.equal(resolveVideoAspectRatio(1920, 1080, '9:16'), '16:9');
  assert.equal(resolveVideoAspectRatio(0, 0, '9:16'), '9:16');
  assert.equal(resolveVideoAspectRatio(0, 0, '16:9'), '16:9');
});
