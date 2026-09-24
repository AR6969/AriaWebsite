import { site } from "@/lib/site";
const limits = { name: 100, phone: 40, email: 200, matter: 60, message: 800 };
type Lead = Record<keyof typeof limits, string>;
function clean(body: Record<string, unknown>): Lead | null {
  const lead = {} as Lead;
  for (const [key, max] of Object.entries(limits) as [keyof Lead, number][]) {
    const value = typeof body[key] === "string" ? body[key].trim() : "";
    if (value.length > max) return null;
    lead[key] = value;
  }
  if (!lead.name || !lead.matter || lead.phone.replace(/\D/g, "").length < 7)
    return null;
  if (lead.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(lead.email)) return null;
  return lead;
}
const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => `&#${c.charCodeAt(0)};`);
// Emails each inquiry to the firm through Resend. Nothing is stored. Requires
// RESEND_API_KEY and LEAD_FROM_EMAIL (a sender on a Resend-verified domain);
// without them the form falls back to preparing an email on the visitor's
// device.
export async function POST(request: Request) {
  const key = process.env.RESEND_API_KEY;
  const from = process.env.LEAD_FROM_EMAIL;
  if (!key || !from)
    return Response.json({ error: "not_configured" }, { status: 503 });
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "invalid" }, { status: 400 });
  }
  // Honeypot field: real visitors never see or fill it.
  if (body.company) return Response.json({ ok: true });
  const lead = clean(body);
  if (!lead) return Response.json({ error: "invalid" }, { status: 400 });
  const rows = [
    ["Name", lead.name],
    ["Phone", lead.phone],
    ["Email", lead.email || "Not provided"],
    ["Case type", lead.matter],
    ["What happened", lead.message || "Not provided"],
  ];
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${key}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from,
      to: process.env.LEAD_TO_EMAIL || site.email,
      reply_to: lead.email || undefined,
      subject: `New case inquiry: ${lead.matter} (${lead.name})`,
      text: rows.map(([k, v]) => `${k}: ${v}`).join("\n"),
      html: `<table>${rows
        .map(
          ([k, v]) =>
            `<tr><th align="left" valign="top">${k}</th><td>${escape(v).replace(/\n/g, "<br>")}</td></tr>`,
        )
        .join("")}</table>`,
    }),
  });
  if (!res.ok) return Response.json({ error: "send_failed" }, { status: 502 });
  return Response.json({ ok: true });
}
