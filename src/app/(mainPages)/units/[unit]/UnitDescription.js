"use client";

import { Typography, Link } from '@mui/material';
import React, { useState, useEffect } from "react";
import getData from '@/src/firebase/firestore/getData';
import snapshotToArray from '@/src/firebase/firestore/snapshotToArray';

const getUnitData = async (unitCode) => {
    const res = await getData('units', unitCode);
    if (res.error) {
        console.log('something went wrong');
    }
    else {
        console.log('inside getUnitData\n' + res.result);
    }
    return res.result
}

const UnitDescription = (props) => {

    const [jsonResults, setJsonResults] = useState([]);

    useEffect(() => {
        console.log(props.unit[0]);
        const unitData = getUnitData(props.unit[0]);
        unitData.then((res) => {
            console.log("inside useEffect in description " + res.data().code);
            setJsonResults(res.data());
        });
    }, [props.unit]);

    let prohibition_str = "";
    if (jsonResults.prohibitions) {
        // console.log(Object.keys(jsonResults.prohibitions).length);
        let i = 0;
        for (i = 0; i < jsonResults.prohibitions.length - 1; i++) {
            prohibition_str = prohibition_str.concat(jsonResults.prohibitions[i], " | ");
        }
        prohibition_str = prohibition_str.concat(jsonResults.prohibitions[i]);
    }


    return (<>
        <Typography sx={{ color: '#DD432B', fontSize: 25, fontWeight: 700 }}>{jsonResults.code}: {jsonResults.name}</Typography>
        <Typography sx={{ fontSize: 15 }}>Computer Science | 6 credit points</Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 700, marginTop: 0.5 }}>Semester 1</Typography>
        <hr className='BottomBorderLine' />
        <Typography sx={{ marginBottom: 2 }}>
            {jsonResults.overview}
        </Typography>
        <Typography className='UnitDescriptionNotes' sx={{ color: '#DD432B', fontWeight: 700 }}>
        {
            // Prohibitions: <Link href="https://cusp.sydney.edu.au/students/view-unit-page/uos_id/122888" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP2129</Link>
            // &nbsp;or <Link href="https://www.sydney.edu.au/units/COMP9017" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP9017</Link>
            // &nbsp;or <Link href="https://cusp.sydney.edu.au/students/view-unit-page/alpha/COMP9129" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP9129</Link>
            prohibition_str
        }
        </Typography>
        <br />
    </>)
}

export default UnitDescription;
