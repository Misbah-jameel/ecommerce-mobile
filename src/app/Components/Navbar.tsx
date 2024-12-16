import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { IoSearch } from "react-icons/io5";
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center max-w-6xl mx-auto p-4 md:p-10">
      <h2 className="text-xl md:text-2xl font-bold">
        Exclusive
      </h2>
      <button className="md:hidden z-50">
        <FaHeart className="text-2xl" /> {/* Example icon */}
      </button>

      {/* Main Navigation */}
      <nav className="hidden md:block">
        <ul className="flex gap-x-4">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/contact">CONTACT</Link></li> {/* Correct path */}
          <li><Link href="/about">ABOUT</Link></li> {/* Correct path */}
          <li><Link href="/signup">SIGNUP</Link></li> {/* Correct path */}
        </ul>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed top-0 right-0 h-full w-72 bg-white shadow-lg transform translate-x-full transition-transform duration-300 ease-in-out md:hidden">
        <ul className="flex flex-col gap-y-4 p-8 mt-16">
          <li><Link href="/">HOME</Link></li>
          <li><Link href="/contact">CONTACT</Link></li> {/* Correct path */}
          <li><Link href="/about">ABOUT</Link></li> {/* Correct path */}
          <li><Link href="/signup">SIGNUP</Link></li> {/* Correct path */}
        </ul>
      </nav>

      {/* Search Box */}
      <div className="relative border-2 hidden md:flex justify-between">
        <input type="text" className="w-full p-2" placeholder="What are you looking for?" />
        <div className="flex justify-center items-center p-2">
          <IoSearch className="text-xl" />
        </div>
      </div>

      {/* Icons */}
      <div className="flex gap-x-4 items-center">
        <FaHeart className="text-xl text-gray-500" />
        <FaCartShopping className="text-xl text-gray-500" />
        <div className="relative inline-block">
          <Link href="/account">
            <button className="p-2 rounded-full hover:bg-gray-100 focus:outline-none">
              <FaUserAlt className="text-xl text-gray-700" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
