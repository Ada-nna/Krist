"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Footer from "./Footer";

const FooterWrapper = () => {
  const pathName = usePathname();

  const authRoutes = ["/login", "/register", "/reset-password", "/verify-otp"];

  const shouldShowFooter = !authRoutes.includes(pathName);

  return <div>{shouldShowFooter && <Footer />}</div>;
};

export default FooterWrapper;
