import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';
import { SCROLL_PROGRESS_SPRING } from '../utils/motion';

export function ScrollProgressBar() {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const smoothProgress = useSpring(scrollYProgress, SCROLL_PROGRESS_SPRING);
  const scaleX = shouldReduceMotion ? scrollYProgress : smoothProgress;

  return (
    <div
      aria-hidden="true"
      data-testid="scroll-progress-track"
      className="fixed top-0 left-0 right-0 z-[55] h-[3px] bg-primary/10 pointer-events-none"
    >
      <motion.div
        data-testid="scroll-progress-bar"
        className="h-full w-full origin-left bg-gradient-to-r from-[#0F7A3E] via-[#34E27A] to-[#5FFF95] shadow-[0_0_10px_rgba(52,226,122,0.55)]"
        style={{ scaleX }}
      />
    </div>
  );
}
