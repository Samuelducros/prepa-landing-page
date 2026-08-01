const QUALIFICATION_FORM_URL = '';
const PRIVATE_CALENDAR_URL = '';

function Action({ href, children, privateLink = false }) {
  if (href) {
    return <a href={href} className="inline-flex items-center rounded-xl bg-[#1E3A5F] px-5 py-3 font-bold text-white hover:bg-[#16304f]">{children}<span className="ml-2">→</span></a>;
  }

  return <span className="inline-flex cursor-not-allowed items-center rounded-xl bg-slate-300 px-5 py-3 font-bold text-slate-600">{children}<small className="ml-2 rounded bg-white/60 px-2 py-0.5 uppercase">{privateLink ? 'lien privé à configurer' : 'à connecter'}</small></span>;
}

function Shell({ eyebrow, title, intro, children }) {
  return <main className="min-h-screen bg-[#F8FAFC] px-5 py-8 text-[#1E3A5F] sm:px-8 sm:py-12"><article className="mx-auto max-w-5xl"><a href="/" className="text-sm font-semibold text-blue-600 hover:underline">← Retour au site</a><header className="mt-8 rounded-3xl bg-white px-6 py-9 shadow-sm ring-1 ring-slate-200 sm:px-10"><p className="text-sm font-bold uppercase tracking-[0.16em] text-blue-600">{eyebrow}</p><h1 className="mt-3 text-3xl font-bold tracking-tight sm:text-5xl">{title}</h1><p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{intro}</p></header>{children}</article></main>;
}

function Step({ n, title, children }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"><span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F6B632] font-bold text-[#1E3A5F]">{n}</span><h2 className="mt-4 text-lg font-bold">{title}</h2><p className="mt-2 leading-7 text-slate-600">{children}</p></div>;
}

export function AccompanimentHome() {
  return <Shell eyebrow="Accompagnement Prépa" title="Un accompagnement méthodologique pour avancer avec méthode" intro="Un parcours individuel et collectif pour les élèves de Terminale visant une CPGE et les étudiant·es de CPGE scientifique. La première étape est toujours une qualification écrite.">
    <section className="mt-8 grid gap-5 md:grid-cols-3"><div className="rounded-2xl bg-[#1E3A5F] p-6 text-white"><p className="text-sm font-bold uppercase text-[#F6B632]">Méthode</p><p className="mt-3 text-lg font-semibold">Organisation, rigueur et autonomie</p></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-bold uppercase text-blue-600">Parcours</p><p className="mt-3 text-lg font-semibold">Qualification écrite puis diagnostic</p></div><div className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"><p className="text-sm font-bold uppercase text-blue-600">Rendez-vous</p><p className="mt-3 text-lg font-semibold">Créneau privé envoyé après qualification</p></div></section>

    <section className="mt-10 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10"><h2 className="text-2xl font-bold">Comment ça fonctionne ?</h2><div className="mt-6 grid gap-4 md:grid-cols-3"><Step n="1" title="Qualification écrite">Le parent ou l’élève décrit brièvement la situation, les objectifs et les disponibilités.</Step><Step n="2" title="Analyse">La demande est examinée pour vérifier l’adéquation avec le parcours et le groupe potentiel.</Step><Step n="3" title="Diagnostic réservé">Si le profil est qualifié, un lien privé permet de réserver un diagnostic Zoom sur un créneau disponible.</Step></div></section>

    <section className="mt-8 grid gap-5 md:grid-cols-[1.3fr_0.7fr]"><div className="rounded-3xl border border-[#F6B632] bg-[#FFF9EA] p-7"><h2 className="text-xl font-bold">Commencer la qualification</h2><p className="mt-3 leading-7 text-slate-700">Le questionnaire est la seule porte d’entrée. Il ne garantit ni admission, ni créneau de diagnostic, ni place dans un accompagnement.</p><div className="mt-6"><Action href={QUALIFICATION_FORM_URL}>Compléter le questionnaire</Action></div><p className="mt-4 text-sm leading-6 text-slate-500">Le lien Tally sera ajouté après validation et avant ouverture publique.</p></div><aside className="rounded-3xl bg-[#1E3A5F] p-7 text-white"><h2 className="text-lg font-bold">À prévoir</h2><ul className="mt-4 space-y-3 text-sm leading-6 text-slate-200"><li>• Filière et niveau actuel</li><li>• Objectifs principaux</li><li>• Difficultés rencontrées</li><li>• Disponibilités pour un diagnostic</li></ul></aside></section>
  </Shell>;
}

