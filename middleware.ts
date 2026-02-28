import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * Middleware: GEO-awareness via Vercel's x-vercel-ip-country header.
 * On Vercel, this header is set automatically from the request's geo data.
 * We pass it to the response and optionally to the app for A/B or locale logic.
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  const country = request.headers.get("x-vercel-ip-country");
  if (country) {
    response.headers.set("x-vercel-ip-country", country);
    // Optional: set a cookie so Server Components can read geo without headers
    response.cookies.set("x-vercel-ip-country", country, {
      path: "/",
      maxAge: 60 * 60 * 24, // 24h
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: [
    /*
     * Match all paths except static files and api routes.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
  ],
};
