"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import ProductCards from "./ProductCards";
import { FilterOptions } from "../DummyContents";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const ProductSection = () => {
  const [selectedFilterOption, setSelectedFilterOption] = useState(
    FilterOptions[0].option
  );

  return (
    <div>
      <div className="flex items-center justify-between px-2">
        <div className="flex items-center gap-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17.54 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 8.31a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM17.54 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92ZM6.46 20.61a2.46 2.46 0 1 0 0-4.92 2.46 2.46 0 0 0 0 4.92Z"
              stroke="#000"
              stroke-width="1.5"
              stroke-miterlimit="10"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></path>
          </svg>

          <p className="text-[14px]">Showing 1 – 12 of 126 results </p>
        </div>

        <div className="flex items-center gap-1 text-[14px]">
          <p>
            Sort by <span className="font-medium">{selectedFilterOption}</span>{" "}
          </p>{" "}
          <Popover>
            <PopoverTrigger asChild>
              <button>
                <ChevronDown size={14} />
              </button>
            </PopoverTrigger>
            <PopoverContent>
              <ul className="text-[13px] flex flex-col gap-1">
                {FilterOptions.map((list) => {
                  return (
                    <li
                      key={list.id}
                      className="cursor-pointer"
                      onClick={() => setSelectedFilterOption(list.option)}
                    >
                      {list.option}
                    </li>
                  );
                })}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
      </div>

      {/* cards rendering */}
      <div>
        <ProductCards />
      </div>
    </div>
  );
};

export default ProductSection;
