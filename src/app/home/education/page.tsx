"use client";

import React, { useContext } from "react";
import { UserContext } from "@/contexts/userContext";
import { BookOpen, Clock, GraduationCap, Target, Trophy } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Loading from "@/components/Loader";

const DashboardPage = () => {
  const user = useContext(UserContext);

  if (!user) {
    return <Loading />;
  }

  const getSkillLevel = () => {
    if (user.expert) return "Expert";
    if (user.amateur) return "Amateur";
    if (user.beginner) return "Beginner";
    return "Not Set";
  };

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      {/* <aside className="hidden sm:flex fixed dark:bg-[#0A0A0A] bg-white w-56 h-screen pt-14 border-r">
        <SideNavbar />
      </aside> */}

      {/* Main Content */}
      <div className="flex-1 sm:ml-56">
        {/* Top spacing for navbar */}
        <div className="h-16" />

        <div className="px-4 sm:px-6 py-6 max-w-7xl mx-auto">
          <div className="space-y-6">
            {/* Start Section */}
            <div className="rounded-md border p-4 sm:p-6">
              <h1 className="mb-4 text-lg sm:text-xl">
                Welcome Back, {user.firstName}!
              </h1>
              <div className="flex items-center gap-4">
                {user && 
                <Avatar className="h-16 w-16">
                  <AvatarImage
                    className="h-full w-full object-cover rounded-full"
                    src={user?.profilePicture}
                    alt={`${user?.firstName} ${user?.lastName}`}
                  />
                  <AvatarFallback>
                    {user?.firstName[0]}
                    {user?.lastName[0]}
                  </AvatarFallback>
                </Avatar>
                }
                <div>
                  <h2 className="text-base sm:text-lg font-semibold">
                    @{user?.username}
                  </h2>
                  <div className="flex items-center gap-2">
                    <div
                      className={`flex items-center gap-1 text-sm font-bold p-1 px-2 rounded-md`}
                    >
                      <GraduationCap className="h-5 w-5" />
                      <span>{getSkillLevel()}</span>
                    </div>
                    {user?.isVerified && (
                      <RiVerifiedBadgeFill className="h-5 w-4 text-blue-500" />
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { title: "Study Hours", value: 0, icon: <Clock /> },
                { title: "Courses", value: 0, icon: <BookOpen /> },
                { title: "Achievements", value: 0, icon: <Trophy /> },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="rounded-md border p-4 sm:p-6 flex items-center justify-between"
                >
                  <div>
                    <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                      {stat.title}
                    </p>
                    <h3 className="text-lg sm:text-2xl font-bold mt-1">
                      {stat.value}
                    </h3>
                  </div>
                  <div className="h-8 w-8 text-blue-500">{stat.icon}</div>
                </div>
              ))}
            </div>

            {/* Current Goals */}
            <div className="rounded-md border p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Target className="h-5 w-5" />
                <h2 className="text-base sm:text-lg font-semibold">
                  Current Goals
                </h2>
              </div>
              <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400 text-center">
                <p>No active goals set. Start by setting your first learning goal!</p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="rounded-md border p-4 sm:p-6">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="h-5 w-5" />
                <h2 className="text-base sm:text-lg font-semibold">
                  Recent Activity
                </h2>
              </div>
              <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400 text-center">
                <p>No recent learning activity. Start learning to see your progress!</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;

