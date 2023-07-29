import Link from "next/link";
import NavAuth from "@/components/NavAuth";

const Navbar = () => {
  return (
    <nav className="bg_gradient text-white fixed w-full top-0 right-0 flex justify-between items-center py-2 px-6 shadow-md z-50">
      <Link href="/" className="text-2xl font-bold">
        Trendify
      </Link>
      <ul className="flex items-center justify-center gap-4 md:gap-4 font-medium">
        <li className="p-1">
          <Link href="/products">Explore</Link>
        </li>
        <NavAuth />
      </ul>
    </nav>
  );
};

export default Navbar;
