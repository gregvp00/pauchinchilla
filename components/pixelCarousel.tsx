import { AnimatedArticle } from "@/components/animatedArticle";
import imagesData from "@/data/imagesData.json";
import { Carousel } from "@/components/carousel";
import { buildImageCarouselItems } from "@/components/carouselHelpers";

export default function ImagesGallery() {
  const concept = imagesData.conceptdsgn[3];
  const lowpoly3d = imagesData.lowpoly3d[3];

  const avilioItems = buildImageCarouselItems([
    concept?.src,
    ...(Array.isArray(concept?.complementary)
      ? concept.complementary
      : [concept?.complementary]),
  ]);

  const racoonItems = buildImageCarouselItems([
    lowpoly3d?.src,
    ...(Array.isArray(lowpoly3d?.complementary)
      ? lowpoly3d.complementary
      : [lowpoly3d?.complementary]),
  ]);

  return (
    <div className="pt-24 min-h-[75vh] p-6">
      <h1 className="text-2xl font-bold mb-4 text-center">What's new</h1>
      <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
        <AnimatedArticle
          title="Avilio"
          description="Character design"
          content={<Carousel items={avilioItems} />}
        />

        <AnimatedArticle
          title="Racoon forest"
          description="Lowpoly 3D model"
          content={<Carousel items={racoonItems} />}
        />
      </div>
    </div>
  );
}
