import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    { q: "Is ToDesktop For Me?", a: "ToDesktop is for any developer building an Electron application who wants to automate the tedious parts." },
    { q: "Do you collect data about my customers?", a: "No, your customer data remains yours." },
    { q: "Can I try before buying?", a: "Yes, we offer a 7-day free trial on all plans." }
  ];

  return (
    <section id="faq" className="py-24 bg-slate-50">
       <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 text-center font-display">Questions & answers</h2>
          <div className="space-y-4">
             {faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
                   <button onClick={() => setOpenIndex(openIndex === idx ? null : idx)} className="w-full flex items-center justify-between p-6 text-left">
                      <span className="font-semibold text-slate-900">{faq.q}</span>
                      {openIndex === idx ? <ChevronUp className="text-slate-400" /> : <ChevronDown className="text-slate-400" />}
                   </button>
                   {openIndex === idx && <div className="px-6 pb-6 text-slate-600 border-t border-slate-100 pt-4">{faq.a}</div>}
                </div>
             ))}
          </div>
       </div>
    </section>
  );
};