import { NextResponse } from "next/server";

export function POST() {

    return NextResponse.json([
        {
            message: "Welcome to our API!",
            version: "1.0"
        }
     ])
}