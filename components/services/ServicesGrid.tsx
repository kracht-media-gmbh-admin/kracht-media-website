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
    <div className="flex flex-col gap-16 sm:gap-20 lg:gap-24">
      {categories.map((category, categoryIndex) => {
        const blockStagger = getStaggerClass(categoryIndex);
        return (
          <section
            key={category.id}
            id={category.id}
            className={`${blockStagger} scroll-mt-24 rounded-card border border-[#E5E5E5] bg-baby-powder/80 p-6 shadow-[var(--shadow-card)] sm:p-8 lg:p-10 max-sm:shadow-none`}
            aria-labelledby={`${category.id}-heading`}
          >
            {/* Category header – clearly separate from items */}
            <header className="mb-8 border-b border-kracht-gruen/10 pb-8 sm:mb-10 sm:pb-10 lg:mb-12 lg:pb-12">
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
              <p className="max-w-2xl text-sm leading-[1.55] text-kracht-gruen/80 sm:text-base">
                {category.teaser}
              </p>
            </header>

            {/* Service cards grid – only this category’s items */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
              {category.items.map((item, itemIndex) => {
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
            </div>
          </section>
        );
      })}
    </div>
  );
}
