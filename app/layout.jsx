import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Trendify",
  description:
    "Discover the latest fashion trends and elevate your style with Trendify, the ultimate fashion destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <main className="pt-20 px-4 pb-10 md:px-10 lg:px-16">{children}</main>
      </body>
    </html>
  );
}
