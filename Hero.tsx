import React from 'react';
import { UploadCloud, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { ClickUp, Linear, Raycast, Notion, Discord } from './Logos';

export const Hero = () => {
  const LogoSet = () => (
    <div className="flex items-center gap-12 md:gap-20 px-8 md:px-12">
      <ClickUp />
      <Linear />
      <Raycast />
      <Notion />
      <Discord />
    </div>
  );

  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden bg-[#f7f8f9]">
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-grid opacity-[0.3] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32 relative z-10 text-center">
        {/* Release Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-slate-200/60 shadow-sm text-slate-600 text-[10px] md:text-xs font-bold mb-8 transition-all hover:border-slate-300 backdrop-blur-sm">
          <span className="flex h-1.5 w-1.5 rounded-full bg-indigo-500"></span>
          V0.24.1 RELEASED
          <span className="text-slate-300">•</span>
          <a href="#" className="hover:text-indigo-600 transition-colors underline decoration-slate-200 underline-offset-4">Changelog &rarr;</a>
        </div>

        {/* Heading - Reduced Size */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1] font-display">
          Release, Secure <br className="hidden sm:block" />
          and Scale your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700">App</span>
        </h1>
        
        {/* Description - Slightly tighter margins */}
        <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-10 leading-relaxed font-medium">
          ToDesktop handles the heavy lifting so you can focus on building. <br className="hidden md:block" />
          Seamless deployment and automated infrastructure in one click.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-lg active:scale-95">
            Start free trial
          </button>
          <button className="w-full sm:w-auto px-8 py-3.5 text-sm font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-slate-300 transition-all shadow-sm active:scale-95">
            View documentation
          </button>
        </div>

        {/* Core Value Props */}
        <div className="flex flex-wrap justify-center gap-8 md:gap-14 text-slate-400 text-[10px] font-black mb-20">
          <div className="flex items-center gap-2.5">
            <UploadCloud size={14} className="text-indigo-500" />
            <span className="uppercase tracking-[0.2em]">Easy Upload</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={14} className="text-indigo-500" />
            <span className="uppercase tracking-[0.2em]">Secure Builds</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Globe size={14} className="text-indigo-500" />
            <span className="uppercase tracking-[0.2em]">Global Delivery</span>
          </div>
        </div>

        {/* Dashboard Preview - Slightly more compact scaling */}
        <div className="relative max-w-4xl mx-auto">
          <div className="rounded-2xl border border-slate-200/80 bg-white p-2 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.12)]">
             <div className="bg-[#111111] rounded-xl overflow-hidden aspect-video flex flex-col relative">
                {/* Browser Toolbar */}
                <div className="h-10 border-b border-white/5 bg-white/5 flex items-center px-4 gap-3">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3d]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3d]"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-[#3d3d3d]"></div>
                  </div>
                  <div className="flex-1 max-w-xs mx-auto h-5 bg-white/5 rounded-md flex items-center justify-center text-[9px] text-slate-500 font-mono">
                    todesktop.sh/deployments/latest
                  </div>
                </div>
                <div className="flex-1 flex flex-col items-center justify-center">
                  <Cpu size={40} className="text-indigo-500/20 mb-4" />
                  <div className="w-48 h-1.5 bg-white/5 rounded-full overflow-hidden">
                    <div className="w-1/3 h-full bg-indigo-500 animate-[loading_2s_ease-in-out_infinite]"></div>
                  </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Logos Marquee Section */}
      <div className="mt-24 md:mt-32 text-center overflow-hidden">
        <p className="text-[10px] font-black text-slate-400 mb-10 uppercase tracking-[0.4em] opacity-80">Trusted by modern engineering teams</p>
        <div className="marquee-container relative w-full overflow-hidden opacity-40 grayscale transition-all hover:opacity-70 hover:grayscale-0 duration-700">
          <div className="animate-marquee flex w-max text-slate-500">
             <LogoSet />
             <LogoSet />
          </div>
        </div>
      </div>
    </div>
  );
};