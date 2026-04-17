import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { BookOpen, Search, Siren, Flag, Menu, X, Filter, Layers, ScanEye, ChevronLeft, LayoutGrid, ChevronUp } from 'lucide-react';

import IndustrySelector from './components/IndustrySelector';
import BusinessModelViz from './components/BusinessModelViz';
import MindsetSession from './components/MindsetSession';
import KillRoom from './components/KillRoom';
import FunnelSimulation from './components/FunnelSimulation';
import CustomerJourneyBuilder from './components/CustomerJourneyBuilder';
import ClosingSession from './components/ClosingSession';
import IndustryScanner from './components/IndustryScanner';
import PDFExportButton from './components/PDFExportButton';
import WebinarCalculator from './components/WebinarCalculator';
import VersatileCalculator from './components/VersatileCalculator';

const TABS = [
  { id: 'mindset', label: '1. The Mindset', icon: BookOpen },
  { id: 'scanner', label: '2. Industry Scanner', icon: ScanEye },
  { id: 'discovery', label: '3. Niche Deep Dive', icon: Search },
  { id: 'diagnosis', label: '4. The Kill Room', icon: Siren },
  { id: 'simulation', label: 'The Funnel Lab', icon: Filter },
  { id: 'builder', label: 'Journey Builder', icon: Layers },
  { id: 'calculator', label: 'Calculator', icon: Search },
  { id: 'versatile-calc', label: 'Projections', icon: Search },
  { id: 'closing', label: '7. The Bridge', icon: Flag },
];

const PINNED_IDS = ['simulation', 'builder', 'calculator', 'versatile-calc'];

function App() {
  const [activeTab, setActiveTab] = useState('builder');
  const [selectedIndustry, setSelectedIndustry] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false); // Mobile nav toggle
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [showMoreMenu, setShowMoreMenu] = useState(false);

  // Split tabs
  const pinnedTabs = TABS.filter(t => PINNED_IDS.includes(t.id));
  const moreTabs = TABS.filter(t => !PINNED_IDS.includes(t.id));
  const isMoreActive = moreTabs.some(t => t.id === activeTab);

  const renderContent = () => {
    switch (activeTab) {
      case 'mindset':
        return <MindsetSession />;
      case 'scanner':
        return <IndustryScanner />;
      case 'discovery':
        if (selectedIndustry) {
          return <BusinessModelViz industry={selectedIndustry} onBack={() => setSelectedIndustry(null)} />;
        }
        return <IndustrySelector onSelect={setSelectedIndustry} />;
      case 'diagnosis':
        return <KillRoom />;
      case 'simulation':
        return <FunnelSimulation />;
      case 'builder':
        return <CustomerJourneyBuilder industry={selectedIndustry} />;
      case 'calculator':
        return <WebinarCalculator />;
      case 'versatile-calc':
        return <VersatileCalculator />;
      case 'closing':
        return <ClosingSession />;
      default:
        return <MindsetSession />;
    }
  };

  return (
    <div className="min-h-screen bg-[#0f172a] text-slate-100 font-sans selection:bg-red-500/30 overflow-x-hidden">
      {/* Background Noise/Gradient */}
      <div className="fixed inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none -z-10" />
      <div className="fixed top-0 left-0 w-full h-[500px] bg-gradient-to-b from-blue-900/20 to-transparent -z-10 pointer-events-none" />

      {/* Mobile Header */}
      <div className="lg:hidden p-4 flex items-center justify-between border-b border-slate-800 bg-[#0f172a]/90 backdrop-blur z-50 sticky top-0">
        <span className="font-bold text-lg tracking-widest uppercase">AI Agency Day 1</span>
        <button onClick={() => setIsNavOpen(!isNavOpen)}>
          {isNavOpen ? <X /> : <Menu />}
        </button>
      </div>

      <div className="flex flex-col lg:flex-row min-h-screen">

        {/* Sidebar Navigation */}
        <nav
          className={`
            fixed lg:sticky top-[68px] lg:top-0 left-0 h-[calc(100vh-68px)] lg:h-screen bg-[#0B1120] border-r border-slate-800 z-40
            flex flex-col overflow-x-hidden whitespace-nowrap transition-all duration-300 ease-in-out
            ${isNavOpen ? 'w-64 translate-x-0 opacity-100' : '-translate-x-full w-64 opacity-0 lg:translate-x-0 lg:opacity-100'}
            ${isSidebarVisible ? 'lg:w-64 lg:translate-x-0 lg:opacity-100' : 'lg:w-0 lg:-translate-x-full lg:opacity-0'}
            ${(!isSidebarVisible && !isNavOpen) ? 'pointer-events-none' : ''}
          `}
        >
          <div className="p-8 flex items-center justify-between">
            <div className="min-w-[160px]">
              <h1 className="text-2xl font-black tracking-tighter text-white mb-1">AI <span className="text-blue-500">MARKETER</span></h1>
              <p className="text-xs text-slate-500 font-mono uppercase tracking-widest">Instructor Mode</p>
            </div>
            <button onClick={() => setIsSidebarVisible(false)} className="text-slate-500 hover:text-white lg:block hidden">
              <ChevronLeft />
            </button>
          </div>

          {/* PINNED TABS */}
          <div className="px-4 space-y-2 min-w-[256px]">
            {pinnedTabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => { setActiveTab(tab.id); setIsNavOpen(false); }}
                  className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group
                    ${isActive
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-900/20'
                      : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                    }
                  `}
                >
                  <tab.icon className={`w-5 h-5 ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-white'}`} />
                  <span className="font-medium text-sm text-left">{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* SPACER */}
          <div className="flex-1" />

          {/* MORE TOOLS (Bottom) - HIDDEN */}
          {/* <div className="p-4 min-w-[256px] relative z-50">
           ... (Hidden) ...
          </div> */}

        </nav>

        {/* Toggle Button (When Sidebar Hidden) */}
        {!isSidebarVisible && (
          <button
            onClick={() => setIsSidebarVisible(true)}
            className="hidden lg:flex fixed top-6 left-6 z-50 p-3 bg-slate-800 border border-slate-700 rounded-full shadow-lg text-slate-400 hover:text-white hover:scale-110 transition-all hover:bg-slate-700"
          >
            <Menu className="w-6 h-6" />
          </button>
        )}

        {/* Main Content */}
        <main className="flex-1 min-w-0 relative overflow-y-auto h-screen overflow-x-hidden">
          <div id="pdf-export-container" className="min-h-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-4 md:p-8 lg:p-12"
              >
                {renderContent()}
              </motion.div>
            </AnimatePresence>
          </div>
          <PDFExportButton targetId="pdf-export-container" />
        </main>

      </div>
    </div>
  );
}

export default App;
