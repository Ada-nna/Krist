import React from "react";
import { ChevronRight } from "lucide-react";
import Sidebar from "@/components/shop/Sidebar";

const page = () => {
  return (
    <div className="container px-4 md:px-6 py-4 md:py-6 flex-1">
      <div className="flex items-center gap-[1px] mb-6">
        <button className="text-[13px]"> Shop </button>
        <span>
          <ChevronRight size={12} />
        </span>
        <button className="text-[13px]">All Products</button>
      </div>

      <div className="flex gap-5">
        {/* Sidebar */}
        <div className="w-full md:w-64">
          <Sidebar />
        </div>

        {/* Products Section */}
        <div className="border w-full">Products Section</div>
      </div>
    </div>
  );
};

export default page;
