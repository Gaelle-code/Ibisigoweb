export default function SectionTitle({ eyebrow, title, text, center = false }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      {eyebrow && <p className="text-sm font-semibold uppercase tracking-widest text-amber">{eyebrow}</p>}
      <h2 className="mt-2 text-3xl font-bold text-clay sm:text-4xl">{title}</h2>
      {text && <p className="mt-4 text-lg text-ink/75">{text}</p>}
    </div>
  );
}
