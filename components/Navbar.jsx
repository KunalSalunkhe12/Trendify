import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";
import Auth from "@/components/Auth";

const Navbar = () => {
  return (
    <nav className="bg_gradient text-white fixed w-full top-0 right-0 flex justify-between items-center py-2 px-6 shadow-md z-50">
      <Link href="/" className="text-2xl font-bold">
        Trendify
      </Link>
      <ul className="flex items-center justify-center gap-2 md:gap-4 font-medium">
        <li className="p-1">
          <Link href="/products">Explore</Link>
        </li>
        <li className="py-1 ">
          <Auth />
        </li>
        <li className="p-1">
          <Link href="cart">
            <BsFillCartFill size={20} />
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
