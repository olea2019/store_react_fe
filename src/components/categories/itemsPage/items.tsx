import React, { useEffect, useState } from 'react';

import { getItems, Item } from "../../../requests/item";
import { getLikedItems, likeItem, unlikeItem } from '../../../requests/like';
import { addToCard } from '../../../requests/order';
import { Order } from '../../../types';
import { Filtres } from "../../filters/filters";
import { ItemBlock } from "../../productBlock/itemBlock";
import "./items.scss";

type Props = {
    brands: string[];
    category: string;
}

export const Items: React.FC<Props> = ({ category, brands }) => {

    const [items, setItems] = useState([] as Item[]);
    const [order, setOrder] = useState<Order>(Order.ASC);
    const [price, setPrice] = useState<number[]>([50, 30_000]);
    const [selectedBrand, setSelectedBrand] = useState<string>('');

    useEffect(() => {
        async function fetchItems() {
            const [minPrice, maxPrice] = price;
            const items = await getItems(
                category,
                order,
                { minPrice, maxPrice, ...selectedBrand ? { brand: selectedBrand } : {} }
            );

            const likedItems = await getLikedItems();

            setItems(
                items.map(item => {
                    const isLiked = likedItems.some(likedItem => likedItem.id_item === item.id_item);

                    return { ...item, isLiked };
                })
            );
        }

        fetchItems();
    }, [category, order, price, selectedBrand]);

    const toggleLike = async (item: Item) => {
        const isLiked = !item.isLiked;
        
        if (isLiked) {
            await likeItem(item.id_item);
        } else {
            await unlikeItem(item.id_item);
        }

        const newItems = items.map(
            listItem => {
                if (listItem.id_item !== item.id_item) {
                    return listItem;
                }

                return { ...item, isLiked };
            }
        );
        setItems(newItems);
    }

    const addToCart = async (item: Item) => {
        await addToCard(item.id_item);
    }

    return (
        <main>
            <h1>{category[0].toUpperCase()}{category.slice(1)}</h1>
            <Filtres
                order={order}
                setOrder={setOrder}
                price={price}
                setPrice={setPrice}
                brands={brands}
                selectedBrand={selectedBrand}
                setSelectedBrand={setSelectedBrand}
            />
            <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
                {
                    items.length > 0
                        ? items.map(item => <div key={item.id_item}>
                            <ItemBlock
                                title={item.name}
                                price={item.price}
                                isLiked={item.isLiked || false}
                                imageUrl={item.img}
                                setIsLiked={() => toggleLike(item)}
                                addToCart={() => addToCart(item)}
                            />
                        </div>)
                        : <p>No items here :(</p>
                }
            </div>
        </main >
    );
};
