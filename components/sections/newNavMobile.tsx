import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

interface ButtonBackgroundProps {
  color: string;
}

const ButtonBackground = ({ color }: ButtonBackgroundProps) => {
  // Función para aclarar el color
  const lightenColor = (hex: string, percent: number) => {
    // Convertir hex a RGB
    let r = parseInt(hex.slice(1, 3), 16);
    let g = parseInt(hex.slice(3, 5), 16);
    let b = parseInt(hex.slice(5, 7), 16);

    // Aclarar el color
    r = Math.min(255, r + Math.round((r * percent) / 100));
    g = Math.min(255, g + Math.round((g * percent) / 100));
    b = Math.min(255, b + Math.round((b * percent) / 100));

    // Convertir de vuelta a hex
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };

  const lightColor = lightenColor(color, 70);
  const darkColor = color;

  return (
    <svg
      className="absolute inset-1.4 w-9/12 h-9/12 transition-transform duration-100 group-hover:scale-110"
      viewBox="0 -0.5 12 12"
      shapeRendering="crispEdges"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient
          id={`gradient-${color.slice(1)}`}
          x1="0%"
          y1="0%"
          x2="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={lightColor} />
          <stop offset="100%" stopColor={darkColor} />
        </linearGradient>
      </defs>

      <path
        stroke={`url(#gradient-${color.slice(1)})`}
        d="M5 0h2M4 1h1M7 1h1M3 2h1M8 2h1M2 3h1M9 3h1M1 4h1M10 4h1M0 5h1M11 5h1M0 6h1M11 6h1M1 7h1M10 7h1M2 8h1M9 8h1M3 9h1M8 9h1M4 10h1M7 10h1M5 11h2"
      />
    </svg>
  );
};

const DiamondBackground = ({ isExpanded }: { isExpanded: boolean }) => (
  <div
    className={`absolute inset-1.4 ${
      isExpanded ? "w-11/12 h-11/12" : "w-10/12 h-10/12"
    } transition-all duration-300`}
  >
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -0.5 40 40">
      <path
        stroke="#3e3239"
        d="M19 0h2M18 1h4M17 2h2M21 2h2M16 3h2M19 3h2M22 3h2M15 4h2M18 4h4M23 4h2M14 5h2M17 5h6M24 5h2M13 6h2M16 6h8M25 6h2M12 7h2M15 7h10M26 7h2M11 8h2M14 8h12M27 8h2M10 9h2M13 9h14M28 9h2M9 10h2M12 10h16M29 10h2M8 11h2M11 11h18M30 11h2M7 12h2M10 12h20M31 12h2M6 13h2M9 13h22M32 13h2M5 14h2M8 14h24M33 14h2M4 15h2M7 15h26M34 15h2M3 16h2M6 16h28M35 16h2M2 17h2M5 17h30M36 17h2M1 18h2M4 18h32M37 18h2M0 19h2M3 19h34M38 19h2M0 20h2M3 20h34M38 20h2M1 21h2M4 21h32M37 21h2M2 22h2M5 22h30M36 22h2M3 23h2M6 23h28M35 23h2M4 24h2M7 24h26M34 24h2M5 25h2M8 25h24M33 25h2M6 26h2M9 26h22M32 26h2M7 27h2M10 27h20M31 27h2M8 28h2M11 28h18M30 28h2M9 29h2M12 29h16M29 29h2M10 30h2M13 30h14M28 30h2M11 31h2M14 31h12M27 31h2M12 32h2M15 32h10M26 32h2M13 33h2M16 33h8M25 33h2M14 34h2M17 34h6M24 34h2M15 35h2M18 35h4M23 35h2M16 36h2M19 36h2M22 36h2M17 37h2M21 37h2M18 38h4M19 39h2"
      />
      <path
        stroke="#e0d2bd"
        d="M19 2h2M18 3h1M21 3h1M17 4h1M22 4h1M16 5h1M23 5h1M15 6h1M24 6h1M14 7h1M25 7h1M13 8h1M26 8h1M12 9h1M27 9h1M11 10h1M28 10h1M10 11h1M29 11h1M9 12h1M30 12h1M8 13h1M31 13h1M7 14h1M32 14h1M6 15h1M33 15h1M5 16h1M34 16h1M4 17h1M35 17h1M3 18h1M36 18h1M2 19h1M37 19h1M2 20h1M37 20h1M3 21h1M36 21h1M4 22h1M35 22h1M5 23h1M34 23h1M6 24h1M33 24h1M7 25h1M32 25h1M8 26h1M31 26h1M9 27h1M30 27h1M10 28h1M29 28h1M11 29h1M28 29h1M12 30h1M27 30h1M13 31h1M26 31h1M14 32h1M25 32h1M15 33h1M24 33h1M16 34h1M23 34h1M17 35h1M22 35h1M18 36h1M21 36h1M19 37h2"
      />
    </svg>
  </div>
);

const MenuIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    <path
      d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
      fill="currentColor"
    />
  </svg>
);

interface NewNavProps {
  onNavClick: (sectionId: string) => void;
  onHoverSection: (sectionId: string | null) => void;

  // optional props (keep optional if component doesn't always need them)
  activeSection?: string | null;
  isNavHovered?: boolean;
  hoveredSection?: string | null;
}

const NewNav: React.FC<NewNavProps> = ({ onNavClick, onHoverSection }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const diamondStyle = {
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
  };

  const buttonBaseClasses =
    "absolute w-14 h-14 overflow-hidden flex items-center justify-center group transition-all duration-500";

  // Open only when clicking the center button. Closing happens by clicking outside (or choosing a nav item).
  const handleToggle = () => {
    if (!isExpanded) {
      setIsExpanded(true);
      onHoverSection(null);
    }
  };

  const handleNavClick = (sectionId: string) => {
    onNavClick(sectionId);
    setIsExpanded(false);
    onHoverSection(null);
  };

  // Close when clicking outside the nav
  useEffect(() => {
    function onPointerDown(e: PointerEvent) {
      const el = containerRef.current;
      if (!el) return;
      if (isExpanded && !el.contains(e.target as Node)) {
        setIsExpanded(false);
        onHoverSection(null);
      }
    }

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [isExpanded, onHoverSection]);

  // Optional: close with Escape key
  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape" && isExpanded) {
        setIsExpanded(false);
        onHoverSection(null);
      }
    }
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [isExpanded, onHoverSection]);

  return (
    <div
      ref={containerRef}
      className="relative flex items-center justify-center"
    >
      {/* Main container with transition */}
      <div
        style={diamondStyle}
        className={`relative flex items-center justify-center transition-all duration-500 ease-in-out ${
          isExpanded ? "w-[150px] h-[150px]" : "w-[60px] h-[60px]"
        }`}
      >
        <DiamondBackground isExpanded={isExpanded} />

        {/* Center toggle button: only opens the menu (always shows the Menu icon) */}
        <button
          className={`relative z-20 w-10 h-10 flex items-center justify-center transition-all duration-300 ${
            isExpanded
              ? "opacity-0 pointer-events-none scale-75"
              : "opacity-100"
          }`}
          style={diamondStyle}
          onClick={handleToggle}
          aria-label="Open menu"
          aria-expanded={isExpanded}
          aria-hidden={isExpanded}
          tabIndex={isExpanded ? -1 : 0}
        >
          <div className="text-[#e0d2bd] transition-all duration-300">
            <MenuIcon />
          </div>
        </button>

        {/* Navigation buttons - animated */}
        <div
          className={`absolute inset-0 transition-all duration-500 ${
            isExpanded
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }`}
        >
          {/* Botón Home (Arriba) */}
          <button
            className={`${buttonBaseClasses} top-[13%] left-[31%] ${
              isExpanded ? "translate-y-0 scale-100" : "translate-y-8 scale-0"
            }`}
            style={{
              ...diamondStyle,
              transitionDelay: isExpanded ? "100ms" : "0ms",
            }}
            onClick={() => handleNavClick("home")}
            onMouseEnter={() => onHoverSection("home")}
            onMouseLeave={() => onHoverSection(null)}
            aria-label="Go to home"
            disabled={!isExpanded}
          >
            <ButtonBackground color="#ac9b4e" />
            <span className="w-6 h-6 group-hover:scale-110 transition-transform">
              <Image src="/logoalt.svg" alt="Logo" width={50} height={50} />
            </span>
          </button>

          {/* Botón Portfolio (Derecha) */}
          <button
            className={`${buttonBaseClasses} right-[13%] top-[31%] ${
              isExpanded ? "translate-x-0 scale-100" : "-translate-x-8 scale-0"
            }`}
            style={{
              ...diamondStyle,
              transitionDelay: isExpanded ? "150ms" : "0ms",
            }}
            onClick={() => handleNavClick("portfolio")}
            onMouseEnter={() => onHoverSection("portfolio")}
            onMouseLeave={() => onHoverSection(null)}
            aria-label="Go to portfolio"
            disabled={!isExpanded}
          >
            <ButtonBackground color="#c95197" />
            <span className="text-[#eee3e9] w-5 h-5 ml-0.5 group-hover:scale-110 transition-transform">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M21 22H3V2h12v2h2v2h2v2h2v14zM17 6h-2v2h2V6zM5 4v16h14V10h-6V4H5zm8 12H7v2h6v-2zm-6-4h10v2H7v-2zm4-4H7v2h4V8z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>

          {/* Botón Gallery (Abajo) */}
          <Link
            href="/gallery"
            className={`${buttonBaseClasses} bottom-[13%] left-[31%] ${
              isExpanded ? "translate-y-0 scale-100" : "-translate-y-8 scale-0"
            }`}
            style={{
              ...diamondStyle,
              transitionDelay: isExpanded ? "200ms" : "0ms",
              pointerEvents: isExpanded ? "auto" : "none",
            }}
            onMouseEnter={() => onHoverSection("gallery")}
            onMouseLeave={() => onHoverSection(null)}
            aria-label="Go to gallery"
            onClick={() => setIsExpanded(false)}
          >
            <ButtonBackground color="#5ebe9b" />
            <span className="text-[#eee3e9] w-5 h-5 ml-0.5 group-hover:scale-110 transition-transform">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M24 2H4v16h20V2zM6 16V4h16v12H6zM2 4H0v18h20v-2H2V4zm12 2h2v2h-2V6zm-2 4V8h2v2h-2zm-2 2v-2h2v2h-2zm0 0v2H8v-2h2zm8-2h-2V8h2v2zm0 0h2v2h-2v-2zM8 6h2v2H8V6z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </Link>

          {/* Botón Contact (Izquierda) */}
          <button
            className={`${buttonBaseClasses} left-[13%] top-[31%] ${
              isExpanded ? "translate-x-0 scale-100" : "translate-x-8 scale-0"
            }`}
            style={{
              ...diamondStyle,
              transitionDelay: isExpanded ? "250ms" : "0ms",
            }}
            onClick={() => handleNavClick("contact")}
            onMouseEnter={() => onHoverSection("contact")}
            onMouseLeave={() => onHoverSection(null)}
            aria-label="Go to contact"
            disabled={!isExpanded}
          >
            <ButtonBackground color="#8a88ff" />
            <span className="text-[#eee3e9] w-5 h-5 group-hover:scale-110 transition-transform">
              <svg
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path
                  d="M2 3H0v18h24V3H2zm20 2v14H2V5h20zM10 7H6v4h4V7zm-6 6h8v4H4v-4zm16-6h-6v2h6V7zm-6 4h6v2h-6v-2zm6 4h-6v2h6v-2z"
                  fill="currentColor"
                />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewNav;
