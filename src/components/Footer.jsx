import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

const Footer = () => {
  return (
    <>
     
      <div className="bottom-0 left-0 w-full bg-white border-t z-50">
         <hr className="w-full border-t border-gray-300" />
          <p className="text-[10px] text-center md:text-xs text-gray-500 py-10 md:py-38 md:px-5 font-medium ">
        © 2025 Mayur Poshak ALL rights reserved
      </p>
        <div className=" md:hidden flex justify-around items-center py-3">
          <div className="flex flex-col items-center text-xs font-medium text-gray-700">
            <AiFillHome className="text-2xl" />
            <span className="text-[10px] text-gray-500">Home</span>
          </div>
          <div className="flex flex-col items-center text-xs font-medium text-gray-700">
            <CiMenuFries className="text-2xl" />
            <span className="text-[10px] text-gray-500">Menu</span>
          </div>
          <div className="flex flex-col items-center text-xs font-medium text-gray-700">
            <IoSearchOutline className="text-2xl" />
            <span className="text-[10px] text-gray-500">Search</span>
          </div>
          <div className="flex flex-col items-center text-xs font-medium text-gray-700">
            <TbShoppingBag className="text-2xl" />
            <span className="text-[10px] text-gray-500">Cart</span>
          </div>
          <div className="flex flex-col items-center text-xs font-medium text-gray-700">
            <RiContactsLine className="text-2xl" />
            <span className="text-[10px] text-gray-500">Contact</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
