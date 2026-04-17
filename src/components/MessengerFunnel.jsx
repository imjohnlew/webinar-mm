import React from 'react';
import { MessageCircle, Zap, Search, Gift, Calendar, Check, Shield, Users, Star, ArrowRight } from 'lucide-react';
import FunnelTemplate, { Bar } from './FunnelTemplate';

// ─── Mockups ───────────────────────────────────────────────────────────────────

const EntryAdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[11px]">P</div>
            <div className="flex flex-col gap-0.5">
                <Bar w="w-20" h="h-1.5" color="bg-slate-300" />
                <div className="text-[10px] text-slate-400">Sponsored</div>
            </div>
        </div>
        <div className="px-2.5 pb-1.5">
            <div className="font-bold text-slate-800 text-[11px] leading-tight">
                Want to know how I went from [Problem] to [Result] in [Timeframe]? 🤯
            </div>
            <div className="text-[10px] text-slate-500 mt-0.5">Comment <span className="font-black text-blue-600">"YES"</span> below and I'll send you the exact blueprint for FREE 👇</div>
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-blue-500 to-indigo-600 flex flex-col items-center justify-center gap-1 relative">
            <div className="text-white font-black text-sm text-center px-3 leading-tight">
                [Scroll-Stopping Image or Video]
            </div>
            <div className="bg-white/20 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">Comment "YES" to get it →</div>
        </div>
        <div className="px-2.5 py-1.5 bg-slate-50 border-t border-slate-200">
            <div className="text-[10px] text-slate-500 mb-1">Top Comments:</div>
            {[['Sarah M.', 'YES please! 🙋‍♀️'], ['John K.', 'YES! Need this'], ['Maria L.', 'YES 🔥']].map(([n, c]) => (
                <div key={n} className="text-[10px] text-slate-600 mb-0.5"><span className="font-bold">{n}:</span> {c}</div>
            ))}
        </div>
        <div className="px-2.5 py-1.5 flex items-center justify-between">
            <div className="flex items-center gap-0.5 text-[10px] text-slate-400"><span>👍❤️😮</span><span className="ml-0.5">4.7k</span></div>
            <div className="flex gap-2 text-[10px] text-slate-400"><span>Like</span><span>Comment</span><span>Share</span></div>
        </div>
    </div>
);

const BotBubble = ({ text, isBot = true, quickReplies = [] }) => (
    <div className={`flex flex-col ${isBot ? 'items-start' : 'items-end'} gap-0.5`}>
        {isBot && (
            <div className="flex items-center gap-1 mb-0.5">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[5px] text-white font-black">P</div>
                <span className="text-[9px] text-slate-500 font-bold">Page Name</span>
            </div>
        )}
        <div className={`px-2 py-1.5 rounded-2xl text-[10px] leading-relaxed max-w-[80%] ${isBot ? 'bg-slate-100 text-slate-700 rounded-tl-sm' : 'bg-blue-500 text-white rounded-tr-sm'}`}>
            {text}
        </div>
        {quickReplies.length > 0 && (
            <div className="flex gap-1 flex-wrap mt-0.5">
                {quickReplies.map(r => (
                    <div key={r} className="border border-blue-400 text-blue-600 text-[9px] font-bold px-1.5 py-0.5 rounded-full cursor-pointer">{r}</div>
                ))}
            </div>
        )}
    </div>
);

const BotWelcomeMockup = () => (
    <div className="bg-slate-100 text-xs">
        {/* Messenger header */}
        <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center gap-2 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">P</div>
            <div>
                <div className="font-bold text-slate-800 text-[11px]">Page Name</div>
                <div className="text-[9px] text-green-500 font-bold">● Active Now</div>
            </div>
        </div>
        <div className="p-3 space-y-2">
            <BotBubble text={`Hey [First Name]! 👋 I saw you commented "YES" on my post — I love it! I'm sending you the blueprint right now.`} />
            <BotBubble text="But first — a quick question so I can send you the most relevant version:" />
            <BotBubble
                text="Which best describes where you are right now?"
                quickReplies={['Complete Beginner', 'Have Some Experience', 'Stuck & Need Direction']}
            />
            <div className="flex items-center gap-1 mt-1">
                <div className="w-3.5 h-3.5 rounded-full bg-blue-600 flex items-center justify-center text-[5px] text-white font-black shrink-0">P</div>
                <div className="flex gap-0.5">
                    <div className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '100ms' }} />
                    <div className="w-1 h-1 rounded-full bg-slate-400 animate-bounce" style={{ animationDelay: '200ms' }} />
                </div>
            </div>
        </div>
        {/* Input bar */}
        <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[10px] text-slate-400">Aa</div>
            <div className="text-blue-500 text-[10px] font-bold">Send</div>
        </div>
    </div>
);

