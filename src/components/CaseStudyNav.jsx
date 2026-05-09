import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function CaseStudyNav({ projectName }) {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04]' : 'py-5 bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Link to="/" className="group flex items-center gap-2">
                        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-teal to-accent-sky flex items-center justify-center font-display font-bold text-sm text-dark-950 transition-transform duration-300 group-hover:scale-110">Z</div>
                        <span className="font-display font-semibold text-lg text-text-primary hidden sm:block">Zain<span className="text-accent-teal">.</span>dev</span>
                    </Link>
                    <div className="hidden sm:flex items-center gap-2 text-text-muted">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" /></svg>
                        <span className="text-sm font-medium text-text-secondary">{projectName}</span>
                    </div>
                </div>

                <Link to="/" className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-white/[0.04] border border-white/[0.08] text-text-primary transition-all duration-300 hover:bg-white/[0.08] hover:border-accent-teal/30 hover:-translate-y-0.5">
                    ← Back to Portfolio
                </Link>
            </div>
        </nav>
    );
}
