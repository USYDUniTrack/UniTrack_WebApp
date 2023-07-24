"use client";
import * as React from 'react';
import { Stack, Typography, Card, CardContent, CardActions, Button, Divider, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import DegreeRequirements from "./Components/DegreeRequirements"

export default function Page() {
  const options = [
      {label:"Bachelor of Advanced Computing", value: 'BAdvComp',
        totalCredit: 192,
        requirements: [
            {name: "Degree Core", color: "#FD8A8A"}, 
            {name: "Computer Science", color: "#A8D1D1"}, 
            {name: "Data Science", color: "#9EA1D4"}, 
            {name: "Elective", color: "#F2C6DE"}
        ]}
  ]

  const person = {
      name: "parth",
      degree: "BAdvComp",
      startingYear: 2021,
      unitsTaken: {
          // 2021: {{semName: "Semester2", units: []}}
      }
  }

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
                      labelId="temp2"u
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

                    
                </div>
            </div>
            <div className="DegreePlannerItemSelect">
                <DegreeRequirements degreeRequirements={options[0].requirements} completionInfo={{ percentage: 62.5, completedCredit: 120, totalCredit: options[0].totalCredit }}/>
            </div>
        </div>
  )
}