const QualifyMockup = () => (
    <div className="bg-slate-100 text-xs">
        <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center gap-2 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">P</div>
            <div>
                <div className="font-bold text-slate-800 text-[11px]">Page Name</div>
                <div className="text-[9px] text-green-500 font-bold">● Active Now</div>
            </div>
        </div>
        <div className="p-3 space-y-2">
            <BotBubble text="Got it! So you're at the [stage] level — perfect, I know exactly what you need." />
            <BotBubble
                text="Quick question: what's the #1 thing holding you back right now?"
                quickReplies={['No clear strategy', 'Not enough time', 'Don\'t know where to start', 'Tried before, failed']}
            />
            <BotBubble text="[User selects: No clear strategy]" isBot={false} />
            <BotBubble text="That's the most common one — and honestly the easiest to fix once you have the right framework." />
            <BotBubble
                text="Last thing: what's your income goal from this in the next 90 days?"
                quickReplies={['$1K–$3K/mo', '$3K–$10K/mo', '$10K+/mo']}
            />
        </div>
        <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[10px] text-slate-400">Aa</div>
            <div className="text-blue-500 text-[10px] font-bold">Send</div>
        </div>
    </div>
);

const ValueMockup = () => (
    <div className="bg-slate-100 text-xs">
        <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center gap-2 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">P</div>
            <div>
                <div className="font-bold text-slate-800 text-[11px]">Page Name</div>
                <div className="text-[9px] text-green-500 font-bold">● Active Now</div>
            </div>
        </div>
        <div className="p-3 space-y-2">
            <BotBubble text="Love that goal — totally achievable. Here's the blueprint I promised 👇" />
            {/* PDF/resource card */}
            <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm flex items-center gap-2">
                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white text-[11px] font-black shrink-0">PDF</div>
                <div>
                    <div className="font-bold text-slate-800 text-[10px]">[Your Free Resource Title]</div>
                    <div className="text-[9px] text-slate-500">[X]-page guide · Instant access</div>
                    <div className="text-blue-600 text-[9px] font-bold mt-0.5">Tap to open →</div>
                </div>
            </div>
            <BotBubble text="Take 10 minutes to go through it — page 3 is the one that changes everything for most people." />
            <BotBubble text="Once you've had a look, let me know: does it make sense for your situation? 🙏" quickReplies={['Yes, it makes sense!', 'I have a question', 'Not sure yet']} />
            <BotBubble text="[User: Yes, it makes sense!]" isBot={false} />
            <BotBubble text="Amazing! Based on your goals ($10K+/mo), I think I can help you get there faster. Want me to show you how? 👇" quickReplies={['Yes, show me!', 'Maybe later']} />
        </div>
        <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[10px] text-slate-400">Aa</div>
            <div className="text-blue-500 text-[10px] font-bold">Send</div>
        </div>
    </div>
);

const BookingMockup = () => (
    <div className="bg-slate-100 text-xs">
        <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center gap-2 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">P</div>
            <div><div className="font-bold text-slate-800 text-[11px]">Page Name</div></div>
        </div>
        <div className="p-3 space-y-2">
            <BotBubble text="Great! I'd love to jump on a free 30-min strategy call with you — no pitch, just a real plan for your situation." />
            <BotBubble text="Here's my calendar — grab any slot that works for you 👇" />
            {/* Calendar embed mockup */}
            <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm space-y-1.5">
                <div className="flex items-center justify-between">
                    <div className="font-bold text-slate-800 text-[11px]">Free Strategy Call — 30 min</div>
                    <Calendar className="w-3 h-3 text-blue-500" />
                </div>
                <div className="grid grid-cols-3 gap-1">
                    {['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17', 'Fri 18', 'Mon 21'].map(d => (
                        <div key={d} className="border border-blue-200 bg-blue-50 text-blue-600 text-[9px] font-bold rounded px-1 py-1 text-center cursor-pointer">{d}</div>
                    ))}
                </div>
                <div className="grid grid-cols-4 gap-1">
                    {['9:00 AM', '10:00 AM', '2:00 PM', '3:00 PM'].map(t => (
                        <div key={t} className="border border-slate-200 text-slate-600 text-[5.5px] rounded px-0.5 py-1 text-center cursor-pointer">{t}</div>
                    ))}
                </div>
                <div className="w-full bg-blue-600 text-white text-[10px] font-bold py-1 rounded text-center">Confirm My Slot →</div>
            </div>
        </div>
        <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[10px] text-slate-400">Aa</div>
            <div className="text-blue-500 text-[10px] font-bold">Send</div>
        </div>
    </div>
);

