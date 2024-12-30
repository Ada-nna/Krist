"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ColorList,
  LargeImageSizes,
  ProductDetails,
  SizeList,
  SmallImageSizes,
} from "@/components/DummyContents";

const page = () => {
  const [count, setCount] = useState<number>(1);
  const [isFilled, setIsFilled] = useState<boolean>(false);
  const [activeSizeState, setActiveSizeState] = useState(null);
  const [activeLargeImageId, setActiveLargeImageId] = useState<number>(1);

  const handleIncrease = () => {
    setCount((prev) => prev + 1);
  };

  const handleDecrease = () => {
    setCount((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleSizeClick = (id: any) => {
    setActiveSizeState(id);
  };

  const handleHeartClick = () => {
    setIsFilled((prev) => !prev);
  };

  const handleSmallImageClick = (id: number) => {
    setActiveLargeImageId(id);
  };

  // in order to find the currently active large image,,,
  const activeLargeImage = LargeImageSizes.find(
    (img) => img.id === activeLargeImageId
  );

  return (
    <section className="container flex-1 px-4 md:px-6 py-4 md:py-6">
      <div className="flex h-screen">
        {/* product image (left)... */}
        <div className="w-1/2 flex flex-col">
          <div className="bg-[#fafafb] h-[65%] w-full flex items-center justify-center">
            {activeLargeImage && (
              <Image
                key={activeLargeImage.id}
                src={activeLargeImage.image}
                width={230}
                height={230}
                alt="product"
              />
            )}
          </div>

          <div className="grid grid-cols-4 gap-3 mt-4">
            {SmallImageSizes.map((item) => {
              return (
                <div
                  key={item.id}
                  style={{
                    backgroundImage: `url(${item.image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                  }}
                  onClick={() => handleSmallImageClick(item.id)}
                  className={`h-[130px] w-full cursor-pointer ${
                    activeLargeImageId === item.id ? "border " : ""
                  }`}
                ></div>
              );
            })}
          </div>
        </div>

        {/* description... */}
        <div className="w-1/2 md:px-6 py-3">
          <h1 className="font-semibold md:text-[24px]">
            {ProductDetails.productName}
          </h1>
          <div className="flex items-center gap-[2px] my-3">
            {Array.from({ length: 5 }, (_, index) =>
              index < ProductDetails.rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="#f7941d"
                  key={index}
                >
                  <path
                    d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  key={index}
                >
                  <path
                    d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                    stroke="#b7b7b7"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              )
            )}
          </div>
          <p className="font-semibold text-[20px]">
            {ProductDetails.newPrice}{" "}
            <span className="ml-3 text-[#b7b7b7] font-medium line-through">
              {ProductDetails.oldPrice}
            </span>
          </p>
          <p className="my-3 w-[550px] md:text-[15px]">
            Coat with quilted lining and an adjustable hood. Featuring long
            sleeves with adjustable cuff tabs, adjustable asymmetric hem with
            elastic side tabs and a front zip fastening with placket.
          </p>
          <div>
            <p className="font-medium">Color</p>
            <div className="flex flex-row items-center gap-2 mt-2">
              {ColorList.map((color) => {
                return (
                  <div key={color.id}>
                    <button
                      type="button"
                      className={`rounded-[4px] w-[30px] h-[30px] ${color.background}`}
                    />
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-3">
            <p className="font-medium">Size</p>
            <div className="flex flex-row items-center gap-2">
              {SizeList.map((size) => {
                return (
                  <div key={size.id}>
                    <button
                      type="button"
                      className={`rounded-[4px] border px-3 py-[6px] text-[14px] my-3 ${
                        activeSizeState === size.id
                          ? "bg-black text-white border-black"
                          : "bg-white text-black border-black"
                      }`}
                      onClick={() => handleSizeClick(size.id)}
                    >
                      {size.option}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="flex items-center mt-5">
            <div className="relative w-32">
              <div className="relative ">
                <input
                  type="number"
                  value={count}
                  readOnly
                  className="w-full outline-none text-center text-[18px] cursor-default px-2 py-2 border-black border rounded-[4px]"
                />
              </div>
              <button
                type="button"
                className="absolute top-[6px] left-0 px-2 py-2"
                onClick={handleDecrease}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12h12"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>

              <button
                type="button"
                className="absolute top-[6px] right-0 px-2 py-2"
                onClick={handleIncrease}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 12h12M12 18V6"
                    stroke="#000"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>
                </svg>
              </button>
            </div>

            <button className="px-20 py-3 rounded-[4px] border border-black bg-black text-white text-[14px] ml-3">
              Add to Cart
            </button>

            <button
              className="mx-3 border border-black p-3 rounded-[4px]"
              onClick={handleHeartClick}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill={isFilled ? "black" : "none"}
              >
                <path
                  d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                  stroke="#000"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div> 
        
      </div>
    </section>
  );
};

export default page;
