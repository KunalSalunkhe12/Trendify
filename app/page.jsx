import Link from "next/link";
import Image from "next/image";
import womenImage from "@/assets/images/women.png";

export default function Home() {
  return (
    <section className="min-h-screen -mt-16 flex justify-center items-center">
      <div>
        <h1 className="text-4xl lg:text-5xl font-bold text_gradient">
          Stay Ahead. Trendify Your Style
        </h1>
        <p className="mt-4 md:text-lg w-3/4">
          Discover the Latest Fashion Trends and Elevate Your Wardrobe with
          Trendify, Your Fashion Destination.
        </p>
        <Link href="/products">
          <button className="btn_primary mt-4 py-2 px-6">Explore</button>
        </Link>
      </div>
      <Image
        src={womenImage}
        className="-z-10 bottom-0 right-0 absolute md:w-1/2"
        alt="Women holding shopping bag"
        priority={true}
        quality={100}
      />
    </section>
  );
}
