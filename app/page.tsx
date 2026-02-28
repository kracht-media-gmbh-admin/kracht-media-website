import Image from "next/image";
import Link from "next/link";
import { getTopProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { LocalBusinessJsonLd } from "@/components/seo/LocalBusinessJsonLd";

const HERO_IMAGE = "https://picsum.photos/seed/kracht-hero/1600/900";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q==";

export default function Home() {
  const topProjects = getTopProjects(3);

  return (
    <div className="min-h-screen">
      <LocalBusinessJsonLd />
      {/* Hero */}
      <section
        className="mx-auto max-w-6xl px-4 pt-14 pb-20 sm:px-6 sm:pt-20 sm:pb-24 lg:px-8 lg:pt-28 lg:pb-32"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20 lg:items-center">
          <div className="animate-in animate-in-1">
            <h1
              id="hero-heading"
              className="text-4xl font-bold leading-[1.08] tracking-tight text-kracht-gruen sm:text-5xl md:text-6xl lg:text-7xl"
              style={{ marginBottom: "0.4em" }}
            >
              Lauter als jeder{" "}
              <span className="relative inline-block text-orange-web">
                <span className="relative z-10">Presslufthammer.</span>
                <span
                  className="absolute bottom-0.5 left-0 right-0 h-3 -z-0 opacity-30"
                  style={{ background: "var(--orange-web)", transform: "skewY(-1deg)" }}
                  aria-hidden
                />
              </span>
            </h1>
            <p
              className="max-w-xl text-lg leading-[1.45] text-kracht-gruen/90 sm:text-xl"
              style={{ marginTop: "1.25rem" }}
            >
              Kraftvoll, präzise, reduziert. Wir schaffen Filme, Design und
              digitale Erlebnisse mit Stabilität und klarer Botschaft.
            </p>
            <p
              className="mt-5 max-w-xl text-base leading-[1.5] text-kracht-gruen/75"
              style={{ marginTop: "1.25rem" }}
            >
              Kein Kastl-Denken – klare Formen, starke Inhalte. Für Marken und
              Projekte, die gehört werden wollen.
            </p>
          </div>
          <div className="relative animate-in animate-in-2 aspect-[16/10] overflow-hidden rounded-2xl border border-kracht-gruen/10 shadow-[var(--shadow-card)] sm:aspect-video">
            <Image
              src={HERO_IMAGE}
              alt="Kracht Media – visuelle Produktion"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL={BLUR}
            />
          </div>
        </div>
      </section>

      {/* Projects */}
      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="projekte-heading"
      >
        <h2
          id="projekte-heading"
          className="animate-in animate-in-3 text-2xl font-semibold leading-[1.1] tracking-tight text-kracht-gruen sm:text-3xl"
          style={{ marginBottom: "2rem" }}
        >
          Ausgewählte Projekte
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 sm:gap-10 lg:grid-cols-3">
          {topProjects.map((project, i) => (
            <li key={project.id} className={`animate-in animate-in-${4 + i}`}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <p className="mt-14 text-center animate-in animate-in-6">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 font-semibold text-orange-web transition hover:gap-3 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
          >
            Alle Projekte ansehen
            <span aria-hidden>→</span>
          </Link>
        </p>
      </section>

      {/* Statement */}
      <section
        className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-32"
        aria-labelledby="message-heading"
      >
        <h2 id="message-heading" className="sr-only">
          Unser Anspruch
        </h2>
        <blockquote className="relative border-l-4 border-orange-web bg-kracht-gruen/5 py-8 pl-8 pr-8 sm:pl-12 sm:pr-12 rounded-r-2xl">
          <p className="text-xl font-semibold leading-[1.25] text-kracht-gruen sm:text-2xl md:text-3xl lg:max-w-4xl">
            Wir machen keine leisen Kompromisse. Jedes Projekt bekommt die
            gleiche Präzision – ob Spot oder Serie.
          </p>
        </blockquote>
      </section>
    </div>
  );
}
