'use client'
import React, { useState } from "react";
import { UserData } from "../types/types";
import Image from "next/image";
import { User, Settings, LogOut } from "lucide-react";
import Link from "next/link";
import avatar from "../../../../public/assets/avatar.png";
import { useRouter } from "next/navigation";
import { userAuthStore } from "../store/userAuthStore";

const UserDesktopTemplate = ({ user }: { user: UserData }) => {

  const { logout } = userAuthStore()
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const handleLogout = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    try {
      await logout();
      setIsOpen(false);
      router.push('/auth/login');
      router.refresh();
    } catch (error) {
      console.log("Logout error:", error);
    }
  };
  return (
    <div className="flex items-center justify-between w-full gap-3">
      <p className="text-gray-800 dark:text-white">{user?.username || user?.email}</p>
      <div className="relative">
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="lg:w-[30px] w-[25px] h-[25px] lg:h-[30px] relative rounded-full overflow-hidden border-2 cursor-pointer focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-blue-500"
        >
          <Image
            src={user.profilePicture || avatar}
            alt={`${user.username}'s profile`}
            layout="fill"
            objectFit="cover"
          />
        </button>
        {isOpen && (
          <ul
            className="absolute right-0 z-10 mt-2 p-1 w-52 bg-white dark:bg-[#0A0A0A] border  shadow-lg rounded-lg overflow-hidden"
            onMouseLeave={() => setIsOpen(false)}
          >
            <li className="dark:border-gray-700">
              <Link
                href="/profile"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 dark:hover:bg-[#2F2F2F] rounded-md text-gray-800 dark:text-white"
              >
                <User className="w-4 h-4" />
                View Profile
              </Link>
            </li>
            <li className="dark:border-gray-700">
              <Link
                href="/home/settings"
                className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-md dark:hover:bg-[#2F2F2F] text-gray-800 dark:text-white"
              >
                <Settings className="w-4 h-4" />
                Settings
              </Link>
            </li>
            <li>
              <button
                onClick={handleLogout}
                className="w-full p-2 hover:bg-gray-100 dark:hover:bg-[#2F2F2F] rounded-md text-gray-800 dark:text-white cursor-pointer"
              >
                <div className="flex items-center gap-2">
                  <LogOut className="w-4 h-4" />
                  Logout
                </div>
              </button>
            </li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default UserDesktopTemplate;
