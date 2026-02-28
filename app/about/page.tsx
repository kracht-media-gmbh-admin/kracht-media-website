import type { Metadata } from "next";
import Image from "next/image";
import { team } from "@/lib/data";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Kracht Media – Team und Philosophie. Lauter als jeder Presslufthammer: Präzision, Stabilität, reduzierter Ausdruck.",
};

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
        <h1
          className="text-3xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-4xl lg:text-5xl"
          style={{ marginBottom: "1.5rem" }}
        >
          Über uns
        </h1>

        <div className="mt-12 grid gap-10 lg:mt-16 lg:grid-cols-2 lg:gap-16 lg:items-start">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg border border-kracht-gruen/10 sm:aspect-video lg:aspect-[4/3]">
            <Image
              src={team.image}
              alt={`${team.name} – Team`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              placeholder="blur"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q=="
            />
          </div>
          <div>
            <h2 className="text-xl font-semibold leading-[1.1] text-kracht-gruen sm:text-2xl" style={{ marginBottom: "1rem" }}>
              {team.name}
            </h2>
            <p className="text-base leading-[1.45] text-kracht-gruen/90 whitespace-pre-line">
              {team.description}
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
