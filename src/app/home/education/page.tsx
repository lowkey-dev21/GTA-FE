"use client";

import React from 'react'
import { UserContext } from "@/contexts/userContext"
import { useContext, useState } from "react"
import { BookOpen, Clock, GraduationCap, Target, Trophy } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Skeleton } from "@/components/ui/skeleton"
import { RiVerifiedBadgeFill } from "react-icons/ri";
import { Calendar } from "@/components/ui/calendar"


const DashboardPage = () => {

  const [date, setDate] = useState<Date | undefined>(new Date())
  const user = useContext(UserContext)

  if (!user) {
    return <DashboardSkeleton />
  }

  const getSkillLevel = () => {
    if (user.expert) return "Expert"
    if (user.amateur) return "Amateur"
    if (user.beginner) return "Beginner"
    return "Not Set"
  }


  return (
    <section className="flex-1 flex pt-14 pb-14 flex-col">
      {/* Top spacing for navbar */}
      <div className="h-16" />

      {/* Main content container */}
      <div className="flex-1 flex justify-center px-4">
        <div className="w-full max-w-[1200px] space-y-6">
          {/* Welcome Section */}
          <div className=" dark:bg-[#2F2F2F] bg-gray-200  rounded-lg p-6">
            <h1 className="mb-4">Welcome Back, {user.firstName}!</h1>
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.profilePicture} alt={`${user.firstName} ${user.lastName}`} />
                <AvatarFallback>{user.firstName[0]}{user.lastName[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h2 className="text-xl ">@{user.username}</h2>
                <div className="flex items-center  ">
                  <div className=' flex items-center gap-1 text-zinc-500 dark:text-zinc-400  p-1 px-2 rounded-md  '>
                    <GraduationCap className="h-4 w-4" />
                    <span>{getSkillLevel()}</span></div>
                  {user.isVerified && (
                    <RiVerifiedBadgeFill className="h-4 w-4 text-blue-500" />
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className=" dark:bg-[#2F2F2F] bg-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">Study Hours</p>
                  <h3 className="text-2xl font-bold  mt-1">0</h3>
                </div>
                <Clock className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            <div className=" dark:bg-[#2F2F2F] bg-gray-200 hover:bg-gray-100 bg-rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400 ">Courses</p>
                  <h3 className="text-2xl font-bold  mt-1">0</h3>
                </div>
                <BookOpen className="h-8 w-8 text-blue-500" />
              </div>
            </div>

            <div className=" dark:bg-[#2F2F2F] bg-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium  text-zinc-500 dark:text-zinc-400 ">Achievements</p>
                  <h3 className="text-2xl font-bold  mt-1">0</h3>
                </div>
                <Trophy className="h-8 w-8 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Current Goals */}
          <div className=" dark:bg-[#2F2F2F] bg-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Target className="h-5 w-5 " />
              <h2 className="text-lg font-semibold ">Current Goals</h2>
            </div>
            <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400 ">
              <p>No active goals set. Start by setting your first learning goal!</p>
            </div>
          </div>

          {/* Recent Activity */}
          <div className=" dark:bg-[#2F2F2F] bg-gray-200 rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <Clock className="h-5 w-5 " />
              <h2 className="text-lg font-semibold ">Recent Activity</h2>
            </div>
            <div className="flex items-center justify-center h-48 text-zinc-500 dark:text-zinc-400">
              <p>No recent learning activity. Start learning to see your progress!</p>
            </div>
          </div>

          {/* calender */}
          <div className=" dark:bg-[#2F2F2F] w-[300px]  bg-gray-200 rounded-lg p-6">
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="w-full rounded-md border"
            />

          </div>



        </div>
      </div>
    </section>
  )
}

// Loading skeleton component
const DashboardSkeleton = () => {
  return (
    <section className="flex-1 flex flex-col">
      <div className="h-16" />
      <div className="flex-1 flex justify-center px-4">
        <div className="w-full max-w-[1200px] space-y-6">
          <div className="bg-[#121212] rounded-lg p-6">
            <Skeleton className="h-8 w-64 bg-zinc-800 mb-4" />
            <div className="flex items-center gap-4">
              <Skeleton className="h-16 w-16 rounded-full bg-zinc-800" />
              <div className="space-y-2">
                <Skeleton className="h-6 w-48 bg-zinc-800" />
                <Skeleton className="h-4 w-32 bg-zinc-800" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-[#121212] rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-24 bg-zinc-800" />
                    <Skeleton className="h-8 w-16 bg-zinc-800" />
                  </div>
                  <Skeleton className="h-8 w-8 bg-zinc-800" />
                </div>
              </div>
            ))}
          </div>

          {[1, 2].map((i) => (
            <div key={i} className="bg-[#121212] rounded-lg p-6">
              <Skeleton className="h-8 w-48 bg-zinc-800 mb-4" />
              <div className="h-48 flex items-center justify-center">
                <Skeleton className="h-4 w-64 bg-zinc-800" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DashboardPage
