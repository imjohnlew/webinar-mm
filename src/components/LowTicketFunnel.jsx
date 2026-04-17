import React from 'react';
import { Play, ShoppingCart, Zap, Gift, Award, Users, Check, Star, Shield, Clock } from 'lucide-react';
import FunnelTemplate, { Bar } from './FunnelTemplate';

// ─── Page Mockups ─────────────────────────────────────────────────────────────

const AdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px] text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[8px]">P</div>
            <div className="flex flex-col gap-0.5">
                <Bar w="w-20" h="h-1.5" color="bg-slate-300" />
                <div className="text-[7px] text-slate-400">Sponsored · <span className="text-blue-500">🌐</span></div>
            </div>
        </div>
        <div className="px-2.5 pb-1.5 space-y-1">
            <Bar w="w-full" h="h-1.5" color="bg-slate-200" />
            <Bar w="w-4/5" h="h-1.5" color="bg-slate-200" />
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-blue-500 to-purple-600 flex flex-col items-center justify-center gap-1 relative">
            <div className="absolute top-1.5 left-1.5 bg-yellow-400 text-black text-[7px] font-black px-1.5 py-0.5 rounded">🔥 FREE TRAINING</div>
            <div className="text-white font-black text-[10px] text-center px-3 leading-tight">How To [Get Result]<br/>Without [Pain Point]</div>
            <div className="mt-1 bg-white/20 text-white text-[7px] font-bold px-2 py-0.5 rounded-full">WATCH NOW →</div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-2.5 py-2 flex items-center justify-between">
            <div>
                <div className="text-[7px] text-slate-400">yoursite.com</div>
                <Bar w="w-24" h="h-1.5" color="bg-slate-300" className="mt-0.5" />
            </div>
            <div className="bg-blue-600 text-white text-[7px] font-bold px-2.5 py-1 rounded">Learn More</div>
        </div>
        <div className="px-2.5 py-1.5 flex items-center justify-between border-t border-slate-100">
            <div className="flex items-center gap-0.5 text-[7px] text-slate-400">
                <span>👍❤️😮</span> <span className="ml-0.5">2.4k</span>
            </div>
            <div className="flex gap-2 text-[7px] text-slate-400">
                <span>Like</span><span>Comment</span><span>Share</span>
            </div>
        </div>
    </div>
);

const SalesPageMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px]">
        <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between">
            <Bar w="w-12" h="h-2" color="bg-slate-600" />
            <div className="bg-orange-500 text-white text-[7px] font-bold px-2 py-0.5 rounded">Buy Now</div>
        </div>
        <div className="bg-red-600 text-white text-[8px] font-black text-center py-1 flex items-center justify-center gap-1">
            <Clock className="w-2.5 h-2.5" /> LIMITED TIME OFFER — Expires Soon
        </div>
        <div className="p-3 space-y-2">
            <div className="text-center space-y-1">
                <div className="font-black text-slate-900 text-[10px] leading-tight">
                    "Discover The Exact System To<br/>[Achieve Outcome] In [Timeframe]"
                </div>
                <div className="text-[8px] text-slate-500">Even if you're a complete beginner with no experience</div>
            </div>
            <div className="w-full aspect-video bg-slate-800 rounded flex items-center justify-center relative">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-4 h-4 text-white fill-white ml-0.5" />
                </div>
                <div className="absolute bottom-1 left-0 right-0 h-1 bg-slate-700 mx-2 rounded-full">
                    <div className="w-1/3 h-full bg-red-500 rounded-full" />
                </div>
            </div>
            {['Get [Result] in just [X] days', 'Works even if [Objection 1]', 'No [Pain Point] required', 'Step-by-step system — anyone can do it'].map(b => (
                <div key={b} className="flex items-start gap-1 text-[8px] text-slate-700">
                    <Check className="w-2.5 h-2.5 text-green-500 mt-0.5 shrink-0" /> {b}
                </div>
            ))}
            <div className="text-center space-y-0.5">
                <div className="text-[8px] text-slate-400 line-through">$197</div>
                <div className="text-xl font-black text-orange-500">$27</div>
                <div className="text-[7px] text-slate-500">One-time payment · Instant access</div>
            </div>
            <div className="w-full bg-orange-500 text-white font-black text-[10px] py-2 rounded text-center">
                YES! Give Me Instant Access →
            </div>
            <div className="flex items-center justify-center gap-1 text-[7px] text-slate-500">
                <Shield className="w-2.5 h-2.5 text-green-500" /> 30-Day Money Back Guarantee
            </div>
        </div>
    </div>
);

const OrderPageMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px]">
        <div className="bg-slate-900 px-3 py-1.5">
            <Bar w="w-16" h="h-2" color="bg-slate-600" />
        </div>
        <div className="p-3 space-y-2">
            <div className="font-black text-slate-900 text-[10px] text-center">🔒 Secure Checkout</div>
            <div className="text-[8px] text-slate-500 text-center">You're one step away from [Outcome]</div>
            <div className="space-y-1.5">
                {['Full Name', 'Email Address'].map(f => (
                    <div key={f}>
                        <div className="text-[7px] text-slate-500 mb-0.5">{f}</div>
                        <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50">
                            <Bar w="w-3/4" h="h-1.5" color="bg-slate-200" />
                        </div>
                    </div>
                ))}
                <div>
                    <div className="text-[7px] text-slate-500 mb-0.5">Card Number</div>
                    <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 flex items-center justify-between">
                        <Bar w="w-3/4" h="h-1.5" color="bg-slate-200" />
                        <div className="flex gap-0.5">
                            <div className="w-3 h-2 bg-blue-600 rounded-[2px]" />
                            <div className="w-3 h-2 bg-red-500 rounded-[2px]" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="border-2 border-yellow-400 rounded-lg p-2 bg-yellow-50 space-y-1">
                <div className="flex items-start gap-1.5">
                    <div className="w-3 h-3 border-2 border-yellow-500 rounded bg-yellow-400 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-2 h-2 text-white" />
                    </div>
                    <div>
                        <div className="font-black text-yellow-700 text-[8px]">⚡ YES — Add [Bonus Product] for only $27!</div>
                        <div className="text-[7px] text-yellow-600 mt-0.5">This exclusive add-on complements your order perfectly. One click to add!</div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-green-500 text-white font-black text-[10px] py-2 rounded text-center">
                Complete My Order → $27
            </div>
            <div className="flex items-center justify-center gap-2 text-[7px] text-slate-400">
                <Shield className="w-2.5 h-2.5" /> SSL Secured · Safe Checkout
            </div>
        </div>
    </div>
);

const Oto1Mockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px]">
        <div className="bg-orange-500 px-3 py-2 text-center">
            <div className="text-white font-black text-[9px]">⚡ WAIT — Your Order Is Being Processed!</div>
            <div className="text-orange-100 text-[7px]">Read this before you go to your confirmation page</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="font-black text-slate-900 text-[10px] text-center leading-tight">
                "Add [Premium Product] To Your Order<br/>For Just $97 — One Time Only"
            </div>
            <div className="w-full aspect-video bg-slate-800 rounded flex items-center justify-center">
                <div className="w-7 h-7 rounded-full bg-white/20 flex items-center justify-center">
                    <Play className="w-3.5 h-3.5 text-white fill-white ml-0.5" />
                </div>
            </div>
            <div className="text-[8px] text-slate-600 text-center">This is a ONE-TIME offer and will never be shown again</div>
            {['[Advanced Feature 1]', '[Done-For-You Templates]', '[Private Community Access]'].map(b => (
                <div key={b} className="flex items-center gap-1 text-[8px] text-slate-700">
                    <Star className="w-2.5 h-2.5 text-orange-400 fill-orange-400 shrink-0" /> {b}
                </div>
            ))}
            <div className="w-full bg-orange-500 text-white font-black text-[9px] py-2 rounded text-center">
                YES! Add This To My Order → +$97
            </div>
            <div className="w-full text-center text-[7px] text-slate-400 underline py-1">
                No thanks, I don't want this upgrade
            </div>
        </div>
    </div>
);

const DownsellMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px]">
        <div className="bg-slate-700 px-3 py-2 text-center">
            <div className="text-white font-black text-[9px]">Wait — Before You Leave!</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[8px] text-slate-500 text-center">I understand $97 might feel like a stretch right now...</div>
            <div className="font-black text-slate-900 text-[10px] text-center leading-tight">
                "Get The Core Of [Upsell] For Just $47"
            </div>
            <div className="bg-slate-50 rounded-lg p-2 border border-slate-200 space-y-1">
                <div className="text-[8px] font-bold text-slate-700">What you still get:</div>
                {['[Core Feature 1]', '[Core Feature 2]', '[Partial Access]'].map(b => (
                    <div key={b} className="flex items-center gap-1 text-[8px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-green-500 shrink-0" /> {b}
                    </div>
                ))}
            </div>
            <div className="text-center">
                <div className="text-[8px] text-slate-400 line-through">$97</div>
                <div className="text-lg font-black text-slate-800">$47</div>
            </div>
            <div className="w-full bg-slate-800 text-white font-black text-[9px] py-2 rounded text-center">
                YES — I'll Take The Lite Version
            </div>
            <div className="w-full text-center text-[7px] text-slate-400 underline py-0.5">
                No thanks, I'll pass on this too
            </div>
        </div>
    </div>
);

const ThankYouMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-[9px]">
        <div className="bg-gradient-to-r from-green-500 to-emerald-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🎉</div>
            <div className="text-white font-black text-[10px]">Payment Confirmed!</div>
            <div className="text-green-100 text-[7px]">Welcome to [Product Name]</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[8px] text-slate-700 text-center">Check your email for your receipt and access details</div>
            <div className="w-full bg-green-500 text-white font-black text-[9px] py-2 rounded text-center">
                Access [Product Name] Now →
            </div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="text-[8px] font-bold text-slate-700">Your Next Steps:</div>
                {['Join our private community', 'Watch the welcome video', 'Complete Module 1 today'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5 text-[8px] text-slate-600">
                        <div className="w-3.5 h-3.5 rounded-full bg-green-100 text-green-600 font-black flex items-center justify-center text-[7px] shrink-0">{i + 1}</div>
                        {s}
                    </div>
                ))}
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center space-y-1">
                <div className="text-[8px] font-bold text-blue-700">Want faster results?</div>
                <div className="text-[7px] text-blue-500">Book a free strategy call with our team →</div>
                <div className="bg-blue-600 text-white text-[7px] font-bold px-3 py-1 rounded inline-block">Book My Call</div>
            </div>
        </div>
    </div>
);

// ─── Stage Data ────────────────────────────────────────────────────────────────

