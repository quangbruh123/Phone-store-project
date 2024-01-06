import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { GiRoundStar } from "react-icons/gi";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { getQuantity, addCartItems, getCartItems } from "../../store/cartReducer";
import { getCount, getFavoriteItem, addFavoriteItem } from "../../store/favoriteReducer";
import StarRating from "./StarRating";

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    var string = product?.price;

    const [inFavoriteList, setInFavoriteList] = useState(false);
    const [inCartList, setInCartList] = useState(false);

    const favoriteCount = useSelector(getCount);
    const favoriteItems = useSelector(getFavoriteItem);
    const cartItems = useSelector(getCartItems);
    const cartCount = useSelector(getQuantity);

    useEffect(() => {
        var temp = 0;
        favoriteItems?.map((item) => {
            if (product?._id == item.pid) {
                temp = -1;
            } else {
                temp += 1;
            }
        });
        if (temp != favoriteCount) {
            setInFavoriteList(true);
        }

        var temp1 = 0;
        cartItems?.map((item) => {
            if (product._id == item.pid) {
                temp1 = -1;
            } else {
                temp1 += 1;
            }
        });
        if (temp1 != cartCount) {
            setInCartList(true);
        }
    }, []);

    return (
        <div
            className='flex flex-col xs:flex-row sm:flex-col bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg justify-between'
        >
            <div className='flex flex-col'>
                <div className='w-full h-[190px] py-2 px-3' onClick={() => navigate(`/product/${product?._id}/${product?.slug}`)}>
                    <img src={product?.imageLinks[0]} className='w-[100%] h-[100%]'></img>
                </div>
                <div className='p-3'>
                    <div className='font-semibold text-xl line-clamp-2'>{product?.phoneName}</div>
                    {product?.avgRating >= 4 ? (
                        <div className='flex gap-1'>
                            <div className='font-semibold'>{product?.avgRating}</div>
                            <GiRoundStar className='text-amber-300 mt-[2px]'></GiRoundStar>
                            <div className='font-semibold text-sm text-gray-300 mt-[3px]'>Đánh giá</div>
                        </div>
                    ) : null}

                    <div className='flex gap-2 items-center'>
                        <div className='text-amber-600 font-bold py-3'>{string.toLocaleString("vi-VN")}₫</div>
                        {/* <div className='text-gray-500 font-bold line-through py-3'>Gía giảm</div> */}
                    </div>
                </div>
            </div>

            <div className='flex items-center justify-between py-4 w-full border-t-[1px] border-gray-200'>
                <div
                    className='ml-2 px-4 py-2 border-[1px] border-black rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-all text-sm'
                    onClick={() => {
                        var temp = 0;
                        cartItems?.map((item) => {
                            if (product?._id == item.pid) {
                                temp = -1;
                            } else {
                                temp += 1;
                            }
                        });
                        if (temp == cartCount) {
                            dispatch(
                                addCartItems({
                                    pid: product._id,
                                    product: product._id,
                                    phoneName: product.phoneName,
                                    quantity: 1,
                                    phoneStorage: product.phoneStorage[0],
                                    price: product.price,
                                    thumb: product.imageLinks[0],
                                })
                            );
                            setInCartList(true);
                            toast.success("Thêm vào giỏ hàng thành công");
                        } else {
                            navigate("/cart");
                        }
                    }}
                >
                    {!inCartList ? (
                        <>
                            <div>Thêm vào giỏ hàng</div>
                        </>
                    ) : (
                        <>
                            <div>Xem chi tiết giỏ hàng</div>
                        </>
                    )}
                </div>
                <div
                    onClick={() => {
                        var temp = 0;
                        favoriteItems?.map((item) => {
                            if (product?._id == item.pid) {
                                temp = -1;
                            } else {
                                temp += 1;
                            }
                        });
                        if (temp == favoriteCount) {
                            dispatch(addFavoriteItem(product));
                            setInFavoriteList(true);
                            toast.success("Thêm vào danh sách yêu thích thành công");
                        }
                    }}
                >
                    {!inFavoriteList ? (
                        <BsBookmarkHeart className='text-xl hover:text-rose-600 hover:shadow-md transition mr-3'></BsBookmarkHeart>
                    ) : (
                        <BsFillBookmarkHeartFill className='text-xl hover:text-rose-600 hover:shadow-md transition mr-3'></BsFillBookmarkHeartFill>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;
