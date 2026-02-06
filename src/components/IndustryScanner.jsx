import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Stethoscope, Dumbbell, Home, ArrowRight, DollarSign, Users, AlertCircle, Briefcase, Zap, TrendingUp, X, CheckCircle, Calculator, Wrench, Clock, Lock, ShieldCheck, HeartPulse } from 'lucide-react';

const INDUSTRIES = [
    {
        id: 'dentist',
        name: 'Dental Clinic',
        icon: Stethoscope,
        color: 'text-blue-400',
        bg: 'bg-blue-500/10 border-blue-500/50',
        description: 'High-overhead local service relying on recurring checkups and high-ticket procedures.',
        economics: {
            ticket: 200,
            ltv: 3500,
            margin: '40%',
            pain: 'Empty Chairs = Burned Cash'
        },
        leaks: [
            { stage: 'Traffic', problem: 'No Leads', fix: 'Google Ads', description: 'Patients are searching, but finding competitors.' },
            { stage: 'Service', problem: 'Missed Calls', fix: 'AI Receptionist', description: 'Front desk is busy drilling; calls go to voicemail.' }
        ],
        story: [
            { time: '09:00 AM', pain: 'Phone rings while drilling. Can\'t answer.', gain: 'AI answers instantly. Books appointment.' },
            { time: '02:00 PM', pain: 'Patient cancels last minute. Chair empty.', gain: 'Auto-text blasts waitlist. Chair filled.' },
            { time: '05:00 PM', pain: 'Worried about payroll next week.', gain: 'Dashboard shows $5k booked for tomorrow.' }
        ],
        flow: [
            { stage: 'Traffic', label: 'Local Search', icon: Users },
            { stage: 'Hook', label: '$99 Cleaning', icon: Zap },
            { stage: 'Service', label: 'Hygiene Visit', icon: Stethoscope },
            { stage: 'Upsell', label: 'Crowns ($2k+)', icon: TrendingUp }
        ]
    },
    {
        id: 'gym',
        name: 'Local Gym',
        icon: Dumbbell,
        color: 'text-orange-400',
        bg: 'bg-orange-500/10 border-orange-500/50',
        description: 'Volume-based membership model. Needs constant influx of new members to combat churn.',
        economics: {
            ticket: 50,
            ltv: 600,
            margin: '20%',
            pain: 'Churn (Members Quitting)'
        },
        leaks: [
            { stage: 'Traffic', problem: 'Weak Offer', fix: '7-Day Pass', description: 'Generic "Join Now" ads are ignored.' },
            { stage: 'Retain', problem: 'Members Quit', fix: 'Win-Back Seq', description: 'No one checks in on members who stop coming.' }
        ],
        story: [
            { time: '07:00 AM', pain: 'Classes are half empty. Losing energy.', gain: 'Ads filled the class with new trials.' },
            { time: '11:00 AM', pain: 'New lead asks for price. No reply.', gain: 'Bot replies with pricing & booked tour.' },
            { time: '08:00 PM', pain: 'Excel sheets for leads is a mess.', gain: 'CRM tracks exactly who signed up.' }
        ],
        flow: [
            { stage: 'Traffic', label: 'Instagram Ads', icon: Users },
            { stage: 'Hook', label: 'Free Pass', icon: Zap },
            { stage: 'Service', label: 'Gym Access', icon: Dumbbell },
            { stage: 'Retain', label: 'Community', icon: TrendingUp }
        ]
    },
    {
        id: 'realtor',
        name: 'Real Estate Agent',
        icon: Home,
        color: 'text-green-400',
        bg: 'bg-green-500/10 border-green-500/50',
        description: 'High-ticket sales with long sales cycles. Feast or famine income reliability.',
        economics: {
            ticket: 10000,
            ltv: 15000,
            margin: '90%',
            pain: 'No Leads = $0 Income'
        },
        leaks: [
            { stage: 'Traffic', problem: 'Obscurity', fix: 'Personal Brand', description: 'Reliant on Zillow leads shared with 10 others.' },
            { stage: 'Nurture', problem: 'Slow Follow-up', fix: 'Speed-to-Lead', description: 'Leads buy from first responder. Speed is key.' }
        ],
        story: [
            { time: '10:00 AM', pain: 'Cold calling expired listings. Brutal.', gain: 'Inbound leads wake up to your content.' },
            { time: '01:00 PM', pain: 'Lead ghosted after showing.', gain: 'Auto-drip keeps you top of mind for months.' },
            { time: '06:00 PM', pain: 'Stressed about next month\'s bills.', gain: 'Pipeline full. Predictable closings.' }
        ],
        flow: [
            { stage: 'Traffic', label: 'Referrals', icon: Users },
            { stage: 'Nurture', label: 'Showings', icon: Briefcase },
            { stage: 'Closing', label: 'Escrow', icon: Home },
            { stage: 'Profit', label: 'Commission', icon: DollarSign }
        ]
    }
];

