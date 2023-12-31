"use client";

import { Container, Stack, Card, CardContent, Typography, Button, Box, GlobalStyles } from '@mui/material';
import Image from 'next/image';
import { BsFillCalendarEventFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import { useRouter } from 'next/navigation'

export default function Page() {
    const router = useRouter();

    return (
        <div className="HomePageWrapper">
            <div className="headingContentWrapper">
                <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 80, marginTop: 10}}>Mapping your academic<br/>journey at USYD.</Typography>
                <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 25, marginTop: 2 }}>Navigating Success, One Course at a Time.</Typography>
                <Box sx={{ display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" sx={{ marginTop: 5, marginBottom: 10, width: 200, backgroundColor: "#DD432B", marginRight: 4 }} onClick={() => router.push('/signIn')}>Sign In</Button>
                    <Button variant="outlined" sx={{ marginTop: 5, marginBottom: 10, width: 200 }} onClick={() => router.push('/units')}>Continue as guest</Button>
                </Box>
                <Image src="/Amigos_Standing.png" alt="Amigos Standing" id="standing" width={345} height={500}/>
                <Image src="/Amigos_Planner.png" alt="Amigos Planner" id="planner" width={220} height={210}/>
            </div>
            <div className="bottomContentWrapper">
                <Stack direction="row" spacing={10} alignItems="center">
                    <Stack direction="column">
                        <Typography sx={{ color: 'white', fontSize: 40, fontWeight: 700, width: 600 }}>Features</Typography>
                        <Typography sx={{ color: 'white', marginTop: 1, fontSize: 20, width: 600 }}>Start your academic adventure with confidence, armed with the right tools to make the most out of your time at USYD.</Typography>
                    </Stack>

                    <Card sx={{ width: 250, height: 265, borderRadius: 10, display: "flex", alignItems: "center" }}>
                        <CardContent>
                            <Stack direction="column" alignItems="center">
                                <BsFillCalendarEventFill size="40px"/>
                                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginTop: 1}}>My Timetable</Typography>
                                <Typography sx={{ fontSize: 20, textAlign: "center" }}>Easy viewing, planning, and editing</Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ width: 250, height: 265, borderRadius: 10, display: "flex", alignItems: "center" }}>
                        <CardContent>
                            <Stack direction="column" alignItems="center">
                                <BsFillCalendar2Fill size="40px"/>
                                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginTop: 1 }}>Degree Plan</Typography>
                                <Typography sx={{ fontSize: 20, textAlign: "center" }}>Effortless and intuitive degree planning</Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ width: 250, height: 265, borderRadius: 10, display: "flex", alignItems: "center" }}>
                        <CardContent>
                            <Stack direction="column" alignItems="center">
                                <AiFillRead size="50px"/>
                                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginTop: 1 }}>Units</Typography>
                                <Typography sx={{ fontSize: 20, textAlign: "center" }}>Clear and concise information for each unit</Typography>
                            </Stack>
                        </CardContent>
                    </Card>
                </Stack>
            </div>
        </div>
    )
    
}
