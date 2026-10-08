import React, { useState } from 'react';
import { ArrowUpRight, Check, X, Layers, Briefcase, Users, ShieldCheck, HeartHandshake } from 'lucide-react';
import { SERVICES, ServiceItem } from '../data/content';

interface ServicesSectionProps {
  onSelectServiceForContact: (serviceTitle: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectServiceForContact }) => {
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [activeStage, setActiveStage] = useState<'all' | 'early' | 'growth'>('all');

  return (
    <section id="services" className="py-28 sm:py-36 bg-[#FAF8F5] text-[#0F2A47] border-t border-[#0F2A47]/10 relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-20">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#BA9544]" />
            <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
              Strategic Offerings
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2A47] leading-[1.12] font-normal mb-6">
            Where talent strategy meets people strategy<span className="text-[#BA9544]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0F2A47]/80 font-light font-sans leading-relaxed">
            Five interconnected practices designed to attract exceptional talent, streamline internal operations, and establish cultures engineered for lasting business value.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES.map((service, index) => {
            const isFeatured = index === 0;
            return (
              <div
                key={service.number}
                className={`relative group bg-[#F3EFE6] p-8 sm:p-10 border transition-all duration-300 hover:shadow-xl cursor-pointer flex flex-col justify-between rounded-xs ${
                  isFeatured
                    ? 'border-[#BA9544]/50 hover:border-[#BA9544] md:col-span-2 lg:col-span-1 shadow-sm'
                    : 'border-[#0F2A47]/10 hover:border-[#BA9544]'
                }`}
                onClick={() => setSelectedService(service)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedService(service);
                  }
                }}
              >
                <div>
                  {/* Service Number & Arrow Indicator */}
                  <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#0F2A47]/10">
                    <span className="font-serif text-4xl sm:text-5xl font-light text-[#0F2A47]/30 group-hover:text-[#BA9544] transition-colors">
                      {service.number}
                    </span>
                    <div className="w-10 h-10 rounded-full bg-white text-[#0F2A47] group-hover:bg-[#0F2A47] group-hover:text-[#D6B465] flex items-center justify-center transition-all duration-300 border border-[#0F2A47]/10 group-hover:border-[#0F2A47] shadow-2xs">
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0F2A47] font-medium leading-snug mb-3.5 group-hover:text-[#102A43] transition-colors">
                    {service.title}
                  </h3>

                  {/* Short Description */}
                  <p className="text-sm text-[#0F2A47]/75 font-sans font-light leading-relaxed mb-6">
                    {service.shortDescription}
                  </p>

                  {/* Quick deliverable preview */}
                  <div className="space-y-1.5 pt-2 mb-6 border-t border-[#0F2A47]/5">
                    {service.deliverables.slice(0, 2).map((d, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#0F2A47]/70 font-sans">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#BA9544]" />
                        <span className="truncate">{d}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Trigger */}
                <div className="pt-4 border-t border-[#0F2A47]/10 flex items-center justify-between text-xs font-semibold tracking-[0.12em] uppercase text-[#BA9544] group-hover:text-[#0F2A47] transition-colors">
                  <span>Explore Deliverables</span>
                  <span className="text-[11px] font-sans text-[#0F2A47]/50 group-hover:text-[#0F2A47]">
                    Dossier →
                  </span>
                </div>
              </div>
            );
          })}

          {/* Quick Consultation Spotlight Card */}
          <div className="bg-[#102A43] text-[#F3EFE6] p-8 sm:p-10 border border-[#D6B465]/40 rounded-xs flex flex-col justify-between shadow-xl relative overflow-hidden bg-grain-dark">
            <div className="relative z-10">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-4 h-[1px] bg-[#D6B465]" />
                <span className="text-[#D6B465] text-[10px] font-semibold uppercase tracking-[0.25em]">
                  Tailored Advisory
                </span>
              </div>
              <h3 className="text-2xl font-serif text-[#FAF8F5] leading-snug mb-4 font-normal">
                Need a bespoke talent architecture for your growth stage?
              </h3>
              <p className="text-sm text-[#F3EFE6]/80 font-light leading-relaxed mb-6 font-sans">
                From targeted executive search engagements to fractional people operations leadership, let’s design a partnership tailored to your company’s immediate priorities.
              </p>
            </div>

            <button
              onClick={() => onSelectServiceForContact('General Advisory')}
              className="relative z-10 w-full py-3.5 bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] text-[#0A1C30] font-semibold text-xs uppercase tracking-[0.16em] transition-all duration-200 rounded-xs shadow-md hover:brightness-105 flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Discuss an Engagement</span>
              <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
            </button>
          </div>
        </div>
      </div>

      {/* Service Detail Modal Dossier */}
      {selectedService && (
        <div
          className="fixed inset-0 z-50 bg-[#0A1C30]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="service-modal-title"
        >
          <div className="bg-[#FAF8F5] text-[#0F2A47] w-full max-w-2xl rounded-xs shadow-2xl border border-[#0F2A47]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#102A43] text-white p-6 sm:p-8 flex items-start justify-between relative border-b border-[#F3EFE6]/10">
              <div className="pr-8">
                <span className="text-[#D6B465] font-serif text-sm tracking-[0.2em] uppercase block mb-1">
                  Practice Area {selectedService.number}
                </span>
                <h3 id="service-modal-title" className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] font-normal">
                  {selectedService.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="text-[#F3EFE6]/70 hover:text-white p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B465] cursor-pointer"
                aria-label="Close service details"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
              <div>
                <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BA9544] mb-2 font-sans">
                  Strategic Scope
                </h4>
                <p className="text-base text-[#0F2A47]/85 font-light leading-relaxed font-sans">
                  {selectedService.fullDescription}
                </p>
              </div>

              <div>
                <h4 className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#BA9544] mb-3 font-sans">
                  Key Deliverables &amp; Outcomes
                </h4>
                <div className="space-y-2.5">
                  {selectedService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-sm text-[#0F2A47]/80 font-sans">
                      <span className="w-5 h-5 rounded-full bg-[#BA9544]/15 text-[#BA9544] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 stroke-[2.5]" />
                      </span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-[#F1EDE3] rounded-xs border-l-2 border-[#D6B465]">
                <h4 className="text-[10px] uppercase tracking-[0.2em] font-bold text-[#0F2A47] mb-1 font-sans">
                  Ideal For
                </h4>
                <p className="text-xs sm:text-sm text-[#0F2A47]/80 font-sans">
                  {selectedService.idealFor}
                </p>
              </div>
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#F3EFE6] border-t border-[#0F2A47]/10 flex flex-wrap items-center justify-between gap-4">
              <button
                onClick={() => setSelectedService(null)}
                className="text-xs uppercase tracking-wider font-medium text-[#0F2A47]/70 hover:text-[#0F2A47] cursor-pointer font-sans"
              >
                Close Dossier
              </button>
              <button
                onClick={() => {
                  const serviceName = selectedService.title;
                  setSelectedService(null);
                  onSelectServiceForContact(serviceName);
                }}
                className="px-6 py-2.5 bg-[#0F2A47] hover:bg-[#163657] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs shadow-sm flex items-center gap-2 cursor-pointer font-sans"
              >
                <span>Inquire About This Service</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-[#D6B465]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
