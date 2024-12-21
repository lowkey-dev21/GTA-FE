import { HeaderProps } from "@/types/type";
import Link from "next/link";
import React from "react";

const Header = ({ logo, navLinks, auth, modeToggler }: HeaderProps) => {
  return (
    <>
      <section className=" w-full py-4 px-5 flex items-center justify-between z-[4000] sticky top-0 bg-white dark:bg-neutral-950 ">
        <div className="">{logo}</div>

        <div className="xl:flex flex-row items-center gap-[4rem] hidden">
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

        <div className=" flex  gap-[2rem] items-center justify-end ">
          <div>{auth}</div>
          <div className="hover:opacity-80 ">{modeToggler}</div>
        </div>
      </section>
    </>
  );
};

export default Header;
