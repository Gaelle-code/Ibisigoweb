import { Link } from "react-router-dom";
import PerformanceGallery from "../components/PerformanceGallery.jsx";
import SectionTitle from "../components/SectionTitle.jsx";
import { site } from "../data/site.js";
import { report } from "../data/report.js";

const problems = [
  {
    title: "Talent stays invisible",
    text: "A poet can perform brilliantly at a school or competition, and after that almost nobody finds them again.",
  },
  {
    title: "Buyers cannot find them",
    text: "Schools, families and companies want authentic Rwandan voices but have no simple way to discover and book them.",
  },
  {
    title: "The bridge is missing",
    text: "We have the talent. We have the technology. What is missing is the connection between them.",
  },
];

const steps = [
  { n: "01", title: "Discover", text: "Young poets are found through schools, youth groups, cultural events and open submissions." },
  { n: "02", title: "Film", text: "Their performances are recorded and turned into a professional profile on Ibisigo." },
  { n: "03", title: "Browse", text: "Customers watch real performances and choose the poet who fits their event." },
  { n: "04", title: "Book", text: "Weddings, school events, conferences and corporate functions, all booked on Ibisigo." },
];

const impact = [
  {
    title: "For young people",
    text: "Confidence to stay in the arts. When a poem earns income and applause, talent has a reason to stay. Poetry challenges, mentorship and training keep it growing.",
  },
  {
    title: "For culture",
    text: "Every performance we record preserves Rwandan poetry, proverbs and storytelling for the next generation. We are documenting heritage.",
  },
  {
    title: "For communities",
    text: "Authentic Rwandan voices at schools, weddings and companies, plus local jobs for videographers, poets and event organizers.",
  },
];

const revenue = [
  "Commissions on bookings",
  "Premium promotion for poets",
  "Commissioned poems",
  "Corporate cultural packages",
  "Training and workshops",
];

