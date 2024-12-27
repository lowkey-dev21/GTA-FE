import React from "react";
import { UserData } from "../types/types";
import Image from "next/image";
import { User, Settings, LogOut } from "lucide-react"; // Importing icons
import Link from "next/link";
import { userAuthStore } from "../store/userAuthStore";
import avatar from "../../../../public/assets/avatar.png"

const UserDesktopTemplate = ({ user }: { user: UserData }) => {
  const { logout } = userAuthStore();



  return (
    <div className="flex  items-center justify-between w-full gap-3">
      <p className="text-gray-800 dark:text-white">{user.email}</p>

      {/* Dropdown for Profile Picture */}
      <div className="dropdown dropdown-end">
        {/* Profile Picture as Dropdown Trigger */}
        <div
          tabIndex={0}
          role="button"
          className=" lg:w-[30px] w-[25px] h-[25px] lg:h-[30px] relative rounded-full overflow-hidden border-2 cursor-pointer"
        >
          <Image
            src={user.profilePicture || avatar}
            alt={`${user.username}'s profile`}
            layout="fill"
            objectFit="cover"
          />
        </div>

        {/* Dropdown Menu */}
        <ul
          tabIndex={0}
          className=" lg:flex flex-col hidden dropdown-content menu  rounded-box p-2 w-52 
          shadow-[0_4px_6px_rgba(0,0,0,0.1),0_2px_4px_rgba(0,0,0,0.06)] 
          dark:shadow-[0_4px_6px_rgba(255,255,255,0.1),0_2px_4px_rgba(255,255,255,0.06)] 
          z-[10]"
        >
          <li>
            <Link href="/profile" className="flex items-center gap-2">
              <User className="w-4 h-4 " />
              View Profile
            </Link>
          </li>
          <li>
            <Link href="/settings" className="flex items-center gap-2">
              <Settings className="w-4 h-4 " />
              Settings
            </Link>
          </li>
          <li>
            <div onClick={() => logout()} className="flex items-center gap-2">
              <LogOut className="w-4 h-4" />
              Logout
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserDesktopTemplate;
