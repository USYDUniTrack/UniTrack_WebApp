"use client";

import Image from 'next/image'
import NavigationBar from './NavigationBar';
import SelectionBar from './SelectionBar'
// import Timetable from './Timetable';
// import Tree from './Tree';

import { usePathname } from "next/navigation"

export default function navBarLayout({children}) {
  const pathname = usePathname()
  const condition = pathname === "/units"

  return (
      <>
          <div className='NavigationBarWrapper'>
              <NavigationBar />
              <div style={{}}>
                  {condition ? <SelectionBar /> : <></>}
              </div>
          </div>
          <div className="pageContentWithNavBar">
              {children}
          </div>
      </>
  )
}

