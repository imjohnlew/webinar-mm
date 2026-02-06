import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChefHat, Users, Utensils, Hammer, Zap, DollarSign, ArrowUp, ShoppingBag, X, Play, Bot } from 'lucide-react';

const TILE_SIZE = 60;

const RestaurantTycoon = () => {
    // Game State
    const [upgrades, setUpgrades] = useState({
        marketing: 0, // 0 = Hidden, 1 = Signboard
        decor: 0,     // 0 = Basic, 1 = Premium Menu/Tables
        kitchen: 0    // 0 = Slow, 1 = AI Chef
    });

    const [customers, setCustomers] = useState([]);
    const [money, setMoney] = useState(0);
    const [happyClients, setHappyClients] = useState(0);
    const [showBriefing, setShowBriefing] = useState(true);
    const [floatingTexts, setFloatingTexts] = useState([]);

    const idRef = useRef(0);

    // --- GAME LOOP ---
    useEffect(() => {
        const spawnRate = upgrades.marketing > 0 ? 1000 : 4000;

        const spawnInterval = setInterval(() => {
            const id = idRef.current++;
            setCustomers(prev => [...prev.slice(-20), { // Limit total ents
                id,
                x: 1, // Lane 1 or 2
                y: 6, // Start at street (bottom)
                state: 'walking_in',
                timer: 0,
                mood: 'neutral'
            }]);
        }, spawnRate);

        const tickParams = { ...upgrades }; // Capture current state for the loop
        const gameLoop = setInterval(() => {
            setCustomers(prev => prev.map(c => updateCustomer(c, tickParams)).filter(c => c.state !== 'gone'));
        }, 500); // Slower tick for "grid based" movement feeling

        return () => {
            clearInterval(spawnInterval);
            clearInterval(gameLoop);
        };
    }, [upgrades]);

    // --- LOGIC ---
    const updateCustomer = (c, stats) => {
        let { x, y, state, timer, mood } = c;
        let newState = state;
        let newTimer = timer + 1;
        let newMood = mood;

        // PATHFINDING LOGIC (Grid 6x7)
        // Y=6: Street
        // Y=5: Entrance/Lobby
        // Y=2-4: Dining
        // Y=0-1: Kitchen Boundary

        if (state === 'walking_in') {
            // Move Up from Street
            if (y > 4) {
                y -= 1;
            } else {
                // At Entrance (Y=4). Enter?
                if (stats.marketing > 0) {
                    newState = 'seeking_table';
                    newMood = 'hungry';
                } else {
                    // Turn around if no marketing
                    if (Math.random() > 0.3) {
                        newState = 'leaving_angry';
                        newMood = 'angry';
                    } else {
                        newState = 'seeking_table'; // Occasionally enters anyway
                    }
                }
            }
        }
        else if (state === 'seeking_table') {
            // Find a table spot (Row 2 or 3)
            if (y > 2) {
                y -= 1;
                // Spread out X
                if (c.id % 2 === 0 && x < 4) x += 1;
                if (c.id % 2 !== 0 && x > 1) x -= 1;
            } else {
                newState = 'sitting';
                newTimer = 0;
            }
        }
        else if (state === 'sitting') {
            if (newTimer > 4) { // Reading menu
                if (stats.decor > 0) {
                    newState = 'waiting_food';
                    newMood = 'waiting';
                    newTimer = 0;
                } else {
                    // Confusing menu
                    if (Math.random() > 0.5) {
                        newState = 'leaving_angry';
                        newMood = 'angry';
                    } else {
                        newState = 'waiting_food';
                        newTimer = 0;
                    }
                }
            }
        }
        else if (state === 'waiting_food') {
            const cookTime = stats.kitchen > 0 ? 2 : 8;
            if (newTimer > cookTime) {
                if (stats.kitchen > 0) {
                    newState = 'eating';
                    newMood = 'happy';
                    addMoney(99);
                } else {
                    // Too slow
                    if (newTimer > 10) {
                        newState = 'leaving_angry';
                        newMood = 'angry';
                    }
                }
            }
        }
        else if (state === 'eating') {
            if (newTimer > 4) {
                newState = 'leaving_happy';
                newMood = 'happy';
                setHappyClients(h => h + 1);
            }
        }
        else if (state === 'leaving_happy' || state === 'leaving_angry') {
            // Move down to exit
            if (y < 7) {
                y += 1;
                // Move back to center lane
                if (x < 2) x += 1;
                if (x > 3) x -= 1;
            } else {
                newState = 'gone';
            }
        }

        return { ...c, x, y, state: newState, timer: newTimer, mood: newMood };
    };

    const addMoney = (amount) => {
        setMoney(m => m + amount);
        const id = Date.now() + Math.random();
        setFloatingTexts(prev => [...prev, { id, val: `+$${amount}`, x: 50, y: 50 }]);
        setTimeout(() => {
            setFloatingTexts(prev => prev.filter(t => t.id !== id));
        }, 1000);
    };

    const toggleUpgrade = (type) => {
        setUpgrades(prev => ({ ...prev, [type]: prev[type] === 0 ? 1 : 0 }));
    };

    return (
        <div className="min-h-screen bg-slate-900 text-slate-100 font-sans overflow-hidden flex flex-col">

            {/* HUD */}
            <div className="fixed top-0 left-0 right-0 p-4 md:p-6 z-50 flex justify-between items-start pointer-events-none">
                <div className="flex gap-4 pointer-events-auto">
                    <div className="bg-slate-800 border-2 border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                        <div className="bg-green-500/20 p-2 rounded-xl">
                            <DollarSign className="text-green-400 w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Funds</div>
                            <div className="text-2xl font-black text-white font-mono">${money.toLocaleString()}</div>
                        </div>
                    </div>
                    <div className="bg-slate-800 border-2 border-slate-700 p-3 rounded-2xl shadow-xl flex items-center gap-3">
                        <div className="bg-amber-500/20 p-2 rounded-xl">
                            <Users className="text-amber-400 w-6 h-6" />
                        </div>
                        <div>
                            <div className="text-[10px] uppercase font-bold text-slate-400">Happy Clients</div>
                            <div className="text-2xl font-black text-white font-mono">{happyClients}</div>
                        </div>
                    </div>
                </div>

                <div className="pointer-events-auto">
                    <button
                        onClick={() => setShowBriefing(true)}
                        className="bg-slate-800 hover:bg-slate-700 text-white px-4 py-2 rounded-lg font-bold text-sm border border-slate-600 transition-colors"
                    >
                        Mission Briefing
                    </button>
                </div>
            </div>

            {/* MAIN GAME VIEW (ISOMETRIC-ISH) */}
            <div className="flex-1 overflow-hidden flex items-center justify-center bg-[#1e1e2e] relative perspective-[2000px]">

                {/* 3D Container */}
                <div className="relative w-[600px] h-[700px] transition-all duration-700 transform rotate-x-12 scale-90 md:scale-100">

                    {/* --- ZONE: KITCHEN (Top) --- */}
                    <div className={`absolute top-0 left-0 right-0 h-[200px] bg-slate-800 rounded-t-3xl border-4 border-slate-700 z-10 overflow-hidden transition-colors duration-500
                        ${upgrades.kitchen ? 'bg-blue-900/30 border-blue-500/50' : ''}
                    `}>
                        {/* Floor Pattern */}
                        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/checkerboard-cross.png')]" />

                        {/* Kitchen Counters */}
                        <div className="absolute top-10 left-10 right-10 h-20 bg-slate-700 rounded-lg border-b-4 border-slate-900 flex justify-around items-center">
                            <ChefHat className={`w-12 h-12 transition-all ${upgrades.kitchen ? 'text-blue-400 animate-bounce' : 'text-slate-500'}`} />
                            <Utensils className="text-slate-600 w-8 h-8" />
                            {upgrades.kitchen && <Bot className="text-blue-400 w-8 h-8 animate-pulse" />}
                        </div>

                        {/* Upgrade Holo-Indicator */}
                        {!upgrades.kitchen && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-[1px]">
                                <div className="bg-red-500/20 border border-red-500 text-red-100 px-3 py-1 rounded text-xs font-bold uppercase animate-pulse">
                                    Chef Overwhelmed
                                </div>
                            </div>
                        )}
                        <div className="absolute top-2 left-4 text-xs font-black text-slate-500 uppercase tracking-widest">Kitchen</div>
                    </div>

                    {/* --- ZONE: DINING (Middle) --- */}
                    <div className={`absolute top-[180px] left-4 right-4 h-[350px] bg-[#2a2a3b] border-x-4 border-slate-700 z-20 shadow-2xl flex flex-col items-center transition-colors duration-500
                         ${upgrades.decor ? 'bg-[#3b3b4f] border-green-500/30' : ''}
                    `}>
                        {/* Tables */}
                        <div className="grid grid-cols-2 gap-16 mt-16">
                            {[1, 2, 3, 4].map(i => (
                                <div key={i} className={`w-24 h-24 rounded-2xl flex items-center justify-center relative transition-all duration-500
                                    ${upgrades.decor ? 'bg-amber-900/40 border-2 border-amber-700' : 'bg-slate-700 border-2 border-slate-600'}
                                `}>
                                    <div className="w-16 h-16 bg-black/20 rounded-full" />
                                    {/* Chairs */}
                                    <div className="absolute -top-2 w-8 h-8 bg-slate-800 rounded-full" />
                                    <div className="absolute -bottom-2 w-8 h-8 bg-slate-800 rounded-full" />
                                </div>
                            ))}
                        </div>

                        {/* Upgrade Overlay */}
                        {!upgrades.decor && (
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="text-slate-500 text-xs font-mono bg-black/50 px-2 py-1 rounded">No Menu System</div>
                            </div>
                        )}
                        <div className="absolute top-2 left-4 text-xs font-black text-slate-500 uppercase tracking-widest">Dining Hall</div>
                    </div>

                    {/* --- ZONE: STREET (Bottom) --- */}
                    <div className={`absolute bottom-0 left-[-20px] right-[-20px] h-[180px] bg-[#1a1a1a] border-t-8 border-slate-600 transform perspective-[500px] rotate-x-12 z-30 flex justify-center items-center transition-all duration-500
                         ${upgrades.marketing ? 'border-amber-500' : ''}
                    `}>
                        <div className="w-full h-full flex justify-around items-center opacity-30">
                            {[1, 2, 3].map(i => <div key={i} className="w-4 h-24 bg-white transform skew-x-12" />)}
                        </div>

                        {/* Neon Sign */}
                        {upgrades.marketing ? (
                            <div className="absolute -top-12 bg-black border-4 border-amber-500 px-6 py-2 rounded-xl shadow-[0_0_50px_rgba(245,158,11,0.6)] animate-pulse">
                                <div className="text-amber-500 font-black text-2xl tracking-tighter uppercase drop-shadow-[0_0_10px_rgba(245,158,11,1)]">
                                    OPEN
                                </div>
                            </div>
                        ) : (
                            <div className="absolute -top-8 bg-slate-800 px-4 py-2 rounded text-slate-500 font-bold text-xs uppercase border border-slate-600">
                                Hidden in Alley
                            </div>
                        )}
                        <div className="absolute bottom-2 text-xs font-black text-slate-700 uppercase tracking-widest">Main Street</div>
                    </div>


                    {/* --- CUSTOMERS RENDERING --- */}
                    <AnimatePresence>
                        {customers.map(c => {
                            // Map Grid Coordinates to Pixels
                            // X (0-5) -> Width
                            // Y (0-7) -> Height
                            const left = 50 + (c.x - 0.5) * 80;
                            const top = 650 - (c.y * 80);

                            return (
                                <motion.div
                                    key={c.id}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        left: left,
                                        top: top,
                                    }}
                                    exit={{ opacity: 0, scale: 0 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute z-40 flex flex-col items-center"
                                >

                                    <div className={`w-8 h-8 rounded-full border-2 shadow-lg flex items-center justify-center text-xs transition-colors duration-300 relative
                                        ${c.mood === 'happy' ? 'bg-green-500 border-green-300' :
                                            c.mood === 'angry' ? 'bg-red-500 border-red-300' :
                                                c.mood === 'waiting' ? 'bg-amber-500 border-amber-300' :
                                                    'bg-white border-slate-300'
                                        }
                                    `}>
                                        {c.mood === 'happy' && '😋'}
                                        {c.mood === 'angry' && '🤬'}
                                        {c.mood === 'waiting' && '🕑'}
                                        {c.mood === 'hungry' && '🤔'}
                                        {c.mood === 'neutral' && '😐'}

                                        {/* Action Icon Bubble */}
                                        {c.state === 'eating' && (
                                            <div className="absolute -top-6 bg-white p-1 rounded-full shadow-sm text-[10px]">🍕</div>
                                        )}
                                        {c.state === 'waiting_food' && (
                                            <div className="absolute -top-6 bg-white p-1 rounded-full shadow-sm text-[10px]">⏳</div>
                                        )}
                                    </div>
                                    <div className="w-6 h-2 bg-black/20 rounded-full blur-[2px] mt-[-2px]" />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                    {/* Floating Money Text */}
                    <AnimatePresence>
                        {floatingTexts.map(t => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 1, y: 300, x: 250 }} // Approximate center
                                animate={{ opacity: 0, y: 100 }}
                                exit={{ opacity: 0 }}
                                className="absolute z-50 text-2xl font-black text-green-400 pointer-events-none drop-shadow-md"
                            >
                                {t.val}
                            </motion.div>
                        ))}
                    </AnimatePresence>

                </div>
            </div>

            {/* --- BUILD MENU (BOTTOM) --- */}
            <div className="bg-slate-900 border-t border-slate-800 p-6 pb-12 z-50">
                <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">

                    {/* UPGRADE 1: TRAFFIC */}
                    <button
                        onClick={() => toggleUpgrade('marketing')}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 hover:scale-105
                            ${upgrades.marketing
                                ? 'bg-amber-500/10 border-amber-500 shadow-[0_0_20px_rgba(245,158,11,0.2)]'
                                : 'bg-slate-800 border-slate-700 hover:border-slate-500'}
                        `}
                    >
                        <div className={`p-3 rounded-full ${upgrades.marketing ? 'bg-amber-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
                            <Zap size={24} />
                        </div>
                        <div className="text-center">
                            <h3 className={`font-black uppercase text-sm ${upgrades.marketing ? 'text-amber-500' : 'text-slate-400'}`}>
                                {upgrades.marketing ? 'Neon Sign Active' : 'Install Sign'}
                            </h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                                {upgrades.marketing ? '+300% Traffic' : 'Attracts Leads'}
                            </p>
                        </div>
                    </button>

                    {/* UPGRADE 2: OFFER */}
                    <button
                        onClick={() => toggleUpgrade('decor')}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 hover:scale-105
                            ${upgrades.decor
                                ? 'bg-green-500/10 border-green-500 shadow-[0_0_20px_rgba(34,197,94,0.2)]'
                                : 'bg-slate-800 border-slate-700 hover:border-slate-500'}
                        `}
                    >
                        <div className={`p-3 rounded-full ${upgrades.decor ? 'bg-green-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
                            <ShoppingBag size={24} />
                        </div>
                        <div className="text-center">
                            <h3 className={`font-black uppercase text-sm ${upgrades.decor ? 'text-green-500' : 'text-slate-400'}`}>
                                {upgrades.decor ? 'Menu Optimized' : 'Fix Menu'}
                            </h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                                {upgrades.decor ? 'High Conversion' : 'Reduces Bounce'}
                            </p>
                        </div>
                    </button>

                    {/* UPGRADE 3: FUNNEL */}
                    <button
                        onClick={() => toggleUpgrade('kitchen')}
                        className={`group relative p-4 rounded-xl border-2 transition-all duration-300 flex flex-col items-center gap-2 hover:scale-105
                            ${upgrades.kitchen
                                ? 'bg-blue-500/10 border-blue-500 shadow-[0_0_20px_rgba(59,130,246,0.2)]'
                                : 'bg-slate-800 border-slate-700 hover:border-slate-500'}
                        `}
                    >
                        <div className={`p-3 rounded-full ${upgrades.kitchen ? 'bg-blue-500 text-black' : 'bg-slate-700 text-slate-400'}`}>
                            <ChefHat size={24} />
                        </div>
                        <div className="text-center">
                            <h3 className={`font-black uppercase text-sm ${upgrades.kitchen ? 'text-blue-500' : 'text-slate-400'}`}>
                                {upgrades.kitchen ? 'AI Chef Active' : 'Hire Waiter'}
                            </h3>
                            <p className="text-[10px] text-slate-500 uppercase tracking-wider mt-1">
                                {upgrades.kitchen ? 'Instant Service' : 'Stops Churn'}
                            </p>
                        </div>
                    </button>

                </div>
            </div>

            {/* --- BRIEFING MODAL --- */}
            <AnimatePresence>
                {showBriefing && (
                    <motion.div
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
                    >
                        <motion.div
                            initial={{ scale: 0.9, y: 20 }} animate={{ scale: 1, y: 0 }}
                            className="bg-slate-900 border border-slate-700 p-8 rounded-3xl max-w-lg w-full text-center shadow-2xl relative overflow-hidden"
                        >
                            <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-amber-500 via-green-500 to-blue-500" />
                            <ChefHat size={48} className="text-amber-500 mx-auto mb-4" />

                            <h2 className="text-3xl font-black text-white mb-2 uppercase">Tiny Restaurant Tycoon</h2>
                            <p className="text-slate-400 mb-8 font-mono text-sm">SIMULATION MODE: ACTIVE</p>

                            <p className="text-lg text-slate-300 mb-8 font-serif leading-relaxed">
                                "The food is 5-stars. The business is 0-stars. <br />
                                <strong className="text-white">Build the systems</strong> to save Dr. Lim's restaurant."
                            </p>

                            <div className="grid grid-cols-1 gap-2 text-left mb-8">
                                <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
                                    <Zap size={16} className="text-amber-500" /> <span className="text-sm">Install Sign = Get Traffic</span>
                                </div>
                                <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
                                    <ShoppingBag size={16} className="text-green-500" /> <span className="text-sm">Fix Menu = Get Orders</span>
                                </div>
                                <div className="bg-slate-800 p-3 rounded-lg flex items-center gap-3">
                                    <ChefHat size={16} className="text-blue-500" /> <span className="text-sm">Hire AI = Get Revenue</span>
                                </div>
                            </div>

                            <button
                                onClick={() => setShowBriefing(false)}
                                className="w-full py-4 bg-white text-black font-black uppercase tracking-widest rounded-xl hover:bg-slate-200 transition-colors"
                            >
                                Start Building
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    );
};

export default RestaurantTycoon;
