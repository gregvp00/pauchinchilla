// pages/ImagesGallery.tsx o donde uses esta página
import { AnimatedArticle } from "@/components/animatedArticle";
import { Carousel } from "@/components/carousel";
import { buildImageCarouselItems } from "@/components/carouselHelpers";

export default function ImagesGallery() {
  const avilioItems = buildImageCarouselItems([
    "/concept/avilio/widethumb.jpg", // Ruta relativa desde public
  ]);

  const racoonItems = buildImageCarouselItems([
    "/3dlowpoly/racoon/Final Project.gif",
    "/3dlowpoly/racoon/Final Project.gif", // Ruta relativa desde public
  ]);

  return (
    <div className="pt-24 p-6 mb-11">
      <h1 className="text-2xl font-bold mb-4 text-center">What&apos;s new</h1>
      <div className="flex flex-col xl:flex-row gap-6 items-center justify-center">
        <div className="w-full max-w-xl">
          <AnimatedArticle
            title="Avilio"
            description="Character design"
            content={<Carousel items={avilioItems} />}
          />
        </div>

        <div className="w-full max-w-xl">
          <AnimatedArticle
            title="Racoon forest"
            description="Lowpoly 3D model"
            content={<Carousel items={racoonItems} />}
          />
        </div>
      </div>
    </div>
  );
}
