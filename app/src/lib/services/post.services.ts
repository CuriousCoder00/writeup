import { axiosInstance } from "./api.config";

export const getAllPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/all');
        return response.data;
    } catch (error) {
        throw error;
    }
}