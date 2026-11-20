import { useEffect, useRef, useState } from 'react';
import { SHOWREEL_POSTER_URL } from '../data/portfolio';
import { clampSeconds, formatTimecode, getProgressPercent } from '../utils/portfolio';
import { Reveal } from './MotionPrimitives';

const TOTAL_SECONDS = 60;

export function ShowreelSection() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentSeconds, setCurrentSeconds] = useState(24);
  const [playbackRate, setPlaybackRate] = useState<1 | 1.5 | 2>(1);
  const [buttonPulse, setButtonPulse] = useState(false);

  useEffect(() => {
    if (!isPlaying) {
      return;
    }
    const interval = window.setInterval(() => {
      setCurrentSeconds((prev) => (prev >= TOTAL_SECONDS ? 0 : prev + 1));
    }, Math.round(1000 / playbackRate));
    return () => window.clearInterval(interval);
  }, [isPlaying, playbackRate]);

  const progressPercent = getProgressPercent(currentSeconds, TOTAL_SECONDS);

  const togglePlay = () => {
    setButtonPulse(true);
    window.setTimeout(() => setButtonPulse(false), 150);
    setIsPlaying((prev) => !prev);
  };

  const handleScrub = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
    setCurrentSeconds(clampSeconds(ratio * TOTAL_SECONDS, TOTAL_SECONDS));
  };

  const handleToggleFullscreen = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    const el = containerRef.current;
    if (!el) return;
    if (document.fullscreenElement) {
      document.exitFullscreen().catch(() => {});
    } else if (el.requestFullscreen) {
      el.requestFullscreen().catch(() => {});
    }
  };

  return (
    <section className="w-full max-w-[1320px] mx-auto px-gutter py-16 lg:py-24 border-t border-outline">
      {/* Section Header */}
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

      {/* Cinematic 16:9 Video Frame Player */}
      <Reveal delay={0.08}>
        <div
          ref={containerRef}
          id="showreel-container"
          className="relative w-full aspect-video rounded-2xl bg-[#0B120D] border border-outline overflow-hidden shadow-2xl group flex flex-col justify-between p-6 sm:p-8 cursor-pointer transition-all duration-300 hover:border-primary/50"
          onClick={togglePlay}
        >
        <img
          src={SHOWREEL_POSTER_URL}
          alt="Showreel Poster"
          className={`absolute inset-0 w-full h-full object-cover transition-transform duration-500 pointer-events-none z-0 ${
            isPlaying ? 'scale-105' : 'group-hover:scale-105'
          }`}
        />
        <div
          className={`absolute inset-0 transition-colors duration-300 pointer-events-none z-0 ${
            isPlaying ? 'bg-black/30' : 'bg-black/50 group-hover:bg-black/40'
          }`}
        />

        {/* Subtle Visual Grid / Timecode background overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(#34e27a0d_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-surface/40 pointer-events-none" />

        {/* Top Player Meta Bar */}
        <div className="relative z-10 flex items-center justify-between font-timecode text-timecode text-secondary tracking-widest">
          <div className="flex items-center gap-3">
            {isPlaying && (
              <span className="px-2.5 py-1 rounded bg-surface/80 border border-outline text-primary uppercase">
                Playing • {playbackRate}x
              </span>
            )}
          </div>
          <div className="flex items-center gap-2">
            <span className={`w-2 h-2 rounded-full bg-primary ${isPlaying ? 'animate-pulse' : ''}`} />
          </div>
        </div>

        {/* Centered Circular Play Control */}
        <div className="relative z-10 self-center flex flex-col items-center gap-4">
          <button
            type="button"
            aria-label={isPlaying ? 'Pause Showreel' : 'Play Showreel'}
            aria-pressed={isPlaying}
            onClick={(e) => {
              e.stopPropagation();
              togglePlay();
            }}
            className={`w-20 h-20 sm:w-24 sm:h-24 rounded-full border-2 border-primary text-primary group-hover:bg-primary-container group-hover:text-on-primary-container flex items-center justify-center transition-all duration-300 shadow-[0_0_30px_rgba(52,226,122,0.25)] group-hover:scale-110 ${
              buttonPulse ? 'scale-95' : ''
            } ${isPlaying ? 'bg-primary-container text-on-primary-container' : ''}`}
          >
            <span
              className={`material-symbols-outlined text-[40px] sm:text-[48px] ${
                isPlaying ? '' : 'ml-1'
              }`}
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>
          <span className="font-label-md text-label-md tracking-widest uppercase text-secondary group-hover:text-primary transition-colors">
            {isPlaying ? 'Playing showreel — click to pause' : 'Click to play showreel'}
          </span>
        </div>

        {/* Bottom Interactive Scrubber Bar & Controls */}
        <div className="relative z-10 w-full space-y-3" onClick={(e) => e.stopPropagation()}>
          {/* Progress Bar */}
          <div
            role="slider"
            tabIndex={0}
            aria-label="Showreel timeline scrubber"
            aria-valuemin={0}
            aria-valuemax={TOTAL_SECONDS}
            aria-valuenow={currentSeconds}
            onClick={handleScrub}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight') {
                setCurrentSeconds((prev) => clampSeconds(prev + 5, TOTAL_SECONDS));
              } else if (e.key === 'ArrowLeft') {
                setCurrentSeconds((prev) => clampSeconds(prev - 5, TOTAL_SECONDS));
              }
            }}
            className="w-full h-1.5 bg-surface-variant/40 rounded-full overflow-hidden relative cursor-pointer"
          >
            <div
              className="h-full bg-primary rounded-full relative transition-[width] duration-200"
              style={{ width: `${progressPercent}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 bg-on-surface rounded-full shadow" />
            </div>
          </div>

          <div className="flex items-center justify-between text-secondary font-timecode text-timecode">
            <div className="flex items-center gap-4">
              <span className="text-on-surface font-semibold">
                {formatTimecode(currentSeconds)}
              </span>
              <span>/</span>
              <span>{formatTimecode(TOTAL_SECONDS)}</span>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                aria-label={isMuted ? 'Unmute audio' : 'Mute audio'}
                aria-pressed={isMuted}
                onClick={() => setIsMuted((prev) => !prev)}
                className="hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">
                  {isMuted ? 'volume_off' : 'volume_up'}
                </span>
              </button>
              <button
                type="button"
                aria-label={`Playback speed ${playbackRate}x`}
                onClick={() =>
                  setPlaybackRate((prev) => (prev === 1 ? 1.5 : prev === 1.5 ? 2 : 1))
                }
                className="hover:text-primary transition-colors flex items-center gap-1"
              >
                <span className="material-symbols-outlined text-[18px]">settings</span>
              </button>
              <button
                type="button"
                aria-label="Fullscreen"
                onClick={handleToggleFullscreen}
                className="hover:text-primary transition-colors"
              >
                <span className="material-symbols-outlined text-[18px]">fullscreen</span>
              </button>
            </div>
          </div>
        </div>
        </div>
      </Reveal>
    </section>
  );
}
