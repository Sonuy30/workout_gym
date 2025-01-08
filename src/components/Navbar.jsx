"use client";

import Link from "next/link";
import { useState } from "react";
import { useSession, signIn, signOut } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex justify-between items-center bg-blue-500 text-white p-4 shadow-md">
      {/* Logo */}
      <div className="text-2xl font-bold">Workout Hub</div>

      {/* Links */}
      <ul className="flex space-x-4">
        <li>
          <Link href="/" className="hover:text-green-300">
            Home
          </Link>
        </li>
        <li>
          <Link href="/about" className="hover:text-green-300">
            About
          </Link>
        </li>
        <li>
          <Link href="/registration" className="hover:text-green-300">
            Registration
          </Link>
        </li>
      </ul>

      {/* Profile Section */}
      <div className="relative">
        {session ? (
          <>
            {/* Logged-in View */}
            <button
              className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:bg-green-400"
              onClick={() => setShowMenu(!showMenu)}
            >
              <img
                src={session.user.image || "/default-profile.png"}
                alt="Profile"
                className="w-8 h-8 rounded-full"
              />
            </button>
            {showMenu && (
              <ul className="absolute right-0 mt-2 w-40 bg-white text-black rounded shadow-lg">
                <li className="px-4 py-2 hover:bg-gray-100">
                  <Link href="/profile">View Profile</Link>
                </li>
                <li className="px-4 py-2 hover:bg-gray-100">
                  <button onClick={() => signOut()}>Logout</button>
                </li>
              </ul>
            )}
          </>
        ) : (
          <>
            {/* Logged-out View */}
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-400"
              onClick={() => signIn("google")}
            >
              Login
            </button>
          </>
        )}
      </div>
    </nav>
  );
}
