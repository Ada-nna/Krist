import React from "react";
import ReviewCard from "./ReviewCard";
import { Pencil } from "lucide-react";
import { CheckoutTableData } from "../DummyContents";

const Review = () => {
  return (
    <div>
      <h1 className="my-8 font-semibold">
        Estimated delivery: 14th February 2025
      </h1>

      <>
        {CheckoutTableData.map((item) => {
          return (
            <div key={item.id}>
              <ReviewCard
                productName={item.productName}
                productImage={item.productImage}
                productSize={item.productSize}
                totalPrice={item.totalPrice}
              />
            </div>
          );
        })}
      </>

      <div className="mt-4 w-1/2">
        <h1 className="font-medium">Billing Address</h1>
        <div className="flex items-center justify-between mt-4">
          <div>
            <h3 className="text-[14px]">Cynthia Okafor</h3>
            <p className="text-[14px] mt-1">117, Ilorin Emirate Mall, Lagos, Saudi Arabia</p>
          </div>
          <button className="border p-2 rounded-full bg-[#f3f3f3]">
            <Pencil size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <hr className="w-full my-4" />

      <div className="mt-4 w-1/2">
        <h1 className="font-medium">Payment Method</h1>
        <div className="flex items-center justify-between mt-4 text-[14px]">
          <h3>Debit Card (3897 22** **** ****)</h3>
          <button className="border p-2 rounded-full bg-[#f3f3f3]">
            <Pencil size={14} strokeWidth={1.5} />
          </button>
        </div>
      </div>
      <hr className="w-full my-4" />
    </div>
  );
};

export default Review;
