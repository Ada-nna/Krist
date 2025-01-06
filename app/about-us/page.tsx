import React from "react";
import OurTeam from "@/components/aboutUsPage/OurTeam";
import { AboutUsContent, SumUps } from "@/components/DummyContents";

const page = () => {
  return (
    <section className="container flex-1">
      <div className="max:h-screen px-4 md:px-6 py-4 md:py-6">
        <div
          style={{
            backgroundImage: "url('/about-us.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-full h-[40vh] md:h-[70vh]"
        ></div>

        <div className="flex items-center justify-between mt-8">
          {AboutUsContent.map((list) => {
            return (
              <div key={list.id}>
                <h1 className="font-medium text-[22px]">{list.title}</h1>
                <p className="text-[#343434] text-[14px] md:text-base w-[90%] mt-1">
                  {list.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full md:my-[6rem] flex items-center justify-between bg-[#f3f3f3]">
        <div className="w-1/2 flex flex-col items-center">
          <>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M22 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58h3.22c1.42 0 2.58 1.16 2.58 2.58v5.8ZM22 11.65c0 6.05-1.13 7.05-4.53 9.07M10.37 11.65h-5.8c-1.53 0-2.58-1.16-2.58-2.58V5.85c0-1.42 1.05-2.58 2.58-2.58H7.8c1.42 0 2.58 1.16 2.58 2.58v5.8M10.37 11.65c0 6.05-1.13 7.05-4.53 9.07"
                stroke="#FF8A65"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </>
          <p className="w-[25rem] md:text-[18px] text-center italic my-8 font-medium">
            “Going out after work? Take your butane curling iron with you to the
            office, heat it up, style your hair before you leave the office and
            you won’t have to make a trip back home.”
          </p>

          <div className="flex items-center gap-3">
            <div
              style={{
                backgroundImage: "url('/testimonial-author.jpg')",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
              className="w-[50px] h-[50px] rounded-full"
            ></div>

            <div>
              <h1 className="text-[#343434] font-medium">Daniel Walterz</h1>
              <p className="italic text-[#b7b7b7] text-[14px] mt-[2px]">
                Fashion Designer
              </p>
            </div>
          </div>
        </div>

        <div
          style={{
            backgroundImage: "url('/testimonial-pic.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
          className="w-1/2 h-[32rem]"
        ></div>
      </div>

      <div className="flex items-center justify-center gap-[7rem] px-4 md:px-6">
        {SumUps.map((list) => {
          return (
            <div className="flex items-center gap-5">
              <h1 className="text-[64px] font-medium">{list.number}</h1>
              <div className="flex flex-col gap-1 text-base font-medium">
                <p>{list.text1}</p>
                <p>{list.text2}</p>
              </div>
            </div>
          );
        })}
      </div>

      <hr className="w-full my-[5rem]" />

      <>
        <OurTeam />
      </>
    </section>
  );
};

export default page;
