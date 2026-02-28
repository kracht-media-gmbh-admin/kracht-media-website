import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { getProjectBySlug, getAllProjectSlugs, getProjectNeighbors } from "@/lib/projects";
import Button from "@/components/ui/Button";

type Props = {
  params: Promise<{ slug: string }>;
};

// Return a list of `params` to populate the [slug] dynamic segment
export async function generateStaticParams() {
  const slugs = await getAllProjectSlugs();
  return slugs.map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) return { title: "Projekt nicht gefunden" };

  return {
    title: `${project.title} | Kracht Media`,
    description: project.preamble,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  const { prev, next } = await getProjectNeighbors(slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[var(--color-background)]">
      {/* 
        HERO SECTION 
        Big hero image, filling the entire frame.
      */}
      <section className="relative h-[60vh] md:h-screen w-full overflow-hidden">
        <Image
          src={project.image.src}
          alt={project.image.alt}
          fill
          className="object-cover"
          priority
          unoptimized // Fix for static export error without restart
          placeholder="blur"
          blurDataURL={project.image.src} // Ideally use a real blurDataURL, but this prevents error if missing
        />
        {/* Optional dark overlay for better text contrast if we had text over it, 
             but design says title is BELOW. 
             However, usually a hero image looks better with a subtle overlay if it's purely decorative?
             Let's keep it clean as requested.
         */}
      </section>

      {/* 
        CONTENT SECTION
        One LARGE title of the project
        Smaller subtitle with the year, and the City/Area/Company
        Separated with a crisp, somewhat thick line
        Short preamble (2-3 sentences max, bold short paragraph)
        Longer text for the detailed description
      */}
      <section className="container mx-auto px-4 py-24 md:py-32 max-w-5xl">
        <div className="flex flex-col items-center text-center">

          {/* Title */}
          <h1 className="font-[var(--font-heading)] font-black text-5xl md:text-8xl lg:text-9xl mb-8 text-[var(--color-primary)] uppercase leading-tight md:leading-none tracking-tight">
            {project.title}
          </h1>

          {/* Subtitle */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-xl md:text-2xl font-[var(--font-heading)] text-[var(--color-secondary)] mb-10 font-medium uppercase tracking-widest">
            <span>{project.year}</span>
            <span className="w-2 h-2 rounded-full bg-[var(--color-secondary)]"></span>
            <span>{project.group}</span>
          </div>

          {/* Crisp Thick Line */}
          <div className="w-32 h-1.5 bg-[var(--color-primary)] mb-16 rounded-full"></div>

          {/* Content Container */}
          <div className="max-w-3xl flex flex-col items-center gap-10">
            {/* Preamble */}
            <p className="font-bold text-2xl md:text-3xl leading-snug text-[var(--color-primary)] text-center">
              {project.preamble}
            </p>

            {/* Detailed Description */}
            <div className="font-[var(--font-body)] text-lg md:text-xl leading-relaxed text-[var(--color-primary)]/80 space-y-6 text-left md:text-justify max-w-2xl">
              {project.description.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* External Media Button */}
            {project.mediaLink && (
              <div className="pt-8">
                <a href={project.mediaLink} target="_blank" rel="noopener noreferrer">
                  <Button variant="primary" size="lg">
                    Sie wollen noch mehr sehen?
                  </Button>
                </a>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 
        NAVIGATION FOOTER
        Buttons to left and right
      */}
      <section className="container mx-auto px-6 py-20 border-t border-[var(--color-primary)]/10">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end w-full gap-12 md:gap-4">
          {/* Previous Project */}
          <div className="w-full md:flex-1">
            {prev ? (
              <Link href={`/projects/${prev.slug}`} className="group flex flex-col items-center md:items-start gap-1">
                <span className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                  Vorheriges Projekt
                </span>
                <span className="text-3xl md:text-5xl font-black text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors uppercase leading-none text-center md:text-left">
                  {prev.title}
                </span>
                <span className="text-lg text-[var(--color-primary)]/60 group-hover:text-[var(--color-primary)]/80 transition-colors">
                  {prev.group}
                </span>
              </Link>
            ) : (
              <div className="hidden md:block opacity-0 pointer-events-none">Placeholder</div>
            )}
          </div>

          {/* Next Project */}
          <div className="w-full md:flex-1 flex justify-center md:justify-end">
            {next ? (
              <Link href={`/projects/${next.slug}`} className="group flex flex-col items-center md:items-end gap-1 text-center md:text-right">
                <span className="text-sm font-bold text-[var(--color-secondary)] uppercase tracking-wider mb-2 flex items-center gap-2">
                  Nächstes Projekt
                  <span className="group-hover:translate-x-1 transition-transform">→</span>
                </span>
                <span className="text-3xl md:text-5xl font-black text-[var(--color-primary)] group-hover:text-[var(--color-accent)] transition-colors uppercase leading-none">
                  {next.title}
                </span>
                <span className="text-lg text-[var(--color-primary)]/60 group-hover:text-[var(--color-primary)]/80 transition-colors">
                  {next.group}
                </span>
              </Link>
            ) : (
              <div className="hidden md:block opacity-0 pointer-events-none">Placeholder</div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}