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
      <div className="relative h-64 w-full">
        {" "}
        {/* Altura fija para Image fill */}
        <Image
          src={src || "/fallback.jpg"}
          alt={`Slide ${index + 1}`}
          fill
          style={{ objectFit: "contain" }} // o "cover", según prefieras
          sizes="(max-width: 768px) 100vw, 50vw"
          priority={index === 0}
        />
      </div>
    ),
    color: baseColor,
  }));
}
