export const REVEAL_DISTANCE_PX = 24;
export const REVEAL_DURATION_S = 0.6;
export const REVEAL_VIEWPORT_AMOUNT = 0.15;
export const STAGGER_DELAY_S = 0.08;
export const HERO_ENTRANCE_DURATION_S = 0.45;
export const REVEAL_EASE = [0.22, 1, 0.36, 1] as const;

export const REVEAL_VIEWPORT = {
  once: true,
  amount: REVEAL_VIEWPORT_AMOUNT,
} as const;

export function getRevealTransition(shouldReduceMotion: boolean | null, delay = 0) {
  if (shouldReduceMotion) {
    return { duration: 0, delay: 0 };
  }
  return {
    duration: REVEAL_DURATION_S,
    delay,
    ease: REVEAL_EASE,
  };
}

export function getRevealVariants(shouldReduceMotion: boolean | null) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1, y: 0 },
      visible: { opacity: 1, y: 0, transition: { duration: 0 } },
    };
  }
  return {
    hidden: { opacity: 0, y: REVEAL_DISTANCE_PX },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: REVEAL_DURATION_S,
        ease: REVEAL_EASE,
      },
    },
  };
}

export function getStaggerContainerVariants(shouldReduceMotion: boolean | null) {
  if (shouldReduceMotion) {
    return {
      hidden: { opacity: 1 },
      visible: { opacity: 1, transition: { staggerChildren: 0, delayChildren: 0 } },
    };
  }
  return {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: STAGGER_DELAY_S,
      },
    },
  };
}

export function getHeroEntranceProps(shouldReduceMotion: boolean | null, delay = 0) {
  if (shouldReduceMotion) {
    return {
      initial: false as const,
      animate: { opacity: 1, y: 0 },
      transition: { duration: 0 },
    };
  }
  return {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    transition: {
      duration: HERO_ENTRANCE_DURATION_S,
      delay,
      ease: REVEAL_EASE,
    },
  };
}
