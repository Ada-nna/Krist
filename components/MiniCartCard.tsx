import React from "react";
import Image from "next/image";
import { Trash2 } from "lucide-react";

interface MiniCartCardProps {
  productImage: string;
  productName: string;
  productQuantity: number;
  productPrice: number;
  productSize: string;
}

const MiniCartCard: React.FC<MiniCartCardProps> = ({
  productImage,
  productName,
  productQuantity,
  productPrice,
  productSize,
}) => {
  return (
    <div>
      <div className="w-full flex items-center gap-4">
        <div
          className="relative border h-[50px] w-full md:w-[80px]"
          style={{
            backgroundImage: `url(${productImage})`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        ></div>

        <div className="w-full">
          <p className="text-[12px]">{productName}</p>
          <h1 className="text-[13px] font-semibold">{`${productQuantity} x $${productPrice}`}</h1>
          <div className="flex items-center justify-between">
            <p className="text-[12px]">Size: {productSize}</p>
            <button className="border-none outline-none">
              <Trash2 size={16} color="red" />
            </button>
          </div>
        </div>
      </div>
      <hr className=" w-full mt-3" />
    </div>
  );
};

export default MiniCartCard;
