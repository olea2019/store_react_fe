import { Tooltip, IconButton, Popper, Box } from '@mui/material';
import CallIcon from '@mui/icons-material/Call';
import './header.scss';


export const HeaderTooltip = () => {
    return (
        <Tooltip className='header__tooltip'
            title="060707002"
        >
            <CallIcon color="primary" />
        </Tooltip>
    )
}

// import React, { useState } from "react";

// export const HeaderTooltip = (props: any) => {
//     let timeout: any;
//     const [active, setActive] = useState(false);

//     const showTip = () => {
//         timeout = setTimeout(() => {
//             setActive(true);
//         }, props.delay || 400);
//     };

//     const hideTip = () => {
//         clearInterval(timeout);
//         setActive(false);
//     };

//     return (
//         <div
//             className="Tooltip-Wrapper"
//             // When to show the tooltip
//             onMouseEnter={showTip}
//             onMouseLeave={hideTip}
//         >
//             {/* Wrapping */}
//             {props.children}
//             {active && (
//                 <div className="header__popper">
//                     {<div>
//                         <h3>bd.Grigore Vieru 29</h3>
//                         <h4>CHISINAU</h4>
//                         <h2>Program: Luni-Vinderi 9:30-19:00,Simbata 9:30-15:00, Duminica zi de odihna</h2>
//                     </div>
//                     }
//                     {props.content}
//                 </div>
//             )}
//         </div>
//     );
// };