import type {Metadata} from "next";
import {Rubik} from "next/font/google";
import type {ReactNode} from "react";

import "./globals.css";

const rubik = Rubik({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Dmitry Overkin",
  description: "Deveoper portfolio of Dmitry Overkin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en" className={rubik.className}>
      <body>{children}</body>
    </html>
  );
}
