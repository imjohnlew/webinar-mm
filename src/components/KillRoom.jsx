import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Siren, AlertOctagon, CheckCircle2, ArrowRight, MousePointerClick, Globe, Image as ImageIcon } from 'lucide-react';

const SCENARIOS = [
    {
        id: 1,
        title: "The Broken Ad",
        type: "funnel",
        correctPitch: "Automation & Landing Page",
        description: "Scenario: A local dentist runs a Facebook Ad offering '$99 Whitening'. You click the 'Book Now' button...",
        visual: (
            <div className="bg-white text-black p-4 rounded-lg max-w-sm mx-auto border border-gray-300 shadow-sm font-sans">
                <div className="flex items-center gap-2 mb-2">
                    <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                    <div>
                        <div className="font-bold text-sm">BrightSmile Dental</div>
                        <div className="text-xs text-gray-500">Sponsored</div>
                    </div>
                </div>
                <div className="bg-gray-200 h-32 mb-2 flex items-center justify-center text-gray-500 text-xs">[Stock Image of Teeth]</div>
                <div className="bg-gray-100 p-2 text-xs mb-2">
                    <div className="font-bold">FLASH SALE: $99 Whitening!</div>
                    <div className="text-gray-500">Limited time only. Click to book...</div>
                </div>
                <div className="bg-gray-300 p-2 text-center font-bold text-gray-500 text-sm cursor-not-allowed">
                    404 - PAGE NOT FOUND
                </div>
            </div>
        ),
        feedback: "The link is broken. They are burning money on ads that go nowhere. This is a Funnel Failure."
    },
    {
        id: 2,
        title: "The Philosophy Coach",
        type: "offer",
        correctPitch: "Copywriting & Strategy",
        description: "Scenario: An energetic life coach posts 3x a day on Instagram. It's all quotes.",
        visual: (
            <div className="bg-gradient-to-tr from-purple-500 to-pink-500 p-1 rounded-lg max-w-sm mx-auto">
                <div className="bg-black p-4 rounded text-white font-sans">
                    <div className="flex justify-between items-center mb-4">
                        <div className="text-xs font-bold">@LifeCoachGary</div>
                        <div className="text-xs">...</div>
                    </div>
                    <div className="aspect-square bg-slate-800 flex items-center justify-center p-6 text-center italic font-serif text-xl border border-slate-700">
                        "Believe in the power of your own dreams."
                    </div>
                    <div className="mt-4 text-sm">
                        <span className="font-bold mr-2">@LifeCoachGary</span>
                        Happy Monday fam! ✨ #motivation #vibes
                    </div>
                    <div className="mt-2 text-xs text-slate-500">
                        (No link in bio. No CTA. Just vibes.)
                    </div>
                </div>
            </div>
        ),
        feedback: "He has attention, but he isn't selling anything. People like him but don't buy from him. This is an Offer Failure."
    },
    {
        id: 3,
        title: "The Time Machine",
        type: "trust",
        correctPitch: "Web Design & Rebranding",
        description: "Scenario: You search for a lawyer. You find this website.",
        visual: (
            <div className="bg-[#000080] text-[#FFFF00] p-2 max-w-sm mx-auto font-serif border-4 border-gray-400 border-inset">
                <div className="text-center animate-pulse text-red-500 font-bold bg-white text-lg mb-2">*** WELCOME ***</div>
                <h1 className="text-center text-2xl mb-4 underline">SMITH & ASSOCIATES LAW</h1>
                <div className="flex gap-2">
                    <div className="w-1/3 bg-gray-300 h-24 text-black text-[10px] p-1">
                        [Low Res Photo of Handshake]
                    </div>
                    <div className="w-2/3 text-xs leading-tight">
                        <p className="mb-2">We provide legal services since 1998.</p>
                        <p className="text-white">Call us at 555-0199 for help.</p>
                        <br />
                        <a href="#" className="text-blue-300 underline">Enter Site &gt;&gt;</a>
                    </div>
                </div>
                <div className="mt-4 text-[10px] text-center text-white">
                    Best viewed in Internet Explorer 5.0
                </div>
            </div>
        ),
        feedback: "It looks like a scam or a defunct business. Even if they are good, nobody believes them. This is a Trust Problem."
    }
];

