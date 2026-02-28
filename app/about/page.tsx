import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";
import { buildPageMetadata } from "@/lib/metadata";
import { ScrollReveal } from "@/components/ui/ScrollReveal";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q==";

export const metadata: Metadata = buildPageMetadata({
  title: "Über uns",
  description:
    "Kracht Media – Team und Philosophie. Lauter als jeder Presslufthammer: Präzision, Stabilität, reduzierter Ausdruck in Film, Design und digitalen Erlebnissen.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <h1
          className="text-4xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-5xl"
          style={{ marginBottom: "2rem" }}
        >
          Über uns
        </h1>

        {/* Mobile: vertical image (4:5) then text. Desktop: large image with text overlapping onto it. */}
        <ScrollReveal>
        <div className="mt-14 lg:mt-20 relative">
          <div className="relative w-full aspect-[4/5] max-lg:max-h-[70vh] max-lg:mx-0 overflow-hidden rounded-card border border-[#E5E5E5] shadow-[var(--shadow-card)] max-sm:shadow-none lg:aspect-[21/9] lg:min-h-[420px]">
            <Image
              src={team.image}
              alt={`${team.name} – Team`}
              fill
              sizes="(max-width: 1024px) 100vw, 100vw"
              className="object-cover object-center"
              placeholder="blur"
              blurDataURL={BLUR}
            />
          </div>
          <div
            className="mt-8 lg:mt-0 lg:absolute lg:right-0 lg:bottom-0 lg:max-w-md lg:-translate-y-12 lg:translate-x-4 z-10 rounded-card border border-[#E5E5E5] bg-baby-powder/98 shadow-[var(--shadow-card)] p-6 sm:p-8 lg:p-8"
          >
            <h2
              className="text-2xl font-semibold leading-[1.15] text-kracht-gruen"
              style={{ marginBottom: "1.25rem" }}
            >
              {team.name}
            </h2>
            <p className="text-base leading-[1.6] text-kracht-gruen/90 whitespace-pre-line">
              {team.description}
            </p>
            <p className="mt-6 text-sm leading-[1.5] text-kracht-gruen/60">
              Präzision statt Lärm. Stabilität im Konzept, Kraft in der Umsetzung.
            </p>
          </div>
        </div>
        </ScrollReveal>
      </div>
    </main>
  );
}
