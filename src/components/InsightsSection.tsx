import React, { useState } from 'react';
import { INSIGHTS_ARTICLES, InsightArticle } from '../data/content';
import { ArrowUpRight, BookOpen, Clock, Tag, X, ArrowLeft } from 'lucide-react';

export const InsightsSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeArticle, setActiveArticle] = useState<InsightArticle | null>(null);

  const categories = ['All', 'Talent Acquisition', 'People Strategy', 'Culture', 'Leadership'];

  const filteredArticles =
    selectedCategory === 'All'
      ? INSIGHTS_ARTICLES
      : INSIGHTS_ARTICLES.filter((art) => art.category === selectedCategory);

  return (
    <section id="insights" className="py-28 sm:py-36 bg-[#F3EFE6] text-[#0F2A47] relative bg-grain">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 sm:mb-20">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[1px] bg-[#BA9544]" />
              <span className="text-[#BA9544] text-[11px] font-semibold tracking-[0.28em] uppercase font-sans">
                Thought Leadership
              </span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif text-[#0F2A47] leading-[1.12] font-normal">
              Insights &amp; <span className="italic font-serif font-light text-[#BA9544]">Perspectives</span><span className="text-[#BA9544]">.</span>
            </h2>

            <p className="text-base sm:text-lg text-[#0F2A47]/80 font-light font-sans leading-relaxed mt-4">
              Observations on talent acquisition strategy, organizational design, candidate dynamics, and workplace culture in scaling enterprises.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-medium uppercase tracking-[0.14em] transition-all rounded-xs cursor-pointer border ${
                  selectedCategory === cat
                    ? 'bg-[#0F2A47] text-[#FAF8F5] border-[#0F2A47] shadow-sm'
                    : 'bg-white/80 text-[#0F2A47]/70 border-[#0F2A47]/15 hover:border-[#BA9544] hover:text-[#0F2A47]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article, idx) => {
            return (
              <div
                key={article.id}
                className="bg-[#FAF8F5] p-8 sm:p-9 rounded-xs border border-[#0F2A47]/10 hover:border-[#BA9544] transition-all duration-300 shadow-sm hover:shadow-xl flex flex-col justify-between group cursor-pointer"
                onClick={() => setActiveArticle(article)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setActiveArticle(article);
                  }
                }}
              >
                <div>
                  {/* Metadata Header */}
                  <div className="flex items-center justify-between text-xs text-[#0F2A47]/60 pb-4 mb-4 border-b border-[#0F2A47]/10 font-sans">
                    <span className="font-semibold text-[#BA9544] uppercase tracking-[0.18em] text-[10.5px]">
                      {article.category}
                    </span>
                    <div>
                      {article.isComingSoon ? (
                        <span className="bg-[#102A43] text-[#FAF8F5] text-[9.5px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-xs">
                          Coming Soon
                        </span>
                      ) : (
                        <span className="text-[11px] text-[#0F2A47]/60 font-sans">{article.readTime}</span>
                      )}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-serif text-[#0F2A47] font-medium leading-snug mb-3.5 group-hover:text-[#BA9544] transition-colors">
                    {article.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-sm text-[#0F2A47]/75 font-sans font-light leading-relaxed mb-6">
                    {article.excerpt}
                  </p>
                </div>

                {/* Read Action */}
                <div className="pt-4 border-t border-[#0F2A47]/10 flex items-center justify-between text-xs font-semibold uppercase tracking-[0.15em] text-[#0F2A47] group-hover:text-[#BA9544] transition-colors">
                  <span>{article.isComingSoon ? 'Preview Synopsis' : 'Read Article'}</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Article Reader Modal */}
      {activeArticle && (
        <div
          className="fixed inset-0 z-50 bg-[#0A1C30]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="article-reader-title"
        >
          <div className="bg-[#FAF8F5] text-[#0F2A47] w-full max-w-3xl rounded-xs shadow-2xl border border-[#0F2A47]/15 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
            {/* Modal Header */}
            <div className="bg-[#102A43] text-white p-6 sm:p-8 flex items-start justify-between border-b border-[#F3EFE6]/10">
              <div className="pr-6">
                <div className="flex items-center gap-3 mb-2.5 text-xs">
                  <span className="text-[#D6B465] uppercase tracking-[0.2em] font-semibold font-sans">
                    {activeArticle.category}
                  </span>
                  <span className="text-white/40">·</span>
                  <span className="text-white/70 font-sans">{activeArticle.readTime}</span>
                  {activeArticle.isComingSoon && (
                    <span className="ml-2 bg-[#D6B465] text-[#0F2A47] text-[9.5px] uppercase font-bold tracking-widest px-2.5 py-0.5 rounded-xs">
                      Coming Soon
                    </span>
                  )}
                </div>
                <h3
                  id="article-reader-title"
                  className="text-2xl sm:text-3xl font-serif text-[#FAF8F5] font-normal leading-tight"
                >
                  {activeArticle.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveArticle(null)}
                className="text-white/70 hover:text-white p-1 rounded-sm focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#D6B465] cursor-pointer"
                aria-label="Close article modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-6 sm:p-10 space-y-6 max-h-[70vh] overflow-y-auto">
              <div className="p-4 sm:p-5 bg-[#F1EDE3] border-l-2 border-[#BA9544] text-sm text-[#0F2A47]/85 italic font-serif leading-relaxed">
                {activeArticle.excerpt}
              </div>

              <div className="space-y-4 text-base text-[#0F2A47]/85 font-light leading-relaxed font-sans pt-2">
                {activeArticle.content.map((paragraph, pIdx) => (
                  <p key={pIdx}>{paragraph}</p>
                ))}
              </div>

              {activeArticle.isComingSoon && (
                <div className="mt-8 p-4 bg-[#102A43]/5 border border-[#102A43]/15 rounded-xs text-xs text-[#0F2A47]/70 font-sans">
                  <span className="font-semibold text-[#0F2A47]">Editorial Note:</span> The complete essay is scheduled for upcoming publication. Gabriela frequently addresses this topic in leadership strategy sessions and customized talent advisory engagements.
                </div>
              )}
            </div>

            {/* Modal Footer */}
            <div className="p-6 bg-[#F3EFE6] border-t border-[#0F2A47]/10 flex items-center justify-between">
              <span className="text-xs text-[#0F2A47]/60 font-sans">
                Author: Gabriela Centanino
              </span>
              <button
                onClick={() => setActiveArticle(null)}
                className="px-6 py-2.5 bg-[#0F2A47] text-white text-xs font-semibold uppercase tracking-[0.15em] rounded-xs hover:bg-[#163657] transition-colors cursor-pointer font-sans"
              >
                Close Perspective
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
