import { cn } from "@/lib/utils";

/* ==========================================================================
   SECTION COMPONENT
   ==========================================================================
   A consistent wrapper for page sections with proper padding and
   background color options.
   ========================================================================== */

type BackgroundVariant =
    | "primary"      // --color-primary (dark green)
    | "background"   // --color-background (cream/white)
    | "surface"      // --color-surface (light green)
    | "dark"         // --color-dark (near black)
    | "accent";      // --color-accent (orange)

type PaddingSize = "none" | "sm" | "md" | "lg";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    /** Background color variant */
    bg?: BackgroundVariant;
    /** Padding size - defaults to 'md' */
    padding?: PaddingSize;
    /** Full height (100vh) */
    fullHeight?: boolean;
    /** Minimum height (100vh) */
    minFullHeight?: boolean;
    /** Additional className */
    className?: string;
    /** Use as a different element */
    as?: "section" | "div" | "article" | "main" | "header" | "footer";
}

const bgClasses: Record<BackgroundVariant, string> = {
    primary: "bg-[var(--color-primary)] text-[var(--color-text-light)]",
    background: "bg-[var(--color-background)] text-[var(--color-text-primary)]",
    surface: "bg-[var(--color-surface)] text-[var(--color-text-primary)]",
    dark: "bg-[var(--color-dark)] text-[var(--color-text-light)]",
    accent: "bg-[var(--color-accent)] text-[var(--color-text-primary)]",
};

const paddingClasses: Record<PaddingSize, string> = {
    none: "",
    sm: "section-sm",
    md: "section",
    lg: "section-lg",
};

/**
 * Section - A consistent wrapper for page sections
 * 
 * @example
 * <Section bg="primary" padding="lg">
 *   <Container>
 *     <h2>Section Title</h2>
 *   </Container>
 * </Section>
 */
export default function Section({
    children,
    bg = "background",
    padding = "md",
    fullHeight = false,
    minFullHeight = false,
    className,
    as: Component = "section",
    ...props
}: SectionProps) {
    return (
        <Component
            className={cn(
                bgClasses[bg],
                paddingClasses[padding],
                fullHeight && "h-screen",
                minFullHeight && "min-h-screen",
                "relative w-full",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
