import axiosInstance from "./axiosConfig";

export const createPhone = async (payload) => {
    try {
        const response = await axiosInstance({
            method: "post",
            url: "phone/",
            data: payload,
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    } catch (error) {
        return error;
    }
};
export const editPhone = async (id, payload) => {
    try {
        const response = await axiosInstance({
            method: "put",
            url: `phone/${id}`,
            data: payload,
            withCredentials: true,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
        return response;
    } catch (error) {
        return error;
    }
};
