import Nav from "@/components/siteHeader";
import { AnimatedArticle } from "@/components/animatedArticle";
import { Carousel } from "@/components/carousel";
import { Inconsolata } from "next/font/google";
import ImagesGallery from "@/components/imagesGallery";

const roboto = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`${roboto.className} bg-[#f0dfc8]`}>
      <Nav />
      <div className="pt-24 min-h-[75vh] p-6">
        <h1 className="text-2xl font-bold mb-4 text-center">What's new</h1>
        <div className="flex flex-col lg:flex-row gap-6 items-center justify-center">
          <AnimatedArticle
            title="asaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"
            description="asd"
            content={
              <>
                <Carousel />
              </>
            }
          />
          <AnimatedArticle
            title="Asd"
            description="asd"
            content={<Carousel />}
          />
        </div>
      </div>

      {/* About Me Section */}
      <div className="relative bg-[url('/bg-paper.png')] bg-[length:500px_500px] bg-repeat min-h-screen px-6 py-12">
        <div className="absolute bg-[url('/bg-paperedge.png')] -top-1.5 bg-[length:1450px_7px] h-[7px] w-full"></div>
        <div
          className="absolute bg-[url('/bg-paperedge.png')] -bottom-1.5 bg-[length:1450px_7px] h-[7px] w-full"
          style={{ transform: "scaleY(-1)" }}
        ></div>

        <h1 className="text-3xl font-bold text-center mb-8">About me</h1>

        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 max-w-5xl mx-auto">
          {/* Imagen con fondo de marco pixelado */}
          <div className="w-64 lg:w-72 relative aspect-square flex items-center justify-center">
            {/* Imagen de ElfaLlorona como fondo */}
            <img
              src="/ElfaLlorona.png"
              alt="Elfa Llorona"
              className="w-3/4 h-3/4 object-cover rounded-md z-0"
            />

            {/* Marco pixelado encima */}
            <img
              src="/pixel-portrait.png"
              alt="Pixel Frame"
              className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
            />
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-1/2 pt-7 text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed">
            <p>¡Hola! Bli blib blu bi blub! Soy Elfa Llorona</p>
            <p className="mt-4">
              Blub blub blub blub. Bli blib blu bi blub! Blub blub blub blub
              blub. Bli blib blu bi blub! Blub blub blub blub blub. Bla bla ble
              bli blow
            </p>
          </div>
        </div>
      </div>
      <div className="pt-10 bg-[url('/bg-paper.png')] bg-[length:500px_500px] bg-repeat relative overflow-hidden">
        <div className="absolute inset-0 bg-[#ffba39] opacity-10 pointer-events-none"></div>
        <div
          aria-hidden="true"
          className="absolute inset-0 -top-16 bg-center bg-repeat"
          style={{
            backgroundImage: "url('/racoon.svg')",
            backgroundSize: "100px 100px",
            opacity: 0.09,
            pointerEvents: "none", // Para que no interfiera con clicks
            zIndex: 0,
          }}
        />
        <div style={{ position: "relative", zIndex: 1 }}>
          <ImagesGallery />
        </div>
      </div>
    </div>
  );
}
