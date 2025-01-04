"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ProfileSidebarList } from "../DummyContents";

interface SidebarProps {
  isActive: string;
  setIsActive: (value: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isActive, setIsActive }) => {
  return (
    <aside className="border w-full">
      <div className="p-4">
        <div className="flex items-center gap-4">
          <Image
            src="/headshot-female.jpg"
            alt="avatar"
            width={50}
            height={50}
            className="rounded-full"
          />
          <div className="flex flex-col gap-[6px]">
            <p className="text-[13px]">Hey there 👋</p>
            <h1 className="text-[14px] font-medium">Cynthia Okafor</h1>
          </div>
        </div>
      </div>
      <hr className="w-full" />

      <ul className=" flex flex-col gap-2 mt-4">
        {ProfileSidebarList.map((list) => {
          return (
            <li
              key={list.id}
              onClick={() => setIsActive(list.option)}
              className={`flex items-center gap-2 px-4 py-[10px] cursor-pointer ${
                isActive === list.option
                  ? "bg-black text-white transition-all duration-300"
                  : "text-black"
              }`}
            >
              <list.icon.icon
                size={list.icon.size}
                strokeWidth={list.icon.strokeWidth}
              />
              <span className="text-[14px]">{list.option}</span>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
