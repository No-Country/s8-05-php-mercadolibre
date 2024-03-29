'use client';

import Image from 'next/image';

import { Carousel } from 'flowbite-react';

import { SlArrowLeft, SlArrowRight } from 'react-icons/sl';
import { useEffect, useState } from 'react';

function LeftArrow(show: boolean) {
  return (
    <div
      className={`${
        show ? 'translate-x-0' : '-translate-x-12'
      } hidden lg:block transition-transform bg-white px-4 py-8 relative right-5 rounded-lg shadow-lg cursor-none lg:cursor-pointer`}
    >
      {<SlArrowLeft className="text-[#3483fa]" />}
    </div>
  );
}

function RightArrow(show: boolean) {
  return (
    <div
      className={`${
        show ? 'translate-x-0' : 'translate-x-12'
      } hidden lg:block transition-transform bg-white px-4 py-8 relative left-5 rounded-lg shadow-lg cursor-none lg:cursor-pointer`}
    >
      {<SlArrowRight className="text-[#3483fa]" />}
    </div>
  );
}

export default function CarouselComponent({ imgs }: { imgs: string[] }) {
  const [showArrows, setShowArrows] = useState(false);

  const handleEnter = () => setShowArrows(true);
  const handleLeave = () => setShowArrows(false);

  useEffect(() => {
    setShowArrows(window.innerWidth < 1000);
  }, []);

  return (
    <div
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="h-[80px] md:h-[200px] lg:h-[300px] w-[90%] mx-[5%] lg:w-full lg:mx-0"
    >
      <Carousel leftControl={LeftArrow(showArrows)} rightControl={RightArrow(showArrows)}>
        {imgs.map((img: string, i: number) => (
          <Image
            key={i}
            src={img}
            width={1000}
            height={1000}
            alt="Carousel image"
            className="object-cover md:h-auto lg:h-auto h-20"
          />
        ))}
      </Carousel>
    </div>
  );
}
