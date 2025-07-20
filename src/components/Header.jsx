"use client";
import React, { useState } from "react";
import { CiMenuFries, CiUser } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { TbShoppingBag } from "react-icons/tb";
import { RxCross1 } from "react-icons/rx";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [menuOpen, setMenuopen] = useState(false);

  const sidebarVariants = {
    hidden: { x: "-100%" },
    visible: { x: 0, transition: { duration: 0.5 } },
    exit: { x: "-100%", transition: { duration: 0.5 } },
  };

  return (
    <>
      {/* laptop size */}
      <motion.div
        className="hidden lg:block mb-15"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="fixed top-0  bg-white flex items-center gap-130 px-10 border w-full">
          <div className="flex cursor-pointer gap-5">
            <CiMenuFries className="text-2xl" />
            <IoSearchOutline className="text-2xl" />
          </div>
          <Image src="/mayurposhak.png" width={200} height={0} alt="logo" />
          <div className="flex items-center cursor-pointer gap-5">
            <CiUser className="text-2xl" />
            <TbShoppingBag className="text-2xl" />
          </div>
        </div>
      </motion.div>

      {/* mobile and tablet view */}
      <motion.div
        className="flex items-center justify-around py-5 lg:hidden"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <CiMenuFries className="text-2xl" onClick={() => setMenuopen(true)} />
        <Image src="/mayurposhak.png" width={160} height={0} alt="logo" />
        <IoSearchOutline className="text-2xl" />
        <TbShoppingBag className="text-2xl" />
      </motion.div>

      {/* Animated Sidebar */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            variants={sidebarVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="lg:hidden flex flex-col gap-4 min-h-screen w-80 md:w-2xl bg-white absolute z-50 top-0 border border-gray-400 py-5 px-5 shadow-xl backdrop-blur-md"
          >
            <RxCross1
              onClick={() => setMenuopen(false)}
              className="cursor-pointer text-xl"
            />

            {["HOME", "SHOP BY CATEGORIES", "ABOUT US", "CONTACT", "BLOGS"].map(
              (item, idx) => (
                <motion.div
                  key={idx}
                  className="font-medium cursor-pointer"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <hr className="border-gray-300 mb-4" />

                  <p>{item}</p>
                </motion.div>
              )
            )}

            {/* bottom nav */}
            <div className="py-10 mt-auto">
              <hr className="border-gray-300 mb-4" />
              <div className="flex items-center justify-evenly gap-6 cursor-pointer">
                <CiUser />
                <p>Log in</p>
                <FaFacebookF />
                <FaInstagram />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
