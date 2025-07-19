import React from "react";
import { TbTruckDelivery } from "react-icons/tb";
import { HiOutlineTruck } from "react-icons/hi2";
import { Ri24HoursLine } from "react-icons/ri";
import { LuCodesandbox } from "react-icons/lu";
import Image from "next/image";
const logoSliders = [
  {
    id: 1,
    logos: TbTruckDelivery,
    name: "FREE DELIVERY",
  },
  {
    id: 2,
    logos: Ri24HoursLine,
    name: "ORDERS DISPATCH WITHIN 24 HOURS",
  },
  {
    id: 3,
    logos: HiOutlineTruck,
    name: "COD AVAILABLE",
  },
  {
    id: 4,
    logos: LuCodesandbox,
    name: "RETURN/EXCHANGE",
  },
];
const About = () => {
  return (
    <>
      <div className="py-16">
        <h1 className="text-1xl md:text-2xl font-semibold text-center">
          About Mayur Poshak
        </h1>
        <p className="text-center max-w-3xl  mt-6 mx-auto px-4 md:px-6 text-[14px] md:text-[16px] leading-relaxed font-medium">
          Step into the world of bumchiq, where fashion gets a funky twist.
          Unleash your inner trendsetter with our one-of-a-kind, offbeat prints.
          We're not just a clothing brand; we're a statement, and you're the
          voice. Explore the extraordinary!
        </p>

        <div className="py-4 justify-center md:gap-8 gap-2 flex px-2 mt-6 ">
          {logoSliders.map((item) => {
            const Logos = item.logos;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center  hover:shadow-md transition text-center"
              >
                <Logos className="md:text-5xl text-3xl text-black mb-2" />
                <p className="font-medium md:text-sm text-[8px]">{item.name}</p>
              </div>
            );
          })}
        </div>
      </div>

      {/* mayur paushak on insta */}
      <div>
        <h1 className="text-1xl md:text-2xl font-semibold text-center">
          Mayur Poshak is on insta!
        </h1>
        <Image
          src="/instabanner.jpg"
          width={1000}
          height={600}
          alt="insta-banner"
          className="w-full md:w-[1100px] rounded-xl md:rounded-md block mx-auto py-6"
        />
      </div>

      {/* details */}
      <div className="md:px-48 mt-10 px-5 mb-10">
        <p className="font-semibold text-[10px]">Founded: 2024</p>
        <p className="text-gray-500 text-[10px]">
          Born in india , for global stage
        </p>
        <div className="grid grid-cols-1 md:flex md:justify-center md:items-center md:gap-32 md:py-6">
          <div>
            <h1 className="font-extrabold text-[20px]">Pan india</h1>
            <p className="text-gray-500 text-[10px]">Regions Served</p>
          </div>
          <div>
            <h1 className="font-extrabold text-[20px]">Strong Fanbase</h1>
            <p className="text-gray-500 text-[10px]">
              boys reorder their fav tee every month strong fan base
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:flex  gap-10 mt-5">
          <div className="bg-gray-200 px-8 py-8 rounded-lg">
            <h1 className="text-center font-extrabold">OUR MISION</h1>
            <p className="text-[10px] py-3">
              To empower men to wear meaningfully designed streetwear that
              boosts confidence and celebrates individuality.
            </p>
          </div>
          <div className="bg-gray-200 px-8 py-8 rounded-lg">
            <h1 className="text-center font-extrabold">Our Vision</h1>
            <p className="text-[10px] py-3">
              To redefine men’s streetwear in India by merging meaningful
              messages with bold design, building a loyal community that values
              style with substance.
            </p>
          </div>
        </div>
        <div className="text-center mt-10">
          <h1 className="md:text-5xl text-2xl font-medium py-5">
            Ready to Join the MayurPoshak Movement?
          </h1>
          <button className=" md:w-auto text-[12px] text-white px-5 py-2 md:py-2 md:px-10 bg-black rounded-lg">
            Shop Now
          </button>
        </div>
      </div>
    </>
  );
};

export default About;
