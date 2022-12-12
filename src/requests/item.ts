import { Order } from "../types";
import { axiosInstance } from "./axios";

export type GetItemsFilter = {
    minPrice?: number;
    maxPrice?: number;
    brand?: string;
}

export type Item = {
    brand: string;
    category: string;
    id_item: string;
    name: string;
    price: number;
    img: string;
    isLiked?: boolean;
}

export const getItems = async (
    category: string,
    order: Order,
    { minPrice, maxPrice, brand }: GetItemsFilter,
): Promise<Item[]> => {

    try {
        const result = await axiosInstance.get(
            '/item',
            {
                params: {
                    category,
                    orderDirection: order,
                    brand,
                    minPrice,
                    maxPrice,
                },
            }
        );
        
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

// export const likeItem = async (
   
// ): Promise<Item[]> => {

//     try {
//         const result = await axiosInstance.get(
//             '/item',
//             {
//                 params: {
//                     category,
//                     orderDirection: order,
//                     brand,
//                     minPrice,
//                     maxPrice,
//                 },
//             }
//         );
//         return result.data;
//     } catch (error) {
//         console.error(error);
//         throw error;
//     }
// };
