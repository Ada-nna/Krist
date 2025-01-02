import React from "react";
import MiniCartCard from "../MiniCartCard";

const CartItems = () => {
  return (
    <div>
      <p className="text-[15px] font-medium">You have 3 items in your cart</p>

      <div className="flex flex-col gap-4 mt-4">
        <MiniCartCard
          productImage="/product-1.jpg"
          productName="Dove Sneakers"
          productQuantity={1}
          productPrice={107.99}
          productSize="M"
        />

        <MiniCartCard
          productImage="/product-12.jpg"
          productName="Green Camo Hoodie"
          productQuantity={1}
          productPrice={55.4}
          productSize="XL"
        />

        <MiniCartCard
          productImage="/product-10.jpg"
          productName="ZVA 3-in-one Perfume"
          productQuantity={2}
          productPrice={40.41}
          productSize="M"
        />
      </div>

      <div className="mt-4 flex items-center justify-between text-[13px] font-semibold">
        <h3>Subtotal</h3>
        <h3>$244.21</h3>
      </div>

      <div className="flex items-center justify-center mt-4">
        <button
          type="submit"
          className="bg-black text-white rounded-full text-[13px] w-full py-3 hover:scale-105 transition-all duration-300 active:text-[#b7b7b7]"
        >
          View Cart
        </button>
      </div>
    </div>
  );
};

export default CartItems;
