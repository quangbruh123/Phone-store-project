import React from "react";
import { useSelector } from "react-redux";

import { SingleProduct } from "../../component";
import emptyWish from "../../assets/empty-wish.gif";
import { getFavoriteItem, getCount } from "../../store/favoriteReducer";

const Wishlist = () => {
    const favoriteItems = useSelector(getFavoriteItem);

    const successAddCartItem = () => {
        toast.success("Thêm vào giỏ hàng thành công");
    };

    return (
        <div>
            {favoriteItems.length ? (
                <>
                    <h1 className='text-2xl py-6 font-semibold text-gray-800'>Danh sách yêu thích</h1>
                    <main className='grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4'>
                        {favoriteItems.map((item, idx) => (
                            <SingleProduct product={item} success={successAddCartItem} />
                        ))}
                    </main>
                </>
            ) : (
                <div className='h-[65vh] w-full flex flex-col items-center justify-center pt-3'>
                    <img src={emptyWish} alt='empty-wishlist' className='w-full xs:w-1/2 sm:w-1/3' />
                    <span className='font-sans text-xl  font-bold uppercase  tracking-wide text-gray-300'>Chẳng có gì hết!</span>
                    <p className='text-gray-400'>Hãy làm đầy danh sách yêu thích của bạn nào</p>
                </div>
            )}
        </div>
    );
};

export default Wishlist;
