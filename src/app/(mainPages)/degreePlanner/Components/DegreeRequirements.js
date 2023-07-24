import { Accordion, AccordionDetails, AccordionSummary, LinearProgress, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import DoneAllIcon from '@mui/icons-material/DoneAll';
import CancelIcon from '@mui/icons-material/Cancel';

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
                  <Accordion sx={{ marginBottom: "10px" }} key={requirement.name}>
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
                        <div style={{ padding: "5px", display: "flex", flexDirection: "column", maxHeight: "200px", overflow: "scroll"}}>
                            <div style={{ marginBottom: "5px",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography sx={{ fontWeight: 400, fontSize: 14  }}>1000 Level Core</Typography>
                                <DoneAllIcon />
                            </div>
                            <div style={{ marginBottom: "5px",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography sx={{ fontWeight: 400, fontSize: 14  }}>2000 Level Core</Typography>
                                <DoneAllIcon />
                            </div>
                            <div style={{ marginBottom: "5px",display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography sx={{ fontWeight: 400, fontSize: 14  }}>3000 Level Core</Typography>
                                <CancelIcon />
                            </div>
                            <div style={{ paddingLeft: "10px", display: "flex", flexDirection: "column" }}>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 12  }}>COMP3308</Typography>
                                    <div className="unitSemester">
                                        <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem 1 </Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 12  }}>COMP3608</Typography>
                                    <div className="unitSemester">
                                        <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem 1 </Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 12  }}>COMP3419</Typography>
                                    <div className="unitSemester">
                                        <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem 1 </Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 12  }}>COMP3520</Typography>
                                    <div className="unitSemester">
                                        <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem 1 </Typography>
                                    </div>
                                </div>
                                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center"}}>
                                    <Typography sx={{ fontWeight: 400, fontSize: 12  }}>COMP3530</Typography>
                                    <div className="unitSemester">
                                        <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem 1 </Typography>
                                    </div>
                                </div>
                            </div>
                            <div style={{ marginBottom: "5px", display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center"}}>
                                <Typography sx={{ fontWeight: 400, fontSize: 14  }}>3000 Level Selective</Typography>
                                <CancelIcon />
                            </div>
                            
                        </div>

                    </AccordionDetails>
                  </Accordion>

                )
            })

            }

        </div>

    )
}
 export default DegreeRequirements;
