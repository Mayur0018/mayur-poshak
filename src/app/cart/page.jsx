"use client";
import React from "react";
import Image from "next/image";
import { useSelector } from "react-redux";
import { AiOutlineHeart, AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  console.log(cartItems);

  return (
    <div>
      <div className="max-w-5xl max-lg:max-w-2xl mx-auto p-4">
        <h1 className="text-xl font-semibold text-slate-900">Shopping Cart</h1>
        {cartItems.map((item, index) => (
          <div
            key={item.id || index}
            className="grid lg:grid-cols-3 lg:gap-x-8 gap-x-6 gap-y-8 mt-6"
          >
            {/* Cart Items Section */}
            <div className="lg:col-span-2 space-y-6">
              {/* Example Single Cart Item */}
              <div className="flex gap-4 bg-white px-4 py-6 rounded-md shadow-sm border border-gray-200">
                <div className="flex gap-6 sm:gap-4 max-sm:flex-col">
                  <div className="w-24 h-24 shrink-0">
                    <Image
                      src={item.image}
                      alt="product"
                      width={100}
                      height={100}
                      className="w-full h-full object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div>
                      <h3 className="text-sm sm:text-base font-semibold text-slate-900">
                        {item.name}
                      </h3>
                      <p className="text-[13px] font-medium text-slate-500 mt-2 flex items-center gap-2">
                        Color:
                        <span className="inline-block w-4 h-4 rounded-sm bg-[#ac7f48]"></span>
                      </p>
                    </div>
                    <h3 className="text-sm font-semibold text-slate-900 mt-auto">
                      {item.price}
                    </h3>
                  </div>
                </div>
                <div className="ml-auto flex flex-col justify-between">
                  <div className="flex items-start gap-4 justify-end">
                    <button>
                      <AiOutlineHeart className="w-5 h-5 text-slate-400 hover:text-pink-600" />
                    </button>
                    <button>
                      <MdDeleteOutline className="w-5 h-5 text-slate-400 hover:text-red-600" />
                    </button>
                  </div>

                  <div className="flex items-center gap-3 mt-4">
                    <button className="w-[18px] h-[18px] bg-slate-400 rounded-full flex items-center justify-center text-white">
                      <AiOutlineMinus size={12} />
                    </button>
                    <span className="font-semibold text-base">1</span>
                    <button className="w-[18px] h-[18px] bg-slate-800 rounded-full flex items-center justify-center text-white">
                      <AiOutlinePlus size={12} />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Summary Section */}
            <div className="bg-white rounded-md px-4 py-6 h-max shadow-sm border border-gray-200">
              <ul className="text-slate-500 font-medium space-y-4 text-sm">
                <li className="flex justify-between">
                  Subtotal{" "}
                  <span className="font-semibold text-slate-900">$200.00</span>
                </li>
                <li className="flex justify-between">
                  Shipping{" "}
                  <span className="font-semibold text-slate-900">$2.00</span>
                </li>
                <li className="flex justify-between">
                  Tax{" "}
                  <span className="font-semibold text-slate-900">$4.00</span>
                </li>
                <hr className="border-slate-300" />
                <li className="flex justify-between font-semibold text-slate-900">
                  Total <span>$206.00</span>
                </li>
              </ul>

              <div className="mt-8 space-y-4">
                <button className="w-full py-2.5 text-sm font-medium tracking-wide text-white bg-slate-800 hover:bg-slate-900 rounded-md">
                  Buy Now
                </button>
                <button className="w-full py-2.5 text-sm font-medium tracking-wide text-slate-900 bg-slate-50 hover:bg-slate-100 border border-gray-300 rounded-md">
                  Continue Shopping
                </button>
              </div>

              <div className="mt-5 flex justify-center gap-4">
                <Image
                  src="/MostTrending/trendingimg1.png"
                  alt="card1"
                  width={40}
                  height={20}
                />
                <Image
                  src="/MostTrending/trendingimg1.png"
                  alt="card2"
                  width={40}
                  height={20}
                />
                <Image
                  src="/MostTrending/trendingimg1.png"
                  alt="card3"
                  width={40}
                  height={20}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartPage;