const CallConfirmMockup = () => (
    <div className="bg-slate-100 text-xs">
        <div className="bg-white px-3 py-2 border-b border-slate-200 flex items-center gap-2 shadow-sm">
            <div className="w-6 h-6 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-[10px]">P</div>
            <div><div className="font-bold text-slate-800 text-[11px]">Page Name</div></div>
        </div>
        <div className="p-3 space-y-2">
            <BotBubble text="✅ You're confirmed for [DATE] at [TIME]! A calendar invite is on its way to your email." />
            <div className="bg-white rounded-xl p-2 border border-green-200 shadow-sm space-y-1">
                <div className="flex items-center gap-1.5">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center shrink-0"><Check className="w-3 h-3 text-white" /></div>
                    <div>
                        <div className="font-bold text-slate-800 text-[10px]">Call Confirmed!</div>
                        <div className="text-[9px] text-slate-500">[DATE] at [TIME] · 30 min Zoom</div>
                    </div>
                </div>
            </div>
            <BotBubble text="Before our call, I want to make sure we make the most of our 30 minutes together." />
            <BotBubble text="To prepare, could you watch this 12-minute video? It'll help me understand your situation better so I can give you the best advice 🎯" />
            <div className="bg-white rounded-xl p-2 border border-slate-200 shadow-sm flex items-center gap-2">
                <div className="w-8 h-8 bg-slate-800 rounded-lg flex items-center justify-center shrink-0">
                    <div className="w-0 h-0 border-y-4 border-y-transparent border-l-6 border-l-white ml-0.5" />
                </div>
                <div>
                    <div className="font-bold text-slate-800 text-[10px]">Pre-Call Training: [Title]</div>
                    <div className="text-[9px] text-slate-500">12 min · Watch before our call</div>
                    <div className="text-blue-600 text-[9px] font-bold">Watch Now →</div>
                </div>
            </div>
            <BotBubble text="See you on the call — this is going to be good! 🚀" quickReplies={['Can\'t wait!', 'Need to reschedule']} />
        </div>
        <div className="bg-white border-t border-slate-200 px-3 py-2 flex items-center gap-2">
            <div className="flex-1 bg-slate-100 rounded-full px-2 py-1 text-[10px] text-slate-400">Aa</div>
            <div className="text-blue-500 text-[10px] font-bold">Send</div>
        </div>
    </div>
);

// ─── Stages ────────────────────────────────────────────────────────────────────

