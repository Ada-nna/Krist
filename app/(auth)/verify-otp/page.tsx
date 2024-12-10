"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { ChevronLeft, Mail } from "lucide-react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp"


const page = () => {
  const route = useRouter();

  return (
    <div className="w-full md:w-[400px] 2xl:w-[500px] px-4 md:px-0">
      <button
        type="button"
        className="flex items-center gap-2"
        onClick={() => route.push("/reset-password")}
      >
        <ChevronLeft size={22} />
        <p className="font-medium md:text-[18px]">Back</p>
      </button>

      <div className="flex flex-col items-center justify-center mt-[30px]">
        <h1 className="text-[30px] font-semibold">Enter OTP</h1>
        <p className="text-[#A4A1AA] md:text-[18px] mt-2 text-center">
          We have shared a code of your registered email address
          johndoe@xmail.com
        </p>
      </div>

      <form className="mt-8">
        <div className="flex items-center justify-center">
        <InputOTP maxLength={6}>
          <InputOTPGroup>
            <InputOTPSlot index={0} />
            <InputOTPSlot index={1} />
            <InputOTPSlot index={2} />
          </InputOTPGroup>
          <InputOTPSeparator />
          <InputOTPGroup>
            <InputOTPSlot index={3} />
            <InputOTPSlot index={4} />
            <InputOTPSlot index={5} />
          </InputOTPGroup>
        </InputOTP>

        </div>

        <button
          type="submit"
          className="bg-black rounded-[10px] text-[#ffffff] mt-[30px] w-full py-[17px]"
        >
          Verify
        </button>
      </form>
    </div>
  );
};

export default page;
