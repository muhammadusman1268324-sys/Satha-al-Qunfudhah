import React, { useState } from 'react';
import { FAQ_DATA, BUSINESS_INFO } from '../data/towingData';
import { ChevronDown, HelpCircle, Phone } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-20 sm:py-28 bg-[#F5F5F5] text-neutral-900"
      aria-label="الأسئلة الشائعة حول سطحة القنفذة"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-md bg-white border border-neutral-300 text-[#F20D0D] font-bold text-xs sm:text-sm mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>الأسئلة الشائعة</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-900 tracking-tight font-['Cairo'] mb-4">
            إجابات على <span className="text-[#F20D0D]">استفساراتكم</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
            جمعنا لكم أهم الاستفسارات المتكررة حول كيفية طلب السطحة ونطاق الخدمة وطرق التواصل.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/90 shadow-xs overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(index)}
                  className="w-full text-right px-6 py-5 flex items-center justify-between gap-4 font-bold text-base sm:text-lg text-neutral-900 font-['Cairo'] hover:text-[#F20D0D] transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="flex-1">{faq.question}</span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200 ${
                      isOpen
                        ? 'bg-red-50 text-[#F20D0D] rotate-180'
                        : 'bg-neutral-100 text-neutral-500'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm sm:text-base text-neutral-600 leading-relaxed border-t border-neutral-100">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* FAQ Contact Note */}
        <div className="mt-12 text-center p-6 bg-white rounded-2xl border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-right">
            <h4 className="text-base font-bold text-neutral-900 font-['Cairo']">
              هل لديك استفسار آخر لم تجد إجابته هنا؟
            </h4>
            <p className="text-xs text-neutral-500 mt-0.5">
              فريقنا جاهز للإجابة على كافة تساؤلاتك وترتيب طلبك فوراً.
            </p>
          </div>

          <a
            href={BUSINESS_INFO.telLink}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-bold text-xs sm:text-sm shadow-md transition-all"
          >
            <Phone className="w-4 h-4" />
            <span>اتصل بنا: {BUSINESS_INFO.phoneDisplay}</span>
          </a>
        </div>
      </div>
    </section>
  );
};
