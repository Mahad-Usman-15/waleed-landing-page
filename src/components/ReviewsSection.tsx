import { REVIEWS } from '../data/portfolio';
import { Reveal, RevealGrid, RevealItem } from './MotionPrimitives';

export function ReviewsSection() {
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
        <p className="font-body-md text-body-md text-secondary max-w-lg mt-2">
          Direct quotes from founders, engineers, and creators I collaborated with.
        </p>
      </Reveal>

      {/* 3 Testimonial Cards */}
      <RevealGrid className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
        {REVIEWS.map((review) => (
          <RevealItem key={review.author} className="flex">
            <div className="w-full rounded-2xl bg-[#0B120D] hover:bg-surface-raised border border-outline p-8 flex flex-col justify-between transition-all duration-200">
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
                    className="w-12 h-12 rounded-xl object-cover bg-surface border border-primary/20 shrink-0"
                  />
                ) : (
                  <div className="w-12 h-12 rounded-xl bg-surface-raised border border-primary/40 flex items-center justify-center text-primary font-bold text-[16px] tracking-wider shrink-0">
                    {review.initials}
                  </div>
                )}
                <div>
                  <div className="font-button text-button font-bold text-on-surface">
                    {review.author}
                  </div>
                  <div className="text-secondary font-label-md text-label-md">{review.role}</div>
                </div>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGrid>
    </section>
  );
}
