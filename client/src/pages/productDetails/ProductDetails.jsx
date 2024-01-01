import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill, BsStarFill } from "react-icons/bs";
import { GiRoundStar } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";

import { addCartItems, getCartItems, getQuantity } from "../../store/cartReducer";
import { addFavoriteItem, getFavoriteItem, getCount } from "../../store/favoriteReducer";
import { getOnePhone } from "../../api/phone";
import { StarRating } from "../../component";
import Comments from "../../component/products/Comments";

const ProductDetails = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const dispatch = useDispatch();
    const { productId } = useParams();

    const cartCount = useSelector(getQuantity);
    const favoriteCount = useSelector(getCount);
    const cartItems = useSelector(getCartItems);
    const favoriteItems = useSelector(getFavoriteItem);

    const [productInfo, setProductInfo] = useState({});
    const [technicalSpecifications, setTechnicalSpecification] = useState({});
    const [loading, setLoading] = useState(false);

    // useEffect(() => {
    //   (async () => {
    //     setLoading(true);
    //     try {
    //       const response = await getProductByIdService(productId);
    //     } catch (err) {
    //       console.log(err);
    //     } finally {
    //       setLoading(false);
    //     }
    //   })();
    // }, [allProducts]);

    useEffect(() => {
        const response = getOnePhone(productId).then((data) => {
            console.log(data);
            setProductInfo(data.data);
            setTechnicalSpecification(data.data.technicalSpecifications);
        });
    }, []);

    return (
        <div className='pt-5 sm:pt-3 pb-2'>
            <div className='w-full flex gap-4 mb-7'>
                <Carousel className='w-[45%] h-full'>
                    {productInfo?.imageLinks?.map((img, idx) => {
                        return (
                            <div className='w-full h-full'>
                                <img src={img} className='h-full w-full'></img>
                                <p className='legend'>
                                    {productInfo?.phoneName} {idx + 1}
                                </p>
                            </div>
                        );
                    })}
                </Carousel>
                <div className='w-[55%]'>
                    <div className='flex items-center justify-between border-b-[1px] border-gray-300 pb-1 mb-4'>
                        <div className='text-5xl font-bold w-full'>{productInfo?.phoneName}</div>
                        {/* <div className='flex gap-1 text-lg'>
                            <GiRoundStar className='text-yellow-400 ml-3 mt-[2px]'></GiRoundStar>
                            {productInfo?.avgRating}
                        </div> */}
                    </div>
                    <div className='text-justify mb-5'>{productInfo?.description}</div>
                    <div className='flex gap-2 items-center mb-3'>
                        <div className='font-bold text-2xl'>Giá sản phẩm:</div>
                        <div className='text-3xl text-amber-600'>{(productInfo?.price * 1000).toLocaleString("vi-VN")}₫</div>
                    </div>
                    <div className='font-semibold text-2xl mb-3'>Về sản phẩm</div>
                    <div className='mb-5'>
                        <ul>
                            <li className='p-3 bg-gray-200 flex items-center'>
                                <p className='w-[180px]'>Danh bạ: </p>
                                <div>{technicalSpecifications["Danh bạ:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-50 flex items-center'>
                                <p className='w-[180px]'>Hãng: </p>
                                <div>{technicalSpecifications["Hãng"]}</div>
                            </li>
                            <li className='p-3 bg-gray-200 flex items-center'>
                                <p className='w-[180px]'>Jack cắm tai nghe: </p>
                                <div>{technicalSpecifications["Jack cắm tai nghe:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-50 flex items-center'>
                                <p className='w-[180px]'>Màn hình: </p>
                                <div>{technicalSpecifications["Màn hình:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-200 flex items-center'>
                                <p className='w-[180px]'>Pin: </p>
                                <div>{technicalSpecifications["Pin:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-50 flex items-center'>
                                <p className='w-[180px]'>Radio FM: </p>
                                <div>{technicalSpecifications["Radio FM:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-200 flex items-center'>
                                <p className='w-[180px]'>Sim: </p>
                                <div>{technicalSpecifications["SIM:"]}</div>
                            </li>
                            <li className='p-3 bg-gray-50 flex items-center'>
                                <p className='w-[180px]'>Thẻ nhớ: </p>
                                <div>{technicalSpecifications["Thẻ nhớ:"]}</div>
                            </li>
                        </ul>
                    </div>
                    <div className='flex items-center gap-3'>
                        <div
                            className='px-4 py-2 border-[1px] border-black rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-gray-200 transition-all'
                            onClick={() => {
                                var temp = 0;
                                cartItems?.map((item) => {
                                    if (productInfo?._id == item._id) {
                                        temp = -1;
                                    } else {
                                        temp += 1;
                                    }
                                });
                                if (temp == cartCount) {
                                    dispatch(addCartItems(productInfo));
                                }
                            }}
                        >
                            <HiOutlineShoppingBag></HiOutlineShoppingBag>
                            <div>Thêm vào giỏ hàng</div>
                        </div>
                        <div
                            className='px-4 py-2 border-[1px] border-black bg-black text-white rounded-2xl flex items-center gap-2 cursor-pointer hover:bg-slate-900 transition-all'
                            onClick={() => {
                                var temp = 0;
                                favoriteItems?.map((item) => {
                                    if (productInfo?._id == item._id) {
                                        temp = -1;
                                    } else {
                                        temp += 1;
                                    }
                                });
                                if (temp == favoriteCount) {
                                    dispatch(addFavoriteItem(productInfo));
                                }
                            }}
                        >
                            <BsBookmarkHeart></BsBookmarkHeart>
                            <div>Thêm vào danh sách yêu thích</div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-full'>
                <div className='border-b-[1px] border-gray-200 font-bold text-2xl'>
                    Đánh giá và nhận xét {productInfo?.phoneName} ({productInfo?.totalRating})
                </div>
                <div className='flex py-4 border-b-[1px] border-gray-200 mb-5'>
                    <div className='border-r-[1px] border-gray-300 flex flex-col items-center justify-center w-[40%] py-5'>
                        <div>{productInfo?.avgRating}/5</div>
                        <div className='flex'>
                            <StarRating product={{ rating: productInfo?.avgRating }}></StarRating>
                        </div>
                        <div>{productInfo?.totalRating} đánh giá</div>
                    </div>
                    <div className='w-[60%] flex flex-col items-center justify-center pl-4 gap-3'>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>5</div>
                            </div>
                            <progress
                                max='1'
                                value='0.5'
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>0 đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>4</div>
                            </div>
                            <progress
                                max='1'
                                value='0.5'
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>0 đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>3</div>
                            </div>
                            <progress
                                max='1'
                                value='0.5'
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>0 đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>2</div>
                            </div>
                            <progress
                                max='1'
                                value='0.5'
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>0 đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>1</div>
                            </div>
                            <progress
                                max='1'
                                value='0.5'
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>0 đánh giá</div>
                        </div>
                    </div>
                </div>
                <div>
                    <Comments></Comments>
                    <Comments></Comments>
                    <Comments></Comments>
                    <Comments></Comments>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
