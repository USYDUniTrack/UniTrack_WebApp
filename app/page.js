"use client";

import { Container, Stack, Card, CardContent, Typography, Button, Box } from '@mui/material';
import { BsFillCalendarEventFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';

export default function page() {
    return (
        <>
            <div className="headingContentWrapper">
                <Typography sx={{ textAlign: "center", fontWeight: 700, fontSize: 80, marginTop: 10}}>Mapping your academic<br/>journey at USYD.</Typography>
                <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>Dummy text</Typography>
                <Box sx={{ display: "flex", justifyContent: "center"}}>
                    <Button variant="contained" sx={{ marginTop: 5, marginBottom: 10, width: 180, backgroundColor: "#DD432B" }}>Sign In</Button>
                </Box>
                {/* <Image src="/Amigos_Standing.png" alt="Amigos Standing" width={244} height={354}/> */}
            </div>
            <div className="bottomContentWrapper">
                <Stack direction="row" spacing={10}>
                    <Container width={400}>
                        <Typography sx={{ color: 'white', fontSize: 40, fontWeight: 700, width: 400 }}>Features</Typography>
                        <Typography sx={{ color: 'white', fontSize: 20, width: 400 }}>Dummy text</Typography>
                    </Container>

                    <Card sx={{ maxWidth: 220, maxHeight: 230 }}>
                        <CardContent>
                            <Stack direction="column" alignItems="center">
                                <BsFillCalendarEventFill size="40px"/>
                                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginTop: 1}}>My Timetable</Typography>
                                <Typography sx={{ fontSize: 20, textAlign: "center" }}>Easy viewing, planning, and editing</Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 220, maxHeight: 230 }}>
                        <CardContent>
                            <Stack direction="column" alignItems="center">
                                <BsFillCalendar2Fill size="40px"/>
                                <Typography sx={{ fontSize: 20, fontWeight: 700, textAlign: "center", marginTop: 1 }}>Degree Plan</Typography>
                                <Typography sx={{ fontSize: 20, textAlign: "center" }}>Effortless and intuitive degree planning</Typography>
                            </Stack>
                        </CardContent>
                    </Card>

                    <Card sx={{ maxWidth: 220, maxHeight: 230 }}>
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
        </>
    )
    
}
