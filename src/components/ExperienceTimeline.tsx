import React, { useState } from 'react';
import { EXPERIENCES, EDUCATION, VOLUNTEER_ORGS, ExperienceItem } from '../data/content';
import { Briefcase, GraduationCap, Heart, CheckCircle2, ChevronRight, Sparkles } from 'lucide-react';

export const ExperienceTimeline: React.FC = () => {
  const [filterMode, setFilterMode] = useState<'all' | 'recruiting' | 'people-ops'>('all');

  const filteredExperiences = EXPERIENCES.filter((exp) => {
    if (filterMode === 'recruiting') {
      return (
        exp.role.toLowerCase().includes('recruit') ||
        exp.focus.some((f) => f.toLowerCase().includes('recruit') || f.toLowerCase().includes('talent'))
      );
    }
    if (filterMode === 'people-ops') {
      return (
        exp.focus.some(
          (f) =>
            f.toLowerCase().includes('culture') ||
            f.toLowerCase().includes('people') ||
            f.toLowerCase().includes('hr') ||
            f.toLowerCase().includes('onboarding')
        )
      );
    }
    return true;
  });

  return (
    <section id="experience" className="py-28 sm:py-36 bg-[#F3EFE6] text-[#0F2A47] relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#BA9544]" />
              <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
                Career History
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2A47] leading-[1.12] font-normal">
              Experience shaped by <span className="italic font-serif font-light text-[#BA9544]">growth</span><span className="text-[#BA9544]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#0F2A47]/80 font-light font-sans leading-relaxed mt-4">
              Eight-plus years partnering with forward-thinking leadership teams to hire top talent, architect people infrastructure, and foster cultures that retain high performers.
            </p>
          </div>

          {/* Interactive Filter Pills */}
          <div className="flex items-center gap-1.5 p-1 bg-[#FAF8F5] border border-[#0F2A47]/10 rounded-xs self-start md:self-end">
            <button
              onClick={() => setFilterMode('all')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                filterMode === 'all'
                  ? 'bg-[#0F2A47] text-[#FAF8F5] shadow-xs'
                  : 'text-[#0F2A47]/70 hover:text-[#0F2A47]'
              }`}
            >
              All Roles
            </button>
            <button
              onClick={() => setFilterMode('recruiting')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                filterMode === 'recruiting'
                  ? 'bg-[#0F2A47] text-[#FAF8F5] shadow-xs'
                  : 'text-[#0F2A47]/70 hover:text-[#0F2A47]'
              }`}
            >
              Talent &amp; Search
            </button>
            <button
              onClick={() => setFilterMode('people-ops')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded-xs transition-colors cursor-pointer ${
                filterMode === 'people-ops'
                  ? 'bg-[#0F2A47] text-[#FAF8F5] shadow-xs'
                  : 'text-[#0F2A47]/70 hover:text-[#0F2A47]'
              }`}
            >
              People Ops &amp; Culture
            </button>
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-[#0F2A47]/15 ml-3 sm:ml-8 pl-8 sm:pl-14 space-y-12 sm:space-y-16">
          {filteredExperiences.map((exp) => (
            <div key={exp.id} className="relative group">
              {/* Timeline Brass Pin */}
              <div
                className={`absolute -left-[41px] sm:-left-[67px] top-2 w-5 h-5 rounded-full border-2 transition-all flex items-center justify-center ${
                  exp.isCurrent
                    ? 'bg-[#D6B465] border-[#0F2A47] shadow-[0_0_12px_rgba(214,180,101,0.8)]'
                    : 'bg-[#FAF8F5] border-[#0F2A47]/40 group-hover:border-[#BA9544]'
                }`}
              >
                {exp.isCurrent && <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A47]" />}
              </div>

              {/* Card Container */}
              <div className="bg-[#FAF8F5] p-7 sm:p-10 rounded-xs border border-[#0F2A47]/10 hover:border-[#BA9544] transition-all duration-300 shadow-sm hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2 mb-4 pb-4 border-b border-[#0F2A47]/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.2em] text-[#BA9544]">
                        {exp.company}
                      </span>
                      {exp.isCurrent && (
                        <span className="bg-[#0F2A47] text-[#D6B465] text-[9.5px] uppercase font-bold tracking-widest px-2 py-0.5 rounded-xs">
                          Current Practice
                        </span>
                      )}
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-serif text-[#0F2A47] font-normal">
                      {exp.role}
                    </h3>
                  </div>

                  <span className="text-xs font-sans font-semibold tracking-wider text-[#0F2A47]/70 uppercase bg-[#F1EDE3] px-3.5 py-1.5 rounded-xs border border-[#0F2A47]/5 self-start">
                    {exp.period}
                  </span>
                </div>

                {exp.summary && (
                  <p className="text-sm sm:text-base text-[#0F2A47]/80 font-light font-sans leading-relaxed mb-6">
                    {exp.summary}
                  </p>
                )}

                {/* Focus Areas List */}
                <div>
                  <span className="text-[10px] font-sans font-bold uppercase tracking-[0.2em] text-[#0F2A47]/50 block mb-2.5">
                    Verified Focus &amp; HR Technologies
                  </span>
                  <div className="flex flex-wrap gap-2 text-xs">
                    {exp.focus.map((item, fIdx) => {
                      const isTech = ['Greenhouse', 'BambooHR', 'ADP'].includes(item);
                      return (
                        <span
                          key={fIdx}
                          className={`px-3 py-1 rounded-xs font-sans border ${
                            isTech
                              ? 'bg-[#102A43] text-[#D6B465] border-[#102A43] font-medium'
                              : 'bg-[#F3EFE6] text-[#0F2A47]/85 border-[#0F2A47]/10'
                          }`}
                        >
                          {item}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Education & Volunteer Grid */}
        <div className="mt-24 pt-16 border-t border-[#0F2A47]/15 grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12">
          {/* Education Section */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 border border-[#0F2A47]/10 rounded-xs shadow-sm">
            <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-[#0F2A47]/10">
              <div className="w-10 h-10 rounded-full bg-[#BA9544]/15 flex items-center justify-center text-[#BA9544]">
                <GraduationCap className="w-5 h-5 stroke-[2]" />
              </div>
              <div>
                <h3 className="text-2xl font-serif text-[#0F2A47] font-normal">Education</h3>
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#0F2A47]/50 font-sans font-semibold">
                  Academic Foundation
                </span>
              </div>
            </div>

            <div className="space-y-6">
              {EDUCATION.map((edu, idx) => (
                <div key={idx} className="pb-5 border-b border-[#0F2A47]/10 last:border-b-0 last:pb-0">
                  <div className="flex justify-between items-baseline gap-2">
                    <h4 className="font-serif font-medium text-lg sm:text-xl text-[#0F2A47]">
                      {edu.institution}
                    </h4>
                    <span className="text-xs text-[#0F2A47]/60 font-sans whitespace-nowrap">{edu.period}</span>
                  </div>
                  <p className="text-sm text-[#0F2A47]/75 font-sans font-light mt-1">
                    {edu.degree}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Volunteer / Human Side Section */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-8 sm:p-10 border border-[#0F2A47]/10 rounded-xs shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3.5 mb-8 pb-4 border-b border-[#0F2A47]/10">
                <div className="w-10 h-10 rounded-full bg-[#BA9544]/15 flex items-center justify-center text-[#BA9544]">
                  <Heart className="w-5 h-5 stroke-[2]" />
                </div>
                <div>
                  <h3 className="text-2xl font-serif text-[#0F2A47] font-normal">Human Dimension</h3>
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#0F2A47]/50 font-sans font-semibold">
                    Community &amp; Civic Engagement
                  </span>
                </div>
              </div>

              <h4 className="text-xl sm:text-2xl font-serif text-[#0F2A47] mb-3 leading-snug">
                People have always been at the center of the work<span className="text-[#BA9544]">.</span>
              </h4>

              <p className="text-sm text-[#0F2A47]/80 font-sans font-light leading-relaxed mb-6">
                A personal commitment to empathy, equity, and human welfare informs every organizational recommendation. Selected volunteer contributions include:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#0F2A47]/80">
                {VOLUNTEER_ORGS.map((org, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 py-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#BA9544]" />
                    <span className="font-sans">{org}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t border-[#0F2A47]/10 text-xs text-[#0F2A47]/70 italic font-serif">
              “Building human-centered workplace practices begins with genuine care for communities.”
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