// --- SUB-COMPONENTS ---

const ROIView = ({ industry }) => {
    const [leads, setLeads] = useState(3);
    const agencyFee = 1500;
    const valueCreated = leads * industry.economics.ltv;
    const roi = ((valueCreated - agencyFee) / agencyFee) * 100;

    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
            <h3 className="text-xl font-bold mb-6 text-center">The Math of Value</h3>

            <div className="flex-1 flex flex-col justify-center gap-8 px-8">
                <div>
                    <div className="flex justify-between mb-2 text-slate-400 font-bold uppercase text-xs tracking-widest">
                        <span>New Clients: {leads}</span>
                        <span>Drag Slider</span>
                    </div>
                    <input
                        type="range"
                        min="1"
                        max="10"
                        value={leads}
                        onChange={(e) => setLeads(parseInt(e.target.value))}
                        className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                    />
                </div>

                <div className="flex items-end justify-center gap-8 h-48 border-b border-slate-700 pb-4">
                    {/* COST BAR */}
                    <div className="relative w-24 group">
                        <div className="absolute -top-8 w-full text-center font-bold text-red-500">${agencyFee}</div>
                        <div className="w-full bg-red-500/20 border border-red-500/50 rounded-t-xl h-[30%] flex items-end justify-center pb-2 relative bottom-0">
                            <span className="text-[10px] text-red-300 font-bold uppercase overflow-visible whitespace-nowrap mb-2">My Fee</span>
                        </div>
                    </div>

                    {/* VALUE BAR */}
                    <div className="relative w-24">
                        <div className="absolute -top-8 w-full text-center font-bold text-green-400">${valueCreated.toLocaleString()}</div>
                        <motion.div
                            initial={false}
                            animate={{ height: `${Math.min(100, (valueCreated / 10000) * 100)}%` }}
                            className="w-full bg-green-500/20 border border-green-500/50 rounded-t-xl flex items-end justify-center pb-2 relative bottom-0"
                        >
                            <span className="text-[10px] text-green-300 font-bold uppercase mb-2">Value</span>
                        </motion.div>
                    </div>
                </div>

                <div className="text-center p-4 bg-slate-800 rounded-xl border border-slate-700">
                    <div className="text-slate-400 text-sm mb-1">Return on Investment</div>
                    <div className="text-3xl font-black text-white">{roi.toFixed(0)}% ROI</div>
                    <p className="text-xs text-slate-500 mt-2">
                        "If I give you ${valueCreated.toLocaleString()}, can I keep ${agencyFee}?"
                    </p>
                </div>
            </div>
        </div>
    );
};

