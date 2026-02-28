import Image from "next/image";
import LayeredTitle from "@/components/ui/LayeredTitle";
import { cn } from "@/lib/utils";

type PageHeroProps = {
    main: string;
    overlay?: string;
    subtitles?: string[];
    /** Color variant */
    variant?: "default" | "dark";
    className?: string;
    style?: any;
    as?: any;
};

export default function PageHero({
    main,
    overlay,
    subtitles,
    variant = "default",
    className,
    style,
    as: Tag = "section",
}: PageHeroProps) {
    const isDark = variant === "dark";

    return (
        <Tag
            className={cn(
                "relative w-full h-[100svh] flex flex-col items-center px-6 overflow-hidden",
                isDark ? "bg-[var(--color-primary)]" : "bg-[var(--color-background)]",
                className
            )}
            style={style}
        >
            {/* 1. Logo at the top */}
            <div className="pt-12 md:pt-16 flex justify-center w-full z-20">
                <Image
                    src={isDark ? "/assets/wordmark-light.svg" : "/assets/wordmark-dark.svg"}
                    alt="Kracht Media Logo"
                    width={180}
                    height={60}
                    className="h-auto w-auto max-w-[150px] md:max-w-[200px]"
                    priority
                />
            </div>

            {/* 2. Layered Title centered in the middle */}
            <div className="flex-grow flex flex-col items-center justify-center w-full z-10">
                <LayeredTitle
                    main={main}
                    overlay={overlay}
                    subtitles={subtitles}
                    variant={variant}
                    align="center"
                />
            </div>

            {/* Optional: Add a scroll indicator or just padding at the bottom */}
            <div className="pb-12 h-20 w-full flex items-center justify-center">
                {/* Placeholder for scroll indicator if desired later */}
            </div>
        </Tag>
    );
}
