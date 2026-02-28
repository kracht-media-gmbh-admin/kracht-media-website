import Image from "next/image";
import Link from "next/link";
import { type Project } from "@/lib/projects-data";
import { cn } from "@/lib/utils";

const blurDataUrl =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q==";

interface ProjectCardProps {
  project: Project;
  className?: string;
}

export function ProjectCard({ project, className }: ProjectCardProps) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "group block overflow-hidden rounded-2xl border border-kracht-gruen/10 bg-baby-powder transition-all duration-300",
        "hover:border-orange-web/30 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder",
        "shadow-[var(--shadow-card)]",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-500 ease-out group-hover:scale-105"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div
          className="absolute inset-0 bg-gradient-to-t from-kracht-gruen/40 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          aria-hidden
        />
      </div>
      <div className="p-5 sm:p-6">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-kracht-gruen/60">
          {project.category}
        </span>
        <h2 className="mt-2 text-xl font-semibold leading-[1.15] text-kracht-gruen transition-colors duration-200 group-hover:text-orange-web">
          {project.title}
        </h2>
        <p className="mt-2 line-clamp-2 text-sm leading-[1.5] text-kracht-gruen/75">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
