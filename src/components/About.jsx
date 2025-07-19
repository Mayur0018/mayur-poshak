import React from "react";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiHandshakeLight } from "react-icons/pi";
import { LiaPeopleCarrySolid } from "react-icons/lia";
import { SiCraftsman } from "react-icons/si";
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
const About = () => {
  return (
    <>
      <div>
        <h1>About Mayur Poshak</h1>
        <p>
          Step into the world of bumchiq, where fashion gets a funky twist.
          Unleash your inner trendsetter with our one-of-a-kind, offbeat prints.
          We're not just a clothing brand; we're a statement, and you're the
          voice. Explore the extraordinary!
        </p>
        <div className="py-4 justify-center md:gap-24 gap-2 flex px-5">
          {Partnership.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.id}
                className="flex flex-col items-center  hover:shadow-md transition text-center"
              >
                <Icon className="md:text-5xl text-3xl text-black mb-2" />
                <p className="font-medium md:text-sm text-[10px]">
                  {item.text}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default About;
