// utils/carouselHelpers.tsx
import Image from "next/image";

export function buildImageCarouselItems(
  images: string[] | string | undefined,
  baseColor = "bg-red-300"
) {
  if (!images) return [];

  const imageArray = Array.isArray(images) ? images : [images];

  return imageArray.filter(Boolean).map((src, index) => ({
    id: index + 1,
    content: (
      <div className="relative h-full w-full">
        <Image
          src={src || "/fallback.jpg"}
          alt={`Slide ${index + 1}`}
          fill
          style={{ objectFit: "cover" }}
          sizes="(max-width: 768px) 100vw, 50vw" // Ajusta según diseño
          priority={index === 0} // Opcional: da prioridad a la primera imagen
        />
      </div>
    ),
    color: baseColor,
  }));
}
