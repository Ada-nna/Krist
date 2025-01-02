import React from "react";

const BillingForm = () => {
  return (
    <section>
      <div className="w-full flex items-center gap-6 mt-8">
        <div className="flex flex-col w-1/2">
          <label className="text-[14px] md:text-base" htmlFor="first-name">
            First Name<span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="first-name"
            className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-[14px] md:text-base" htmlFor="last-name">
            Last Name<span className="text-[red]">*</span>
          </label>
          <input
            type="text"
            name="last-name"
            className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
          />
        </div>
      </div>

      <div className="w-full flex items-center gap-6 mt-4">
        <div className="flex flex-col w-1/2">
          <label className="text-[14px] md:text-base" htmlFor="phone">
            Phone Number<span className="text-[red]">*</span>
          </label>
          <input
            type="number"
            name="phone"
            className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
          />
        </div>
        <div className="flex flex-col w-1/2">
          <label className="text-[14px] md:text-base" htmlFor="email">
            Email<span className="text-[red]">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
          />
        </div>
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="address">
          Address<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="address"
          placeholder="Street address"
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
        <input
          type="text"
          name="address"
          placeholder="Apartment, suite, unit etc. (optional)"
          className="border p-3 mt-4 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="town-city">
          Town/City<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="town-city"
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="state">
          State<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="state"
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="country">
          Country<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="country"
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="zip">
          Postal code/ ZIP (optional)
        </label>
        <input
          type="text"
          name="zip"
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-4">
        <label className="text-[14px] md:text-base" htmlFor="notes">
          Order Notes
        </label>
        <input
          type="text"
          name="notes"
          placeholder="Notes about your order, e.g. special notes for delivery."
          className="border p-3 mt-2 text-[14px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex items-center gap-3 mt-4">
        <input
          type="checkbox"
          name="default-address"
          className="product-checkbox"
        />
        <label className="text-[14px] md:text-base" htmlFor="default-address">
          Use as my default address
        </label>
      </div>

      <div className="flex items-center justify-end">
        <button className="bg-black mt-4 py-3 px-6 text-[14px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]">
          Save and Continue
        </button>
      </div>
    </section>
  );
};

export default BillingForm;
