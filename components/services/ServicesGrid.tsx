"use client";

import React, { useState } from "react";
import type { ServiceCategory } from "@/lib/services";
import { ExpandableServiceCard } from "./ExpandableServiceCard";

/** Stagger delays for grid items (respect reduced motion in globals) */
function getStaggerClass(i: number) {
  const n = (i % 6) + 1;
  return `animate-in animate-in-${n}`;
}

interface ServicesGridProps {
  categories: ServiceCategory[];
}

export function ServicesGrid({ categories }: ServicesGridProps) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  let cellIndex = 0;

  return (
    <div
      className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-4 lg:gap-6 lg:auto-rows-[minmax(140px,auto)]"
      style={{ gridAutoFlow: "dense" }}
    >
      {categories.map((category, categoryIndex) => {
        const categoryCellIndex = cellIndex++;
        return (
          <React.Fragment key={category.id}>
            <article
              id={category.id}
              className={`${getStaggerClass(categoryCellIndex)} flex scroll-mt-24 flex-col justify-between rounded-2xl border-2 border-kracht-gruen/12 bg-kracht-gruen/5 p-6 shadow-[var(--shadow-card)] transition-shadow hover:shadow-[var(--shadow-card-hover)] sm:p-7 lg:col-span-2 lg:row-span-2 lg:min-h-[240px] lg:border-l-4 lg:border-l-orange-web`}
              aria-labelledby={`${category.id}-heading`}
            >
              <div>
                <span
                  className="mb-2 block text-xs font-semibold uppercase tracking-wider text-orange-web"
                  aria-hidden
                >
                  {String(categoryIndex + 1).padStart(2, "0")}
                </span>
                <h2
                  id={`${category.id}-heading`}
                  className="text-xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-2xl"
                  style={{ marginBottom: "0.5em" }}
                >
                  {category.title}
                </h2>
                <p className="text-sm leading-[1.5] text-kracht-gruen/80 sm:text-base">
                  {category.teaser}
                </p>
              </div>
            </article>
            {category.items.map((item) => {
              const itemIndex = cellIndex++;
              const itemKey = `${category.id}-${item.label}`;
              const isExpanded = expandedKey === itemKey;
              return (
                <ExpandableServiceCard
                  key={itemKey}
                  item={item}
                  categoryId={category.id}
                  isExpanded={isExpanded}
                  onToggle={() =>
                    setExpandedKey((k) => (k === itemKey ? null : itemKey))
                  }
                  staggerClass={getStaggerClass(itemIndex)}
                />
              );
            })}
          </React.Fragment>
        );
      })}
    </div>
  );
}
