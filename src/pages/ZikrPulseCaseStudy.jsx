import { useState } from 'react';
import { Link } from 'react-router-dom';
import CaseStudyNav from '../components/CaseStudyNav';
import { useScrollReveal } from '../hooks/useScrollReveal';

/* ── Reusable section wrapper ─────────────────────────── */
function Section({ children, id, className = '' }) {
    const [ref, vis] = useScrollReveal();
    return (
        <section id={id} ref={ref}
            className={`relative py-20 sm:py-28 transition-all duration-700 ${vis ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'} ${className}`}>
            {children}
        </section>
    );
}

function SectionLabel({ color = 'accent-teal', children }) {
    const colorMap = {
        'accent-teal': 'bg-accent-teal/10 border-accent-teal/20 text-accent-teal',
        'accent-sky': 'bg-accent-sky/10 border-accent-sky/20 text-accent-sky',
        'accent-gold': 'bg-accent-gold/10 border-accent-gold/20 text-accent-gold',
        'accent-emerald': 'bg-accent-emerald/10 border-accent-emerald/20 text-accent-emerald',
        'accent-amber': 'bg-accent-amber/10 border-accent-amber/20 text-accent-amber',
    };
    return (
        <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-6 ${colorMap[color]}`}>
            <span className="text-sm font-medium">{children}</span>
        </div>
    );
}

/* ── Lightbox ─────────────────────────────────────────── */
function Lightbox({ src, alt, onClose }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl cursor-pointer"
            onClick={onClose}>
            <button onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img src={src} alt={alt}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain"
                onClick={(e) => e.stopPropagation()} />
        </div>
    );
}

/* ── Phone Mockup Frame ───────────────────────────────── */
function PhoneMockup({ label, children, className = '' }) {
    return (
        <div className={`flex flex-col items-center ${className}`}>
            <div className="relative w-[200px] sm:w-[220px]">
                {/* Phone frame */}
                <div className="rounded-[2.5rem] border-[3px] border-white/[0.08] bg-dark-900 p-1.5 shadow-2xl shadow-black/40">
                    {/* Notch */}
                    <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-5 bg-dark-950 rounded-full z-20" />
                    {/* Screen */}
                    <div className="rounded-[2rem] overflow-hidden bg-dark-800 aspect-[9/19.5]">
                        {children}
                    </div>
                </div>
            </div>
            {label && (
                <div className="mt-4 text-xs font-medium text-text-muted text-center">{label}</div>
            )}
        </div>
    );
}

/* ── Hero ─────────────────────────────────────────────── */
function CaseHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.07] blur-[130px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-emerald/[0.05] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent-sky/[0.04] blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
                {/* Breadcrumb badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="text-sm font-medium text-accent-teal">Case Study</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">iOS · Published on App Store</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    <span className="gradient-text">ZikrPulse</span>
                </h1>

                <p className="text-xl sm:text-2xl text-text-secondary font-medium max-w-3xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.15s_both]">
                    Making daily learning and habit building engaging through gamification.
                </p>

                <p className="text-base text-text-muted max-w-2xl mx-auto mb-8 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    A cross-platform mobile app designed to improve consistency and engagement using progression systems, rewards and subscription-based premium features.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-6 animate-[fade-in-up_0.8s_ease_0.25s_both]">
                    {['React Native', 'Expo', 'RevenueCat', 'iOS', 'Android'].map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* App Store badge + CTA */}
                <div className="flex items-center justify-center gap-4 mb-12 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <a href="https://apps.apple.com/us/app/zikrpulse/id6757847516" target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                            </svg>
                            Download on App Store
                        </span>
                    </a>
                    <a href="#screenshots" className="btn-secondary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            See Screenshots
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                            </svg>
                        </span>
                    </a>
                </div>

                {/* Phone mockups — 3 screens */}
                <div className="animate-[fade-in-up_0.8s_ease_0.35s_both]">
                    <div className="flex items-end justify-center gap-4 sm:gap-8">
                        {/* Left phone — smaller */}
                        <PhoneMockup label="Modern Dhikr Tracker" className="hidden sm:flex opacity-80 scale-90 translate-y-4">
                            <div className="w-full h-full bg-gradient-to-b from-[#1a1a3e] via-[#0d1b33] to-[#0a0f1e] flex flex-col items-center justify-center p-4">
                                <div className="text-[10px] text-white/60 mb-2 mt-6">مسبحان اللہ</div>
                                <div className="text-xs text-white/40 mb-4">سُبْحَانَ ٱللَّٰهِ</div>
                                <div className="text-3xl font-bold text-white mb-4">515</div>
                                <div className="w-24 h-24 rounded-full border-4 border-cyan-400/60 flex items-center justify-center mb-4">
                                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-cyan-400/20 to-emerald-400/10" />
                                </div>
                                <div className="flex gap-6 mt-auto mb-4">
                                    {['🏠', '📊', '🛍️', '👤'].map((e, i) => (
                                        <span key={i} className="text-base opacity-60">{e}</span>
                                    ))}
                                </div>
                            </div>
                        </PhoneMockup>

                        {/* Center phone — main, full size */}
                        <PhoneMockup label="Unlock Beautiful Themes" className="scale-105 z-10">
                            <div className="w-full h-full bg-gradient-to-b from-[#2a2520] via-[#3a3020] to-[#1a1510] flex flex-col p-3">
                                <div className="text-xs font-bold text-white mt-6 mb-1 px-1">Shop</div>
                                <div className="flex gap-2 mb-3 px-1">
                                    {['Themes', 'Sounds'].map((tab, i) => (
                                        <span key={tab} className={`text-[9px] px-2.5 py-1 rounded-full ${i === 0 ? 'bg-amber-500/20 text-amber-300' : 'text-white/40'}`}>{tab}</span>
                                    ))}
                                </div>
                                <div className="space-y-1.5 flex-1">
                                    {[
                                        { name: 'Frozen Moonlight', color: 'from-blue-400 to-purple-500', premium: true },
                                        { name: 'Jade Serenity', color: 'from-emerald-400 to-teal-500', premium: false },
                                        { name: 'Red Firefly', color: 'from-red-400 to-orange-500', premium: true },
                                        { name: 'Ruby Blossom', color: 'from-pink-400 to-rose-500', premium: false },
                                        { name: 'Golden Radiance', color: 'from-amber-400 to-yellow-500', premium: true },
                                    ].map((theme) => (
                                        <div key={theme.name} className="flex items-center gap-2 glass-card px-2 py-1.5">
                                            <div className={`w-6 h-6 rounded-full bg-gradient-to-br ${theme.color} flex-shrink-0`} />
                                            <div className="flex-1 min-w-0">
                                                <div className="text-[9px] text-white font-medium truncate">{theme.name}</div>
                                            </div>
                                            {theme.premium && <span className="text-[7px] text-amber-400">👑</span>}
                                        </div>
                                    ))}
                                </div>
                                <div className="flex gap-6 justify-center mt-auto mb-2">
                                    {['🏠', '📊', '🛍️', '👤'].map((e, i) => (
                                        <span key={i} className={`text-sm ${i === 2 ? 'opacity-100' : 'opacity-40'}`}>{e}</span>
                                    ))}
                                </div>
                            </div>
                        </PhoneMockup>

                        {/* Right phone — smaller */}
                        <PhoneMockup label="Track Your Progress" className="hidden sm:flex opacity-80 scale-90 translate-y-4">
                            <div className="w-full h-full bg-gradient-to-b from-[#1a0a2e] via-[#2a1040] to-[#3a1020] flex flex-col items-center p-3">
                                <div className="text-xs font-bold text-white mt-6 mb-3">Profile</div>
                                <div className="glass-card w-full p-3 mb-3">
                                    <div className="text-[9px] text-white/60 mb-1">Transfer</div>
                                    <div className="w-full h-1 rounded-full bg-white/10 mb-1">
                                        <div className="w-3/5 h-full rounded-full bg-gradient-to-r from-pink-400 to-purple-400" />
                                    </div>
                                </div>
                                <div className="glass-card w-full p-3 mb-2">
                                    <div className="text-[9px] text-white font-medium mb-1">✨ Zikr Made Active</div>
                                    <div className="text-[8px] text-white/40">Daily streak tracking</div>
                                </div>
                                <div className="glass-card w-full p-3">
                                    <div className="text-[9px] text-white font-medium mb-1">🔥 Current Streak</div>
                                    <div className="text-lg font-bold text-cyan-400">7 Days</div>
                                </div>
                                <div className="flex gap-6 justify-center mt-auto mb-2">
                                    {['🏠', '📊', '🛍️', '👤'].map((e, i) => (
                                        <span key={i} className={`text-sm ${i === 3 ? 'opacity-100' : 'opacity-40'}`}>{e}</span>
                                    ))}
                                </div>
                            </div>
                        </PhoneMockup>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Page export ──────────────────────────────────────── */
export default function ZikrPulseCaseStudy() {
    const [lightboxImg, setLightboxImg] = useState(null);

    return (
        <div className="relative">
            <CaseStudyNav projectName="ZikrPulse" />
            <main>
                <CaseHero />

                <div className="section-divider" />

                {/* ── Product Overview ── */}
                <Section id="overview">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Product Overview</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            Turning daily habits into an <span className="gradient-text">engaging experience</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ZikrPulse is a cross-platform mobile app built to make daily learning and habit tracking more engaging and consistent through gamification, progression systems and premium content.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                The goal was to transform a traditionally repetitive activity into an experience that feels rewarding, motivating and enjoyable — keeping users coming back every day, not because they have to, but because they want to.
                            </p>
                        </div>

                        {/* App Store badge */}
                        <div className="glass-card p-5 mt-5 border-l-2 border-accent-teal/40">
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🍎</span>
                                <div>
                                    <div className="text-sm font-semibold text-text-primary mb-1">Live on the App Store</div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        ZikrPulse is a published iOS app available for download on the Apple App Store under the Health & Fitness category.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── App Store Screenshot ── */}
                <Section id="screenshots">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <SectionLabel color="accent-emerald">App Store Listing</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                            Published on the <span className="gradient-text">App Store</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto mb-10">
                            Available for download under Health & Fitness. Designed, developed, and published by Zain Zahab.
                        </p>

                        <div className="glass-card p-1.5 rounded-2xl overflow-hidden max-w-sm mx-auto cursor-pointer"
                            onClick={() => setLightboxImg({ src: '/screenshots/ZikrPulse-AppStore.png', alt: 'ZikrPulse on the Apple App Store' })}>
                            <div className="rounded-2xl overflow-hidden bg-dark-900">
                                <img src="/screenshots/ZikrPulse-AppStore.png"
                                    alt="ZikrPulse on the Apple App Store — Health & Fitness category, by Zain Zahab"
                                    className="w-full h-auto rounded-2xl transition-transform duration-500 hover:scale-[1.02]"
                                    loading="lazy" />
                            </div>
                            <p className="text-xs text-text-muted py-3">
                                Click to enlarge · ZikrPulse on the Apple App Store
                            </p>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── The Problem ── */}
                <Section id="problem">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-gold">The Problem</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Users download, then <span className="gradient-text">stop coming back</span>
                        </h2>

                        <div className="glass-card p-8 sm:p-10 mb-8">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-6">
                                Many habit and learning apps struggle with long-term engagement. Users often download them with good intentions but stop using them after a short period. The core challenge is retention.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { icon: '😴', title: 'Lack of Motivation', desc: 'Without meaningful feedback loops, users lose motivation to continue daily use — the app feels like a chore, not a reward.' },
                                { icon: '📉', title: 'No Sense of Progress', desc: 'Without visible progression systems, users can\'t see how far they\'ve come — making it easy to quit without feeling they\'ve lost anything.' },
                                { icon: '👋', title: 'Low Retention', desc: 'Most habit apps see dramatic drop-off after the first week. Without engagement mechanics, there\'s nothing pulling users back.' },
                            ].map((item) => (
                                <div key={item.title} className="glass-card glass-card-hover p-6 group">
                                    <div className="text-2xl mb-4">{item.icon}</div>
                                    <h3 className="font-display text-base font-bold text-text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── The Solution ── */}
                <Section id="solution">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-emerald">The Solution</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Make it feel like <span className="gradient-text">progression, not obligation</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                                    title: 'Gamification Systems',
                                    desc: 'Turn habit tracking into an engaging game with progression mechanics that make every session feel like an achievement.',
                                    gradient: 'from-accent-teal to-accent-emerald',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" /></svg>,
                                    title: 'Rewards & Progression',
                                    desc: 'Unlock themes, earn streaks, and track progress visually — giving users tangible milestones to work toward.',
                                    gradient: 'from-accent-amber to-accent-gold',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" /></svg>,
                                    title: 'Subscription Monetisation',
                                    desc: 'Premium content tiers powered by RevenueCat — beautiful themes, advanced features, and exclusive content for subscribers.',
                                    gradient: 'from-accent-sky to-accent-teal',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                                    title: 'Modern Mobile UI',
                                    desc: 'A polished, premium mobile interface that feels native on both iOS and Android — designed for engagement, not just function.',
                                    gradient: 'from-accent-gold to-accent-teal',
                                },
                            ].map((item) => (
                                <div key={item.title} className="glass-card glass-card-hover p-7 group">
                                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-5 transition-transform duration-500 group-hover:scale-110`}>
                                        {item.icon}
                                    </div>
                                    <h3 className="font-display text-lg font-bold text-text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Key Features ── */}
                <Section id="features">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-sky">Key Features</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Built for <span className="gradient-text">daily engagement</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                {[
                                    'Cross-platform iOS & Android app',
                                    'Gamified progression and reward systems',
                                    'In-app purchases and subscription tiers',
                                    'Premium content unlock system',
                                    'Modern mobile-first UI/UX',
                                    'Streak tracking and daily goals',
                                    'Multiple theme customisation',
                                    'Designed for retention and long-term engagement',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-md bg-accent-teal/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Technical Architecture ── */}
                <Section id="architecture">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Technical Architecture</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Engineering <span className="gradient-text">the mobile experience</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                {
                                    title: 'Mobile',
                                    gradient: 'from-accent-teal to-accent-emerald',
                                    techs: ['React Native', 'Expo', 'TypeScript'],
                                    desc: 'Cross-platform mobile app built with React Native and Expo for fast development and native-quality performance.',
                                    icon: '📱',
                                },
                                {
                                    title: 'Monetisation',
                                    gradient: 'from-accent-sky to-accent-gold',
                                    techs: ['RevenueCat', 'In-App Purchases', 'Subscriptions'],
                                    desc: 'Revenue infrastructure powered by RevenueCat for seamless subscription management and in-app purchase flows.',
                                    icon: '💎',
                                },
                                {
                                    title: 'Product',
                                    gradient: 'from-accent-amber to-accent-gold',
                                    techs: ['Gamification', 'Retention', 'Mobile UX'],
                                    desc: 'Product-first approach focused on engagement loops, daily motivation, and premium content that drives long-term retention.',
                                    icon: '🎮',
                                },
                            ].map((stack) => (
                                <div key={stack.title} className="glass-card glass-card-hover p-7 group text-center">
                                    <div className="text-3xl mb-4">{stack.icon}</div>
                                    <h3 className="font-display text-base font-bold text-text-primary mb-2">{stack.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{stack.desc}</p>
                                    <div className="flex flex-wrap justify-center gap-1.5">
                                        {stack.techs.map((t) => (
                                            <span key={t} className="tech-badge !text-[11px] !px-2.5 !py-1">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* App architecture flow */}
                        <div className="glass-card p-6 sm:p-8 mt-8">
                            <div className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">App Architecture</div>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                                {['User Interface', 'React Native', 'State & Logic', 'RevenueCat SDK', 'App Store'].map((step, i) => (
                                    <div key={step} className="flex items-center gap-3">
                                        <div className="glass-card px-4 py-3 text-center min-w-[110px]">
                                            <div className="text-xs font-semibold text-text-primary">{step}</div>
                                        </div>
                                        {i < 4 && (
                                            <svg className="w-5 h-5 text-text-muted flex-shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                            </svg>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Challenges & Learnings ── */}
                <Section id="challenges">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-amber">Challenges & Learnings</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            What I <span className="gradient-text">learned building this</span>
                        </h2>
                        <div className="space-y-5">
                            {[
                                {
                                    title: 'Designing Engagement Systems That Drive Daily Use',
                                    desc: 'Building effective gamification isn\'t about adding points to everything — it\'s about understanding what makes users feel accomplished and designing feedback loops that reinforce positive behaviour. I learned to think like a product designer, not just a developer.',
                                    icon: '🎯',
                                },
                                {
                                    title: 'Implementing Mobile Subscription & Purchase Flows',
                                    desc: 'Integrating RevenueCat, handling Apple\'s in-app purchase requirements, managing subscription states, and building paywall UX taught me the full complexity of mobile monetisation — from SDK integration to App Store compliance.',
                                    icon: '💳',
                                },
                                {
                                    title: 'Balancing Simplicity with Gamification Depth',
                                    desc: 'Too much gamification overwhelms users; too little and the app feels flat. Finding the right balance — where progression feels natural rather than forced — was one of the biggest product design challenges.',
                                    icon: '⚖️',
                                },
                                {
                                    title: 'Building a Polished Mobile UI & User Experience',
                                    desc: 'Publishing to the App Store means meeting Apple\'s quality standards. Building a mobile UI that feels native, responsive, and premium taught me attention to detail at the pixel level — animations, haptics, and interface polish.',
                                    icon: '✨',
                                },
                            ].map((challenge, i) => (
                                <div key={i} className="glass-card glass-card-hover p-7 flex gap-5">
                                    <div className="text-2xl flex-shrink-0 mt-1">{challenge.icon}</div>
                                    <div>
                                        <h3 className="font-display text-base font-bold text-text-primary mb-2">{challenge.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{challenge.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Outcome & Future ── */}
                <Section id="outcome">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <SectionLabel color="accent-emerald">Outcome & Future Plans</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            Live on the App Store, <span className="gradient-text">growing every day</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ZikrPulse is live and published on the Apple App Store — a real product that users can download, use, and subscribe to. It represents the full product lifecycle: from concept and design, through development and monetisation, to App Store publication.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                The app continues to evolve with plans for <span className="text-text-primary font-medium">expanded gamification systems</span>, <span className="text-text-primary font-medium">additional premium content</span>, and <span className="text-text-primary font-medium">advanced progression tracking</span> — all focused on deepening engagement and growing the user base.
                            </p>
                        </div>

                        {/* Roadmap pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-14">
                            {[
                                { label: 'App Store Launch', status: 'Live' },
                                { label: 'More Gamification', status: 'In Progress' },
                                { label: 'Expanded Premium Content', status: 'Planned' },
                                { label: 'Advanced Progression', status: 'Planned' },
                            ].map((item) => (
                                <div key={item.label} className="glass-card px-5 py-3 flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${item.status === 'Live' ? 'bg-accent-emerald' : item.status === 'In Progress' ? 'bg-accent-amber animate-pulse' : 'bg-dark-300'}`} />
                                    <span className="text-sm font-medium text-text-primary">{item.label}</span>
                                    <span className="text-[10px] text-text-muted uppercase tracking-wider">{item.status}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="https://apps.apple.com/us/app/zikrpulse/id6757847516" target="_blank" rel="noopener noreferrer"
                                className="btn-primary !py-3 !px-8">
                                <span className="flex items-center gap-2">
                                    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                                    </svg>
                                    Download on App Store
                                </span>
                            </a>
                            <Link to="/" className="btn-secondary !py-3 !px-8">
                                <span className="flex items-center gap-2">
                                    ← Back to Portfolio
                                </span>
                            </Link>
                        </div>
                    </div>
                </Section>

                {/* Footer */}
                <div className="py-8 border-t border-white/[0.04]">
                    <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-text-muted">© 2026 Zain Zahab</p>
                        <Link to="/" className="text-sm text-text-muted hover:text-text-secondary transition-colors">← Back to Portfolio</Link>
                    </div>
                </div>
            </main>

            {/* Lightbox */}
            {lightboxImg && (
                <Lightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />
            )}
        </div>
    );
}
