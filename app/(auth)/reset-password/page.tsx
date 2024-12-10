"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Mail } from "lucide-react";

const page = () => {
  const route = useRouter();

  return (
    <div className="w-full md:w-[400px] 2xl:w- [500px] px-4 md:px-0">
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => route.push("/login")}
      >
        <ChevronLeft size={22} />
        <p className="font-medium md:text-[18px]">Back</p>
      </button>

      <div className="flex flex-col items-center justify-center mt-[30px]">
        <h1 className="text-[30px] font-semibold">Forgot password</h1>
        <p className="text-[#A4A1AA] font-normal md:text-[18px] mt-2 text-center">
          Enter your registered email address. We’ll send you a code to reset
          your password.
        </p>
      </div>

      <form className="mt-8">
        <div className="relative mb-5 flex flex-col">
          <label>Email Address</label>
          <input
            type="email"
            name="email"
            className="border-2 border-black rounded-[10px] py-4 px-9 mt-1 outline-none"
          />

          <div className="absolute top-[47px] left-2">
            <Mail size={20} />
          </div>
        </div>

        <button
          type="button"
          onClick={() => route.push("/verify-otp")}
          className="bg-black rounded-[10px] text-[#ffffff] mt-[30px] w-full py-[17px]"
        >
          Send OTP
        </button>
      </form>
    </div>
  );
};

export default page;
