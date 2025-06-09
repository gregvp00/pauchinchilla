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
    <>
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] min-h-screen mx-10">
        {/* Columna 1: Título "Projects" */}
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">Illustration</h2>
        </div>

        {/* Columna 2: Contenido dividido en texto e imagen */}
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("illustration")}
        </div>
      </div>{" "}
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] mx-10">
        {/* Columna 1: Título "Projects" */}
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">Concept & Visual Development</h2>
        </div>

        {/* Columna 2: Contenido dividido en texto e imagen */}
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("conceptdsgn")}
        </div>
      </div>{" "}
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] mx-10">
        {/* Columna 1: Título "Projects" */}
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">3D & Lowpoly</h2>
        </div>

        {/* Columna 2: Contenido dividido en texto e imagen */}
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("lowpoly3d")}
        </div>
      </div>
    </>
  );
}
