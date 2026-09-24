"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
import { track } from "@/lib/track";
type Status = "idle" | "sending" | "sent" | "fallback";
export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [mail, setMail] = useState("");
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget)) as Record<
      string,
      string
    >;
    setStatus("sending");
    try {
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(d),
      });
      if (res.ok) {
        track("generate_lead", { case_type: d.matter });
        setStatus("sent");
        return;
      }
    } catch {}
    // Direct sending unavailable: prepare an email on the visitor's device.
    const body = `Hello InstaLaw Group,\n\nI would like a free case review.\n\nName: ${d.name}\nPhone: ${d.phone}\nEmail: ${d.email || "Not provided"}\nCase type: ${d.matter}\n\nWhat happened: ${d.message || "I would prefer to discuss this by phone."}`;
    setMail(
      `mailto:${site.email}?subject=${encodeURIComponent("Case review request: " + d.matter)}&body=${encodeURIComponent(body)}`,
    );
    setStatus("fallback");
  }
  if (status === "sent")
    return (
      <div className="contact-form" role="status">
        <p className="eyebrow">REQUEST RECEIVED</p>
        <h2>Thank you. We’ll call you soon.</h2>
        <p>
          A member of our team will review your information and reach out by
          phone. Need help right now? Call <a href={site.tel}>{site.phone}</a>.
        </p>
        <a className="button" href={site.tel}>
          Call {site.phone} <span aria-hidden="true">→</span>
        </a>
      </div>
    );
  return (
    <form
      className="contact-form"
      onSubmit={submit}
      onChange={() => status === "fallback" && setStatus("idle")}
    >
      <p className="eyebrow">FREE CASE REVIEW</p>
      <h2>Request a callback</h2>
      <p>Takes under a minute. We’ll call you to discuss your case.</p>
      <div className="form-row">
        <label>
          Your name
          <input name="name" autoComplete="name" required maxLength={100} />
        </label>
        <label>
          Phone number
          <input
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            maxLength={40}
          />
        </label>
      </div>
      <label>
        What happened?
        <select name="matter" required defaultValue="">
          <option value="" disabled>
            Select a case type
          </option>
          {[
            "Car accident",
            "Medical malpractice",
            "Wrongful death",
            "Slip and fall",
            "Workplace accident",
            "Other personal injury",
            "Immigration",
            "Not sure yet",
          ].map((x) => (
            <option key={x}>{x}</option>
          ))}
        </select>
      </label>
      <label>
        Email <span className="optional">(optional)</span>
        <input type="email" name="email" autoComplete="email" maxLength={200} />
      </label>
      <label>
        Brief description <span className="optional">(optional)</span>
        <textarea
          name="message"
          rows={3}
          maxLength={800}
          placeholder="A sentence or two is plenty."
        />
      </label>
      <label className="form-trap" aria-hidden="true">
        Company
        <input name="company" tabIndex={-1} autoComplete="off" />
      </label>
      <p className="fine-print">
        Please leave out medical records, ID numbers, and other sensitive
        details. Submitting this form does not create an attorney-client
        relationship.
      </p>
      <button className="button" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending…" : "Request my free case review"}{" "}
        <span aria-hidden="true">→</span>
      </button>
      {status === "fallback" && (
        <div className="email-ready" role="status">
          <strong>We couldn’t send this automatically.</strong>
          <p>
            Your details are ready in an email. Open it and press Send, or call
            us now.
          </p>
          <a className="button" href={mail}>
            Open my email app <span aria-hidden="true">→</span>
          </a>
          <p>
            Or call <a href={site.tel}>{site.phone}</a>.
          </p>
        </div>
      )}
    </form>
  );
}
