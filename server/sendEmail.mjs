import nodemailer from "nodemailer";

function getFromAddress() {
  const aliasName = (process.env.ALIAS_NAME || "").trim();
  const aliasEmail = (process.env.ALIAS_EMAIL || "").trim();
  if (aliasName && aliasEmail) {
    const safe = aliasName.replace(/\\/g, "\\\\").replace(/"/g, '\\"');
    return `"${safe}" <${aliasEmail}>`;
  }
  return process.env.SMTP_MAIL;
}

/** Gmail app passwords: paste with or without spaces — we strip whitespace. */
function getSmtpPassword() {
  return String(process.env.SMTP_PASSWORD ?? "").replace(/\s+/g, "");
}

/**
 * @param {{ email: string; subject: string; message: string; replyTo?: string }} params
 */
const sendEmail = async ({ email, subject, message, replyTo }) => {
  const port = Number(process.env.SMTP_PORT) || 465;
  const secure =
    process.env.SMTP_SECURE === "true"
      ? true
      : process.env.SMTP_SECURE === "false" || process.env.SMTP_SECURE === "0"
        ? false
        : port === 465;

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    secure,
    port,
    auth: {
      user: process.env.SMTP_MAIL,
      pass: getSmtpPassword(),
    },
  });

  const options = {
    from: getFromAddress(),
    to: email,
    subject,
    html: message,
  };

  if (replyTo) {
    options.replyTo = replyTo;
  }

  await transporter.sendMail(options);
};

export default sendEmail;
