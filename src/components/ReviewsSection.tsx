import React, { useEffect } from 'react';

declare global {
  interface Window {
    ElfsightApp?: {
      init: () => void;
    };
  }
}

export function ReviewsSection() {
  useEffect(() => {
    // 1. Add Elfsight script globally
    const scriptId = 'elfsight-platform-script';
    let script = document.getElementById(scriptId) as HTMLScriptElement;

    if (!script) {
      script = document.createElement('script');
      script.id = scriptId;
      script.src = 'https://elfsightcdn.com/platform/platform.js';
      script.async = true;
      document.head.appendChild(script);
    }

    // 2. Trigger Elfsight widget scan
    const handleInit = () => {
      if (window.ElfsightApp && typeof window.ElfsightApp.init === 'function') {
        window.ElfsightApp.init();
      }
    };

    script.addEventListener('load', handleInit);
    handleInit();

    return () => {
      script.removeEventListener('load', handleInit);
    };
  }, []);

  return (
    <section id="reviews" className="py-16 bg-[#050505] text-white min-h-[300px]">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8 font-['Cairo']">آراء وتقييمات العملاء</h2>
        {/* Live Elfsight Widget Container */}
        <div 
          className="elfsight-app-7f34a5ce-e9cf-4289-bcb5-ab0b66c3173c" 
          data-elfsight-app-lazy
        ></div>
      </div>
    </section>
  );
}
