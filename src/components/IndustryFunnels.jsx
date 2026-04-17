import React, { useState } from 'react';
import { Users, Calendar, Check, Shield, Clock, Star, Phone, FileText, MapPin, Award, Search, Zap, Heart, Scale, BookOpen, TrendingUp, MessageCircle, Video, UserPlus } from 'lucide-react';
import FunnelTemplate, { Bar, VideoFrame } from './FunnelTemplate';

// ─── DENTAL MOCKUPS ────────────────────────────────────────────────────────────

const DentalAdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-teal-600 flex items-center justify-center text-white font-black text-[11px]">🦷</div>
            <div><Bar w="w-20" h="h-1.5" color="bg-slate-300" /><div className="text-[10px] text-slate-400 mt-0.5">Sponsored</div></div>
        </div>
        <div className="px-2.5 pb-1.5">
            <div className="font-bold text-slate-800 text-[11px] leading-tight">⚡ LIMITED SPOTS: Free Teeth Whitening Consultation This Week Only</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Valued at $150 — yours FREE for [City] residents</div>
        </div>
        <div className="w-full aspect-video bg-gradient-to-r from-teal-500 to-cyan-500 flex flex-col items-center justify-center gap-1 relative">
            <div className="flex gap-3 items-end">
                <div className="text-center">
                    <div className="text-[10px] text-teal-100 font-bold mb-0.5">BEFORE</div>
                    <div className="w-12 h-10 bg-yellow-200 rounded flex items-center justify-center text-[14px]">😬</div>
                </div>
                <div className="text-white font-black text-sm">→</div>
                <div className="text-center">
                    <div className="text-[10px] text-teal-100 font-bold mb-0.5">AFTER</div>
                    <div className="w-12 h-10 bg-white rounded flex items-center justify-center text-[14px]">😁</div>
                </div>
            </div>
            <div className="absolute top-1.5 left-1.5 bg-red-500 text-white text-[10px] font-black px-1.5 py-0.5 rounded">FREE CONSULT</div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-2.5 py-2 flex items-center justify-between">
            <div><div className="text-[10px] text-slate-400">[Clinic Name] Dental</div><Bar w="w-20" h="h-1.5" color="bg-slate-300" className="mt-0.5" /></div>
            <div className="bg-teal-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">Book Free Visit</div>
        </div>
    </div>
);

const DentalLandingMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-teal-700 px-3 py-1.5 flex items-center justify-between">
            <div className="text-white font-black text-xs">🦷 [Clinic Name] Dental</div>
            <div className="flex items-center gap-1 text-teal-200 text-[10px]"><Phone className="w-2 h-2" /> (555) 123-4567</div>
        </div>
        <div className="bg-gradient-to-br from-teal-50 to-cyan-50 p-3 text-center space-y-2">
            <div className="font-black text-slate-900 text-[11px] leading-tight">Claim Your FREE Smile Assessment<br/>— [City] Residents Only</div>
            <div className="text-[10px] text-slate-500">Valued at $150 · No obligation · Limited spots available this week</div>
            <div className="w-full aspect-[16/7] bg-teal-100 rounded-lg flex items-center justify-center gap-4 border border-teal-200">
                <div className="text-center"><div className="text-[20px]">👨‍⚕️</div><div className="text-[10px] font-bold text-teal-700">Dr. [Name]</div><div className="text-[9px] text-teal-500">15+ yrs experience</div></div>
                <div className="space-y-1">
                    {['⭐⭐⭐⭐⭐ Google Reviews', '200+ Happy Patients', 'Same-Week Appointments'].map(t => <div key={t} className="text-[10px] text-teal-700 font-bold">{t}</div>)}
                </div>
            </div>
            {['No out-of-pocket cost for your assessment', 'Includes full smile scan + whitening plan', 'Walk out knowing exactly what your smile needs'].map(b => (
                <div key={b} className="flex items-center gap-1 text-[11px] text-slate-600 text-left"><Check className="w-2.5 h-2.5 text-teal-500 shrink-0" /> {b}</div>
            ))}
            <div className="space-y-1.5 pt-1">
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-white text-[11px] text-slate-400">Your Full Name</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-white text-[11px] text-slate-400">Phone Number</div>
                <div className="w-full bg-teal-600 text-white font-black text-sm py-2 rounded">Claim My Free Assessment →</div>
            </div>
            <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400"><Shield className="w-2 h-2" /> We never share your details · No spam</div>
        </div>
    </div>
);

const DentalQuizMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-teal-700 px-3 py-2">
            <div className="text-white font-black text-xs">Quick Smile Quiz — 30 seconds</div>
            <div className="flex gap-0.5 mt-1.5">
                {[1,2,3].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i === 1 ? 'bg-white' : 'bg-teal-500'}`} />)}
            </div>
        </div>
        <div className="p-3 space-y-3">
            <div className="font-black text-slate-800 text-sm">Question 1 of 3: How would you describe your smile right now?</div>
            {['I love it — just want to maintain it', 'It\'s okay but I\'d love it whiter', 'I\'m self-conscious about it', 'I avoid smiling in photos'].map(opt => (
                <div key={opt} className="border-2 border-slate-200 hover:border-teal-400 rounded-lg px-3 py-2.5 cursor-pointer flex items-center gap-2">
                    <div className="w-3.5 h-3.5 rounded-full border-2 border-slate-300 shrink-0" />
                    <span className="text-[11px] text-slate-700">{opt}</span>
                </div>
            ))}
            <div className="w-full bg-teal-600 text-white font-black text-xs py-2 rounded text-center">Next Question →</div>
            <div className="text-[10px] text-slate-400 text-center">No commitment · Results in 30 seconds</div>
        </div>
    </div>
);

const DentalBookingMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-teal-600 to-cyan-600 px-3 py-3 text-center">
            <div className="text-white font-black text-sm">🎉 You qualify! Pick your free appointment time</div>
            <div className="text-teal-100 text-[10px] mt-0.5">Only 3 spots left this week — book now to secure yours</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="grid grid-cols-4 gap-1">
                {['Mon 14', 'Tue 15', 'Wed 16', 'Thu 17'].map((d, i) => (
                    <div key={d} className={`border rounded p-1.5 text-center cursor-pointer ${i === 1 ? 'border-teal-500 bg-teal-50' : 'border-slate-200'}`}>
                        <div className="text-[10px] font-black text-slate-700">{d}</div>
                        <div className="text-[9px] text-slate-400">Available</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-1">
                {['9:00 AM', '10:30 AM', '2:00 PM', '3:30 PM', '4:00 PM', '5:00 PM'].map((t, i) => (
                    <div key={t} className={`border rounded px-1 py-1.5 text-center text-[10px] font-bold cursor-pointer ${i === 2 ? 'border-teal-500 bg-teal-500 text-white' : 'border-slate-200 text-slate-600'}`}>{t}</div>
                ))}
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-teal-700 text-[11px]">Your Appointment:</div>
                <div className="text-[10px] text-teal-600">📅 Tuesday, Jan 15 at 2:00 PM</div>
                <div className="text-[10px] text-teal-600">📍 [Clinic Name], [Address]</div>
                <div className="text-[10px] text-teal-600">⏱ 30-minute free assessment</div>
            </div>
            <div className="w-full bg-teal-600 text-white font-black text-sm py-2 rounded text-center">Confirm My Appointment →</div>
        </div>
    </div>
);

const DentalConfirmMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-teal-500 to-green-500 px-3 py-3 text-center">
            <div className="text-3xl mb-0.5">✅</div>
            <div className="text-white font-black text-sm">Appointment Confirmed!</div>
            <div className="text-teal-100 text-[10px]">See you Tuesday at 2:00 PM</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="border border-teal-200 rounded-lg p-2 bg-teal-50 space-y-1">
                <div className="font-bold text-teal-700 text-[11px]">Appointment Details:</div>
                <div className="text-[10px] text-teal-600">📅 Tuesday, Jan 15 · 2:00 PM</div>
                <div className="text-[10px] text-teal-600">📍 [Clinic Name] · [Address]</div>
                <div className="text-[10px] text-teal-600">🅿️ Free parking available</div>
            </div>
            <div className="grid grid-cols-3 gap-1">
                {['Add to Google', 'Add to Apple', 'Add to Outlook'].map(c => (
                    <div key={c} className="border border-slate-200 rounded text-center py-1.5 text-[9px] font-bold text-slate-600 cursor-pointer">📅 {c}</div>
                ))}
            </div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[11px]">What to Bring:</div>
                {['Valid ID', 'Insurance card (if applicable)', 'List of any current medications'].map(s => (
                    <div key={s} className="flex items-center gap-1 text-[10px] text-slate-600"><Check className="w-2 h-2 text-green-500 shrink-0" /> {s}</div>
                ))}
            </div>
            <div className="bg-slate-800 text-white rounded-lg p-2 text-center space-y-0.5">
                <div className="text-[10px] text-slate-400">Questions? Call us directly:</div>
                <div className="font-black text-sm text-teal-400">(555) 123-4567</div>
            </div>
        </div>
    </div>
);

// ─── LAWYER MOCKUPS ────────────────────────────────────────────────────────────

const LawyerAdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-slate-800 flex items-center justify-center text-white font-black text-[10px]">⚖️</div>
            <div><Bar w="w-20" h="h-1.5" color="bg-slate-300" /><div className="text-[10px] text-slate-400 mt-0.5">Sponsored</div></div>
        </div>
        <div className="px-2.5 pb-1.5">
            <div className="font-bold text-slate-800 text-[11px] leading-tight">Were You Injured? You May Be Entitled to Compensation.</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Free case review · No fee unless you win · [City] attorneys</div>
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-slate-800 to-slate-900 flex flex-col items-center justify-center gap-2 relative">
            <div className="absolute top-1.5 left-1.5 bg-yellow-500 text-black text-[10px] font-black px-1.5 py-0.5 rounded">FREE CASE REVIEW</div>
            <div className="text-white font-black text-sm text-center px-4 leading-tight">Don't Let the Insurance<br/>Company Win</div>
            <div className="flex gap-3 text-center">
                {['$2.4M', '$890K', '$1.1M'].map(a => <div key={a}><div className="text-yellow-400 font-black text-xs">{a}</div><div className="text-[9px] text-slate-400">Recovered</div></div>)}
            </div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-2.5 py-2 flex items-center justify-between">
            <div><div className="text-[10px] text-slate-400">[Law Firm Name]</div><Bar w="w-20" h="h-1.5" color="bg-slate-300" className="mt-0.5" /></div>
            <div className="bg-yellow-500 text-black text-[10px] font-black px-2.5 py-1 rounded">Get Free Review</div>
        </div>
    </div>
);

const LawyerLandingMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-1.5 flex items-center justify-between">
            <div className="text-white font-black text-xs flex items-center gap-1">⚖️ [Law Firm Name]</div>
            <div className="flex items-center gap-1 text-yellow-400 text-[10px] font-bold"><Phone className="w-2 h-2" /> Free: (555) 000-1234</div>
        </div>
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 px-3 py-4 text-center space-y-2">
            <div className="text-yellow-400 text-[10px] font-bold uppercase tracking-widest">FREE CASE EVALUATION</div>
            <div className="text-white font-black text-[11px] leading-tight">Find Out If You Have a<br/>Winning Case — In 5 Minutes</div>
            <div className="text-slate-300 text-[10px]">No fee unless we win · Trusted by 1,200+ clients in [State]</div>
            <div className="flex justify-center gap-3">
                {['Car Accidents', 'Slip & Fall', 'Medical Malpractice', 'Workplace Injury'].map(t => (
                    <div key={t} className="bg-yellow-500/20 border border-yellow-500/40 text-yellow-300 text-[9px] font-bold px-1.5 py-0.5 rounded">{t}</div>
                ))}
            </div>
        </div>
        <div className="p-3 space-y-2">
            {['Free consultation — no obligation', 'We handle everything — you focus on recovery', 'No win, no fee — zero financial risk to you'].map(b => (
                <div key={b} className="flex items-center gap-1 text-[11px] text-slate-600"><Check className="w-2.5 h-2.5 text-yellow-500 shrink-0" /> {b}</div>
            ))}
            <div className="space-y-1.5">
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Your Full Name</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Phone Number</div>
                <select className="w-full border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400 appearance-none">
                    <option>Type of case...</option>
                </select>
                <div className="w-full bg-yellow-500 text-black font-black text-sm py-2 rounded text-center">Get My Free Case Review →</div>
            </div>
            <div className="text-[10px] text-slate-400 text-center">Available 24/7 · Respond within 1 hour</div>
        </div>
    </div>
);

const LawyerIntakeMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-2">
            <div className="text-white font-black text-xs">Tell Us About Your Case</div>
            <div className="flex gap-0.5 mt-1.5">
                {[1,2,3,4].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i <= 2 ? 'bg-yellow-500' : 'bg-slate-700'}`} />)}
            </div>
            <div className="text-[9px] text-slate-400 mt-0.5">Step 2 of 4 — Incident Details</div>
        </div>
        <div className="p-3 space-y-2.5">
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">When did the incident occur?</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 flex items-center gap-1">
                    <Calendar className="w-2.5 h-2.5 text-slate-400" /><Bar w="w-2/3" h="h-1.5" color="bg-slate-200" />
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">Where did it happen?</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 flex items-center gap-1">
                    <MapPin className="w-2.5 h-2.5 text-slate-400" /><Bar w="w-3/4" h="h-1.5" color="bg-slate-200" />
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">Have you seen a doctor?</div>
                <div className="grid grid-cols-3 gap-1">
                    {['Yes', 'No', 'Scheduling Now'].map(o => (
                        <div key={o} className={`border rounded px-2 py-1.5 text-center text-[10px] font-bold cursor-pointer ${o === 'Yes' ? 'border-yellow-500 bg-yellow-50 text-yellow-700' : 'border-slate-200 text-slate-500'}`}>{o}</div>
                    ))}
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">Briefly describe what happened:</div>
                <div className="border border-slate-200 rounded p-2 bg-slate-50 h-10"><Bar w="w-3/4" h="h-1.5" color="bg-slate-200" /></div>
            </div>
            <div className="w-full bg-yellow-500 text-black font-black text-xs py-2 rounded text-center">Continue →</div>
        </div>
    </div>
);

const LawyerCallMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-3 text-center">
            <div className="text-yellow-400 font-black text-sm">Your Case Looks Strong.</div>
            <div className="text-slate-300 text-[10px] mt-0.5">Schedule your FREE 15-minute attorney call now</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-2 space-y-1">
                <div className="font-bold text-yellow-700 text-[11px]">Why act now?</div>
                {['Statutes of limitation — you have limited time to file', 'Evidence disappears fast — we need to act immediately', 'Insurance companies build their case from day one'].map(r => (
                    <div key={r} className="flex items-start gap-1 text-[10px] text-yellow-700"><Clock className="w-2 h-2 shrink-0 mt-0.5" /> {r}</div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-1">
                {['Mon', 'Tue', 'Wed'].map((d, i) => (
                    <div key={d} className={`border rounded p-1.5 text-center cursor-pointer ${i === 1 ? 'border-yellow-500 bg-yellow-50' : 'border-slate-200'}`}>
                        <div className="text-[10px] font-black text-slate-700">{d}</div>
                        {['10 AM', '2 PM', '4 PM'].slice(i, i+1).map(t => <div key={t} className="text-[9px] text-slate-400 mt-0.5">{t} avail</div>)}
                    </div>
                ))}
            </div>
            <div className="w-full bg-yellow-500 text-black font-black text-xs py-2 rounded text-center">Schedule My Attorney Call →</div>
            <div className="flex items-center gap-1 justify-center text-[10px] text-slate-500"><Phone className="w-2 h-2" /> Or call now: (555) 000-1234</div>
        </div>
    </div>
);

const LawyerConfirmMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-slate-900 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">✅</div>
            <div className="text-white font-black text-sm">Call Confirmed — We're on Your Side</div>
            <div className="text-slate-400 text-[10px]">An attorney will call you at the scheduled time</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="bg-slate-50 border border-slate-200 rounded-lg p-2 space-y-1">
                <div className="font-bold text-slate-700 text-[11px]">Your Call Details:</div>
                <div className="text-[10px] text-slate-600">📅 Tuesday at 2:00 PM</div>
                <div className="text-[10px] text-slate-600">📞 We'll call you at [your number]</div>
                <div className="text-[10px] text-slate-600">⏱ 15 minutes · Confidential</div>
            </div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[11px]">To Prepare for Your Call:</div>
                {['Write down the date, time, and location of the incident', 'Have photos or any documentation ready', 'Note any witnesses or their contact info'].map((s, i) => (
                    <div key={s} className="flex items-start gap-1.5 text-[10px] text-slate-600">
                        <div className="w-3 h-3 rounded-full bg-slate-800 text-white font-black flex items-center justify-center text-[9px] shrink-0">{i+1}</div> {s}
                    </div>
                ))}
            </div>
            <div className="bg-yellow-50 border border-yellow-300 rounded-lg p-2 text-center">
                <div className="text-[10px] text-yellow-700 font-bold">Need to talk sooner?</div>
                <div className="text-yellow-600 font-black text-sm">(555) 000-1234</div>
                <div className="text-[9px] text-yellow-600">Available 24/7 for emergencies</div>
            </div>
        </div>
    </div>
);

// ─── COACH MOCKUPS ────────────────────────────────────────────────────────────

const CoachAdMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-center gap-1.5">
            <div className="w-7 h-7 rounded-full bg-purple-600 flex items-center justify-center text-white font-black text-[11px]">🎯</div>
            <div><Bar w="w-20" h="h-1.5" color="bg-slate-300" /><div className="text-[10px] text-slate-400 mt-0.5">Sponsored</div></div>
        </div>
        <div className="px-2.5 pb-1.5">
            <div className="font-bold text-slate-800 text-[11px] leading-tight">If You're Stuck at [Revenue/Goal] And Ready to Break Through — This is For You</div>
            <div className="text-[10px] text-slate-500 mt-0.5">Book a FREE 30-min strategy session with [Coach Name]</div>
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-purple-600 to-indigo-700 flex flex-col items-center justify-center gap-1.5 relative">
            <div className="absolute top-1.5 left-1.5 bg-yellow-400 text-black text-[10px] font-black px-1.5 py-0.5 rounded">FREE SESSION</div>
            <div className="w-10 h-10 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-[18px]">👤</div>
            <div className="text-white font-black text-xs text-center px-3">[Coach Name]<br/><span className="font-normal text-purple-200 text-[10px]">[Credential / Result]</span></div>
            <div className="flex gap-2">
                {['500+ Clients', '$2M+ Results', '5⭐ Reviews'].map(s => <div key={s} className="bg-white/10 text-white text-[9px] font-bold px-1.5 py-0.5 rounded">{s}</div>)}
            </div>
        </div>
        <div className="bg-slate-50 border-t border-slate-200 px-2.5 py-2 flex items-center justify-between">
            <div><div className="text-[10px] text-slate-400">[Coach Name] Coaching</div><Bar w="w-20" h="h-1.5" color="bg-slate-300" className="mt-0.5" /></div>
            <div className="bg-purple-600 text-white text-[10px] font-bold px-2.5 py-1 rounded">Apply Now</div>
        </div>
    </div>
);

const CoachLandingMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-br from-purple-700 to-indigo-800 px-3 py-4 text-center space-y-1.5">
            <div className="text-purple-200 text-[10px] font-bold uppercase tracking-widest">FREE STRATEGY SESSION</div>
            <div className="text-white font-black text-[12px] leading-tight">Ready to [Specific Outcome]<br/>in the Next 90 Days?</div>
            <div className="text-purple-200 text-[10px]">Apply for a complimentary session with [Coach Name] — limited availability</div>
            <div className="flex justify-center gap-2 pt-1">
                <div className="flex items-center gap-1 bg-white/10 rounded-full px-2 py-0.5 text-[9px] text-purple-200 font-bold"><Star className="w-2 h-2 fill-yellow-400 text-yellow-400" /> 4.9/5 from 200+ sessions</div>
            </div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[11px] text-slate-600 text-center">In this free 30-minute call, you'll walk away with a crystal-clear action plan for your next 90 days — even if we never work together.</div>
            {['Your #1 bottleneck identified and solved', 'A 3-step roadmap specific to your situation', 'Honest feedback on what\'s holding you back'].map(b => (
                <div key={b} className="flex items-center gap-1 text-[11px] text-slate-600"><Zap className="w-2.5 h-2.5 text-purple-500 shrink-0" /> {b}</div>
            ))}
            <div className="space-y-1.5">
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Your Name</div>
                <div className="border border-slate-200 rounded px-2 py-1.5 bg-slate-50 text-[11px] text-slate-400">Email Address</div>
                <div className="w-full bg-purple-600 text-white font-black text-sm py-2 rounded text-center">Apply for My Free Session →</div>
            </div>
            <div className="text-[10px] text-slate-400 text-center">Spots are limited — we only accept 5 new clients per month</div>
        </div>
    </div>
);

const CoachApplicationMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-purple-700 px-3 py-2">
            <div className="text-white font-black text-xs">Application — Tell Me About Your Goals</div>
            <div className="flex gap-0.5 mt-1.5">
                {[1,2,3].map(i => <div key={i} className={`h-1 flex-1 rounded-full ${i <= 2 ? 'bg-white' : 'bg-purple-500'}`} />)}
            </div>
            <div className="text-[9px] text-purple-200 mt-0.5">Step 2 of 3</div>
        </div>
        <div className="p-3 space-y-2.5">
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">What's your current monthly revenue / situation?</div>
                <div className="grid grid-cols-2 gap-1">
                    {['$0 – just starting', '$1K–$5K/month', '$5K–$15K/month', '$15K+/month'].map(o => (
                        <div key={o} className={`border rounded px-2 py-1.5 text-[10px] font-bold cursor-pointer ${o === '$1K–$5K/month' ? 'border-purple-500 bg-purple-50 text-purple-700' : 'border-slate-200 text-slate-500'}`}>{o}</div>
                    ))}
                </div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">What's your #1 goal in the next 90 days?</div>
                <div className="border border-slate-200 rounded p-2 bg-slate-50 h-10"><Bar w="w-3/4" h="h-1.5" color="bg-slate-200" /></div>
            </div>
            <div className="space-y-1">
                <div className="text-[10px] font-bold text-slate-600">What's your biggest obstacle right now?</div>
                <div className="grid grid-cols-2 gap-1">
                    {['No clear strategy', 'Not enough leads', 'Mindset/confidence', 'Time management'].map(o => (
                        <div key={o} className="border border-slate-200 rounded px-2 py-1.5 text-[10px] text-slate-500 cursor-pointer">{o}</div>
                    ))}
                </div>
            </div>
            <div className="w-full bg-purple-600 text-white font-black text-xs py-2 rounded text-center">Continue to Booking →</div>
        </div>
    </div>
);

const CoachBookingMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-3 text-center">
            <div className="text-white font-black text-sm">🎉 You're a Great Fit! Book Your Session</div>
            <div className="text-purple-100 text-[10px] mt-0.5">Only 2 spots left this week — first come, first served</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center text-[14px] shrink-0">👤</div>
                <div>
                    <div className="font-bold text-purple-700 text-[10px]">[Coach Name]</div>
                    <div className="text-[9px] text-purple-500">30-min Free Strategy Session</div>
                    <div className="flex gap-1 mt-0.5">
                        {['Zoom', 'Free', 'No pitch'].map(t => <div key={t} className="bg-purple-100 text-purple-600 text-[5.5px] font-bold px-1 py-0.5 rounded">{t}</div>)}
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-4 gap-1">
                {['Mon 14', 'Tue 15', 'Thu 17', 'Fri 18'].map((d, i) => (
                    <div key={d} className={`border rounded p-1.5 text-center cursor-pointer ${i === 2 ? 'border-purple-500 bg-purple-50' : 'border-slate-200'}`}>
                        <div className="text-[9px] font-black text-slate-700">{d}</div>
                    </div>
                ))}
            </div>
            <div className="grid grid-cols-3 gap-1">
                {['9:00 AM', '11:00 AM', '2:00 PM', '3:30 PM', '5:00 PM', '6:00 PM'].map((t, i) => (
                    <div key={t} className={`border rounded px-1 py-1.5 text-center text-[10px] font-bold cursor-pointer ${i === 3 ? 'border-purple-500 bg-purple-500 text-white' : 'border-slate-200 text-slate-600'}`}>{t}</div>
                ))}
            </div>
            <div className="w-full bg-purple-600 text-white font-black text-xs py-2 rounded text-center">Confirm My Free Session →</div>
        </div>
    </div>
);

