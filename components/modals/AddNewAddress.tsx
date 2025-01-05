import React from "react";

const AddNewAddress = () => {
  return (
    <form className="mt-2">
      <div className="flex flex-col">
        <label className="text-[13px]" htmlFor="first-name">
          Name<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="first-name"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-2 w-full">
        <label className="text-[13px]" htmlFor="number">
          Phone number<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="number"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[13px]" htmlFor="address">
          Address<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="address"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[13px]" htmlFor="town-city">
          City<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="town-city"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[13px]" htmlFor="state">
          State<span className="text-[red]">*</span>
        </label>
        <input
          type="text"
          name="state"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex flex-col mt-2">
        <label className="text-[13px]" htmlFor="zip">
          Postal code/ ZIP (optional)
        </label>
        <input
          type="text"
          name="zip"
          className="border px-3 py-2 mt-2 text-[13px] outline-none rounded-[4px]"
        />
      </div>

      <div className="flex items-center gap-2 py-2 mt-2">
        <input
          type="checkbox"
          name="default-address"
          className="product-checkbox"
        />
        <label className="text-[13px]" htmlFor="default-address">
          Use as my default address
        </label>
      </div>

      <div className="flex items-center justify-between mt-4">
        <button className="bg-black mt-2 py-3 px-6 text-[13px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]">
          Cancel
        </button>
        <button className="bg-black mt-2 py-3 px-6 text-[13px] text-white rounded-full hover:scale-105 transition-all duration-300 active:text-[#f3f3f3]">
          Add
        </button>
      </div>
    </form>
  );
};

export default AddNewAddress;
