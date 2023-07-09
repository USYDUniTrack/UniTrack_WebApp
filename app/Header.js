"use client";

import React from 'react'
import {AppBar,IconButton, Toolbar, styled, Box, Typography} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Image from 'next/image';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    alignItems: 'flex',
}));

export const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static"
            sx={{
                background: "#F0EEEE",
                boxShadow: 'none',
            }}
        >
            <StyledToolbar>
                <Image src="/usyd_logo.png" alt="usyd logo image" width={130} height={40}/>
                <Typography sx={{ flexGrow: 1}}>
                </Typography>
                <IconButton size="large" aria-label="search" color="black">
                    <SearchIcon />
                </IconButton>
            </StyledToolbar>
        </AppBar>
    </Box>
  )
}

export default Header;
