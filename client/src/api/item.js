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
