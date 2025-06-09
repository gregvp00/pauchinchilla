import Link from "next/link";
import { Button } from "./ui/button";
import { navItems } from "@/data/navItems";
import { MotionSlot } from "@/components/motion"; // Ajusta la ruta si es diferente

export default function MainNav() {
  return (
    <div className="hidden gap-2 md:flex items-center">
      {/* Logo SVG */}
      <Link href="/" passHref>
        <div
          className="p-1.5 border-[#f7f0e5] border-2 bg-[#f7f0e5]"
          style={{ boxShadow: "inset 0 0 0 1px #e0d2bd" }}
        >
          <svg
            viewBox="0 0 100 116"
            fill="#229EFF"
            xmlns="http://www.w3.org/2000/svg"
            height="38"
            width="38"
            strokeWidth="2px"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path
              d="M77.53 110.975L65.8301 104.215L47.9501 93.895V113.155L31.5801 103.705V84.445L2 67.365L18.78 48.165L10.39 43.315L39.77 12.125L43.2001 19.725L69.14 77.235L60.75 72.395L67.9501 88.945L77.53 110.975Z"
              stroke="#0B0B0F"
              strokeLinejoin="round"
            />
            <path
              d="M97.53 100.975L77.53 110.975L67.9501 88.9449L60.75 72.395L69.14 77.235L83.9801 69.8149L97.53 100.975Z"
              stroke="#0B0B0F"
              strokeLinejoin="round"
            />
            <path
              d="M89.1395 67.235L83.9796 69.815L69.1395 77.235L43.1996 19.725L39.7695 12.125L59.7695 2.125L89.1395 67.235Z"
              stroke="#0B0B0F"
              strokeLinejoin="round"
            />
            <path
              d="M65.8302 104.215L47.9502 113.155V93.895L65.8302 104.215Z"
              stroke="#0B0B0F"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </Link>

      {/* Botones de navegación animados */}
      {navItems.map((item, index) => (
        <Link key={index} href={item.href} legacyBehavior>
          <MotionSlot
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            asChild
          >
            <a>
              <Button
                className={`${item.className} text-[#534c43] font-semibold tracking-wide border-[#f7f0e5] border-2 bg-[#f7f0e5] py-6 antialiased rounded-none px-10 hover:bg-[#f7f0e5]`}
                style={{ boxShadow: "inset 0 0 0 1px #e0d2bd" }}
              >
                {item.label}
              </Button>
            </a>
          </MotionSlot>
        </Link>
      ))}
    </div>
  );
}
