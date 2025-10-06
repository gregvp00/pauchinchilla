// data/imagesData.ts

export interface ImageItem {
  src: string;
  new: boolean;
  alt?: string;
  complementary?: string[];
}

export type CategoryKey = "illustration" | "conceptdsgn" | "lowpoly3d";

export interface ImagesData {
  illustration: ImageItem[];
  conceptdsgn: ImageItem[];
  lowpoly3d: ImageItem[];
  gallery: ImageItem[];
}

const imagesData: ImagesData = {
  illustration: [
    {
      src: "/comp/Nini-thumb.webp",
      new: true,
      alt: "Nini",
      complementary: [
        "/illustration/inkprint/NiniPrint.jpeg",
        "/illustration/inkprint/NiniPrintSource.jpg",
        "/illustration/inkprint/NiniDigital.png",
        "/illustration/inkprint/NiniSketch1.jpeg",
      ],
    },
    {
      src: "/comp/Ekko-thumb.webp",
      new: false,
      alt: "Ekko",
      complementary: [
        "/illustration/ekko/EkkoFinal.jpg",
        "/illustration/ekko/material3.jpg",
        "/illustration/ekko/material2.jpg",
        "/illustration/ekko/material1.jpg",
        "/illustration/ekko/EkkoSketch3.png",
        "/illustration/ekko/EkkoSketch2.jpeg",
        "/illustration/ekko/EkkoSketch1.jpeg",
      ],
    },
    {
      src: "/comp/Feefal-thumb.webp",
      new: false,
      alt: "Feefal",
      complementary: [
        "/illustration/feefal/FeefalFinal.jpeg",
        "/illustration/feefal/Feefal sketch color.png",
        "/illustration/feefal/Feefal line art .png",
        "/illustration/feefal/Feefal line sombras.png",
        "/illustration/feefal/FeefalSketch3.jpeg",
        "/illustration/feefal/FeefalSketch2.jpeg",
        "/illustration/feefal/FeefalSketch1.jpeg",
      ],
    },
    {
      src: "/comp/Dewdrop-thumb.webp",
      new: false,
      alt: "Dewdrop",
      complementary: [
        "/illustration/dewdrop/MushroomChalk.jpeg",
        "/illustration/dewdrop/MushroomChalk2.jpeg",
        "/illustration/dewdrop/MushroomChalk3.jpeg",
        "/illustration/dewdrop/MushroomChalk4.jpg",
      ],
    },
    {
      src: "/comp/jinx-thumb.webp",
      new: false,
      alt: "Jinx",
      complementary: [
        "/illustration/jinx/jinxSize.jpg",
        "/illustration/jinx/Jinx sketch 2.png",
        "/illustration/jinx/Jinx Sketch 1.png",
      ],
    },
    {
      src: "/comp/comic-thumb.webp",
      new: false,
      alt: "Comic",
      complementary: [
        "/illustration/comic/Comic.jpeg",
        "/illustration/comic/Comic2.jpeg",
      ],
    },
    {
      src: "/comp/cards-thumb.webp",
      new: false,
      alt: "Cards",
      complementary: [
        "/illustration/cards/Cartas 1.png",
        "/illustration/cards/Carta 2.png",
        "/illustration/cards/carta 3.png",
        "/illustration/cards/Cachete Jack 1 Ajustada.jpg",
        "/illustration/cards/Cachete Jack 2 Ajustada.jpg",
        "/illustration/cards/Cachete Jack 3 Ajustada.jpg",
        "/illustration/cards/Carta Devolle 1 ajustada.jpg",
        "/illustration/cards/Carta Devolle 2 ajustada.jpg",
        "/illustration/cards/Carta Devolle 3 ajustada.jpg",
        "/illustration/cards/Cachete Jack Parte de Atrás.jpg",
        "/illustration/cards/Parte de Atrás Jhon Devolle.jpg",
        "/illustration/cards/brainstorm.jpg",
        "/illustration/cards/Dino Carta sketch.png",
        "/illustration/cards/Rata carta sketch.png",
      ],
    },
    {
      src: "/comp/rotoscoping-thumb.webp",
      new: false,
      alt: "Rotoscoping",
    },
    {
      src: "/comp/kitt-thumb.webp",
      new: false,
      alt: "Kitt",
      complementary: ["/illustration/kitt/kittFinal.png"],
    },
  ],
  conceptdsgn: [
    {
      src: "/comp/frog-thumb.webp",
      new: false,
      alt: "Frog",
      complementary: [
        "/concept/frog/frog-photo1.jpg",
        "/concept/frog/frog-photo2.jpg",
        "/concept/frog/frog-photo4.jpg",
        "/concept/frog/frog-photo5.jpg",
        "/concept/frog/FrogSketch.png",
        "/concept/frog/FrogSketch2.png",
      ],
    },
    {
      src: "/comp/chinchilla-thumb.webp",
      new: false,
      alt: "Chinchilla",
      complementary: [
        "/concept/chinchilla/ChinchillaFoodSketch3.jpeg",
        "/concept/chinchilla/ChinchillaFoodSketch2.jpeg",
        "/concept/chinchilla/ChinchillaFoodSketch.jpeg",
      ],
    },
    {
      src: "/comp/AWF-thumb.webp",
      new: false,
      alt: "AWF",
      complementary: [
        "/concept/awf/Pegatinas.jpg",
        "/concept/awf/AWFSketch2.jpeg",
        "/concept/awf/AWFSketch1.jpeg",
      ],
    },
    {
      src: "/comp/avilio-thumb.webp",
      new: false,
      alt: "Avilio",
      complementary: [
        "/concept/avilio/LabirinthyaMockup.jpeg",
        "/concept/avilio/EXTERIORhires.png",
        "/concept/avilio/Interior.png",
        "/concept/avilio/IMG_20250606_184035_204.jpg",
        "/concept/avilio/Aviliohires.png",
        "/concept/avilio/Avilio_stephires.png",
        "/concept/avilio/Propshires.png",
        "/concept/avilio/Sketch Avilio Cuerpo.png",
        "/concept/avilio/Avilio Lineart Normal.png",
        "/concept/avilio/Avilio sketch feo.png",
      ],
    },
    {
      src: "/comp/velina-thumb.webp",
      new: true,
      alt: "Velina",
      complementary: [
        "/concept/velina/Character Design Velina_Page_02.jpg",
        "/concept/velina/Character Design Velina_Page_03.jpg",
        "/concept/velina/Character Design Velina_Page_04.jpg",
        "/concept/velina/Character Design Velina_Page_05.jpg",
        "/concept/velina/Character Design Velina_Page_06.jpg",
        "/concept/velina/Character Design Velina_Page_07.jpg",
        "/concept/velina/Character Design Velina_Page_08.jpg",
        "/concept/velina/Character Design Velina_Page_09.jpg",
      ],
    },
    {
      src: "/comp/collage-thumb.webp",
      new: true,
      alt: "Collage",
      complementary: [
        "/concept/collage/pollopescado.jpg",
        "/concept/collage/_DSC1239.webp",
        "/concept/collage/_DSC1241.webp",
        "/concept/collage/_DSC1244.webp",
      ],
    },
  ],
  lowpoly3d: [
    {
      src: "/comp/chameleon-thumb.webp",
      new: false,
      alt: "Chameleon",
      complementary: [
        "/3dlowpoly/chameleon/Frontal (2).png",
        "/3dlowpoly/chameleon/Render 1 (2).png",
        "/3dlowpoly/chameleon/Render 3.png",
        "/3dlowpoly/chameleon/Side 1.png",
        "/3dlowpoly/chameleon/Back.png",
        "/3dlowpoly/chameleon/Side 2 (3).png",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-28.jpg",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-44.jpg",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-06.jpg",
        "/3dlowpoly/chameleon/Chamileon sketch (1).png",
        "/3dlowpoly/chameleon/Chamileon sketch.png",
      ],
    },
    {
      src: "/3dlowpoly/beach/0Final.gif",
      new: false,
      alt: "Beach",
      complementary: ["/3dlowpoly/beach/0062.png"],
    },
    {
      src: "/comp/space-thumb.webp",
      new: false,
      alt: "Space",
      complementary: ["/3dlowpoly/space/0062.png"],
    },
    {
      src: "/3dlowpoly/racoon/Final Project.gif",
      new: false,
      alt: "Racoon",
      complementary: [],
    },
    {
      src: "/comp/moon-thumb.webp",
      new: false,
      alt: "Moon",
      complementary: ["/3dlowpoly/moon/Wallpaper Final.png"],
    },
  ],
  gallery: [
    {
      src: "/comp/chameleon-thumb.webp",
      new: false,
      alt: "Chameleon",
      complementary: [
        "/3dlowpoly/chameleon/Frontal (2).png",
        "/3dlowpoly/chameleon/Render 1 (2).png",
        "/3dlowpoly/chameleon/Render 3.png",
        "/3dlowpoly/chameleon/Side 1.png",
        "/3dlowpoly/chameleon/Back.png",
        "/3dlowpoly/chameleon/Side 2 (3).png",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-28.jpg",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-44.jpg",
        "/3dlowpoly/chameleon/photo_2023-06-01_23-43-06.jpg",
        "/3dlowpoly/chameleon/Chamileon sketch (1).png",
        "/3dlowpoly/chameleon/Chamileon sketch.png",
      ],
    },
    {
      src: "/3dlowpoly/beach/0Final.gif",
      new: false,
      alt: "Beach",
      complementary: ["/3dlowpoly/beach/0062.png"],
    },
    {
      src: "/comp/space-thumb.webp",
      new: false,
      alt: "Space",
      complementary: ["/3dlowpoly/space/0062.png"],
    },
    {
      src: "/3dlowpoly/racoon/Final Project.gif",
      new: false,
      alt: "Racoon",
      complementary: [],
    },
    {
      src: "/comp/moon-thumb.webp",
      new: false,
      alt: "Moon",
      complementary: ["/3dlowpoly/moon/Wallpaper Final.png"],
    },
  ],
};

export default imagesData;
