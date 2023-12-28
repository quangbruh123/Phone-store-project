import { useState, useEffect } from "react";
import axios from "axios";
import axiosInstance from "../api/axiosConfig";

const useFetchData = (url, query, dataType = "none") => {
    const [data, setData] = useState(dataType === "object" ? {} : []);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url, {
                    params: query,
                    withCredentials: true,
                });
                setData(response.data);
            } catch (error) {
                setError(error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchData();
    }, [url, query]);

    return { data, isLoading, error };
};

export default useFetchData;
