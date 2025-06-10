import Image from "next/image";

export function buildImageCarouselItems(
  images: string[] | string | undefined,
  baseColor = "bg-white"
) {
  if (!images) return [];

  const imageArray = Array.isArray(images) ? images : [images];

  return imageArray.filter(Boolean).map((src, index) => ({
    id: index + 1,
    content: (
      <Image
        src={src || "/fallback.jpg"}
        alt={`Slide ${index + 1}`}
        fill
        style={{ objectFit: "cover" }} // o "cover", según prefieras
        sizes="(max-width: 768px) 100vw, 50vw"
        priority={index === 0}
      />
    ),
    color: baseColor,
  }));
}
