import { useState } from "react";
import PageHeader from "../components/PageHeader.jsx";
import { site } from "../data/site.js";

const eventTypes = ["Wedding", "School event", "Conference", "Corporate function", "Family gathering", "Other"];

const empty = { name: "", organisation: "", eventType: eventTypes[0], date: "", location: "", message: "" };

const fieldClass =
  "mt-2 w-full rounded-xl border border-sand bg-white px-4 py-3 text-sm outline-none focus:border-amber focus:ring-2 focus:ring-amber/30";

export default function Book() {
  const [form, setForm] = useState(empty);
  const [sent, setSent] = useState(false);

  const update = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const submit = async (e) => {
    e.preventDefault();
    const text = [
      "Booking request for Ibisigo",
      `Name: ${form.name}`,
      `Organisation: ${form.organisation || "-"}`,
      `Event type: ${form.eventType}`,
      `Date: ${form.date || "-"}`,
      `Location: ${form.location || "-"}`,
      `Details: ${form.message || "-"}`,
    ].join("\n");

    try {
      await navigator.clipboard.writeText(text);
    } catch {
      setSent(false);
    }
    window.open(site.linkedin, "_blank", "noopener");
    setSent(true);
    setForm(empty);
  };

  return (
    <>
      <PageHeader
        eyebrow="Book a poet"
        title="Bring an authentic Rwandan voice to your event."
        text="Weddings, school events, conferences and corporate functions. Tell us about your event and we will match you with the right poet."
      />

      <section className="container-x grid gap-12 py-16 lg:grid-cols-3">
        <form onSubmit={submit} className="space-y-5 lg:col-span-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Your name
              <input required name="name" value={form.name} onChange={update} className={fieldClass} />
            </label>
            <label className="text-sm font-medium">
              School or organisation
              <input name="organisation" value={form.organisation} onChange={update} className={fieldClass} />
            </label>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="text-sm font-medium">
              Event type
              <select name="eventType" value={form.eventType} onChange={update} className={fieldClass}>
                {eventTypes.map((t) => (
                  <option key={t}>{t}</option>
                ))}
              </select>
            </label>
            <label className="text-sm font-medium">
              Event date
              <input type="date" name="date" value={form.date} onChange={update} className={fieldClass} />
            </label>
          </div>

          <label className="block text-sm font-medium">
            Location
            <input name="location" value={form.location} onChange={update} className={fieldClass} />
          </label>

          <label className="block text-sm font-medium">
            Tell us about your event
            <textarea name="message" rows="5" value={form.message} onChange={update} className={fieldClass} />
          </label>

          <button type="submit" className="btn btn-primary">
            Send booking request
          </button>

          {sent && (
            <p className="rounded-xl bg-sand px-5 py-4 text-sm text-clay">
              Your request has been copied. Paste it into a LinkedIn message to Gaelle in the tab that just opened.
            </p>
          )}
        </form>

        <aside className="h-fit rounded-3xl bg-sand p-8">
          <h3 className="text-xl font-bold text-clay">How booking works</h3>
          <ol className="mt-5 space-y-4 text-sm text-ink/80">
            <li>1. Send your event details.</li>
            <li>2. We suggest poets and share their recorded performances.</li>
            <li>3. You choose, confirm the date and the poet performs.</li>
          </ol>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost mt-8 w-full">
            Message Gaelle on LinkedIn
          </a>
        </aside>
      </section>
    </>
  );
}
