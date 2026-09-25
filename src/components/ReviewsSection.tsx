import React, { useEffect } from 'react';

export const ReviewsSection: React.FC = () => {
  useEffect(() => {
    // Ensure Elfsight script is active and initializes
    const scriptSrc = 'https://elfsightcdn.com/platform/platform.js';
    const existingScript = document.querySelector(`script[src="${scriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = scriptSrc;
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section
      id="reviews"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 border-b border-neutral-200/80"
      aria-label="آراء وتقييمات العملاء"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-red-50 border border-red-200 text-[#F20D0D] font-bold text-xs sm:text-sm mb-3">
            <span>آراء العملاء الحقيقية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Cairo'] mb-4">
            ماذا يقول <span className="text-[#F20D0D]">العملاء؟</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-['Cairo']">
            تقييمات وآراء حية ومباشرة من عملائنا لخدمات سحب ونقل السيارات في القنفذة والقوز والمظيلف.
          </p>
        </div>

        {/* Live Customer Reviews Widget (Elfsight) */}
        <div className="w-full min-h-[360px] flex items-center justify-center">
          <div
            className="elfsight-app-7f34a5ce-e9cf-4289-bcb5-ab0b66c3173c w-full"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
};
