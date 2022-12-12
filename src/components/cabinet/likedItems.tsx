import { useState, useEffect } from 'react';
import { Item } from '../../requests/item';
import { getLikedItems, likeItem, unlikeItem } from '../../requests/like';
import { ItemBlock } from "../productBlock/itemBlock";

export const LikedItems = () => {

    const [items, setItems] = useState([] as Item[]);

    useEffect(
        () => {
            async function fetchItems() {
                const items = await getLikedItems();
                setItems(
                    items.map(item => ({ ...item, isLiked: true }))
                );
            }

            fetchItems();
        },
        [],
    );

    const toggleLike = async (item: Item) => {
        const isLiked = !item.isLiked;

        console.log({ isLiked })
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

    return <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
        {
            items.length > 0
                ? items.map(item => <div key={item.id_item}>
                    <ItemBlock
                        title={item.name}
                        price={item.price}
                        isLiked={item.isLiked || false}
                        imageUrl={item.img}
                        setIsLiked={() => toggleLike(item)}
                        addToCart={() => { }}
                    />
                </div>)
                : <p>No items here :(</p>
        }
    </div>;
}