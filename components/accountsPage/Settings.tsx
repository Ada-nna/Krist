"use client";
import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Switch } from "@/components/ui/switch";
import { AppearanceList } from "../DummyContents";

const Settings = () => {
  const [enabledStates, setEnabledStates] = useState(
    AppearanceList.map(() => false)
  );

  const handleChangeSwitch = (index: number, value: boolean) => {
    setEnabledStates((prev) =>
      prev.map((state, i) => (i === index ? value : state))
    );
  };
  return (
    <>
      {AppearanceList.map((list, index) => {
        return (
          <section
            key={list.id}
            className="flex justify-between items-center border-b py-5"
          >
            <div>
              <h3 className="text-[14px] md:text-base font-medium">
                {list.title}
              </h3>
              <p className="mt-1 text-[13px] text-[#b7b7b7]">{list.detail}</p>
            </div>

            {index === 0 ? (
              <button className="bg-gray-100 text-[13px] px-3 py-2 rounded-[4px] flex items-center gap-2">
                <span>Light</span> <ChevronDown size={13} />
              </button>
            ) : index === 1 ? (
              <button className="bg-gray-100 text-[13px] px-3 py-2 rounded-[4px] flex items-center gap-2">
                <span>English</span> <ChevronDown size={13} />
              </button>
            ) : (
              <Switch
                checked={enabledStates[index]}
                onCheckedChange={(value) => handleChangeSwitch(index, value)}
              />
            )}
          </section>
        );
      })}
    </>
  );
};

export default Settings;
