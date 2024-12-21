import axios from "axios";
import { axiosInstance } from "./api.config";

export const getUserPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/all');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const getAllPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/');
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const deletePost = async (id: string) => {
    try {
        const response = await axiosInstance.delete(`/post/${id}`);
        return response.data.message;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const createPost = async (data: { title: string, content: string }) => {
    try {
        const response = await axiosInstance.post('/post/create', data);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const getPostById = async (id: string) => {
    try {
        const response = await axiosInstance.get(`/post/${id}`);
        return response.data;
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}