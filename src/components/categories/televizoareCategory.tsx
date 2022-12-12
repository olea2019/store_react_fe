import { Items } from './itemsPage/items';

export const TelevizoareCategory = () => {

    const brands = [
        'Samsung',
        'LG'
    ];

    const category = 'televizoare';

    return <Items brands={brands} category={category} />
};
