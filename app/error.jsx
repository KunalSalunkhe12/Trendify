"use client";

import { useEffect } from "react";
import Link from "next/link";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="min-h-screen flex flex-col gap-6 justify-center items-center">
      <h2 className="text-xl md:text-2xl lg:3xl font-semibold">
        Something went wrong!
      </h2>
      <div className="flex gap-4">
        <button className="btn_primary py-2 px-4" onClick={() => reset()}>
          Try again
        </button>
        <Link href="/">
          <button className="btn_primary py-2 px-4">Home</button>
        </Link>
      </div>
    </div>
  );
}
