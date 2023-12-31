"use client";

import { Button, Checkbox, Divider, FormGroup, FormControlLabel, Stack, Typography } from '@mui/material';
import TuneIcon from '@mui/icons-material/Tune';

const SelectionBar = () => {

    return(
        <div className='SelectionBar'>
            <Stack sx={{ marginBottom: '5px'}} direction="row" alignItems="center" gap={1} justifyContent='flex-start'>
                <TuneIcon />
                <Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}> Filters </Typography>
                <div style={{ marginLeft: '41px' }}>
                    <Button sx={{fontSize: '15px', color: '#DD432B', fontWeight: 500, textTransform: 'none', width: '80px', height: '30px', justifyContent: 'center' }}> 
                        Clear All
                    </Button>
                </div>
            </Stack>
        <Divider sx={{ borderBottomWidth: 2, marginBottom: '10px', borderColor: 'white' }} />
        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'rgba(0, 0, 0, 0.5)', marginTop: '10px'}}> Levels </Typography>
        <FormGroup>
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="1000" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="2000" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="3000" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="4000" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="4000+" />
        </FormGroup>

        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'rgba(0, 0, 0, 0.5)', marginTop: '10px' }}> Offered in </Typography>
        <FormGroup>
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Semester 1" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Semester 2" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Int Jan" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Int Feb" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Int June" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="Int July" />
        </FormGroup>

        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'rgba(0, 0, 0, 0.5)', marginTop: '10px' }}> Credit Points </Typography>
        <FormGroup>
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="12" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="6" />
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="3" />
        </FormGroup>

        <Typography sx={{ fontWeight: 'bold', fontSize: '15px', color: 'rgba(0, 0, 0, 0.5)', marginTop: '10px' }}> Exams </Typography>
        <FormGroup>
            <FormControlLabel sx={{margin: '0px'}} control={<Checkbox style={{ width: "20px", marginRight: '5px', padding: '3px'}}/>} label="No Exam" />
        </FormGroup>

            
        </div>
    )
}

export default SelectionBar;
