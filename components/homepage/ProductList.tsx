import React from "react";
import Image from "next/image";
import { Products } from "../DummyContents";
import { CardIcons } from "../DummyContents";

const ProductList = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {Products.map((product) => {
          return (
            <div key={product.id} className="relative group overflow-hidden">
              <div
                className="relative border h-[260px] w-full md:w-[260px]"
                style={{
                  backgroundImage: `url(${product.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              >
                {product.label ? (
                  <span
                    className={`absolute left-0 top-4 px-3 py-[2px] text-[10px] font-semibold tracking-[0.2em] ${
                      product.label === "NEW"
                        ? "bg-white text-black"
                        : "bg-black text-white"
                    }`}
                  >
                    {product.label}
                  </span>
                ) : (
                  ""
                )}

                {/* icons... */}
                <ul className="card-icons">
                  {CardIcons.map((icon) => {
                    return (
                      <li
                        key={icon.id}
                        className="bg-white p-2 cursor-pointer"
                        title={icon.name}
                      >
                        <Image
                          src={icon.image}
                          width={16}
                          height={16}
                          alt={icon.name}
                        />
                      </li>
                    );
                  })}
                </ul>

                {/* add-to-cart button */}
                <span className="cart-button">Add to Cart</span>
              </div>

              <div className="mt-3">
                <h3>{product.productName}</h3>
                <div className="flex items-center gap-[2px] my-[6px]">
                  {Array.from({ length: 5 }, (_, index) =>
                    index < product.rating ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="#f7941d"
                      >
                        <path
                          d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                          stroke="none"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                          stroke="#b7b7b7"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    )
                  )}
                </div>
                <p className="font-semibold">{product.amount}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
