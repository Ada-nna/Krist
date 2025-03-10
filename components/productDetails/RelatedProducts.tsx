import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CardIcons, Products } from "../DummyContents";
import { CSSTransition, TransitionGroup } from "react-transition-group";

const RelatedProducts = () => {
  const filteredProducts = () => {
    return Products.filter((_, index) => [0, 3, 4, 7, 1].includes(index));
  };
  return (
    <div>
      <h1 className=" font-medium md:text-[22px]">Related Products</h1>

      <div className="flex items-center mt-[3rem]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          <TransitionGroup component={null}>
            {filteredProducts().map((product) => (
              <CSSTransition key={product.id} timeout={500} classNames="fade">
                <div className="relative group overflow-hidden">
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

                    {/* Icons */}
                    <ul className="card-icons">
                      {CardIcons.map((icon) => (
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
                      ))}
                    </ul>

                    {/* Add-to-cart button */}
                    <Link href="/product-details">
                      <span className="cart-button">Add to Cart</span>
                    </Link>
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
                      {product.amount}{" "}
                      <span className="ml-3 text-[#b7b7b7] font-medium line-through">
                        {product.label === "SALE" ? product.oldPrice : ""}
                      </span>
                    </p>
                  </div>
                </div>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </div>
      </div>
    </div>
  );
};

export default RelatedProducts;
