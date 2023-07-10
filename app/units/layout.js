"use client";

import Image from 'next/image'
import './globals.css'
import Header from './Header';
import NavigationBar from './NavigationBar';
import SelectionBar from './SelectionBar'
// import Timetable from './Timetable';
// import Tree from './Tree';

import { usePathname } from "next/navigation"

export default function navBarLayout({children}) {
  const pathname = usePathname()
  const condition = pathname === "/units"

  return (
    <div className="App">
    <Header/>
      <div className='HomePageWrapper'>
        <div className='NavigationBarWrapper'>
          <NavigationBar />
          {condition ? <SelectionBar /> : <></>}
            
        </div>
        {children}
      </div>
    </div>
  )
}

