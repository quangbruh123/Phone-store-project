import axiosInstance from "./axiosConfig";

export const getFilterProduct = async (query) => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/phone/filter",
            params: query,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const getOnePhone = async (pid) => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: `/phone/${pid}`,
            withCredentials: true,
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const rate = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "phone/rate",
            data: payload,
            withCredentials: true,
        });
    } catch (error) {
        return error;
    }
};
