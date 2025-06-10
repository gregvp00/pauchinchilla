import Nav from "@/components/siteHeader";
import { Inconsolata } from "next/font/google";
import ImagesGallery from "@/components/imagesGallery";
import PixelCarousel from "@/components/pixelCarousel";
import Image from "next/image"; // <-- Importar Image

const roboto = Inconsolata({ subsets: ["latin"], weight: "400" });

export default function Home() {
  return (
    <div className={`${roboto.className} bg-white`}>
      <Nav />
      <PixelCarousel />
      {/* About Me Section */}
      <div className="relative bg-[url('/bg-paper.png')] bg-[length:500px_500px] bg-repeat min-h-2/3 px-6 py-12">
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
            <Image
              src="/ElfaLlorona.png"
              alt="Elfa Llorona"
              className="w-3/4 h-3/4 object-cover rounded-md z-0"
              width={288} // 3/4 de 384 (w-64 lg:w-72 ≈ 256-288px)
              height={288}
              priority
            />

            {/* Marco pixelado encima */}
            <Image
              src="/pixel-portrait.png"
              alt="Pixel Frame"
              className="absolute top-0 left-0 w-full h-full object-contain z-10 pointer-events-none"
              fill
              priority
            />
          </div>

          {/* Texto descriptivo */}
          <div className="w-full md:w-2/3 text-zinc-800 dark:text-zinc-200 text-lg leading-relaxed">
            <p>
              Hey there! I'm Paula Chinchilla — 21 years old and powered by
              pixels, colors, and wild ideas.
            </p>
            <p className="mt-4">
              I'm currently studying Illustration at EASD Valencia, where I dive
              deep into the worlds of character design and pixel art.
            </p>
            <p>
              Lately, I've also been exploring the 3D realm, crafting low-poly
              models in Blender and having a blast doing it.
            </p>
            <p className="mt-2">
              Curious? Inspired? Just bored? Feel free to explore my work
              through my portfolio, I'd love to share my little creative
              universe with you!
            </p>
          </div>
        </div>
      </div>

      <h1 id="portfolio" className="text-4xl pt-46 pb-6 px-48">
        Portfolio
      </h1>
      <ImagesGallery />
    </div>
  );
}
