import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import PriceCard from "./PriceCard";

const CartTotalCard = ({ cart }) => {
    const navigate = useNavigate();

    const [totalPriceOfCartProducts, setTotalPriceOfCartProducts] = useState(0);

    useEffect(() => {
        var temp;
        cart.map((product) => {
            temp = product?.price * product?.count;
            console.log(temp);
        });
        setTotalPriceOfCartProducts(temp);
    }, []);

    useEffect(() => {
        var temp;
        cart.map((product) => {
            temp = product?.price * product?.count;
            console.log(temp);
        });
        setTotalPriceOfCartProducts(temp);
    }, [cart]);

    return (
        <section className='md:col-span-1 py-7 px-7 rounded-md shadow-sm bg-white/[0.7] flex flex-col gap-6 w-full h-min'>
            <div className='flex w-full items-center justify-between'>
                <h1 className='text-xl' onClick={() => console.log(totalPriceOfCartProducts)}>
                    Chi tiết giỏ hàng
                </h1>
                <div className='px-3 py-2 rounded-lg border flex items-center cursor-pointer'>Lưu giỏ hàng</div>
            </div>
            {cart.map((product) => (
                <PriceCard key={product._id} product={product} />
            ))}

            <hr />
            <div className='flex justify-between items-center'>
                <p className=' text-gray-600'>Tổng cộng</p>
                <p className='text-2xl'>{(totalPriceOfCartProducts * 1).toLocaleString("vi-VN")}₫</p>
            </div>

            <div className='w-full py-2   flex gap-4 items-center'>
                <button
                    className='btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base'
                    onClick={() => {
                        // setisOrderPlaced(true);
                        // setTimeout(() => {
                        //   navigate("/checkout", {
                        //     state: "cart",
                        //   });
                        // }, 100);
                    }}
                >
                    Tiếp tục thanh toán
                </button>
            </div>
            <ToastContainer></ToastContainer>
        </section>
    );
};

export default CartTotalCard;
