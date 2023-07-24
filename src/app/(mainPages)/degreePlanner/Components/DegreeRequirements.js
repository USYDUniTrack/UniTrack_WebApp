import { Accordion, AccordionDetails, AccordionSummary, LinearProgress, Typography } from "@mui/material"
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

                    </AccordionDetails>
                  </Accordion>

                )
            })

            }

        </div>

    )
}
 export default DegreeRequirements;
