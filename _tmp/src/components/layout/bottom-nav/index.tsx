"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { ROUTES_MAIN } from "@/config/site";
import styles from "./BottomNav.module.css";

export default function BottomNav() {
    const [isVisible, setIsVisible] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const [isHiddenByFooter, setIsHiddenByFooter] = useState(false);
    const [hasScrolledOnce, setHasScrolledOnce] = useState(false);
    const navRef = useRef<HTMLDivElement>(null);
    const lastScrollY = useRef(0);
    const scrollThreshold = 50; // Minimum scroll distance to close menu

    // Handle scroll to show/hide nav and detect footer
    const handleScroll = useCallback(() => {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;

        // Check if user has scrolled past the initial hero section
        if (scrollY > 100 && !hasScrolledOnce) {
            setHasScrolledOnce(true);
            setIsVisible(true);
        }

        // Check if nav should be hidden by footer
        const footerElement = document.querySelector("footer");
        if (footerElement) {
            const footerRect = footerElement.getBoundingClientRect();
            const navHeight = 100; // Height of nav button + padding

            // If footer is entering the viewport from bottom
            if (footerRect.top <= windowHeight - navHeight) {
                setIsHiddenByFooter(true);
            } else {
                setIsHiddenByFooter(false);
            }
        }

        // Close menu on scroll (only if scrolled more than threshold)
        if (isOpen && Math.abs(scrollY - lastScrollY.current) > scrollThreshold) {
            setIsOpen(false);
        }

        lastScrollY.current = scrollY;
    }, [hasScrolledOnce, isOpen]);

    // Handle click outside to close menu
    const handleClickOutside = useCallback((event: MouseEvent) => {
        if (navRef.current && !navRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    }, []);

    // Setup scroll and click listeners
    useEffect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        document.addEventListener("mousedown", handleClickOutside);

        // Initial check
        handleScroll();

        return () => {
            window.removeEventListener("scroll", handleScroll);
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [handleScroll, handleClickOutside]);

    // Prevent body scroll when menu is open (optional, for mobile)
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const toggleMenu = (e: React.MouseEvent) => {
        e.preventDefault();
        e.stopPropagation();
        // Update last scroll position when opening menu so small scrolls don't immediately close it
        lastScrollY.current = window.scrollY;
        setIsOpen((prev) => !prev);
    };

    return (
        <>
            {/* Overlay when menu is open */}
            <div
                className={`${styles.overlay} ${isOpen ? styles.overlayVisible : ""}`}
                aria-hidden="true"
            />

            {/* Navigation Container */}
            <div
                ref={navRef}
                className={`${styles.container} ${isVisible && !isHiddenByFooter ? styles.visible : ""
                    } ${isHiddenByFooter ? styles.hiddenByFooter : ""}`}
                role="navigation"
                aria-label="Main navigation"
            >
                {/* Growing Menu */}
                <div
                    className={`${styles.menu} ${isOpen ? styles.menuOpen : ""}`}
                >
                    <nav className={styles.menuInner}>
                        {ROUTES_MAIN.map((link, index) => {
                            const reverseIndex = ROUTES_MAIN.length - 1 - index;
                            return (
                                <Link
                                    key={link.href}
                                    href={link.href}
                                    className={styles.menuItem}
                                    style={{
                                        "--item-index": reverseIndex,
                                        transitionDelay: isOpen
                                            ? `${reverseIndex * 80}ms`
                                            : `${index * 40}ms`,
                                    } as React.CSSProperties}
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            );
                        })}
                    </nav>
                </div>

                {/* Hamburger Button */}
                <button
                    className={`${styles.burger} ${isOpen ? styles.burgerOpen : ""}`}
                    onClick={toggleMenu}
                    aria-expanded={isOpen}
                    aria-label={isOpen ? "Close menu" : "Open menu"}
                >
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                    <span className={styles.burgerLine} />
                </button>
            </div>
        </>
    );
}
