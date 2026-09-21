import React from 'react';
import { STEPS_DATA, BUSINESS_INFO } from '../data/towingData';
import { PhoneCall, MapPin, Navigation, Truck, Phone, ArrowLeft } from 'lucide-react';

const stepIcons: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-6 h-6 text-[#F20D0D]" />,
  MapPin: <MapPin className="w-6 h-6 text-[#F20D0D]" />,
  Navigation: <Navigation className="w-6 h-6 text-[#F20D0D]" />,
  Truck: <Truck className="w-6 h-6 text-[#F20D0D]" />,
};

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="process"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 border-b border-neutral-200/80"
      aria-label="خطوات طلب السطحة"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-50 text-[#F20D0D] font-bold text-xs sm:text-sm mb-3 border border-red-200">
            <span>آلية العمل</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Cairo'] mb-4">
            كيف تطلب <span className="text-[#F20D0D]">السطحة؟</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            أربع خطوات واضحة ومباشرة من لحظة تواصلك وحتى وصول السطحة ونقل سيارتك بأمان.
          </p>
        </div>

        {/* 4 Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 relative">
          {STEPS_DATA.map((step, idx) => (
            <div
              key={step.number}
              id={`step-${step.number}`}
              className="relative bg-[#F9F9F9] border border-neutral-200/80 rounded-2xl p-6 sm:p-7 flex flex-col justify-between hover:border-red-400 hover:shadow-lg transition-all duration-300"
            >
              {/* Step number badge */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl sm:text-4xl font-black text-[#F20D0D] font-mono tracking-tighter">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-white border border-neutral-200 shadow-xs flex items-center justify-center">
                  {stepIcons[step.iconName] || <Truck className="w-6 h-6 text-[#F20D0D]" />}
                </div>
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold text-neutral-900 font-['Cairo'] mb-2.5">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Progress arrow indicator for desktop except last step */}
              {idx < 3 && (
                <div className="hidden lg:block absolute -left-4 top-1/2 -translate-y-1/2 z-10 text-neutral-300">
                  <ArrowLeft className="w-5 h-5 text-red-400/60" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Action Button Below Steps */}
        <div className="mt-14 text-center">
          <a
            id="process-call-cta"
            href={BUSINESS_INFO.telLink}
            className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-black text-base sm:text-lg shadow-xl shadow-red-700/30 transition-all duration-200 hover:-translate-y-1"
          >
            <Phone className="w-5 h-5" />
            <span>اتصل الآن: {BUSINESS_INFO.phone}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
