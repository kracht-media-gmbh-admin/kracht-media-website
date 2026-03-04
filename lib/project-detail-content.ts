/**
 * Parses project detailText into a structured hierarchy for semantic HTML and styling.
 * Detects: meta (key-value), section headings, paragraphs, bullet lists.
 */

export type DetailBlock =
  | { type: "meta"; lines: string[] }
  | { type: "paragraph"; text: string }
  | { type: "section"; title: string; body: DetailBlock[] }
  | { type: "list"; items: string[] };

const BULLET = "• ";

function isMetaBlock(lines: string[]): boolean {
  if (lines.length === 0) return false;
  const metaPattern = /^[A-Za-zÄÖÜäöüß][^:\n]*:\s*.+$/;
  return lines.every((line) => line.trim() && metaPattern.test(line.trim()));
}

function looksLikeSectionTitle(line: string, hasMoreLines: boolean): boolean {
  if (!hasMoreLines || !line.trim()) return false;
  const t = line.trim();
  if (t.length > 75) return false;
  if (t.includes(": ") || (t.endsWith(":") && t.length < 50)) return true;
  const shortHeadings = [
    "Projektüberblick",
    "Zielsetzung",
    "Unser Fazit",
    "Warum das mit uns funktioniert",
    "Redaktionell durchdacht",
    "Von der Strategie bis zur Umsetzung",
    "Produktion mit Fokus",
    "Social Media & Grafik",
  ];
  return shortHeadings.some((h) => t === h || t.startsWith(h));
}

function parseBlock(block: string): DetailBlock[] {
  const trimmed = block.trim();
  if (!trimmed) return [];

  const lines = trimmed.split("\n").map((l) => l.trim()).filter(Boolean);
  if (lines.length === 0) return [];

  if (lines.length >= 1 && isMetaBlock(lines)) {
    return [{ type: "meta", lines }];
  }

  const bulletIndex = lines.findIndex((l) => l.startsWith(BULLET));
  const hasSectionTitle = lines.length > 1 && looksLikeSectionTitle(lines[0], true);

  if (hasSectionTitle) {
    const title = lines[0];
    const rest = lines.slice(1);
    const body: DetailBlock[] = [];
    let i = 0;
    while (i < rest.length) {
      if (rest[i].startsWith(BULLET)) {
        const items: string[] = [];
        while (i < rest.length && rest[i].startsWith(BULLET)) {
          items.push(rest[i].slice(BULLET.length).trim());
          i++;
        }
        body.push({ type: "list", items });
      } else {
        const paraLines: string[] = [];
        while (i < rest.length && !rest[i].startsWith(BULLET)) {
          paraLines.push(rest[i]);
          i++;
        }
        if (paraLines.length) {
          body.push({ type: "paragraph", text: paraLines.join(" ") });
        }
      }
    }
    return [{ type: "section", title, body }];
  }

  if (bulletIndex >= 0) {
    const before = lines.slice(0, bulletIndex);
    const items = lines.slice(bulletIndex).map((l) => (l.startsWith(BULLET) ? l.slice(BULLET.length).trim() : l));
    const result: DetailBlock[] = [];
    if (before.length) {
      result.push({ type: "paragraph", text: before.join(" ") });
    }
    result.push({ type: "list", items });
    return result;
  }

  return [{ type: "paragraph", text: lines.join(" ") }];
}

export function parseDetailText(detailText: string): DetailBlock[] {
  const blocks = detailText.split(/\n\n+/).map((b) => b.trim()).filter(Boolean);
  const result: DetailBlock[] = [];
  for (const block of blocks) {
    result.push(...parseBlock(block));
  }
  return result;
}
