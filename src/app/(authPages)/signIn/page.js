"use client"

import React from 'react';
import { Button, TextField, Typography, Checkbox, Link, Grid, Box, Container, InputLabel, Stack } from '@mui/material';
import Image from 'next/image';

export default function Page() {
  return (
    <Stack direction="row">
      <Box sx={{ width: '30vw' }}>
        <Typography sx={{ textAlign: 'center', fontWeight: 600, fontSize: 60, marginTop: '150px', lineHeight: '80px' }}>Mapping your <br />academic<br /> journey at <br />USYD.</Typography>
        <Image src="/Amigos_Standing.png" alt="Amigos Standing" id="standing2" width={210} height={325} />
      </Box>
      <Box
        sx={{
          backgroundColor: '#E46955',
          width: '70vw',
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <Box
          sx={{
            backgroundColor: '#FFF',
            width: 437,
            height: 603,
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}
        >
          <SignIn />
        </Box>
      </Box>
    </Stack>
  )
}

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack direction="column" spacing={5}>
            <Box>
                <InputLabel htmlFor="unikey" sx={{ color: 'black', fontSize: '18px' }}>Username (unikey)</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="unikey"
                  label="Your unikey"
                  name="unikey"
                  autoComplete="unikey"
                  autoFocus
                />
            </Box>
            <Box>
                <InputLabel htmlFor="password" sx={{ color: 'black', fontSize: '18px' }}>Password</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Your password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                />
            </Box>
              {/* <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              /> */}
            <Box>
              <Button type="submit" variant="contained" sx={{ width: 300, backgroundColor: '#DD342B', marginBottom: 2 }}>Sign In</Button>
              <Grid container direction="column" spacing={1}>
                  <Grid item xs>
                    <Link href="#" sx={{ fontSize: '15px', color: 'black', textDecorationColor: 'black' }}>Forgot password?</Link>
                  </Grid>
                  <Grid item xs>
                    <Link href="/signUp" sx={{ fontSize: '15px', color: 'black', textDecorationColor: 'black' }}>Sign Up</Link>
                  </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Container>
  );
}

