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

/* ── Browser frame wrapper ────────────────────────────── */
function BrowserFrame({ url, alt, src, onClick }) {
    return (
        <button onClick={onClick}
            className="group glass-card glass-card-hover p-1.5 rounded-2xl overflow-hidden block w-full text-left cursor-pointer">
            <div className="relative rounded-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 bg-dark-900/90 border-b border-white/[0.04]">
                    <span className="w-3 h-3 rounded-full bg-red-400/70" />
                    <span className="w-3 h-3 rounded-full bg-yellow-400/70" />
                    <span className="w-3 h-3 rounded-full bg-green-400/70" />
                    <span className="flex-1 text-center text-xs text-text-muted font-mono truncate px-3">{url}</span>
                </div>
                <img src={src} alt={alt}
                    className="w-full h-auto transition-transform duration-500 group-hover:scale-[1.01]"
                    loading="lazy" />
            </div>
        </button>
    );
}

/* ── Hero ─────────────────────────────────────────────── */
function CaseHero({ onOpenLightbox }) {
    return (
        <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20 pb-10">
            {/* Background */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] rounded-full bg-accent-emerald/[0.07] blur-[130px] animate-pulse-glow" />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-sky/[0.06] blur-[120px] animate-pulse-glow" style={{ animationDelay: '2s' }} />
                <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] rounded-full bg-accent-teal/[0.04] blur-[100px] animate-pulse-glow" style={{ animationDelay: '4s' }} />
                <div className="absolute inset-0 opacity-[0.02]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                {/* Breadcrumb badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="text-sm font-medium text-accent-emerald">Case Study</span>
                    <span className="text-text-muted">·</span>
                    <span className="text-sm text-text-secondary">Student Productivity · AI-Assisted Planning</span>
                </div>

                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    <span className="gradient-text">StudySprint</span>
                </h1>

                <p className="text-xl sm:text-2xl text-text-secondary font-medium max-w-3xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.15s_both]">
                    Stay ahead of deadlines. Own your study week.
                </p>

                <p className="text-base text-text-muted max-w-2xl mx-auto mb-10 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    A smart academic productivity platform that turns scattered subjects, briefs and due dates into a single focused workspace — with an AI Planner that converts dense assignment briefs into a structured action plan.
                </p>

                {/* Tech pills */}
                <div className="flex flex-wrap items-center justify-center gap-2 mb-8 animate-[fade-in-up_0.8s_ease_0.25s_both]">
                    {['React', 'Vite', 'Tailwind CSS', 'React Router', 'localStorage'].map((t) => (
                        <span key={t} className="tech-badge">{t}</span>
                    ))}
                </div>

                {/* CTA buttons */}
                <div className="flex items-center justify-center gap-4 mb-14 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <a href="https://thestudysprint.netlify.app/" target="_blank" rel="noopener noreferrer"
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

                {/* Hero screenshot — landing page */}
                <div className="animate-[fade-in-up_0.8s_ease_0.35s_both] max-w-4xl mx-auto">
                    <BrowserFrame
                        url="thestudysprint.netlify.app"
                        src="/screenshots/studysprint/landing.png"
                        alt="StudySprint landing page — Stay ahead of deadlines, own your study week. Hero section with dashboard preview."
                        onClick={() => onOpenLightbox({ src: '/screenshots/studysprint/landing.png', alt: 'StudySprint landing page' })}
                    />
                </div>
            </div>
        </section>
    );
}