const KillRoom = () => {
    const [index, setIndex] = useState(0);
    const [revealed, setRevealed] = useState(false);
    const [score, setScore] = useState(0);

    const scenario = SCENARIOS[index];

    const handleGuess = (type) => {
        if (revealed) return;
        if (type === scenario.type) setScore(s => s + 1);
        setRevealed(true);
    };

    const next = () => {
        if (index < SCENARIOS.length - 1) {
            setIndex(i => i + 1);
            setRevealed(false);
        } else {
            alert("Session Complete! You are ready to hunt.");
        }
    };

    return (
        <div className="max-w-4xl mx-auto p-4 min-h-screen flex flex-col items-center justify-center">

            {/* Header */}
            <div className="w-full flex items-center justify-between mb-8 pb-4 border-b border-red-900/30">
                <div className="flex items-center gap-3">
                    <Siren className="w-8 h-8 text-red-500 animate-pulse" />
                    <h1 className="text-3xl font-black text-red-500 tracking-widest uppercase">The Kill Room</h1>
                </div>
                <div className="text-slate-500 font-mono">
                    Target {index + 1} / {SCENARIOS.length}
                </div>
            </div>

            {/* Main Game Area */}
            <div className="w-full grid md:grid-cols-2 gap-12 items-start">

                {/* Visual Specimen */}
                <div className="space-y-6">
                    <div className="bg-slate-900/50 p-8 rounded-3xl border border-slate-700 min-h-[400px] flex flex-col justify-center relative overflow-hidden group">
                        <div className="absolute inset-0 bg-red-500/5 pointer-events-none" />
                        <div className="absolute top-4 left-4 text-xs font-mono text-slate-500">EVIDENCE #00{scenario.id}</div>

                        <div className="mb-8">
                            {scenario.visual}
                        </div>

                        <div className="bg-black/50 p-4 rounded-xl border border-slate-700/50">
                            <p className="text-slate-300 font-mono text-sm">{scenario.description}</p>
                        </div>
                    </div>
                </div>

                {/* Controls */}
                <div className="space-y-8">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-2">Diagnose the Problem</h2>
                        <p className="text-slate-400">What is killing this business?</p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        {['lead', 'offer', 'funnel', 'trust'].map((Type) => (
                            <button
                                key={Type}
                                onClick={() => handleGuess(Type)}
                                disabled={revealed}
                                className={`p-4 rounded-xl font-bold uppercase tracking-wider border-2 transition-all
                   ${revealed
                                        ? scenario.type === Type
                                            ? 'bg-green-500 border-green-500 text-white scale-105'
                                            : 'bg-slate-800 border-slate-700 text-slate-500 opacity-50'
                                        : 'bg-slate-800 border-slate-700 text-slate-300 hover:border-red-500 hover:text-white hover:bg-slate-700'
                                    }
                 `}
                            >
                                {Type}
                            </button>
                        ))}
                    </div>

                    <AnimatePresence>
                        {revealed && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: 'auto' }}
                                className="bg-green-500/10 border border-green-500/30 rounded-2xl p-6"
                            >
                                <div className="flex items-start gap-4 mb-4">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 mt-1 shrink-0" />
                                    <div>
                                        <h3 className="text-xl font-bold text-green-400 mb-1">Diagnosis: {scenario.type.toUpperCase()} PROBLEM</h3>
                                        <p className="text-green-200/80 text-sm leading-relaxed">{scenario.feedback}</p>
                                    </div>
                                </div>

                                <div className="pl-10">
                                    <div className="inline-block px-3 py-1 bg-white text-black text-xs font-bold uppercase tracking-widest rounded mb-2">
                                        The Pitch
                                    </div>
                                    <p className="text-white text-lg font-bold">
                                        "I can fix this with {scenario.correctPitch}."
                                    </p>
                                </div>

                                <div className="mt-6 pt-6 border-t border-green-500/20 text-right">
                                    <button onClick={next} className="px-6 py-2 bg-green-500 text-black font-bold rounded-lg hover:bg-green-400 inline-flex items-center gap-2">
                                        Next Target <ArrowRight className="w-4 h-4" />
                                    </button>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

            </div>
        </div>
    );
};

export default KillRoom;
