import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
    { label: 'Qualification', value: 'Bachelor of Software Engineering (AI)' },
    { label: 'University', value: 'Torrens University' },
    { label: 'Status', value: 'Graduated and qualified' },
    { label: 'Availability', value: 'Immediate' },
];

export default function About() {
    const [ref, isVisible] = useScrollReveal();
    const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="about" className="relative py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-6">
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="mb-12">
                        <div className="section-kicker">Career Snapshot</div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                            Qualified, product-minded, and already shipping.
                        </h2>
                        <p className="text-text-secondary max-w-3xl text-lg leading-relaxed">
                            Employers do not need another portfolio full of static clones. This one is built around the projects I have taken from problem to product.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-8 lg:gap-10 items-start">
                    <div ref={ref} className={`transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="glass-card p-7 sm:p-9">
                            <p className="text-text-secondary leading-relaxed mb-5 text-[0.97rem]">
                                I have completed my <span className="text-text-primary font-medium">Bachelor of Software Engineering with a specialisation in Artificial Intelligence</span> at Torrens University, after completing my Diploma of Software Engineering at 17.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-5 text-[0.97rem]">
                                My strongest signal is ownership. I have built a trading analytics SaaS, a live iOS app, a shipping comparison concept grounded in real postal work, business automation that reduced manual paperwork, StudySprint, and an interactive early childhood learning module for sensitive safeguarding training.
                            </p>
                            <p className="text-text-secondary leading-relaxed text-[0.97rem]">
                                I am looking for a graduate or junior software engineering role where I can contribute to production systems, learn from experienced engineers, and become the person a team trusts with real delivery.
                            </p>
                        </div>
                    </div>

                    <div ref={cardsRef} className={`space-y-3 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {highlights.map((item, i) => (
                            <div
                                key={item.label}
                                className="glass-card p-5 flex items-center justify-between gap-5"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="text-xs font-medium text-text-muted uppercase tracking-wider">{item.label}</div>
                                <div className="text-sm font-semibold text-text-primary text-right">{item.value}</div>
                            </div>
                        ))}

                        <div className="glass-card p-5 border-accent-emerald/20">
                            <div className="text-xs font-medium text-text-muted uppercase tracking-wider mb-2">Relocation</div>
                            <div className="text-sm font-semibold text-accent-emerald">Based in Australia, open worldwide for the right team</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
