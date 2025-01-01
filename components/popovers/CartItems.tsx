import React from "react";
import MiniCartCard from "../MiniCartCard";

const CartItems = () => {
  return (
    <div>
      <p className="text-[14px] font-medium">You have 3 items in your cart</p>

      <div className="flex flex-col gap-4 mt-4">
        <MiniCartCard
          productImage="/product-1.jpg"
          productName="Dove Sneakers"
          productQuantity={1}
          productPrice={107.99}
          productSize="M"
        />
        <hr className=" w-full"/>
      </div>
    </div>
  );
};

export default CartItems;