const CoachConfirmMockup = () => (
    <div className="bg-white text-xs text-slate-700">
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 px-3 py-3 text-center">
            <div className="text-2xl mb-0.5">🚀</div>
            <div className="text-white font-black text-sm">You're Booked! See You Soon.</div>
            <div className="text-purple-100 text-[10px]">Thursday at 3:30 PM via Zoom</div>
        </div>
        <div className="p-3 space-y-2">
            <div className="text-[11px] text-slate-600 text-center">A calendar invite and Zoom link are on their way to your inbox.</div>
            <div className="border border-slate-200 rounded-lg p-2 space-y-1.5">
                <div className="font-bold text-slate-700 text-[11px]">To Get the Most From Your Call:</div>
                {['Watch this 10-min video before we meet', 'Write down your top 3 goals for the next 90 days', 'Come ready to be honest about what\'s holding you back'].map((s, i) => (
                    <div key={s} className="flex items-start gap-1.5 text-[10px] text-slate-600">
                        <div className="w-3 h-3 rounded-full bg-purple-600 text-white font-black flex items-center justify-center text-[9px] shrink-0">{i+1}</div> {s}
                    </div>
                ))}
            </div>
            <VideoFrame progress={0} time="0:00" duration="10:24" gradient="from-purple-900 to-indigo-900" />
            <div className="bg-purple-50 border border-purple-200 rounded-lg p-2 text-center">
                <div className="text-[10px] font-bold text-purple-700">Questions before the call?</div>
                <div className="text-[10px] text-purple-500 mt-0.5">[coach@email.com]</div>
            </div>
        </div>
    </div>
);

// ─── INDUSTRY STAGE DATA ───────────────────────────────────────────────────────

const DENTAL_STAGES = [
    {
        id: 'ad', label: 'Facebook Ad', sublabel: 'Before/After Hook',
        icon: Users, bg: 'bg-teal-600', pill: 'bg-teal-900/40 text-teal-300 border-teal-700', text: 'text-teal-400',
        url: 'facebook.com/ad', mockup: <DentalAdMockup />,
        conversion: '1–3%', conversionNote: 'click-through rate', price: null,
        description: 'Facebook and Instagram ads with before/after visuals are the highest-converting entry point for dental lead gen. The hook should address a specific pain (yellow teeth, confidence) and offer something free.',
        tips: ['Before/after visuals outperform all other creative formats', 'Geo-target within 10–15 km of the clinic — local = relevant', 'Free offer (whitening consult, smile assessment) lowers the barrier', 'Video testimonials from real patients build trust fast'],
        metrics: [{ label: 'CTR Target', value: '1–3%' }, { label: 'CPL Target', value: '$5–$25' }, { label: 'Best Platform', value: 'Meta / IG' }],
    },
    {
        id: 'landing', label: 'Landing Page', sublabel: 'Free Consultation Offer',
        icon: Heart, bg: 'bg-cyan-600', pill: 'bg-cyan-900/40 text-cyan-300 border-cyan-700', text: 'text-cyan-400',
        url: 'smile.yourclinic.com', mockup: <DentalLandingMockup />,
        conversion: '20–40%', conversionNote: 'of visitors fill the form', price: 'Free Offer',
        description: 'A hyper-local landing page offering a free smile assessment or whitening consult. Show the dentist\'s face, local social proof, and a simple 2-field form. Localisation (city name, local reviews) dramatically increases trust.',
        tips: ['Show the dentist\'s face — it humanises the practice immediately', 'Use local Google reviews count and star rating as social proof', 'Only ask for name + phone on the first form — reduce friction', 'Mention the clinic\'s address/suburb to confirm you\'re local'],
        metrics: [{ label: 'Conv. Rate', value: '20–40%' }, { label: 'Goal', value: 'Get phone no.' }, { label: 'Key Trust', value: 'Local proof' }],
    },
    {
        id: 'quiz', label: 'Smile Quiz', sublabel: 'Qualify & Warm Up',
        icon: Search, bg: 'bg-sky-600', pill: 'bg-sky-900/40 text-sky-300 border-sky-700', text: 'text-sky-400',
        url: 'smile.yourclinic.com/quiz', mockup: <DentalQuizMockup />,
        conversion: '60–80%', conversionNote: 'complete the quiz', price: null,
        description: 'A short 3-question quiz warms up the lead while qualifying them. Leads who complete a quiz are 3× more likely to show up for their appointment because they\'ve invested time and feel seen.',
        tips: ['3 questions maximum — completion drops sharply after that', 'Questions should mirror real concerns: appearance, confidence, cost', 'The quiz results page can personalise the next offer', 'Segment quiz answers to customise the follow-up sequence'],
        metrics: [{ label: 'Completion', value: '60–80%' }, { label: 'Show-Up Lift', value: '+30–40%' }, { label: 'Purpose', value: 'Qualify + warm' }],
    },
    {
        id: 'book', label: 'Booking Page', sublabel: 'Schedule Appointment',
        icon: Calendar, bg: 'bg-teal-700', pill: 'bg-teal-900/40 text-teal-200 border-teal-600', text: 'text-teal-300',
        url: 'smile.yourclinic.com/book', mockup: <DentalBookingMockup />,
        conversion: '40–60%', conversionNote: 'of leads book an appointment', price: null,
        description: 'The appointment booking step. Show real-time availability (or a convincing approximation) and use scarcity messaging ("only 3 spots left this week") to drive immediate action.',
        tips: ['Show only 3–5 days of availability to create scarcity', 'Include the clinic address with a map to reduce no-shows', 'SMS confirmation + reminders reduce no-shows by 40–50%', '"Only X spots left" increases booking urgency significantly'],
        metrics: [{ label: 'Book Rate', value: '40–60%' }, { label: 'No-Show Rate', value: '20–35%' }, { label: 'Key Driver', value: 'Scarcity + SMS' }],
    },
    {
        id: 'confirm', label: 'Confirmation', sublabel: 'Nurture Until Visit',
        icon: Award, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'smile.yourclinic.com/confirmed', mockup: <DentalConfirmMockup />,
        conversion: '55–75%', conversionNote: 'show-up rate with reminders', price: null,
        description: 'Post-booking confirmation with appointment details, add-to-calendar links, and what to bring. Automated SMS reminders at 48h, 24h, and 2h before the visit are the single highest-leverage action to reduce no-shows.',
        tips: ['3-touch SMS reminder sequence cuts no-shows by 40–50%', 'Include the dentist\'s photo so they recognise the face on arrival', 'Re-confirm via SMS the day before — include a 1-click cancel option', 'A short intro video from the dentist builds rapport before they arrive'],
        metrics: [{ label: 'Show-Up Rate', value: '55–75%' }, { label: 'SMS Impact', value: '-40% no-shows' }, { label: 'Close Rate', value: '60–80% in chair' }],
    },
];

