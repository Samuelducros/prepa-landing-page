const JSON_HEADERS = {
  'content-type': 'application/json; charset=UTF-8',
  'cache-control': 'no-store',
};

const json = (status, body) => new Response(JSON.stringify(body), {
  status,
  headers: JSON_HEADERS,
});

const handleOrientationRequest = async (request, env) => {
  if (request.method !== 'POST') {
    return json(405, { ok: false, message: 'Méthode non autorisée.' });
  }

  if (!env.TURNSTILE_SECRET || !env.MAKE_ORIENTATION_WEBHOOK_URL || !env.TURNSTILE_HOSTNAMES) {
    return json(503, { ok: false, message: 'Le formulaire est momentanément indisponible.' });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return json(400, { ok: false, message: 'Données de formulaire invalides.' });
  }

  const { turnstileToken, ...makePayload } = payload || {};
  if (!turnstileToken) {
    return json(403, { ok: false, message: 'La vérification anti-spam est requise.' });
  }

  const expectedHostnames = new Set(
    env.TURNSTILE_HOSTNAMES.split(',').map(value => value.trim()).filter(Boolean),
  );

  const verification = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      secret: env.TURNSTILE_SECRET,
      response: turnstileToken,
      remoteip: request.headers.get('CF-Connecting-IP') || '',
    }),
  });
  const result = await verification.json();

  if (!result.success || result.action !== 'orientation_request' || !expectedHostnames.has(result.hostname)) {
    return json(403, { ok: false, message: 'La vérification anti-spam a échoué. Réessaie dans un instant.' });
  }

  const makeResponse = await fetch(env.MAKE_ORIENTATION_WEBHOOK_URL, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(makePayload),
  });

  if (!makeResponse.ok) {
    return json(502, { ok: false, message: 'La demande n’a pas pu être transmise. Réessaie dans un instant.' });
  }

  return json(200, { ok: true });
};

export async function onRequestPost({ request, env }) {
  return handleOrientationRequest(request, env);
}

export async function onRequest({ request }) {
  return json(405, { ok: false, message: "Méthode non autorisée." });
}
