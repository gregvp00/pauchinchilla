"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";

interface AnimatedArticleProps {
  title: string;
  description: string;
  content: React.ReactNode;
  delay?: number;
}

export const AnimatedArticle = ({
  title,
  description,
  content,
  delay = 0,
}: AnimatedArticleProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const pulseVariants = {
    pulse: {
      scale: [1, 1.1, 1],
      opacity: [1, 1, 1],
      transition: {
        duration: 1,
        repeat: Infinity,
        times: [0, 0.5, 1],
        ease: "linear",
      },
    },
    initial: {
      scale: 1,
      opacity: 0,
      transition: { duration: 0 },
    },
  };

  const corners = [
    {
      pos: "top-left",
      src: "/pixel-frame-tl.png",
      rotation: 0,
      class: "-top-3 -left-3",
    },
    {
      pos: "top-right",
      src: "/pixel-frame-tr.png",
      rotation: 90,
      class: "-top-3 -right-3",
    },
    {
      pos: "bottom-left",
      src: "/pixel-frame-bl.png",
      rotation: -90,
      class: "-bottom-3 -left-3",
    },
    {
      pos: "bottom-right",
      src: "/pixel-frame-br.png",
      rotation: 180,
      class: "-bottom-3 -right-3",
    },
  ];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="relative dark:bg-zinc-900 p-7 bg-[url('/bg-paper.png')] border-[#f7f0e5] border-5 bg-[length:500px_500px] bg-repeat shadow-md hover:shadow-xl transition-shadow duration-300 min-w-[280px]"
      style={{ boxShadow: "inset 0 0 0 2px #e0d2bd" }}
    >
      {corners.map(({ pos, src, rotation, class: positionClass }) => (
        <motion.img
          key={pos}
          src={src}
          alt={`${pos} corner`}
          className={`absolute w-7 h-7 transition-opacity duration-200 ${positionClass}`}
          rotate={rotation}
          initial="initial"
          animate={isHovered ? "pulse" : "initial"}
          variants={pulseVariants}
        />
      ))}

      <div>
        <h2 className="text-xl font-semibold mb-1">{title}</h2>
        <p className="text-sm text-zinc-500 mb-3">{description}</p>
        <div className="text-zinc-700 dark:text-zinc-300 text-sm">
          {content}
        </div>
      </div>
    </motion.article>
  );
};
