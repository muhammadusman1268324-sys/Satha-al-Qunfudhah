import React, { useState } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MessageSquare, ShieldCheck, Clock, MapPin, Copy, Check, ArrowDown } from 'lucide-react';
import heroTruckImg from '../assets/images/hero_tow_truck_1789990212078.jpg';

export const Hero: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPhone = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(BUSINESS_INFO.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-28 sm:pt-36 pb-16 overflow-hidden bg-[#050505]"
      aria-label="القسم الرئيسي لسطحة القنفذة"
    >
      {/* Background Photography with Dark Gradient Overlays */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroTruckImg}
          alt="سطحة القنفذة لنقل وسحب السيارات على الطرق السريعة"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-subtle-zoom"
          referrerPolicy="no-referrer"
          loading="eager"
        />
        {/* Layered high-contrast dark gradient for clear Arabic typography */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/85 to-[#050505]/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/95 via-[#050505]/75 to-transparent" />
        {/* Subtle red ambient glow accent */}
        <div className="absolute -top-32 right-1/4 w-96 h-96 bg-[#F20D0D]/15 rounded-full blur-3xl pointer-events-none" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl text-right">
          {/* Small Red Section Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F20D0D]/20 border border-[#F20D0D]/40 text-red-400 font-bold text-xs sm:text-sm mb-5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F20D0D] animate-ping" />
            <span>خدمة سطحات ونقل سيارات</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-tight sm:leading-snug tracking-tight mb-5 font-['Cairo']">
            سطحة القنفذة لخدمة <span className="text-[#F20D0D]">سريعة</span> وموثوقة
          </h1>

          {/* Supporting Headline */}
          <p className="text-base sm:text-xl text-neutral-300 leading-relaxed font-normal mb-8 max-w-2xl">
            نقدم خدمات سحب ونقل السيارات في <strong className="text-white font-semibold">القنفذة</strong> و
            <strong className="text-white font-semibold">القوز</strong> و
            <strong className="text-white font-semibold">المظيلف</strong> والمناطق المحيطة، مع سرعة الاستجابة
            وسهولة التواصل على مدار 24 ساعة.
          </p>

          {/* Extremely Prominent Phone Box */}
          <div
            id="hero-phone-highlight"
            className="mb-8 p-4 sm:p-5 rounded-2xl bg-[#151515]/90 border border-neutral-700/80 shadow-2xl backdrop-blur-md inline-block w-full sm:w-auto"
          >
            <div className="text-xs text-neutral-400 font-medium mb-1 flex items-center justify-between sm:justify-start gap-3">
              <span>رقم التواصل المباشر والسريع:</span>
              <span className="text-emerald-400 text-xs font-semibold flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                جاهز للرد الفوري
              </span>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center justify-center gap-3 text-2xl sm:text-4xl font-extrabold text-white font-mono tracking-wider hover:text-[#F20D0D] transition-colors"
                dir="ltr"
                aria-label="اتصل الآن على هاتف سطحة القنفذة"
              >
                <div className="w-10 h-10 rounded-xl bg-[#F20D0D] text-white flex items-center justify-center flex-shrink-0 shadow-md">
                  <Phone className="w-5 h-5" />
                </div>
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <button
                type="button"
                onClick={handleCopyPhone}
                className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-neutral-800 hover:bg-neutral-700 text-neutral-300 text-xs font-medium transition-colors"
                title="نسخ رقم الجوال"
                aria-label="نسخ رقم جوال سطحة القنفذة"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-emerald-400" />
                    <span className="text-emerald-400">تم النسخ</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>نسخ الرقم</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Major Conversion CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-10">
            {/* Primary CTA: Call Now */}
            <a
              id="hero-primary-call-btn"
              href={BUSINESS_INFO.telLink}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-7 py-4 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-black text-base sm:text-lg shadow-xl shadow-red-900/50 transition-all duration-200 hover:-translate-y-1 group"
            >
              <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              <span>اتصل الآن</span>
            </a>

            {/* Secondary CTA: WhatsApp */}
            <a
              id="hero-secondary-whatsapp-btn"
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-3 px-6 py-4 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-base sm:text-lg shadow-xl shadow-green-950/40 transition-all duration-200 hover:-translate-y-1"
            >
              <MessageSquare className="w-5 h-5" />
              <span>تواصل عبر واتساب</span>
            </a>

            {/* Tertiary Quick CTA: Scroll to Form */}
            <a
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-4 rounded-xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-200 border border-neutral-700/80 font-bold text-sm sm:text-base transition-all duration-200 hover:-translate-y-0.5"
            >
              <span>اطلب سطحة</span>
              <ArrowDown className="w-4 h-4 text-neutral-400" />
            </a>
          </div>

          {/* Key Trust Signals Below CTAs */}
          <div className="pt-6 border-t border-neutral-800/80 grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-300">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-[#F20D0D] flex-shrink-0" />
              <span>خدمة متواصلة 24/7</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F20D0D] flex-shrink-0" />
              <span>نقل آمن وحماية للمركبة</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <MapPin className="w-4 h-4 text-[#F20D0D] flex-shrink-0" />
              <span>القنفذة • القوز • المظيلف</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
