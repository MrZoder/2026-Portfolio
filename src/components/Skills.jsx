import { useScrollReveal } from '../hooks/useScrollReveal';

const skillCategories = [
    {
        title: 'Frontend',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
        ),
        skills: ['React', 'TypeScript', 'JavaScript', 'Tailwind CSS', 'HTML', 'CSS'],
    },
    {
        title: 'Backend & Data',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
            </svg>
        ),
        skills: ['Node.js', 'Python', 'REST APIs', 'PostgreSQL', 'Supabase', 'SQL'],
    },
    {
        title: 'Cloud & Tooling',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
            </svg>
        ),
        skills: ['Docker', 'GCP', 'Git', 'Linux', 'CI/CD Concepts', 'Vite'],
    },
    {
        title: 'AI & Integrations',
        icon: (
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
            </svg>
        ),
        skills: ['LLMs (Claude, GPT, Llama)', 'Wolfram Alpha', 'AI Workflows', 'Prompt Engineering'],
    },
];

function SkillCard({ category, index }) {
    const [ref, isVisible] = useScrollReveal({ threshold: 0.1 });

    return (
        <div ref={ref}
            className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 120}ms` }}>
            <div className="glass-card glass-card-hover p-7 h-full">
                <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-lg bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-text-primary">
                        {category.icon}
                    </div>
                    <h3 className="font-display text-lg font-bold text-text-primary">{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                        <span key={skill} className="tech-badge">{skill}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default function Skills() {
    const [headerRef, headerVisible] = useScrollReveal();

    return (
        <section id="skills" className="relative py-24 sm:py-32">
            <div className="max-w-6xl mx-auto px-6 relative z-10">
                <div ref={headerRef}
                    className={`text-center mb-16 transition-all duration-700 ${headerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    <div className="section-kicker mx-auto">Tech Stack</div>
                    <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-text-primary mb-4">
                        Technical Skills
                    </h2>
                    <p className="text-text-secondary max-w-xl mx-auto text-lg">
                        A modern, production-focused tech stack spanning frontend, backend, cloud and AI.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {skillCategories.map((category, index) => (
                        <SkillCard key={category.title} category={category} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
