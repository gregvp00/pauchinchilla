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
      <div className="grid grid-cols-2 lg:grid-cols-3 lg:gap-14 gap-6 mt-12 max-w-[1200px] mx-auto w-full mb-12">
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
            {/* Badge "New" arriba-izquierda si img.new es true */}
            {img.new && (
              <motion.span
                className="absolute top-3 left-3 z-10 pointer-events-none bg-red-500 backdrop-blur-sm px-2 py-1 rounded text-sm font-semibold tracking-wider"
                initial={{ opacity: 0, scale: 0.85, y: -6 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  delay: 0.15 + index * 0.05,
                  duration: 0.28,
                  type: "spring",
                  stiffness: 220,
                }}
              >
                <span className="text-white">New</span>
              </motion.span>
            )}

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
      <h2 className="absolute left-1/2 -translate-x-1/2 text-xl font-bold whitespace-nowrap">
        Illustration
      </h2>
      <div className="md:w-10/12 w-11/12 flex gap-6 border-t-1 border-black max-w-[1600px] mx-auto mb-10">
        {renderImages("illustration")}
      </div>

      {/* Concept */}
      <h2 className="absolute left-1/2 -translate-x-1/2  text-xl font-bold whitespace-nowrap">
        Concept & Visual Development
      </h2>
      <div className="md:w-10/12 w-11/12 flex gap-6 border-t-1 border-black max-w-[1600px] mx-auto mb-10">
        {renderImages("conceptdsgn")}
      </div>

      {/* Lowpoly */}
      <h2 className="absolute left-1/2 -translate-x-1/2  text-xl font-bold whitespace-nowrap">
        3D & Lowpoly
      </h2>
      <div className="md:w-10/12 w-11/12 flex gap-6 border-t-1 border-black max-w-[1600px] mx-auto mb-10">
        {renderImages("lowpoly3d")}
      </div>
    </>
  );
}
