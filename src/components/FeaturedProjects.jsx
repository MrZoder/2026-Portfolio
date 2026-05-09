import { Link } from 'react-router-dom';
import { useScrollReveal } from '../hooks/useScrollReveal';

const projects = [
    {
        id: 1,
        name: 'ZTrader Journal',
        caseStudyUrl: '/case-study/ztrader',
        liveUrl: 'https://ztraderjournal.netlify.app/',
        tagline: 'Trading Analytics & Journaling SaaS',
        description:
            'A comprehensive trading journal and analytics platform designed as a subscription SaaS product. Traders can log trades, journal their decisions, and track performance with account-scoped metrics and 30-day trend visualisations.',
        tech: ['React', 'TypeScript', 'Tailwind CSS', 'Supabase', 'Recharts', 'Tiptap'],
        features: [
            'Account-scoped trading metrics & 30-day trends',
            'Rich text journaling with Tiptap editor',
            'Interactive data visualisation with Recharts',
            'Designed as a subscription SaaS product',
        ],
        gradient: 'from-accent-teal to-accent-sky',
        badgeBg: 'bg-accent-teal/10',
        badgeBorder: 'border-accent-teal/20',
        dotBg: 'bg-accent-teal',
        badgeText: 'text-accent-teal',
        checkBg: 'bg-accent-teal/10',
        checkText: 'text-accent-teal',
        mockStats: [
            { label: 'Win Rate', value: '67%' },
            { label: 'P&L', value: '+$4.2K' },
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
        ),
    },
    {
        id: 2,
        name: 'ShipSmart Australia',
        caseStudyUrl: '/case-study/shipsmart',
        liveUrl: 'https://www.linkedin.com/posts/zain-zahab-942378204_buildinpublic-shipping-australia-activity-7418998631141351424-ZLHj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQGFkIBbYh5WbA-Wes2lYrLRhcmruvEXF0',
        tagline: 'Courier Rate Comparison Platform',
        description:
            'A rate comparison tool that aggregates 12+ Australian shipping providers into one clean, mobile-first interface. Built from real pain points in the postal industry to help businesses find the best shipping rates instantly.',
        tech: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'REST APIs'],
        features: [
            'Aggregates 12+ Australian shipping providers',
            'Mobile-first responsive interface',
            'Instant multi-carrier rate comparison',
            'Built from real postal industry pain points',
        ],
        gradient: 'from-accent-gold to-amber-400',
        badgeBg: 'bg-accent-gold/10',
        badgeBorder: 'border-accent-gold/20',
        dotBg: 'bg-accent-gold',
        badgeText: 'text-accent-gold',
        checkBg: 'bg-accent-gold/10',
        checkText: 'text-accent-gold',
        mockStats: [
            { label: 'Providers', value: '12+' },
            { label: 'Savings', value: '~30%' },
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
        ),
    },
    {
        id: 3,
        name: 'Garage Forms Automation',
        caseStudyUrl: '/case-study/garage-forms',
        tagline: 'Document Pipeline Automation',
        description:
            'An automation system built with Node.js and Python to streamline document processing workflows. Reduced manual paperwork by approximately 50% and significantly cut data entry errors through automated pipelines.',
        tech: ['Node.js', 'Python', 'Automation', 'Document APIs'],
        features: [
            'Automated document processing pipeline',
            'Reduced manual paperwork by ~50%',
            'Significantly reduced data entry errors',
            'Node + Python hybrid architecture',
        ],
        gradient: 'from-accent-emerald to-accent-teal',
        badgeBg: 'bg-accent-emerald/10',
        badgeBorder: 'border-accent-emerald/20',
        dotBg: 'bg-accent-emerald',
        badgeText: 'text-accent-emerald',
        checkBg: 'bg-accent-emerald/10',
        checkText: 'text-accent-emerald',
        mockStats: [
            { label: 'Time Saved', value: '~50%' },
            { label: 'Errors', value: '↓ Reduced' },
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        id: 4,
        name: 'ZikrPulse',
        caseStudyUrl: '/case-study/zikrpulse',
        liveUrl: 'https://apps.apple.com/us/app/zikrpulse/id6757847516',
        tagline: 'Gamified Learning & Habit Mobile App',
        description:
            'A cross-platform mobile app that makes daily learning and habit building engaging through gamification, progression systems and subscription-based premium features. Published on the Apple App Store.',
        tech: ['React Native', 'Expo', 'RevenueCat', 'TypeScript', 'iOS'],
        features: [
            'Gamified progression and reward systems',
            'In-app purchases and subscription tiers',
            'Modern mobile-first UI with custom themes',
            'Published on the Apple App Store',
        ],
        gradient: 'from-accent-sky to-accent-teal',
        badgeBg: 'bg-accent-sky/10',
        badgeBorder: 'border-accent-sky/20',
        dotBg: 'bg-accent-sky',
        badgeText: 'text-accent-sky',
        checkBg: 'bg-accent-sky/10',
        checkText: 'text-accent-sky',
        mockStats: [
            { label: 'Platform', value: 'iOS' },
            { label: 'Status', value: 'Live' },
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
            </svg>
        ),
    },
    {
        id: 5,
        name: 'StudySprint',
        caseStudyUrl: '/case-study/studysprint',
        liveUrl: 'https://thestudysprint.netlify.app/',
        tagline: 'AI-Assisted Study Planning & Assignment Tracker',
        description:
            'A student productivity platform that turns overwhelming academic workloads into clear, structured study plans. Subjects, assignments, subtasks, deadlines and a planner-style workflow live in one focused workspace — with an AI Planner that converts dense assignment briefs into a step-by-step plan.',
        tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'localStorage'],
        features: [
            'Subjects, assignments, subtasks & deadline tracking',
            'Dashboard with overdue, due-soon and momentum views',
            'AI Planner turns briefs into structured action plans',
            'Responsive, offline-first student workspace',
        ],
        gradient: 'from-accent-emerald to-accent-sky',
        badgeBg: 'bg-accent-emerald/10',
        badgeBorder: 'border-accent-emerald/20',
        dotBg: 'bg-accent-emerald',
        badgeText: 'text-accent-emerald',
        checkBg: 'bg-accent-emerald/10',
        checkText: 'text-accent-emerald',
        mockStats: [
            { label: 'Subjects', value: '6+' },
            { label: 'Planner', value: 'AI' },
        ],
        icon: (
            <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
        ),
    },
];

