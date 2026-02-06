import React, { useState, useEffect, useRef } from 'react';
import { motion, Reorder, AnimatePresence } from 'framer-motion';
import { GripVertical, Plus, Trash2, ArrowDown, ExternalLink, RefreshCw, ChevronDown, MousePointer, Mail, Calendar, Video, Clock, MapPin, Search, ThumbsUp, MessageCircle, Star, Play, Upload, Image as ImageIcon, Calculator, DollarSign, Users, Target, MousePointerClick, TrendingUp } from 'lucide-react';
import { MASTER_BLOCKS, industries } from '../data';

// Combine all blocks for the picker
const ALL_BLOCKS = [
    { ...MASTER_BLOCKS.lead[0], type: 'lead', title: 'TRAFFIC' },
    ...MASTER_BLOCKS.lead.map(b => ({ ...b, type: 'lead', title: 'TRAFFIC' })),
    ...MASTER_BLOCKS.funnel.map(b => ({ ...b, type: 'funnel', title: 'FUNNEL' })),
    ...MASTER_BLOCKS.offer.map(b => ({ ...b, type: 'offer', title: 'OFFER' }))
];

// Deduplicate by ID
const UNIQUE_BLOCKS = Array.from(new Map(ALL_BLOCKS.map(item => [item.id, item])).values());

