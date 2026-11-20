import { MARQUEE_SKILLS } from '../data/portfolio';
import { MarqueePlayDot } from './Icons';

function MarqueeTrack({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden || undefined} className="flex items-center shrink-0">
      {MARQUEE_SKILLS.map((skill) => (
        <div key={skill.label} className="flex items-center shrink-0">
          <span className="font-headline-md text-[28px] md:text-[40px] leading-none uppercase text-[#EAF3EC] mx-6">
            {skill.label}
          </span>
          <MarqueePlayDot />
        </div>
      ))}
    </div>
  );
}

export function SkillsMarquee() {
  return (
    <section className="w-full bg-[#0B120D] border-y border-outline relative select-none overflow-hidden">
      <div className="relative w-full h-[88px] md:h-[120px] flex items-center overflow-hidden group">
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-r from-[#0B120D] to-transparent" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 z-10 bg-gradient-to-l from-[#0B120D] to-transparent" />
        <div className="animate-[marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] flex items-center whitespace-nowrap shrink-0">
          <MarqueeTrack />
          <MarqueeTrack ariaHidden />
          <MarqueeTrack ariaHidden />
        </div>
      </div>
    </section>
  );
}
