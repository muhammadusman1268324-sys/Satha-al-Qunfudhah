import React from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { CheckCircle2, Phone, MessageSquare, Shield, Clock, MapPin } from 'lucide-react';
import aboutImg from '../assets/images/about_recovery_1789990227607.jpg';

export const AboutSection: React.FC = () => {
  const points = [
    'سرعة الاستجابة',
    'خدمة متاحة على مدار الساعة',
    'تعامل احترافي',
    'تغطية محلية',
    'سهولة التواصل',
    'عناية بالسيارة أثناء النقل',
  ];

  return (
    <section
      id="about"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 overflow-hidden"
      aria-label="من نحن - سطحة القنفذة"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Text Column (7 cols on lg) */}
          <div className="lg:col-span-7 order-2 lg:order-1 text-right">
            {/* Small red section label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#F20D0D] font-bold text-xs sm:text-sm mb-4 border border-red-200">
              <span>من نحن</span>
            </div>

            {/* Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 leading-tight tracking-tight mb-6 font-['Cairo']">
              خدمة سطحات تضع <span className="text-[#F20D0D]">سرعة الوصول</span> وراحة العميل أولاً
            </h2>

            {/* Content paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 leading-relaxed mb-8">
              سطحة القنفذة تقدم خدمات سحب ونقل السيارات للعملاء في <strong>القنفذة</strong> و
              <strong>القوز</strong> و<strong>المظيلف</strong> والمناطق المحيطة. نركز على سرعة الاستجابة،
              التعامل الاحترافي، وسهولة التواصل عند الحاجة إلى سطحة في أي وقت وأي ظرف.
            </p>

            {/* Feature points grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-10">
              {points.map((pt, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 p-3.5 rounded-xl bg-[#F5F5F5] border border-neutral-200/80 hover:border-red-300 transition-colors"
                >
                  <CheckCircle2 className="w-5 h-5 text-[#F20D0D] flex-shrink-0" />
                  <span className="font-bold text-neutral-800 text-sm sm:text-base">{pt}</span>
                </div>
              ))}
            </div>

            {/* Direct CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                id="about-call-cta"
                href={BUSINESS_INFO.telLink}
                className="inline-flex items-center gap-3 px-6 py-3.5 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-base shadow-lg shadow-red-600/30 transition-all duration-200 hover:-translate-y-0.5"
              >
                <Phone className="w-5 h-5" />
                <span>تواصل معنا الآن</span>
              </a>

              <a
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-white font-bold text-base transition-all duration-200 hover:-translate-y-0.5"
              >
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
                <span>مراسلة واتساب</span>
              </a>

              <div className="mr-auto hidden sm:flex items-center gap-2 text-xs text-neutral-500 font-medium">
                <Shield className="w-4 h-4 text-[#F20D0D]" />
                <span>جاهزية مستمرة على مدار الساعة</span>
              </div>
            </div>
          </div>

          {/* Image Column (5 cols on lg) */}
          <div className="lg:col-span-5 order-1 lg:order-2">
            <div className="relative">
              {/* Outer decorative card frame with subtle red border */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-neutral-100 group">
                <img
                  src={aboutImg}
                  alt="سطحة القنفذة لنقل السيارات باحترافية وأمان"
                  className="w-full h-[380px] sm:h-[460px] object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                {/* Floating badge inside image */}
                <div className="absolute bottom-4 right-4 left-4 p-4 rounded-xl bg-[#151515]/90 backdrop-blur-md text-white border border-neutral-700/80">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-red-400 font-bold mb-0.5">تغطية ميدانية سريعة</div>
                      <div className="text-sm font-extrabold font-['Cairo']">القنفذة • القوز • المظيلف</div>
                    </div>
                    <div className="w-9 h-9 rounded-lg bg-[#F20D0D] flex items-center justify-center text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative accent element */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-red-100 rounded-2xl -z-10 hidden sm:block" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
