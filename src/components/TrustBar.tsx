import React from 'react';
import { TRUST_POINTS } from '../data/towingData';
import { Clock, Zap, Compass, BadgeCheck } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Clock: <Clock className="w-6 h-6 text-[#F20D0D]" />,
  Zap: <Zap className="w-6 h-6 text-[#F20D0D]" />,
  Compass: <Compass className="w-6 h-6 text-[#F20D0D]" />,
  BadgeCheck: <BadgeCheck className="w-6 h-6 text-[#F20D0D]" />,
};

export const TrustBar: React.FC = () => {
  return (
    <section
      id="trust-bar"
      className="relative z-20 -mt-8 sm:-mt-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      aria-label="مميزات الثقة والخدمة"
    >
      <div className="bg-[#151515] border border-neutral-800 rounded-2xl shadow-2xl p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-neutral-800">
          {TRUST_POINTS.map((item, index) => (
            <div
              key={index}
              className={`flex items-start gap-4 pt-4 sm:pt-0 ${
                index !== 0 ? 'sm:pr-6 lg:pr-8' : ''
              }`}
            >
              <div className="w-12 h-12 rounded-xl bg-red-950/40 border border-red-900/40 flex items-center justify-center flex-shrink-0">
                {iconMap[item.iconName] || <Clock className="w-6 h-6 text-[#F20D0D]" />}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white font-['Cairo'] mb-1">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
