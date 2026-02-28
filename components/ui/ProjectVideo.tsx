/**
 * High-performance project video player.
 * Stub: uses native <video> with performance-friendly attributes.
 * Can be swapped for next-video (Mux) when video hosting is configured.
 */
interface ProjectVideoProps {
  src: string;
  title: string;
  poster?: string;
  className?: string;
}

export function ProjectVideo({
  src,
  title,
  poster,
  className,
}: ProjectVideoProps) {
  return (
    <video
      className={className}
      controls
      preload="metadata"
      playsInline
      aria-label={`Video: ${title}`}
      poster={poster}
    >
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
