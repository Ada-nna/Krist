import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="relative flex items-center justify-between overflow-hidden">
        <div>
          <p className="text-[24px]">Classic Exclusive</p>
          <h1 className="text-[48px] font-semibold">Couple's Collection</h1>
          <p className="text-[18px]">Upto 40% off</p>
          <button className="flex items-center gap-1 py-3 px-6 text-white bg-black rounded-full text-[13px] mt-5 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Shop now
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <div className="absolute overflow-hidden z-10 mt-[5rem]">
            <div className="whitespace-nowrap animate-marquee text-[100px] text-[#fefefa] font-semibold">
              <span className="mx-4">WEAR CLOTHES THAT MATTER </span>
              <span className="mx-4">CLOTHING IS SKINCARE TOO!</span>
            </div>
          </div>
        </div>
        <div>
          <Image
            src="/millennial-fashion-couple.jpg"
            alt="image"
            width={715}
            height={700}
            className="relative z-30"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
