import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { HiOutlineShoppingBag, HiShoppingBag } from "react-icons/hi";
import { BsBookmarkHeart, BsFillBookmarkHeartFill, BsStarFill } from "react-icons/bs";
import { BiUserCircle } from "react-icons/bi";
import { GiRoundStar } from "react-icons/gi";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addCartItems, getCartItems, getQuantity } from "../../store/cartReducer";
import { addFavoriteItem, getFavoriteItem, getCount } from "../../store/favoriteReducer";
import { getOnePhone, rate } from "../../api/phone";
import { StarRating } from "../../component";
import Comments from "../../component/products/Comments";
import { setAccessToken } from "../../store/authReducer";

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

    const [comments, setComments] = useState([]);
    const [commentInfo, setCommentInfo] = useState({
        pid: productId,
        star: 0,
        comment: "",
    });

    const [oneStar, setOneStar] = useState(0);
    const [twoStar, setTwoStar] = useState(0);
    const [threeStar, setThreeStar] = useState(0);
    const [fourStar, setFourStar] = useState(0);
    const [fiveStar, setFiveStar] = useState(0);

    const [inCartList, setInCartList] = useState(false);
    const [inFavoriteList, setInFavoriteList] = useState(false);

    useEffect(() => {
        getOnePhone(productId).then((data) => {
            console.log(data);
            if (data?.response) {
                if (data?.response?.status == 401) {
                    dispatch(setAccessToken(null));
                    window.alert("Phiên hoạt động đã hết hạn. Yêu cầu đăng nhập lại");
                    navigate("/login");
                }
            } else {
                setProductInfo(data.data);
                setTechnicalSpecification(data.data.technicalSpecifications);
                setComments(data.data.ratings);
            }
        });
    }, []);

    useEffect(() => {
        var one = 0;
        var two = 0;
        var three = 0;
        var four = 0;
        var five = 0;
        comments.map((data) => {
            if (data.star == 1) {
                one += 1;
            } else if (data.star == 2) {
                two += 1;
            } else if (data.star == 3) {
                three += 1;
            } else if (data.star == 4) {
                four += 1;
            } else if (data.star == 5) {
                five += 1;
            }
        });
        setOneStar(one);
        setTwoStar(two);
        setThreeStar(three);
        setFourStar(four);
        setFiveStar(five);
    }, [comments]);

    useEffect(() => {
        var temp_favorite = 0;
        favoriteItems?.map((item) => {
            if (productInfo?._id == item._id) {
                temp_favorite = -1;
            } else {
                temp_favorite += 1;
            }
        });
        if (temp_favorite != favoriteCount) {
            setInFavoriteList(true);
        }

        var temp_cart = 0;
        favoriteItems?.map((item) => {
            if (productInfo?._id == item._id) {
                temp_cart = -1;
            } else {
                temp_cart += 1;
            }
        });
        if (temp_cart != favoriteCount) {
            setInCartList(true);
        }
    }, [productInfo]);

    const handleChangeRating = (newRating) => {
        setCommentInfo((prev) => ({
            ...prev,
            star: newRating,
        }));
    };

    const handleComment = () => {
        toast.loading("Đang xử lý thông tin...");
        const response = rate(commentInfo).then((data) => {
            console.log(data);
            toast.dismiss();
            toast.success("Thêm bình luận thành công.");
        });
    };

    return (
        <div className='pt-5 sm:pt-3 pb-2'>
            <div className='w-full flex gap-4 mb-7'>
                <Carousel className='w-[45%] h-full'>
                    {productInfo?.imageLinks?.map((img, idx) => {
                        return (
                            <div key={idx} className='w-full h-full'>
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
                        <div className='text-3xl text-amber-600'>{(productInfo?.price * 1).toLocaleString("vi-VN")}₫</div>
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
                                    toast.success("Thêm vào giỏ hàng thành công.");
                                } else {
                                    navigate("/cart");
                                }
                            }}
                        >
                            {!inCartList ? (
                                <>
                                    <HiOutlineShoppingBag></HiOutlineShoppingBag>
                                    <div>Thêm vào giỏ hàng</div>
                                </>
                            ) : (
                                <>
                                    <HiShoppingBag></HiShoppingBag>
                                    <div>Xem chi tiết giỏ hàng</div>
                                </>
                            )}
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
                                    toast.success("Thêm vào mục yêu thích thành công.");
                                } else {
                                    navigate("/wishlist");
                                }
                            }}
                        >
                            {!inFavoriteList ? (
                                <>
                                    <BsBookmarkHeart></BsBookmarkHeart>
                                    <div>Thêm vào danh sách yêu thích</div>
                                </>
                            ) : (
                                <>
                                    <BsBookmarkHeart></BsBookmarkHeart>
                                    <div>Xem danh sách yêu thích</div>
                                </>
                            )}
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
                                value={fiveStar / comments.length}
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>{fiveStar} đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>4</div>
                            </div>
                            <progress
                                max='1'
                                value={fourStar / comments.length}
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>{fourStar} đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>3</div>
                            </div>
                            <progress
                                max='1'
                                value={threeStar / comments.length}
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>{threeStar} đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>2</div>
                            </div>
                            <progress
                                max='1'
                                value={twoStar / comments.length}
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>{twoStar} đánh giá</div>
                        </div>
                        <div className='flex gap-2 w-[100%]'>
                            <div className='flex gap-1 w-[30px]'>
                                <BsStarFill className='text-amber-400 mt-[2px]'></BsStarFill>
                                <div>{comments.length}</div>
                            </div>
                            <progress
                                max='1'
                                value={oneStar / comments.length}
                                className='mt-[3px] w-[70%] [&::-webkit-progress-bar]:rounded-lg [&::-webkit-progress-value]:rounded-lg [&::-webkit-progress-bar]:bg-slate-300 [&::-webkit-progress-value]:bg-green-400 [&::-moz-progress-bar]:bg-green-400 h-[14px]'
                            ></progress>
                            <div>{oneStar} đánh giá</div>
                        </div>
                    </div>
                </div>
                <div>
                    {comments.map((comment) => {
                        return <Comments info={comment}></Comments>;
                    })}
                    <div className='flex items-start gap-4 border-b-[1px] pb-6'>
                        <div className='flex h-[40px] w-[40px] items-center justify-center rounded-[50%] bg-gradient-to-b from-blue-700 to-blue-500 text-white'>
                            <BiUserCircle></BiUserCircle>
                        </div>
                        <div className='h-fit w-[85%]'>
                            <textarea
                                className='h-[100%] w-[100%] border-[1px] border-slate-200 p-2'
                                onChange={(e) => {
                                    setCommentInfo((prev) => ({
                                        ...prev,
                                        comment: e.target.value,
                                    }));
                                }}
                            ></textarea>
                            <div className='flex gap-2 text-base items-center'>
                                <span>Đánh giá: </span>
                                <ReactStars onChange={handleChangeRating} className='mt-[1px]'></ReactStars>
                            </div>
                        </div>
                        <div className='cursor-pointer rounded-lg bg-blue-600 px-2 py-1 font-medium text-white hover:bg-blue-500' onClick={handleComment}>
                            Gửi
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default ProductDetails;
