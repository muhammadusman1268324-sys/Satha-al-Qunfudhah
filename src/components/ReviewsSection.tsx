import React from 'react';
import { SAMPLE_REVIEWS } from '../data/towingData';
import { Star, MessageSquareQuote, Info } from 'lucide-react';

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 border-b border-neutral-200/80"
      aria-label="آراء وتجارب نموذجية"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-red-50 border border-red-200 text-[#F20D0D] font-bold text-xs sm:text-sm mb-3">
            <span>آراء العملاء</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Cairo'] mb-4">
            ماذا يقول <span className="text-[#F20D0D]">العملاء؟</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            نسعى دائماً لتقديم خدمة سحب ونقل مريحة وسريعة تنال رضا واستحسان كافة عملائنا.
          </p>
        </div>

        {/* Mandatory Transparency Note */}
        <div className="max-w-xl mx-auto mb-14 p-3.5 rounded-xl bg-neutral-50 border border-neutral-200 flex items-center justify-center gap-2 text-xs text-neutral-500 text-center">
          <Info className="w-4 h-4 text-neutral-400 flex-shrink-0" />
          <span>تجارب نموذجية — يُرجى استبدالها بتقييمات العملاء الفعلية.</span>
        </div>

        {/* Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SAMPLE_REVIEWS.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#F9F9F9] border border-neutral-200/80 rounded-2xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                {/* 5-Star Visual Display */}
                <div className="flex items-center gap-1 text-amber-400 mb-4" aria-label="تقييم 5 نجوم">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-sm text-neutral-700 leading-relaxed mb-6 font-normal">
                  "{rev.content}"
                </p>
              </div>

              {/* Author & Tag */}
              <div className="pt-4 border-t border-neutral-200/60 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-red-100 text-[#F20D0D] flex items-center justify-center font-bold text-xs">
                    <MessageSquareQuote className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-neutral-900 font-['Cairo']">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-neutral-500">
                      {rev.tag}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
