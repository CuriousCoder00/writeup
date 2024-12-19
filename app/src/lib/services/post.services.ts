import axios from "axios";
import { axiosInstance } from "./api.config";

export const getUserPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/all');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const getAllPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/');
        return response.data;
    } catch (error) {
        throw error;
    }
}

export const trendingPosts = async () => {
    try {
        const response = await axios.get('https://api.daily.dev/');
        return response.data;
    } catch (error) {
        throw error;
    }
}