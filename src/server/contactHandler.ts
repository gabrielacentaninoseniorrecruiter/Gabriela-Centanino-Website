import nodemailer from 'nodemailer';

export interface ContactPayload {
  name: string;
  email: string;
  company?: string;
  helpType: string;
  message: string;
}

export async function sendContactEmail(payload: ContactPayload): Promise<{
  success: boolean;
  message: string;
  smtpConfigured: boolean;
  error?: string;
}> {
  const { name, email, company, helpType, message } = payload;

  const targetRecipient = process.env.RECIPIENT_EMAIL || 'gabriela.cent.seniorrecruiter@gmail.com';
  const smtpUser = process.env.SMTP_USER;
  const smtpPass = process.env.SMTP_PASS;
  const smtpHost = process.env.SMTP_HOST || 'smtp.gmail.com';
  const smtpPort = Number(process.env.SMTP_PORT) || 465;
  const smtpSecure = process.env.SMTP_SECURE === 'true' || smtpPort === 465;
  const smtpFrom = process.env.SMTP_FROM || `"Gabriela Centanino Website" <${smtpUser || targetRecipient}>`;

  // HTML template for executive-level presentation
  const htmlBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #F3EFE6; color: #0F2A47; padding: 24px; margin: 0; }
    .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #E5DFD1; border-top: 4px solid #D6B465; border-radius: 4px; overflow: hidden; box-shadow: 0 4px 12px rgba(15,42,71,0.06); }
    .header { background-color: #102A43; color: #FAF8F5; padding: 24px 32px; }
    .header h1 { margin: 0; font-size: 20px; font-weight: 600; letter-spacing: 0.5px; }
    .header p { margin: 6px 0 0; color: #D6B465; font-size: 12px; text-transform: uppercase; letter-spacing: 1.5px; }
    .content { padding: 32px; }
    .field { margin-bottom: 20px; }
    .field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 1px; color: #8A7B60; font-weight: 700; margin-bottom: 4px; }
    .field-value { font-size: 15px; color: #0F2A47; line-height: 1.5; font-weight: 500; }
    .message-box { background-color: #FAF8F5; border: 1px solid #E6DFCF; border-left: 3px solid #D6B465; padding: 16px; font-size: 14px; line-height: 1.6; color: #0F2A47; border-radius: 2px; white-space: pre-wrap; }
    .footer { background-color: #F8F5EE; padding: 18px 32px; font-size: 12px; color: #6E7C87; border-top: 1px solid #E6DFCF; }
    .reply-btn { display: inline-block; background-color: #0F2A47; color: #ffffff !important; text-decoration: none; padding: 10px 20px; border-radius: 2px; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 1px; margin-top: 12px; }
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
        <div class="field-value">${escapeHtml(name)}</div>
      </div>
      <div class="field">
        <div class="field-label">Email Address</div>
        <div class="field-value"><a href="mailto:${escapeHtml(email)}" style="color: #0F2A47; text-decoration: underline;">${escapeHtml(email)}</a></div>
      </div>
      <div class="field">
        <div class="field-label">Company / Organization</div>
        <div class="field-value">${company ? escapeHtml(company) : '<em>Not specified</em>'}</div>
      </div>
      <div class="field">
        <div class="field-label">Practice Area / Focus</div>
        <div class="field-value" style="color: #BA9544; font-weight: 700;">${escapeHtml(helpType)}</div>
      </div>
      <div class="field">
        <div class="field-label">Project Message &amp; Context</div>
        <div class="message-box">${escapeHtml(message)}</div>
      </div>
      <div style="margin-top: 24px;">
        <a href="mailto:${escapeHtml(email)}?subject=Re:%20Consultation%20Inquiry%20-%20Gabriela%20Centanino" class="reply-btn">Reply to ${escapeHtml(name)}</a>
      </div>
    </div>
    <div class="footer">
      Sent via Gabriela Centanino's executive consultancy website. Received at ${new Date().toUTCString()}.
    </div>
  </div>
</body>
</html>
  `;

  const textBody = `
New Consultation Inquiry for Gabriela Centanino
-----------------------------------------------
Name: ${name}
Email: ${email}
Company: ${company || 'Not specified'}
Practice Area: ${helpType}

Message:
${message}

-----------------------------------------------
Reply directly to: ${email}
Received: ${new Date().toUTCString()}
  `;

  // Check if SMTP credentials are provided
  if (!smtpUser || !smtpPass) {
    console.warn(
      '[SMTP WARNING] SMTP_USER or SMTP_PASS environment variables are not set in .env. Form inquiry was logged successfully to server console.',
      { name, email, company, helpType, targetRecipient }
    );

    return {
      success: true,
      smtpConfigured: false,
      message:
        'Inquiry logged. (Note: To dispatch via live SMTP, configure SMTP_USER and SMTP_PASS in .env or cloud environment secrets).',
    };
  }

  try {
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const info = await transporter.sendMail({
      from: smtpFrom,
      to: targetRecipient,
      replyTo: `"${name}" <${email}>`,
      subject: `New Inquiry from ${name} [${helpType}]`,
      text: textBody,
      html: htmlBody,
    });

    console.log('[SMTP SUCCESS] Email delivered successfully to', targetRecipient, 'MessageId:', info.messageId);

    return {
      success: true,
      smtpConfigured: true,
      message: 'Your inquiry has been sent directly to Gabriela Centanino via secure email.',
    };
  } catch (error: any) {
    console.error('[SMTP ERROR] Failed to send email via SMTP:', error);
    return {
      success: false,
      smtpConfigured: true,
      message: 'Failed to send message via SMTP server.',
      error: error?.message || 'SMTP delivery error',
    };
  }
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
