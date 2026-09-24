import { ThemeProvider } from './contexts/ThemeContext';
import { useActiveSection } from './hooks/useActiveSection';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Experience } from './components/Experience';
import { Education } from './components/Education';
import { Projects } from './components/Projects';
import { Cybersecurity } from './components/Cybersecurity';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

const SECTIONS = [
  'home',
  'about',
  'skills',
  'experience',
  'education',
  'projects',
  'security',
  'certifications',
  'contact',
];

function App() {
  const activeSection = useActiveSection(SECTIONS);

  return (
    <ThemeProvider>
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-lg focus:bg-brand-500 focus:px-4 focus:py-2 focus:text-white"
      >
        Skip to content
      </a>
      <Header activeSection={activeSection} />
      <main id="main" className="min-h-screen">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Education />
        <Projects />
        <Cybersecurity />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </ThemeProvider>
  );
}

export default App;