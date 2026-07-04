import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token =
    req.cookies.get("admin_token")?.value;

  const pathname =
    req.nextUrl.pathname;

  // Allow login page
  if (pathname === "/admin/login") {
    return NextResponse.next();
  }

  // Protect admin routes
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(
        new URL("/admin/login", req.url)
      );
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};