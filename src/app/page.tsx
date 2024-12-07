import Header from "@/components/Header";
import React from "react";

import { ModeToggle } from "@/components/modeToggler";
import logo from "../../public/assets/logo.jpg";
import { nav_links } from "@/constants";
import HeaderArea from "@/components/header-area";
import Hero from "@/components/Hero";

const page = () => {
  const logo_name_one = "Gabriel";
  const logo_name_two = "Trading";
  const logo_name_third = "Academy";
  return (
    <div className="">
      <Header
        logo={logo}
        nav_links={nav_links}
        mode_toggle={<ModeToggle />}
        logo_name_one={logo_name_one}
        logo_name_two={logo_name_two}
        logo_name_three={logo_name_third}
        auth_operator={<HeaderArea />}
      />
      <div className=" pt-[9rem] sm:pt-[10rem]  mx-5 sm:mx-10 flex flex-col ">
        <Hero />
      </div>{" "}
    </div>
  );
};

export default page;
