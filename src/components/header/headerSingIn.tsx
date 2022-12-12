import { IconButton } from "@mui/material";
import LoginIcon from '@mui/icons-material/Login';
import './header.scss';
import { Link } from "react-router-dom";


export const HeaderLogin = () => {
    return (
        <Link to="/singIn" >
            <IconButton color="primary">
                <LoginIcon />
            </IconButton>
        </Link>
    )
}