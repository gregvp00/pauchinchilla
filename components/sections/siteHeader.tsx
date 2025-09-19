"use client";

import { useEffect, useState } from "react";
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

  const handleNavClick = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleHoverSection = (sectionId: string | null) => {
    setHoveredSection(sectionId);
  };

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1280px)");
    const update = (e: MediaQueryListEvent | MediaQueryList) =>
      setIsMobile(e.matches);

    // set initial state
    update(mq);

    // add listener (handle both modern and older APIs)
    if (mq.addEventListener) {
      mq.addEventListener("change", update);
    } else {
      // @ts-ignore - fallback for older browsers
      mq.addListener(update);
    }

    return () => {
      if (mq.removeEventListener) {
        mq.removeEventListener("change", update);
      } else {
        // @ts-ignore - fallback for older browsers
        mq.removeListener(update);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 ${
        isMobile ? "right-0" : "left-0"
      } z-50 w-auto h-20 flex items-center p-4`}
      // disable hover handlers on mobile to avoid accidental triggers
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
            <div className="absolute left-26 top-16 z-10">
              <SideBar
                isHovered={isNavHovered}
                hoveredSection={hoveredSection}
                activeSection={activeSection}
              />
            </div>

            {/* Contenedor para NewNav (encima) */}
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
