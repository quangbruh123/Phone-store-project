import axiosInstance from "./axiosConfig";

export const getAllPhone = async () => {
    try {
        const response = await axiosInstance({
            method: "get",
            url: "/phone",
        });
        return response;
    } catch (error) {
        return error;
    }
};
export const deletePhone = async (id) => {
    try {
        const response = await axiosInstance({
            method: "delete",
            url: `/phone/${id}`,
        });
        return response;
    } catch (error) {
        return error;
    }
};
// export const getAllUser = async () => {
//     try {
//         const response = await axiosInstance({
//             method: "get",
//             url: "/user",
//         });
//         return response;
//     } catch (error) {
//         return error;
//     }
// };

export const changeState = async (uid, state) => {
    try {
        const response = await axiosInstance({
            method: "put",
            url: `/user/admin/${uid}`,
            data: { isBlocked: !state },
        });
        return response;
    } catch (error) {
        return error;
    }
};
