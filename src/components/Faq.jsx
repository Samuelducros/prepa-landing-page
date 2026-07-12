import Reveal from './Reveal';

const faqs = [
  {
    q: 'Comment va se dérouler la prise de contact ?',
    a: 'Après avoir étudié votre candidature, je vous contacterai par téléphone pour un appel rapide afin de convenir d’un créneau pour un appel diagnostic d’environ 30 minutes. \n \n Cet échange nous permettra de faire le point sur la situation de votre enfant, ses difficultés, ses objectifs et de vérifier si mon accompagnement est réellement adapté à ses besoins.',
  },
/*  {
    q: 'Comment fonctionne la séance découverte ?',
    a: 'Il s’agit d’un premier rendez-vous avec l’étudiant pour évaluer sa situation et lui faire découvrir ma méthode de travail.',
  },*/
  {
    q: 'Tous les élèves sont-ils acceptés ?',
    a: 'Non. \n\n Afin de garantir un accompagnement de qualité, le nombre de places est volontairement limité. J’accompagne uniquement les étudiants pour lesquels je pense pouvoir apporter une réelle valeur. Si je considère que mon accompagnement n’est pas adapté à votre situation, je vous le dirai en toute transparence.',
  },
  {
    q: 'Pourquoi travaillez-vous en petit groupe ?',
    a: 'J’ai fait le choix de travailler en groupes de 3 étudiants maximum car je suis convaincu que c’est le format le plus efficace. \n\n Les étudiants progressent non seulement grâce à mes explications, mais aussi en confrontant leurs raisonnements, en analysant les erreurs des autres et en échangeant ensemble. \n Le groupe reste suffisamment réduit pour que chacun bénéficie d’un accompagnement personnalisé et puisse participer activement à chaque séance.',
  },
  {
    q: "Combien de temps dure l’accompagnement ?",
    a: "L’accompagnement est prévu sur 12 semaines, avec possibilité de poursuivre ensuite si cela reste pertinent. \n \n Cette durée permet d’installer de véritables méthodes de travail, d’observer des progrès durables et de laisser le temps à l’étudiant de gagner en autonomie.",
  },
  {
    q: "Mon enfant est déjà très travailleur. Est-ce que cet accompagnement peut quand même l’aider ?",
    a: "Oui, c’est d’ailleurs souvent le cas. \n\n En prépa, les difficultés viennent rarement d’un manque de travail. Elles proviennent plus souvent de la méthode, du raisonnement, de la rédaction ou de la gestion des évaluations. \n Mon objectif est justement d’aider l’étudiant à transformer son travail en résultats.",
  },
  {
    q: 'Que faut-il préparer avant notre échange ?',
    a: 'Rien de particulier. \n\n Si possible, réfléchissez simplement aux principales difficultés rencontrées par votre enfant et aux objectifs que vous aimeriez atteindre. \n Si vous avez quelques copies de DS ou de colles récentes, elles pourront également être utiles pour mieux comprendre sa situation.',
  },
  {
    q: 'Quels sont les tarifs ?',
    a: 'Je vous présenterai l’offre la plus adaptée à votre situation lors de notre appel diagnostic.',
  },
];

export default function Faq() {
  return (
    <section className="px-6 py-20 sm:px-10 sm:py-32 lg:px-20 lg:py-40">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-4 block text-sm font-semibold uppercase tracking-[0.2em] text-[#3B82F6]">
              FAQ
            </span>
            <h2 className="text-3xl font-semibold leading-[1.2] tracking-[-0.02em] text-[#1E3A5F] sm:text-4xl lg:text-[2.5rem]">
              Questions fréquentes
            </h2>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="divide-y divide-[#1E3A5F]/10">
            {faqs.map((faq) => (
              <details key={faq.q} className="group py-6">
                <summary className="cursor-pointer list-none text-base font-medium text-[#1E3A5F] sm:text-lg">
                  <div className="flex items-center justify-between gap-4">
                    <span>{faq.q}</span>
                    <span className="text-[#3B82F6] transition-transform group-open:rotate-45">+</span>
                  </div>
                </summary>
                <p className="whitespace-pre-line pt-4 text-sm leading-relaxed text-[#4B5563] sm:text-base">{faq.a}</p>
              </details>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
