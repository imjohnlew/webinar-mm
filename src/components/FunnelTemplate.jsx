import React, { useState } from 'react';
import { ArrowRight, TrendingUp, Shield } from 'lucide-react';

export const Bar = ({ w = 'w-full', h = 'h-2', color = 'bg-slate-200', className = '' }) => (
    <div className={`${h} ${w} ${color} rounded-full ${className}`} />
);

export const BrowserFrame = ({ children, url = 'yoursite.com', zoom = 1 }) => (
    <div className="rounded-xl overflow-hidden border border-slate-700 shadow-2xl">
        <div className="bg-slate-800 px-3 py-2 flex items-center gap-2">
            <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/70" />
            </div>
            <div className="flex-1 bg-slate-700 rounded px-2 py-0.5 text-[9px] text-slate-400 font-mono flex items-center gap-1 truncate">
                <Shield className="w-2.5 h-2.5 text-green-400 shrink-0" /> {url}
            </div>
        </div>
        <div style={zoom !== 1 ? { zoom } : undefined}>{children}</div>
    </div>
);

const FunnelTemplate = ({ title, description, stages, revenueData, revenueSummary }) => {
    const [activeId, setActiveId] = useState(stages[0].id);
    const [funnelView, setFunnelView] = useState(true);
    const stage = stages.find(s => s.id === activeId);

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-[1400px] flex flex-col gap-8">

                {/* Header */}
                <div className="flex items-start justify-between gap-4 flex-wrap">
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">{title}</h2>
                        <p className="text-slate-400 mt-2">{description}</p>
                    </div>
                    <button
                        onClick={() => setFunnelView(v => !v)}
                        className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm border transition-all shrink-0
                            ${funnelView
                                ? 'bg-yellow-600/20 text-yellow-400 border-yellow-500/50'
                                : 'bg-slate-800 text-slate-400 border-slate-700 hover:text-white hover:bg-slate-700'
                            }`}
                    >
                        <TrendingUp className="w-4 h-4" />
                        {funnelView ? 'Inspect a Stage' : 'Funnel Overview'}
                    </button>
                </div>

                {/* ── FUNNEL OVERVIEW ── */}
                {funnelView && (
                    <div className="overflow-x-auto pb-6 -mx-4 px-4 lg:mx-0 lg:px-0">
                        <div className="flex items-start gap-4 min-w-max">
                            {stages.map((s, i) => (
                                <React.Fragment key={s.id}>
                                    <div
                                        className="flex flex-col items-center cursor-pointer group"
                                        style={{ width: 340 }}
                                        onClick={() => { setActiveId(s.id); setFunnelView(false); }}
                                    >
                                        <div className={`w-full py-3 px-3 ${s.bg} text-white text-center rounded-xl mb-3 group-hover:brightness-110 transition-all`}>
                                            <s.icon className="w-4 h-4 mx-auto mb-1 opacity-80" />
                                            <div className="font-black text-sm leading-tight">{s.label}</div>
                                            <div className="text-[10px] opacity-70 mt-0.5">{s.sublabel}</div>
                                            {s.price && <div className="text-[10px] font-bold mt-1.5 bg-black/20 rounded px-2 py-0.5 inline-block">{s.price}</div>}
                                            {s.conversion && <div className="text-[10px] font-bold mt-1 opacity-80">{s.conversion} {s.conversionNote}</div>}
                                        </div>
                                        <BrowserFrame url={s.url || 'yoursite.com'}>
                                            {s.mockup}
                                        </BrowserFrame>
                                    </div>
                                    {i < stages.length - 1 && (
                                        <div className="flex items-start pt-24 shrink-0">
                                            <ArrowRight className="w-6 h-6 text-slate-500" />
                                        </div>
                                    )}
                                </React.Fragment>
                            ))}
                        </div>
                        <p className="text-[11px] text-slate-500 mt-5">Click any stage to inspect it in detail</p>
                    </div>
                )}

                {/* ── DETAIL VIEW ── */}
                {!funnelView && (
                <>
                    {/* Flow selector */}
                    <div className="flex items-center gap-1 overflow-x-auto pb-2 -mx-4 px-4 lg:mx-0 lg:px-0">
                        {stages.map((s, i) => (
                            <React.Fragment key={s.id}>
                                <button
                                    onClick={() => setActiveId(s.id)}
                                    className={`flex flex-col items-center gap-1.5 px-4 py-3 rounded-2xl border transition-all shrink-0 min-w-[90px]
                                        ${activeId === s.id
                                            ? `${s.bg} border-transparent text-white shadow-lg`
                                            : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:border-slate-500 hover:text-white'
                                        }`}
                                >
                                    <s.icon className="w-4 h-4" />
                                    <span className="text-xs font-bold whitespace-nowrap">{s.label}</span>
                                    <span className="text-[9px] opacity-70 whitespace-nowrap">{s.sublabel}</span>
                                </button>
                                {i < stages.length - 1 && (
                                    <ArrowRight className="w-4 h-4 text-slate-600 shrink-0" />
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Detail area */}
                    {stage && (
                        <div className="flex flex-col gap-6">

                            {/* Mockup — wider, centered, zoomed content */}
                            <div className="flex flex-col gap-3 max-w-4xl mx-auto w-full">
                                <div className={`text-xs font-bold uppercase tracking-widest ${stage.text}`}>{stage.label} — Page Mockup</div>
                                <BrowserFrame url={stage.url || 'yoursite.com'} zoom={1.65}>
                                    {stage.mockup}
                                </BrowserFrame>
                            </div>

                            {/* Info row below mockup */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                                {/* Col 1: Stage badge + description */}
                                <div className="flex flex-col gap-4">
                                    <div className="flex flex-wrap items-center gap-2">
                                        <div className={`flex items-center gap-2 px-3 py-1.5 rounded-xl border ${stage.pill}`}>
                                            <stage.icon className="w-4 h-4" />
                                            <span className="font-bold text-sm">{stage.label}</span>
                                        </div>
                                        {stage.conversion && (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl">
                                                <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                                                <span className="text-sm font-black text-white">{stage.conversion}</span>
                                                <span className="text-xs text-slate-400">{stage.conversionNote}</span>
                                            </div>
                                        )}
                                        {stage.price && (
                                            <div className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-800 border border-slate-700 rounded-xl">
                                                <span className="text-sm font-black text-green-400">{stage.price}</span>
                                            </div>
                                        )}
                                    </div>
                                    <p className="text-slate-300 text-sm leading-relaxed">{stage.description}</p>
                                    <div className="grid grid-cols-3 gap-2">
                                        {stage.metrics.map(m => (
                                            <div key={m.label} className="bg-slate-800/60 border border-slate-700 rounded-xl p-3 text-center">
                                                <div className={`text-sm font-black ${stage.text}`}>{m.value}</div>
                                                <div className="text-[9px] text-slate-500 font-bold uppercase tracking-wider mt-0.5">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Col 2+3: Key Tips (spans 2 cols) */}
                                <div className="md:col-span-2 bg-slate-800/50 border border-slate-700 rounded-2xl p-5">
                                    <div className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-3">Key Tips</div>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2.5">
                                        {stage.tips.map(tip => (
                                            <div key={tip} className="flex items-start gap-2.5">
                                                <div className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${stage.bg}`} />
                                                <span className="text-sm text-slate-300 leading-relaxed">{tip}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                            </div>
                        </div>
                    )}

                    {/* Revenue breakdown (optional) */}
                    {revenueData && revenueSummary && (
                        <div className="bg-slate-800/40 border border-slate-700 rounded-2xl p-6">
                            <div className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">{revenueSummary.title}</div>
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                {revenueData.map(r => (
                                    <div key={r.label} className="bg-slate-900/60 border border-slate-700 rounded-xl p-4">
                                        <div className={`text-xl font-black ${r.color}`}>{r.value}</div>
                                        <div className="text-xs font-bold text-slate-300 mt-1">{r.label}</div>
                                        <div className="text-[10px] text-slate-500 mt-0.5">{r.note}</div>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 pt-4 border-t border-slate-700 flex flex-wrap items-center justify-between gap-3">
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Total Revenue</div>
                                    <div className="text-3xl font-black text-green-400 mt-1">{revenueSummary.total}</div>
                                </div>
                                <div>
                                    <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">{revenueSummary.perUnitLabel}</div>
                                    <div className="text-3xl font-black text-green-300 mt-1">{revenueSummary.perUnit}</div>
                                </div>
                                <div className="text-sm text-slate-400 max-w-xs">{revenueSummary.note}</div>
                            </div>
                        </div>
                    )}
                </>
                )}

            </div>
        </div>
    );
};

export default FunnelTemplate;
