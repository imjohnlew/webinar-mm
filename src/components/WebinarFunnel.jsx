import React from 'react';
import { Calendar, Video, ShoppingCart, Award, Check, Shield, Clock, Star, Play, Users } from 'lucide-react';
import FunnelTemplate, { Bar } from './FunnelTemplate';

// ─── Mockups ───────────────────────────────────────────────────────────────────

const RegMockup = () => (
    <div className="bg-white text-[9px] text-slate-700">
        <div className="bg-gradient-to-r from-blue-700 to-indigo-700 px-3 py-4 text-center">
            <div className="text-blue-200 text-[7px] font-bold uppercase tracking-widest mb-1">FREE LIVE WEBINAR</div>
            <div className="text-white font-black text-[12px] leading-tight mb-1">
                "How To [Get Result]<br/>In [Timeframe]"
            </div>
            <div className="text-blue-200 text-[7px]">Even if you've tried everything else and failed</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="flex items-center gap-2 bg-slate-50 rounded-lg p-2 border border-slate-100">
                <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[8px] shrink-0">JD</div>
                <div>
                    <div className="font-bold text-slate-800 text-[8px]">Hosted by [Your Name]</div>
                    <Bar w="w-28" h="h-1.5" color="bg-slate-200" />
                </div>
            </div>
            <div className="flex gap-2">
                <div className="flex-1 bg-blue-50 border border-blue-200 rounded px-2 py-1.5 text-center">
                    <div className="text-[7px] text-blue-500 font-bold">DATE</div>
                    <div className="text-[8px] font-black text-blue-700">[DAY, MONTH DD]</div>
                </div>
                <div className="flex-1 bg-blue-50 border border-blue-200 rounded px-2 py-1.5 text-center">
                    <div className="text-[7px] text-blue-500 font-bold">TIME</div>
                    <div className="text-[8px] font-black text-blue-700">[TIME TZ]</div>
                </div>
            </div>
            <div className="font-bold text-slate-700 text-[8px]">What You'll Discover:</div>
            {['How to [Key Outcome 1]', 'The secret to [Key Outcome 2]', 'Why [Common Mistake] fails — and what to do instead'].map(b => (
                <div key={b} className="flex items-start gap-1 text-[8px] text-slate-600">
                    <Check className="w-2.5 h-2.5 text-blue-500 shrink-0 mt-0.5" /> {b}
                </div>
            ))}
            <div className="space-y-1.5 pt-1">
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[8px] text-slate-400">Your First Name</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[8px] text-slate-400">Your Best Email</div>
                <div className="w-full bg-blue-600 text-white font-black text-[10px] py-2 rounded text-center">
                    Reserve My FREE Spot →
                </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[7px] text-slate-400">
                <Shield className="w-2 h-2" /> 100% Free · Spots Limited
            </div>
        </div>
    </div>
);

