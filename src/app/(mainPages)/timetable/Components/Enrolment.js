"use client"

import React from 'react';
import { Box, Button } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Edit } from '@mui/icons-material';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Preferences from './Preferences.js'

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
              <Popup 
                modal
                className="my-popup"
                trigger={
                  <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between', marginBottom: '10px' }}>
                  <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Lec </Box>
                  <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                  </Button>

                } 
                position="right center"> 
                <Preferences />

             </Popup>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Prac </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
            </div>

            <div className='enrolUnits'>
                <h5 className='COMP3419'> COMP3419 </h5>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Lec </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Prac </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
            </div>

            <div className='enrolUnits'>
                <h5 className='ISYS2120'> ISYS2120 </h5>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Lec </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Lab </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
            </div>

            <div className='enrolUnits'>
                <h5 className='COMP3520'> COMP3520 </h5>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between', marginBottom: '10px' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Lec </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
                <Button variant="contained" sx={{ backgroundColor: 'white', color: 'black', textTransform: 'none', fontSize: '17px', width: 240, justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'flex', alignItems: 'center'}}><CheckCircleIcon sx={{ color: '#8CC159', marginRight: 2}}/> Prac </Box>
                    <EditIcon sx={{ fontSize: '20px', color: '#666666'}}/>
                </Button>
            </div>

        </Box>

    );
}

export default Enrolment;
