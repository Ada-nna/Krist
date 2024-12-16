"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "./Navbar";

const NavbarWrapper = () => {
  const pathName = usePathname();

  const authRoutes = ["/login", "/register", "/reset-password", "/verify-otp"];

  const shouldShowNavbar = !authRoutes.includes(pathName);

  return <div>{shouldShowNavbar && <Navbar />}</div>;
};

export default NavbarWrapper;
