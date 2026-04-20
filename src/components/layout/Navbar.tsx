"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { MAIN_NAV } from "@/constants/navigation";
import { SITE_CONFIG } from "@/constants/site";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-ink-950/90 backdrop-blur-md border-b border-gold-500/10"
          : "bg-transparent"
      )}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 group">
          <Image
            src="/logo.png"
            alt={SITE_CONFIG.name}
            width={160}
            height={50}
            priority
            className="h-10 w-auto group-hover:scale-105 transition-transform"
          />
        </Link>

        {/* Desktop menu */}
        <ul className="hidden lg:flex items-center gap-1">
          {MAIN_NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-ink-200 hover:text-gold-400 transition rounded-md"
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={SITE_CONFIG.crm.login}
            className="px-4 py-2 text-sm font-medium text-ink-100 hover:text-gold-400 transition"
          >
            Login
          </a>

          <a
            href={SITE_CONFIG.crm.register}
            className="pulse-glow btn-gold px-5 py-2.5 text-sm font-semibold rounded-lg"
          >
            Open Account
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-white"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-ink-950 border-t border-gold-500/10">
          <ul className="px-4 py-4 space-y-1">
            {MAIN_NAV.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2.5 text-base text-ink-200 hover:text-gold-400 rounded-md"
                >
                  {item.label}
                </Link>
              </li>
            ))}

            <li className="pt-3 flex flex-col gap-2 border-t border-ink-700 mt-3">
              <a
                href={SITE_CONFIG.crm.login}
                className="px-4 py-2.5 text-center text-sm font-medium rounded-lg border border-gold-500/30 text-gold-400"
              >
                Login
              </a>

              <a
                href={SITE_CONFIG.crm.register}
                className="btn-gold px-4 py-2.5 text-center text-sm font-semibold rounded-lg"
              >
                Open Account
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}