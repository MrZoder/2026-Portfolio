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

/* ── Lightbox for screenshots ─────────────────────────── */
function Lightbox({ src, alt, onClose }) {
    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-dark-950/90 backdrop-blur-xl animate-[fade-in_0.2s_ease_both] cursor-pointer"
            onClick={onClose}>
            <button onClick={onClose}
                className="absolute top-6 right-6 w-10 h-10 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <img src={src} alt={alt}
                className="max-w-full max-h-[90vh] rounded-2xl shadow-2xl object-contain animate-[fade-in-up_0.3s_ease_both]"
                onClick={(e) => e.stopPropagation()} />
        </div>
    );
}

/* ── Screenshot card ──────────────────────────────────── */
function ScreenshotCard({ src, alt, caption, onClick }) {
    return (
        <button onClick={onClick}
            className="group glass-card glass-card-hover p-1.5 overflow-hidden cursor-pointer text-left w-full">
            <div className="relative rounded-xl overflow-hidden bg-dark-900">
                <img src={src} alt={alt}
                    className="w-full h-auto rounded-xl transition-transform duration-500 group-hover:scale-[1.02]"
                    loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-950/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-medium text-white">{caption}</span>
                </div>
            </div>
        </button>
    );
}

/* ── Hero ─────────────────────────────────────────────── */
function CaseHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.07] blur-[130px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-teal/[0.05] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Breadcrumb badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="text-sm font-medium text-accent-teal">Case Study</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">Full-Stack SaaS Product</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    <span className="gradient-text">ZTrader</span> Journal
                </h1>

                <p className="text-xl sm:text-2xl text-text-secondary font-medium max-w-3xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.15s_both]">
                    The Ultimate Trading Command Center for Performance Tracking
                </p>

                <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    A SaaS platform designed to help traders analyse performance, track behaviour and improve consistency using analytics dashboards and journaling workflows.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-[fade-in-up_0.8s_ease_0.25s_both]">
                    {['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts', 'Tiptap'].map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="flex items-center justify-center gap-4 mb-14 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <a href="https://ztraderjournal.netlify.app/" target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                            View Live Product
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

                {/* Hero screenshot — main dashboard */}
                <div className="animate-[fade-in-up_0.8s_ease_0.35s_both]">
                    <div className="glass-card p-1.5 rounded-2xl overflow-hidden max-w-4xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden">
                            {/* Window chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                <span className="flex-1 text-center text-xs text-text-muted font-mono">ztraderjournal.netlify.app</span>
                            </div>
                            <img src="/screenshots/ztrader/Dashboard.png" alt="ZTrader Journal Dashboard — Main analytics view showing trading statistics, calendar, daily rules and weekly P&L chart"
                                className="w-full h-auto" loading="eager" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Product Screenshots Gallery ──────────────────────── */
function ScreenshotsGallery() {
    const [ref, isVisible] = useScrollReveal();
    const [lightboxImg, setLightboxImg] = useState(null);

    const screenshots = [
        {
            src: '/screenshots/ztrader/Dashboard.png',
            alt: 'ZTrader Dashboard — Full analytics overview',
            caption: 'Dashboard — Full Analytics Overview',
        },
        {
            src: '/screenshots/ztrader/Statistics.png',
            alt: 'Performance Diagnostics — Expectancy, equity curve, emotional state analysis',
            caption: 'Statistics — Performance Diagnostics',
        },
        {
            src: '/screenshots/ztrader/trade-library.png',
            alt: 'Trade Library — Grid view with stats and trade cards',
            caption: 'Trade Library — Grid View & Stats',
        },
        {
            src: '/screenshots/ztrader/trade-detail.png',
            alt: 'Trade Detail — Chart screenshot, strategy tags, notes',
            caption: 'Trade Detail — Deep Analysis View',
        },
        {
            src: '/screenshots/ztrader/mobile-trades.png',
            alt: 'Mobile responsive trade library view',
            caption: 'Mobile — Responsive Trade Library',
        },
    ];

    return (
        <section id="screenshots" className="relative py-20 sm:py-28">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={ref}
                    className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-14">
                        <SectionLabel color="accent-teal">Product Screenshots</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                            See the <span className="gradient-text">real product</span>
                        </h2>
                        <p className="text-text-secondary max-w-xl mx-auto">
                            Every screen designed and built from scratch. Click any screenshot to enlarge.
                        </p>
                    </div>

                    {/* Bento grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Large — Dashboard (spans full width on first row) */}
                        <div className="md:col-span-2">
                            <ScreenshotCard
                                src={screenshots[0].src}
                                alt={screenshots[0].alt}
                                caption={screenshots[0].caption}
                                onClick={() => setLightboxImg(screenshots[0])}
                            />
                        </div>

                        {/* Statistics — spans full width */}
                        <div className="md:col-span-2">
                            <ScreenshotCard
                                src={screenshots[1].src}
                                alt={screenshots[1].alt}
                                caption={screenshots[1].caption}
                                onClick={() => setLightboxImg(screenshots[1])}
                            />
                        </div>

                        {/* Trade Library */}
                        <ScreenshotCard
                            src={screenshots[2].src}
                            alt={screenshots[2].alt}
                            caption={screenshots[2].caption}
                            onClick={() => setLightboxImg(screenshots[2])}
                        />

                        {/* Trade Detail */}
                        <ScreenshotCard
                            src={screenshots[3].src}
                            alt={screenshots[3].alt}
                            caption={screenshots[3].caption}
                            onClick={() => setLightboxImg(screenshots[3])}
                        />

                        {/* Mobile — centered */}
                        <div className="md:col-span-2 flex justify-center">
                            <div className="max-w-sm w-full">
                                <ScreenshotCard
                                    src={screenshots[4].src}
                                    alt={screenshots[4].alt}
                                    caption={screenshots[4].caption}
                                    onClick={() => setLightboxImg(screenshots[4])}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Lightbox */}
            {lightboxImg && (
                <Lightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />
            )}
        </section>
    );
}

/* ── Page export ──────────────────────────────────────── */
export default function ZTraderCaseStudy() {
    return (
        <div className="relative">
            <CaseStudyNav projectName="ZTrader Journal" />
            <main>
                <CaseHero />

                <div className="section-divider" />

                {/* ── Product Overview ── */}
                <Section id="overview">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Product Overview</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            One platform to <span className="gradient-text">replace the spreadsheet</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ZTrader Journal is a full-stack SaaS application built to solve the problem of fragmented trading workflows. Traders often rely on spreadsheets, screenshots and multiple disconnected tools to track their performance — making it nearly impossible to build consistent habits and improve over time.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                This platform centralises everything into a single, modern dashboard: trade logging, performance analytics, rich journaling, and behaviour tracking — all designed to give traders the clarity they need to improve.
                            </p>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Product Screenshots ── */}
                <ScreenshotsGallery />

                <div className="section-divider" />

                {/* ── The Problem ── */}
                <Section id="problem">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-gold">The Problem</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Traders are <span className="gradient-text">flying blind</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { icon: '📊', title: 'Spreadsheet Chaos', desc: 'Most traders track everything in messy spreadsheets that are hard to analyse and impossible to scale.' },
                                { icon: '🔍', title: 'No Performance Analytics', desc: 'Without proper dashboards, traders can\'t see patterns in their performance or identify what\'s working.' },
                                { icon: '📝', title: 'No Structured Journaling', desc: 'Reviewing past decisions is critical for improvement, but most traders have no journaling workflow at all.' },
                                { icon: '🔄', title: 'Inconsistent Improvement', desc: 'Without data-driven feedback loops, traders repeat the same mistakes and growth stalls.' },
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
                            A modern platform that <span className="gradient-text">combines everything</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            {[
                                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" /></svg>, title: 'Trade Logging', desc: 'Structured trade entry with all key metrics captured. Import from CSV or log manually.', gradient: 'from-accent-teal to-accent-sky' },
                                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>, title: 'Analytics Dashboards', desc: 'Interactive charts and metrics. Win rate, P&L curves, drawdown analysis, and 30-day trends.', gradient: 'from-accent-sky to-accent-gold' },
                                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>, title: 'Rich Journaling', desc: 'Full rich text editor powered by Tiptap. Attach screenshots, tag emotions, and review decisions.', gradient: 'from-accent-emerald to-accent-teal' },
                                { icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>, title: 'Behaviour Tracking', desc: 'Track rule adherence, emotional state, and trading discipline to build consistency.', gradient: 'from-accent-gold to-accent-sky' },
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

                        {/* Inline screenshot: Trade Detail shows depth */}
                        <div className="glass-card p-1.5 rounded-2xl overflow-hidden">
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                    <span className="flex-1 text-center text-xs text-text-muted font-mono">Trade Detail — NQ +$1,500.00</span>
                                </div>
                                <img src="/screenshots/ztrader/trade-detail.png"
                                    alt="ZTrader trade detail view showing chart screenshots, strategy tags, confluences and setup notes"
                                    className="w-full h-auto" loading="lazy" />
                            </div>
                            <p className="text-center text-xs text-text-muted py-3">
                                Each trade gets a dedicated detail view with chart screenshots, strategy tags, confluences and notes.
                            </p>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Key Features ── */}
                <Section id="features">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-sky">Key Features</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Built for <span className="gradient-text">serious traders</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                {[
                                    'Advanced statistics dashboards and charts',
                                    'Daily profit target tracking',
                                    'Rule tracking and performance insights',
                                    'Rich text journaling with screenshots',
                                    'CSV trade import pipeline',
                                    'Subscription-ready SaaS architecture',
                                    'Account-scoped metrics and analytics',
                                    '30-day rolling trend visualisations',
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

                        {/* Inline screenshot: Statistics / Performance Diagnostics */}
                        <div className="glass-card p-1.5 rounded-2xl overflow-hidden mt-8">
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                    <span className="flex-1 text-center text-xs text-text-muted font-mono">Performance Diagnostics — Expectancy · Equity Curve · Emotional State</span>
                                </div>
                                <img src="/screenshots/ztrader/Statistics.png"
                                    alt="ZTrader Statistics showing expectancy metric, equity curve, R-multiple distribution, emotional state analysis"
                                    className="w-full h-auto" loading="lazy" />
                            </div>
                            <p className="text-center text-xs text-text-muted py-3">
                                Performance Diagnostics: expectancy per trade, equity curve, R-multiple distribution, emotional state tracking, and volume vs performance analysis.
                            </p>
                        </div>

                        {/* Inline screenshot: Trade Library shows feature depth */}
                        <div className="glass-card p-1.5 rounded-2xl overflow-hidden mt-5">
                            <div className="relative rounded-2xl overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                    <span className="flex-1 text-center text-xs text-text-muted font-mono">Trade Library — 28 trades · 75% win rate · +$7,807.58</span>
                                </div>
                                <img src="/screenshots/ztrader/trade-library.png"
                                    alt="ZTrader Trade Library showing grid view with 28 trades, 75% win rate, and $7807 profit"
                                    className="w-full h-auto" loading="lazy" />
                            </div>
                            <p className="text-center text-xs text-text-muted py-3">
                                The Trade Library lets traders import, filter, and review all trades in one view — with real-time stats at the top.
                            </p>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Technical Architecture ── */}
                <Section id="architecture">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Technical Architecture</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Engineering <span className="gradient-text">under the hood</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                {
                                    title: 'Frontend',
                                    gradient: 'from-accent-teal to-accent-sky',
                                    techs: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Recharts'],
                                    desc: 'Component-driven architecture with reusable UI systems, type-safe data flows, and interactive charting.',
                                },
                                {
                                    title: 'Backend',
                                    gradient: 'from-accent-sky to-accent-gold',
                                    techs: ['Supabase', 'PostgreSQL', 'Auth', 'Storage'],
                                    desc: 'Supabase for authentication, real-time database, row-level security, and file storage.',
                                },
                                {
                                    title: 'Data & Tooling',
                                    gradient: 'from-accent-emerald to-accent-teal',
                                    techs: ['CSV Parsing', 'Data Viz', 'Component Arch', 'SaaS Patterns'],
                                    desc: 'Custom CSV import pipelines, data transformation layers, and subscription-ready architecture.',
                                },
                            ].map((stack) => (
                                <div key={stack.title} className="glass-card glass-card-hover p-7 group">
                                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${stack.gradient} flex items-center justify-center text-white mb-4`}>
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
                                    </div>
                                    <h3 className="font-display text-base font-bold text-text-primary mb-2">{stack.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed mb-4">{stack.desc}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {stack.techs.map((t) => (
                                            <span key={t} className="tech-badge !text-[11px] !px-2.5 !py-1">{t}</span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Architecture flow diagram */}
                        <div className="glass-card p-6 sm:p-8 mt-8">
                            <div className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">System Flow</div>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                                {['User Interface', 'React Components', 'Supabase Client', 'PostgreSQL', 'Auth & Storage'].map((step, i) => (
                                    <div key={step} className="flex items-center gap-3">
                                        <div className="glass-card px-4 py-3 text-center min-w-[120px]">
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

                        {/* Mobile screenshot — shows responsive design */}
                        <div className="mt-10 flex flex-col lg:flex-row items-center gap-8">
                            <div className="lg:w-1/2 text-left">
                                <h3 className="font-display text-xl font-bold text-text-primary mb-3">Mobile-First Design</h3>
                                <p className="text-sm text-text-secondary leading-relaxed mb-4">
                                    ZTrader Journal is fully responsive. Every screen — from the dashboard to trade detail views — is designed to work seamlessly on mobile devices.
                                </p>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    Traders can review their performance, log trades, and journal on the go — the same data, the same quality, any screen size.
                                </p>
                            </div>
                            <div className="lg:w-1/2 flex justify-center">
                                <div className="glass-card p-1.5 rounded-[2rem] overflow-hidden max-w-[260px]">
                                    <img src="/screenshots/ztrader/mobile-trades.png"
                                        alt="ZTrader Journal mobile view showing responsive trade library"
                                        className="w-full h-auto rounded-[1.75rem]" loading="lazy" />
                                </div>
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
                                    title: 'Designing Performant Dashboards for Large Datasets',
                                    desc: 'Handling thousands of trade records while keeping the UI responsive required careful data pagination, memoisation, and chart optimisation. I learned to think about data flow as a first-class architectural concern.',
                                    icon: '⚡',
                                },
                                {
                                    title: 'Creating Reusable Component Architecture',
                                    desc: 'Building a design system of composable, type-safe components that could scale across the app taught me the value of abstraction, consistent APIs, and thinking in systems rather than pages.',
                                    icon: '🧩',
                                },
                                {
                                    title: 'Building Scalable SaaS Foundations',
                                    desc: 'Implementing row-level security, multi-tenant data isolation, and subscription-ready architecture gave me real experience in the patterns that power production SaaS products.',
                                    icon: '🏗️',
                                },
                                {
                                    title: 'Balancing UX with Complex Data Workflows',
                                    desc: 'Making dense analytics intuitive for users meant constantly iterating on information hierarchy, data visualisation choices, and progressive disclosure — a skill that transfers to any product.',
                                    icon: '🎯',
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
                            From project to <span className="gradient-text">product</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-12">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ZTrader Journal started as a personal tool to solve my own trading workflow problems. It has since grown into a full-featured SaaS platform with a clear commercial path forward.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                The project continues to evolve with plans for <span className="text-text-primary font-medium">AI-powered trade analysis</span>, <span className="text-text-primary font-medium">automated journaling suggestions</span>, and <span className="text-text-primary font-medium">advanced analytics modules</span> — positioning it as a serious product in the trading tools space.
                            </p>
                        </div>

                        {/* Roadmap pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-14">
                            {[
                                { label: 'AI-Powered Insights', status: 'Planned' },
                                { label: 'Automated Journaling', status: 'Planned' },
                                { label: 'Advanced Analytics', status: 'In Progress' },
                                { label: 'Public Launch', status: 'Planned' },
                            ].map((item) => (
                                <div key={item.label} className="glass-card px-5 py-3 flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${item.status === 'In Progress' ? 'bg-accent-amber animate-pulse' : 'bg-dark-300'}`} />
                                    <span className="text-sm font-medium text-text-primary">{item.label}</span>
                                    <span className="text-[10px] text-text-muted uppercase tracking-wider">{item.status}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="https://ztraderjournal.netlify.app/" target="_blank" rel="noopener noreferrer"
                                className="btn-primary !py-3 !px-8">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                    Try the Live Product
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
        </div>
    );
}
