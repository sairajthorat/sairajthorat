import { useEffect } from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/hero/Hero';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import FeaturedProjects from './components/projects/FeaturedProjects';
import DSASection from './components/dsa/DSASection';
import Research from './components/research/Research';
import Experience from './components/experience/Experience';
import Contact from './components/contact/Contact';
import CursorGlow from './components/layout/CursorGlow';
import KeyboardNav from './components/layout/KeyboardNav';

// Subtle gradient section divider
function Divider() {
  return (
    <div
      aria-hidden="true"
      style={{
        width: '100%',
        height: '1px',
        background: 'linear-gradient(90deg, transparent, var(--color-border) 20%, var(--color-border) 80%, transparent)',
        // ── Adjust the vertical spacing around the divider line right here ──
        margin: '2rem 0', // Increase '2rem' to '4rem' or '6rem' for more space
      }}
    />
  );
}

function App() {
  // ── Scroll progress bar ──────────────────────────────────────────────────
  useEffect(() => {
    const bar = document.getElementById('scroll-progress');
    if (!bar) return;

    const updateProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      bar.style.width = `${progress}%`;
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <>
      <CursorGlow />
      <KeyboardNav />

      {/* Scroll progress bar */}
      <div id="scroll-progress" aria-hidden="true" />

      {/* Navigation */}
      <Navbar />

      {/* Main content */}
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <FeaturedProjects />
        <Divider />
        {/*<DSASection />*/}
        <Divider />
        <Experience />
        <Divider />
        <Research />
        <Divider />
        <Skills />
        <Divider />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
