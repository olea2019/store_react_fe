import { Items } from './itemsPage/items';

export const LaptopuriCategory = () => {

    const brands = [
        'Apple',
        'Xiaomi'
    ];

    const category = 'laptopuri';

    return <Items brands={brands} category={category} />
};
