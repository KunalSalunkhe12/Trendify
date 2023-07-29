import Link from "next/link";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";

const ProfileLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  if (!session) {
    redirect("/products");
  }
  return (
    <section className="my-20 shadow-lg w-full sm:h-3/4 md:w-2/3 lg:w-1/2 mx-auto">
      <nav className="bg-primary p-4 text-white font-semibold">
        <ul className="flex justify-center gap-4 md:gap-6">
          <Link href="/profile">Profile</Link>
          <Link href="/profile/orders">Order History</Link>
        </ul>
      </nav>
      {children}
    </section>
  );
};

export default ProfileLayout;
