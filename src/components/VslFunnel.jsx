import React from 'react';
import { Users, Play, ShoppingCart, Zap, Gift, Award, Check, Shield, Clock, Star } from 'lucide-react';
import FunnelTemplate, { Bar, VideoFrame } from './FunnelTemplate';

// ─── Mockups ───────────────────────────────────────────────────────────────────

const VslAdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[11px]">P</div>
            <div className="flex flex-col gap-0.5">
                <Bar w="w-20" h="h-1.5" color="bg-slate-300" />
                <div className="text-[10px] text-slate-400">Sponsored · 🌐</div>
            </div>
        </div>
        <div className="px-2.5 pb-1.5 space-y-1">
            <div className="font-bold text-slate-800 text-[11px]">Discover The [Result] System That's Helped [X] People [Achieve Outcome]</div>
            <Bar w="w-4/5" h="h-1.5" color="bg-slate-200" />
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-slate-700 to-slate-900 flex flex-col items-center justify-center gap-1 relative">
            <div className="absolute top-1.5 left-1.5 bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded">▶ WATCH VIDEO</div>
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-5 h-5 text-white fill-white ml-0.5" />
            </div>
            <div className="text-white font-black text-xs text-center px-3">[Your Compelling Hook Here]</div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-2.5 py-2 flex items-center justify-between">
            <div><div className="text-[10px] text-slate-400">yoursite.com</div><Bar w="w-24" h="h-1.5" color="bg-slate-300" className="mt-0.5" /></div>
            <div className="bg-blue-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">Watch Now</div>
        </div>
        <div className="px-2.5 py-1.5 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center gap-0.5 text-[10px] text-slate-400"><span>👍❤️😮</span><span className="ml-0.5">3.1k</span></div>
            <div className="flex gap-2 text-[10px] text-slate-400"><span>Like</span><span>Comment</span><span>Share</span></div>
        </div>
    </div>
);

const VslPageMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between">
            <Bar w="w-12" h="h-2" color="bg-slate-600" />
            <div className="text-[10px] text-yellow-400 font-bold flex items-center gap-0.5"><Clock className="w-2 h-2" /> Offer expires in 47:32</div>
        </div>
        <div className="p-3 space-y-2.5">
            <div className="text-center font-black text-slate-900 text-[11px] leading-tight">
                "How [Persona] Gets [Outcome]<br/>In [Timeframe] — Guaranteed"
            </div>
            <div className="text-[11px] text-slate-500 text-center">Watch the video below to see exactly how it works</div>
            {/* VSL Video */}
            <VideoFrame progress={0} time="0:00" duration="47:00" />
            {/* Buy button (appears after video) */}
            <div className="bg-yellow-50 border-2 border-yellow-400 rounded-lg p-2 text-center space-y-1">
                <div className="text-[10px] text-yellow-700 font-bold">⚡ Button unlocks after watching</div>
                <div className="w-full bg-orange-500 text-white font-black text-xs py-2 rounded opacity-50">
                    YES — I Want [Outcome] Now →
                </div>
            </div>
            {/* Bullets below video */}
            <div className="space-y-1 pt-1">
                <div className="font-bold text-[11px] text-slate-700">In this training you'll discover:</div>
                {['The #1 reason [common approach] fails', 'The [X]-step system that produces [result]', 'How to get started even if [objection]'].map(b => (
                    <div key={b} className="flex items-start gap-1 text-[11px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-green-500 shrink-0 mt-0.5" /> {b}
                    </div>
                ))}
            </div>
            {/* Testimonial strip */}
            <div className="border border-slate-200 rounded-lg p-2 bg-slate-50">
                <div className="text-[10px] text-slate-500 italic">"[Specific result] in [timeframe]. I couldn't believe it worked so fast."</div>
                <div className="text-[10px] font-bold text-slate-700 mt-0.5">— [Name], [Title/Location]</div>
            </div>
        </div>
    </div>
);

const VslOrderMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-1.5"><Bar w="w-16" h="h-2" color="bg-slate-600" /></div>
        <div className="p-3 space-y-2">
            <div className="font-black text-center text-sm">🔒 Complete Your Order</div>
            <div className="bg-orange-50 border border-orange-200 rounded p-2 text-center">
                <div className="text-[10px] text-orange-700 font-bold">⏱ Price increases when timer hits zero</div>
                <div className="text-sm font-black text-orange-600">47:18</div>
            </div>
            <div className="space-y-1.5">
                {['Full Name', 'Email Address'].map(f => (
                    <div key={f} className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">{f}</div>
                ))}
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 flex justify-between items-center">
                    <Bar w="w-3/4" h="h-1.5" color="bg-slate-200" />
                    <div className="flex gap-0.5"><div className="w-3 h-2 bg-blue-600 rounded-[2px]" /><div className="w-3 h-2 bg-red-500 rounded-[2px]" /></div>
                </div>
            </div>
            <div className="text-center">
                <div className="text-[11px] text-slate-500 line-through">$297</div>
                <div className="text-2xl font-black text-slate-900">$47</div>
                <div className="text-[10px] text-slate-500">One-time · Instant access</div>
            </div>
            <div className="w-full bg-orange-500 text-white font-black text-sm py-2 rounded text-center">Get Instant Access →</div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400"><Shield className="w-2 h-2" /> SSL Secured · 60-Day Money Back</div>
        </div>
    </div>
);

const VslUpsellMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-orange-500 px-3 py-2 text-center">
            <div className="text-white font-black text-xs">⚡ WAIT — Your order is processing!</div>
            <div className="text-orange-100 text-[10px]">Read this before going to your receipt</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="font-black text-slate-900 text-sm text-center leading-tight">
                "Get [Done-For-You Upgrade] Added To Your Order For Just $97 — One Time Only"
            </div>
            <VideoFrame progress={0} time="0:00" duration="12:00" />
            <div className="text-[10px] text-slate-500 text-center font-bold">This is a ONE-TIME offer. It disappears when you leave this page.</div>
            {['[Premium Feature / Done-For-You]', '[Advanced Training Modules]', '[Private Implementation Support]'].map(b => (
                <div key={b} className="flex items-center gap-1 text-[11px] text-slate-700">
                    <Star className="w-2.5 h-2.5 text-orange-400 fill-orange-400 shrink-0" /> {b}
                </div>
            ))}
            <div className="w-full bg-orange-500 text-white font-black text-xs py-2 rounded text-center">YES! Add This For +$97 →</div>
            <div className="text-center text-[10px] text-slate-400 underline cursor-pointer">No thanks, I'll figure it out on my own</div>
        </div>
    </div>
);

const VslDownsellMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-700 px-3 py-2 text-center">
            <div className="text-white font-black text-xs">Wait — One More Thing Before You Go</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[11px] text-slate-500 text-center">I understand $97 might not be right for you right now...</div>
            <div className="font-black text-slate-900 text-sm text-center leading-tight">
                "Get The Core Of [Upgrade] For Just $37 — Final Offer"
            </div>
            <div className="bg-slate-50 rounded-lg p-2 border border-slate-200 space-y-1">
                <div className="text-[11px] font-bold text-slate-700">What you still get:</div>
                {['[Core Feature 1]', '[Core Feature 2]', '[Lite Support Access]'].map(b => (
                    <div key={b} className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-green-500 shrink-0" /> {b}
                    </div>
                ))}
            </div>
            <div className="text-center">
                <div className="text-[11px] text-slate-400 line-through">$97</div>
                <div className="text-lg font-black text-slate-800">$37</div>
            </div>
            <div className="w-full bg-slate-800 text-white font-black text-xs py-2 rounded text-center">Yes — Give Me The Lite Version</div>
            <div className="text-center text-[10px] text-slate-400 underline cursor-pointer">No thanks, I'll pass on this too</div>
        </div>
    </div>
);

const VslTYMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🎉</div>
            <div className="text-white font-black text-sm">Payment Confirmed!</div>
            <div className="text-green-100 text-[10px]">Welcome to [Product Name]</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[11px] text-slate-700 text-center">Check your email for your receipt and login details.</div>
            <div className="w-full bg-green-500 text-white font-black text-xs py-2 rounded text-center">Access [Product Name] Now →</div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="text-[11px] font-bold text-slate-700">Your Next Steps:</div>
                {['Join our private community', 'Watch the quick-start video', 'Complete Module 1 today'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <div className="w-3.5 h-3.5 rounded-full bg-green-100 text-green-600 font-black flex items-center justify-center text-[10px] shrink-0">{i + 1}</div>
                        {s}
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center space-y-1">
                <div className="text-[11px] font-bold text-blue-700">Ready to go deeper?</div>
                <div className="text-[10px] text-blue-500">Book a free strategy call with our team →</div>
                <div className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1 rounded inline-block">Book My Call</div>
            </div>
        </div>
    </div>
);

// ─── Stages ────────────────────────────────────────────────────────────────────

const STAGES = [
    {
        id: 'ad', label: 'Ad / Traffic', sublabel: 'Drive to VSL Page',
        icon: Users, bg: 'bg-blue-600', pill: 'bg-blue-900/40 text-blue-300 border-blue-700', text: 'text-blue-400',
        url: 'facebook.com/ads', mockup: <VslAdMockup />,
        conversion: '1–3%', conversionNote: 'click-through rate', price: null,
        description: 'Paid ads (Meta, YouTube, TikTok) or organic content drive cold or warm traffic to your VSL page. The ad\'s only job is to generate curiosity — not to sell.',
        tips: ['Lead with the hook: a pain point, bold claim, or surprising result', 'Video ads consistently outperform image ads for VSL traffic', 'Target warm audiences (lookalikes, retargeting) first before cold', 'Keep ad copy short — save the persuasion for the VSL itself'],
        metrics: [{ label: 'CTR Target', value: '1–3%' }, { label: 'CPC Target', value: '$0.50–$2' }, { label: 'Goal', value: 'Cheap clicks' }],
    },
    {
        id: 'vsl', label: 'VSL Page', sublabel: 'Video Sales Letter',
        icon: Play, bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        url: 'yoursite.com/watch', mockup: <VslPageMockup />,
        conversion: '2–6%', conversionNote: 'of visitors buy', price: '$27–$197',
        description: 'A single long-form video does all the selling. The buy button is hidden until a specific point in the video (usually 70–80% through), which forces watch time and boosts conversions.',
        tips: ['First 60 seconds must hook hard — address the core pain immediately', 'Delay the buy button to 70–80% through — it filters non-buyers', 'Add a "skip to offer" option for return visitors', 'Testimonials and results shown mid-video dramatically lift trust'],
        metrics: [{ label: 'Conv. Rate', value: '2–6%' }, { label: 'Price', value: '$27–$197' }, { label: 'Watch Rate', value: '40–60%' }],
    },
    {
        id: 'order', label: 'Order Form', sublabel: 'Checkout Page',
        icon: ShoppingCart, bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        url: 'yoursite.com/checkout', mockup: <VslOrderMockup />,
        conversion: '60–75%', conversionNote: 'of clicks complete purchase', price: null,
        description: 'A minimal, friction-free checkout form. Repeat the urgency from the VSL (timer, price expiry), and reduce fields to the bare minimum: name, email, payment.',
        tips: ['Repeat the countdown timer from the VSL — urgency compounds', 'One-page checkout outperforms multi-step for low-ticket offers', 'Add a "what you get" sidebar to reinforce the decision', 'Exit-intent popup with a discount can recover 5–10% of abandoners'],
        metrics: [{ label: 'Abandon Rate', value: '25–40%' }, { label: 'Timer Impact', value: '+15% conv.' }, { label: 'Best Practice', value: 'One-page' }],
    },
    {
        id: 'upsell', label: 'Upsell 1', sublabel: 'One-Time Offer',
        icon: Zap, bg: 'bg-orange-600', pill: 'bg-orange-900/40 text-orange-300 border-orange-700', text: 'text-orange-400',
        url: 'yoursite.com/upgrade', mockup: <VslUpsellMockup />,
        conversion: '20–35%', conversionNote: 'of buyers upgrade', price: '$97–$297',
        description: 'Shown immediately after purchase, before the receipt page. One click — no card re-entry. Offers the "done-for-you" or "advanced" version that amplifies the original purchase.',
        tips: ['Show it before the thank you page — momentum is highest right after purchase', 'One-click add — never make them re-enter card details', 'Frame it as the natural "next step" to make the product work faster', 'Video OTOs convert 20–30% higher than text-only pages'],
        metrics: [{ label: 'Take Rate', value: '20–35%' }, { label: 'Price', value: '$97–$297' }, { label: 'Impact', value: 'Main profit' }],
    },
    {
        id: 'downsell', label: 'Downsell', sublabel: 'If OTO Declined',
        icon: Gift, bg: 'bg-yellow-600', pill: 'bg-yellow-900/40 text-yellow-300 border-yellow-700', text: 'text-yellow-400',
        url: 'yoursite.com/lite', mockup: <VslDownsellMockup />,
        conversion: '10–20%', conversionNote: 'of those who declined', price: '$27–$67',
        description: 'Triggered when a buyer declines the upsell. Offers a stripped-down version at 50–60% off. Recovers revenue from price-sensitive buyers who wanted the upsell but balked at the price.',
        tips: ['Acknowledge the "no" — don\'t pretend they didn\'t decline', 'Offer the core deliverable at 50–60% of the upsell price', 'Keep the video short: 60–90 seconds max', 'Frame it as "final chance" — because it truly is'],
        metrics: [{ label: 'Take Rate', value: '10–20%' }, { label: 'Price', value: '$27–$67' }, { label: 'Purpose', value: 'Revenue recovery' }],
    },
    {
        id: 'ty', label: 'Thank You', sublabel: 'Delivery & Ascension',
        icon: Award, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'yoursite.com/members', mockup: <VslTYMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Confirms purchase and delivers access. The best thank you pages also plant the seed for the next level — a strategy call, coaching program, or community.',
        tips: ['Deliver access instantly — never make them wait', 'Reinforce the buying decision to prevent refund requests', 'Introduce the community or support channel on this page', 'Use a strategy call CTA to ascend buyers to a high-ticket offer'],
        metrics: [{ label: 'Refund Rate', value: '< 5% goal' }, { label: 'Goal', value: 'WOW them' }, { label: 'Next Step', value: 'High-ticket' }],
    },
];

const REVENUE_DATA = [
    { label: 'Front-end Sales', value: '$2,350', note: '100 visitors × 4.7% × $47', color: 'text-purple-400' },
    { label: 'Upsell (OTO)', value: '$1,891', note: '~27% of 5 buyers × $147', color: 'text-orange-400' },
    { label: 'Downsell', value: '$222', note: '~15% declined OTO × $37', color: 'text-yellow-400' },
    { label: 'Total (100 visitors)', value: '$4,463', note: '$44.63 per visitor EPC', color: 'text-green-400' },
];

const REVENUE_SUMMARY = {
    title: 'Example Revenue Breakdown — 100 VSL Page Visitors',
    total: '$4,463',
    perUnitLabel: 'Earnings Per Click',
    perUnit: '$44.63',
    note: <>A strong VSL funnel targets <span className="text-white font-bold">$2–$5 EPC</span> from cold traffic. With warm traffic or retargeting, this can climb to <span className="text-white font-bold">$10–$50 EPC</span>.</>,
};

const VslFunnel = () => (
    <FunnelTemplate
        title="VSL Funnel"
        description="A video-driven funnel where a single long-form video does all the selling — no long sales page required."
        stages={STAGES}
        revenueData={REVENUE_DATA}
        revenueSummary={REVENUE_SUMMARY}
    />
);

export default VslFunnel;
