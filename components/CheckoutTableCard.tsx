import React from "react";

interface CheckoutTableCardProps {
  productImage: string;
  productName: string;
  productSize: string;
}
const CheckoutTableCard: React.FC<CheckoutTableCardProps> = ({
  productImage,
  productName,
  productSize,
}) => {
  return (
    <div className="w-full flex items-center gap-4">
      <div
        className="relative border h-[60px] w-full md:w-[100px]"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="w-full">
        <p className="text-base font-semibold">{productName}</p>
        <p className="text-[14px] mt-1">Size: {productSize}</p>
      </div>
    </div>
  );
};

export default CheckoutTableCard;
