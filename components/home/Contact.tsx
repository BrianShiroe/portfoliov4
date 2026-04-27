"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useLocale } from "next-intl";

export function Contact() {
  const locale = useLocale();
  const isAr = locale === "ar";
  const t = (en: string, ar: string) => (isAr ? ar : en);

  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactData = [
    { label: t("PHONE", "الهاتف"), value: "+971 50 359 2133", type: "tel" },
    {
      label: t("EMAIL", "البريد الإلكتروني"),
      value: "Brianshiroe@gmail.com",
      type: "mailto",
    },
    {
      label: t("LOCATION", "الموقع"),
      value: t("Dubai, UAE", "دبي، الإمارات"),
      type: "map",
    },
  ];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    // 1. Resolve Access Key (Ensure NEXT_PUBLIC_ is used)
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setResult(t("Configuration Missing", "إعدادات API مفقودة"));
      setIsSubmitting(false);
      return;
    }

    try {
      const formData = new FormData(event.currentTarget);
      formData.append("access_key", accessKey);

      // 2. Perform Fetch - No manual headers to avoid CORS/Boundary issues
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setResult(t("Message Sent Successfully!", "تم إرسال الرسالة بنجاح!"));
        (event.target as HTMLFormElement).reset();
      } else {
        setResult(
          t(
            data.message || "Error sending message",
            data.message || "حدث خطأ أثناء الإرسال",
          ),
        );
      }
    } catch (error) {
      console.error("Submission Error:", error);
      // This usually catches 'Failed to fetch' due to ad-blockers or DNS
      setResult(
        t(
          "Network Error. Check Ad-blockers.",
          "خطأ في الشبكة. تحقق من مانع الإعلانات.",
        ),
      );
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setResult(null), 5000);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-zinc-50 py-16 md:py-24 px-4 md:px-6 font-mono overflow-hidden"
      dir={isAr ? "rtl" : "ltr"}
    >
      <div className="mx-auto max-w-6xl">
        {/* --- HEADER --- */}
        <div className="mb-12 md:mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#00C950]" />
            <span
              className={`text-[10px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] ${isAr ? "mr-2" : "ml-2"}`}
            >
              {t("Direct Communication", "اتصال مباشر")}
            </span>
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-7xl font-black uppercase tracking-tighter text-black leading-none">
            {isAr ? (
              <>
                اتصل_<span className="text-[#00C950]">بنا</span>
              </>
            ) : (
              <>
                Reach_<span className="text-[#00C950]">Out</span>
              </>
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-12 items-start">
          {/* --- LEFT: CONTACT DETAILS --- */}
          <div className="lg:col-span-5 space-y-10 md:space-y-12">
            <div className="space-y-6 md:space-y-8">
              {contactData.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: isAr ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className={`group relative flex flex-col gap-1 border-zinc-100 hover:border-[#00C950] transition-colors ${isAr ? "border-r-2 pr-5 md:pr-6" : "border-l-2 pl-5 md:pl-6"}`}
                >
                  <span className="text-[10px] md:text-xs font-black text-zinc-400 tracking-widest uppercase">
                    {item.label} // 0{i + 1}
                  </span>

                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    <a
                      href={
                        item.type === "map" ? "#" : `${item.type}:${item.value}`
                      }
                      className="text-lg md:text-2xl font-black text-black uppercase hover:text-[#00C950] transition-colors break-all leading-tight"
                    >
                      {item.value}
                    </a>

                    {item.type !== "map" && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className={`text-[9px] md:text-[10px] font-black border border-black px-2 md:px-3 py-1 uppercase bg-white hover:bg-black hover:text-[#00C950] transition-all active:scale-95 cursor-pointer shadow-black hover:shadow-none hover:-translate-y-0.5 ${isAr ? "shadow-[-2px_2px_0px_0px_#00C950] hover:-translate-x-0.5" : "shadow-[2px_2px_0px_0px_#00C950] hover:translate-x-0.5"}`}
                      >
                        {copied === item.label
                          ? t("Copied!", "تم النسخ!")
                          : t("Copy", "نسخ")}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* STATUS CARD */}
            <div
              className={`bg-zinc-50 border-2 border-black p-5 md:p-6 rounded-2xl relative ${isAr ? "shadow-[-6px_6px_0px_0px_#00C950]" : "shadow-[6px_6px_0px_0px_#00C950]"}`}
            >
              <h3 className="text-[10px] md:text-xs font-black uppercase mb-4 tracking-tighter border-b border-black/10 pb-2">
                {t("Current Status", "الحالة الحالية")}
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[11px] md:text-[12px] font-bold text-zinc-400 uppercase">
                    {t("Availability", "التوفر")}
                  </span>
                  {/* Changed "Accepting Projects" to "Post-Notice / May 2026" */}
                  <span className="text-[11px] md:text-[12px] font-black text-[#00C950] uppercase flex items-center gap-2">
                    <span className="h-1.5 w-1.5 bg-[#00C950] rounded-full animate-pulse" />
                    {t(
                      "Post-Notice / May 2026",
                      "بعد فترة الإنذار / مايو ٢٠٢٦",
                    )}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[11px] md:text-[12px] font-bold text-zinc-400 uppercase">
                    {t("Response Time", "وقت الرد")}
                  </span>
                  {/* Changed "~24 Hours" to "Within 48 Hours" to look less like an active agency */}
                  <span className="text-[11px] md:text-[12px] font-black uppercase text-black italic">
                    {t("Within 48 Hours", "خلال ٤٨ ساعة")}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT: THE CONTACT FORM --- */}
          <div className="lg:col-span-7">
            <form onSubmit={onSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 px-1">
                    {t("Full Name", "الاسم الكامل")}
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder={t("John Doe", "فلان الفلاني")}
                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-[#00C950] p-4 text-[11px] md:text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 px-1">
                    {t("Email Address", "البريد الإلكتروني")}
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-[#00C950] p-4 text-[11px] md:text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 px-1">
                  {t("Subject", "الموضوع")}
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder={t("Project Inquiry", "استفسار عن مشروع")}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-[#00C950] p-4 text-[11px] md:text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[9px] font-black uppercase tracking-widest text-zinc-400 px-1">
                  {t("Message", "الرسالة")}
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder={t(
                    "Tell me about your project...",
                    "أخبرني عن مشروعك...",
                  )}
                  className="w-full bg-zinc-50 border-2 border-zinc-100 rounded-2xl focus:border-[#00C950] p-4 text-[11px] md:text-xs font-bold uppercase tracking-wider outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-black text-white py-5 rounded-2xl text-[10px] font-black uppercase tracking-[0.2em] hover:text-[#00C950] transition-all active:scale-[0.98] disabled:opacity-50 cursor-pointer disabled:cursor-not-allowed hover:shadow-none hover:-translate-y-1 ${
                  isAr
                    ? "shadow-[-5px_5px_0px_0px_#00C950] hover:translate-x-1"
                    : "shadow-[5px_5px_0px_0px_#00C950] hover:-translate-x-1"
                }`}
              >
                {isSubmitting
                  ? t("Processing...", "جاري المعالجة...")
                  : t("Dispatch Message", "إرسال الرسالة")}
              </button>

              {result && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[10px] font-black uppercase text-center mt-4 ${result.includes("Error") || result.includes("خطأ") || result.includes("Network") ? "text-red-500" : "text-[#00C950]"}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* --- DECORATIVE RULER --- */}
        <div className="mt-16 md:mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-4 opacity-30">
          <p className="text-[10px] md:text-sm font-black uppercase tracking-[0.4em] text-zinc-900 text-center">
            {t("Professional Portfolio // 2026", "معرض الأعمال المهني // ٢٠٢٦")}
          </p>
          <div className={`flex gap-1 ${isAr ? "flex-row-reverse" : ""}`}>
            {[...Array(10)].map((_, i) => (
              <div
                key={i}
                className={`h-4 w-[2px] bg-black ${i % 4 === 0 ? "h-6 bg-[#00C950]" : ""}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
