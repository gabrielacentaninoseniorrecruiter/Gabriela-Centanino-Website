import React, { useState } from 'react';
import { ArrowRight, Check, Sparkles, Building, Target, Layers, ArrowUpRight } from 'lucide-react';

interface EngagementPlannerProps {
  onSelectPlan: (planSummary: string) => void;
}

export const EngagementPlanner: React.FC<EngagementPlannerProps> = ({ onSelectPlan }) => {
  const [selectedStage, setSelectedStage] = useState<'early' | 'growth' | 'established'>('growth');
  const [selectedObjective, setSelectedObjective] = useState<'search' | 'people-ops' | 'culture'>('search');

  const stageData = {
    early: {
      name: 'Seed to Series A',
      teamSize: '10–40 Team Members',
      context: 'Rapid core team expansion requiring foundational hiring discipline and first-class candidate care.',
    },
    growth: {
      name: 'Series B & Expansion',
      teamSize: '40–150+ Team Members',
      context: 'Scaling multi-functional departments with robust HR systems (Greenhouse/BambooHR) and structured compensation frameworks.',
    },
    established: {
      name: 'Established Consumer / Tech',
      teamSize: '150+ Team Members',
      context: 'Pivotal leadership hiring, retention audits, DE&I alignment, and employer brand positioning.',
    },
  };

  const objectiveData = {
    search: {
      title: 'Targeted Executive & Key Search',
      blueprint: 'Full-Cycle Executive Search & Competency Calibration',
      deliverables: [
        'Precise Role Scoping & Market Talent Mapping',
        'Direct Headhunting & High-Touch Courtship',
        'Structured Scorecards & Interview Team Briefings',
        'Offer Architecture & Closing Orchestration',
      ],
      idealCadence: 'Dedicated Engagement (4–8 Weeks)',
    },
    'people-ops': {
      title: 'People Operations Infrastructure',
      blueprint: 'HR Systems Modernization & Onboarding Architecture',
      deliverables: [
        'ATS / HRIS Optimization (Greenhouse, BambooHR, ADP)',
        '30-60-90 Days High-Impact Onboarding Systems',
        'Salary Benchmarking & Job Classification Bands',
        'Scalable Internal People Operating Workflows',
      ],
      idealCadence: 'Advisory Sprint or Fractional Leadership',
    },
    culture: {
      title: 'Culture, Engagement & Retention',
      blueprint: 'Workplace Culture Assessment & Retention Initiatives',
      deliverables: [
        'Employee Engagement Listening & Feedback Loops',
        'Hybrid / Distributed Team Connection Rituals',
        'Candidate Experience & Employer Brand Articulation',
        'DE&I Integration & Values Operationalization',
      ],
      idealCadence: 'Strategic Advisory & Culture Audit',
    },
  };

  const currentObjective = objectiveData[selectedObjective];
  const currentStage = stageData[selectedStage];

  const handleApplyBlueprint = () => {
    const summary = `${currentStage.name} (${currentStage.teamSize}) — ${currentObjective.title}`;
    onSelectPlan(summary);
  };

  return (
    <section className="py-24 sm:py-32 bg-[#FAF8F5] text-[#0F2A47] border-t border-[#0F2A47]/10 relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-14 sm:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#BA9544]" />
            <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
              Interactive Strategic Blueprint
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2A47] leading-[1.12] font-normal mb-5">
            Tailor an engagement to your <span className="italic font-serif font-light text-[#BA9544]">growth stage</span><span className="text-[#BA9544]">.</span>
          </h2>

          <p className="text-base sm:text-lg text-[#0F2A47]/80 font-light font-sans leading-relaxed">
            Select your current organizational milestone and immediate priority to explore a tailored talent and people roadmap.
          </p>
        </div>

        {/* Interactive Selector Controls */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Column */}
          <div className="lg:col-span-5 space-y-8">
            {/* Step 1: Stage Selector */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F2A47]/60 mb-3 font-sans">
                1. Company Growth Stage
              </label>
              <div className="space-y-2.5">
                {(Object.keys(stageData) as Array<keyof typeof stageData>).map((key) => {
                  const stage = stageData[key];
                  const isSelected = selectedStage === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedStage(key)}
                      className={`w-full p-4 text-left rounded-xs border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#102A43] text-white border-[#102A43] shadow-md'
                          : 'bg-white text-[#0F2A47] border-[#0F2A47]/15 hover:border-[#BA9544]'
                      }`}
                    >
                      <div>
                        <div className="font-serif text-lg font-medium tracking-wide">
                          {stage.name}
                        </div>
                        <div
                          className={`text-xs mt-0.5 font-sans ${
                            isSelected ? 'text-[#D6B465]' : 'text-[#0F2A47]/60'
                          }`}
                        >
                          {stage.teamSize}
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#D6B465] bg-[#D6B465]' : 'border-[#0F2A47]/30'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A47]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Primary Objective */}
            <div>
              <label className="block text-[11px] font-bold uppercase tracking-[0.2em] text-[#0F2A47]/60 mb-3 font-sans">
                2. Immediate Strategic Objective
              </label>
              <div className="space-y-2.5">
                {(Object.keys(objectiveData) as Array<keyof typeof objectiveData>).map((key) => {
                  const obj = objectiveData[key];
                  const isSelected = selectedObjective === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setSelectedObjective(key)}
                      className={`w-full p-4 text-left rounded-xs border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                        isSelected
                          ? 'bg-[#102A43] text-white border-[#102A43] shadow-md'
                          : 'bg-white text-[#0F2A47] border-[#0F2A47]/15 hover:border-[#BA9544]'
                      }`}
                    >
                      <div>
                        <div className="font-serif text-lg font-medium tracking-wide">
                          {obj.title}
                        </div>
                        <div
                          className={`text-xs mt-0.5 font-sans ${
                            isSelected ? 'text-[#D6B465]' : 'text-[#0F2A47]/60'
                          }`}
                        >
                          {obj.idealCadence}
                        </div>
                      </div>
                      <div
                        className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-[#D6B465] bg-[#D6B465]' : 'border-[#0F2A47]/30'
                        }`}
                      >
                        {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-[#0F2A47]" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Blueprint Result Presentation */}
          <div className="lg:col-span-7 bg-[#102A43] text-[#F3EFE6] p-8 sm:p-12 rounded-xs border border-[#D6B465]/40 shadow-2xl relative bg-grain-dark">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center justify-between gap-2 pb-6 mb-6 border-b border-[#F3EFE6]/10">
                <div>
                  <span className="text-[#D6B465] text-[10px] font-semibold uppercase tracking-[0.25em] font-sans block mb-1">
                    Custom Advisory Blueprint
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] font-normal">
                    {currentObjective.title}
                  </h3>
                </div>
                <span className="text-xs uppercase tracking-wider font-semibold text-[#0A1C30] bg-[#D6B465] px-3 py-1 rounded-xs">
                  {currentStage.name}
                </span>
              </div>

              {/* Context Summary */}
              <p className="text-sm text-[#F3EFE6]/80 font-light font-sans leading-relaxed mb-8">
                {currentStage.context}
              </p>

              {/* Deliverables List */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#D6B465] block font-sans">
                  Recommended Core Deliverables
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {currentObjective.deliverables.map((del, dIdx) => (
                    <div
                      key={dIdx}
                      className="p-3.5 bg-[#0F2A47] border border-[#F3EFE6]/10 rounded-xs flex items-start gap-2.5"
                    >
                      <Check className="w-4 h-4 text-[#D6B465] shrink-0 mt-0.5 stroke-[2.5]" />
                      <span className="text-xs text-[#F3EFE6]/90 font-sans leading-snug">{del}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Cadence & Booking Action */}
              <div className="pt-6 border-t border-[#F3EFE6]/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div>
                  <span className="text-[10px] font-sans text-[#F3EFE6]/50 uppercase tracking-wider block">
                    Recommended Pacing
                  </span>
                  <span className="font-serif text-base text-[#FAF8F5]">
                    {currentObjective.idealCadence}
                  </span>
                </div>

                <button
                  onClick={handleApplyBlueprint}
                  className="px-6 py-3.5 bg-gradient-to-r from-[#D6B465] via-[#E8D59D] to-[#D6B465] text-[#0A1C30] font-semibold text-xs uppercase tracking-[0.16em] rounded-xs shadow-md hover:brightness-105 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Inquire With This Blueprint</span>
                  <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
