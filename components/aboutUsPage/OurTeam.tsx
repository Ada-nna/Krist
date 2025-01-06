import React from "react";
import { TeamList } from "../DummyContents";

const OurTeam = () => {
  return (
    <div className="px-4 md:px-6 py-4 md:py-6">
      <p className="text-center text-[14px] text-[red] font-medium tracking-widest">OUR TEAM</p>
      <h1 className="text-center font-medium text-[30px] mt-4">Meet Our Team</h1>

      <div className="flex items-stretch gap-8 w-full mt-[3rem]">
        {TeamList.map((list) => {
          return (
            <div key={list.id} className="flex-1 flex flex-col">
              <div
                className="h-[400px] w-full"
                style={{
                  backgroundImage: `url(${list.image})`,
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                }}
              ></div>

              <div className="mt-3">
                <h1 className="text-[18px] font-medium">{list.name}</h1>
                <p className="text-[14px] text-[#b7b7b7] mt-1">{list.role}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OurTeam;
