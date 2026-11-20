import { SERVICES } from '../data/portfolio';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { ServiceIcon, WhatsAppIcon } from './Icons';

export function ServicesSection() {
  return (
    <section
      id="services"
      className="w-full max-w-[1320px] mx-auto px-6 py-28 flex flex-col gap-14 border-t border-[#34E27A]/15"
    >
      <div className="flex flex-col items-start gap-3">
        <span className="text-[13px] font-semibold tracking-[0.1em] uppercase text-[#5FFF95] font-['Montserrat']">
          CAPABILITIES
        </span>
        <h2 className="text-[44px] sm:text-[64px] leading-none uppercase text-[#E2E2E2] font-['BBH_Sans_Bogle',_'Bebas_Neue',_sans-serif] tracking-[0.025em]">
          SERVICES I OFFER
        </h2>
        <p className="max-w-[512px] text-[17px] leading-[1.65] text-[#B8CBBD] font-['Montserrat']">
          Tailored motion design and editing solutions built to elevate your vision with speed,
          clarity, and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
        {SERVICES.map((service) => (
          <div
            key={service.number}
            className="bg-[#0B120D] border border-[#34E27A]/15 rounded-2xl p-8 flex flex-col justify-between min-h-[314px] transition-all hover:border-[#34E27A]/40 hover:bg-[#121C15]"
          >
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
              <p className="text-[17px] leading-[1.6] text-[#B8CBBD] font-['Montserrat']">
                {service.description}
              </p>
            </div>
            <div className="pt-4 border-t border-[#34E27A]/30 flex items-center justify-between gap-4 text-[13px] font-semibold tracking-wider uppercase font-['Montserrat'] mt-6">
              {service.isPrimary ? (
                <span className="inline-flex items-center gap-2 text-[#5FFF95]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#5FFF95] animate-pulse" />
                  {service.footerLabel}
                </span>
              ) : (
                <span className="inline-flex items-center gap-2 text-[#B8CBBD]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B8CBBD]" />
                  {service.footerLabel}
                </span>
              )}
              <a
                href={buildWhatsAppUrl(WHATSAPP_MESSAGES.service(service.inquiryName))}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Inquire about ${service.inquiryName} on WhatsApp`}
                className={`inline-flex items-center gap-2 transition-colors ${
                  service.isPrimary
                    ? 'text-[#5FFF95] hover:text-white'
                    : 'text-[#B8CBBD] hover:text-[#5FFF95]'
                }`}
              >
                <WhatsAppIcon className="w-4 h-4 shrink-0 fill-current" />
                <span>Get a quote</span>
                <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
