import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { buildProjectMetadata } from "@/lib/metadata";
import { ProjectVideo } from "@/components/ui/ProjectVideo";

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
        <div className="absolute inset-0 flex flex-col justify-end bg-kracht-gruen/50 p-6 sm:p-8 md:p-10 lg:p-12">
          <span className="text-sm font-semibold uppercase tracking-widest text-baby-powder/90">
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

      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-12 md:py-16">
        <p className="text-base leading-[1.45] text-kracht-gruen/90 sm:text-lg">
          {project.detailText}
        </p>

        {project.videoUrl && (
          <section className="mt-10 sm:mt-12">
            <h2 className="sr-only">Projektvideo</h2>
            <div className="overflow-hidden rounded-lg border border-kracht-gruen/10">
              <ProjectVideo src={project.videoUrl} title={project.title} />
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="mt-12 sm:mt-16">
            <h2
              className="mb-6 text-xl font-semibold leading-[1.1] text-kracht-gruen sm:text-2xl"
              style={{ marginBottom: "1.5rem" }}
            >
              Galerie
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <li
                  key={i}
                  className="relative aspect-[4/3] overflow-hidden rounded-lg border border-kracht-gruen/10"
                >
                  <Image
                    src={src}
                    alt={`${project.title} – Galeriebild ${i + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
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
