"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";
import Image from "next/image";
const Header = () => {
    const [menu ,setMenu] = useState(false);
  return (
    <>
      <div className="flex justify-evenly items-center font-montserrat">
        <CiMenuFries className=" text-2xl" />
        <Image src="/mayurposhak.png" width={120} height={0}></Image>
        <IoSearchOutline className=" text-2xl" />
        <TbShoppingBag className=" text-2xl" />
      </div>
      {/* moblie resposive */}
      <div className="sm:hidden flex flex-col gap-5 w-80 h-screen bg-white absolute top-0 border border-gray-400 py-5 px-5">
        <RxCross1 />
        <hr />
        <p>HOME</p>
        <hr />
        <p>SHOP BY CATEGORIES</p>
        <hr />
        <p>ABOUT US</p>
        <hr />
        <p>CONTACT</p>
        <hr />
        <p>BLOGS</p>
      </div>
    </>
  );
};

export default Header;
