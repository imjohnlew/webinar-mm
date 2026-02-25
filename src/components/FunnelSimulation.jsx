import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Filter, User, AlertCircle, Play, Pause, RefreshCw, Ban, ShieldAlert, RotateCcw } from 'lucide-react';

const MODES = {
    healthy: {
        id: 'healthy',
        label: 'Healthy Business',
        description: 'Traffic flows in, moves through the process, and converts to High Value Clients.',
        color: 'green',
        fix: 'Keep Optimizing!'
    },
    lead: {
        id: 'lead',
        label: 'Lead Failure',
        description: 'The "Invisible" Business. The funnel works, but nobody is entering it.',
        color: 'red',
        fix: 'Need more Traffic Sources.'
    },
    funnel: {
        id: 'funnel',
        label: 'Funnel Failure',
        description: 'The "Leaky Bucket". You pay for leads, but they drop off (leak) before booking.',
        color: 'yellow',
        fix: 'Need Automation & Retargeting.'
    },
    offer: {
        id: 'offer',
        label: 'Offer Failure',
        description: 'The "Friend Zone". They go through the whole process, see the price/offer, and say "No thanks".',
        color: 'orange',
        fix: 'Need Better Pricing or Guarantee.'
    }
};

const FunnelSimulation = () => {
    const [mode, setMode] = useState('healthy');
    const [isPlaying, setIsPlaying] = useState(true);
    const [stats, setStats] = useState({ leads: 0, leaks: 0, rejected: 0, customers: 0, moneyBurned: 0 });
    const [drops, setDrops] = useState([]);
    const [lossIndicators, setLossIndicators] = useState([]); // Floating -$$$ text

    // Simulation params
    const spawnRate = mode === 'lead' ? 2000 : 800; // MUCH Slower spawn
    const dropIdCounter = useRef(0);
    const lossIdCounter = useRef(0);

    useEffect(() => {
        let interval;
        if (isPlaying) {
            interval = setInterval(() => {
                const id = dropIdCounter.current++;
                setDrops(prev => [...prev.slice(-20), { id, startX: Math.random() * 80 - 40 }]); // Fewer particles
                setStats(s => ({ ...s, leads: s.leads + 1 }));
            }, spawnRate);
        }
        return () => clearInterval(interval);
    }, [isPlaying, mode, spawnRate]);

    const handleReset = () => {
        setDrops([]);
        setLossIndicators([]);
        setStats({ leads: 0, leaks: 0, rejected: 0, customers: 0, moneyBurned: 0 });
        dropIdCounter.current = 0;
    };

    const handleLoss = (x, y, amount) => {
        const id = lossIdCounter.current++;
        setLossIndicators(prev => [...prev.slice(-10), { id, x, y, amount }]);
        setStats(s => ({ ...s, moneyBurned: s.moneyBurned + amount }));
    };

    return (
        <div className="min-h-screen p-4 md:p-8 flex flex-col items-center">
            <div className="text-center mb-8">
                <h2 className="text-4xl font-black text-white mb-2 uppercase tracking-wide">The Funnel Lab</h2>
                <p className="text-slate-400">Visualize exactly where money is lost.</p>
            </div>

            {/* Mode Selectors */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 w-full max-w-4xl">
                {Object.values(MODES).map((m) => (
                    <button
                        key={m.id}
                        onClick={() => { setMode(m.id); handleReset(); setIsPlaying(true); }}
                        className={`p-4 rounded-xl border-2 transition-all flex flex-col items-center gap-2
              ${mode === m.id
                                ? `bg-${m.color}-500/20 border-${m.color}-500 text-white shadow-lg shadow-${m.color}-500/20`
                                : 'bg-slate-800 border-slate-700 text-slate-400 hover:bg-slate-700'
                            }`}
                    >
                        <span className={`font-bold uppercase tracking-wider text-sm ${mode === m.id ? `text-${m.color}-400` : ''}`}>
                            {m.label}
                        </span>
                    </button>
                ))}
            </div>

            <div className="flex flex-col md:flex-row gap-8 w-full max-w-6xl items-start">

                {/* LEFT: The Simulation Canvas */}
                <div className="flex-1 bg-slate-900 border border-slate-800 rounded-3xl p-4 md:p-8 relative min-h-[600px] flex flex-col items-center justify-start overflow-hidden w-full">

                    {/* Background Grid */}
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />
                    <div className="absolute inset-0 bg-grid-slate-800/[0.2] bg-[length:32px_32px]" />

                    {/* Metrics Overlay */}
                    <div className="absolute top-4 right-4 flex flex-col items-end gap-2 font-mono z-10">
                        <div className="bg-slate-800/80 px-3 py-1 rounded text-xs text-slate-500 border border-slate-700">
                            TRAFFIC: <span className="text-white font-bold">{stats.leads}</span>
                        </div>

                        {mode !== 'healthy' && (
                            <div className="bg-red-500/20 px-4 py-2 rounded-xl text-red-500 border border-red-500/30 shadow-lg shadow-red-900/40 animate-pulse">
                                <div className="text-[10px] font-bold uppercase tracking-widest mb-1">Money Burned</div>
                                <div className="text-2xl font-black tracking-tighter">
                                    -RM{stats.moneyBurned.toLocaleString()}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* --- THE FUNNEL STRUCTURE (CSS STACK - 3 SEGMENTS) --- */}
                    <div className="relative w-80 h-[360px] z-0 mt-8 flex flex-col items-center justify-center gap-1">

                        {/* Layer 1: Traffic */}
                        <div className="w-full h-[120px] bg-slate-800/80 backdrop-blur-sm border-t border-x border-slate-700 rounded-t-xl relative overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 85% 100%, 15% 100%)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-b from-slate-700/50 to-transparent" />
                            <div className="absolute top-4 w-full text-center text-xs font-bold text-slate-500 uppercase tracking-widest">Traffic</div>
                        </div>

                        {/* Layer 2: The Funnel */}
                        <div className="w-[70%] h-[120px] bg-slate-800/80 backdrop-blur-sm border-x border-slate-700 relative overflow-hidden"
                            style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
                        >
                            {mode === 'funnel' && (
                                <>
                                    <div className="absolute top-1/2 left-0 w-6 h-12 bg-red-500/20 blur-md animate-pulse" />
                                    <div className="absolute top-1/2 right-0 w-6 h-12 bg-red-500/20 blur-md animate-pulse" />
                                </>
                            )}
                            <div className="absolute top-4 w-full text-center text-xs font-bold text-slate-500 uppercase tracking-widest">The Funnel</div>
                        </div>

                        {/* Layer 3: The Offer (Barrier) */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={mode === 'offer' ? 'rejected' : 'normal'}
                                className={`w-[56%] h-[120px] backdrop-blur-sm border-x border-b rounded-b-xl relative overflow-hidden transition-colors duration-300
                        ${mode === 'offer'
                                        ? 'bg-red-900/40 border-red-500 shadow-[0_0_30px_rgba(239,68,68,0.3)]'
                                        : 'bg-slate-800/80 border-slate-700'
                                    }`}
                                style={{ clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)' }}
                            >
                                <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center w-full`}>
                                    {mode === 'offer' ? (
                                        <div className="flex flex-col items-center">
                                            <Ban className="w-8 h-8 text-red-500 mb-2" />
                                            <span className="text-xs font-black text-red-500 uppercase leading-none">Offer Rejected</span>
                                        </div>
                                    ) : (
                                        <span className="text-xs font-bold text-slate-500 uppercase tracking-widest">The Offer</span>
                                    )}
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* --- DROPS SIMULATION --- */}
                    <AnimatePresence>
                        {drops.map((drop) => (
                            <Particle
                                key={drop.id}
                                id={drop.id}
                                startX={drop.startX}
                                mode={mode}
                                onComplete={(result, finalX, finalY) => {
                                    if (result === 'leak') {
                                        setStats(s => ({ ...s, leaks: s.leaks + 1 }));
                                        handleLoss(finalX, finalY, 150);
                                    }
                                    if (result === 'reject') {
                                        setStats(s => ({ ...s, rejected: s.rejected + 1 }));
                                        handleLoss(finalX, finalY, 500);
                                    }
                                    if (result === 'win') {
                                        setStats(s => ({ ...s, customers: s.customers + 1 }));
                                    }
                                }}
                            />
                        ))}
                    </AnimatePresence>

                    {/* --- FLOATING LOSS INDICATORS --- */}
                    <AnimatePresence>
                        {lossIndicators.map((loss) => (
                            <motion.div
                                key={loss.id}
                                initial={{ opacity: 1, x: loss.x, y: loss.y, scale: 0.5 }}
                                animate={{ opacity: 0, y: loss.y - 100, scale: 1.2 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 1.5 }}
                                className="absolute z-50 font-black text-red-500 pointer-events-none drop-shadow-md"
                                style={{ textShadow: '0 2px 4px rgba(0,0,0,0.5)' }}
                            >
                                -RM{loss.amount}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* Bottom Bucket */}
                    <div className={`absolute bottom-6 w-56 h-20 border rounded-2xl flex items-center justify-center backdrop-blur-md z-10 transition-all duration-500
               ${mode === 'healthy' ? 'bg-green-500/10 border-green-500/30' : 'bg-white/5 border-white/10'}`}>
                        <div className="text-center">
                            <div className="text-xs text-slate-500 uppercase tracking-widest font-bold mb-1">Revenue</div>
                            <span className={`font-black text-3xl tracking-widest flex items-center gap-2 ${mode === 'healthy' ? 'text-green-500' : 'text-slate-400'}`}>
                                $$$ <span className="tabular-nums">{stats.customers * 2000}</span>
                            </span>
                        </div>
                    </div>
                </div>

                {/* RIGHT: Diagnostics Panel */}
                <div className="w-full md:w-80 space-y-6">
                    <div className={`p-6 rounded-2xl border bg-slate-900 ${mode === 'healthy' ? 'border-green-500/30' : 'border-slate-700'}`}>
                        <h3 className="text-xl font-bold text-white mb-2">{MODES[mode].label}</h3>
                        <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                            {MODES[mode].description}
                        </p>

                        {mode !== 'healthy' && (
                            <div className="bg-red-500/10 border border-red-500/20 p-4 rounded-xl">
                                <div className="text-[10px] font-bold text-red-400 uppercase tracking-widest mb-1">The Diagnosis</div>
                                <div className="text-white font-medium text-sm flex items-start gap-2">
                                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0 mt-0.5" />
                                    {MODES[mode].fix}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* CONTROL PANEL */}
                    <div className="grid grid-cols-2 gap-3">
                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="flex items-center justify-center gap-2 p-4 bg-slate-800 rounded-xl font-bold text-white hover:bg-slate-700 transition-colors border border-slate-700"
                        >
                            {isPlaying ? <Pause className="w-4 h-4 fill-current" /> : <Play className="w-4 h-4 fill-current" />}
                            {isPlaying ? 'Pause' : 'Resume'}
                        </button>
                        <button
                            onClick={() => {
                                setStats({ leads: 0, customers: 0, rejected: 0, leaks: 0, moneyBurned: 0 });
                                setDrops([]);
                                setLossIndicators([]);
                                dropIdCounter.current = 0;
                            }}
                            className="flex items-center justify-center gap-2 p-4 bg-slate-800 rounded-xl font-bold text-white hover:bg-slate-700 transition-colors border border-slate-700"
                        >
                            <RotateCcw className="w-4 h-4" />
                            Reset
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Individual Particle Component
const Particle = ({ startX, mode, onComplete, id }) => {
    let keyframes = {};
    let duration = 2;
    let exitResult = 'win';
    let color = '#4ade80'; // green default (healthy)

    // Randomize path slightly
    const randomX = startX;

    // Height Mapping (Total 360px stack + gap):
    // Segment 1 (Traffic): 0 - 120
    // Segment 2 (Funnel): 120 - 240
    // Segment 3 (Offer): 240 - 360

    if (mode === 'healthy') {
        keyframes = {
            top: [0, 120, 240, 360, 420], // Through all 3 layers to bucket
            left: [`calc(50% + ${randomX}px)`, `calc(50% + ${randomX * 0.7}px)`, `calc(50% + ${randomX * 0.4}px)`, `calc(50% + ${randomX * 0.2}px)`, `50%`],
            opacity: [0, 1, 1, 1, 0],
            scale: [1, 1, 0.9, 0.8, 0],
            backgroundColor: ['#4ade80', '#4ade80', '#22c55e', '#22c55e', '#22c55e']
        };
        exitResult = 'win';
    }
    else if (mode === 'lead') {
        // Faint, ghost-like particles die early
        keyframes = {
            top: [0, 100, 200, 300],
            left: [`calc(50% + ${randomX}px)`, `calc(50% + ${randomX * 0.7}px)`, `calc(50% + ${randomX * 0.4}px)`, `50%`],
            opacity: [0, 0.5, 0.3, 0],
            scale: [0.8, 0.8, 0.6, 0]
        };
        color = '#94a3b8'; // Slate 400
        exitResult = 'win';
    }
    else if (mode === 'funnel') {
        // Leaks out sideways from Lower Funnel (closer to 240px)
        const exitLeft = id % 2 === 0;

        keyframes = {
            top: [0, 120, 220], // Start -> End of Traffic -> BOTTOM of Funnel
            left: [`calc(50% + ${randomX}px)`, `calc(50% + ${randomX * 0.7}px)`, exitLeft ? `calc(50% - 200px)` : `calc(50% + 200px)`],
            opacity: [0, 1, 0],
            rotate: [0, 0, exitLeft ? -90 : 90],
            scale: [1, 1, 1.5]
        };
        color = '#ef4444'; // Red
        duration = 1.5;
        exitResult = 'leak';
    }
    else if (mode === 'offer') {
        // Hits Offer Layer (starts at 240) and bounces DRAMATICALLY
        const bounceLeft = randomX > 0; // if on right, bounce right

        keyframes = {
            top: [0, 120, 240, 260, 220, 500], // Hit surface, bounce up slightly, fall out
            left: [
                `calc(50% + ${randomX}px)`,
                `calc(50% + ${randomX * 0.7}px)`,
                `calc(50% + ${randomX * 0.4}px)`,
                `50%`,
                bounceLeft ? `calc(50% + ${randomX * 1.5 + 40}px)` : `calc(50% - ${Math.abs(randomX) * 1.5 + 40}px)`,
                bounceLeft ? `calc(50% + 300px)` : `calc(50% - 300px)` // Fly out sideways
            ],
            backgroundColor: ['#4ade80', '#4ade80', '#4ade80', '#ef4444', '#ef4444', '#ef4444'],
            opacity: [0, 1, 1, 1, 1, 0],
            scale: [1, 1, 1, 1.2, 1, 0.5]
        };
        duration = 2.0;
        exitResult = 'reject';
    }

    const handleComplete = () => {
        let finalX = 0;
        let finalY = 0;

        if (exitResult === 'leak') {
            finalY = 220; // Lower leak
            finalX = (id % 2 === 0) ? -140 : 140;
        }
        if (exitResult === 'reject') {
            finalY = 240; // Visual marker for "loss" text where it bounced
            finalX = (id % 2 === 0) ? -100 : 100;
        }

        onComplete(exitResult, finalX, finalY);
    }

    return (
        <motion.div
            className="absolute w-4 h-4 rounded-full shadow-sm z-20 border border-white/20"
            initial={{ top: 0, left: '50%', opacity: 0, backgroundColor: color }}
            animate={keyframes}
            transition={{ duration: duration, ease: "linear" }}
            onAnimationComplete={handleComplete}
        />
    );
};

export default FunnelSimulation;
