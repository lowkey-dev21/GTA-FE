import { images, webName } from "@/constants";
import Image from "next/image";
import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <Image
        className="w-[40px] h-[40px] bg-contain"
        src={images.logo}
        alt="logo"
      />
      <div className=" sm:hidden  gap-1 xl:text-2xl font-bold  text-xl ">
        <span className="text-success-700 "> {webName[0]} </span>
        <span className=" text-danger-600  "> {webName[1]} </span>
        <span className="text-initialPrimary-500 "> {webName[2]} </span>
      </div>
    </div>
  );
};

export default Logo;
