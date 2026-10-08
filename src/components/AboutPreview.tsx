import React from 'react';
import { ArrowRight, CheckCircle2, Sparkles, Compass, Shield, Users } from 'lucide-react';
import { BRAND_ASSETS } from '../data/content';

interface AboutPreviewProps {
  onNavigate: (sectionId: string) => void;
  onOpenAboutModal: () => void;
}

export const AboutPreview: React.FC<AboutPreviewProps> = ({ onNavigate, onOpenAboutModal }) => {
  return (
    <section id="about" className="py-28 sm:py-36 bg-[#F3EFE6] text-[#0F2A47] relative bg-grain overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-20 items-center">
          {/* Column 1: Archival Editorial Portrait Presentation */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative max-w-md mx-auto lg:mx-0">
              {/* Outer Decorative Brass Frame */}
              <div className="absolute -inset-3.5 border border-[#BA9544]/35 rounded-xs pointer-events-none">
                <span className="absolute -top-1 -left-1 w-2.5 h-2.5 border-t border-l border-[#BA9544]" />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 border-t border-r border-[#BA9544]" />
                <span className="absolute -bottom-1 -left-1 w-2.5 h-2.5 border-b border-l border-[#BA9544]" />
                <span className="absolute -bottom-1 -right-1 w-2.5 h-2.5 border-b border-r border-[#BA9544]" />
              </div>

              {/* Matting Container */}
              <div className="relative z-10 bg-[#FAF8F5] p-3 sm:p-4 shadow-xl rounded-xs border border-[#0F2A47]/10">
                <div className="overflow-hidden rounded-xs bg-[#0F2A47] relative group">
                  <img
                    src={BRAND_ASSETS.portraitUrl}
                    alt="Gabriela Centanino Portrait"
                    className="w-full h-auto object-cover object-top filter contrast-[1.02] hover:scale-[1.015] transition-transform duration-700"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A1C30]/75 via-transparent to-transparent pointer-events-none" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-white text-center">
                    <p className="font-serif text-sm tracking-wide">
                      Gabriela Centanino
                    </p>
                    <p className="text-[#D6B465] text-[10px] font-sans uppercase tracking-[0.2em] mt-0.5">
                      Strategic Talent &amp; People Leader
                    </p>
                  </div>
                </div>

                {/* Editorial Quote Card below portrait */}
                <div className="mt-4 p-4 bg-[#F1EDE3] rounded-xs border-l-2 border-[#BA9544] text-xs font-serif text-[#0F2A47]/85 italic leading-relaxed">
                  “Building teams is never purely transactional; it is the craft of aligning human potential with business intent.”
                </div>
              </div>
            </div>
          </div>

          {/* Column 2: Content & Philosophy */}
          <div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center">
            {/* Section Eyebrow */}
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#BA9544]" />
              <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
                Perspective &amp; Philosophy
              </span>
            </div>

            {/* Section Headline */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#0F2A47] leading-[1.12] mb-8 font-normal">
              People strategy is business strategy<span className="text-[#BA9544]">.</span>
            </h2>

            {/* Core Body Copy matching prompt exactly */}
            <div className="space-y-6 text-base sm:text-lg text-[#0F2A47]/85 font-light leading-relaxed font-sans">
              <p>
                Gabriela brings a strategic, human-centered approach to talent acquisition and people operations, combining recruiting expertise with a deep understanding of culture, candidate experience, employee engagement, and organizational growth.
              </p>
              <p>
                Her experience spans high-growth consumer, beauty, wellness, hospitality, and technology environments, where building the right team and the right culture can become a genuine competitive advantage.
              </p>
            </div>

            {/* Strategic Pillars with Premium Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 pt-8 border-t border-[#0F2A47]/10 text-sm">
              <div className="p-4 bg-[#FAF8F5] border border-[#0F2A47]/10 rounded-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#BA9544]/15 text-[#BA9544] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#0F2A47] text-base">Rigor Without Friction</h4>
                  <p className="text-[#0F2A47]/75 text-xs mt-1 leading-normal font-sans font-light">
                    Structured evaluation scorecards that evaluate capability, culture add, and long-term potential.
                  </p>
                </div>
              </div>

              <div className="p-4 bg-[#FAF8F5] border border-[#0F2A47]/10 rounded-xs flex items-start gap-3.5">
                <div className="w-8 h-8 rounded-full bg-[#BA9544]/15 text-[#BA9544] flex items-center justify-center shrink-0 mt-0.5">
                  <Users className="w-4 h-4 stroke-[2]" />
                </div>
                <div>
                  <h4 className="font-serif font-semibold text-[#0F2A47] text-base">Human Candidate Care</h4>
                  <p className="text-[#0F2A47]/75 text-xs mt-1 leading-normal font-sans font-light">
                    Elevating the recruiting journey into an authentic, respectful brand asset for the company.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 mt-10">
              <button
                onClick={onOpenAboutModal}
                className="px-7 py-3.5 bg-[#0F2A47] hover:bg-[#163657] text-[#FAF8F5] text-xs sm:text-sm font-semibold uppercase tracking-[0.15em] transition-all duration-200 rounded-xs shadow-md flex items-center gap-2.5 group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#0F2A47]"
              >
                <span>Meet Gabriela</span>
                <ArrowRight className="w-4 h-4 text-[#D6B465] transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('experience')}
                className="px-7 py-3.5 border border-[#0F2A47]/30 hover:border-[#BA9544] text-[#0F2A47] hover:text-[#BA9544] text-xs sm:text-sm font-medium uppercase tracking-[0.15em] transition-all duration-200 rounded-xs hover:bg-[#0F2A47]/5 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#BA9544]"
              >
                View Career Timeline
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
