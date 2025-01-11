import Logo from '@/components/Logo';
import React, { useState } from 'react';
import Link from "next/link"
import { ChevronsUpDown, GraduationCap, Menu, Search, Globe, Inbox, LayoutDashboard, LibraryBig, UsersRound, MessageSquare, UserPlus, Settings, Slack, X, User, LogOut, Star } from 'lucide-react';
import Auth from '@/features/auth/components/Auth';
import { ModeToggle } from '@/components/modeToggler';
import { usePathname } from 'next/navigation'
import { cn } from "@/lib/utils"

// Define interfaces for our types
interface SectionType {
  title: string;
  link: string;
  icon: React.ReactNode;
}

interface NotificationI {
  title: string;
  type: string;
  count: number;
}

interface NavLink {
  title: string;
  link: string;
  icon: React.ReactNode;
  notification?: NotificationI
}

interface SectionNavLinks {
  [key: string]: NavLink[];
}

const sectionNavTitle: SectionType[] = [
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
];

const profileLinks = [
  {
    title: "View Profile",
    link: "/profile",
    icon: <User className="w-4 h-4" />
  },
  {
    title: "Settings",
    link: "/settings",
    icon: <Settings className="w-4 h-4" />
  },
  {
    title: "Logout",
    link: "/logout",
    icon: <LogOut className="w-4 h-4" />
  }
];

// Section-specific navigation links
const sectionNavLinks: SectionNavLinks = {
  Education: [
    {
      title: "Dashboard",
      link: "/home/education",
      icon: <LayoutDashboard className="w-4 h-4" />,
    },
    {
      title: "School",
      link: "/home/education/school",
      icon: <GraduationCap className="w-4 h-4" />,
      notification: { title: "New video", type: "important", count: 4 }
    },
    {
      title: "Library",
      link: "/home/education/library",
      icon: <LibraryBig className="w-4 h-4" />,
    },
    {
      title: "Tutors",
      link: "/home/education/tutors",
      icon: <UsersRound className="w-4 h-4" />,
    },
    {
      title: "Inbox",
      link: "/home/education/inbox",
      icon: <Inbox className="w-4 h-4" />,
      notification: { title: "New video", type: "important", count: 200 }
    },
    {
      title: "Community",
      link: "/home/education/community",
      icon: <Globe className="w-4 h-4" />,
      notification: { title: "New video", type: "important", count: 500 }
    },
  ],
  Socials: [
    { title: "Chat", link: "/home/socials/chat", icon: <MessageSquare className="w-4 h-4" /> },
    { title: "Connections", link: "/home/socials/connections", icon: <UserPlus className="w-4 h-4" /> },
    { title: "Profile", link: "/home/socials/profile", icon: <Settings className="w-4 h-4" /> }
  ]
};

