import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { CASE_STUDIES } from '../data/portfolio';
import { getRevealTransition, REVEAL_DISTANCE_PX, REVEAL_VIEWPORT } from '../utils/motion';
import { buildWhatsAppUrl, getAdjacentIndex, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { WhatsAppIcon } from './Icons';
import { Reveal } from './MotionPrimitives';

export function CaseStudiesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setSelectedIndex(null);
      } else if (e.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : getAdjacentIndex(prev, 'next', CASE_STUDIES.length)
        );
      } else if (e.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null ? null : getAdjacentIndex(prev, 'prev', CASE_STUDIES.length)
        );
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  const activeStudy = selectedIndex !== null ? CASE_STUDIES[selectedIndex] : null;

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-gutter py-20 lg:py-28 border-t border-outline"
      id="work"
    >
      <Reveal className="mb-16">
        <div className="font-label-md text-label-md uppercase text-primary tracking-widest mb-3">
          Portfolio
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg uppercase text-on-surface tracking-wide">
          Selected Case Studies
        </h2>
        <p className="font-body-md text-body-md text-secondary max-w-xl mt-2">
          Nine featured projects covering technical explainer animation, agency reels, brand
          narratives, and editing craft.
        </p>
      </Reveal>

      {/* Stacked Cards Container */}
      <div className="space-y-8 lg:space-y-12 relative">
        {CASE_STUDIES.map((study, index) => (
          <motion.article
            key={study.number}
            initial={shouldReduceMotion ? false : { opacity: 0, y: REVEAL_DISTANCE_PX }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={REVEAL_VIEWPORT}
            transition={getRevealTransition(shouldReduceMotion)}
            className={`sticky ${study.stickyTopClass} rounded-2xl bg-[#0B120D] hover:bg-surface-raised border border-outline p-6 sm:p-10 transition-colors duration-300 shadow-2xl`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 flex flex-col items-start space-y-4">
                <div className="flex items-center gap-3">
                  <span className="font-headline-md text-headline-md text-primary">
                    {study.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-surface text-secondary font-label-md text-[11px] uppercase tracking-wider border border-outline">
                    {study.category}
                  </span>
                </div>
                <h3 className="font-title-md text-title-md uppercase text-on-surface tracking-wider">
                  {study.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary leading-relaxed">
                  {study.description}
                </p>
                <div className="pt-4 flex flex-wrap items-center gap-4 text-secondary font-label-md text-label-md">
                  <span className="text-primary uppercase tracking-wider">{study.metaLabel}</span>
                  {study.metaItems.map((item, itemIdx) => (
                    <span key={item.text} className="inline-flex items-center gap-4">
                      {itemIdx > 0 && <span>•</span>}
                      <span className={item.highlight ? 'text-on-surface' : undefined}>
                        {item.text}
                      </span>
                    </span>
                  ))}
                </div>
                <div className="pt-2">
                  <a
                    href={buildWhatsAppUrl(WHATSAPP_MESSAGES.caseStudy(study.title))}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Request a project similar to ${study.title} on WhatsApp`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-surface border border-outline hover:border-primary text-primary hover:bg-primary-container hover:text-on-primary-container font-button text-sm font-semibold transition-all duration-200"
                  >
                    <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                    <span>Request similar</span>
                  </a>
                </div>
              </div>

              <div className="lg:col-span-6">
                <button
                  type="button"
                  aria-label={`Preview ${study.title} (${study.duration})`}
                  onClick={() => setSelectedIndex(index)}
                  className="w-full aspect-video rounded-xl bg-surface border border-outline relative overflow-hidden group flex items-center justify-center cursor-pointer text-left"
                >
                  <img
                    src={study.imageUrl}
                    alt={study.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
                  <div className="w-16 h-16 rounded-full border border-primary/40 group-hover:border-primary group-hover:bg-primary-container text-primary group-hover:text-on-primary-container flex items-center justify-center transition-all duration-200 z-10">
                    <span
                      className="material-symbols-outlined text-[32px] ml-0.5"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      play_arrow
                    </span>
                  </div>
                  <span className="absolute bottom-3 right-3 font-timecode text-timecode text-secondary bg-surface/80 px-2 py-1 rounded border border-outline z-10">
                    {study.duration}
                  </span>
                </button>
              </div>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Case Study Preview Modal */}
      {activeStudy && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={() => setSelectedIndex(null)}
        >
          <div
            className="w-full max-w-4xl rounded-2xl bg-[#0B120D] border border-outline overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between px-6 py-4 border-b border-outline">
              <div className="flex items-center gap-3">
                <span className="font-headline-md text-2xl text-primary leading-none">
                  {activeStudy.number}
                </span>
                <h3
                  id="case-study-modal-title"
                  className="font-title-md text-2xl uppercase text-on-surface tracking-wider"
                >
                  {activeStudy.title}
                </h3>
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-surface text-secondary font-label-md text-[11px] uppercase tracking-wider border border-outline">
                  {activeStudy.category}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close project preview"
                onClick={() => setSelectedIndex(null)}
                className="w-9 h-9 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary flex items-center justify-center transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="relative w-full aspect-video bg-surface">
              <img
                src={activeStudy.imageUrl}
                alt={activeStudy.title}
                className="w-full h-full object-cover"
              />
              <span className="absolute bottom-3 right-3 font-timecode text-timecode text-on-surface bg-surface/85 px-2.5 py-1 rounded border border-outline">
                {activeStudy.duration}
              </span>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-body-md text-sm text-secondary max-w-xl leading-relaxed">
                {activeStudy.description}
              </p>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() =>
                    setSelectedIndex(getAdjacentIndex(selectedIndex, 'prev', CASE_STUDIES.length))
                  }
                  className="px-4 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary font-label-md text-xs uppercase tracking-wider transition-colors"
                >
                  Prev
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() =>
                    setSelectedIndex(getAdjacentIndex(selectedIndex, 'next', CASE_STUDIES.length))
                  }
                  className="px-4 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary font-label-md text-xs uppercase tracking-wider transition-colors"
                >
                  Next
                </button>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.caseStudy(activeStudy.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary-container hover:bg-primary-hover text-on-primary-container font-button text-sm font-semibold transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                  <span>Request similar</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
