import React from 'react';

export const Footer = () => {
   return (
      <footer className="bg-white pt-20 pb-10 md:pt-32 md:pb-16 border-t border-slate-100">
         <div className="max-w-7xl mx-auto px-6 md:px-16 lg:px-24 xl:px-32">
            <div className="flex flex-col lg:flex-row justify-between items-start mb-20 gap-12 md:gap-20">
               <div className="max-w-xs">
                  <div className="flex items-center gap-3 mb-6">
                     <span className="font-black text-2xl text-slate-900 font-display tracking-tight">ToDesktop</span>
                  </div>
                  <p className="text-slate-500 text-sm font-medium leading-relaxed">
                    Automating Electron infrastructure for high-performance teams. Build, secure, and update with one click.
                  </p>
               </div>
               
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 md:gap-16 text-sm flex-1">
                  <div>
                    <h5 className="font-black text-slate-900 mb-5 uppercase tracking-wider text-xs">Product</h5>
                    <ul className="space-y-3 font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Electron App</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Auto-updates</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Pricing</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Security</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 mb-5 uppercase tracking-wider text-xs">Resources</h5>
                    <ul className="space-y-3 font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Docs</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Blog</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Changelog</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Contact</a></li>
                    </ul>
                  </div>
                  <div>
                    <h5 className="font-black text-slate-900 mb-5 uppercase tracking-wider text-xs">Legal</h5>
                    <ul className="space-y-3 font-bold text-slate-500">
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">Terms</a></li>
                       <li><a href="#" className="hover:text-indigo-600 transition-colors">DPA</a></li>
                    </ul>
                  </div>
               </div>
            </div>
            <div className="border-t border-slate-100 pt-10 flex flex-col md:flex-row justify-between items-center gap-4">
               <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">© 2024 ToDesktop, Inc. A Y Combinator company.</p>
               <div className="flex gap-6">
                 <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Twitter">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.84 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/></svg>
                 </a>
                 <a href="#" className="text-slate-400 hover:text-slate-600 transition-colors" aria-label="Github">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/></svg>
                 </a>
               </div>
            </div>
         </div>
      </footer>
   );
};