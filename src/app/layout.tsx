import Header from "@/components/header/Header";
import type { Metadata } from "next";
import { Roboto_Serif } from "next/font/google";
import "./globals.css";
import InfoHeader from "@/components/header/InfoHeader";

const roboto_serif = Roboto_Serif({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "meb",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <head>
        <meta name="theme-color" content="#262626" />
      </head>
      <body className={`${roboto_serif.className}`}>
        {/* <InfoHeader /> */}
        <Header />
        {children}

        <div className="h-[200vh]" />
      </body>
    </html>
  );
}
