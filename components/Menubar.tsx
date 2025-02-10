"use client"
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Handle body overflow when menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto"; // Cleanup on unmount
    };
  }, [isOpen]);

  return (
    <div>
      <button
        onClick={() => setIsOpen(true)}
        className="p-2 text-white"
        aria-label="Open menu"
      >
        
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Full-Screen Menu */}
      <div
        className={`fixed inset-0 z-50 mt-16 flex flex-col p-6 h-screen bg-[#240642] transition-transform ease-in-out duration-500 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        aria-hidden={!isOpen}
      >

        {/* Menu Links */}
        <nav className="flex flex-col space-y-6 text-lg font-medium text-white">
          {[
            { href: "/how-it-works", label: "How it works" },
            { href: "/features", label: "Features" },
            { href: "/integrations", label: "Integrations" },
            { href: "/for-business", label: "For Business" },
            { href: "/careers", label: "Careers" },
            { href: "/company", label: "Company" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="hover:text-blue-600"
              onClick={() => setIsOpen(false)} // Close menu on selection
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Overlay to close menu */}
      {isOpen && (
        <div
          className="fixed inset-0 z-10"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </div>
  );
}

