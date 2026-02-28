import Image from "next/image";
import Link from "next/link";
import { getTopProjects } from "@/lib/data";
import { ProjectCard } from "@/components/ui/ProjectCard";

const HERO_IMAGE =
  "https://picsum.photos/seed/kracht-hero/1600/900";

export default function Home() {
  const topProjects = getTopProjects(3);

  return (
    <div className="min-h-screen">
      {/* Hero: Headline, Kurztexte, Hero-Bild */}
      <section
        className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-28"
        aria-labelledby="hero-heading"
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <h1
              id="hero-heading"
              className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-4xl md:text-5xl lg:text-6xl"
              style={{ marginBottom: "0.5em" }}
            >
              Lauter als jeder{" "}
              <span className="text-orange-web">Presslufthammer.</span>
            </h1>
            <p
              className="max-w-xl text-base leading-[1.45] text-kracht-gruen/90 sm:text-lg"
              style={{ marginTop: "1.5rem" }}
            >
              Kraftvoll, präzise, reduziert. Wir schaffen Filme, Design und
              digitale Erlebnisse mit Stabilität und klarer Botschaft.
            </p>
            <p
              className="mt-4 max-w-xl text-base leading-[1.45] text-kracht-gruen/80"
              style={{ marginTop: "1rem" }}
            >
              Kein Kastl-Denken – klare Formen, starke Inhalte. Für Marken und
              Projekte, die gehört werden wollen.
            </p>
          </div>
          <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-kracht-gruen/10 sm:aspect-video">
            <Image
              src={HERO_IMAGE}
              alt="Kracht Media – visuelle Produktion"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q=="
            />
          </div>
        </div>
      </section>

      {/* Projekt-Preview: Top 3 */}
      <section
        className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20"
        aria-labelledby="projekte-heading"
      >
        <h2
          id="projekte-heading"
          className="text-xl font-semibold leading-[1.1] text-kracht-gruen sm:text-2xl"
          style={{ marginBottom: "1.5rem" }}
        >
          Ausgewählte Projekte
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {topProjects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
        <p className="mt-10 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center font-semibold text-orange-web hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder rounded"
          >
            Alle Projekte ansehen →
          </Link>
        </p>
      </section>

      {/* Message Section: kräftige Statement-Zeile */}
      <section
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="message-heading"
      >
        <blockquote
          id="message-heading"
          className="border-l-4 border-orange-web pl-6 sm:pl-8"
        >
          <p className="text-xl font-semibold leading-[1.2] text-kracht-gruen sm:text-2xl md:text-3xl">
            Wir machen keine leisen Kompromisse. Jedes Projekt bekommt die
            gleiche Präzision – ob Spot oder Serie.
          </p>
        </blockquote>
      </section>
    </div>
  );
}
