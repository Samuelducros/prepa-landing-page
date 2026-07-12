import { Play } from 'lucide-react';
import Reveal from './Reveal';

export default function VideoSection() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-5xl">
        <Reveal>
          <div className="mb-14 text-center">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Vidéo de bienvenue
            </span>
            <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Quelques mots avant notre échange
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="group relative aspect-video cursor-pointer overflow-hidden rounded-[24px] shadow-[0px_8px_40px_rgba(30,58,95,0.12)]">
            <div className="absolute inset-0 bg-[#1E3A5F]" />
            <div
              className="absolute inset-0 opacity-20"
              style={{
                backgroundImage:
                  'radial-gradient(circle at 30% 50%, rgba(244,185,66,0.25) 0%, transparent 55%)',
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#F4B942] shadow-lg transition-transform duration-500 ease-out group-hover:scale-110 sm:h-24 sm:w-24">
                <Play className="ml-1 h-7 w-7 text-[#1E3A5F] sm:h-8 sm:w-8" fill="currentColor" strokeWidth={0} />
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="mx-auto mt-10 max-w-2xl text-center text-sm leading-relaxed text-[#4B5563] sm:text-base">
            Cette vidéo présente ma vision de l’accompagnement et les prochaines étapes de notre parcours ensemble.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
