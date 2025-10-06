// app/api/contact/route.ts
import { Resend } from "resend";

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_RECEIVER = process.env.CONTACT_RECEIVER;

if (!RESEND_API_KEY) {
  // warn early during build/dev if missing
  console.warn("RESEND_API_KEY is not set. Emails will NOT be sent.");
}

const resend = new Resend(RESEND_API_KEY || "");

/** small helper to avoid obvious HTML injection in template */
function escapeHtml(str: string) {
  return str
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(req: Request) {
  // server-side check: require CONTACT_RECEIVER to be defined
  if (!CONTACT_RECEIVER) {
    console.error("CONTACT_RECEIVER not defined in environment variables.");
    return new Response(
      "Server not configured to send emails (CONTACT_RECEIVER missing).",
      {
        status: 500,
      }
    );
  }

  const body = await req.json().catch(() => null);
  if (!body) return new Response("Invalid JSON", { status: 400 });

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const other = typeof body.other === "string" ? body.other.trim() : "";

  // interests may be an array or undefined
  const interests: string[] = Array.isArray(body.interests)
    ? body.interests.map((v: unknown) => String(v).trim()).filter(Boolean)
    : [];

  if (!name || !email || !message) {
    return new Response("Missing required fields (name, email, message).", {
      status: 400,
    });
  }

  const interestsList = interests.length ? interests.join(", ") : "—";

  if (!name || !email || !message) {
    return new Response("Missing required fields (name, email, message).", {
      status: 400,
    });
  }

  try {
    await resend.emails.send({
      from: `Paula Chinchilla <no-reply@mail.pauchinchilla.com>`, // replace with your verified sender
      to: CONTACT_RECEIVER,
      subject: `New message from ${name}`,
      // Plain-text fallback
      text: [
        `New contact message`,
        ``,
        `Name: ${name}`,
        `Email: ${email}`,
        `Interested in: ${interestsList}`,
        ``,
        `Message:`,
        message,
      ].join("\n"),
      // HTML message (email-safe, inline styles)
      html: `
      <!doctype html>
      <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <title>New contact message</title>
        <style>
          /* Small responsive tweak - many clients strip CSS but inline styles below are primary */
          @media only screen and (max-width: 480px) {
            .container { width: 100% !important; padding: 16px !important; }
            .two-col { display: block !important; }
            .col { display: block !important; width: 100% !important; box-sizing: border-box; padding: 6px 0 !important; }
          }
        </style>
      </head>
      <body style="margin:0;padding:0;background:#f3f4f6;font-family:Helvetica,Arial,sans-serif;color:#111827;">
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
          <tr>
            <td align="center" style="padding:24px 12px;">
              <table class="container" width="600" cellpadding="0" cellspacing="0" role="presentation" style="width:600px;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 6px 18px rgba(0,0,0,0.06);">
                <!-- Header -->
                <tr>
                  <td style="background:linear-gradient(90deg,#0ea5e9,#7c3aed);padding:20px;">
                    <div style="display:flex;align-items:center;gap:12px;">
                      <div style="width:48px;height:48px;border-radius:8px;background:rgba(255,255,255,0.12);display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;">
                        <img src="https://i.imgur.com/wGqrP8j.png" alt="Logo" width="70%" height="70%" style="display:block;margin: auto;"/>
                      </div>
                      <div>
                        <div style="font-size:16px;color:#fff;font-weight:700;margin-left:6px;">New contact request</div>
                        <div style="font-size:12px;color:rgba(255,255,255,0.9);margin-top:2px;margin-left:6px;">Received via your website contact form</div>
                      </div>
                    </div>
                  </td>
                </tr>

                <!-- Body -->
                <tr>
                  <td style="padding:20px;">
                    <!-- Intro -->
                    <p style="margin:0 0 14px 0;color:#374151;font-size:14px;line-height:1.5;">
                      You have a new contact message. Details are below.
                    </p>

                    <!-- two-column meta -->
                    <table class="two-col" width="100%" cellpadding="0" cellspacing="0" role="presentation" style="margin-bottom:12px;">
                      <tr>
                        <td class="col" width="50%" valign="top" style="padding-right:12px;">
                          <div style="font-size:12px;color:#6b7280;margin-bottom:6px;">Name</div>
                          <div style="font-size:15px;color:#111827;font-weight:600;">${escapeHtml(name)}</div>
                        </td>

                        <td class="col" width="50%" valign="top" style="padding-left:12px;">
                          <div style="font-size:12px;color:#6b7280;margin-bottom:6px;">Email</div>
                          <div style="font-size:15px;color:#111827;">${escapeHtml(email)}</div>
                        </td>
                      </tr>

                      <tr>
                        <td class="col" width="50%" valign="top" style="padding-right:12px;padding-top:12px;">
                          <div style="font-size:12px;color:#6b7280;margin-bottom:6px;">Interested in</div>
                          <div style="font-size:14px;color:#111827;">${escapeHtml(interestsList)}</div>
                        </td>

                        <td class="col" width="50%" valign="top" style="padding-left:12px;padding-top:12px;">
                          <div style="font-size:12px;color:#6b7280;margin-bottom:6px;">Received</div>
                          <div style="font-size:14px;color:#111827;">${new Date().toLocaleString()}</div>
                        </td>
                      </tr>
                    </table>

                    <!-- message block -->
                    <div style="margin-top:4px;border-radius:8px;border:1px solid #e6e9ee;padding:4px;background:#fafbff;">
                      <div style="font-size:13px;color:#6b7280;margin-bottom:8px;font-weight:600;">Message</div>
                      <div style="font-size:14px;color:#111827;line-height:1.5;padding-left:12px;">
                        ${escapeHtml(message).replace(/\n/g, "<br/>")}
                      </div>
                    </div>
${
  other
    ? `
<div style="margin-top:4px;border-radius:8px;border:1px solid #e6e9ee;padding:4px;background:#fffaf6;">
<div style="font-size:13px;color:#6b7280;margin-bottom:8px;font-weight:600;">Other</div>
<div style="font-size:14px;color:#111827;line-height:1.5;padding-left:12px;">
${escapeHtml(other).replace(/\n/g, "<br/>")}
</div>
</div>
`
    : ""
}
                    <!-- action button (optional) -->
                    <div style="margin-top:18px;text-align:left;">
                      <a href="mailto:${escapeHtml(email)}" style="display:inline-block;padding:10px 16px;background:#111827;color:#ffffff;border-radius:8px;text-decoration:none;font-weight:600;font-size:14px;">
                        Reply to ${escapeHtml(name)}
                      </a>
                    </div>
                  </td>
                </tr>

                <!-- Footer -->
                <tr>
                  <td style="background:#f9fafb;padding:12px 20px;text-align:center;font-size:12px;color:#6b7280;">
                    <div>Powered by your melocotoncito — keep this email private</div>
                  </td>
                </tr>
              </table>

              <!-- small note -->
              <div style="font-size:12px;color:#9ca3af;margin-top:10px;">If you didn't expect this email you can ignore it.</div>
            </td>
          </tr>
        </table>
      </body>
      </html>
    `,
    });

    return new Response("Message sent successfully", { status: 200 });
  } catch (error) {
    console.error("Error sending email via Resend:", error);
    return new Response("Error sending email", { status: 500 });
  }
}
