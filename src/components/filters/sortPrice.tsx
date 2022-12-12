import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "./filters.scss"
import { Order } from '../../types';

type Props = {
    order: Order;
    setOrder: (value: Order) => void;
}

export const SortPrice: React.FC<Props> = ({ order, setOrder }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setOrder(event.target.value as Order);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Price</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                // id="demo-simple-select"
                value={order}
                label="price"
                onChange={handleChange}
            >
                <MenuItem value={Order.ASC}>Sorteaza dupa pret:de la mic la mare</MenuItem>
                <MenuItem value={Order.DESC}>Sorteaza dupa pret:de la mare la mic</MenuItem>
            </Select>
        </FormControl>
    );
}
