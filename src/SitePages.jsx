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

export function AccompanimentLanding(){return <Shell eyebrow="Accompagnement CPGE en groupe" title="12 semaines pour progresser avec méthode" intro="Douze séances collectives en ligne de deux heures, en groupe de trois étudiants maximum, pour travailler méthode, organisation, mathématiques et confiance." action={<>
<Button variant="hero" href="/orientation">Réserver un échange d’orientation</Button>
<p className="mt-3 text-sm leading-6 text-slate-200">Un échange téléphonique de 5 minutes pour faire le point sur votre situation.</p>
</>}>
<section className="mt-8">
<p className="mb-4 text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">L’essentiel</p>
<div className="grid gap-5 md:grid-cols-3">
<Card variant="blue" title="Pour qui ?">Terminale visant une CPGE scientifique, première ou deuxième année de CPGE scientifique.</Card>
<Card variant="yellow" title="Le cycle">12 semaines, 12 séances collectives en ligne de 2 h, groupes de trois étudiants maximum et créneau hebdomadaire fixe.</Card>
<Card variant="navy" title="Ce qui est travaillé">Méthodes, organisation, efficacité, confiance, stress et mathématiques. Une réunion collective hebdomadaire de flash coaching de 30 minutes, commune à tous les étudiants, est incluse mais facultative.</Card>
</div>
</section>
<section className="mt-10 grid overflow-hidden rounded-3xl border border-blue-200 bg-white shadow-sm md:grid-cols-[0.8fr_1.2fr]">
<div className="bg-[#1E3A5F] p-7 text-white sm:p-9"><span className="block h-1 w-10 rounded bg-[#F6B632]"/><p className="mt-5 text-sm font-bold uppercase tracking-[0.14em] text-[#F6B632]">Première étape</p><p className="mt-3 text-2xl font-bold leading-tight">Faire le point sur votre situation.</p></div>
<div className="p-7 sm:p-9"><h2 className="text-2xl font-bold">Comment commencer ?</h2><p className="mt-3 max-w-2xl leading-7 text-slate-700">Réservez un échange d’orientation de 5 minutes pour faire le point sur votre situation. Si l’accompagnement paraît adapté, la suite éventuelle vous sera expliquée à l’issue de cet échange.</p><a href="/orientation" className="mt-6 inline-flex rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white transition hover:bg-[#16304f] focus:outline-none focus:ring-2 focus:ring-[#3B82F6] focus:ring-offset-2">Réserver un échange d’orientation <span className="ml-2">→</span></a></div>
</section>
<section className="mt-12">
<div className="mb-5 max-w-2xl"><p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Pendant le cycle</p><h2 className="mt-2 text-3xl font-bold">Un cadre clair pour avancer durablement</h2></div>
<div className="accompaniment-cycle-grid grid min-w-0 grid-cols-1 gap-5 md:grid-cols-2">
<Card variant="blue" title="Axes de travail">
<ul>
<li>• organisation et priorisation ;</li>
<li>• méthodes de travail actives ;</li>
<li>• mathématiques et raisonnement ;</li>
<li>• efficacité face aux exercices et aux blocages ;</li>
<li>• confiance, stress et autonomie.</li>
</ul>
<p className="mt-3">Ces axes guident le travail ;
ils ne constituent pas une garantie de résultat.</p>
</Card>
<Card variant="yellow" title="Fonctionnement">Le cycle comprend 12 séances collectives en ligne de 2 h, avec trois étudiants maximum par groupe et un créneau hebdomadaire fixe. Une seule réunion collective hebdomadaire de flash coaching de 30 minutes, commune à tous les étudiants de tous les groupes, est incluse mais facultative. Elle permet des questions et déblocages ponctuels, sans constituer une séance individuelle ni garantir le traitement de chaque question.</Card>
<Card variant="default" title="Engagement attendu">Une demande réelle de l’étudiant, une participation active, la volonté de tester les méthodes proposées et l’acceptation du fonctionnement collectif comme du créneau fixe.</Card>
<Card variant="navy" title="Limites">Obligation de moyens, sans garantie de résultat : ce n’est ni une solution miracle ni un accompagnement individuel permanent. L’admission dépend de l’adéquation du profil et de la capacité des groupes.</Card>
</div>
</section>
<section className="mt-10 overflow-hidden rounded-3xl border border-[#F6B632] bg-[#FFF9EA] shadow-sm md:grid md:grid-cols-[0.8fr_1.2fr]">
<div className="bg-[#F6B632] p-7 text-[#1E3A5F] sm:p-9"><p className="text-sm font-bold uppercase tracking-[0.14em]">Tarif du cycle</p><p className="mt-3 text-4xl font-bold">1 110 €</p><p className="mt-2 font-semibold">TTC</p></div>
<div className="p-7 sm:p-9"><h2 className="text-2xl font-bold">Prix et modalités de règlement</h2><p className="mt-3 leading-7 text-slate-700">Règlement comptant ou en 3 échéances mensuelles de 370 € par virement bancaire, sans frais, sans intérêt, sans abonnement ni reconduction automatique.</p><p className="mt-3 text-sm leading-6 text-slate-600">TVA non applicable, article 293 B du CGI.</p></div>
</section>
<Plaquette url={ACCOMPANIMENT_BROCHURE_URL} compact />
<section className="mt-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9">
<p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Le parcours</p><h2 className="mt-2 text-3xl font-bold">Déroulement de l’entrée</h2>
<div className="mt-7 grid gap-4 sm:grid-cols-2">{["Réservation d’un échange d’orientation","Échange et diagnostic","Contrat individualisé et annexe","Virement puis confirmation de place"].map((step,index)=>
<div key={step} className="flex gap-4 rounded-2xl border border-slate-100 bg-[#F8FAFC] p-5">
<span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F] font-bold text-[#F6B632]">{index+1}</span>
<p className="self-center font-semibold text-[#1E3A5F]">{step}</p>
</div>)}</div>
</section>
<section className="mt-8">
<h2 className="text-2xl font-bold">FAQ Accompagnement</h2>
<div className="mt-4 divide-y divide-slate-200">{[['À qui s’adresse l’accompagnement ?','Aux lycéens de Terminale visant une CPGE scientifique et aux étudiants de première ou deuxième année de CPGE scientifique.'],['Pourquoi réserver un échange d’orientation ?','Il permet de répondre à vos premières questions, de comprendre rapidement la situation de l’étudiant et de vérifier si l’accompagnement peut correspondre à ses besoins.'],['L’échange garantit-il une place ?','Non : une place peut être pré-réservée après accord sur un créneau, jusqu’à la date écrite dans le contrat. Elle est confirmée après acceptation du contrat, première échéance reçue et validation finale du groupe.'],['Comment se déroule la suite ?','Après l’échange et le diagnostic, un contrat individualisé et son annexe sont proposés si l’accompagnement est adapté. La confirmation de place est ensuite envoyée par e-mail après virement et validation finale du groupe.'],['L’accompagnement est-il individuel ?','Non : il se déroule en petit groupe de trois étudiants maximum.'],['Comment poser une question avant de commencer ?','Écrivez à contact@samuel-ducros.fr ou utilisez la page Contact.']].map(([q,a])=>
<details key={q} className="py-4">
<summary className="cursor-pointer font-semibold">{q}</summary>
<p className="mt-2 text-slate-600">{a}</p>
</details>)}</div>
<div className="mt-8 rounded-3xl border border-blue-200 bg-blue-50 p-7 text-center md:p-10">
  <h2 className="text-xl font-bold text-[#1E3A5F]">
    L’accompagnement peut-il convenir à votre enfant ?
  </h2>

  <p className="mx-auto mt-3 max-w-2xl leading-7 text-slate-700">
    Réservez un échange téléphonique de 5 minutes pour faire le point sur sa situation
    et vous orienter vers la suite la plus adaptée.
  </p>

  <div className="mt-6 flex justify-center">
    <Button
      href="/orientation"
    >
      Réserver un échange d’orientation
    </Button>
  </div>

  <div className="mt-5 flex flex-wrap items-center justify-center gap-x-1 text-sm leading-6 text-slate-600">
    <span>Une question avant de commencer ?</span>
    <a href="/contact" className="font-semibold text-blue-700 underline">Utilisez la page Contact</a>
    <span>ou écrivez à</span><Email />.
  </div>
</div>
</section>
</Shell>}