const STAGES = [
    {
        id: 'ad', label: 'Ad', sublabel: 'Traffic Source', icon: Users,
        url: 'facebook.com/ads',
        bg: 'bg-blue-600', pill: 'bg-blue-900/40 text-blue-300 border-blue-700', text: 'text-blue-400',
        mockup: <AdMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'The entry point. Paid ads (Meta, TikTok, YouTube) or organic content drives cold or warm traffic to your sales page.',
        tips: ['Hook in first 3 seconds — stop the scroll', 'Speak to a specific pain or desire', 'Pattern interrupts outperform polished ads', 'Test 3–5 creatives before scaling'],
        metrics: [{ label: 'CTR Target', value: '1–3%' }, { label: 'CPC Target', value: '$0.50–2' }, { label: 'Goal', value: 'Cheap clicks' }],
    },
    {
        id: 'sales', label: 'Sales Page', sublabel: 'VSL or Long-form', icon: Play,
        url: 'yoursite.com/offer',
        bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        mockup: <SalesPageMockup />,
        conversion: '3–8%', conversionNote: 'of visitors buy', price: '$27–97',
        description: 'The core selling page. A VSL or long-form page explains the problem, the solution, and closes the sale at a low-friction price point.',
        tips: ['Lead with the transformation — not the features', 'VSL typically outperforms text-only', 'Urgency + scarcity increases conversions', 'Address the #1 objection head-on'],
        metrics: [{ label: 'Conv. Rate', value: '3–8%' }, { label: 'Price Point', value: '$27–97' }, { label: 'Goal', value: 'Break-even on ads' }],
    },
    {
        id: 'order', label: 'Order Page', sublabel: 'Checkout + Order Bump', icon: ShoppingCart,
        url: 'yoursite.com/checkout',
        bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        mockup: <OrderPageMockup />,
        conversion: '30–50%', conversionNote: 'add the order bump', price: '$17–37 bump',
        description: 'The checkout page where buyers enter payment info. An order bump adds an impulse purchase to the same transaction.',
        tips: ['Keep the form short: name, email, card', 'Order bump should complement — not compete', 'Use a yellow/high-contrast bump box', 'Add a countdown timer for urgency'],
        metrics: [{ label: 'Bump Take Rate', value: '30–50%' }, { label: 'Bump Price', value: '$17–37' }, { label: 'Impact', value: '+20–30% revenue' }],
    },
    {
        id: 'oto1', label: 'Upsell 1', sublabel: 'One-Time Offer', icon: Zap,
        url: 'yoursite.com/upsell',
        bg: 'bg-orange-600', pill: 'bg-orange-900/40 text-orange-300 border-orange-700', text: 'text-orange-400',
        mockup: <Oto1Mockup />,
        conversion: '20–35%', conversionNote: 'of buyers upgrade', price: '$97–297',
        description: 'Shown immediately after purchase, before the thank you page. One-click — no re-entering card details. Offers the natural "next step" to amplify results.',
        tips: ['Show it before the thank you page', 'One-click purchase — no card re-entry', 'Make it the "done-for-you" or "faster" version', 'Keep the video under 5 minutes'],
        metrics: [{ label: 'Take Rate', value: '20–35%' }, { label: 'Price Point', value: '$97–297' }, { label: 'Impact', value: 'Core profit driver' }],
    },
    {
        id: 'ds1', label: 'Downsell', sublabel: 'If OTO Declined', icon: Gift,
        url: 'yoursite.com/downsell',
        bg: 'bg-yellow-600', pill: 'bg-yellow-900/40 text-yellow-300 border-yellow-700', text: 'text-yellow-400',
        mockup: <DownsellMockup />,
        conversion: '10–20%', conversionNote: 'of those who declined', price: '$37–67',
        description: "Triggered when a buyer declines the upsell. Offers a lighter, cheaper version of the same OTO. Recovers revenue from buyers who wanted it but balked at the price.",
        tips: ["Acknowledge they said no — don't ignore it", 'Offer the core of the upsell at 50–60% off', 'Keep the video short: 60–90 seconds', 'Frame it as a "last chance" — because it is'],
        metrics: [{ label: 'Take Rate', value: '10–20%' }, { label: 'Price Point', value: '$37–67' }, { label: 'Impact', value: 'Revenue recovery' }],
    },
    {
        id: 'ty', label: 'Thank You', sublabel: 'Delivery + Ascension', icon: Award,
        url: 'yoursite.com/thankyou',
        bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        mockup: <ThankYouMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Confirms the purchase, delivers access, and plants the seed for the next level. The best thank you pages also introduce the high-ticket offer or a call booking.',
        tips: ['Deliver instantly — set expectations clearly', 'Reinforce the buying decision to reduce refunds', 'Introduce the community or support channel', 'Seed a strategy call or high-ticket offer'],
        metrics: [{ label: 'Goal', value: 'WOW them' }, { label: 'Refund Rate', value: '< 5%' }, { label: 'Next Step', value: 'High-ticket CTA' }],
    },
];

// ─── Revenue Data ──────────────────────────────────────────────────────────────

const revenueData = [
    { label: 'Front-end Sales', value: '$2,700', note: '100 × $27', color: 'text-purple-400' },
    { label: 'Order Bumps', value: '$1,215', note: '45 × $27', color: 'text-pink-400' },
    { label: 'Upsell (OTO 1)', value: '$2,900', note: '29 × $100', color: 'text-orange-400' },
    { label: 'Downsells', value: '$396', note: '11 × $36', color: 'text-yellow-400' },
];

const revenueSummary = {
    title: 'Example Revenue Breakdown — 100 Buyers',
    total: '$7,211',
    perUnitLabel: 'Revenue Per Buyer',
    perUnit: '$72.11',
    note: 'Even though the front-end is $27, the backend stack makes each buyer worth 2.7× more.',
};

// ─── Main Component ────────────────────────────────────────────────────────────

const LowTicketFunnel = () => (
    <FunnelTemplate
        title="Low-Ticket Product Funnel"
        description="The standard page flow for selling a $27–$97 product and maximising revenue per buyer."
        stages={STAGES}
        revenueData={revenueData}
        revenueSummary={revenueSummary}
    />
);

export default LowTicketFunnel;
