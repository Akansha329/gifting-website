"use client";

import { useState } from "react";
import Sidebar from "./Sidebar";

export default function Navbar() 
{
const [isOpen, setIsOpen] = useState(false);
const [showCategories, setShowCategories] = useState(false);

return (
<div className="border-b bg-white sticky top-0 z-50">

               {/* Sidebar */}
  <Sidebar isOpen={isOpen} setIsOpen={setIsOpen} />

               {/* TOP NAVBAR */}
  <div className="flex items-center gap-4 px-6 py-3">

               {/* ☰ Sidebar */}
  <div className="text-xl cursor-pointer" onClick={() => setIsOpen(true)}>
          ☰
  </div>

               {/* Logo */}
  <img src="/giftlogo.png" className="h-20" />

               {/* Search */}
  <input
          type="text"
          placeholder="Search vouchers..."
          className="flex-1 px-4 py-2 border rounded-full"/>

                {/* Right */}
    <span className="cursor-pointer hover:text-green-600">
      Login / Signup
      </span>

      <span className="cursor-pointer hover:text-green-600">
        Cart 🛒
        </span>
      </div>

               {/* BOTTOM NAVBAR */}
  <div className="relative flex gap-6 px-6 py-2 text-sm border-t bg-gray-50">

               {/* Categories Dropdown Button */}
  <div className="cursor-pointer hover:text-green-600 font-medium"
          onClick={() => setShowCategories(!showCategories)}>
          Categories ⌄
        </div>

                {/* Other categories */}
        <span className="cursor-pointer hover:text-green-600">
          Electronics
        </span>
        <span className="cursor-pointer hover:text-green-600">
          Food
        </span>
        <span className="cursor-pointer hover:text-green-600">
          Travel
        </span>
        <span className="cursor-pointer hover:text-green-600">
          Shopping
        </span>
        <span className="cursor-pointer hover:text-green-600">
          Fashion
        </span>

               {/* Dropdown */}
        {showCategories && (
          <div className="absolute top-10 left-6 bg-white shadow-md rounded p-4 w-48 z-50">
            <ul className="space-y-2 text-sm">
              <li className="hover:text-green-600 cursor-pointer">Electronics</li>
              <li className="hover:text-green-600 cursor-pointer">Food</li>
              <li className="hover:text-green-600 cursor-pointer">Travel</li>
              <li className="hover:text-green-600 cursor-pointer">Shopping</li>
              <li className="hover:text-green-600 cursor-pointer">Fashion</li>
              <li className="hover:text-green-600 cursor-pointer">Gift Cards</li>
            </ul>
          </div>
        )}

      </div>
    </div>
  );
}