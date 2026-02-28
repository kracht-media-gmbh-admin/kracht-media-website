import { projects } from "@/lib/projects-data";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { ContactForm } from "@/components/ui/ContactForm";

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 md:text-4xl lg:text-5xl">
          Creative production & project showcase
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          High-impact film, design, and digital experiences. Explore our latest
          work below.
        </p>
      </section>

      <section
        id="projects"
        className="mx-auto max-w-6xl px-4 py-12 md:px-6 md:py-16"
        aria-labelledby="projects-heading"
      >
        <h2 id="projects-heading" className="sr-only">
          Projects
        </h2>
        <ul className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <li key={project.id}>
              <ProjectCard project={project} />
            </li>
          ))}
        </ul>
      </section>

      <section
        id="contact"
        className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24"
        aria-labelledby="contact-heading"
      >
        <h2 id="contact-heading" className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
          Get in touch
        </h2>
        <p className="mt-2 text-zinc-600 dark:text-zinc-400">
          Send us a message and we&apos;ll get back to you.
        </p>
        <div className="mt-8 max-w-md">
          <ContactForm />
        </div>
      </section>
    </div>
  );
}
