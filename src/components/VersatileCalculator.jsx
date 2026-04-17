import React, { useState } from 'react';
import { Target, Calendar, Star, DollarSign, Users, Eye, EyeOff, MonitorPlay, LayoutTemplate, PieChart, Info, Zap, Pencil, ChevronDown } from 'lucide-react';

const LABEL_OPTIONS = {
    trafficLabel: ['Landing Page Views', 'Video Views'],
    optInRateLabel: ['Opt-in Rate', 'Message Rate'],
    showUpRateLabel: ['Show Up Rate', 'Appointment Rate', 'Positive Reply'],
    attendeesLabel: ['Attendees', 'Appointments', 'Potential'],
};

const DEFAULT_LABELS = {
    trafficLabel: 'Landing Page Views',
    optInRateLabel: 'Message Rate',
    showUpRateLabel: 'Appointment Rate',
    attendeesLabel: 'Appointments',
};

const LabelDropdown = ({ value, options, onChange, color = 'text-slate-300' }) => (
    <div className="relative">
        <select
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className={`appearance-none bg-slate-900 border border-slate-700 ${color} text-xs font-bold rounded-lg pl-3 pr-7 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer hover:bg-slate-800 transition-colors`}
        >
            {options.map(o => <option key={o} value={o}>{o}</option>)}
        </select>
        <ChevronDown className="w-3 h-3 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500" />
    </div>
);

const Tooltip = ({ content }) => (
    <div className="relative group/tip inline-flex items-center cursor-help ml-1">
        <Info className="w-3 h-3 text-slate-600 hover:text-slate-300 transition-colors" />
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-2 bg-slate-950 border border-slate-600 rounded-lg text-[11px] text-slate-200 opacity-0 group-hover/tip:opacity-100 transition-opacity duration-200 pointer-events-none z-50 shadow-xl whitespace-nowrap">
            {content}
            <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-slate-600" />
        </div>
    </div>
);

const InputField = ({ label, value, onChange, prefix = '', suffix = '', icon: Icon, color = 'text-slate-400', metric, metricLabel, metricColor = 'text-white', subMetric, tooltip, calcBreakdown }) => (
    <div className="flex flex-col items-center gap-4">
        <div className="flex flex-col gap-1 w-32">
            <label className={`text-[10px] font-bold uppercase tracking-widest flex items-center gap-1.5 ${color} mb-1`}>
                <Icon className="w-3 h-3" /> {label}
                {tooltip && <Tooltip content={tooltip} />}
            </label>
            <div className="relative group w-full">
                <input
                    type="number"
                    value={value}
                    onChange={(e) => onChange(Number(e.target.value))}
                    className="w-full bg-slate-900 border border-slate-700 rounded-xl px-3 py-3 text-lg font-mono font-bold text-white focus:border-blue-500 focus:outline-none transition-all text-right pr-8 [&::-webkit-inner-spin-button]:appearance-none"
                />
                {prefix && <span className="absolute left-3 top-3.5 text-sm text-slate-500 font-mono pointer-events-none">{prefix}</span>}
                {suffix && <span className="absolute right-3 top-3.5 text-sm text-slate-500 font-mono pointer-events-none">{suffix}</span>}
            </div>
        </div>
        {metric !== undefined && (
            <div className="flex flex-col items-center justify-start min-h-[4rem]">
                <span className={`text-3xl font-black ${metricColor} leading-none mb-1`}>
                    {typeof metric === 'number' ? metric.toLocaleString() : metric}
                </span>
                <span className="text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1 text-center">
                    {metricLabel}
                </span>
                {calcBreakdown && (
                    <span className="text-[11px] text-slate-400 font-mono text-center leading-tight mt-0.5">
                        {calcBreakdown}
                    </span>
                )}
                {subMetric && (
                    <div className="text-sm font-black whitespace-nowrap mt-1">
                        {subMetric}
                    </div>
                )}
            </div>
        )}
    </div>
);

const Arrow = () => (
    <div className="text-slate-700 font-light text-2xl lg:text-xl lg:mt-8 flex items-center justify-center">
        <span className="lg:hidden">↓</span><span className="hidden lg:inline">→</span>
    </div>
);

