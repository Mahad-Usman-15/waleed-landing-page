import test from 'node:test';
import assert from 'node:assert/strict';
import {
  getHeroEntranceProps,
  getRevealTransition,
  getRevealVariants,
  getStaggerContainerVariants,
  REVEAL_DISTANCE_PX,
  REVEAL_DURATION_S,
  REVEAL_VIEWPORT,
  STAGGER_DELAY_S,
} from './motion';

test('reveal constants match specification', () => {
  assert.equal(REVEAL_DISTANCE_PX, 24);
  assert.equal(REVEAL_DURATION_S, 0.6);
  assert.equal(REVEAL_VIEWPORT.once, true);
  assert.equal(REVEAL_VIEWPORT.amount, 0.15);
  assert.equal(STAGGER_DELAY_S, 0.08);
});

test('getRevealVariants fades up 24px over 0.6s when motion is enabled', () => {
  const variants = getRevealVariants(false);
  assert.deepEqual(variants.hidden, { opacity: 0, y: 24 });
  assert.equal(variants.visible.opacity, 1);
  assert.equal(variants.visible.y, 0);
  assert.equal(variants.visible.transition.duration, 0.6);
});

test('getRevealVariants disables motion when reduced motion is preferred', () => {
  const variants = getRevealVariants(true);
  assert.deepEqual(variants.hidden, { opacity: 1, y: 0 });
  assert.equal(variants.visible.transition.duration, 0);
  assert.deepEqual(getRevealTransition(true, 0.2), { duration: 0, delay: 0 });
});

test('getStaggerContainerVariants uses 0.08s stagger and zeroes out under reduced motion', () => {
  const normal = getStaggerContainerVariants(false);
  assert.equal(normal.visible.transition.staggerChildren, 0.08);

  const reduced = getStaggerContainerVariants(true);
  assert.equal(reduced.visible.transition.staggerChildren, 0);
});

test('getHeroEntranceProps disables entrance animation under reduced motion', () => {
  const normal = getHeroEntranceProps(false, 0.08);
  assert.deepEqual(normal.initial, { opacity: 0, y: 16 });
  assert.equal(normal.transition.duration, 0.45);

  const reduced = getHeroEntranceProps(true, 0.08);
  assert.equal(reduced.initial, false);
  assert.equal(reduced.transition.duration, 0);
});
