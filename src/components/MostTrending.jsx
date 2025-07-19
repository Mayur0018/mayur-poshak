import React from "react";
import Image from "next/image";
import Link from "next/link";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { SiCraftsman } from "react-icons/si";

export const Mosttrending = [
  {
    id: 1,
    image: "/MostTrending/trendingimg1.png",
    text: "Ruby Lips Oversized Tee",
    price: 1299.0,
  },
  {
    id: 2,
    image: "/MostTrending/trendingimg2.png",
    text: "Wild Bear Oversized Tee",
    price: 1299.0,
  },
  {
    id: 3,
    image: "/MostTrending/trendingimg3.png",
    text: "Adore You Oversized Tee",
    price: 1299.0,
  },
  {
    id: 4,
    image: "/MostTrending/trendingimg4.png",
    text: "Fake Make Oversized Tee",
    price: 1299.0,
  },
  {
    id: 5,
    image: "/MostTrending/trendingimg1.png",
    text: "Goat Aura Oversized Tee",
    price: 1299.0,
  },
  {
    id: 6,
    image: "/MostTrending/trendingimg6.png",
    text: "Big Dawgs Oversized Tee",
    price: 1299.0,
  },
  {
    id: 7,
    image: "/MostTrending/trendingimg7.png",
    text: "Luv Known Oversized Tee",
    price: 1299.0,
  },
  {
    id: 8,
    image: "/MostTrending/trendingimg8.png",
    text: "Star Gaze Oversized Tee",
    price: 1299.0,
  },
];
// Partnership Section
const Partnership = [
  {
    id: 1,
    icon: MdOutlineDesignServices,
    text: "Design Comfort Fit",
  },
  {
    id: 2,
    icon: PiHandshakeLight,
    text: "Quality Partnerships",
  },
  {
    id: 3,
    icon: LiaPeopleCarrySolid,
    text: "Customer Satisfaction",
  },
  {
    id: 4,
    icon: SiCraftsman,
    text: "Expert Craftsmanship",
  },
];
const summerimg = [
  { image: "/Summer/summer6.jpg" },
  { image: "/Summer/summer2.jpg" },
  { image: "/Summer/summer3.jpg" },
  { image: "/Summer/summer4.jpg" },
  { image: "/Summer/summer5.jpg" },
  { image: "/Summer/summer6.jpg" },
];

const MostTrending = () => {
  return (
    <>
      <h1 className="text-2xl font-medium mt-8 px-9 overflow-hidden">
        Most Trending
      </h1>
      <div className="py-8 grid grid-cols-2 md:grid-cols-4 gap-3 px-8 md:gap-0">
        {Mosttrending.map((items) => (
          <Link href={`/product/${items.id}`} key={items.id}>
            <div className="md:px-4 md:py-4">
              <Image
                src={items.image}
                width={800}
                height={0}
                alt="trendingimgs"
                className="aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
              />
              <p className="font-medium text-[12px] py-2">{items.text}</p>
              <p className="text-[12px] font-medium py-2">Rs.{items.price}</p>
              <button className="text-[12px] w-full px-2 py-2 md:py-4 md:px-4 font-medium bg-black text-white">
                ADD TO CART
              </button>
            </div>
          </Link>
        ))}
      </div>

      {/* Partnership and Trust Section */}

      <div className="py-4 justify-center md:gap-24 gap-2 flex px-5">
        {Partnership.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.id}
              className="flex flex-col items-center  hover:shadow-md transition text-center"
            >
              <Icon className="md:text-5xl text-3xl text-black mb-2" />
              <p className="font-medium md:text-sm text-[10px]">{item.text}</p>
            </div>
          );
        })}
      </div>

      {/* Summer Essentials */}
      <div className="mt-10">
        <h1 className=" text-1xl md:text-2xl font-medium text-center">
          SUMMER ESSENTIALS 🎇
          <div>
            <p className="text-[12px] text-gray-500">
              Hot Picks For The Season
            </p>
          </div>
        </h1>
        <div className="px-3 md:px-10 md:gap-6 grid  grid-cols-3 gap-2 mt-6">
          {summerimg.map((item, index) => (
            <Image
              key={index}
              src={item.image}
              width={400}
              height={400}
              alt={`summer-img-${index}`}
              className="rounded-lg w-full aspect-[253/337] object-cover object-top shadow-md hover:scale-[1.05] transition-all duration-300"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default MostTrending;