const STAGES = [
    {
        id: 'ad', label: 'Entry Ad / Post', sublabel: 'Comment-to-DM',
        icon: Users, bg: 'bg-blue-600', pill: 'bg-blue-900/40 text-blue-300 border-blue-700', text: 'text-blue-400',
        url: 'facebook.com/post', mockup: <EntryAdMockup />,
        conversion: '5–15%', conversionNote: 'comment on the post', price: null,
        description: 'A post or ad that asks people to comment a keyword (like "YES") to receive something free via Messenger. The comment triggers the bot to send a private DM automatically.',
        tips: ['A clear keyword ("comment YES", "comment GUIDE") triggers the automation', 'Comments boost organic reach — FB rewards engagement heavily', 'Organic posts work even without ad spend — test on your page first', 'Reply to every comment manually for extra reach and authenticity'],
        metrics: [{ label: 'Comment Rate', value: '5–15%' }, { label: 'Bot Opt-in', value: '60–80%' }, { label: 'Goal', value: 'Start a convo' }],
    },
    {
        id: 'welcome', label: 'Bot Welcome', sublabel: 'Automated DM Opener',
        icon: MessageCircle, bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        url: 'm.me/yourpage', mockup: <BotWelcomeMockup />,
        conversion: '60–80%', conversionNote: 'reply to first message', price: null,
        description: 'The automated Messenger reply that fires when someone comments the keyword. It personalises with their first name, acknowledges the comment, and asks a quick qualifying question.',
        tips: ['Personalise with first name from the start — it feels human', 'Reference exactly what they commented on — don\'t be generic', 'Ask one simple qualifying question (quick replies make it easy)', 'Keep the opener short — this isn\'t the place to pitch anything'],
        metrics: [{ label: 'Reply Rate', value: '60–80%' }, { label: 'Open Rate', value: '80–90%' }, { label: 'Goal', value: 'Start dialogue' }],
    },
    {
        id: 'qualify', label: 'Qualification', sublabel: '2–3 Key Questions',
        icon: Search, bg: 'bg-indigo-600', pill: 'bg-indigo-900/40 text-indigo-300 border-indigo-700', text: 'text-indigo-400',
        url: 'm.me/yourpage', mockup: <QualifyMockup />,
        conversion: '40–60%', conversionNote: 'complete qualification', price: null,
        description: 'A short 2–3 question sequence that identifies where the lead is at and what they want. Quick reply buttons make it effortless. This data lets you personalise the value drop and offer.',
        tips: ['Never more than 3 questions — conversation fatigue kills completion', 'Use quick reply buttons — reduces friction dramatically', 'Ask about current situation, #1 problem, and desired outcome', 'Use their answers to personalise every subsequent message'],
        metrics: [{ label: 'Completion Rate', value: '40–60%' }, { label: 'Questions', value: '2–3 max' }, { label: 'Purpose', value: 'Segment + qualify' }],
    },
    {
        id: 'value', label: 'Value Drop', sublabel: 'Free Resource + Soft Ask',
        icon: Gift, bg: 'bg-orange-600', pill: 'bg-orange-900/40 text-orange-300 border-orange-700', text: 'text-orange-400',
        url: 'm.me/yourpage', mockup: <ValueMockup />,
        conversion: '20–40%', conversionNote: 'click "show me how"', price: null,
        description: 'Delivers the free resource promised in the ad. The bot then asks a natural follow-up: "Does this make sense for your situation?" — leading into a soft offer for a strategy call or next step.',
        tips: ['Deliver the promised resource immediately — don\'t make them wait', 'Ask a genuine follow-up question after delivering value', 'Segue naturally: "Based on your goal, I think I can help..."', 'Quick replies like "Yes, show me!" are your conversion trigger'],
        metrics: [{ label: 'Click Rate', value: '20–40%' }, { label: 'Key Move', value: 'Soft transition' }, { label: 'Goal', value: 'Book the call' }],
    },
    {
        id: 'booking', label: 'Booking', sublabel: 'Calendar Link',
        icon: Calendar, bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        url: 'calendly.com/yourpage', mockup: <BookingMockup />,
        conversion: '30–50%', conversionNote: 'of qualifieds book a call', price: null,
        description: 'A Calendly or TidyCal link delivered in Messenger, or a mini calendar directly in the chat. The call is framed as free, low-pressure, and focused on solving their specific problem.',
        tips: ['Frame it as "free strategy session" — not a sales call', 'Show availability within the next 48 hours — urgency via scarcity', 'Calendly\'s Messenger integration delivers a slick booking experience', 'Send a reminder bot message 24h and 1h before the call'],
        metrics: [{ label: 'Book Rate', value: '30–50%' }, { label: 'Show Rate', value: '60–80%' }, { label: 'Goal', value: 'Get them on a call' }],
    },
    {
        id: 'confirm', label: 'Confirmation', sublabel: 'Pre-Call Sequence',
        icon: Check, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'm.me/yourpage', mockup: <CallConfirmMockup />,
        conversion: '10–25%', conversionNote: 'of booked calls close to a sale', price: '$1,500–$10,000+',
        description: 'Post-booking confirmation via Messenger. Sends a calendar invite, asks them to watch a pre-call video, and sets expectations for the call. This dramatically raises show rates and call quality.',
        tips: ['A pre-call video warms them up and pre-sells before the call', 'Reminder messages at 24h and 1h reduce no-shows by 30–40%', 'Ask 1–2 intake questions before the call to prepare your pitch', 'The closer you get to the call, the warmer they are — nurture until then'],
        metrics: [{ label: 'Show Rate', value: '60–80%' }, { label: 'Close Rate', value: '10–25%' }, { label: 'Deal Size', value: '$1.5K–$10K' }],
    },
];

const REVENUE_DATA = [
    { label: 'Conversations Started', value: '200', note: 'Commented on post', color: 'text-blue-400' },
    { label: 'Qualified Leads', value: '~80', note: '40% complete quiz', color: 'text-indigo-400' },
    { label: 'Calls Booked', value: '~28', note: '35% of qualified', color: 'text-pink-400' },
    { label: 'Sales Closed (~20%)', value: '~6', note: '× $3,000 = $17,400', color: 'text-green-400' },
];

const REVENUE_SUMMARY = {
    title: 'Example: 200 Messenger Conversations → Revenue',
    total: '$17,400',
    perUnitLabel: 'Revenue Per Conversation',
    perUnit: '$87',
    note: 'Messenger funnels thrive on volume. With 50 new conversations/day from organic content, this becomes a fully systemised sales machine.',
};

const MessengerFunnel = () => (
    <FunnelTemplate
        title="Messenger Funnel"
        description="Comment-triggered bot conversations that qualify leads, deliver value, and book high-ticket strategy calls — all on autopilot."
        stages={STAGES}
        revenueData={REVENUE_DATA}
        revenueSummary={REVENUE_SUMMARY}
    />
);

export default MessengerFunnel;
