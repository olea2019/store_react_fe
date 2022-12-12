import { Items } from './itemsPage/items';

export const AccesoriiCategory = () => {

    const brands = [
        'Realme'
    ];

    const category = 'accesorii';

    return <Items brands={brands} category={category} />
};