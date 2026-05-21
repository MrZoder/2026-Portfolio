import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
    {
        title: 'Qualified foundation',
        description: 'Completed a Bachelor of Software Engineering with an AI specialisation and a Diploma of Software Engineering before that.',
    },
    {
        title: 'Product ownership',
        description: 'Takes ideas beyond the demo stage: live deployments, App Store release, case studies, product decisions and user workflows.',
    },
    {
        title: 'AI without theatrics',
        description: 'Uses AI where it improves the workflow, from assignment planning to multi-model integrations and structured outputs.',
    },
    {
        title: 'Frontend judgment',
        description: 'Builds focused React interfaces with attention to layout, state, responsiveness and the actual job the user is trying to do.',
    },
    {
        title: 'Operational awareness',
        description: 'Customer-facing postal work and automation projects shaped a practical sense for compliance, accuracy and user pain.',
    },
    {
        title: 'Coachable and useful',
        description: 'Looking for a serious team, code review, mentorship and production responsibility, not a place to coast.',
    },
];

function ValueCard({ value, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 90}ms` }}>
            <div className="glass-card glass-card-hover p-6 h-full">
                <div className="text-xs font-mono text-text-muted mb-5">0{index + 1}</div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
            </div>
        </div>
    );
}

export default function GraduateValue() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="value" className="relative py-24 sm:py-32 bg-dark-900/30">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={headerRef}
                    className={`mb-14 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-kicker">Hiring Signal</div>
                    <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-14 items-end">
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary">
                            Why an employer should keep reading.
                        </h2>
                        <p className="text-text-secondary text-lg leading-relaxed">
                            I am early-career, but not starting from zero. The work here shows product taste, engineering persistence, and a habit of finishing things.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {values.map((value, index) => (
                        <ValueCard key={value.title} value={value} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
