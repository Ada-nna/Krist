"use client";
import { useState } from "react";
import Review from "./Review";
import Description from "./Description";
import { headings } from "../DummyContents";
import AdditionalInformation from "./AdditionalInformation";

const ProductInformation = () => {
  const [activeState, setActiveState] = useState("Descriptions");
  const [isStarSelected, setIsStarSelected] = useState(null);

  const handleHeadingClick = (heading: string) => {
    setActiveState(heading);
  };
  return (
    <div>
      <div className="flex items-center gap-[6rem]">
        {headings.map((heading: string) => {
          return (
            <h1
              key={heading}
              className={`text-center font-medium md:text-[20px] cursor-pointer ${
                activeState === heading
                  ? "text-black border-b-2"
                  : "text-[#b7b7b7]"
              }`}
              onClick={() => handleHeadingClick(heading)}
            >
              {heading}
            </h1>
          );
        })}
      </div>

      <hr className="w-full" />

      <div className="mt-5">
        {activeState === "Descriptions" && <Description />}
        {activeState === "Additional Information" && <AdditionalInformation />}
        {activeState === "Reviews" && (
          <div>
            <div>
              <h1 className="font-semibold text-[18px] my-5">
                Customer Reviews
              </h1>

              <div className="flex flex-col gap-5">
                <Review
                  name="Mark Williams"
                  image="/headshot-man.jpg"
                  reviewText="Excellent product, I am very happy with the purchase"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolor quis
                quasi, placeat amet ducimus perferendis sapiente asperiores hic et aperiam
                possimus incidunt minus corrupti. Tenetur nam obcaecati eum delectus?
                Error impedit recusandae velit ut architecto culpa, cupiditate modi
                laudantium accusamus nulla rerum minima corporis alias suscipit natus
                fugiat ab deleniti voluptatum in, unde excepturi commodi quaerat. Optio,
                accusantium magnam!"
                />

                <Review
                  name="Cynthia Okafor"
                  image="/headshot-female.jpg"
                  reviewText="My man is very much delighted with my this particular purchase and the delivery was super fast 🥰😍"
                  text="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio dolor quis
                quasi, placeat amet ducimus perferendis sapiente asperiores hic et aperiam
                possimus incidunt minus corrupti. Tenetur nam obcaecati eum delectus?
                Error impedit recusandae velit ut architecto culpa, cupiditate modi
                laudantium accusamus nulla rerum minima corporis alias suscipit natus
                fugiat ab deleniti voluptatum in, unde excepturi commodi quaerat. Optio,
                accusantium magnam!"
                />
              </div>

              <div>
                <h1 className="font-medium my-5">Add Your Review</h1>

                <div className="my-3">
                  <p className="text-[15px]">Your Rating</p>
                  <div className="flex gap-2 mt-2">
                    {[...Array(5)].map((_, index) => (
                      <svg
                        key={index}
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                          stroke="#b7b7b7"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    ))}
                  </div>
                </div>

                <form>
                  <div className="flex flex-col">
                    <label className="mb-1 text-[14px] font-medium">Name</label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="border p-3 rounded-[6px] text-[14px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="mb-1 text-[14px] font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="examplejs@abc.com"
                      className="border p-3 rounded-[6px] text-[14px] outline-none"
                    />
                  </div>
                  <div className="flex flex-col my-3">
                    <label className="mb-1 text-[14px] font-medium">
                      Write a review
                    </label>
                    <textarea
                      cols={50}
                      rows={5}
                      className="border px-3 py-2 rounded-[6px] text-[14px] outline-none"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-black text-white rounded-full text-[13px] px-7 py-3 hover:scale-105 transition-all duration-300 active:text-[#b7b7b7]"
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductInformation;
