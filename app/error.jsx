"use client";

import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function Error({ error, reset }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <h2>Something went wrong! {error.message}</h2>
      <button onClick={() => reset()}>Try again</button>
    </>
  );
}
