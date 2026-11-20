import { useRef, useState } from 'react';
import { SHOWREEL_POSTER_URL, SHOWREEL_VIDEO_URL } from '../data/portfolio';
import { Reveal } from './MotionPrimitives';

export function ShowreelSection() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [hasStarted, setHasStarted] = useState(false);
  const [hasError, setHasError] = useState(false);

  function playShowreel() {
    const video = videoRef.current;
    if (!video) return;

    setHasStarted(true);
    // Native controls are available if the browser requires another play gesture.
    video.play().catch(() => {});
  }

  return (
    <section className="w-full max-w-[1320px] mx-auto px-gutter py-16 lg:py-24 border-t border-outline">
      <Reveal className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
        <div>
          <div className="font-label-md text-label-md uppercase text-primary tracking-widest mb-2">
            Showreel
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg uppercase text-on-surface tracking-wide">
            The work, in motion
          </h2>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div
          id="showreel-container"
          className="group relative aspect-video w-full overflow-hidden rounded-2xl border border-outline bg-[#0B120D] shadow-2xl"
        >
          <video
            ref={videoRef}
            src={SHOWREEL_VIDEO_URL}
            poster={SHOWREEL_POSTER_URL}
            controls={hasStarted}
            playsInline
            preload="none"
            aria-label="Showreel video player"
            className="h-full w-full object-contain"
            onError={() => setHasError(true)}
          />

          {!hasStarted && !hasError && (
            <button
              type="button"
              aria-label="Play Showreel"
              onClick={playShowreel}
              className="absolute inset-0 flex cursor-pointer flex-col items-center justify-center gap-3 bg-black/45 transition-colors hover:bg-black/30 focus-visible:outline-2 focus-visible:-outline-offset-4 focus-visible:outline-primary"
            >
              <span aria-hidden="true" className="grid size-14 place-items-center rounded-full border-2 border-primary text-primary shadow-[0_0_30px_rgba(52,226,122,0.25)] transition-colors group-hover:bg-primary-container group-hover:text-on-primary-container sm:size-24">
                <span className="material-symbols-outlined ml-1 text-[32px] sm:text-[48px]">
                  play_arrow
                </span>
              </span>
              <span className="font-label-md text-[10px] uppercase tracking-widest text-on-surface sm:text-label-md">
                Click to play showreel
              </span>
            </button>
          )}

          {hasError && (
            <p role="status" className="absolute inset-0 grid place-items-center bg-black/75 px-4 text-center text-on-surface">
              Showreel unavailable.
            </p>
          )}
        </div>
      </Reveal>
    </section>
  );
}
