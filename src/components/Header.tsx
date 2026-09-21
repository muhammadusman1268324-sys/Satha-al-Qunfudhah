import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Phone, MapPin, Menu, X, Clock, MessageSquare, ChevronDown } from 'lucide-react';

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['home', 'about', 'services', 'areas', 'why-us', 'reviews', 'faq', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#home', label: 'الرئيسية', id: 'home' },
    { href: '#about', label: 'من نحن', id: 'about' },
    { href: '#services', label: 'خدماتنا', id: 'services' },
    { href: '#areas', label: 'مناطق الخدمة', id: 'areas' },
    { href: '#why-us', label: 'لماذا نحن', id: 'why-us' },
    { href: '#reviews', label: 'آراء العملاء', id: 'reviews' },
    { href: '#faq', label: 'الأسئلة الشائعة', id: 'faq' },
    { href: '#contact', label: 'تواصل معنا', id: 'contact' },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-300">
      {/* Top Contact Bar (Dark) */}
      <div
        id="top-contact-bar"
        className={`bg-[#050505] text-neutral-300 border-b border-neutral-800/80 transition-all duration-300 ${
          isScrolled ? 'hidden' : 'block'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2.5 flex items-center justify-between text-xs sm:text-sm">
          {/* Right side: Locations served */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1.5 text-neutral-300">
              <MapPin className="w-4 h-4 text-[#F20D0D]" />
              <span className="font-medium">{BUSINESS_INFO.locationsServedText}</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="text-xs font-semibold">سطحة متاحة الآن</span>
            </div>
          </div>

          {/* Left side: Phone & Direct Emergency CTA */}
          <div className="flex items-center gap-3 sm:gap-6">
            <div className="hidden sm:flex items-center gap-1.5 text-neutral-300">
              <Clock className="w-3.5 h-3.5 text-neutral-400" />
              <span>خدمة 24 ساعة متواصلة</span>
            </div>

            <a
              id="top-bar-phone-link"
              href={BUSINESS_INFO.telLink}
              className="flex items-center gap-2 font-bold text-white hover:text-[#F20D0D] transition-colors"
              dir="ltr"
              aria-label="اتصل هاتفياً بسطحة القنفذة"
            >
              <Phone className="w-3.5 h-3.5 text-[#F20D0D]" />
              <span className="font-mono text-sm tracking-wider">{BUSINESS_INFO.phone}</span>
            </a>

            <a
              id="top-bar-cta-button"
              href={BUSINESS_INFO.telLink}
              className="hidden lg:inline-flex items-center justify-center px-4 py-1.5 rounded-lg bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-xs tracking-wide shadow-sm transition-all duration-200 hover:-translate-y-0.5"
            >
              اطلب سطحة الآن
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        id="main-navigation"
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-[#111111]/95 backdrop-blur-md shadow-xl border-b border-neutral-800'
            : 'bg-[#151515] border-b border-neutral-800'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Logo light={true} />
            </div>

            {/* Desktop Navigation Links */}
            <div className="hidden lg:flex items-center gap-1 xl:gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  className={`px-3 py-2 text-sm font-semibold rounded-lg transition-colors duration-200 relative ${
                    activeSection === link.id
                      ? 'text-white bg-neutral-800/80 font-bold'
                      : 'text-neutral-300 hover:text-white hover:bg-neutral-800/40'
                  }`}
                >
                  {link.label}
                  {activeSection === link.id && (
                    <span className="absolute bottom-0 right-3 left-3 h-0.5 bg-[#F20D0D] rounded-full" />
                  )}
                </a>
              ))}
            </div>

            {/* Header Right / Conversion Actions */}
            <div className="hidden sm:flex items-center gap-2.5">
              <a
                id="nav-whatsapp-cta"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-[#25D366]/10 hover:bg-[#25D366]/20 text-[#25D366] border border-[#25D366]/30 font-bold text-xs sm:text-sm transition-all duration-200"
                aria-label="تواصل مع سطحة القنفذة عبر واتساب"
              >
                <MessageSquare className="w-4 h-4" />
                <span className="hidden md:inline">واتساب</span>
              </a>

              <a
                id="nav-call-cta"
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-2 px-4 py-2 sm:py-2.5 rounded-lg bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-xs sm:text-sm shadow-md shadow-red-900/40 transition-all duration-200 hover:-translate-y-0.5"
                aria-label="اتصل الآن بسطحة القنفذة"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل الآن</span>
              </a>
            </div>

            {/* Mobile Controls (Call button + Hamburger) */}
            <div className="flex sm:hidden items-center gap-2">
              <a
                href={BUSINESS_INFO.telLink}
                className="p-2 rounded-lg bg-[#F20D0D] text-white"
                aria-label="اتصال سريع"
              >
                <Phone className="w-4 h-4" />
              </a>

              <button
                id="mobile-menu-toggle"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2.5 rounded-lg text-neutral-300 hover:text-white hover:bg-neutral-800 focus:outline-none"
                aria-expanded={mobileMenuOpen}
                aria-label={mobileMenuOpen ? 'إغلاق القائمة' : 'فتح القائمة'}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Slide-down Navigation Drawer */}
        {mobileMenuOpen && (
          <div
            id="mobile-navigation-drawer"
            className="lg:hidden bg-[#0e0e0e] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 shadow-2xl transition-all"
          >
            {/* Direct Phone Banner inside Mobile Menu */}
            <div className="p-3 bg-neutral-900 rounded-xl border border-neutral-800 flex items-center justify-between">
              <div>
                <div className="text-xs text-neutral-400">اتصال سريع ومباشر:</div>
                <a
                  href={BUSINESS_INFO.telLink}
                  className="text-base font-extrabold text-[#F20D0D] font-mono tracking-wider"
                  dir="ltr"
                >
                  {BUSINESS_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-1 text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>متاح 24/7</span>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.id}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    activeSection === link.id
                      ? 'bg-[#F20D0D] text-white font-bold'
                      : 'text-neutral-200 hover:bg-neutral-800'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>

            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={BUSINESS_INFO.telLink}
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#F20D0D] text-white font-bold text-sm shadow-md"
              >
                <Phone className="w-4 h-4" />
                <span>اتصل الآن</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 py-3 rounded-xl bg-[#25D366] text-white font-bold text-sm shadow-md"
              >
                <MessageSquare className="w-4 h-4" />
                <span>واتساب</span>
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
