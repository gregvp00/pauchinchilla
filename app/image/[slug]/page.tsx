"use client";

import Nav from "@/components/siteHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import imagesData from "@/data/imagesData";
import { useRouter, useParams } from "next/navigation";

interface ImageItem {
  src: string;
  alt?: string;
  complementary?: string[];
}

export default function ImageDetailPage() {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;

  const slugValue = Array.isArray(slug) ? slug[0] : slug;

  if (!slugValue) {
    return <p>Slug no definido</p>;
  }

  let foundImage: ImageItem | null = null;

  for (const category of Object.values(imagesData) as ImageItem[][]) {
    foundImage =
      category.find((img: ImageItem) => img.src.endsWith(slugValue)) || null;
    if (foundImage) break;
  }

  if (!foundImage) {
    return <p>Imagen no encontrada</p>;
  }

  const allImages = [foundImage.src, ...(foundImage.complementary || [])];

  const handleBack = () => {
    if (document.startViewTransition) {
      document.startViewTransition(() => {
        router.back();
      });
    } else {
      router.back();
    }
  };

  return (
    <>
      <Nav />
      <div className="flex min-h-screen bg-gray-100 p-4 gap-8 justify-center items-start flex-wrap relative">
        <PhotoProvider>
          <div className="flex-1 max-w-2xl flex flex-col gap-4 relative">
            {/* Botón de volver atrás */}
            <button
              onClick={handleBack}
              className="absolute top-16 left-4 z-50 px-4 py-2 bg-white shadow-md border border-gray-300 hover:bg-gray-100 rounded text-sm"
            >
              ← Volver atrás
            </button>

            <PhotoView src={allImages[0]}>
              <div className="relative w-full h-[500px] cursor-pointer rounded shadow-md">
                <Image
                  src={allImages[0]}
                  alt={slugValue}
                  fill
                  style={{ objectFit: "contain" }}
                  priority
                />
              </div>
            </PhotoView>

            <div className="flex gap-4 mt-4 overflow-x-auto">
              {allImages.slice(1).map((src, i) => (
                <PhotoView key={i} src={src}>
                  <div className="flex-shrink-0 w-32 h-32 rounded overflow-hidden shadow cursor-pointer relative">
                    <Image
                      src={src}
                      alt={`Complementaria ${i + 1}`}
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </PhotoView>
              ))}
            </div>
          </div>
        </PhotoProvider>

        <aside className="w-96 bg-white rounded shadow-md p-6 flex flex-col justify-start max-h-[50vh] overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Comentarios</h2>
          <div className="flex flex-col gap-3">
            <p className="text-gray-600">Comentario de ejemplo 1.</p>
            <p className="text-gray-600">Comentario de ejemplo 2.</p>
          </div>
        </aside>
      </div>
    </>
  );
}
