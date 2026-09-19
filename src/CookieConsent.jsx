import { useEffect, useState } from 'react';

const CONSENT_KEY = 'samuel-ducros-cookie-consent';
const CONSENT_MAX_AGE = 180 * 24 * 60 * 60 * 1000;

export const readCookieConsent = () => {
  try {
    const saved = JSON.parse(window.localStorage.getItem(CONSENT_KEY) || 'null');
    if (!saved || !saved.choice || !saved.savedAt || Date.now() - saved.savedAt > CONSENT_MAX_AGE) return null;
    return saved.choice;
  } catch {
    return null;
  }
};

export default function CookieConsent() {
  const [choice, setChoice] = useState(() => readCookieConsent());
  const [isOpen, setIsOpen] = useState(() => !readCookieConsent());

  useEffect(() => {
    const openPreferences = () => setIsOpen(true);
    window.addEventListener('open-cookie-preferences', openPreferences);
    return () => window.removeEventListener('open-cookie-preferences', openPreferences);
  }, []);

  const saveChoice = (nextChoice) => {
    const value = { choice: nextChoice, savedAt: Date.now() };
    try { window.localStorage.setItem(CONSENT_KEY, JSON.stringify(value)); } catch {}
    setChoice(nextChoice);
    setIsOpen(false);
    window.dispatchEvent(new CustomEvent('cookie-consent-change', { detail: value }));
    if (choice === 'accepted' && nextChoice === 'refused') window.location.reload();
  };

  if (!isOpen) return null;

  const isUpdate = Boolean(choice);
  return <div className="fixed inset-x-0 bottom-0 z-[100] p-4 sm:p-6" role="dialog" aria-modal="true" aria-labelledby="cookie-consent-title">
    <div className="mx-auto max-w-3xl rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_18px_55px_rgba(15,23,42,0.25)] sm:p-6">
      <p className="text-sm font-bold uppercase tracking-[0.14em] text-[#3B82F6]">Vos choix de confidentialité</p>
      <h2 id="cookie-consent-title" className="mt-2 text-xl font-bold text-[#1E3A5F]">{isUpdate ? 'Modifier vos choix' : 'Cookies et mesure de nos campagnes'}</h2>
      <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-600">Avec votre accord, des traceurs publicitaires Meta pourront mesurer l’intérêt pour nos campagnes et l’envoi d’une demande d’orientation. Refuser ne change rien à l’accès au site ni au formulaire.</p>
      <p className="mt-2 text-sm leading-6 text-slate-600">Vous pourrez modifier votre choix à tout moment depuis le lien « Cookies » en bas de page. <a className="font-semibold text-blue-700 underline" href="/confidentialite">En savoir plus</a>.</p>
      <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:justify-end">
        <button type="button" onClick={() => saveChoice('refused')} className="min-h-11 rounded-xl border-2 border-[#1E3A5F] px-5 py-3 text-sm font-bold text-[#1E3A5F] transition hover:bg-slate-50">Tout refuser</button>
        <button type="button" onClick={() => saveChoice('accepted')} className="min-h-11 rounded-xl border-2 border-[#1E3A5F] px-5 py-3 text-sm font-bold text-[#1E3A5F] transition hover:bg-slate-50">Tout accepter</button>
      </div>
    </div>
  </div>;
}
