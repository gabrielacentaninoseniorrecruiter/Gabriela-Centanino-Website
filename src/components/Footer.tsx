import React from 'react';
import { BRAND_ASSETS, SERVICES } from '../data/content';
import { ArrowUpRight, Mail } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenPrivacy, onOpenTerms }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#09192B] text-[#F3EFE6] pt-24 pb-14 border-t border-[#D6B465]/20 bg-grain-dark relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-16 pb-16 border-b border-[#F3EFE6]/10">
          {/* Brand & Identity Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo in elegant container */}
            <div className="inline-flex items-center gap-3.5">
              <div className="relative p-1 bg-[#FAF8F5] rounded-xs shadow-md border border-[#D6B465]/40">
                <img
                  src={BRAND_ASSETS.logoUrl}
                  alt="Gabriela Centanino Logo"
                  className="h-8 sm:h-9 w-auto object-contain block"
                  referrerPolicy="no-referrer"
                />
                <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#D6B465]" />
                <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#D6B465]" />
              </div>
              <div>
                <span className="block text-[#FAF8F5] font-serif text-lg tracking-wide leading-none font-medium">
                  Gabriela Centanino
                </span>
                <span className="block text-[#D6B465] text-[9.5px] tracking-[0.25em] uppercase font-sans mt-0.5 font-semibold">
                  Talent Acquisition &amp; Culture
                </span>
              </div>
            </div>

            {/* Short Statement */}
            <p className="font-serif text-2xl sm:text-3xl text-[#FAF8F5] max-w-sm font-normal leading-snug">
              Strategic talent. Stronger cultures. Better <span className="italic font-serif font-light text-[#D6B465]">growth</span><span className="text-[#D6B465]">.</span>
            </p>

            <p className="text-xs sm:text-sm text-[#F3EFE6]/70 font-light font-sans leading-relaxed max-w-md">
              Partnering with growth-stage, consumer, beauty, wellness, hospitality, and technology organizations to attract exceptional people and design resilient cultures.
            </p>

            {/* Direct Email Link */}
            <div className="pt-2">
              <a
                href={`mailto:${BRAND_ASSETS.email}`}
                className="inline-flex items-center gap-2 text-xs text-[#D6B465] hover:text-[#FAF8F5] transition-colors font-sans tracking-wider"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>{BRAND_ASSETS.email}</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D6B465] font-sans block mb-2">
              Navigation
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F3EFE6]/80 font-sans">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  About Gabriela
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('services')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  Consulting Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('experience')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  Career Experience
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('insights')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  Insights &amp; Perspectives
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-[#D6B465] transition-colors cursor-pointer"
                >
                  Contact &amp; Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Practice Areas / Services */}
          <div className="lg:col-span-4 space-y-4">
            <span className="text-[10px] uppercase font-bold tracking-[0.25em] text-[#D6B465] font-sans block mb-2">
              Areas of Practice
            </span>
            <ul className="space-y-3 text-xs sm:text-sm text-[#F3EFE6]/80 font-sans">
              {SERVICES.map((s) => (
                <li key={s.number}>
                  <button
                    onClick={() => onNavigate('services')}
                    className="hover:text-[#D6B465] transition-colors cursor-pointer text-left"
                  >
                    {s.title}
                  </button>
                </li>
              ))}
            </ul>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('contact')}
                className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.16em] uppercase text-[#D6B465] hover:text-white transition-colors cursor-pointer"
              >
                <span>Initiate a Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F3EFE6]/60 font-sans">
          <p>
            © {currentYear} Gabriela Centanino. All rights reserved.
          </p>

          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-[#D6B465] transition-colors cursor-pointer"
            >
              Privacy &amp; Discretion
            </button>
            <span className="text-[#D6B465]/40">·</span>
            <button
              onClick={onOpenTerms}
              className="hover:text-[#D6B465] transition-colors cursor-pointer"
            >
              Terms of Engagement
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
