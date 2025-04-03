import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  // Check if the request is for the /getkey path
  if (request.nextUrl.pathname === "/getkey") {
    // Redirect to the target URL
    return NextResponse.redirect(new URL("https://ads.luarmor.net/get_key?for=-gbVzmkCtUCcn"))
  }
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/getkey",
}