// --- CALCULATOR SIMULATOR ---
const SimulatorPanel = () => {
    // State for the "New Reality" simulator
    const [traffic, setTraffic] = useState(1000);
    const [optIn, setOptIn] = useState(25); // %
    const [closeRate, setCloseRate] = useState(20); // %
    const [price, setPrice] = useState(1500);

    // Derived Logic
    const leads = Math.floor(traffic * (optIn / 100));
    const sales = Math.floor(leads * (closeRate / 100));
    const revenue = sales * price;

    // Baseline (Static Comparison - "The Old Way")
    const baseTraffic = 1000;
    const baseOptIn = 5;
    const baseClose = 10;
    const basePrice = 1000;
    const baseRevenue = Math.floor(baseTraffic * (baseOptIn / 100) * (baseClose / 100)) * basePrice;

    const improvement = revenue - baseRevenue;

    return (
        <div className="w-full bg-[#0B1120] border-b border-slate-800 p-6 sticky top-0 z-40 shadow-2xl">
            <div className="max-w-[1600px] mx-auto flex flex-col xl:flex-row gap-8 items-center justify-between">

                {/* CONTROLS (Sliders) */}
                <div className="flex-1 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

                    {/* Traffic Control */}
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-blue-500/50 transition-colors">
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Users className="w-4 h-4 text-blue-500" /> Traffic Hits
                            </label>
                            <span className="text-blue-400 font-bold font-mono text-lg">{traffic.toLocaleString()}</span>
                        </div>
                        <input
                            type="range" min="500" max="10000" step="100"
                            value={traffic} onChange={(e) => setTraffic(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500"
                        />
                    </div>

                    {/* Opt-in Rate */}
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-purple-500/50 transition-colors">
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Target className="w-4 h-4 text-purple-500" /> Opt-in Rate
                            </label>
                            <span className="text-purple-400 font-bold font-mono text-lg">{optIn}%</span>
                        </div>
                        <input
                            type="range" min="1" max="80" step="1"
                            value={optIn} onChange={(e) => setOptIn(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-purple-500"
                        />
                    </div>

                    {/* Close Rate */}
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-orange-500/50 transition-colors">
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <Star className="w-4 h-4 text-orange-500" /> Close Rate
                            </label>
                            <span className="text-orange-400 font-bold font-mono text-lg">{closeRate}%</span>
                        </div>
                        <input
                            type="range" min="1" max="100" step="1"
                            value={closeRate} onChange={(e) => setCloseRate(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-orange-500"
                        />
                    </div>

                    {/* Price */}
                    <div className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 hover:border-green-500/50 transition-colors">
                        <div className="flex justify-between mb-2">
                            <label className="text-xs font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                                <DollarSign className="w-4 h-4 text-green-500" /> Offer Price
                            </label>
                            <span className="text-green-400 font-bold font-mono text-lg">${price}</span>
                        </div>
                        <input
                            type="range" min="100" max="10000" step="100"
                            value={price} onChange={(e) => setPrice(Number(e.target.value))}
                            className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-green-500"
                        />
                    </div>
                </div>

                {/* RESULTS DASHBOARD */}
                <div className="flex gap-6 items-center border-l border-slate-700 pl-8">

                    {/* Visual Funnel Metrics */}
                    <div className="flex flex-col gap-1 text-right">
                        <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Pipeline Health</div>
                        <div className="flex items-center gap-4 justify-end">
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold text-white">{leads}</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Leads</span>
                            </div>
                            <div className="w-px h-8 bg-slate-700" />
                            <div className="flex flex-col items-center">
                                <span className="text-xl font-bold text-white">{sales}</span>
                                <span className="text-[10px] text-slate-500 uppercase font-bold">Sales</span>
                            </div>
                        </div>
                    </div>

                    {/* BIG REVENUE BOX */}
                    <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-500/30 p-4 rounded-2xl min-w-[280px] shadow-lg shadow-green-900/20 relative group overflow-hidden">
                        <div className="absolute top-0 right-0 p-2 opacity-10 group-hover:opacity-20 transition-opacity">
                            <DollarSign className="w-20 h-20 text-green-400" />
                        </div>

                        <div className="text-xs font-bold text-green-400 uppercase tracking-widest mb-1">Projected Revenue</div>
                        <div className="text-4xl font-black text-white tracking-tight mb-2">
                            ${revenue.toLocaleString()}
                        </div>

                        {improvement > 0 ? (
                            <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded bg-green-500/20 border border-green-500/30 text-green-300 text-xs font-bold">
                                <TrendingUp className="w-3 h-3" />
                                +${improvement.toLocaleString()} vs Baseline
                            </div>
                        ) : (
                            <div className="text-slate-500 text-xs font-bold">No change vs Baseline</div>
                        )}
                    </div>

                </div>
            </div>
        </div>
    );
};

// --- VISUALIZER COMPONENT ---
const BlockVisualizer = ({ blockId, type, compact = false, image, onUpload }) => {
    const fileInputRef = useRef(null);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && onUpload) {
            const url = URL.createObjectURL(file);
            onUpload(url);
        }
    };

    const triggerUpload = () => {
        fileInputRef.current?.click();
    };

    // If user uploaded an image, show that
    if (image) {
        return (
            <div className={`relative overflow-hidden rounded-md border border-slate-600 bg-slate-900 group ${compact ? 'w-20 aspect-square' : 'w-full aspect-video'}`}>
                <img src={image} alt="Step" className="w-full h-full object-cover" />
                {!compact && (
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                        <button
                            onClick={triggerUpload}
                            className="bg-slate-800 text-white p-2 rounded-full hover:bg-blue-600 transition-colors"
                        >
                            <Upload className="w-4 h-4" />
                        </button>
                    </div>
                )}
                <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
            </div>
        );
    }

    // Default Visuals
    const renderVisual = () => {
        switch (blockId) {
            case 'fb_ads':
                return (
                    <div className="w-full bg-white text-black p-2 rounded-md flex flex-col gap-1 shadow-sm border border-slate-200">
                        <div className="flex items-center gap-1 mb-1">
                            <div className="w-4 h-4 rounded-full bg-blue-600" />
                            <div className="h-2 w-16 bg-slate-200 rounded-full" />
                        </div>
                        <div className="w-full aspect-video bg-blue-100 rounded-sm relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center text-[8px] text-blue-500 font-bold uppercase">Sponsored</div>
                        </div>
                        <div className="h-2 w-full bg-slate-100 rounded-full mt-1" />
                        <div className="w-full bg-blue-100 text-blue-600 text-[6px] font-bold py-1 text-center rounded mt-1">Learn More</div>
                    </div>
                );
            case 'instagram':
                return (
                    <div className="w-full bg-black text-white p-2 rounded-md flex flex-col gap-1 border border-slate-800 shadow-sm relative overflow-hidden">
                        <div className="flex justify-between items-center mb-1 relative z-10">
                            <div className="w-3 h-3 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600" />
                            <div className="h-1 w-8 bg-slate-700 rounded-full" />
                        </div>
                        <div className="w-full aspect-[9/16] bg-slate-800 rounded-sm relative mb-1 z-10 border border-slate-700">
                            <Video className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        </div>
                    </div>
                );
            case 'landing_page':
                return (
                    <div className="w-full bg-white border border-slate-200 rounded-md overflow-hidden flex flex-col shadow-sm">
                        <div className="bg-slate-100 p-1 flex gap-0.5 border-b border-slate-200">
                            <div className="w-1 h-1 rounded-full bg-red-400" />
                            <div className="w-1 h-1 rounded-full bg-yellow-400" />
                        </div>
                        <div className="p-2 flex flex-col items-center gap-1">
                            <div className="h-1 w-full bg-slate-200 rounded-full" />
                            <div className="px-1.5 py-0.5 bg-blue-500 text-white text-[5px] font-bold rounded">Button</div>
                        </div>
                    </div>
                );
            default:
                return (
                    <div className="w-full bg-slate-800 text-slate-500 p-2 rounded-md flex flex-col items-center justify-center gap-1 border border-slate-700 border-dashed">
                        {compact ? <div className="text-[8px] font-bold uppercase">{blockId.slice(0, 3)}</div> : (
                            <>
                                <ImageIcon className="w-4 h-4 opacity-50" />
                                <span className="text-[8px] font-bold uppercase">No Preview</span>
                            </>
                        )}
                    </div>
                );
        }
    };

    return (
        <div className={`relative overflow-hidden group/viz ${compact ? 'w-full' : 'w-full shadow-lg hover:shadow-xl'}`}>
            {renderVisual()}
            {!compact && onUpload && (
                <div className="absolute inset-0 bg-slate-900/80 opacity-0 group-hover/viz:opacity-100 transition-opacity flex items-center justify-center z-20">
                    <button
                        onClick={triggerUpload}
                        className="flex flex-col items-center gap-1 text-white hover:text-blue-400 transition-colors"
                    >
                        <Upload className="w-5 h-5" />
                        <span className="text-[8px] font-bold uppercase tracking-widest">Upload Shot</span>
                    </button>
                    <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
                </div>
            )}
        </div>
    );
};


const CustomerJourneyBuilder = ({ industry }) => {
    // --- STATE ---
    // Section 1: Traffic (Grid)
    const [traffic, setTraffic] = useState([
        { id: '1', blockId: 'fb_ads', type: 'lead', image: null }
    ]);

    // Section 2: Funnel (Vertical Stack)
    const [funnel, setFunnel] = useState([
        { id: '2', blockId: 'landing_page', type: 'funnel', image: null },
        { id: '3', blockId: 'booking', type: 'funnel', image: null },
    ]);

    // Section 3: Offer (Grouped)
    const [offer, setOffer] = useState([
        { id: '4', blockId: 'call', type: 'offer', image: null },
    ]);

    const [pickerOpen, setPickerOpen] = useState(false);
    const [activeSection, setActiveSection] = useState(null); // 'traffic', 'funnel', 'offer'
    const [activePreset, setActivePreset] = useState(null);

    useEffect(() => {
        if (industry) loadIndustryPreset(industry);
    }, [industry]);

    const loadIndustryPreset = (ind) => {
        setActivePreset(ind);
        let idCounter = Date.now();

        const newTraffic = [];
        const newFunnel = [];
        const newOffer = [];

        if (ind.model) {
            ind.model.lead.activeBlocks.forEach(bid => newTraffic.push({ id: String(idCounter++), blockId: bid, type: 'lead' }));
            ind.model.funnel.activeBlocks.forEach(bid => newFunnel.push({ id: String(idCounter++), blockId: bid, type: 'funnel' }));
            ind.model.offer.activeBlocks.forEach(bid => newOffer.push({ id: String(idCounter++), blockId: bid, type: 'offer' }));
        }
        setTraffic(newTraffic);
        setFunnel(newFunnel);
        setOffer(newOffer);
    };

    const handleAddBlock = (blockId, type) => {
        // Map type to section just in case, though we pass section explicitly roughly
        const newBlock = { id: Date.now().toString(), blockId, type, image: null };

        if (activeSection === 'traffic') setTraffic(prev => [...prev, newBlock]);
        if (activeSection === 'funnel') setFunnel(prev => [...prev, newBlock]);
        if (activeSection === 'offer') setOffer(prev => [...prev, newBlock]);

        setPickerOpen(false);
    };

    const handleDelete = (id, section) => {
        if (section === 'traffic') setTraffic(traffic.filter(b => b.id !== id));
        if (section === 'funnel') setFunnel(funnel.filter(b => b.id !== id));
        if (section === 'offer') setOffer(offer.filter(b => b.id !== id));
    };

    const handleUpload = (id, section, url) => {
        const updateList = (list) => list.map(item => item.id === id ? { ...item, image: url } : item);
        if (section === 'traffic') setTraffic(updateList(traffic));
        if (section === 'funnel') setFunnel(updateList(funnel));
        if (section === 'offer') setOffer(updateList(offer));
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex flex-col">
            <SimulatorPanel />

            <div className="flex-1 p-4 md:p-8 max-w-[1600px] mx-auto w-full flex flex-col items-center">

                {/* PRESETS */}
                <div className="flex flex-wrap justify-center gap-3 mb-12">
                    {industries.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => loadIndustryPreset(ind)}
                            className={`flex items-center gap-2 px-3 py-1.5 rounded-full border transition-all text-xs font-bold uppercase tracking-wider
                            ${activePreset?.id === ind.id ? 'bg-blue-600 border-blue-500 text-white' : 'bg-slate-800 border-slate-700 text-slate-500 hover:text-white'}`}
                        >
                            {ind.name}
                        </button>
                    ))}
                    <button
                        onClick={() => { setActivePreset(null); setTraffic([]); setFunnel([]); setOffer([]); }}
                        className="px-3 py-1.5 rounded-full border border-slate-700 text-slate-500 hover:text-white hover:bg-slate-800 text-xs font-bold uppercase tracking-wider"
                    >
                        Clear All
                    </button>
                </div>

                {/* --- MAIN BUILDER GRID --- */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 w-full items-start">

                    {/* COL 1: TRAFFIC (Grid Layout) */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
                                <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest">Traffic Source</h3>
                            </div>
                            <span className="text-xs font-mono text-slate-500">{traffic.length} Sources</span>
                        </div>

                        <div className="bg-slate-900/50 border border-slate-800 rounded-3xl p-6 min-h-[400px]">
                            <Reorder.Group axis="y" values={traffic} onReorder={setTraffic} className="grid grid-cols-2 gap-4">
                                {traffic.map(item => (
                                    <Reorder.Item key={item.id} value={item} className="relative group">
                                        <div className="bg-slate-800 rounded-xl p-3 border border-slate-700 hover:border-blue-500 transition-colors shadow-lg relative">
                                            <div className="flex justify-between items-start mb-2">
                                                <span className="text-[10px] font-bold text-slate-400 uppercase">{UNIQUE_BLOCKS.find(b => b.id === item.blockId)?.name}</span>
                                                <GripVertical className="w-4 h-4 text-slate-600 cursor-grab active:cursor-grabbing" />
                                            </div>
                                            <BlockVisualizer
                                                blockId={item.blockId}
                                                type="lead"
                                                image={item.image}
                                                onUpload={(url) => handleUpload(item.id, 'traffic', url)}
                                            />
                                            <button onClick={() => handleDelete(item.id, 'traffic')} className="absolute -top-2 -right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110">
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </Reorder.Item>
                                ))}

                                <button
                                    onClick={() => { setActiveSection('traffic'); setPickerOpen(true); }}
                                    className="aspect-[4/3] rounded-xl border-2 border-dashed border-slate-700 flex flex-col items-center justify-center gap-2 text-slate-500 hover:text-blue-400 hover:border-blue-500 hover:bg-slate-800 transition-all"
                                >
                                    <Plus className="w-6 h-6" />
                                    <span className="text-[9px] font-bold uppercase">Add Source</span>
                                </button>
                            </Reorder.Group>
                        </div>
                    </div>

                    {/* COL 2: FUNNEL (Vertical Stack - Chronological) */}
                    <div className="flex flex-col gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[100px] -left-6 w-8 h-0.5 bg-gradient-to-r from-blue-900 to-purple-900" />

                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]" />
                                <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest">Funnel Steps</h3>
                            </div>
                            <span className="text-xs font-mono text-slate-500">Ordered</span>
                        </div>

                        <div className="bg-[#161321]/80 border border-purple-500/20 rounded-3xl p-6 min-h-[500px] flex flex-col items-center relative">
                            {/* Line going down */}
                            <div className="absolute top-6 bottom-6 left-1/2 w-0.5 bg-slate-800 -z-10" />

                            <Reorder.Group axis="y" values={funnel} onReorder={setFunnel} className="w-full space-y-6">
                                {funnel.map((item, idx) => (
                                    <Reorder.Item key={item.id} value={item} className="relative group w-full">
                                        <div className="flex items-center gap-4">
                                            {/* Step Number */}
                                            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-700 flex items-center justify-center text-xs font-bold text-slate-500 shrink-0 z-10">
                                                {idx + 1}
                                            </div>

                                            {/* Card */}
                                            <div className="flex-1 bg-slate-900/80 border border-slate-700 p-4 rounded-xl hover:border-purple-500 transition-all shadow-xl backdrop-blur-md relative">
                                                <div className="flex justify-between items-center mb-3">
                                                    <span className="text-xs font-bold text-white tracking-wide uppercase">{UNIQUE_BLOCKS.find(b => b.id === item.blockId)?.name}</span>
                                                    <GripVertical className="w-4 h-4 text-slate-600 cursor-grab active:cursor-grabbing" />
                                                </div>

                                                <BlockVisualizer
                                                    blockId={item.blockId}
                                                    type="funnel"
                                                    image={item.image}
                                                    onUpload={(url) => handleUpload(item.id, 'funnel', url)}
                                                />

                                                <button onClick={() => handleDelete(item.id, 'funnel')} className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110 shadow-lg z-30">
                                                    <Trash2 className="w-3 h-3" />
                                                </button>
                                            </div>
                                        </div>
                                        {/* Down Arrow between steps */}
                                        {idx < funnel.length - 1 && (
                                            <div className="flex justify-center my-2">
                                                <ArrowDown className="w-4 h-4 text-slate-700" />
                                            </div>
                                        )}
                                    </Reorder.Item>
                                ))}

                                <button
                                    onClick={() => { setActiveSection('funnel'); setPickerOpen(true); }}
                                    className="w-full py-4 rounded-xl border-2 border-dashed border-slate-700/50 flex flex-col items-center justify-center gap-2 text-slate-600 hover:text-purple-400 hover:border-purple-500 hover:bg-purple-900/10 transition-all bg-slate-900/50 z-20"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span className="text-[9px] font-bold uppercase">Add Step</span>
                                </button>
                            </Reorder.Group>
                        </div>
                    </div>

                    {/* COL 3: OFFER (Grouped) */}
                    <div className="flex flex-col gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[200px] -left-6 w-8 h-0.5 bg-gradient-to-r from-purple-900 to-green-900" />

                        <div className="flex items-center justify-between px-2">
                            <div className="flex items-center gap-2">
                                <div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                <h3 className="text-sm font-black text-slate-300 uppercase tracking-widest">The Offer</h3>
                            </div>
                            <span className="text-xs font-mono text-slate-500">Goal</span>
                        </div>

                        <div className="bg-green-900/10 border border-green-500/20 rounded-3xl p-6 min-h-[300px] flex flex-col gap-4">
                            <Reorder.Group axis="y" values={offer} onReorder={setOffer} className="space-y-4">
                                {offer.map(item => (
                                    <Reorder.Item key={item.id} value={item} className="relative group">
                                        <div className="bg-[#052e16] border border-green-500/30 p-4 rounded-xl hover:border-green-400 transition-all shadow-lg relative">
                                            <div className="flex justify-between items-center mb-3">
                                                <span className="text-xs font-bold text-green-400 tracking-wide uppercase">{UNIQUE_BLOCKS.find(b => b.id === item.blockId)?.name}</span>
                                                <GripVertical className="w-4 h-4 text-green-800 cursor-grab active:cursor-grabbing" />
                                            </div>
                                            <BlockVisualizer
                                                blockId={item.blockId}
                                                type="offer"
                                                image={item.image}
                                                onUpload={(url) => handleUpload(item.id, 'offer', url)}
                                            />
                                            <button onClick={() => handleDelete(item.id, 'offer')} className="absolute -top-2 -right-2 bg-red-500 text-white p-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity transform hover:scale-110 shadow-lg">
                                                <Trash2 className="w-3 h-3" />
                                            </button>
                                        </div>
                                    </Reorder.Item>
                                ))}

                                <button
                                    onClick={() => { setActiveSection('offer'); setPickerOpen(true); }}
                                    className="w-full py-6 rounded-xl border-2 border-dashed border-green-900/50 flex flex-col items-center justify-center gap-2 text-green-800 hover:text-green-400 hover:border-green-500 hover:bg-green-900/20 transition-all bg-green-900/5"
                                >
                                    <Plus className="w-5 h-5" />
                                    <span className="text-[9px] font-bold uppercase">Add Offer Element</span>
                                </button>
                            </Reorder.Group>

                            {/* Calculator Summary */}
                            <div className="mt-8 pt-8 border-t border-green-900/30">
                                <div className="text-[10px] text-green-700 font-bold uppercase tracking-widest text-center mb-4">Simulated Outcome</div>
                                <div className="bg-[#022c22] rounded-xl p-4 border border-green-500/20 flex flex-col gap-2">
                                    <div className="flex justify-between text-xs text-green-300/50">
                                        <span>Est. Revenue</span>
                                        <span>High Confidence</span>
                                    </div>
                                    <div className="text-2xl font-black text-white text-center py-2 relative">
                                        <span className="absolute top-0 right-1/2 translate-x-12 translate-y-1 w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                        $$$
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

            </div>

            {/* BLOCK PICKER MODAL */}
            <AnimatePresence>
                {pickerOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                        onClick={() => setPickerOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }}
                            animate={{ scale: 1, y: 0 }}
                            exit={{ scale: 0.9, y: 20 }}
                            className="bg-[#0f172a] w-full max-w-4xl max-h-[85vh] overflow-y-auto rounded-3xl border border-slate-700 shadow-2xl p-8"
                            onClick={e => e.stopPropagation()}
                        >
                            <h2 className="text-2xl font-bold text-white mb-6">Add {activeSection === 'lead' ? 'Traffic' : activeSection === 'offer' ? 'Offer' : 'Funnel'} Element</h2>

                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                                {UNIQUE_BLOCKS.filter(b => {
                                    if (activeSection === 'traffic') return b.type === 'lead';
                                    if (activeSection === 'funnel') return b.type === 'funnel';
                                    if (activeSection === 'offer') return b.type === 'offer';
                                    return true;
                                }).map((block) => (
                                    <button
                                        key={block.id}
                                        onClick={() => handleAddBlock(block.id, block.type || activeSection)}
                                        className="flex flex-col items-center gap-3 p-4 bg-slate-800/50 hover:bg-slate-700 border border-slate-700 hover:border-blue-500 rounded-xl transition-all group relative overflow-hidden"
                                    >
                                        <div className="w-16 pointer-events-none group-hover:scale-110 transition-transform duration-300">
                                            <BlockVisualizer blockId={block.id} type={activeSection} compact={true} />
                                        </div>
                                        <span className="text-xs font-medium text-slate-300 group-hover:text-white text-center leading-tight">{block.name}</span>
                                    </button>
                                ))}
                            </div>

                            <button onClick={() => setPickerOpen(false)} className="absolute top-6 right-6 p-2 text-slate-500 hover:text-white hover:rotate-90 transition-all rounded-full hover:bg-slate-800">
                                <ExternalLink className="w-6 h-6 rotate-45" />
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default CustomerJourneyBuilder;
