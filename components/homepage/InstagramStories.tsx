"use client";

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { Instagram } from "lucide-react";

const InstagramImages = [
  { id: 1, image: "/ig-1.jpg" },
  { id: 2, image: "/ig-2.jpg" },
  { id: 3, image: "/ig-3.jpg" },
  { id: 4, image: "/ig-4.jpg" },
  { id: 5, image: "/ig-5.jpg" },
  { id: 6, image: "/ig-6.jpg" },
  { id: 7, image: "/ig-7.jpg" },
  { id: 8, image: "/ig-8.jpg" },
];

const InstagramStories = () => {
  const route = useRouter();
  return (
    <div className="mt-[5rem]">
      <div className="flex">
        {/* Left Side */}
        <div className="w-2/3 relative grid grid-cols-2 md:grid-cols-4">
          <button
            className="absolute inset-0 flex items-center justify-center z-10"
            onClick={() =>
              route.push("https://www.instagram.com/tiana_toks")
            }
          >
            <Instagram size={64} color="white" />
          </button>

          {InstagramImages.map((item) => (
            <div key={item.id} className="relative w-full h-[320px]">
              <div className="absolute inset-0 bg-black opacity-80"></div>

              <Image
                src={item.image}
                alt="Instagram Image"
                layout="fill"
                objectFit="cover"
              />
            </div>
          ))}
        </div>

        {/* Right Side */}
        <div className="w-1/3 flex flex-col items-center justify-center p-6">
          <h1 className="text-center font-medium md:text-[24px]">
            Find us on Instagram
          </h1>
          <p className="text-[14px] text-center my-3">
            Lorem, ipsum dolor sit amet consecteturs! Commodi quae, similique
            rem optio laudantium perspiciatis fugit beatae dolores! Quisquam,
            saepe!
          </p>
          <p className="text-[22px] text-[red] font-medium mt-4">
            #everything_fashion
          </p>
        </div>
      </div>
    </div>
  );
};

export default InstagramStories;
