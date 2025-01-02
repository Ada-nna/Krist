import React from "react";

const DebitCardForm = () => {
  return (
    <div>
      <div className="flex flex-col">
        <label htmlFor="cardNumber" className="text-[14px]">
          Card Number
        </label>
        <input
          type="text"
          name="cardNumber"
          placeholder="3897 22** **** ****"
          className="border text-[14px] rounded-[4px] p-3 w-1/2 mt-2"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label htmlFor="cardName" className="text-[14px]">
          Card Name
        </label>
        <input
          type="text"
          name="cardName"
          placeholder="e.g. John Doe"
          className="border text-[14px] rounded-[4px] p-3 w-1/2 mt-2"
        />
      </div>

      <div className="flex items-center gap-6 mt-4 w-1/2">
        <div className="flex flex-col flex-1">
          <label htmlFor="cvv" className="text-[14px]">
            CVV
          </label>
          <input
            type="text"
            name="cvv"
            className="border text-[14px] rounded-[4px] p-3 w-full mt-2"
          />
        </div>

        <div className="flex flex-col flex-1">
          <label htmlFor="expiryDate" className="text-[14px]">
            Expiry Date
          </label>
          <input
            type="text"
            name="expiryDate"
            className="border text-[14px] rounded-[4px] p-3 w-full mt-2"
          />
        </div>
      </div>
    </div>
  );
};

export default DebitCardForm;
