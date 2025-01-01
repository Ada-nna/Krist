import React from "react";

const AdditionalInformation = () => {
  return (
    <div>
      <div className="flex items-center gap-5">
        <p className="font-medium text-[18px]">Color</p>
        <p>Red, Blue, Orange, Black, Green, Yellow</p>
      </div>

      <div className="flex items-center gap-7">
        <p className="font-medium text-[18px]">Size</p>
        <p>S, M, L, XL, XXL, XXXL</p>
      </div>
    </div>
  );
};

export default AdditionalInformation;
