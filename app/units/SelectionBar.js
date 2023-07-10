"use client";

import { Accordion, AccordionDetails, AccordionSummary, Typography, Link, Box } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SelectionBar = () => {

    return(
        <div className='SelectionBar'>
            <TuneIcon />
            <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}> Filters </Typography>
        </div>
    )
}

export default SelectionBar;
