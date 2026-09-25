import { useEffect, useRef, useState } from 'react';
import Plaquette from './components/Plaquette';
import { STAGE_FORM_URL, ORIENTATION_ENDPOINT, ORIENTATION_TURNSTILE_SITE_KEY, CONTACT_ENDPOINT, ACCOMPANIMENT_BROCHURE_URL } from './siteConfig';
const Email=()=> <a className="font-semibold text-blue-700 underline" href="mailto:contact@samuel-ducros.fr">contact@samuel-ducros.fr</a>;
const Shell=({eyebrow,title,intro,action,children})=>
<main className="min-h-screen bg-[#F8FAFC] px-5 py-10 text-[#1E3A5F] sm:px-8">
<article className="mx-auto max-w-5xl">
<header className="rounded-3xl bg-gradient-to-br from-[#1E3A5F] to-[#16304f] p-7 shadow-sm sm:p-10">
<span className="mb-4 block h-1 w-12 rounded bg-[#F6B632]"/>
<p className="text-sm font-bold uppercase tracking-[.16em] text-[#F6B632]">{eyebrow}</p>
<h1 className="mt-3 text-3xl font-bold text-white sm:text-5xl">{title}</h1>
<p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{intro}</p>
{action && <div className="mt-6 max-w-3xl">{action}</div>}
</header>{children}</article>
</main>;
const Button=({href,children,variant="default",unavailableText="Cette démarche sera disponible prochainement. Pour toute question, contactez-nous par e-mail."})=>{
const styles=variant==="hero"
?"flex w-full justify-center rounded-xl bg-[#F6B632] px-5 py-3 font-bold text-[#1E3A5F] shadow-sm transition hover:bg-[#FFD05A] hover:shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#1E3A5F] sm:inline-flex sm:w-auto"
:"inline-flex rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white hover:bg-[#16304f] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2";
return href?<a href={href} className={styles}>{children} <span className="ml-2">→</span></a>
:<span className={`${variant==="hero"?"flex w-full sm:inline-flex sm:w-auto":"inline-flex"} rounded-xl bg-slate-100 px-5 py-3 text-sm text-slate-600`}>{unavailableText}</span>;
};
const cardStyles={default:"border-slate-200 bg-white text-[#1E3A5F]",blue:"border-blue-200 bg-blue-50 text-[#1E3A5F]",yellow:"border-[#F6B632]/60 bg-[#FFF9EA] text-[#1E3A5F]",navy:"border-[#1E3A5F] bg-[#1E3A5F] text-white"};
const Card=({title,children,variant="default"})=>
<div className={`content-card min-w-0 max-w-full rounded-2xl border p-6 shadow-sm ${cardStyles[variant]}`}>
<span className="mb-3 block h-1 w-8 rounded bg-[#F6B632]"/>
<h2 className="min-w-0 break-words text-lg font-bold">{title}</h2>
<div className={`mt-3 min-w-0 whitespace-normal break-words [overflow-wrap:anywhere] ${variant==="navy"?"text-slate-100":"text-slate-600"}`}>{children}</div>
</div>;
export function StageLanding(){return <Shell eyebrow="Stage Choc Prépa" title="Préparer son entrée en prépa scientifique" intro="Un stage intensif pour aborder la transition entre le lycée et la CPGE scientifique avec des repères concrets." action={<>
<Button variant="hero" href={STAGE_FORM_URL} unavailableText="Les inscriptions au Stage seront disponibles prochainement. Pour toute question, contactez-nous par e-mail.">Vérifier mon éligibilité et m’inscrire</Button>
<p className="mt-3 text-sm leading-6 text-slate-200">Formulaire rapide · Paiement proposé uniquement après validation de l’éligibilité</p>
<a href="/orientation" className="mt-3 inline-block text-sm font-semibold text-white underline underline-offset-4 hover:text-[#F6B632]">Une question avant l’inscription ? Réserver un échange d’orientation.</a>
</>}>
<section className="mt-8 grid gap-5 md:grid-cols-3">
<Card variant="blue" title="Dates et format">26, 27 et 28 août 2026<br/>De 9 h 30 à 12 h<br/>Trois séances de 2 h 30 en visioconférence.</Card>
<Card variant="default" title="Pour qui ?">Étudiants entrant en première année de CPGE scientifique.</Card>
<Card variant="yellow" title="Tarif et capacité">149 €<br/>20 participants maximum.</Card>
</section>
<section className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
<h2 className="text-2xl font-bold">Ce que nous travaillerons</h2>
<div className="mt-6 grid gap-4 md:grid-cols-3">
<Card variant="blue" title="01 · Séance 1">Comprendre ce qui change entre le lycée et la prépa, repérer les erreurs de démarrage et définir trois priorités réalistes pour septembre.</Card>
<Card variant="yellow" title="02 · Séance 2">Apprendre activement, aborder un exercice, réagir à un blocage et exploiter efficacement un corrigé.</Card>
<Card variant="navy" title="03 · Séance 3">Comprendre les attentes des DS et des colles, réagir au stress ou à une mauvaise note et finaliser un plan d’action personnel.</Card>
</div>
<p className="mt-6 leading-7 text-slate-700">Le Stage vise à donner des méthodes, une organisation et des repères utiles ;
il ne garantit aucun résultat scolaire.</p>
</section>
<section className="mt-8 rounded-3xl border border-[#F6B632] bg-[#FFF9EA] p-7">
<h2 className="text-xl font-bold">Comment s’inscrire ?</h2>
<p className="mt-3 leading-7 text-slate-700">Le formulaire permet de vérifier l’éligibilité. Une place n’est confirmée qu’après paiement réussi et contrôle de la capacité.</p>
<div className="mt-6">
<Button href="/inscription-stage">Vérifier l’éligibilité et s’inscrire</Button>
</div>
<p className="mt-5 text-sm text-slate-600">Une question avant de continuer ? Écrivez à <Email />.</p>
</section>
<section className="mt-8">
<h2 className="text-2xl font-bold">FAQ Stage</h2>
<div className="mt-4 divide-y divide-slate-200">
<details className="py-4">
<summary className="cursor-pointer font-semibold">Le Stage est-il réservé à certaines filières ?</summary>
<p className="mt-2 text-slate-600">Il est destiné aux étudiants entrant en première année de CPGE scientifique.</p>
</details>
<details className="py-4">
<summary className="cursor-pointer font-semibold">Le paiement confirme-t-il à lui seul une place ?</summary>
<p className="mt-2 text-slate-600">Non. La confirmation intervient après paiement réussi et contrôle de la capacité.</p>
</details>
</div>
<section className="mt-7 rounded-3xl border border-[#F6B632] bg-[#FFF9EA] p-7 text-center md:p-10">
<h2 className="text-xl font-bold text-[#1E3A5F]">Prêt à préparer sereinement l’entrée en prépa ?</h2>
<p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">Remplissez le formulaire pour vérifier que le Stage correspond à la situation de votre enfant et connaître les places disponibles.</p>
<div className="mt-6 flex justify-center"><Button href={STAGE_FORM_URL} unavailableText="Les inscriptions au Stage seront disponibles prochainement. Pour toute question, contactez-nous par e-mail.">Vérifier mon éligibilité et m’inscrire</Button></div>
<p className="mt-5 text-sm leading-6 text-slate-600">Une question avant de commencer ? Utilisez la <a href="/contact" className="font-semibold text-blue-700 underline">page Contact</a> ou écrivez à <Email />.</p>
</section>
</section>
</Shell>}

