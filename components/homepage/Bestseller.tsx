"use client";
import React, { useState } from "react";
import ProductList from "./ProductList";

const Bestseller = () => {
  const [activeState, setActiveState] = useState("Best Sellers");

  const headings = ["Best Sellers", "New Arrivals", "Hot Sales"];
  return (
    <div className="mt-[5rem]">
      {/* heading */}
      <div className="flex items-center justify-center ">
        <div className="flex gap-[6rem]">
          {headings.map((heading) => (
            <h1
              key={heading}
              className={`text-center font-medium md:text-[22px] cursor-pointer ${
                activeState === heading ? "text-black" : "text-[#b7b7b7]"
              }`}
              onClick={() => setActiveState(heading)}
            >
              {heading}
            </h1>
          ))}
        </div>
      </div>

      {/* card rendering */}
      <div className="mt-[3rem]">
        <ProductList />
      </div>
    </div>
  );
};

export default Bestseller;
