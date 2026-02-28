import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects-data";
import { buildProjectMetadata } from "@/lib/metadata";
import { ProjectVideo } from "@/components/ui/ProjectVideo";

interface ProjectPageProps {
  params: Promise<{ slug: string }>;
}

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
    <article className="min-h-screen bg-zinc-50 dark:bg-zinc-950">
      <header className="relative aspect-video w-full overflow-hidden bg-zinc-200 dark:bg-zinc-800">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="100vw"
          className="object-cover"
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q=="
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 md:p-12">
          <span className="text-sm font-medium uppercase tracking-widest text-white/90">
            {project.category}
          </span>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl">
            {project.title}
          </h1>
        </div>
      </header>

      <div className="mx-auto max-w-4xl px-4 py-10 md:px-6 md:py-16">
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          {project.description}
        </p>

        {project.videoUrl && (
          <section className="mt-12">
            <h2 className="sr-only">Project video</h2>
            <div className="overflow-hidden rounded-lg bg-zinc-200 dark:bg-zinc-800">
              <ProjectVideo src={project.videoUrl} title={project.title} />
            </div>
          </section>
        )}

        {project.gallery.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-6 text-xl font-semibold text-zinc-900 dark:text-zinc-100">
              Gallery
            </h2>
            <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {project.gallery.map((src, i) => (
                <li key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                  <Image
                    src={src}
                    alt={`${project.title} gallery image ${i + 1}`}
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
