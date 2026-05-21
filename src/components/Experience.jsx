import { useScrollReveal } from '../hooks/useScrollReveal';

const roles = [
    {
        title: 'AI Software Engineer',
        company: 'Monale & Co',
        period: '2024',
        type: 'Remote / Contract',
        description: 'AI integration and backend engineering',
        points: [
            'Integrated Wolfram Alpha with Claude, Llama and GPT for multi-model AI workflows',
            'Designed backend database architecture for AI-driven systems',
            'Built orchestration pipelines combining deterministic and generative AI',
        ],
        tags: ['Python', 'LLMs', 'Wolfram Alpha', 'Database Architecture'],
    },
    {
        title: 'Customer Service Officer',
        company: 'Australia Post',
        period: '2025 - Present',
        type: 'Retail / Full-time',
        description: 'Product insight from high-volume operational software',
        points: [
            'Daily power user of POS retail software, identifying UX and performance improvements firsthand',
            'Deep insight into user pain points in high-volume, compliance-critical environments',
            'Strong accuracy in regulated financial and postal transactions',
        ],
        tags: ['POS Systems', 'UX Insight', 'Compliance', 'User Research'],
        note: 'This role gives me useful product instinct: I experience software from the user seat every day.',
    },
    {
        title: 'Photographer & Videographer',
        company: 'Freelance',
        period: '2023 - 2025',
        type: 'Freelance / Creative',
        description: 'Client communication and project delivery',
        points: [
            'Owned projects from client briefing through final handoff',
            'Managed expectations, feedback cycles and deadlines',
            'Built a practical habit of shipping polished work under constraints',
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
                <div className="absolute top-0 left-0 right-0 h-px bg-white/[0.08]" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-5">
                    <div>
                        <h3 className="font-display text-lg sm:text-xl font-bold text-text-primary">{role.title}</h3>
                        <p className="text-sm text-text-secondary">{role.company}</p>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-text-muted bg-dark-700/50 px-3 py-1 rounded-md">{role.period}</span>
                        <span className="text-xs text-text-muted">{role.type}</span>
                    </div>
                </div>

                <p className="text-sm font-medium text-text-primary mb-4">{role.description}</p>

                <div className="space-y-3 mb-5">
                    {role.points.map((point, i) => (
                        <div key={i} className="proof-row">
                            <span className="w-1.5 h-1.5 rounded-full bg-text-muted flex-shrink-0 mt-2" />
                            <span>{point}</span>
                        </div>
                    ))}
                </div>

                {role.note && (
                    <div className="mb-5 px-4 py-3 rounded-lg bg-white/[0.03] border border-white/[0.07]">
                        <p className="text-sm text-text-secondary italic">{role.note}</p>
                    </div>
                )}

                <div className="flex flex-wrap gap-2">
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
        <section id="experience" className="relative py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-kicker mx-auto">Experience</div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Work Experience
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto text-lg">
                        Engineering work, operational product insight, and client delivery experience.
                    </p>
                </div>

                <div className="space-y-5 max-w-4xl mx-auto">
                    {roles.map((role, index) => (
                        <ExperienceCard key={role.title} role={role} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
