import { HeaderItems } from "@/types/type";
import { LogOut, Settings, User } from "lucide-react";
import Link from "next/link";
import React, { ReactNode } from "react";

const SideNav = ({
  auth,
  navLinks,
}: {
  auth: ReactNode;
  navLinks: HeaderItems[];
}) => {
  return (
    <div className=" lg:hidden  bg-white dark:bg-[#0a0a0a]` h-[100%] flex flex-col items-center px-5 fixed w-full top-0 pt-[5rem] ">
      <div className=" flex flex-col w-full">
        <div className="font-semibold">{auth}</div>
        <div className="w-full mt-6  flex flex-col opacity-80  ">
          {/* Dropdown Menu */}
          <ul tabIndex={0} className=" w-full flex flex-col gap-[2rem] ">
            <li>
              <Link
                href="/profile"
                className="flex w-full justify-between  items-center gap-2"
              >
                <span>View Profile</span>
                <User className="w-5 h-5 " />
              </Link>
            </li>
            <li>
              <Link
                href="/settings"
                className="flex items-center w-full justify-between  gap-2"
              >
                <span>Settings</span>
                <Settings className="w-5 h-5 " />
              </Link>
            </li>
            <li>
              <div className="flex items-center w-full justify-between  gap-2">
                <span>Logout</span>
                <LogOut className="w-5 h-5" />
              </div>
            </li>
          </ul>
        </div>
        <hr className=" mt-5" />
        <div className="mt-6 flex flex-col opacity-80 gap-[2rem]">
          {navLinks.map((items) => (
            <div key={items.name} className="  flex flex-col gap-[5rem] ">
              <Link href={items.link}>{items.name}</Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SideNav;
