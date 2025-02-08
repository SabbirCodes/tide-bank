"use client";
import { useState } from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

export default function MenuBar() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the menu open and closed
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {/* Hamburger Icon */}
      <button
        onClick={toggleMenu}
        className="text-white text-3xl focus:outline-none"
        aria-label="Toggle Menu"
      >
        {isOpen ? <FaTimes /> : <FaBars />}
      </button>

      {/* Mobile Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full  flex flex-col items-end justify-center transform ${
          isOpen ? "-translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        {/* Close Button */}
        <button
          onClick={toggleMenu}
          className="absolute top-6 right-2 text-white text-3xl"
          aria-label="Close Menu"
        >
          <FaTimes />
        </button>

        {/* Navigation Links */}
        <ul className="text-white text-lg font-semibold space-y-6 mt-96">
          {[
            { name: "How it works", href: "/how-it-works" },
            { name: "Features", href: "/features" },
            { name: "Integrations", href: "/integrations" },
            { name: "For Business", href: "/for-business" },
            { name: "Careers", href: "/careers" },
            { name: "Company", href: "/company" },
          ].map((item, index) => (
            <li key={index}>
              <Link href={item.href} onClick={toggleMenu} className="hover:text-gray-300">
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
