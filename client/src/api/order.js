import axiosInstance from "./axiosConfig";

export const getOrder = async (value) => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: `/order/get-all`,
            withCredentials: true,
            params: { status: value },
        });
        return response;
    } catch (error) {
        return error;
    }
};
export const updateOrderState = async (id, value) => {
    try {
        const response = await axiosInstance({
            method: "put",
            url: `/order/update-status`,
            withCredentials: true,
            data: { oid: id, status: value },
        });
        return response;
    } catch (error) {
        return error;
    }
};

export const createOrder = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "/order/",
            withCredentials: true,
            data: {
                couponId: payload,
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};
