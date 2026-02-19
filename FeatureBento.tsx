import React from 'react';
import { Check, Cpu } from 'lucide-react';

export const FeatureBento = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 block">Features</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 font-display tracking-tight">The Electron ops stack</h2>
          <p className="text-lg text-slate-600 leading-relaxed">
            ToDesktop is your end-to-end Electron partner — everything you need to run Electron apps at scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8">
          <BentoCard 
            title="Focus on your app, not plumbing" 
            desc="Eliminate developer frustration by letting us handle the infrastructure. Build your Electron app on Mac, Windows, and Linux with confidence."
          />
          <BentoCard 
            title="Identify code vulnerabilities" 
            desc="We analyze your Electron app's source code to find and rank issues by severity. Quickly resolve vulnerabilities with confidence."
            isCode
          />
        </div>

        {/* Featured Card */}
        <div className="bg-white rounded-[2.5rem] border border-slate-200 shadow-sm p-6 md:p-12 overflow-hidden hover:shadow-xl transition-shadow duration-500">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl md:text-4xl font-black text-slate-900 mb-6 font-display tracking-tight leading-tight">Native app auto-updates</h3>
              <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                Provide a seamless experience with instant background updates. No more manually downloading DMGs or EXEs every time you release.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={16} /></div>
                  Delta updates for smaller downloads
                </li>
                <li className="flex items-center gap-3 font-bold text-slate-900">
                  <div className="bg-green-100 text-green-600 p-1 rounded-full"><Check size={16} /></div>
                  Multi-channel releases (Alpha, Beta, Prod)
                </li>
              </ul>
            </div>
            <div className="bg-slate-50 rounded-3xl border border-slate-100 p-2 md:p-4 shadow-inner">
               <div className="bg-[#1E1E1E] rounded-2xl p-6 min-h-[300px] flex items-center justify-center border border-slate-700/50 shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-4 left-4 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                  </div>
                  <Cpu size={48} className="text-blue-500/20 group-hover:scale-110 transition-transform duration-700" />
                  <div className="absolute bottom-6 right-6 bg-white/5 backdrop-blur-md border border-white/10 px-4 py-2 rounded-xl text-[10px] font-mono text-slate-400">
                    STATUS: SYNCING...
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
  <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col group">
    <div className={`w-full bg-slate-50 rounded-2xl p-6 mb-8 border border-slate-100 h-56 flex items-center justify-center overflow-hidden shadow-inner group-hover:bg-slate-100 transition-colors`}>
       {isCode ? (
          <div className="text-left bg-slate-900 text-blue-400 p-5 rounded-xl text-xs font-mono w-full shadow-2xl ring-1 ring-white/10">
            <p className="opacity-50 mb-1">// Security Check</p>
            <p><span className="text-purple-400">const</span> <span className="text-blue-300">app</span> = <span className="text-yellow-300">require</span>(<span className="text-green-300">'electron'</span>);</p>
            <p className="text-red-400 font-bold mt-4 animate-pulse">! High severity issue: nodeIntegration true</p>
          </div>
       ) : (
          <div className="bg-white shadow-2xl p-6 rounded-2xl border border-slate-200 relative group-hover:scale-105 transition-transform duration-500">
            <div className="h-2 w-16 bg-slate-100 rounded-full mb-3"></div>
            <div className="h-2 w-12 bg-slate-100 rounded-full mb-6"></div>
            <div className="bg-green-500/10 text-green-500 p-2 rounded-full w-fit">
              <Check size={24} />
            </div>
          </div>
       )}
    </div>
    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight font-display">{title}</h3>
    <p className="text-slate-600 leading-relaxed font-medium">{desc}</p>
  </div>
);