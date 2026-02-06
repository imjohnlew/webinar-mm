import { Stethoscope, Scale, Users, Megaphone, Globe, Mail, Video, MousePointerClick, Calendar, FileText, Search, MapPin, Linkedin, Youtube, Instagram, BookOpen } from 'lucide-react';

// Master list of all possible "Lego Blocks" for each category
export const MASTER_BLOCKS = {
    lead: [
        { id: 'google_maps', name: 'Google Maps', icon: MapPin },
        { id: 'fb_ads', name: 'Facebook Ads', icon: Megaphone },
        { id: 'instagram', name: 'Instagram Reels', icon: Instagram },
        { id: 'seo', name: 'SEO (Search)', icon: Search },
        { id: 'linkedin', name: 'LinkedIn', icon: Linkedin },
        { id: 'youtube', name: 'YouTube', icon: Youtube },
        { id: 'referrals', name: 'Referrals', icon: Users },
        { id: 'flyers', name: 'Flyers', icon: FileText },
        { id: 'webinars', name: 'Webinars', icon: Video },
    ],
    funnel: [
        { id: 'ad_click', name: 'Ad Click', icon: MousePointerClick },
        { id: 'landing_page', name: 'Landing Page', icon: Globe },
        { id: 'lead_magnet', name: 'Lead Magnet', icon: GiftIcon },
        { id: 'booking', name: 'Booking Calendar', icon: Calendar },
        { id: 'email_seq', name: 'Email Sequence', icon: Mail },
        { id: 'call', name: 'Sales Call', icon: Stethoscope }, // Reusing stethoscope for "Consultation" vibe or generic phone
        { id: 'visit', name: 'In-Person Visit', icon: MapPin },
    ],
    offer: [
        { id: 'consultation', name: 'Free Consultation', icon: Users },
        { id: 'low_ticket', name: 'Discount/Special', icon: TagIcon },
        { id: 'retainer', name: 'Monthly Retainer', icon: Calendar },
        { id: 'course', name: 'Online Course', icon: BookOpen },
        { id: 'mentorship', name: '1-on-1 Mentorship', icon: Users },
        { id: 'service', name: 'Done-For-You Service', icon: CheckCircleIcon },
    ]
};

// Helper icons that aren't in the main import yet, adding to main import line...
// Wait, I need to make sure I import what I use.
// Let's rely on the industry mapping to specific IDs in MASTER_BLOCKS.

export const industries = [
    {
        id: 'dental',
        name: 'Dental Clinic',
        type: 'Offline Service',
        icon: Stethoscope,
        description: 'Local business relying on foot traffic and appointments.',
        color: 'from-blue-400 to-cyan-300',
        model: {
            lead: {
                title: 'Lead Generation',
                description: 'Attracting local patients searching for dental care.',
                activeBlocks: ['google_maps', 'fb_ads', 'flyers'], // Maps to MASTER_BLOCKS.lead
                skills: [
                    { name: 'Ad Creative (Video/Image)', icon: Video },
                    { name: 'Google Business Profile', icon: Globe }
                ]
            },
            offer: {
                title: 'The Offer',
                description: 'High-value entry offers to get them in the chair.',
                activeBlocks: ['low_ticket', 'consultation'],
                customText: ['$99 Whitening Special', 'Free Checkup', 'Emergency Fix'],
                skills: [
                    { name: 'Copywriting (Ad Copy)', icon: FileText }
                ]
            },
            funnel: {
                title: 'The Funnel',
                description: 'Converting interest into a booked appointment.',
                activeBlocks: ['ad_click', 'landing_page', 'booking', 'visit'],
                skills: [
                    { name: 'Landing Page Design', icon: MousePointerClick },
                    { name: 'Automation (SMS Reminders)', icon: Mail },
                    { name: 'Calendar Integration', icon: Calendar }
                ]
            }
        }
    },
    {
        id: 'lawyer',
        name: 'Lawyer / Firm',
        type: 'Professional Service',
        icon: Scale,
        description: 'High-ticket service relying on trust and authority.',
        color: 'from-slate-400 to-gray-200',
        model: {
            lead: {
                title: 'Lead Generation',
                description: 'Capturing people with immediate legal needs or questions.',
                activeBlocks: ['seo', 'linkedin', 'referrals'],
                skills: [
                    { name: 'SEO Optimization', icon: Globe },
                    { name: 'Content Writing', icon: FileText }
                ]
            },
            offer: {
                title: 'The Offer',
                description: 'Expertise and peace of mind.',
                activeBlocks: ['consultation', 'retainer'],
                skills: [
                    { name: 'Brand Positioning', icon: Users }
                ]
            },
            funnel: {
                title: 'The Funnel',
                description: 'Building trust and getting them on a call.',
                activeBlocks: ['seo', 'landing_page', 'email_seq', 'call'], // 'seo' acting as search/post
                skills: [
                    { name: 'Professional Website', icon: Globe },
                    { name: 'Email Follow-up Automation', icon: Mail }
                ]
            }
        }
    },
    {
        id: 'coach',
        name: 'Online Coach',
        type: 'Online Education',
        icon: Users,
        description: 'Scalable knowledge business selling transformation.',
        color: 'from-purple-500 to-pink-500',
        model: {
            lead: {
                title: 'Lead Generation',
                description: 'Building an audience through engaging content.',
                activeBlocks: ['instagram', 'youtube', 'webinars'],
                skills: [
                    { name: 'Video Editing', icon: Video },
                    { name: 'Social Media Strategy', icon: Megaphone }
                ]
            },
            offer: {
                title: 'The Offer',
                description: 'Digital products or coaching programs.',
                activeBlocks: ['course', 'mentorship'],
                skills: [
                    { name: 'Offer Creation', icon: FileText }
                ]
            },
            funnel: {
                title: 'The Funnel',
                description: 'Nurturing leads from content to customer.',
                activeBlocks: ['instagram', 'lead_magnet', 'email_seq', 'landing_page'],
                skills: [
                    { name: 'Funnel Building', icon: MousePointerClick },
                    { name: 'Email Marketing', icon: Mail },
                    { name: 'Automation (Zapier)', icon: FileText }
                ]
            }
        }
    }
];

function TagIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12 2H2v10l9.29 9.29c.94.94 2.48.94 3.42 0l6.58-6.58c.94-.94.94-2.48 0-3.42L12 2Z" />
            <path d="M7 7h.01" />
        </svg>
    )
}

function GiftIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <rect x="3" y="8" width="18" height="4" rx="1" />
            <path d="M12 8v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7" />
            <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5" />
        </svg>
    )
}

function CheckCircleIcon(props) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <path d="m9 11 3 3L22 4" />
        </svg>
    )
}
