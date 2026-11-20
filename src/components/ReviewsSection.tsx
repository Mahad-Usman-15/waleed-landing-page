import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from 'motion/react';
import { REVIEWS, type ReviewItem } from '../data/portfolio';
import {
  getLoopedSlideIndex,
  getSwipeDirection,
  REVIEWS_AUTO_ADVANCE_MS,
  REVIEWS_MOBILE_MEDIA_QUERY,
} from '../utils/portfolio';
import { Reveal, RevealGrid, RevealItem } from './MotionPrimitives';

function ReviewCard({ review }: { review: ReviewItem }) {
  return (
    <div className="w-full h-full rounded-2xl bg-[#0B120D] hover:bg-surface-raised border border-outline p-8 flex flex-col justify-between transition-all duration-200 select-none md:select-auto">
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface text-primary border border-outline font-label-md text-[11px] uppercase tracking-wider mb-6">
          <span>{review.tag}</span>
        </div>
        <blockquote className="font-body-md text-body-md text-on-surface leading-relaxed mb-8 italic">
          {review.quote}
        </blockquote>
      </div>
      <div className="pt-6 border-t border-outline/50 flex items-center gap-3">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt={review.avatarAlt ?? review.author}
            draggable={false}
            className="w-12 h-12 rounded-xl object-cover bg-surface border border-primary/20 shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-xl bg-surface-raised border border-primary/40 flex items-center justify-center text-primary font-bold text-[16px] tracking-wider shrink-0">
            {review.initials}
          </div>
        )}
        <div>
          <div className="font-button text-button font-bold text-on-surface">{review.author}</div>
          <div className="text-secondary font-label-md text-label-md">{review.role}</div>
        </div>
      </div>
    </div>
  );
}

export function ReviewsSection() {
  const shouldReduceMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobileViewport, setIsMobileViewport] = useState(() =>
    typeof window !== 'undefined' ? window.matchMedia(REVIEWS_MOBILE_MEDIA_QUERY).matches : false
  );
  const [isTouching, setIsTouching] = useState(false);
  const [dragOffsetPx, setDragOffsetPx] = useState(0);

  const gestureRef = useRef<{
    active: boolean;
    pointerId: number | null;
    startX: number;
    startY: number;
    isHorizontal: boolean | null;
  }>({
    active: false,
    pointerId: null,
    startX: 0,
    startY: 0,
    isHorizontal: null,
  });

  useEffect(() => {
    const mediaQuery = window.matchMedia(REVIEWS_MOBILE_MEDIA_QUERY);
    const updateMatch = () => setIsMobileViewport(mediaQuery.matches);
    updateMatch();

    mediaQuery.addEventListener('change', updateMatch);
    return () => mediaQuery.removeEventListener('change', updateMatch);
  }, []);

  useEffect(() => {
    if (!isMobileViewport || isTouching) {
      return;
    }

    const timerId = window.setInterval(() => {
      setActiveIndex((prev) => getLoopedSlideIndex(prev, 1, REVIEWS.length));
    }, REVIEWS_AUTO_ADVANCE_MS);

    return () => window.clearInterval(timerId);
  }, [isMobileViewport, isTouching, activeIndex]);

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    gestureRef.current = {
      active: true,
      pointerId: e.pointerId,
      startX: e.clientX,
      startY: e.clientY,
      isHorizontal: null,
    };
    setIsTouching(true);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const g = gestureRef.current;
    if (!g.active || g.pointerId !== e.pointerId) {
      return;
    }

    const dx = e.clientX - g.startX;
    const dy = e.clientY - g.startY;

    if (g.isHorizontal === null && (Math.abs(dx) > 6 || Math.abs(dy) > 6)) {
      g.isHorizontal = Math.abs(dx) >= Math.abs(dy);
    }

    if (g.isHorizontal) {
      setDragOffsetPx(dx);
    }
  };

  const finishGesture = () => {
    const g = gestureRef.current;
    if (!g.active) {
      return;
    }

    if (g.isHorizontal) {
      const direction = getSwipeDirection(dragOffsetPx);
      if (direction === 'next') {
        setActiveIndex((prev) => getLoopedSlideIndex(prev, 1, REVIEWS.length));
      } else if (direction === 'prev') {
        setActiveIndex((prev) => getLoopedSlideIndex(prev, -1, REVIEWS.length));
      }
    }

    gestureRef.current = {
      active: false,
      pointerId: null,
      startX: 0,
      startY: 0,
      isHorizontal: null,
    };
    setDragOffsetPx(0);
    setIsTouching(false);
  };

  return (
    <section
      className="w-full max-w-[1320px] mx-auto px-gutter py-20 lg:py-28 border-t border-outline"
      id="reviews"
    >
      <Reveal className="mb-14">
        <div className="font-label-md text-label-md uppercase text-primary tracking-widest mb-3">
          Client Feedback
        </div>
        <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg uppercase text-on-surface tracking-wide">
          What Clients Say
        </h2>
        <p className="font-body-md text-[16px] md:text-[17px] lg:text-[18px] text-secondary max-w-lg mt-2">
          Direct quotes from founders, engineers, and creators I collaborated with.
        </p>
      </Reveal>

      {/* Mobile Carousel (< 768px) */}
      <Reveal className="md:hidden">
        <div
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          className="overflow-hidden touch-pan-y"
          onTouchStart={() => setIsTouching(true)}
          onTouchEnd={() => {
            if (!gestureRef.current.active) {
              setIsTouching(false);
            }
          }}
          onTouchCancel={() => {
            if (!gestureRef.current.active) {
              setIsTouching(false);
            }
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={finishGesture}
          onPointerCancel={finishGesture}
        >
          <div
            data-testid="reviews-carousel-track"
            className={`flex items-stretch ${
              isTouching || shouldReduceMotion
                ? 'transition-none'
                : 'transition-transform duration-500 ease-out'
            }`}
            style={{
              transform: `translate3d(calc(-${activeIndex * 100}% + ${dragOffsetPx}px), 0, 0)`,
            }}
          >
            {REVIEWS.map((review) => (
              <div key={review.author} className="w-full shrink-0 flex">
                <ReviewCard review={review} />
              </div>
            ))}
          </div>
        </div>

        {/* Small Dot Indicators */}
        <div
          role="tablist"
          aria-label="Select testimonial"
          className="mt-6 flex items-center justify-center gap-2"
        >
          {REVIEWS.map((review, index) => {
            const isActive = index === activeIndex;
            return (
              <button
                key={review.author}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-label={`Show testimonial ${index + 1} of ${REVIEWS.length}`}
                onClick={() => setActiveIndex(index)}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  isActive ? 'w-6 bg-primary' : 'w-2 bg-outline-variant hover:bg-primary/60'
                }`}
              />
            );
          })}
        </div>
      </Reveal>

      {/* Tablet & Desktop Static Row (>= 768px) */}
      <RevealGrid className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
        {REVIEWS.map((review) => (
          <RevealItem key={review.author} className="flex">
            <ReviewCard review={review} />
          </RevealItem>
        ))}
      </RevealGrid>
    </section>
  );
}
