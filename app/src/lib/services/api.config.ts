import axios from "axios";
import { API_BASE_URL } from "../constants";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
});

export const configOptions = {
    credentials: 'include',
    headers: {
        'Content-Type': 'application/json',
    },
}
