"use client";

import Nav from "@/components/sections/siteHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import Image from "next/image";
import imagesData from "@/data/imagesData";
import { useRouter, useParams } from "next/navigation";
import { Inconsolata } from "next/font/google";

const inconsolata = Inconsolata({ subsets: ["latin"], weight: "400" });

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
    <div className={inconsolata.className}>
      <Nav />
      <main className="min-h-screen bg-gray-50 pt-16 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <button
            onClick={handleBack}
            className="mb-8 inline-flex items-center gap-2 border border-gray-300 bg-white px-4 py-2 text-sm font-semibold text-gray-700 shadow-sm transition-colors hover:bg-gray-100"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 19l-7-7m0 0l7-7m-7 7h18"
              />
            </svg>
            Return
          </button>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <PhotoProvider photoClassName="bg-gray-50">
                <div className="flex flex-col gap-6">
                  <PhotoView src={allImages[0]}>
                    <div className="relative h-[600px] w-full cursor-pointer overflow-hidden border border-gray-200 bg-white shadow-xl">
                      <Image
                        src={allImages[0]}
                        alt={slugValue}
                        fill
                        style={{ objectFit: "contain" }}
                        priority
                        className="view-transition-image"
                      />
                    </div>
                  </PhotoView>
                  <div className="flex gap-4 overflow-x-auto pb-2">
                    {allImages.slice(1).map((src, i) => (
                      <PhotoView key={i} src={src}>
                        <div className="relative h-32 w-32 flex-shrink-0 cursor-pointer overflow-hidden border border-gray-200 shadow-md transition-transform duration-200 ease-in-out hover:scale-105">
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
            </div>
            <aside className="h-fit bg-white p-6 shadow-lg lg:col-span-1 lg:sticky lg:top-24">
              <h2 className="mb-4 border-b pb-3 text-2xl font-semibold">
                Comentarios
              </h2>
              <div className="flex flex-col gap-4">
                <p className="leading-relaxed text-gray-700">
                  Comentario de ejemplo 1.
                </p>
                <p className="leading-relaxed text-gray-700">
                  Comentario de ejemplo 2.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </main>
    </div>
  );
}
