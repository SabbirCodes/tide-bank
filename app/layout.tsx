import "./globals.css";
import { Roboto } from "next/font/google";
import type React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";
// import MenuBar from "@/components/Menu";
import Popup from "@/components/Popup";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export const metadata = {
  title: "Tide Bank",
  description: "Your modern fintech solution",
};

const navItems = [
  { name: "How it works", href: "/how-it-works" },
  { name: "Features", href: "/features" },
  { name: "Integrations", href: "/integrations" },
  { name: "For Business", href: "/for-business" },
  { name: "Careers", href: "/careers" },
  { name: "Company", href: "/company" },
];

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${roboto.className} bg-background text-foreground`}>
        <div className="flex flex-col min-h-screen">
          {/* Header */}
          <header className="bg-[#240642]/90 backdrop-blur-xl sticky top-0 z-50 border-b border-white/10">
            <nav className="w-full h-20 flex items-center justify-between px-2 lg:px-16">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                  <Image
                    src="/tide-logo.png"
                    alt="Tide Bank Logo"
                    fill
                    className="object-cover"
                    priority
                    sizes="(max-width: 640px) 100px, (max-width: 1024px) 128px, 160px"
                    quality={100}
                  />
                </div>
              </Link>

              {/* Navbar Links */}
              <ul className="hidden md:flex items-center gap-8 text-white text-lg font-semibold">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link
                      href={item.href}
                      className="relative hover:text-gray-300 after:content-[''] after:block after:w-0 after:h-0.5 after:bg-gray-100 after:transition-all after:duration-300 hover:after:w-full"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button
                type="button"
                className="sm:block px-6 py-2 text-white rounded-full bg-secondary hover:bg-blue-500 transition font-semibold shadow-md"
                aria-label="Get Help"
              >
                Get Help
              </button>
              {/* Menu bar */}
              {/* <div className="sm:hidden">
                <MenuBar />
              </div> */}
            </nav>
          </header>

          {/* Main Content */}
          <main className="flex-grow bg-grayLight">{children}</main>

          {/* Footer */}
          <Footer />
        </div>
        <Popup />
      </body>
    </html>
  );
}
