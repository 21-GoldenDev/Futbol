"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "@/components/Logo";
import { CalendarIcon, CloseIcon, MenuIcon } from "@/components/Icons";
import { useBook } from "@/components/BookProvider";
import { NAV } from "@/lib/site";

export default function Header() {
  const { openBook } = useBook();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  function isActive(href: string) {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  }

  return (
    <header className="sticky top-0 z-50 overflow-visible border-b border-white/5 bg-black/95 backdrop-blur-md">
      <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto] items-center gap-4 overflow-visible px-4 py-2.5 lg:grid-cols-3 lg:px-8">
        <Link href="/" className="justify-self-start overflow-visible" onClick={() => setOpen(false)}>
          <Logo />
        </Link>

        <nav className="hidden items-center justify-center gap-6 lg:flex">
          {NAV.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-heading text-sm tracking-wide transition-colors ${
                isActive(link.href)
                  ? "border-b-2 border-gold pb-0.5 text-gold"
                  : "text-white/80 hover:text-gold"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end gap-3">
          <button
            type="button"
            onClick={() => openBook("single")}
            className="gold-btn inline-flex items-center gap-1.5 rounded-full px-3 py-2 text-xs sm:gap-2 sm:px-4 sm:text-sm"
          >
            <CalendarIcon />
            Book a Session
          </button>
          <button
            type="button"
            className="text-white lg:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-black px-4 py-4 lg:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`font-heading text-lg ${isActive(link.href) ? "text-gold" : "text-white/90"}`}
              >
                {link.label}
              </Link>
            ))}
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                openBook("single");
              }}
              className="gold-btn mt-2 inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm"
            >
              <CalendarIcon />
              Book a Session
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
