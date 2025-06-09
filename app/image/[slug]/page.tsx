"use client";
import Nav from "@/components/siteHeader";
import { PhotoProvider, PhotoView } from "react-photo-view";
import imagesData from "@/data/imagesData.json";
import { useRouter } from "next/navigation";

export default function ImageDetailPage({ params }) {
  const { slug } = params;
  const router = useRouter();

  // Buscar la imagen principal y sus complementarias en el JSON
  let foundImage = null;

  for (const category of Object.values(imagesData)) {
    foundImage = category.find((img) => img.src.endsWith(slug));
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
      <div className="flex min-h-screen bg-gray-100 p-4 gap-8 justify-center items-start flex-wrap">
        <PhotoProvider>
          <div className="flex-1 max-w-2xl flex flex-col gap-4">
            {/* Botón de volver atrás */}
            <button
              onClick={handleBack}
              className="absolute top-16 left-4 z-50 px-4 py-2 bg-white shadow-md border border-gray-300 hover:bg-gray-100 rounded text-sm"
            >
              ← Volver atrás
            </button>

            <PhotoView src={allImages[0]}>
              <img
                src={allImages[0]}
                alt={slug}
                className="w-full h-auto object-contain rounded shadow-md cursor-pointer"
              />
            </PhotoView>

            <div className="flex gap-4 mt-4 overflow-x-auto">
              {allImages.slice(1).map((src, i) => (
                <PhotoView key={i} src={src}>
                  <div className="flex-shrink-0 w-32 h-32 rounded overflow-hidden shadow cursor-pointer">
                    <img
                      src={src}
                      alt={`Complementaria ${i + 1}`}
                      className="w-full h-full object-cover"
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
