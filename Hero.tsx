import React from 'react';
import { 
  UploadCloud, ShieldCheck, Globe, Cpu, Search, Bell, Cloud, User, 
  Settings, Mail, MessageSquare, AppWindow, StickyNote, Trash2, 
  Camera, PenTool, Play, Image, Layers, Box, Type, BookOpen, 
  ChevronRight, MoreHorizontal, Apple
} from 'lucide-react';
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
    <div id="home" className="relative pt-20 pb-16 md:pt-28 md:pb-24 overflow-hidden bg-[#f7f8f9]">
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

        {/* Heading */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1] font-display">
          Release, Secure <br className="hidden sm:block" />
          and Scale your <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 via-blue-600 to-indigo-700">App</span>
        </h1>
        
        {/* Description */}
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

        {/* High-Fidelity MacBook Mockup */}
        <div className="relative max-w-5xl mx-auto mt-12">
          {/* External Laptop Frame Shadow */}
          <div className="absolute -inset-4 bg-indigo-500/5 blur-3xl rounded-[3rem]"></div>
          
          <div className="rounded-[2.5rem] border-[12px] border-slate-900 bg-slate-900 shadow-[0_48px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden relative">
             {/* macOS Top System Menu Bar */}
             <div className="h-7 bg-white/20 backdrop-blur-md border-b border-black/5 flex items-center px-4 justify-between z-50 text-[10px] font-medium text-slate-800">
                <div className="flex items-center gap-4">
                  <Apple size={12} className="fill-current" />
                  <span className="font-bold">Creative Cloud Suite</span>
                  <span className="hidden sm:inline">File</span>
                  <span className="hidden sm:inline">Edit</span>
                  <span className="hidden sm:inline">View</span>
                  <span className="hidden sm:inline">Go</span>
                  <span className="hidden sm:inline">Window</span>
                  <span className="hidden sm:inline">Help</span>
                </div>
                <div className="flex items-center gap-3">
                  <Globe size={11} />
                  <span className="opacity-70">Thu 11:22</span>
                  <Search size={11} />
                  <Settings size={11} />
                </div>
             </div>

             <div className="bg-[#eef2f8] flex flex-col relative text-left select-none aspect-[16/10]">
                
                {/* App Internal Header Section */}
                <div className="h-14 bg-white/70 backdrop-blur-xl border-b border-slate-200/50 flex items-center px-4 justify-between z-30">
                  <div className="flex items-center gap-2 w-1/4">
                    <div className="flex gap-2 ml-1">
                      <div className="w-3 h-3 rounded-full bg-[#ff5f56] border border-black/5 shadow-inner"></div>
                      <div className="w-3 h-3 rounded-full bg-[#ffbd2e] border border-black/5 shadow-inner"></div>
                      <div className="w-3 h-3 rounded-full bg-[#27c93f] border border-black/5 shadow-inner"></div>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-8 text-[11px] font-bold text-slate-500">
                    <span className="text-indigo-600 border-b-2 border-indigo-600 py-4 transition-colors">Apps</span>
                    <span className="hover:text-slate-900 cursor-pointer transition-colors">Your work</span>
                    <span className="hover:text-slate-900 cursor-pointer transition-colors">Discover</span>
                    <span className="hover:text-slate-900 cursor-pointer transition-colors">Market</span>
                  </div>

                  <div className="flex items-center gap-4 w-1/4 justify-end">
                    <div className="relative">
                      <Search size={12} className="absolute left-2.5 top-1/2 -translate-y-1/2 text-slate-400" />
                      <input 
                        type="text" 
                        placeholder="Search" 
                        readOnly
                        className="bg-slate-100/80 border border-slate-200/50 rounded-lg py-1.5 pl-8 pr-2 w-36 text-[10px] focus:outline-none placeholder:text-slate-400" 
                      />
                    </div>
                    <div className="relative">
                      <Bell size={14} className="text-slate-500" />
                      <div className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-blue-600 rounded-full border-2 border-white flex items-center justify-center text-[6px] text-white font-bold">3</div>
                    </div>
                    <div className="w-7 h-7 rounded-full bg-slate-200 border border-white overflow-hidden shadow-sm flex items-center justify-center">
                       <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="User" className="w-full h-full object-cover" />
                    </div>
                  </div>
                </div>

                <div className="flex flex-1 overflow-hidden relative">
                  {/* Sidebar */}
                  <div className="w-52 bg-white/40 backdrop-blur-md border-r border-slate-200/50 p-5 flex flex-col gap-8">
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Apps</h4>
                      <ul className="space-y-1">
                        <li className="bg-indigo-50/80 text-indigo-700 px-3 py-2 rounded-xl text-[11px] font-bold flex items-center gap-2.5 shadow-sm border border-indigo-100/50">
                           <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></div> All Apps
                        </li>
                        <li className="text-slate-600 px-3 py-2 rounded-xl text-[11px] font-bold flex items-center justify-between hover:bg-white/50 cursor-pointer transition-all">
                           <div className="flex items-center gap-2.5">
                              <div className="w-1.5 h-1.5 bg-transparent rounded-full"></div>
                              Updates
                           </div>
                           <span className="bg-blue-600 text-white px-1.5 py-0.5 rounded-full text-[8px] font-black">3</span>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Categories</h4>
                      <ul className="space-y-1 text-slate-500 text-[11px] font-bold">
                        <SidebarItem icon={<Camera size={12} />} label="Photography" />
                        <SidebarItem icon={<PenTool size={12} />} label="Graphic Design" />
                        <SidebarItem icon={<Play size={12} />} label="Video" />
                        <SidebarItem icon={<Image size={12} />} label="Illustrations" />
                        <SidebarItem icon={<Layers size={12} />} label="UI/UX" />
                        <SidebarItem icon={<Box size={12} />} label="3D / AR" />
                      </ul>
                    </div>
                    <div>
                       <h4 className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-4">Fonts</h4>
                       <SidebarItem icon={<Type size={12} />} label="Manage fonts" />
                    </div>
                  </div>

                  {/* Main Content Area */}
                  <div className="flex-1 overflow-y-auto p-8 bg-slate-50/40">
                    {/* Secondary Tabs */}
                    <div className="flex items-center gap-10 mb-8 text-[12px] font-bold text-slate-400 border-b border-slate-200 pb-2">
                      <span className="text-slate-900 border-b-2 border-indigo-600 pb-2 -mb-2">All Apps</span>
                      <span className="hover:text-slate-600 cursor-pointer">Desktop</span>
                      <span className="hover:text-slate-600 cursor-pointer">Mobile</span>
                      <span className="hover:text-slate-600 cursor-pointer">Web</span>
                    </div>

                    {/* Adobe Stock Banner Card */}
                    <div className="relative rounded-[2rem] overflow-hidden mb-10 h-44 bg-gradient-to-br from-[#cce4ff] via-[#e2ebf0] to-[#f9feff] border border-white shadow-sm flex items-center p-10 group/banner">
                       <div className="relative z-10 max-w-sm">
                          <div className="flex items-center gap-3 mb-3">
                             <div className="w-6 h-6 bg-red-600 rounded shadow-md flex items-center justify-center text-white font-black text-[12px] tracking-tighter">St</div>
                             <span className="font-extrabold text-slate-800 text-[15px]">Adobe Stock</span>
                          </div>
                          <p className="text-[11px] text-slate-600 mb-6 leading-relaxed font-medium">Grab yourself 10 free images from Adobe Stock in a 30-day free trial plan and find perfect image, that will help you with your new project.</p>
                          <button className="bg-blue-600 text-white px-6 py-2 rounded-full text-[11px] font-black shadow-lg shadow-blue-500/20 hover:bg-blue-700 transition-all hover:-translate-y-0.5 active:translate-y-0">Start free trial</button>
                       </div>
                       {/* Abstract Visual Elements */}
                       <div className="absolute right-12 top-0 bottom-0 flex items-center gap-4 pointer-events-none group-hover/banner:scale-105 transition-transform duration-700">
                          <div className="w-16 h-16 bg-gradient-to-tr from-purple-500 to-indigo-500 rounded-full blur-2xl opacity-20"></div>
                          <div className="w-24 h-24 bg-[#a488f2] rounded-full shadow-2xl shadow-purple-500/40 opacity-80 flex items-center justify-center">
                             <div className="w-12 h-12 bg-white/20 rounded-full border border-white/30 backdrop-blur-sm"></div>
                          </div>
                          <div className="w-12 h-12 bg-[#ff8a65] rotate-45 rounded-lg shadow-xl shadow-orange-500/20 opacity-80"></div>
                       </div>
                    </div>

                    {/* App List Section */}
                    <div className="flex items-center justify-between mb-5">
                       <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em]">Installed</h5>
                    </div>
                    <div className="bg-white/80 rounded-[1.5rem] border border-slate-200/50 shadow-sm overflow-hidden mb-10 backdrop-blur-sm">
                       <div className="divide-y divide-slate-100">
                          <AppListItem icon="Ps" name="Photoshop" status="Updated" color="bg-[#001e36]" textColor="text-[#31a8ff]" />
                          <AppListItem icon="Ai" name="Illustrator" status="Update Available" statusColor="text-blue-600" color="bg-[#330000]" textColor="text-[#ff9a00]" hasAction />
                          <AppListItem icon="Xd" name="XD" status="Updated" color="bg-[#2e001f]" textColor="text-[#ff2bc2]" />
                       </div>
                    </div>

                    {/* App Grid Section */}
                    <h5 className="text-[11px] font-black text-slate-400 uppercase tracking-[0.2em] mb-5">Apps in your plan</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pb-32">
                       <AppGridItem icon="Pr" name="Premiere Pro" color="bg-[#00005b]" textColor="text-[#9999ff]" />
                       <AppGridItem icon="Ae" name="After Effects" color="bg-[#00005b]" textColor="text-[#d1d1ff]" />
                       <AppGridItem icon="Id" name="InDesign" color="bg-[#49021f]" textColor="text-[#ff3366]" />
                    </div>
                  </div>
                </div>

                {/* macOS Dock (Taskbar) - High Fidelity Visuals */}
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-end z-40">
                   <div className="px-4 py-3 bg-white/30 backdrop-blur-[40px] border border-white/40 rounded-[2rem] flex items-center gap-3 shadow-[0_30px_60px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
                      <DockIcon type="finder" />
                      <DockIcon type="chrome" />
                      <DockIcon type="appstore" />
                      <DockIcon type="messages" />
                      <DockIcon type="mail" />
                      <DockIcon type="maps" />
                      <div className="w-px h-10 bg-black/10 mx-1"></div>
                      <DockIcon type="notes" />
                      <DockIcon type="reminders" />
                      <DockIcon type="settings" />
                      <DockIcon type="trash" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </div>
      
      {/* Logos Marquee Section */}
      <div className="mt-28 md:mt-36 text-center overflow-hidden">
        <p className="text-[10px] font-black text-slate-400 mb-10 uppercase tracking-[0.4em] opacity-80">Powering production for modern teams</p>
        <div className="marquee-container relative w-full overflow-hidden opacity-30 grayscale transition-all hover:opacity-60 hover:grayscale-0 duration-700">
          <div className="animate-marquee flex w-max text-slate-500">
             <LogoSet />
             <LogoSet />
          </div>
        </div>
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label }: { icon: React.ReactNode, label: string }) => (
  <li className="px-3 py-2 hover:bg-white/50 rounded-xl cursor-pointer transition-all flex items-center gap-3">
    <span className="text-slate-400 group-hover:text-indigo-600">{icon}</span>
    {label}
  </li>
);

