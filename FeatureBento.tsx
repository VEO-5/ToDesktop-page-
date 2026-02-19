import React from 'react';
import { Check, Cpu } from 'lucide-react';

export const FeatureBento = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
        <div className="text-center max-w-2xl mx-auto mb-20 md:mb-28">
          <span className="text-indigo-600 font-black text-[10px] uppercase tracking-[0.2em] mb-4 block">Capabilities</span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 font-display tracking-tight">The complete stack <br /> for Electron teams</h2>
          <p className="text-base md:text-lg text-slate-500 leading-relaxed font-medium">
            ToDesktop provides the infrastructure layer you need to build, distribute, and update Electron apps at any scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <BentoCard 
            title="Simplified Infrastructure" 
            desc="We handle the complex build pipelines for Mac, Windows, and Linux, so you can keep focusing on your product."
          />
          <BentoCard 
            title="Security Analysis" 
            desc="Automated scanning for common Electron vulnerabilities. Identify and mitigate risks before they reach your users."
            isCode
          />
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-[2rem] border border-slate-200/80 shadow-sm p-8 md:p-14 overflow-hidden hover:shadow-xl transition-all duration-500 group">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-display tracking-tight leading-tight">Zero-friction <br /> auto-updates</h3>
              <p className="text-base md:text-lg text-slate-500 mb-10 leading-relaxed font-medium">
                Deliver updates instantly in the background. Your users always run the latest version without ever seeing a download prompt.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-slate-900 text-sm">
                  <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full"><Check size={14} /></div>
                  Delta updates to minimize bandwidth
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900 text-sm">
                  <div className="bg-emerald-50 text-emerald-600 p-1 rounded-full"><Check size={14} /></div>
                  Custom release channels (Alpha/Beta)
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-2xl border border-slate-100 p-3 shadow-inner">
               <div className="bg-[#141414] rounded-xl aspect-video flex items-center justify-center border border-white/5 shadow-2xl relative overflow-hidden">
                  <Cpu size={40} className="text-indigo-500/10 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-4 right-4 bg-white/5 backdrop-blur-md border border-white/10 px-3 py-1.5 rounded-lg text-[9px] font-mono text-slate-500">
                    CHANNEL: STABLE
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BentoCard = ({ title, desc, isCode = false }: any) => (
  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200/80 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
    <div className="w-full bg-slate-50 rounded-xl p-6 mb-8 border border-slate-100 h-48 flex items-center justify-center overflow-hidden shadow-inner group-hover:bg-slate-100 transition-colors">
       {isCode ? (
          <div className="text-left bg-slate-950 text-indigo-300 p-5 rounded-lg text-[10px] font-mono w-full shadow-2xl ring-1 ring-white/5">
            <p className="opacity-40 mb-2">// Vulnerability found</p>
            <p><span className="text-indigo-500">warn</span> <span className="text-slate-400">nodeIntegration is enabled</span></p>
            <p className="text-indigo-400/80 mt-2">Suggest: set to false</p>
          </div>
       ) : (
          <div className="bg-white shadow-xl p-5 rounded-xl border border-slate-200 relative group-hover:scale-105 transition-transform duration-500">
            <div className="h-1.5 w-12 bg-slate-100 rounded-full mb-2"></div>
            <div className="h-1.5 w-8 bg-slate-100 rounded-full mb-4"></div>
            <div className="bg-emerald-50 text-emerald-600 p-1.5 rounded-full w-fit">
              <Check size={18} />
            </div>
          </div>
       )}
    </div>
    <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight font-display">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed font-medium">{desc}</p>
  </div>
);