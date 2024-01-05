import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Modal from "../checkout/Modal";
import PriceCard from "./PriceCard";

const CartTotalCard = ({ cart }) => {
    const navigate = useNavigate();

    const [showModal, setShowModal] = useState(false);
    const handleCloseModal = () => {
        setShowModal(false);
    };
    const [coupon, setCoupon] = useState("");
    const [payMethod, setPayMethod] = useState([
        {
            name: "Giao hàng tại nhà",
            isSelect: false,
        },
        {
            name: "Thanh toán bằng các phương thức khác",
            isSelect: false,
        },
    ]);

    const handlePayMethodChange = (idx) => {
        const arr = [...payMethod];
        for (let i = 0; i < arr.length; i++) {
            arr[i].isSelect = false;
        }
        arr[idx].isSelect = true;
        setPayMethod(arr);
    };

    const [totalPriceOfCartProducts, setTotalPriceOfCartProducts] = useState(0);

    useEffect(() => {
        var temp = 0;
        cart.map((product) => {
            temp = temp + product?.price * product?.quantity;
            console.log(temp);
        });
        setTotalPriceOfCartProducts(temp);
    }, []);

    useEffect(() => {
        var temp = 0;
        cart.map((product) => {
            temp = temp + product?.price * product?.quantity;
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
            </div>
            {cart.map((product) => (
                <PriceCard key={product.pid} product={product} />
            ))}

            <hr />
            <div className='flex justify-between items-center'>
                <p className=' text-gray-600'>Tổng cộng</p>
                <p className='text-2xl'>{(totalPriceOfCartProducts * 1).toLocaleString("vi-VN")}₫</p>
            </div>

            <div className='w-full items-center justify-between'>
                <h1 className='text-xl mb-6' onClick={() => console.log(totalPriceOfCartProducts)}>
                    Chọn phương thức thanh toán
                </h1>
                <div className='flex flex-col gap-3'>
                    {payMethod.map((data, idx) => {
                        return (
                            <label className='flex cursor-pointer gap-3'>
                                <input
                                    type='radio'
                                    className='accent-current cursor-pointer'
                                    name={data.name}
                                    value={data.name}
                                    onChange={() => handlePayMethodChange(idx)}
                                    checked={data.isSelect}
                                />
                                {data.name}
                            </label>
                        );
                    })}
                </div>
            </div>

            <div className='w-full items-center justify-between'>
                <h1 className='text-xl mb-4' onClick={() => console.log(totalPriceOfCartProducts)}>
                    Nhập mã giảm giá
                </h1>
                <input
                    className='border-[1px] border-gray-200 px-3 py-2 rounded-lg w-full'
                    placeholder='VD: NAMMOI2024,...'
                    value={coupon}
                    onChange={(e) => {
                        setCoupon(e.target.value);
                    }}
                ></input>
            </div>

            <div className='w-full py-2 flex gap-4 items-center'>
                <button
                    className='btn-rounded-primary rounded-full flex items-center gap-2 md:text-sm lg:text-base'
                    onClick={() => {
                        setShowModal(true);
                    }}
                >
                    Tiếp tục thanh toán
                </button>
            </div>

            <ToastContainer></ToastContainer>
            <Modal showModal={showModal} setShowModal={handleCloseModal} totalPriceOfCartProducts={totalPriceOfCartProducts} coupon={coupon}></Modal>
        </section>
    );
};

export default CartTotalCard;
