import React, { useState } from "react";
import DebitCardForm from "../DebitCardForm";

const PaymentMethod = () => {
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState("card");

  const handlePaymentMethodChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSelectedPaymentMethod(e.target.value);
  };

  return (
    <div className="mt-8">
      <h1 className="mb-8 font-medium">Select a Payment Method</h1>
      <>
        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="card"
            name="paymentMethod"
            value="card"
            onChange={handlePaymentMethodChange}
            checked={selectedPaymentMethod === "card"}
            className=""
          />
          <label htmlFor="card">Debit/ Credit Card</label>
        </div>

        {selectedPaymentMethod === "card" && (
          <div className="mt-4">
            <DebitCardForm />
          </div>
        )}

        <hr className="my-4" />

        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="googlePay"
            name="paymentMethod"
            value="googlePay"
            onChange={handlePaymentMethodChange}
            className=""
          />
          <label htmlFor="googlePay">Google Pay</label>
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="applePay"
            name="paymentMethod"
            value="applePay"
            onChange={handlePaymentMethodChange}
            className=""
          />
          <label htmlFor="applePay">Apple Pay</label>
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="paypal"
            name="paymentMethod"
            value="paypal"
            onChange={handlePaymentMethodChange}
            className=""
          />
          <label htmlFor="paypal">PayPal</label>
        </div>

        <hr className="my-4" />

        <div className="flex items-center gap-3">
          <input
            type="radio"
            id="cod"
            name="paymentMethod"
            value="cashOnDelivery"
            onChange={handlePaymentMethodChange}
            className=""
          />
          <label htmlFor="cod">Cash on Delivery</label>
        </div>
      </>

      <div className="flex items-center mt-[5rem] w-1/2">
        <button
          type="submit"
          className="bg-black w-full text-white rounded-full text-[13px] px-7 py-3 hover:scale-105 transition-all duration-300 active:text-[#b7b7b7]"
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default PaymentMethod;
