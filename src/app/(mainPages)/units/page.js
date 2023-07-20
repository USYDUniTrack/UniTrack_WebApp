"use client";

import React, { useState, useEffect } from "react";
import { Search } from '@mui/icons-material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionSummary, AccordionDetails, Stack, TextField, Typography, Link, Box, Autocomplete, AutocompleteRenderInputParams, InputAdornment } from '@mui/material';

export default function Page() {
  console.log("Coding Fest");

  return (
        <div className="unitSearchContent">
            <Typography sx={{ fontWeight: 200, fontSize: '30px' }}> Find a Unit Outline </Typography>
            <Typography sx={{ fontWeight: 200, fontSize: '15px' }}> 
            Unit outlines help you plan your unit choices, organise your studies and assessments, and provide evidence of the topics you have studied. Unit outlines will be available 2 weeks before the first day of teaching. </Typography>
            <SearchBar />
            <BasicAccordion />
        </div>
  )
}


const SearchBar = () => {
    const [jsonResults, setJsonResults] = useState([]);

      useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users`)
          .then((res) => res.json())
          .then((json) => setJsonResults(json));
      }, []);

      return (
        <Stack sx={{ width: 400, margin: "auto" }}>
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
            notched
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
                label="Search Units"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "50px",

                    legend: {
                      marginLeft: "30px"
                    }
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
                    background: "white"
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
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>What is a unit outline?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion disabled>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Related Links</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
