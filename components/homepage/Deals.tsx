import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Countdown from "./Countdown";

const Deals = () => {
  return (
    <div className="mt-[5rem] flex items-center justify-center bg-[#f3f3f3]">
      <div className="flex items-center gap-5 w-full">
        <div className="w-1/2 px-6">
          <h1 className="text-[28px] font-medium">Deals of the Month</h1>
          <p className="my-3 text-[14px]">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Consequuntur, facilis voluptatem. Aspernatur, animi voluptate
            molestias, harum voluptatibus nihil ipsum dolorem qui minima porro
            obcaecati, eius odit voluptates voluptas laudantium sunt.
          </p>

          <button className="flex items-center gap-1 py-3 px-6 text-white bg-black rounded-full text-[13px] mt-5 transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              View all products
            </span>
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>

          <div className="mt-[2rem]">
            <Countdown />
          </div>
        </div>

        <div className="w-1/2 bg-[#e0e0e0] flex items-center justify-center py-6">
          <Image src="/family.png" alt="family" width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Deals;
