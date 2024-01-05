import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BsBookmarkHeart } from "react-icons/bs";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { MdOutlineExplore } from "react-icons/md";
import { FaCaretDown, FaUser, FaHandPointRight, FaCashRegister } from "react-icons/fa";
import { CiLogout } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";

import { getQuantity } from "../../store/cartReducer";
import { getCount } from "../../store/favoriteReducer";
import { RxHamburgerMenu } from "react-icons/rx";
import defaultUser from "../../assets/defaultUser.png";
import MenuDropdown from "./MenuDropdown";
import Logo from "./Logo";
import { getAccessToken, getUserInfo, signOut } from "../../store/authReducer";
import Search from "../filters/Search";
import handleRole from "../../utils/handleRole";

const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    // Biến lưu token của người dùng sau khi đăng nhập
    const token = useSelector(getAccessToken);
    const userInfo = useSelector(getUserInfo);

    // Biến lưu số lượng lưu trữ trong cart và wishlist
    const cartCount = useSelector(getQuantity);
    const favoriteCount = useSelector(getCount);

    const [dropdown, setDropdown] = useState(false);

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [colorChange, setColorChange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 80) {
            setColorChange(true);
        } else {
            setColorChange(false);
        }
    };
    useEffect(() => {
        window.addEventListener("scroll", changeNavbarColor);

        return () => {
            window.removeEventListener("scroll", () => {});
        };
    }, []);

    return (
        <nav
            className={`flex flex-col sm:flex-row py-3 max-w-screen mb-3 fixed left-0 right-0 px-[4%] md:px-[10%] bg-[--theme-color] ${
                colorChange ? "shadow-sm  drop-shadow-sm" : ""
            } z-10 transition delay-75 ease-in-out`}
        >
            <div className='flex justify-between w-full items-center'>
                <section className='relative flex items-center'>
                    <Logo />
                </section>
                <div className='hidden  sm:block sm:w-1/3 relative'>
                    <Search />
                </div>

                <section className='flex items-center'>
                    {token ? (
                        <div
                            className='flex gap-2 items-center relative cursor-pointer'
                            onClick={() => {
                                setDropdown(true);
                            }}
                        >
                            <div className='flex items-center gap-1'>
                                <div>Xin chào, </div>
                                <div className='font-bold'>{userInfo?.name}</div>
                            </div>
                            <FaCaretDown />
                            <Link to='/profile'>
                                <img
                                    className='rounded-full border-2 bg-yellow-300 hover:bg-yellow-500 cursor-pointer'
                                    src={defaultUser}
                                    alt='userProfileImage'
                                    width={40}
                                />
                            </Link>
                            {dropdown && (
                                <div
                                    className='absolute top-12 bg-white overflow-clip rounded-lg shadow-lg w-[240px]'
                                    onMouseLeave={() => {
                                        setDropdown(false);
                                    }}
                                >
                                    <div className='flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-gray-300' onClick={() => navigate("/profile")}>
                                        <FaUser></FaUser>
                                        <div>Thông tin tài khoản</div>
                                    </div>
                                    {handleRole(token) && (
                                        <div className='flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-gray-300' onClick={() => navigate("/admin")}>
                                            <FaHandPointRight></FaHandPointRight>
                                            <div>Chuyển sang trang quản lý</div>
                                        </div>
                                    )}
                                    <div
                                        className='flex cursor-pointer items-center gap-4 px-5 py-4 hover:bg-gray-300'
                                        onClick={() => navigate("/user-order-list")}
                                    >
                                        <FaCashRegister></FaCashRegister>
                                        <div>Thông tin các đơn hàng của bạn.</div>
                                    </div>
                                    <div
                                        className='flex cursor-pointer items-center gap-4 px-5 py-4 font-semibold text-red-600 hover:bg-gray-300'
                                        onClick={() => {
                                            dispatch(signOut());
                                            navigate("/login");
                                        }}
                                    >
                                        <CiLogout></CiLogout>
                                        <div>Đăng xuất</div>
                                    </div>
                                </div>
                            )}
                        </div>
                    ) : (
                        <div
                            className='cursor-pointer hover:bg-gray-100 text-amber-600 text-lg py-2 px-2 rounded-lg font-bold'
                            onClick={() => {
                                navigate("/login");
                            }}
                        >
                            Đăng nhập
                        </div>
                    )}

                    <ul className=' hidden md:flex justify-between text-2xl ps-1'>
                        <li
                            className='relative bg-gray-200  p-2 rounded-full hover:bg-yellow-800 hover:text-white cursor-pointer mx-2 transition shadow-sm'
                            onClick={() => navigate("/wishlist")}
                        >
                            <BsBookmarkHeart />
                            {token && favoriteCount > 0 && (
                                <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-600 border-2 border-[--theme-color] rounded-full -top-2 -right-2 '>
                                    {favoriteCount}
                                </div>
                            )}
                        </li>
                        <li
                            className='relative bg-yellow-500 text-white p-2 rounded-full hover:bg-yellow-800 cursor-pointer mx-2 transition shadow-sm'
                            onClick={() => navigate("/cart")}
                        >
                            <HiOutlineShoppingBag />
                            {token && cartCount > 0 && (
                                <div className='absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-rose-600 border-2 border-[--theme-color] rounded-full -top-2 -right-2 '>
                                    {cartCount}
                                </div>
                            )}
                        </li>
                    </ul>
                    <section className='md:hidden cursor-pointer relative'>
                        <RxHamburgerMenu className='text-lg' onClick={() => setIsMenuOpen(!isMenuOpen)} />
                        {isMenuOpen && <MenuDropdown navigate={navigate} />}
                    </section>
                </section>
            </div>

            <section className='mt-4 sm:hidden relative'>{/* <Search /> */}</section>
        </nav>
    );
};

export default Navbar;
