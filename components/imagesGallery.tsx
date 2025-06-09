"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import imagesData from "@/data/imagesData.json";

export default function ImagesGallery() {
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

  const renderImages = (category) => {
    const images = imagesData[category] || [];

    return (
      <div className="grid grid-cols-3 gap-14 mt-12">
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(img)}
            className="relative w-full aspect-square cursor-pointer overflow-hidden"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{
              delay: 0.2 + index * 0.1,
              duration: 0.5,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="absolute inset-0 bg-black opacity-10 pointer-events-none"></div>
            <img
              src={img.src}
              alt={img.alt}
              className="relative w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <div
      className="bg-[url('/bg-paper.png')] border-[#f7f0e5] w-6xl mx-auto p-18 border-5"
      style={{ boxShadow: "inset 0 0 0 2px #e0d2bd" }}
    >
      <h1 className="text-4xl font-extrabold text-center mb-12">Portfolio</h1>
      <div
        className="h-3 w-full"
        style={{
          backgroundImage:
            "repeating-linear-gradient(-45deg, #00000040 0 1px, transparent 2px 15px)",
          opacity: 1,
        }}
      ></div>

      {renderImages("illustration")}
    </div>
  );
}
