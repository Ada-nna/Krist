import React from "react";
import CheckoutTable from "@/components/CheckoutTable";

const page = () => {
  return (
    <section className="container flex-1 px-4 md:px-6 py-4 md:py-6">
      <div>
        <h1 className="md:text-[22px] font-medium">Checkout</h1>
      </div>

      <div className="w-full flex md:gap-6 mt-4">
        <div className="w-2/3">
          <CheckoutTable />
        </div>

        <div className="bg-[#f3f3f3] p-6 w-1/3">
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

          <button className="bg-black mt-8 p-3 w-full text-[14px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
};

export default page;
