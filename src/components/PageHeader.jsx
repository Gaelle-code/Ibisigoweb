export default function PageHeader({ eyebrow, title, text }) {
  return (
    <section className="bg-gradient-to-br from-clay to-amber text-cream">
      <div className="container-x py-16 sm:py-20">
        {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-cream/80">{eyebrow}</p>}
        <h1 className="mt-2 max-w-3xl text-4xl font-bold sm:text-5xl">{title}</h1>
        {text && <p className="mt-5 max-w-2xl text-lg text-cream/90">{text}</p>}
      </div>
    </section>
  );
}
