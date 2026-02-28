"use client";

import { cn } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";

/* ==========================================================================
   ROUNDEDBOX COMPONENT
   ==========================================================================
   A reusable wrapper that provides uniform corners, backdrops, and colors.
   ========================================================================== */

export type RoundedBoxVariant =
    | "glass"
    | "surface"
    | "primary"
    | "accent"
    | "dark"
    | "outline"
    | "none";

interface RoundedBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    /** The style variant of the box */
    variant?: RoundedBoxVariant;
    /** Padding size (Tailwind class) */
    padding?: string;
    /** Border radius (Tailwind class) */
    radius?: string;
    /** Whether to apply an overflow-hidden to clip children */
    clip?: boolean;
    /** Add a "frame" depth effect using inner shadows */
    depth?: boolean;
    /** Enable the interactive yellow sheen on hover */
    hasSheen?: boolean;
    /** Use as a different element */
    as?: React.ElementType;
}

const variantClasses: Record<RoundedBoxVariant, string> = {
    glass: "bg-[var(--color-background-tr)] backdrop-blur-[var(--glass-blur)] border-[var(--glass-border)] shadow-[var(--glass-shadow)]",
    surface: "bg-[var(--color-surface)]",
    primary: "bg-[var(--color-primary)] text-[var(--color-background)]",
    accent: "bg-[var(--color-accent)] text-[var(--color-primary)]",
    dark: "bg-[var(--color-dark)] text-[var(--color-background)]",
    outline: "border-2 border-[var(--color-primary)] bg-transparent",
    none: "",
};

/**
 * RoundedBox - A reusable wrapper for consistent card-like styling
 * 
 * @example
 * <RoundedBox variant="glass" padding="p-8">
 *   <video ... />
 * </RoundedBox>
 */
export default function RoundedBox({
    children,
    variant = "glass",
    padding = "p-6",
    radius = "rounded-3xl",
    clip = true,
    depth = false,
    hasSheen = false,
    as: Component = "div",
    className,
    ...props
}: RoundedBoxProps) {
    // Determine if we should use a motion component or standard component
    const Wrapper = hasSheen ? motion(Component as any) : Component;

    return (
        <Wrapper
            className={cn(
                variantClasses[variant],
                radius,
                padding,
                clip && "overflow-hidden",
                "relative transition-all duration-300 group",
                className
            )}
            initial={hasSheen ? "initial" : undefined}
            whileHover={hasSheen ? "hover" : undefined}
            {...props}
        >
            {/* Inner Depth / Frame Effect */}
            {depth && (
                <div
                    className={cn(
                        "absolute inset-0 pointer-events-none z-10",
                        radius
                    )}
                    style={{ boxShadow: "var(--shadow-inset-frame)" }}
                />
            )}

            {/* Content */}
            <div className="relative z-0 h-full w-full">
                {children}
            </div>

            {/* Yellow Sheen Effect */}
            {hasSheen && (
                <motion.div
                    className="absolute inset-0 z-20 pointer-events-none"
                    variants={{
                        initial: { x: "-100%", opacity: 0 },
                        hover: {
                            x: "100%",
                            opacity: 1,
                            transition: {
                                duration: 0.8,
                                ease: "easeInOut"
                            }
                        }
                    }}
                    style={{
                        background: "var(--sheen-gradient)",
                        mixBlendMode: "screen",
                    }}
                />
            )}
        </Wrapper>
    );
}
