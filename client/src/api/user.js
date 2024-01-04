import axios from "axios";
import axiosInstance from "./axiosConfig";

export const getCurrentUser = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/user/current",
            withCredentials: true,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const updateUser = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "put",
            url: "/user/:uid",
            data: payload,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const replaceNewCart = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "delete",
            url: "/user/current",
            data: {
                newCart: payload,
            },
            withCredentials: true,
        });
        return response;
    } catch (error) {
        return error;
    }
};
