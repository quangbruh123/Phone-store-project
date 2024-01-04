import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import emptyBag from "../../assets/empty-shopping-bag.png";
import CartTotalCard from "../../component/cart/CartTotalCard";
import { CartItemCard } from "../../component";
import { getQuantity, getCartItems, removeCartItems } from "../../store/cartReducer";
import { replaceNewCart, getCurrentUser } from "../../api/user";

const Cart = () => {
    const navigate = useNavigate();

    const cartItems = useSelector(getCartItems);
    const cartCount = useSelector(getQuantity);

    const handleUpdateCart = async () => {
        toast.loading("Đang xử lý thông tin...");
        console.log(cartItems);
        const response = await replaceNewCart(cartItems);
        if (response.status == 204) {
            toast.dismiss();
            toast.success("Đã lưu giỏ hàng thành công.");
        } else {
            toast.dismiss();
            toast.error("Đã xó lỗi xảy ra");
        }
    };

    return (
        <div className='py-2 '>
            {cartCount > 0 && (
                <div className='flex gap-3 mb-2'>
                    <h1
                        className='text-2xl font-bold p-3'
                        onClick={() => {
                            console.log(cartItems);
                        }}
                    >
                        Giỏ hàng({cartCount})
                    </h1>
                    <div className='px-3 rounded-lg border flex items-center cursor-pointer hover:bg-gray-200' onClick={handleUpdateCart}>
                        Lưu giỏ hàng
                    </div>
                </div>
            )}
            {cartCount != 0 ? (
                <div className='md:grid md:grid-cols-3 gap-5'>
                    <main className='md:col-span-2'>
                        {cartItems.map((product, idx) => (
                            <CartItemCard key={idx} product={product} index={idx} />
                        ))}
                    </main>
                    <CartTotalCard cart={cartItems} />
                </div>
            ) : (
                <div className='h-[60vh] w-full flex flex-col items-center justify-center  gap-3 '>
                    <img src={emptyBag} alt='empty bag' className='h-36 -rotate-12 mt-5 drop-shadow-lg' />
                    <div className='text-center'>
                        <h2 className='text-2xl font-bold'>Mua đê !!!!!!</h2>
                        <p className='text-sm text-gray-400'>Bạn chưa chọn món nào. Cùng thêm một vài sản phẩm nhé!!</p>
                    </div>

                    <button className='btn-rounded-secondary text-sm mt-5' onClick={() => navigate("/products")}>
                        Khám phá ngay
                    </button>
                </div>
            )}
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Cart;
