"use client";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { CiMenuFries } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <motion.div
      className="bottom-0 left-0 w-full bg-white border-t"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <hr className="w-full border-t border-gray-300" />

      <p className="text-[10px] text-center md:text-xs text-gray-500 py-10 md:py-38 md:px-5 font-medium">
        © 2025 Mayur Poshak ALL rights reserved
      </p>

      <motion.div
        className="md:hidden flex justify-around items-center py-3"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        {[
          { icon: <AiFillHome className="text-2xl" />, label: "Home" },
          { icon: <CiMenuFries className="text-2xl" />, label: "Menu" },
          { icon: <IoSearchOutline className="text-2xl" />, label: "Search" },
          { icon: <TbShoppingBag className="text-2xl" />, label: "Cart" },
          { icon: <RiContactsLine className="text-2xl" />, label: "Contact" },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="flex flex-col items-center text-xs font-medium text-gray-700"
            whileHover={{ scale: 1.1 }}
          >
            {item.icon}
            <span className="text-[10px] text-gray-500">{item.label}</span>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Footer;
