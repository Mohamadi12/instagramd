"use client";
import {
  CameraIcon,
  HomeIcon,
  LayoutGridIcon,
  SearchIcon,
  UserIcon,
} from "lucide-react";
import Link from "next/link";
import React from "react";

const DesktopNav = () => {
  return (
    <>
      <div className="hidden lg:block p-4 w-48 shadow-md shadow-gray-400">
        <div className="tp-0 sticky">
          <img
            className=""
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png"
            alt=""
          />
          <div className="inline-flex ml-1 gap-6 mt-8 flex-col *:flex *:items-center *:gap-2">
            <Link href={"/"}>
              <HomeIcon />
              Home
            </Link>
            <Link href={"/search"}>
              <SearchIcon />
              Search
            </Link>
            <Link href={"/browser"}>
              <LayoutGridIcon />
              Browser
            </Link>
            <Link href={"/profile"}>
              <UserIcon />
              Profile
            </Link>
            <Link href={"/create"}>
              <CameraIcon />
              Create
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default DesktopNav;
