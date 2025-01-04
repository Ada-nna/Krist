import React from "react";

interface OrderCardProps {
  productImage: string;
  productName: string;
  productSize: string;
  productQty: number;
  totalPrice: number;
  statusColor: string;
  statusBgColor: string;
  status: string;
  statusMessage: string;
  orderBtn1: string;
  orderBtn2?: string;
}
const OrderCard: React.FC<OrderCardProps> = ({
  productImage,
  productName,
  productSize,
  productQty,
  totalPrice,
  statusColor,
  statusBgColor,
  status,
  statusMessage,
  orderBtn1,
  orderBtn2,
}) => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-2/4">
        <div className="w-full flex items-center gap-4">
          <div
            className="relative h-[70px] w-full md:w-[100px]"
            style={{
              backgroundImage: `url(${productImage})`,
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          ></div>

          <div className="w-full">
            <p className="text-base font-medium">{productName}</p>
            <p className="text-[14px] mt-1">Size: {productSize}</p>
            <p className="text-[14px] mt-1">Quantity: {productQty}</p>
          </div>
        </div>

        <div className="flex items-center gap-5 mt-4">
          <span
            className={`text-[12px] px-[16px] py-1 ${statusColor} ${statusBgColor} rounded-[2px]`}
          >
            {status}
          </span>
          <p className="text-[12px] text-[#b7b7b7]">{statusMessage}</p>
        </div>
      </div>

      {/* Price... */}
      <p className="text-[14px] md:text-base font-semibold w-1/4">
        ${totalPrice.toFixed(2)}
      </p>

      {/* Status... */}
      <div className="flex flex-col gap-3 font-medium text-[14px]">
        <button className="border-2 py-[10px] px-6 rounded-full active:text-[#343434]">
          {orderBtn1}
        </button>
        {orderBtn2 && (
          <button className="py-[10px] px-6 rounded-full bg-black text-white active:text-[#f3f3f3]">
            {orderBtn2}
          </button>
        )}
      </div>
    </div>
  );
};

export default OrderCard;
