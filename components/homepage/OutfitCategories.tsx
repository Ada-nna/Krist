"use client";

import React from "react";
import { useRouter } from "next/navigation";

const OutfitCategories = () => {
  const router = useRouter();
  return (
    <div className="mt-[5rem]">
      <h1 className="text-center font-medium md:text-[22px]">Shop by Categories</h1>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-5 mt-6">
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/casual.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Men</span>
        </div>

        {/* 2 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/woman.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Women</span>
        </div>

        {/* 3 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/kid.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Kids</span>
        </div>

        {/* 4 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/dress.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Dresses</span>
        </div>

        {/* 5 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/top.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Tops</span>
        </div>

        {/* 6 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/denim.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Unisex Denim</span>
        </div>

        {/* 7 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/beach-wear.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Beachwear</span>
        </div>

        {/* 8 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/couple.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Couples</span>
        </div>

        {/* 9 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/sportwear.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Sports & Outdoor</span>
        </div>

        {/* 10 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[150px] h-[150px]"
              style={{
                backgroundImage: "url('/sleepwear.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Underwear & Sleepwear</span>
        </div>

        {/* 11 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[100px] h-[100px]"
              style={{
                backgroundImage: "url('/shoes.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Shoes</span>
        </div>

        {/* 12 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[100px] h-[100px]"
              style={{
                backgroundImage: "url('/accessories.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Accessories</span>
        </div>

        {/* 13 */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[100px] h-[100px]"
              style={{
                backgroundImage: "url('/watch.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Jewelry & Watches</span>
        </div>

        {/*14  */}
        <div
          className="flex flex-col items-center justify-center cursor-pointer"
          onClick={() => router.push("/")}
        >
          <div className="bg-[#ede9e8] rounded-full w-[150px] h-[150px] relative overflow-hidden flex items-center justify-center">
            <div
              className="w-[100px] h-[100px]"
              style={{
                backgroundImage: "url('/beauty-products.png')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "contain",
              }}
            ></div>
          </div>
          <span className="font-medium mt-2">Beauty & Health</span>
        </div>
      </div>
    </div>
  );
};

export default OutfitCategories;
