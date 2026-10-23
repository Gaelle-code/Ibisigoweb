import { Link } from "react-router-dom";
import PageHeader from "../components/PageHeader.jsx";
import PerformanceGallery from "../components/PerformanceGallery.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { site } from "../data/site.js";
import { poetPartner, profileSteps } from "../data/poets.js";

export default function Poets() {
  return (
    <>
      <PageHeader
        eyebrow="Poets"
        title="Real poets. Real performances."
        text="Every poet on Ibisigo has a professional profile built around their own voice and recorded performances."
      />

      <section className="container-x py-20">
        <SectionTitle eyebrow="Featured" title="Our founding poet" />
        <div className="mt-10 grid overflow-hidden rounded-3xl border border-sand bg-white shadow-sm md:grid-cols-2">
          <img src={site.teamPhoto} alt={poetPartner.name} className="h-full min-h-80 w-full object-cover object-top" />
          <div className="flex flex-col justify-center p-8 sm:p-12">
            <h3 className="text-3xl font-bold text-clay">{poetPartner.name}</h3>
            <p className="mt-1 text-sm font-semibold uppercase tracking-wider text-amber">{poetPartner.role}</p>
            <p className="mt-5 text-ink/75">{poetPartner.bio}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {poetPartner.tags.map((tag) => (
                <span key={tag} className="rounded-full bg-sand px-4 py-1.5 text-xs font-medium text-clay">
                  {tag}
                </span>
              ))}
            </div>
            <Link to="/book" className="btn btn-primary mt-8 self-start">
              Request a booking
            </Link>
          </div>
        </div>
      </section>

      <PerformanceGallery />

      <section className="bg-sand">
        <div className="container-x py-20">
          <SectionTitle eyebrow="How profiles work" title="From first performance to first booking." center />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {profileSteps.map((s, i) => (
              <div key={s.title} className="rounded-2xl bg-cream p-7">
                <p className="font-serif text-3xl font-bold text-amber">{i + 1}</p>
                <h3 className="mt-3 text-xl font-bold text-clay">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <h2 className="text-3xl font-bold text-clay sm:text-4xl">Are you a young poet?</h2>
        <p className="mx-auto mt-4 max-w-xl text-ink/75">
          Your talent can be discovered, developed and turned into opportunity. Reach out and share your poetry with us.
        </p>
        <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-primary mt-8">
          Join as a poet
        </a>
      </section>
    </>
  );
}
