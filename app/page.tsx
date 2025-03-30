"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();

  return (
    <div>
      {session ? (
        <>
          <p>Welcome, {session.user?.name}!</p>
          <button onClick={() => signOut()}>Log out</button>
        </>
      ) : (
        <button onClick={() => signIn("google")}>Log in with Google</button>
      )}
    </div>
  );
}
