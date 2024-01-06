import TrendingCard from "./TrendingCard";
import SingleProduct from "../products/SingleProduct";
import useFetchDataForObject from "../../utils/useFetchDataForObject";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEffect, useState } from "react";

const TrendingList = () => {
    const { data, isLoading, error } = useFetchDataForObject("/phone/filter", null);
    const [productList, setProductList] = useState([]);

    const successAddCartItem = () => {
        toast.success("Thêm vào giỏ hàng thành công");
    };

    useEffect(() => {
        setProductList(data?.products);
    }, [data]);
    return (
        <div>
            <div>
                <h1 className='text-3xl md:text-4xl lg:text-5xl  break-words flex items-center '>Sản phẩm nổi bật</h1>
            </div>
            <section className='grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4 mt-10'>
                {productList?.slice(0, 8).map((item, idx) => {
                    return <SingleProduct key={idx} product={item} success={successAddCartItem}></SingleProduct>;
                })}
            </section>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default TrendingList;
