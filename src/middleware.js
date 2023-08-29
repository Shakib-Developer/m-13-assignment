import { NextResponse } from "next/server";

export function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/api/authheader")) {
    const response = NextResponse.next();
    response.headers.set("Bearer", "Bearer-Athurization");
    return response;
  }
}
