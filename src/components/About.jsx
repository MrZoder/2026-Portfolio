import { useScrollReveal } from '../hooks/useScrollReveal';

const highlights = [
    { label: 'Degree', value: 'B. Software Eng (AI)', icon: '🎓' },
    { label: 'University', value: 'Torrens University', icon: '🏫' },
    { label: 'Status', value: 'Final Trimester', icon: '📋' },
    { label: 'Available', value: 'Immediately', icon: '✅' },
];

export default function About() {
    const [ref, isVisible] = useScrollReveal();
    const [cardsRef, cardsVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <section id="about" className="relative py-28 sm:py-36">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-accent-teal/[0.03] blur-[150px] pointer-events-none" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Section header */}
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
                            <span className="text-sm font-medium text-accent-teal">Career Snapshot</span>
                        </div>
                        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                            About <span className="gradient-text">Zain Zahab</span>
                        </h2>
                    </div>
                </div>

                {/* Content grid */}
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 items-start">
                    {/* Bio text — takes 3 cols */}
                    <div ref={ref} className={`lg:col-span-3 transition-all duration-700 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        <div className="glass-card p-8 sm:p-10">
                            <p className="text-text-secondary leading-relaxed mb-5 text-[0.9375rem]">
                                I'm a final-trimester <span className="text-text-primary font-medium">Software Engineering (AI)</span> student at Torrens University with one subject remaining before graduation in April 2026. I completed my <span className="text-text-primary font-medium">Diploma of Software Engineering at age 17</span>, and I've been building real products ever since.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-5 text-[0.9375rem]">
                                Outside of coursework, I've shipped SaaS products, integrated AI models into production systems, and built tools that solve real-world problems. I think in products — not just features — and I care deeply about clean UI, solid architecture and user experience.
                            </p>
                            <p className="text-text-secondary leading-relaxed mb-8 text-[0.9375rem]">
                                I'm looking for my first full-time role where I can contribute to a professional engineering team and grow rapidly in a real production environment.
                            </p>

                            {/* Positioning quote */}
                            <div className="border-l-2 border-accent-teal/40 pl-5">
                                <p className="text-text-primary font-medium italic text-[0.9375rem] leading-relaxed">
                                    "I'm eager to contribute to a professional engineering team and grow rapidly in a real production environment."
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Highlights cards — takes 2 cols */}
                    <div ref={cardsRef} className={`lg:col-span-2 space-y-4 transition-all duration-700 ${cardsVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                        {highlights.map((item, i) => (
                            <div
                                key={item.label}
                                className="glass-card glass-card-hover p-5 flex items-center gap-4"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-accent-teal/20 to-accent-sky/20 flex items-center justify-center text-lg flex-shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-text-muted uppercase tracking-wider">{item.label}</div>
                                    <div className="text-sm font-semibold text-text-primary mt-0.5">{item.value}</div>
                                </div>
                            </div>
                        ))}

                        {/* Relocation card */}
                        <div className="glass-card p-5 border-accent-emerald/20">
                            <div className="flex items-center gap-3">
                                <div className="w-11 h-11 rounded-xl bg-accent-emerald/10 flex items-center justify-center flex-shrink-0">
                                    <svg className="w-5 h-5 text-accent-emerald" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-xs font-medium text-text-muted uppercase tracking-wider">Relocation</div>
                                    <div className="text-sm font-semibold text-accent-emerald mt-0.5">Open worldwide</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
