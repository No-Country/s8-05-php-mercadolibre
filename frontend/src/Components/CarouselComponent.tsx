"use client";

import Image from "next/image";

import { Carousel } from "flowbite-react";

import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import { useState } from "react";

function LeftArrow(show: boolean) {
  return (
    <div
      className={`${
        show ? "translate-x-0" : "-translate-x-12"
      } transition-transform bg-white px-4 py-8 relative right-5 rounded-lg shadow-lg`}
    >
      {<SlArrowLeft className="text-[#3483fa]" />}
    </div>
  );
}

function RightArrow(show: boolean) {
  return (
    <div
      className={`${
        show ? "translate-x-0" : "translate-x-12"
      } transition-transform bg-white px-4 py-8 relative left-5 rounded-lg shadow-lg`}
    >
      {<SlArrowRight className="text-[#3483fa]" />}
    </div>
  );
}

export default function CarouselComponent({ imgs }: { imgs: string[] }) {
  const [showArrows, setShowArrows] = useState(false);

  const handleEnter = () => setShowArrows(true);
  const handleLeave = () => setShowArrows(false);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="h-56 sm:h-64 xl:h-80 2xl:h-96"
      style={{ height: "200px" }}
    >
      <Carousel
        leftControl={LeftArrow(showArrows)}
        rightControl={RightArrow(showArrows)}
      >
        {imgs.map((img: string, i: number) => (
          <Image
            key={i}
            src={img}
            width={500}
            height={500}
            alt="Carousel image"
          />
        ))}
      </Carousel>
    </div>
  );
}
