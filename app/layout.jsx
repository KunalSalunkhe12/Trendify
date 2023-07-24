import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata = {
  title: "Trendify",
  description:
    "Discover the latest fashion trends and elevate your style with Trendify, the ultimate fashion destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        <Navbar />
        <main className="px-4 lg:px-16">{children}</main>
      </body>
    </html>
  );
}