const LAWYER_STAGES = [
    {
        id: 'ad', label: 'Google / FB Ad', sublabel: 'Pain-Point Hook',
        icon: Users, bg: 'bg-slate-700', pill: 'bg-slate-800/60 text-slate-300 border-slate-600', text: 'text-slate-300',
        url: 'google.com/ads', mockup: <LawyerAdMockup />,
        conversion: '2–5%', conversionNote: 'click-through rate', price: null,
        description: 'Google Search ads capture high-intent leads already searching for legal help. Facebook/Instagram ads work for awareness targeting (injury ads, rights-awareness). Both lead to the free case review page.',
        tips: ['Google Search targets highest intent — "car accident lawyer [city]"', 'Facebook works for awareness: "Did you know you have 2 years to file?"', 'Focus on pain and justice — not legal jargon', 'Past verdicts/settlements build massive credibility in the creative'],
        metrics: [{ label: 'Google CTR', value: '5–10%' }, { label: 'FB CTR', value: '1–3%' }, { label: 'CPL Target', value: '$30–$120' }],
    },
    {
        id: 'landing', label: 'Landing Page', sublabel: 'Free Case Review',
        icon: Scale, bg: 'bg-yellow-600', pill: 'bg-yellow-900/40 text-yellow-300 border-yellow-700', text: 'text-yellow-400',
        url: 'freecasereview.lawfirm.com', mockup: <LawyerLandingMockup />,
        conversion: '15–30%', conversionNote: 'of visitors submit the form', price: 'Free',
        description: 'A high-trust landing page offering a free case evaluation. "No win, no fee" is the most powerful trust signal in legal — lead with it. Show past settlement amounts and real client testimonials prominently.',
        tips: ['"No win, no fee" in the headline — it removes all financial risk', 'Show dollar amounts of past settlements — specificity builds credibility', 'List case types to help leads self-identify ("Is this you?")', 'Urgency: statute of limitations creates a real reason to act now'],
        metrics: [{ label: 'Conv. Rate', value: '15–30%' }, { label: 'Key Trust Signal', value: 'No win no fee' }, { label: 'CPL', value: '$50–$200' }],
    },
    {
        id: 'intake', label: 'Intake Form', sublabel: 'Case Qualification',
        icon: FileText, bg: 'bg-slate-600', pill: 'bg-slate-800/60 text-slate-300 border-slate-600', text: 'text-slate-300',
        url: 'freecasereview.lawfirm.com/details', mockup: <LawyerIntakeMockup />,
        conversion: '50–70%', conversionNote: 'complete the intake form', price: null,
        description: 'A multi-step intake form that captures incident details and qualifies the lead. Multi-step forms convert 30–40% better than single-page forms because they reduce perceived effort and create micro-commitments.',
        tips: ['Multi-step forms convert 30–40% better than one-page forms', 'Ask easy questions first (when, where) before sensitive ones (medical)', 'A progress bar increases completion rate by 15–20%', 'Qualify without being too restrictive — err on the side of inclusion'],
        metrics: [{ label: 'Completion', value: '50–70%' }, { label: 'Steps', value: '3–4 pages' }, { label: 'Goal', value: 'Qualify case' }],
    },
    {
        id: 'call', label: 'Call Booking', sublabel: 'Attorney Consultation',
        icon: Phone, bg: 'bg-yellow-700', pill: 'bg-yellow-900/40 text-yellow-200 border-yellow-600', text: 'text-yellow-300',
        url: 'freecasereview.lawfirm.com/schedule', mockup: <LawyerCallMockup />,
        conversion: '40–60%', conversionNote: 'of qualified leads book a call', price: null,
        description: 'After a qualifying intake, direct the lead to book a 15-minute attorney call. The urgency framing here is crucial — statute of limitations and evidence preservation create a real reason to act immediately.',
        tips: ['Lead with urgency: statute of limitations is a real, powerful motivator', 'Offer same-day or next-day availability whenever possible', 'An attorney photo and credentials build trust at this critical moment', 'Offer a callback option for those who won\'t self-schedule'],
        metrics: [{ label: 'Book Rate', value: '40–60%' }, { label: 'Call Length', value: '15–20 min' }, { label: 'Close Rate', value: '30–60%' }],
    },
    {
        id: 'confirm', label: 'Confirmation', sublabel: 'Pre-Call Prep',
        icon: Award, bg: 'bg-green-700', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'freecasereview.lawfirm.com/confirmed', mockup: <LawyerConfirmMockup />,
        conversion: '65–80%', conversionNote: 'show up for the scheduled call', price: null,
        description: 'Confirms the call, sets expectations, and guides the lead to prepare documentation. Leads who prepare for the call are more serious and close at a significantly higher rate.',
        tips: ['Ask them to gather documentation — it pre-commits them to the process', 'Email + SMS reminders reduce no-shows by 40%', 'Send a short intro video from the attorney who will be calling', 'The 24h reminder is your most important no-show reducer'],
        metrics: [{ label: 'Show Rate', value: '65–80%' }, { label: 'Close Rate', value: '30–60%' }, { label: 'Deal Value', value: 'Contingency' }],
    },
];

const COACH_STAGES = [
    {
        id: 'ad', label: 'Social Ad', sublabel: 'Outcome-Based Hook',
        icon: Users, bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        url: 'facebook.com/ad', mockup: <CoachAdMockup />,
        conversion: '1–4%', conversionNote: 'click-through rate', price: null,
        description: 'Facebook, Instagram, and LinkedIn ads targeting people at a specific stage of frustration or ambition. The hook speaks directly to the "stuck" feeling — and the offer of a free session removes all the risk.',
        tips: ['Speak to a specific stage: "stuck at $5K/month?" beats generic messaging', 'The coach\'s face in the creative builds personal connection instantly', 'Results-based hooks ("I helped 47 coaches hit 6-figures") outperform vague claims', 'LinkedIn works well for B2B coaching; Meta for lifestyle/personal transformation'],
        metrics: [{ label: 'CTR Target', value: '1–4%' }, { label: 'CPL Target', value: '$15–$60' }, { label: 'Best Platform', value: 'Meta / LinkedIn' }],
    },
    {
        id: 'landing', label: 'Landing Page', sublabel: 'Free Session Apply',
        icon: BookOpen, bg: 'bg-indigo-600', pill: 'bg-indigo-900/40 text-indigo-300 border-indigo-700', text: 'text-indigo-400',
        url: 'yourcoach.com/apply', mockup: <CoachLandingMockup />,
        conversion: '15–35%', conversionNote: 'of visitors apply', price: 'Free',
        description: 'An application-style landing page that filters out the wrong people and attracts the right ones. "Apply for a session" (vs "Book a call") creates perceived exclusivity and filters for seriousness.',
        tips: ['"Apply" framing creates exclusivity and filters for serious leads', 'Show specific client results with before/after context', 'Scarcity: "5 clients per month" is believable and creates urgency', 'A short video from the coach dramatically increases application quality'],
        metrics: [{ label: 'Apply Rate', value: '15–35%' }, { label: 'Qualifier', value: 'Self-select', }, { label: 'Lead Quality', value: 'High intent' }],
    },
    {
        id: 'app', label: 'Application', sublabel: 'Goal Qualification',
        icon: FileText, bg: 'bg-violet-600', pill: 'bg-violet-900/40 text-violet-300 border-violet-700', text: 'text-violet-400',
        url: 'yourcoach.com/application', mockup: <CoachApplicationMockup />,
        conversion: '55–75%', conversionNote: 'complete the application', price: null,
        description: 'A short application form that qualifies the lead\'s goals, current situation, and readiness to invest. This data lets the coach personalise the strategy session and close much more effectively.',
        tips: ['Ask about current situation AND desired outcome — the gap is your offer', 'Include an investment readiness question to pre-qualify budget', 'Keep it to 4–5 questions — enough to qualify, not so much it feels like a job application', 'The act of applying creates commitment bias — they\'re more likely to show up'],
        metrics: [{ label: 'Completion', value: '55–75%' }, { label: 'Questions', value: '4–5 max' }, { label: 'Purpose', value: 'Qualify + pre-sell' }],
    },
    {
        id: 'book', label: 'Booking Page', sublabel: 'Discovery Call',
        icon: Calendar, bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        url: 'yourcoach.com/book', mockup: <CoachBookingMockup />,
        conversion: '50–70%', conversionNote: 'of applicants book a call', price: null,
        description: 'The calendar booking step after a successful application. Reinforce the coach\'s credentials and the session\'s value. The "you\'re a great fit" framing at the top of this page dramatically increases booking rates.',
        tips: ['"You\'re a great fit!" validation before the calendar increases bookings', 'Show the coach\'s face, credentials, and past client results', 'Limit available slots visually to reinforce scarcity', 'Use Calendly, TidyCal, or Cal.com with Zoom integration for seamless booking'],
        metrics: [{ label: 'Book Rate', value: '50–70%' }, { label: 'Call Length', value: '30–45 min' }, { label: 'Key Frame', value: 'Strategy, not sales' }],
    },
    {
        id: 'confirm', label: 'Pre-Call Nurture', sublabel: 'Prepare & Show Up',
        icon: Award, bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        url: 'yourcoach.com/confirmed', mockup: <CoachConfirmMockup />,
        conversion: '10–25%', conversionNote: 'of calls convert to paid client', price: '$1,000–$10,000+',
        description: 'Post-booking confirmation with a pre-call homework video and clear next steps. Coaches who send a pre-call video see 30–40% higher show rates and significantly better close rates because leads arrive pre-sold.',
        tips: ['A pre-call video warms up the lead and does pre-selling before you even speak', 'Ask them to watch it BEFORE the call — makes the call 10× more productive', 'SMS reminder at 24h and 1h before the call reduces no-shows by 35–45%', 'Ask them to write down their #1 goal — creates mental commitment'],
        metrics: [{ label: 'Show Rate', value: '65–85%' }, { label: 'Close Rate', value: '10–25%' }, { label: 'Deal Value', value: '$1K–$10K+' }],
    },
];

// ─── AI AGENCY MOCKUPS ────────────────────────────────────────────────────────

const AiContentMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="p-2.5 flex items-start gap-2">
            <div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-black text-sm shrink-0">YN</div>
            <div className="flex-1 min-w-0">
                <div className="font-bold text-slate-800 text-[11px]">[Your Name]</div>
                <div className="text-[10px] text-slate-400">2h · 🌐 Public</div>
            </div>
        </div>
        <div className="px-2.5 pb-2 space-y-1.5">
            <div className="font-bold text-slate-800 text-[11px] leading-snug">❌ Your business is paying staff to do tasks AI can handle in 10 minutes.</div>
            <div className="text-[10px] text-slate-600 leading-relaxed">Most business owners I talk to have no idea how much time and money they're burning on tasks that AI can automate overnight...</div>
            <div className="text-blue-500 text-[10px] font-bold">See more</div>
        </div>
        <div className="w-full aspect-video bg-gradient-to-br from-blue-600 to-indigo-700 flex flex-col items-center justify-center p-3 text-center gap-1.5">
            <div className="text-white font-black text-sm">🤖 AI Automation</div>
            <div className="text-blue-100 text-[10px]">Save 40+ hours/month · For local businesses</div>
            <div className="bg-white/20 text-white text-[10px] font-bold px-3 py-1 rounded-full mt-1">Book a Free Demo →</div>
        </div>
        <div className="px-2.5 py-1.5 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center gap-1 text-[10px] text-slate-400"><span>👍❤️🔥</span> 47</div>
            <div className="text-[10px] text-slate-400">12 comments · 8 shares</div>
        </div>
        <div className="px-2.5 py-1.5 flex items-center justify-around text-[10px] text-slate-500 font-bold">
            <span>👍 Like</span><span>💬 Comment</span><span>↗ Share</span>
        </div>
    </div>
);

const AiConnectMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="bg-blue-600 px-3 py-2 flex items-center gap-2">
            <MessageCircle className="w-4 h-4 text-white" />
            <div className="text-white font-bold text-[11px]">Messenger</div>
        </div>
        <div className="flex">
            <div className="w-1/3 border-r border-slate-100 divide-y divide-slate-50">
                {[
                    { name: 'John D.', msg: 'Hey, loved your post!', time: '2m', unread: true },
                    { name: 'Sarah M.', msg: 'Thanks for connecting!', time: '15m', unread: true },
                    { name: 'Mark L.', msg: 'That sounds interesting', time: '1h', unread: false },
                ].map((c, i) => (
                    <div key={i} className={`p-2 flex items-start gap-1.5 ${i === 0 ? 'bg-blue-50' : ''}`}>
                        <div className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
                        <div className="min-w-0 flex-1">
                            <div className="font-bold text-[9px] text-slate-700 truncate">{c.name}</div>
                            <div className="text-[8px] text-slate-400 truncate">{c.msg}</div>
                        </div>
                        <div className="shrink-0 flex flex-col items-end gap-0.5 ml-1">
                            <div className="text-[8px] text-slate-400">{c.time}</div>
                            {c.unread && <div className="w-2 h-2 rounded-full bg-blue-500" />}
                        </div>
                    </div>
                ))}
            </div>
            <div className="flex-1 flex flex-col min-w-0">
                <div className="p-2 border-b border-slate-100 flex items-center gap-1.5">
                    <div className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
                    <div><div className="font-bold text-[10px]">John D.</div><div className="text-[9px] text-green-500">Active now</div></div>
                </div>
                <div className="p-2 space-y-1.5 flex-1">
                    <div className="text-center text-[9px] text-slate-400 bg-slate-50 rounded px-1 py-0.5">You sent John a friend request</div>
                    <div className="flex justify-end">
                        <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[85%]">
                            Hey John! Saw your comment in [Group] — do you help local businesses?
                        </div>
                    </div>
                    <div className="flex">
                        <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[85%]">
                            Yeah I do! What's this about? 👀
                        </div>
                    </div>
                </div>
                <div className="p-1.5 border-t border-slate-100">
                    <div className="bg-slate-100 rounded-full px-2 py-1 text-[9px] text-slate-400">Type a message...</div>
                </div>
            </div>
        </div>
    </div>
);

const AiQualifyMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="bg-blue-600 px-3 py-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
            <div><div className="text-white font-bold text-[11px]">John D.</div><div className="text-blue-200 text-[9px]">Active now</div></div>
        </div>
        <div className="p-2 space-y-1.5">
            <div className="flex">
                <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    I run a dental clinic. 3 staff, struggling to get new patients consistently
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    Got it! Are you spending on ads or mostly word of mouth right now?
                </div>
            </div>
            <div className="flex">
                <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    Mostly word of mouth. Tried FB ads last year — didn't work great
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    Makes sense. I help clinics set up AI systems that book 2–3 extra patients/week automatically. Worth a 15-min Zoom to show you exactly how?
                </div>
            </div>
            <div className="flex">
                <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[50%]">
                    Sure, why not 👍
                </div>
            </div>
        </div>
    </div>
);

const AiZoomMockup = () => (
    <div className="bg-slate-900 rounded-lg overflow-hidden text-xs text-white">
        <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-between">
            <div className="font-bold text-[11px] flex items-center gap-1.5"><span className="text-blue-400 font-black">zoom</span> Meeting</div>
            <div className="text-[10px] text-slate-400">32:14 · 2 participants</div>
        </div>
        <div className="p-2 grid grid-cols-2 gap-1.5">
            <div className="aspect-video bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg flex flex-col items-end justify-end p-1.5 relative">
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-slate-600 flex items-center justify-center text-xl">👤</div>
                </div>
                <div className="bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">John D.</div>
            </div>
            <div className="aspect-video bg-gradient-to-br from-blue-700 to-indigo-800 rounded-lg flex flex-col items-end justify-end p-1.5 relative">
                <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-red-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-9 h-9 rounded-full bg-blue-500 flex items-center justify-center text-xl">😊</div>
                </div>
                <div className="bg-black/60 text-white text-[9px] px-1.5 py-0.5 rounded font-bold">You (Host)</div>
            </div>
        </div>
        <div className="mx-2 mb-2 bg-white rounded-lg p-2 border border-slate-200">
            <div className="text-[9px] text-slate-400 mb-1">📊 Screen Share — Proposal</div>
            <div className="text-[10px] font-bold text-slate-800">AI Automation Package</div>
            <div className="grid grid-cols-2 gap-0.5 mt-1">
                {['Lead Follow-Up AI', 'Appointment Bot', 'Review Automator', 'Monthly Reports'].map(f => (
                    <div key={f} className="flex items-center gap-0.5 text-[9px] text-slate-600">
                        <Check className="w-2.5 h-2.5 text-green-500 shrink-0" /> {f}
                    </div>
                ))}
            </div>
            <div className="mt-1.5 font-black text-sm text-blue-600">$1,500 / month</div>
        </div>
        <div className="bg-slate-800 px-3 py-1.5 flex items-center justify-center gap-2">
            {['🎤', '📷', '💬', '📊'].map(icon => (
                <div key={icon} className="w-7 h-7 rounded-full bg-slate-700 flex items-center justify-center text-sm">{icon}</div>
            ))}
            <div className="w-7 h-7 rounded-full bg-red-500 flex items-center justify-center text-[10px] font-bold">End</div>
        </div>
    </div>
);

const AiCloseMockup = () => (
    <div className="bg-white rounded-lg overflow-hidden border border-slate-200 text-xs text-slate-700">
        <div className="bg-blue-600 px-3 py-2 flex items-center gap-2">
            <div className="w-5 h-5 rounded-full bg-slate-300 shrink-0" />
            <div className="text-white font-bold text-[11px]">John D.</div>
        </div>
        <div className="p-2 space-y-1.5">
            <div className="flex">
                <div className="bg-slate-100 text-slate-700 text-[9px] rounded-xl rounded-tl-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    Honestly that was exactly what I needed. When can we start? 🙌
                </div>
            </div>
            <div className="flex justify-end">
                <div className="bg-blue-500 text-white text-[9px] rounded-xl rounded-tr-sm px-2 py-1.5 max-w-[80%] leading-relaxed">
                    Amazing! Sending the agreement + invoice now — once signed we kick off Monday 🚀
                </div>
            </div>
            <div className="border border-slate-200 rounded-xl p-2 bg-green-50 space-y-1.5">
                <div className="flex items-center gap-1.5">
                    <div className="w-7 h-7 bg-green-100 rounded-lg flex items-center justify-center text-sm shrink-0">📄</div>
                    <div>
                        <div className="font-bold text-[10px] text-slate-800">Service Agreement + Invoice</div>
                        <div className="text-[9px] text-slate-400">AI Automation Package · $1,500/mo</div>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-1">
                    <div className="bg-white border border-slate-200 rounded-lg text-center py-1 text-[9px] font-bold text-slate-600">View Doc</div>
                    <div className="bg-green-500 rounded-lg text-center py-1 text-[9px] font-bold text-white">Sign & Pay ✓</div>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="bg-green-50 border border-green-200 rounded-full px-2 py-0.5 text-[9px] text-green-600 font-bold">✅ Signed & paid — client onboarded!</div>
            </div>
        </div>
    </div>
);

