import { cn } from "@/lib/utils";

/* ==========================================================================
   CONTAINER COMPONENT
   ==========================================================================
   A max-width container for content with consistent horizontal padding.
   ========================================================================== */

type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** Maximum width of the container */
    size?: ContainerSize;
    /** Center the container */
    centered?: boolean;
    /** Additional className */
    className?: string;
    /** Use as a different element */
    as?: "div" | "article" | "main" | "header" | "footer" | "nav";
}

const sizeClasses: Record<ContainerSize, string> = {
    sm: "max-w-[var(--container-sm)]",
    md: "max-w-[var(--container-md)]",
    lg: "max-w-[var(--container-lg)]",
    xl: "max-w-[var(--container-xl)]",
    "2xl": "max-w-[var(--container-2xl)]",
    full: "max-w-full",
};

/**
 * Container - A max-width wrapper for content
 * 
 * @example
 * <Container size="xl" centered>
 *   <h1>Page Content</h1>
 * </Container>
 * 
 * @example
 * // Full width with horizontal padding
 * <Container size="full">
 *   <nav>...</nav>
 * </Container>
 */
export default function Container({
    children,
    size = "xl",
    centered = true,
    className,
    as: Component = "div",
    ...props
}: ContainerProps) {
    return (
        <Component
            className={cn(
                sizeClasses[size],
                centered && "mx-auto",
                "w-full",
                className
            )}
            {...props}
        >
            {children}
        </Component>
    );
}
