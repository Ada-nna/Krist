import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Countdown from "./Countdown";

const Deals = () => {
  return (
    <div className="mt-[5rem] flex items-center justify-center bg-[#f3f2ee]">
      <div className="flex items-center gap-5 w-full">
        <div className="w-1/2 px-6">
          <h1 className="text-[28px] font-medium">Deals of the Month</h1>
          <p className="mt-5 text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, facilis voluptatem. Aspernatur, animi voluptate
            molestias, harum voluptatibus nihil ipsum dolorem qui minima porro
            obcaecati, eius odit voluptates voluptas laudantium sunt.
          </p>

          <div className="mt-5">
            <Countdown />
          </div>

          <button className="flex items-center gap-1 py-3 px-6 text-white bg-black rounded-full text-[13px] mt-[2rem] transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              View all products
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <div className="w-1/2 z-50 flex items-center justify-center border">
          <Image src="/front.jpg" alt="family" width={1000} height={1000} />
        </div>
      </div>
    </div>
  );
};

export default Deals;
