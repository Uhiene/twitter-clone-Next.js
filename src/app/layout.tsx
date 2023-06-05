import Head from "next/head";

import "./globals.css";

import React, { ReactNode } from "react";
import Sidebar from "@/components/Sidebarsrc";
import Trends from "@/components/Trendssrc";

interface LayoutProps {
  children: ReactNode;
}

const activePage = '/';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-screen h-screen">
      <Sidebar activePage={activePage} />
      <main className="w-[49%] border border-slate-200 h-screen">{children}</main>
      <Trends />
    </div>
  );
};

export default Layout;
