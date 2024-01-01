import axios from "axios";
import { useSelector } from "react-redux";
import { getAccessToken } from "../store/authReducer";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
});

axiosInstance.interceptors.request.use(
    function (config) {
        const local = window.localStorage.getItem("persist:user") && JSON.parse(window.localStorage.getItem("persist:user"));

        const token = local.accessToken.replace(/"/g, "");

        config.headers.Authorization = `Bearer ${token}`;

        return config;
    },
    function (error) {
        // Do something with request error
        return Promise.reject(error);
    }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
    function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
    },
    function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        console.log(error);
        return Promise.reject(error);
    }
);

export default axiosInstance;
