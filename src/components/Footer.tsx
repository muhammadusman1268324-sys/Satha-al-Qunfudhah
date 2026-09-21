import React from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MessageSquare, MapPin, Clock, ArrowUp } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { href: '#home', label: 'الرئيسية' },
    { href: '#about', label: 'من نحن' },
    { href: '#services', label: 'خدماتنا' },
    { href: '#areas', label: 'مناطق الخدمة' },
    { href: '#why-us', label: 'لماذا نحن' },
    { href: '#reviews', label: 'آراء العملاء' },
    { href: '#faq', label: 'الأسئلة الشائعة' },
    { href: '#contact', label: 'تواصل معنا' },
  ];

  return (
    <footer className="bg-[#050505] text-white border-t border-neutral-800/80 pt-16 pb-28 sm:pb-16 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 pb-12 border-b border-neutral-800">
          {/* Brand & About (5 cols) */}
          <div className="lg:col-span-5 text-right">
            <Logo light={true} className="mb-5" />
            <p className="text-sm text-neutral-400 leading-relaxed mb-6 max-w-md">
              سطحة القنفذة — خدمات سحب ونقل السيارات والمركبات المتعطلة في القنفذة والقوز والمظيلف والمناطق
              المحيطة على مدار الساعة مع سرعة الاستجابة والعناية بالمركبة.
            </p>

            <div className="flex flex-wrap gap-2 text-xs">
              <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                سطحة هيدروليك وعادية
              </span>
              <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                خدمة 24/7
              </span>
              <span className="px-3 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300">
                طريق الساحل الدولي
              </span>
            </div>
          </div>

          {/* Quick Links (3 cols) */}
          <div className="lg:col-span-3 text-right">
            <h4 className="text-base font-bold font-['Cairo'] text-white mb-4 pb-2 border-b border-neutral-800 inline-block">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              {navLinks.map((link, idx) => (
                <li key={idx}>
                  <a
                    href={link.href}
                    className="text-neutral-400 hover:text-[#F20D0D] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas (2 cols) */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-base font-bold font-['Cairo'] text-white mb-4 pb-2 border-b border-neutral-800 inline-block">
              مناطق الخدمة
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <a href="#areas" className="text-neutral-400 hover:text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F20D0D]" />
                  <span>القنفذة</span>
                </a>
              </li>
              <li>
                <a href="#areas" className="text-neutral-400 hover:text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F20D0D]" />
                  <span>القوز</span>
                </a>
              </li>
              <li>
                <a href="#areas" className="text-neutral-400 hover:text-white flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-[#F20D0D]" />
                  <span>المظيلف</span>
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact (2 cols) */}
          <div className="lg:col-span-2 text-right">
            <h4 className="text-base font-bold font-['Cairo'] text-white mb-4 pb-2 border-b border-neutral-800 inline-block">
              تواصل مباشر
            </h4>
            <div className="space-y-3 text-xs sm:text-sm">
              <a
                href={BUSINESS_INFO.telLink}
                className="flex items-center gap-2 text-white hover:text-[#F20D0D] font-mono font-bold"
                dir="ltr"
              >
                <Phone className="w-4 h-4 text-[#F20D0D]" />
                <span>{BUSINESS_INFO.phone}</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-[#25D366] hover:underline"
              >
                <MessageSquare className="w-4 h-4" />
                <span>مراسلة واتساب</span>
              </a>

              <div className="flex items-center gap-2 text-neutral-400 text-xs pt-2">
                <Clock className="w-3.5 h-3.5 text-neutral-500" />
                <span>24/7 طوال الأسبوع</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom copyright and back-to-top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <div>
            © 2026 سطحة القنفذة. جميع الحقوق محفوظة.
          </div>

          <button
            type="button"
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-neutral-400 hover:text-white transition-colors"
            aria-label="الرجوع إلى أعلى الصفحة"
          >
            <span>إلى الأعلى</span>
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
};
