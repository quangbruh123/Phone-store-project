import axiosInstance from "./axiosConfig";
import axios from "axios";

export const signUp = async (userInfo) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "/auth/register",
            data: userInfo,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const apiLogin = async (payload) => {
    try {
        const response = await axios.post("http://localhost:8000/api/v1/auth/login", payload, {
            withCredentials: true,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const login = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "/auth/login",
            data: {
                email: payload.email,
                password: payload.password,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const forgotPassword = async (email) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "/auth/forget-password",
            params: {
                email: email,
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};
