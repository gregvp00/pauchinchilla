"use client";

import SiteHeader from "@/components/sections/siteHeader";
import { Inconsolata } from "next/font/google";
import ImagesGallery from "@/components/imagesGallery";
import Contact from "@/components/contact";
import Footer from "@/components/sections/footer";
import PixelCarousel from "@/components/pixelCarousel";
import Image from "next/image";
import { useSectionObserver } from "@/app/hooks/useSectionObserver";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export const SECTION_IDS = ["home", "portfolio", "contact"];

export default function HomePage() {
  const activeSection = useSectionObserver(SECTION_IDS);

  return (
    <div className={`${inconsolata.className} bg-gray-50`}>
      <SiteHeader activeSection={activeSection} />
      <div id="home" className="relative">
        <PixelCarousel />
      </div>
      <div className="relative bg-[url('/bg-paper.png')] bg-[length:500px_500px] bg-repeat min-h-2/3 py-12">
        <div className="absolute bg-[url('/bg-paperedge.png')] -top-1.5 bg-[length:1450px_7px] h-[7px] w-full"></div>
        <div
          className="absolute bg-[url('/bg-paperedge.png')] -bottom-1.5 bg-[length:1450px_7px] h-[7px] w-full"
          style={{ transform: "scaleY(-1)" }}
        ></div>

        <h1 className="text-3xl font-bold text-center mb-8">About me</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl mx-auto">
          <div className="w-64 lg:w-72 relative aspect-square flex items-center justify-center">
            <Image
              src="/ProfilePixel.webp"
              alt="Profile Pixel"
              className="w-full h-auto object-cover rounded-md z-0"
              width={288}
              height={288}
              priority
            />
          </div>

          {/* Texto descriptivo */}
          <div className="lg:w-2/3 w-3/4 text-zinc-800 dark:text-zinc-200 lg:text-lg text-md leading-relaxed">
            <p>
              Hey there! I&apos;m Paula Chinchilla — 21 years old and powered by
              pixels, colors, and wild ideas.
            </p>
            <p className="lg:mt-4 mt-2">
              I&apos;m currently studying Illustration at EASD Valencia, where I
              dive deep into the worlds of character design and pixel art.
            </p>
            <p>
              Lately, I&apos;ve also been exploring the 3D realm, crafting
              low-poly models in Blender and having a blast doing it.
            </p>
            <p className="lg:mt-2 mt-1">
              Curious? Inspired? Just bored? Feel free to explore my work
              through my portfolio, I&apos;d love to share my little creative
              universe with you!
            </p>
          </div>
        </div>
      </div>

      <div id="portfolio">
        <h1 className="text-4xl pt-46 pb-6 ml-32 lg:ml-48">Portfolio</h1>
        <ImagesGallery />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}
