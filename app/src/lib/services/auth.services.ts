import axios, { AxiosResponse } from "axios";
import { UserLoginInput, UserSignupInput } from "../validations/user.validator";
import {axiosInstance} from "./api.config";

export const loginService = async (data: UserLoginInput) => {
    try {
        const response = await axiosInstance.post('/auth/login', data
        ) as AxiosResponse;
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
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