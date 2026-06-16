import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import RollText from './RollText';

const projects = [
    {
        id: 'early-childhood-learning',
        name: 'Early Childhood Learning Module',
        liveUrl: 'https://childhoodinteracticve.netlify.app/',
        repoUrl: 'https://github.com/MrZoder/InteractiveLearningModule-EarlyChildHood',
        type: 'Scenario-based professional learning module',
        status: 'Live recent project',
        statusHover: 'Recently shipped',
        outcome: 'Teaches early childhood educators how to recognise and respond to early signs of child neglect through guided interaction.',
        description:
            'A polished micro-learning experience for sensitive safeguarding content. Learners move through scenario decisions, instant feedback, a confidence reflection, key indicator cards, a knowledge check and a completion screen.',
        proof: ['Scenario-based decisions', 'Five-question knowledge check', 'Confidence reflection slider', 'Completion and certificate text'],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Lucide React'],
        screenshot: '/screenshots/early-childhood/learning-hero.png',
    },
    {
        id: 'bug-reporting-basics',
        name: 'Bug Reporting Basics',
        liveUrl: 'https://bugreportlearning.netlify.app/',
        type: 'Interactive staff training module',
        status: 'Live learning module',
        statusHover: 'Training flow',
        outcome: 'Teaches staff how to report website and platform issues clearly so they can be fixed faster.',
        description:
            'A short e-learning module with clickable lesson cards, a live report-builder activity, scenario feedback, a mini quiz and a downloadable bug report checklist.',
        proof: ['5-part report formula', 'Scenario-based answer feedback', 'Mini quiz and score', 'Downloadable checklist'],
        tech: ['React', 'Vite', 'Tailwind CSS', 'Framer Motion'],
    },
    {
        id: 'studysprint',
        name: 'StudySprint',
        caseStudyUrl: '/case-study/studysprint',
        liveUrl: 'https://thestudysprint.netlify.app/',
        type: 'Interactive learning and assignment planning web app',
        status: 'Live product',
        statusHover: 'AI workflow',
        outcome: 'Turns dense assignment briefs into structured study plans with an AI planner.',
        description:
            'A focused academic workspace for subjects, assignments, subtasks, deadlines and weekly planning. This is the interactive learning site: a live product designed around how students actually manage pressure and start work.',
        proof: ['Live web app', 'AI planner workflow', 'Dashboard and assignment command centre', 'Offline-first local persistence'],
        tech: ['React', 'Vite', 'Tailwind CSS', 'React Router', 'localStorage'],
        screenshot: '/screenshots/studysprint/dashboard.png',
    },
    {
        id: 'ztrader',
        name: 'ZTrader Journal',
        caseStudyUrl: '/case-study/ztrader',
        liveUrl: 'https://ztraderjournal.netlify.app/',
        type: 'Trading analytics SaaS',
        status: 'Live product',
        statusHover: 'SaaS build',
        outcome: 'Account-scoped journaling, metrics and performance tracking for traders.',
        description:
            'A subscription-style trading journal with rich text entries, 30-day trend visualisations and account-level performance metrics.',
        proof: ['Trade logging', 'Analytics dashboard', 'Rich text journaling', 'Supabase-backed data model'],
        tech: ['React', 'TypeScript', 'Supabase', 'Recharts', 'Tiptap'],
        screenshot: '/screenshots/ztrader/Dashboard.png',
    },
    {
        id: 'zikrpulse',
        name: 'ZikrPulse',
        caseStudyUrl: '/case-study/zikrpulse',
        liveUrl: 'https://apps.apple.com/us/app/zikrpulse/id6757847516',
        type: 'Published iOS learning and habit app',
        status: 'App Store release',
        statusHover: 'Published',
        outcome: 'Gamified mobile product with progression, premium tiers and subscription handling.',
        description:
            'A React Native app that brings habit building, learning loops, progression systems and in-app purchases into a polished mobile experience.',
        proof: ['Published on iOS', 'RevenueCat subscriptions', 'Gamified progression', 'Cross-platform architecture'],
        tech: ['React Native', 'Expo', 'RevenueCat', 'TypeScript'],
        screenshot: '/screenshots/ZikrPulse-AppStore.png',
    },
    {
        id: 'garage-forms',
        name: 'Garage Forms Automation',
        caseStudyUrl: '/case-study/garage-forms',
        type: 'Business process automation',
        status: 'Client system',
        statusHover: 'Real impact',
        outcome: 'Reduced manual paperwork by approximately 50%.',
        description:
            'A Node.js and Python automation pipeline for document processing, designed to reduce repeated manual entry and lower operational error risk.',
        proof: ['Document pipeline', 'Node and Python workflow', 'Manual work reduced', 'Error-prone data entry reduced'],
        tech: ['Node.js', 'Python', 'Automation', 'Document APIs'],
    },
    {
        id: 'shipsmart',
        name: 'ShipSmart Australia',
        caseStudyUrl: '/case-study/shipsmart',
        liveUrl: 'https://www.linkedin.com/posts/zain-zahab-942378204_buildinpublic-shipping-australia-activity-7418998631141351424-ZLHj?utm_source=share&utm_medium=member_desktop&rcm=ACoAADQGFkIBbYh5WbA-Wes2lYrLRhcmruvEXF0',
        type: 'Courier rate comparison platform',
        status: 'Prototype from industry insight',
        statusHover: 'Industry insight',
        outcome: 'Aggregates 12+ Australian providers into a rate-comparison workflow.',
        description:
            'A mobile-first shipping comparison concept informed by real postal service work and high-volume customer pain points.',
        proof: ['12+ providers', 'Mobile-first interface', 'Real postal workflow insight', 'Rate comparison UX'],
        tech: ['React', 'TypeScript', 'Vite', 'REST APIs'],
    },
];

