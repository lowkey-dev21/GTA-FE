"use client";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import { ModeToggle } from "@/components/modeToggler";
import { navLinks } from "@/constants";
import Auth from "@/features/auth/components/Auth";

const page = () => {
  return (
    <div className="flex flex-col items-center justify-center px-5">
      <div className="w-full max-w-[1800px] z-[0] flex flex-col items-center">
        <Header
          logo={<Logo />}
          navLinks={navLinks}
          modeToggler={<ModeToggle />}
          auth={<Auth />}
        />
        <div className="w-full px-5 pt-12 sm:pt-6 flex flex-col items-center">
          <Hero />
        </div>
      </div>
    </div>
  );
};

export default page;
