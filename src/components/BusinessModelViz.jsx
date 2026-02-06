import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, CheckCircle, Zap, Layers, TrendingUp, ArrowRight, User, Magnet, Filter, Gift } from 'lucide-react';
import { MASTER_BLOCKS } from '../data';

const steps = [
    { id: 'lead', label: '1. Lead', icon: Magnet },
    { id: 'funnel', label: '2. Funnel', icon: Filter },
    { id: 'offer', label: '3. Offer', icon: Gift },
];

const BusinessModelViz = ({ industry, onBack }) => {
    const [activeStep, setActiveStep] = useState('lead');

    // Helper to get current stage data
    const currentStage = industry.model[activeStep];
    const StepIcon = steps.find(s => s.id === activeStep).icon;

    // Determine which master blocks to show
    // For 'lead' and 'offer', we show a grid of ALL possible blocks, brightening the active ones.
    // For 'funnel', we might want a specific visualization, but let's stick to the block concept first as requested, 
    // or maybe vertical flow for funnel?
    // User said: "for customer journey. i prefer them to visualize like a funnel"

    const isFunnelStep = activeStep === 'funnel';
    const masterList = MASTER_BLOCKS[activeStep] || [];

    return (
        <div className="min-h-screen p-4 md:p-8 max-w-7xl mx-auto flex flex-col">
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <button
                    onClick={onBack}
                    className="flex items-center text-slate-400 hover:text-white transition-colors"
                >
                    <ArrowLeft className="w-5 h-5 mr-2" /> Change Industry
                </button>
                <div className="text-right">
                    <h1 className="text-2xl font-bold text-white">{industry.name}</h1>
                    <p className="text-slate-400 text-sm">{industry.type}</p>
                </div>
            </div>

            {/* Progress / Navigation Steps */}
            <div className="relative mb-12 px-4">
                {/* Connecting Line */}
                <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -z-10 rounded-full" />
                <div className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 -z-10 rounded-full transition-all duration-500"
                    style={{ width: activeStep === 'lead' ? '20%' : activeStep === 'funnel' ? '50%' : '100%' }} />

                <div className="flex justify-between max-w-3xl mx-auto">
                    {steps.map((step) => {
                        const isActive = activeStep === step.id;
                        return (
                            <button
                                key={step.id}
                                onClick={() => setActiveStep(step.id)}
                                className={`flex flex-col items-center gap-3 transition-all duration-300 outline-none focus:scale-110 ${isActive ? 'scale-110' : 'opacity-60 hover:opacity-100'}`}
                            >
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center border-4 shadow-xl transition-all duration-300 ${isActive ? `bg-slate-900 border-blue-500 text-blue-400` : 'bg-slate-800 border-slate-700 text-slate-500'}`}>
                                    <step.icon className="w-6 h-6" />
                                </div>
                                <span className={`text-sm font-bold uppercase tracking-wider ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                    {step.label}
                                </span>
                            </button>
                        )
                    })}
                </div>
            </div>

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col items-center relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeStep}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        className="w-full"
                    >
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-extrabold text-white mb-2">{currentStage.title}</h2>
                            <p className="text-slate-400 max-w-2xl mx-auto">{currentStage.description}</p>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                            {/* LEFT SIDE: VISUALIZATION (Blocks or Funnel) */}
                            <div className="lg:col-span-8 bg-slate-900/50 rounded-3xl border border-slate-800 p-8 relative overflow-hidden min-h-[400px]">
                                {/* Background Grid */}
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

                                {isFunnelStep ? (
                                    // FUNNEL VISUALIZATION
                                    <div className="flex flex-col items-center justify-center space-y-2 h-full py-8">
                                        {/* We map the active blocks to funnel stages roughly based on index or just list them vertically connected */}
                                        {currentStage.activeBlocks.map((blockId, idx) => {
                                            const blockData = MASTER_BLOCKS.funnel.find(b => b.id === blockId) || { name: blockId, icon: CheckCircle };
                                            const width = 80 - (idx * 15); // Decreasing width
                                            return (
                                                <motion.div
                                                    key={blockId}
                                                    initial={{ opacity: 0, scale: 0.8 }}
                                                    animate={{ opacity: 1, scale: 1 }}
                                                    transition={{ delay: idx * 0.15 }}
                                                    className="relative flex items-center justify-center shadow-lg backdrop-blur-sm"
                                                    style={{
                                                        width: `${Math.max(width, 30)}%`,
                                                        height: '60px',
                                                        background: `linear-gradient(135deg, rgba(59, 130, 246, 0.2), rgba(147, 51, 234, 0.2))`,
                                                        borderRadius: '0px 0px 16px 16px',
                                                        borderTop: 'none',
                                                        clipPath: 'polygon(5% 0, 95% 0, 85% 100%, 15% 100%)' // Trapezoid shape roughly
                                                    }}
                                                >
                                                    <div className="absolute inset-0 border-x border-b border-indigo-500/30 -z-10" style={{ clipPath: 'polygon(5% 0, 95% 0, 85% 100%, 15% 100%)' }} />
                                                    <div className="flex items-center gap-3 text-white font-bold z-10">
                                                        <blockData.icon className="w-5 h-5 text-indigo-300" />
                                                        {blockData.name}
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            transition={{ delay: 0.8 }}
                                            className="mt-4 px-4 py-2 bg-green-500/20 text-green-400 rounded-full text-sm font-bold border border-green-500/30"
                                        >
                                            $$$ Client Acquired
                                        </motion.div>
                                    </div>
                                ) : (
                                    // GRID / BLOCKS VISUALIZATION (Lead & Offer)
                                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                        {masterList.map((block) => {
                                            const isActive = currentStage.activeBlocks.includes(block.id);
                                            return (
                                                <motion.div
                                                    key={block.id}
                                                    whileHover={{ scale: 1.05 }}
                                                    className={`relative p-4 rounded-xl border flex flex-col items-center justify-center text-center gap-3 transition-all duration-500
                               ${isActive
                                                            ? 'bg-slate-800 border-indigo-500 shadow-lg shadow-indigo-500/20 opacity-100 scale-100'
                                                            : 'bg-slate-900/50 border-slate-800 opacity-30 grayscale blur-[1px]'
                                                        }`}
                                                >
                                                    <div className={`p-3 rounded-full ${isActive ? 'bg-indigo-500 text-white' : 'bg-slate-800 text-slate-500'}`}>
                                                        <block.icon className="w-6 h-6" />
                                                    </div>
                                                    <span className={`text-sm font-semibold ${isActive ? 'text-white' : 'text-slate-500'}`}>
                                                        {block.name}
                                                    </span>

                                                    {isActive && (
                                                        <motion.div
                                                            layoutId="active-ring"
                                                            className="absolute inset-0 border-2 border-indigo-500 rounded-xl"
                                                            initial={false}
                                                            transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                                        />
                                                    )}
                                                </motion.div>
                                            )
                                        })}
                                    </div>
                                )}
                            </div>

                            {/* RIGHT SIDE: SKILLS & OPPORTUNITY */}
                            <div className="lg:col-span-4 space-y-6">
                                <div className="bg-[#0B1120] border border-slate-800 rounded-3xl p-6 shadow-2xl relative overflow-hidden group">
                                    {/* Decorative glow */}
                                    <div className={`absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br ${industry.color} opacity-20 blur-3xl`} />

                                    <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-2">
                                        <Zap className="w-5 h-5 text-yellow-400" />
                                        Skills You Sell
                                    </h3>

                                    <div className="space-y-3">
                                        {currentStage.skills.map((skill, i) => (
                                            <motion.div
                                                key={i}
                                                initial={{ x: 20, opacity: 0 }}
                                                animate={{ x: 0, opacity: 1 }}
                                                transition={{ delay: 0.3 + (i * 0.1) }}
                                                className="bg-slate-800/80 p-4 rounded-xl border border-slate-700/50 hover:border-slate-500 transition-colors flex items-center gap-4"
                                            >
                                                <div className="p-2 bg-blue-500/10 rounded-lg text-blue-400 shrink-0">
                                                    <skill.icon className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <p className="font-semibold text-slate-200 text-sm">{skill.name}</p>
                                                    <span className="text-[10px] uppercase tracking-widest text-slate-500 font-bold">In High Demand</span>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>

                                    <div className="mt-8">
                                        <p className="text-xs text-slate-500 text-center mb-3">Master these skills to win this client</p>
                                        <button className="w-full py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold transition-colors shadow-lg">
                                            I Can Do This
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Navigation Hints */}
            <div className="mt-8 flex justify-between text-slate-500 text-sm font-medium">
                <button
                    disabled={activeStep === 'lead'}
                    onClick={() => setActiveStep(activeStep === 'offer' ? 'funnel' : 'lead')}
                    className={`flex items-center hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
                >
                    <ArrowLeft className="w-4 h-4 mr-2" /> Previous Step
                </button>
                <button
                    disabled={activeStep === 'offer'}
                    onClick={() => setActiveStep(activeStep === 'lead' ? 'funnel' : 'offer')}
                    className={`flex items-center hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors`}
                >
                    Next Step <ArrowRight className="w-4 h-4 ml-2" />
                </button>
            </div>
        </div>
    );
};

export default BusinessModelViz;
