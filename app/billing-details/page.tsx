"use client";
import React, { useState } from "react";
import Review from "@/components/billingDetails/Review";
import BillingForm from "@/components/billingDetails/BillingForm";
import PlaceOrderModal from "@/components/modals/PlaceOrderModal";
import { CreditCard, House, ReceiptText, Tag } from "lucide-react";
import PaymentMethod from "@/components/billingDetails/PaymentMethod";

const page = () => {
  const [isActiveTab, setIsActiveTab] = useState<string>("Address");
  const [isPlaceOrderModalOpen, setIsPlaceOrderModalOpen] =
    useState<boolean>(false);

  const handlePlaceOrderBtnClick = () => {
    setIsPlaceOrderModalOpen(true);
  };

  return (
    <section className="container flex-1 mt-4 px-4 md:px-6 py-4 md:py-6">
      <div className="w-full flex items-start md:gap-[5rem]">
        <div className="w-2/3">
          <div className="mb-4">
            {isActiveTab === "Address" && (
              <h1 className="md:text-[22px] font-medium">Billing Address</h1>
            )}
            {isActiveTab === "Payment Method" && (
              <h1 className="md:text-[22px] font-medium">Payment Method</h1>
            )}
            {isActiveTab === "Review" && (
              <h1 className="md:text-[22px] font-medium">Address</h1>
            )}
          </div>

          {/* icons...  */}
          <section className="mb-8 ">
            <div className="flex items-center justify-between">
              <div className="flex items-center w-full">
                <button
                  onClick={() => setIsActiveTab("Address")}
                  className={`${
                    isActiveTab === "Address"
                      ? "bg-black text-white"
                      : "bg-[#f5f5f5] text-black"
                  } p-3 rounded-full`}
                >
                  <House size={24} strokeWidth={1} />
                </button>
                <hr className="w-full border border-dashed flex-grow" />
              </div>

              <div className="flex items-center w-full">
                <button
                  onClick={() => setIsActiveTab("Payment Method")}
                  className={`${
                    isActiveTab === "Payment Method"
                      ? "bg-black text-white"
                      : "bg-[#f5f5f5] text-black"
                  } p-3 rounded-full`}
                >
                  <CreditCard size={24} strokeWidth={1} />
                </button>
                <hr className="w-full border border-dashed flex-grow" />
              </div>

              <div className="flex items-center">
                <button
                  onClick={() => setIsActiveTab("Review")}
                  className={`${
                    isActiveTab === "Review"
                      ? "bg-black text-white"
                      : "bg-[#f5f5f5] text-black"
                  } p-3 rounded-full`}
                >
                  <ReceiptText size={24} strokeWidth={1} />
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between mt-2">
              <span className="text-[14px]">Address</span>
              <span className="text-[14px]">Payment Method</span>
              <span className="text-[14px]">Review</span>
            </div>
          </section>
          {/* icons end here... */}

          <div className="border-t-2 border-[#4CBB17] bg-[#f5f5f5] p-4 flex items-center gap-3 tracking-wide">
            <Tag size={16} strokeWidth={1} className="transform rotate-90" />
            <p className="text-[14px]">
              {" "}
              Have a coupon? Ensure you enter your code
            </p>
          </div>

          {isActiveTab === "Address" && (
            <div>
              <BillingForm />
            </div>
          )}

          {isActiveTab === "Payment Method" && (
            <div>
              <PaymentMethod />
            </div>
          )}

          {isActiveTab === "Review" && (
            <div>
              <Review />
            </div>
          )}
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
                className="bg-white px-6 py-3 text-[14px] w-2/3 rounded-l-full"
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

          <button
            onClick={handlePlaceOrderBtnClick}
            className="bg-black mt-[3rem] p-3 w-full text-[14px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]"
          >
            Place Order
          </button>
        </div>

        {isPlaceOrderModalOpen && (
          <PlaceOrderModal
            isOpen={isPlaceOrderModalOpen}
            setIsOpen={setIsPlaceOrderModalOpen}
          />
        )}
      </div>
    </section>
  );
};

export default page;
