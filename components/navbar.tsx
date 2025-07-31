import React from "react";
import Link from "next/link";
import Image from "next/image";
import { auth, signOut, signIn } from "@/auth";

import DarkModeButton from "./DarkModeButton";
import LoginButtons from "./LoginButtons";
const navbar = async () => {
  const session = await auth();
  return (
    <header className="px-5 py-3 bg-[#5ec452] dark:bg-[#344a26] text-black dark:text-white shadow-sm font-work-sans">
      <nav className="flex justify-between items-center">
        <Link href="/">
          <Image src="/logo-bg-remove.png" alt="logo" width={90} height={30} />
        </Link>

        <div className=" flex gap-5 items-center ">
          <Link href="/">Home</Link>
          <Link href="/roster">Roster</Link>
          {session && <Link href="/officer">Officer</Link>}
          <Link href="/apply">Applications</Link>

          {session && session.user ? (
            <>
              <button
                onClick={async () => {
                  "use server";
                  await signOut();
                }}
              >
                <span>Logout</span>
              </button>
              <Link href={`/user/${session.user.name}`}>
                <span>{session?.user.name}</span>
              </Link>
              {console.log(session)}
            </>
          ) : (
            <div className="flex gap-2">
              <LoginButtons />
            </div>
          )}

          <DarkModeButton />
        </div>
      </nav>
    </header>
  );
};

export default navbar;
