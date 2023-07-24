import Link from "next/link";
import { BsFillCartFill } from "react-icons/bs";

const Navbar = () => {
  const login = false;
  return (
    <nav className="bg_gradient text-white fixed w-full top-0 right-0 flex justify-between items-center py-4 px-6 shadow-md">
      <Link href="/" className="text-2xl font-bold">
        Trendify
      </Link>
      <ul className="flex items-center gap-4 md:gap-8 font-medium">
        <li className="p-1">
          <Link href="/products">Explore</Link>
        </li>
        <li className="py-1 px-4 group border-2 border-white rounded-md hover:bg-white cursor-pointer duration-300 ease-in-out">
          {login ? (
            <Link href="/profile">Profile</Link>
          ) : (
            <Link href="/login" className="group-hover:text_gradient">
              Login
            </Link>
          )}
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
