"use client";

import { Typography, Link } from '@mui/material';
import React from 'react';
import getData from '@/src/firebase/firestore/getData';
import snapshotToArray from '@/src/firebase/firestore/snapshotToArray';

const UnitDescription = (props) => {

    const getUnits = async () => {
        const res = await getData('units', 'all');
        if (res.error) {
            console.log('something went wrong');
        }
        else {
            console.log('inside getUnits\n' + res.list);
        }
        return res.list
    }

    return (<>
        <Typography sx={{ color: '#DD432B', fontSize: 25, fontWeight: 700 }}>COMP2017: Systems Programming</Typography>
        <Typography sx={{ fontSize: 15 }}>Computer Science | 6 credit points</Typography>
        <Typography sx={{ fontSize: 15, fontWeight: 700, marginTop: 0.5 }}>Semester 1</Typography>
        <hr className='BottomBorderLine' />
        <Typography sx={{ marginBottom: 2 }}>
            In this unit of study, elementary methods for developing robust, efficient, and re-usable software will be covered. The unit is taught in C, in a Unix environment. Specific coding topics include memory management, the pragmatic aspects of implementing data structures such as lists and hash tables and managing concurrent threads. Debugging tools and techniques are discussed and common programming errors are considered along with defensive programming techniques to avoid such errors. Emphasis is placed on using common Unix tools to manage aspects of the software construction process, such as version control and regression testing. The subject is taught from a practical viewpoint and it includes a considerable amount of programming practice.
        </Typography>
        <Typography className='UnitDescriptionNotes' sx={{ fontWeight: 700 }}>
            Prohibitions: <Link href="https://cusp.sydney.edu.au/students/view-unit-page/uos_id/122888" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP2129</Link>
            &nbsp;or <Link href="https://www.sydney.edu.au/units/COMP9017" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP9017</Link>
            &nbsp;or <Link href="https://cusp.sydney.edu.au/students/view-unit-page/alpha/COMP9129" sx={{ color: '#DD432B', fontWeight: 700 }} underline='hover'>COMP9129</Link>
        </Typography>
        <br />
    </>)
}

export default UnitDescription;
