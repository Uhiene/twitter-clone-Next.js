"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { IconType } from "react-icons";
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaBell,
  FaEnvelope,
  FaUser,
  FaFeatherAlt,
} from "react-icons/fa";
import { CiCircleMore } from "react-icons/ci";

interface IconWrapperProps {
  icon: IconType;
  isActive: boolean;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ icon: Icon, isActive }) => {
  return (
    <div
      className={`icon-wrapper ${isActive ? "text-blue-500" : "text-black"}`}
    >
      <Icon style={{ width: "1.8rem", height: "1.8rem" }} />
    </div>
  );
};

interface HeaderProps {
  activePage: string;
}

const Header: React.FC<HeaderProps> = ({ activePage }) => {
  const [profilePictureUrl, setProfilePictureUrl] = useState("");

  useEffect(() => {
    // Fetch the profile picture URL from the API
    fetch("/api")
      .then((response) => response.json())
      .then((data) => {
        setProfilePictureUrl(data.profilePictureUrl);
      });
  }, []);

  return (
    <div className="w-[16%] flex flex-col items-end py-5 px-8 space-y-8">
      <Link href="/" passHref>
        <p className="text-blue-500">
          <FaTwitter style={{ width: "1.8rem", height: "1.8rem" }} />
        </p>
      </Link>
      <Link href="/home">
        <IconWrapper icon={FaHome} isActive={activePage === "/home"} />
      </Link>
      <Link href="/explore">
        <IconWrapper icon={FaHashtag} isActive={activePage === "/explore"} />
      </Link>
      <Link href="/explore">
        <IconWrapper icon={FaBell} isActive={activePage === "/explore"} />
      </Link>
      <Link href="/explore">
        <IconWrapper icon={FaEnvelope} isActive={activePage === "/explore"} />
      </Link>
      <Link href="/explore">
        <IconWrapper icon={FaUser} isActive={activePage === "/explore"} />
      </Link>
      <Link href="/explore">
        <IconWrapper icon={CiCircleMore} isActive={activePage === "/explore"} />
      </Link>
      <button className="bg-blue-500 text-white rounded-full w-12 h-12 flex justify-center items-center p-2">
        <FaFeatherAlt />
      </button>
      <img
        src={profilePictureUrl}
        alt="Profile Picture"
        className="rounded-full w-20 h-20"
      />
    </div>
  );
};

export default Header;
