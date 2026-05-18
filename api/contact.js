// Vercel Serverless Function. Lives at /api/contact (Node.js runtime).
// Sits alongside the Next.js static export — Vercel detects /api/ at the
// project root and deploys it as a Function regardless of `output: 'export'`.

const escapeHtml = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = req.body && typeof req.body === 'object' ? req.body : {};

  if (body._gotcha) return res.status(200).json({ ok: true });

  const name = String(body.name ?? '').trim();
  const email = String(body.email ?? '').trim();
  const subject = String(body.subject ?? '').trim();
  const message = String(body.message ?? '').trim();

  if (!name || !email || !subject || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }
  if (!EMAIL_RE.test(email) || email.length > 254) {
    return res.status(400).json({ error: 'Invalid email address' });
  }
  if (message.length > 10000) {
    return res.status(400).json({ error: 'Message too long' });
  }

  const apiKey = process.env.BREVO_API_KEY;
  if (!apiKey) {
    console.error('BREVO_API_KEY is not set');
    return res.status(500).json({ error: 'Email service not configured' });
  }

  const safeName = escapeHtml(name);
  const safeSubject = escapeHtml(subject);
  const safeMessage = escapeHtml(message).replace(/\n/g, '<br>');

  try {
    const brevoRes = await fetch('https://api.brevo.com/v3/smtp/email', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': apiKey,
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        sender: { name: 'meetmikeobrien.com Contact Form', email: 'obrienmike@gmail.com' },
        to: [{ email: 'obrienmike@gmail.com', name: "Mike O'Brien" }],
        replyTo: { email, name },
        subject: `meetmikeobrien.com: ${subject}`,
        htmlContent:
          `<h2>New Contact Form Submission</h2>` +
          `<p><strong>Name:</strong> ${safeName}</p>` +
          `<p><strong>Email:</strong> ${escapeHtml(email)}</p>` +
          `<p><strong>Subject:</strong> ${safeSubject}</p>` +
          `<hr><p>${safeMessage}</p>`,
      }),
    });

    if (brevoRes.ok) return res.status(200).json({ ok: true });

    const detail = await brevoRes.text().catch(() => '');
    console.error('Brevo error', brevoRes.status, detail);
    return res.status(502).json({
      error: 'Failed to send email',
      brevoStatus: brevoRes.status,
      brevoBody: detail.slice(0, 500),
    });
  } catch (err) {
    console.error('Contact handler exception', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
