import {
  parseDetailText,
  type DetailBlock,
} from "@/lib/project-detail-content";

const contentClasses = {
  prose: "text-base leading-[1.55] text-kracht-gruen/90 sm:text-lg",
  lead: "text-lg leading-[1.5] text-kracht-gruen sm:text-xl",
  heading: "text-xl font-semibold leading-[1.15] text-kracht-gruen sm:text-2xl",
  meta: "text-sm leading-[1.5] text-kracht-gruen/70",
};

function BlockRenderer({
  block,
  index,
  isFirstParagraph,
}: {
  block: DetailBlock;
  index: number;
  isFirstParagraph: boolean;
}) {
  if (block.type === "meta") {
    return (
      <dl
        className={`grid gap-x-4 gap-y-0.5 rounded-lg border border-kracht-gruen/10 bg-kracht-gruen/5 px-4 py-4 ${contentClasses.meta} sm:grid-cols-[minmax(0,10rem)_1fr] sm:px-5`}
        style={{ marginBottom: "1.5rem" }}
        aria-label="Projektinformationen"
      >
        {block.lines.map((line, i) => {
          const colon = line.indexOf(": ");
          const term = colon > 0 ? line.slice(0, colon) : line;
          const def = colon > 0 ? line.slice(colon + 2) : "";
          return (
            <span key={i} className="contents">
              <dt className="min-w-0 font-medium text-kracht-gruen/80">{term}</dt>
              <dd className="min-w-0 text-kracht-gruen/90">{def}</dd>
            </span>
          );
        })}
      </dl>
    );
  }

  if (block.type === "paragraph") {
    const isLead = isFirstParagraph && block.text.length < 220;
    return (
      <p
        className={
          isLead
            ? `${contentClasses.lead} mb-6`
            : `${contentClasses.prose} mb-5`
        }
        style={isLead ? { marginBottom: "1.75rem" } : undefined}
      >
        {block.text}
      </p>
    );
  }

  if (block.type === "list") {
    return (
      <ul
        className="mb-6 list-none space-y-2 pl-0"
        style={{ marginBottom: "1.75rem" }}
        role="list"
      >
        {block.items.map((item, i) => (
          <li
            key={i}
            className={`flex gap-3 ${contentClasses.prose}`}
          >
            <span
              className="mt-[0.5em] h-1.5 w-1.5 shrink-0 rounded-full bg-orange-web"
              aria-hidden
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    );
  }

  if (block.type === "section") {
    return (
      <section
        className="mb-12 sm:mb-14"
        style={{ marginBottom: "3rem" }}
        aria-labelledby={`section-${index}`}
      >
        <h2
          id={`section-${index}`}
          className={`${contentClasses.heading} border-l-4 border-orange-web pl-4`}
          style={{ marginBottom: "1.25rem", paddingLeft: "1rem" }}
        >
          {block.title}
        </h2>
        <div className="pl-4 sm:pl-5" style={{ paddingLeft: "1rem" }}>
          {block.body.map((b, i) => (
            <BlockRenderer
              key={i}
              block={b}
              index={i}
              isFirstParagraph={false}
            />
          ))}
        </div>
      </section>
    );
  }

  return null;
}

interface ProjectDetailContentProps {
  detailText: string;
}

export function ProjectDetailContent({ detailText }: ProjectDetailContentProps) {
  const blocks = parseDetailText(detailText);
  const firstParagraphIndex = blocks.findIndex((b) => b.type === "paragraph");

  return (
    <div className="project-detail-content">
      {blocks.map((block, index) => (
        <BlockRenderer
          key={index}
          block={block}
          index={index}
          isFirstParagraph={
            block.type === "paragraph" && index === firstParagraphIndex
          }
        />
      ))}
    </div>
  );
}
