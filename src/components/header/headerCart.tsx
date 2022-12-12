// import { IconButton } from "@mui/material";
// import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';


// export const HeaderCart = () => {
//     return (
//         <Link to="/cart" >
//             <IconButton color="primary">
//                 <ShoppingCartIcon />
//             </IconButton>
//         </Link>

//     )
// }

import * as React from 'react';
import Badge from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import { IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useState, useEffect } from 'react';

import './header.scss';
import { lastOrder } from '../../requests/order';

const StyledBadge = styled(Badge)(() => ({
    '& .MuiBadge-badge': {
        right: -5,
        top: 12,
        border: `2px solid`,
        padding: '0 4px',
    },
}));

export const HeaderCart = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        async function getOrder() {
            const order = await lastOrder();
            setCount(order.items.length || 0);
        }

        const intervalId = setInterval(() => {
            getOrder();
        }, 2000);

        return () => {
            clearInterval(intervalId);
        };
    }, []);

    return (
        <Link to="/cart" >
            <IconButton aria-label="cart">
                <StyledBadge badgeContent={count} color="primary">
                    <ShoppingCartIcon color="primary" />
                </StyledBadge>
            </IconButton>
        </Link>
    );
}