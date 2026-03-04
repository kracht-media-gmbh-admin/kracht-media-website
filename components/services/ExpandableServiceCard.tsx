"use client";

import { type ServiceItem } from "@/lib/services";
import { cn } from "@/lib/utils";

interface ExpandableServiceCardProps {
  item: ServiceItem;
  categoryId: string;
  isExpanded: boolean;
  onToggle: () => void;
  staggerClass: string;
  /** Flat list style: no card border/shadow, dividers between items */
  flat?: boolean;
}

const hasExpandContent = (item: ServiceItem) => Boolean(item.expandDescription);

export function ExpandableServiceCard({
  item,
  categoryId,
  isExpanded,
  onToggle,
  staggerClass,
  flat = false,
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
        "group flex flex-col overflow-hidden text-left transition-all duration-200 ease-out",
        !flat && [
          "rounded-card-inner border border-[#E5E5E5] bg-baby-powder shadow-[var(--shadow-soft)] max-sm:shadow-none",
          "hover:border-kracht-gruen/20 hover:shadow-[var(--shadow-card)]",
          "focus-within:ring-2 focus-within:ring-orange-web focus-within:ring-offset-2 focus-within:ring-offset-baby-powder",
          canExpand && "active:scale-[0.98] motion-reduce:active:scale-100",
          canExpand && "hover:scale-[1.02] hover:-translate-y-0.5 motion-reduce:hover:scale-100 motion-reduce:hover:translate-y-0",
          isExpanded && "border-orange-web/40 shadow-[var(--shadow-card-hover)] ring-2 ring-orange-web/20",
        ],
        flat && "focus-within:ring-2 focus-within:ring-orange-web focus-within:ring-offset-2 focus-within:ring-offset-baby-powder focus-within:ring-inset"
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
          "flex w-full items-center justify-between gap-3 py-5 transition-colors duration-200 sm:py-6",
          flat ? "px-3 sm:px-4" : "px-5 sm:px-6 rounded-t-card-inner",
          canExpand && "cursor-pointer hover:bg-transparent",
          !flat && canExpand && "hover:bg-kracht-gruen/8",
          !canExpand && "cursor-default"
        )}
      >
        <span className="text-sm font-semibold text-kracht-gruen sm:text-base">
          {item.label}
        </span>
        {canExpand && (
          <span
            className={cn(
              "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#E5E5E5] text-kracht-gruen transition-all duration-200 ease-out",
              flat && "border-kracht-gruen/15",
              isExpanded && "border-orange-web bg-orange-web/10 rotate-180",
              canExpand && "group-hover:border-orange-web/50 group-hover:bg-orange-web/5"
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
          <div
            className={cn(
              "border-t border-[#E5E5E5] pb-6 pt-4 sm:pb-8 sm:pt-5",
              flat ? "px-3 sm:px-4" : "px-5 sm:px-6"
            )}
          >
            {item.expandDescription && (
              <p className="text-sm leading-[1.6] text-kracht-gruen/85">
                {item.expandDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
