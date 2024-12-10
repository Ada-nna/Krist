"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, Lock, Mail, User2 } from "lucide-react";

const page = () => {
  const route = useRouter();
  const [isShowPassword, setIsShowPassword] = useState<boolean>(false);

  const handleIconClick = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="w-full md:w-[400px] 2xl:w-[500px] px-4 md:px-0">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-[30px] font-semibold">Create an account</h1>
        <p className="text-[#A4A1AA] md:text-[18px] mt-2">
          Already have an account?{" "}
          <button
            type="button"
            className="underline text-black"
            onClick={() => route.push("/login")}
          >
            Login
          </button>
        </p>
      </div>

      <form className="mt-8">
        <div className="relative mb-5 flex flex-col">
          <label>First name</label>
          <input
            type="text"
            name="fName"
            className="border-2 border-black rounded-[10px] py-4 px-9 mt-1 outline-none"
          />

          <div className="absolute top-[47px] left-2">
            <User2 size={20} />
          </div>
        </div>

        <div className="relative mb-5 flex flex-col">
          <label>Last name</label>
          <input
            type="text"
            name="lName"
            className="border-2 border-black rounded-[10px] py-4 px-9 mt-1 outline-none"
          />

          <div className="absolute top-[47px] left-2">
            <User2 size={20} />
          </div>
        </div>

        <div className="relative mb-5 flex flex-col">
          <label>Email address</label>
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

        <div className="flex items-center gap-3">
          <input type="checkbox" className="checkmark" />
          <label>
            I agree to the{" "}
            <span className="font-medium">terms and condition</span>
          </label>
        </div>

        <button
          type="submit"
          className="bg-black rounded-[10px] text-[#ffffff] mt-[30px] w-full py-[17px]"
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default page;
