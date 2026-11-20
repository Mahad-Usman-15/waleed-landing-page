import type { ReactNode } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  getRevealTransition,
  getRevealVariants,
  getStaggerContainerVariants,
  REVEAL_DISTANCE_PX,
  REVEAL_VIEWPORT,
} from '../utils/motion';

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

export function Reveal({ children, className, delay = 0 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: REVEAL_DISTANCE_PX }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={REVEAL_VIEWPORT}
      transition={getRevealTransition(shouldReduceMotion, delay)}
    >
      {children}
    </motion.div>
  );
}

interface RevealGridProps {
  children: ReactNode;
  className?: string;
}

export function RevealGrid({ children, className }: RevealGridProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={getStaggerContainerVariants(shouldReduceMotion)}
      initial="hidden"
      whileInView="visible"
      viewport={REVEAL_VIEWPORT}
    >
      {children}
    </motion.div>
  );
}

interface RevealItemProps {
  children: ReactNode;
  className?: string;
}

export function RevealItem({ children, className }: RevealItemProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div className={className} variants={getRevealVariants(shouldReduceMotion)}>
      {children}
    </motion.div>
  );
}
