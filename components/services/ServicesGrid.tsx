"use client";

import React, { useState } from "react";
import type { ServiceCategory } from "@/lib/services";
import { ExpandableServiceCard } from "./ExpandableServiceCard";

/** Stagger delays for block items (respect reduced motion in globals) */
function getStaggerClass(i: number) {
  const n = (i % 6) + 1;
  return `animate-in animate-in-${n}`;
}

interface ServicesGridProps {
  categories: ServiceCategory[];
}

export function ServicesGrid({ categories }: ServicesGridProps) {
  const [expandedKey, setExpandedKey] = useState<string | null>(null);

  return (
    <div className="flex flex-col gap-20 sm:gap-24 lg:gap-32">
      {categories.map((category, categoryIndex) => {
        const blockStagger = getStaggerClass(categoryIndex);
        return (
          <section
            key={category.id}
            id={category.id}
            className={`${blockStagger} scroll-mt-24`}
            aria-labelledby={`${category.id}-heading`}
          >
            {/* Category header – no outer box, content on page background */}
            <header className="mb-10 border-b border-[#E5E5E5] pb-10 sm:mb-12 sm:pb-12 lg:mb-14 lg:pb-14">
              <span
                className="mb-2 block text-xs font-semibold uppercase tracking-wider text-orange-web"
                aria-hidden
              >
                {String(categoryIndex + 1).padStart(2, "0")}
              </span>
              <h2
                id={`${category.id}-heading`}
                className="text-xl font-bold leading-[1.1] tracking-tight text-kracht-gruen sm:text-2xl lg:text-3xl"
                style={{ marginBottom: "0.4em" }}
              >
                {category.title}
              </h2>
              <p className="max-w-2xl text-sm leading-[1.6] text-kracht-gruen/80 sm:text-base">
                {category.teaser}
              </p>
            </header>

            {/* Service list: single column, 1px dividers, no card boxes */}
            <ul className="flex flex-col" role="list">
              {category.items.map((item, itemIndex) => {
                const itemKey = `${category.id}-${item.label}`;
                const isExpanded = expandedKey === itemKey;
                const isLast = itemIndex === category.items.length - 1;
                return (
                  <li
                    key={itemKey}
                    className={isLast ? "" : "border-b border-[#E5E5E5]"}
                  >
                    <ExpandableServiceCard
                      item={item}
                      categoryId={category.id}
                      isExpanded={isExpanded}
                      onToggle={() =>
                        setExpandedKey((k) => (k === itemKey ? null : itemKey))
                      }
                      staggerClass={getStaggerClass(itemIndex)}
                      flat
                    />
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}
