import Link from 'next/link';
import React from 'react';
import { User, UserCheck } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="px-4 sm:px-6 md:px-8 py-4 flex flex-col sm:flex-row sm:justify-between sm:items-center bg-white shadow-md">
      <Link href="/">
        <h1 className="font-bold text-xl sm:text-2xl text-blue-950">Learn-Made</h1>
      </Link>

      <ul className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-0 font-bold text-white">
        <li>
          <Link
            href="/login"
            className="bg-blue-600 px-4 py-2 flex items-center gap-2 rounded-lg hover:bg-blue-800 transition-all text-sm sm:text-base"
          >
            <UserCheck size={18} /> Login
          </Link>
        </li>
        <li>
          <Link
            href="/signup"
            className="bg-blue-950 px-4 py-2 flex items-center gap-2 rounded-lg hover:bg-blue-900 transition-all text-sm sm:text-base"
          >
            <User size={18} /> Signup
          </Link>
        </li>
      </ul>
    </nav>
  );
}
