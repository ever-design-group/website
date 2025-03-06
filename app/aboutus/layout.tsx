"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return <main className=" ">
          <Navbar />
          {children}
          <Footer />
  </main>;
}
