import { useEffect } from 'react';
import { readCookieConsent } from './CookieConsent';
import { META_PIXEL_ID } from './siteConfig';

const PIXEL_SCRIPT_ID = 'meta-pixel-script';

const loadMetaPixel = () => new Promise((resolve, reject) => {
  if (window.fbq) return resolve();

  window.fbq = function fbq(...args) {
    window.fbq.callMethod ? window.fbq.callMethod(...args) : window.fbq.queue.push(args);
  };
  window.fbq.queue = [];
  window.fbq.loaded = true;
  window.fbq.version = '2.0';
  window._fbq = window.fbq;
  window.fbq('init', META_PIXEL_ID);

  const script = document.createElement('script');
  script.id = PIXEL_SCRIPT_ID;
  script.async = true;
  script.src = 'https://connect.facebook.net/en_US/fbevents.js';
  script.onload = resolve;
  script.onerror = reject;
  document.head.appendChild(script);
});

export default function MetaPixel() {
  useEffect(() => {
    if (import.meta.env.DEV || !META_PIXEL_ID) return undefined;
    let cancelled = false;

    const trackCurrentPage = () => {
      if (readCookieConsent() !== 'accepted') return;
      loadMetaPixel().then(() => {
        if (cancelled) return;
        const pageKey = window.location.pathname + window.location.search;
        if (window.__samuelMetaTrackedPage === pageKey) return;
        window.__samuelMetaTrackedPage = pageKey;
        window.fbq('track', 'PageView');
        if (window.location.pathname === '/orientation/demande-recue') {
          window.fbq('track', 'Lead', { content_name: 'Demande d’orientation' });
        }
      }).catch(() => {});
    };

    const onConsentChange = (event) => {
      if (event.detail?.choice === 'accepted') trackCurrentPage();
    };

    trackCurrentPage();
    window.addEventListener('cookie-consent-change', onConsentChange);
    return () => {
      cancelled = true;
      window.removeEventListener('cookie-consent-change', onConsentChange);
    };
  }, []);

  return null;
}