const Headers: React.FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<SectionType>(sectionNavTitle[0]);
  const [toggle, setToggle] = useState<boolean>(false);

  const pathname = usePathname()

  const handleSectionClick = (section: SectionType): void => {
    setSelectedSection(section);
    setIsOpen(false);
  };

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen);
  };

  const renderSectionNav = (): React.ReactNode => {
    const links = sectionNavLinks[selectedSection.title];

    if (!links) return null;

    const formatNotificationCount = (count: number) => {
      return count > 99 ? "99+" : count.toString()
    }
  

    return (
      <>
      <div className="flex flex-col sm:hidden gap-2 mt-4">
        {/* Section-specific links */}
        {links.map((link: NavLink) => (
          <Link
            href={link.link}
            key={link.link}
            className={cn(
              "flex items-center gap-4 p-2 px-3 rounded-md transition-colors",
              "hover:bg-blue-600 hover:text-white",
              pathname === link.link && "text-white bg-blue-600"
            )}
          >
            {link.icon}
            <span>{link.title}</span>
            {link.notification && (
              <span className="ml-auto bg-red-500 text-white text-xs px-2 py-1 rounded-full">
                {link.notification.count}
              </span>
            )}
          </Link>
        ))}

        {/* Divider */}
        <div className="border-t my-4" />

        {/* Profile-related links */}
        {profileLinks.map((link) => (
          <Link
            href={link.link}
            key={link.link}
            className={
              "flex items-center gap-4 p-2 px-3 rounded-md transition-colors hover:dark:bg-[#2F2F2F] hover:bg-gray-100"
            }
          >
            {link.icon}
            <span>{link.title}</span>
          </Link>
        ))}
      </div>


        {/* desktop navbar */}
        <section className=" sm:flex w-[500px] hidden px-4 flex-col justify-between mb-5 mt-8">
        <div className="w-full flex flex-col gap-5">
          {links.map((item) => (
            <Link
              key={item.title}
              href={item.link}
              className={cn(
                "flex items-center justify-between gap-4 p-2 px-3 rounded-md transition-colors",
                "hover:bg-blue-600 hover:text-white ",
                pathname === item.link && " text-white bg-blue-600"
              )}
            >
              <div className="flex items-center gap-2">
                {item.icon}
                <span>{item.title}</span>
              </div>
              {item.notification && item.notification.count > 0 && (
                <div className="flex items-center justify-center text-white bg-red-500 rounded-full min-w-7 h-7 px-2 text-xs">
                  {formatNotificationCount(item.notification.count)}
                </div>
              )}
            </Link>
          ))}
        </div>

        <button
          className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 text-white rounded-lg shadow-md hover:from-purple-600 hover:to-indigo-600 transition-all"
        >
          <Star className="w-5 h-5" />
          <span>Go Premium</span>
        </button>
      </section>

      </>

    );
  };

  return (
    <>
      <section className="w-full">
        {/* Top navigation */}
        <nav className="w-full border-b z-[1000] justify-between flex items-center px-5 py-3 fixed h-[70px] bg-white dark:bg-[#0A0A0A]">
          <div className="flex items-center gap-3 justify-start">
            <Logo href="/home/education" />
            <button
              className="border rounded-md gap-2 p-[2px] px-2 flex items-center focus:outline-none"
              onClick={toggleDropdown}
            >
              <div>{selectedSection.title}</div>
              <ChevronsUpDown className='h-4 w-4' />
            </button>
          </div>

          <label className="input input-bordered sm:flex hidden bg-white dark:bg-[#0A0A0A] border border-gray-500 h-[34px] items-center gap-2">
            <input type="text" className="grow" placeholder="Search" />
            <Search className="h-4 w-4 text-gray-300" />
          </label>

          <div className='flex items-center gap-2'>
            <div className='sm:flex hidden'>
              <Auth />
            </div>
            <div className='flex sm:hidden border p-2 rounded-md'>
              <Search className='h-5 w-5' />
            </div>
            <ModeToggle />
            <button
              className="sm:hidden"
              onClick={() => setToggle((prev) => !prev)}
            >
              {toggle ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

        {/* Section Selection Dropdown */}
        {isOpen && (
          <div className="absolute top-[60px] z-[1000] flex flex-col justify-start left-[67px] w-[150px] p-1 border rounded-md bg-white dark:bg-[#0A0A0A] shadow-md">
            {sectionNavTitle.map((section: SectionType) => (
              <Link
                href={section.link}
                key={section.link}
                className="cursor-pointer hover:bg-gray-100 flex justify-start items-center gap-2 hover:dark:bg-[#2F2F2F] rounded-md px-2 py-2"
                onClick={() => handleSectionClick(section)}
              >
                <span>{section.icon}</span>
                <span>{section.title}</span>
              </Link>
            ))}
          </div>
        )}

        {/* Mobile Sidebar */}
        {toggle && (
          <>
            <section className="w-[60%]  flex-col py-6 px-6 flex  z-[100] right-0 border-l h-screen fixed pt-[5rem] bg-white dark:bg-[#0A0A0A]">
              <Auth />
              {renderSectionNav()}
            </section>
            <div
              onPointerEnter={() => setToggle((prev) => !prev)}
              className="w-full sm:hidden fixed h-screen z-[10] bg-gray-500 dark:bg-gray-900 opacity-85"
            />
          </>
        )}
      </section>

      <aside className="hidden sm:flex fixed dark:bg-[#0A0A0A] bg-white w-56 h-screen pt-14 border-r">
        {renderSectionNav()}
      </aside>
    </>
  );
};

export default Headers;
