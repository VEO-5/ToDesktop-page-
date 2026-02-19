import React from 'react';
import { UploadCloud, ShieldCheck, Globe, Cpu } from 'lucide-react';
import { ClickUp, Linear, Raycast, Notion, Discord } from './Logos';

export const Hero = () => {
  const LogoSet = () => (
    <div className="flex items-center gap-16 md:gap-24 px-12 md:px-20">
      <ClickUp />
      <Linear />
      <Raycast />
      <Notion />
      <Discord />
    </div>
  );

  return (
    <div id="home" className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-[#f7f8f9]">
      {/* Grid Pattern remains for texture */}
      <div className="absolute inset-0 bg-grid opacity-[0.4] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        {/* Release Badge - Compacted margin */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-100 shadow-sm text-slate-600 text-[11px] md:text-sm font-semibold mb-6 md:mb-8 transition-transform hover:scale-105 backdrop-blur-sm">
          <span className="flex h-2 w-2 rounded-full bg-indigo-500 animate-pulse"></span>
          V0.24.1 RELEASED
          <span className="text-slate-300">•</span>
          <a href="#" className="hover:text-indigo-600 transition-colors font-bold underline decoration-slate-200 underline-offset-4">Read changelog &rarr;</a>
        </div>

        {/* Heading with primary typography colors */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-[90px] font-black tracking-tight text-slate-900 mb-4 md:mb-6 leading-[0.95] font-display">
          Release, Secure <br className="hidden sm:block" />
          and Scale your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700">App</span>
        </h1>
        
        {/* Description - Compacted margin */}
        <p className="text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 font-medium">
          ToDesktop handles the plumbing so you can focus on your code. <br className="hidden md:block" />
          Effortless deployment, robust security, and seamless auto-updates.
        </p>

        {/* Buttons - Primary CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 md:mb-16 px-4">
          <button className="w-full sm:w-auto px-8 py-4 text-sm md:text-base font-bold text-white bg-gradient-to-r from-indigo-600 to-indigo-700 rounded-xl hover:from-indigo-500 hover:to-indigo-600 transition-all shadow-[0_10px_40px_rgba(79,70,229,0.3)] active:scale-95">
            Start free trial
          </button>
          <button className="w-full sm:w-auto px-8 py-4 text-sm md:text-base font-bold text-slate-600 bg-white border border-slate-200 rounded-xl hover:border-indigo-600 hover:text-indigo-600 transition-all shadow-sm active:scale-95">
            Read docs
          </button>
        </div>

        {/* Core Value Props */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-16 text-slate-400 text-xs md:text-sm font-bold mb-12 md:mb-16">
          <div className="flex items-center gap-2.5">
            <UploadCloud size={18} className="text-indigo-600/60" />
            <span className="uppercase tracking-wider">Upload your app</span>
          </div>
          <div className="flex items-center gap-2.5">
            <ShieldCheck size={18} className="text-indigo-600/60" />
            <span className="uppercase tracking-wider">Bulletproof security</span>
          </div>
          <div className="flex items-center gap-2.5">
            <Globe size={18} className="text-indigo-600/60" />
            <span className="uppercase tracking-wider">Global distribution</span>
          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative max-w-5xl mx-auto px-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-1.5 md:p-3 shadow-2xl">
             <div className="bg-[#121212] rounded-xl overflow-hidden border border-slate-100 aspect-video flex flex-col relative shadow-inner">
                {/* Browser-like Toolbar */}
                <div className="h-10 md:h-14 border-b border-white/5 bg-white/5 flex items-center px-4 md:px-6 gap-3 md:gap-4 backdrop-blur-md">
                  <div className="flex gap-1.5 md:gap-2">
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FF5F56]"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#FFBD2E]"></div>
                    <div className="w-2.5 h-2.5 md:w-3 md:h-3 rounded-full bg-[#27C93F]"></div>
                  </div>
                  <div className="flex-1 max-w-xl mx-auto h-6 md:h-8 bg-white/5 rounded-lg border border-white/10 flex items-center justify-center text-[10px] md:text-xs text-slate-500 font-medium">
                    todesktop.com/app/v1
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col items-center justify-center gap-4 md:gap-6">
                  <Cpu size={48} className="md:w-16 md:h-16 text-slate-800 animate-pulse" />
                  <p className="tracking-widest uppercase font-black text-slate-700 text-[10px] md:text-xs">Initialising Electron Instance...</p>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Logos Marquee Section */}
      <div className="mt-16 md:mt-24 text-center overflow-hidden">
        <p className="text-[10px] md:text-xs font-black text-slate-400 mb-8 md:mb-12 uppercase tracking-[0.4em]">Powering the world's most popular Electron apps</p>
        
        <div className="marquee-container relative w-full overflow-hidden">
          <div className="animate-marquee flex w-max text-slate-300 hover:text-indigo-600 transition-colors duration-500 grayscale opacity-60 hover:grayscale-0 hover:opacity-100">
             <LogoSet />
             <LogoSet />
          </div>
        </div>
      </div>
    </div>
  );
};