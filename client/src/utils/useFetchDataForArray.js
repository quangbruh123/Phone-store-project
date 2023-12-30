import { useState, useEffect } from "react";
import axiosInstance from "../api/axiosConfig";

const useFetchDataForArray = (url, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axiosInstance.get(url, {
                    params: query,
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

export default useFetchDataForArray;
