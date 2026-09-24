import React, { useEffect } from 'react';

export function ReviewsSection() {
  useEffect(() => {
    // Inject Elfsight platform script into the document head
    if (!document.querySelector('script[src*="elfsightcdn.com"]')) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-16 bg-[#050505] text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-['Cairo']">آراء وتقييمات العملاء</h2>
        {/* Live Elfsight Widget */}
        <div className="elfsight-app-7f34a5ce-e9cf-4289-bcb5-ab0b66c3173c"></div>
      </div>
    </section>
  );
}
