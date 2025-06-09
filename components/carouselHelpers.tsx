// utils/carouselHelpers.ts

export function buildImageCarouselItems(
  images: string[] | string | undefined,
  baseColor = "bg-red-300"
) {
  if (!images) return [];

  const imageArray = Array.isArray(images) ? images : [images];

  return imageArray.filter(Boolean).map((src, index) => ({
    id: index + 1,
    content: (
      <img
        src={src || "/fallback.jpg"}
        alt={`Slide ${index + 1}`}
        className="h-full object-cover"
      />
    ),
    color: baseColor,
  }));
}
