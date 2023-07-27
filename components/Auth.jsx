"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState } from "react";

const Auth = () => {
  const { data: session } = useSession();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  return session?.user ? (
    <>
      <button onClick={handleProfile}>
        <Image
          className="rounded-full"
          src={session?.user.image}
          width={30}
          height={30}
          alt="Profile Picture"
        />
      </button>
      <div
        className={
          showProfile
            ? `absolute right-20 z-10 mt-2 bg-black py-4 px-6 rounded-lg flex flex-col gap-4`
            : "hidden"
        }
      >
        <p className="text_gradient font-semibold">{session?.user.name}</p>
        <Link href="/profile">Profile</Link>
        <button className="cursor-pointer text-left" onClick={() => signOut()}>
          Logout
        </button>
      </div>
    </>
  ) : (
    <button onClick={() => signIn("google")}>Login</button>
  );
};

export default Auth;
