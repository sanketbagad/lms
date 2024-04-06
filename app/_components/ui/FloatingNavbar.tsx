'use client';
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { IoMenu } from "react-icons/io5";
import Link from "next/link";

const links = [
  { text: "Home", href: "/" },
  { text: "About Us", href: "#" },
  { text: "Courses", href: "#" },
  { text: "Contact", href: "#" }
];

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav className="relative px-4 py-4 flex justify-between items-center bg-black">
        <Link className="text-3xl font-bold leading-none text-white" href="/">
          Logo
        </Link>
        <button className="lg:hidden" onClick={toggleMenu}>
          {menuOpen ? (
            <MdClose className="h-6 w-6 text-white" />
          ) : (
            <IoMenu className="h-10 text-white" />
          )}
        </button>
        <ul
          className={`${
            menuOpen
              ? "block lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
              : "hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
          }`}
        >
          {links.map((link, index) => (
            <li key={index}>
              <a
                className="text-sm hover:text-blue-600 font-semibold lg:text-white text-black transition-colors duration-200"
                href={link.href}
              >
                {link.text}
              </a>
            </li>
          ))}
        </ul>
        <Link
          className="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-gray-50 hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-xl transition duration-200"
          href="/login"
        >
          Sign In
        </Link>
        <Link
          className="hidden lg:inline-block py-2 px-6 bg-blue-500 hover:bg-blue-600 text-sm text-white font-bold rounded-xl transition duration-200"
          href="/signup"
        >
          Sign up
        </Link>
      </nav>
      <div className={menuOpen ? "navbar-menu" : "hidden"}>
        <div className="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"></div>
        <nav className="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto">
          <div className="flex items-center mb-8">
            <a className="mr-auto text-3xl font-bold leading-none" href="#">
              Logo
            </a>
            <button className="navbar-close" onClick={toggleMenu}>
              <MdClose className="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500" />
            </button>
          </div>
          <div>
            <ul>
              {links.map((link, index) => (
                <li key={index} className="mb-1">
                  <a
                    className="block p-4 text-sm font-semibold text-gray-400 hover:bg-blue-50 hover:text-blue-600 rounded transition-colors duration-200"
                    href={link.href}
                  >
                    {link.text}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-auto">
            <div className="pt-6">
              <a
                className="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-xl transition duration-200"
                href="#"
              >
                Sign in
              </a>
              <a
                className="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-blue-600 hover:bg-blue-700 rounded-xl transition duration-200"
                href="#"
              >
                Sign Up
              </a>
            </div>
            <p className="my-4 text-xs text-center text-gray-400">
              <span>Copyright © 2021</span>
            </p>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Navbar;
