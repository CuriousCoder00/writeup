import axios from "axios";
import { API_BASE_URL } from "../constants";

export const axiosInstance = axios.create({
    baseURL: API_BASE_URL,
    withCredentials: true,
    // timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    },
});

axiosInstance.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosInstance.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response?.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/auth/login';
    }
    return Promise.reject(error);
});

export const setAuthToken = (token: string) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}

export const removeAuthToken = () => {
    delete axiosInstance.defaults.headers.common['Authorization'];
}

export const getAuthToken = () => {
    return localStorage.getItem('token');
}

export const isLoggedIn = () => {
    return !!localStorage.getItem('token');
}

export const logout = () => {
    localStorage.removeItem('token');
}