export function StageRegistration(){return <Shell eyebrow="Stage Choc Prépa · demande d’inscription" title="Vérifier l’éligibilité" intro="Le formulaire permet de vérifier que le Stage correspond à la situation de l’étudiant.">
<section className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
<p className="leading-7 text-slate-700">La demande ne constitue pas une inscription définitive. Après validation de l’éligibilité, le paiement est proposé dans le parcours externe ;
la place n’est confirmée qu’après paiement réussi et contrôle de capacité.</p>
<div className="mt-7">
<Button href={STAGE_FORM_URL} unavailableText="Les inscriptions au Stage seront disponibles prochainement. Pour toute question, contactez-nous par e-mail.">Ouvrir le formulaire d’inscription</Button>
</div>
<p className="mt-6 text-sm">
<a href="/cgv" className="underline">CGV</a> · <a href="/confidentialite" className="underline">Confidentialité</a> · <a href="/retractation" className="underline">Rétractation</a> · <a href="/contact" className="underline">Contact</a>
</p>
</section>
</Shell>}

export function AccompanimentLanding(){
const requestReceived=new URLSearchParams(window.location.search).get("demande")==="recue";
return <Shell eyebrow="Accompagnement de mathématiques en prépa" title="Retrouver une méthode claire pour avancer en prépa." intro="Un cycle de 12 semaines en petit groupe pour travailler les mathématiques, l’organisation et la confiance face au rythme de la CPGE." action={requestReceived?null:<><Button variant="hero" href="/orientation">Réserver un échange d’orientation</Button><p className="mt-3 text-sm leading-6 text-slate-200">Un échange téléphonique de 5 minutes pour faire le point sur votre situation.</p></>}>
{requestReceived&&<section className="mt-8 rounded-3xl border border-emerald-200 bg-emerald-50 p-6 text-[#1E3A5F] shadow-sm sm:p-7"><p className="text-sm font-bold uppercase tracking-[0.14em] text-emerald-700">Demande bien transmise</p><h2 className="mt-2 text-2xl font-bold">Merci, votre échange d’orientation est réservé.</h2><p className="mt-3 max-w-3xl leading-7 text-slate-700">Je vous appellerai depuis le 06 69 26 55 98 dans les disponibilités indiquées. En attendant, vous pouvez découvrir le fonctionnement de l’accompagnement ci-dessous.</p></section>}
<section className="mt-10 grid overflow-hidden rounded-3xl border border-blue-100 bg-white shadow-[0_18px_45px_rgba(30,58,95,0.08)] lg:grid-cols-[0.85fr_1.15fr]">
  <img src="/Samuel_Ducros_Presentation.jpeg" alt="Samuel Ducros, professeur de mathématiques et accompagnant CPGE" className="h-72 w-full object-cover object-top lg:h-full" />
  <div className="p-7 sm:p-10">
    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Une situation fréquente en prépa</p>
    <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-[#1E3A5F]">Votre enfant travaille, mais ne sait plus quoi faire en priorité ?</h2>
    <p className="mt-5 max-w-2xl leading-7 text-slate-600">Le passage en prépa bouleverse souvent les repères : les méthodes du lycée ne suffisent plus toujours, les exercices s’accumulent et une mauvaise note peut rapidement faire douter.</p>
    <ul className="mt-7 grid gap-3">
      <li className="relative rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 pl-14 text-sm leading-6 text-slate-700"><span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F6B632] text-xs font-black text-[#1E3A5F]">01</span><strong className="block text-[#1E3A5F]">Le travail ne se transforme pas toujours en progrès.</strong> Beaucoup d’efforts, sans savoir quels exercices choisir ni comment les exploiter.</li>
      <li className="relative rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 pl-14 text-sm leading-6 text-slate-700"><span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F6B632] text-xs font-black text-[#1E3A5F]">02</span><strong className="block text-[#1E3A5F]">Les mathématiques deviennent un point de blocage.</strong> Les premiers DS peuvent faire perdre confiance et brouiller les priorités.</li>
      <li className="relative rounded-2xl border border-slate-100 bg-slate-50 px-4 py-3 pl-14 text-sm leading-6 text-slate-700"><span className="absolute left-4 top-4 flex h-7 w-7 items-center justify-center rounded-full bg-[#F6B632] text-xs font-black text-[#1E3A5F]">03</span><strong className="block text-[#1E3A5F]">L’organisation n’est plus tenable.</strong> Il faut retrouver un cadre réaliste, sans ajouter une pression inutile.</li>
    </ul>
  </div>
</section>

<section className="mt-12">
  <p className="text-center text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Le format en un coup d’œil</p>
  <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl bg-[#1E3A5F] p-6 text-white"><p className="text-4xl font-black text-[#F6B632]">12</p><p className="mt-2 font-bold">semaines de cycle</p><p className="mt-1 text-sm leading-6 text-slate-200">Un cadre suffisamment long pour installer de nouvelles habitudes.</p></div>
    <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6"><p className="text-4xl font-black text-[#1E3A5F]">2 h</p><p className="mt-2 font-bold">chaque semaine</p><p className="mt-1 text-sm leading-6 text-slate-600">Une séance collective en ligne, à créneau fixe.</p></div>
    <div className="rounded-2xl border border-[#F6B632]/60 bg-[#FFF9EA] p-6"><p className="text-4xl font-black text-[#1E3A5F]">3</p><p className="mt-2 font-bold">étudiants maximum</p><p className="mt-1 text-sm leading-6 text-slate-600">Un petit groupe pour participer, se confronter et progresser.</p></div>
    <div className="rounded-2xl border border-slate-200 bg-white p-6"><p className="text-4xl font-black text-[#1E3A5F]">30 min</p><p className="mt-2 font-bold">de flash coaching</p><p className="mt-1 text-sm leading-6 text-slate-600">Une réunion collective facultative chaque semaine pour les déblocages ponctuels.</p></div>
  </div>
</section>

<section className="mt-14">
  <div className="max-w-2xl">
    <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Pendant le cycle</p>
    <h2 className="mt-3 text-3xl font-bold text-[#1E3A5F]">Passer de « je ne sais pas par où commencer » à un plan de travail concret.</h2>
  </div>
  <div className="mt-7 grid gap-5 lg:grid-cols-3">
    <article className="rounded-3xl border border-blue-100 bg-blue-50 p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F] font-bold text-[#F6B632]">1</span><h3 className="mt-5 text-xl font-bold">Comprendre et trier</h3><p className="mt-3 leading-7 text-slate-700">Repérer les priorités, choisir les bons exercices et savoir quoi faire lorsqu’un chapitre semble flou.</p></article>
    <article className="rounded-3xl border border-[#F6B632]/60 bg-[#FFF9EA] p-7"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1E3A5F] font-bold text-[#F6B632]">2</span><h3 className="mt-5 text-xl font-bold">Travailler les mathématiques</h3><p className="mt-3 leading-7 text-slate-700">Développer le raisonnement, apprendre à chercher et utiliser un corrigé pour réellement progresser.</p></article>
    <article className="rounded-3xl bg-[#1E3A5F] p-7 text-white"><span className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F6B632] font-bold text-[#1E3A5F]">3</span><h3 className="mt-5 text-xl font-bold">Installer une méthode durable</h3><p className="mt-3 leading-7 text-slate-200">Construire une organisation tenable, prendre du recul sur les difficultés et avancer avec davantage d’autonomie.</p></article>
  </div>
</section>

<section className={`mt-14 gap-5 ${requestReceived?"":"grid lg:grid-cols-[1.2fr_0.8fr]"}`}>
  <div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Le bon cadre</p><h2 className="mt-3 text-3xl font-bold text-[#1E3A5F]">Un accompagnement collectif, exigeant et attentif.</h2><p className="mt-5 leading-7 text-slate-600">Il s’adresse aux étudiants de première ou deuxième année de CPGE scientifique, ainsi qu’aux Terminales qui veulent anticiper cette transition. L’étudiant doit avoir une vraie envie de s’impliquer et d’expérimenter les méthodes proposées.</p></div>
  {!requestReceived&&<div className="rounded-3xl border border-blue-200 bg-blue-50 p-7 sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Première étape</p><h2 className="mt-3 text-2xl font-bold text-[#1E3A5F]">Faire le point, sans engagement.</h2><p className="mt-4 leading-7 text-slate-700">Un échange de 5 minutes permet de comprendre rapidement la situation de l’étudiant et de vérifier si ce format peut lui convenir.</p><a href="/orientation" className="mt-6 inline-flex rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white transition hover:bg-[#16304f]">Réserver un échange <span className="ml-2">→</span></a></div>}
</section>

<section className="mt-14 overflow-hidden rounded-3xl border border-[#F6B632] bg-[#FFF9EA] shadow-sm lg:grid lg:grid-cols-[0.72fr_1.28fr]">
  <div className="bg-[#F6B632] p-8 text-[#1E3A5F] sm:p-10"><p className="text-sm font-bold uppercase tracking-[0.14em]">Cycle complet · 12 semaines</p><p className="mt-4 text-5xl font-black">1 110 €</p><p className="mt-2 text-lg font-bold">TTC</p><p className="mt-6 text-sm leading-6">Un prix transparent, pour un cadre et un accompagnement clairement définis.</p></div>
  <div className="p-8 sm:p-10"><h2 className="text-2xl font-bold text-[#1E3A5F]">Un tarif clair, des modalités simples.</h2><p className="mt-4 leading-7 text-slate-700">Règlement comptant ou en trois échéances mensuelles de <strong>370 €</strong> par virement bancaire, sans frais, sans intérêt, sans abonnement ni reconduction automatique.</p><p className="mt-4 text-sm leading-6 text-slate-500">TVA non applicable, article 293 B du CGI. L’échange d’orientation permet de vérifier l’adéquation du format avant toute proposition de contrat.</p></div>
</section>

<Plaquette url={ACCOMPANIMENT_BROCHURE_URL} compact />

<section className="mt-14 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9">
  <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Le parcours</p><h2 className="mt-3 text-3xl font-bold text-[#1E3A5F]">Une entrée en quatre étapes simples.</h2>
  <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <div className="rounded-2xl bg-[#F8FAFC] p-5"><span className="text-sm font-black text-[#3B82F6]">01</span><p className="mt-3 font-bold">Échange d’orientation</p></div>
    <div className="rounded-2xl bg-[#F8FAFC] p-5"><span className="text-sm font-black text-[#3B82F6]">02</span><p className="mt-3 font-bold">Diagnostic et réponse à vos questions</p></div>
    <div className="rounded-2xl bg-[#F8FAFC] p-5"><span className="text-sm font-black text-[#3B82F6]">03</span><p className="mt-3 font-bold">Contrat individualisé et annexe</p></div>
    <div className="rounded-2xl bg-[#F8FAFC] p-5"><span className="text-sm font-black text-[#3B82F6]">04</span><p className="mt-3 font-bold">Virement et confirmation de place</p></div>
  </div>
</section>

<section className="mt-12">
  <h2 className="text-2xl font-bold text-[#1E3A5F]">Questions fréquentes</h2>
  <div className="mt-4 divide-y divide-slate-200">{[['À qui s’adresse l’accompagnement ?','Aux étudiants de première ou deuxième année de CPGE scientifique, ainsi qu’aux Terminales qui souhaitent anticiper cette transition.'],['Pourquoi réserver un échange d’orientation ?','Il permet de répondre à vos premières questions, de comprendre rapidement la situation de l’étudiant et de vérifier si l’accompagnement peut correspondre à ses besoins.'],['L’échange garantit-il une place ?','Non : une place peut être pré-réservée après accord sur un créneau, jusqu’à la date écrite dans le contrat. Elle est confirmée après acceptation du contrat, première échéance reçue et validation finale du groupe.'],['L’accompagnement est-il individuel ?','Non : il se déroule en petit groupe de trois étudiants maximum.'],['Comment poser une question avant de commencer ?','Écrivez à contact@samuel-ducros.fr ou utilisez la page Contact.']].map(([q,a])=><details key={q} className="py-5"><summary className="cursor-pointer font-semibold text-[#1E3A5F]">{q}</summary><p className="mt-3 leading-7 text-slate-600">{a}</p></details>)}</div>
</section>

{!requestReceived&&<section className="mt-12 rounded-3xl bg-[#1E3A5F] p-8 text-center text-white sm:p-12"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#F6B632]">Avant de décider</p><h2 className="mx-auto mt-3 max-w-2xl text-3xl font-bold">Vérifions ensemble si cet accompagnement correspond à sa situation.</h2><p className="mx-auto mt-4 max-w-2xl leading-7 text-slate-200">Réservez un échange téléphonique de 5 minutes. Vous pourrez expliquer votre contexte et connaître la suite la plus adaptée.</p><div className="mt-7 flex justify-center"><Button variant="hero" href="/orientation">Réserver un échange d’orientation</Button></div><p className="mt-5 text-sm text-slate-300">Une question ? Écrivez à <a className="font-semibold text-white underline underline-offset-4" href="mailto:contact@samuel-ducros.fr">contact@samuel-ducros.fr</a>.</p></section>}
</Shell>}

const OrientationQuestion=({children})=><div id="orientation-question" className="h-full min-h-0 overflow-y-auto rounded-3xl bg-white p-6 shadow-[0_20px_55px_rgba(30,58,95,0.14)] ring-1 ring-slate-200 sm:p-10">{children}</div>;
const OrientationShell=({step,totalSteps,children})=>{const isIntro=step===0;return <main className="h-[100dvh] overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e0edff,_#f8fafc_52%,_#fff9ea)] px-4 py-3 text-[#1E3A5F] sm:px-8 sm:py-7"><div className="mx-auto flex h-full max-w-2xl flex-col"><header className="flex shrink-0 items-center justify-between gap-4"><a href="/" className="font-bold text-[#1E3A5F]">Samuel Ducros<span className="hidden text-sm font-medium text-slate-500 sm:inline"> · Accompagnement CPGE</span></a><a href="/" className="text-sm font-semibold text-blue-700 underline underline-offset-4">Quitter</a></header><div className="flex min-h-0 flex-1 flex-col justify-center py-3 sm:py-5"><section className="shrink-0 rounded-2xl border border-blue-100 bg-white/80 p-4 sm:p-5 shadow-sm"><div className="flex items-center justify-between gap-4 text-sm font-semibold text-[#1E3A5F]"><span>{isIntro?'Un échange rapide':`Étape ${step} sur ${totalSteps}`}</span><span>{isIntro?'2 minutes':`${Math.round((step/totalSteps)*100)} %`}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100"><div className="h-full rounded-full bg-[#3B82F6] transition-all duration-500" style={{width:`${(step/totalSteps)*100}%`}} /></div></section><form autoComplete="off" className="min-h-0 flex-1 pt-4">{children}</form></div></div></main>};

const ORIENTATION_SLOTS=[
  'Lundi · 20 h – 20 h 30',
  'Mardi · 19 h – 19 h 30',
  'Mercredi · 12 h 30 – 13 h',
  'Samedi · 18 h – 18 h 30',
  'Dimanche · 11 h 30 – 12 h'
];

const TurnstileWidget=({onToken})=>{
  const containerRef=useRef(null);
  useEffect(()=>{
    let cancelled=false;
    const render=()=>{
      if(cancelled||!containerRef.current||!window.turnstile)return;
      window.turnstile.render(containerRef.current,{
        sitekey:ORIENTATION_TURNSTILE_SITE_KEY,
        action:'orientation_request',
        theme:'light',
        appearance:'interaction-only',
        callback:onToken,
        'expired-callback':()=>onToken(''),
        'error-callback':()=>onToken('')
      });
    };
    const existing=document.querySelector('script[data-turnstile-script]');
    if(existing){
      if(window.turnstile)render();
      else existing.addEventListener('load',render,{once:true});
    }else{
      const script=document.createElement('script');
      script.src='https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
      script.async=true;
      script.defer=true;
      script.dataset.turnstileScript='true';
      script.addEventListener('load',render,{once:true});
      document.head.appendChild(script);
    }
    return()=>{cancelled=true;};
  },[onToken]);
  return <div ref={containerRef} aria-label="Vérification anti-spam"/>;
};

const TextOrientationQuestion=({eyebrow,title,label,name,type='text',value,onChange,onNext,onBack,status,placeholder,inputMode})=><OrientationQuestion><p className="text-sm font-bold uppercase tracking-[.14em] text-[#3B82F6]">{eyebrow}</p><h2 className="mt-2 text-3xl font-bold">{title}</h2><label className="mt-7 block font-semibold text-slate-700">{label}<input autoFocus name={name} type={type} value={value} onChange={e=>onChange(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();onNext();}}} className="mt-2 w-full rounded-xl border border-slate-300 p-4 text-lg font-normal text-slate-900" autoComplete="off" inputMode={inputMode} placeholder={placeholder} /></label><div className="mt-6 flex gap-3">{onBack&&<button type="button" onClick={onBack} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button>}<button type="button" onClick={onNext} className="rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white">Continuer <span className="ml-2">→</span></button></div>{status&&<p className="mt-4 text-sm text-red-700">{status}</p>}</OrientationQuestion>;

export function OrientationPage(){
useEffect(()=>{
  const scrollY=window.scrollY;
  const html=document.documentElement;
  const body=document.body;
  html.classList.add('orientation-form-open');
  body.classList.add('orientation-form-open');
  body.style.top='-'+scrollY+'px';
  return()=>{
    html.classList.remove('orientation-form-open');
    body.classList.remove('orientation-form-open');
    body.style.top='';
    window.scrollTo(0,scrollY);
  };
},[]);
const [step,setStep]=useState(0);
const [fullName,setFullName]=useState('');
const [email,setEmail]=useState('');
const [phone,setPhone]=useState('');
const [level,setLevel]=useState('');
const [otherTrack,setOtherTrack]=useState('');
const [notes,setNotes]=useState('');
const [slots,setSlots]=useState([]);
const [availability,setAvailability]=useState('');
const [status,setStatus]=useState('');
const [sending,setSending]=useState(false);
const [turnstileToken,setTurnstileToken]=useState('');
const [turnstileKey,setTurnstileKey]=useState(0);
const direct=Boolean(ORIENTATION_ENDPOINT);
const totalSteps=3;
const isPlausiblePhone=value=>{
  const trimmed=value.trim();
  const digits=trimmed.replace(/\D/g,'');
  return /^\+?[0-9\s().-]+$/.test(trimmed)&&digits.length>=7&&digits.length<=15;
};
const nextContact=()=>{
  if(!fullName.trim()||!email.trim()||!phone.trim()){setStatus('Indiquez votre prénom et votre nom, votre e-mail et votre numéro de téléphone.');return;}
  if(!/^\S+@\S+\.\S+$/.test(email.trim())){setStatus('Indiquez une adresse e-mail valide.');return;}
  if(!isPlausiblePhone(phone)){setStatus('Indiquez un numéro de téléphone valide.');return;}
  setStatus('');setStep(2);
};
const nextSituation=()=>{
  if(!level){setStatus('Choisissez la situation la plus proche.');return;}
  if(level==='Autre'&&!otherTrack.trim()){setStatus('Précisez la formation ou la situation.');return;}
  setStatus('');setStep(3);
};
const toggleSlot=slot=>setSlots(current=>current.includes(slot)?current.filter(value=>value!==slot):[...current,slot]);
const submit=async e=>{
  e.preventDefault();
  if(!slots.length&&!availability.trim()){setStatus('Choisissez au moins un créneau ou indiquez une disponibilité.');return;}
  if(!direct){setStatus('Le questionnaire est prêt, mais son envoi est encore en cours de configuration.');return;}
  if(!turnstileToken){setStatus('La vérification anti-spam est en cours. Patientez un instant, puis réessayez.');return;}
  const query=new URLSearchParams(window.location.search);
  const nameParts=fullName.trim().split(/\s+/);
  const firstName=nameParts.shift()||'';
  const lastName=nameParts.join(' ');
  const payload={kind:'orientation_request',firstName,lastName,fullName:fullName.trim(),email,phone,level,otherTrack,notes,preferredSlots:slots,availability,sourceUrl:window.location.href,trackingSource:query.get('utm_source')||'Direct / non identifié',trackingMedium:query.get('utm_medium')||'',trackingCampaign:query.get('utm_campaign')||'',trackingAdSet:query.get('utm_term')||'',trackingAd:query.get('utm_content')||'',referrer:document.referrer||'',turnstileToken,submittedAt:new Date().toISOString()};
  setSending(true);setStatus('');
  try{
    const response=await fetch(ORIENTATION_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const result=await response.json().catch(()=>null);
    if(!response.ok)throw new Error(result?.message||'L’envoi n’a pas abouti. Réessayez dans quelques instants ou écrivez à contact@samuel-ducros.fr.');
    window.location.assign('/accompagnement?demande=recue');
  }catch(error){setTurnstileToken('');setTurnstileKey(current=>current+1);setStatus(error.message||'L’envoi n’a pas abouti. Réessayez dans quelques instants ou écrivez à contact@samuel-ducros.fr.');}
  finally{setSending(false);}
};
let content;
if(step===0) content=<OrientationQuestion><div className="mx-auto flex min-h-full max-w-xl flex-col justify-center"><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Échange d’orientation · 5 minutes</p><h1 className="mt-2 text-3xl font-black tracking-tight text-[#1E3A5F] sm:text-4xl">Faisons le point, simplement.</h1><p className="mt-3 text-lg leading-7 text-slate-600">En trois courtes étapes, indiquez votre situation et un créneau. Je vous rappelle ensuite pour un premier échange utile.</p><div className="mt-6 flex items-center gap-3 rounded-2xl bg-blue-50 p-4 text-sm font-semibold text-[#1E3A5F]"><span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-100 text-blue-700">3</span><span>étapes · environ 2 minutes · sans engagement</span></div><button type="button" onClick={()=>setStep(1)} className="mt-6 w-full rounded-xl bg-[#1E3A5F] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#152d4a]">Faire le point <span className="ml-2">→</span></button></div></OrientationQuestion>;
if(step===1) content=<OrientationQuestion><div className="mx-auto max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Pour vous rappeler</p><h2 className="mt-2 text-3xl font-bold">Comment vous joindre ?</h2><p className="mt-3 leading-7 text-slate-600">Ces coordonnées servent uniquement à préparer et confirmer notre échange.</p><div className="mt-6 grid gap-4"><label className="block font-semibold text-slate-700">Prénom et nom<input autoFocus name="orientation_full_name" value={fullName} onChange={e=>setFullName(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3.5 text-lg font-normal text-slate-900" autoComplete="name" placeholder="Prénom Nom" /></label><label className="block font-semibold text-slate-700">Adresse e-mail<input name="orientation_email" type="email" value={email} onChange={e=>setEmail(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3.5 text-lg font-normal text-slate-900" autoComplete="email" inputMode="email" /></label><label className="block font-semibold text-slate-700">Numéro de téléphone<input name="orientation_phone" type="tel" value={phone} onChange={e=>setPhone(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3.5 text-lg font-normal text-slate-900" autoComplete="tel" inputMode="tel" placeholder="06 12 34 56 78" /></label></div><div className="mt-6 flex gap-3"><button type="button" onClick={()=>setStep(0)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button><button type="button" onClick={nextContact} className="flex-1 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white">Continuer <span className="ml-2">→</span></button></div>{status&&<p className="mt-4 text-sm text-red-700" role="alert">{status}</p>}</div></OrientationQuestion>;
if(step===2) content=<OrientationQuestion><div className="mx-auto max-w-xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Pour mieux comprendre</p><h2 className="mt-2 text-3xl font-bold">Où en est l’étudiant ?</h2><p className="mt-3 leading-7 text-slate-600">Une réponse rapide suffit.</p><label className="mt-6 block font-semibold text-slate-700">Situation<select value={level} onChange={e=>{setLevel(e.target.value);setStatus('');}} className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3.5 text-base font-normal text-slate-900"><option value="">Choisir une situation</option><option value="Terminale - projet CPGE scientifique">Terminale — projet de CPGE scientifique</option><option value="1re année de CPGE scientifique">Première année de CPGE scientifique</option><option value="2e année de CPGE scientifique">Deuxième année de CPGE scientifique</option><option value="Autre">Autre situation</option></select></label>{level==='Autre'&&<label className="mt-4 block font-semibold text-slate-700">Préciser<input name="orientation_other" value={otherTrack} onChange={e=>setOtherTrack(e.target.value)} className="mt-2 w-full rounded-xl border border-slate-300 p-3.5 font-normal text-slate-900" autoComplete="off" placeholder="Par exemple : prépa intégrée, BUT, licence…" /></label>}<label className="mt-5 block font-semibold text-slate-700">Un mot sur la situation <span className="font-medium text-slate-400">(facultatif)</span><textarea name="orientation_notes" value={notes} onChange={e=>setNotes(e.target.value)} rows="3" placeholder="Difficulté en maths, besoin de méthode, objectif…" className="mt-2 w-full resize-none rounded-xl border border-slate-300 px-4 py-3 font-normal text-slate-900" autoComplete="off" /></label><div className="mt-6 flex gap-3"><button type="button" onClick={()=>setStep(1)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button><button type="button" onClick={nextSituation} className="flex-1 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white">Choisir un créneau <span className="ml-2">→</span></button></div>{status&&<p className="mt-4 text-sm text-red-700" role="alert">{status}</p>}</div></OrientationQuestion>;
if(step===3) content=<OrientationQuestion><div className="mx-auto max-w-xl"><p className="text-sm font-bold uppercase tracking-[.14em] text-[#3B82F6]">Dernière étape</p><h2 className="mt-2 text-3xl font-bold">Quand vous rappeler ?</h2><p className="mt-3 leading-7 text-slate-600">Choisissez un ou plusieurs créneaux. Vous pouvez aussi écrire une autre disponibilité.</p><div className="mt-5 grid gap-2">{ORIENTATION_SLOTS.map(slot=><label key={slot} className={`cursor-pointer rounded-xl border px-4 py-3.5 transition ${slots.includes(slot)?'border-[#1E3A5F] bg-blue-50':'border-slate-200 hover:border-blue-300'}`}><input type="checkbox" checked={slots.includes(slot)} onChange={()=>toggleSlot(slot)} className="mr-3" /><span className="font-semibold text-[#1E3A5F]">{slot}</span></label>)}</div><label className="mt-4 block rounded-xl border border-slate-200 p-4 font-semibold text-[#1E3A5F]">Autre disponibilité <span className="font-medium text-slate-400">(facultatif)</span><textarea value={availability} onChange={e=>setAvailability(e.target.value)} rows="2" placeholder="Par exemple : jeudi après-midi" className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal text-slate-900" autoComplete="off" /></label><p className="mt-4 text-xs leading-5 text-slate-500">Vos informations servent uniquement à traiter votre demande, conformément à la <a href="/confidentialite" className="underline">politique de confidentialité</a>.</p><div className="mt-4"><TurnstileWidget key={turnstileKey} onToken={setTurnstileToken}/></div><div className="mt-5 flex gap-3"><button type="button" onClick={()=>setStep(2)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button><button type="button" disabled={sending} onClick={submit} className="flex-1 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white disabled:opacity-60">{sending?'Envoi en cours…':'Demander un échange'} <span className="ml-2">→</span></button></div>{status&&<p className="mt-4 text-sm text-red-700" role="alert">{status}</p>}</div></OrientationQuestion>;
return <OrientationShell step={step} totalSteps={totalSteps}><div key={step} className="orientation-step h-full">{content}</div></OrientationShell>;
}

export function OrientationRequestReceived(){return <Shell eyebrow="Échange d’orientation" title="Votre demande a bien été transmise." intro="Je vous appellerai depuis le 06 69 26 55 98 dans les disponibilités que vous avez indiquées. Pensez à garder votre téléphone à proximité." action={<a href="/accompagnement" className="inline-flex rounded-xl bg-[#F6B632] px-5 py-3 font-bold text-[#1E3A5F]">Découvrir l’accompagnement <span className="ml-2">→</span></a>}/> }
export function StagePaymentReceived(){return <Shell eyebrow="Stage Choc Prépa" title="Votre paiement a bien été reçu." intro="Nous terminons maintenant la vérification de votre inscription. Vous recevrez un e-mail de confirmation avec les prochaines étapes. Pensez à consulter votre dossier de courriers indésirables."/>}

export function AccompanimentRequestReceived(){return <Shell eyebrow="Accompagnement CPGE" title="Votre demande a bien été transmise." intro="Nous allons vérifier si l’accompagnement correspond à la situation de l’étudiant. Si le profil est adapté, nous vous expliquerons par e-mail les prochaines étapes, dont le diagnostic, le contrat individualisé et son annexe. Pensez à consulter votre dossier de courriers indésirables."/>}

export function ContactConfirmation(){return <Shell eyebrow="Contact" title="Votre message a bien été envoyé." intro="Nous vous répondrons directement par e-mail. Pensez à consulter votre dossier de courriers indésirables."/>}

export default function ContactPage(){const [status,setStatus]=useState('');const [sending,setSending]=useState(false);const submit=async e=>{e.preventDefault();const data=new FormData(e.currentTarget);if(data.get('website'))return;const payload={name:data.get('name'),email:data.get('email'),subject:data.get('subject'),message:data.get('message')};if(!CONTACT_ENDPOINT){const subject=encodeURIComponent(`[${payload.subject}] ${payload.name}`);const body=encodeURIComponent(`Nom : ${payload.name}\nE-mail : ${payload.email}\n\n${payload.message}`);window.location.href=`mailto:contact@samuel-ducros.fr?subject=${subject}&body=${body}`;return;}setSending(true);setStatus('');try{const response=await fetch(CONTACT_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});if(!response.ok)throw new Error();window.location.assign('/contact/message-envoye');}catch{setStatus('L’envoi n’a pas abouti. Veuillez réessayer ou nous écrire directement par e-mail.');}finally{setSending(false);}};const direct=Boolean(CONTACT_ENDPOINT);return <Shell eyebrow="Contact" title="Nous contacter" intro="Utilisez ce formulaire ou écrivez directement à contact@samuel-ducros.fr.">
<form onSubmit={submit} className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200">
<div className="grid gap-5 sm:grid-cols-2">
<label>Nom<input required name="name" className="mt-2 w-full rounded-xl border border-slate-300 p-3" />
</label>
<label>Adresse e-mail<input required type="email" name="email" className="mt-2 w-full rounded-xl border border-slate-300 p-3" />
</label>
</div>
<label className="mt-5 block">Objet<select required name="subject" className="mt-2 w-full rounded-xl border border-slate-300 p-3">
<option value="Accompagnement">Accompagnement</option>
<option value="Autre">Autre</option>
</select>
</label>
<label className="mt-5 block">Message<textarea required name="message" rows="6" className="mt-2 w-full rounded-xl border border-slate-300 p-3" />
</label>
<label className="sr-only">Ne pas remplir<input name="website" tabIndex="-1" autoComplete="off" />
</label>
<label className="mt-5 flex gap-3 text-sm text-slate-600">
<input required type="checkbox"/>
<span>J’accepte que ces informations soient utilisées pour répondre à ma demande, conformément à la <a href="/confidentialite" className="underline">politique de confidentialité</a>.</span>
</label>
<button disabled={sending} className="mt-6 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white disabled:opacity-60">{sending?'Envoi en cours…':direct?'Envoyer le message':'Préparer l’e-mail'}</button>{!direct&&<p className="mt-4 text-sm text-slate-500">Votre messagerie va s’ouvrir : vous devrez ensuite envoyer le message depuis celle-ci.</p>}{status&&<p className="mt-4 text-sm text-red-700" role="alert">{status}</p>}</form>
</Shell>}
