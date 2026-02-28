import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactForm } from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero: high-impact headline, Orange Web accent, generous spacing */}
      <section
        className="mx-auto max-w-6xl px-4 pt-12 pb-16 sm:px-6 sm:pt-16 sm:pb-20 lg:px-8 lg:pt-24 lg:pb-28"
        aria-labelledby="hero-heading"
      >
        <h1
          id="hero-heading"
          className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-4xl md:text-5xl lg:text-6xl"
          style={{ marginBottom: "0.5em" }}
        >
          Lauter als jeder{" "}
          <span className="text-orange-web">Presslufthammer.</span>
        </h1>
        <p className="max-w-2xl text-base leading-[1.45] text-kracht-gruen/85 sm:text-lg" style={{ marginTop: "1.5rem" }}>
          Kraftvoll, präzise, reduziert. Wir schaffen Filme, Design und digitale
          Erlebnisse mit Stabilität und klarer Botschaft.
        </p>
      </section>

      {/* Project Gallery – Subpages of former projects */}
      <section
        id="projekte"
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
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      {/* Contact */}
      <section
        id="kontakt"
        className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24"
        aria-labelledby="kontakt-heading"
      >
        <h2
          id="kontakt-heading"
          className="text-2xl font-bold leading-[1.1] text-kracht-gruen sm:text-3xl"
          style={{ marginBottom: "0.5em" }}
        >
          Kontakt
        </h2>
        <p className="text-base leading-[1.45] text-kracht-gruen/85" style={{ marginTop: "0.5rem" }}>
          Schreiben Sie uns – wir melden uns zeitnah.
        </p>
        <div className="mt-8 max-w-md sm:mt-10">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
