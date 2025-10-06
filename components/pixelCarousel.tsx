// pages/ImagesGallery.tsx
import { AnimatedArticle } from "@/components/animatedArticle";
import { Carousel } from "@/components/carousel";
import { buildImageCarouselItems } from "@/components/carouselHelpers";

export default function ImagesGallery() {
  const firstItems = buildImageCarouselItems([
    "/concept/velina/widethumb.webp",
    "/concept/velina/widethumb2.webp", // Ruta relativa desde public
  ]);

  const secondItems = buildImageCarouselItems([
    "/3dlowpoly/racoon/Final Project.gif", // Ruta relativa desde public
  ]);

  return (
    <div className="pt-24 p-6 mb-11">
      <h1 className="text-2xl font-bold mb-4 text-center">What&apos;s new</h1>
      <div className="flex flex-col xl:flex-row gap-6 items-center justify-center">
        <div className="w-full max-w-xl">
          <AnimatedArticle
            title="Velina"
            description="Character design"
            content={<Carousel items={firstItems} />}
          />
        </div>

        <div className="w-full max-w-xl">
          <AnimatedArticle
            title="Racoon forest"
            description="Lowpoly 3D model"
            content={<Carousel items={secondItems} />}
          />
        </div>
      </div>
    </div>
  );
}
