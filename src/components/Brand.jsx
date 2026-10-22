import { Link } from "react-router-dom";

export default function Brand({ inverse = false }) {
  return (
    <Link to="/" className="inline-flex items-center gap-3" aria-label="Ibisigo home">
      <svg
        aria-hidden="true"
        viewBox="0 0 44 44"
        className="h-10 w-10 shrink-0"
        fill="none"
      >
        <rect width="44" height="44" rx="14" fill={inverse ? "#F7F3EA" : "#173D32"} />
        <path
          d="M12 27.5c3.2 0 3.2-11 6.5-11s3.3 11 6.5 11 3.3-11 6.5-11"
          stroke={inverse ? "#173D32" : "#F7F3EA"}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2.6"
        />
        <circle cx="33.5" cy="16.5" r="2.5" fill="#C87A4B" />
      </svg>
      <span className={`font-serif text-2xl font-bold leading-none tracking-tight ${inverse ? "text-cream" : "text-forest"}`}>
        Ibisigo
        <span className={`mt-1.5 block font-sans text-[9px] font-semibold uppercase tracking-[0.2em] ${inverse ? "text-cream/65" : "text-ink/55"}`}>
          Poetry in its own voice
        </span>
      </span>
    </Link>
  );
}
