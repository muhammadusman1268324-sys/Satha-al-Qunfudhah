import React from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MessageSquare } from 'lucide-react';

export const MobileBottomBar: React.FC = () => {
  return (
    <div
      id="mobile-bottom-conversion-bar"
      className="md:hidden fixed bottom-0 left-0 right-0 z-50 bg-[#111111]/95 backdrop-blur-lg border-t border-neutral-800 p-2.5 pb-3 shadow-[0_-8px_25px_rgba(0,0,0,0.7)]"
      role="region"
      aria-label="شريط الاتصال السريع للجوال"
    >
      <div className="grid grid-cols-2 gap-2 max-w-md mx-auto">
        {/* Call Button */}
        <a
          id="mobile-bottom-call-btn"
          href={BUSINESS_INFO.telLink}
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] active:bg-[#990000] text-white font-extrabold text-sm shadow-md transition-transform active:scale-95"
          aria-label="اتصل هاتفياً بسطحة القنفذة"
        >
          <Phone className="w-4 h-4 flex-shrink-0 animate-pulse" />
          <span>اتصل الآن</span>
        </a>

        {/* WhatsApp Button */}
        <a
          id="mobile-bottom-whatsapp-btn"
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 py-3 px-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:bg-[#199e4b] text-white font-extrabold text-sm shadow-md transition-transform active:scale-95"
          aria-label="تواصل مع سطحة القنفذة عبر واتساب"
        >
          <MessageSquare className="w-4 h-4 flex-shrink-0" />
          <span>واتساب</span>
        </a>
      </div>
    </div>
  );
};
