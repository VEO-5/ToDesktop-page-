import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: "Is ToDesktop right for my project?", a: "ToDesktop is built for any developer or team building Electron applications who want to automate their distribution and update infrastructure. It works with any framework." },
    { q: "How secure are the builds?", a: "All builds happen on isolated, high-performance machines. We use industry-standard code signing and security practices to ensure your binaries are safe." },
    { q: "Do you offer a free trial?", a: "Yes, we offer a fully featured 7-day free trial on all plans. No credit card is required to get started." },
    { q: "What support options do you have?", a: "Performance and Scale plans include priority email and Slack support with direct access to our engineering team." }
  ];

  return (
    <section id="faq" className="py-24 md:py-32 bg-slate-50">
       <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-20">
            <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">FAQ</span>
            <h2 className="text-4xl font-black text-slate-900 font-display tracking-tight">Common questions</h2>
          </div>
          <div className="space-y-3">
             {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl border border-slate-200/80 overflow-hidden shadow-sm hover:border-slate-300 transition-all">
                   <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-bold text-slate-900 text-sm md:text-base">{faq.q}</span>
                      <div className={`transition-transform duration-300 ${openIndex === idx ? 'rotate-180' : ''}`}>
                        <ChevronDown size={18} className="text-slate-400" />
                      </div>
                   </button>
                   <div className={`transition-all duration-300 ease-in-out ${openIndex === idx ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                      <div className="px-6 pb-6 text-slate-500 text-sm md:text-base font-medium leading-relaxed border-t border-slate-100 pt-5">
                        {faq.a}
                      </div>
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};