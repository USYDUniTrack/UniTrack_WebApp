"use client";

import React from 'react';
import { Typography, Box, Grid, Button} from '@mui/material';

const Timetable = () => {
    return(<>
        <Typography sx={{ fontWeight: 700, fontSize: '20px' }}>Timetable</Typography>
        <hr className='BottomBorderLine' />
        <br />
        {/* Timetable heading */}
        <Box sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(5, 1fr)',
                backgroundColor: '#D9D9D9',
                borderRadius: 5,
                gridTemplateRows: 'repeat(2, 25px)',
                marginBottom: 1,
                textAlign: 'center'
            }}>
            <Typography sx={{ marginTop: 1.5, fontWeight: 700 }}>Mon</Typography>
            <Typography sx={{ marginTop: 1.5, fontWeight: 700 }}>Tue</Typography>
            <Typography sx={{ marginTop: 1.5, fontWeight: 700 }}>Wed</Typography>
            <Typography sx={{ marginTop: 1.5, fontWeight: 700 }}>Thu</Typography>
            <Typography sx={{ marginTop: 1.5, fontWeight: 700 }}>Fri</Typography>
        </Box>
        {/* Timetable days */}
        <Box sx={{ border: 1, borderRadius: 5, borderColor: '#D9D9D9' }}>
            <br />
            <Grid container spacing={1}>
                {/* Row 1 */}
                <Grid item xs={2.3} marginLeft={3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3, minWidth: '123px' }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>8:00am - 10:00am</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3, minWidth: '123px' }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>8:00am - 10:00am</Typography>
                    </Button>
                </Grid>
                <Grid item xs={7}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3, minWidth: '123px' }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>8:00am - 10:00am</Typography>
                    </Button>
                </Grid>
                {/* Row 2 */}
                <Grid item xs={2.3} marginLeft={3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>10:00am - 12:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>10:00am - 12:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>10:00am - 12:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={4.6}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>10:00am - 12:00pm</Typography>
                    </Button>
                </Grid>
                {/* Row 3 */}
                <Grid item xs={2.3} marginLeft={3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>12:00pm - 14:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>12:00pm - 14:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>12:00pm - 14:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>12:00pm - 14:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#DD432B', opacity: '80%', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lecture</Typography>
                        <Typography fontSize={12}>12:00pm - 14:00pm</Typography>
                    </Button>
                </Grid>
                {/* Row 4 */}
                <Grid item xs={2.3} marginLeft={3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>14:00pm - 16:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>14:00pm - 16:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={2.3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>14:00pm - 16:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={4.6}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>14:00pm - 16:00pm</Typography>
                    </Button>
                </Grid>
                {/* Row 5 */}
                <Grid item xs={2.3} marginLeft={3}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>16:00pm - 18:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={4.6}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>16:00pm - 18:00pm</Typography>
                    </Button>
                </Grid>
                <Grid item xs={4.6}>
                    <Button sx={{ backgroundColor: '#2B88DD', color: 'white', display: 'block', textAlign: 'left', textTransform: 'none', borderRadius: 3 }}>
                        <Typography sx={{fontSize: 12, fontWeight: 700}}>Lab</Typography>
                        <Typography fontSize={12}>16:00pm - 18:00pm</Typography>
                    </Button>
                </Grid>
            </Grid>
            <br />
        </Box>

        <br />
    </>)
}

export default Timetable;