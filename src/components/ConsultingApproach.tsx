import React from 'react';
import { METHODOLOGY_STEPS } from '../data/content';
import { ArrowRight } from 'lucide-react';

export const ConsultingApproach: React.FC = () => {
  return (
    <section id="approach" className="py-28 sm:py-36 bg-[#102A43] text-[#F3EFE6] relative overflow-hidden bg-grain-dark border-t border-[#F3EFE6]/10">
      {/* Background Architectural Blueprint Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="max-w-7xl mx-auto h-full border-x border-[#D6B465]/20 grid grid-cols-4">
          <div className="border-r border-[#D6B465]/10" />
          <div className="border-r border-[#D6B465]/10" />
          <div className="border-r border-[#D6B465]/10" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#D6B465]" />
            <span className="text-[#D6B465] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
              Methodology
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] font-serif text-[#FAF8F5] leading-[1.12] font-normal mb-6">
            A thoughtful approach to building <span className="italic font-serif font-light text-[#D6B465]">better</span> teams<span className="text-[#D6B465]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#F3EFE6]/80 font-light font-sans leading-relaxed">
            Every engagement follows a structured, collaborative cadence designed to eliminate ambiguity, align key stakeholders, and engineer sustainable organizational capability.
          </p>
        </div>

        {/* 4-Step Methodology Grid with Connecting Line */}
        <div className="relative">
          {/* Subtle connecting brass line across steps on desktop */}
          <div className="hidden lg:block absolute top-12 left-10 right-10 h-[1px] bg-gradient-to-r from-transparent via-[#D6B465]/40 to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 relative z-10">
            {METHODOLOGY_STEPS.map((step, idx) => (
              <div
                key={step.number}
                className="relative p-8 sm:p-9 bg-[#0F2A47]/90 backdrop-blur-md border border-[#F3EFE6]/10 hover:border-[#D6B465]/70 transition-all duration-300 rounded-xs flex flex-col justify-between group shadow-xl hover:-translate-y-1"
              >
                <div>
                  {/* Step Number & Step Indicator */}
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F3EFE6]/10">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#D6B465]/70 group-hover:text-[#D6B465] transition-colors">
                      {step.number}
                    </span>
                    <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#D6B465] bg-[#D6B465]/10 px-2 py-0.5 rounded-xs border border-[#D6B465]/20">
                      Phase 0{idx + 1}
                    </span>
                  </div>

                  {/* Step Title */}
                  <h3 className="text-2xl font-serif text-[#FAF8F5] font-normal mb-1.5 tracking-wide">
                    {step.name}
                  </h3>
                  <p className="text-[11px] uppercase tracking-[0.16em] text-[#D6B465] font-medium mb-4 font-sans">
                    {step.tagline}
                  </p>

                  {/* Step Description */}
                  <p className="text-sm text-[#F3EFE6]/75 font-sans font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Bottom Architectural Focus Tag */}
                <div className="mt-8 pt-4 border-t border-[#F3EFE6]/10 flex items-center justify-between text-[11px] font-sans text-[#F3EFE6]/60">
                  <span className="uppercase tracking-wider">
                    {idx === 0 && 'Discovery'}
                    {idx === 1 && 'Framework'}
                    {idx === 2 && 'Activation'}
                    {idx === 3 && 'Optimization'}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D6B465]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
