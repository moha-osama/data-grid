import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import React from "react";
import { AppWrapper } from "@/context";
import Header from "@/components/Header/Header";
import DrawerEle from "@/components/Drawer/Drawer";
import { CssBaseline } from "@mui/material";
import { Main, DrawerHeader } from "@/components/Main/Main";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Typical-Tech",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased flex`}
      >
        <CssBaseline />
        <AppWrapper>
          <Header />
          <DrawerEle />
          <Main className="min-h-[calc(100vh-64px)] px-2 sm:px-6">
            {children}
          </Main>
        </AppWrapper>
      </body>
    </html>
  );
}
