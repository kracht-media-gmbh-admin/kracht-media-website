"use client";

import Image from "next/image";
import { type ServiceItem } from "@/lib/services";
import { cn } from "@/lib/utils";

const BLUR =
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAgGBgcGBQgHBwcJCQgKDBQNDAsLDBkSEw8UHRofHh0aHBwgJC4nICIsIxwcKDcpLDAxNDQ0Hyc5PTgyPC4zNDL/2wBDAQkJCQwLDBgNDRgyIRwhMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjL/wAARCAAIAAoDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAUH/8QAIhAAAgEDBAMBAAAAAAAAAAAAAQIDAAQRBRIhMQYTQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQACAwEAAAAAAAAAAAAAAAABAgADESH/2gAMAwEAAhEDEEA/AL+napeW1nDBBcyxxRqFREcgKPQFFS7j5C4SaREmlVVYgDeeBRU2Z2J7MRQqgYn//2Q==";

interface ExpandableServiceCardProps {
  item: ServiceItem;
  categoryId: string;
  isExpanded: boolean;
  onToggle: () => void;
  staggerClass: string;
}

const hasExpandContent = (item: ServiceItem) =>
  Boolean(item.expandDescription || item.image || (item.subCategories && item.subCategories.length > 0));

export function ExpandableServiceCard({
  item,
  categoryId,
  isExpanded,
  onToggle,
  staggerClass,
}: ExpandableServiceCardProps) {
  const canExpand = hasExpandContent(item);
  const cardId = `${categoryId}-${item.label}`;

  return (
    <div
      id={cardId}
      role="region"
      aria-expanded={isExpanded}
      aria-labelledby={`${cardId}-label`}
      className={cn(
        staggerClass,
        "flex flex-col overflow-hidden rounded-xl border border-kracht-gruen/12 bg-baby-powder text-left shadow-[var(--shadow-soft)] transition-all duration-150 ease-out",
        "hover:border-kracht-gruen/20 hover:shadow-[var(--shadow-card)]",
        "focus-within:ring-2 focus-within:ring-orange-web focus-within:ring-offset-2 focus-within:ring-offset-baby-powder",
        canExpand && "active:scale-[0.98] motion-reduce:active:scale-100",
        canExpand && "hover:scale-[1.02] hover:-translate-y-0.5 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0",
        isExpanded && "border-orange-web/40 shadow-[var(--shadow-card-hover)] ring-2 ring-orange-web/20"
      )}
    >
      <button
        type="button"
        onClick={canExpand ? onToggle : undefined}
        disabled={!canExpand}
        aria-controls={`${cardId}-content`}
        aria-expanded={isExpanded}
        id={`${cardId}-label`}
        className={cn(
          "flex w-full items-center justify-between gap-3 px-5 py-4 transition-colors duration-150 sm:px-6 sm:py-5",
          canExpand && "cursor-pointer hover:bg-kracht-gruen/5",
          !canExpand && "cursor-default"
        )}
      >
        <span className="text-sm font-semibold text-kracht-gruen sm:text-base">
          {item.label}
        </span>
        {canExpand && (
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-kracht-gruen/20 text-kracht-gruen transition-all duration-150 ease-out",
              isExpanded && "border-orange-web bg-orange-web/15 rotate-180",
              canExpand && "group-hover:border-orange-web/50"
            )}
            aria-hidden
          >
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-current"
            >
              <path
                d="M2 4.5L6 8.5L10 4.5"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </span>
        )}
      </button>

      <div
        id={`${cardId}-content`}
        role="region"
        aria-labelledby={`${cardId}-label`}
        className={cn(
          "grid transition-[grid-template-rows] duration-200 ease-out",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        )}
      >
        <div className="overflow-hidden">
          <div className="border-t border-kracht-gruen/10 px-5 pb-5 pt-4 sm:px-6 sm:pb-6 sm:pt-4">
            {item.expandDescription && (
              <p className="text-sm leading-[1.55] text-kracht-gruen/85">
                {item.expandDescription}
              </p>
            )}
            {(item.image || (item.subCategories && item.subCategories.length > 0)) && (
              <div className="mt-4 flex flex-col gap-4">
                {item.image && (
                  <div className="relative aspect-[16/10] overflow-hidden rounded-lg border border-kracht-gruen/10">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, 50vw"
                      className="object-cover"
                      placeholder="blur"
                      blurDataURL={BLUR}
                    />
                  </div>
                )}
                {item.subCategories && item.subCategories.length > 0 && (
                  <ul className="flex flex-wrap gap-2" role="list">
                    {item.subCategories.map((sub) => (
                      <li key={sub}>
                        <span className="inline-flex rounded-lg bg-kracht-gruen/10 px-3 py-1.5 text-xs font-medium text-kracht-gruen">
                          {sub}
                        </span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
