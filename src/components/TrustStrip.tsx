import React from 'react';
import { TRUST_CATEGORIES } from '../data/content';

export const TrustStrip: React.FC = () => {
  const sectorDetails: Record<string, string> = {
    BEAUTY: 'Brand Building & Creative Talent',
    WELLNESS: 'Holistic Health & Mission-Driven Culture',
    CPG: 'Consumer Packaged Goods Scaling',
    HOSPITALITY: 'High-Touch Service & Operations',
    TECHNOLOGY: 'Engineering, Product & Corporate Hiring',
    'GROWTH-STAGE COMPANIES': 'High-Velocity Scaling & Infrastructure',
  };

  return (
    <section
      id="trust"
      className="py-14 sm:py-20 bg-[#F1EDE3] border-y border-[#0F2A47]/10 relative bg-grain"
      aria-label="Industries and Growth Environments"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Subtle Editorial Kicker */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-3 mb-2">
            <span className="w-6 h-[1px] bg-[#BA9544]" />
            <p className="text-[10px] sm:text-xs uppercase tracking-[0.28em] font-sans font-semibold text-[#BA9544]">
              Sector Fluency
            </p>
            <span className="w-6 h-[1px] bg-[#BA9544]" />
          </div>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-serif text-[#0F2A47] font-normal leading-snug">
            Experience across ambitious teams, brands, and growth environments<span className="text-[#BA9544]">.</span>
          </h2>
        </div>

        {/* Editorial Sector Grid with Fine Hairline Borders */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {TRUST_CATEGORIES.map((category, idx) => (
            <div
              key={category}
              className="group p-5 bg-[#FAF8F5] border border-[#0F2A47]/10 hover:border-[#BA9544] transition-all duration-300 rounded-xs flex flex-col justify-between shadow-2xs hover:shadow-md"
            >
              <div>
                <span className="text-[10px] font-sans font-semibold text-[#0F2A47]/40 tracking-wider block mb-2 group-hover:text-[#BA9544] transition-colors">
                  0{idx + 1}
                </span>
                <h3 className="font-serif text-sm sm:text-base font-semibold text-[#0F2A47] tracking-wider leading-tight group-hover:text-[#BA9544] transition-colors">
                  {category}
                </h3>
              </div>
              <p className="text-[11px] font-sans text-[#0F2A47]/60 font-light mt-3 leading-normal border-t border-[#0F2A47]/5 pt-2">
                {sectorDetails[category] || 'Strategic People Operations'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
