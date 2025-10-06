"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import NewNav from "@/components/sections/newNav";
import NewNavMobile from "@/components/sections/newNavMobile";
import SideBar from "@/components/sections/sideBar";

export default function SiteHeader({
  activeSection,
}: {
  activeSection: string | null;
}) {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [hoveredSection, setHoveredSection] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  // controls whether title is hidden
  const [hideSidebarTitle, setHideSidebarTitle] = useState(false);
  const hideTimerRef = useRef<number | null>(null);

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const handleHoverSection = (sectionId: string | null) => {
    setHoveredSection(sectionId);
  };

  // media query for mobile detection
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1280px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);
    update(mq);
    if (mq.addEventListener) mq.addEventListener("change", update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", update);
      else mq.removeListener(update);
    };
  }, []);

  // Main logic:
  // - Show title immediately on mount or when activeSection changes.
  // - Start a 3s timer to hide it, but DO NOT start/continue the timer while hovering.
  // - If hovering, clear timer and keep title visible.
  useEffect(() => {
    // always show initially when activeSection changes
    setHideSidebarTitle(false);

    // clear any existing timer
    if (hideTimerRef.current) {
      clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }

    // If user is hovering, keep it visible and don't start the hide timer.
    if (isNavHovered) {
      return () => {
        if (hideTimerRef.current) {
          clearTimeout(hideTimerRef.current);
          hideTimerRef.current = null;
        }
      };
    }

    // Otherwise start the 3s timer to hide the title
    hideTimerRef.current = window.setTimeout(() => {
      setHideSidebarTitle(true);
      hideTimerRef.current = null;
    }, 2000);

    return () => {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
    };
    // re-run effect when activeSection or hover state changes
  }, [activeSection, isNavHovered]);

  // Also clear timer immediately on hover enter and show title
  useEffect(() => {
    if (isNavHovered) {
      if (hideTimerRef.current) {
        clearTimeout(hideTimerRef.current);
        hideTimerRef.current = null;
      }
      setHideSidebarTitle(false);
    }
    // no cleanup needed here (handled in other effect)
  }, [isNavHovered]);

  return (
    <header
      className={`fixed top-0 ${
        isMobile ? "right-0" : "left-0"
      } z-50 w-auto h-20 flex items-center p-4`}
      onMouseEnter={!isMobile ? () => setIsNavHovered(true) : undefined}
      onMouseLeave={
        !isMobile
          ? () => {
              setIsNavHovered(false);
              setHoveredSection(null);
            }
          : undefined
      }
    >
      <div className="relative z-20 top-8 w-auto">
        {isMobile ? (
          <NewNavMobile
            onNavClick={handleNavClick}
            onHoverSection={handleHoverSection}
            activeSection={activeSection}
            isNavHovered={isNavHovered}
            hoveredSection={hoveredSection}
          />
        ) : (
          <>
            <motion.div
              className="absolute left-26 top-16 z-10"
              initial={false}
              animate={
                hideSidebarTitle ? { opacity: 0, x: -12 } : { opacity: 1, x: 0 }
              }
              transition={{ duration: 0.45, ease: "easeInOut" }}
              style={{ pointerEvents: hideSidebarTitle ? "none" : undefined }}
            >
              <SideBar
                isHovered={isNavHovered}
                hoveredSection={hoveredSection}
                activeSection={activeSection}
              />
            </motion.div>

            <div className="relative z-20 top-7 w-auto">
              <NewNav
                onNavClick={handleNavClick}
                onHoverSection={handleHoverSection}
              />
            </div>
          </>
        )}
      </div>
    </header>
  );
}
