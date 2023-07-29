"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { BsFillCartFill } from "react-icons/bs";
import { CartContext } from "./CartProvider";
import { useContext } from "react";

const NavAuth = () => {
  const { data: session } = useSession();
  const [showProfile, setShowProfile] = useState(false);
  const { state } = useContext(CartContext);
  const [isClient, setIsClient] = useState(false);

  useState(() => {
    setIsClient(true);
  }, []);

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
          <Link onClick={handleProfile} href="/profile">
            Profile
          </Link>
          <button
            className="cursor-pointer text-left"
            onClick={() => signOut()}
          >
            Sign Out
          </button>
        </div>
      </li>
      <li className="p-1">
        <Link href="/cart" className="flex gap-2">
          <BsFillCartFill size={20} />
          {Object.keys(state.products).length > 0 && (
            <span>{isClient ? Object.keys(state.products).length : ""}</span>
          )}
        </Link>
      </li>
    </>
  ) : (
    <button
      className="border-2 py-1 px-3 rounded-lg hover:bg-white hover:text-black transition duration-300"
      onClick={() => signIn("google")}
    >
      Sign In
    </button>
  );
};

export default NavAuth;
