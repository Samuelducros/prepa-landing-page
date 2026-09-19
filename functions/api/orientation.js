const JSON_HEADERS = { 'content-type': 'application/json; charset=UTF-8', 'cache-control': 'no-store' };

const reply = (status, body) => new Response(JSON.stringify(body), { status, headers: JSON_HEADERS });

export async function onRequestPost({ request, env }) {
  if (!env.TURNSTILE_SECRET || !env.MAKE_ORIENTATION_WEBHOOK_URL || !env.TURNSTILE_HOSTNAMES) {
    return reply(503, { error: 'service_unavailable' });
  }

  let payload;
  try {
    payload = await request.json();
  } catch {
    return reply(400, { error: 'invalid_request' });
  }

  if (!payload || payload.kind !== 'orientation_request' || typeof payload.turnstileToken !== 'string' || payload.turnstileToken.length === 0 || payload.turnstileToken.length > 2048) {
    return reply(403, { error: 'verification_failed' });
  }

  const expectedHostnames = new Set(env.TURNSTILE_HOSTNAMES.split(',').map(value => value.trim()).filter(Boolean));
  let verification;
  try {
    const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
      method: 'POST',
      headers: { 'content-type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        secret: env.TURNSTILE_SECRET,
        response: payload.turnstileToken,
        remoteip: request.headers.get('CF-Connecting-IP') || ''
      })
    });
    if (!response.ok) throw new Error('siteverify_failed');
    verification = await response.json();
  } catch {
    return reply(403, { error: 'verification_failed' });
  }

  if (!verification.success || verification.action !== 'orientation_request' || !expectedHostnames.has(verification.hostname)) {
    return reply(403, { error: 'verification_failed' });
  }

  const { turnstileToken, ...makePayload } = payload;
  try {
    const response = await fetch(env.MAKE_ORIENTATION_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(makePayload)
    });
    if (!response.ok) throw new Error('make_failed');
  } catch {
    return reply(502, { error: 'delivery_failed' });
  }

  return reply(200, { ok: true });
}

export async function onRequest() {
  return reply(405, { error: 'method_not_allowed' });
}
