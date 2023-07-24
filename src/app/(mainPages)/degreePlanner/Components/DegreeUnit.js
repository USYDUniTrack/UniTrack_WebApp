import { Typography } from "@mui/material"

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
                            <div key={semester} className="unitSemester"> 
                                <Typography sx={{ fontWeight: 400, fontSize: 12 }}> Sem {semester} </Typography>
                            </div>
                        )
                    })}              

                </div>
            </div>
        </div>
    )
}

export default DegreeUnit;

