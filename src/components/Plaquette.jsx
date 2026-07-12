import { ArrowRight } from 'lucide-react';
import Reveal from './Reveal';

export default function Plaquette() {
  return (
    <section className="overflow-hidden px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto grid max-w-6xl items-center gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <div className="relative" style={{ transform: 'rotate(-4deg)' }}>
            <div className="mx-auto aspect-[3/4] max-w-sm overflow-hidden rounded-[24px] bg-white shadow-[0px_12px_48px_rgba(30,58,95,0.12)]">
              <div className="flex h-28 flex-col justify-end bg-[#1E3A5F] p-6">
                <div className="mb-3 h-1 w-10 rounded-full bg-[#F4B942]" />
                <div className="mb-2 h-2.5 w-3/4 rounded bg-white/90" />
                <div className="h-2 w-1/2 rounded bg-white/40" />
              </div>
              <div className="space-y-2.5 p-6">
                {[100, 84, 66, 100, 75, 84, 66, 50].map((width, i) => (
                  <div key={i} className="h-1.5 rounded bg-[#1E3A5F]/10" style={{ width: `${width}%` }} />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Plaquette
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              La présentation complète
            </h2>
            <p className="mb-8 max-w-md text-base leading-relaxed text-[#4B5563] sm:text-lg">
              Un document détaillé qui présente ma méthode, mon approche pédagogique et le déroulement de l’accompagnement.
            </p>
            <a
              href="/Plaquette_Accompagnement_Prepa_Samuel_Ducros.pdf"
              className="group inline-flex min-h-[48px] items-center gap-2 rounded-2xl border-2 border-[#1E3A5F] px-7 py-4 text-sm font-semibold text-[#1E3A5F] transition-all duration-300 hover:bg-[#1E3A5F] hover:text-white sm:px-8 sm:text-base"
            >
              Télécharger la plaquette (PDF)
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
