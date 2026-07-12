import { CheckCircle2, ClipboardCheck, PhoneCall, Stethoscope, Sparkles, Compass } from 'lucide-react';
import Reveal from './Reveal';

const steps = [
  {
    icon: CheckCircle2,
    title: 'Candidature reçue',
    text: 'Votre demande a bien été enregistrée. Je vais l’examiner avec attention.',
  },
  {
    icon: ClipboardCheck,
    title: 'Analyse de votre profil',
    text: 'J’étudie le profil de votre enfant, son parcours et ses besoins spécifiques.',
  },
  {
    icon: PhoneCall,
    title: 'Prise de contact',
    text: 'Je vous contacte par e-mail pour convenir ensemble d’un créneau.',
  },
  {
    icon: Stethoscope,
    title: 'Appel diagnostic',
    text: 'Un échange approfondi pour comprendre vos attentes et définir les prochaines étapes.',
  },
/*  {
    icon: Sparkles,
    title: 'Séance découverte',
    text: 'Une première rencontre avec l’étudiant pour découvrir ma méthode de travail.',
  },*/
  {
    icon: Compass,
    title: 'Début de l’accompagnement',
    text: 'Mise en place du suivi personnalisé et démarrage de l’accompagnement.',
  },
];

export default function Timeline() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-16 text-center sm:mb-20">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Le parcours
            </span>
            <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Les prochaines étapes
            </h2>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute bottom-3 left-6 top-3 w-px bg-[#1E3A5F]/10" />
          <div className="space-y-10 sm:space-y-12">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={0.05 * i}>
                <div className="relative flex items-start gap-5 sm:gap-6">
                  <div className="relative z-10 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full border border-[#1E3A5F]/10 bg-white shadow-[0px_4px_20px_rgba(30,58,95,0.06)]">
                    <step.icon className="h-5 w-5 text-[#3B82F6]" strokeWidth={1.5} />
                  </div>
                  <div className="pt-1.5">
                    <span className="mb-1 block text-xs font-semibold uppercase tracking-[0.15em] text-[#4B5563]">
                      Étape {i + 1}
                    </span>
                    <h3 className="mb-2 text-lg font-semibold text-[#1E3A5F] sm:text-xl">{step.title}</h3>
                    <p className="max-w-md text-sm leading-relaxed text-[#4B5563] sm:text-base">{step.text}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
