import React, { useState } from 'react';
import { Check } from 'lucide-react';

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 md:mb-24">
             <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">Pricing</span>
             <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 font-display tracking-tight">Simple, scalable pricing</h2>
             <div className="flex items-center justify-center gap-4">
                <span className={`text-sm font-bold transition-colors ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Monthly</span>
                <button 
                  onClick={() => setIsYearly(!isYearly)}
                  className="w-14 h-8 bg-slate-100 border border-slate-200 rounded-full p-1 transition-all focus:outline-none hover:bg-slate-200"
                  aria-label="Toggle billing cycle"
                >
                   <div className={`w-5 h-5 md:w-6 md:h-6 bg-blue-600 rounded-full shadow-lg transform transition-transform duration-300 ${isYearly ? 'translate-x-6' : 'translate-x-0'}`}></div>
                </button>
                <span className={`text-sm font-bold transition-colors ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>Yearly <span className="text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md text-[10px] ml-1 border border-blue-100">-20%</span></span>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             <PlanCard 
               title="Essential" 
               desc="For simple desktop apps and solo developers." 
               price={isYearly ? 80 : 100} 
               features={["70 builds/month", "30 day build retention", "Code signing", "Native app installers"]}
             />
             <PlanCard 
               title="Performance" 
               desc="For sophisticated desktop apps and small teams." 
               price={isYearly ? 240 : 300} 
               highlight
               features={["240 builds/month", "60 day build retention", "Staging and dev apps", "Private Slack support"]}
             />
             <div className="md:col-span-2 lg:col-span-1">
               <PlanCard 
                 title="Scale" 
                 desc="For advanced features and dedicated support." 
                 price={isYearly ? 960 : 1200} 
                 features={["Unlimited builds", "360 day retention", "Account manager", "Priority support"]}
               />
             </div>
          </div>
       </div>
    </section>
  );
};

const PlanCard = ({ title, desc, price, features, highlight = false }: any) => (
  <div className={`flex flex-col p-8 md:p-10 rounded-3xl border transition-all duration-300 hover:shadow-2xl ${highlight ? 'bg-[#0F0F0F] text-white border-slate-800 lg:scale-105 shadow-xl relative z-10' : 'border-slate-200 bg-white text-slate-900 hover:border-slate-300'}`}>
    {highlight && (
      <div className="absolute top-0 right-10 -translate-y-1/2 bg-blue-600 text-white text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-tighter shadow-lg ring-4 ring-white">
        Most Popular
      </div>
    )}
    <h3 className="text-2xl font-black mb-3 font-display tracking-tight">{title}</h3>
    <p className={`text-sm mb-8 h-auto md:h-12 leading-relaxed ${highlight ? 'text-slate-400' : 'text-slate-500'}`}>{desc}</p>
    <div className="flex items-baseline gap-1 mb-8">
       <span className="text-5xl font-black tracking-tight">${price}</span>
       <span className={`text-sm font-bold ${highlight ? 'text-slate-500' : 'text-slate-400'}`}>/ month</span>
    </div>
    <button className={`w-full py-4 font-bold rounded-2xl mb-10 transition-all active:scale-95 ${highlight ? 'bg-blue-600 text-white hover:bg-blue-500 shadow-[0_4px_20px_rgba(37,99,235,0.4)]' : 'bg-slate-900 text-white hover:bg-slate-800'}`}>
      Start free trial
    </button>
    <ul className="space-y-4 text-sm font-medium mt-auto">
       {features.map((f: string, i: number) => (
         <li key={i} className="flex items-center gap-3">
           <div className={`rounded-full p-0.5 ${highlight ? 'bg-blue-500/10' : 'bg-slate-100'}`}>
             <Check size={16} className={highlight ? 'text-blue-500' : 'text-slate-500'} />
           </div>
           {f}
         </li>
       ))}
    </ul>
  </div>
);