import React from "react";
import { Tag } from "lucide-react";
import BillingForm from "@/components/BillingForm";

const page = () => {
  return (
    <section className="container flex-1 mt-4 px-4 md:px-6 py-4 md:py-6">
      <div className="w-full flex items-start md:gap-6">
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

          <div>
            <BillingForm />
          </div>
        </div>

        <div className="bg-[#f3f3f3] p-6 w-1/3 h-auto">
          <div className="flex items-center justify-between font-medium text-[15px]">
            <p>Subtotal</p>
            <p>$244.21</p>
          </div>
          <hr className="w-full my-4" />
          <div>
            <p className="text-[15px] font-medium">Discount Code</p>
            <div className="flex items-center mt-3">
              <input
                placeholder="Coupon code"
                className="bg-white border px-6 py-3 text-[14px] w-2/3 rounded-l-full"
              />
              <button className="bg-black p-3 w-1/3 text-[14px] text-white rounded-r-full hover:text-[#b7b7b7] hover:duration-300 transition-all duration-300 active:text-[#f3f3f3]">
                Apply
              </button>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between font-medium text-[15px]">
            <p>Delivery fee:</p>
            <p>$4.99</p>
          </div>
          <hr className="w-full my-4" />
          <div className="flex items-center justify-between font-semibold text-[15px]">
            <p>Total</p>
            <p>$249.20</p>
          </div>

          <button className="bg-black mt-4 p-3 w-full text-[14px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
