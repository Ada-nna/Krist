"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/klogo.svg";
import { ChevronDown } from "lucide-react";
import { useRouter } from "next/navigation";
import ShopContent from "../popovers/ShopContent";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Navbar = () => {
  const [navShow, setNavShow] = useState<boolean>(false);
  const navigate = useRouter();

  const handleNavClick = (
    event: MouseEvent<HTMLAnchorElement>,
    path: string,
    hash: string
  ) => {
    event.preventDefault();
    // navigate(path);
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (hash && element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <main className="sticky top-0 left-0 w-full z-50 px-4 md:px-6">
      <div className="flex items-center justify-between h-[68px] py-3 shadow-sm">
        <Link className="border-none outline-none" href="/">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop view... */}
        <ul className="hidden md:flex items-center gap-8">
          <li>
            <Link href="/">Home</Link>
          </li>
          <Popover>
            <li>
              <PopoverTrigger>
                <span className="flex items-center gap-1">
                  Shop <ChevronDown size={16} />
                </span>
              </PopoverTrigger>
              <PopoverContent>
                <ShopContent />
              </PopoverContent>
            </li>
          </Popover>
          <li>
            <Link href="/">Our story</Link>
          </li>
          <li>
            <Link href="/">Blog</Link>
          </li>
          <li>
            <Link href="/">Contact us</Link>
          </li>
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M11 20a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM18.93 20.69c.53 1.6 1.74 1.76 2.67.36.85-1.28.29-2.33-1.25-2.33-1.14-.01-1.78.88-1.42 1.97Z"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8.4 6.5h7.2c3.4 0 3.74 1.59 3.97 3.53l.9 7.5C20.76 19.99 20 22 16.5 22H7.51C4 22 3.24 19.99 3.54 17.53l.9-7.5C4.66 8.09 5 6.5 8.4 6.5Z"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8"
                stroke="#000"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </button>
          <button className="flex items-center gap-1 py-3 px-6 text-white bg-black rounded-[8px] text-[13px] transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Login
            </span>
          </button>
        </div>

        {/* for the mobile view... */}
        {/* <ul
          className={`lg:flex flex-col flex lg:flex-row absolute lg:relative ${
            navShow ? "top-[3rem] md:top-[5rem]" : "top-[-1000px]"
          } duration-[1.5s] top-0 left-0 w-full h-[100dvh] lg:w-fit lg:h-fit bg-white lg:bg-transparent py-10 px-5 lg:py-0 lg:px-0 lg:items-center gap-5 lg:text-[17px] xl:text-[1.2rem] 2xl:text-[20px] text-[var(--talentmal-color-one)] font-medium my-auto`}
        >
          <li className="mb-2 lg:mb-0">
            <Link onClick={() => setNavShow(false)} href="/employer">
              For Employer
            </Link>
          </li>
          <li className="mb-2 lg:mb-0">
            <Link onClick={() => setNavShow(false)} href="/freelancer">
              For Frelancers
            </Link>
          </li>
          <li className="mb-4 lg:mb-0">
            <a
              href="/#about"
              onClick={(e) => {
                setNavShow(false);
                handleNavClick(e, "/", "about");
              }}
            >
              About Us
            </a>
          </li>
          <div className="flex items-center gap-5 text-[17px] mb-1 lg:mb-0">
            <button
              aria-label="Join talentmal"
              onClick={() => setNavShow(false)}
              className="lg:hidden bg-[var(--talentmal-color-two)] tracking-wide text-[14px] text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#818181] duration-300"
            >
              <Link href="/freelancer-register">Join talentmal</Link>
            </button>
            <button
              aria-label="Hire Talent"
              onClick={() => setNavShow(false)}
              className="lg:hidden bg-[var(--talentmal-color-three)] tracking-wide text-[14px] text-white py-2 px-4 md:py-3 md:px-7 rounded-full hover:scale-105 active:bg-[#111111] duration-300"
            >
              <Link href="/employer-register">Hire talent</Link>
            </button>
          </div>
        </ul> */}
      </div>
    </main>
  );
};

export default Navbar;
