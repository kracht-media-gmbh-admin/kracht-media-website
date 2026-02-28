"use client";

import Script from "next/script";

/**
 * CookieList Component
 *
 * Renders the cookie list from cookie-manager.com.
 * This component loads the cookie-list script and provides the
 * placeholder div where the list will be injected.
 *
 * Usage: Import and place on the /cookies page.
 */
export default function CookieList() {
    return (
        <div>
            <Script
                src="//www.cookie-manager.com/0/37/cookie-list-0a4f9b179425d2710b85bd19661d0d09.js"
                strategy="lazyOnload"
            />
            <div className="js-acm-cookie-list"></div>
        </div>
    );
}
