import { useScrollReveal } from '../hooks/useScrollReveal';

const values = [
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
        ),
        title: 'Modern Tech Stack',
        description: 'Strong foundation in React, TypeScript, Node.js and modern web technologies. I write clean, maintainable code from day one.',
        gradient: 'from-accent-teal to-accent-sky',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
            </svg>
        ),
        title: 'Real Products, Not Just Coursework',
        description: 'I\'ve shipped SaaS products, automation tools and multi-carrier platforms. I understand what it takes to go from idea to production.',
        gradient: 'from-accent-gold to-amber-400',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        title: 'AI Integration Experience',
        description: 'Hands-on experience integrating LLMs and AI models into real backend systems — not just API calls, but production workflows.',
        gradient: 'from-accent-sky to-accent-teal',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
            </svg>
        ),
        title: 'Product & UX Thinking',
        description: 'I think in products, not features. I understand SaaS architecture, monetisation and what makes users come back.',
        gradient: 'from-accent-emerald to-accent-teal',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: 'Fast Learner & Hungry to Grow',
        description: 'I completed my diploma at 17 and have been building ever since. I thrive in environments where I can learn from experienced engineers.',
        gradient: 'from-accent-teal to-emerald-400',
    },
    {
        icon: (
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
        ),
        title: 'Team-Ready & Coachable',
        description: 'I value mentorship, code review and collaborative development. I\'m ready to contribute from day one and grow with the team.',
        gradient: 'from-accent-gold to-accent-teal',
    },
];

function ValueCard({ value, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 100}ms` }}>
            <div className="glass-card glass-card-hover p-7 h-full group">
                <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${value.gradient} flex items-center justify-center text-white mb-5 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                    {value.icon}
                </div>
                <h3 className="font-display text-lg font-bold text-text-primary mb-3">{value.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{value.description}</p>
            </div>
        </div>
    );
}

export default function GraduateValue() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="value" className="relative py-28 sm:py-36">
            <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-teal/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-sky/20 to-transparent" />
            <div className="absolute inset-0 bg-dark-900/30" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-gold/10 border border-accent-gold/20 mb-6">
                        <span className="text-sm font-medium text-accent-gold">For Recruiters</span>
                    </div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        What I Bring as a{' '}
                        <span className="gradient-text">Graduate Engineer</span>
                    </h2>
                    <p className="text-text-secondary max-w-2xl mx-auto text-lg">
                        I'm not just looking for any job — I'm looking for the right team where I can contribute real value and accelerate my growth.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {values.map((value, index) => (
                        <ValueCard key={value.title} value={value} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
