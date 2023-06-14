"use client";
import { FaFeatherAlt } from "react-icons/fa";
import { SIDEBAR_LINkS } from "@/utils/constants";
import Image from "next/image";
import React, {FC} from "react";
import { useRouter } from "next/router";

type Props = {};

const Sidebar: FC = ({}: Props) => {
  const router = useRouter();
  

  return (
    <div className="w-[16%] flex flex-col items-end py-5 px-8 space-y-8">
      <div
        onClick={() => router.push("/")}
        className="flex flex-col justify-center cursor-pointer items-center w-fit"
      >
        <FaFeatherAlt />
      </div>
      {SIDEBAR_LINkS.map(({ imgIcon, path }: any, i) => (
        <button
          onClick={() => router.push(path)}
          key={i}
          className={`font-medium text-[16px] text-[#1E1E1E] border-b-[2px] pb-1 ${
            router.asPath === path
              ? 'purple-color' : 'black-color'
          }`}
        >
          <Image width={20} height={30} src={`/assets/icons/${imgIcon}`} alt="icon" />
          {/* <Image width={20} height={30} src={imgIcon} alt="icon" /> */}
          {imgIcon}
        </button>
      ))}
      <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex justify-center items-center p-2">
        <FaFeatherAlt />
      </button>
    </div>
  );
};

export default Sidebar;