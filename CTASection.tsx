import React from 'react';
import { Layers } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="bg-[#0A0A0A] py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1 text-left">
           <span className="text-slate-400 font-mono text-xs uppercase tracking-widest mb-4 block">Get Started</span>
           <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight font-display">
             Streamline your <br /> Electron <span className="text-blue-500">App Infrastructure</span>
           </h2>
           <p className="text-lg text-slate-400 mb-8 max-w-lg">
             ToDesktop automates your Electron app deployment, deployment, and updates. You write the application. We do the infrastructure.
           </p>
           <div className="flex gap-4">
              <button className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors">Start free trial &rarr;</button>
              <button className="px-6 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white font-semibold rounded-lg transition-colors">Read docs</button>
           </div>
        </div>
        
        <div className="flex-1 w-full">
           <div className="bg-slate-900 border border-slate-800 rounded-xl shadow-2xl p-6 flex items-center justify-center">
               <Layers size={64} className="text-blue-500 opacity-20" />
           </div>
        </div>
      </div>
    </section>
  );
};