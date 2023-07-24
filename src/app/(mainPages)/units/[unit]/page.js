"use client"

import UnitDescription from './UnitDescription';
import Reviews from './Reviews';
import VerticalLinearStepper from './steps';
import UnitOutline from './UnitOutline';
import Timetable from './Timetable';
// import Tree from './Tree';
import { usePathname } from 'next/navigation';
import getData from '@/src/firebase/firestore/getData';
import snapshotToArray from '@/src/firebase/firestore/snapshotToArray';
import React, { useState, useEffect } from "react";

// const getUnitData = async (unitCode) => {
    //     const res = await getData('units', unitCode);
    //     if (res.error) {
        //         console.log('something went wrong');
        //     }
    //     else {
        //         console.log('inside getUnitData\n' + res.result);
        //     }
    //     return res.result
    // }

export default function Unit() {

    // const [jsonResults, setJsonResults] = useState({});
    const unit = usePathname().split("/").slice(-1);
    // console.log(unit[0]);

    // useEffect(() => {
        //     const unitData = getUnitData(unit[0]);
        //     unitData.then((res) => {
            //         setJsonResults({ ...jsonResults, data: res.data() });
            //     });
        // }, [unit, jsonResults]);

    // console.log("unit is: " + jsonResults.data);


    return (
        <>
        <div className='centerContentWrapper'>
        <UnitDescription unit={unit} />
        <Timetable />
        <UnitOutline />
        <Reviews />
        </div>
        </>
    )
}

