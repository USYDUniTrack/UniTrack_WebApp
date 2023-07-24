"use client";
import * as React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, LinearProgress, Stack, Typography, Card, CardContent, CardActions, Button, Divider, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Page() {
  const options = [
      {label:"Bachelor of Advanced Computing", value: 'BAdvComp'}
  ]

  const [degree, setDegree] = React.useState('BAdvComp');

  const handleChange = (event) => {
    setDegree(event.target.value);
  };

  return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%"}}>
            <div className="DegreePlannerWrapper">
                <div className="DegreePlannerSubScreen">
                    <FormControl variant="standard" sx={{ m: 1, minWidth: 200, margin: 0, marginBottom: "20px" }}>
                    <InputLabel id="temp">Degree</InputLabel>
                    <Select
                      labelId="temp2"
                      id="temp3"
                      value={degree}
                      onChange={handleChange}
                      label="Degree"
                    >
                    {options.map((item) => {
                            return (
                              <MenuItem value={item.value} key={item.value}>
                                {item.label}
                              </MenuItem>
                            );
                          })} 
                     </Select>
                  </FormControl>

                    <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2021</Typography>
                    <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                    <div className="DegreeUnitsWrapper">
                        <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1110", unitName: "Introduction to Programming", credits: 6, colours:["green"]}}/>
                        <DegreeUnit unitInfo={{semesters: [2], unitCode:"ELEC1601", unitName: "Introduction to Computer Systems", credits: 6, colours:["lightblue", "red"]}}/>
                        <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"DATA1001", unitName: "Introduction to Data Science", credits: 6, colours:["lightblue", "red"]}}/>
                        <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"MATH1021", unitName: "Calculus of One Variable", credits: 6, colours:["red"]}}/>

                    </div>
                    
                </div>
            </div>
            <div className="DegreePlannerItemSelect">
                <DegreeRequirements degreeRequirements={[{name: "Major Core", color: "red"}, {name: "Degree Core", color: "lightblue"}]} completionInfo={{ percentage: 62.5, completedCredit: 120, totalCredit: 192 }}/>
            </div>
        </div>
  )
}


const DegreeUnit = ({unitInfo}) => {
    console.log(unitInfo);

    return (

        <div className="DegreeUnit">
            <div style={{ display: "flex", flexDirection: "row",  justifyContent: "space-between", width: "100%"}}>
                <Typography sx={{ fontWeight: 600, fontSize: 15 }}>{unitInfo.unitCode}</Typography>
                <div>
                    {unitInfo.colours.map((colour) => {
                        return (
                            <span className="unitDot" key={colour} style={{backgroundColor: colour}}/>
                        )
                    })}              

                </div>
            </div>

            <Typography sx={{ fontWeight: 400, fontSize: 15 }}> {unitInfo.unitName} </Typography>
            
            <div style={{ marginTop: "10px" }}>
                <Typography sx={{ fontWeight: 400, fontSize: 12, color: "rgba(0, 0, 0, 0.7)" }}> {unitInfo.credits} Credit Points </Typography>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start" }}>
                    {unitInfo.semesters.map((semester) => {
                        return (
                            <div className="unitSemester"> 
                                <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem {semester} </Typography>
                            </div>
                        )
                    })}              

                </div>
            </div>
            
            
        </div>
    )
}

const DegreeRequirements = ({completionInfo, degreeRequirements}) => {
    console.log(degreeRequirements)

    return (
        <div className="DegreeRequirements">
            <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", marginBottom: "2px"}}>
                <Typography sx={{ fontWeight: 400, fontSize: 14 }}>{completionInfo.percentage}% Planned</Typography>
                <Typography sx={{ fontWeight: 400, fontSize: 14 }}>{completionInfo.completedCredit}/{completionInfo.totalCredit} cp</Typography>
            </div>

            <LinearProgress variant="determinate" value={completionInfo.percentage} sx={{ marginBottom: "10px", borderRadius: "5px", color: "#DD432B", height: "9px" }} />
            {degreeRequirements.map(requirement => {

                return (
                  <Accordion key={requirement.name}>
                    <AccordionSummary
                      expandIcon={<ExpandMoreIcon />}
                      aria-controls="panel2a-content"
                      id="panel2a-header"
                    >
                      
                    <div style={{ display: "flex", alignItems: "center", flexDirection: "row"}}>
                        <span className="unitDot" key={requirement.name} style={{margin: "5px", backgroundColor: requirement.color }}/>
                        <Typography sx={{ fontWeight: 400, fontSize: 14  }}>{requirement.name}</Typography>
                    </div>
                    </AccordionSummary>
                    <AccordionDetails>

                    </AccordionDetails>
                  </Accordion>

                )
            })

            }

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
