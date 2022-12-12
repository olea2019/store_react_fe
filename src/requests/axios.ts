import axios from 'axios';

const apiUrl = 'http://localhost:8000';

export const axiosInstance = axios.create({
    baseURL: apiUrl,
    headers: {
        "Access-Control-Allow-Origin": "*"
    }
});
