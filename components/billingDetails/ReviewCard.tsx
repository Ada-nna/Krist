import React from "react";

interface ReviewCardProps {
  productImage: string;
  productName: string;
  productSize: string;
  totalPrice: number;
}
const ReviewCard: React.FC<ReviewCardProps> = ({
  productImage,
  productName,
  productSize,
  totalPrice,
}) => {
  return (
    <>
      <div className="w-full flex items-center gap-4">
        <div
          className="relative border h-[70px] w-full md:w-[100px]"
          style={{
            backgroundImage: `url(${productImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-full">
          <p className="text-base font-medium">{productName}</p>
          <p className="text-[14px] mt-1">${totalPrice}</p>
          <p className="text-[14px] mt-1">Size: {productSize}</p>
        </div>
      </div>
      <hr className="w-full my-4" />
    </>
  );
};

export default ReviewCard;
