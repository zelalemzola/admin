"use client"
import React, { useState } from 'react'
import { Nav } from './ui/nav'
import { ChevronLeft, ChevronRight, LayoutDashboard, Settings, ShoppingCart, UsersRound } from 'lucide-react'
import { Button } from './ui/button'
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,

} from "@react-hook/window-size"

const SideNavbar = () => {
  const [isCollapsed,setIscollapsed]=useState(false);
  const toggleSidebar=()=>{
     setIscollapsed(!isCollapsed);

  }
  const onlywidth=useWindowWidth();
  const mobileWidth=onlywidth<768;
  return (
    <div className='relative min-w-[80px] border-r px-3 pb-10 pt-24 '>
    {!mobileWidth &&
    (<div className='absolute right-[-20px] top-7'>
    <Button variant='secondary' className="rounded-full p-2" onClick={toggleSidebar}>
    {isCollapsed?<ChevronRight/>:<ChevronLeft/>}
    </Button>
    </div>
    )}
      <Nav
            isCollapsed={mobileWidth?true:isCollapsed}
            links={[
              {
                title: "Dashboard",
                href:"/",
                icon: LayoutDashboard,
                variant: "default",
              },
              {
                title: "Users",
                href:"/users",
                icon: UsersRound,
                variant: "ghost",
              },
              {
                title: "Orders",
                href:"/orders",
                icon: ShoppingCart,
                variant: "ghost",
              },
              {
                title: "Settings",
                href:"/settings",
                icon: Settings,
                variant: "ghost",
              },
             
            ]}
          />
    
    </div>
  )
}

export default SideNavbar