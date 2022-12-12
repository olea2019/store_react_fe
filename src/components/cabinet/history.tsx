import { useEffect, useState } from 'react';
import { Item } from '../../requests/item';
import { likeItem, unlikeItem } from '../../requests/like';
import { listOrders, Order } from '../../requests/order';
import { ItemBlock } from '../productBlock/itemBlock';

export const History = () => {
    const [orders, setOrders] = useState([] as Order[]);

    useEffect(
        () => {
            async function getOrders() {
                const data = await listOrders();
                setOrders(data);
            }

            getOrders();
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

        setOrders(
            orders.map(order => ({
                ...order,
                items: order.items.map(
                    listItem => {
                        if (listItem.id_item !== item.id_item) {
                            return listItem;
                        }

                        return { ...item, isLiked };
                    }
                )
            }))
        );
    }


    return (
        <main style={{ margin: '0 48px' }}>
            <h1>History</h1>

            {
                orders.map(
                    order => {
                        const date = order && new Date(order.order_date);
                        const day = date?.getDate() || 0;
                        const month = (date?.getMonth() || 0) + 1;
                        const year = date?.getFullYear();

                        return <div key={order.id_order}>
                            <div>
                                Comanda din data:
                                {day}/{month}/{year}
                            </div>
                            <div>
                                Statutul: {order?.status}
                            </div>

                            <div style={{ display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
                                {
                                    (order.items?.length || 0) > 0
                                        ? order.items.map(item => <div key={item.id_item}>
                                            <ItemBlock
                                                title={item.name}
                                                price={item.price}
                                                isLiked={item.isLiked || false}
                                                imageUrl={item.img}
                                                isCart={true}
                                                isHistory={true}
                                                setIsLiked={() => toggleLike(item)}
                                                addToCart={() => { }}
                                            />
                                        </div>)
                                        : <p>No items here :(</p>
                                }
                            </div>

                            <hr />
                        </div>
                    }
                )
            }
        </main>
    );
};
