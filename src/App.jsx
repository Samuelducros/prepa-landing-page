import HeroSection from './components/HeroSection';
import VideoSection from './components/VideoSection';
import Pillars from './components/Pillars';
import Testimonials from './components/Testimonials';
import AboutMe from './components/AboutMe';
import Timeline from './components/Timeline';
import Plaquette from './components/Plaquette';
import Faq from './components/Faq';
import ClosingMessage from './components/ClosingMessage';
import LegalPage from './LegalPage';
import {
  AccompanimentHome,
  AccompanimentQualification,
  DiagnosticBooking,
  DiagnosticConfirmation,
} from './AccommodationJourney';
import {
  RetractionForm,
  StageHome,
  StagePayment,
  StageRegistration,
} from './StageJourney';

const legalPaths = {
  '/cgv': 'cgv',
  '/confidentialite': 'confidentialite',
  '/mentions-legales': 'mentions-legales',
  '/retractation': 'retractation',
};

function Footer() {
  return (
    <footer className="border-t border-slate-200 px-6 py-8 text-center text-sm text-slate-500">
      <div className="mx-auto flex max-w-5xl flex-wrap justify-center gap-x-6 gap-y-2">
        <a className="hover:text-slate-900" href="/cgv">CGV</a>
        <a className="hover:text-slate-900" href="/confidentialite">Confidentialité</a>
        <a className="hover:text-slate-900" href="/mentions-legales">Mentions légales</a>
        <a className="hover:text-slate-900" href="/retractation">Rétractation</a>
      </div>
    </footer>
  );
}

function MainSite() {
  return (
    <>
      <HeroSection />
      <VideoSection />
      <Pillars />
      <Testimonials />
      <AboutMe />
      <Timeline />
      <Plaquette />
      <Faq />
      <ClosingMessage />
      <Footer />
    </>
  );
}

export default function App() {
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';

  if (legalPaths[pathname]) return <LegalPage route={pathname} />;
  if (pathname === '/stage') return <StageHome />;
  if (pathname === '/inscription-stage') return <StageRegistration />;
  if (pathname === '/paiement-stage') return <StagePayment />;
  if (pathname === '/retractation-formulaire') return <RetractionForm />;
  if (pathname === '/accompagnement') return <AccompanimentHome />;
  if (pathname === '/qualification-accompagnement') return <AccompanimentQualification />;
  if (pathname === '/diagnostic') return <DiagnosticBooking />;
  if (pathname === '/diagnostic-confirmation') return <DiagnosticConfirmation />;

  return <MainSite />;
}
