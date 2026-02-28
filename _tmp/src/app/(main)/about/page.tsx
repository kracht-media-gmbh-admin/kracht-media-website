import { Metadata } from "next";
import LayeredTitle from "@/components/ui/LayeredTitle";
import PageHero from "@/components/layout/PageHero";
import TeamView from "@/app/_components/TeamView";

export const metadata: Metadata = {
  title: "Über uns | Kracht Media",
  description: "Das Team hinter Kracht Media.",
};

export default function AboutPage() {
  return (
    <main style={{ backgroundColor: "var(--color-background)" }}>
      <PageHero
        main="Wunderkinder"
        overlay="Wir sind"
        subtitles={["& die jüngste Werbeargentur Österreichs"]}
      />

      <div className="relative z-10 flex flex-col items-center -mt-32 mb-32">
        <p
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "1.5rem",
            textAlign: "center",
            color: "var(--color-primary)",
            maxWidth: "600px",
          }}
        >
          Aber wer steckt hinter dem Schabernack?
        </p>
      </div>

      <div style={{ position: 'relative', height: '0', overflow: 'visible', zIndex: 1 }}>
        {/* Question Mark SVG Background (Top Part - Green) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
          style={{
            top: "-200px",
            zIndex: 0,
            opacity: 0.15,
            width: "600px",
            height: "800px",
          }}
        >
          <svg
            viewBox="0 0 100 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", color: "var(--color-secondary)" }}
          >
            <path
              d="M50 120 C 50 115 50 110 50 105"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <circle cx="50" cy="135" r="8" fill="currentColor" />
            <path
              d="M30 40 C 30 10, 70 10, 70 40 C 70 70, 50 70, 50 90"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>
      </div>

      {/* 2. DARK CONTENT SECTION */}
      <section
        className="relative w-full py-24 px-8 overflow-hidden"
        style={{ backgroundColor: "var(--color-primary)", zIndex: 5 }}
      >
        {/* Question Mark SVG Background (Bottom Part - White) */}
        <div
          className="absolute left-1/2 transform -translate-x-1/2 pointer-events-none"
          style={{
            top: "-200px",
            zIndex: 0,
            opacity: 0.15,
            width: "600px",
            height: "800px",
          }}
        >
          <svg
            viewBox="0 0 100 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{ width: "100%", height: "100%", color: "white" }}
          >
            <path
              d="M50 120 C 50 115 50 110 50 105"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
            />
            <circle cx="50" cy="135" r="8" fill="currentColor" />
            <path
              d="M30 40 C 30 10, 70 10, 70 40 C 70 70, 50 70, 50 90"
              stroke="currentColor"
              strokeWidth="15"
              strokeLinecap="round"
              fill="none"
            />
          </svg>
        </div>

        <div className="max-w-4xl mx-auto mb-24 text-center z-10 relative">
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "2rem",
              lineHeight: "1.4",
              color: "white",
              fontWeight: 400,
            }}
          >
            Ein festes Team aus drei Wunderkindern. Unterschiedlich wie Tag & Nacht.
            <br />
            <span style={{ color: "var(--color-secondary)" }}>Aber gemeinsam unschlagbar.</span>
            <br />
            Wenn&apos;s darum geht Marken, lauter, klarer und stärker zu machen.
          </h2>
        </div>

        {/* Staggered Grid */}
        <div className="relative z-10">
          <TeamView />
        </div>
      </section>
    </main>
  );
}
