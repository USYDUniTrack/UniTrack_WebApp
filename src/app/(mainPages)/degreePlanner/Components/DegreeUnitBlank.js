import { Typography, Link } from "@mui/material"
import SearchIcon from '@mui/icons-material/Search';

const DegreeUnitBlank = () => {

    return (

        <div className="DegreeUnit" style={{ justifyContent: "center", alignItems: "center"}}>
            <Link href="#">
            <SearchIcon fontSize="large" />
            </Link>
        </div>
    )
}

export default DegreeUnitBlank;

