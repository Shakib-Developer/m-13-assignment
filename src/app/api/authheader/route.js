import { NextResponse } from "next/server";
import { headers } from "next/headers";

export function POST() {
  const Heading = headers();

  let Token = Heading.get("token");

  return NextResponse.json({ token: Token });
}
