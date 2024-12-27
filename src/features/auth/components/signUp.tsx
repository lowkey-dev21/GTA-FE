import React from "react";

import { ModeToggle } from "@/components/modeToggler";
import SignUpSubmitter from "./SignUpSubmitter";
import Logo from "@/components/Logo";

const SignUp = () => {
  return (
    <>
      <section className=" gap-[3rem] xl:px-[5rem] p-[1rem] w-full  justify-center items-center h-screen lg:fixed grid sm:px-[9rem] md:px-[13rem] xl:grid-cols-2 grid-cols-1 bg-white dark:bg-[#0a0a0a] ">
        {/* Phase one  */}
        <section className=" w-full h-full xl:pr-[5rem]  flex flex-col  ">
          {/* logo*/}
          <div className=" flex items-center justify-between ">
            <div className=" flex items-center ">
              <Logo />
            </div>
            <div className=" xl:hidden">
              <ModeToggle />
            </div>
          </div>

          {/* Sign up section */}
          <section className="  w-full lg:h-full gap-[5rem] mt-[2rem] lg:mt-0 justify-center flex flex-col">
            <SignUpSubmitter />
          </section>

        </section>
      </section>
    </>
  );
};

export default SignUp;
