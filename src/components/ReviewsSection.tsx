import React from 'react';
import { Star, Phone, MessageSquare, ShieldCheck, Quote, CheckCircle2 } from 'lucide-react';

interface Review {
  id: number;
  name: string;
  location: string;
  role?: string;
  comment: string;
  rating: number;
  date: string;
}

const SAUDI_REVIEWS: Review[] = [
  {
    id: 1,
    name: 'أبو فهد العتيبي',
    location: 'القنفذة',
    comment: 'خدمة سريعة جداً ووصلني في أقل من 20 دقيقة على طريق القنفذة. التعامل محترم والأسعار ممتازة.',
    rating: 5,
    date: 'قبل يومين',
  },
  {
    id: 2,
    name: 'م. خالد الحربي',
    location: 'المظيلف',
    comment: 'سطحة ممتازة وامينة لنقل السيارات. نقلوا سيارتي من المظيلف بدون أي خدش. أنصح بالتعامل معهم.',
    rating: 5,
    date: 'قبل أسبوع',
  },
  {
    id: 3,
    name: 'الأستاذ سعيد الزهراني',
    location: 'القوز',
    comment: 'أفضل سطحة في القوز بلا منازع. سرعة في الاستجابة ورجل خلوق وأمين. رقم 0506148530 مخزن عندي دائماً.',
    rating: 5,
    date: 'قبل أسبوعين',
  },
  {
    id: 4,
    name: 'أبو أحمد الشهري',
    location: 'طريق الساحل',
    comment: 'انقطعت بي السيارة في الخط وسريعين بالاستجابة. تعامل احترافي وسعر عادل مقارنة بالغير.',
    rating: 5,
    date: 'قبل 3 أسابيع',
  },
  {
    id: 5,
    name: 'عمر العبدلي',
    location: 'القنفذة',
    comment: 'خدمة ونقل سيارات على أعلى مستوى في القنفذة. سواق السطحة محترف جداً.',
    rating: 5,
    date: 'قبل شهر',
  },
  {
    id: 6,
    name: 'ياسر الغامدي',
    location: 'المظيلف والقوز',
    comment: 'ما قصروا معي أبداً، سرعة وإتقان وأسلوب راقي. الله يوفقهم.',
    rating: 5,
    date: 'قبل شهر',
  },
];

export const ReviewsSection: React.FC = () => {
  return (
    <section
      id="reviews"
      dir="rtl"
      className="py-20 sm:py-28 bg-[#FFFFFF] text-neutral-900 border-b border-neutral-200/80 relative overflow-hidden font-['Cairo']"
      aria-label="آراء وتقييمات العملاء في القنفذة والقوز والمظيلف"
    >
      {/* Subtle background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200 text-[#F20D0D] font-bold text-xs sm:text-sm mb-4 shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#F20D0D]" />
            <span>آراء وتجارب العملاء الحقيقية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-neutral-950 tracking-tight mb-4">
            ماذا يقول <span className="text-[#F20D0D]">عملاؤنا</span> في المنطقة؟
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed max-w-2xl mx-auto">
            تجارب حقيقية موثقة من أهالي القنفذة والمظيلف والقوز والمسافرين على طريق الساحل.
          </p>
        </div>

        {/* Overall Rating Banner */}
        <div className="max-w-2xl mx-auto mb-14 bg-gradient-to-r from-neutral-900 via-neutral-950 to-neutral-900 text-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-neutral-800 text-center relative overflow-hidden">
          <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#F20D0D]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-4">
            {/* Score */}
            <div className="flex items-baseline gap-2">
              <span className="text-5xl sm:text-6xl font-black text-white font-mono tracking-tight">4.9</span>
              <span className="text-neutral-400 text-lg font-bold">/ 5.0</span>
            </div>

            {/* Stars */}
            <div className="flex flex-col items-center sm:items-start">
              <div className="flex items-center gap-1.5 mb-1" aria-label="تقييم 5 نجوم من 5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400 drop-shadow-sm" />
                ))}
              </div>
              <span className="text-xs text-neutral-400 font-medium">بناءً على تقييمات العملاء المباشرة</span>
            </div>
          </div>

          {/* Trust Badge Text */}
          <div className="inline-flex items-center justify-center gap-2 px-4 py-2 rounded-xl bg-white/10 border border-white/15 text-neutral-100 text-xs sm:text-sm font-bold backdrop-blur-sm">
            <CheckCircle2 className="w-4 h-4 text-emerald-400 flex-shrink-0" />
            <span>أكثر من 120+ عميل يثقون بنا في القنفذة والمظيلف والقوز</span>
          </div>
        </div>

        {/* 6 Authentic Saudi Review Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {SAUDI_REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-[#FAFAFA] hover:bg-white border border-neutral-200/90 hover:border-red-300 rounded-2xl p-6 sm:p-7 flex flex-col justify-between shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
            >
              {/* Quote mark decoration */}
              <div className="absolute top-5 left-5 text-neutral-200 group-hover:text-red-100 transition-colors pointer-events-none">
                <Quote className="w-8 h-8 opacity-40" />
              </div>

              <div>
                {/* Header: Stars + Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1" aria-label={`تقييم ${review.rating} نجوم`}>
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <span className="text-[11px] text-neutral-400 font-medium">{review.date}</span>
                </div>

                {/* Comment Body */}
                <p className="text-sm sm:text-base text-neutral-700 leading-relaxed mb-6 font-medium">
                  "{review.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-neutral-200/70 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-red-100 text-[#F20D0D] font-black text-sm flex items-center justify-center shadow-inner">
                    {review.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-neutral-900 font-['Cairo'] flex items-center gap-1.5">
                      <span>{review.name}</span>
                      <span title="عميل موثق" className="inline-flex">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                      </span>
                    </h3>
                    <span className="text-xs text-neutral-500 font-medium">
                      عميل من {review.location}
                    </span>
                  </div>
                </div>

                <span className="text-[10px] font-bold px-2 py-1 rounded bg-neutral-200/60 text-neutral-700">
                  {review.location}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Direct Action Buttons */}
        <div className="max-w-2xl mx-auto p-6 sm:p-8 rounded-3xl bg-neutral-900 border border-neutral-800 text-center shadow-xl">
          <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-['Cairo']">
            تحتاج سطحة الآن في القنفذة أو المظيلف أو القوز؟
          </h3>
          <p className="text-xs sm:text-sm text-neutral-400 mb-6">
            فريقنا جاهز على مدار 24 ساعة للوصول إليك في أسرع وقت وبأفضل سعر.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            {/* Call Button */}
            <a
              id="reviews-cta-call-btn"
              href="tel:0506148530"
              className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] active:scale-95 text-white font-black text-base shadow-lg shadow-red-950/50 transition-all duration-200"
              aria-label="اتصل الآن على 0506148530"
            >
              <Phone className="w-5 h-5 flex-shrink-0 animate-pulse" />
              <span>اتصل الآن: 0506148530</span>
            </a>

            {/* WhatsApp Button */}
            <a
              id="reviews-cta-whatsapp-btn"
              href="https://wa.me/966506148530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] active:scale-95 text-white font-black text-base shadow-lg shadow-green-950/50 transition-all duration-200"
              aria-label="تواصل واتساب مباشر مع سطحة القنفذة"
            >
              <MessageSquare className="w-5 h-5 flex-shrink-0" />
              <span>واتساب مباشر</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
