"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="bg-background text-foreground px-6 py-4 shadow-sm sticky top-0 z-50">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold tracking-tight hover:opacity-80 transition">
          Dev<span className="text-primary">Blog</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link href="/" className="hover:text-primary transition">Home</Link></li>
          <li><Link href="/blog" className="hover:text-primary transition">Blog</Link></li>
          <li><Link href="/about" className="hover:text-primary transition">About</Link></li>
          <li><Link href="/contact" className="hover:text-primary transition">Contact</Link></li>
        </ul>

        {/* Desktop Auth Buttons */}
        <div className="hidden md:flex gap-3">
          <Button variant="ghost">Sign In</Button>
          <Button variant="secondary">Sign Up</Button>
        </div>

        {/* Hamburger (Mobile Only) */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 space-y-4">
          <ul className="flex flex-col gap-4 text-sm font-medium">
            <li><Link href="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link href="/blog" onClick={toggleMenu}>Blog</Link></li>
            <li><Link href="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link href="/contact" onClick={toggleMenu}>Contact</Link></li>
          </ul>
          <div className="flex flex-col gap-2 mt-4">
            <Button className='cursor-pointer' variant="ghost">Sign In</Button>
            <Button className='cursor-pointer' variant="secondary">Sign Up</Button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;