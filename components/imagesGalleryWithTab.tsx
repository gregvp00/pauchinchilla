"use client";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/animate-ui/components/tabs";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MotionEffect } from "@/components/animate-ui/effects/motion-effect";
import imagesData from "@/data/imagesData.json";

export default function ImagesGallery() {
  const [activeTab, setActiveTab] = useState(() => {
    return sessionStorage.getItem("activeTab") || "illustration";
  });

  const router = useRouter();

  const handleClick = (img) => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.push(`/image/${img.src.split("/").pop()}`);
      });
    } else {
      router.push(`/image/${img.src.split("/").pop()}`);
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab);
  };

  const renderImages = (category) => {
    const images = imagesData[category] || [];

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
              }}
            >
              <img src={img.src} alt={img.alt} />
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
        <TabsTrigger value="graphic">Graphic Design</TabsTrigger>
        <TabsTrigger value="illustration">Illustration</TabsTrigger>
        <TabsTrigger value="onsite">On-Site & 3D</TabsTrigger>
      </TabsList>

      <TabsContent value="graphic">
        {activeTab === "graphic" && renderImages("graphic")}
      </TabsContent>

      <TabsContent value="illustration">
        {activeTab === "illustration" && renderImages("illustration")}
      </TabsContent>

      <TabsContent value="onsite">
        {activeTab === "onsite" && renderImages("onsite")}
      </TabsContent>
    </Tabs>
  );
}
