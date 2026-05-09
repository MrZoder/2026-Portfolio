import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import FeaturedProjects from '../components/FeaturedProjects';
import Experience from '../components/Experience';
import Skills from '../components/Skills';
import GraduateValue from '../components/GraduateValue';
import Contact from '../components/Contact';

export default function HomePage() {
    return (
        <div className="relative">
            <Navbar />
            <main>
                <Hero />
                <div className="section-divider" />
                <About />
                <div className="section-divider" />
                <FeaturedProjects />
                <div className="section-divider" />
                <Experience />
                <div className="section-divider" />
                <Skills />
                <div className="section-divider" />
                <GraduateValue />
                <div className="section-divider" />
                <Contact />
            </main>
        </div>
    );
}
