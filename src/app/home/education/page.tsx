"use client";

import React from 'react';
import { UserContext } from "@/contexts/userContext";
import { useContext } from "react";
import { BookOpen, Clock, GraduationCap, Target, Trophy } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RiVerifiedBadgeFill } from "react-icons/ri";
import Loading from '@/components/Loader';

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
    // Remove the section tag and adjust the container to account for sidebar
    <div className="sm:ml-[199px] min-h-screen bg-background">
      {/* Top spacing for navbar */}
      <div className="h-16" />

      {/* Main content container */}
      <div className="px-6 py-6 max-w-[1200px] mx-auto">
        <div className="space-y-6">
          {/* Welcome Section */}
          <div className="rounded-md border p-6">
            <h1 className="mb-4">Welcome Back, {user.firstName}!</h1>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage className={"z-[0]"} src={user?.profilePicture} alt={`${user?.firstName} ${user?.lastName}`} />
                <AvatarFallback>{user?.firstName[0]}{user?.lastName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl">@{user?.username}</h2>
                <div className="flex items-center">
                  <div className={`flex items-center gap-1 ${getSkillLevel()} font-bold p-1 px-2 rounded-md`}>
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-md border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Study Hours</p>
                  <h3 className="text-2xl font-bold mt-1">0</h3>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            <div className="rounded-md border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Courses</p>
                  <h3 className="text-2xl font-bold mt-1">0</h3>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            <div className="rounded-md border p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Achievements</p>
                  <h3 className="text-2xl font-bold mt-1">0</h3>
                </div>
                <Trophy className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Current Goals */}
          <div className="rounded-md border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Current Goals</h2>
            </div>
            <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400">
              <p>No active goals set. Start by setting your first learning goal!</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className="rounded-md border p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5" />
              <h2 className="text-lg font-semibold">Recent Activity</h2>
            </div>
            <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400">
              <p>No recent learning activity. Start learning to see your progress!</p>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
