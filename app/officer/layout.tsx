import React from "react";
import Navbar from "@/components/navbar";
export default function Layout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <main className="font-work-sans w-full">{children} </main>;
}
