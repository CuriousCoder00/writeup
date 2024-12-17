import axios, { AxiosResponse } from "axios";
import { UserLoginInput, UserSignupInput } from "../validations/user.validator";
import { AUTH_URL } from "../constants";

export const loginService = async (data: UserLoginInput) => {
    try {
        const response = await axios.post(AUTH_URL + '/login', data, {
            withCredentials: true,
        }) as AxiosResponse;
        if (response.data.token) {
            localStorage.setItem('token', response.data.token);
        }
        return { message: response.data.message, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}

export const signupService = async (data: UserSignupInput) => {
    try {
        const response = await axios.post(AUTH_URL + '/register', data, {
            withCredentials: true,
        }) as AxiosResponse;
        return { message: response.data.message, status: response.status };
    } catch (error) {
        if (axios.isAxiosError(error)) {
            return { message: error.response?.data.message };
        }
        throw error;
    }
}