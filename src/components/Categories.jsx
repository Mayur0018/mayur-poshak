"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { category } from "@/Data/Category";

const Categories = () => {
  return (
    <>
      <motion.h1
        className="flex justify-center items-center py-5 md:py-8 text-2xl md:text-5xl"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        SHOP BY CATEGORIES
      </motion.h1>

      <div className="grid grid-cols-3 px-8 md:px-30 gap-2 md:grid-cols-6 py-10 md:py-16">
        {category.map((items, index) => (
          <motion.div
            key={items.id}
            className="px-1 py-1 flex flex-col items-center"
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              delay: index * 0.1,
              type: "spring",
              stiffness: 100,
            }}
          >
            <Image
              src={items.Image}
              width={80}
              height={80}
              alt=""
              className="object-cover rounded-full md:w-24 md:h-24 h-24 w-24 aspect-[253/337] object-top shadow-md hover:scale-[1.05] transition-all duration-300"
            />
            <p className="text-[10px] mt-4 font-medium">{items.text}</p>
          </motion.div>
        ))}
      </div>

      {/* banner */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/Category/banner.png"
          width={2000}
          height={600}
          alt=""
          className="md:w-full rounded-md"
        />
      </motion.div>
    </>
  );
};

export default Categories;