const FunnelRow = ({ title, values, handlers, metrics, comparisons = {}, isProjected = false, presetsNode, directMode, directLeadsValue, setDirectLeads, onToggleDirectMode, labels }) => {
    const leadsBreakdown = directMode ? null : `${values.traffic.toLocaleString()} × ${values.optIn}% = ${metrics.leads.toLocaleString()}`;
    const attendeesBreakdown = `${metrics.leads.toLocaleString()} × ${values.apptRate}% = ${metrics.appointments.toLocaleString()}`;
    const salesBreakdown = `${metrics.appointments.toLocaleString()} × ${values.closeRate}% = ${metrics.sales.toLocaleString()}`;
    const revenueBreakdown = `${metrics.sales.toLocaleString()} × RM ${values.price.toLocaleString()} = RM ${metrics.revenue.toLocaleString()}`;

    return (
        <div className={`w-full lg:w-max p-4 rounded-2xl border ${isProjected ? 'bg-slate-900/50 border-blue-500/30' : 'bg-slate-800/30 border-slate-700/50'}`}>
            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                <div className={`text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded ${isProjected ? 'bg-blue-600 text-white' : 'bg-slate-700 text-slate-400'}`}>
                    {title}
                </div>
                <div className="flex items-center gap-3">
                    <button
                        onClick={onToggleDirectMode}
                        className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg font-bold text-xs transition-all border whitespace-nowrap
                            ${directMode
                                ? 'bg-yellow-600/20 text-yellow-400 border-yellow-500/50 hover:bg-yellow-600/30'
                                : 'bg-slate-800 text-slate-500 border-slate-700 hover:text-white hover:bg-slate-700'
                            }`}
                    >
                        <Zap className="w-3 h-3" />
                        {directMode ? 'Direct Mode On' : 'Direct Mode'}
                    </button>
                    {presetsNode && <div>{presetsNode}</div>}
                </div>
            </div>

            <div className="flex flex-col lg:flex-row items-center lg:items-start justify-between gap-4 lg:gap-4 pb-4 px-4 w-full lg:min-w-[1000px]">
                <InputField
                    label="Ad Spend"
                    value={values.adSpend}
                    onChange={handlers.setAdSpend}
                    prefix="RM "
                    icon={MonitorPlay}
                    color={isProjected ? "text-blue-400" : "text-slate-500"}
                    metric={undefined}
                    metricLabel=""
                />

                <Arrow />

                {directMode ? (
                    <InputField
                        label="Leads (Direct)"
                        value={directLeadsValue}
                        onChange={setDirectLeads}
                        icon={Target}
                        color={isProjected ? "text-purple-400" : "text-slate-500"}
                        metric={`RM ${metrics.cpl.toFixed(2)}`}
                        metricLabel="CPL"
                        metricColor="text-yellow-400"
                        calcBreakdown={`RM ${values.adSpend.toLocaleString()} ÷ ${directLeadsValue} = RM ${metrics.cpl.toFixed(2)}`}
                        subMetric={comparisons.leadsDiff ? (
                            <span className={comparisons.leadsDiff > 0 ? "text-green-400" : "text-red-400"}>
                                {comparisons.leadsDiff > 0 ? '+' : ''}{comparisons.leadsDiff.toLocaleString()}
                            </span>
                        ) : null}
                    />
                ) : (
                    <>
                        <InputField
                            label={labels.trafficLabel}
                            value={values.traffic}
                            onChange={handlers.setTraffic}
                            icon={Users}
                            color={isProjected ? "text-blue-400" : "text-slate-500"}
                        />

                        <Arrow />

                        <InputField
                            label={labels.optInRateLabel}
                            value={values.optIn}
                            onChange={handlers.setOptIn}
                            suffix="%"
                            icon={Target}
                            color={isProjected ? "text-purple-400" : "text-slate-500"}
                            metric={metrics.leads}
                            metricLabel="Leads"
                            metricColor="text-white"
                            tooltip={`${labels.trafficLabel} × ${labels.optInRateLabel} = Leads`}
                            calcBreakdown={leadsBreakdown}
                            subMetric={
                                <div className="flex flex-col items-center">
                                    <span className="text-yellow-400 font-black text-lg mt-2 mb-1">CPL: RM {metrics.cpl.toFixed(2)}</span>
                                    {comparisons.leadsDiff && (
                                        <span className={comparisons.leadsDiff > 0 ? "text-green-400" : "text-red-400"}>
                                            {comparisons.leadsDiff > 0 ? '+' : ''}{comparisons.leadsDiff.toLocaleString()}
                                        </span>
                                    )}
                                </div>
                            }
                        />
                    </>
                )}

                <Arrow />

                <InputField
                    label={labels.showUpRateLabel}
                    value={values.apptRate}
                    onChange={handlers.setApptRate}
                    suffix="%"
                    icon={Calendar}
                    color={isProjected ? "text-pink-400" : "text-slate-500"}
                    metric={metrics.appointments}
                    metricLabel={labels.attendeesLabel}
                    metricColor={isProjected ? "text-pink-200" : "text-white"}
                    tooltip={`Leads × ${labels.showUpRateLabel} = ${labels.attendeesLabel}`}
                    calcBreakdown={attendeesBreakdown}
                    subMetric={comparisons.apptsDiff && (
                        <span className={comparisons.apptsDiff > 0 ? "text-green-400" : "text-red-400"}>
                            {comparisons.apptsDiff > 0 ? '+' : ''}{comparisons.apptsDiff.toLocaleString()}
                        </span>
                    )}
                />

                <Arrow />

                <InputField
                    label="Closing"
                    value={values.closeRate}
                    onChange={handlers.setCloseRate}
                    suffix="%"
                    icon={Star}
                    color={isProjected ? "text-orange-400" : "text-slate-500"}
                    metric={metrics.sales}
                    metricLabel="Sales"
                    metricColor={isProjected ? "text-green-200" : "text-white"}
                    tooltip={`${labels.attendeesLabel} × Closing Rate = Sales`}
                    calcBreakdown={salesBreakdown}
                    subMetric={comparisons.salesDiff && (
                        <span className={comparisons.salesDiff > 0 ? "text-green-400" : "text-red-400"}>
                            {comparisons.salesDiff > 0 ? '+' : ''}{comparisons.salesDiff.toLocaleString()}
                        </span>
                    )}
                />

                <div className="text-slate-700 font-light text-2xl lg:text-xl lg:mt-8 flex items-center justify-center">×</div>

                <InputField
                    label="Price"
                    value={values.price}
                    onChange={handlers.setPrice}
                    prefix="RM "
                    icon={DollarSign}
                    color={isProjected ? "text-green-400" : "text-slate-500"}
                    metric={`RM ${metrics.revenue.toLocaleString()}`}
                    metricLabel="Revenue"
                    metricColor={isProjected ? "text-green-400" : "text-white"}
                    calcBreakdown={revenueBreakdown}
                    subMetric={
                        <div className="flex flex-col items-center">
                            <span className="text-emerald-400 font-black text-lg mt-2 mb-1">ROAS: {metrics.roas}X</span>
                            {comparisons.revenueDiff && (
                                <span className={comparisons.revenueDiff > 0 ? "text-green-400" : "text-red-400"}>
                                    {comparisons.revenueDiff > 0 ? '+' : ''}RM {comparisons.revenueDiff.toLocaleString()}
                                </span>
                            )}
                        </div>
                    }
                />
            </div>
        </div>
    );
};

const FunnelInput = ({ value, onChange, color, width = 'w-12' }) => (
    <input
        type="number"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        min="0"
        max="100"
        className={`${width} bg-transparent ${color} font-black text-xl text-right focus:outline-none [&::-webkit-inner-spin-button]:appearance-none`}
    />
);

const CalcIcon = ({ id, text, color = 'text-white', activeCalc, setActiveCalc }) => {
    const isActive = activeCalc === id;
    return (
        <div className="relative flex items-center justify-center mt-2">
            <button
                onClick={(e) => { e.stopPropagation(); setActiveCalc(isActive ? null : id); }}
                className={`p-1 rounded-full transition-all ${isActive ? 'bg-white/20 text-white' : 'text-white/40 hover:text-white/80'}`}
            >
                <Info className="w-4 h-4" />
            </button>
            {isActive && (
                <div className="absolute left-full top-1/2 -translate-y-1/2 ml-3 px-3 py-2 bg-slate-950 border border-slate-500 rounded-lg text-sm font-mono font-bold z-[200] shadow-2xl pointer-events-none whitespace-nowrap">
                    <span className={color}>{text}</span>
                    <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-slate-500" />
                </div>
            )}
        </div>
    );
};

const CalculatorVisualFunnel = ({ metrics, isDynamic, isExpanded = false, showProfitSplit = false, showAdSpend = false, comparisons = {}, handlers, directMode = false, directLeadsValue, setDirectLeads, labels }) => {
    const [activeCalc, setActiveCalc] = React.useState(null);
    const minW = isDynamic ? 45 : 85;
    const rawOptInW = isDynamic ? Math.max(minW, Math.min(85, (metrics.optIn / 15) * 85)) : 85;
    const rawApptW = isDynamic ? Math.max(35, Math.min(70, (metrics.apptRate / 40) * 70)) : 70;
    const rawCloseW = isDynamic ? Math.max(25, Math.min(55, (metrics.closeRate / 20) * 55)) : 55;
    const optInWidth = rawOptInW;
    const apptWidth = isDynamic ? Math.min(rawApptW, optInWidth * 0.85) : 70;
    const closeWidth = isDynamic ? Math.min(rawCloseW, apptWidth * 0.85) : 55;

    return (
        <div className={`flex flex-col items-center w-full ${isExpanded ? 'max-w-[560px]' : 'max-w-[280px]'} mx-auto gap-1 transition-all duration-500`}>
            <h4 className="text-white font-bold mb-4">{metrics.title}</h4>

            {/* Ad Spend */}
            <div className="w-full bg-slate-900/80 border border-slate-500 rounded-2xl py-3 px-5 flex items-center justify-between shadow-lg z-10 mb-2 ring-1 ring-slate-500/30">
                <span className="text-xs text-slate-300 font-bold tracking-widest uppercase flex items-center gap-1.5">
                    <Pencil className="w-3 h-3 text-slate-400" /> Ad Spend
                </span>
                <div className="flex items-center gap-1">
                    <span className="text-slate-500 text-sm font-mono">RM</span>
                    <input
                        type="number"
                        value={metrics.adSpend}
                        onChange={(e) => handlers?.setAdSpend(Number(e.target.value))}
                        className="w-24 bg-transparent text-red-400 text-xl font-black text-right focus:outline-none [&::-webkit-inner-spin-button]:appearance-none cursor-text"
                    />
                </div>
            </div>

            {directMode ? (
                <div className="w-full bg-purple-900/40 border-2 border-purple-400 rounded-t-2xl py-6 flex flex-col items-center justify-center relative shadow-lg z-10 ring-1 ring-purple-400/20">
                    <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none rounded-t-2xl" />
                    <span className="text-[10px] text-purple-200 font-bold tracking-widest uppercase mb-1 flex items-center gap-1.5">
                        <Pencil className="w-3 h-3 text-purple-300" /> Leads (Direct)
                    </span>
                    <input
                        type="number"
                        value={directLeadsValue ?? metrics.leads}
                        onChange={(e) => setDirectLeads?.(Number(e.target.value))}
                        className="w-32 bg-transparent text-white text-4xl font-black text-center focus:outline-none [&::-webkit-inner-spin-button]:appearance-none cursor-text"
                    />
                    <div className="flex items-center gap-2 mt-1">
                        <span className="text-yellow-400 text-base font-black tracking-wide">CPL: RM {metrics.cpl.toFixed(2)}</span>
                        <CalcIcon id="leads-direct" text={`RM ${metrics.adSpend.toLocaleString()} ÷ ${metrics.leads.toLocaleString()} Leads = RM ${metrics.cpl.toFixed(2)} CPL`} color="text-yellow-400" activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
                    </div>
                    {comparisons.leadsDiff !== undefined && comparisons.leadsDiff !== 0 && (
                        <span className={`text-sm font-black tracking-wide ${comparisons.leadsDiff > 0 ? "text-green-400" : "text-red-400"}`}>
                            {comparisons.leadsDiff > 0 ? '+' : ''}{comparisons.leadsDiff.toLocaleString()}
                        </span>
                    )}
                </div>
            ) : (
                <>
                    {/* Traffic Top */}
                    <div className="w-full bg-blue-900/40 border border-blue-500/50 rounded-t-2xl py-6 flex flex-col items-center justify-center relative overflow-hidden group shadow-lg z-10">
                        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/20 to-transparent pointer-events-none" />
                        <span className="text-xs text-blue-300 font-bold tracking-widest uppercase mb-1">{labels.trafficLabel}</span>
                        <span className="text-3xl font-black text-white">{metrics.traffic.toLocaleString()}</span>
                    </div>

                    {/* Opt-In Rate Divider */}
                    <div className="relative w-full flex justify-center items-center z-20 -my-4">
                        <div className="bg-slate-800 border-2 border-purple-500/60 text-slate-200 text-sm uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap ring-1 ring-purple-500/20">
                            <Pencil className="w-2.5 h-2.5 text-purple-400" />
                            <FunnelInput value={metrics.optIn} onChange={handlers?.setOptIn ?? (() => {})} color="text-purple-400" />
                            % {labels.optInRateLabel.toUpperCase()}
                        </div>
                    </div>

                    {/* Leads Level */}
                    <div
                        className="bg-purple-900/40 border border-purple-500/50 pt-8 pb-5 flex flex-col items-center justify-center relative shadow-lg z-10 transition-all duration-500"
                        style={{ width: `${optInWidth}%` }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent pointer-events-none" />
                        <span className="text-xs text-purple-300 font-bold tracking-widest uppercase mb-1">Leads</span>
                        <span className="text-3xl font-black text-white">{metrics.leads.toLocaleString()}</span>
                        <div className="flex items-center gap-2 mt-1">
                            <span className="text-yellow-400 text-sm font-black tracking-wide">CPL: RM {metrics.cpl.toFixed(2)}</span>
                            <CalcIcon id="leads" text={`${metrics.traffic.toLocaleString()} × ${metrics.optIn}% ${labels.optInRateLabel} = ${metrics.leads.toLocaleString()} Leads`} activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
                        </div>
                        {comparisons.leadsDiff !== undefined && comparisons.leadsDiff !== 0 && (
                            <span className={`text-sm font-black tracking-wide ${comparisons.leadsDiff > 0 ? "text-green-400" : "text-red-400"}`}>
                                {comparisons.leadsDiff > 0 ? '+' : ''}{comparisons.leadsDiff.toLocaleString()}
                            </span>
                        )}
                    </div>
                </>
            )}

            {/* Show Up Rate Divider */}
            <div className="relative w-full flex justify-center items-center z-20 -my-4">
                <div className="bg-slate-800 border-2 border-pink-500/60 text-slate-200 text-sm uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap ring-1 ring-pink-500/20">
                    <Pencil className="w-2.5 h-2.5 text-pink-400" />
                    <FunnelInput value={metrics.apptRate} onChange={handlers?.setApptRate ?? (() => {})} color="text-pink-400" />
                    % {labels.showUpRateLabel.toUpperCase()}
                </div>
            </div>

            {/* Attendees Level */}
            <div
                className="bg-pink-900/40 border border-pink-500/50 pt-8 pb-5 flex flex-col items-center justify-center relative shadow-lg z-10 transition-all duration-500"
                style={{ width: `${apptWidth}%` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-pink-500/10 to-transparent pointer-events-none" />
                <span className="text-xs text-pink-300 font-bold tracking-widest uppercase mb-1">{labels.attendeesLabel}</span>
                <span className="text-3xl font-black text-white">{metrics.appointments.toLocaleString()}</span>
                <CalcIcon id="attendees" text={`${metrics.leads.toLocaleString()} Leads × ${metrics.apptRate}% ${labels.showUpRateLabel} = ${metrics.appointments.toLocaleString()} ${labels.attendeesLabel}`} activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
                {comparisons.apptsDiff !== undefined && comparisons.apptsDiff !== 0 && (
                    <span className={`text-sm font-black tracking-wide ${comparisons.apptsDiff > 0 ? "text-green-400" : "text-red-400"}`}>
                        {comparisons.apptsDiff > 0 ? '+' : ''}{comparisons.apptsDiff.toLocaleString()}
                    </span>
                )}
            </div>

            {/* Closing Rate Divider */}
            <div className="relative w-full flex justify-center items-center z-20 -my-4">
                <div className="bg-slate-800 border-2 border-orange-500/60 text-slate-200 text-sm uppercase tracking-wider font-bold px-5 py-2.5 rounded-full shadow-xl flex items-center gap-2 whitespace-nowrap ring-1 ring-orange-500/20">
                    <Pencil className="w-2.5 h-2.5 text-orange-400" />
                    <FunnelInput value={metrics.closeRate} onChange={handlers?.setCloseRate ?? (() => {})} color="text-orange-400" />
                    % CLOSING RATE
                </div>
            </div>

            {/* Sales Level */}
            <div
                className="bg-orange-900/40 border border-orange-500/50 pt-8 pb-5 flex flex-col items-center justify-center relative rounded-b-2xl shadow-lg z-10 transition-all duration-500"
                style={{ width: `${closeWidth}%` }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent pointer-events-none" />
                <span className="text-xs text-orange-300 font-bold tracking-widest uppercase mb-1">Sales</span>
                <span className="text-3xl font-black text-white">{metrics.sales.toLocaleString()}</span>
                <CalcIcon id="sales" text={`${metrics.appointments.toLocaleString()} ${labels.attendeesLabel} × ${metrics.closeRate}% Closing = ${metrics.sales.toLocaleString()} Sales`} activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
                {comparisons.salesDiff !== undefined && comparisons.salesDiff !== 0 && (
                    <span className={`text-sm font-black tracking-wide ${comparisons.salesDiff > 0 ? "text-green-400" : "text-red-400"}`}>
                        {comparisons.salesDiff > 0 ? '+' : ''}{comparisons.salesDiff.toLocaleString()}
                    </span>
                )}
            </div>

            {/* Price × Sales */}
            <div className="w-full flex items-center justify-center gap-2 mt-4 mb-1">
                <span className="text-slate-600 text-lg font-light">×</span>
                <div className="bg-slate-800/80 border border-slate-500 rounded-xl py-2 px-4 flex items-center gap-2 ring-1 ring-slate-500/20">
                    <Pencil className="w-3 h-3 text-slate-400" />
                    <span className="text-xs text-slate-300 font-bold uppercase tracking-wider">Price</span>
                    <span className="text-slate-500 text-sm font-mono">RM</span>
                    <input
                        type="number"
                        value={metrics.price}
                        onChange={(e) => handlers?.setPrice(Number(e.target.value))}
                        className="w-20 bg-transparent text-white text-lg font-black text-right focus:outline-none [&::-webkit-inner-spin-button]:appearance-none cursor-text"
                    />
                </div>
            </div>

            {/* Revenue */}
            <div className="mt-2 p-5 rounded-2xl bg-green-900/30 border border-green-500 shadow-[0_0_30px_rgba(34,197,94,0.1)] text-center w-full transform transition-all hover:scale-105">
                <span className="text-sm text-green-300 font-bold tracking-widest uppercase block mb-1">Total Revenue</span>
                <span className="text-4xl font-black text-green-400">RM {metrics.revenue.toLocaleString()}</span>
                <CalcIcon id="revenue" text={`${metrics.sales.toLocaleString()} Sales × RM ${metrics.price?.toLocaleString()} = RM ${metrics.revenue.toLocaleString()}`} color="text-green-400" activeCalc={activeCalc} setActiveCalc={setActiveCalc} />
                {comparisons.revenueDiff !== undefined && comparisons.revenueDiff !== 0 && (
                    <span className={`text-base font-black tracking-wide block mt-1 ${comparisons.revenueDiff > 0 ? "text-green-300" : "text-red-400"}`}>
                        {comparisons.revenueDiff > 0 ? '+' : ''}RM {comparisons.revenueDiff.toLocaleString()}
                    </span>
                )}
            </div>

            {showAdSpend && (
                <div className="mt-2 p-3 rounded-2xl bg-red-900/20 border border-red-500/30 text-center w-full max-w-[80%] opacity-90 mx-auto animate-in fade-in slide-in-from-top-2">
                    <span className="text-[10px] text-red-300 font-bold tracking-widest uppercase block mb-0.5">Minus Ad Spend</span>
                    <span className="text-xl font-black text-red-400">-RM {metrics.adSpend.toLocaleString()}</span>
                    {comparisons.adSpendDiff !== undefined && comparisons.adSpendDiff !== 0 && (
                        <span className={`text-xs font-black tracking-wide block ${comparisons.adSpendDiff < 0 ? "text-green-400" : "text-red-400"}`}>
                            {comparisons.adSpendDiff > 0 ? '+' : ''}RM {comparisons.adSpendDiff.toLocaleString()}
                        </span>
                    )}
                </div>
            )}

            {showProfitSplit && (
                <div className="mt-4 p-5 rounded-2xl bg-slate-800/80 border border-slate-700 w-full animate-in fade-in zoom-in duration-300">
                    <div className="text-center mb-4">
                        <span className="text-xs text-slate-400 font-bold tracking-widest uppercase block mb-1">Total Profit</span>
                        <span className={`text-2xl font-black ${metrics.profit >= 0 ? 'text-white' : 'text-red-400'}`}>
                            RM {metrics.profit.toLocaleString()}
                        </span>
                    </div>
                    {metrics.profit > 0 && (
                        <div className="flex gap-2 w-full">
                            <div className="flex-1 p-3 rounded-xl bg-blue-900/30 border border-blue-800/50 text-center flex flex-col justify-center">
                                <span className="text-[10px] text-blue-400 font-bold tracking-widest uppercase block mb-1">Marketer ({metrics.marketerSplit}%)</span>
                                <span className="text-base font-black text-blue-300 truncate">RM {metrics.marketerProfit.toLocaleString()}</span>
                            </div>
                            <div className="flex-1 p-3 rounded-xl bg-purple-900/30 border border-purple-800/50 text-center flex flex-col justify-center">
                                <span className="text-[10px] text-purple-400 font-bold tracking-widest uppercase block mb-1">Expert ({100 - metrics.marketerSplit}%)</span>
                                <span className="text-base font-black text-purple-300 truncate">RM {metrics.expertProfit.toLocaleString()}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

const PRESETS = [
    { label: "Healthy Scenario", value: "healthy", optIn: 15, apptRate: 40, closeRate: 20 },
    { label: "Low Opt-in Rate", value: "low-opt-in", optIn: 5, apptRate: 40, closeRate: 20 },
    { label: "Low Show Up Rate", value: "low-show-up", optIn: 15, apptRate: 10, closeRate: 20 },
    { label: "Low Closing Rate", value: "low-closing", optIn: 15, apptRate: 40, closeRate: 5 },
];

const ScalingTable = ({ metrics, title, isProjected, showSplit, showAdSpend }) => {
    const multipliers = [1, 3, 6, 12];
    return (
        <div className={`p-6 rounded-2xl border ${isProjected ? 'bg-slate-900/50 border-blue-500/30' : 'bg-slate-800/30 border-slate-700/50'} w-full`}>
            <h4 className={`text-sm font-bold uppercase tracking-widest mb-4 ${isProjected ? 'text-blue-400' : 'text-slate-300'}`}>{title}</h4>
            <div className="overflow-x-auto">
                <table className="w-full text-left text-sm text-slate-300">
                    <thead className="bg-slate-800/80 text-xs uppercase font-bold text-slate-400 border-b border-slate-700">
                        <tr>
                            <th className="px-4 py-3 rounded-tl-lg">Months</th>
                            <th className="px-4 py-3">Total Revenue</th>
                            {showAdSpend && <th className="px-4 py-3 text-red-400">Ad Spend</th>}
                            <th className="px-4 py-3">Total Profit</th>
                            {showSplit && metrics.profit > 0 && (
                                <>
                                    <th className="px-4 py-3 text-blue-400">Marketer Get</th>
                                    <th className="px-4 py-3 text-purple-400 rounded-tr-lg">Expert Get</th>
                                </>
                            )}
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-700/50">
                        {multipliers.map((m) => (
                            <tr key={m} className={`hover:bg-slate-800/30 transition-colors ${m === 1 ? 'bg-slate-800/10' : ''}`}>
                                <td className="px-4 py-3 font-bold text-white whitespace-nowrap">{m} <span className="text-slate-500 font-normal text-xs ml-1">month{m > 1 ? 's' : ''}</span></td>
                                <td className="px-4 py-3 font-bold text-green-300 whitespace-nowrap">RM {(metrics.revenue * m).toLocaleString()}</td>
                                {showAdSpend && <td className="px-4 py-3 font-bold text-red-400 opacity-90 whitespace-nowrap">-RM {(metrics.adSpend * m).toLocaleString()}</td>}
                                <td className={`px-4 py-3 font-black whitespace-nowrap ${metrics.profit >= 0 ? "text-green-400" : "text-red-400"}`}>RM {(metrics.profit * m).toLocaleString()}</td>
                                {showSplit && metrics.profit > 0 && (
                                    <>
                                        <td className="px-4 py-3 font-bold text-blue-300 whitespace-nowrap">RM {(metrics.marketerProfit * m).toLocaleString()}</td>
                                        <td className="px-4 py-3 font-bold text-purple-300 whitespace-nowrap">RM {(metrics.expertProfit * m).toLocaleString()}</td>
                                    </>
                                )}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

const VersatileCalculator = () => {
    // Label config
    const [labels, setLabels] = useState(DEFAULT_LABELS);
    const setLabel = (key, val) => setLabels(prev => ({ ...prev, [key]: val }));

    // Projected State
    const [traffic, setTraffic] = useState(1000);
    const [adSpend, setAdSpend] = useState(1000);
    const [optIn, setOptIn] = useState(25);
    const [apptRate, setApptRate] = useState(30);
    const [closeRate, setCloseRate] = useState(20);
    const [price, setPrice] = useState(2000);

    // Current State
    const [curTraffic, setCurTraffic] = useState(1000);
    const [curAdSpend, setCurAdSpend] = useState(1000);
    const [curOptIn, setCurOptIn] = useState(5);
    const [curApptRate, setCurApptRate] = useState(10);
    const [curCloseRate, setCurCloseRate] = useState(10);
    const [curPrice, setCurPrice] = useState(2000);

    // Toggles
    const [showProjected, setShowProjected] = useState(false);
    const [isDynamicShape, setIsDynamicShape] = useState(true);
    const [showProfitSplit, setShowProfitSplit] = useState(false);
    const [showAdSpend, setShowAdSpend] = useState(false);
    const [marketerSplit, setMarketerSplit] = useState(50);
    const [directMode, setDirectMode] = useState(false);
    const [curDirectLeads, setCurDirectLeads] = useState(50);
    const [projDirectLeads, setProjDirectLeads] = useState(250);

    const handleToggleDirectMode = () => {
        if (!directMode) {
            setCurDirectLeads(Math.floor(curTraffic * (curOptIn / 100)));
            setProjDirectLeads(Math.floor(traffic * (optIn / 100)));
        }
        setDirectMode(d => !d);
    };

    const calculateMetrics = (t, s, o, a, c, p, title, directLeadsOverride = null) => {
        const leads = directLeadsOverride !== null ? directLeadsOverride : Math.floor(t * (o / 100));
        const appointments = Math.floor(leads * (a / 100));
        const sales = Math.floor(appointments * (c / 100));
        const revenue = sales * p;
        const cpl = leads > 0 ? (s / leads) : 0;
        const roas = s > 0 ? (revenue / s).toFixed(2) : 0;
        const profit = revenue - s;
        const marketerProfit = Math.floor(profit * (marketerSplit / 100));
        const expertProfit = profit - marketerProfit;
        return { traffic: t, adSpend: s, optIn: o, apptRate: a, closeRate: c, price: p, leads, appointments, sales, revenue, profit, marketerProfit, expertProfit, marketerSplit, cpl, roas, title };
    };

    const projected = calculateMetrics(traffic, adSpend, optIn, apptRate, closeRate, price, "Projected Funnel", directMode ? projDirectLeads : null);
    const current = calculateMetrics(curTraffic, curAdSpend, curOptIn, curApptRate, curCloseRate, curPrice, "Current Funnel", directMode ? curDirectLeads : null);

    const comparisons = {
        leadsDiff: projected.leads - current.leads,
        apptsDiff: projected.appointments - current.appointments,
        salesDiff: projected.sales - current.sales,
        revenueDiff: projected.revenue - current.revenue,
        adSpendDiff: projected.adSpend - current.adSpend,
    };

    const getCurrentPreset = () => {
        const p = PRESETS.find(p => p.optIn === curOptIn && p.apptRate === curApptRate && p.closeRate === curCloseRate);
        return p ? p.value : 'custom';
    };

    const handlePresetChange = (e) => {
        const val = e.target.value;
        if (val === 'custom') return;
        const preset = PRESETS.find(p => p.value === val);
        if (preset) { setCurOptIn(preset.optIn); setCurApptRate(preset.apptRate); setCurCloseRate(preset.closeRate); }
    };

    const presetsDropdown = (
        <select
            value={getCurrentPreset()}
            onChange={handlePresetChange}
            className="bg-slate-900 border border-slate-700 text-slate-300 text-sm font-bold rounded-lg px-3 py-1.5 focus:outline-none focus:border-blue-500 cursor-pointer hover:bg-slate-800 transition-colors"
        >
            <option value="custom">Custom Values</option>
            {PRESETS.map(p => <option key={p.value} value={p.value}>{p.label}</option>)}
        </select>
    );

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-[1400px] flex flex-col gap-12">

                {/* Header */}
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-4">
                    <div>
                        <h2 className="text-3xl font-black text-white tracking-tight">Versatile Calculator</h2>
                        <p className="text-slate-400 mt-2">Customize metric labels to match any funnel type — webinar, DM outreach, VSL, or appointment setting.</p>
                    </div>

                    <div className="flex flex-col gap-3">
                        {/* Label Config Panel */}
                        <div className="bg-slate-800/60 border border-slate-700 rounded-2xl p-4 flex flex-col gap-3">
                            <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Funnel Label Config</span>
                            <div className="grid grid-cols-2 gap-3">
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-blue-400">Traffic / Views</span>
                                    <LabelDropdown
                                        value={labels.trafficLabel}
                                        options={LABEL_OPTIONS.trafficLabel}
                                        onChange={(v) => setLabel('trafficLabel', v)}
                                        color="text-blue-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-purple-400">Opt-in Rate</span>
                                    <LabelDropdown
                                        value={labels.optInRateLabel}
                                        options={LABEL_OPTIONS.optInRateLabel}
                                        onChange={(v) => setLabel('optInRateLabel', v)}
                                        color="text-purple-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-pink-400">Show Up Rate</span>
                                    <LabelDropdown
                                        value={labels.showUpRateLabel}
                                        options={LABEL_OPTIONS.showUpRateLabel}
                                        onChange={(v) => setLabel('showUpRateLabel', v)}
                                        color="text-pink-300"
                                    />
                                </div>
                                <div className="flex flex-col gap-1">
                                    <span className="text-[9px] font-bold uppercase tracking-widest text-pink-300">Attendees</span>
                                    <LabelDropdown
                                        value={labels.attendeesLabel}
                                        options={LABEL_OPTIONS.attendeesLabel}
                                        onChange={(v) => setLabel('attendeesLabel', v)}
                                        color="text-pink-200"
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Toggle Buttons */}
                        <div className="flex items-center gap-3 flex-wrap">
                            <button onClick={handleToggleDirectMode} className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap shrink-0 ${directMode ? 'bg-yellow-600/20 text-yellow-400 border-yellow-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}>
                                <Zap className="w-4 h-4" />
                                {directMode ? 'Direct Mode On' : 'Direct Mode'}
                            </button>
                            <button onClick={() => setIsDynamicShape(!isDynamicShape)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap shrink-0 ${isDynamicShape ? 'bg-purple-600/20 text-purple-400 border-purple-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}>
                                <LayoutTemplate className="w-4 h-4" />
                                {isDynamicShape ? 'Dynamic Shapes On' : 'Dynamic Shapes Off'}
                            </button>
                            <button onClick={() => setShowAdSpend(!showAdSpend)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap shrink-0 ${showAdSpend ? 'bg-red-600/20 text-red-400 border-red-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}>
                                <MonitorPlay className="w-4 h-4" />
                                Ad Spend
                            </button>
                            <button onClick={() => setShowProfitSplit(!showProfitSplit)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap shrink-0 ${showProfitSplit ? 'bg-emerald-600/20 text-emerald-400 border-emerald-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}>
                                <PieChart className="w-4 h-4" />
                                Profit Split
                            </button>
                            <button onClick={() => setShowProjected(!showProjected)} className={`flex items-center gap-2 px-4 py-2.5 rounded-full font-bold text-sm transition-all border whitespace-nowrap shrink-0 ${showProjected ? 'bg-blue-600/20 text-blue-400 border-blue-500/50' : 'bg-slate-800 text-slate-400 border-slate-700 hover:bg-slate-700 hover:text-white'}`}>
                                {showProjected ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                                {showProjected ? 'Hide Projections' : 'Show Projections'}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Visual Funnels */}
                <div className="flex flex-col lg:flex-row gap-8 w-full">
                    <div className="flex lg:flex-row flex-col gap-12 flex-1 items-start justify-center bg-slate-900 border border-slate-800 p-10 rounded-[2rem] shadow-xl transition-all duration-500">
                        <CalculatorVisualFunnel
                            metrics={current}
                            isDynamic={isDynamicShape}
                            isExpanded={!showProjected}
                            showProfitSplit={showProfitSplit}
                            showAdSpend={showAdSpend}
                            directMode={directMode}
                            directLeadsValue={curDirectLeads}
                            setDirectLeads={setCurDirectLeads}
                            handlers={{ setOptIn: setCurOptIn, setApptRate: setCurApptRate, setCloseRate: setCurCloseRate, setAdSpend: setCurAdSpend, setPrice: setCurPrice }}
                            labels={labels}
                        />
                        {showProjected && (
                            <>
                                <div className="hidden lg:flex items-center justify-center py-24 text-slate-700 text-6xl font-light animate-pulse">→</div>
                                <div className="animate-in fade-in slide-in-from-right-8 duration-500 w-full max-w-[560px] lg:max-w-[280px]">
                                    <CalculatorVisualFunnel
                                        metrics={projected}
                                        isDynamic={isDynamicShape}
                                        comparisons={comparisons}
                                        showProfitSplit={showProfitSplit}
                                        showAdSpend={showAdSpend}
                                        directMode={directMode}
                                        directLeadsValue={projDirectLeads}
                                        setDirectLeads={setProjDirectLeads}
                                        handlers={{ setOptIn, setApptRate, setCloseRate, setAdSpend, setPrice }}
                                        labels={labels}
                                    />
                                </div>
                            </>
                        )}
                    </div>
                </div>

                {/* Profit Split Slider */}
                {showProfitSplit && (
                    <div className="bg-slate-800/50 border border-slate-700 rounded-2xl p-6 flex flex-col gap-4 max-w-4xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                            <div className="max-w-xl">
                                <h3 className="text-lg font-bold text-white mb-1">Profit Split Configuration</h3>
                                <p className="text-sm text-slate-400">Adjust the profit share between Marketer and Expert. (Total Profit = Revenue - Ad Spend)</p>
                            </div>
                            <div className="text-sm font-bold bg-slate-900 px-4 py-2 lg:py-3 rounded-lg border border-slate-700 flex whitespace-nowrap w-full md:w-auto justify-center shadow-inner">
                                <span className="text-blue-400">Marketer: {marketerSplit}%</span>
                                <span className="text-slate-500 mx-2">|</span>
                                <span className="text-purple-400">Expert: {100 - marketerSplit}%</span>
                            </div>
                        </div>
                        <div className="relative pt-4 pb-2">
                            <input type="range" min="0" max="100" step="5" value={marketerSplit} onChange={(e) => setMarketerSplit(Number(e.target.value))} className="w-full h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-blue-500" />
                            <div className="flex justify-between text-xs font-bold text-slate-500 mt-3 uppercase tracking-wider">
                                <span className="text-blue-400">Marketer</span>
                                <span className="text-purple-400">Expert</span>
                            </div>
                        </div>
                    </div>
                )}

                {/* Funnel Rows */}
                <div className="flex flex-col gap-6 overflow-x-auto w-full pb-8 px-1">
                    <FunnelRow
                        title="Current Scenario"
                        values={{ traffic: curTraffic, adSpend: curAdSpend, optIn: curOptIn, apptRate: curApptRate, closeRate: curCloseRate, price: curPrice }}
                        handlers={{ setTraffic: setCurTraffic, setAdSpend: setCurAdSpend, setOptIn: setCurOptIn, setApptRate: setCurApptRate, setCloseRate: setCurCloseRate, setPrice: setCurPrice }}
                        metrics={current}
                        isProjected={false}
                        presetsNode={presetsDropdown}
                        directMode={directMode}
                        directLeadsValue={curDirectLeads}
                        setDirectLeads={setCurDirectLeads}
                        onToggleDirectMode={handleToggleDirectMode}
                        labels={labels}
                    />
                    {showProjected && (
                        <div className="animate-in fade-in slide-in-from-bottom-8 duration-500">
                            <FunnelRow
                                title="Future Scenario (After Operations)"
                                values={{ traffic, adSpend, optIn, apptRate, closeRate, price }}
                                handlers={{ setTraffic, setAdSpend, setOptIn, setApptRate, setCloseRate, setPrice }}
                                metrics={projected}
                                comparisons={comparisons}
                                isProjected={true}
                                directMode={directMode}
                                directLeadsValue={projDirectLeads}
                                setDirectLeads={setProjDirectLeads}
                                onToggleDirectMode={handleToggleDirectMode}
                                labels={labels}
                            />
                        </div>
                    )}
                </div>

                {/* Scaling Tables */}
                <div className="flex flex-col lg:flex-row gap-6 w-full animate-in fade-in duration-500">
                    <ScalingTable metrics={current} title="Income Projections" isProjected={false} showSplit={showProfitSplit} showAdSpend={showAdSpend} />
                    {showProjected && (
                        <ScalingTable metrics={projected} title="Projected Income Projections" isProjected={true} showSplit={showProfitSplit} showAdSpend={showAdSpend} />
                    )}
                </div>

            </div>
        </div>
    );
};

export default VersatileCalculator;
