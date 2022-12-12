import React from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { IconButton } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';
import './headerCabinet.scss';

export const CabinetIcon = () => {
    const navigate = useNavigate();

    const click = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault();
        const isAuthed = !!localStorage.getItem('token');
        navigate(isAuthed ? '/cabinet' : '/singIn');
    };

    return (
        <Link onClick={click} to='/cabinet'>
            <IconButton aria-label="cabinet" className='cabinet'>
                <AccountCircleIcon color="primary" />
                <h4>cabinetul meu</h4>
            </IconButton>
        </Link>
    );
}