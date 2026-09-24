"use client";
import { useState, type FormEvent } from "react";
import { site } from "@/lib/site";
export function ContactForm() {
  const [prepared, setPrepared] = useState(false);
  const [mail, setMail] = useState("");
  function prepare(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const d = new FormData(e.currentTarget);
    const body = `Hello InstaLaw Group,\n\nI would like to request an initial consultation.\n\nName: ${d.get("name")}\nPhone: ${d.get("phone")}\nEmail: ${d.get("email")}\nMatter: ${d.get("matter")}\n\nBrief overview: ${d.get("message") || "I would prefer to discuss this by phone."}`;
    setMail(
      `mailto:${site.email}?subject=${encodeURIComponent("Consultation request — " + d.get("matter"))}&body=${encodeURIComponent(body)}`,
    );
    setPrepared(true);
  }
  return (
    <form
      className="contact-form"
      onSubmit={prepare}
      onChange={() => setPrepared(false)}
    >
      <p className="eyebrow">REQUEST A CALLBACK</p>
      <h2>Send us your details</h2>
      <p>
        Prepare an email to our team. You’ll review and send it from your own
        email app.
      </p>
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
            required
            maxLength={40}
          />
        </label>
      </div>
      <label>
        Email address
        <input
          type="email"
          name="email"
          autoComplete="email"
          required
          maxLength={200}
        />
      </label>
      <label>
        What can we help with?
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
        A brief overview <span className="optional">(optional)</span>
        <textarea
          name="message"
          rows={3}
          maxLength={800}
          placeholder="A sentence or two is plenty to start."
        />
      </label>
      <p className="fine-print">
        Please leave out medical records, identification numbers, and other
        sensitive information. An inquiry does not create an attorney-client
        relationship.
      </p>
      <button className="button" type="submit">
        Prepare my consultation email <span aria-hidden="true">→</span>
      </button>
      {prepared && (
        <div className="email-ready" role="status">
          <strong>Your email is ready. It hasn’t been sent.</strong>
          <p>Open it in your email app, review it, and press Send.</p>
          <a className="button" href={mail}>
            Open my email app <span aria-hidden="true">→</span>
          </a>
          <p>
            No email app? Email{" "}
            <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
            <a href={site.tel}>{site.phone}</a>.
          </p>
        </div>
      )}
    </form>
  );
}
