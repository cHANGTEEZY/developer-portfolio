/** Escape user-controlled strings for safe inclusion in HTML email bodies. */
export function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export function buildContactEmailHtml(params: {
  name: string
  email: string
  message: string
}): string {
  const { name, email, message } = params
  const safeName = escapeHtml(name)
  const safeEmail = escapeHtml(email)
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br/>")
  const initials = escapeHtml(
    name
      .trim()
      .split(/\s+/)
      .map((w) => w[0]?.toUpperCase() ?? "")
      .slice(0, 2)
      .join("")
  )

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8"/>
  <meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body style="margin:0;padding:0;background:#0a0a0a;font-family:ui-sans-serif,system-ui,-apple-system,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#0a0a0a;padding:40px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Header -->
          <tr>
            <td style="padding-bottom:28px;">
              <p style="margin:0;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.08em;color:#555;text-transform:uppercase;">VBEE Studio</p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background:#141414;border-radius:16px;border:1px solid #242424;padding:32px;">

              <!-- Label -->
              <p style="margin:0 0 20px;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.06em;color:#555;text-transform:uppercase;">New inquiry</p>

              <!-- Sender row -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
                <tr>
                  <td width="40" valign="middle">
                    <div style="width:40px;height:40px;border-radius:50%;background:#1e1e1e;border:1px solid #2a2a2a;text-align:center;line-height:40px;font-size:13px;font-weight:600;color:#fff;">${initials}</div>
                  </td>
                  <td style="padding-left:12px;" valign="middle">
                    <p style="margin:0;font-size:15px;font-weight:600;color:#fff;">${safeName}</p>
                    <p style="margin:2px 0 0;font-size:13px;color:#666;">${safeEmail}</p>
                  </td>
                </tr>
              </table>

              <!-- Divider -->
              <div style="height:1px;background:#1f1f1f;margin-bottom:24px;"></div>

              <!-- Message -->
              <p style="margin:0 0 8px;font-family:ui-monospace,monospace;font-size:11px;letter-spacing:0.06em;color:#555;text-transform:uppercase;">Message</p>
              <div style="background:#0f0f0f;border:1px solid #1f1f1f;border-radius:10px;padding:20px;">
                <p style="margin:0;font-size:15px;line-height:1.75;color:#d4d4d4;">${safeMessage}</p>
              </div>

              <!-- Reply CTA -->
              <table width="100%" cellpadding="0" cellspacing="0" style="margin-top:28px;">
                <tr>
                  <td>
                    <a href="mailto:${safeEmail}?subject=Re: your message&body=%0A%0A----%0AFrom: ${safeName}" style="display:inline-block;background:#fff;color:#000;font-size:13px;font-weight:600;text-decoration:none;padding:10px 22px;border-radius:8px;letter-spacing:0.01em;">Reply to ${safeName} →</a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;">
              <p style="margin:0;font-size:12px;color:#3a3a3a;text-align:center;">Submitted via <a href="https://vbee.studio" style="color:#555;text-decoration:none;">vbee.studio</a> contact form</p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`
}

export function buildContactEmailText(params: {
  name: string
  email: string
  message: string
}): string {
  return `New inquiry — VBEE Studio

From:    ${params.name}
Email:   ${params.email}

Message:
${params.message}

---
Reply directly to this email to respond to ${params.name}.
Submitted via vbee.studio`
}
