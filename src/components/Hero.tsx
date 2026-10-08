import React from 'react';
import { ArrowRight, ArrowDown, Award, Sparkles, Building2, Users } from 'lucide-react';
import { BRAND_ASSETS } from '../data/content';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section
      id="home"
      className="relative min-h-[96vh] pt-32 pb-24 md:pt-40 md:pb-32 bg-[#102A43] text-[#F3EFE6] flex items-center overflow-hidden bg-grain-dark"
    >
      {/* Architectural Atmospheric Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Soft Gold Radial Ambient Glow */}
        <div className="absolute -top-32 right-1/4 w-[600px] h-[600px] bg-[#D6B465]/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-0 left-10 w-[500px] h-[500px] bg-[#0F2A47]/40 rounded-full blur-[120px]" />
        
        {/* Subtle Luxury Drafting Grid Lines */}
        <div className="max-w-7xl mx-auto h-full border-x border-[#F3EFE6]/5 grid grid-cols-12 opacity-30">
          <div className="col-span-4 border-r border-[#F3EFE6]/5" />
          <div className="col-span-4 border-r border-[#F3EFE6]/5" />
          <div className="col-span-4" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Headlines & Strategy */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Small Eyebrow with Brass Accents */}
            <div className="flex items-center gap-3 mb-6">
              <span className="w-8 h-[1px] bg-gradient-to-r from-[#D6B465] to-transparent" />
              <p className="text-[#D6B465] text-xs font-semibold tracking-[0.3em] uppercase font-sans">
                TALENT <span className="text-[#F3EFE6]/40">·</span> PEOPLE <span className="text-[#F3EFE6]/40">·</span> CULTURE
              </p>
            </div>

            {/* Main Headline with Editorial Serif Emphasis */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.35rem] leading-[1.07] font-serif text-[#FAF8F5] mb-8 font-normal tracking-tight">
              Building teams that move <span className="italic font-serif font-light text-[#D6B465]">ambitious</span> companies forward<span className="text-[#D6B465]">.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg md:text-[1.15rem] text-[#F3EFE6]/85 font-sans leading-relaxed max-w-2xl mb-10 font-light">
              Gabriela Centanino is a strategic Talent Acquisition and People &amp; Culture professional helping growth-oriented organizations attract exceptional talent, strengthen their people practices, and build cultures designed for growth.
            </p>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-1">
              <button
                onClick={() => onNavigate('contact')}
                className="px-8 py-4 bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] text-[#0A1C30] font-semibold text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 rounded-xs shadow-xl hover:shadow-[0_0_25px_rgba(214,180,101,0.4)] hover:brightness-105 active:scale-[0.98] cursor-pointer flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B465]"
              >
                <span>Work With Gabriela</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 stroke-[2.5]" />
              </button>

              <button
                onClick={() => onNavigate('experience')}
                className="px-8 py-4 border border-[#F3EFE6]/25 hover:border-[#D6B465] text-[#F3EFE6] hover:text-[#D6B465] font-medium text-xs sm:text-sm uppercase tracking-[0.16em] transition-all duration-300 rounded-xs hover:bg-[#F3EFE6]/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D6B465]"
              >
                Explore Her Experience
              </button>
            </div>

            {/* Refined Brass Metrics Ribbon */}
            <div className="mt-14 pt-8 border-t border-[#F3EFE6]/10 grid grid-cols-2 sm:grid-cols-3 gap-6 text-[#F3EFE6]/80">
              <div className="flex flex-col border-l border-[#D6B465]/40 pl-4">
                <span className="font-serif text-3xl text-[#FAF8F5] font-light">8+ Years</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B465] font-medium mt-1 font-sans">
                  Strategic Practice
                </span>
              </div>
              <div className="flex flex-col border-l border-[#D6B465]/40 pl-4">
                <span className="font-serif text-3xl text-[#FAF8F5] font-light">End-to-End</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B465] font-medium mt-1 font-sans">
                  Executive Search &amp; HRIS
                </span>
              </div>
              <div className="hidden sm:flex flex-col border-l border-[#D6B465]/40 pl-4">
                <span className="font-serif text-3xl text-[#FAF8F5] font-light">Boutique</span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#D6B465] font-medium mt-1 font-sans">
                  High-Touch Advisory
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Museum-Grade Editorial Portrait Presentation */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative max-w-md w-full">
              {/* Outer Architectural Brass Frame with Corner Markers */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#D6B465]/35 rounded-xs pointer-events-none">
                <span className="absolute -top-1.5 -left-1.5 w-3 h-3 border-t-2 border-l-2 border-[#D6B465]" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 border-t-2 border-r-2 border-[#D6B465]" />
                <span className="absolute -bottom-1.5 -left-1.5 w-3 h-3 border-b-2 border-l-2 border-[#D6B465]" />
                <span className="absolute -bottom-1.5 -right-1.5 w-3 h-3 border-b-2 border-r-2 border-[#D6B465]" />
              </div>

              {/* Museum Passe-Partout Matting */}
              <div className="relative z-10 bg-[#0A1C30] p-3 sm:p-4 shadow-2xl rounded-xs border border-[#F3EFE6]/10">
                <div className="relative overflow-hidden bg-[#0F2A47] rounded-xs group">
                  <img
                    src={BRAND_ASSETS.portraitUrl}
                    alt="Gabriela Centanino - Strategic Talent Acquisition & People Culture"
                    className="w-full h-auto max-h-[580px] object-cover object-top filter contrast-[1.03] brightness-[0.98] transition-transform duration-700 group-hover:scale-[1.015]"
                    loading="eager"
                    referrerPolicy="no-referrer"
                  />

                  {/* Gradient Scrim for Contrast & Elegance */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Floating Plaque 1: Competencies Card */}
                  <div className="absolute bottom-4 left-4 right-4 p-4 bg-[#0F2A47]/95 backdrop-blur-md border border-[#D6B465]/40 rounded-xs shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-[#D6B465] text-[9.5px] tracking-[0.25em] uppercase font-semibold">
                          Executive Discipline
                        </p>
                        <p className="text-white text-xs font-serif tracking-wide mt-0.5">
                          Recruitment <span className="text-[#D6B465]">·</span> Culture <span className="text-[#D6B465]">·</span> People Operations
                        </p>
                      </div>
                      <span className="text-[10px] font-sans font-semibold tracking-wider text-[#FAF8F5] bg-[#D6B465]/25 px-2.5 py-1 border border-[#D6B465]/50 rounded-xs uppercase">
                        Principal
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subtitle Bar below picture */}
                <div className="mt-3 pt-2 border-t border-[#F3EFE6]/10 flex items-center justify-between text-[11px] text-[#F3EFE6]/60 font-sans">
                  <span>Los Angeles, California</span>
                  <span className="text-[#D6B465]">8+ Years Practice</span>
                </div>
              </div>

              {/* Floating Architectural Credential Tag */}
              <div className="hidden sm:block absolute -top-5 -left-8 z-20 bg-[#FAF8F5] text-[#0F2A47] px-4 py-2.5 shadow-2xl border-l-2 border-[#D6B465] rounded-xs">
                <p className="text-[9.5px] uppercase font-bold tracking-[0.2em] text-[#0F2A47]/60">
                  Focus Ecosystems
                </p>
                <p className="text-xs font-serif font-bold text-[#0F2A47] mt-0.5">
                  High-Growth &amp; Consumer Brands
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom invitation */}
        <div className="mt-16 sm:mt-24 flex justify-center">
          <button
            onClick={() => onNavigate('trust')}
            className="flex flex-col items-center gap-2 text-xs text-[#F3EFE6]/50 hover:text-[#D6B465] transition-colors focus-visible:outline-none cursor-pointer group"
            aria-label="Scroll down to sectors"
          >
            <span className="tracking-[0.25em] uppercase text-[9.5px] font-medium group-hover:text-[#D6B465]">
              Explore Sectors &amp; Philosophy
            </span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce text-[#D6B465]" />
          </button>
        </div>
      </div>
    </section>
  );
};
