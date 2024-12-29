"use client";
import SideNav from "../components/SideNavbar";


const EducationPage = () => {
  return (
    <>
      <section className="flex w-full" >
        <aside className=" fixed  w-[200px] h-screen sm:flex hidden pt-[5rem] px-7 border-r " >
          <SideNav />
        </aside>

        <section className=" flex-1 " ></section>

      </section>
    </>
  )
};

export default EducationPage;
