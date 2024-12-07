"use client";

import { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { FaXmark } from "react-icons/fa6";
import { motion } from "framer-motion";
import Link from "next/link";
import { nav_links } from "@/constants";

const HeaderArea = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      {/* Desktop Buttons */}
      <div className="md:flex gap-5 hidden items-center justify-end">
        <Link
          href={"/auth/login"}
          className="text-white rounded-full bg-blue-600 p-1 px-5 "
        >
          Login
        </Link>
        <Link
          href={"/auth/sign-up"}
          className="p-1 px-5 rounded-full border-black border-[1px] dark:border-white "
        >
          Sign up
        </Link>
      </div>

      {/* Toggle Button for Mobile Navigation */}
      <button
        onClick={() => setToggle((prev: boolean) => !prev)} // Cleaned up state toggle
        className="text-2xl md:hidden flex z-[1000] "
      >
        {toggle ? <FaXmark /> : <FaBars />}
      </button>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className={`${
          toggle ? "flex" : "hidden"
        } md:hidden sm:text-3xl bg-white dark:bg-[#0a0a0a] flex-col z-[-10] justify-between fixed top-0 right-0 w-full h-full`}
      >
        <p className="w-full h-[2px] top-[3.8rem] fixed dark:bg-white bg-black"></p>
        <ul className="mt-[5rem]  flex flex-col gap-3 w-full ">
          {nav_links.map((item) => (
            <li
              key={item.name}
              className="text-xl sm:text-3xl font-bold pl-3 hover:text-blue-600"
            >
              <Link href={item.link} onClick={() => setToggle(false)}>
                {item.name}
              </Link>
              <hr className="border-t-2 border-dashed border-black dark:border-white my-1" />
            </li>
          ))}
        </ul>

        <div className="gap-5   sm:text-4xl mb-[2rem] w-full flex flex-col items-center justify-center z-[100]">
          <p className="text-xl sm:text-3xl">
            Existing student?{" "}
            <Link href={"/login"} className="  font-bold text-blue-600">
              Login
            </Link>
          </p>

          <Link
            onClick={() => console.log("Clicked")}
            href={"/register"}
            className="flex sm:text-3xl items-center gap-2 text-white bg-blue-600 w-[95%] rounded-2xl justify-center p-5 text-xl font-bold"
          >
            <p>GET STARTED</p>
            <i className="fa-solid fa-arrow-right-long"></i>
          </Link>
        </div>
      </motion.section>
    </>
  );
};

export default HeaderArea;
