import { Items } from './itemsPage/items';

export const SmartfoaneCategory = () => {

    const brands = ['Blackview ', 'Honor ', 'Google Pixel '];
    const category = 'smartfoane';

    return <Items brands={brands} category={category} />
};
