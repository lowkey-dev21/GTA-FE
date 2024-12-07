"use client";

import Image from "next/image";
import React from "react";
import { Header_props } from "../types/index";
import Link from "next/link";

const Header = ({
  logo,
  mode_toggle,
  logo_name_one,
  logo_name_two,
  logo_name_three,
  auth_operator,
  nav_links,
}: Header_props) => {
  return (
    <div>
      <nav
        className={
          "w-full z-[1000] bg-white dark:bg-[#0A0A0A]   md:py-[0.5rem] xll:py-[1rem] py-[1rem]  fixed justify-between items-center flex px-5 sm:px-10  "
        }
      >
        {/* Logo & Logo Name*/}
        <div className="flex gap-1 justify-center font-bold items-center">
          <Image src={logo} width={30} height={30} alt="logo" />
          <p className=" md:hidden xl:flex text-[17px] font-bold gap-1 flex items-center  ">
            <span className="text-green-800">{logo_name_one}</span>
            <span className="text-red-500">{logo_name_two}</span>
            <span className="text-blue-600">{logo_name_three}</span>
          </p>
        </div>

        {/* Navigation Links */}
        <div className="  xl:gap-[4rem] md:gap-[1.5rem] text-[17px] md:flex xll:h-[60px] mx-auto hidden md:items-center justify-center xll:w-[60%] xl:w-[60%]    md:h-[55px]  px-4 rounded-full  items-center ">
          {nav_links.map((nav) => (
            <div key={nav.name}>
              <Link
                className=" hover:text-slate-600 dark:hover:text-slate-400 "
                href={nav.link}
              >
                {nav.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Mode toggle */}
        <div className="flex text-[20px] items-center flex-row-reverse md:flex-row  justify-center gap-3  ">
          <div>{auth_operator}</div>
          <div className=" text-xl">{mode_toggle}</div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
