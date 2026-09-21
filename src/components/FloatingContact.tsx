import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MessageSquare, MapPin, X } from 'lucide-react';

export const FloatingContact: React.FC = () => {
  const [showLocationBanner, setShowLocationBanner] = useState(true);
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setHasScrolled(true);
      } else {
        setHasScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Interactive Location Pop-up / Service Coverage (Lower Left / Center on desktop) */}
      {showLocationBanner && (
        <div
          id="location-coverage-popup"
          className="fixed bottom-24 sm:bottom-6 left-4 z-40 max-w-sm bg-[#151515]/95 backdrop-blur-md border border-red-600/40 text-white rounded-2xl p-3.5 shadow-2xl flex items-center justify-between gap-3 animate-fade-in"
          role="status"
          aria-live="polite"
        >
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-[#F20D0D] flex items-center justify-center text-white flex-shrink-0">
              <MapPin className="w-5 h-5 animate-bounce" />
            </div>
            <div className="text-right">
              <div className="text-xs font-bold text-white font-['Cairo']">
                نطاق الخدمة المستمر
              </div>
              <div className="text-[11px] text-neutral-300">
                نخدم الآن: <strong className="text-red-400">القنفذة • القوز • المظيلف</strong>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setShowLocationBanner(false)}
            className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            aria-label="إغلاق إشعار مناطق الخدمة"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Floating Action Buttons Group (Right side of viewport) */}
      <div
        id="desktop-floating-contact-panel"
        className={`fixed top-1/2 -translate-y-1/2 right-4 sm:right-6 z-40 hidden md:flex flex-col items-end gap-3.5 transition-all duration-300 ${
          hasScrolled ? 'opacity-100 translate-x-0' : 'opacity-90'
        }`}
      >
        {/* Red Phone Floating Button */}
        <a
          id="floating-phone-btn"
          href={BUSINESS_INFO.telLink}
          className="group flex items-center gap-2.5 pl-4 pr-3 py-3 rounded-full bg-[#F20D0D] hover:bg-[#B80000] text-white shadow-2xl shadow-red-900/60 transition-all duration-200 hover:scale-105 hover:-translate-x-1"
          aria-label="اتصل الآن بسطحة القنفذة هاتفياً"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:rotate-12 transition-transform">
            <Phone className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold font-['Cairo'] whitespace-nowrap">اتصل الآن</span>
            <span className="text-[10px] font-mono tracking-wider opacity-90" dir="ltr">
              {BUSINESS_INFO.phoneDisplay}
            </span>
          </div>
        </a>

        {/* Green WhatsApp Floating Button */}
        <a
          id="floating-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-2.5 pl-4 pr-3 py-3 rounded-full bg-[#25D366] hover:bg-[#1EBE5D] text-white shadow-2xl shadow-green-950/60 transition-all duration-200 hover:scale-105 hover:-translate-x-1"
          aria-label="تواصل مع سطحة القنفذة عبر واتساب"
        >
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MessageSquare className="w-4 h-4" />
          </div>
          <div className="flex flex-col text-right">
            <span className="text-xs font-bold font-['Cairo'] whitespace-nowrap">واتساب</span>
            <span className="text-[10px] opacity-90">مراسلة فورية</span>
          </div>
        </a>
      </div>
    </>
  );
};
