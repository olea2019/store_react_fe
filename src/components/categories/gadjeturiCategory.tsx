import { Items } from './itemsPage/items';

export const GadjeturiCategory = () => {

    const brands = [
        'Xiaomi',
        'Apple'
    ];

    const category = 'gadjeturi';

    return <Items brands={brands} category={category} />
};
