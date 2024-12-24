import { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  req.headers.set("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  req.headers.set(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );
  req.headers.set("Access-Control-Allow-Origin", "*");

  return req;
}