function ProjectActions({ project }) {
    return (
        <div className="flex flex-wrap gap-3">
            {project.caseStudyUrl && (
                <Link to={project.caseStudyUrl}
                    className="btn-primary text-sm !py-2.5 !px-4 min-w-[6.7rem] justify-center">
                    <span>Case Study</span>
                </Link>
            )}
            {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer"
                    className={`${project.caseStudyUrl ? 'btn-secondary' : 'btn-primary'} text-sm !py-2.5 !px-4 min-w-[6.3rem] justify-center`}>
                    Live Link
                </a>
            )}
            {project.repoUrl && (
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"
                    className="btn-secondary text-sm !py-2.5 !px-4 min-w-[5.9rem] justify-center">
                    GitHub
                </a>
            )}
        </div>
    );
}

function ProjectStatus({ project }) {
    const [hovered, setHovered] = useState(false);

    return (
        <span
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            className="status-pill min-w-[9.6rem] justify-center"
        >
            <RollText
                text={hovered ? project.statusHover : project.status}
                reserveTexts={[project.status, project.statusHover]}
                direction={hovered ? 'up' : 'down'}
            />
        </span>
    );
}

function FeaturedProject({ project }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}>
            <div className="glass-card overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
                    <div className="bg-dark-900/70 border-b lg:border-b-0 lg:border-r border-white/[0.06] p-4 sm:p-5">
                        <div className="aspect-[16/10] rounded-lg overflow-hidden bg-dark-800 border border-white/[0.06]">
                            <img src={project.screenshot} alt={`${project.name} product screenshot`} className="w-full h-full object-cover object-top" loading="lazy" />
                        </div>
                    </div>

                    <div className="p-7 sm:p-9 flex flex-col justify-center">
                        <div className="flex flex-wrap items-center gap-3 mb-5">
                            <ProjectStatus project={project} />
                            <span className="text-xs text-text-muted uppercase tracking-wider">{project.type}</span>
                        </div>
                        <h3 className="font-display text-3xl sm:text-4xl font-bold text-text-primary mb-3">{project.name}</h3>
                        <p className="text-lg text-text-primary font-medium mb-4 leading-relaxed">{project.outcome}</p>
                        <p className="text-text-secondary leading-relaxed mb-6">{project.description}</p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-7">
                            {project.proof.map((item) => (
                                <div key={item} className="proof-row">
                                    <span className="w-1.5 h-1.5 rounded-full bg-text-primary flex-shrink-0" />
                                    <span>{item}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-2 mb-8">
                            {project.tech.map((t) => (
                                <span key={t} className="tech-badge text-xs">{t}</span>
                            ))}
                        </div>

                        <ProjectActions project={project} />
                    </div>
                </div>
            </div>
        </div>
    );
}

function CompactProject({ project, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.08 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 90}ms` }}>
            <div className="glass-card glass-card-hover h-full p-6 flex flex-col">
                <div className="flex items-center justify-between gap-4 mb-5">
                    <ProjectStatus project={project} />
                    <span className="text-[11px] text-text-muted uppercase tracking-wider text-right">{project.type}</span>
                </div>
                <h3 className="font-display text-xl font-bold text-text-primary mb-2">{project.name}</h3>
                <p className="text-sm font-medium text-text-primary leading-relaxed mb-4">{project.outcome}</p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">{project.description}</p>

                <div className="space-y-2.5 mb-6">
                    {project.proof.slice(0, 3).map((item) => (
                        <div key={item} className="proof-row">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0" />
                            <span>{item}</span>
                        </div>
                    ))}
                </div>

                <div className="flex flex-wrap gap-2 mb-7">
                    {project.tech.slice(0, 4).map((t) => (
                        <span key={t} className="tech-badge text-xs">{t}</span>
                    ))}
                </div>

                <div className="mt-auto">
                    <ProjectActions project={project} />
                </div>
            </div>
        </div>
    );
}

export default function FeaturedProjects() {
    const [headerRef, headerVisible] = useScrollReveal();
    const [featured, ...supporting] = projects;

    return (
        <section id="projects" className="relative py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={headerRef}
                    className={`mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-kicker">Selected Work</div>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.95fr_1.05fr] gap-8 lg:gap-14 items-end">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                            Projects laid out like evidence, not decoration.
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            Each project shows the product problem, the shipped result, and the technical stack. Recent learning modules sit alongside full products to show both instructional design and software delivery.
                        </p>
                    </div>
                </div>

                <div className="space-y-8">
                    <FeaturedProject project={featured} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {supporting.map((project, index) => (
                            <CompactProject key={project.id} project={project} index={index} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
