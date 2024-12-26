"use client";

import React, { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Plus, ChevronUp, ChevronDown } from "lucide-react";
import { SidebarList, ColorList, SizeList } from "../DummyContents";

const Sidebar = () => {
  const [range, setRange] = useState([10, 2000]);
  const [isProductCategoryExpanded, setIsProductCategoryExpanded] =
    useState(false);
  const [isSizeCategoryExpanded, setIsSizeCategoryExpanded] = useState(false);
  const [isColorCategoryExpanded, setIsColorCategoryExpanded] = useState(false);
  return (
    <aside>
      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Product Categories</h2>
          <button
            onClick={() =>
              setIsProductCategoryExpanded(!isProductCategoryExpanded)
            }
            className="focus:outline-none"
          >
            {isProductCategoryExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {isProductCategoryExpanded && (
          <ul className="mt-4 flex flex-col gap-3">
            {SidebarList.map((list, index) => (
              <li key={list.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="product-checkbox" />
                  <span className="text-[#343434] text-[14px] hover:text-[#000] hover:duration-300">
                    {list.option}
                  </span>
                </div>

                {index < 3 && (
                  <button>
                    <Plus size={16} />
                  </button>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="border my-5" />

      <div className="pb-3">
        <h2 className="font-medium">Filter by Price</h2>
        <p className="text-[14px] mb-5 mt-3">
          Price <span>${range[0]}</span> - <span>${range[1]}</span>
        </p>
        <Slider
          value={range}
          onValueChange={(newRange) => setRange(newRange)}
          min={0}
          max={2000}
          step={10}
          className="w-full h-[2px] bg-black"
        />
      </div>

      <hr className="border my-5" />

      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Filter by Color</h2>
          <button
            onClick={() => setIsColorCategoryExpanded(!isColorCategoryExpanded)}
            className="focus:outline-none"
          >
            {isColorCategoryExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {isColorCategoryExpanded && (
          <ul className="mt-4 flex flex-col gap-3">
            {ColorList.map((list) => (
              <li key={list.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input
                    className={`rounded-[4px] w-[15px] h-[15px] ${list.background}`}
                  />
                  <span className="text-[#343434] text-[14px] hover:text-[#000] hover:duration-300">
                    {list.option}
                  </span>
                </div>

                <span className="text-[#343434] text-[14px] hover:text-[#000] hover:duration-300">
                  ({list.value})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <hr className="border my-5" />

      <div>
        <div className="flex items-center justify-between">
          <h2 className="font-medium">Filter by Size</h2>
          <button
            onClick={() => setIsSizeCategoryExpanded(!isSizeCategoryExpanded)}
            className="focus:outline-none"
          >
            {isSizeCategoryExpanded ? (
              <ChevronUp size={20} />
            ) : (
              <ChevronDown size={20} />
            )}
          </button>
        </div>

        {isSizeCategoryExpanded && (
          <ul className="mt-4 flex flex-col gap-3">
            {SizeList.map((list, index) => (
              <li key={list.id} className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <input type="checkbox" className="product-checkbox" />
                  <span className="text-[#343434] text-[14px] hover:text-[#000] hover:duration-300">
                    {list.option}
                  </span>
                </div>

                <span className="text-[#343434] text-[14px] hover:text-[#000] hover:duration-300">
                  ({list.value})
                </span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </aside>
  );
};

export default Sidebar;
