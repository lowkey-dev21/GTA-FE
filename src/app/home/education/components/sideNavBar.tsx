import React, { ReactNode } from 'react'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { GraduationCap, Inbox, LayoutDashboard, LibraryBig, UsersRound } from 'lucide-react'
import { cn } from "@/lib/utils"

interface NotificationI {
  title: string;
  type: string;
  count: number;
}

interface Navlink {
  title: string;
  link: string;
  icon: ReactNode;
  notification?: NotificationI;
}

const SideNavbar = () => {
  const navlinks: Navlink[] = [
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
  ]

  const pathname = usePathname()

  const formatNotificationCount = (count: number) => {
    return count > 99 ? "99+" : count.toString()
  }

  return (
    <section className="flex w-[500px] px-4 flex-col justify-between mt-8">
      <div className="w-full flex flex-col gap-5">
        {navlinks.map((item) => (
          <Link
            key={item.title}
            href={item.link}
            className={cn(
              "flex items-center justify-between gap-4 p-2 px-3 rounded-md transition-colors",
              "hover:bg-gray-200 dark:hover:bg-[#2F2F2F]",
              pathname === item.link && "bg-gray-200 dark:bg-[#2F2F2F]"
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
    </section>
  )
}

export default SideNavbar
