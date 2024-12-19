import axios, { AxiosResponse } from "axios";
import { UserLoginInput, UserSignupInput } from "../validations/user.validator";
import { axiosInstance } from "./api.config";

export const loginService = async (data: UserLoginInput) => {
    try {
        const response = await axiosInstance.post('/auth/login', data
        ) as AxiosResponse;
        console.log(response)
        const user = response.data.user;
        if (response.data.token) {
            localStorage.setItem('writeup_token', response.data.token);
            localStorage.setItem('writeup_user', JSON.stringify(user));
        }
        return { message: response.data.message, status: response.status, user: response.data.user };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const signupService = async (data: UserSignupInput) => {
    try {
        const response = await axiosInstance.post('/auth/register', data) as AxiosResponse;
        return { message: response.data.message, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const logoutService = async () => {
    try {
        await axiosInstance.post('/auth/logout');
        return { success: true, message: "Logout successful" };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}