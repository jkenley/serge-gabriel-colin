import { cookies } from "next/headers";
import { NextResponse } from "next/server";

/* ─────────────────────────────────────────────────────────────
   PIN Verification API
   ─────────────────────────────────────────────────────────────
   Validates the submitted PIN against the env variable PIN_CODE.
   On success, sets an httpOnly cookie to persist the session.
   ───────────────────────────────────────────────────────────── */

const PIN_CODE = process.env.PIN_CODE;
const COOKIE_NAME = "pin_verified";
const COOKIE_MAX_AGE = 60 * 60 * 24 * 7; // 7 days

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { pin } = body;

    if (!pin || typeof pin !== "string") {
      return NextResponse.json(
        { success: false, message: "PIN is required" },
        { status: 400 },
      );
    }

    if (pin === PIN_CODE) {
      const cookieStore = await cookies();
      cookieStore.set(COOKIE_NAME, "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        maxAge: COOKIE_MAX_AGE,
        path: "/",
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json(
      { success: false, message: "Invalid PIN" },
      { status: 401 },
    );
  } catch {
    return NextResponse.json(
      { success: false, message: "Server error" },
      { status: 500 },
    );
  }
}
