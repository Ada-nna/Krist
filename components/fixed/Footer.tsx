import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Heart, Mail } from "lucide-react";
import { FooterServiceList, FooterShoppingList } from "../DummyContents";

const Footer = () => {
  return (
    <div className="mt-[5rem] bg-[#111111] p-8 md:p-10 text-white">
      <div className="grid grid-cols-1 md:grid-cols-4">
        <div>
          <Image src="/logo-wh.svg" alt="logo" height={100} width={100} />
          <p className="text-[14px] text-[#b7b7b7] w-full md:w-[80%] my-4 italic">
            The customer is at the heart of our unique business model, which
            includes design.
          </p>
          <Image src="/payment.png" alt="payment" height={200} width={200} />
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">SHOPPING</h2>
          <ul className="flex flex-col gap-3 text-[14px] text-[#b7b7b7]">
            {FooterShoppingList.map((item) => {
              return (
                <Link href="/" key={item.id}>
                  <li className="hover:text-[#f3f3f3] hover:duration-300">
                    {item.list}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3">
          <h2 className="font-medium">SERVICES</h2>
          <ul className="flex flex-col gap-3 text-[14px] text-[#b7b7b7]">
            {FooterServiceList.map((item) => {
              return (
                <Link href="/" key={item.id}>
                  <li className="hover:text-[#f3f3f3] hover:duration-300">
                    {item.list}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>

        <div className="flex flex-col gap-3 md:px-6">
          <h2 className="font-medium">NEWSLETTER</h2>
          <p className="text-[14px] text-[#b7b7b7]">
            Be the first to know about new arrivals, look books, sales & promos!
          </p>
          <div className="relative">
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-transparent outline-none border-b-2 w-full py-2 pr-10 text-[12px] text-[#b7b7b7] placeholder:text-[#b7b7b7] focus:text-white focus:placeholder:text-white"
            />
            <Mail
              size={18}
              color="#ffffff"
              className="absolute top-1/2 right-2 transform -translate-y-1/2 pointer-events-none"
            />
          </div>
        </div>
      </div>

      <hr className="border-[#b7b7b7] w-full mt-[3rem]" />

      <p className="text-[10px] md:text-[12px] text-[#b7b7b7] text-center mt-3 tracking-wider flex items-center justify-center">
        Copyright © {new Date().getFullYear()} All rights reserved | This
        website was made with{" "}
        <span className="px-1">
          <Heart color="red" size={14} />{" "}
        </span>{" "}
        by <span className="text-[red] px-1">Cynthia</span>
      </p>
    </div>
  );
};

export default Footer;
