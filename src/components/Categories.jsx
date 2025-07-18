import React from "react";
import Image from "next/image";
const category = [
  {
    id: 1,
    Image: "/Category/Categoryimg1.png",
    text: "HODIES",
  },
  {
    id: 2,
    Image: "/Category/Categoryimg2.png",
    text: "OVERSSHIRT",
  },
  {
    id: 3,
    Image: "/Category/Categoryimg3.png",
    text: "OVERSIZE TEES",
  },
  {
    id: 4,
    Image: "/Category/Categoryimg4.png",
    text: "PARTY WEAR",
  },
  {
    id: 5,
    Image: "/Category/Categoryimg5.png",
    text: "SOLID",
  },
  {
    id: 6,
    Image: "/Category/Categoryimg6.png",
    text: "ALOHA SHIRTS",
  },
];
const Categories = () => {
  return (
    <>
      <h1 className="flex justify-center items-center py-5 md:py-8  text-2xl md:text-5xl">
        SHOP BY CATEGORIES
      </h1>
      <div className=" grid grid-cols-3 px-8 md:px-30 gap-2 md:grid-cols-6 py-10 md:py-16">
        {category.map((items) => (
          <div key={items.id} className=" px-1 py-1">
            <Image
              src={items.Image}
              width={50}
              height={0}
              alt=""
              className="rounded-full object-cover md:w-20"
            ></Image>
            <p className="text-[10px] mt-4  font-medium">{items.text}</p>
          </div>
        ))}
      </div>

      {/* banner */}
      <div>
        <Image
          src="/Category/banner.png"
          width={2000}
          height={600}
          alt=""
          className="md:w-full rounded-3xl"
        ></Image>
      </div>
    </>
  );
};

export default Categories;
