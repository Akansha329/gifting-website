'use client';

import Link from "next/link";
import Image from "next/image"
import { useState } from "react";
import { useRouter } from "next/navigation";

export function Navbar() {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;
    router.push(`/search?q=${query}`);
  };

  return (
    <nav className="bg-white shadow px-4 py-3 flex items-center justify-between">

      {/* LEFT */}
      <Link href="/" className="flex items-center gap-2">
        <Image
          src="/giftlogo.png"
          alt="Gift Logo"
          width={80}
          height={80}
        />
        <span className="text-xl font-bold text-blue-600">
          GiftyGo
        </span>
      </Link>

      {/* CENTER - SEARCH */}
      <form
        onSubmit={handleSearch}
        className="hidden md:flex items-center border rounded-lg overflow-hidden h-10 w-1/3"
      >
        <input
          type="text"
          placeholder="Search gift cards..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="px-3 h-full w-full outline-none text-black"
        />
        <button className="bg-blue-600 text-white px-4 h-full">
          Search
        </button>
      </form>

      {/* RIGHT */}
      <div className="flex items-center gap-4 text-gray-700">

        <Link href="/">Home</Link>
        <Link href="/categories">Categories</Link>

        {/* LOGIN */}
        <Link
          href="/login"
          className="px-3 py-1 border rounded hover:bg-gray-100"
        >
          Login
        </Link>

        {/* SIGNUP */}
        <Link
          href="/signup"
          className="px-3 py-1 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Sign Up
        </Link>

      </div>
    </nav>
  );
}