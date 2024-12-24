import { handleAuth } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextRequest, NextResponse } from "next/server";
export const GET = handleAuth();

export const OPTIONS = (req: NextRequest) => {
  const res = NextResponse.next();

  if (req.method === "OPTIONS") {
    res.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
    res.headers.set(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization"
    );
    res.headers.set("Access-Control-Allow-Origin", "*");

    return res;
  }
};
