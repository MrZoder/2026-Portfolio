import { useEffect, useState } from 'react';

export default function Hero() {
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouse = (e) => {
            setMousePos({
                x: (e.clientX / window.innerWidth - 0.5) * 20,
                y: (e.clientY / window.innerHeight - 0.5) * 20,
            });
        };
        window.addEventListener('mousemove', handleMouse);
        return () => window.removeEventListener('mousemove', handleMouse);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Animated background orbs */}
            <div className="absolute inset-0">
                <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.06] blur-[120px] animate-pulse-glow"
                    style={{ transform: `translate(${mousePos.x * 0.5}px, ${mousePos.y * 0.5}px)` }} />
                <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-accent-sky/[0.05] blur-[120px] animate-pulse-glow"
                    style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)`, animationDelay: '1.5s' }} />
                <div className="absolute top-1/2 right-1/3 w-[300px] h-[300px] rounded-full bg-accent-gold/[0.03] blur-[100px] animate-pulse-glow"
                    style={{ animationDelay: '3s' }} />
                {/* Grid overlay */}
                <div className="absolute inset-0 opacity-[0.03]"
                    style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
            </div>

            {/* Floating decorative cards */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block">
                {/* Code snippet card */}
                <div className="absolute top-[18%] right-[8%] animate-float"
                    style={{ transform: `translate(${mousePos.x * -0.2}px, ${mousePos.y * -0.2}px)` }}>
                    <div className="glass-card px-5 py-4 text-xs font-mono max-w-[240px]">
                        <div className="flex items-center gap-2 mb-3">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400/80" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400/80" />
                        </div>
                        <div className="space-y-1 text-text-muted">
                            <div><span className="text-accent-teal">const</span> <span className="text-accent-sky">engineer</span> = {'{'}</div>
                            <div className="pl-4"><span className="text-accent-gold">degree</span>: <span className="text-green-400">"BSE (AI)"</span>,</div>
                            <div className="pl-4"><span className="text-accent-gold">focus</span>: <span className="text-green-400">"Product"</span>,</div>
                            <div className="pl-4"><span className="text-accent-gold">status</span>: <span className="text-green-400">"Hiring"</span></div>
                            <div>{'}'}</div>
                        </div>
                    </div>
                </div>

                {/* Graduation card */}
                <div className="absolute bottom-[22%] left-[6%] animate-float-delayed"
                    style={{ transform: `translate(${mousePos.x * 0.15}px, ${mousePos.y * 0.15}px)` }}>
                    <div className="glass-card px-5 py-4">
                        <div className="text-[10px] font-medium text-text-muted uppercase tracking-wider mb-1">Graduating</div>
                        <div className="text-2xl font-display font-bold gradient-text">April 2026</div>
                        <div className="text-xs text-accent-emerald mt-1 flex items-center gap-1">
                            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" /></svg>
                            Available Now
                        </div>
                    </div>
                </div>

                {/* Tech badge card */}
                <div className="absolute bottom-[30%] right-[12%] animate-float" style={{ animationDelay: '2s' }}>
                    <div className="glass-card px-4 py-3 flex items-center gap-3">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent-teal to-accent-sky flex items-center justify-center text-white text-sm">⚛</div>
                        <div>
                            <div className="text-xs font-semibold text-text-primary">Full Stack + AI</div>
                            <div className="text-[10px] text-text-muted">React • Python • LLMs</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
                {/* Status badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-8 animate-[fade-in-up_0.8s_ease_both]">
                    <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                    <span className="text-sm font-medium text-accent-emerald">Available for full-time roles</span>
                </div>

                {/* Main heading */}
                <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] tracking-tight mb-6 animate-[fade-in-up_0.8s_ease_0.1s_both]">
                    Graduate Software Engineer{' '}
                    <br className="hidden sm:block" />
                    building <span className="gradient-text">real products</span>
                    <br className="hidden sm:block" />
                    and <span className="gradient-text-alt">AI-powered software</span>
                </h1>

                {/* Subtitle */}
                <p className="text-base sm:text-lg text-text-secondary max-w-2xl mx-auto mb-4 leading-relaxed animate-[fade-in-up_0.8s_ease_0.2s_both]">
                    Final trimester Software Engineering (AI) student available for full-time roles.
                    I build SaaS products, analytics dashboards and real-world tools using modern web technologies.
                </p>

                {/* Relocation note */}
                <p className="text-sm text-text-muted mb-10 animate-[fade-in-up_0.8s_ease_0.25s_both] flex items-center justify-center gap-2">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Based in Australia · Open to relocation worldwide for the right opportunity
                </p>

                {/* CTAs */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-[fade-in-up_0.8s_ease_0.3s_both]">
                    <button onClick={() => scrollTo('projects')} className="btn-primary group">
                        <span className="flex items-center gap-2">
                            View Projects
                            <svg className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </button>
                    <button onClick={() => scrollTo('contact')} className="btn-secondary">Contact Me</button>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-[fade-in-up_0.8s_ease_0.5s_both]">
                    <button onClick={() => scrollTo('about')} className="group flex flex-col items-center gap-2 cursor-pointer">
                        <span className="text-xs text-text-muted font-medium tracking-widest uppercase group-hover:text-text-secondary transition-colors">Scroll</span>
                        <div className="w-6 h-10 rounded-full border-2 border-dark-300 flex items-start justify-center p-1.5 group-hover:border-accent-teal/50 transition-colors">
                            <div className="w-1.5 h-1.5 rounded-full bg-text-muted animate-bounce" />
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}
