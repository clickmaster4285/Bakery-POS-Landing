/**
 * Same-origin in production (Express serves site + /api).
 * In dev, Vite proxies /api → nodemailer server (see vite.config.ts).
 */
export function getContactApiBase(): string {
  const raw = import.meta.env.VITE_CONTACT_API_URL as string | undefined;
  return raw?.replace(/\/$/, "") ?? "";
}

export async function submitContactForm(payload: {
  name: string;
  email: string;
  bakery: string;
  message: string;
}): Promise<{ ok: true } | { ok: false; error: string }> {
  const base = getContactApiBase();
  const res = await fetch(`${base}/api/contact`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
  const data = (await res.json().catch(() => ({}))) as { ok?: boolean; error?: string };
  if (!res.ok || !data.ok) {
    return { ok: false, error: data.error || "Something went wrong. Please try again." };
  }
  return { ok: true };
}
