import React from "react";
import Image from "next/image";
import {
  ColorList,
  ProductDetails,
  SizeList,
} from "@/components/DummyContents";

const page = () => {
  return (
    <section className="container px-4 md:px-6 py-4 md:py-6">
      <div className="flex h-screen">
        <div className="border bg-[#fafafb] h-[80%] w-1/2 flex items-center justify-center">
          <Image
            src="/product-big-1.png"
            width={300}
            height={300}
            alt="product"
          />
        </div>

        {/* description... */}
        <div className="border w-1/2">
          <h1>{ProductDetails.productName}</h1>
          <div className="flex items-center gap-[2px] my-[6px]">
            {Array.from({ length: 5 }, (_, index) =>
              index < ProductDetails.rating ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
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
          <p className="font-semibold">
            {ProductDetails.newPrice}{" "}
            <span className="ml-3 text-[#b7b7b7] font-medium line-through">
              {ProductDetails.oldPrice}
            </span>
          </p>
          <p>
            Coat with quilted lining and an adjustable hood. Featuring long
            sleeves with adjustable cuff tabs, adjustable asymmetric hem with
            elastic side tabs and a front zip fastening with placket.
          </p>
          <div className="flex flex-row items-center gap-2">
            {ColorList.map((color) => {
              return (
                <div key={color.id}>
                  <input
                    type="button"
                    className={`rounded-[4px] w-[30px] h-[30px] ${color.background}`}
                  />
                </div>
              );
            })}
          </div>
          <div className="flex flex-row items-center gap-2">
            {SizeList.map((size) => {
              return (
                <div key={size.id}>
                  <button
                    type="button"
                    className={`rounded-[4px] border px-3 py-[6px] text-[14px] `}
                  >
                    {size.option}
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
