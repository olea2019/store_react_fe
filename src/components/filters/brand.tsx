import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

import "./filters.scss"

type Props = {
    brands: string[];
    selectedBrand: string;
    setSelectedBrand: (value: string) => void;
}

export const SortBrand: React.FC<Props> = ({ brands, selectedBrand, setSelectedBrand }) => {

    const handleChange = (event: SelectChangeEvent) => {
        setSelectedBrand(event.target.value as string);
    };

    return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Brand</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                label='brand'
                value={selectedBrand}
                defaultValue=''
                onChange={handleChange}
            >
                <MenuItem value=''>Toate</MenuItem>
                {brands.map((name) => (
                    <MenuItem
                        key={name}
                        value={name}
                    >
                        {name}
                    </MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}