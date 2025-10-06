"use client";

import SiteHeader from "@/components/sections/siteHeader";
import { Inconsolata } from "next/font/google";
import ArtGallery from "@/components/artGallery";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function GalleryPage() {
  const activeSection = "gallery";
  return (
    <div
      className={`${inconsolata.className} bg-[url('/bg-paper.png')] bg-[length:500px_500px] bg-repeat min-h-screen`}
    >
      <SiteHeader activeSection={activeSection} />
      <div className="flex items-center justify-center mx-auto">
        <ArtGallery />
      </div>
    </div>
  );
}
