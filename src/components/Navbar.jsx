import { useEffect, useState } from 'react';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);

    const navLinks = [
        { id: 'about', label: 'About' },
        { id: 'projects', label: 'Projects' },
        { id: 'experience', label: 'Experience' },
        { id: 'skills', label: 'Skills' },
        { id: 'value', label: 'Why Me' },
        { id: 'contact', label: 'Contact' },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
            const ids = ['hero', 'about', 'projects', 'experience', 'skills', 'value', 'contact'];
            for (let i = ids.length - 1; i >= 0; i--) {
                const el = document.getElementById(ids[i]);
                if (el && el.getBoundingClientRect().top < window.innerHeight / 3) {
                    setActiveSection(ids[i]);
                    break;
                }
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollTo = (id) => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
        setMobileOpen(false);
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'py-3 bg-dark-950/80 backdrop-blur-xl border-b border-white/[0.04]' : 'py-5 bg-transparent'}`}>
            <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
                <button onClick={() => scrollTo('hero')} className="group flex items-center gap-2 cursor-pointer">
                    <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-accent-teal to-accent-sky flex items-center justify-center font-display font-bold text-sm text-dark-950 transition-transform duration-300 group-hover:scale-110">Z</div>
                    <span className="font-display font-semibold text-lg text-text-primary hidden sm:block">Zain<span className="text-accent-teal">.</span>dev</span>
                </button>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => scrollTo(link.id)}
                            className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === link.id ? 'text-accent-teal bg-accent-teal/10' : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'}`}>
                            {link.label}
                        </button>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button onClick={() => scrollTo('contact')} className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-gradient-to-r from-accent-teal to-accent-sky text-dark-950 transition-all duration-300 hover:shadow-[0_0_30px_rgba(45,212,191,0.25)] hover:-translate-y-0.5 cursor-pointer">
                        Hire Me
                    </button>
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 rounded-xl bg-white/[0.04] flex items-center justify-center cursor-pointer" aria-label="Toggle navigation">
                    <div className="space-y-1.5">
                        <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
                        <span className={`block w-5 h-0.5 bg-text-primary transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                    </div>
                </button>
            </div>

            <div className={`md:hidden transition-all duration-500 overflow-hidden ${mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className="px-6 py-4 bg-dark-900/95 backdrop-blur-xl border-t border-white/[0.04] space-y-1">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => scrollTo(link.id)}
                            className={`block w-full text-left px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === link.id ? 'text-accent-teal bg-accent-teal/10' : 'text-text-secondary hover:text-text-primary'}`}>
                            {link.label}
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
