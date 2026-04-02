"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { navigation } from "@/lib/data";
import { asset } from "@/lib/utils";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-cavigal-dark text-white shadow-lg">
      {/* Top bar */}
      <div className="bg-cavigal-dark-deep text-sm py-1.5">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          <span className="hidden sm:inline text-white/60">
            Club de cyclisme depuis 1935 - Nice, Côte d&apos;Azur
          </span>
          <div className="flex gap-4 text-white/70 ml-auto">
            <a href="mailto:contact@cavigal-cyclisme.fr" className="hover:text-white transition">
              contact@cavigal-cyclisme.fr
            </a>
            <span className="hidden sm:inline">04 93 XX XX XX</span>
          </div>
        </div>
      </div>

      {/* Main nav */}
      <nav className="max-w-7xl mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <Image
              src={asset("/images/logo.png")}
              alt="Cavigal Nice Cyclisme"
              width={48}
              height={48}
              className="group-hover:scale-105 transition"
            />
            <div className="hidden sm:block">
              <div className="font-bold text-lg leading-tight">Cavigal Nice</div>
              <div className="text-cavigal-red text-xs tracking-widest uppercase font-semibold">
                Cyclisme
              </div>
            </div>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-cavigal-red text-white"
                      : "text-white/80 hover:bg-white/10 hover:text-white"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 pb-2 border-t border-white/20 pt-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition ${
                    isActive
                      ? "bg-cavigal-red text-white"
                      : "text-white/80 hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        )}
      </nav>
    </header>
  );
}
