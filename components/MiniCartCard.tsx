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
    <div className="flex items-center gap-4">
      <div
        className="relative border h-[60px] w-full md:w-[60px]"
        style={{
          backgroundImage: `url(${productImage})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div>
        <p className="text-[12px]">{productName}</p>
        <h1 className="text-[13px]">{`${productQuantity} x $${productPrice}`}</h1>
        <div className="flex items-center justify-between">
          <p className="text-[12px]">Size: {productSize}</p>
          <button>
            <Trash2 size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCartCard;
