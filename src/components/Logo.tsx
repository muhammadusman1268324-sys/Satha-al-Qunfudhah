import React from 'react';

interface LogoProps {
  light?: boolean;
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ light = false, className = '' }) => {
  return (
    <a
      href="#home"
      id="brand-logo"
      className={`inline-flex items-center gap-3 group text-decoration-none ${className}`}
      aria-label="سطحة القنفذة - الصفحة الرئيسية"
    >
      {/* Custom Tow Hook & Flatbed Minimal Icon */}
      <div className="relative flex items-center justify-center w-11 h-11 rounded-xl bg-[#F20D0D] text-white shadow-md shadow-red-900/30 group-hover:bg-[#B80000] transition-colors duration-200">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-6 h-6"
        >
          {/* Flatbed truck chassis and tow hook silhouette */}
          <path d="M1 14h3l3-7h8l2 7h6v5H1v-5z" />
          <path d="M14 7V3h3" />
          <circle cx="6.5" cy="18.5" r="2.5" />
          <circle cx="17.5" cy="18.5" r="2.5" />
          <path d="M9 14l2-4" />
        </svg>
        <span className="absolute -top-1 -left-1 w-3 h-3 bg-red-400 rounded-full animate-ping opacity-75" />
      </div>

      <div className="flex flex-col text-right">
        <span
          className={`font-extrabold text-xl sm:text-2xl tracking-tight font-['Cairo'] transition-colors ${
            light ? 'text-white' : 'text-neutral-900'
          }`}
        >
          سطحة <span className="text-[#F20D0D]">القنفذة</span>
        </span>
        <span className="text-xs text-neutral-400 font-medium tracking-wide">
          سحب ونقل سيارات 24/7
        </span>
      </div>
    </a>
  );
};
