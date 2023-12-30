import axiosInstance from "./axiosConfig";

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

export const login = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "/auth/login",
            data: payload,
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
