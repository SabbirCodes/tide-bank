"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NotFoundPage = () => {
  const pathname = usePathname(); // Get the current URL path

  return (
    <div className="h-screen bg-gray-800 flex flex-col items-center justify-center">
      <p className="mt-2 text-white">The page is <span className="font-bold">{pathname}</span></p>

      <Link href="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
        Go Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
