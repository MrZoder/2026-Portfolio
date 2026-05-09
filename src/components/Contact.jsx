import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Contact() {
    const [ref, isVisible] = useScrollReveal();

    return (
        <section id="contact" className="relative py-28 sm:py-36">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent-teal/[0.04] blur-[150px] pointer-events-none" />
            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-teal/10 border border-accent-teal/20 mb-6">
                        <span className="text-sm font-medium text-accent-teal">Get in Touch</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-5">
                        Let's Build <span className="gradient-text">Something Great</span>
                    </h2>
                    <p className="text-text-secondary text-lg max-w-xl mx-auto mb-4 leading-relaxed">
                        I'm actively looking for graduate and junior software engineering roles worldwide.
                        If you have an opportunity or just want to connect, I'd love to hear from you.
                    </p>
                    <p className="text-sm text-accent-emerald font-medium mb-12 flex items-center justify-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-accent-emerald animate-pulse" />
                        Available for graduate and junior software engineering roles worldwide
                    </p>

                    {/* Contact cards */}
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
                        <a href="mailto:zainzahab4@gmail.com" className="glass-card glass-card-hover p-5 text-center group">
                            <div className="w-10 h-10 rounded-xl bg-accent-teal/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-teal/20 transition-colors">
                                <svg className="w-5 h-5 text-accent-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <div className="text-xs text-text-muted mb-1">Email</div>
                            <div className="text-sm font-medium text-text-primary break-all">zainzahab4@gmail.com</div>
                        </a>

                        <a href="tel:+61481401554" className="glass-card glass-card-hover p-5 text-center group">
                            <div className="w-10 h-10 rounded-xl bg-accent-sky/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-sky/20 transition-colors">
                                <svg className="w-5 h-5 text-accent-sky" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                            </div>
                            <div className="text-xs text-text-muted mb-1">Phone</div>
                            <div className="text-sm font-medium text-text-primary">+61 481 401 554</div>
                        </a>

                        <a href="https://github.com/MrZoder" target="_blank" rel="noopener noreferrer" className="glass-card glass-card-hover p-5 text-center group">
                            <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 flex items-center justify-center mx-auto mb-3 group-hover:bg-accent-emerald/20 transition-colors">
                                <svg className="w-5 h-5 text-accent-emerald" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                </svg>
                            </div>
                            <div className="text-xs text-text-muted mb-1">GitHub</div>
                            <div className="text-sm font-medium text-text-primary">MrZoder</div>
                        </a>
                    </div>

                    {/* Main CTA */}
                    <a href="mailto:zainzahab4@gmail.com" className="btn-primary text-lg !py-4 !px-10 inline-flex">
                        <span className="flex items-center gap-3">
                            Let's Build Something
                            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>

            {/* Footer */}
            <div className="mt-24 pt-8 border-t border-white/[0.04]">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-muted">© 2026 Zain Zahab. Built with React & Tailwind CSS.</p>
                    <p className="text-sm text-text-muted">Designed & developed by Zain</p>
                </div>
            </div>
        </section>
    );
}
