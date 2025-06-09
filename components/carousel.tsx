"use client";

import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

import { RippleButton } from "./rippleButton";

const items = [
  { id: 1, content: "Slide 1", color: "bg-red-300" },
  { id: 2, content: "Slide 2", color: "bg-green-300" },
  { id: 3, content: "Slide 3", color: "bg-blue-300" },
];

export const Carousel = () => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);

  return (
    <div className="relative max-w-lg mx-auto h-64">
      {/* Swiper */}
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        pagination={{
          type: "bullets",
          dynamicBullets: true,
          clickable: true,
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            if (!swiper.destroyed) {
              swiper.params.navigation.prevEl = prevRef.current;
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.destroy();
              swiper.navigation.init();
              swiper.navigation.update();
            }
          });
        }}
        className="h-full relative z-10"
      >
        {items.map((item) => (
          <SwiperSlide key={item.id}>
            <div
              className={`h-64 flex items-center justify-center text-white text-xl font-bold ${item.color}`}
            >
              {item.content}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Botón anterior */}
      <div className="absolute -left-5 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex">
        <RippleButton
          ref={prevRef}
          aria-label="Previous Slide"
          className="text-white p-2 flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url("/pixel-square.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            borderRadius: 0,
            width: 40,
            height: 40,
          }}
        >
          <ChevronLeftIcon className="w-6 h-6 text-black" />
        </RippleButton>
      </div>

      {/* Botón siguiente */}
      <div className="absolute -right-5 top-1/2 transform -translate-y-1/2 z-30 hidden lg:flex">
        <RippleButton
          ref={nextRef}
          aria-label="Next Slide"
          className="text-white p-2 flex items-center justify-center cursor-pointer"
          style={{
            backgroundImage: `url("/pixel-square.svg")`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "contain",
            borderRadius: 0,
            width: 40,
            height: 40,
          }}
        >
          <ChevronRightIcon className="w-6 h-6 text-black" />
        </RippleButton>
      </div>

      {/* Esquinas pixel art */}
      <div className="absolute inset-0 pointer-events-none z-20">
        {[
          { pos: "top-left", class: "-top-1.5 -left-1.5", rotate: 0 },
          { pos: "top-right", class: "-top-1.5 -right-1.5", rotate: 90 },
          { pos: "bottom-left", class: "-bottom-1.5 -left-1.5", rotate: -90 },
          { pos: "bottom-right", class: "-bottom-1.5 -right-1.5", rotate: 180 },
        ].map(({ pos, class: positionClass, rotate }) => (
          <img
            key={pos}
            src="/pixel-corner.png"
            alt={`${pos} corner`}
            className={`absolute w-6 h-6 ${positionClass}`}
            style={{ transform: `rotate(${rotate}deg)` }}
          />
        ))}
      </div>
    </div>
  );
};
