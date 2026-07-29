import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import Pillars from './components/Pillars';
import Plaquette from './components/Plaquette';
import Faq from './components/Faq';
import AboutMe from './components/AboutMe';
import ClosingMessage from './components/ClosingMessage';
import Testimonials from './components/Testimonials';
import LegalPage from './LegalPage';

export default function App() {
  const route = window.location.pathname.replace(/\/$/, '') || '/';

  if (['/cgv', '/confidentialite', '/mentions-legales', '/retractation'].includes(route)) {
    return <LegalPage route={route} />;
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F8FAFC]">
      <HeroSection />
      <Timeline />
      <VideoSection />
      <Pillars />
      <Plaquette />
      <Testimonials />
      <Faq />
      <AboutMe />
      <ClosingMessage />
      <footer className="border-t border-slate-200 bg-white px-6 py-8 text-center text-sm text-slate-600">
        <p className="font-semibold text-[#1E3A5F]">Samuel DUCROS EI · TVA non applicable, art. 293 B du CGI</p>
        <nav className="mt-3 flex flex-wrap justify-center gap-x-5 gap-y-2">
          <a className="hover:text-blue-700 hover:underline" href="/cgv">CGV</a>
          <a className="hover:text-blue-700 hover:underline" href="/confidentialite">Politique de confidentialité</a>
          <a className="hover:text-blue-700 hover:underline" href="/mentions-legales">Mentions légales</a>
          <a className="hover:text-blue-700 hover:underline" href="/retractation">Rétractation</a>
        </nav>
      </footer>
    </main>
  );
}
