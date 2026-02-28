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
        "group block overflow-hidden rounded-lg bg-baby-powder border border-kracht-gruen/10 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-web focus-visible:ring-offset-2 focus-visible:ring-offset-baby-powder",
        className
      )}
    >
      <div className="relative aspect-[16/10] overflow-hidden">
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition duration-300 group-hover:scale-[1.02]"
          placeholder="blur"
          blurDataURL={blurDataUrl}
        />
        <div className="absolute inset-0 bg-kracht-gruen/0 transition-colors duration-300 group-hover:bg-kracht-gruen/10" />
      </div>
      <div className="p-4 sm:p-5">
        <span className="text-xs font-semibold uppercase tracking-widest text-kracht-gruen/70">
          {project.category}
        </span>
        <h2 className="mt-1.5 text-lg font-semibold leading-[1.1] text-kracht-gruen group-hover:text-orange-web transition-colors">
          {project.title}
        </h2>
        <p className="mt-1.5 line-clamp-2 text-sm leading-[1.45] text-kracht-gruen/80">
          {project.description}
        </p>
      </div>
    </Link>
  );
}