const LeaksView = ({ industry }) => {
    const [fixed, setFixed] = useState({});

    const toggleFix = (idx) => {
        setFixed(prev => ({ ...prev, [idx]: !prev[idx] }));
    };

    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
            <h3 className="text-xl font-bold mb-6 text-center">Agency Consultant Mode</h3>

            <div className="flex-1 overflow-y-auto px-4 space-y-4">
                <p className="text-center text-slate-400 text-sm mb-4">
                    Find the broken parts of their business and install the fix.
                </p>

                {industry.leaks.map((leak, idx) => {
                    const isFixed = fixed[idx];
                    return (
                        <div key={idx} className={`p-4 rounded-xl border transition-all duration-300 ${isFixed ? 'bg-green-900/20 border-green-500/50' : 'bg-red-900/10 border-red-500/30'}`}>
                            <div className="flex items-center justify-between mb-2">
                                <div className="flex items-center gap-2">
                                    {isFixed ? <ShieldCheck className="text-green-500 w-5 h-5" /> : <AlertCircle className="text-red-500 w-5 h-5" />}
                                    <span className="font-bold text-white">{leak.problem}</span>
                                </div>
                                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">{leak.stage}</div>
                            </div>

                            <p className="text-sm text-slate-400 mb-4 pl-7">{leak.description}</p>

                            <button
                                onClick={() => toggleFix(idx)}
                                className={`w-full py-2 rounded-lg font-bold text-sm flex items-center justify-center gap-2 transition-all
                                    ${isFixed ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-slate-800 text-slate-300 hover:bg-blue-600 hover:text-white'}
                                `}
                            >
                                {isFixed ? (
                                    <>
                                        <CheckCircle className="w-4 h-4" /> Fixed: {leak.fix} Installed
                                    </>
                                ) : (
                                    <>
                                        <Wrench className="w-4 h-4" /> Install Fix: {leak.fix}
                                    </>
                                )}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

const StoryView = ({ industry }) => {
    return (
        <div className="flex flex-col h-full animate-in fade-in duration-500">
            <h3 className="text-xl font-bold mb-6 text-center">Day In The Life</h3>

            <div className="flex-1 overflow-y-auto px-4 relative">
                <div className="absolute left-6 top-4 bottom-4 w-0.5 bg-slate-800" />

                {industry.story.map((event, idx) => (
                    <div key={idx} className="relative pl-12 mb-8 group">
                        <div className="absolute left-4 top-1 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-slate-600 group-hover:border-blue-500 transition-colors bg-[#0f172a]" />

                        <div className="text-xs font-bold text-slate-500 mb-1">{event.time}</div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* PAIN */}
                            <div className="p-3 bg-red-900/10 border border-red-500/20 rounded-lg">
                                <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">Without You</div>
                                <div className="text-sm text-slate-300 leading-snug">{event.pain}</div>
                            </div>

                            {/* GAIN */}
                            <div className="p-3 bg-green-900/10 border border-green-500/20 rounded-lg">
                                <div className="text-[10px] font-bold text-green-400 uppercase tracking-widest mb-1">With Agency</div>
                                <div className="text-sm text-slate-300 leading-snug">{event.gain}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


const IndustryScanner = () => {
    const [selected, setSelected] = useState(null);
    const [mode, setMode] = useState('math'); // 'math', 'leaks', 'story'

    const renderMode = () => {
        if (!selected) return null;
        switch (mode) {
            case 'math': return <ROIView industry={selected} />;
            case 'leaks': return <LeaksView industry={selected} />;
            case 'story': return <StoryView industry={selected} />;
            default: return <ROIView industry={selected} />;
        }
    };

    return (
        <div className="min-h-screen text-slate-100 p-4 md:p-8 flex flex-col items-center">

            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter mb-4">
                    Business Model <span className="text-blue-500">X-Ray</span>
                </h2>
                <p className="text-slate-400 max-w-2xl mx-auto">
                    Select an industry to scan their "Source Code". See the math, find the leaks, and understand the human story.
                </p>
            </div>

            {/* GRID SELECTION */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
                {INDUSTRIES.map(ind => (
                    <motion.button
                        key={ind.id}
                        layoutId={`card-${ind.id}`}
                        onClick={() => { setSelected(ind); setMode('math'); }}
                        className={`p-6 rounded-3xl border ${ind.bg} hover:scale-105 transition-transform text-left group flex flex-col items-start gap-4 relative overflow-hidden`}
                    >
                        <div className={`p-4 rounded-2xl bg-slate-900 border border-slate-800 group-hover:bg-slate-800 transition-colors`}>
                            <ind.icon className={`w-8 h-8 ${ind.color}`} />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2">{ind.name}</h3>
                            <p className="text-sm text-slate-400 leading-relaxed font-medium opacity-80">{ind.description}</p>
                        </div>
                        <div className="mt-auto pt-4 flex gap-4 text-xs font-mono text-slate-500 uppercase tracking-widest w-full border-t border-slate-700/50">
                            <span>Scan Model &rarr;</span>
                        </div>
                    </motion.button>
                ))}
            </div>

            {/* DETAIL MODAL */}
            <AnimatePresence>
                {selected && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelected(null)}
                            className="absolute inset-0 bg-black/90 backdrop-blur-md"
                        />

                        <motion.div
                            layoutId={`card-${selected.id}`}
                            className="bg-[#0f172a] w-full max-w-5xl h-[600px] rounded-3xl border border-slate-700 overflow-hidden shadow-2xl relative z-10 flex flex-col md:flex-row"
                        >
                            <button
                                onClick={() => setSelected(null)}
                                className="absolute top-4 right-4 p-2 bg-slate-800 rounded-full hover:bg-slate-700 z-50"
                            >
                                <X className="w-6 h-6 text-white" />
                            </button>

                            {/* LEFT SIDE: NAVIGATION & SIDEBAR */}
                            <div className="w-full md:w-1/3 bg-slate-900/50 p-6 md:p-8 border-r border-slate-800 flex flex-col gap-6">
                                <div className="flex items-center gap-4 mb-2">
                                    <div className={`p-3 rounded-xl bg-slate-800 border border-slate-700`}>
                                        <selected.icon className={`w-6 h-6 ${selected.color}`} />
                                    </div>
                                    <h2 className="text-xl font-black uppercase tracking-tight">{selected.name}</h2>
                                </div>

                                <div className="flex flex-col gap-2">
                                    <NavButton active={mode === 'math'} onClick={() => setMode('math')} icon={Calculator} label="1. The Math" />
                                    <NavButton active={mode === 'leaks'} onClick={() => setMode('leaks')} icon={Wrench} label="2. The Leaks" />
                                    <NavButton active={mode === 'story'} onClick={() => setMode('story')} icon={HeartPulse} label="3. The Story" />
                                </div>

                                <div className="mt-auto p-4 bg-slate-800/50 rounded-xl border border-slate-700">
                                    <div className="text-[10px] text-slate-500 uppercase tracking-wider mb-2">Economics</div>
                                    <div className="flex justify-between items-center mb-1">
                                        <span className="text-sm text-slate-400">Unit Price</span>
                                        <span className="font-bold text-white">${selected.economics.ticket}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-sm text-slate-400">Lifetime Val</span>
                                        <span className="font-bold text-green-400">${selected.economics.ltv}</span>
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT SIDE: INTERACTIVE CONTENT */}
                            <div className="flex-1 p-6 md:p-8 relative bg-slate-950 flex flex-col">
                                {renderMode()}
                            </div>

                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </div>
    );
};

const NavButton = ({ active, onClick, icon: Icon, label }) => (
    <button
        onClick={onClick}
        className={`w-full p-4 rounded-xl flex items-center gap-3 transition-all text-left border ${active ? 'bg-blue-600 border-blue-500 text-white shadow-lg' : 'bg-transparent border-transparent text-slate-400 hover:bg-slate-800 hover:text-white'}`}
    >
        <Icon className="w-5 h-5" />
        <span className="font-bold text-sm">{label}</span>
        {active && <ArrowRight className="ml-auto w-4 h-4 opacity-50" />}
    </button>
);

export default IndustryScanner;
