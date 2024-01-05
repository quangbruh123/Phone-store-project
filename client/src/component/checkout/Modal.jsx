import { useState } from "react";
import { useNavigate } from "react-router";
import { AiOutlineClose } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";

import Orders from "../../pages/Order/Orders";
import PriceDetailsCard from "./PriceDetailsCard";
import PriceCard from "../cart/PriceCard";
import OrderSummary from "./OrderSummary";
import { getUserInfo } from "../../store/authReducer";
import { getCartItems } from "../../store/cartReducer";
import spinningLoader from "../../assets/spinning-circles.svg";
import appLogo from "../../assets/thugGlasses.png";
import { createOrder } from "../../api/order";

const Modal = ({ showModal, setShowModal, totalPriceOfCartProducts, coupon }) => {
    const dispatch = useDispatch();
    const [disableBtn, setDisableBtn] = useState(false);
    const navigate = useNavigate();

    const cartItems = useSelector(getCartItems);
    const userInfo = useSelector(getUserInfo);
    console.log(userInfo);
    console.log(cartItems);

    const clickHandler = () => {
        setDisableBtn(true);
        setTimeout(() => {
            setShowModal(false);
            setDisableBtn(false);
            createOrder(coupon).then((data) => {
                if (data.status == 201) {
                    navigate("/orders");
                } else {
                    window.alert("Giao dịch thất bại. Xin hãy liên lạc với bộ phận bán hàng");
                }
            });
        }, 1000);
    };

    return (
        <>
            {showModal ? (
                <>
                    <div className='transition justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none'>
                        <div className='relative w-auto my-6 mx-auto max-w-3xl'>
                            <div className='border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none'>
                                <div className='flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t bg-amber-100 pt-6'>
                                    <h3 className='text-xl font-semibold'>Chi tiết đặt hàng</h3>
                                    <button className='p-1' onClick={() => setShowModal()}>
                                        <AiOutlineClose />
                                    </button>
                                </div>

                                {/* <OrderSummary /> */}
                                <div className='px-7 rounded-md shadow-sm bg-gray-50 flex flex-col gap-2 min-w-[25rem] w-full h-min pb-2'>
                                    <h1 className='text-sm font-semibold text-gray-700 ms-4 mt-4'>Danh sách đặt hàng</h1>
                                    {cartItems.map((product) => (
                                        <PriceCard key={product.pid} product={product} />
                                    ))}
                                    <h1 className='text-sm font-semibold text-gray-700 ms-4 mt-4'>Thông tin khách hàng</h1>
                                    <div className='border-[1px] border-gray-200 px-3 py-4 rounded-lg'>
                                        <div className='text-lg font-semibold'>{userInfo.name}</div>
                                        <div className='text-base font-medium text-gray-500'>Email: {userInfo.email}</div>
                                        <div className='text-base font-medium text-gray-500'>Số điện thoại: {userInfo.phoneNumber}</div>
                                    </div>
                                    <hr></hr>
                                    <PriceDetailsCard
                                        totalItems={cartItems.length}
                                        actualPriceOfCart={totalPriceOfCartProducts}
                                        totalPriceOfCartProducts={totalPriceOfCartProducts}
                                        coupon={coupon}
                                    />
                                    <hr />
                                    <div className='flex justify-between items-center'>
                                        <p className=' text-gray-600'>Total</p>
                                        <p className='text-2xl'>{(totalPriceOfCartProducts * 1).toLocaleString("vi-VN")}₫</p>
                                    </div>
                                </div>

                                <div className='flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b'>
                                    <button
                                        disabled={disableBtn}
                                        className='btn-rounded-primary bg-black w-1/2 text-sm ease-linear transition-all duration-150 h-10 flex justify-center items-center
                    disabled:cursor-wait'
                                        type='button'
                                        onClick={clickHandler}
                                    >
                                        {disableBtn ? <img src={spinningLoader} alt='' height={20} /> : <span>Xác nhận thanh toán</span>}
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='opacity-25 fixed inset-0 z-40 bg-black'></div>
                </>
            ) : null}
        </>
    );
};

export default Modal;
