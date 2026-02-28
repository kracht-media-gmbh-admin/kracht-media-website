"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType, JSX } from "react";
import {
    fadeIn,
    fadeInUp,
    fadeInDown,
    fadeInLeft,
    fadeInRight,
    scaleIn,
    scaleInUp,
    slideInUp,
    slideInDown,
    slideInLeft,
    slideInRight,
    blurIn,
    rotateIn,
    textReveal,
    viewportSettings,
} from "@/lib/animations";

type AnimationType =
    | "fadeIn"
    | "fadeInUp"
    | "fadeInDown"
    | "fadeInLeft"
    | "fadeInRight"
    | "scaleIn"
    | "scaleInUp"
    | "slideInUp"
    | "slideInDown"
    | "slideInLeft"
    | "slideInRight"
    | "blurIn"
    | "rotateIn"
    | "textReveal";

type ViewportType = keyof typeof viewportSettings;

const animationMap: Record<AnimationType, Variants> = {
    fadeIn, fadeInUp, fadeInDown, fadeInLeft, fadeInRight,
    scaleIn, scaleInUp, slideInUp, slideInDown, slideInLeft,
    slideInRight, blurIn, rotateIn, textReveal,
};

interface AnimatedElementProps<T extends ElementType = "div"> {
    as?: T;
    animation?: AnimationType;
    variants?: Variants;
    delay?: number;
    duration?: number;
    viewport?: ViewportType;
    customViewport?: { once?: boolean; amount?: number };
    animateImmediately?: boolean;
    children?: React.ReactNode;
    className?: string;
}

/**
 * AnimatedElement - A versatile wrapper for scroll-triggered animations
 */
function AnimatedElement<T extends keyof JSX.IntrinsicElements = "div">({
    as,
    animation = "fadeInUp",
    variants: customVariants,
    delay = 0,
    duration,
    viewport = "once",
    customViewport,
    animateImmediately = false,
    children,
    className,
    ...props
}: AnimatedElementProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof AnimatedElementProps<T>>) {

    const prefersReducedMotion = useReducedMotion();
    const Tag = (as || "div") as any;

    if (prefersReducedMotion) {
        return (
            <Tag className={className} {...props}>
                {children}
            </Tag>
        );
    }

    const baseVariants = customVariants || animationMap[animation];

    const variants: Variants = {
        hidden: baseVariants.hidden,
        visible: {
            ...baseVariants.visible,
            transition: {
                ...(typeof baseVariants.visible === "object" && "transition" in baseVariants.visible
                    ? (baseVariants.visible.transition as any)
                    : {}),
                delay,
                ...(duration !== undefined ? { duration } : {}),
            },
        },
    };

    const viewportConfig = customViewport || viewportSettings[viewport];

    // Use type assertion here to stop TypeScript from attempting deep introspection
    const MotionComponent = (motion as any)[Tag] || motion.div;

    return (
        <MotionComponent
            className={className}
            variants={variants}
            initial="hidden"
            animate={animateImmediately ? "visible" : undefined}
            whileInView={animateImmediately ? undefined : "visible"}
            viewport={animateImmediately ? undefined : viewportConfig}
            {...(props as any)} // Breaking the infinite type recursion
        >
            {children}
        </MotionComponent>
    );
}

export default AnimatedElement;

/* ==========================================================================
   ANIMATED STAGGER CONTAINER
   ========================================================================== */

interface AnimatedStaggerContainerProps {
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
    delayChildren?: number;
    viewport?: ViewportType;
    as?: "div" | "ul" | "ol" | "section" | "article" | "main" | "nav";
}

export function AnimatedStaggerContainer({
    children,
    className,
    staggerDelay = 0.1,
    delayChildren = 0,
    viewport = "once",
    as = "div",
}: AnimatedStaggerContainerProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        const Component = as as any;
        return <Component className={className}>{children}</Component>;
    }

    const containerVariants: Variants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: staggerDelay,
                delayChildren,
            },
        },
    };

    const MotionComponent = (motion as any)[as];

    return (
        <MotionComponent
            className={className}
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={viewportSettings[viewport]}
        >
            {children}
        </MotionComponent>
    );
}

/* ==========================================================================
   ANIMATED STAGGER ITEM
   ========================================================================== */

interface AnimatedStaggerItemProps {
    children: React.ReactNode;
    className?: string;
    animation?: AnimationType;
    as?: "div" | "li" | "span" | "article";
}

export function AnimatedStaggerItem({
    children,
    className,
    animation = "fadeInUp",
    as = "div",
}: AnimatedStaggerItemProps) {
    const prefersReducedMotion = useReducedMotion();

    if (prefersReducedMotion) {
        const Component = as as any;
        return <Component className={className}>{children}</Component>;
    }

    const variants = animationMap[animation];
    const MotionComponent = (motion as any)[as];

    return (
        <MotionComponent className={className} variants={variants}>
            {children}
        </MotionComponent>
    );
}