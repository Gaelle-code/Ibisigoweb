import { Link } from "react-router-dom";
import { performancePhotos } from "../data/poets.js";

export default function PerformanceGallery() {
  return (
    <section className="bg-sand">
      <div className="container-x py-16 sm:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">
            Poetry in performance
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold text-forest sm:text-4xl">
            Hear the words. Feel the moment.
          </h2>
          <p className="mt-4 text-lg leading-7 text-ink/75">
            Rwandan poetry is made to be shared aloud. Every performance carries a voice, a story and a connection with the people listening.
          </p>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {performancePhotos.map((photo) => (
            <figure key={photo.src} className="overflow-hidden rounded-3xl border border-sand bg-cream shadow-sm">
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                decoding="async"
                className="aspect-[4/3] w-full object-cover object-center"
              />
              <figcaption className="px-5 py-4 text-sm font-medium text-forest sm:px-6">
                {photo.caption}
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-9 text-center">
          <Link to="/poets" className="btn btn-primary">
            Meet the poets behind the performances
          </Link>
        </div>
      </div>
    </section>
  );
}
