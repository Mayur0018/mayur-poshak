"use client";
import * as React from "react";
import Image from "next/image";

const Hero = () => {
  const images = [
    "/SliderImage/Slider1.png",
    "/SliderImage/Slider2.png",
    "/SliderImage/Slider3.png",
  ];
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className=" md:relative w-full">
      <Image
        src={images[index]}
        width={2000}
        height={600}
        className="w-full object-cover transition-all duration-500"
        alt="slider"
      />

      <div className=" absolute bottom-3 w-full flex justify-center gap-2">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-[2px] w-12 ${
              idx === index ? "bg-black" : "bg-gray-300"
            } border-2 border-dashed border-white`}
          />
        ))}
      </div>
    </div>
  );
};

export default Hero;
