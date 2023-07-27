"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillCartFill } from "react-icons/bs";

const NavAuth = () => {
  const { data: session } = useSession();
  const [showProfile, setShowProfile] = useState(false);

  const handleProfile = () => {
    setShowProfile(!showProfile);
  };

  return session?.user ? (
    <>
      <li>
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
          <button
            className="cursor-pointer text-left"
            onClick={() => signOut()}
          >
            Logout
          </button>
        </div>
      </li>
      <li className="p-1">
        <Link href="cart">
          <BsFillCartFill size={20} />
        </Link>
      </li>
    </>
  ) : (
    <button
      className="border-2 py-1 px-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
      onClick={() => signIn("google")}
    >
      Login
    </button>
  );
};

export default NavAuth;
