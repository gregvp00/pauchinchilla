import { FaInstagram, FaTiktok } from "react-icons/fa";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div
        id="contact"
        className="relative py-12 border-y-8 my-24 border-[#4a5565]"
        style={{
          boxShadow: "inset 0 0 0 7px #f9fafb",
        }}
      >
        <h1 className="text-6xl font-bold tracking-widest absolute -top-14 left-1/2 px-4 text-shadow-lg -translate-x-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -0.5 40 7.9"
            shapeRendering="crispEdges"
            className="w-full h-auto absolute top-0 left-0 z-0"
          >
            <path
              stroke="#4a5565"
              d="M1 0h38M0 1h1M39 1h1M0 2h1M39 2h1M0 3h1M39 3h1M0 4h1M39 4h1M0 5h1M39 5h1M0 6h1M39 6h1M0 7h1M39 7h1M0 8h1M39 8h1M0 9h1M39 9h1M0 10h1M39 10h1M0 11h1M39 11h1M0 12h1M39 12h1M0 13h1M39 13h1M0 14h1M39 14h1M0 15h1M39 15h1M0 16h1M39 16h1M0 17h1M39 17h1M0 18h1M39 18h1M0 19h1M39 19h1M0 20h1M39 20h1M0 21h1M39 21h1M0 22h1M39 22h1M0 23h1M39 23h1M0 24h1M39 24h1M0 25h1M39 25h1M0 26h1M39 26h1M0 27h1M39 27h1M0 28h1M39 28h1M0 29h1M39 29h1M0 30h1M39 30h1M0 31h1M39 31h1M0 32h1M39 32h1M0 33h1M39 33h1M0 34h1M39 34h1M0 35h1M39 35h1M0 36h1M39 36h1M0 37h1M39 37h1M0 38h1M39 38h1M1 39h38"
            />
            <path
              stroke="#f9fafb"
              d="M1 1h38M1 2h38M1 3h38M1 4h38M1 5h38M1 6h38M1 7h38M1 8h38M1 9h38M1 10h38M1 11h38M1 12h38M1 13h38M1 14h38M1 15h38M1 16h38M1 17h38M1 18h38M1 19h38M1 20h38M1 21h38M1 22h38M1 23h38M1 24h38M1 25h38M1 26h38M1 27h38M1 28h38M1 29h38M1 30h38M1 31h38M1 32h38M1 33h38M1 34h38M1 35h38M1 36h38M1 37h38M1 38h38"
            />
          </svg>
          <span className="relative z-10">CONTACT</span>
        </h1>
        <div className="flex gap-6 text-center justify-center">
          {/* Botón Instagram */}
          <Link
            href="https://instagram.com/bloodmoon_bh"
            className="relative w-24 text-[#d8d1c4] cursor-pointer group"
          >
            <div className="absolute top-3 left-3 text-gray-600 group-hover:text-white transition-colors duration-300">
              <FaInstagram className="w-18 h-18" />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 40 40"
              shapeRendering="crispEdges"
              className="w-full h-auto"
            >
              <defs>
                <linearGradient
                  id="instaGradient"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#feda75" />
                  <stop offset="50%" stopColor="#d62976" />
                  <stop offset="100%" stopColor="#4f5bd5" />
                </linearGradient>
              </defs>

              <path
                stroke="#d8d1c4"
                d="M1 0h38M0 1h1M39 1h1M0 2h1M3 2h34M39 2h1M0 3h1M2 3h36M39 3h1M0 4h1M2 4h36M39 4h1M0 5h1M2 5h36M39 5h1M0 6h1M2 6h36M39 6h1M0 7h1M2 7h36M39 7h1M0 8h1M2 8h36M39 8h1M0 9h1M2 9h36M39 9h1M0 10h1M2 10h36M39 10h1M0 11h1M2 11h36M39 11h1M0 12h1M2 12h36M39 12h1M0 13h1M2 13h36M39 13h1M0 14h1M2 14h36M39 14h1M0 15h1M2 15h36M39 15h1M0 16h1M2 16h36M39 16h1M0 17h1M2 17h36M39 17h1M0 18h1M2 18h36M39 18h1M0 19h1M2 19h36M39 19h1M0 20h1M2 20h36M39 20h1M0 21h1M2 21h36M39 21h1M0 22h1M2 22h36M39 22h1M0 23h1M2 23h36M39 23h1M0 24h1M2 24h36M39 24h1M0 25h1M2 25h36M39 25h1M0 26h1M2 26h36M39 26h1M0 27h1M2 27h36M39 27h1M0 28h1M2 28h36M39 28h1M0 29h1M2 29h36M39 29h1M0 30h1M2 30h36M39 30h1M0 31h1M2 31h36M39 31h1M0 32h1M2 32h36M39 32h1M0 33h1M2 33h36M39 33h1M0 34h1M2 34h36M39 34h1M0 35h1M2 35h36M39 35h1M0 36h1M2 36h36M39 36h1M0 37h1M3 37h34M39 37h1M0 38h1M39 38h1M1 39h38"
                className="transition-opacity duration-300"
              />
              <path
                stroke="url(#instaGradient)"
                d="M1 0h38M0 1h1M39 1h1M0 2h1M3 2h34M39 2h1M0 3h1M2 3h36M39 3h1M0 4h1M2 4h36M39 4h1M0 5h1M2 5h36M39 5h1M0 6h1M2 6h36M39 6h1M0 7h1M2 7h36M39 7h1M0 8h1M2 8h36M39 8h1M0 9h1M2 9h36M39 9h1M0 10h1M2 10h36M39 10h1M0 11h1M2 11h36M39 11h1M0 12h1M2 12h36M39 12h1M0 13h1M2 13h36M39 13h1M0 14h1M2 14h36M39 14h1M0 15h1M2 15h36M39 15h1M0 16h1M2 16h36M39 16h1M0 17h1M2 17h36M39 17h1M0 18h1M2 18h36M39 18h1M0 19h1M2 19h36M39 19h1M0 20h1M2 20h36M39 20h1M0 21h1M2 21h36M39 21h1M0 22h1M2 22h36M39 22h1M0 23h1M2 23h36M39 23h1M0 24h1M2 24h36M39 24h1M0 25h1M2 25h36M39 25h1M0 26h1M2 26h36M39 26h1M0 27h1M2 27h36M39 27h1M0 28h1M2 28h36M39 28h1M0 29h1M2 29h36M39 29h1M0 30h1M2 30h36M39 30h1M0 31h1M2 31h36M39 31h1M0 32h1M2 32h36M39 32h1M0 33h1M2 33h36M39 33h1M0 34h1M2 34h36M39 34h1M0 35h1M2 35h36M39 35h1M0 36h1M2 36h36M39 36h1M0 37h1M3 37h34M39 37h1M0 38h1M39 38h1M1 39h38"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <path
                stroke="#ffffff"
                d="M1 1h38M1 2h2M37 2h2M1 3h1M38 3h1M1 4h1M38 4h1M1 5h1M38 5h1M1 6h1M38 6h1M1 7h1M38 7h1M1 8h1M38 8h1M1 9h1M38 9h1M1 10h1M38 10h1M1 11h1M38 11h1M1 12h1M38 12h1M1 13h1M38 13h1M1 14h1M38 14h1M1 15h1M38 15h1M1 16h1M38 16h1M1 17h1M38 17h1M1 18h1M38 18h1M1 19h1M38 19h1M1 20h1M38 20h1M1 21h1M38 21h1M1 22h1M38 22h1M1 23h1M38 23h1M1 24h1M38 24h1M1 25h1M38 25h1M1 26h1M38 26h1M1 27h1M38 27h1M1 28h1M38 28h1M1 29h1M38 29h1M1 30h1M38 30h1M1 31h1M38 31h1M1 32h1M38 32h1M1 33h1M38 33h1M1 34h1M38 34h1M1 35h1M38 35h1M1 36h1M38 36h1M1 37h2M37 37h2M1 38h38"
              />
            </svg>
          </Link>

          <Link
            href="https://tiktok.com/@bloodmoon_bh"
            className="relative w-24 text-[#d8d1c4] cursor-pointer group"
          >
            <div className="absolute top-4 left-4 text-gray-600 group-hover:text-white transition-colors duration-300">
              <FaTiktok className="w-16 h-16" />
            </div>

            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 -0.5 40 40"
              shapeRendering="crispEdges"
              className="w-full h-auto"
            >
              <path
                stroke="#d8d1c4"
                d="M1 0h38M0 1h1M39 1h1M0 2h1M3 2h34M39 2h1M0 3h1M2 3h36M39 3h1M0 4h1M2 4h36M39 4h1M0 5h1M2 5h36M39 5h1M0 6h1M2 6h36M39 6h1M0 7h1M2 7h36M39 7h1M0 8h1M2 8h36M39 8h1M0 9h1M2 9h36M39 9h1M0 10h1M2 10h36M39 10h1M0 11h1M2 11h36M39 11h1M0 12h1M2 12h36M39 12h1M0 13h1M2 13h36M39 13h1M0 14h1M2 14h36M39 14h1M0 15h1M2 15h36M39 15h1M0 16h1M2 16h36M39 16h1M0 17h1M2 17h36M39 17h1M0 18h1M2 18h36M39 18h1M0 19h1M2 19h36M39 19h1M0 20h1M2 20h36M39 20h1M0 21h1M2 21h36M39 21h1M0 22h1M2 22h36M39 22h1M0 23h1M2 23h36M39 23h1M0 24h1M2 24h36M39 24h1M0 25h1M2 25h36M39 25h1M0 26h1M2 26h36M39 26h1M0 27h1M2 27h36M39 27h1M0 28h1M2 28h36M39 28h1M0 29h1M2 29h36M39 29h1M0 30h1M2 30h36M39 30h1M0 31h1M2 31h36M39 31h1M0 32h1M2 32h36M39 32h1M0 33h1M2 33h36M39 33h1M0 34h1M2 34h36M39 34h1M0 35h1M2 35h36M39 35h1M0 36h1M2 36h36M39 36h1M0 37h1M3 37h34M39 37h1M0 38h1M39 38h1M1 39h38"
                className="transition-opacity duration-300"
              />
              <path
                stroke="#000000"
                d="M1 0h38M0 1h1M39 1h1M0 2h1M3 2h34M39 2h1M0 3h1M2 3h36M39 3h1M0 4h1M2 4h36M39 4h1M0 5h1M2 5h36M39 5h1M0 6h1M2 6h36M39 6h1M0 7h1M2 7h36M39 7h1M0 8h1M2 8h36M39 8h1M0 9h1M2 9h36M39 9h1M0 10h1M2 10h36M39 10h1M0 11h1M2 11h36M39 11h1M0 12h1M2 12h36M39 12h1M0 13h1M2 13h36M39 13h1M0 14h1M2 14h36M39 14h1M0 15h1M2 15h36M39 15h1M0 16h1M2 16h36M39 16h1M0 17h1M2 17h36M39 17h1M0 18h1M2 18h36M39 18h1M0 19h1M2 19h36M39 19h1M0 20h1M2 20h36M39 20h1M0 21h1M2 21h36M39 21h1M0 22h1M2 22h36M39 22h1M0 23h1M2 23h36M39 23h1M0 24h1M2 24h36M39 24h1M0 25h1M2 25h36M39 25h1M0 26h1M2 26h36M39 26h1M0 27h1M2 27h36M39 27h1M0 28h1M2 28h36M39 28h1M0 29h1M2 29h36M39 29h1M0 30h1M2 30h36M39 30h1M0 31h1M2 31h36M39 31h1M0 32h1M2 32h36M39 32h1M0 33h1M2 33h36M39 33h1M0 34h1M2 34h36M39 34h1M0 35h1M2 35h36M39 35h1M0 36h1M2 36h36M39 36h1M0 37h1M3 37h34M39 37h1M0 38h1M39 38h1M1 39h38"
                className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
              <path
                stroke="#ffffff"
                d="M1 1h38M1 2h2M37 2h2M1 3h1M38 3h1M1 4h1M38 4h1M1 5h1M38 5h1M1 6h1M38 6h1M1 7h1M38 7h1M1 8h1M38 8h1M1 9h1M38 9h1M1 10h1M38 10h1M1 11h1M38 11h1M1 12h1M38 12h1M1 13h1M38 13h1M1 14h1M38 14h1M1 15h1M38 15h1M1 16h1M38 16h1M1 17h1M38 17h1M1 18h1M38 18h1M1 19h1M38 19h1M1 20h1M38 20h1M1 21h1M38 21h1M1 22h1M38 22h1M1 23h1M38 23h1M1 24h1M38 24h1M1 25h1M38 25h1M1 26h1M38 26h1M1 27h1M38 27h1M1 28h1M38 28h1M1 29h1M38 29h1M1 30h1M38 30h1M1 31h1M38 31h1M1 32h1M38 32h1M1 33h1M38 33h1M1 34h1M38 34h1M1 35h1M38 35h1M1 36h1M38 36h1M1 37h2M37 37h2M1 38h38"
              />
            </svg>
          </Link>
        </div>
        <div className="mt-6 h-auto w-96 mx-auto flex flex-col items-center justify-center">
          <h3>Or through my email:</h3>
          <Link
            href="mailto:contact@pauchinchilla.com"
            className="text-lg font-semibold text-[#4a5565] hover:underline break-all"
          >
            contact@pauchinchilla.com
          </Link>
        </div>
      </div>
    </>
  );
}
