import React from "react";
import { BsFillCalendarEventFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { Button, Divider, Stack, Typography } from '@mui/material';
import { AiFillRead } from 'react-icons/ai';


const NavigationBar = () => {
    return (<>
        <div className="NavigationBarWrapper">
            <div className="NavigationBarDetails">
                <Typography sx={{fontSize: 17, fontWeight: 700, color: 'white'}}>John Doe</Typography>
                <Typography sx={{fontSize: 12, fontWeight: 400, color: 'white'}}>jdoe1234@uni.sydney.edu.au</Typography>
            </div>
                <div className="NavigationBarMenu">
                    <Stack spacing={2}>
                        <Button sx={{fontSize: '17px', color: '#FFF', fontWeight: 600, textTransform: 'none', minWidth: '200px', justifyContent: 'left' }}> 
                            &nbsp;<BsFillCalendarEventFill size='25px'/>&nbsp;&nbsp;Timetable
                        </Button>

                        <Button sx={{fontSize: '17px', color: '#FFF', fontWeight: 600, textTransform: 'none', minWidth: '200px', justifyContent: 'left' }}> 
                            &nbsp;<BsFillCalendar2Fill size='25px'/>&nbsp;&nbsp;Degree Plan
                        </Button>

                        <Divider color='white' sx={{ borderBottomWidth: 2 }}/>

                        <Button sx={{fontSize: '17px', color: '#FFF', fontWeight: 600, textTransform: 'none', minWidth: '200px', justifyContent: 'left' }}> 
                            &nbsp;<AiFillRead size='30px'/>&nbsp;&nbsp;Units
                        </Button>
                    </Stack>
                </div>
        </div>
    </>)
}

export default NavigationBar;