export default function Home() {
  return (
    <>
      <section className="relative overflow-hidden bg-cream">
        <div aria-hidden="true" className="pointer-events-none absolute -right-36 -top-40 h-[34rem] w-[34rem] rounded-full border border-sand sm:-right-24" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 -top-24 h-[25rem] w-[25rem] rounded-full border border-sand" />
        <div className="container-x relative grid items-center gap-14 py-16 sm:py-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-sand bg-white/70 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-forest">
              <span className="h-2 w-2 rounded-full bg-terracotta" />
              Rwanda’s poetry, in its own voice
            </p>
            <h1 className="mt-7 max-w-xl text-5xl font-bold leading-[1.04] tracking-tight text-forest sm:text-6xl lg:text-[4.25rem]">
              A living tradition. <span className="text-terracotta">A voice for every generation.</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-ink/75">
              Ibisigo brings Rwanda’s poets and audiences together—making it easier to discover powerful voices, celebrate our culture and bring poetry to your next event.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/poets" className="btn btn-primary">
                Discover our poets
              </Link>
              <Link to="/book" className="btn btn-ghost">
                Bring poetry to your event
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-sand pt-6 text-sm text-ink/65">
              <span className="font-semibold text-forest">Rooted in Rwanda</span>
              <span className="hidden h-1 w-1 rounded-full bg-terracotta sm:block" />
              <span>Made for culture, community and connection</span>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-md lg:mr-4">
            <div aria-hidden="true" className="absolute -inset-3 rotate-3 rounded-[2rem] bg-sand" />
            <img
              src={site.teamPhoto}
              alt="Gaelle and her poet partner"
              className="relative aspect-[4/4.5] w-full rounded-[1.75rem] object-cover shadow-xl"
            />
            <div className="absolute -bottom-6 -left-5 max-w-[17rem] rounded-2xl border border-sand/70 bg-white p-5 shadow-lg sm:-left-9">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Creative Catalyst Grant</p>
              <p className="mt-1 font-serif text-2xl font-bold text-forest">{site.grantWon}</p>
              <a
                href={site.grantUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-xs font-semibold leading-5 text-forest underline decoration-terracotta/50 underline-offset-4 hover:text-terracotta"
              >
                Awarded by Iteka Youth Organisation
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <span aria-hidden="true" className="absolute -right-4 top-8 grid h-12 w-12 place-items-center rounded-full bg-forest text-xl text-cream shadow-lg">✳</span>
          </div>
        </div>
      </section>

      <section className="container-x py-16 sm:py-20">
        <div className="grid overflow-hidden rounded-3xl border border-sand bg-white shadow-sm md:grid-cols-2">
          <a
            href={site.grantUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative block min-h-64 overflow-hidden bg-sand focus-visible:ring-inset"
            aria-label="Visit Iteka Youth Organisation, the Ibisigo grant award partner"
          >
            <img
              src={site.grantPhoto}
              alt="Ibisigo founder Gaelle Niyonkuru receiving the 500,000 Rwandan franc Creative Catalyst Grant from Iteka"
              className="absolute inset-0 h-full w-full object-cover transition duration-300 group-hover:scale-[1.02]"
            />
          </a>
          <div className="flex flex-col justify-center p-7 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-terracotta">Our funding partner</p>
            <h2 className="mt-3 font-serif text-3xl font-bold text-forest">A creative future, made possible together.</h2>
            <p className="mt-4 leading-7 text-ink/75">
              Ibisigo received a {site.grantWon} Creative Catalyst Grant from Iteka Youth Organisation to help bring Rwanda’s poetry to more people.
            </p>
            <a
              href={site.grantUrl}
              target="_blank"
              rel="noreferrer"
              className="btn btn-ghost mt-6 self-start"
            >
              Learn about Iteka
              <span className="ml-2" aria-hidden="true">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionTitle
          eyebrow="The problem"
          title="Rwanda has a rich poetry tradition. Most young poets are never seen."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {problems.map((p) => (
            <div key={p.title} className="rounded-2xl border border-sand bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-clay">{p.title}</h3>
              <p className="mt-3 text-ink/75">{p.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-sand">
        <div className="container-x py-20">
          <SectionTitle
            eyebrow="The solution"
            title="Ibisigo is the bridge between cultural talent and the market."
            text="A digital platform connecting traditional poetry talent with the people who want to book it."
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="rounded-2xl bg-cream p-7">
                <p className="font-serif text-3xl font-bold text-amber">{s.n}</p>
                <h3 className="mt-3 text-xl font-bold text-clay">{s.title}</h3>
                <p className="mt-2 text-sm text-ink/75">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PerformanceGallery />

      <section className="container-x py-20">
        <SectionTitle
          eyebrow="Community and human impact"
          title="Ibisigo is about more than bookings."
          text="When talent thrives, the whole community thrives with it."
        />
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {impact.map((i) => (
            <div key={i.title} className="rounded-2xl border-t-4 border-amber bg-white p-7 shadow-sm">
              <h3 className="text-xl font-bold text-clay">{i.title}</h3>
              <p className="mt-3 text-ink/75">{i.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="container-x grid gap-12 py-20 lg:grid-cols-2">
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">Business model</p>
            <h2 className="mt-2 text-3xl font-bold sm:text-4xl">Sustainable for poets, customers and Ibisigo.</h2>
            <p className="mt-4 text-lg text-cream/75">
              Poets get visibility and income. Customers get authentic talent. Ibisigo grows with both sides.
            </p>
          </div>
          <ul className="space-y-3">
            {revenue.map((r) => (
              <li key={r} className="flex items-center gap-3 rounded-xl bg-cream/10 px-5 py-4">
                <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                {r}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="container-x py-20">
        <SectionTitle
          eyebrow="First 6 months"
          title="Where the grant takes us."
          text="With the grant we build our MVP, produce quality poetry content, buy essential recording equipment and run our first marketing campaign."
          center
        />
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {report.targets.map((t) => (
            <div key={t.label} className="rounded-2xl bg-white p-8 text-center shadow-sm">
              <p className="font-serif text-5xl font-bold text-clay">{t.value}</p>
              <p className="mt-2 text-sm text-ink/70">{t.label}</p>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-sm text-ink/60">Six-month targets</p>
      </section>

      <section className="bg-sand">
        <div className="container-x grid items-center gap-10 py-20 md:grid-cols-2">
          <img src={site.teamPhoto} alt="Gaelle and her poet partner" className="h-80 w-full rounded-3xl object-cover object-top" />
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-amber">The team</p>
            <h2 className="mt-2 text-3xl font-bold text-clay sm:text-4xl">Software and poetry, side by side.</h2>
            <p className="mt-4 text-ink/75">
              Gaelle brings software development. Her poet partner brings the stage, the craft and the community.
              Together they are building a place where Rwandan poetry gets discovered and paid.
            </p>
            <Link to="/poets" className="btn btn-primary mt-6">
              Meet the poets
            </Link>
          </div>
        </div>
      </section>

      <section className="container-x py-20 text-center">
        <h2 className="mx-auto max-w-2xl text-3xl font-bold text-clay sm:text-4xl">
          We are building a bridge between Rwanda's cultural talent, its people, and its future.
        </h2>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/book" className="btn btn-primary">
            Book a Poet
          </Link>
          <a href={site.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
            Contact Gaelle
          </a>
        </div>
      </section>
    </>
  );
}
