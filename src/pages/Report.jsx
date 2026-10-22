import PageHeader from "../components/PageHeader.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { report } from "../data/report.js";
import { site } from "../data/site.js";

function Block({ label, items }) {
  return (
    <div>
      {label && <p className="mt-5 text-xs font-semibold uppercase tracking-wider text-amber">{label}</p>}
      {items.length === 0 ? (
        <p className="mt-2 text-sm italic text-ink/50">Update coming soon.</p>
      ) : (
        <ul className="mt-2 space-y-2">
          {items.map((item) => (
            <li key={item} className="flex gap-3 text-ink/80">
              <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-amber" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Report() {
  return (
    <>
      <PageHeader eyebrow={site.grantName} title={report.title} text={report.intro} />

      <section className="container-x -mt-10 grid gap-5 sm:grid-cols-3">
        {report.highlights.map((h) => (
          <div key={h.label} className="rounded-2xl bg-white p-7 text-center shadow-lg">
            <p className="font-serif text-3xl font-bold text-clay">{h.value}</p>
            <p className="mt-1 text-sm text-ink/60">{h.label}</p>
          </div>
        ))}
      </section>

      <section className="container-x py-20">
        <div className="space-y-6">
          {report.sections.map((s) => (
            <article key={s.number} className="rounded-2xl border border-sand bg-white p-7 shadow-sm sm:p-9">
              <div className="flex items-center gap-4">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-clay font-serif text-lg font-bold text-cream">
                  {s.number}
                </span>
                <h3 className="text-2xl font-bold text-clay">{s.title}</h3>
              </div>
              <Block items={s.items} />
              {s.clients && <Block label="Clients" items={s.clients} />}
              {s.income && <Block label="Income" items={s.income} />}
            </article>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x py-20">
          <SectionTitle eyebrow="Evidence" title="Photos of our progress." />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <figure className="overflow-hidden rounded-2xl bg-white shadow-sm">
              <img src={site.teamPhoto} alt="Gaelle and her poet partner" className="h-80 w-full object-cover object-top" />
              <figcaption className="p-4 text-sm text-ink/70">Gaelle and her poet partner, building Ibisigo together.</figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionTitle eyebrow="What comes next" title="Our six-month targets." />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {report.targets.map((t) => (
            <div key={t.label} className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <p className="font-serif text-5xl font-bold text-clay">{t.value}</p>
              <p className="mt-2 text-sm text-ink/70">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-10 text-center text-ink/70">
          Questions about this report?{" "}
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="font-semibold text-clay underline">
            Contact {site.founder}
          </a>
        </p>
      </section>
    </>
  );
}
