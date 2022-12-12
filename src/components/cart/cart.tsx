import { useEffect, useState } from 'react';
import { Item } from '../../requests/item';
import { likeItem, unlikeItem } from '../../requests/like';
import { createOrder, lastOrder, Order, removeFromCard } from '../../requests/order';
import { ItemBlock } from '../productBlock/itemBlock';
import "./cart.scss";

export const CartBlock = () => {
    const [order, setOrder] = useState<Order | null>(null);
    const [items, setItems] = useState([] as Item[]);

    useEffect(
        () => {
            async function getOrder() {
                const data = await lastOrder();
                setOrder(data);
                setItems(data.items);
            }

            getOrder();
        },
        [],
    );

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

    const removeFromCart = async (item: Item) => {
        await removeFromCard(item.id_item);
        setItems(
            items.filter(x => x.id_item !== item.id_item)
        );
    }


    const date = order && new Date(order.order_date);
    const day = date?.getDate() || 0;
    const month = (date?.getMonth() || 0) + 1;
    const year = date?.getFullYear();

    return (
        <main style={{ margin: '0 48px' }}>
            <h1>Cart</h1>
            <div>
                Comanda din data:
                {day}/{month}/{year}
            </div>
            <div>
                Statutul: {order?.status}
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
                {
                    (items?.length || 0) > 0
                        ? items.map(item => <div key={item.id_item}>
                            <ItemBlock
                                title={item.name}
                                price={item.price}
                                isLiked={item.isLiked || false}
                                imageUrl={item.img}
                                isCart={true}
                                setIsLiked={() => toggleLike(item)}
                                addToCart={() => removeFromCart(item)}
                            />
                        </div>)
                        : <p>No items here :(</p>
                }
            </div>
        </main>
    );
};