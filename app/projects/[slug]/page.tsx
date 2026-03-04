import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { buildProjectMetadata } from "@/lib/metadata";
import { ProjectVideo } from "@/components/ui/ProjectVideo";
import { ProjectDetailContent } from "@/components/ui/ProjectDetailContent";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

const blurDataUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q==";

export async function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};

  return buildProjectMetadata({
    title: project.title,
    description: project.description,
    coverImage: project.coverImage,
    slug: project.slug,
  });
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) notFound();

  return (
    <article className="min-h-screen bg-baby-powder">
      <header className="relative aspect-video w-full overflow-hidden bg-kracht-gruen/10">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-kracht-gruen/80 via-kracht-gruen/30 to-transparent"
          aria-hidden
        />
        <div className="absolute inset-0 flex flex-col justify-end p-6 sm:p-8 md:p-10 lg:p-12">
          <Link
            href="/projects"
            className="group mb-4 inline-flex items-center gap-2 text-sm font-medium text-baby-powder/90 hover:text-baby-powder transition-colors duration-200 w-fit focus:outline-none focus-visible:ring-2 focus-visible:ring-baby-powder focus-visible:ring-offset-2 focus-visible:ring-offset-kracht-gruen rounded"
          >
            <span aria-hidden className="inline-block transition-transform duration-200 group-hover:-translate-x-0.5">←</span> Alle Projekte
          </Link>
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-baby-powder/90">
            {project.category}
          </span>
          <h1
            className="mt-2 text-3xl font-bold leading-[1.1] tracking-tight text-baby-powder sm:text-4xl lg:text-5xl"
            style={{ marginBottom: "0.5em" }}
          >
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 md:py-20 lg:px-8">
        <div className="relative">
          <div className="absolute -left-4 top-0 hidden h-full w-px bg-kracht-gruen/10 sm:block md:-left-6" aria-hidden />
          <div className="project-detail-body">
            <ProjectDetailContent detailText={project.detailText} />
          </div>
        </div>

        {project.videoUrl && (
          <section className="mt-12" aria-labelledby="video-heading">
            <h2 id="video-heading" className="sr-only">
              Projektvideo
            </h2>
            <div className="overflow-hidden rounded-card border border-[#E5E5E5] shadow-[var(--shadow-card)] max-sm:shadow-none">
              <ProjectVideo src={project.videoUrl} title={project.title} />
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="mt-16" aria-labelledby="gallery-heading">
            <h2
              id="gallery-heading"
              className="text-2xl font-semibold leading-[1.15] text-kracht-gruen"
              style={{ marginBottom: "1.5rem" }}
            >
              Galerie
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <li
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-card border border-[#E5E5E5] shadow-[var(--shadow-soft)] max-sm:shadow-none"
                >
                  <Image
                    src={src}
                    alt={`${project.title} – Galeriebild ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    loading="lazy"
                  />
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </article>
  );
}
