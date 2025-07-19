"use client";
import * as React from "react";
import Image from "next/image";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi2";
import { Ri24HoursLine } from "react-icons/ri";
import { LuCodesandbox } from "react-icons/lu";
import Marquee from "react-fast-marquee";

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

    const logoSliders = [
      {
        id: 1,
        logos: <TbTruckDelivery />,
        name: "FREE DELIVERY",
      },
      {
        id: 2,
        logos: <Ri24HoursLine />,
        name: "ORDERS DISPATCH WITHIN 24 HOURS",
      },
      {
        id: 3,
        logos: <HiOutlineTruck />,
        name: "COD AVAILABLE",
      },
      {
        id: 4,
        logos: <LuCodesandbox />,
        name: "RETURN/EXCHANGE",
      },
    ];

  return (
    // image slider
    <div className=" md:relative w-full">
      <Image
        src={images[index]}
        width={2000}
        height={600}
        className="w-full object-cover transition-all duration-500"
        alt="slider"
      />

      <div className="w-full flex justify-center gap-2 mt-1">
        {images.map((_, idx) => (
          <div
            key={idx}
            className={`h-[2px] w-12 ${
              idx === index ? "bg-black" : "bg-gray-300"
            } border-2 border-dashed border-white`}
          />
        ))}
      </div>

      {/* logos slider */}
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex justify-evenly px-4 py-4">
          {logoSliders.map((items, index) => (
            <div key={index} className="flex items-center px-5">
              <p className="font-medium text-3xl px-5">{items.logos}</p>
              <p>{items.name}</p>
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
};

export default Hero;
