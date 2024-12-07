import React from "react";
import logo from "../../../../public//assets/logo.jpg";
import Image from "next/image";
import LoginSubmitter from "./LoginSubmmiter";
import { ModeToggle } from "@/components/modeToggler";
import SpecialRounded from "./SpecialRounded";

const LogIn = () => {
  return (
    <>
      <section className=" gap-[4rem] xl:px-[5rem] p-[2rem] w-full justify-center items-center h-screen fixed grid sm:px-[9rem] md:px-[13rem] xl:grid-cols-2 grid-cols-1 bg-white dark:bg-[#0a0a0a] ">
        {/* Phase one  */}
        <section className=" w-full h-full xl:pr-[5rem]  flex flex-col  ">
          {/* logo*/}
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center ">
              <Image src={logo} width={30} height={30} alt="logo" />
              <p className=" md:flex xl:flex text-[17px] font-bold gap-1 flex items-center  ">
                <span className="text-green-800">Gabriel</span>
                <span className="text-red-500">Trading</span>
                <span className="text-blue-600">Academy</span>
              </p>
            </div>
            <div className=" xl:hidden">
              <ModeToggle />
            </div>
          </div>

          {/* Login section */}
          <section className=" mt-[5rem] w-full h-full gap-[5rem] justify-center flex flex-col">
            <h1 className=" xl:text-4xl text-3xl text-center font-bold  w-full    ">
              Welcome Back
            </h1>

            <LoginSubmitter />
          </section>
        </section>

        {/*special rounded*/}
        <SpecialRounded />
      </section>
    </>
  );
};

export default LogIn;
