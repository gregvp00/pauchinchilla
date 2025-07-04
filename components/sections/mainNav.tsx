import Link from "next/link";
import { Button } from "@/components/ui/button";
import { navItems } from "@/data/navItems";
import { MotionSlot } from "@/components/motion";
import Image from "next/image";

export default function MainNav() {
  return (
    <div className="relative items-center">
      <div className="absolute inset-0 m-auto w-[90%] h-[40%] bg-[#e0d2bd] z-0" />
      <div className="relative z-10 hidden gap-2 md:flex">
        {/* Logo SVG importado desde public */}
        <Link href="/">
          <div
            className="p-1 border-[#f7f0e5] border-2 bg-[#f7f0e5] flex items-center justify-center"
            style={{
              boxShadow: "inset 0 0 0 1px #e0d2bd",
              width: 44,
              height: 44,
            }}
          >
            <Image
              src="/logo.svg"
              alt="Logo"
              width={38}
              height={38}
              className="object-contain"
            />
          </div>
        </Link>

        {/* Botones de navegación animados */}
        {navItems.map((item, index) => (
          <Link key={index} href={item.href} passHref>
            <MotionSlot
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "tween", duration: 0.1 }}
              style={{ display: "inline-block" }}
            >
              <Button
                className={`${item.className} text-[#534c43] font-semibold tracking-wider border-[#f7f0e5] border-2 bg-[#f7f0e5] rounded-none px-8 flex items-center hover:bg-[#f7f0e5] !important`}
                style={{
                  boxShadow: "inset 0 0 0 1px #e0d2bd",
                  height: 44,
                  paddingTop: 0,
                  paddingBottom: 0,
                }}
              >
                {item.label}
              </Button>
            </MotionSlot>
          </Link>
        ))}
      </div>
    </div>
  );
}