// ─── AI AGENCY STAGES ──────────────────────────────────────────────────────────

const AI_AGENCY_STAGES = [
    {
        id: 'content', label: 'FB Content', sublabel: 'Profile & Group Posts',
        icon: Users, url: 'facebook.com/yourprofile',
        bg: 'bg-blue-600', pill: 'bg-blue-900/40 text-blue-300 border-blue-700', text: 'text-blue-400',
        mockup: <AiContentMockup />,
        conversion: '3–8%', conversionNote: 'of viewers engage / connect', price: null,
        description: 'Daily posts on your personal FB profile and in targeted FB groups build authority and attract inbound interest. Problem-aware content ("your staff is doing work AI can handle in 10 minutes") prompts prospects to comment or reach out.',
        tips: ['Post once daily minimum — consistency builds compound reach', 'Problem-aware hooks outperform solution posts every time', 'Target groups with 5K–50K members in your niche', 'Reply to every comment — engagement boosts organic reach by 3–5×'],
        metrics: [{ label: 'Posts/Week', value: '5–7' }, { label: 'Groups Active', value: '10–20' }, { label: 'Reach/Post', value: '200–2K' }],
    },
    {
        id: 'connect', label: 'Add + DM', sublabel: 'Friend Request & Opener',
        icon: UserPlus, url: 'messenger.com',
        bg: 'bg-indigo-600', pill: 'bg-indigo-900/40 text-indigo-300 border-indigo-700', text: 'text-indigo-400',
        mockup: <AiConnectMockup />,
        conversion: '40–60%', conversionNote: 'accept + reply to opener', price: null,
        description: 'After someone engages with your content (likes, comments, views profile), send a friend request and a short personalized opener. The opener is NOT a pitch — it\'s a curiosity question about their business.',
        tips: ['Send 20–30 friend requests per day (stay under FB limits)', 'Reference something specific: "Saw your comment in [Group]..."', 'Never pitch in the first message — ask about their situation', 'Use a simple 2-sentence opener — short messages get more replies'],
        metrics: [{ label: 'Requests/Day', value: '20–30' }, { label: 'Accept Rate', value: '40–60%' }, { label: 'Reply Rate', value: '30–50%' }],
    },
    {
        id: 'qualify', label: 'Qualify Chat', sublabel: 'DM Conversation',
        icon: MessageCircle, url: 'messenger.com/conversation',
        bg: 'bg-purple-600', pill: 'bg-purple-900/40 text-purple-300 border-purple-700', text: 'text-purple-400',
        mockup: <AiQualifyMockup />,
        conversion: '25–40%', conversionNote: 'agree to a Zoom call', price: null,
        description: 'A 4–6 message qualifying conversation identifies the prospect\'s situation, their biggest pain point, and whether they\'re a good fit. The goal is NOT to close here — it\'s to earn a Zoom call (or close directly on chat for smaller tickets).',
        tips: ['Ask 2–3 questions max before pitching the call', 'Mirror their language — use the words they use to describe the problem', 'Pain → Implication → Zoom: "That\'s costing you X... worth 15 min to fix it?"', 'For <$500 offers you can close fully on chat — skip the Zoom'],
        metrics: [{ label: 'Messages to Call', value: '4–8' }, { label: 'Call Booking Rate', value: '25–40%' }, { label: 'Chat Close Rate', value: '5–15%' }],
    },
    {
        id: 'zoom', label: 'Zoom Call', sublabel: 'Discovery + Close',
        icon: Video, url: 'zoom.us/meeting',
        bg: 'bg-pink-600', pill: 'bg-pink-900/40 text-pink-300 border-pink-700', text: 'text-pink-400',
        mockup: <AiZoomMockup />,
        conversion: '25–45%', conversionNote: 'of calls close to a paid client', price: '$1K–$5K/mo',
        description: 'A 30–45 minute discovery call where you diagnose the prospect\'s situation, show them a live demo or screen-shared proposal, and make a clear offer. The call structure: 70% listening, 30% presenting.',
        tips: ['Spend the first 15 min only asking questions — resist the urge to pitch early', 'Show a live demo or case study — tangible proof closes better than slides', 'Name the investment confidently: "$1,500/month. Does that work for you?"', 'Always end with a clear next step — never leave the call without a decision'],
        metrics: [{ label: 'Call Length', value: '30–45 min' }, { label: 'Close Rate', value: '25–45%' }, { label: 'Avg Deal', value: '$1K–$5K/mo' }],
    },
    {
        id: 'close', label: 'Close & Onboard', sublabel: 'Sign, Pay & Start',
        icon: Award, url: 'messenger.com/close',
        bg: 'bg-green-600', pill: 'bg-green-900/40 text-green-300 border-green-700', text: 'text-green-400',
        mockup: <AiCloseMockup />,
        conversion: null, conversionNote: null, price: null,
        description: 'Send the agreement and invoice immediately after the call — within 5 minutes while excitement is high. A fast close prevents buyer hesitation. Onboard the client same week to reduce refund risk and build early momentum.',
        tips: ['Send invoice within 5 minutes of ending the Zoom call', 'Use a simple 1-page agreement — complexity kills momentum', 'Start the onboarding call within 48 hours of payment', 'Week 1 win: deliver one quick result to confirm their decision was right'],
        metrics: [{ label: 'Send Invoice', value: '< 5 min' }, { label: 'Sign Rate', value: '70–90%' }, { label: 'Refund Risk', value: 'Low (fast start)' }],
    },
];

// ─── INDUSTRY DATA ─────────────────────────────────────────────────────────────

