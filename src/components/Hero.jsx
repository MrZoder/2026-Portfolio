const proofPoints = [
    'Bachelor of Software Engineering (AI)',
    'Live SaaS, mobile, learning and automation products',
    'Available for graduate and junior software engineering roles',
];

const metrics = [
    { value: '7', label: 'shipped product builds' },
    { value: '1', label: 'App Store release' },
    { value: '50%', label: 'paperwork reduction in automation work' },
];

export default function Hero() {
    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center pt-28 pb-20 overflow-hidden">
            <div className="absolute inset-x-0 top-0 h-px bg-white/10" />
            <div className="absolute inset-0 opacity-[0.035]"
                style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.14) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.14) 1px, transparent 1px)', backgroundSize: '72px 72px' }} />

            <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_0.85fr] gap-12 lg:gap-16 items-center">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-2 border border-white/10 bg-white/[0.03] rounded-lg mb-7 animate-[fade-in-up_0.8s_ease_both]">
                            <span className="w-2 h-2 rounded-full bg-accent-emerald" />
                            <span className="text-xs sm:text-sm font-medium text-text-secondary">Qualified graduate software engineer</span>
                        </div>

                        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.96] tracking-tight mb-7 animate-[fade-in-up_0.8s_ease_0.08s_both]">
                            I build clean software that proves I can ship.
                        </h1>

                        <p className="text-base sm:text-lg text-text-secondary max-w-2xl mb-8 leading-relaxed animate-[fade-in-up_0.8s_ease_0.16s_both]">
                            I am Zain Zahab, a Bachelor of Software Engineering graduate specialising in AI. My portfolio is built around working products, production thinking, and the kind of ownership employers can actually use.
                        </p>

                        <div className="space-y-3 mb-10 animate-[fade-in-up_0.8s_ease_0.22s_both]">
                            {proofPoints.map((point) => (
                                <div key={point} className="flex items-center gap-3 text-sm text-text-secondary">
                                    <span className="w-1.5 h-1.5 bg-text-primary rounded-full flex-shrink-0" />
                                    <span>{point}</span>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 animate-[fade-in-up_0.8s_ease_0.28s_both]">
                            <button onClick={() => scrollTo('projects')} className="btn-primary group">
                                <span className="flex items-center gap-2">
                                    Review the Work
                                    <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </span>
                            </button>
                            <button onClick={() => scrollTo('contact')} className="btn-secondary">Start a Conversation</button>
                        </div>
                    </div>

                    <div className="animate-[fade-in-up_0.8s_ease_0.18s_both]">
                        <div className="glass-card p-6 sm:p-7">
                            <div className="flex items-start justify-between gap-6 pb-6 border-b border-white/[0.06]">
                                <div>
                                    <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">Current Focus</div>
                                    <div className="font-display text-2xl font-bold text-text-primary">Graduate engineer ready for production teams</div>
                                </div>
                                <div className="text-xs text-accent-emerald font-semibold border border-accent-emerald/25 px-3 py-1.5 rounded-md whitespace-nowrap">Available</div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4 py-6 border-b border-white/[0.06]">
                                {metrics.map((metric) => (
                                    <div key={metric.label} className="bg-dark-900/70 border border-white/[0.06] rounded-lg p-4">
                                        <div className="font-display text-3xl font-bold text-text-primary mb-1">{metric.value}</div>
                                        <div className="text-xs text-text-muted uppercase tracking-wider leading-relaxed">{metric.label}</div>
                                    </div>
                                ))}
                            </div>

                            <div className="pt-6">
                                <div className="text-xs font-semibold text-text-muted uppercase tracking-wider mb-3">Employer Signal</div>
                                <p className="text-sm text-text-secondary leading-relaxed">
                                    I have built products across web, mobile, AI-assisted workflows and business automation. The goal is simple: join a serious engineering team, contribute quickly, and keep improving under strong technical mentorship.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
