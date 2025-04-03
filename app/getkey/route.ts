import { NextResponse } from "next/server"

// Export a GET handler for the route
export async function GET() {
  // Return a redirect response with the target URL
  return NextResponse.redirect("https://ads.luarmor.net/get_key?for=-gbVzmkCtUCcn", {
    // Add status code for clarity
    status: 302,
  })
}

