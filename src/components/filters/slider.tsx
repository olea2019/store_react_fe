import * as React from 'react';
import Slider from '@mui/material/Slider';
import Button from '@mui/material/Button';

import "./filters.scss";

type Props = {
    price: number[];
    setPrice: (value: number[]) => void;
}

export const SliderBlock: React.FC<Props> = ({ price, setPrice }) => {
    const [number, setNumber] = React.useState<number[]>(price);

    React.useEffect(() => {
        setNumber(price);
    }, [price]);

    const displayChange = (
        _event: Event,
        newValue: number | number[]
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setNumber(newValue);
    };

    const handleChange = (
        _event: Event | React.SyntheticEvent<Element, Event>,
        newValue: number | number[],
        // activeThumb: number,
    ) => {
        if (!Array.isArray(newValue)) {
            return;
        }

        setPrice(newValue);
        // if (activeThumb === 0) {
        //     setPrice([Math.min(newValue[0], price[1]), price[1]]);
        // } else {
        //     setPrice([price[0], Math.max(newValue[1], price[0])]);
        // }
    };

    return (
        <div className="slider">
            <Slider
                value={number}
                onChange={displayChange}
                onChangeCommitted={handleChange}
                valueLabelDisplay="auto"
                disableSwap
                min={50}
                max={30_000}
                step={50}
            />
            <h3>{price[0]} lei - {price[1]} lei</h3>
        </div>

    )
}