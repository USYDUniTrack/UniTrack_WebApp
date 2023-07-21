"use client";

import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Typography, Link, Box } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'

const UnitOutline = () => {
    return(<>
        <Typography sx={{ fontWeight: 700, fontSize: '20px', marginTop: 5 }}>Unit Outline</Typography>
        <hr className='BottomBorderLine' />
        <Typography sx={{ marginBottom: 2 }}>Unit outlines will be available 2 weeks before the first day of teaching for the relevant session.</Typography>
        <Accordion sx={{ marginBottom: 2 }}>
            <AccordionSummary expandIcon={ <ExpandMoreIcon /> }>
                <Typography>Current Year</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2023-S1C-ND-RE" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 1, 2023 [Normal Day] - Remote</Link>
                    <Box sx={{ marginBottom: 2 }} />
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2023-S1C-ND-CC" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 1, 2023 [Normal Day] - Camperdown/Darlington, Sydney</Link>
                </Box>
            </AccordionDetails>
        </Accordion>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Previous Years</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Box>
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2020-S1C-ND-CC" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 1, 2020 [Normal Day] - Camperdown/Darlington, Sydney</Link>
                    <Box sx={{ marginBottom: 2 }} />
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2020-S2C-ND-CC" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 2, 2020 [Normal Day] - Camperdown/Darlington, Sydney</Link>
                    <Box sx={{ marginBottom: 2 }} />
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2021-S1C-ND-RE" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 1, 2021 [Normal Day] - Remote</Link>
                    <Box sx={{ marginBottom: 2 }} />
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2022-S1C-ND-CC" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 2, 2022 [Normal Day] - Camperdown/Darlington, Sydney</Link>
                    <Box sx={{ marginBottom: 2 }} />
                    <Link href="https://www.sydney.edu.au/units/COMP2017/2022-S1C-ND-RE" underline='hover' sx={{color: '#DD432B', fontWeight: 700}}>Semester 1, 2022 [Normal Day] - Remote</Link>
                </Box>
            </AccordionDetails>
        </Accordion>
        <br />
    </>)
}

export default UnitOutline;
