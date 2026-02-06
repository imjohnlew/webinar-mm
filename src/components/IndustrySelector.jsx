import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { industries } from '../data';

const IndustrySelector = ({ onSelect }) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4">
            <div className="text-center mb-12">
                <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600 mb-4">
                    Choose Your Client Niche
                </h2>
                <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                    Understanding the business model is Day 1. Select an industry to see how Leads, Offers, and Funnels work together.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl">
                {industries.map((industry) => (
                    <motion.div
                        key={industry.id}
                        whileHover={{ y: -10, scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="group relative bg-slate-800/50 backdrop-blur-xl border border-slate-700 rounded-2xl p-8 cursor-pointer overflow-hidden transition-all duration-300 hover:border-slate-500 hover:shadow-2xl hover:shadow-purple-500/20"
                        onClick={() => onSelect(industry)}
                    >
                        <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

                        <div className="relative z-10">
                            <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} p-4 mb-6 shadow-lg`}>
                                <industry.icon className="w-full h-full text-white" />
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">{industry.name}</h3>
                            <p className="text-slate-400 text-sm font-medium mb-4 uppercase tracking-wider">{industry.type}</p>
                            <p className="text-slate-300 mb-6">{industry.description}</p>

                            <div className="flex items-center text-blue-400 font-semibold group-hover:translate-x-2 transition-transform duration-300">
                                Explore Model <ArrowRight className="ml-2 w-4 h-4" />
                            </div>
                        </div>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default IndustrySelector;
