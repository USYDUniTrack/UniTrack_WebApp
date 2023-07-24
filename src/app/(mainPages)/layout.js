"use client";

import Image from 'next/image'
import NavigationBar from './NavigationBar';
import SelectionBar from './SelectionBar'
// import Timetable from './Timetable';
// import Tree from './Tree';
import SyncCal from './Components/SyncCal';

import { usePathname } from "next/navigation"

export default function NavBarLayout({children}) {
  const pathname = usePathname()
  const condition = pathname === "/units"
  const condition2 = pathname === "/timetable"
  console.log(condition2)

  return (
      <>
          <div className='NavigationBarWrapper'>
              <NavigationBar />
              <div style={{}}>
                  {condition ? <SelectionBar /> : <></>}
                  {condition2 ? <SyncCal /> : <></>}
              </div>
          </div>
          <div className="pageContentWithNavBar">
              {children}
          </div>
      </>
  )
}

