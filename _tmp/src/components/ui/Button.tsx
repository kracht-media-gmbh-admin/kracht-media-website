import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    size?: "sm" | "md" | "lg";
    isLoading?: boolean;
}

export default function Button({
    children,
    className,
    variant = "primary",
    size = "md",
    isLoading,
    disabled,
    ...props
}: ButtonProps) {
    const baseStyles =
        "relative font-black uppercase tracking-wide rounded-lg transition-all duration-200 overflow-hidden group active:scale-95 disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed border-2";

    const variants = {
        primary:
            "bg-[var(--color-accent)] border-[var(--color-accent)] text-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.3)] hover:-translate-y-0.5 active:shadow-none active:translate-y-0",
        secondary:
            "bg-[var(--color-surface)] border-[var(--color-surface)] text-[var(--color-primary)] shadow-[4px_4px_0px_0px_rgba(0,0,0,0.1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-0.5 active:shadow-none active:translate-y-0",
        outline:
            "bg-transparent border-white/30 text-white hover:border-white hover:bg-white/10",
    };

    const sizes = {
        sm: "px-4 py-2 text-sm",
        md: "px-8 py-3 text-base",
        lg: "px-8 py-4 md:px-12 md:py-5 text-lg md:text-2xl",
    };

    return (
        <button
            className={cn(baseStyles, variants[variant], sizes[size], className)}
            disabled={isLoading || disabled}
            {...props}
        >
            <span className="relative z-10 flex items-center justify-center gap-2">
                {isLoading ? "Laden..." : children}
            </span>
            {/* Glare effect for Primary/Secondary */}
            {variant !== "outline" && (
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out pointer-events-none" />
            )}
        </button>
    );
}