const OrientationQuestion=({children})=><div id="orientation-question" className="h-full min-h-0 overflow-y-auto rounded-3xl bg-white p-6 shadow-[0_20px_55px_rgba(30,58,95,0.14)] ring-1 ring-slate-200 sm:p-10">{children}</div>;
const OrientationShell=({step,totalSteps,children})=>{const isIntro=step===0;return <main className="h-[100dvh] overflow-hidden bg-[radial-gradient(circle_at_top_left,_#e0edff,_#f8fafc_52%,_#fff9ea)] px-4 py-3 text-[#1E3A5F] sm:px-8 sm:py-7"><div className="mx-auto flex h-full max-w-2xl flex-col"><header className="flex shrink-0 items-center justify-between gap-4"><a href="/" className="font-bold text-[#1E3A5F]">Samuel Ducros<span className="hidden text-sm font-medium text-slate-500 sm:inline"> · Accompagnement CPGE</span></a><a href="/" className="text-sm font-semibold text-blue-700 underline underline-offset-4">Quitter</a></header><div className="flex min-h-0 flex-1 flex-col justify-center py-3 sm:py-5"><section className="shrink-0 rounded-2xl border border-blue-100 bg-white/80 p-4 sm:p-5 shadow-sm"><div className="flex items-center justify-between gap-4 text-sm font-semibold text-[#1E3A5F]"><span>{isIntro?'Un questionnaire rapide':`Question ${step} sur ${totalSteps}`}</span><span>{isIntro?'Quelques instants':`${Math.round((step/totalSteps)*100)} %`}</span></div><div className="mt-3 h-2 overflow-hidden rounded-full bg-blue-100"><div className="h-full rounded-full bg-[#3B82F6] transition-all duration-500" style={{width:`${(step/totalSteps)*100}%`}} /></div></section><form autoComplete="off" className="min-h-0 flex-1 pt-4">{children}</form></div></div></main>};

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
const [firstName,setFirstName]=useState('');
const [lastName,setLastName]=useState('');
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
const totalSteps=7;
const isPlausiblePhone=value=>{
  const trimmed=value.trim();
  const digits=trimmed.replace(/\D/g,'');
  return /^\+?[0-9\s().-]+$/.test(trimmed)&&digits.length>=7&&digits.length<=15;
};
const next=()=>{
  const values={1:firstName.trim(),2:lastName.trim(),3:email.trim(),4:phone.trim()};
  if(!values[step]){setStatus('Complétez cette réponse pour continuer.');return;}
  if(step===4&&!isPlausiblePhone(phone)){setStatus('Indiquez un numéro de téléphone valide.');return;}
  setStatus('');setStep(current=>Math.min(current+1,totalSteps));
};
const chooseLevel=value=>{
  setLevel(value);setStatus('');
  if(value!=='Autre')setTimeout(()=>setStep(6),220);
};
const nextOther=()=>{
  if(!otherTrack.trim()){setStatus('Indiquez au moins la filière ou la formation.');return;}
  setStatus('');setStep(6);
};
const toggleSlot=slot=>setSlots(current=>current.includes(slot)?current.filter(value=>value!==slot):[...current,slot]);
const submit=async e=>{
  e.preventDefault();
  if(!slots.length&&!availability.trim()){setStatus('Choisissez au moins un créneau ou indiquez votre disponibilité.');return;}
  if(!direct){setStatus('Le questionnaire est prêt, mais son envoi est encore en cours de configuration.');return;}
  if(!turnstileToken){setStatus('La vérification anti-spam est en cours. Patientez un instant, puis réessayez.');return;}
  const query=new URLSearchParams(window.location.search);
  const payload={kind:'orientation_request',firstName,lastName,fullName:[firstName,lastName].filter(Boolean).join(' '),email,phone,level,otherTrack,notes,preferredSlots:slots,availability,sourceUrl:window.location.href,trackingSource:query.get('utm_source')||'Direct / non identifié',trackingMedium:query.get('utm_medium')||'',trackingCampaign:query.get('utm_campaign')||'',trackingAdSet:query.get('utm_term')||'',trackingAd:query.get('utm_content')||'',referrer:document.referrer||'',turnstileToken,submittedAt:new Date().toISOString()};
  setSending(true);setStatus('');
  try{
    const response=await fetch(ORIENTATION_ENDPOINT,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)});
    const result=await response.json().catch(()=>null);
    if(!response.ok)throw new Error(result?.message||'L’envoi n’a pas abouti. Réessayez dans quelques instants ou écrivez à contact@samuel-ducros.fr.');
    window.location.assign('/orientation/demande-recue');
  }catch(error){setTurnstileToken('');setTurnstileKey(current=>current+1);setStatus(error.message||'L’envoi n’a pas abouti. Réessayez dans quelques instants ou écrivez à contact@samuel-ducros.fr.');}
  finally{setSending(false);}
};
let content;
if(step===0) content=<OrientationQuestion><div className="mx-auto flex min-h-full max-w-xl flex-col justify-center"><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Échange d’orientation · 5 minutes</p><h1 className="mt-2 text-3xl font-black tracking-tight text-[#1E3A5F] sm:mt-3 sm:text-4xl">Préparons notre échange.</h1><p className="mt-3 leading-7 text-slate-600 sm:mt-5 sm:text-lg sm:leading-8">Ce questionnaire me permet de comprendre la situation de l’élève et de préparer un appel vraiment utile.</p><ul className="mt-6 space-y-3 text-sm leading-6 text-slate-600"><li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-blue-100 font-bold text-blue-700">1</span><span>Quelques informations essentielles : niveau, coordonnées et disponibilités.</span></li><li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-amber-100 font-bold text-amber-700">2</span><span>Un espace facultatif pour partager une difficulté ou un objectif.</span></li><li className="flex gap-3"><span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-100 font-bold text-emerald-700">3</span><span>Je vous appelle ensuite dans l’un des créneaux indiqués.</span></li></ul><p className="mt-6 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-500">Ce questionnaire ne vaut ni inscription ni engagement.</p><button type="button" onClick={()=>setStep(1)} className="mt-6 w-full rounded-xl bg-[#1E3A5F] px-6 py-3.5 text-base font-bold text-white transition hover:bg-[#152d4a]">Commencer</button></div></OrientationQuestion>;
  if(step===1) content=<TextOrientationQuestion eyebrow="Pour commencer" title="Quel est votre prénom ?" label="Prénom" name="orientation_first_name" value={firstName} onChange={setFirstName} onNext={next} status={status} />;
if(step===2) content=<TextOrientationQuestion eyebrow="Question 2" title="Et votre nom ?" label="Nom" name="orientation_last_name" value={lastName} onChange={setLastName} onNext={next} onBack={()=>setStep(1)} status={status} />;
if(step===3) content=<TextOrientationQuestion eyebrow="Question 3" title="Quelle est votre adresse e-mail ?" label="Adresse e-mail" name="orientation_email" type="email" value={email} onChange={setEmail} onNext={next} onBack={()=>setStep(2)} status={status} />;
if(step===4) content=<TextOrientationQuestion eyebrow="Question 4" title="À quel numéro peut-on vous joindre ?" label="Numéro de téléphone" name="orientation_phone" type="tel" value={phone} onChange={setPhone} onNext={next} onBack={()=>setStep(3)} status={status} inputMode="tel" placeholder="06 12 34 56 78" />;
if(step===5) content=<OrientationQuestion><p className="text-sm font-bold uppercase tracking-[.14em] text-[#3B82F6]">Question 5</p><h2 className="mt-2 text-3xl font-bold">Quelle est la situation de l’étudiant ?</h2><p className="mt-3 leading-7 text-slate-600">Choisissez la réponse la plus proche.</p><div className="mt-7 grid gap-3">{[['Terminale - projet CPGE scientifique','Terminale — projet de CPGE scientifique'],['1re année de CPGE scientifique','Première année de CPGE scientifique'],['2e année de CPGE scientifique','Deuxième année de CPGE scientifique'],['Autre','Autre situation']].map(([value,label])=><button type="button" key={value} onClick={()=>chooseLevel(value)} className={`rounded-2xl border p-5 text-left font-bold text-[#1E3A5F] transition ${level===value?'border-[#1E3A5F] bg-blue-50':'border-slate-200 hover:border-[#3B82F6] hover:bg-blue-50'}`}>{label}<span className="float-right">→</span></button>)}</div>{level==='Autre'&&<div className="mt-5 rounded-2xl border border-blue-100 bg-blue-50/60 p-5"><label className="block font-semibold text-slate-700">Préciser<input autoFocus name="orientation_other" value={otherTrack} onChange={e=>setOtherTrack(e.target.value)} onKeyDown={e=>{if(e.key==='Enter'){e.preventDefault();nextOther();}}} className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-4 text-lg font-normal text-slate-900" autoComplete="off" placeholder="Par exemple : prépa intégrée, BUT, licence…" /></label><button type="button" onClick={nextOther} className="mt-5 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white">Continuer <span className="ml-2">→</span></button></div>}<button type="button" onClick={()=>setStep(4)} className="mt-6 rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button>{status&&<p className="mt-4 text-sm text-red-700">{status}</p>}</OrientationQuestion>;
if(step===6) content=<OrientationQuestion><div className="mx-auto flex min-h-full max-w-xl flex-col justify-center"><p className="text-sm font-bold uppercase tracking-[0.14em] text-blue-700">Question 6 · Facultatif</p><h1 className="mt-2 text-3xl font-black tracking-tight text-[#1E3A5F] sm:mt-3">Un peu plus de contexte ?</h1><p className="mt-3 leading-7 text-slate-600 sm:mt-4 sm:text-lg sm:leading-8">Un objectif, une difficulté, une matière concernée ou une question : cela m’aidera à préparer notre échange.</p><label htmlFor="orientation-notes" className="mt-6 block text-sm font-bold text-slate-700">Votre message <span className="font-medium text-slate-400">(facultatif)</span></label><textarea id="orientation-notes" name="orientation_notes" rows="4" autoComplete="off" value={notes} onChange={e=>setNotes(e.target.value)} placeholder="Ex. : difficultés en maths, projet d’intégrer une école précise, besoin de méthode…" className="mt-2 w-full resize-none rounded-xl border border-slate-300 bg-white px-4 py-3 text-base text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-blue-600 focus:ring-4 focus:ring-blue-100" /><div className="mt-6 flex gap-3"><button type="button" onClick={()=>setStep(5)} className="flex-1 rounded-xl border border-slate-300 px-5 py-3 font-bold text-slate-700">Retour</button><button type="button" onClick={()=>setStep(7)} className="flex-1 rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white transition hover:bg-[#152d4a]">Continuer</button></div></div></OrientationQuestion>;
  if(step===7) content=<OrientationQuestion><p className="text-sm font-bold uppercase tracking-[.14em] text-[#3B82F6]">Dernière question</p><h2 className="mt-2 text-3xl font-bold">Quels créneaux vous conviendraient ?</h2><p className="mt-3 leading-7 text-slate-600">Cochez un ou plusieurs créneaux possibles. Je vous appellerai dans l’une des disponibilités indiquées.</p><div className="mt-7 grid gap-3">{ORIENTATION_SLOTS.map(slot=><label key={slot} className={`cursor-pointer rounded-2xl border p-5 transition ${slots.includes(slot)?'border-[#1E3A5F] bg-blue-50':'border-slate-200 hover:border-blue-300'}`}><input type="checkbox" checked={slots.includes(slot)} onChange={()=>toggleSlot(slot)} className="mr-3" /><span className="font-bold text-[#1E3A5F]">{slot}</span></label>)}</div><label className="mt-5 block rounded-2xl border border-slate-200 p-5 font-semibold text-[#1E3A5F]">Aucun de ces créneaux ne convient<textarea value={availability} onChange={e=>setAvailability(e.target.value)} rows="3" placeholder="Indiquez simplement vos disponibilités." className="mt-3 w-full rounded-xl border border-slate-300 p-3 font-normal text-slate-900" autoComplete="off" /></label><p className="mt-7 text-sm leading-6 text-slate-600">Vos informations sont utilisées uniquement pour traiter votre demande d’orientation, conformément à la <a href="/confidentialite" className="underline">politique de confidentialité</a>.</p><div className="mt-5"><TurnstileWidget key={turnstileKey} onToken={setTurnstileToken}/></div><div className="mt-6 flex flex-wrap gap-3"><button type="button" onClick={()=>setStep(6)} className="rounded-xl border border-slate-300 px-5 py-3 font-bold text-[#1E3A5F]">Retour</button><button type="button" disabled={sending} onClick={submit} className="rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white disabled:opacity-60">{sending?'Envoi en cours…':'Envoyer ma demande'} <span className="ml-2">→</span></button></div>{status&&<p className="mt-4 text-sm text-red-700" role="alert">{status}</p>}</OrientationQuestion>;
return <OrientationShell step={step} totalSteps={totalSteps}><div key={step} className="orientation-step h-full">{content}</div></OrientationShell>;
}

export function OrientationRequestReceived(){return <Shell eyebrow="Échange d’orientation" title="Votre demande a bien été transmise." intro="Je vous appellerai depuis le 06 69 26 55 98 dans les disponibilités que vous avez indiquées. Pensez à garder votre téléphone à proximité."/>}
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
