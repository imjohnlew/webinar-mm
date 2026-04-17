import React, { useState } from 'react';
import { Tag, Video, Play, Trophy, MessageCircle } from 'lucide-react';
import LowTicketFunnel from './LowTicketFunnel';
import WebinarFunnel from './WebinarFunnel';
import VslFunnel from './VslFunnel';
import ChallengeFunnel from './ChallengeFunnel';
import MessengerFunnel from './MessengerFunnel';

const FUNNELS = [
    { id: 'low-ticket',  label: 'Low-Ticket',  sublabel: 'Product Funnel',      icon: Tag,           component: LowTicketFunnel },
    { id: 'webinar',     label: 'Webinar',      sublabel: 'Live Training',        icon: Video,         component: WebinarFunnel },
    { id: 'vsl',         label: 'VSL',          sublabel: 'Video Sales Letter',   icon: Play,          component: VslFunnel },
    { id: 'challenge',   label: 'Challenge',    sublabel: '5-Day Challenge',      icon: Trophy,        component: ChallengeFunnel },
    { id: 'messenger',   label: 'Messenger',    sublabel: 'DM Funnel',            icon: MessageCircle, component: MessengerFunnel },
];

const FunnelHub = () => {
    const [activeId, setActiveId] = useState('low-ticket');
    const active = FUNNELS.find(f => f.id === activeId);

    return (
        <div className="w-full flex flex-col">

            {/* Tab selector */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0 mb-2">
                {FUNNELS.map(f => (
                    <button
                        key={f.id}
                        onClick={() => setActiveId(f.id)}
                        className={`flex flex-col items-center gap-1.5 px-5 py-3 rounded-2xl border transition-all shrink-0 min-w-[110px]
                            ${activeId === f.id
                                ? 'bg-blue-600 border-transparent text-white shadow-lg shadow-blue-900/30'
                                : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                            }`}
                    >
                        <f.icon className="w-4 h-4" />
                        <span className="text-xs font-bold whitespace-nowrap">{f.label}</span>
                        <span className="text-[9px] opacity-70 whitespace-nowrap">{f.sublabel}</span>
                    </button>
                ))}
            </div>

            {/* Render active funnel — key resets internal state on switch */}
            {active && <active.component key={active.id} />}

        </div>
    );
};

export default FunnelHub;
