"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail } from "lucide-react";

const page = () => {
  const route = useRouter();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="w-full md:w-[400px] 2xl:w-[500px] px-4 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-semibold">Welcome 👋</h1>
        <p className="text-[#A4A1AA] font-medium md:text-[18px] mt-2">
          Are you new here?{" "}
          <button
            type="button"
            className="underline text-black"
            onClick={() => route.push("/register")}
          >
            Register
          </button>
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

        <div className="relative mb-5 flex flex-col">
          <label>Password</label>
          <input
            type={isShowPassword ? "text" : "password"}
            name="password"
            className="border-2 border-black rounded-[10px] py-4 px-9 mt-1 outline-none"
          />

          <div className="absolute top-[47px] left-2">
            <Lock size={20} />
          </div>

          <button
            className="absolute top-[47px] right-2"
            type="button"
            onClick={handleIconClick}
          >
            {isShowPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <input type="checkbox" className="checkmark" />
            <label>Remember me</label>
          </div>

          <button
            type="button"
            className="font-medium"
            onClick={() => route.push("/reset-password")}
          >
            Forgot Password?
          </button>
        </div>

        <button
          type="submit"
          className="bg-black rounded-[10px] text-[#ffffff] mt-[30px] w-full py-[17px]"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default page;
