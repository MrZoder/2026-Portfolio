import { useEffect, useState } from 'react';
import RollText from './RollText';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('hero');
    const [mobileOpen, setMobileOpen] = useState(false);
    const [hoveredLabel, setHoveredLabel] = useState(null);

    const navLinks = [
        { id: 'about', label: 'About', hoverLabel: 'Profile' },
        { id: 'projects', label: 'Projects', hoverLabel: 'Work' },
        { id: 'experience', label: 'Experience', hoverLabel: 'Roles' },
        { id: 'skills', label: 'Skills', hoverLabel: 'Stack' },
        { id: 'value', label: 'Why Me', hoverLabel: 'Signal' },
        { id: 'contact', label: 'Contact', hoverLabel: 'Email' },
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
                    <div className="w-9 h-9 rounded-lg bg-text-primary flex items-center justify-center font-display font-bold text-sm text-dark-950 transition-transform duration-300 group-hover:scale-105">Z</div>
                    <span className="font-display font-semibold text-lg text-text-primary hidden sm:block">Zain Zahab</span>
                </button>

                <div className="hidden md:flex items-center gap-1">
                    {navLinks.map((link) => (
                        <button key={link.id} onClick={() => scrollTo(link.id)}
                            onMouseEnter={() => setHoveredLabel(link.id)}
                            onMouseLeave={() => setHoveredLabel(null)}
                            onFocus={() => setHoveredLabel(link.id)}
                            onBlur={() => setHoveredLabel(null)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer min-w-[5.8rem] flex justify-center ${activeSection === link.id ? 'text-text-primary bg-white/[0.07]' : 'text-text-secondary hover:text-text-primary hover:bg-white/[0.04]'}`}>
                            <RollText
                                text={hoveredLabel === link.id ? link.hoverLabel : link.label}
                                reserveTexts={[link.label, link.hoverLabel]}
                                direction={hoveredLabel === link.id ? 'up' : 'down'}
                            />
                        </button>
                    ))}
                </div>

                <div className="hidden md:block">
                    <button onClick={() => scrollTo('contact')}
                        onMouseEnter={() => setHoveredLabel('nav-cta')}
                        onMouseLeave={() => setHoveredLabel(null)}
                        onFocus={() => setHoveredLabel('nav-cta')}
                        onBlur={() => setHoveredLabel(null)}
                        className="px-5 py-2.5 rounded-lg text-sm font-semibold bg-text-primary text-dark-950 transition-all duration-300 hover:bg-white hover:-translate-y-0.5 cursor-pointer min-w-[6.25rem] flex justify-center">
                        <RollText
                            text={hoveredLabel === 'nav-cta' ? 'Email Me' : 'Contact'}
                            reserveTexts={['Contact', 'Email Me']}
                            direction={hoveredLabel === 'nav-cta' ? 'up' : 'down'}
                        />
                    </button>
                </div>

                <button onClick={() => setMobileOpen(!mobileOpen)} className="md:hidden w-10 h-10 rounded-lg bg-white/[0.04] flex items-center justify-center cursor-pointer" aria-label="Toggle navigation">
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
                            className={`block w-full text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300 cursor-pointer ${activeSection === link.id ? 'text-text-primary bg-white/[0.07]' : 'text-text-secondary hover:text-text-primary'}`}>
                            <RollText
                                text={activeSection === link.id ? link.hoverLabel : link.label}
                                reserveTexts={[link.label, link.hoverLabel]}
                                direction={activeSection === link.id ? 'up' : 'down'}
                            />
                        </button>
                    ))}
                </div>
            </div>
        </nav>
    );
}
