import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-1 md:top-2 left-1/2 -translate-x-1/2 w-[92%] max-w-7xl z-50">
      <nav className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_10px_30px_rgba(0,0,0,0.08)] rounded-full px-4 md:px-8 py-1.5 transition-all duration-300">
        <div className="flex justify-between items-center h-10 md:h-12">
          <div className="flex items-center gap-2">
            <a href="#home" onClick={closeMenu} className="font-black text-base md:text-lg tracking-tighter text-slate-900 font-display">ToDesktop</a>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 text-sm font-semibold text-slate-600">
            <a href="#features" className="px-3 py-1.5 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all text-xs lg:text-sm">Features</a>
            <a href="#pricing" className="px-3 py-1.5 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all text-xs lg:text-sm">Pricing</a>
            <a href="#faq" className="px-3 py-1.5 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all text-xs lg:text-sm">FAQ</a>
            <a href="#changelog" className="px-3 py-1.5 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all text-xs lg:text-sm">Changelog</a>
            <a href="#blog" className="px-3 py-1.5 hover:text-slate-900 hover:bg-slate-100/50 rounded-full transition-all text-xs lg:text-sm">Blog</a>
          </div>

          <div className="hidden md:block">
            <button className="px-5 py-2 text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-md active:scale-95">
              Start trial
            </button>
          </div>

          <div className="md:hidden">
            <button 
              onClick={toggleMenu} 
              className="p-1.5 text-slate-600 hover:text-slate-900 bg-slate-100/50 rounded-full transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[400px] opacity-100 py-3' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col gap-1 border-t border-slate-200/50 pt-3">
            <a href="#features" onClick={closeMenu} className="block py-2 px-4 text-slate-600 font-bold hover:bg-slate-100/50 rounded-full transition-colors text-sm">Features</a>
            <a href="#pricing" onClick={closeMenu} className="block py-2 px-4 text-slate-600 font-bold hover:bg-slate-100/50 rounded-full transition-colors text-sm">Pricing</a>
            <a href="#faq" onClick={closeMenu} className="block py-2 px-4 text-slate-600 font-bold hover:bg-slate-100/50 rounded-full transition-colors text-sm">FAQ</a>
            <hr className="border-slate-200/50 my-1.5 mx-4" />
            <button className="w-full py-3 text-[10px] font-black uppercase tracking-widest text-white bg-slate-900 rounded-full shadow-md active:scale-[0.98] transition-transform">
              Start trial
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};