const INDUSTRIES = [
    {
        id: 'dental',
        label: 'Dental Clinic',
        emoji: '🦷',
        color: 'teal',
        accent: 'bg-teal-600',
        border: 'border-teal-500',
        text: 'text-teal-400',
        ring: 'ring-teal-500/30',
        stages: DENTAL_STAGES,
        title: 'Dental Clinic — Local Lead Funnel',
        description: 'A local lead generation funnel that turns Facebook/Instagram ads into booked dental appointments using a free consultation offer.',
        leadBlock: 'bg-teal-900/60 text-teal-200 border border-teal-700/60',
        leads: ['Facebook Ads', 'Instagram Ads', 'Google Ads', 'Google Maps / GMB', '5-Star Reviews', 'Local SEO', 'Patient Referrals', 'Nextdoor'],
        funnels: ['Free Consultation Funnel', 'Before/After Quiz Funnel', 'Google Search → Booking', 'Local Awareness + Retargeting', 'Before/After Video Ad'],
        offers: ['Free Smile Assessment ($150 value)', 'Free Whitening Consult', 'New Patient Special ($99)', 'Free Invisalign Consult', 'Complimentary First Clean'],
        revenueData: [
            { label: 'Ad Spend', value: '$1,500', note: '100 leads generated', color: 'text-blue-400' },
            { label: 'Appointments Booked', value: '40', note: '40% book rate', color: 'text-teal-400' },
            { label: 'Show-Ups', value: '26', note: '65% show rate', color: 'text-cyan-400' },
            { label: 'Treatment Revenue', value: '$13,000', note: '50% close × $1,000 avg', color: 'text-green-400' },
        ],
        revenueSummary: { title: 'Example: $1,500 Ad Spend → Dental Revenue', total: '$13,000', perUnitLabel: 'Return on Ad Spend', perUnit: '8.7×', note: 'Average treatment value varies ($800 whitening → $4,000 implants). Higher-value procedures dramatically improve ROAS.' },
    },
    {
        id: 'lawyer',
        label: 'Law Firm',
        emoji: '⚖️',
        color: 'yellow',
        accent: 'bg-yellow-600',
        border: 'border-yellow-500',
        text: 'text-yellow-400',
        ring: 'ring-yellow-500/30',
        stages: LAWYER_STAGES,
        title: 'Law Firm — Free Case Review Funnel',
        description: 'A lead qualification funnel that converts injury or legal queries into booked attorney consultations via a free case review offer.',
        leadBlock: 'bg-yellow-900/50 text-yellow-200 border border-yellow-700/60',
        leads: ['Google Search Ads', 'Facebook Ads', 'Google Maps / GMB', 'Client Reviews', 'Legal Directories (Avvo)', 'Referral Partners', 'Retargeting Ads', 'YouTube Ads'],
        funnels: ['Google Search → Case Review', 'Facebook Awareness → Intake', 'Retargeting Non-Converters', 'Referral Partner Funnels', 'Video Testimonial → Qualifier'],
        offers: ['Free Case Evaluation', 'No Win No Fee Representation', 'Free Attorney Call (15 min)', 'Statute of Limitations Audit', 'Case Strength Assessment'],
        revenueData: [
            { label: 'Leads Generated', value: '100', note: '$100 CPL average', color: 'text-slate-300' },
            { label: 'Qualified Cases', value: '40', note: '40% pass intake', color: 'text-yellow-400' },
            { label: 'Calls Held', value: '22', note: '55% show rate', color: 'text-orange-400' },
            { label: 'New Cases Signed', value: '8', note: '35% close rate', color: 'text-green-400' },
        ],
        revenueSummary: { title: 'Example: 100 Leads → Law Firm Revenue', total: '$40,000+', perUnitLabel: 'Revenue Per Lead', perUnit: '$400+', note: 'Contingency cases (personal injury) yield $5,000–$50,000+ per case. Even 1 case per 100 leads delivers exceptional ROI.' },
    },
    {
        id: 'coach',
        label: 'Coaches',
        emoji: '🎯',
        color: 'purple',
        accent: 'bg-purple-600',
        border: 'border-purple-500',
        text: 'text-purple-400',
        ring: 'ring-purple-500/30',
        stages: COACH_STAGES,
        title: 'Coaching Business — Discovery Call Funnel',
        description: 'An application-based funnel that filters for ideal clients and books high-quality discovery calls for coaches, consultants, and service providers.',
        leadBlock: 'bg-purple-900/50 text-purple-200 border border-purple-700/60',
        leads: ['Facebook Ads', 'Instagram Ads', 'LinkedIn Ads', 'YouTube Organic', 'TikTok Content', 'Podcast Appearances', 'Email List', 'Referrals'],
        funnels: ['Application → Discovery Call', 'Free Webinar → Strategy Call', '5-Day Challenge → Pitch Day', 'VSL → Application → Call', 'Organic Content → DMs → Call'],
        offers: ['Free 30-min Strategy Session', 'Group Coaching Program', '1:1 Private Coaching (3–6 mo)', '90-Day Accelerator / Mastermind', 'Online Course / Membership', 'Done-With-You Program'],
        revenueData: [
            { label: 'Applications', value: '50', note: 'From ads or organic', color: 'text-indigo-400' },
            { label: 'Calls Booked', value: '30', note: '60% book rate', color: 'text-purple-400' },
            { label: 'Calls Held', value: '22', note: '73% show rate', color: 'text-pink-400' },
            { label: 'Clients Closed', value: '4', note: '18% close × $3,000', color: 'text-green-400' },
        ],
        revenueSummary: { title: 'Example: 50 Applications → Coaching Revenue', total: '$12,000', perUnitLabel: 'Revenue Per Application', perUnit: '$240', note: 'At higher price points ($5K–$10K programs), even a 10% close rate from 50 applications delivers $25,000–$50,000 per cohort.' },
    },
    {
        id: 'ai-agency',
        label: 'AI Agency',
        emoji: '🤖',
        color: 'blue',
        accent: 'bg-blue-600',
        border: 'border-blue-500',
        text: 'text-blue-400',
        ring: 'ring-blue-500/30',
        stages: AI_AGENCY_STAGES,
        title: 'AI Agency — Organic FB Outreach Funnel',
        description: 'A fully organic funnel: post content on FB profile & groups to attract attention, connect via DM to qualify, then close the sale on conversation or Zoom — zero ad spend required.',
        leadBlock: 'bg-blue-900/60 text-blue-200 border border-blue-700/60',
        leads: ['FB Profile Posts', 'FB Group Posts', 'Video / Reels', 'Carousel Posts', 'Comment Engagement', 'Story Posts', 'Live Videos'],
        funnels: ['Content → DM → Chat Close', 'Content → DM → Zoom → Close', 'Group Post → Comment → DM', 'Profile View → Friend Request → DM', 'Referral → DM → Close'],
        offers: ['AI Automation Package ($1K–$3K/mo)', 'Done-For-You AI Setup (one-time)', 'AI Consulting (hourly)', '90-Day AI Agency Build-Out', 'AI Tools Training Workshop', 'Monthly Retainer + Maintenance'],
        revenueData: [
            { label: 'Friend Requests / Week', value: '100', note: 'Daily outreach', color: 'text-blue-400' },
            { label: 'Conversations Started', value: '30', note: '30% connect + reply', color: 'text-indigo-400' },
            { label: 'Zoom Calls Held', value: '10', note: '33% agree to call', color: 'text-purple-400' },
            { label: 'Clients Closed', value: '3', note: '30% close × $1,500/mo', color: 'text-green-400' },
        ],
        revenueSummary: { title: 'Example: 100 Outreaches → Monthly Revenue', total: '$4,500/mo', perUnitLabel: 'Revenue Per Outreach', perUnit: '$45', note: 'With 3 clients at $1,500/month, you hit $4,500 MRR in week one. Scale volume and price point — 5 clients at $2,500/mo = $12,500 MRR.' },
    },
];

// ─── Main Component ────────────────────────────────────────────────────────────

const IndustryFunnels = () => {
    const [activeIndustry, setActiveIndustry] = useState('dental');
    const [selected, setSelected] = useState(new Set());
    const industry = INDUSTRIES.find(i => i.id === activeIndustry);

    const toggle = (item) => setSelected(prev => {
        const next = new Set(prev);
        next.has(item) ? next.delete(item) : next.add(item);
        return next;
    });

    return (
        <div className="w-full flex justify-center py-8">
            <div className="w-full max-w-[1400px] flex flex-col gap-8">

                {/* Header */}
                <div>
                    <h2 className="text-3xl font-black text-white tracking-tight">Industry Lead Funnels</h2>
                    <p className="text-slate-400 mt-2">Funnel blueprints tailored to specific industries — each with the right hooks, offer types, and conversion points for that market.</p>
                </div>

                {/* Industry Selector */}
                <div className="flex items-center gap-3 flex-wrap">
                    {INDUSTRIES.map(ind => (
                        <button
                            key={ind.id}
                            onClick={() => setActiveIndustry(ind.id)}
                            className={`flex items-center gap-2.5 px-5 py-3 rounded-2xl border font-bold text-sm transition-all
                                ${activeIndustry === ind.id
                                    ? `${ind.accent} border-transparent text-white shadow-lg`
                                    : 'bg-slate-800/60 border-slate-700 text-slate-400 hover:text-white hover:border-slate-500'
                                }`}
                        >
                            <span className="text-lg">{ind.emoji}</span>
                            {ind.label}
                        </button>
                    ))}
                </div>

                {/* Active industry funnel */}
                {industry && (
                    <FunnelTemplate
                        key={industry.id}
                        title={industry.title}
                        description={industry.description}
                        stages={industry.stages}
                        revenueData={industry.revenueData}
                        revenueSummary={industry.revenueSummary}
                    />
                )}

                {/* Leads / Funnels / Offers reference cards */}
                {industry && (
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {[
                            { label: 'Traffic Sources / Leads', items: industry.leads, headerColor: industry.text, blockClass: industry.leadBlock },
                            { label: 'Possible Funnels', items: industry.funnels, headerColor: 'text-blue-400', blockClass: 'bg-blue-900/50 text-blue-200 border border-blue-700/60' },
                            { label: 'Possible Offers', items: industry.offers, headerColor: 'text-green-400', blockClass: 'bg-green-900/50 text-green-200 border border-green-700/60' },
                        ].map(col => (
                            <div key={col.label} className="bg-slate-800/40 border border-slate-700 rounded-2xl p-5">
                                <div className={`text-xs font-bold uppercase tracking-widest ${col.headerColor} mb-4`}>{col.label}</div>
                                <div className="flex flex-wrap gap-2">
                                    {col.items.map(item => (
                                        <div
                                            key={item}
                                            onClick={() => toggle(item)}
                                            className={`px-3 py-2 rounded-lg text-sm font-semibold cursor-pointer select-none transition-all duration-150 ${col.blockClass}
                                                ${selected.has(item)
                                                    ? 'brightness-[1.8] ring-2 ring-white/60 shadow-lg scale-105'
                                                    : 'hover:brightness-125'
                                                }`}
                                        >
                                            {item}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

            </div>
        </div>
    );
};

export default IndustryFunnels;
