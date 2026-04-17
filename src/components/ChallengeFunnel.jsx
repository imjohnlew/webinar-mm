import React from 'react';
import { Users, Star, BookOpen, Mic, ShoppingCart, Award, Check, Shield, Play, Zap, Clock } from 'lucide-react';
import FunnelTemplate, { Bar, VideoFrame } from './FunnelTemplate';

// ─── Mockups ───────────────────────────────────────────────────────────────────

const ChallengeRegMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-br from-violet-700 to-purple-800 px-3 py-4 text-center">
            <div className="text-violet-200 text-[10px] font-bold uppercase tracking-widest mb-1">FREE 5-DAY CHALLENGE</div>
            <div className="text-white font-black text-[12px] leading-tight mb-1">
                Join The FREE<br/>[Result] Challenge
            </div>
            <div className="text-violet-200 text-[11px]">Starting [Date] · 100% Free · [X] Spots Left</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-center text-[11px] text-slate-600">In just 5 days, you'll go from [current state] to [desired outcome] — even if you're starting from zero.</div>
            <div className="grid grid-cols-5 gap-1">
                {['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5'].map((d, i) => (
                    <div key={d} className="bg-violet-50 border border-violet-200 rounded p-1 text-center">
                        <div className="text-[9px] font-black text-violet-600">{d}</div>
                        <div className="text-[5.5px] text-violet-500 mt-0.5">Module {i + 1}</div>
                    </div>
                ))}
            </div>
            <div className="space-y-1">
                {['[What they\'ll learn on Day 1]', '[Key breakthrough on Day 3]', '[Final transformation on Day 5]'].map(b => (
                    <div key={b} className="flex items-start gap-1 text-[11px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-violet-500 shrink-0 mt-0.5" /> {b}
                    </div>
                ))}
            </div>
            <div className="space-y-1.5">
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Your First Name</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Your Best Email</div>
                <div className="w-full bg-violet-600 text-white font-black text-sm py-2 rounded text-center">
                    Join The FREE Challenge →
                </div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <Shield className="w-2 h-2" /> 100% Free · No Credit Card
            </div>
        </div>
    </div>
);

const WelcomeMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🎯</div>
            <div className="text-white font-black text-sm">You're In! Welcome to the Challenge!</div>
            <div className="text-violet-100 text-[10px]">Day 1 starts on [DATE]</div>
        </div>
        <div className="p-3 space-y-2.5">
            <div className="text-[11px] text-slate-600 text-center">We're so excited to have you. Here's everything you need to get ready.</div>
            {/* Step 1: Join community */}
            <div className="bg-violet-50 border border-violet-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-violet-700 text-[11px]">Step 1: Join Our Private Community</div>
                <div className="text-[10px] text-violet-600">This is where we do the daily lives — don't miss it!</div>
                <div className="w-full bg-violet-600 text-white font-bold text-[11px] py-1.5 rounded text-center">
                    👥 Join [Group Name] on Facebook →
                </div>
            </div>
            {/* Step 2: Intro video */}
            <div className="space-y-1">
                <div className="font-bold text-slate-700 text-[11px]">Step 2: Watch Your Day 0 Prep Video (8 min)</div>
                <VideoFrame progress={0} time="0:00" duration="8:00" />
            </div>
            {/* Challenge overview */}
            <div className="border border-slate-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-slate-700 text-[11px]">What to Expect:</div>
                {['Daily live training at [TIME]', 'Short action item each day (~15 min)', 'Community support + accountability'].map(s => (
                    <div key={s} className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Zap className="w-2 h-2 text-yellow-500 shrink-0" /> {s}
                    </div>
                ))}
            </div>
        </div>
    </div>
);

const DailyContentMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-violet-600 px-3 py-2 flex items-center justify-between">
            <div className="text-white font-black text-xs">🏆 Day 3 of 5</div>
            <div className="flex gap-1">
                {[1,2,3,4,5].map(d => (
                    <div key={d} className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-black ${d <= 3 ? 'bg-white text-violet-700' : 'bg-violet-500 text-violet-200'}`}>{d <= 2 ? '✓' : d === 3 ? '●' : d}</div>
                ))}
            </div>
        </div>
        <div className="p-3 space-y-2">
            <div className="font-black text-slate-900 text-sm">Day 3: [The Turning Point]</div>
            <div className="text-[10px] text-slate-500">Today's lesson: How to [specific skill] so that [outcome]</div>
            {/* Video */}
            <VideoFrame progress={33} time="14:32" duration="45:00" gradient="from-violet-900 to-slate-900" />
            {/* Today's action */}
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-2 space-y-1">
                <div className="font-bold text-yellow-700 text-[11px]">⚡ Today's Action Item</div>
                <div className="text-[10px] text-yellow-600">[Specific task that creates momentum and results]</div>
                <div className="border border-yellow-300 rounded px-2 py-1 bg-white">
                    <Bar w="w-full" h="h-1.5" color="bg-yellow-200" />
                </div>
                <div className="w-full bg-yellow-400 text-yellow-900 font-black text-[11px] py-1 rounded text-center">Mark as Complete ✓</div>
            </div>
            {/* Community */}
            <div className="flex items-center justify-between text-[10px] text-slate-500 bg-slate-50 rounded p-1.5">
                <span>💬 Share your win in the group</span>
                <span className="font-bold text-violet-600">Post Now →</span>
            </div>
        </div>
    </div>
);

const PitchDayMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-orange-500 to-red-500 px-3 py-3 text-center">
            <div className="text-white font-black text-[11px]">🎉 Day 5 — GRADUATION + LIVE EVENT</div>
            <div className="text-orange-100 text-[10px] mt-0.5">Join us LIVE today at [TIME] — something special is waiting</div>
        </div>
        <div className="p-3 space-y-2">
            {/* Transformation recap */}
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-slate-700 text-[11px]">Look How Far You've Come:</div>
                {['✅ Day 1: [Foundational win]', '✅ Day 2: [Progress milestone]', '✅ Day 3: [Turning point]', '✅ Day 4: [Momentum builder]', '🏁 Day 5: [Final transformation]'].map(s => (
                    <div key={s} className="text-[10px] text-slate-600">{s}</div>
                ))}
            </div>
            {/* Live countdown */}
            <div className="border-2 border-orange-400 bg-orange-50 rounded-lg p-2 text-center space-y-1">
                <div className="font-black text-orange-700 text-xs">LIVE STARTS IN:</div>
                <div className="flex justify-center gap-2">
                    {['02', '34', '17'].map((t, i) => (
                        <div key={i} className="bg-orange-500 text-white rounded px-1.5 py-1">
                            <div className="text-sm font-black">{t}</div>
                            <div className="text-[5px]">{['HRS', 'MIN', 'SEC'][i]}</div>
                        </div>
                    ))}
                </div>
                <div className="w-full bg-orange-500 text-white font-black text-xs py-1.5 rounded">Join The Live →</div>
            </div>
            {/* Teaser of offer */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center space-y-1">
                <div className="font-bold text-blue-700 text-[11px]">🎁 Challenge Graduates Exclusive:</div>
                <div className="text-[10px] text-blue-600">We're revealing something special for those who completed all 5 days. This offer is ONLY available today.</div>
                <div className="text-[10px] text-blue-500 font-bold">Show up to find out →</div>
            </div>
        </div>
    </div>
);

const ChallengeOrderMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-orange-500 px-3 py-2 text-center">
            <div className="text-white font-black text-xs">🏆 Challenge Graduate Special Offer</div>
            <div className="text-orange-100 text-[10px]">Available for challenge completers only — expires in 24 hours</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="font-black text-center text-slate-900 text-sm leading-tight">
                "Continue Your Momentum With [Program Name]"
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-slate-700 text-[11px]">What Comes Next:</div>
                {['[Deep-dive Module 1]', '[Advanced Strategy]', '[Done-for-You Resources]', '[Live Coaching Calls]'].map(i => (
                    <div key={i} className="flex items-center gap-1 text-[11px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-green-500 shrink-0" /> {i}
                    </div>
                ))}
            </div>
            <div className="text-center space-y-0.5">
                <div className="text-[11px] text-orange-600 font-bold">Challenge Graduate Price:</div>
                <div className="text-[11px] text-slate-400 line-through">$997</div>
                <div className="text-2xl font-black text-slate-900">$497</div>
                <div className="text-[10px] text-slate-500">or 2 payments of $297</div>
            </div>
            <div className="w-full bg-orange-500 text-white font-black text-sm py-2 rounded text-center">
                Continue My Journey →
            </div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400">
                <Shield className="w-2 h-2" /> 30-Day Money Back · Secure Checkout
            </div>
        </div>
    </div>
);

const ChallengeTYMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-violet-600 to-purple-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🚀</div>
            <div className="text-white font-black text-sm">Welcome to [Program Name]!</div>
            <div className="text-violet-100 text-[10px]">Your transformation continues — deeper, faster</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[11px] text-slate-600 text-center">You've taken the challenge — now you're going all in. Access is live.</div>
            <div className="w-full bg-violet-600 text-white font-black text-xs py-2 rounded text-center">Start [Program Name] →</div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[11px]">Your First 24 Hours:</div>
                {['Watch the welcome video and orientation', 'Introduce yourself in the VIP community', 'Complete the Day 1 deep-dive module'].map((s, i) => (
                    <div key={s} className="flex items-center gap-1.5 text-[11px] text-slate-600">
                        <div className="w-3.5 h-3.5 rounded-full bg-violet-100 text-violet-600 font-black flex items-center justify-center text-[10px] shrink-0">{i + 1}</div>
                        {s}
                    </div>
                ))}
            </div>
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 text-center">
                <div className="text-[10px] text-slate-500 italic">"The challenge was amazing but [Program Name] is where the real transformation happened."</div>
                <div className="text-[10px] font-bold text-slate-600 mt-0.5">— [Graduate Name]</div>
            </div>
        </div>
    </div>
);

// ─── Stages ────────────────────────────────────────────────────────────────────

const STAGES = [
    {
        id: 'reg', label: 'Registration', sublabel: 'Join the Challenge',
        icon: Users, bg: 'bg-violet-600', pill: 'bg-violet-900/40 text-violet-300 border-violet-700', text: 'text-violet-400',
        url: 'challenge.yoursite.com', mockup: <ChallengeRegMockup />,
        conversion: '25–50%', conversionNote: 'of visitors register', price: 'Free',
        description: 'A high-energy landing page for a free 5-day challenge. The challenge framing lowers the barrier to entry dramatically — "free challenge" converts 2–3× better than "free course".',
        tips: ['Name the challenge around the outcome, not the content', 'A specific start date creates urgency that "anytime" courses don\'t', 'Show the 5-day structure — people want to know the journey', 'Countdown to challenge start date converts much better than open enrollment'],
        metrics: [{ label: 'Conv. Rate', value: '25–50%' }, { label: 'Price', value: 'Free' }, { label: 'CPL Target', value: '$2–$8' }],
    },
    {
        id: 'welcome', label: 'Welcome Page', sublabel: 'Day 0 — You\'re In!',
        icon: Star, bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        url: 'challenge.yoursite.com/welcome', mockup: <WelcomeMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'The post-registration confirmation page. Directs new challengers to join the community group (where the daily lives happen) and delivers a pre-challenge orientation video.',
        tips: ['Getting them into the Facebook group immediately is the #1 priority', 'An orientation video increases Day 1 show-up rate by 20–30%', 'Send a welcome email sequence with daily reminders', 'Set clear expectations: time commitment, format, what they\'ll achieve'],
        metrics: [{ label: 'Group Join Rate', value: '40–60%' }, { label: 'Goal', value: 'Activate them' }, { label: 'Day 1 Show Rate', value: '30–60%' }],
    },
    {
        id: 'daily', label: 'Daily Content', sublabel: 'Days 1–5 Training',
        icon: BookOpen, bg: 'bg-indigo-600', pill: 'bg-indigo-900/40 text-indigo-300 border-indigo-700', text: 'text-indigo-400',
        url: 'challenge.yoursite.com/day3', mockup: <DailyContentMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Each day delivers a short training (15–30 min live or recorded) plus a simple action item. The action builds momentum and creates real results before the pitch even happens.',
        tips: ['Each day must deliver a small but real, tangible result', 'Action items should take 15 minutes or less — completion = momentum', 'Celebrate wins publicly in the community — social proof compounds', 'Tease tomorrow\'s content at the end of each session to maintain attendance'],
        metrics: [{ label: 'Daily Completion', value: '20–40%' }, { label: 'Session Length', value: '15–30 min' }, { label: 'Key Driver', value: 'Quick wins' }],
    },
    {
        id: 'pitch', label: 'Pitch Day', sublabel: 'Day 5 Live Event',
        icon: Mic, bg: 'bg-orange-600', pill: 'bg-orange-900/40 text-orange-300 border-orange-700', text: 'text-orange-400',
        url: 'challenge.yoursite.com/day5', mockup: <PitchDayMockup />,
        conversion: '10–20%', conversionNote: 'of Day 5 attendees buy', price: null,
        description: 'The graduation day live session. Celebrate the challengers\' wins, then make the offer. The transformation they\'ve already experienced makes this the easiest close of any funnel type.',
        tips: ['Spend the first half celebrating results — real testimonials from this cohort', 'The pitch should feel like a natural "next step," not a hard sell', 'A challenge-exclusive bonus or discount creates urgency', 'Keep the pitch window short: 24–48 hours maximum'],
        metrics: [{ label: 'Conv. Rate', value: '10–20%' }, { label: 'Live Attendance', value: '15–30%' }, { label: 'Close Window', value: '24–48 hrs' }],
    },
    {
        id: 'order', label: 'Order Page', sublabel: 'Challenge Exclusive Price',
        icon: ShoppingCart, bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        url: 'challenge.yoursite.com/join', mockup: <ChallengeOrderMockup />,
        conversion: '1–3%', conversionNote: 'of all registrants buy', price: '$197–$997',
        description: 'The checkout page for the post-challenge offer. Frame it as a "graduate exclusive" price — challengers have already invested 5 days, making them the warmest buyers possible.',
        tips: ['Reference the challenge experience throughout the page', '"Graduate price" framing feels earned — it\'s not just a discount', 'Show the before/after transformation from the challenge itself', 'A short close window (24–48 hrs) with a visible timer is critical'],
        metrics: [{ label: 'Conv. Rate', value: '1–3% regs' }, { label: 'Price', value: '$197–$997' }, { label: 'Avg EPC', value: '$5–$20' }],
    },
    {
        id: 'ty', label: 'Member Area', sublabel: 'Access & Community',
        icon: Award, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'members.yoursite.com', mockup: <ChallengeTYMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Welcome new members with immediate access, community connection, and a clear first action. Challenge buyers are your most motivated students — give them a quick win in hour one.',
        tips: ['Challenge graduates expect a higher level — deliver it immediately', 'Connect them to a VIP community separate from the free challenge group', 'A "done-with-you" first module reduces overwhelm', 'Use their challenge result as social proof in your next cohort'],
        metrics: [{ label: 'Refund Rate', value: '< 3% typical' }, { label: 'Completion', value: 'High motivation' }, { label: 'LTV', value: 'Ascend them' }],
    },
];

const REVENUE_DATA = [
    { label: 'Registrants', value: '500', note: 'Free challenge sign-ups', color: 'text-violet-400' },
    { label: 'Day 5 Attendees', value: '~125', note: '25% of registrants', color: 'text-orange-400' },
    { label: 'Buyers (~15% attends)', value: '~19', note: 'Warm, motivated buyers', color: 'text-pink-400' },
    { label: 'Revenue @ $497', value: '$9,443', note: '$18.89 per registrant', color: 'text-green-400' },
];

const REVENUE_SUMMARY = {
    title: 'Example: 500 Registrants → Challenge Revenue',
    total: '$9,443',
    perUnitLabel: 'Value Per Registrant',
    perUnit: '$18.89',
    note: 'Challenge funnels are repeatable. Run 4 cohorts a year at $9K each = $36K from free leads with no paid ads at scale.',
};

const ChallengeFunnel = () => (
    <FunnelTemplate
        title="Challenge Funnel"
        description="A free 5-day live challenge that builds trust, delivers real results, and converts graduates into high-ticket buyers."
        stages={STAGES}
        revenueData={REVENUE_DATA}
        revenueSummary={REVENUE_SUMMARY}
    />
);

export default ChallengeFunnel;
