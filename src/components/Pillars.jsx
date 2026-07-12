import { Compass, Lightbulb, TrendingUp, Users } from 'lucide-react';
import Reveal from './Reveal';

const pillars = [
  {
    icon: Compass,
    title: 'Méthode',
    text: 'Une méthode de travail structurée, pensée pour la rigueur et l’efficacité qu’exige la prépa.',
  },
  {
    icon: Lightbulb,
    title: 'Autonomie',
    text: 'Développer l’autonomie de l’étudiant pour qu’il devienne acteur de sa réussite.',
  },
  {
    icon: TrendingUp,
    title: 'Confiance',
    text: 'Construire une confiance durable, ancrée dans le progrès réel semaine après semaine.',
  },
  {
    icon: Users,
    title: 'Petit groupe',
    text: 'Un accompagnement en petit groupe de 3 étudiants maximum favorisant l’attention et le suivi personnalisé.',
  },
];

export default function Pillars() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center lg:mb-20">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Mon approche
            </span>
            <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Découvrir l’accompagnement
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:gap-8">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.08 * i}>
              <div className="h-full rounded-[24px] border border-[#1E3A5F]/5 bg-white p-8 shadow-[0px_4px_24px_rgba(30,58,95,0.05)] transition-shadow duration-500 hover:shadow-[0px_8px_40px_rgba(30,58,95,0.08)] lg:p-12">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8FAFC]">
                  <pillar.icon className="h-7 w-7 text-[#3B82F6]" strokeWidth={1.5} />
                </div>
                <h3 className="mb-3 text-xl font-semibold text-[#1E3A5F] lg:text-2xl">{pillar.title}</h3>
                <p className="text-sm leading-relaxed text-[#4B5563] sm:text-base">{pillar.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
