import { Variants, Transition, Target, TargetAndTransition } from "framer-motion";

/* ==========================================================================
   FRAMER MOTION ANIMATION LIBRARY - Kracht Media
   ==========================================================================
   Reusable animation variants and utilities for consistent animations
   throughout the site.
   ========================================================================== */

// ============================================================================
// TRANSITION PRESETS
// ============================================================================

export const transitions = {
    /** Fast snap - for micro-interactions */
    fast: {
        type: "tween",
        duration: 0.15,
        ease: [0, 0, 0.2, 1],
    } as Transition,

    /** Normal smooth transition */
    normal: {
        type: "tween",
        duration: 0.3,
        ease: [0, 0, 0.2, 1],
    } as Transition,

    /** Slow, luxurious transition */
    slow: {
        type: "tween",
        duration: 0.5,
        ease: [0, 0, 0.2, 1],
    } as Transition,

    /** Spring with subtle bounce */
    spring: {
        type: "spring",
        stiffness: 300,
        damping: 25,
    } as Transition,

    /** Spring with noticeable bounce */
    springBouncy: {
        type: "spring",
        stiffness: 400,
        damping: 15,
    } as Transition,

    /** Smooth spring for large movements */
    springSmooth: {
        type: "spring",
        stiffness: 100,
        damping: 20,
    } as Transition,
} as const;

// ============================================================================
// FADE VARIANTS
// ============================================================================

export const fadeIn: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: transitions.normal,
    },
};

export const fadeInUp: Variants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.normal,
    },
};

export const fadeInDown: Variants = {
    hidden: {
        opacity: 0,
        y: -30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.normal,
    },
};

export const fadeInLeft: Variants = {
    hidden: {
        opacity: 0,
        x: -30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.normal,
    },
};

export const fadeInRight: Variants = {
    hidden: {
        opacity: 0,
        x: 30
    },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.normal,
    },
};

// ============================================================================
// SCALE VARIANTS
// ============================================================================

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.spring,
    },
};

export const scaleInUp: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
        y: 20
    },
    visible: {
        opacity: 1,
        scale: 1,
        y: 0,
        transition: transitions.spring,
    },
};

// ============================================================================
// SLIDE VARIANTS
// ============================================================================

export const slideInUp: Variants = {
    hidden: { y: "100%" },
    visible: {
        y: 0,
        transition: transitions.springSmooth,
    },
};

export const slideInDown: Variants = {
    hidden: { y: "-100%" },
    visible: {
        y: 0,
        transition: transitions.springSmooth,
    },
};

export const slideInLeft: Variants = {
    hidden: { x: "-100%" },
    visible: {
        x: 0,
        transition: transitions.springSmooth,
    },
};

export const slideInRight: Variants = {
    hidden: { x: "100%" },
    visible: {
        x: 0,
        transition: transitions.springSmooth,
    },
};

// ============================================================================
// STAGGER CONTAINER VARIANTS
// ============================================================================

/** Parent container for staggered children animations */
export const staggerContainer = (
    staggerDelay: number = 0.1,
    delayChildren: number = 0
): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            delayChildren,
        },
    },
});

/** Stagger from center outward */
export const staggerContainerCenter = (
    staggerDelay: number = 0.1
): Variants => ({
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: staggerDelay,
            staggerDirection: 1,
        },
    },
});

// ============================================================================
// STAGGER CHILD VARIANTS (use with staggerContainer)
// ============================================================================

export const staggerItem: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: transitions.normal,
    },
};

export const staggerItemScale: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: transitions.spring,
    },
};

export const staggerItemSlide: Variants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: transitions.normal,
    },
};

// ============================================================================
// SCROLL-TRIGGERED ANIMATION HOOKS
// ============================================================================

/**
 * Common viewport settings for scroll-triggered animations
 */
export const viewportSettings = {
    /** Trigger when 20% visible, animate once */
    once: { once: true, amount: 0.2 },
    /** Trigger when 30% visible, animate once */
    onceMore: { once: true, amount: 0.3 },
    /** Trigger when 50% visible, animate once */
    onceHalf: { once: true, amount: 0.5 },
    /** Repeatable animation when 20% visible */
    repeat: { once: false, amount: 0.2 },
    /** Repeatable animation when 50% visible */
    repeatHalf: { once: false, amount: 0.5 },
} as const;

// ============================================================================
// HOVER & TAP VARIANTS
// ============================================================================

export const hoverScale: TargetAndTransition = {
    scale: 1.05,
    transition: transitions.fast,
};

export const hoverScaleLight: TargetAndTransition = {
    scale: 1.02,
    transition: transitions.fast,
};

export const tapScale: TargetAndTransition = {
    scale: 0.95,
};

export const hoverLift: TargetAndTransition = {
    y: -4,
    transition: transitions.fast,
};

export const hoverGlow = (color: string = "rgba(250, 169, 22, 0.4)"): TargetAndTransition => ({
    boxShadow: `0 0 30px ${color}`,
    transition: transitions.normal,
});

// ============================================================================
// SPECIAL EFFECT VARIANTS
// ============================================================================

/** Text reveal from bottom with clip-path */
export const textReveal: Variants = {
    hidden: {
        clipPath: "inset(100% 0 0 0)",
        opacity: 0,
    },
    visible: {
        clipPath: "inset(0% 0 0 0)",
        opacity: 1,
        transition: {
            duration: 0.6,
            ease: [0.65, 0, 0.35, 1],
        },
    },
};

/** Blur in effect */
export const blurIn: Variants = {
    hidden: {
        opacity: 0,
        filter: "blur(10px)"
    },
    visible: {
        opacity: 1,
        filter: "blur(0px)",
        transition: transitions.slow,
    },
};

/** Rotate in */
export const rotateIn: Variants = {
    hidden: {
        opacity: 0,
        rotate: -10,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: transitions.spring,
    },
};

// ============================================================================
// MARQUEE / TICKER ANIMATION
// ============================================================================

/** Infinite scroll animation for tickers */
export const marquee = (duration: number = 20): Variants => ({
    animate: {
        x: [0, "-50%"],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
            },
        },
    },
});

export const marqueeReverse = (duration: number = 20): Variants => ({
    animate: {
        x: ["-50%", 0],
        transition: {
            x: {
                repeat: Infinity,
                repeatType: "loop",
                duration,
                ease: "linear",
            },
        },
    },
});

// ============================================================================
// PARALLAX UTILITIES
// ============================================================================

/**
 * Calculate parallax offset based on scroll progress
 * Use with useTransform from framer-motion
 * 
 * @example
 * const y = useTransform(scrollYProgress, [0, 1], parallaxRange(100));
 */
export const parallaxRange = (distance: number): [number, number] => [
    -distance / 2,
    distance / 2,
];

/**
 * Calculate scale based on scroll progress
 * 
 * @example
 * const scale = useTransform(scrollYProgress, [0, 1], scaleRange(0.8, 1.2));
 */
export const scaleRange = (min: number, max: number): [number, number] => [
    min,
    max,
];

// ============================================================================
// PAGE TRANSITION VARIANTS
// ============================================================================

export const pageTransition: Variants = {
    initial: {
        opacity: 0,
        y: 20,
    },
    animate: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0, 0, 0.2, 1],
        },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: {
            duration: 0.3,
            ease: [0.4, 0, 1, 1],
        },
    },
};

// ============================================================================
// LAYOUT ANIMATION HELPERS
// ============================================================================

/** Animate layout changes smoothly */
export const layoutTransition: Transition = {
    type: "spring",
    stiffness: 300,
    damping: 30,
};
