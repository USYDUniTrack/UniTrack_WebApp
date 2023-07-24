"use client"

import React from 'react';
import { MenuItem, Select, Button, TextField, Typography, Checkbox, Link, Grid, Box, Container, InputLabel, Stack } from '@mui/material';
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
          <SignUp />
        </Box>
      </Box>
    </Stack>
  )
}

const SignUp = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  const options = [
      {label:"Bachelor of Advanced Computing", value: 'BAdvComp'}
  ]

  const [degree, setDegree] = React.useState('');

  const handleChange = (event) => {
    setDegree(event.target.value);
  };

  return (
      <Container component="main" maxWidth="xs">
        <Box component="form" onSubmit={handleSubmit} noValidate sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Stack direction="column" spacing={3}>
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
                <InputLabel htmlFor="email" sx={{ color: 'black', fontSize: '18px' }}>Email</InputLabel>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="unikey"
                  label="Your Uni Email"
                  name="email"
                  autoComplete="email"
                  autoFocus
                />
            </Box>
            <Box>
                <InputLabel htmlFor="email" sx={{ color: 'black', fontSize: '18px' }}>Degree</InputLabel>
                <Select
                  margin="normal"
                  id="degree"
                  value={degree}
                  onChange={handleChange}
                  fullWidth
                  autoFocus
                  required
                  label="Your Uni Degree"
                >
                {options.map((item) => {
                        return (
                          <MenuItem value={item.value} key={item.value}>
                            {item.label}
                          </MenuItem>
                        );
                      })} 
                 </Select>
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
              <Button type="submit" variant="contained" sx={{ width: 300, backgroundColor: '#DD342B', marginBottom: 2 }}>Register</Button>
              <Grid container direction="column" spacing={1}>
                  <Grid item xs>
                    <Link href="/signUp" sx={{ fontSize: '15px', color: 'black', textDecorationColor: 'black' }}>Sign In</Link>
                  </Grid>
              </Grid>
            </Box>
          </Stack>
        </Box>
      </Container>
  );
}


