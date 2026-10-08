import React from 'react';
import { TESTIMONIALS } from '../data/content';
import { Quote } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  return (
    <section id="testimonials" className="py-28 sm:py-36 bg-[#F1EDE3] text-[#0F2A47] border-y border-[#0F2A47]/10 relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#BA9544]" />
            <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
              Endorsements &amp; Peer Perspectives
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2A47] leading-[1.12] font-normal mb-6">
            Trusted by executive partners &amp; colleagues<span className="text-[#BA9544]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0F2A47]/80 font-light font-sans leading-relaxed">
            Direct perspectives from cross-functional leaders on collaboration, talent execution, and culture design.
          </p>
        </div>

        {/* Testimonials Grid with Editorial Impact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Main Primary Testimonial (Cori P.) */}
          <div className="lg:col-span-8 bg-[#FAF8F5] p-8 sm:p-12 md:p-14 rounded-xs border border-[#0F2A47]/10 relative shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#0F2A47]/10">
                <Quote className="w-10 h-10 text-[#D6B465]/60" />
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#BA9544] font-semibold">
                  Executive Endorsement
                </span>
              </div>

              <blockquote className="text-xl sm:text-2xl md:text-[1.65rem] font-serif text-[#0F2A47] leading-relaxed font-normal mb-10">
                “{TESTIMONIALS[0].quote.replace(/^“|”$/g, '')}”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#0F2A47]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              <div>
                <h3 className="font-serif text-xl font-bold text-[#0F2A47]">
                  {TESTIMONIALS[0].author}
                </h3>
                <p className="text-xs sm:text-sm text-[#0F2A47]/70 font-sans tracking-wide mt-0.5">
                  {TESTIMONIALS[0].title}
                </p>
              </div>

              <span className="text-[11px] font-sans text-[#0F2A47]/60 italic">
                Verified Recommendation
              </span>
            </div>
          </div>

          {/* Secondary Testimonial (Martha Gil) in Deep Navy */}
          <div className="lg:col-span-4 bg-[#102A43] text-[#F3EFE6] p-8 sm:p-10 rounded-xs border border-[#D6B465]/40 relative shadow-lg flex flex-col justify-between bg-grain-dark">
            <div>
              <div className="flex items-center justify-between mb-8 pb-4 border-b border-[#F3EFE6]/10">
                <Quote className="w-8 h-8 text-[#D6B465]/70" />
                <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-[#D6B465] font-semibold">
                  Colleague Reference
                </span>
              </div>

              <blockquote className="text-lg sm:text-xl font-serif text-[#FAF8F5] leading-relaxed mb-8 font-normal">
                “{TESTIMONIALS[1].quote.replace(/^“|”$/g, '')}”
              </blockquote>
            </div>

            <div className="pt-6 border-t border-[#F3EFE6]/10">
              <h3 className="font-serif text-lg font-bold text-[#FAF8F5]">
                {TESTIMONIALS[1].author}
              </h3>
              <p className="text-xs text-[#D6B465] font-sans tracking-wide mt-0.5">
                Professional Peer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
