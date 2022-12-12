import { axiosInstance } from "./axios";
import { Item } from "./item";
import { getLikedItems } from "./like";

export type Order = {
    id_order: string;
    id_client: string;
    order_date: string;
    items: Item[];
    status: 'cart' | 'delegate' | 'done';
};

export const createOrder = async () => {
    try {
        const result = await axiosInstance.post(
            '/order',
            { order_date: new Date().toISOString() },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );

        const order: Order = result.data;
        order.items = [];
        return order;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const orderItems = async (orderId: string): Promise<Item[]> => {
    try {
        const result = await axiosInstance.get(
            '/itemOrder',
            { params: { orderId } }
        );
        const list: { id_order: string; id_item: string; }[] = result.data;
        const itemsResult = await axiosInstance.get('/item');
        const items: Item[] = itemsResult.data;
        return items.filter(item => list.some(x => x.id_item === item.id_item));
    } catch (error) {
        console.error(error);
        throw error;
    }
}

export const listOrders = async (): Promise<Order[]> => {
    try {
        const result = await axiosInstance.get(
            '/order',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );

        const list: Order[] = result.data;
        const likedItems = await getLikedItems();

        for (const item of list) {
            item.items = await orderItems(item.id_order);
            item.items = item.items.map(item => ({
                ...item,
                isLiked: likedItems.some(like => like.id_item === item.id_item),
            }));
        }

        return list;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const lastOrder = async () => {
    try {
        const result = await axiosInstance.get(
            '/order',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );

        const order: Order = result.data[0];
        if (!order || order.status !== 'cart') {
            const newOrder = await createOrder();
            return newOrder;
        }

        order.items = await orderItems(order.id_order);
        const likedItems = await getLikedItems();
        order.items = order.items.map(item => ({
            ...item,
            isLiked: likedItems.some(like => like.id_item === item.id_item),
        }));
        return order;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const addToCard = async (itemId: string) => {
    try {
        const cart = await lastOrder();
        await axiosInstance.post(
            '/itemOrder',
            { id_item: itemId, id_order: cart.id_order },
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const removeFromCard = async (itemId: string) => {
    try {
        const cart = await lastOrder();
        await axiosInstance.delete(
            `/itemOrder/${cart.id_order}`,
            { params: { item: itemId } },
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};
