import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import RollText from './RollText';

const contactLinks = [
    {
        label: 'Email',
        hoverLabel: 'Send',
        value: 'zainzahab4@gmail.com',
        href: 'mailto:zainzahab4@gmail.com',
    },
    {
        label: 'Phone',
        hoverLabel: 'Call',
        value: '+61 481 401 554',
        href: 'tel:+61481401554',
    },
    {
        label: 'GitHub',
        hoverLabel: 'Open',
        value: 'MrZoder',
        href: 'https://github.com/MrZoder',
    },
];

export default function Contact() {
    const [ref, isVisible] = useScrollReveal();
    const [hoveredContact, setHoveredContact] = useState(null);

    return (
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="glass-card p-7 sm:p-10">
                        <div className="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-10 lg:gap-14 items-start">
                            <div>
                                <div className="section-kicker">Get in Touch</div>
                                <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-5">
                                    Looking for a graduate engineer who has already shipped?
                                </h2>
                                <p className="text-text-secondary text-lg max-w-2xl mb-7 leading-relaxed">
                                    I am available for graduate and junior software engineering roles. I am especially interested in teams building web products, AI-assisted workflows, developer tools, operations software or SaaS platforms.
                                </p>
                                <a href="mailto:zainzahab4@gmail.com"
                                    onMouseEnter={() => setHoveredContact('main')}
                                    onMouseLeave={() => setHoveredContact(null)}
                                    onFocus={() => setHoveredContact('main')}
                                    onBlur={() => setHoveredContact(null)}
                                    className="btn-primary text-base !py-3 !px-6 inline-flex min-w-[8.4rem] justify-center">
                                    <span>
                                        <RollText
                                            text={hoveredContact === 'main' ? 'Let\'s Talk' : 'Email Zain'}
                                            reserveTexts={['Email Zain', 'Let\'s Talk']}
                                            direction={hoveredContact === 'main' ? 'up' : 'down'}
                                        />
                                    </span>
                                </a>
                            </div>

                            <div className="space-y-3">
                                {contactLinks.map((link) => (
                                    <a key={link.label} href={link.href} target={link.href.startsWith('http') ? '_blank' : undefined} rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                                        onMouseEnter={() => setHoveredContact(link.label)}
                                        onMouseLeave={() => setHoveredContact(null)}
                                        onFocus={() => setHoveredContact(link.label)}
                                        onBlur={() => setHoveredContact(null)}
                                        className="block bg-dark-900/70 border border-white/[0.06] rounded-lg p-5 hover:border-white/[0.16] transition-colors">
                                        <div className="text-xs text-text-muted uppercase tracking-wider mb-1 min-w-[3.5rem]">
                                            <RollText
                                                text={hoveredContact === link.label ? link.hoverLabel : link.label}
                                                reserveTexts={[link.label, link.hoverLabel]}
                                                direction={hoveredContact === link.label ? 'up' : 'down'}
                                            />
                                        </div>
                                        <div className="text-sm font-medium text-text-primary break-all">{link.value}</div>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-20 pt-8 border-t border-white/[0.06]">
                <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-text-muted">(c) 2026 Zain Zahab. Built with React and Tailwind CSS.</p>
                    <p className="text-sm text-text-muted">Qualified Software Engineering (AI) graduate</p>
                </div>
            </div>
        </section>
    );
}
