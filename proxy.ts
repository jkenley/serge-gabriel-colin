import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";
import { routing } from "./i18n/routing";

const intlMiddleware = createMiddleware(routing);

const COOKIE_NAME = "pin_verified";

/* Paths that should NOT require PIN authentication */
const PUBLIC_PATHS = ["/pin", "/api/"];

function isPublicPath(pathname: string): boolean {
  return PUBLIC_PATHS.some((path) => pathname.includes(path));
}

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  /* Let API routes and public paths through without PIN check */
  if (isPublicPath(pathname)) {
    return intlMiddleware(request);
  }

  /* Check for PIN auth cookie */
  const isVerified = request.cookies.get(COOKIE_NAME)?.value === "true";

  if (!isVerified) {
    /* Determine locale from the URL or use default */
    const segments = pathname.split("/").filter(Boolean);
    const locales = routing.locales as readonly string[];
    const locale =
      segments.length > 0 && locales.includes(segments[0])
        ? segments[0]
        : routing.defaultLocale;

    const pinUrl = new URL(`/${locale}/pin`, request.url);
    return NextResponse.redirect(pinUrl);
  }

  /* Authenticated — proceed with i18n middleware */
  return intlMiddleware(request);
}

export const config = {
  matcher: "/((?!api|_next|_vercel|.*\\..*).*)",
};
