import React from 'react';
import { WHY_CHOOSE_US, BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { Flame, PhoneOutgoing, Clock8, ShieldCheck, Send, Award, Phone, MessageSquare } from 'lucide-react';

const benefitIcons: Record<string, React.ReactNode> = {
  Flame: <Flame className="w-6 h-6 text-[#F20D0D]" />,
  PhoneOutgoing: <PhoneOutgoing className="w-6 h-6 text-[#F20D0D]" />,
  Clock8: <Clock8 className="w-6 h-6 text-[#F20D0D]" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-[#F20D0D]" />,
  Send: <Send className="w-6 h-6 text-[#F20D0D]" />,
  Award: <Award className="w-6 h-6 text-[#F20D0D]" />,
};

export const WhyChooseUs: React.FC = () => {
  return (
    <section
      id="why-us"
      className="py-20 sm:py-28 bg-[#151515] text-white border-t border-neutral-800"
      aria-label="لماذا تختار سطحة القنفذة"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-red-950/60 border border-red-900/50 text-red-400 font-bold text-xs sm:text-sm mb-3">
            <span>مزايا الخدمة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cairo'] mb-4">
            لماذا تختار <span className="text-[#F20D0D]">سطحة القنفذة؟</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            نحرص على تقديم تجربة مريحة وسريعة تلبي احتياجاتك في اللحظات الحرجة بأمان واحترافية.
          </p>
        </div>

        {/* 6 Benefit Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-14">
          {WHY_CHOOSE_US.map((item, index) => (
            <div
              key={index}
              className="bg-[#0e0e0e] border border-neutral-800/90 rounded-2xl p-6 sm:p-7 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-1 group"
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center mb-5 group-hover:bg-[#F20D0D] group-hover:text-white transition-colors duration-200">
                <span className="group-hover:[&>svg]:text-white transition-colors">
                  {benefitIcons[item.iconName] || <Flame className="w-6 h-6 text-[#F20D0D]" />}
                </span>
              </div>

              <h3 className="text-lg sm:text-xl font-bold text-white font-['Cairo'] mb-2 group-hover:text-[#F20D0D] transition-colors">
                {item.title}
              </h3>

              <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Conversion Action Bar */}
        <div className="bg-gradient-to-r from-red-950/40 via-neutral-900 to-neutral-900 border border-red-900/40 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-right">
            <h4 className="text-lg sm:text-xl font-bold font-['Cairo'] text-white">
              جاهزون لنقل سيارتك في أي وقت
            </h4>
            <p className="text-xs sm:text-sm text-neutral-400 mt-1">
              تواصل معنا وسنوافيك بالسطحة المناسبة في أسرع وقت ممكن.
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

            <a
              href={getWhatsAppLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-bold text-sm shadow-md"
            >
              <MessageSquare className="w-4 h-4" />
              <span className="hidden sm:inline">واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
