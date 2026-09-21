import React from 'react';
import { SERVICES_DATA, BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Truck, AlertTriangle, Wrench, MapPin, ArrowLeftRight, ShieldAlert, ArrowLeft, Phone, Check } from 'lucide-react';

const serviceIcons: Record<string, React.ReactNode> = {
  Truck: <Truck className="w-7 h-7 text-[#F20D0D]" />,
  AlertTriangle: <AlertTriangle className="w-7 h-7 text-[#F20D0D]" />,
  Wrench: <Wrench className="w-7 h-7 text-[#F20D0D]" />,
  MapPin: <MapPin className="w-7 h-7 text-[#F20D0D]" />,
  ArrowLeftRight: <ArrowLeftRight className="w-7 h-7 text-[#F20D0D]" />,
  ShieldAlert: <ShieldAlert className="w-7 h-7 text-[#F20D0D]" />,
};

export const ServicesSection: React.FC = () => {
  return (
    <section
      id="services"
      className="py-20 sm:py-28 bg-[#F5F5F5] text-neutral-900"
      aria-label="خدمات سطحة القنفذة"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-neutral-300/80 text-[#F20D0D] font-bold text-xs sm:text-sm mb-3 shadow-xs">
            <span>خدماتنا</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Cairo'] mb-4">
            خدمات سطحات ونقل سيارات <span className="text-[#F20D0D]">حسب احتياجك</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            نوفر حلول نقل وسحب للمركبات بمختلف حالاتها في القنفذة والقوز والمظيلف بأعلى معايير الأمان والسرعة.
          </p>
        </div>

        {/* 6 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_DATA.map((service, index) => {
            const waCustomUrl = getWhatsAppLink(
              `السلام عليكم، أود طلب خدمة: (${service.title}) في القنفذة أو المناطق المجاورة. موقعي الحالي:`
            );

            return (
              <div
                key={service.id}
                id={`service-card-${index + 1}`}
                className="group relative bg-white rounded-2xl p-6 sm:p-7 border border-neutral-200/90 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  {/* Top Header with Icon and Service Number */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-14 h-14 rounded-xl bg-red-50 border border-red-100 flex items-center justify-center group-hover:bg-[#F20D0D] group-hover:text-white transition-colors duration-300">
                      <span className="group-hover:[&>svg]:text-white transition-colors">
                        {serviceIcons[service.iconName] || <Truck className="w-7 h-7 text-[#F20D0D]" />}
                      </span>
                    </div>
                    <span className="text-2xl font-black text-neutral-200 font-mono">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-['Cairo'] mb-2.5 group-hover:text-[#F20D0D] transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-neutral-600 leading-relaxed mb-6">
                    {service.description}
                  </p>

                  {/* Bullet features */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-neutral-100">
                    {service.features.map((feat, fidx) => (
                      <div key={fidx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-700">
                        <Check className="w-3.5 h-3.5 text-[#F20D0D] flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-4 border-t border-neutral-100 flex items-center gap-2">
                  <a
                    href={waCustomUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-neutral-900 group-hover:bg-[#F20D0D] text-white font-bold text-xs sm:text-sm transition-colors duration-200"
                    aria-label={`طلب خدمة ${service.title} عبر واتساب`}
                  >
                    <span>اطلب الخدمة</span>
                    <ArrowLeft className="w-4 h-4" />
                  </a>

                  <a
                    href={BUSINESS_INFO.telLink}
                    className="p-2.5 rounded-xl bg-neutral-100 hover:bg-red-50 text-neutral-700 hover:text-[#F20D0D] transition-colors"
                    title="اتصال مباشر"
                    aria-label={`اتصال مباشر لطلب ${service.title}`}
                  >
                    <Phone className="w-4 h-4" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner inside Services */}
        <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-[#050505] text-white border border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="text-lg sm:text-xl font-bold font-['Cairo'] mb-1">
              هل تواجه ظرفاً طارئاً على الطريق الآن؟
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400">
              لا تتردد في الاتصال الفوري بفريق سطحة القنفذة وسنتحرك لموقعك بأقرب وقت.
            </p>
          </div>
          <div className="flex items-center gap-3 w-full sm:w-auto">
            <a
              href={BUSINESS_INFO.telLink}
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-sm shadow-md"
            >
              <Phone className="w-4 h-4" />
              <span>اتصل: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
