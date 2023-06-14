import Sidebar from "../components/Sidebar";
import Trends from "../components/Trends";
// import "@/src/styles/globals.css"

import React, { ReactNode } from "react";


interface LayoutProps {
  children: ReactNode;
}

const activePage = '/';

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="flex justify-between w-screen h-screen">
      <Sidebar />
      <main className="w-[49%] border border-slate-200 h-screen">{children}</main>
      <Trends />
    </div>
  );
};

export default Layout;
