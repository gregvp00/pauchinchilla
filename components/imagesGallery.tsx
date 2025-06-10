"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image"; // <-- Importa Image
import imagesData, { ImageItem, CategoryKey } from "@/data/imagesData";

export default function ImagesGallery() {
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

  const renderImages = (category: CategoryKey) => {
    const images: ImageItem[] = imagesData[category] || [];

    return (
      <div className="grid grid-cols-3 gap-14 mt-12 max-w-[1200px] mx-auto w-full">
        {images.map((img, index) => (
          <motion.div
            key={index}
            onClick={() => handleClick(img)}
            className="relative w-full cursor-pointer overflow-hidden"
            style={{ paddingTop: "100%" }} // fuerza que el contenedor sea cuadrado
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
            <div className="absolute inset-0 bg-black opacity-10 pointer-events-none" />
            <Image
              src={img.src}
              alt={img.alt || "Imagen"}
              fill
              style={{ objectFit: "cover" }}
              sizes="(max-width: 768px) 100vw, 33vw"
              className="absolute inset-0"
              priority={index < 3}
            />
          </motion.div>
        ))}
      </div>
    );
  };

  return (
    <>
      {/* Illustration */}
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] min-h-screen mx-10">
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">Illustration</h2>
        </div>
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("illustration")}
        </div>
      </div>

      {/* Concept */}
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] mx-10">
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">Concept & Visual Development</h2>
        </div>
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("conceptdsgn")}
        </div>
      </div>

      {/* Lowpoly */}
      <div className="flex flex-col md:flex-row gap-10 pt-10 max-w-[1600px] mx-10">
        <div className="w-full md:w-1/6">
          <h2 className="text-xl font-bold">3D & Lowpoly</h2>
        </div>
        <div className="w-full md:w-5/6 flex flex-col lg:flex-row gap-6 border-t-1 border-black">
          {renderImages("lowpoly3d")}
        </div>
      </div>
    </>
  );
}
