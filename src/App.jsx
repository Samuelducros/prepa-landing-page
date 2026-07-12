import HeroSection from './components/HeroSection';
import Timeline from './components/Timeline';
import VideoSection from './components/VideoSection';
import Pillars from './components/Pillars';
import Plaquette from './components/Plaquette';
import Faq from './components/Faq';
import AboutMe from './components/AboutMe';
import ClosingMessage from './components/ClosingMessage';
import Testimonials from './components/Testimonials';

export default function App() {
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
    </main>
  );
}
