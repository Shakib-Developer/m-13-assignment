import { NextResponse } from "next/server";

export async function GET(req, res) {
  const response = NextResponse.redirect(new URL("/cookie", req.url));

  response.cookies.set({
    name: "theme",
    value: "dark",
    path: "/",
    httpOnly: true,
    secure: true,
  });

  return response;
}
