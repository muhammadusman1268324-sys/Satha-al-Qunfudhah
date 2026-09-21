import React from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import ctaImg from '../assets/images/emergency_cta_1789990244032.jpg';

export const EmergencyCtaSection: React.FC = () => {
  return (
    <section
      id="emergency-cta"
      className="relative py-24 sm:py-32 bg-[#050505] text-white overflow-hidden"
      aria-label="طلب سطحة سريع"
    >
      {/* Background Recovery Image with Rich Dark Gradient */}
      <div className="absolute inset-0 z-0">
        <img
          src={ctaImg}
          alt="سطحة القنفذة في خدمة الطوارئ على مدار الساعة"
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-[#050505]/85 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-[#050505]" />
        {/* Subtle emergency red ambient glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#F20D0D]/20 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Emergency Status Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F20D0D]/20 border border-[#F20D0D]/50 text-red-400 font-bold text-xs sm:text-sm mb-6 shadow-sm">
          <span className="w-2.5 h-2.5 rounded-full bg-[#F20D0D] animate-ping" />
          <span>استجابة فورية على مدار 24 ساعة</span>
        </div>

        {/* Headline */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight font-['Cairo'] mb-6 leading-tight">
          تحتاج سطحة <span className="text-[#F20D0D]">الآن؟</span>
        </h2>

        {/* Subheading */}
        <p className="text-base sm:text-xl text-neutral-300 leading-relaxed max-w-2xl mx-auto mb-10">
          لا تنتظر، تواصل معنا مباشرة وسنساعدك في ترتيب خدمة نقل سيارتك في القنفذة والقوز والمظيلف بأسرع وقت وأعلى درجات الأمان.
        </p>

        {/* Very Large Clickable Phone Display */}
        <div className="mb-10 inline-block">
          <a
            id="emergency-cta-phone-link"
            href={BUSINESS_INFO.telLink}
            className="group flex items-center justify-center gap-4 px-6 sm:px-10 py-4 sm:py-6 rounded-3xl bg-[#151515]/95 border-2 border-red-600/50 hover:border-red-500 shadow-2xl hover:shadow-red-600/30 transition-all duration-300 hover:scale-[1.02]"
            dir="ltr"
            aria-label="اتصل هاتفياً بسطحة القنفذة فوراً"
          >
            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl bg-[#F20D0D] text-white flex items-center justify-center flex-shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
              <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
            </div>
            <span className="text-3xl sm:text-5xl lg:text-6xl font-black text-white font-mono tracking-widest group-hover:text-red-400 transition-colors">
              {BUSINESS_INFO.phone}
            </span>
          </a>
        </div>

        {/* Major Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 max-w-md mx-auto">
          <a
            id="emergency-call-btn"
            href={BUSINESS_INFO.telLink}
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-black text-base sm:text-lg shadow-xl shadow-red-900/60 transition-all duration-200 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن</span>
          </a>

          <a
            id="emergency-whatsapp-btn"
            href={getWhatsAppLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 min-w-[160px] inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base sm:text-lg shadow-xl shadow-green-950/50 transition-all duration-200 hover:-translate-y-1"
          >
            <MessageSquare className="w-5 h-5" />
            <span>واتساب</span>
          </a>
        </div>

        {/* Small Bottom Assurance */}
        <div className="mt-8 flex items-center justify-center gap-6 text-xs text-neutral-400">
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5 text-[#F20D0D]" />
            <span>جاهزية مستمرة 24/7</span>
          </div>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-[#F20D0D]" />
            <span>حرص واهتمام بالمركبة</span>
          </div>
        </div>
      </div>
    </section>
  );
};
