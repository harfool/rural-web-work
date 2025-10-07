"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Process", href: "/process" },
  { name: "Projects", href: "/projects" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-xl shadow-md border-b border-gray-100 py-1"
          : "bg-white/60 backdrop-blur-lg border-b border-transparent py-1.5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-5 md:px-10">
        <Link href="/" className="flex items-center select-none leading-none">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex items-center"
          >
            <Image
              src="/images/logo3.png"
              alt="Growify India Logo"
              width={144}
              height={42}
              className="object-contain align-middle drop-shadow-sm"
              priority
            />
          </motion.div>
        </Link>

        <nav className="hidden md:flex items-center space-x-7">
          {navItems.map((item) => (
            <motion.div key={item.name} whileHover={{ y: -1 }}>
              <Link
                href={item.href}
                className="relative text-gray-800 hover:text-orange-600 text-[15px] font-medium tracking-wide transition group"
              >
                {item.name}
                <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-gradient-to-r from-orange-500 to-green-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </motion.div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-medium px-5 py-[6px] rounded-full shadow-md hover:shadow-lg transition-all duration-300 flex items-center gap-2 text-[14px]">
            Book a slot
            <ArrowUpRight className="h-4 w-4" />
          </Button>
        </div>

        <button
          className="md:hidden p-2 rounded-md bg-gray-100 hover:bg-gray-200 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white/90 backdrop-blur-lg border-t border-gray-100 shadow-lg"
          >
            <div className="flex flex-col items-center py-4 space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-gray-800 text-lg font-medium hover:text-orange-600 transition"
                >
                  {item.name}
                </Link>
              ))}
              <Button className="bg-gradient-to-r from-orange-500 to-green-600 hover:from-orange-600 hover:to-green-700 text-white font-medium px-6 py-2.5 rounded-full shadow-md hover:shadow-lg flex items-center gap-2">
                Book a slot
                <ArrowUpRight className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
