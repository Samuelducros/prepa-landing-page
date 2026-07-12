import { Quote } from 'lucide-react';
import Reveal from './Reveal';

const testimonials = [
  {
    text: 'Bonjour monsieur, simplement pour vous remercier, j’ai eu l’admissibilité aux Arts et Métiers que je voulais !',
    author: 'Étudiant en PT',
  },
  {
    text: 'Bonjour Samuel, merci pour votre accompagnement, cela a permis à Thomas de réussir son année !',
    author: 'Parent d’étudiant en prépa',
  },
  {
    text: 'Il a énormément progressé depuis que vous l’accompagnez et nous vous en remercions.',
    author: 'Parent d’étudiant en prépa',
  },
  {
    text: 'J’ai passé l’oral ce matin, ça s’est bien passé. Merci beaucoup pour cette année !',
    author: 'Étudiante en Terminale',
  },
];

export default function Testimonials() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center lg:mb-20">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Témoignages
            </span>

            <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Ils m’ont fait confiance
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[#4B5563] sm:text-lg">
              Quelques retours d’élèves et de parents accompagnés au cours des dernières années.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <Reveal key={index} delay={0.08 * index}>
              <article className="relative h-full rounded-[24px] border border-[#1E3A5F]/5 bg-white p-8 shadow-[0px_4px_24px_rgba(30,58,95,0.05)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0px_10px_40px_rgba(30,58,95,0.09)] sm:p-10">
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#F8FAFC]">
                  <Quote
                    className="h-6 w-6 text-[#F4B942]"
                    strokeWidth={1.8}
                  />
                </div>

                <blockquote className="text-base leading-relaxed text-[#374151] sm:text-lg">
                  « {testimonial.text} »
                </blockquote>

                <div className="mt-8 border-t border-[#1E3A5F]/10 pt-5">
                  <p className="text-sm font-semibold text-[#1E3A5F]">
                    {testimonial.author}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}