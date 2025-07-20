"use client";
import * as React from "react";
import Image from "next/image";

import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";
import { images, mobileimages, logoSliders } from "@/Data/HeroImages";
const Hero = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      className="md:relative w-full"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <div className=" hidden md:block">
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
      </div>
      {/* Mobile Images */}
      <div className="block md:hidden">
        <Image
          src={mobileimages[index]}
          width={800}
          height={400}
          className="w-full object-cover transition-all duration-500"
          alt="mobile slider"
        />

        {/* Dot indicators */}
        <div className="w-full flex justify-center gap-2 mt-1">
          {(images.length > 0 ? images : mobileimages).map((_, idx) => (
            <div
              key={idx}
              className={`h-[2px] w-12 ${
                idx === index ? "bg-black" : "bg-gray-300"
              } border-2 border-dashed border-white`}
            />
          ))}
        </div>
      </div>
      {/* Logos slider with scroll animation */}
      <Marquee pauseOnHover gradient={false} speed={50}>
        <motion.div
          className="flex justify-evenly px-4 py-4"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          {logoSliders.map((items, index) => (
            <motion.div
              key={index}
              className="flex items-center px-5"
              whileHover={{ scale: 1.1 }}
            >
              <p className="font-medium text-3xl px-5">{items.logos}</p>
              <p>{items.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </Marquee>
    </motion.div>
  );
};

export default Hero;
