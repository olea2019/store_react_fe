import { Items } from './itemsPage/items';

export const ElectrocasniceCategory = () => {

    const brands = [
        'Samsung',
        'LG'
    ];

    const category = 'electrocasnice';

    return <Items brands={brands} category={category} />
};
