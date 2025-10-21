"use client";

import { useState, useEffect } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { motion } from "framer-motion";
import Image from "next/image";

import { Tabs, TabsContent } from "@/components/animate-ui/components/tabs";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import imagesData, { ImageItem, CategoryKey } from "@/data/imagesData";

const validTabs: CategoryKey[] = Object.keys(imagesData) as CategoryKey[];

export default function ArtGalleryMasonry() {
  const [activeTab, setActiveTab] = useState<CategoryKey>(
    "gallery" as CategoryKey
  );

  useEffect(() => {
    const stored = sessionStorage.getItem("activeTab") as CategoryKey | null;
    if (stored && validTabs.includes(stored))
      setActiveTab(stored as CategoryKey);
  }, []);

  const renderImages = (category: CategoryKey) => {
    const images: ImageItem[] = imagesData[category] || [];

    return (
      <PhotoProvider
        maskOpacity={0.85}
        bannerVisible={false}
        overlayRender={({ overlay }) => {
          return (
            <div className="pointer-events-none">
              {overlay ? (
                <div className="absolute left-1/2 -translate-x-1/2 bottom-8 max-w-[90%] z-50 pointer-events-none">
                  <div className="inline-flex items-center gap-3 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-md">
                    {overlay}
                  </div>
                </div>
              ) : null}
            </div>
          );
        }}
      >
        {/* Masonry container: responsive column counts */}
        <div
          className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 xl:columns-6 mx-auto"
          style={{ columnGap: "4px", margin: "2px 2px" }}
        >
          {images.map((img, index) => (
            <MotionEffect
              key={img.src + index}
              slide={{ direction: "down" }}
              fade
              zoom
              inView
              delay={0.12 + index * 0.05}
            >
              {/* each item must be inline-block to participate in columns */}
              <div
                className="inline-block w-full break-inside-avoid relative overflow-hidden rounded-md bg-blue-950/10"
                // if you want a subtle hover lift
                style={{ cursor: "pointer" }}
              >
                {/* Badge on the thumbnail */}
                {img.new && (
                  <motion.span
                    className="absolute top-3 left-3 z-10 pointer-events-none bg-red-500 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold tracking-wider"
                    initial={{ opacity: 0, scale: 0.85, y: -6 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    transition={{
                      delay: 0.1 + index * 0.03,
                      duration: 0.28,
                      type: "spring",
                      stiffness: 220,
                    }}
                  >
                    <span className="text-white">New</span>
                  </motion.span>
                )}

                {/* PhotoView wraps the actual <img> */}
                <PhotoView
                  src={img.src}
                  overlay={
                    <div className="flex items-center gap-2 text-sm text-white">
                      <span className="truncate max-w-[60vw]">
                        {img.alt || ""}
                      </span>
                      {img.new ? (
                        <span className="inline-block text-xs font-semibold bg-red-600 text-white px-2 py-0.5 rounded">
                          New
                        </span>
                      ) : null}
                    </div>
                  }
                >
                  {/* Plain <img> for natural heights (masonry) */}
                  <Image
                    src={img.src}
                    alt={img.alt || "Imagen"}
                    loading={index < 6 ? "eager" : "lazy"}
                    width="500"
                    height="500"
                    style={{
                      width: "100%",
                      height: "auto",
                      display: "block",
                      objectFit: "cover",
                      borderRadius: 6,
                    }}
                    className="transition-transform duration-300 hover:scale-[1.02]"
                  />
                </PhotoView>
              </div>
            </MotionEffect>
          ))}
        </div>
      </PhotoProvider>
    );
  };

  return (
    <Tabs value={activeTab} className="w-full xl:px-48 p-2 mx-auto">
      <TabsContent value="gallery">
        {renderImages("gallery" as CategoryKey)}
      </TabsContent>
    </Tabs>
  );
}