const ConfirmMockup = () => (
    <div className="bg-white text-[9px] text-slate-700">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-4 text-center">
            <div className="text-3xl mb-1">🎉</div>
            <div className="text-white font-black text-[11px]">You're Registered!</div>
            <div className="text-green-100 text-[7px] mt-0.5">Check your inbox for the join link</div>
        </div>
        <div className="p-3 space-y-2.5">
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5 bg-slate-50">
                <div className="font-bold text-slate-700 text-[8px]">Your Webinar Details:</div>
                <div className="flex items-center gap-1.5 text-[8px] text-slate-600"><Calendar className="w-2.5 h-2.5 text-blue-500" /> [DAY, MONTH DD] at [TIME TZ]</div>
                <div className="flex items-center gap-1.5 text-[8px] text-slate-600"><Video className="w-2.5 h-2.5 text-blue-500" /> Zoom Webinar (link in your email)</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
                {['Google', 'Outlook', 'iCal'].map(c => (
                    <div key={c} className="border border-slate-200 rounded text-center py-1.5 text-[7px] font-bold text-slate-600 cursor-pointer">📅 {c}</div>
                ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2.5 space-y-1.5">
                <div className="font-bold text-blue-700 text-[8px]">While You Wait — Join Our Community:</div>
                <div className="w-full bg-blue-600 text-white font-bold text-[8px] py-1.5 rounded text-center">
                    👥 Join Our Private Facebook Group →
                </div>
                <div className="text-[7px] text-blue-500 text-center">5,247 members already inside</div>
            </div>
            <div className="space-y-1">
                <div className="font-bold text-slate-700 text-[8px]">Watch This First (5 min pre-training):</div>
                <div className="w-full aspect-video bg-slate-800 rounded flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                        <Play className="w-3 h-3 text-white fill-white ml-0.5" />
                    </div>
                </div>
            </div>
        </div>
    </div>
);

const WebinarRoomMockup = () => (
    <div className="bg-slate-900 text-[9px] text-white">
        <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between">
            <div className="font-bold text-[8px] flex items-center gap-1"><span className="w-1.5 h-1.5 rounded-full bg-red-500 inline-block" /> LIVE · [Your Name]'s Webinar</div>
            <div className="text-[7px] text-slate-400 flex items-center gap-1"><Users className="w-2.5 h-2.5" /> 847 attending</div>
        </div>
        <div className="flex">
            <div className="flex-1">
                <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center relative">
                    <div className="bg-white/10 rounded-lg p-3 w-4/5 text-center space-y-1.5">
                        <div className="text-[7px] text-blue-300 font-bold uppercase">THE 3-STEP FRAMEWORK</div>
                        <div className="text-white font-black text-[10px] leading-tight">How To [Get Result]<br/>Without [Pain Point]</div>
                        <div className="grid grid-cols-3 gap-1 mt-1">
                            {['STEP 1', 'STEP 2', 'STEP 3'].map(s => (
                                <div key={s} className="bg-blue-600/30 rounded text-[6px] font-bold text-blue-300 py-1">{s}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 bg-slate-800">
                    <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center text-[6px] font-black">JD</div>
                    <div className="text-[7px] text-slate-300 font-bold flex-1">[Your Name]</div>
                    <div className="bg-orange-500 text-white text-[7px] font-black px-2 py-0.5 rounded">🔥 CLAIM OFFER</div>
                </div>
            </div>
            <div className="w-24 bg-slate-800 border-l border-slate-700 flex flex-col">
                <div className="px-2 py-1 border-b border-slate-700 text-[7px] font-bold text-slate-400">LIVE CHAT</div>
                <div className="flex-1 p-1.5 space-y-1.5">
                    {[['Sarah M.', 'This is amazing! 🔥'], ['John K.', 'Taking notes!'], ['Maria L.', 'Mind blown 🤯'], ['Dave R.', 'Where do I sign up?']].map(([n, m]) => (
                        <div key={n} className="text-[6px]">
                            <span className="text-blue-400 font-bold">{n}: </span>
                            <span className="text-slate-300">{m}</span>
                        </div>
                    ))}
                </div>
                <div className="p-1.5 border-t border-slate-700">
                    <div className="bg-slate-700 rounded px-1.5 py-1 text-[6px] text-slate-500">Type a message...</div>
                </div>
            </div>
        </div>
    </div>
);

const OfferPageMockup = () => (
    <div className="bg-white text-[9px] text-slate-700">
        <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between">
            <Bar w="w-12" h="h-2" color="bg-slate-600" />
            <div className="text-[7px] text-red-400 flex items-center gap-0.5 font-bold"><Clock className="w-2 h-2" /> OFFER CLOSES IN 23:41:07</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-center space-y-1">
                <div className="font-black text-slate-900 text-[11px] leading-tight">Join [Program Name]<br/>And Get [Outcome] in [Timeframe]</div>
                <div className="text-[7px] text-slate-500">Exclusively for webinar attendees — price goes up at midnight</div>
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[8px]">Everything You Get Today:</div>
                {['[Core Program] ($997 value)', '[Bonus 1: Done-For-You Templates] ($297 value)', '[Bonus 2: Private Community] ($197 value)', '[Bonus 3: Live Q&A Calls x4] ($497 value)'].map(i => (
                    <div key={i} className="flex items-center gap-1 text-[8px] text-slate-600">
                        <Star className="w-2 h-2 text-yellow-500 fill-yellow-500 shrink-0" /> {i}
                    </div>
                ))}
                <div className="border-t border-slate-200 pt-1.5">
                    <div className="text-[7px] text-slate-500">Total value: <span className="line-through">$1,988</span></div>
                    <div className="font-black text-green-600 text-[10px]">Today Only: $997</div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-2xl font-black text-slate-900">$997</div>
                <div className="text-[7px] text-slate-500">or 3 payments of $397</div>
            </div>
            <div className="w-full bg-orange-500 text-white font-black text-[10px] py-2 rounded text-center">YES! I Want In Now →</div>
            <div className="flex items-center justify-center gap-1 text-[7px] text-slate-500">
                <Shield className="w-2 h-2 text-green-500" /> 30-Day Money Back Guarantee
            </div>
        </div>
    </div>
);

const WebinarOrderMockup = () => (
    <div className="bg-white text-[9px] text-slate-700">
        <div className="bg-slate-900 px-3 py-1.5"><Bar w="w-16" h="h-2" color="bg-slate-600" /></div>
        <div className="p-3 space-y-2">
            <div className="font-black text-center text-[10px]">🔒 Secure Order Form</div>
            <div className="text-[7px] text-red-500 text-center font-bold flex items-center justify-center gap-0.5">
                <Clock className="w-2 h-2" /> Webinar special closes soon
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-[8px] text-slate-700">Order Summary</div>
                <div className="flex justify-between text-[8px]"><span className="text-slate-600">[Program Name]</span><span className="font-bold">$997</span></div>
                <div className="flex justify-between text-[7px] text-green-600"><span>Webinar Bonus Discount</span><span className="font-bold">-$991</span></div>
                <div className="border-t border-slate-200 pt-1 flex justify-between text-[8px] font-black"><span>Total Today</span><span className="text-orange-500">$997</span></div>
            </div>
            <div className="space-y-1.5">
                {['Full Name', 'Email Address'].map(f => (
                    <div key={f} className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[8px] text-slate-400">{f}</div>
                ))}
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 flex justify-between items-center">
                    <Bar w="w-3/4" h="h-1.5" color="bg-slate-200" />
                    <div className="flex gap-0.5"><div className="w-3 h-2 bg-blue-600 rounded-[2px]" /><div className="w-3 h-2 bg-red-500 rounded-[2px]" /></div>
                </div>
            </div>
            <div className="w-full bg-green-500 text-white font-black text-[10px] py-2 rounded text-center">Complete My Order →</div>
            <div className="flex items-center justify-center gap-1 text-[7px] text-slate-400"><Shield className="w-2 h-2" /> SSL Secured · 30-Day Guarantee</div>
        </div>
    </div>
);

const WebinarTYMockup = () => (
    <div className="bg-white text-[9px] text-slate-700">
        <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🚀</div>
            <div className="text-white font-black text-[10px]">Welcome to [Program Name]!</div>
            <div className="text-blue-100 text-[7px]">Your journey to [outcome] starts now</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[8px] text-slate-600 text-center">Your receipt is on the way. Access is live now.</div>
            <div className="w-full bg-blue-600 text-white font-black text-[9px] py-2 rounded text-center">Access [Program Name] Now →</div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[8px]">Your Next 3 Steps:</div>
                {['Join the private members community', 'Watch the onboarding video (10 min)', 'Complete your first module today'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5 text-[8px] text-slate-600">
                        <div className="w-3.5 h-3.5 rounded-full bg-blue-100 text-blue-600 font-black flex items-center justify-center text-[7px] shrink-0">{i + 1}</div>
                        {s}
                    </div>
                ))}
            </div>
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-2 text-center space-y-1">
                <div className="font-bold text-orange-700 text-[8px]">Want even faster results?</div>
                <div className="text-[7px] text-orange-600">Book a private 1-on-1 strategy session with our team</div>
                <div className="bg-orange-500 text-white text-[7px] font-bold px-3 py-1 rounded inline-block">Book My Call →</div>
            </div>
        </div>
    </div>
);

// ─── Stages ────────────────────────────────────────────────────────────────────

const STAGES = [
    {
        id: 'reg', label: 'Registration', sublabel: 'Free Opt-in',
        icon: Users, bg: 'bg-blue-600', pill: 'bg-blue-900/40 text-blue-300 border-blue-700', text: 'text-blue-400',
        url: 'register.yoursite.com', mockup: <RegMockup />,
        conversion: '20–40%', conversionNote: 'of visitors register', price: 'Free',
        description: 'A focused landing page with the webinar\'s promise, date/time, and a simple name+email form. Strip all distractions — no nav bar, no footer links.',
        tips: ['Promise a specific transformation in the headline', 'Show the date, time, and timezone — ambiguity kills sign-ups', 'Display host credentials and social proof clearly', 'A countdown timer to the webinar date lifts registrations 15–25%'],
        metrics: [{ label: 'Conv. Rate', value: '20–40%' }, { label: 'Price', value: 'Free' }, { label: 'Goal', value: 'Collect leads' }],
    },
    {
        id: 'confirm', label: 'Confirmation', sublabel: 'You\'re Registered',
        icon: Calendar, bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        url: 'register.yoursite.com/confirmed', mockup: <ConfirmMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'The most underused page in a webinar funnel. Use it to warm up attendees, get them into your community, and give pre-webinar content that dramatically raises the show-up rate.',
        tips: ['Invite them to a Facebook group or WhatsApp immediately', 'A short warm-up video pre-sells your authority before the webinar', '"Refer a friend" mechanism can organically grow registrations', 'Preview the 3 things they\'ll learn — build anticipation'],
        metrics: [{ label: 'Show Rate', value: '20–50%' }, { label: 'Goal', value: 'Warm them up' }, { label: 'Action', value: 'Join group' }],
    },
    {
        id: 'room', label: 'Webinar Room', sublabel: 'Live or Automated',
        icon: Video, bg: 'bg-indigo-600', pill: 'bg-indigo-900/40 text-indigo-300 border-indigo-700', text: 'text-indigo-400',
        url: 'zoom.us/j/webinar', mockup: <WebinarRoomMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'The live (or EverWebinar automated) event. First 60 minutes is pure value; last 20–30 minutes is the pitch. Live chat creates social proof and drives conversions.',
        tips: ['Open with a bold promise or a shocking statistic to hook attention', 'Use the "Stack" — layer value before revealing the price', 'Have a moderator in chat amplify excitement and echo the offer link', 'Put the clickable order link in chat when you make the pitch'],
        metrics: [{ label: 'Pitch Timing', value: 'Last 30 min' }, { label: 'Attend Rate', value: '20–50%' }, { label: 'Buy Rate', value: '1–3% regs' }],
    },
    {
        id: 'offer', label: 'Offer Page', sublabel: 'Post-Webinar Pitch',
        icon: Star, bg: 'bg-orange-600', pill: 'bg-orange-900/40 text-orange-300 border-orange-700', text: 'text-orange-400',
        url: 'yoursite.com/offer', mockup: <OfferPageMockup />,
        conversion: '1–3%', conversionNote: 'of total registrants buy', price: '$497–$2,997',
        description: 'The pitch page shared during and after the webinar. It restates the full value stack, handles the top objections, and drives urgency with a real countdown timer.',
        tips: ['Replay the entire value stack before showing the price', 'A 24–72 hour close window is standard — use a real visible timer', 'FAQ section should address the top 5 objections cold', 'Offer a payment plan option — it often doubles conversions'],
        metrics: [{ label: 'Conv. Rate', value: '1–3% regs' }, { label: 'Price', value: '$497–$2,997' }, { label: 'Close Window', value: '24–72 hrs' }],
    },
    {
        id: 'checkout', label: 'Order Page', sublabel: 'Secure Checkout',
        icon: ShoppingCart, bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        url: 'yoursite.com/checkout', mockup: <WebinarOrderMockup />,
        conversion: '60–80%', conversionNote: 'of clicks complete purchase', price: null,
        description: 'Minimal checkout — order summary, name, email, payment. A payment plan option can double your conversions. Re-state the guarantee prominently near the submit button.',
        tips: ['Keep the form short: name, email, card — nothing else', 'Payment plan option often converts as many as single pay', 'Guarantee badge and SSL indicators belong near the submit button', 'Show exactly what they get access to the moment they pay'],
        metrics: [{ label: 'Abandon Rate', value: '20–40%' }, { label: 'Pay Plan', value: '~50% choose' }, { label: 'Trust', value: 'Critical here' }],
    },
    {
        id: 'ty', label: 'Thank You', sublabel: 'Onboarding & Access',
        icon: Award, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'yoursite.com/members', mockup: <WebinarTYMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Confirms the purchase, delivers instant access, and sets a positive tone. The first 24 hours is critical — a quick win here prevents buyer\'s remorse and refunds.',
        tips: ['Give a small quick win in the first 24 hours — kills buyer\'s remorse', 'Automated welcome email sequence starts within minutes of purchase', 'Seed the next offer: a strategy call or higher-tier program', 'A personal welcome video makes the experience feel human'],
        metrics: [{ label: 'Refund Rate', value: '< 5% goal' }, { label: 'Goal', value: 'Delight them' }, { label: 'Next Step', value: 'Ascend LTV' }],
    },
];

const REVENUE_DATA = [
    { label: 'Registrants (100)', value: '100', note: 'Free opt-ins', color: 'text-blue-400' },
    { label: 'Attendees (~35%)', value: '35', note: 'Showed up live', color: 'text-indigo-400' },
    { label: 'Buyers (~6% of attends)', value: '~2', note: 'Converted at pitch', color: 'text-orange-400' },
    { label: 'Revenue @ $997', value: '$2,000', note: '~$20 per registrant', color: 'text-green-400' },
];

const REVENUE_SUMMARY = {
    title: 'Example: 100 Registrants → Webinar Revenue',
    total: '$2,000+',
    perUnitLabel: 'Value Per Registrant',
    perUnit: '~$20',
    note: 'With follow-up email sequences and replays, effective EPC can climb to $30–$60 per registrant.',
};

const WebinarFunnel = () => (
    <FunnelTemplate
        title="Webinar Funnel"
        description="The high-converting sequence for selling $497–$2,997 offers through a live or automated webinar event."
        stages={STAGES}
        revenueData={REVENUE_DATA}
        revenueSummary={REVENUE_SUMMARY}
    />
);

export default WebinarFunnel;
