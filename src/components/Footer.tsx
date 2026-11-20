import { CONTACT_INFO, NAV_LINKS } from '../data/portfolio';
import { buildWhatsAppUrl, WHATSAPP_MESSAGES } from '../utils/portfolio';
import { WhatsAppIcon } from './Icons';
import { Reveal, RevealGrid, RevealItem } from './MotionPrimitives';

export function Footer() {
  return (
    <>
      <footer className="w-full bg-surface-container-lowest mt-space-xl relative overflow-hidden">
        <div className="max-w-[1320px] mx-auto px-gutter py-space-xl">
          <RevealGrid className="grid grid-cols-1 md:grid-cols-12 gap-space-lg mb-space-lg">
            <RevealItem className="md:col-span-5 space-y-space-sm">
              <div className="font-headline-md text-headline-md tracking-wider text-on-surface uppercase">
                WALEED REHAN
              </div>
              <p className="font-body-md text-body-md text-secondary max-w-sm">
                Motion designer and video editor specializing in explainers, promotional cuts, and
                brand motion systems.
              </p>
            </RevealItem>

            <RevealItem className="md:col-span-3 space-y-space-xs">
              <div className="font-label-md text-label-md uppercase text-primary tracking-widest">
                quick links
              </div>
              <ul className="space-y-2">
                {NAV_LINKS.map((link) => (
                  <li key={link.path} className="list-none">
                    <a
                      className="font-body-md text-body-md text-secondary hover:text-on-surface transition-colors"
                      data-path={link.path}
                      href={link.href}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </RevealItem>

            <RevealItem className="md:col-span-4 space-y-space-xs">
              <div className="font-label-md text-label-md uppercase text-primary tracking-widest">
                Contact
              </div>
              <div className="space-y-2">
                <p className="text-body-md">
                  <a
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
                    href={`mailto:${CONTACT_INFO.email}`}
                  >
                    {CONTACT_INFO.email}
                  </a>
                </p>
                <p className="text-body-md">
                  <a
                    className="text-secondary hover:text-primary transition-colors flex items-center gap-2"
                    href={buildWhatsAppUrl(WHATSAPP_MESSAGES.bannerAndFooter)}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {CONTACT_INFO.phoneDisplay}
                  </a>
                </p>
              </div>
            </RevealItem>
          </RevealGrid>

          <Reveal className="pt-space-md flex flex-col sm:flex-row items-center justify-between gap-space-sm text-secondary font-label-md text-label-md">
            <div>© 2026 Waleed Rehan. All rights reserved.</div>
            <a
              className="text-secondary hover:text-primary transition-colors flex items-center gap-1 uppercase tracking-wider"
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
            >
              <span>Back to top</span>
              <span className="material-symbols-outlined text-[16px]">arrow_upward</span>
            </a>
          </Reveal>
        </div>
      </footer>

      <a
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-primary-container text-on-primary-container hover:bg-primary-hover shadow-[0_8px_24px_rgba(52,226,122,0.35)] flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
        href={buildWhatsAppUrl(WHATSAPP_MESSAGES.bannerAndFooter)}
        rel="noopener noreferrer"
        target="_blank"
      >
        <WhatsAppIcon className="w-7 h-7 fill-current" />
      </a>
    </>
  );
}