/* ── Page export ──────────────────────────────────────── */
export default function StudySprintCaseStudy() {
    const [lightboxImg, setLightboxImg] = useState(null);

    const screenshots = [
        {
            src: '/screenshots/studysprint/landing.png',
            alt: 'StudySprint marketing landing page',
            caption: 'Marketing Landing — Hero & Product Preview',
            url: 'thestudysprint.netlify.app',
        },
        {
            src: '/screenshots/studysprint/dashboard.png',
            alt: 'StudySprint dashboard — week at a glance with action board and momentum',
            caption: 'Dashboard — Week at a Glance',
            url: 'thestudysprint.netlify.app/dashboard',
        },
        {
            src: '/screenshots/studysprint/assignments.png',
            alt: 'StudySprint Assignment Command Center — list, filters, subtasks and quick add',
            caption: 'Assignments — Command Center',
            url: 'thestudysprint.netlify.app/assignments',
        },
        {
            src: '/screenshots/studysprint/ai-planner-input.png',
            alt: 'StudySprint AI Planner — upload an assignment brief',
            caption: 'AI Planner — Upload a Brief',
            url: 'thestudysprint.netlify.app/ai-planner',
        },
        {
            src: '/screenshots/studysprint/ai-planner-output.png',
            alt: 'StudySprint AI Planner — extracted brief summary, deliverables and constraints',
            caption: 'AI Planner — Structured Brief Output',
            url: 'thestudysprint.netlify.app/ai-planner',
        },
    ];

    return (
        <div className="relative">
            <CaseStudyNav projectName="StudySprint" />
            <main>
                <CaseHero onOpenLightbox={setLightboxImg} />

                <div className="section-divider" />

                {/* ── Product Overview ── */}
                <Section id="overview">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-emerald">Product Overview</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            A focused <span className="gradient-text">academic command centre</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                StudySprint is a student productivity and assignment planning web app designed to help students turn overwhelming academic workloads into clear, structured, and achievable study plans. Instead of forcing students to manually track scattered due dates, subjects, subtasks and deadlines across notes or spreadsheets, StudySprint brings everything into one focused workspace built around progress, priority and momentum.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                Students can manage subjects, create assignments, break large tasks into smaller subtasks, track completion progress, and plan their week around upcoming deadlines — opening it daily and instantly knowing what needs attention, what is overdue, and what to work on next.
                            </p>
                        </div>

                        {/* Live link banner */}
                        <div className="glass-card p-5 mt-5 border-l-2 border-accent-emerald/40">
                            <div className="flex items-start gap-3">
                                <span className="text-lg">🌐</span>
                                <div>
                                    <div className="text-sm font-semibold text-text-primary mb-1">Live at thestudysprint.netlify.app</div>
                                    <p className="text-sm text-text-secondary leading-relaxed">
                                        StudySprint is deployed and accessible. Try the dashboard, manage assignments and feed an assignment brief into the AI Planner.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── Screenshots Gallery ── */}
                <Section id="screenshots">
                    <div className="max-w-6xl mx-auto px-6">
                        <div className="text-center mb-14">
                            <SectionLabel color="accent-sky">Product Screenshots</SectionLabel>
                            <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-4">
                                See the <span className="gradient-text">real product</span>
                            </h2>
                            <p className="text-text-secondary max-w-xl mx-auto">
                                Every screen designed and built from the ground up. Click any screenshot to enlarge.
                            </p>
                        </div>

                        <div className="space-y-4">
                            {/* Landing — full width */}
                            <BrowserFrame
                                url={screenshots[0].url}
                                src={screenshots[0].src}
                                alt={screenshots[0].alt}
                                onClick={() => setLightboxImg(screenshots[0])}
                            />
                            <p className="text-center text-xs text-text-muted">{screenshots[0].caption}</p>

                            {/* Dashboard */}
                            <div className="pt-4">
                                <BrowserFrame
                                    url={screenshots[1].url}
                                    src={screenshots[1].src}
                                    alt={screenshots[1].alt}
                                    onClick={() => setLightboxImg(screenshots[1])}
                                />
                                <p className="text-center text-xs text-text-muted mt-3">{screenshots[1].caption}</p>
                            </div>

                            {/* Assignments */}
                            <div className="pt-4">
                                <BrowserFrame
                                    url={screenshots[2].url}
                                    src={screenshots[2].src}
                                    alt={screenshots[2].alt}
                                    onClick={() => setLightboxImg(screenshots[2])}
                                />
                                <p className="text-center text-xs text-text-muted mt-3">{screenshots[2].caption}</p>
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
                            Students are <span className="gradient-text">drowning in unstructured workloads</span>
                        </h2>

                        <div className="glass-card p-8 sm:p-10 mb-8">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                Most students juggle multiple subjects, assignment briefs, due dates and competing priorities across disconnected tools — calendars, notes apps, group chats, PDFs and spreadsheets. Large assignments often feel unclear at the beginning, which makes it easy to procrastinate until the deadline becomes urgent.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                            {[
                                { icon: '📚', title: 'Scattered Workload', desc: 'Subjects, briefs, deadlines and notes live across half a dozen tools — there is no single source of truth.' },
                                { icon: '⏰', title: 'Deadlines Sneak Up', desc: 'Without a clear weekly view of what is due, students discover overdue work too late to react calmly.' },
                                { icon: '🌫️', title: '"Where Do I Begin?"', desc: 'Dense assignment briefs are intimidating. Without structure, students stall on planning instead of starting work.' },
                                { icon: '📉', title: 'No Sense of Progress', desc: 'Big assignments feel monolithic. Without subtasks and progress, momentum is invisible and motivation drops.' },
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
                            One workspace built around <span className="gradient-text">progress, priority & momentum</span>
                        </h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
                            {[
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17v-2a4 4 0 014-4h4M5 7h14M5 7a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2M5 7V5a2 2 0 012-2h10a2 2 0 012 2v2" /></svg>,
                                    title: 'Subjects & Assignments',
                                    desc: 'Organise every subject and assignment in one place — with priority states, due dates, and clear status from active to completed.',
                                    gradient: 'from-accent-emerald to-accent-teal',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" /></svg>,
                                    title: 'Subtasks & Progress',
                                    desc: 'Break big assignments into smaller, achievable subtasks with live progress bars — making the next step always obvious.',
                                    gradient: 'from-accent-teal to-accent-sky',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>,
                                    title: 'Dashboard & Momentum',
                                    desc: 'A "week at a glance" dashboard surfaces overdue, due-soon, and weekly momentum — so the next action is always visible.',
                                    gradient: 'from-accent-sky to-accent-emerald',
                                },
                                {
                                    icon: <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>,
                                    title: 'AI Planner',
                                    desc: 'Paste or upload an assignment brief and StudySprint extracts requirements, deliverables and constraints — turning blank pages into a real plan.',
                                    gradient: 'from-accent-gold to-accent-amber',
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

                        {/* Inline screenshot — Dashboard */}
                        <BrowserFrame
                            url={screenshots[1].url}
                            src={screenshots[1].src}
                            alt={screenshots[1].alt}
                            onClick={() => setLightboxImg(screenshots[1])}
                        />
                        <p className="text-center text-xs text-text-muted py-3">
                            The dashboard surfaces total work, due-this-week, overdue and completed — paired with an action board and weekly momentum signal.
                        </p>
                    </div>
                </Section>

                <div className="section-divider" />

                {/* ── AI Planner Spotlight ── */}
                <Section id="ai-planner">
                    <div className="max-w-5xl mx-auto px-6">
                        <SectionLabel color="accent-gold">AI Planner Spotlight</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-6">
                            From dense brief to <span className="gradient-text">structured plan</span>
                        </h2>
                        <p className="text-text-secondary leading-relaxed text-[0.9375rem] max-w-3xl mb-10">
                            The AI Planner is the centerpiece of StudySprint&apos;s product vision. A student pastes or uploads an assignment brief — PDF, DOCX, or raw text — and StudySprint reads through it to surface key signals, deliverables, constraints, and a confidence-rated structured summary that can be converted into a real, scheduled assignment.
                        </p>

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                            <div>
                                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">1. Drop in the brief</div>
                                <BrowserFrame
                                    url={screenshots[3].url}
                                    src={screenshots[3].src}
                                    alt={screenshots[3].alt}
                                    onClick={() => setLightboxImg(screenshots[3])}
                                />
                                <p className="text-xs text-text-muted mt-3 leading-relaxed">
                                    Upload a PDF/DOCX or paste raw text. The planner walks through reading, identifying deliverables, mapping rubric signals, and pacing the work to the due date.
                                </p>
                            </div>
                            <div>
                                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">2. Get a structured plan</div>
                                <BrowserFrame
                                    url={screenshots[4].url}
                                    src={screenshots[4].src}
                                    alt={screenshots[4].alt}
                                    onClick={() => setLightboxImg(screenshots[4])}
                                />
                                <p className="text-xs text-text-muted mt-3 leading-relaxed">
                                    StudySprint returns a brief summary, requirements, deliverables, constraints, detected signals (due date, word count, rubric, references) and a one-click "Convert to assignment" path.
                                </p>
                            </div>
                        </div>

                        {/* What it extracts */}
                        <div className="glass-card p-7 sm:p-9 mt-10">
                            <div className="text-xs font-semibold text-text-primary mb-5 uppercase tracking-wider">What the AI Planner extracts</div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                                {[
                                    'Brief summary — what the assignment is really about',
                                    'Deliverables — every concrete artefact required',
                                    'Constraints — word count, format, submission method',
                                    'Detected signals — due date, rubric, references, word count',
                                    'Review checkpoints — flags ambiguous or missing details',
                                    'Confidence rating — how well the brief was understood',
                                    'Convert-to-assignment — pre-filled title, subject, due date, priority',
                                    'Reviewer prompts — questions to confirm with the lecturer',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-md bg-accent-gold/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-accent-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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

                {/* ── Key Features ── */}
                <Section id="features">
                    <div className="max-w-4xl mx-auto px-6">
                        <SectionLabel color="accent-sky">Key Features</SectionLabel>
                        <h2 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-10">
                            Built for <span className="gradient-text">real student workflows</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-5">
                                {[
                                    'Subject and assignment management',
                                    'Due date and priority tracking',
                                    'Assignment progress indicators',
                                    'Subtask breakdowns for large tasks',
                                    'Dashboard for upcoming and overdue work',
                                    'Weekly planning workflow & momentum',
                                    'Filterable assignment command centre',
                                    'Quick-add assignment from any screen',
                                    'AI Planner — brief to structured plan',
                                    'Local data persistence (offline-first)',
                                    'Responsive, mobile-friendly UI',
                                    'Calendar view for week-at-a-glance',
                                ].map((feature, i) => (
                                    <div key={i} className="flex items-start gap-3">
                                        <div className="w-5 h-5 rounded-md bg-accent-emerald/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                            <svg className="w-3 h-3 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </div>
                                        <span className="text-sm text-text-secondary leading-relaxed">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inline screenshot — Assignments */}
                        <div className="mt-8">
                            <BrowserFrame
                                url={screenshots[2].url}
                                src={screenshots[2].src}
                                alt={screenshots[2].alt}
                                onClick={() => setLightboxImg(screenshots[2])}
                            />
                            <p className="text-center text-xs text-text-muted py-3">
                                The Assignment Command Center lets students filter by status, priority and subject — with a workload snapshot and upcoming deadlines panel on the right.
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
                            Engineering <span className="gradient-text">a focused workspace</span>
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                            {[
                                {
                                    title: 'Frontend',
                                    gradient: 'from-accent-emerald to-accent-teal',
                                    techs: ['React', 'Vite', 'Tailwind CSS', 'React Router'],
                                    desc: 'A reusable component architecture with clean state-driven UI, responsive layouts and fast Vite-powered dev experience.',
                                    icon: '🎨',
                                },
                                {
                                    title: 'State & Persistence',
                                    gradient: 'from-accent-sky to-accent-emerald',
                                    techs: ['React Hooks', 'Context', 'localStorage'],
                                    desc: 'Local-first data layer using browser storage so students keep their plans without needing accounts — with a clear path to cloud sync.',
                                    icon: '💾',
                                },
                                {
                                    title: 'AI Planner',
                                    gradient: 'from-accent-gold to-accent-amber',
                                    techs: ['LLM Integration', 'Brief Parsing', 'Schema-Driven Output'],
                                    desc: 'Service-side interpretation of assignment briefs into structured deliverables, constraints, signals and a convertible plan.',
                                    icon: '🧠',
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

                        {/* Architecture flow */}
                        <div className="glass-card p-6 sm:p-8 mt-8">
                            <div className="text-xs font-semibold text-text-primary mb-4 uppercase tracking-wider">Planning Flow</div>
                            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-0 justify-between">
                                {['Assignment Brief', 'AI Planner', 'Structured Plan', 'Subjects & Tasks', 'Dashboard'].map((step, i) => (
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
                                    title: 'Designing for Student Cognitive Load',
                                    desc: 'Productivity tools fail when they add complexity instead of removing it. Designing the dashboard around "what needs my attention right now?" rather than raw lists pushed me to think more like a product designer than a feature engineer.',
                                    icon: '🧭',
                                },
                                {
                                    title: 'Turning Briefs into Structured Plans',
                                    desc: 'Building the AI Planner meant treating the LLM output as a schema, not just text — extracting deliverables, signals, confidence, and review checkpoints, then mapping that to UI components a student could actually action.',
                                    icon: '🧩',
                                },
                                {
                                    title: 'Reusable Component Architecture',
                                    desc: 'Reusing assignment cards, action boards, badges and progress bars across the dashboard, command centre and AI Planner taught me to design components around states (priority, status, progress) instead of pages.',
                                    icon: '🔁',
                                },
                                {
                                    title: 'Local-First Data with a Path to Cloud',
                                    desc: 'localStorage gave students value with zero friction — no accounts, no waiting. Designing data shapes that could later sync to a backend without rewriting the UI was a real lesson in pragmatic architecture.',
                                    icon: '🗂️',
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
                            From assignment chaos to <span className="gradient-text">a focused study week</span>
                        </h2>
                        <div className="glass-card p-8 sm:p-10 max-w-3xl mx-auto mb-12">
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem] mb-5">
                                StudySprint is live and demonstrates the full loop — subjects, assignments, subtasks, weekly planning and an AI Planner that turns a dense brief into a structured action plan. It is more than a task manager: it is a focused academic command centre designed around how students actually work.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.9375rem]">
                                The roadmap continues with <span className="text-text-primary font-medium">authentication and cloud sync</span>, <span className="text-text-primary font-medium">richer AI-generated milestones and timelines</span>, and <span className="text-text-primary font-medium">collaboration for group assignments</span> — extending StudySprint from personal planner to full student platform.
                            </p>
                        </div>

                        {/* Roadmap pills */}
                        <div className="flex flex-wrap justify-center gap-3 mb-14">
                            {[
                                { label: 'Live Web App', status: 'Live' },
                                { label: 'AI Planner v1', status: 'Live' },
                                { label: 'Cloud Sync & Auth', status: 'Planned' },
                                { label: 'AI Milestones & Timeline', status: 'In Progress' },
                                { label: 'Group Assignments', status: 'Planned' },
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
                            <a href="https://thestudysprint.netlify.app/" target="_blank" rel="noopener noreferrer"
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

            {/* Lightbox */}
            {lightboxImg && (
                <Lightbox src={lightboxImg.src} alt={lightboxImg.alt} onClose={() => setLightboxImg(null)} />
            )}
        </div>
    );
}
