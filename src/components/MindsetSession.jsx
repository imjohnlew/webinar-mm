import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertTriangle, XCircle, Ban, DollarSign, Users } from 'lucide-react';

const MindsetSession = () => {
    const [patientValue, setPatientValue] = useState(200);
    const [years, setYears] = useState(1);

    const calculateLTV = () => {
        // Simple logic: Cleaning (200) * 2 per year + potential major work
        // Visual aid logic: 
        // Low end: 200 (Just a cleaning)
        // High end: 20000 (Implants + Braces over 5 years)
        return patientValue * years * (patientValue > 500 ? 1 : 2); // rough multiplier for visuals
    };

    return (
        <div className="max-w-6xl mx-auto p-4 space-y-24 pb-20">

            {/* 1. The Truth - Authority Anchor */}
            <section className="text-center space-y-6 pt-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="inline-block px-4 py-1 rounded-full bg-red-500/10 text-red-500 font-bold uppercase tracking-widest text-sm"
                >
                    Session 1: The Mindset Shift
                </motion.div>
                <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight">
                    Stop Selling <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Services.</span>
                </h1>
                <p className="text-2xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
                    "If you pitch me 'video editing', I will delete your email. <br />
                    If you tell me I’m losing <span className="text-white font-bold">RM50k a month</span> because my follow-up system is broken, I will listen."
                </p>
            </section>

            {/* 2. The Framework - Failure Points */}
            <section>
                <h2 className="text-3xl font-bold text-white mb-10 text-center">The 3 Business Failure Points</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <FailureCard
                        title="Lead Failure"
                        subtitle="The Invisible Business"
                        problem="Nobody knows we exist."
                        icon={XCircle}
                        color="red"
                        delay={0.2}
                    />
                    <FailureCard
                        title="Offer Failure"
                        subtitle="The Commodity Business"
                        problem="People see us but don't care."
                        icon={Ban}
                        color="orange"
                        delay={0.4}
                    />
                    <FailureCard
                        title="Funnel Failure"
                        subtitle="The Leaky Bucket"
                        problem="People care but don't buy."
                        icon={AlertTriangle}
                        color="yellow"
                        delay={0.6}
                    />
                </div>
            </section>

            {/* 3. The Metric - LTV Calculator */}
            <section className="bg-slate-800/50 rounded-3xl p-8 md:p-12 border border-slate-700">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                        <div className="flex items-center gap-3 mb-4">
                            <div className="p-3 bg-green-500/20 rounded-xl">
                                <DollarSign className="w-8 h-8 text-green-400" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">The LTV Truth</h2>
                        </div>
                        <p className="text-slate-400 text-lg mb-8">
                            Why dental clinics can afford to pay you RM5,000/month? Because a patient isn't worth RM200.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <label className="text-sm font-bold text-slate-500 uppercase">Perceived Value (Cleaning)</label>
                                <input
                                    type="range"
                                    min="200"
                                    max="5000"
                                    step="100"
                                    value={patientValue}
                                    onChange={(e) => setPatientValue(Number(e.target.value))}
                                    className="w-full mt-2 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                                />
                                <div className="flex justify-between text-slate-400 text-sm mt-1">
                                    <span>RM200 (Cleaning)</span>
                                    <span>RM5,000 (Implants)</span>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-bold text-slate-500 uppercase">Patient Loyalty (Years)</label>
                                <input
                                    type="range"
                                    min="1"
                                    max="10"
                                    value={years}
                                    onChange={(e) => setYears(Number(e.target.value))}
                                    className="w-full mt-2 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                                />
                                <div className="flex justify-between text-slate-400 text-sm mt-1">
                                    <span>1 Year</span>
                                    <span>10 Years</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bg-black/40 rounded-2xl p-8 text-center border border-slate-700 flex flex-col items-center justify-center min-h-[300px]">
                        <span className="text-slate-500 font-semibold uppercase tracking-widest mb-4">True Customer Value</span>
                        <motion.div
                            key={patientValue * years}
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            className="text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600 font-mono"
                        >
                            RM{(patientValue * years * (patientValue > 1000 ? 1.2 : 2.5)).toLocaleString()}
                        </motion.div>
                        <p className="text-slate-400 mt-4 max-w-xs">
                            {patientValue < 1000
                                ? "Even a cleaning patient brings referrals and repeat visits."
                                : "High ticket patients build the entire business practice."}
                        </p>
                    </div>
                </div>
            </section>

        </div>
    );
};

const FailureCard = ({ title, subtitle, problem, icon: Icon, color, delay }) => {
    const colorClasses = {
        red: "from-red-500 to-pink-600 bg-red-500/10 text-red-400 border-red-500/20",
        orange: "from-orange-500 to-amber-600 bg-orange-500/10 text-orange-400 border-orange-500/20",
        yellow: "from-yellow-400 to-orange-500 bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay }}
            className={`p-6 rounded-2xl border ${colorClasses[color].split(' ').pop()} bg-slate-900/50 hover:bg-slate-800 transition-colors`}
        >
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${colorClasses[color].split(' ')[0]} p-2.5 mb-4 text-white`}>
                <Icon className="w-full h-full" />
            </div>
            <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
            <h4 className="text-md font-semibold text-slate-500 uppercase tracking-widest mb-4">{subtitle}</h4>
            <p className="text-xl text-slate-300 font-medium">"{problem}"</p>
        </motion.div>
    );
}

export default MindsetSession;
