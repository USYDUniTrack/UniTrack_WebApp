"use client"

import { Container, Stack, Card, CardContent, Typography, Button, Box } from '@mui/material';
import Image from 'next/image';
import { BsFillCalendarEventFill, BsFillCalendar2Fill } from 'react-icons/bs';
import { AiFillRead } from 'react-icons/ai';
import React from 'react';

export default function Page() {
  return (
    <Box sx={{ display: 'flex' }}>
      <div className="HomePageWrapper" style={{ flex: 1 }}>
        <div className="headingContentWrapper">
          <Typography sx={{ textAlign: 'center', fontWeight: 600, fontSize: 60, marginBottom: 30, marginLeft: 9, lineHeight: 1.2 }}>Mapping your <br />academic<br /> journey at <br />USYD.</Typography>
          {/* <Typography sx={{ textAlign: "center", fontSize: 20, marginTop: 5 }}>Dummy text</Typography> */}
          <Image src="/Amigos_Standing.png" alt="Amigos Standing" id="standing2" width={210} height={325} />
        </div>
      </div>
      <Box sx={{ backgroundColor: '#DD432B', flex: 2, marginLeft: 10, width: 1210, height: 823 }}>
        <Box sx={{ backgroundColor: '#FFF', flex: 1, marginLeft: 44, marginTop:15, width: 437, height: 603, flexShrink: 0, borderRadius: 5  }}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button variant="contained" sx={{ marginTop: 55, marginBottom: 10, width: 200, backgroundColor: "#DD432B" }}>Sign In</Button>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

