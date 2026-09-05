"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/logo";

const NAV = [
  { href: "/#about", label: "About" },
  { href: "/#services", label: "Services" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/consultants", label: "Our Consultants" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "border-white/10 border-b bg-[#08080a]/85 backdrop-blur-xl"
          : "border-transparent border-b"
      )}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-6 px-5 py-4 sm:px-8">
        <Link
          aria-label="MCUBES Consultancy — home"
          className="group flex items-center gap-3"
          href="/"
          onClick={() => setOpen(false)}
        >
          <Logo className="h-11 transition-opacity duration-300 group-hover:opacity-90" />
          <span className="hidden border-white/15 border-l pl-3 text-[10px] text-white/45 uppercase tracking-[0.24em] sm:block">
            Consultancy
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-1 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/consultants" && pathname.startsWith("/consultants");
            return (
              <Link
                className={cn(
                  "relative rounded-full px-4 py-2 text-sm transition-colors",
                  active ? "text-white" : "text-white/60 hover:text-white"
                )}
                href={item.href}
                key={item.href}
              >
                {active && (
                  <motion.span
                    className="absolute inset-0 rounded-full bg-white/8 ring-1 ring-white/10"
                    layoutId="nav-pill"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span className="relative">{item.label}</span>
              </Link>
            );
          })}
          <Link
            className="ml-3 rounded-full bg-brand px-5 py-2 font-medium text-[#1a1405] text-sm transition-all hover:bg-brand-soft hover:shadow-[0_0_28px_-6px] hover:shadow-brand/60"
            href="/#contact"
          >
            Get in Touch
          </Link>
        </nav>

        <button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          className="rounded-lg p-2 text-white/70 transition-colors hover:bg-white/5 hover:text-white md:hidden"
          onClick={() => setOpen((v) => !v)}
          type="button"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            animate={{ height: "auto", opacity: 1 }}
            aria-label="Mobile"
            className="overflow-hidden border-white/10 border-t bg-[#08080a]/95 backdrop-blur-xl md:hidden"
            exit={{ height: 0, opacity: 0 }}
            initial={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.25, 0.4, 0.25, 1] as const }}
          >
            <ul className="flex flex-col gap-1 px-5 py-4">
              {NAV.map((item) => (
                <li key={item.href}>
                  <Link
                    className="block rounded-lg px-3 py-2.5 text-sm text-white/70 transition-colors hover:bg-white/5 hover:text-white"
                    href={item.href}
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
              <li className="mt-2">
                <Link
                  className="block rounded-full bg-brand px-4 py-2.5 text-center font-medium text-[#1a1405] text-sm"
                  href="/#contact"
                  onClick={() => setOpen(false)}
                >
                  Get in Touch
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
