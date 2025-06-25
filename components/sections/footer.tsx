"use client";
import { motion } from "framer-motion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { FaInstagram, FaTiktok } from "react-icons/fa";

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mt-20 px-6 md:px-10 bg-background"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Paula Chinchilla. All rights reserved
        </div>

        <div className="flex gap-4">
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://instagram.com/bloodmoon_bh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="ghost" size="icon" asChild>
            <a
              href="https://tiktok.com/@bloodmoon_bh"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTiktok className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <Separator className="my-6" />

      <div className="text-xs text-center text-muted-foreground">
        Made with ❤️ by gregvp00
      </div>
    </motion.footer>
  );
}
