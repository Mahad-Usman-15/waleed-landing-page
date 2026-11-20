import { useState } from 'react';
import { FAQS } from '../data/portfolio';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { MinusIcon, PlusIcon } from './Icons';

export function FaqSection() {
  const [openIds, setOpenIds] = useState<Record<string, boolean>>(() => {
    const initial: Record<string, boolean> = {};
    for (const faq of FAQS) {
      if (faq.defaultOpen) {
        initial[faq.id] = true;
      }
    }
    return initial;
  });

  const toggleFaq = (id: string) => {
    setOpenIds((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section
      id="faqs"
      className="w-full bg-[#000000] border-t border-outline relative py-[120px]"
    >
      {/* Timeline Motif Divider at top */}
      <div aria-hidden="true" className="w-full max-w-[1320px] mx-auto px-6 mb-16" />

      <div className="max-w-[1320px] mx-auto px-6 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-6 items-start">
          {/* Left Column (4 cols, sticky) */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col items-start">
            <div className="font-label-md text-[13px] font-semibold tracking-wider text-[#34E27A] uppercase mb-3 text-left">
              FAQS
            </div>
            <h2
              className="font-headline-lg uppercase text-[#EAF3EC] tracking-wide text-left text-[44px] sm:text-[64px] leading-none mb-8"
              style={{ fontFamily: "'BBH Sans Bogle', 'Bebas Neue', sans-serif" }}
            >
              COMMON QUESTIONS
            </h2>
            <p className="font-body-md text-[17px] text-[#9DB0A2] max-w-[320px] mb-8 leading-relaxed text-left">
              Have a different question? Message me on WhatsApp.
            </p>
            <a
              href={buildWhatsAppUrl(WHATSAPP_MESSAGES.faq)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-[52px] px-6 rounded-full border border-[#34E27A] text-[#34E27A] hover:bg-[#34E27A] hover:text-[#04110A] font-button text-[15px] font-semibold transition-all duration-200 tracking-wide"
            >
              Message me on WhatsApp
            </a>
          </div>

          {/* Right Column (8 cols): Accordion */}
          <div className="lg:col-span-8 flex flex-col w-full divide-y divide-[#34E27A]/[0.12] border-t border-b border-[#34E27A]/[0.12]">
            {FAQS.map((faq) => {
              const isOpen = Boolean(openIds[faq.id]);
              return (
                <div key={faq.id} className="py-7 flex flex-col w-full text-left">
                  <button
                    type="button"
                    aria-expanded={isOpen}
                    onClick={() => toggleFaq(faq.id)}
                    className="flex items-center justify-between gap-4 cursor-pointer group w-full text-left"
                  >
                    <span className="font-body-md font-semibold text-[20px] text-[#EAF3EC] group-hover:text-[#34E27A] transition-colors text-left">
                      {faq.question}
                    </span>
                    <span className="shrink-0 text-[#34E27A] flex items-center justify-center w-6 h-6">
                      {isOpen ? <MinusIcon /> : <PlusIcon />}
                    </span>
                  </button>
                  {isOpen && (
                    <div className="mt-4 max-w-[640px] text-left font-body-md text-[17px] text-[#9DB0A2] leading-[1.6]">
                      {faq.answer}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
