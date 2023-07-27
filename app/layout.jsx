import "./globals.css";
import Navbar from "@/components/Navbar";
import AuthProvider from "@/components/AuthProvider";
import CartProvider from "@/components/CartProvider";

export const metadata = {
  title: "Trendify",
  description:
    "Discover the latest fashion trends and elevate your style with Trendify, the ultimate fashion destination",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <main className="px-4 lg:px-16">{children}</main>
          </CartProvider>
        </AuthProvider>
      </body>
    </html>
  );
}
