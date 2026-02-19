import React from 'react';
import { Layers } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-[#09090b] py-28 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-indigo-900/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-16 md:gap-24">
          <div className="flex-1 text-center md:text-left">
             <span className="text-indigo-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-4 block">Ready to ship?</span>
             <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-[1.1] font-display tracking-tight">
               Build better apps <br className="hidden md:block" /> with <span className="text-indigo-500">less effort.</span>
             </h2>
             <p className="text-base md:text-lg text-slate-400 mb-10 max-w-lg mx-auto md:mx-0 font-medium">
               Stop wasting engineering cycles on build pipelines. ToDesktop automates your entire Electron ops stack.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <button className="px-7 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg active:scale-95">Start free trial &rarr;</button>
                <button className="px-7 py-3.5 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-bold text-sm rounded-xl transition-all active:scale-95">Read the docs</button>
             </div>
          </div>
          
          <div className="flex-1 w-full max-w-md">
             <div className="bg-[#111113] border border-white/5 rounded-3xl shadow-2xl p-12 flex items-center justify-center aspect-square relative group">
                <div className="absolute inset-0 bg-indigo-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                <Layers size={80} className="text-indigo-500 opacity-20 group-hover:opacity-40 transition-all duration-700 group-hover:scale-110" />
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};