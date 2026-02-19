import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
       <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
          <div className="text-center mb-20 md:mb-28">
             <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">Pricing</span>
             <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-8 font-display tracking-tight">Choose your plan</h2>
             <div className="flex items-center justify-center gap-4">
                <span className={`text-xs font-bold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                <button 
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-12 h-6 bg-slate-100 border border-slate-200 rounded-full p-1 transition-all focus:outline-none hover:bg-slate-200"
                  aria-label="Toggle billing cycle"
                >
                   <div className={`w-4 h-4 bg-indigo-600 rounded-full shadow-md transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
                <span className={`text-xs font-bold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly <span className="text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded-md text-[9px] ml-1 border border-indigo-100">Save 20%</span></span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
             <PlanCard 
               title="Essential" 
               desc="Ideal for solo founders and side projects." 
               price={isYearly ? 80 : 100} 
               features={["70 builds / month", "30 day retention", "Code signing", "Native installers"]}
             />
             <PlanCard 
               title="Performance" 
               desc="For scaling teams and complex apps." 
               price={isYearly ? 240 : 300} 
               highlight
               features={["240 builds / month", "60 day retention", "Staging environments", "Private Slack channel"]}
             />
             <PlanCard 
               title="Scale" 
               desc="Enterprise-grade support and security." 
               price={isYearly ? 960 : 1200} 
               features={["Unlimited builds", "365 day retention", "Priority support", "Account manager"]}
             />
          </div>
       </div>
    </section>
  );
};

const PlanCard = ({ title, desc, price, features, highlight = false }: any) => (
  <div className={`flex flex-col p-8 md:p-10 rounded-[2rem] border transition-all duration-300 hover:shadow-xl ${highlight ? 'bg-[#0a0a0b] text-white border-slate-800 lg:scale-[1.02] shadow-2xl relative z-10' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300'}`}>
    {highlight && (
      <div className="absolute top-0 right-1/2 translate-x-1/2 -translate-y-1/2 bg-indigo-600 text-white text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.1em] shadow-lg ring-4 ring-white">
        Recommended
      </div>
    )}
    <h3 className="text-xl font-black mb-2 font-display tracking-tight">{title}</h3>
    <p className={`text-sm mb-8 h-12 leading-relaxed font-medium ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
    <div className="flex items-baseline gap-1 mb-8">
       <span className="text-5xl font-black tracking-tight">${price}</span>
       <span className={`text-xs font-bold ${highlight ? 'text-slate-500' : 'text-slate-400'}`}>/mo</span>
    </div>
    <button className={`w-full py-4 text-sm font-bold rounded-xl mb-10 transition-all active:scale-95 ${highlight ? 'bg-indigo-600 text-white hover:bg-indigo-500 shadow-indigo-900/20' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
      Start 7-day trial
    </button>
    <ul className="space-y-4 text-[13px] font-bold mt-auto">
       {features.map((f: string, i: number) => (
         <li key={i} className="flex items-center gap-3">
           <div className={`rounded-full p-0.5 ${highlight ? 'bg-indigo-500/10' : 'bg-slate-50'}`}>
             <Check size={14} className={highlight ? 'text-indigo-400' : 'text-slate-400'} />
           </div>
           {f}
         </li>
       ))}
    </ul>
  </div>
);