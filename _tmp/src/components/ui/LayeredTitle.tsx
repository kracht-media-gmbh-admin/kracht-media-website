import { cn } from "@/lib/utils";

type LayeredTitleProps = {
  main: string;
  overlay?: string;
  subtitles?: string[];
  /** Use light colors for dark backgrounds */
  variant?: "default" | "dark";
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Additional className for the container */
  className?: string;
  style?: React.CSSProperties;
};

export default function LayeredTitle({
  main,
  overlay,
  subtitles,
  variant = "default",
  align = "center",
  className,
  style,
}: LayeredTitleProps) {
  const isDark = variant === "dark";

  const alignmentClasses = {
    left: "items-start text-left",
    center: "items-center text-center",
    right: "items-end text-right",
  };

  const overlayPositionClasses = {
    left: "left-0 -translate-x-4",
    center: "left-1/2 -translate-x-1/2 lg:-translate-x-2/3",
    right: "right-0 translate-x-4",
  };

  return (
    <div
      className={cn(
        "flex flex-col",
        alignmentClasses[align],
        className
      )}
      style={style}
    >
      <div className="relative">
        {/* Overlay Title - Decorative "pretty" font */}
        {overlay && (
          <span
            className={cn(
              "absolute whitespace-nowrap pointer-events-none z-10",
              "-left-4 md:-left-8 lg:-left-12" // Positioned to the left
            )}
            style={{
              top: "-0.4em", // Positioned to the top
              fontFamily: "var(--font-caveat), cursive",
              fontStyle: "normal",
              fontSize: "clamp(2rem, 20vw, 3rem)", // Significantly larger (approx 3x based on original 2.7-7rem)
              fontWeight: 700,
              color: "var(--color-accent)",
              letterSpacing: "0.02em",
              lineHeight: 1,
            }}
          >
            {overlay}
          </span>
        )}

        {/* Main Title */}
        <h1
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 8vw + 1rem, 7rem)",
            fontWeight: 400,
            color: isDark ? "var(--color-background)" : "var(--color-primary)",
            lineHeight: 0.9,
            margin: 0,
            position: "relative",
            zIndex: 5,
          }}
        >
          {main}
        </h1>
      </div>

      {/* Subtitles - Each on a new line */}
      {subtitles && subtitles.length > 0 && (
        <div
          className={cn(
            "flex flex-col gap-2 mt-6 md:mt-8",
            alignmentClasses[align]
          )}
        >
          {subtitles.map((line, index) => (
            <p
              key={index}
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1rem, 2vw + 0.5rem, 1.5rem)",
                fontWeight: 400,
                color: isDark ? "var(--color-text-muted-light)" : "var(--color-text-muted)",
                margin: 0,
                maxWidth: "40ch",
              }}
            >
              {line}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}

