"use client"

import UnitDescription from './UnitDescription';
import Reviews from './Reviews';
import VerticalLinearStepper from './steps';
import UnitOutline from './UnitOutline';
import Timetable from './Timetable';
// import Tree from './Tree';
import { usePathname } from 'next/navigation';


export default function Unit() {
    
    const unit = usePathname().split("/").slice(-1);
    // console.log("unit is: " + unit);


    return (
        <>
        <div className='centerContentWrapper'>
        <UnitDescription unit={unit} />
        <Timetable unit={unit} />
        <UnitOutline unit={unit} />
        <Reviews unit={unit} />
        </div>
        </>
    )
}