const AppListItem = ({ icon, name, status, statusColor = "text-slate-400", color, textColor, hasAction = false }: any) => (
  <div className="flex items-center justify-between p-4 hover:bg-slate-50/50 transition-colors cursor-pointer group">
     <div className="flex items-center gap-5">
        <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center ${textColor} font-black text-[14px] shadow-lg shadow-black/5 ring-1 ring-black/10`}>{icon}</div>
        <span className="font-bold text-slate-800 text-[13px]">{name}</span>
     </div>
     <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
           <div className={`w-1.5 h-1.5 rounded-full ${status === 'Updated' ? 'bg-emerald-500' : 'bg-blue-600'} shadow-[0_0_8px_rgba(16,185,129,0.3)]`}></div>
           <span className={`text-[10px] font-bold ${statusColor}`}>{status}</span>
        </div>
        <div className="flex items-center gap-3">
          <button className={`px-5 py-1.5 rounded-full text-[10px] font-black border transition-all ${hasAction ? 'bg-blue-600 text-white border-blue-600 shadow-lg shadow-blue-500/20' : 'bg-white text-slate-700 border-slate-200 hover:border-slate-300'}`}>
            {hasAction ? 'Update this app' : 'Open'}
          </button>
          <MoreHorizontal size={14} className="text-slate-400 hover:text-slate-600" />
        </div>
     </div>
  </div>
);

const AppGridItem = ({ icon, name, color, textColor }: any) => (
  <div className="bg-white/80 p-6 rounded-[2rem] border border-slate-200/50 shadow-sm flex flex-col items-center text-center group hover:shadow-xl hover:-translate-y-1 transition-all backdrop-blur-sm">
     <div className={`w-14 h-14 ${color} rounded-2xl mb-5 flex items-center justify-center ${textColor} font-black text-xl shadow-xl ring-1 ring-black/10 group-hover:scale-110 transition-transform duration-500`}>{icon}</div>
     <span className="font-extrabold text-slate-900 text-[14px] mb-2">{name}</span>
     <p className="text-[10px] text-slate-400 leading-relaxed font-medium mb-6">Designing and developing modern web platforms with elastic layout.</p>
     <div className="flex items-center gap-2 w-full">
        <button className="flex-1 py-2 bg-slate-50 border border-slate-200 rounded-full text-[10px] font-black text-slate-700 hover:bg-slate-100 transition-colors">Open</button>
        <div className="p-2 border border-slate-200 rounded-full hover:bg-slate-50 cursor-pointer">
          <MoreHorizontal size={12} className="text-slate-400" />
        </div>
     </div>
  </div>
);

const DockIcon = ({ type }: { type: string }) => {
  const icons: Record<string, React.ReactNode> = {
    finder: (
      <div className="w-full h-full bg-gradient-to-br from-blue-300 to-blue-500 flex items-center justify-center p-1.5">
         <div className="w-full h-full bg-white/20 rounded-lg flex items-center justify-center border border-white/30">
            <div className="w-4 h-4 rounded-full border-[2px] border-white/80"></div>
         </div>
      </div>
    ),
    chrome: (
      <div className="w-full h-full bg-white flex items-center justify-center">
        <div className="w-7 h-7 rounded-full border-[4px] border-blue-500 border-t-red-500 border-r-yellow-500 border-b-green-500 shadow-inner"></div>
      </div>
    ),
    appstore: (
      <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-600 flex items-center justify-center">
        <AppWindow size={22} className="text-white fill-white/10" strokeWidth={2.5} />
      </div>
    ),
    messages: (
      <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-600 flex items-center justify-center">
        <MessageSquare size={20} className="text-white fill-white/20" strokeWidth={2.5} />
      </div>
    ),
    mail: (
      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center">
        <Mail size={20} className="text-blue-600" strokeWidth={2.5} />
      </div>
    ),
    maps: (
      <div className="w-full h-full bg-[#f8f9fa] flex items-center justify-center overflow-hidden">
        <div className="w-full h-full bg-[url('https://maps.gstatic.com/tactile/pane/default_geocode-2x.png')] bg-cover opacity-80"></div>
        <div className="absolute w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-md"></div>
      </div>
    ),
    notes: (
      <div className="w-full h-full bg-gradient-to-br from-yellow-50 to-yellow-100 flex flex-col items-center justify-center">
        <div className="w-full h-3 bg-yellow-400 absolute top-0 border-b border-black/5"></div>
        <StickyNote size={20} className="text-yellow-700/60 mt-2" strokeWidth={2.5} />
      </div>
    ),
    reminders: (
      <div className="w-full h-full bg-white flex flex-col items-center justify-center gap-1.5 p-2">
        <div className="w-full h-1 bg-blue-500 rounded-full"></div>
        <div className="w-full h-1 bg-yellow-500 rounded-full"></div>
        <div className="w-full h-1 bg-red-500 rounded-full"></div>
      </div>
    ),
    settings: (
      <div className="w-full h-full bg-slate-200 flex items-center justify-center">
        <Settings size={22} className="text-slate-600" strokeWidth={2.5} />
      </div>
    ),
    trash: (
      <div className="w-full h-full bg-slate-100 flex items-center justify-center">
        <Trash2 size={20} className="text-slate-400" strokeWidth={2.5} />
      </div>
    )
  };

  return (
    <div className="w-12 h-12 rounded-[1rem] shadow-xl border border-white/40 overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 active:scale-90 group relative">
      {icons[type]}
      <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-black/20 rounded-full opacity-0 group-hover:opacity-100"></div>
    </div>
  );
};