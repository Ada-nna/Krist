"use client";
import Image from "next/image";
import Logo from "../../../public/klogo.svg";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex h-[100dvh]">
      <div
        className="hidden md:block h-full w-[40%] p-[40px]"
        style={{
          backgroundImage: "url('/two.png')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Image src={Logo} width={100} height={100} alt="logo" />
      </div>

      <div className="w-full md:w-[60%] h-full flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
}
