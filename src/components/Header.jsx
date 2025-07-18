"use client";
import React from "react";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { CiUser } from "react-icons/ci";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

import { useState } from "react";
import Image from "next/image";
const Header = () => {
  const [menuOpen, setMenuopen] = useState(false);
  return (
    <>
      {/* laptop size */}
      <div className="hidden lg:block">
        <div className="bg-black text-white py-3 font-medium flex justify-center items-center">
          JO DIKHTA HAI VO BIKTA HAI
        </div>
        <div className="flex items-center gap-130 px-10 border py-4">
          <div className="flex  cursor-pointer">
            <CiMenuFries className="text-2xl" />
            <IoSearchOutline className="text-2xl ml-5" />
          </div>

          <Image
            src="/mayurposhak.png"
            width={200}
            height={0}
            alt="logimg"
          ></Image>
          <div className="flex items-center  cursor-pointer">
            <CiUser className=" text-2xl" />
            <TbShoppingBag className=" text-2xl ml-5" />
          </div>
        </div>
      </div>
      {/* mobile and tablate view  */}
      <div className="flex items-center justify-around py-5 lg:hidden">
        <CiMenuFries className=" text-2xl" onClick={() => setMenuopen(true)} />
        <Image
          src="/mayurposhak.png"
          width={160}
          height={0}
          alt="logimg"
        ></Image>
        <IoSearchOutline className=" text-2xl" />
        <TbShoppingBag className=" text-2xl" />
      </div>
      {/* moblie resposive */}
      {menuOpen && (
        <div className="lg:hidden flex flex-col gap-4 w-82 md:w-2xl h-screen bg-white absolute top-0 border border-gray-400 py-5 px-5">
          <RxCross1 onClick={() => setMenuopen(false)} />
          <hr className="border-gray-300" />
          <p className="font-medium">HOME</p>
          <hr className="border-gray-300" />
          <p className="font-medium">SHOP BY CATEGORIES</p>
          <hr className="border-gray-300" />
          <p className="font-medium">ABOUT US</p>
          <hr className="border-gray-300" />
          <p className="font-medium">CONTACT</p>
          <hr className="border-gray-300" />
          <p className="font-medium">BLOGS</p>

          {/* bottom nav  */}
          <div className="py-10 absolute bottom-0">
            <hr className="border-gray-300" />
            <div className="flex items-center justify-evenly gap-12   cursor-pointer py-5">
              <CiUser />
              <p>Log in</p>
              <FaFacebookF />
              <FaInstagram />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
