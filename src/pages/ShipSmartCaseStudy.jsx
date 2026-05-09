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

function SectionLabel({ color = 'accent-sky', children }) {
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

/* ── Hero ─────────────────────────────────────────────── */
function CaseHero() {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-sky/[0.07] blur-[130px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 right-1/3 w-[400px] h-[400px] rounded-full bg-accent-gold/[0.05] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Breadcrumb badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-sky/10 border border-accent-sky/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="text-sm font-medium text-accent-sky">Case Study</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">Full-Stack Web Application</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    <span className="gradient-text">ShipSmart</span> Australia
                </h1>

                <p className="text-xl sm:text-2xl text-text-secondary font-medium max-w-3xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.15s_both]">
                    Compare 12+ Australian shipping providers in seconds.
                </p>

                <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    A web platform that aggregates multiple courier APIs into a single comparison workflow — built from real pain points in the postal industry.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-[fade-in-up_0.8s_ease_0.25s_both]">
                    {['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'REST APIs'].map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* CTA button */}
                <div className="flex items-center justify-center gap-4 mb-14 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <a href="https://www.linkedin.com/posts/zain-zahab-942378204_buildinpublic-shipping-australia-activity-7418998631141351424-ZLHj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQGFkIBbYh5WbA-Wes2lYrLRhcmruvEXF0"
                        target="_blank" rel="noopener noreferrer"
                        className="btn-primary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                            </svg>
                            View on LinkedIn
                        </span>
                    </a>
                    <Link to="/" className="btn-secondary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            ← Back to Portfolio
                        </span>
                    </Link>
                </div>

                {/* Hero visual — product mockup */}
                <div className="animate-[fade-in-up_0.8s_ease_0.35s_both]">
                    <div className="glass-card p-1.5 rounded-2xl overflow-hidden max-w-4xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden">
                            {/* Window chrome */}
                            <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                <span className="flex-1 text-center text-xs text-text-muted font-mono">shipsmart.com.au</span>
                            </div>
                            {/* Product mock UI */}
                            <div className="bg-dark-900 p-8 sm:p-12">
                                <div className="max-w-3xl mx-auto space-y-6">
                                    {/* Search bar mock */}
                                    <div className="glass-card p-6">
                                        <div className="text-sm font-semibold text-text-primary mb-4">Get Instant Quotes</div>
                                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-4">
                                            {[
                                                { label: 'From', value: 'Sydney, NSW' },
                                                { label: 'To', value: 'Melbourne, VIC' },
                                                { label: 'Weight', value: '2.5 kg' },
                                                { label: 'Size', value: '30×20×15 cm' },
                                            ].map((f) => (
                                                <div key={f.label} className="glass-card px-3 py-2.5">
                                                    <div className="text-[10px] text-text-muted uppercase tracking-wider mb-1">{f.label}</div>
                                                    <div className="text-xs font-medium text-text-primary">{f.value}</div>
                                                </div>
                                            ))}
                                        </div>
                                        <div className="w-full py-2.5 rounded-xl bg-gradient-to-r from-accent-sky to-accent-gold text-center text-sm font-semibold text-white">
                                            Compare 12+ Carriers →
                                        </div>
                                    </div>

                                    {/* Results mock */}
                                    <div className="space-y-2.5">
                                        {[
                                            { carrier: 'Australia Post', price: '$8.95', time: '2–3 days', best: true },
                                            { carrier: 'Sendle', price: '$9.40', time: '2–4 days', best: false },
                                            { carrier: 'CouriersPlease', price: '$10.20', time: '1–3 days', best: false },
                                            { carrier: 'StarTrack', price: '$11.50', time: '1–2 days', best: false },
                                        ].map((r) => (
                                            <div key={r.carrier} className={`glass-card p-4 flex items-center justify-between ${r.best ? 'ring-1 ring-accent-emerald/30' : ''}`}>
                                                <div className="flex items-center gap-3">
                                                    <div className={`w-8 h-8 rounded-lg ${r.best ? 'bg-accent-emerald/10' : 'bg-dark-700'} flex items-center justify-center`}>
                                                        <svg className={`w-4 h-4 ${r.best ? 'text-accent-emerald' : 'text-text-muted'}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                                                        </svg>
                                                    </div>
                                                    <div>
                                                        <div className="text-sm font-medium text-text-primary flex items-center gap-2">
                                                            {r.carrier}
                                                            {r.best && <span className="text-[10px] px-2 py-0.5 rounded-full bg-accent-emerald/10 text-accent-emerald font-semibold">BEST</span>}
                                                        </div>
                                                        <div className="text-xs text-text-muted">{r.time}</div>
                                                    </div>
                                                </div>
                                                <div className={`text-lg font-bold ${r.best ? 'text-accent-emerald' : 'text-text-primary'}`}>{r.price}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

/* ── Page export ──────────────────────────────────────── */
export default function ShipSmartCaseStudy() {
    return (
        <div className="relative">
            <CaseStudyNav projectName="ShipSmart" />
            <main>
                <CaseHero />

                <div className="section-divider" />

                {/* ── Product Overview ── */}
                <Section id="overview">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-sky">Product Overview</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            One search. <span className="gradient-text">Every carrier.</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ShipSmart is a web application designed to simplify the shipping process for small businesses by aggregating multiple courier APIs into a single comparison workflow.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                Instead of visiting 12 different courier websites, entering the same parcel details over and over, and manually comparing prices — ShipSmart lets users enter their details once and instantly see the best rates across all major Australian carriers.
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
                            Shipping is <span className="gradient-text">broken for small business</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { icon: '🔄', title: 'Manual Comparison', desc: 'Small businesses manually visit multiple courier websites to compare rates — wasting hours every week on a task that should take seconds.' },
                                { icon: '⏰', title: 'Time Wasted', desc: 'Checking prices across Australia Post, Sendle, CouriersPlease, StarTrack and others means re-entering the same parcel details repeatedly.' },
                                { icon: '💸', title: 'Sub-Optimal Choices', desc: 'Without easy comparison, businesses often default to one carrier — missing cheaper or faster options and hurting their bottom line.' },
                            ].map((item) => (
                                <div key={item.title} className="glass-card glass-card-hover p-6 group">
                                    <div className="text-2xl mb-4">{item.icon}</div>
                                    <h3 className="font-display text-base font-bold text-text-primary mb-2">{item.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Industry insight callout */}
                        <div className="glass-card p-6 mt-6 border-l-2 border-accent-sky/40">
                            <div className="flex items-start gap-3">
                                <span className="text-lg">💡</span>
                                <div>
                                    <div className="text-sm font-semibold text-text-primary mb-1">Built from Real Industry Experience</div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        This isn't a hypothetical problem. Working at Australia Post gave me firsthand exposure to shipping workflows, customer pain points, and the fragmented landscape of courier services in Australia. ShipSmart was born from observing these real inefficiencies.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── The Solution ── */}
                <Section id="solution">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-emerald">The Solution</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Enter details once → <span className="gradient-text">compare instantly</span>
                        </h2>

                        {/* Solution flow */}
                        <div className="glass-card p-8 sm:p-10 mb-8">
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                                {[
                                    {
                                        step: '01',
                                        title: 'Enter Parcel Details',
                                        desc: 'Origin, destination, dimensions and weight — entered once in a clean, fast form.',
                                        gradient: 'from-accent-sky to-accent-gold',
                                    },
                                    {
                                        step: '02',
                                        title: 'Instant Comparison',
                                        desc: 'ShipSmart queries 12+ carrier APIs simultaneously and returns sorted results in seconds.',
                                        gradient: 'from-accent-gold to-accent-teal',
                                    },
                                    {
                                        step: '03',
                                        title: 'Choose the Best Rate',
                                        desc: 'Compare by price, delivery time, and carrier reputation — then ship with confidence.',
                                        gradient: 'from-accent-teal to-accent-emerald',
                                    },
                                ].map((item) => (
                                    <div key={item.step} className="text-center group">
                                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white font-bold text-lg mx-auto mb-4 transition-transform duration-500 group-hover:scale-110`}>
                                            {item.step}
                                        </div>
                                        <h3 className="font-display text-base font-bold text-text-primary mb-2">{item.title}</h3>
                                        <p className="text-sm text-text-secondary leading-relaxed">{item.desc}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Key Features ── */}
                <Section id="features">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Key Features</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Built for <span className="gradient-text">real business needs</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" /></svg>,
                                    title: '12+ Shipping Providers',
                                    desc: 'Aggregates rates from Australia Post, Sendle, CouriersPlease, StarTrack, and more — all in one view.',
                                    gradient: 'from-accent-sky to-accent-gold',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                                    title: 'Instant Quote Generation',
                                    desc: 'Fast, parallel API requests deliver comparison results within seconds of submitting parcel details.',
                                    gradient: 'from-accent-teal to-accent-sky',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" /></svg>,
                                    title: 'Mobile-First Interface',
                                    desc: 'Designed mobile-first so small business owners can compare rates from anywhere — warehouse, office, or on the go.',
                                    gradient: 'from-accent-emerald to-accent-teal',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>,
                                    title: 'Industry-Informed Design',
                                    desc: 'Every feature is informed by real experience in the postal and shipping industry — not assumptions.',
                                    gradient: 'from-accent-gold to-accent-sky',
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

                {/* ── Technical Architecture ── */}
                <Section id="architecture">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Technical Architecture</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Engineering <span className="gradient-text">the comparison engine</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-8">
                            {[
                                {
                                    title: 'Frontend',
                                    gradient: 'from-accent-sky to-accent-gold',
                                    techs: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
                                    desc: 'Type-safe React application built with Vite for lightning-fast development and optimised production builds.',
                                },
                                {
                                    title: 'API Layer',
                                    gradient: 'from-accent-teal to-accent-sky',
                                    techs: ['REST APIs', 'Rate Aggregation', 'Error Handling', 'Caching'],
                                    desc: 'Parallel API integrations with 12+ courier services, robust error handling, and response normalisation.',
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

                        {/* Architecture flow */}
                        <div className="glass-card p-6 sm:p-8">
                            <div className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Request Flow</div>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                                {['User Input', 'Validation', 'Parallel API Calls', 'Normalise & Sort', 'Display Results'].map((step, i) => (
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
                                    title: 'Designing Scalable API Integrations',
                                    desc: 'Each shipping provider has a different API format, authentication method, and response structure. Building a normalisation layer that could handle 12+ different APIs and still return consistent, comparable results taught me how to design for scale and maintainability.',
                                    icon: '🔌',
                                },
                                {
                                    title: 'Building Fast User Workflows',
                                    desc: 'Speed is everything in a comparison tool. Optimising form UX to reduce friction, implementing parallel API requests, and designing clear result hierarchies was a lesson in performance-focused product thinking.',
                                    icon: '⚡',
                                },
                                {
                                    title: 'Turning Real-World Pain Points into Software',
                                    desc: 'The most valuable lesson was translating firsthand industry experience into a software solution. Understanding the problem deeply before writing code makes the solution 10x better.',
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
                            From comparison tool to <span className="gradient-text">full shipping platform</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-12">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                ShipSmart has validated the core concept: small businesses need a faster, simpler way to compare shipping rates. The platform currently aggregates 12+ providers and delivers instant comparisons.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                Future plans include expanding carrier integrations, adding <span className="text-text-primary font-medium">booking and label generation</span>, <span className="text-text-primary font-medium">tracking dashboards</span>, and evolving ShipSmart into a <span className="text-text-primary font-medium">full shipping SaaS platform</span> for Australian businesses.
                            </p>
                        </div>

                        {/* Roadmap pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-14">
                            {[
                                { label: 'Rate Comparison', status: 'Built' },
                                { label: 'Booking & Labels', status: 'Planned' },
                                { label: 'Tracking Dashboard', status: 'Planned' },
                                { label: 'Full SaaS Platform', status: 'Planned' },
                            ].map((item) => (
                                <div key={item.label} className="glass-card px-5 py-3 flex items-center gap-3">
                                    <span className={`w-2 h-2 rounded-full ${item.status === 'Built' ? 'bg-accent-emerald' : 'bg-dark-300'}`} />
                                    <span className="text-sm font-medium text-text-primary">{item.label}</span>
                                    <span className="text-[10px] text-text-muted uppercase tracking-wider">{item.status}</span>
                                </div>
                            ))}
                        </div>

                        {/* CTAs */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <a href="https://www.linkedin.com/posts/zain-zahab-942378204_buildinpublic-shipping-australia-activity-7418998631141351424-ZLHj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQGFkIBbYh5WbA-Wes2lYrLRhcmruvEXF0"
                                target="_blank" rel="noopener noreferrer"
                                className="btn-primary !py-3 !px-8">
                                <span className="flex items-center gap-2">
                                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    See on LinkedIn
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