function ProjectCard({ project, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });
    const isReversed = index % 2 !== 0;

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            style={{ transitionDelay: `${index * 150}ms` }}>
            <div className="glass-card glass-card-hover p-1 overflow-hidden">
                <div className={`flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-0`}>
                    {/* Project visual */}
                    <div className={`relative lg:w-[45%] min-h-[280px] lg:min-h-[420px] rounded-2xl bg-gradient-to-br ${project.gradient} p-[1px] m-3`}>
                        <div className="w-full h-full rounded-2xl bg-dark-900/90 flex items-center justify-center relative overflow-hidden">
                            <div className="absolute inset-0 opacity-10"
                                style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 1px)', backgroundSize: '24px 24px' }} />
                            <div className="relative z-10 p-6 w-full">
                                <div className="glass-card p-4 mb-3">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${project.gradient} flex items-center justify-center text-white`}>
                                            {project.icon}
                                        </div>
                                        <div>
                                            <div className="text-sm font-semibold text-text-primary">{project.name}</div>
                                            <div className="text-xs text-text-muted">Dashboard</div>
                                        </div>
                                    </div>
                                    <div className="flex items-end gap-1.5 h-20">
                                        {[40, 65, 45, 80, 55, 90, 70, 85, 60, 95, 75, 88].map((h, i) => (
                                            <div key={i} className={`flex-1 rounded-t-sm bg-gradient-to-t ${project.gradient} opacity-60`}
                                                style={{ height: `${h}%` }} />
                                        ))}
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    {project.mockStats.map((stat) => (
                                        <div key={stat.label} className="glass-card flex-1 p-3">
                                            <div className="text-[10px] text-text-muted mb-1">{stat.label}</div>
                                            <div className="text-lg font-bold text-text-primary">{stat.value}</div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content side */}
                    <div className="flex-1 p-8 lg:p-10 flex flex-col justify-center">
                        <div className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full ${project.badgeBg} border ${project.badgeBorder} mb-5 w-fit`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${project.dotBg}`} />
                            <span className={`text-xs font-medium ${project.badgeText}`}>Shipped</span>
                        </div>

                        <h3 className="font-display text-2xl sm:text-3xl font-bold text-text-primary mb-2">{project.name}</h3>
                        <p className={`text-sm font-medium ${project.badgeText} mb-4`}>{project.tagline}</p>
                        <p className="text-text-secondary leading-relaxed mb-6 text-[0.9375rem]">{project.description}</p>

                        <div className="space-y-2.5 mb-6">
                            {project.features.map((feature, i) => (
                                <div key={i} className="flex items-center gap-3">
                                    <div className={`w-5 h-5 rounded-md ${project.checkBg} flex items-center justify-center flex-shrink-0`}>
                                        <svg className={`w-3 h-3 ${project.checkText}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-text-secondary">{feature}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="tech-badge text-xs">{t}</span>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-3">
                            {project.caseStudyUrl ? (
                                <Link to={project.caseStudyUrl} className="btn-primary text-sm !py-2.5 !px-5">
                                    <span className="flex items-center gap-2">
                                        View Case Study
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </span>
                                </Link>
                            ) : (
                                <button className="btn-primary text-sm !py-2.5 !px-5 opacity-60 cursor-default">
                                    <span className="flex items-center gap-2">
                                        Case Study Coming Soon
                                    </span>
                                </button>
                            )}
                            {project.liveUrl ? (
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm !py-2.5 !px-5">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Live Demo
                                    </span>
                                </a>
                            ) : (
                                <button className="btn-secondary text-sm !py-2.5 !px-5 opacity-50 cursor-default">
                                    <span className="flex items-center gap-2">
                                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                        Demo Coming Soon
                                    </span>
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function FeaturedProjects() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="projects" className="relative py-28 sm:py-36">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={headerRef}
                    className={`text-center mb-20 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
                        <span className="text-sm font-medium text-accent-gold">Featured Work</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Products I've <span className="gradient-text">Built</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        Real products shipped to solve real problems — not coursework or tutorials. Each project was designed, engineered and deployed end-to-end.
                    </p>
                </div>

                <div className="space-y-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
