"use client";

import Image from "next/image";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/tabs";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import imagesData, { ImageItem, CategoryKey } from "@/data/imagesData";

const validTabs: CategoryKey[] = ["illustration", "conceptdsgn", "lowpoly3d"];

export default function ImagesGallery() {
  const [activeTab, setActiveTab] = useState<CategoryKey>("illustration");

  useEffect(() => {
    const stored = sessionStorage.getItem("activeTab") as CategoryKey | null;
    if (stored && validTabs.includes(stored)) {
      setActiveTab(stored);
    }
  }, []);

  const router = useRouter();

  const handleClick = (img: ImageItem) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(`/image/${img.src.split("/").pop()}`);
      });
    } else {
      router.push(`/image/${img.src.split("/").pop()}`);
    }
  };

  const handleTabChange = (tab: CategoryKey) => {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab);
  };

  const renderImages = (category: CategoryKey) => {
    const images: ImageItem[] = imagesData[category] || [];

    return (
      <div
        style={{
          columnCount: 3,
          columnGap: "16px",
          margin: "32px 0",
        }}
      >
        {images.map((img, index) => (
          <MotionEffect
            key={index}
            slide={{ direction: "down" }}
            fade
            zoom
            inView
            delay={0.2 + index * 0.1}
          >
            <div
              onClick={() => handleClick(img)}
              style={{
                breakInside: "avoid",
                marginBottom: "10px",
                cursor: "pointer",
                position: "relative",
                width: "100%",
                aspectRatio: "1 / 1",
              }}
            >
              <Image
                src={img.src}
                alt={img.alt || "Imagen"}
                fill
                style={{ objectFit: "cover" }}
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          </MotionEffect>
        ))}
      </div>
    );
  };

  return (
    <Tabs
      value={activeTab}
      onValueChange={handleTabChange}
      className="w-[700px]"
    >
      <TabsList className="flex justify-center w-full mb-4 h-12 gap-4 bg-gray-200 rounded-md">
        <TabsTrigger value="conceptdsgn">Graphic Design</TabsTrigger>
        <TabsTrigger value="illustration">Illustration</TabsTrigger>
        <TabsTrigger value="lowpoly3d">On-Site & 3D</TabsTrigger>
      </TabsList>

      <TabsContent value="conceptdsgn">
        {activeTab === "conceptdsgn" && renderImages("conceptdsgn")}
      </TabsContent>

      <TabsContent value="illustration">
        {activeTab === "illustration" && renderImages("illustration")}
      </TabsContent>

      <TabsContent value="lowpoly3d">
        {activeTab === "lowpoly3d" && renderImages("lowpoly3d")}
      </TabsContent>
    </Tabs>
  );
}
