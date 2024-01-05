import { Outlet } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import Navbar from "../component/navbar/Navbar";
import { Footer } from "../component";
import { setCartItems } from "../store/cartReducer";
import { getCurrentUser } from "../api/user";

const PublicLayout = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        const response = getCurrentUser().then((data) => {
            console.log(data);
            var cart = [];
            data.data.cart.map((data) => {
                cart.push({
                    pid: data.product._id,
                    phoneName: data.product.phoneName,
                    quantity: data.quantity,
                    phoneStorage: data.phoneStorage,
                    price: data.price,
                    thumb: data.thumb,
                });
            });
            const payload = {
                cart: cart,
                quantity: data.data.cart.length,
            };
            dispatch(setCartItems(payload));
        });
    }, []);
    return (
        <div className='px-[4%] md:px-[10%] pb-2'>
            <Navbar></Navbar>
            <div className='pt-32 sm:pt-20 min-h-screen'>
                <Outlet></Outlet>
            </div>
            <Footer />
        </div>
    );
};

export default PublicLayout;
