import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { BRAND_ASSETS } from '../data/content';

interface NavbarProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onNavigate }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 25);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'experience', label: 'Experience' },
    { id: 'insights', label: 'Insights' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          isScrolled
            ? 'bg-[#0F2A47]/95 backdrop-blur-md shadow-2xl border-b border-[#D6B465]/20 py-3.5'
            : 'bg-[#102A43] py-5 border-b border-[#F3EFE6]/10'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Zone 1: Official Logo in luxury bevel enclosure */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 text-left group focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B465] transition-all duration-300"
            aria-label="Gabriela Centanino - Strategic Talent & People Culture"
          >
            {/* Museum-style logo plinth */}
            <div className="relative p-1 bg-[#FAF8F5] rounded-xs shadow-md border border-[#D6B465]/40 transition-transform duration-300 group-hover:scale-[1.02]">
              <img
                src={BRAND_ASSETS.logoUrl}
                alt="Gabriela Centanino Logo"
                className="h-8 sm:h-9 w-auto object-contain block"
                referrerPolicy="no-referrer"
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-[#D6B465]" />
              <span className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-[#D6B465]" />
            </div>

            <div className="hidden sm:block">
              <span className="block text-[#FAF8F5] font-serif text-lg tracking-wide font-normal leading-tight group-hover:text-[#D6B465] transition-colors">
                Gabriela Centanino
              </span>
              <span className="block text-[#D6B465] text-[9.5px] tracking-[0.25em] uppercase font-sans font-medium mt-0.5">
                Strategic Talent Acquisition &amp; Culture
              </span>
            </div>
          </button>

          {/* Zone 2: Navigation Links (Desk) with refined typography */}
          <nav
            className="hidden md:flex items-center gap-7 lg:gap-9 text-[12px] tracking-[0.16em] uppercase font-sans font-medium text-[#F3EFE6]/80"
            aria-label="Main Navigation"
          >
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`relative py-1.5 transition-all duration-200 cursor-pointer hover:text-[#D6B465] focus-visible:outline-none ${
                    isActive ? 'text-[#D6B465] font-semibold' : ''
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#D6B465] shadow-[0_0_8px_rgba(214,180,101,0.6)]" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: Luxury Metallic Gold CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden sm:inline-flex items-center gap-2.5 px-5 py-2.5 text-xs font-semibold uppercase tracking-[0.15em] text-[#0A1C30] bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] hover:brightness-105 active:scale-[0.98] transition-all duration-200 rounded-xs shadow-md border border-[#FAF8F5]/30 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B465]"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[2.5]" />
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#FAF8F5] hover:text-[#D6B465] transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B465] rounded-xs border border-[#F3EFE6]/10"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Luxury Overlay Menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-30 bg-[#09192B]/98 backdrop-blur-xl flex flex-col justify-between pt-28 pb-10 px-8 md:hidden transition-all duration-300"
          role="dialog"
          aria-modal="true"
        >
          <div className="flex flex-col gap-6 pt-2">
            <div className="flex items-center gap-2 mb-2">
              <span className="w-4 h-[1px] bg-[#D6B465]" />
              <span className="text-[#D6B465] text-[10px] font-semibold tracking-[0.3em] uppercase">
                Consultancy Index
              </span>
            </div>

            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left text-2xl font-serif py-1.5 transition-colors tracking-wide ${
                    isActive
                      ? 'text-[#D6B465] font-semibold pl-3 border-l border-[#D6B465]'
                      : 'text-[#FAF8F5] hover:text-[#D6B465]'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-8 border-t border-[#F3EFE6]/15 flex flex-col gap-4">
            <button
              onClick={() => handleNavClick('contact')}
              className="w-full flex items-center justify-center gap-2.5 py-4 px-6 text-xs font-semibold uppercase tracking-[0.2em] text-[#0A1C30] bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] rounded-xs shadow-lg"
            >
              <span>Initiate Consultation</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
            <p className="text-center text-[11px] text-[#F3EFE6]/60 font-sans tracking-wider">
              Strategic Talent Acquisition · People Operations · Culture
            </p>
          </div>
        </div>
      )}
    </>
  );
};
