import React from "react";
import { Tag } from "lucide-react";

const page = () => {
  return (
    <section className="container flex-1 mt-4 px-4 md:px-6 py-4 md:py-6">
      <div className="w-full flex md:gap-6">
        <div className="w-2/3">
          <div className="border-t-2 border-[#4CBB17] bg-[#f5f5f5] p-4 flex items-center gap-3 tracking-wide">
            <Tag size={16} strokeWidth={1} className="transform rotate-90" />
            <p className="text-[14px]">
              {" "}
              Have a coupon? Ensure you enter your code
            </p>
          </div>

          <div className="mt-4">
            <h1 className="md:text-[22px] font-medium">Billing Details</h1>
            <hr className="w-full my-4" />
          </div>

          <div></div>
        </div>
      </div>
    </section>
  );
};

export default page;
