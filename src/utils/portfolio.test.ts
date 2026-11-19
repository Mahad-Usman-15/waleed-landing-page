import test from 'node:test';
import assert from 'node:assert/strict';
import {
  clampSeconds,
  formatTimecode,
  getAdjacentIndex,
  getProgressPercent,
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
