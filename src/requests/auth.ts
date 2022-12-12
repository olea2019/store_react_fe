import { axiosInstance } from "./axios";
import axios from "axios";

export type SignUpBody = {
    first_name: string;
    last_name: string;
    phone: string;
    address: string;
    email: string;
    password: string;
}

export type User = SignUpBody & {
    id_client: string;
}

export type AuthResponse = {
    user: User;
    token: string;
}

export type SignInBody = {
    email: string;
    password: string;
}

export type UpdateProfileBody = SignUpBody & {
    oldPassword: string;
}

export const signUp = async (body: SignUpBody): Promise<AuthResponse> => {

    try {
        const result = await axiosInstance.post('/signUp', body);
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const signIn = async (body: SignInBody): Promise<AuthResponse> => {
    try {
        const result = await axiosInstance.post('/signIn', body);
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const updateProfile = async (body: UpdateProfileBody): Promise<User> => {
    try {
        const result = await axiosInstance.put(
            '/users',
            body,
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
};

export const getMe = async (): Promise<User> => {
    try {
        const result = await axiosInstance.get(
            '/me',
            {
                headers: {
                    Authorization: localStorage.getItem('token')
                },
            },
        );
        return result.data;
    } catch (error) {
        console.error(error);
        throw error;
    }
}; 