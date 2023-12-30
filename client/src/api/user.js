import axios from "axios";
import axiosInstance from "./axiosConfig";

export const getCurrentUser = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/user/current",
        });
        return response;
    } catch (error) {
        return error;
    }
};
