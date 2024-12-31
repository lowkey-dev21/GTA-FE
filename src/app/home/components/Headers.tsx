import Logo from '@/components/Logo';
import React, { useState } from 'react';
import { SectionTypes } from '../constants';
import Link from "next/link"
import { ChevronsUpDown, GraduationCap, Menu, Search, Slack, X } from 'lucide-react';
import Auth from '@/features/auth/components/Auth';
import { ModeToggle } from '@/components/modeToggler';

const sectionNavTitle: SectionTypes[] = [
  {
    title: "Education",
    link: "/home/education",
    icon: <GraduationCap className='w-4 h-4' />
  },
  {
    title: "Socials",
    link: "/home/socials",
    icon: <Slack className='w-4 h-4' />
  },
]

const Headers = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSection, setSelectedSection] = useState<any | null>(null);

  const handleSectionClick = (section: any) => {
    setSelectedSection(section);
    setIsOpen(false); // Close the dropdown after selection
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [toggle, setToggle] = useState<boolean>(false);

  return (
    <>
      <section className="w-full">
        {/* Top navigation */}
        <nav className="w-full  border-b  z-[1000]  justify-between flex items-center px-5 py-3 fixed  h-[70px] bg-white dark:bg-[#0A0A0A]">
          <div className="flex items-center gap-3 justify-start">
            <Logo />
            <button
              className=" border rounded-md  gap-2  p-[2px] px-2 flex  items-center  focus:outline-none"
              onClick={toggleDropdown}
            >
              <div>
                {selectedSection ? selectedSection.title : 'Education'}
              </div>
              <ChevronsUpDown className=' h-4 w-4' />
            </button>
          </div>

          <label className="input input-bordered sm:flex hidden bg-white dark:bg-[#0A0A0A] border border-gray-500  h-[34px] items-center gap-2">
            <input type="text" className="grow  " placeholder="Search" />
            <Search className=" h-4 w-4 text-gray-300  " />
          </label>



          <div className='flex items-center gap-2 ' >
            <div className=' md:flex hidden ' >
              <Auth />

            </div>
            <div className=' flex sm:hidden border p-2 rounded-md ' >
              <Search className=' h-5 w-5  ' />
            </div>
            <ModeToggle />
            <button
              className=" md:hidden  "
              onClick={() => setToggle((prev) => !prev)}
            >
              {" "}
              {toggle ? <X /> : <Menu />}
            </button>

          </div>





        </nav>

        {/* Section Selection Dropdown */}
        {/* Section Selection Dropdown */}
        {isOpen && (
          <div className="absolute top-[55px] z-[1000] flex flex-col justify-start left-[67px] w-[150px] p-1 border rounded-md bg-white dark:bg-[#0A0A0A] shadow-md">
            {sectionNavTitle.map((section: SectionTypes) => (
              <Link
                href={section.link}
                key={section.link}
                className="cursor-pointer hover:bg-gray-100 flex justify-start items-center gap-2 hover:dark:bg-[#2F2F2F] rounded-md px-2 py-2"
                onClick={() => handleSectionClick(section)}
              >
                <span>{section.icon}</span> <span>{section.title}</span>
              </Link>
            ))}
          </div>
        )}

      </section>
    </>
  );
};

export default Headers;
