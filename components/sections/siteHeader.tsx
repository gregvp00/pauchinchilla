"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import MainNav from "@/components/sections/mainNav";
import MobileNav from "@/components/sections/mobileNav";

function useScrollDirection() {
  const [scrollDir, setScrollDir] = useState<"up" | "down">("up");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const onScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setScrollDir("down");
      } else if (currentScrollY < lastScrollY) {
        setScrollDir("up");
      }
      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
}

export default function SiteHeader() {
  const scrollDirection = useScrollDirection();

  return (
    <motion.header
      initial={{ y: 0 }}
      animate={{ y: scrollDirection === "down" ? "-100%" : "0%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className="fixed top-0 left-0 right-0 z-50 w-full"
    >
      <div className="flex justify-normal md:justify-center items-center h-14">
        <MainNav />
        <MobileNav />
      </div>
    </motion.header>
  );
}
