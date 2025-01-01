"use client";

import { useState, MouseEvent } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/klogo.svg";
import { ChevronDown, Menu, X } from "lucide-react";
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
    setTimeout(() => {
      const element = document.getElementById(hash);
      if (hash && element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }, 0);
  };

  return (
    <main className="sticky top-0 left-0 w-full z-50 px-4 md:px-6 bg-white shadow-sm">
      <div className="flex items-center justify-between h-[68px] py-3">
        {/* Logo */}
        <Link className="border-none outline-none" href="/">
          <Image src={Logo} alt="logo" width={100} height={100} />
        </Link>

        {/* Desktop view */}
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

        {/* Desktop actions */}
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
              <path
                d="M8 8V4.5C8 3 9 2 10.5 2h3C15 2 16 3 16 4.5V8M20.41 17.03H8"
                stroke="#000"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
          <button className="flex items-center gap-1 py-2 px-6 text-white bg-black rounded-full text-[13px] transition-all duration-300 hover:bg-gray-800 hover:shadow-lg hover:scale-105">
            <span className="transition-transform duration-300 group-hover:translate-x-1">
              Login
            </span>
          </button>
        </div>

        {/* Mobile view */}
        <button
          className="md:hidden"
          onClick={() => setNavShow(!navShow)}
          aria-label="Toggle Menu"
        >
          {navShow ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {navShow && (
        <div className="md:hidden flex flex-col bg-white shadow-lg transition-all duration-300 py-4 px-6 absolute top-[68px] left-0 w-full z-40">
          <Link href="/" className="py-2" onClick={() => setNavShow(false)}>
            Home
          </Link>
          <Popover>
            <PopoverTrigger className="flex items-center justify-between py-2">
              Shop <ChevronDown size={16} />
            </PopoverTrigger>
            <PopoverContent>
              <ShopContent />
            </PopoverContent>
          </Popover>
          <Link href="/" className="py-2" onClick={() => setNavShow(false)}>
            Our story
          </Link>
          <Link href="/" className="py-2" onClick={() => setNavShow(false)}>
            Blog
          </Link>
          <Link href="/" className="py-2" onClick={() => setNavShow(false)}>
            Contact us
          </Link>
        </div>
      )}
    </main>
  );
};

export default Navbar;
