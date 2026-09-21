import React from 'react';
import { SERVICE_AREAS, BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { MapPin, Phone, MessageSquare, CheckCircle, Navigation, Radio } from 'lucide-react';

export const ServiceAreasSection: React.FC = () => {
  return (
    <section
      id="areas"
      className="py-20 sm:py-28 bg-[#0D0D0D] text-white overflow-hidden relative"
      aria-label="مناطق خدمة سطحة القنفذة"
    >
      {/* Subtle background glow accents */}
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-red-400 font-bold text-xs sm:text-sm mb-3">
            <Radio className="w-3.5 h-3.5 text-[#F20D0D] animate-pulse" />
            <span>نطاق الخدمة والتغطية الميدانية</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cairo'] mb-4">
            مناطق <span className="text-[#F20D0D]">خدمتنا</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            نخدم العملاء في القنفذة والمناطق المحيطة بها بسرعة وجاهزية تامة لنقل وسحب جميع أنواع السيارات.
          </p>
        </div>

        {/* 3 Prominent Location Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {SERVICE_AREAS.map((area, index) => (
            <div
              key={area.id}
              id={`area-card-${area.id}`}
              className="relative bg-[#151515] border border-neutral-800 hover:border-red-600/60 rounded-2xl p-6 sm:p-8 shadow-xl transition-all duration-300 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div>
                {/* Header status */}
                <div className="flex items-center justify-between mb-5">
                  <div className="w-12 h-12 rounded-xl bg-red-950/50 border border-red-900/40 flex items-center justify-center text-[#F20D0D] group-hover:bg-[#F20D0D] group-hover:text-white transition-colors duration-200">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-950/60 text-emerald-400 border border-emerald-800/40 text-xs font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    متاح للخدمة
                  </span>
                </div>

                {/* City name */}
                <h3 className="text-2xl font-black text-white font-['Cairo'] mb-1 group-hover:text-[#F20D0D] transition-colors">
                  {area.name}
                </h3>
                <div className="text-xs text-red-400 font-medium mb-3">
                  {area.tagline}
                </div>

                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed mb-6">
                  {area.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {area.features.map((feat, fidx) => (
                    <div key={fidx} className="flex items-center gap-2 text-xs sm:text-sm text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-[#F20D0D] flex-shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Quick Action */}
              <div className="pt-4 border-t border-neutral-800/80 flex items-center gap-2">
                <a
                  href={getWhatsAppLink(`السلام عليكم، أحتاج سطحة في منطقة (${area.name}). موقعي الحالي:`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2 px-3 rounded-lg bg-neutral-800 hover:bg-[#F20D0D] text-white text-xs font-bold text-center transition-colors"
                >
                  اطلب سطحة في {area.name}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Animated Visual Map Coverage Display */}
        <div
          id="coverage-map-visual"
          className="relative bg-[#151515] border border-neutral-800 rounded-3xl p-6 sm:p-10 shadow-2xl overflow-hidden"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="text-right">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-red-400 mb-1">
                <Navigation className="w-3.5 h-3.5" />
                <span>مناطق التغطية الميدانية (محافظة القنفذة وضواحيها)</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold font-['Cairo']">
                خريطة نطاق الخدمة المستمرة
              </h3>
              <p className="text-xs text-neutral-400 mt-1">
                توضيح بياني لمسار ونطاق تغطية السطحة في المحافظة والمراكز المرتبطة.
              </p>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-xs text-neutral-400">تغطية تشمل الطريق الساحلي الدولي</span>
            </div>
          </div>

          {/* Interactive Graphic: Stylized Arabian Coastal Route Corridor */}
          <div className="relative w-full h-64 sm:h-80 bg-neutral-950 rounded-2xl border border-neutral-800/80 p-6 flex items-center justify-center overflow-hidden">
            {/* Grid coordinate aesthetic lines */}
            <div
              className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff15_1px,transparent_1px),linear-gradient(to_bottom,#ffffff15_1px,transparent_1px)] bg-[size:32px_32px]"
            />

            {/* Coastal Line Contour Representation (Red Sea Coastal Route 5) */}
            <svg
              className="absolute inset-0 w-full h-full text-neutral-800/60"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              preserveAspectRatio="none"
              viewBox="0 0 800 300"
            >
              {/* Coastline indication */}
              <path
                d="M 50,0 Q 150,150 100,300"
                stroke="#1f2937"
                strokeWidth="6"
                strokeDasharray="4 4"
              />
              {/* Coastal Highway Route */}
              <path
                d="M 160,20 Q 300,100 420,150 T 680,270"
                stroke="#F20D0D"
                strokeWidth="3"
                strokeLinecap="round"
                className="opacity-70"
              />
              {/* Connecting secondary routes */}
              <path
                d="M 420,150 L 520,60"
                stroke="#374151"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
              <path
                d="M 680,270 L 740,220"
                stroke="#374151"
                strokeWidth="2"
                strokeDasharray="3 3"
              />
            </svg>

            {/* Glowing Pulsing Markers for the 3 key primary locations */}
            <div className="relative w-full max-w-4xl h-full flex flex-col md:flex-row items-center justify-around z-10 gap-8 md:gap-0">
              {/* Marker 1: Al Mudhaylif (North) */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/30 pulse-ring absolute" />
                  <div className="w-9 h-9 rounded-full bg-[#F20D0D] text-white flex items-center justify-center shadow-lg shadow-red-600/60 relative z-10 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 text-center bg-[#151515]/90 border border-neutral-700 px-3 py-1 rounded-lg">
                  <div className="text-sm font-extrabold text-white font-['Cairo']">المظيلف</div>
                  <div className="text-[10px] text-emerald-400">متاح للخدمة</div>
                </div>
              </div>

              {/* Marker 2: Al Qunfudhah (Center / Coastal Hub) */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-red-600/40 pulse-ring absolute" />
                  <div className="w-11 h-11 rounded-full bg-[#F20D0D] text-white flex items-center justify-center shadow-xl shadow-red-600/80 relative z-10 ring-4 ring-red-950 group-hover:scale-110 transition-transform">
                    <MapPin className="w-6 h-6" />
                  </div>
                </div>
                <div className="mt-2 text-center bg-[#151515]/90 border border-red-900/60 px-4 py-1.5 rounded-lg shadow-lg">
                  <div className="text-base font-black text-white font-['Cairo']">القنفذة</div>
                  <div className="text-xs text-red-400 font-medium">المركز والساحل</div>
                </div>
              </div>

              {/* Marker 3: Al Qawz (South) */}
              <div className="flex flex-col items-center group cursor-pointer">
                <div className="relative flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-red-600/30 pulse-ring absolute" />
                  <div className="w-9 h-9 rounded-full bg-[#F20D0D] text-white flex items-center justify-center shadow-lg shadow-red-600/60 relative z-10 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-2 text-center bg-[#151515]/90 border border-neutral-700 px-3 py-1 rounded-lg">
                  <div className="text-sm font-extrabold text-white font-['Cairo']">القوز</div>
                  <div className="text-[10px] text-emerald-400">متاح للخدمة</div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Area CTA Bar */}
          <div className="mt-8 pt-6 border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-sm text-neutral-300">
              <span className="w-2.5 h-2.5 rounded-full bg-[#F20D0D]" />
              <span className="font-semibold">هل موقعك خارج هذه المراكز أو في قرية مجاورة؟</span>
            </div>

            <a
              id="areas-call-cta"
              href={BUSINESS_INFO.telLink}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-sm shadow-md transition-all duration-200 hover:-translate-y-0.5"
            >
              <Phone className="w-4 h-4" />
              <span>هل منطقتك قريبة؟ اتصل بنا: {BUSINESS_INFO.phoneDisplay}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
