'use client'
import React from 'react'

import SideNavbar from '../education/components/sideNavBar'

const EducationLayout = ({ children }: { children: any }) => {

  return (
    <div>
      <aside className=" fixed dark:bg-[#0A0A0A]  bg-white  w-[199px] h-screen sm:flex hidden pt-14   justify-center border-r " >
        <SideNavbar />
      </aside>
      {children}
    </div>
  )
}

export default EducationLayout
