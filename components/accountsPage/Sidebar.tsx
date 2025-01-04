import React from "react";
import Image from "next/image";
import { ProfileSidebarList } from "../DummyContents";

const Sidebar = () => {
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
            <p className="text-[13px]">Hello 👋</p>
            <h1 className="text-[14px] font-medium">Cynthia Okafor</h1>
          </div>
        </div>
      </div>
      <hr className="w-full" />

      <ul>
        {ProfileSidebarList.map((list) => {
          return <li key={list.id}></li>;
        })}
      </ul>
    </aside>
  );
};

export default Sidebar;
