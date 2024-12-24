"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

export default async function Home() {
  const { isAuthenticated } = getKindeServerSession();
  const isAuth = await isAuthenticated();

  return (
    <>
      {isAuth ? (
        <div>
          <Link href="/api/auth/logout">Logout</Link>
        </div>
      ) : (
        <>
          <div>
            <Link href="/api/auth/login">Login</Link>
          </div>
          <div>
            <Link href="/api/auth/register">Sign up</Link>
          </div>
        </>
      )}
    </>
  );
}
