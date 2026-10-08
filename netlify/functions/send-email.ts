import type { Handler, HandlerEvent, HandlerContext } from '@netlify/functions';
import nodemailer from 'nodemailer';

interface ContactRequestBody {
  name?: string;
  email?: string;
  company?: string;
  helpType?: string;
  message?: string;
}

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Content-Type': 'application/json',
};

export const handler: Handler = async (event: HandlerEvent, _context: HandlerContext) => {
  // Handle CORS preflight
  if (event.httpMethod === 'OPTIONS') {
    return {
      statusCode: 204,
      headers: CORS_HEADERS,
      body: '',
    };
  }

  // Only allow POST
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Method not allowed. Use POST.' }),
    };
  }

  // Parse and validate request body
  let body: ContactRequestBody;
  try {
    body = JSON.parse(event.body || '{}');
  } catch {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Malformed request payload.' }),
    };
  }

  const name = typeof body.name === 'string' ? body.name.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const company = typeof body.company === 'string' ? body.company.trim() : '';
  const helpType = typeof body.helpType === 'string' ? body.helpType.trim() : '';
  const message = typeof body.message === 'string' ? body.message.trim() : '';

  // Required field validation
  if (!name || !email || !helpType || !message) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Please provide all required fields (name, email, service, and message).' }),
    };
  }

  // Email format validation (RFC 5322 standard check)
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email) || email.length > 254) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Please provide a valid email address.' }),
    };
  }

  if (message.length < 10) {
    return {
      statusCode: 400,
      headers: CORS_HEADERS,
      body: JSON.stringify({ error: 'Message must be at least 10 characters long.' }),
    };
  }

  // Read environment variables - NEVER hardcode credentials
  const smtpHost = process.env.SMTP_HOST;
  const smtpPortRaw = process.env.SMTP_PORT;
  const smtpSecureRaw = process.env.SMTP_SECURE;
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpFrom = process.env.SMTP_FROM;
  const recipientEmail = process.env.RECIPIENT_EMAIL;

  // Validate server configuration without exposing sensitive variables
  if (!smtpHost || !smtpUser || !smtpPass || !smtpFrom || !recipientEmail) {
    console.error('Server configuration error: One or more required SMTP environment variables are missing.');
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: 'Email service is currently unavailable. Please contact the administrator directly.',
      }),
    };
  }

  const smtpPort = smtpPortRaw ? parseInt(smtpPortRaw, 10) : 465;
  const isSecure = smtpSecureRaw !== undefined ? smtpSecureRaw === 'true' : smtpPort === 465;

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: isSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeCompany = company ? escapeHtml(company) : 'Not specified';
    const safeHelpType = escapeHtml(helpType);
    const safeMessage = escapeHtml(message);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3EFE6; color: #0F2A47; padding: 24px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E5DFD1; border-top: 4px solid #D6B465; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(15,42,71,0.06); }
    .header { background-color: #102A43; color: #FAF8F5; padding: 24px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; }
    .header p { margin: 6px 0 0; color: #D6B465; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8A7B60; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0F2A47; line-height: 1.5; font-weight: 500; }
    .message-box { background-color: #FAF8F5; border: 1px solid #E6DFCF; border-left: 3px solid #D6B465; padding: 16px; font-size: 14px; line-height: 1.6; color: #0F2A47; border-radius: 2px; white-space: pre-wrap; }
    .footer { background-color: #F8F5EE; padding: 18px 32px; font-size: 12px; color: #6E7C87; border-top: 1px solid #E6DFCF; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1>New Executive Consultation Inquiry</h1>
      <p>Gabriela Centanino · Talent &amp; People Strategy</p>
    </div>
    <div class="content">
      <div class="field">
        <div class="field-label">Sender Name</div>
        <div class="field-value">${safeName}</div>
      </div>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${safeEmail}" style="color: #0F2A47;">${safeEmail}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Company / Organization</div>
        <div class="field-value">${safeCompany}</div>
      </div>
      <div class="field">
        <div class="field-label">Practice Area / Focus</div>
        <div class="field-value" style="color: #BA9544; font-weight: 700;">${safeHelpType}</div>
      </div>
      <div class="field">
        <div class="field-label">Project Message &amp; Context</div>
        <div class="message-box">${safeMessage}</div>
      </div>
    </div>
    <div class="footer">
      Received via website inquiry form at ${new Date().toUTCString()}.
    </div>
  </div>
</body>
</html>
    `;

    const textContent = `
New Consultation Inquiry - Gabriela Centanino
----------------------------------------------
Sender: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Area: ${helpType}

Message:
${message}

Received: ${new Date().toUTCString()}
Reply directly to: ${email}
    `;

    await transporter.sendMail({
      from: smtpFrom,
      to: recipientEmail,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry from ${name} [${helpType}]`,
      text: textContent,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        success: true,
        message: 'Your inquiry has been sent successfully.',
      }),
    };
  } catch (error: any) {
    // Log error safely without exposing credentials
    console.error('Email delivery error occurred during sendMail.');
    return {
      statusCode: 500,
      headers: CORS_HEADERS,
      body: JSON.stringify({
        error: 'Unable to deliver your message at this time. Please try again later.',
      }),
    };
  }
};
