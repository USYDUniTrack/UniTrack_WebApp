
import { Typography } from "@mui/material"
import DegreeUnit from "./Components/DegreeUnit"

const DegreeYear = ({units}) => {

    return (
        <div>
            <Typography sx={{ fontWeight: 700, fontSize: 25 }}>2021</Typography>
            <Typography sx={{ fontWeight: 600, fontSize: 20 }}>Semester 2</Typography>
            <div className="DegreeUnitsWrapper">
                <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"INFO1110", unitName: "Introduction to Programming", credits: 6, colours:["green"]}}/>
                <DegreeUnit unitInfo={{semesters: [2], unitCode:"ELEC1601", unitName: "Introduction to Computer Systems", credits: 6, colours:["lightblue", "red"]}}/>
                <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"DATA1001", unitName: "Introduction to Data Science", credits: 6, colours:["lightblue", "red"]}}/>
                <DegreeUnit unitInfo={{semesters: [1, 2], unitCode:"MATH1021", unitName: "Calculus of One Variable", credits: 6, colours:["red"]}}/>

            </div>
        </div>
    )
}
