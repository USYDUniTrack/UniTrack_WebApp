import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

const steps = [
  {
    label: 'Overview',
    //description: `Read the unit of study's description.`,
  },
  {
    label: 'Prerequisites',
    //description: 'Find the prerequisites for this unit.',
  },
  {
    label: 'Timetable',
    //description: `View the scheduled classes for this unit.`,
  },
  {
    label: 'Unit Outlines',
    //description: `View previous unit outlines for this unit.`,
  },
  {
    label: 'Reviews',
    // description: `Read reviews by students who have studied this unit.`,
  },
];

const CustomStepIcon = ({ active }) => {
  return (
    <Box
      sx={{
        color: active ? '#DD432B' : 'black',
        '& .MuiStepIcon-active': {
          color: active ? '#DD432B' : 'black',
        },
      }}
    >
      <div
        style={{
          width: 12, // Adjust the width for smaller circles
          height: 12, // Adjust the height for smaller circles
          borderRadius: '50%',
          backgroundColor: active ? '#DD432B' : 'currentColor',
        }}
      />
    </Box>
  );
};

export default function VerticalLinearStepper() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  React.useEffect(() => {
    // Apply global CSS style to change font family
    document.body.style.fontFamily = 'Inter, sans-serif';
  }, []);

  return (
    <Box>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((step, index) => (
          <Step key={step.label} connector={null}>
            <StepLabel
              StepIconComponent={({ active }) => (
                <CustomStepIcon active={active} />
              )}
              sx={{
                '& .MuiStepLabel-label': {
                  color: activeStep === index ? '#DD432B' : 'black',
                },
              }}
            >
              <Typography fontWeight={600}>{step.label}</Typography>
            </StepLabel>
            <StepContent>
              <Typography>{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{
                      mt: 1,
                      mr: 1,
                      padding: '2px 9px',
                      backgroundColor: 'gray',
                      color: '#FFF',
                      '&:hover': {
                        backgroundColor: '#DD432B',
                      },
                      fontSize: '13px',
                    }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{
                      mt: 1,
                      mr: 1,
                      padding: '8px 15px', // adjust for size of buttons
                      color: 'gray',
                      '&:hover': {
                        backgroundColor: 'transparent',
                      },
                      fontSize: '13px',
                    }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          <Button
            onClick={handleReset}
            sx={{ mt: 1, mr: 1, color: 'black', fontSize: '13px' }}
          >
            Reset
          </Button>
        </Paper>
      )}
    </Box>
  );
}
