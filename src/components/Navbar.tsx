import { useState } from 'react';
import { CONTACT_INFO, NAV_LINKS } from '../data/portfolio';

export function Navbar() {
  const [activePath, setActivePath] = useState<string>('work');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface/85 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.4)]">
      <div className="h-20 max-w-[1320px] mx-auto px-gutter flex items-center justify-between">
        <a
          className="font-title-md text-title-md tracking-wider text-on-surface hover:text-primary transition-colors flex items-center gap-2"
          data-path="work"
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setActivePath('work');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          <span>WALEED REHAN</span>
        </a>

        <nav className="hidden md:flex items-center gap-space-lg" data-active-classes="text-on-surface font-semibold">
          {NAV_LINKS.map((link) => {
            const isActive = activePath === link.path;
            return (
              <a
                key={link.path}
                aria-current={isActive ? 'page' : undefined}
                className={
                  isActive
                    ? 'transition-colors font-button text-button uppercase tracking-wider text-on-surface font-semibold'
                    : 'text-secondary hover:text-on-surface transition-colors font-button text-button uppercase tracking-wider'
                }
                data-path={link.path}
                href={link.href}
                onClick={() => setActivePath(link.path)}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        <div className="flex items-center gap-space-sm">
          <a
            className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-primary-container hover:bg-primary-hover text-on-primary-container font-button text-button font-semibold tracking-wide transition-all shadow-[0_0_20px_rgba(52,226,122,0.25)] hover:shadow-[0_0_28px_rgba(92,240,149,0.4)]"
            data-path="hire-me"
            href={CONTACT_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Hire me
          </a>
        </div>
      </div>
    </header>
  );
}
