"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
  const [copied, setCopied] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<string | null>(null);

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const contactData = [
    { label: "PHONE", value: "+971 50 359 2133", type: "tel" },
    { label: "EMAIL", value: "Brianshiroe@gmail.com", type: "mailto" },
    { label: "LOCATION", value: "Dubai, UAE", type: "map" },
  ];

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    formData.append(
      "access_key",
      process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY as string,
    );

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message Sent Successfully!");
      (event.target as HTMLFormElement).reset();
    } else {
      setResult("Error sending message. Please try again.");
    }
    setIsSubmitting(false);
    setTimeout(() => setResult(null), 5000);
  };

  return (
    <section
      id="contact"
      className="relative w-full bg-white py-24 px-4 md:px-6 font-mono overflow-hidden"
    >
      <div className="mx-auto max-w-6xl">
        {/* --- HEADER --- */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[2px] w-8 bg-[#00C950]" />
            <span className="text-[11px] md:text-sm font-black text-zinc-500 uppercase tracking-[0.2em] mb-2 md:mt-2 ml-2">
              Direct Communication
            </span>
          </div>
          <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter text-black leading-none">
            Get_In_<span className="text-[#00C950]">Touch</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* --- LEFT: CONTACT DETAILS --- */}
          <div className="lg:col-span-5 space-y-12">
            <div className="space-y-8">
              {contactData.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative flex flex-col gap-1 border-l-2 border-zinc-100 hover:border-[#00C950] pl-6 transition-colors"
                >
                  <span className="text-xs font-black text-zinc-400 tracking-widest uppercase">
                    {item.label} // 0{i + 1}
                  </span>

                  <div className="flex flex-wrap items-center gap-4">
                    <a
                      href={
                        item.type === "map" ? "#" : `${item.type}:${item.value}`
                      }
                      className="text-xl md:text-2xl font-black text-black uppercase hover:text-[#00C950] transition-colors break-all"
                    >
                      {item.value}
                    </a>

                    {item.type !== "map" && (
                      <button
                        onClick={() => copyToClipboard(item.value, item.label)}
                        className="text-[10px] font-black border border-black px-3 py-1 uppercase bg-white hover:bg-black hover:text-[#00C950] transition-all active:scale-95 shadow-[2px_2px_0px_0px_#00C950] hover:shadow-none"
                      >
                        {copied === item.label ? "Copied!" : "Copy"}
                      </button>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="bg-zinc-50 border-2 border-black p-6 relative shadow-[8px_8px_0px_0px_#00C950]">
              <h3 className="text-xs font-black uppercase mb-4 tracking-tighter border-b border-black/10 pb-2">
                Operational Status
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-zinc-400 uppercase">
                    Availability
                  </span>
                  <span className="text-[12px] font-black text-[#00C950] uppercase flex items-center gap-2">
                    <span className="h-2 w-2 bg-[#00C950] rounded-full animate-pulse" />
                    Accepting Projects
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-[12px] font-bold text-zinc-400 uppercase">
                    Response Time
                  </span>
                  <span className="text-[12px] font-black uppercase text-black italic">
                    ~24 Hours
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
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    Full Name
                  </label>
                  <input
                    required
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    className="w-full bg-zinc-50 border-2 border-zinc-100 focus:border-[#00C950] p-4 text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                    Email Address
                  </label>
                  <input
                    required
                    type="email"
                    name="email"
                    placeholder="john@example.com"
                    className="w-full bg-zinc-50 border-2 border-zinc-100 focus:border-[#00C950] p-4 text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Subject
                </label>
                <input
                  required
                  type="text"
                  name="subject"
                  placeholder="Project Inquiry"
                  className="w-full bg-zinc-50 border-2 border-zinc-100 focus:border-[#00C950] p-4 text-xs font-bold uppercase tracking-wider outline-none transition-colors"
                />
              </div>

              <div className="space-y-1">
                <label className="text-[10px] font-black uppercase tracking-widest text-zinc-400">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full bg-zinc-50 border-2 border-zinc-100 focus:border-[#00C950] p-4 text-xs font-bold uppercase tracking-wider outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black text-white py-5 text-xs font-black uppercase tracking-[0.3em] hover:text-[#00C950] transition-all active:scale-[0.99] shadow-[6px_6px_0px_0px_#00C950] disabled:opacity-50"
              >
                {isSubmitting ? "Processing..." : "Dispatch Message"}
              </button>

              {result && (
                <motion.p
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-[10px] font-black uppercase text-center mt-4 ${result.includes("Error") ? "text-red-500" : "text-[#00C950]"}`}
                >
                  {result}
                </motion.p>
              )}
            </form>
          </div>
        </div>

        {/* --- DECORATIVE RULER --- */}
        <div className="mt-24 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 opacity-30">
          <p className="text-sm font-black uppercase tracking-[0.5em] text-zinc-900">
            Professional Portfolio // 2026
          </p>
          <div className="flex gap-1">
            {[...Array(12)].map((_, i) => (
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