export function AccompanimentQualification() {
  return <Shell eyebrow="Accompagnement Prépa · qualification" title="Décrire votre situation" intro="Le questionnaire prépare la qualification écrite. Il ne constitue pas une inscription et ne donne pas accès directement à un créneau de diagnostic.">
    <section className="mt-8 grid gap-5 md:grid-cols-[1.25fr_0.75fr]"><div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9"><h2 className="text-2xl font-bold">Formulaire de qualification</h2><div className="mt-5 space-y-4 text-slate-700"><p>Le formulaire Tally recueillera uniquement les informations utiles :</p><ul className="space-y-2 leading-7"><li>• identité et e-mail du parent / responsable légal ;</li><li>• prénom de l’élève, niveau et filière ;</li><li>• objectif, difficultés et disponibilité ;</li><li>• accord sur la politique de confidentialité.</li></ul></div><div className="mt-7"><Action href={QUALIFICATION_FORM_URL}>Ouvrir le questionnaire</Action></div><p className="mt-4 text-sm leading-6 text-slate-500">À connecter au formulaire Tally final. La réponse complétera PROSPECTS, sans créer de doublon.</p></div><aside className="rounded-3xl border border-slate-200 bg-slate-50 p-7"><h2 className="text-lg font-bold">Après l’envoi</h2><p className="mt-3 leading-7 text-slate-600">La demande est qualifiée par écrit. Seuls les profils qualifiés reçoivent par e-mail un lien individuel de réservation.</p></aside></section>
  </Shell>;
}

export function DiagnosticBooking() {
  return <Shell eyebrow="Accompagnement Prépa · diagnostic" title="Réserver un diagnostic" intro="Cette page n’est accessible qu’après qualification. Le lien Google Agenda et la réunion Zoom restent privés : ils ne sont jamais affichés sur une page publique.">
    <section className="mt-8 grid gap-5 md:grid-cols-[1.25fr_0.75fr]"><div className="rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-9"><h2 className="text-2xl font-bold">Choisir un créneau</h2><p className="mt-3 leading-7 text-slate-700">Le lien ci-dessous sera envoyé uniquement par e-mail à un parent dont la demande a été qualifiée. Chaque créneau créé dans Google Agenda doit inclure le lien Zoom et les informations pratiques.</p><div className="mt-7"><Action href={PRIVATE_CALENDAR_URL} privateLink>Accéder aux créneaux privés</Action></div><p className="mt-4 text-sm leading-6 text-slate-500">URL Google Agenda à renseigner après paramétrage des créneaux et de Zoom.</p></div><aside className="rounded-3xl bg-[#1E3A5F] p-7 text-white"><p className="text-sm font-bold uppercase text-[#F6B632]">Diagnostic</p><p className="mt-4 text-lg font-semibold leading-8">Un rendez-vous réservé permet d’évaluer la situation et de présenter la suite pertinente.</p><p className="mt-4 text-sm leading-6 text-slate-200">La réservation ne vaut pas inscription à un accompagnement.</p></aside></section>
  </Shell>;
}

export function DiagnosticConfirmation() {
  return <Shell eyebrow="Accompagnement Prépa · diagnostic" title="Demande de rendez-vous enregistrée" intro="Votre créneau est en cours de confirmation. Vous recevrez l’invitation Google Agenda avec le lien Zoom à l’adresse renseignée.">
    <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm ring-1 ring-slate-200 sm:p-10"><h2 className="text-2xl font-bold">Prochaine étape</h2><p className="mt-3 max-w-3xl leading-7 text-slate-700">Conservez l’e-mail de confirmation. Pour reporter ou annuler un rendez-vous, utilisez le lien prévu dans l’invitation Google Agenda ou contactez Samuel avant le créneau.</p><a href="/" className="mt-7 inline-block font-bold text-blue-700 hover:underline">Retour au site →</a></section>
  </Shell>;
}
