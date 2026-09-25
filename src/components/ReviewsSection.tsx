import React, { useEffect } from 'react';

export function ReviewsSection() {
  useEffect(() => {
    // Check if the script is already added
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section id="reviews" className="py-16 bg-[#050505] text-white min-h-[400px]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-['Cairo']">آراء وتقييمات العملاء</h2>
        <div 
          className="elfsight-app-7f34a5ce-e9cf-4289-bcb5-ab0b66c3173c" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
