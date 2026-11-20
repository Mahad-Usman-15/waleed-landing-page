import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { WhatsAppIcon } from './Icons';

export function CtaBanner() {
  return (
    <section className="w-full max-w-[1320px] mx-auto px-gutter py-16 lg:py-24">
      <div
        className="relative w-full rounded-[32px] md:rounded-[40px] overflow-hidden p-8 sm:p-12 md:p-16 lg:px-20 lg:py-16 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 md:gap-12 shadow-2xl select-none"
        style={{
          background:
            'radial-gradient(120% 120% at 85% 60%, #3de27b 0%, #209950 42%, #0e6933 78%, #083c1d 100%)',
        }}
      >
        <div className="max-w-xl flex flex-col items-start z-10">
          <h2
            className="font-display-xl uppercase text-white tracking-tight leading-[0.92] text-[48px] sm:text-[64px] md:text-[72px] lg:text-[80px] font-normal"
            style={{ fontFamily: "'Bebas Neue', sans-serif" }}
          >
            HAVE A LAUNCH
            <br />
            COMING UP?
          </h2>
          <p className="font-body-md text-white/90 text-[16px] sm:text-[17px] font-normal leading-relaxed mt-6 max-w-md">
            Message me on WhatsApp and tell me what you are making.
          </p>
        </div>
        <div className="z-10 shrink-0 self-start md:self-center">
          <a
            className="inline-flex items-center justify-center gap-3 px-7 py-3.5 sm:px-8 sm:py-4 rounded-full bg-[#0a120c] hover:bg-black text-white font-button text-[14px] sm:text-[15px] font-semibold transition-all duration-200 shadow-xl hover:scale-[1.02] active:scale-95 border border-[#1b3420]/40"
            href={buildWhatsAppUrl(WHATSAPP_MESSAGES.bannerAndFooter)}
            rel="noopener noreferrer"
            target="_blank"
          >
            <WhatsAppIcon className="w-5 h-5 shrink-0 fill-current" />
            <span>Message me on WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
}
