"use client";
import * as React from 'react';
import { Stack, Typography, Card, CardContent, CardActions, Button, Divider, FormControl, InputLabel, MenuItem, Select} from '@mui/material';
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import DegreeRequirements from "./Components/DegreeRequirements"
import DegreeUnit from "./Components/DegreeUnit"
import DegreeUnitBlank from "./Components/DegreeUnitBlank"

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
      startingYear: 2021
  }

  const [degree, setDegree] = React.useState('BAdvComp');

  const handleChange = (event) => {
    setDegree(event.target.value);
  };

  return (
        <div style={{ display: "flex", justifyContent: "space-between", flexDirection: "row", width: "100%"}}>
            <div className="DegreePlannerWrapper">
                <div className="DegreePlannerSubScreen">
                    <FormControl variant="standard" sx={{ top: "5px", m: 1, minWidth: 200, margin: 0, marginBottom: "20px" }}>
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

                    <div style={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2021</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1110", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [2], unitCode:"ELEC1601", unitName: "Introduction to Computer Systems", credits: 6, colours:["#FD8A8A"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"DATA1001", unitName: "Introduction to Data Science", credits: 6, colours:["#FD8A8A", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"MATH1021", unitName: "Calculus of One Variable", credits: 6, colours:["#FD8A8A"]}}/>

                        </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2022</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 1</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1113", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1111", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"MATH1002", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"IBUS2101", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>

                        </div>

                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1112", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"MATH1064", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"SOFT2412", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"DATA2002", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>

                        </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2023</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 1</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"COMP2123", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"COMP2017", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO2222", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"OLET1666", unitName: "Introduction to Programming", credits: 2, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>

                        </div>

                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"COMP2022", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"ISYS2120", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"COMP3419", unitName: "Introduction to Programming", credits: 6, colours:["#FD8A8A", "#A8D1D1", "#9EA1D4"]}}/>
                            <DegreeUnitBlank />

                        </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2024</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                        </div>

                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                        </div>
                    </div>

                    <div style={{ marginBottom: "15px" }}>
                        <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2025</Typography>
                        <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
                        <div className="DegreeUnitsWrapper">
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                            <DegreeUnitBlank />
                        </div>
                    </div>
                    
                </div>
            </div>
            <div className="DegreePlannerItemSelect">
                <DegreeRequirements degreeRequirements={options[0].requirements} completionInfo={{ percentage: 62.5, completedCredit: 120, totalCredit: options[0].totalCredit }}/>
            </div>
        </div>
  )
}
