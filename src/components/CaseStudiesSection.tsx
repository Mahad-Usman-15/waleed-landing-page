import { useEffect, useRef, useState, type CSSProperties } from 'react';
import {
  motion,
  useMotionTemplate,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from 'motion/react';
import { CASE_STUDIES, type CaseStudy } from '../data/portfolio';
import {
  buildWhatsAppUrl,
  FEATURED_CASE_STUDIES_COUNT,
  getAdjacentIndex,
  getCaseStudyStackRange,
  getVisibleCaseStudies,
  resolveVideoAspectRatio,
  type VideoAspectRatio,
  WHATSAPP_MESSAGES,
} from '../utils/portfolio';
import { WhatsAppIcon } from './Icons';
import { Reveal } from './MotionPrimitives';

interface CaseStudyStackCardProps {
  study: CaseStudy;
  index: number;
  total: number;
  scrollYProgress: MotionValue<number>;
  shouldReduceMotion: boolean;
  onPreview: (index: number) => void;
}

function CaseStudyStackCard({
  study,
  index,
  total,
  scrollYProgress,
  shouldReduceMotion,
  onPreview,
}: CaseStudyStackCardProps) {
  const { start, end, targetScale, targetBrightness } = getCaseStudyStackRange(index, total);
  const scale = useTransform(scrollYProgress, [start, end], [1, targetScale]);
  const brightness = useTransform(scrollYProgress, [start, end], [1, targetBrightness]);
  const filter = useMotionTemplate`brightness(${brightness})`;

  const shouldAnimateStack = !shouldReduceMotion && index < total - 1;

  const stickyStyle: CSSProperties & { '--card-index': number } = {
    '--card-index': index,
    zIndex: index + 1,
  };

  const cardClassName =
    'case-study-sticky-card origin-top rounded-2xl bg-[#0B120D] hover:bg-[#121C15] border border-[#34E27A]/20 p-4 sm:p-6 md:p-10 transition-colors duration-300 shadow-2xl min-h-[590px] sm:min-h-[640px] md:min-h-[70vh] flex items-start md:items-center';

  const cardContent = (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-3 sm:gap-4 md:gap-8 items-center">
        <div className="lg:col-span-6 order-2 lg:order-1 flex flex-col items-start space-y-2 md:space-y-4">
          <div className="flex items-center gap-2.5 sm:gap-3 w-full min-w-0">
            <span className="font-headline-md text-headline-md text-primary shrink-0">
              {study.number}
            </span>
            <span className="px-2.5 sm:px-3 py-1 rounded-full bg-surface text-secondary font-label-md text-[9.5px] min-[390px]:text-[10px] sm:text-[11px] uppercase tracking-[0.03em] sm:tracking-wider border border-outline whitespace-nowrap">
              {study.category}
            </span>
          </div>
          <h3 className="font-title-md text-title-md uppercase text-on-surface tracking-wider">
            {study.title}
          </h3>
          <p className="font-body-md text-[16px] md:text-[17px] lg:text-[18px] text-secondary leading-relaxed">
            {study.description}
          </p>
          <div className="pt-1 md:pt-4 flex flex-wrap items-center gap-x-3 gap-y-1.5 md:gap-4 text-secondary font-label-md text-label-md">
            <span className="text-primary uppercase tracking-wider">{study.metaLabel}</span>
            {study.metaItems.map((item, itemIdx) => (
              <span key={item.text} className="inline-flex items-center gap-3 md:gap-4">
                {itemIdx > 0 && <span>•</span>}
                <span className={item.highlight ? 'text-on-surface' : undefined}>{item.text}</span>
              </span>
            ))}
          </div>
          <div className="pt-1 md:pt-2">
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.caseStudy(study.title))}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Request a project similar to ${study.title} on WhatsApp`}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-surface border border-outline hover:border-primary text-primary hover:bg-primary-container hover:text-on-primary-container font-button text-[13px] sm:text-sm font-semibold transition-all duration-200 whitespace-nowrap shrink-0"
            >
              <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
              <span>Request similar</span>
            </a>
          </div>
        </div>

        <div className="lg:col-span-6 order-1 lg:order-2">
          <button
            type="button"
            aria-label={`Preview ${study.title} (${study.duration})`}
            onClick={() => onPreview(index)}
            className="w-full aspect-video rounded-xl bg-surface border border-outline relative overflow-hidden group flex items-center justify-center cursor-pointer text-left"
          >
            <img
              src={study.posterSrc}
              alt={study.title}
              loading="lazy"
              decoding="async"
              onLoad={(e) => e.currentTarget.classList.remove('opacity-0')}
              onError={(e) => e.currentTarget.classList.add('opacity-0')}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-300" />
            <div className="w-14 h-14 md:w-16 md:h-16 rounded-full border border-primary/40 group-hover:border-primary group-hover:bg-primary-container text-primary group-hover:text-on-primary-container flex items-center justify-center transition-all duration-200 z-10">
              <span
                className="material-symbols-outlined text-[28px] md:text-[32px] ml-0.5"
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
  );

  if (!shouldAnimateStack) {
    return (
      <article style={stickyStyle} className={cardClassName}>
        {cardContent}
      </article>
    );
  }

  return (
    <motion.article
      style={{
        ...stickyStyle,
        scale,
        filter,
      }}
      className={cardClassName}
    >
      {cardContent}
    </motion.article>
  );
}

function usePrefersReducedMotion(): boolean {
  const motionReduced = Boolean(useReducedMotion());
  const [mediaReduced, setMediaReduced] = useState(() =>
    typeof window !== 'undefined' && typeof window.matchMedia === 'function'
      ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
      : false
  );

  useEffect(() => {
    if (typeof window === 'undefined' || typeof window.matchMedia !== 'function') {
      return;
    }
    const query = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMediaReduced(query.matches);
    const onChange = (event: MediaQueryListEvent) => setMediaReduced(event.matches);
    query.addEventListener('change', onChange);
    return () => query.removeEventListener('change', onChange);
  }, []);

  return motionReduced || mediaReduced;
}

export function CaseStudiesSection() {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [showAll, setShowAll] = useState(false);
  const [isVideoLoading, setIsVideoLoading] = useState(false);
  const [hasVideoError, setHasVideoError] = useState(false);
  const [resolvedAspectRatio, setResolvedAspectRatio] = useState<VideoAspectRatio | null>(null);
  const stackContainerRef = useRef<HTMLDivElement | null>(null);
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const shouldReduceMotion = usePrefersReducedMotion();

  const { scrollYProgress } = useScroll({
    target: stackContainerRef,
    offset: ['start 120px', 'end 88%'],
  });

  const openProjectModal = (index: number) => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoLoading(true);
    setHasVideoError(false);
    setResolvedAspectRatio(null);
    setSelectedIndex(index);
  };

  const closeProjectModal = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setIsVideoLoading(false);
    setHasVideoError(false);
    setResolvedAspectRatio(null);
    setSelectedIndex(null);
  };

  useEffect(() => {
    if (selectedIndex === null) {
      return;
    }
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeProjectModal();
      } else if (e.key === 'ArrowRight') {
        openProjectModal(getAdjacentIndex(selectedIndex, 'next', CASE_STUDIES.length));
      } else if (e.key === 'ArrowLeft') {
        openProjectModal(getAdjacentIndex(selectedIndex, 'prev', CASE_STUDIES.length));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex]);

  useEffect(() => {
    const videoEl = videoRef.current;
    if (selectedIndex === null || !videoEl) {
      return;
    }
    videoEl.muted = false;
    videoEl.play().catch(() => {
      // Browser autoplay fallback handled cleanly via visible controls
    });
    return () => {
      videoEl.pause();
    };
  }, [selectedIndex]);

  const visibleStudies = getVisibleCaseStudies(CASE_STUDIES, showAll);
  const activeStudy = selectedIndex !== null ? CASE_STUDIES[selectedIndex] : null;
  const activeAspectRatio: VideoAspectRatio = activeStudy
    ? resolvedAspectRatio ?? activeStudy.aspectRatio
    : '16:9';
  const isVerticalModal = activeAspectRatio === '9:16';

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
        <p className="font-body-md text-[16px] md:text-[17px] lg:text-[18px] text-secondary max-w-xl mt-2">
          Nine featured projects covering technical explainer animation, agency reels, brand
          narratives, and editing craft.
        </p>
      </Reveal>

      {/* Stacked Cards Container */}
      <div
        ref={stackContainerRef}
        className="relative flex flex-col gap-[16vh] md:gap-[24vh]"
      >
        {visibleStudies.map((study, index) => (
          <CaseStudyStackCard
            key={study.number}
            study={study}
            index={index}
            total={visibleStudies.length}
            scrollYProgress={scrollYProgress}
            shouldReduceMotion={shouldReduceMotion}
            onPreview={openProjectModal}
          />
        ))}
        {/* Flow spacer extends sticky containing-block content height below the final card */}
        <div aria-hidden="true" className="h-[1px] pointer-events-none" />
      </div>

      {CASE_STUDIES.length > FEATURED_CASE_STUDIES_COUNT && (
        <div className="mt-4 flex justify-center">
          <button
            type="button"
            aria-expanded={showAll}
            onClick={() => setShowAll((prev) => !prev)}
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-surface border border-outline hover:border-primary text-primary hover:bg-primary-container hover:text-on-primary-container font-button text-sm font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer"
          >
            <span>{showAll ? 'Show featured' : 'See all'}</span>
            <span className="material-symbols-outlined text-[18px]">
              {showAll ? 'expand_less' : 'expand_more'}
            </span>
          </button>
        </div>
      )}

      {/* Case Study Video Modal */}
      {activeStudy && selectedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="case-study-modal-title"
          className="fixed inset-0 z-[60] bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          onClick={closeProjectModal}
        >
          <div
            className="w-full max-w-4xl max-h-[92vh] overflow-y-auto rounded-2xl bg-[#0B120D] border border-outline shadow-2xl"
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
                <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-surface text-secondary font-label-md text-[11px] uppercase tracking-wider border border-outline whitespace-nowrap">
                  {activeStudy.category}
                </span>
              </div>
              <button
                type="button"
                aria-label="Close project preview"
                onClick={closeProjectModal}
                className="w-9 h-9 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary flex items-center justify-center transition-colors cursor-pointer"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>

            <div className="w-full bg-surface flex items-center justify-center">
              <div
                data-testid="modal-video-frame"
                data-aspect-ratio={activeAspectRatio}
                className={
                  isVerticalModal
                    ? 'relative aspect-[9/16] h-[58vh] sm:h-[64vh] max-h-[620px] max-w-full bg-black overflow-hidden'
                    : 'relative w-full aspect-video bg-black overflow-hidden'
                }
              >
                <video
                  ref={videoRef}
                  key={activeStudy.fullSrc}
                  src={activeStudy.fullSrc}
                  poster={activeStudy.posterSrc}
                  controls
                  autoPlay
                  playsInline
                  preload="auto"
                  aria-label={`${activeStudy.title} video player`}
                  onLoadStart={() => {
                    setIsVideoLoading(true);
                    setHasVideoError(false);
                  }}
                  onLoadedMetadata={(e) => {
                    const video = e.currentTarget;
                    setResolvedAspectRatio(
                      resolveVideoAspectRatio(
                        video.videoWidth,
                        video.videoHeight,
                        activeStudy.aspectRatio
                      )
                    );
                  }}
                  onLoadedData={() => setIsVideoLoading(false)}
                  onPlaying={() => setIsVideoLoading(false)}
                  onError={() => {
                    setIsVideoLoading(false);
                    setHasVideoError(true);
                  }}
                  className="w-full h-full object-contain bg-black"
                />

                {isVideoLoading && !hasVideoError && (
                  <div
                    role="status"
                    aria-label="Loading video"
                    className="absolute inset-0 flex items-center justify-center bg-black/50 pointer-events-none z-10"
                  >
                    <span className="w-9 h-9 rounded-full border-2 border-primary/30 border-t-primary animate-spin" />
                  </div>
                )}

                {hasVideoError && (
                  <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-black/80 px-4 text-center pointer-events-none z-10">
                    <span className="material-symbols-outlined text-[28px] text-primary">
                      videocam_off
                    </span>
                    <span className="font-label-md text-xs uppercase tracking-wider text-secondary">
                      Video unavailable
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <p className="font-body-md text-[16px] md:text-[17px] lg:text-[18px] text-secondary max-w-xl leading-relaxed">
                {activeStudy.description}
              </p>
              <div className="flex flex-wrap items-center gap-2 sm:gap-3 shrink-0">
                <button
                  type="button"
                  aria-label="Previous project"
                  onClick={() =>
                    openProjectModal(getAdjacentIndex(selectedIndex, 'prev', CASE_STUDIES.length))
                  }
                  className="px-3 sm:px-4 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary font-label-md text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Prev
                </button>
                <button
                  type="button"
                  aria-label="Next project"
                  onClick={() =>
                    openProjectModal(getAdjacentIndex(selectedIndex, 'next', CASE_STUDIES.length))
                  }
                  className="px-3 sm:px-4 py-2 rounded-full border border-outline text-secondary hover:text-primary hover:border-primary font-label-md text-xs uppercase tracking-wider transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Next
                </button>
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.caseStudy(activeStudy.title))}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 sm:gap-2 px-3.5 sm:px-5 py-2 rounded-full bg-primary-container hover:bg-primary-hover text-on-primary-container font-button text-[13px] sm:text-sm font-semibold transition-colors whitespace-nowrap shrink-0"
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
