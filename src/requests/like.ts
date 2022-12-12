import { AxiosResponse } from "axios";
import { axiosInstance } from "./axios";
import { Item } from "./item";

export type Like = {
    id_client: string;
    id_item: string;
}

export const getLikedItems = async () => {
    try {
        const response = await axiosInstance.get(
            '/likeItem',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );

        const likes = response.data as Like[];

        const { data: items } = await axiosInstance.get('/item') as AxiosResponse<Item[]>;

        return items.filter(
            item => likes.some(like => like.id_item === item.id_item)
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const likeItem = async (itemId: string) => {
    try {
        await axiosInstance.post(
            '/likeItem',
            { id_item: itemId },
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const unlikeItem = async (itemId: string) => {
    try {
        await axiosInstance.delete(
            `/likeItem/${itemId}`,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );
    } catch (error) {
        console.error(error);
        throw error;
    }
};
