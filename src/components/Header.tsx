"use client";
import { HeaderProps } from "@/types/type";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import SideNav from "./SideNav";

const Header = ({ logo, navLinks, auth, modeToggler }: HeaderProps) => {
  const [toggle, setToggle] = useState<boolean>(false);
  return (
    <>
      <section className=" w-full py-3  flex items-center justify-between z-[4000] sticky top-0 bg-white dark:bg-neutral-950 ">
        <div className="">{logo}</div>

        <div className="xl:flex  flex-row items-center gap-[4rem] hidden">
          {navLinks.map((items) => (
            <Link
              className="hover:opacity-80 "
              href={items.link}
              key={items.name}
            >
              {items.name}
            </Link>
          ))}
        </div>

        <div className=" flex gap-[0.5rem]  items-center justify-end ">
          <div className=" xl:flex hidden  ">{auth}</div>
          <div className="hover:opacity-80 ">{modeToggler}</div>
          <button
            className=" xl:hidden  "
            onClick={() => setToggle((prev) => !prev)}
          >
            {" "}
            {toggle ? <X /> : <Menu />}
          </button>
        </div>
      </section>

      {toggle && <SideNav auth={auth} navLinks={navLinks} />}
    </>
  );
};

export default Header;
