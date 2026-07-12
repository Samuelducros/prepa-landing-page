import Reveal from './Reveal';

const aboutImage = "/Samuel_Ducros_Presentation.jpeg";

export default function AboutMe() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[2fr_3fr] lg:gap-16">
        <Reveal>
          <div className="relative">
            <div className="mx-auto aspect-[4/5] max-w-sm overflow-hidden rounded-[24px] shadow-[0px_8px_40px_rgba(30,58,95,0.08)] lg:mx-0">
              <img src={aboutImage} alt="Portrait de Samuel Ducros" className="h-full w-full object-cover" />
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div>
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              Qui suis-je ?
            </span>
            <h2 className="mb-6 text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Un accompagnement pensé pour la prépa
            </h2>
            <div className="space-y-4 text-base leading-relaxed text-[#4B5563] sm:text-lg">
              <p>
                Ancien élève de prépa MPSI/MP puis diplômé ingénieur en mathématiques appliquées, j’accompagne aujourd’hui exclusivement des étudiants de classes préparatoires scientifiques.
              </p>
              <p>
                Depuis plus de 800 heures de cours, j’aide des élèves à construire une méthode de travail solide, gagner en autonomie et retrouver confiance face aux exigences de la prépa.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
