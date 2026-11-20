import { SERVICES } from '../data/portfolio';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { ServiceIcon, WhatsAppIcon } from './Icons';
import { Reveal, RevealGrid, RevealItem } from './MotionPrimitives';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-[1320px] mx-auto px-6 py-28 flex flex-col gap-14 border-t border-[#34E27A]/15"
    >
      <Reveal className="flex flex-col items-start gap-3">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#5FFF95] font-['Montserrat']">
          CAPABILITIES
        </span>
        <h2 className="text-[44px] sm:text-[64px] leading-none uppercase text-[#E2E2E2] font-['BBH_Sans_Bogle',_'Bebas_Neue',_sans-serif] tracking-[0.025em]">
          SERVICES I OFFER
        </h2>
        <p className="max-w-[512px] text-[16px] md:text-[17px] lg:text-[18px] leading-[1.65] text-[#B8CBBD] font-['Montserrat']">
          Tailored motion design and editing solutions built to elevate your vision with speed,
          clarity, and precision.
        </p>
      </Reveal>

      <RevealGrid className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {SERVICES.map((service) => (
          <RevealItem key={service.number} className="flex">
            <div className="w-full bg-[#0B120D] border border-[#34E27A]/15 rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[314px] transition-all hover:border-[#34E27A]/40 hover:bg-[#121C15]">
              <div>
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-black border border-[#34E27A]/20 flex items-center justify-center text-[#5FFF95]">
                    <ServiceIcon type={service.iconType} />
                  </div>
                  <span className="font-['BBH_Sans_Bogle',_'Bebas_Neue',_sans-serif] text-[40px] leading-none text-[#3C4A3D]">
                    {service.number}
                  </span>
                </div>
                <h3 className="font-['BBH_Sans_Bogle',_'Bebas_Neue',_sans-serif] text-[32px] leading-tight text-[#E2E2E2] uppercase mt-5 mb-2.5">
                  {service.title}
                </h3>
                <p className="text-[16px] md:text-[17px] lg:text-[18px] leading-[1.6] text-[#B8CBBD] font-['Montserrat']">
                  {service.description}
                </p>
              </div>
              <div className="pt-4 border-t border-[#34E27A]/30 flex items-center justify-between gap-1.5 sm:gap-2 lg:gap-4 text-[9px] min-[380px]:text-[10px] sm:text-[11px] md:text-[10px] lg:text-[12px] xl:text-[13px] font-semibold tracking-[0.02em] xl:tracking-wider uppercase font-['Montserrat'] mt-6 whitespace-nowrap">
                {service.isPrimary ? (
                  <span className="inline-flex items-center gap-1.5 lg:gap-2 text-[#5FFF95] whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#5FFF95] shrink-0 animate-pulse" />
                    {service.footerLabel}
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1.5 lg:gap-2 text-[#B8CBBD] whitespace-nowrap shrink-0">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#B8CBBD] shrink-0" />
                    {service.footerLabel}
                  </span>
                )}
                <a
                  href={buildWhatsAppUrl(WHATSAPP_MESSAGES.service(service.inquiryName))}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Inquire about ${service.inquiryName} on WhatsApp`}
                  className={`inline-flex items-center gap-1.5 lg:gap-2 whitespace-nowrap shrink-0 transition-colors ${
                    service.isPrimary
                      ? 'text-[#5FFF95] hover:text-white'
                      : 'text-[#B8CBBD] hover:text-[#5FFF95]'
                  }`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 lg:w-4 lg:h-4 shrink-0 fill-current" />
                  <span>Get a quote</span>
                  <span className="material-symbols-outlined text-[15px] lg:text-[18px] shrink-0">
                    arrow_forward
                  </span>
                </a>
              </div>
            </div>
          </RevealItem>
        ))}
      </RevealGrid>
    </section>
  );
}
