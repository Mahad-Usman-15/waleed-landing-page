import { ABOUT_TAGS, PORTRAIT_URL } from '../data/portfolio';

export function AboutSection() {
  return (
    <section id="about" className="w-full max-w-[1320px] mx-auto px-gutter py-20 lg:py-28">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left: Cropped Accent Framed Portrait */}
        <div className="lg:col-span-5 order-2 lg:order-1 flex justify-center">
          <div className="relative w-full max-w-[380px] rounded-2xl p-2 bg-[#0B120D] border border-outline">
            <div className="w-full aspect-[4/5] rounded-xl overflow-hidden relative">
              <img
                alt="Waleed Rehan"
                className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-500"
                src={PORTRAIT_URL}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-secondary font-label-md text-label-md">
                <span className="uppercase tracking-widest text-primary">Waleed Rehan</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Narrative & Experience Badges */}
        <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col items-start">
          <div className="font-label-md text-label-md text-primary uppercase tracking-widest mb-3">
            About Me
          </div>
          <h2 className="font-headline-lg text-headline-lg-mobile sm:text-headline-lg uppercase text-on-surface tracking-wide mb-6 leading-tight">
            Your story, in motion
          </h2>
          <p className="font-body-md text-body-md text-secondary leading-relaxed mb-8">
            I am Waleed, a motion designer and video editor. For one year I have been making
            expressive, carefully crafted videos for creators and brands. I blend strong ideas with
            careful execution, working in After Effects and Premiere Pro, with AI in my workflow to
            keep things fast and clean. Explainers are my main specialty, and I build both vertical
            videos for Reels and Shorts and horizontal cinematic films.
          </p>

          {/* Three Pill Tags */}
          <div className="flex flex-wrap gap-3">
            {ABOUT_TAGS.map((tag) => (
              <div
                key={tag.label}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-raised border border-outline font-label-md text-label-md uppercase tracking-wider ${
                  tag.highlight ? 'text-primary' : 'text-secondary'
                }`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                <span>{tag.label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
