import type { Metadata } from "next";
import "./globals.css";
import NavbarWrapper from "@/components/fixed/NavbarWrapper";
import FooterWrapper from "@/components/fixed/FooterWrapper";

export const metadata: Metadata = {
  title: "Krist App",
  description: "An e-commerce clothing web app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" type="image/svg+xml" href="/kfavicon.png" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=general-sans@200,201,300,301,400,401,500,501,600,601,700,701,1,2&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <NavbarWrapper />
        <main className="flex-1">{children}</main>
        <FooterWrapper />
      </body>
    </html>
  );
}
