"use client";

import React, { useState, useEffect } from "react";
import { BorderColor, Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Stack, TextField, Typography, Link, Box, Autocomplete, AutocompleteRenderInputParams, InputAdornment } from '@mui/material';
import getData from '@/src/firebase/firestore/getData';
import snapshotToArray from '@/src/firebase/firestore/snapshotToArray';

export default function Page() {
    console.log("Coding Fest");

    return (
        <div className="unitSearchContent">
        <Typography sx={{ fontWeight: 500, fontSize: '35px', marginBottom: 1 }}> Find a unit outline </Typography>
        <Typography sx={{fontSize: '15px', maxWidth: 1000, marginBottom: 3}}>
        Unit outlines help you plan your unit choices, organise your studies and assessments, and provide evidence of the topics you have studied. Unit outlines will be available 2 weeks before the first day of teaching.
        </Typography>
        <SearchBar />
        <BasicAccordion />
        </div>
    )
}

// verify unit code
const getUnits = async () => {
    const res = await getData('units', 'all');
    if (res.error) {
        console.log('something went wrong');
    }
    else {
        console.log('Got the data\n' + res.result);
    }
    return res.result
}


const SearchBar = () => {
    const [jsonResults, setJsonResults] = useState([]);

    useEffect(() => {
        const units = getUnits();
        console.log(units);
        // setJsonResults(units);
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then((res) => res.json())
            .then((json) => setJsonResults(json));
    }, []);

    return (
        <Stack sx={{ width: 1000, margin: "auto", marginBottom: 5 }}>
        <Autocomplete
        componentsProps={{
            paper: {
                sx: {
                    width: 350,
                        margin: "auto"
                }
            }
        }}
        id="Hello"
        notched="true"
        getOptionLabel={(jsonResults) => jsonResults.name}
        options={jsonResults}
        noOptionsText="No results"
        isOptionEqualToValue={(option, value) => {
            option.name === value.name;
        }}
        renderOption={(props, jsonResults) => (
            <Box component="li" {...props} key={jsonResults.id}>
            {jsonResults.name} - Ahhh
            </Box>
        )}
        renderInput={(params) => (
            <TextField
            {...params}
            label="Search unit name, unit code or keywords"
            sx={{
                "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",

                    legend: {
                        marginLeft: "30px"
                    },

                    '& fieldset': {
                        borderColor: '#DD432B',
                    },
                },
                    "& .MuiAutocomplete-inputRoot": {
                        paddingLeft: "20px !important",
                        borderRadius: "50px"
                    },
                    "& .MuiInputLabel-outlined": {
                        paddingLeft: "20px"
                    },
                    "& .MuiInputLabel-shrink": {
                        marginLeft: "20px",
                        paddingLeft: "10px",
                        paddingRight: 0,
                        background: "white",
                    }
            }}
            />
        )}
        />
        </Stack>
    );
}

function BasicAccordion() {
    return (
        <div>
        <Accordion sx={{ maxWidth: 1000, marginBottom: 2 }}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        >
        <Typography sx={{ fontWeight: 500, fontSize: 25 }}>What is a unit outline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionText">
        Unit outlines are a key source of information to help you understand what you will study, how you will learn and the way in which you’ll be assessed in a particular unit of study.<br/>
        The information in the outline can be used to help you plan your unit choices, organise your studies, apply for special consideration, set up academic plans and provide evidence of the topics you have studied.<br/>
        <br/>
        In each outline you can find the following information:
        <ul>
        <li><b>Assessments</b></li>
        <dt>Including the topic, type, title, weighting and due date(s).</dt>

        <li><b>Weekly schedule</b></li>
        <dt> A weekly breakdown of learning activities and topics.</dt>

        <li><b>Enrolment rules</b></li>
        <dt>Such as pre-requisites that must be met before you can enrol.</dt>

        <li><b>Teaching staff</b></li>
        <dt>Contact information for your unit coordinator, lecturers, tutors and faculty contact(s).</dt>

        <li><b>Learning outcomes</b></li>
        <dt>What you will be able to do and understand at the completion of the unit. Learning outcomes are linked to <Link href="https://www.sydney.edu.au/students/graduate-qualities.html" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>graduate qualities</Link>.</dt>

        <li><b> Unit information</b></li>
        <dt>Including prescribed readings and additional costs alongside academic integrity, special consideration and work health and safety information.</dt>
        </ul>

        You can find further information about available units and courses at Sydney University through <Link href="https://sydney.edu.au/courses/" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>Sydney Courses</Link> or view <Link href="https://www.sydney.edu.au/handbooks/" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>our Online Handbooks</Link>.
        </div>
        </AccordionDetails>
        </Accordion>

        <Accordion sx={{ maxWidth: 1000}}>
        <AccordionSummary
        expandIcon={<ExpandMoreIcon />}
        aria-controls="panel2a-content"
        id="panel2a-header"
        >
        <Typography sx={{ fontWeight: 500, fontSize: 25  }}>Related Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
        <div className="AccordionText">
        <ul>
        <li><Link href="https://www.sydney.edu.au/students/handbooks-course-rules.html" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>Handbook and course rules</Link></li>
        <li><Link href="https://www.sydney.edu.au/students/course-planning.html" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>Planning your course</Link></li>
        <li><Link href="https://www.sydney.edu.au/students/enrol-in-a-new-course.html" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>Enrol in a new course</Link></li>
        <li><Link href="https://www.sydney.edu.au/students/explore-open-learning-environment.html" sx={{ color: '#DD432B', textDecorationColor: '#DD432B' }}>Explore the Open Learning Environment</Link></li>
        </ul>
        </div>
        </AccordionDetails>
        </Accordion>
        </div>
    );
}
