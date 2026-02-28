import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";
import { buildPageMetadata } from "@/lib/metadata";

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

        <div className="mt-14 grid gap-14 lg:mt-20 lg:grid-cols-2 lg:gap-20 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-card border border-[#E5E5E5] shadow-[var(--shadow-card)] max-sm:shadow-none sm:aspect-video lg:aspect-[4/3]">
            <Image
              src={team.image}
              alt={`${team.name} – Team`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL={BLUR}
            />
          </div>
          <div>
            <h2
              className="text-2xl font-semibold leading-[1.15] text-kracht-gruen"
              style={{ marginBottom: "1.25rem" }}
            >
              {team.name}
            </h2>
            <p className="text-base leading-[1.55] text-kracht-gruen/90 whitespace-pre-line">
              {team.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
