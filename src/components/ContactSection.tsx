import React, { useState } from 'react';
import { BUSINESS_INFO, getWhatsAppLink } from '../data/towingData';
import { RequestFormData } from '../types';
import { Phone, MessageSquare, MapPin, Send, CheckCircle, Clock, Shield } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<RequestFormData>({
    fullName: '',
    phoneNumber: '',
    currentLocation: '',
    destination: '',
    carModel: '',
    notes: '',
  });

  const [isReadyToSend, setIsReadyToSend] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 1. Validate required fields
    if (
      !formData.fullName.trim() ||
      !formData.phoneNumber.trim() ||
      !formData.currentLocation.trim() ||
      !formData.destination.trim()
    ) {
      return;
    }

    // 2. Collect all information and format clean professional WhatsApp message
    const messageLines = [
      '*New Customer Inquiry*',
      '',
      `*Name:* ${formData.fullName.trim()}`,
      `*Phone:* ${formData.phoneNumber.trim()}`,
      `*Current Location:* ${formData.currentLocation.trim()}`,
      `*Destination:* ${formData.destination.trim()}`,
      `*Car Model:* ${formData.carModel.trim() || 'Not specified'}`,
      `*Message:* ${formData.notes.trim() || 'None'}`,
    ];

    const fullMessage = messageLines.join('\n');

    // 3. WhatsApp target number and encoded URL format
    const targetWhatsAppNumber = '9660506148530';
    const targetUrl = `https://wa.me/${targetWhatsAppNumber}?text=${encodeURIComponent(fullMessage)}`;

    setWhatsappUrl(targetUrl);
    setIsReadyToSend(true);

    // 4. Open WhatsApp directly (supports app on mobile and web on desktop)
    const openedWindow = window.open(targetUrl, '_blank', 'noopener,noreferrer');
    if (!openedWindow) {
      window.location.href = targetUrl;
    }
  };

  return (
    <section
      id="contact"
      className="py-20 sm:py-28 bg-[#0A0A0A] text-white relative overflow-hidden"
      aria-label="تواصل مع سطحة القنفذة"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-red-950/60 border border-red-900/50 text-red-400 font-bold text-xs sm:text-sm mb-3">
            <span>تواصل فوري</span>
          </div>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight font-['Cairo'] mb-4">
            تواصل مع <span className="text-[#F20D0D]">سطحة القنفذة</span>
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed">
            اتصل بنا هاتفياً أو تواصل عبر الواتساب أو املأ بيانات طلبك وسنكون بخدمتك فوراً.
          </p>
        </div>

        {/* 2 Large Direct Action Cards (Call + WhatsApp) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {/* CALL CARD */}
          <div className="bg-[#151515] border-2 border-red-600/60 hover:border-red-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-red-400 uppercase tracking-wider">اتصال فوري مباشر</span>
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  متاح 24 ساعة
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo'] mb-2">
                اتصال هاتفي مباشر
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                اضغط للاتصال الفوري والتحدث مباشرة مع السطحة دون انتظار.
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-wider mb-5" dir="ltr">
                {BUSINESS_INFO.phone}
              </div>
              <a
                id="contact-action-call"
                href={BUSINESS_INFO.telLink}
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-black text-base shadow-lg shadow-red-950 transition-all duration-200"
              >
                <Phone className="w-5 h-5" />
                <span>اتصل الآن</span>
              </a>
            </div>
          </div>

          {/* WHATSAPP CARD */}
          <div className="bg-[#151515] border-2 border-emerald-600/50 hover:border-emerald-500 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl transition-all hover:-translate-y-1 group">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold text-emerald-400 uppercase tracking-wider">إرسال اللوكيشن</span>
                <span className="flex items-center gap-1 text-xs text-emerald-400">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  رد سريع
                </span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-white font-['Cairo'] mb-2">
                محادثة وإرسال موقع عبر واتساب
              </h3>
              <p className="text-xs sm:text-sm text-neutral-400 mb-6">
                أرسل موقع سيارتك الحالي بدقة عبر الواتساب لتصلك السطحة لأقرب نقطة.
              </p>
            </div>

            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-[#25D366] font-mono tracking-wider mb-5" dir="ltr">
                {BUSINESS_INFO.phone}
              </div>
              <a
                id="contact-action-whatsapp"
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#25D366] hover:bg-[#1EBE5D] text-white font-black text-base shadow-lg shadow-green-950 transition-all duration-200"
              >
                <MessageSquare className="w-5 h-5" />
                <span>تواصل عبر واتساب</span>
              </a>
            </div>
          </div>
        </div>

        {/* Two Columns: Service Locations Info + Request Form */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Right Info Column (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#151515] border border-neutral-800 rounded-2xl p-6 sm:p-7">
              <h3 className="text-lg font-bold text-white font-['Cairo'] mb-4 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-[#F20D0D]" />
                <span>المناطق المخدومة مباشرة:</span>
              </h3>

              <div className="space-y-3">
                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F20D0D]" />
                    <span className="font-bold text-white">القنفذة</span>
                  </div>
                  <span className="text-xs text-neutral-400">المدينة وضواحيها والساحل</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F20D0D]" />
                    <span className="font-bold text-white">القوز</span>
                  </div>
                  <span className="text-xs text-neutral-400">المركز والمناطق المجاورة</span>
                </div>

                <div className="p-3 rounded-xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#F20D0D]" />
                    <span className="font-bold text-white">المظيلف</span>
                  </div>
                  <span className="text-xs text-neutral-400">شمال القنفذة ومداخل المحافظة</span>
                </div>
              </div>

              <div className="mt-6 pt-5 border-t border-neutral-800 text-xs text-neutral-400 space-y-2">
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#F20D0D]" />
                  <span>أوقات العمل: طوال أيام الأسبوع على مدار 24 ساعة</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-[#F20D0D]" />
                  <span>تأمين وربط احترافي للمركبة أثناء النقل</span>
                </div>
              </div>
            </div>
          </div>

          {/* Left Form Column (7 cols) */}
          <div className="lg:col-span-7">
            <div className="bg-[#151515] border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white font-['Cairo'] mb-1">
                  نموذج طلب سطحة سريع
                </h3>
                <p className="text-xs text-neutral-400">
                  سجل بيانات النقل وسيتم تحويلها فوراً لرسالة واتساب لتأكيد الخدمة.
                </p>
              </div>

              {isReadyToSend && (
                <div
                  id="form-whatsapp-status-notice"
                  className="mb-6 p-4 rounded-xl bg-neutral-900 border border-emerald-500/60 text-emerald-300 text-xs sm:text-sm flex items-start gap-3 shadow-lg"
                  role="status"
                  aria-live="polite"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0 text-emerald-400 mt-0.5" />
                  <div className="space-y-1">
                    <p className="font-bold text-white text-sm">
                      طلبك جاهز للإرسال عبر واتساب • Your inquiry is ready to send on WhatsApp.
                    </p>
                    <p className="text-neutral-300 text-xs leading-relaxed">
                      تم فتح تطبيق واتساب ومعه رسالة مجهزة ببياناتك. يرجى مراجعة التفاصيل في واتساب والضغط على زر الإرسال.
                    </p>
                    {whatsappUrl && (
                      <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 mt-1 text-xs font-semibold text-emerald-400 hover:text-emerald-300 underline"
                      >
                        اضغط هنا إذا لم يفتح واتساب تلقائياً
                      </a>
                    )}
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label htmlFor="fullName" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                      الاسم الكريم *
                    </label>
                    <input
                      type="text"
                      id="fullName"
                      required
                      placeholder="مثال: محمد العمري"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phoneNumber" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                      رقم الجوال للتواصل *
                    </label>
                    <input
                      type="tel"
                      id="phoneNumber"
                      required
                      placeholder="05xxxxxxxx"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Current Location */}
                  <div>
                    <label htmlFor="currentLocation" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                      موقع السيارة الحالي *
                    </label>
                    <input
                      type="text"
                      id="currentLocation"
                      required
                      placeholder="مثال: القنفذة - طريق الساحل"
                      value={formData.currentLocation}
                      onChange={(e) => setFormData({ ...formData, currentLocation: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>

                  {/* Destination */}
                  <div>
                    <label htmlFor="destination" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                      الوجهة المطلوبة *
                    </label>
                    <input
                      type="text"
                      id="destination"
                      required
                      placeholder="مثال: ورشة الصناعية / المنزل"
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                    />
                  </div>
                </div>

                {/* Car Model */}
                <div>
                  <label htmlFor="carModel" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                    نوع وموديل السيارة
                  </label>
                  <input
                    type="text"
                    id="carModel"
                    placeholder="مثال: كامري / هايلوكس / تاهو..."
                    value={formData.carModel}
                    onChange={(e) => setFormData({ ...formData, carModel: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors"
                  />
                </div>

                {/* Notes */}
                <div>
                  <label htmlFor="notes" className="block text-xs font-semibold text-neutral-300 mb-1.5 text-right">
                    ملاحظات أو وصف حالة السيارة
                  </label>
                  <textarea
                    id="notes"
                    rows={3}
                    placeholder="أي تفاصيل مهمة مثل: السيارة متوقفة بسبب عطل كهربائي، بدون كفرات، إلخ..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-neutral-700 text-white placeholder-neutral-500 text-sm focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  id="submit-request-form-btn"
                  className="w-full inline-flex items-center justify-center gap-3 py-4 px-6 rounded-xl bg-[#F20D0D] hover:bg-[#B80000] text-white font-black text-base shadow-xl shadow-red-950 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
                >
                  <Send className="w-5 h-5" />
                  <span>طلب سطحة</span>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
