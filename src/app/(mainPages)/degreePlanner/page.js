"use client";
import { Stack, Typography, Card, CardContent, CardActions, Button, Divider } from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export default function Page() {
  return (
        <div>
            <h2>Degree Planner in Progress</h2>
            <Preference />
        </div>
  )
}

const Preference = () => {
  return (
    <div>
      <Stack direction="row" spacing={3} sx={{  backgroundColor: "#F0EEEE", width: 810, height: 420, borderRadius: 10, justifyContent: 'center', marginTop: '50px' }}>
        {/* Left part */}
        <Stack direction="column" spacing={4} sx={{ marginTop: '30px' }}>
          <div className='prefHeader'>
            <Typography sx={{ fontWeight: 700, fontSize: 15 }}>COMP2022</Typography>
            <Typography sx={{ fontWeight: 700, fontSize: 15 }}>Models of Computation</Typography>
            <Typography sx={{ fontSize: 15 }}>Lecture</Typography>
          </div>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 15 }}>
            <AccessTimeFilledIcon fontSize='20px'/>&nbsp;&nbsp;&nbsp;2 hours
          </Typography>
          <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 15 }}>
            <CalendarTodayIcon fontSize='20px'/>&nbsp;&nbsp;&nbsp;3/8-21/9, 5/10-2/11
          </Typography>
        </Stack>

        <div style={{ display: 'flex', alignItems: 'center' }}>
          <Divider variant="middle" color="#B4B2B2" orientation="vertical" sx={{ width: '0.7px', height: "90%" }} />
        </div>
        
        {/* Right part */}
        <Stack direction="column" spacing={3}>
          <Card sx={{ minWidth: 529, borderRadius: 5, marginTop: '30px' }}>
            <CardContent>
              <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>Activity 01</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 500, color: '#808080' }}>258 free</Typography>
              </Stack>
              <Typography sx={{ fontSize: 15 }}>Thursday, 14:00-16:00pm</Typography>
              <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 15, maxWidth: 360 }}>
                  <LocationOnIcon fontSize='20px'/>&nbsp;&nbsp;Remote - online delivery
                </Typography>
                <CardActions>
                  <Button size="small" sx={{backgroundColor: '#DD432B', color: 'white', width: 94, marginTop: 'auto'}}>Select</Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>

          <Card sx={{ minWidth: 529, borderRadius: 5 }}>
            <CardContent>
              <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: 15, fontWeight: 700 }}>Activity 02</Typography>
                <Typography sx={{ fontSize: 15, fontWeight: 500, color: '#808080' }}>0 free</Typography>
              </Stack>
              <Typography sx={{ fontSize: 15 }}>Thursday, 14:00-16:00pm</Typography>
              <Stack direction='row' sx={{ justifyContent: 'space-between' }}>
                <div>
                  <Typography sx={{ display: 'flex', alignItems: 'center', fontSize: 15, maxWidth: 360 }}>
                    <LocationOnIcon fontSize='20px'/>&nbsp;&nbsp;F19.03.315.
                  </Typography>
                  <Typography sx={{ fontSize: 15, maxWidth: 360, marginLeft: '23px' }}>
                    Eastern Avenue Auditorium and Theatre Complex.
                    Eastern Avenue Lecture Theatre 315
                  </Typography>
                </div>
                <CardActions>
                  <Button size="small" sx={{backgroundColor: '#8CC159', color: 'white', width: 94, marginTop: 'auto'}}>Allocated</Button>
                </CardActions>
              </Stack>
            </CardContent>
          </Card>
        </Stack>
      </Stack>
    </div>
  );
}