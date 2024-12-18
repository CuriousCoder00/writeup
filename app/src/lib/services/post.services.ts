import { axiosInstance, configOptions } from "./api.config";

export const getAllPosts = async () => {
    try {
        const response = await axiosInstance.get('/post/all', configOptions);
        return response.data;
    } catch (error) {
        throw error;
    }
}