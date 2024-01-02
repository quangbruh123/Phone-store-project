import { GiRoundStar } from "react-icons/gi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router";
import { useSelector, useDispatch } from "react-redux";
import { getQuantity, addCartItems, getCartItems } from "../../store/cartReducer";
import { getCount, getFavoriteItem, addFavoriteItem } from "../../store/favoriteReducer";
import { useState, useEffect } from "react";

const SingleProduct = ({ product }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    var string = product?.price;

    const [inFavoriteList, setInFavoriteList] = useState(false);

    const favoriteCount = useSelector(getCount);
    const favoriteItems = useSelector(getFavoriteItem);

    useEffect(() => {
        var temp = 0;
        favoriteItems?.map((item) => {
            if (product?._id == item._id) {
                temp = -1;
            } else {
                temp += 1;
            }
        });
        if (temp != favoriteCount) {
            setInFavoriteList(true);
        }
    }, []);

    return (
        <div
            className='flex flex-col xs:flex-row sm:flex-col  bg-white/[0.5] rounded-lg shadow-md border-2 border-black/[0.05] overflow-hidden
      cursor-pointer
      transition-transform
      hover:scale-[1.02] hover:shadow-lg'
        >
            <div className='w-full h-[190px] py-2 px-3' onClick={() => navigate(`/product/${product?._id}/${product?.slug}`)}>
                <img src={product?.imageLinks[0]} className='w-[100%] h-[100%]'></img>
            </div>
            <div className='p-3 border-b-[1px] border-gray-200'>
                <div className='font-semibold text-xl'>{product?.phoneName}</div>
                <div className='flex gap-2 items-center'>
                    <div className='text-amber-600 font-bold py-3'>{string.toLocaleString("vi-VN")}₫</div>
                    {/* <div className='text-gray-500 font-bold line-through py-3'>Gía giảm</div> */}
                </div>
            </div>
            <div className='flex items-center justify-between py-4 w-full'>
                <div className='flex gap-1'>
                    <GiRoundStar className='text-yellow-400 ml-3 mt-[2px]'></GiRoundStar>
                    {product?.avgRating}
                </div>
                <div
                    onClick={() => {
                        var temp = 0;
                        favoriteItems?.map((item) => {
                            if (product?._id == item._id) {
                                temp = -1;
                            } else {
                                temp += 1;
                            }
                        });
                        if (temp == favoriteCount) {
                            dispatch(addFavoriteItem(product));
                            setInFavoriteList(true);
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
