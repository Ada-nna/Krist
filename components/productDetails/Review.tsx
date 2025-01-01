import React from "react";

interface ReviewProps {
  text: string;
  name: string;
  image: string;
  reviewText: string;
}

const Review: React.FC<ReviewProps> = ({ text, name, image, reviewText }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <div
          className="rounded-full w-10 h-10 border"
          style={{
            backgroundImage: `url(${image})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div>
          <h3 className="text-[13px] font-medium">{name}</h3>
          <>
            <div className="flex gap-[1px]">
              {[...Array(5)].map((_, index) => (
                <svg
                  key={index}
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="#f7941d"
                >
                  <path
                    d="m13.73 3.51 1.76 3.52c.24.49.88.96 1.42 1.05l3.19.53c2.04.34 2.52 1.82 1.05 3.28l-2.48 2.48c-.42.42-.65 1.23-.52 1.81l.71 3.07c.56 2.43-.73 3.37-2.88 2.1l-2.99-1.77c-.54-.32-1.43-.32-1.98 0l-2.99 1.77c-2.14 1.27-3.44.32-2.88-2.1l.71-3.07c.13-.58-.1-1.39-.52-1.81l-2.48-2.48c-1.46-1.46-.99-2.94 1.05-3.28l3.19-.53c.53-.09 1.17-.56 1.41-1.05l1.76-3.52c.96-1.91 2.52-1.91 3.47 0Z"
                    stroke="none"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></path>
                </svg>
              ))}
            </div>
          </>
        </div>
      </div>

      <div className="mt-3">
        <h3 className="text-[14px] font-semibold">{reviewText}</h3>
        <p className="text-[13px] my-2">{text}</p>
        <p className="text-[12px] text-[#b7b7b7]">
          Review by <span className="text-black font-medium">Krist</span> Posted on{" "}
          <span className="text-black font-medium">30/12/2024</span>
        </p>
      </div>

      <hr className="w-full mt-2" />
    </div>
  );
};

export default Review;
