import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = [
    {
        title: 'AI Software Engineer',
        company: 'Monale & Co',
        period: '2024',
        type: 'Remote · Contract',
        gradient: 'from-accent-teal to-accent-sky',
        dotColor: 'bg-accent-teal',
        description: 'AI Integration & Backend Engineering',
        points: [
            'Integrated Wolfram Alpha with LLMs including Claude, Llama and GPT for multi-model AI workflows',
            'Designed and implemented backend database architectures for AI-driven systems',
            'Built multi-model orchestration pipelines combining deterministic and generative AI',
        ],
        tags: ['Python', 'LLMs', 'Wolfram Alpha', 'Database Architecture'],
    },
    {
        title: 'Customer Service Officer',
        company: 'Australia Post',
        period: '2025 – Present',
        type: 'Retail · Full-time',
        gradient: 'from-accent-gold to-amber-400',
        dotColor: 'bg-accent-gold',
        description: 'Product Insight & Real-World UX Exposure',
        points: [
            'Daily power user of POS retail software — identified UX and performance improvements firsthand',
            'Deep insight into real-world user pain points in high-volume, compliance-critical environments',
            'Strong accuracy and attention to detail in regulated financial and postal transactions',
        ],
        tags: ['POS Systems', 'UX Insight', 'Compliance', 'User Research'],
        note: 'This role gave me rare product insight — I experience software from the user\'s seat every day.',
    },
    {
        title: 'Photographer & Videographer',
        company: 'Freelance',
        period: '2023 – 2025',
        type: 'Freelance · Creative',
        gradient: 'from-accent-sky to-accent-teal',
        dotColor: 'bg-accent-sky',
        description: 'Client Communication & Project Delivery',
        points: [
            'End-to-end project delivery from client briefing through to final handoff',
            'Clear client communication, expectation management and iterative feedback loops',
            'Creative and technical workflow demonstrating ownership and deadline discipline',
        ],
        tags: ['Client Relations', 'Project Delivery', 'Creative Direction'],
    },
];

function ExperienceCard({ role, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="glass-card glass-card-hover p-7 sm:p-8 relative overflow-hidden">
                {/* Accent line at top */}
                <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${role.gradient} opacity-60`} />

                {/* Header row */}
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div className="flex items-start gap-4">
                        <div className={`w-3 h-3 rounded-full ${role.dotColor} mt-1.5 flex-shrink-0 ring-4 ring-dark-800`} />
                        <div>
                            <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary">{role.title}</h3>
                            <p className="text-sm text-text-secondary">{role.company}</p>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 ml-7 sm:ml-0">
                        <span className="text-xs font-mono text-text-muted bg-dark-700/50 px-3 py-1 rounded-lg">{role.period}</span>
                        <span className="text-xs text-text-muted">{role.type}</span>
                    </div>
                </div>

                {/* Description */}
                <p className="text-sm font-medium text-accent-teal/80 mb-4 ml-7">{role.description}</p>

                {/* Points */}
                <div className="space-y-3 mb-5 ml-7">
                    {role.points.map((point, i) => (
                        <div key={i} className="flex items-start gap-3">
                            <svg className="w-4 h-4 text-accent-teal/60 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            <span className="text-sm text-text-secondary leading-relaxed">{point}</span>
                        </div>
                    ))}
                </div>

                {/* Note callout */}
                {role.note && (
                    <div className="ml-7 mb-5 px-4 py-3 rounded-xl bg-accent-gold/5 border border-accent-gold/15">
                        <p className="text-sm text-accent-gold/90 italic">{role.note}</p>
                    </div>
                )}

                {/* Tags */}
                <div className="flex flex-wrap gap-2 ml-7">
                    {role.tags.map((tag) => (
                        <span key={tag} className="tech-badge !text-xs">{tag}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Experience() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="experience" className="relative py-28 sm:py-36">
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] rounded-full bg-accent-sky/[0.03] blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-6">
                        <span className="text-sm font-medium text-accent-emerald">Experience</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Work <span className="gradient-text">Experience</span>
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto text-lg">
                        Real-world experience across AI engineering, product insight and creative delivery.
                    </p>
                </div>

                <div className="space-y-6 max-w-4xl mx-auto">
                    {roles.map((role, index) => (
                        <ExperienceCard key={role.title} role={role} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
