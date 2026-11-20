import { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { PROCESS_STEPS } from '../data/portfolio';
import {
  getRevealTransition,
  REVEAL_DISTANCE_PX,
  REVEAL_VIEWPORT,
  STAGGER_DELAY_S,
} from '../utils/motion';
import { Reveal } from './MotionPrimitives';

export function ProcessSection() {
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const getStepVariants = (stepIndex: number) => {
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
        transition: getRevealTransition(shouldReduceMotion, stepIndex * STAGGER_DELAY_S),
      },
    };
  };

  return (
    <section
      id="process"
      className="w-full max-w-[1392px] mx-auto px-6 py-28 relative bg-[#000000] text-[#EAF3EC] border-t border-[#34E27A]/15 overflow-hidden"
    >
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-20">
        <div className="flex flex-col items-start">
          <span className="text-[13px] font-semibold tracking-[0.08em] uppercase text-[#34E27A] font-['Montserrat'] mb-3">
            PROCESS
          </span>
          <h2 className="text-[44px] sm:text-[64px] leading-none uppercase text-[#EAF3EC] font-['BBH_Sans_Bogle',_'Bebas_Neue',_sans-serif] tracking-[0.025em] text-left">
            HOW IT WORKS
          </h2>
        </div>
      </Reveal>

      <div className="relative w-full overflow-x-auto pb-8 pt-4">
        <motion.div
          className="min-w-[1100px] w-full relative"
          initial={shouldReduceMotion ? false : 'hidden'}
          whileInView="visible"
          viewport={REVEAL_VIEWPORT}
        >
          {/* Top Alternating Row */}
          <div className="grid grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) =>
              step.position === 'top' ? (
                <motion.div
                  key={step.number}
                  variants={getStepVariants(idx)}
                  className="flex flex-col justify-end items-center text-center pb-6 min-h-[170px]"
                >
                  <div className="max-w-[200px] flex flex-col items-center">
                    <h3
                      className={`text-lg font-bold tracking-wide mb-2 uppercase font-['Montserrat'] transition-colors ${
                        activeStep === step.number ? 'text-[#34E27A]' : 'text-[#EAF3EC]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#9DB0A2] leading-relaxed font-['Montserrat']">
                      {step.description}
                    </p>
                  </div>
                  <div className="w-px h-10 bg-[#34E27A]/40 mt-4" />
                </motion.div>
              ) : (
                <div key={step.number} className="min-h-[170px]" />
              )
            )}
          </div>

          {/* Center Timeline Track & Number Buttons */}
          <div className="relative w-full my-3 flex items-center">
            <div className="absolute left-0 right-0 h-px bg-[#34E27A]/40 z-0" />
            <div className="absolute left-0 right-0 h-2 flex justify-between pointer-events-none z-0 px-5">
              {PROCESS_STEPS.map((step) => (
                <span key={step.number} className="w-px h-2 bg-[#34E27A]/40" />
              ))}
            </div>
            <div className="w-full grid grid-cols-6 relative z-10">
              {PROCESS_STEPS.map((step, idx) => {
                const isSelected = activeStep === step.number;
                return (
                  <motion.div
                    key={step.number}
                    variants={getStepVariants(idx)}
                    className="flex justify-center relative"
                  >
                    {idx === 0 && (
                      <div className="absolute -top-5 left-1/2 -translate-x-1/2 text-[#34E27A] flex items-center justify-center" />
                    )}
                    <button
                      type="button"
                      aria-label={`Step ${step.number}: ${step.title}`}
                      aria-pressed={isSelected}
                      onClick={() =>
                        setActiveStep((prev) => (prev === step.number ? null : step.number))
                      }
                      className={`w-10 h-10 rounded-full border border-[#34E27A] flex items-center justify-center font-semibold text-[13px] transition-colors duration-200 cursor-pointer shadow-[0_0_15px_rgba(52,226,122,0.2)] font-['Montserrat'] ${
                        isSelected
                          ? 'bg-[#34E27A] text-[#04110A]'
                          : 'text-[#34E27A] bg-[#000000] hover:bg-[#34E27A] hover:text-[#04110A]'
                      }`}
                    >
                      {step.number}
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Alternating Row */}
          <div className="grid grid-cols-6 gap-6 relative">
            {PROCESS_STEPS.map((step, idx) =>
              step.position === 'bottom' ? (
                <motion.div
                  key={step.number}
                  variants={getStepVariants(idx)}
                  className="flex flex-col justify-start items-center text-center pt-6 min-h-[170px]"
                >
                  <div className="w-px h-10 bg-[#34E27A]/40 mb-4" />
                  <div className="max-w-[200px] flex flex-col items-center">
                    <h3
                      className={`text-lg font-bold tracking-wide mb-2 uppercase font-['Montserrat'] transition-colors ${
                        activeStep === step.number ? 'text-[#34E27A]' : 'text-[#EAF3EC]'
                      }`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-[16px] md:text-[17px] lg:text-[18px] text-[#9DB0A2] leading-relaxed font-['Montserrat']">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ) : (
                <div key={step.number} className="min-h-[170px]" />
              )
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
