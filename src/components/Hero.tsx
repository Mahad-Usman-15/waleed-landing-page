import { CONTACT_INFO, PORTRAIT_URL } from '../data/portfolio';
import { WhatsAppIcon } from './Icons';

export function Hero() {
  return (
    <section
      id="top"
      className="relative w-full max-w-[1320px] mx-auto px-gutter pt-8 lg:pt-16 pb-12 lg:pb-20"
    >
      <div className="absolute inset-0 pointer-events-none -z-0 overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[640px] h-[640px] rounded-full bg-primary-deep/20 blur-[120px] opacity-80" />
        <div className="absolute -top-24 right-0 w-[480px] h-[480px] rounded-full bg-[#34E27A]/15 blur-[120px] opacity-60" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Copy & Actions */}
        <div className="lg:col-span-7 flex flex-col items-start z-10">
          {/* Outlined Tag Pill */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-surface-raised border border-outline mb-6">
            <span className="w-2 h-2 rounded-full bg-primary-container animate-pulse" />
            <span className="font-label-md text-label-md text-primary uppercase tracking-widest">
              Motion designer and video editor
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display-xl text-display-xl-mobile sm:text-display-xl uppercase text-on-surface tracking-wide mb-6">
            I CREATE MOTION THAT MOVES{' '}
            <span className="inline-flex items-center px-4 py-1 rounded-xl bg-primary text-[#04110A]">
              BRANDS
            </span>
            .
          </h1>

          {/* Body */}
          <p className="font-body-lg text-body-lg text-secondary max-w-xl mb-10 leading-relaxed">
            Motion design and video editing for brands, creators, and agencies.
          </p>

          {/* CTA Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 w-full sm:w-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary-container hover:bg-primary-hover text-on-primary-container font-button text-button font-semibold transition-all duration-200 shadow-[0_0_24px_rgba(52,226,122,0.3)] hover:scale-[1.02]"
              href={CONTACT_INFO.whatsappUrl}
              rel="noopener noreferrer"
              target="_blank"
            >
              <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
              <span>Message me on WhatsApp</span>
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-transparent hover:bg-surface-raised text-primary border border-outline hover:border-primary font-button text-button font-semibold transition-all duration-200"
              href="#work"
            >
              <span>See my work</span>
              <span className="material-symbols-outlined text-[20px]">arrow_downward</span>
            </a>
          </div>

          {/* Metric micro-strip */}
          <div className="mt-12 pt-8 border-t border-outline flex flex-wrap items-center gap-x-5 gap-y-3 sm:gap-8 text-secondary font-label-md text-label-md uppercase tracking-wider w-full sm:w-auto">
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md text-on-surface font-normal">09+</span>
              <span>Signature Projects</span>
            </div>
            <div className="h-4 w-px bg-outline" />
            <div className="flex items-center gap-2">
              <span className="font-title-md text-title-md text-primary font-normal">100%</span>
              <span>Client Satisfaction</span>
            </div>
          </div>
        </div>

        {/* Right Column: Masked Spotlight Portrait */}
        <div className="lg:col-span-5 relative flex justify-center items-end">
          {/* Ambient Green Spotlight Glow */}
          <div className="absolute w-[360px] h-[360px] md:w-[480px] md:h-[480px] rounded-full bg-primary-deep/25 blur-[120px] pointer-events-none -z-0" />
          {/* Portrait Container with gradient edge feathering */}
          <div className="relative w-full max-w-[420px] aspect-[0.80] overflow-hidden">
            <img
              alt="Waleed Rehan"
              className="w-full h-full object-cover object-top select-none drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] [mask-image:linear-gradient(to_bottom,black_75%,transparent_100%),linear-gradient(to_right,transparent_0%,black_15%,black_100%)] [mask-composite:intersect]"
              src={PORTRAIT_URL}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
