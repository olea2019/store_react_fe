import { SliderBlock } from "./slider"
import { SortPrice } from "./sortPrice"

import "./filters.scss"
import { Order } from "../../types";
import { SortBrand } from "./brand";

type Props = {
    order: Order;
    setOrder: (value: Order) => void;

    price: number[];
    setPrice: (value: number[]) => void;

    brands: string[];
    selectedBrand: string;
    setSelectedBrand: (value: string) => void;
}

export const Filtres: React.FC<Props> = ({ order, setOrder, price, setPrice, brands, selectedBrand, setSelectedBrand }) => {
    return (
        <div className="filters">
            <div className="filtres__sliderBlock">
                <SliderBlock price={price} setPrice={setPrice} />
            </div>
            <div className="filters__brand">
                <SortBrand brands={brands} selectedBrand={selectedBrand} setSelectedBrand={setSelectedBrand} />
            </div>
            <div className="filters__sortPrice">
                <SortPrice order={order} setOrder={setOrder} />
            </div>
        </div>
    )
}