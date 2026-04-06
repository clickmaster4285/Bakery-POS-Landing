import "./loadEnv.mjs";
import express from "express";
import sendEmail from "./sendEmail.mjs";

const emailOk = (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(v || "").trim());

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Mount at `/api` → POST `/api/contact` */
export function getContactRouter() {
  const router = express.Router();
  router.use(express.json({ limit: "48kb" }));

  router.post("/contact", async (req, res) => {
    try {
      const name = String(req.body?.name ?? "").trim().slice(0, 200);
      const email = String(req.body?.email ?? "").trim().slice(0, 320);
      const bakery = String(req.body?.bakery ?? "").trim().slice(0, 200);
      const message = String(req.body?.message ?? "").trim().slice(0, 8000);

      if (!name || !email || !message) {
        return res.status(400).json({ ok: false, error: "Name, email, and message are required." });
      }
      if (!emailOk(email)) {
        return res.status(400).json({ ok: false, error: "Please enter a valid email address." });
      }

      const host = process.env.SMTP_HOST;
      const smtpMail = process.env.SMTP_MAIL;
      const smtpPassword = String(process.env.SMTP_PASSWORD ?? "").replace(/\s+/g, "");
      const receiver =
        (process.env.RECEIVER_EMAIL || "").trim() ||
        (process.env.MAIL_TO || "").trim() ||
        smtpMail;

      if (!host || !smtpMail || !smtpPassword || !receiver) {
        console.error("[contact] Set SMTP_HOST, SMTP_MAIL, SMTP_PASSWORD, and RECEIVER_EMAIL (or MAIL_TO) in .env");
        return res.status(503).json({
          ok: false,
          error: "Email is not configured on the server.",
        });
      }

      const emailHref = `mailto:${encodeURIComponent(email)}`;
      const html = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
          <meta charset="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <title>New BakePOS Contact</title>
        </head>
        <body style="margin:0;padding:0;background-color:#e8e6e4;color:#3d3d3d;font-family:Arial,Helvetica,sans-serif;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#e8e6e4;padding:32px 16px;">
            <tr>
              <td align="center">
                <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:12px;overflow:hidden;border:1px solid #d9d6d3;">
                  <tr>
                    <td style="background-color:#964b5f;padding:28px 24px 26px;text-align:center;border-radius:12px 12px 0 0;">
                      <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-size:24px;font-weight:700;color:#ffffff;line-height:1.3;">BakePOS Contact Submission</h1>
                      <p style="margin:12px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:14px;font-weight:400;color:#ffffff;line-height:1.5;opacity:0.95;">A new message was submitted through your contact form.</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding:26px 26px 22px;background:#ffffff;">
                      <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                        <tr>
                          <td style="padding-bottom:20px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#964b5f;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Name</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#3d3d3d;line-height:1.55;">${escapeHtml(name)}</div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:20px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#964b5f;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Email</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;line-height:1.55;">
                              <a href="${emailHref}" style="color:#1a73e8;text-decoration:underline;">${escapeHtml(email)}</a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td style="padding-bottom:22px;">
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#964b5f;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:8px;">Bakery</div>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:16px;color:#3d3d3d;line-height:1.55;">${escapeHtml(bakery || "Not specified")}</div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div style="font-family:Arial,Helvetica,sans-serif;font-size:11px;font-weight:700;color:#964b5f;text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Message</div>
                            <div style="background-color:#eeeae6;border-radius:10px;padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:15px;color:#3d3d3d;line-height:1.7;white-space:pre-wrap;">${escapeHtml(message)}</div>
                          </td>
                        </tr>
                      </table>
                      <div style="margin-top:22px;background-color:#f1e1c3;border:1px solid #d4c4a8;border-radius:10px;padding:16px 18px;font-family:Arial,Helvetica,sans-serif;font-size:14px;line-height:1.65;color:#5c4032;">
                        <strong>Reply Tip:</strong> Respond directly to this email to follow up with the customer.
                      </div>
                    </td>
                  </tr>
                  <tr>
                    <td style="background-color:#eeeae6;padding:20px 24px 22px;text-align:center;border-radius:0 0 12px 12px;">
                      <p style="margin:0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.65;color:#6d6d6d;">This message was sent from your BakePOS contact form.</p>
                      <p style="margin:6px 0 0;font-family:Arial,Helvetica,sans-serif;font-size:12px;line-height:1.65;color:#6d6d6d;">Delivered securely using your configured SMTP settings.</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
          </table>
        </body>
        </html>
      `;

      await sendEmail({
        email: receiver,
        subject: `[BakePOS] Message from ${name}`,
        message: html,
        replyTo: email,
      });

      return res.json({ ok: true });
    } catch (err) {
      console.error("[contact]", err);
      return res.status(500).json({ ok: false, error: "Could not send message. Please try again later." });
    }
  });

  return router;
}
