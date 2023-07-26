"use client";

import Image from "next/image";
import { signIn, signOut, useSession } from "next-auth/react";

const Auth = () => {
  const { data: session } = useSession();

  return (
    <div className="flex gap-2">
      {session?.user ? (
        <>
          <button onClick={() => signOut()}>Profile</button>
          <Image
            className="rounded-full"
            src={session?.user.image}
            width={30}
            height={30}
          />
        </>
      ) : (
        <button onClick={() => signIn("google")}>Login</button>
      )}
    </div>
  );
};

export default Auth;
