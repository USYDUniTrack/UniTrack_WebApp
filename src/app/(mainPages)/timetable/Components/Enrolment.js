"use client"

import React from 'react';
import { Box } from '@mui/material';

const Enrolment = () => {
    return (

        <Box className='enrolmentColumn'
            sx={{
                backgroundColor: '#F0EEEE',
                height: '700px',
                width: '238px',
                borderRadius: '15px',
                padding: '15px 27px' 
            }} >

            <div className='enrolContent'>
                <h3>Enrolment</h3>
                <p>Semester 2</p>
            </div>

            <div className='enrolUnits'>
                <h5 className='COMP2222'> COMP2222 </h5>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Lec </div> <img className='arrow' src='/Arrow.png'/> </div>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Prac </div> <img className='arrow' src='/Arrow.png'/> </div>
            </div>

            <div className='enrolUnits'>
                <h5 className='COMP3419'> COMP3419 </h5>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Lec </div> <img className='arrow' src='/Arrow.png'/> </div>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Prac </div> <img className='arrow' src='/Arrow.png'/> </div>
            </div>

            <div className='enrolUnits'>
                <h5 className='ISYS2120'> ISYS2120 </h5>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Lec </div> <img className='arrow' src='/Arrow.png'/> </div>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Prac </div> <img className='arrow' src='/Arrow.png'/> </div>
            </div>

            <div className='enrolUnits'>
                <h5 className='COMP3520'> COMP3520 </h5>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Lec </div> <img className='arrow' src='/Arrow.png'/> </div>
                <div className='enrolUnitsButtons'> <div><img className='check' src='/V2.png'/> Prac </div> <img className='arrow' src='/Arrow.png'/> </div>
            </div>

        </Box>

    );
}

export default Enrolment;
