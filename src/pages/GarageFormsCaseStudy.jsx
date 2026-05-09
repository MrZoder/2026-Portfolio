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

function SectionLabel({ color = 'accent-emerald', children }) {
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
                <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full bg-accent-emerald/[0.07] blur-[130px] animate-pulse-glow" />
                <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-accent-teal/[0.05] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Breadcrumb badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="text-sm font-medium text-accent-emerald">Case Study</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">Automation & Workflow</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    <span className="gradient-text">Garage Forms</span> Automation
                </h1>

                <p className="text-xl sm:text-2xl text-text-secondary font-medium max-w-3xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.15s_both]">
                    Automating paperwork to save time and reduce errors.
                </p>

                <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    A workflow automation tool built for a local business to streamline document creation and eliminate repetitive manual data entry.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-[fade-in-up_0.8s_ease_0.25s_both]">
                    {['Node.js', 'Python', 'Automation Pipelines', 'Document APIs'].map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* CTA button */}
                <div className="flex items-center justify-center gap-4 mb-14 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <Link to="/" className="btn-secondary !py-3 !px-7">
                        <span className="flex items-center gap-2">
                            ← Back to Portfolio
                        </span>
                    </Link>
                </div>

                {/* Hero visual — automation pipeline */}
                <div className="animate-[fade-in-up_0.8s_ease_0.35s_both]">
                    <div className="glass-card p-1.5 rounded-2xl overflow-hidden max-w-4xl mx-auto">
                        <div className="relative rounded-2xl overflow-hidden">
                            <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                                <span className="w-3 h-3 rounded-full bg-red-400/70" />
                                <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                                <span className="w-3 h-3 rounded-full bg-green-400/70" />
                                <span className="flex-1 text-center text-xs text-text-muted font-mono">garage-forms-automation · pipeline</span>
                            </div>
                            {/* Pipeline visualization */}
                            <div className="bg-dark-900 p-8 sm:p-12">
                                <div className="max-w-3xl mx-auto">
                                    {/* Pipeline stages */}
                                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-0 justify-between mb-8">
                                        {[
                                            { label: 'Raw Data', icon: '📋', status: 'Input' },
                                            { label: 'Validation', icon: '✅', status: 'Processing' },
                                            { label: 'Data Merge', icon: '🔄', status: 'Processing' },
                                            { label: 'Generate Doc', icon: '📄', status: 'Output' },
                                        ].map((stage, i) => (
                                            <div key={stage.label} className="flex items-center gap-4">
                                                <div className="glass-card p-4 text-center min-w-[100px] group hover:border-accent-emerald/20 transition-colors">
                                                    <div className="text-2xl mb-2">{stage.icon}</div>
                                                    <div className="text-xs font-semibold text-text-primary">{stage.label}</div>
                                                    <div className="text-[10px] text-text-muted mt-1">{stage.status}</div>
                                                </div>
                                                {i < 3 && (
                                                    <svg className="w-5 h-5 text-accent-emerald/40 flex-shrink-0 hidden sm:block" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                                    </svg>
                                                )}
                                            </div>
                                        ))}
                                    </div>

                                    {/* Results summary */}
                                    <div className="grid grid-cols-3 gap-3">
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-xl font-bold text-accent-emerald">~50%</div>
                                            <div className="text-[10px] text-text-muted uppercase tracking-wider mt-1">Less Paperwork</div>
                                        </div>
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-xl font-bold text-accent-emerald">↓</div>
                                            <div className="text-[10px] text-text-muted uppercase tracking-wider mt-1">Human Errors</div>
                                        </div>
                                        <div className="glass-card p-4 text-center">
                                            <div className="text-xl font-bold text-accent-emerald">Auto</div>
                                            <div className="text-[10px] text-text-muted uppercase tracking-wider mt-1">Doc Generation</div>
                                        </div>
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
export default function GarageFormsCaseStudy() {
    return (
        <div className="relative">
            <CaseStudyNav projectName="Garage Forms" />
            <main>
                <CaseHero />

                <div className="section-divider" />

                {/* ── Product Overview ── */}
                <Section id="overview">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-emerald">Product Overview</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            Replacing manual work with <span className="gradient-text">automated pipelines</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                Garage Forms Automation is a workflow automation tool built for a local business to streamline document creation and reduce manual data entry. The system merges data from multiple sources and generates completed documents automatically.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                What previously required manual copying, pasting, and formatting across multiple documents is now handled by a single automated pipeline — saving hours of work each week and virtually eliminating data entry errors.
                            </p>
                        </div>

                        {/* Private project notice */}
                        <div className="glass-card p-5 mt-5 border-l-2 border-accent-amber/40">
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🔒</span>
                                <div>
                                    <div className="text-sm font-semibold text-text-primary mb-1">Private Project</div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        This project was built for a specific client and is not publicly available. The case study documents the engineering approach and measurable impact without revealing proprietary details.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── The Problem ── */}
                <Section id="problem">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-gold">The Problem</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Drowning in <span className="gradient-text">manual paperwork</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                { icon: '⏰', title: 'Time Waste', desc: 'Staff spent hours each week manually creating, formatting, and filling documents — time that could be spent on higher-value work.' },
                                { icon: '📋', title: 'Repetitive Data Entry', desc: 'The same information was being typed into multiple documents manually, creating a tedious and error-prone workflow.' },
                                { icon: '❌', title: 'Human Error', desc: 'Manual data entry inevitably led to typos, wrong numbers, and inconsistent formatting — causing rework and credibility issues.' },
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
                            An automated pipeline that <span className="gradient-text">does the work</span>
                        </h2>

                        <div className="glass-card p-8 sm:p-10 mb-8">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-6">
                                The solution was a custom automation pipeline that merges data from incoming sources and generates completed documents automatically — no manual entry required.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                {[
                                    {
                                        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" /></svg>,
                                        title: 'Automated Document Generation',
                                        desc: 'Documents are generated automatically from templates, populated with validated data — no manual formatting.',
                                        gradient: 'from-accent-emerald to-accent-teal',
                                    },
                                    {
                                        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" /></svg>,
                                        title: 'Data Merging Pipeline',
                                        desc: 'A pipeline that ingests data from multiple sources, validates it, and merges it into a single consistent output.',
                                        gradient: 'from-accent-teal to-accent-sky',
                                    },
                                    {
                                        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
                                        title: '~50% Paperwork Reduction',
                                        desc: 'Measured reduction in manual document work, freeing staff to focus on actual customer-facing tasks.',
                                        gradient: 'from-accent-teal to-accent-sky',
                                    },
                                    {
                                        icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
                                        title: 'Significantly Reduced Errors',
                                        desc: 'Automated data flow eliminates the typos, wrong numbers, and formatting inconsistencies of manual entry.',
                                        gradient: 'from-accent-sky to-accent-gold',
                                    },
                                ].map((item) => (
                                    <div key={item.title} className="glass-card glass-card-hover p-6 group">
                                        <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white mb-4 transition-transform duration-500 group-hover:scale-110`}>
                                            {item.icon}
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

                {/* ── Technical Architecture ── */}
                <Section id="architecture">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-teal">Technical Architecture</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Engineering <span className="gradient-text">the automation</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-8">
                            {[
                                {
                                    title: 'Node.js',
                                    gradient: 'from-accent-emerald to-accent-teal',
                                    desc: 'Core automation engine handling data ingestion, validation, and pipeline orchestration.',
                                    icon: '⚙️',
                                },
                                {
                                    title: 'Python',
                                    gradient: 'from-accent-teal to-accent-sky',
                                    desc: 'Data processing scripts for transformation, merging, and document template population.',
                                    icon: '🐍',
                                },
                                {
                                    title: 'Automation Pipelines',
                                    gradient: 'from-accent-gold to-accent-amber',
                                    desc: 'End-to-end workflow automation connecting data sources to finished document outputs.',
                                    icon: '🔄',
                                },
                            ].map((stack) => (
                                <div key={stack.title} className="glass-card glass-card-hover p-7 group text-center">
                                    <div className="text-3xl mb-4">{stack.icon}</div>
                                    <h3 className="font-display text-base font-bold text-text-primary mb-2">{stack.title}</h3>
                                    <p className="text-sm text-text-secondary leading-relaxed">{stack.desc}</p>
                                </div>
                            ))}
                        </div>

                        {/* Pipeline flow */}
                        <div className="glass-card p-6 sm:p-8">
                            <div className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Automation Pipeline</div>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                                {['Data Source', 'Ingestion', 'Validation', 'Merge & Transform', 'Document Output'].map((step, i) => (
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

                        {/* Before / After comparison */}
                        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-5">
                            <div className="glass-card p-6 border-l-2 border-accent-gold/40">
                                <div className="text-xs font-semibold uppercase tracking-wider text-accent-gold mb-4">Before — Manual Process</div>
                                <div className="space-y-3">
                                    {[
                                        'Manually copy data from source',
                                        'Open document template',
                                        'Type fields one by one',
                                        'Check for errors manually',
                                        'Format and save document',
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-gold text-xs mt-0.5">✕</span>
                                            <span className="text-sm text-text-secondary">{step}</span>
                                        </div>
                                    ))}
                                    <div className="glass-card px-3 py-2 mt-3">
                                        <span className="text-xs text-accent-gold font-semibold">~30 min per document</span>
                                    </div>
                                </div>
                            </div>
                            <div className="glass-card p-6 border-l-2 border-accent-emerald/40">
                                <div className="text-xs font-semibold uppercase tracking-wider text-accent-emerald mb-4">After — Automated Pipeline</div>
                                <div className="space-y-3">
                                    {[
                                        'Data ingested automatically',
                                        'Validated and merged by pipeline',
                                        'Document generated from template',
                                        'Errors caught before output',
                                        'Ready to use — no formatting needed',
                                    ].map((step, i) => (
                                        <div key={i} className="flex items-start gap-2">
                                            <span className="text-accent-emerald text-xs mt-0.5">✓</span>
                                            <span className="text-sm text-text-secondary">{step}</span>
                                        </div>
                                    ))}
                                    <div className="glass-card px-3 py-2 mt-3">
                                        <span className="text-xs text-accent-emerald font-semibold">~2 min per document</span>
                                    </div>
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
                                    title: 'Building Reliable Automation Workflows',
                                    desc: 'Automation that works in a demo is very different from automation that works reliably in production. I learned to handle edge cases, malformed data, and failure states that only appear in real-world usage — building defensive, resilient pipelines.',
                                    icon: '🔧',
                                },
                                {
                                    title: 'Understanding Real Business Processes',
                                    desc: 'Before writing a single line of code, I spent time understanding how the business actually operates — the workflows, the pain points, and the bottlenecks. This taught me that the best software comes from deep understanding of the problem domain.',
                                    icon: '🏢',
                                },
                                {
                                    title: 'Delivering Measurable Efficiency Improvements',
                                    desc: 'Building software that delivers a measurable ~50% reduction in manual work gave me experience in quantifying impact and communicating real business value — a skill that translates directly to product engineering roles.',
                                    icon: '📊',
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

                {/* ── Outcome ── */}
                <Section id="outcome">
                    <div className="max-w-4xl mx-auto px-6 text-center">
                        <SectionLabel color="accent-emerald">Outcome</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            Real software, <span className="gradient-text">real impact</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                Garage Forms Automation delivered exactly what it set out to do: a real-world tool that provides <span className="text-text-primary font-medium">measurable business impact</span>. Manual paperwork was reduced by approximately 50%, data entry errors were virtually eliminated, and staff time was freed for higher-value work.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                This project reinforced that great software engineering isn't about the most complex technology — it's about deeply understanding a problem and building the <span className="text-text-primary font-medium">simplest, most reliable solution</span> that delivers real results.
                            </p>
                        </div>

                        {/* Impact stats */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto mb-14">
                            {[
                                { value: '~50%', label: 'Paperwork Reduction', color: 'text-accent-emerald' },
                                { value: '↓', label: 'Human Errors Eliminated', color: 'text-accent-teal' },
                                { value: '✓', label: 'Delivered & In Production', color: 'text-accent-teal' },
                            ].map((stat) => (
                                <div key={stat.label} className="glass-card p-5">
                                    <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                                    <div className="text-xs text-text-muted">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="flex flex-wrap items-center justify-center gap-4">
                            <Link to="/" className="btn-primary !py-3 !px-8">
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
